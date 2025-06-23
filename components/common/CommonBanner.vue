<template>
  <div class="common-banner-unit">
    <Swiper
      :options="{
        navigation: {
          prevEl: '.common-banner-prev',
          nextEl: '.common-banner-next',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: false,
          type: 'bullets'
        },
      }"
      class="common-banner-swiper"
      :class="{'swiper-no-swiping' : !(data.list && data.list.length > 1)}"
    >
      <SwiperSlide v-for="item, idx in data.list" :key="idx" class="common-banner-slide">
        <div :style="{'background-image':'url('+item.image_url+')', 'color':item.text_color}" class="cbs-item" :class="'banner-type-'+item.type">
          <!-- [퍼블수정]23.02.03 -->
          <div class="float-text">
            <div v-if="item.desc" class="cbs-desc">{{item.desc}}</div>
            <div v-if="item.title" class="cbs-title">{{item.title}}</div>
            <div v-if="item.subtitle" class="cbs-sub" :style="{'border-color':item.text_color}">{{item.subtitle}}</div>
          </div>
          <nuxt-link :to="{path:item.link_url}" class="link-block"></nuxt-link>
        </div>
      </SwiperSlide>
      <div slot="button-prev" class="swiper-button-prev common-banner-prev"><span class="ir">이전</span></div>
      <div slot="button-next" class="swiper-button-next common-banner-next"><span class="ir">다음</span></div>
      <div slot="pagination" class="swiper-pagination"></div>
    </Swiper>
    
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
  }),
  created(){
  },
  mounted(){
  },
  methods: {
  },
}
</script>

<style lang="scss"></style>
