<template>
  <div class="editshop-new-brand">
    <!-- 221213 편집샵 신규브랜드 : 마크업 전체 변경 -->
    <Swiper
      :options="{
        navigation: {
          prevEl: '.bn-swiper-prev',
          nextEl: '.bn-swiper-next',
        },
        /* scrollbar: { // 221221 신규브랜드 : 삭제
          el: '.bn-swiper-scrollbar',
          hide: false,
        }, */
        pagination: {el: '.bn-swiper-pagination'}, // 221221 신규브랜드 : 추가
        loop : true, // 221221 신규브랜드 : 추가
        on : {
          // realIndexChange : newBrandIdxChange, // 221227 신규브랜드 : 삭제
          init: initSwiper1, // 221227 신규브랜드 : 추가
        }
      }"
      :class="{'swiper-no-swiping':!(data && data.length > 1)}"
      class="nb-img-swiper"
      id="editshopSwiper1"
    ><!-- 221227 신규브랜드 : id 추가 -->
      <SwiperSlide v-for="(item, index) in data" :key="index">
        <nuxt-link :to="item.link_url">
          <img :src="item.image_url"/><!-- 221227 신규브랜드 : 마크업 변경 -->
        </nuxt-link>
      </SwiperSlide>
    </Swiper>
    <div slot="button-prev" class="swiper-button-prev bn-swiper-prev"><span class="ir">이전</span></div>
    <div slot="button-next" class="swiper-button-next bn-swiper-next"><span class="ir">다음</span></div>
    <!-- <div slot="scrollbar" class="swiper-scrollbar bn-swiper-scrollbar"></div> --><!-- 221221 신규브랜드 : 삭제 -->
    <div slot="pagination" class="swiper-pagination bn-swiper-pagination"></div><!-- 221221 신규브랜드 : 추가 -->
    <div class="nb-txt-info">
      <!-- 221227 신규브랜드 : 텍스트 영역 마크업 변경 -->
      <Swiper
        :options="{
          loop : true,
          effect : 'fade',
          on : {
            init: initSwiper2,
          }
        }"
        :class="{'swiper-no-swiping':!(data && data.length > 1)}"
        class="nb-img-swiper right"
        id="editshopSwiper2"
      >
        <SwiperSlide v-for="(item, index) in data" :key="index">
          <div class="info-cnt">
            <!-- eslint-disable -->
            <div class="tit" v-html="item.title"></div>
            <div class="desc" v-html="item.desc"></div>
            <!-- eslint-disable -->
          </div>
        </SwiperSlide>
      </Swiper>
      <!-- // 221227 신규브랜드 : 텍스트 영역 마크업 변경 -->
    </div>
    <!-- // 221213 편집샵 신규브랜드 : 마크업 전체 변경 -->
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
      type: Array,
      default: ()=>{ return [] }
    },
  },
  data: () => ({
    // swiperIdx : 0, // 221227 신규브랜드 : 삭제
    swiper1: null, // 221227 신규브랜드 : 추가
    swiper2: null, // 221227 신규브랜드 : 추가
  }),
  created(){
    
  },
  mounted(){ // 221227 신규브랜드 : mounted 추가
    const me = this
    window.removeEventListener("resize", me.winResized)
    window.addEventListener("resize", me.winResized)
    me.winResized()
  },
  methods: {
    /* newBrandIdxChange(){ // 221227 신규브랜드 : 삭제
      const me = this
      const swiper = me.$el.querySelector(".nb-img-swiper").swiper // 221213 편집샵 신규브랜드 : .new-brand-swiper > .nb-img-swiper 변경
      me.swiperIdx = swiper.realIndex
    }, */
    initSwiper1(){ // 221227 신규브랜드 : 추가
      const me = this
      me.swiper1 = me.$el.querySelector("#editshopSwiper1").swiper 
      setTimeout(function(){
        me.swiper1.controller.control = me.swiper2
      }, 300)
      me.winResized()
    },
    initSwiper2(){ // 221227 신규브랜드 : 추가
      const me = this
      me.swiper2 = me.$el.querySelector("#editshopSwiper2").swiper 
      setTimeout(function(){
        me.swiper2.controller.control = me.swiper1
      }, 300)
      me.winResized()
    },
    winResized(){ // 221227 신규브랜드 : 추가
      const allWidth = document.querySelector('.editshop-new-brand').offsetWidth
      const width1 = document.querySelector('#editshopSwiper1.swiper-container').offsetWidth
      const height = width1 * 0.746
      document.querySelector('#editshopSwiper1.swiper-container').style.height = height + 'px'
      document.querySelector('#editshopSwiper2.swiper-container').style.height = height + 'px'
      document.querySelector('#editshopSwiper2.swiper-container').style.width = (allWidth - width1) + 'px'
    },
  },
}
</script>