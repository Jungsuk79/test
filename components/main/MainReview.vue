<template>
  <div class="main-review">
    <div class="main-unit-title">{{data.title}}</div>
    <div class="main-unit-cont">
      <Swiper
        :options="{
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 48,
          loopFillGroupWithBlank : true, 
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        }"
        class="mrv-swiper" :class="{'swiper-no-swiping':nowSwiping}"
      >
        <SwiperSlide v-for="item, idx in data.list" :key="idx">
          <div class="mrv-item">
            <div v-background-image="{url:item.image_url}" class="mrv-image"></div>
            <div class="mrv-text">
              <div class="mrv-rev">{{item.review}}</div>
              <div class="mrv-info">
                <div class="mrv-brand">{{item.brand_name}}</div>
                <div class="mrv-name">{{item.product_name}}</div>
                <div class="mrv-rate">{{item.rating.toFixed(1)}}</div>
              </div>
            </div>
            <nuxt-link :to="{path:item.link_url}" class="link-block"></nuxt-link>
          </div>
        </SwiperSlide>
        <button slot="button-prev" class="swiper-button-prev"></button>
        <button slot="button-next" class="swiper-button-next"></button>
      </Swiper>
    </div>
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
    nowSwiping: false
  }),
  created(){
    const me = this
    try{
      me.nowSwiping = me.data.list.length <= 3
    }catch(e){}
  },
  mounted(){
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped></style>
