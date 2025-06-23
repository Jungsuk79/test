<template>
  <div class="time-unit-wrap">
    <div class="time-unit-cont">
      <div class="time-slide-title">
        <div>Best Seller</div>
        <nuxt-link :to="{path:data.link_url}">VIEW ALL</nuxt-link>
      </div>
      <swiper
        id="timeBestSellerSwiper"
        :options="{
          nested: true,
          slidesPerView: 6,
          slidesPerGroup: 6,
          spaceBetween: 24,
          _pagination: {
            el: '.swiper-pagination',
            type: 'custom',
            renderCustom: renderCustom
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        }"
        class="tbs-swiper"
      >
        <swiper-slide v-for="itm, idx in data.list" :key="idx" class="tbs-slide">
          <div v-background-image="{url:itm.img_url}" class="time-bg-img"></div>
          <div v-if="itm.img_url2" v-background-image="{url:itm.img_url2}" class="time-bg-img img2"></div><!-- 221122 타임메인 : 오버 이미지 추가 -->
          <div class="tbs-text">
            <div class="tbs-name">{{itm.prod_name}}</div>
            <div class="tbs-price">{{itm.sell_price | number}}</div>
          </div>
          <nuxt-link class="link-block" :to="{path:itm.link_url}"></nuxt-link>
          <button class="zzim-btn" :class="{on:itm.zzim===true}" @click.stop="zzim(itm)"></button>
        </swiper-slide>
        <!-- <div slot="pagination" class="swiper-pagination"></div> -->
        <button slot="button-prev" class="swiper-button-prev"></button>
        <button slot="button-next" class="swiper-button-next"></button>
      </swiper>
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
    zzim(itm){
      if(itm.zzim === true){
        itm.zzim = false
      }else{
        itm.zzim = true
      }
    },

    renderCustom(swiper, current, total){
      const t = total + 1
      let c =  current
      if(t >= 10 && c < 10){
        c = "0" + c
      }
      return '<span class="swiper-pagination-current">' + c + '</span> / <span class="swiper-pagination-total">' + t + '</span>'
    }
  },
}
</script>