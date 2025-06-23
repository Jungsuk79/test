<template>
  <div class="time-unit-wrap">
    <div>
      <div class="tnp-slide-title">
        <div class="tnp-title">NEW<br/>ARRIVAL</div>
        <nuxt-link :to="{}">VIEW ALL</nuxt-link>
      </div>
      <!-- [퍼블수정]23.07.10 타임메인 수정 -->
      <!-- 수정 내용 : 옵션 수정 loop:true 추가 -->
      <Swiper
        id="timeNewProdSwiper"
        :options="{
          nested: true,
          loop:true,
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 24,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        }"
        class="time-new-prod-swiper"
      >
        <!-- <swiper-slide class="tnp-slide tnp-slide-all">
          <div class="tnpsa-title">New<br/>Arrival</div>
          <nuxt-link :to="{path:data.link_url}" class="tnpsa-all">VIEW ALL</nuxt-link>
        </swiper-slide> -->

        <SwiperSlide v-for="itm, idx in data.list" :key="idx" class="tnp-slide">
          <div v-background-image="{url:itm.img_url}" class="time-bg-img"></div>
          <div v-if="itm.img_url2" v-background-image="{url:itm.img_url2}" class="time-bg-img img2"></div><!-- 221122 타임메인 : 오버 이미지 추가 -->
          <div class="tnp-text">
            <div class="tnp-name">{{itm.prod_name}}</div>
            <div class="tnp-price">{{itm.sell_price | number}}</div>
          </div>
          <nuxt-link class="link-block" :to="{path:itm.link_url}"></nuxt-link>
          <button class="zzim-btn" :class="{on:itm.zzim===true}" @click.stop="zzim(itm)"></button>
        </SwiperSlide>
          <button slot="button-prev" class="swiper-button-prev"></button>
          <button slot="button-next" class="swiper-button-next"></button>
      </Swiper>
      <!-- //[퍼블수정]23.07.10 타임메인 수정 -->
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
  },
}
</script>