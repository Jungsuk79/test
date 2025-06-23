<template>
  <div
    v-scroll="scroll"
    allowFullscreen="true"
    class="video-player"
    :class="{paused : paused, muted : muted, active : active, 'not-played' : notPlayed, 'hide-gui': hideGui}"
    :style="{'padding-top' : ratio+'%', 'background-image':'url('+poster+')'}"
  >
    <div v-if="initiated && !youtube" class="vp-wrap">
      <video playsinline :poster="poster" :autoplay="autoplay" :muted="muted===true" :preload="preload" :loop="loop" :controls="(controls && !hideGui)" controlsList="nodownload"><!-- 221213 video : :controls 조건 변경 -->
        <source :src="path" :type="isHls ? 'application/vnd.apple.mpegurl' : 'video/mp4'" />
      </video>
      <div v-if="!controls && !hideGui" class="vp-control"><!-- 221213 video : v-if 변경 --><!--20221208 controls 비노출-->
        <div class="vp-btns">
          <button class="vp-btn vp-play-btn" @click.stop="playClick"></button>
          <button class="vp-btn vp-mute-btn" @click.stop="muteClick"></button>
          <!-- <button class="vp-btn vp-fullscreen-btn" @click.stop="fullscreenClick"></button> -->
        </div>
        <div class="vp-time">
          <div class="vp-current">{{curtime | time}}</div>
          <div class="vp-duration">{{duration | time}}</div>
        </div>
        <div class="vp-progress"><div class="vp-bar" :style="{width:percent+'%'}"></div></div>
      </div>
      <div v-if="!controls && !hideGui" class="vp-cover" @click.stop="activate"></div><!-- 221213 video : v-if 변경 --><!--20221208 controls 비노출-->
    </div>
    <div v-if="initiated && youtube" :id="'ytplayer'+_uid" class="vp-wrap">youtube</div>
    <button v-if="!initiated" class="vp-btn vp-init-btn" @click.stop="initUI">
      <div v-if="time>0" class="vp-duration">{{time | time}}</div>
    </button>
  </div>
</template>

<script>
import EventBus from '~/api/common/EventBus'

