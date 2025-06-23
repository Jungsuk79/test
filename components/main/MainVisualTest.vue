<template>
  <div class="main-unit-wide main-visual">
    <h1 class="test-tit">{{data.title}}</h1>
    <!-- eslint-disable -->
    <Swiper
      :options="{ 
        loop:true,
        /* autoplay: {
          delay: 5000,
        }, */
        watchOverflow: true, // 230109 상단배너 : 추가
        on: {
          init: swiperInit,
          sliderFirstMove: stopPlayingVideo,
          touchEnd : playActiveVideo,
          transitionEnd: transitionEndFn,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: false,
          renderBullet: renderBullet,
          type: 'bullets'
        },
        navigation: {
          nextEl: '.mv-next',
          prevEl: '.mv-prev',
        },
      }"
      class="mv-swiper"
    >
      <SwiperSlide 
        v-for="item, idx in data.list" :key="idx" 
        class="mv-slide mv-slide-test1" 
        :class="{'hide-slide':idx!==0 && idx!==data.list.length-1 && slideHide}"
      ><!--  230209 상단배너 : hide-slide 클래스 추가 -->
        <!-- 텍스트, 화보, 모션 -->
        <div v-if="item.type!=='video'">
          <div v-background-image="{url:item.image_url}" class="mv-image"></div>
          <!-- 텍스트 -->
          <div v-if="item.type==='text'" class="mv-text">
            <div class="mv-title" v-html="item.title"></div><!-- [퍼블수정]23.02.13 bo 등록시 color 변경 삭제-->
            <div class="mv-subtitle" v-html="item.subtitle"></div><!-- [퍼블수정]23.02.13 bo 등록시 color 변경 삭제-->
          </div>
          <!-- 텍스트 -->
          <!-- 모션1 -->
          <div v-if="item.type==='motion1'" class="mv-motion1">
            <div class="mvm-text">
              <div v-for="txt, tdx in item.text" :key="tdx" class="mvmt">
                <span><em>&nbsp;{{txt}}&nbsp;</em></span><!-- [퍼블수정]23.02.13 bo 등록시 color 변경 삭제-->
              </div>
            </div>
          </div>
          <!-- 모션1 -->
          <!-- 모션2 -->
          <div v-if="item.type==='motion2'" class="mv-motion2">
            <div class="mvm-text">
              <div v-for="txt, tdx in item.text" :key="tdx" class="mvmt" :class="['mvmt'+(tdx+1), tdx>=2 ? 'mvmtv' : '']">
                <div><span :class="{reverse:tdx===1}"><em v-for="i in 4" :key="i">{{txt}}&nbsp;</em></span></div><!-- [퍼블수정]23.02.13 bo 등록시 color 변경 삭제-->
              </div>
            </div>
          </div>
          <!-- 모션2 -->
        </div>
        <!-- 텍스트, 화보, 모션 -->
        <!-- 비디오 -->
        <div v-if="item.type==='video'">
          <VideoPlayer
            :path="item.video_url"
            :poster="item.image_url"
            :loop="true"
            :auto-play="idx===0"
            :mute="true"
            :hide-gui="true"
            :video-ratio="50"
          ></VideoPlayer><!-- 230125 메인 : loop 추가 / auto-play 수정 --><!-- 221220 메인 : hide-gui 추가 -->
        </div>
        <!-- 비디오 -->
        <nuxt-link :to="{path:item.link_url}" class="link-block"></nuxt-link>
      </SwiperSlide>
      <div slot="pagination" class="swiper-pagination"></div>
      <!-- 230209 상단배너 : 버튼 클릭 이벤트 추가 -->
      <button slot="button-prev" class="swiper-button-prev mv-prev"></button>
      <button slot="button-next" class="swiper-button-next mv-next"></button>
    </Swiper>
    <!-- eslint-disable -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import VideoPlayer from '~/components/common/VideoPlayer'


