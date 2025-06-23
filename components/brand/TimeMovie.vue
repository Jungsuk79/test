<template>
  <div class="time-unit-wrap">
    <!-- eslint-disable -->
    <div class="time-unit-cont">
      <!-- 221121 타임 영상 : 마크업 변경 -->
      <Swiper
        :options="{
          nested: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          on : { // 221121 타임 영상 : 추가
            sliderFirstMove: stopPlayingVideo,
            transitionEnd: playActiveVideo,
          }
        }"
        class="tm-movie-swiper"
        :class="{'swiper-no-swiping' : !(data.list && data.list.length > 1)}"
      >
        <SwiperSlide v-for="(item,index) in data.list" :key="index">
          <div class="tm-mv-cnt">
            <div class="tm-title">{{item.title}}</div>
            <!-- [퍼블수정]23.03.16 video-ratio 수정 -->
            <div class="tm-movie">
              <VideoPlayer
                :path="item.video_url"
                :poster="item.image_url"
                :video-ratio="56.25"
                :auto-play="true"
                :mute="true"
                :controls="true"
              ></VideoPlayer>
            </div>
            <div v-html="item.desc" class="tm-desc"></div>
          </div>
        </SwiperSlide>
        <button slot="button-prev" class="swiper-button-prev"></button>
        <button slot="button-next" class="swiper-button-next"></button>
      </Swiper>
      <!-- // 221121 타임 영상 : 마크업 변경 -->
    </div>
    <!-- eslint-disable -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper' // 221121 타임 영상 : 추가
import VideoPlayer from '~/components/common/VideoPlayer'

export default {
  components: {
    Swiper, SwiperSlide, // 221121 타임 영상 : 추가
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
  }),
  created(){
  },
  methods: {
    stopPlayingVideo(){ // 221121 타임 영상 : 추가
      const me = this
      me.$el.querySelectorAll(".tm-movie-swiper .video-player:not(.paused)").forEach(function(el){
        try{
          el.__vue__.pauseVideo()
        }catch(e){}
      })
    },
    playActiveVideo(){ // 221121 타임 영상 : 추가
      const me = this
      try{
        const el = me.$el.querySelector(".tm-movie-swiper .swiper-slide-active .video-player.paused")
        if(el){
          el.__vue__.playVideo()
        }
      }catch(e){}
    },
  },
}
</script>