export default {
  components: {
  },
  props: {
    path: {
      type: String,
      default: () => {
        return ''
      },
    },
    poster: {
      type: String,
      default: () => {
        return ''
      },
    },
    youtube: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    autoPlay: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    playOnScroll: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    preload: {
      type: String,
      default: () => {
        return "none"
      }
    },
    loop: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    videoRatio: {
      type: Number,
      default: () => {
        return 0
      }
    },
    mute: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    time: {
      type: Number,
      default: () => {
        return 0
      }
    },
    controls: {
      type: Boolean,
      default: () => {
        return true // 221213 video : false > true 변경
      }
    },
    hideGui: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    /* 스크롤시, 다른 영상 재생시 멈추지 않는 옵션 */
    nonStop: {
      type: Boolean,
      default: () => {
        return false
      }
    },
  },
  data: () => ({
    $player: null,
    $video: null,
    $hls: null,
    isHls: false,
    url: "",
    duration: 0,
    curtime: 0,
    percent: 0,
    ratio: 56.25,
    paused: true,
    muted: false,
    active: false,
    notPlayed: true,
    activeTimer : -1,
    initiated: false,
    autoplay: false,
    ytPlayer: null,
    fullscreen: false,
    $playOnScroll: false,
    hlsSetInterval : -1, // 230125 메인 : 추가
  }),

  created(){
    const me = this
    me.muted = me.mute
    if(me.autoPlay === true){
      me.muted = true
      me.autoplay = true
    }
    if(me.playOnScroll === true){
      me.$playOnScroll = true
      me.muted = true
    }
    if(me.videoRatio > 0){
      me.ratio = me.videoRatio
    }
    if(me.playOnScroll && !me.nonStop){ // 230217 비디오 : 조건 me.playOnScroll 추가
      EventBus.$on("videoPlayed", me.pauseVideo)
    }
  },

  mounted(){
    const me = this
    me.$player = me.$el
    
    if(me.path.includes(".m3u8")){
      me.isHls = true
      me.initHls()
    }
    if(me.autoplay){
      me.initUI()
    }

    if(me.$playOnScroll){
      me.$nextTick(me.scroll)
    }
  },

  methods: {
    initUI(){
      const me = this
      me.initiated = true
      EventBus.$emit("videoPlayed", me._uid)
      me.$nextTick(function(){
        me.autoplay = true
        if(me.youtube){
          me.initYoutube()
        }else{
          me.initVideo()
        }
      })
    },

    initHls(){
      const me = this
      try{
        me.$hls = new window.Hls()
      }catch(e){
        if(document.querySelector("#hlsScriptTag")){
          setTimeout(function(){
            me.initHls()
          }, 200)
          return
        }

        const script = document.createElement('script')
        script.setAttribute('src', '/scripts/hls.js',)
        script.setAttribute('id', 'hlsScriptTag')
        script.setAttribute('async', '')
        script.onload = function () {
          me.initHls()
        }
        document.head.appendChild(script)
      }
    },

    /* video */
    initVideo(){
      const me = this
      const vp = me.$player

      me.$video = vp.querySelector("video")
      const v = me.$video

      v.addEventListener("play", me.playStateChange)
      v.addEventListener("pause", me.playStateChange)
      v.addEventListener("ended", me.playStateChange)
      v.addEventListener("timeupdate", me.progressChange)
      v.addEventListener("durationchange", me.progressChange)
      v.addEventListener("volumechange", me.volumeChange)
      v.addEventListener("loadedmetadata", me.loadedMetaData)
      vp.addEventListener("fullscreenchange", me.fullscreenChange)
      vp.addEventListener("webkitfullscreenchange", me.fullscreenChange)

      me.paused = v.paused
      me.muted = v.muted

      me.loadedMetaData()
      me.activate()

      // 230125 메인 : 수정 Start
      if(me.isHls){ // 230214 if 추가
        clearInterval(me.hlsSetInterval)
        me.hlsSetInterval = setInterval(function(){
          if(window.Hls){
            clearInterval(me.hlsSetInterval)
            const Hls = window.Hls
            if(me.isHls){
              me.$hls.loadSource(me.path);
              me.$hls.attachMedia(me.$video)
              me.$hls.on(Hls.Events.MEDIA_ATTACHED, function(){
                me.$video.play()
              })
            }
          }
        },100)
      }
      // 230125 메인 : 수정 End
    },

    /* youtube */
    initYoutube(){
      console.log("init youtube")
      const me = this

      if(document.getElementById("youTubeAPIScript") === null){
        window.onYouTubeIframeAPIReady = function(){
          me.initYTPlayer()
        }

        const tag = document.createElement('script')
        tag.id = "youTubeAPIScript"
        tag.src = "https://www.youtube.com/iframe_api"
        document.getElementsByTagName("head")[0].appendChild(tag)
      }else{
        me.initYTPlayer()
      }
    },
    initYTPlayer(){
      const me = this
      me.ytPlayer = new window.YT.Player("ytplayer" + me._uid, {
        height: "100%",
        width: "100%",
        videoId: me.path,
        events: {
          "onReady": me.ytPlayerReady,
          "onStateChange": me.ytPlayerStateChange
        },
        playerVars:{
          autoplay: 1,
          playsinline: 1,
          loop: (me.loop ? 1 : 0),
          playlist:me.path,
        }
      });
    },
    ytPlayerReady(){
      const me = this
      me.ytPlayer.playVideo()
    },
    ytPlayerStateChange(e){
      const me = this

      switch(e.data){
        case window.YT.PlayerState.PLAYING:
          me.notPlayed = false
          me.paused = false
          EventBus.$emit("videoPlayed", me._uid)
          break;
        case window.YT.PlayerState.ENDED:
        case window.YT.PlayerState.UNSTARTED:
        case window.YT.PlayerState.PAUSED:
          me.paused = true
          break;
        // no default
      }
    },

    /* video event */
    playStateChange(e){
      const me = this
      const v = me.$video
      me.paused = v.paused
      switch(e.type){
      case "play":
        me.notPlayed = false
        EventBus.$emit("videoPlayed", me._uid)
        break;
      // no default
      }
    },
    progressChange(){
      const me = this
      const v = me.$video
      me.curtime = Math.floor(v.currentTime)
      me.duration = Math.floor(v.duration)

      if(me.duration === 0){
        me.percent = 0
      }else{
        me.percent = me.curtime / me.duration * 100
      }
    },
    volumeChange(){
      const me = this
      const v = me.$video
      me.muted = v.muted
    },
    loadedMetaData(){
      const me = this
      const v = me.$video
      if(v.videoWidth > 0 && me.videoRatio === 0){
        me.ratio = Math.floor(v.videoHeight / v.videoWidth * 10000) / 100
      }
    },
    fullscreenChange(e){
      const me = this
      me.fullscreen = ((document.fullscreenElement !== null) || (document.webkitFullscreenElement !== null))
    },

    /* button event */
    playClick(e){
      const me = this
      const v = me.$video

      if(e){
        me.$playOnScroll = false
      }
      me.notPlayed = false
      if(me.paused){
        try{
          v.play()
        }catch(e){}
      }else{
        v.pause()
      }
      me.activate()
    },
    playVideo(){
      const me = this
      if(me.initiated === false){
        me.initUI()
      }else if(me.youtube){
        me.ytPlayer.playVideo()
      }else{
        me.playClick()
      }
    },
    pauseVideo(uid){
      const me = this
      const v = me.$video
      if(uid !== me._uid && !me.paused){
        if(me.youtube){
          me.ytPlayer.pauseVideo()
        }else{
          v.pause()
          me.deactivate()
        }
      }
    },
    playPointStart(){
      const me = this
      const v = me.$video
      v.currentTime = 0
    },
    muteClick(){
      const me = this
      const v = me.$video

      if(v.muted){
        v.muted = false
      }else{
        v.muted = true
      }
      me.activate()
    },
    fullscreenClick(){
      const me = this
      const vp = me.$player
      if(me.fullscreen){
        if(document.exitFullscreen){
          document.exitFullscreen()
        }else if(document.webkitExitFullscreen){
          document.webkitExitFullscreen()
        }
      }else if(!me.fullscreen){
        if(vp.requestFullscreen){
          vp.requestFullscreen()
        }else if(vp.webkitRequestFullscreen){
          vp.webkitRequestFullscreen()
        }
      }
      me.activate()
    },

    activate(skip){
      const me = this
      clearTimeout(me.activeTimer)
      me.active = true
      if(skip !== true){
        me.activeTimer = setTimeout(me.deactivate, 5000)
      }
    },
    deactivate(){
      const me = this
      clearTimeout(me.activeTimer)
      me.active = false
    },

    scroll(){
      const me = this
      const vp = me.$player
      const scr = window.scrollY
      const btm = scr + window.innerHeight
      const ot = me.offsetTop(vp) + vp.offsetHeight / 2
      if(me.$playOnScroll && !me.paused && (scr > ot || btm < ot)){ // 230217 비디오 : me.$playOnScroll && <-- 추가
        if(!me.nonStop){
          me.pauseVideo()
        }
      }else if(me.$playOnScroll && me.paused && scr <= ot && btm >= ot) {
        me.playVideo()
      }
    },

  },
}
</script>

<style lang="scss"></style>