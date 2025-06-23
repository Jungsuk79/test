<template>
  <div class="system-unit-wrap">
    <!-- title -->
    <div class="system-unit-title">
      <div>
        {{data.title}}<span v-if="data.list.length > 0">{{data.list.length}}</span>
      </div>
      <nuxt-link :to="data.link_url"><span>VIEW ALL</span></nuxt-link>
    </div>
    <!-- title -->

    <!-- list -->
    <div class="system-unit-cont">
      <div class="system-prd-swiper" :class="'swiper-type-'+data.style">
        <Swiper
          :options="{
            slidesPerView: 3,
            slidesPerGroup : 3,
            spaceBetween : 1,
            pagination: {
              el: '.swiper-pagination',
              type: 'fraction',
              renderFraction: renderFraction
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          }"
          :class="{'swiper-no-swiping' : !(data.list && data.list.length > 3)}"
        >
          <SwiperSlide v-for="item, idx in data.list" :key="idx" class="system-prd-slide">
            <nuxt-link :to="item.link_url" class="prd-swiper-cnt">
              <div v-background-image="{url:item.image_url}" class="prd-swiper-img"></div>
              <div class="prd-swiper-txt">
                <div class="prd-name">{{item.product_name}}</div>
                <div class="sell-price">{{item.sell_price | number}}</div>
              </div>
            </nuxt-link>
            <!-- [퍼블수정]23.03.02 v-if 수정 -->
            <div v-if="data.style === 'new'" class="prd-swiper-desc">{{item.desc}}</div>
            <!-- //[퍼블수정]23.03.02 v-if 수정 -->
            <button class="zzim-btn" :class="{on:item.zzim}" @click="item.zzim = !item.zzim"><span class="ir">찜</span></button>
          </SwiperSlide>
          <div slot="pagination" class="swiper-pagination"></div>
          <button slot="button-prev" class="swiper-button-prev"></button>
          <button slot="button-next" class="swiper-button-next"></button>
        </Swiper>
      </div>
    </div>
    <!-- list -->

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