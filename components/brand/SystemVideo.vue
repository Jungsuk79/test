<template>
  <div class="system-unit-wrap">
    <!-- title -->
    <div class="system-unit-title">
      <div>{{data.title}}</div>
    </div>
    <!-- title -->

    <!-- content -->
    <div class="system-unit-cont">
      <!-- [퍼블수정]23.02.23 시스템 브랜드 메인 동영상 수정 -->
      <div class="system-prd-swiper">
        <Swiper
          :options="{
            slidesPerView: 1,
            slidesPerGroup : 1,
            watchOverflow: true,
            pagination: {
              el: '.swiper-pagination',
              type: 'fraction',
            },
            on: {
              sliderFirstMove: stopPlayingVideo,
              transitionEnd: playActiveVideo,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          }"
          class="swiper-type-video"
          :class="{'swiper-no-swiping' : !(data.list && data.list.length > 1)}"
        >
          <SwiperSlide v-for="item, idx in data.list" :key="idx" class="system-prd-slide">
            <div class="video-cnt">
              <VideoPlayer
                :path="item.video_url"
                :poster="item.image_url"
                :mute="true"
                :video-ratio="37.5"
                :controls="true"
                :auto-play="idx===0"
                :hide-gui="true"
              ></VideoPlayer>
              <div class="suv-info">
                <!-- eslint-disable -->
                <div v-html="item.text" class="suv-text"></div>
                <div v-html="item.desc" class="suv-desc"></div>
                <!-- eslint-disable -->
              </div>
              <a href="#" class="link-block"></a><!-- 추가된 링크 -->
            </div>
          </SwiperSlide>
          <div slot="pagination" class="swiper-pagination"></div>
          <button slot="button-prev" class="swiper-button-prev"></button>
          <button slot="button-next" class="swiper-button-next"></button>
        </Swiper>
      </div>
    </div>
    <!-- content -->
  </div>
</template>

<script>
//   [퍼블수정]23.02.23 시스템 브랜드 메인 동영상 수정
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import VideoPlayer from '~/components/common/VideoPlayer'

export default {
  components: {
    //   [퍼블수정]23.02.23 시스템 브랜드 메인 동영상 수정
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
  }),
  created(){
  },
  methods: {
    //   [퍼블수정]23.02.23 시스템 브랜드 메인 동영상 수정
    stopPlayingVideo(){
      const me = this
      me.$el.querySelectorAll(".swiper-type-video .video-player:not(.paused)").forEach(function(el){
        try{
          el.__vue__.pauseVideo()
        }catch(e){}
      })
    },
    playActiveVideo(){
      const me = this
      try{
        const el = me.$el.querySelector(".swiper-type-video .swiper-slide-active .video-player.paused")
        if(el){
          el.__vue__.playVideo()
        }
      }catch(e){}
    },
  },
}
</script>