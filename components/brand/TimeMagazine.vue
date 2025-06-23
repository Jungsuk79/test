<template>
  <div class="time-unit-wrap">
    <!-- eslint-disable -->
    <Swiper
      id="timeSpecialSwiper"
      :options="{
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          renderBullet: renderBullet,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }"
      class="ts-mag-swiper"
      :class="{'swiper-no-swiping':!allowSwipe}"
    >
      <SwiperSlide v-for="item, idx in data.list" :key="idx" class="ts-mag-slide">
        <div class="ts-mag-bg" v-background-image="{url : item.image_url}">
          <div class="ts-mag-text">
            <div class="ts-mag-type">{{item.type}}</div>
            <div class="ts-mag-title" v-html="item.title"></div>
          </div>
        </div>
        <nuxt-link class="link-block" :to="{path:item.link_url}"></nuxt-link>
      </SwiperSlide>
      <div slot="pagination" class="swiper-pagination"></div>
      <button slot="button-prev" class="swiper-button-prev"></button>
      <button slot="button-next" class="swiper-button-next"></button>
    </Swiper>
    <!-- eslint-disable -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    Swiper, SwiperSlide,
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
    allowSwipe: true
  }),
  created(){
    const me = this
    me.allowSwipe = (me.data.list && me.data.list.length > 1)
  },
  methods: {
    renderBullet(idx, cls){
      return '<span class="swiper-pagination-bullet" index="' + (idx + 1) + '"></span>';
    },
  },
}
</script>