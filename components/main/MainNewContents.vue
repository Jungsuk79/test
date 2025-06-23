<template>
  <div class="main-new-contents">
    <div class="main-unit-title">{{data.title}}</div>
    <div class="main-unit-cont">
      <Swiper
        :options="{
          slidesPerView: 3,
          spaceBetween: 24,
          initialSlide: 1,
          centeredSlides: true,
          navigation: {
            nextEl: '.mnc-next',
            prevEl: '.mnc-prev',
          },
          virtualTranslate: false,
          on:{
            init: swiperInit,
            slideChange : slideChange,
          }
        }"
        class="mnc-swiper"
      >
        <SwiperSlide v-for="item, idx in data.list" :key="idx" class="mnc-slide">
          <div v-if="!item.video_url" class="mnc-item">
            <div class="mnc-image" :index="idx+1">
              <img src="/images/main/main-new-content.png" />
              <div v-background-image="{url:item.image_url}"></div>
            </div>
            <div class="mnc-text">
              <!-- [23.05.24]퍼블수정 아래 내용 삭제 -->
              <!-- <div class="mnc-type">{{item.type}}</div> -->
              <div class="mnc-title">{{item.title}}</div>
            </div>
            <nuxt-link :to="{path:item.link_url}" class="link-block"></nuxt-link>
          </div>

          <div v-if="item.video_url" class="mnc-item">
            <div class="mnc-image" :index="idx+1">
              <img src="/images/main/main-new-content.png" />
              <div class="mnc-video">
                <VideoPlayer 
                  :path="item.video_url" 
                  :poster="item.image_url" 
                  :mute="true"
                  :loop="true"
                  :video-ratio="133" 
                  :auto-play="true"
                  :non-stop="true"
                  class="videobox" />
              </div>
            </div>
            <div class="mnc-text">
              <!-- <div class="mnc-type">{{item.type}}</div> -->
              <div class="mnc-title">{{item.title}}</div>
            </div>
            <nuxt-link :to="{path:item.link_url}" class="link-block"></nuxt-link>
          </div>
        </SwiperSlide>
        <button slot="button-prev" class="swiper-button-prev mnc-prev"></button>
        <button slot="button-next" class="swiper-button-next mnc-next"></button>
      </Swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import Animator from '~/api/common/Animator'
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
  },
  data: () => ({
    swiper: null,
    animator : new Animator(),
    dragging: false,
  }),
  created(){
  },
  mounted(){
  },
  methods: {
    swiperInit(){
      this.controlVideo()
    },
    setTranslate(){
      const me = this
      if(! me.swiper){ return }

      const x = Math.round(me.swiper.translate)
      if(me.dragging){
        me.swiper.ox = x
        console.log("---", x)
      }else{
        console.log("aaaaaaaaaa", x)
        me.animator.start(me.swiper.ox, x, 200, function(v){
          console.log("****", v)
        })
      }
    },
    setPosition(){
      console.log("-------")
    },
    slideChange(){
      const me = this
      try{
        me.swiper = me.$el.querySelector(".mnc-swiper").swiper
        if(me.swiper.activeIndex === 1){
          me.$el.querySelector(".mnc-prev").classList.add('disabled')
          me.swiper.allowSlidePrev = false
        }else{
          me.$el.querySelector(".mnc-prev").classList.remove('disabled')
          me.swiper.allowSlidePrev = true
        }
        if(me.swiper.activeIndex === me.data.list.length - 2){
          me.$el.querySelector(".mnc-next").classList.add('disabled')
          me.swiper.allowSlideNext = false
        }else{
          me.$el.querySelector(".mnc-next").classList.remove('disabled')
          me.swiper.allowSlideNext = true
        }

        if(me.swiper.activeIndex === 0){
          me.swiper.slideTo(1)
        }
        if(me.swiper.activeIndex === me.data.list.length - 1){
          me.swiper.slideTo(me.data.list.length - 2)
        }
      }catch(e){
        console.log(e)
      }
      me.controlVideo()
    },
    controlVideo(){
      const me = this
      setTimeout(function(){
        const arrEl = me.$el.querySelectorAll(".mnc-slide")
        arrEl.forEach(el =>{
          if(el.classList.contains('swiper-slide-active')
          || el.classList.contains('swiper-slide-prev')
          || el.classList.contains('swiper-slide-next')){
            const el2 = el.querySelector('.video-player.paused')
            el2?.__vue__?.playVideo()
          }else{
            const el3 = el.querySelector('.video-player:not(.paused)')
            el3?.__vue__?.pauseVideo()
          }
        })
      }, 500)
    },
  }
}
</script>

<style lang="scss" scoped></style>
