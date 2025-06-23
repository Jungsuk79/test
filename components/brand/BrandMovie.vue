<template>
    <div class="about-video-slider">
       <Swiper
        :options="{
          nested: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          on : { 
            sliderFirstMove: stopPlayingVideo,
            transitionEnd: playActiveVideo,
          }
        }"
        class="about-movie-swiper"
        :class="{'swiper-no-swiping' : !(list && list.length > 1)}"
      >
         <SwiperSlide v-for="(n, index) in list" :key="index">
          <div class="tm-mv-cnt">
            <div class="tm-movie">
              <VideoPlayer
                :path="n.video_url"
                :poster="n.image_url"
                :auto-play="true"
                :play-on-scroll="false"
                :mute="true" 
                :controls="true"
              ></VideoPlayer>
            </div>
          </div>
        </SwiperSlide>
        <button slot="button-prev" class="swiper-button-prev"></button>
        <button slot="button-next" class="swiper-button-next"></button>
      </Swiper>
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
  },
  data: () => ({
    list:[
      {
          "video_url":"https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
          "image_url":"https://img.thehandsome.com/md/publish/dummy/pc/video_banner.png",
      },
      {
          "video_url":"https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
          "image_url":"https://img.thehandsome.com/md/publish/dummy/pc/video_banner.png",
      },
      {
          "video_url":"https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
          "image_url":"https://img.thehandsome.com/md/publish/dummy/pc/video_banner.png",
      }
     ],
  }),
  created(){
  },
  methods: {
    stopPlayingVideo(){
      const me = this
      me.$el.querySelectorAll(".about-movie-swiper .video-player:not(.paused)").forEach(function(el){
        try{
          el.__vue__.pauseVideo()
        }catch(e){}
      })
    },
    playActiveVideo(){
      const me = this
      try{
        const el = me.$el.querySelector(".about-movie-swiper .swiper-slide-active .video-player.paused")
        if(el){
          el.__vue__.playVideo()
        }
      }catch(e){}
    },
  },
}
</script>