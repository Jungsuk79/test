<template>
  <DialogBasic class="popup-recommend-product" header-title="How about this product?" :width="540" @hide="closeDialog">
    <template #body>
      <!-- 인기상품 -->
      <div class="cmp-sub-tit small">
        <h2 class="tit">These are popular products recommended from the <br>category!</h2>
      </div>
      <div class="cmp-swiper-box w-auto">
        <Swiper 
          ref="popularSwiper" 
          :options="{
            slidesPerView: 4,
            slidesPerGroup : 4,
            spaceBetween: 16,
            navigation: {
              prevEl: '.prev-btn0',
              nextEl: '.next-btn0',
            },
            init:false
          }"
          :class="{'swiper-no-swiping':popularList.length <= 4}"
        >
          <SwiperSlide v-for="(item, index) in popularList" :key="index">
            <div class="swiper-prd-unit">
              <nuxt-link :to="item.link">
                <v-img :src="item.image" alt="product image" class="prd-img"></v-img>
                <span class="brand-name">{{item.brand_name}}</span>
                <span class="sell-price"><em>$</em>{{item.sell_price | number}}</span>
              </nuxt-link>
            </div>
          </SwiperSlide>
        </Swiper>
        <template v-if="popularList.length > 4">
          <div class="swiper-button-prev swiper-no-swiping top-type1 prev-btn0"><i v-cmp-icon="{size:24, name:'prev', invert:1}">previous</i></div>
          <div class="swiper-button-next swiper-no-swiping top-type1 next-btn0"><i v-cmp-icon="{size:24, name:'next', invert:1}">next</i></div>
        </template>
      </div>
      <!-- //인기상품 -->
      <!-- 신상품 -->
      <div class="cmp-sub-tit small mt-40">
        <h2 class="tit">These are new products recommended by the brand!</h2>
      </div>
      <div class="cmp-swiper-box w-auto">
        <Swiper 
          ref="newSwiper" 
          :options="{
            slidesPerView: 4,
            slidesPerGroup : 4,
            spaceBetween: 16,
            navigation: {
              prevEl: '.prev-btn1',
              nextEl: '.next-btn1',
            },
            init:false
          }"
          :class="{'swiper-no-swiping':newList.length <= 4}"
        >
          <SwiperSlide v-for="(item, index) in newList" :key="index">
            <div class="swiper-prd-unit">
              <nuxt-link :to="item.link">
                <v-img :src="item.image" alt="상품 이미지" class="prd-img"></v-img>
                <span class="prd-name">{{item.prod_name}}</span>
                <span class="sell-price"><em>$</em>{{item.sell_price | number}}</span>
              </nuxt-link>
            </div>
          </SwiperSlide>
        </Swiper>
        <template v-if="newList.length > 4">
          <div class="swiper-button-prev swiper-no-swiping top-type1 prev-btn1"><i v-cmp-icon="{size:24, name:'prev', invert:1}">prev</i></div>
          <div class="swiper-button-next swiper-no-swiping top-type1 next-btn1"><i v-cmp-icon="{size:24, name:'next', invert:1}">next</i></div>
        </template>
      </div>
      <!-- //신상품 -->
    </template> 
  </DialogBasic>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  components: { 
    DialogBasic, 
    Swiper, 
    SwiperSlide
  },
  props: {},
  data: () => ({
    swiper: null,
    swiper2: null,
    popularList:[
      {
        brand_name : 'SJSJ',
        sell_price : '285',
        link : '#n',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/001.jpg',
      },
      {
        brand_name : 'TOM GREYHOUND',
        sell_price : '285',
        link : '#n',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/002.jpg',
      },
      {
        brand_name : 'TIME',
        sell_price : '285',
        link : '#n',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/003.jpg',
      },
      {
        brand_name : 'BALLY',
        sell_price : '285',
        link : '#n',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/004.jpg',
      },
      {
        brand_name : 'SJSJ',
        sell_price : '285',
        link : '#n',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/001.jpg',
      },
      {
        brand_name : 'TOM GREYHOUND',
        sell_price : '285',
        link : '#n',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/002.jpg',
      },
      {
        brand_name : 'TIME',
        sell_price : '285',
        link : '#n',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/003.jpg',
      },
      {
        brand_name : 'BALLY',
        sell_price : '285',
        link : '#n',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/004.jpg',
      },
    ],
    newList:[
      {
        prod_name: 'mock neck drawers',
        sell_price : '350',
        link : '#n',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/001.jpg',
      },
      {
        prod_name: 'floral layered dress',
        sell_price : '350',
        link : '#n',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/002.jpg',
      },
      {
        prod_name: 'Sequin block eylet',
        sell_price : '350',
        link : '#n',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/003.jpg',
      },
      {
        prod_name: 'Sequin block eylet',
        sell_price : '350',
        link : '#n',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/003.jpg',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.$refs.popularSwiper.$swiper.init()
        this.$refs.newSwiper.$swiper.init()
      }, 100)
    })
  },
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss">
</style>