export default {
  components: {
    Swiper, SwiperSlide,
    VideoPlayer,
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      },
    },
    usePaging: {
      type: Boolean,
      default: (v) => {
        return false
      }
    }
  },
  data: () => ({
    wrap: null,
    swiper: null,
    resizeTimer: 0,
    slideHide : false, // 230209 상단배너 : 추가
  }),
  created(){
  },
  mounted(){
    const me = this
    window.removeEventListener("resize", me.winResized)
    window.addEventListener("resize", me.winResized)
  },
  beforeUnmount(){
    const me = this
    window.removeEventListener("resize", me.winResized)
  },
  
  methods: {
    swiperInit(){
      const me = this
      me.wrap = me.$el.querySelector(".mv-swiper")
      me.swiper = me.wrap.swiper
      me.$nextTick(function(){
        me.resizeMotion()
      })
    },
    renderBullet(idx, cls){
      return '<span class="swiper-pagination-bullet" index="' + (idx + 1) + '"></span>';
    },

    winResized(){
      const me = this
      clearTimeout(me.resizeTimer)
      me.resizeTimer = setTimeout(me.resizeMotion, 300)
    },

    resizeMotion(){
      const me = this
      me.initMotionType1()
      me.initMotionType2()
    },

    initMotionType1(){
      const me = this
      const key1 = [
        { left: 0 },
        { left: 0 },
        { left: 0 }
      ]
      const key2 = [
        { right : 0 },
        { right : 0 },
        { right : 0 }
      ]
      const prop = {
        duration: 4000,
        iterations: Infinity
      }
      const ww = me.$el.querySelector(".mv-motion1").clientWidth
      let em, w, px

      me.$el.querySelectorAll(".mv-motion1 .mvm-text").forEach(function(div){
        div.querySelectorAll(".mvmt span").forEach(function(span, idx){
          em = span.querySelector("em")
          w = em.clientWidth
          px = -(w - ww) + "px"
          if(idx === 0){
            prop.duration = w * 10
          }
          key1[1].left = px
          key2[1].right = px
          try{
            if(idx === 1){
              span.animate(key2, prop)
            }else{
              span.animate(key1, prop)
            }
          }catch(e){}
        })
      })
    },
    initMotionType2(){
      const me = this
      const key1 = [
        { left : 0 },
        { left : 0 }
      ]
      const key2 = [
        { right : 0 },
        { right : 0 }
      ]
      const prop = {
        duration: 4000,
        iterations: Infinity
      }
      let h, w, em, px

      me.$el.querySelectorAll(".mv-motion2 .mvm-text").forEach(function(div){
        h = div.clientHeight
        div.querySelectorAll(".mvmtv").forEach(function(mvmtv){
          mvmtv.style.width = (h - 42 - 46) + "px"
        })
        div.querySelectorAll(".mvmt span").forEach(function(span){
          em = span.querySelector("em")
          w = em.clientWidth
          px = -w + "px"
          prop.duration = w * 25
          key1[1].left = px
          key2[1].right = px
          try{
            if(span.classList.contains("reverse")){
              span.animate(key1, prop)
            }else{
              span.animate(key2, prop)
            }
          }catch(e){}
        })
      })
    },

    stopPlayingVideo(){
      const me = this
      me.$el.querySelectorAll(".mv-slide-test1 .video-player:not(.paused)").forEach(function(el){
        try{
          if(el){ // 230209 상단배너 : if 추가
            el.__vue__.pauseVideo()
          }
        }catch(e){}
      })
    },
    playActiveVideo(){
      const me = this
      try{
        const el = me.$el.querySelector(".mv-slide-test1.swiper-slide-active .video-player.paused")
        if(el){
          el.__vue__.playVideo()
        }
      }catch(e){}
    },
    transitionEndFn(){
      const me = this
      if(me.swiper === null) return
      const idx = me.swiper.realIndex
      if(idx===0 || idx===me.data.list.length - 1) me.swiper.slideToLoop(idx,0)
      setTimeout(()=>{
        me.playActiveVideo()
      },10)
    }

  },// methods
}
</script>

<style lang="scss" scoped></style>
