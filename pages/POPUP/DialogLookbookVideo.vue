<template>
  <DialogBasic class="popup-lookbookVideo" header-title="룩북 동영상 보기" :width="540" @hide="closeDialog">
    <template #body>
      <div class="inner">
        <VideoPlayer
          path="https://img.thehandsome.com/md/publish/dummy/pc/lookbook-video.mp4"
          :auto-play="true"
          :loop="true"
          :mute="true"
          :hide-gui="true"
        ></VideoPlayer>
      </div>
    </template>
  </DialogBasic>
</template>
<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'
import VideoPlayer from '~/components/common/VideoPlayer'

export default {
  components: {
    DialogBasic,
    VideoPlayer
  },
  props: {
    popupOpen: {
      type: Boolean,
      default : false
    },
  },
  watch: {
    popupOpen(){
      const me = this
      if(me.popupOpen){
        me.pauseVideo()
        me.playVideo()
      }else{
        me.pauseVideo()
        setTimeout(()=>{me.playPointStart()},200)
      }
    }
  },
  methods: {
    playVideo(){ // video play
      const me = this
      me.$nextTick(function(){
        const vp = me.$el.querySelector(".popup-lookbookVideo .video-player")
        vp.__vue__.playVideo()
      })
    },
    pauseVideo(){ // video pause
      const me = this
      me.$nextTick(function(){
        const vp = me.$el.querySelector(".popup-lookbookVideo .video-player")
        vp.__vue__.pauseVideo()
      })
    },
    playPointStart(){ // video current time 0
      const me = this
      me.$nextTick(function(){
        const vp = me.$el.querySelector(".popup-lookbookVideo .video-player")
        vp.__vue__.playPointStart()
      })
    },
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss">
</style>
