<template>
  <div v-background-image="{url : data.image_url}" class="time-unit-wrap">
    <Swiper
      :options="{
        loop : swiperLoop, // 230221 상단배너 : 추가
        autoplay: { // 230109 상단배너 : 추가
          delay: 5000,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }"
      class="ts-mood-swiper"
      :class="{'swiper-no-swiping': !(data.images && data.images.length > 1)}"
    >
      <SwiperSlide v-for="img, idx in data.images" :key="idx" class="ts-mood-slide">
        <div v-background-image="{url : img}"></div>
      </SwiperSlide>
      <button slot="button-prev" class="swiper-button-prev"></button>
      <button slot="button-next" class="swiper-button-next"></button>
    </Swiper>
    <nuxt-link :to="{path:data.link_url}" class="shopping-btn">쇼핑 바로가기</nuxt-link>
    <div class="scroll-guide"><span></span></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    Swiper, SwiperSlide
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
    swiperLoop : true, // 230221 상단배너 : 추가
  }),
  created(){
     // 230221 상단배너 : 추가
     const me = this
     if(me.data.images.length < 2) me.swiperLoop = false
  },
  methods: {
  },
}
</script>