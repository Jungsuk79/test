<template>
  <div class="time-unit-wrap">
    <div class="time-unit-cont">
      <div class="tbr-list-wrap">
        <div class="time-slide-title">
          <div>Best Review</div>
        </div>
        <div class="tbr-list">
          <Swiper
            :options="{
              nested: true,
              direction: 'horizontal',
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 48,
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            }"
            class="tbr-swiper"
          >
            <SwiperSlide v-for="item, idx in data.list" :key="idx" class="tbr-slide">
              <div class="tbr-item">
                <div v-background-image="{url:item.image_url}" class="tbr-img"></div>
                <div class="tbr-txt">
                  <div class="tbr-txt1">{{item.review}}</div>
                  <div class="tbr-txt2">
                    <div class="tbr-prod">{{item.product_name}}</div>
                    <div class="tbr-rate">평점<span>{{item.rate}}</span></div>
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
    </div>
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
  }),
  created(){
  },
  methods: {
  },
}
</script>