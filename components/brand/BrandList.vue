<template>
  <!-- [퍼블수정]23.02.23 브랜드 수정 -->
  <div class="editshop-brand-list" :class="{square : listType==='square'}">
    <Swiper 
      :options="{
        watchOverflow: true,
        spaceBetween: 48,
        slidesPerView: 6,
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        },
      }"
      :class="{'swiper-no-swiping':data.length <= 1}"
      v-if="listType==='square'"
    >
      <SwiperSlide v-for="(item, index) in data" :key="index">
        <nuxt-link :to="item.link_url">
          <div v-background-image="{url:item.image_url}"></div>
          <span class="name" v-html="item.brand_name"></span>
        </nuxt-link>
      </SwiperSlide>
    </Swiper>
    <Swiper 
      :options="{
        watchOverflow: true,
        spaceBetween: 48,
        slidesPerView: 7,
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        },
      }"
      :class="{'swiper-no-swiping':data.length <= 1}"
      v-else
    >
      <SwiperSlide v-for="(item, index) in data" :key="index">
        <nuxt-link :to="item.link_url">
          <div v-background-image="{url:item.image_url}"></div>
          <span class="name" v-html="item.brand_name"></span>
        </nuxt-link>
      </SwiperSlide>
    </Swiper>
    <div class="swiper-button-prev swiper-no-swiping"></div>
    <div class="swiper-button-next swiper-no-swiping"></div>
  </div>
</template>

<script>
//  [퍼블수정]23.02.23 브랜드 수정
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    //  [퍼블수정]23.02.23 브랜드 수정
    Swiper,
    SwiperSlide,
  },
  props: {
    data: {
      type: Array,
      default: ()=>{ return [] }
    },
    listType : {
      type : String,
      default : null
    }
  },
  data: () => ({
  
  }),
  created(){
    
  },
  methods: {
    
  },
}
</script>