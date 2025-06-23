<template>
  <div class="main-themagazine">
    <div class="main-unit-title">{{data.title}}</div>
    <div class="main-unit-cont">
      <div class="mtm-cates-swiper">
        <Swiper
          :options="{
            threshold : 10,
            slidesPerView:'auto',
            spaceBetween: 32
          }"
        >
          <SwiperSlide v-for="(item,idx) in data.list" :key="idx">
            <button :class="{on:item===currentItem}" @click="selectCate(item)">
              <span>{{item.title}}</span>
              <span>{{item.title}}</span>
            </button>
          </SwiperSlide>
        </Swiper>
      </div>
      <nuxt-link :to="{}" class="mtm-link">THE 매거진 전체보기<i class="cmp-icon cmp-icon-12 i-next"></i></nuxt-link>
      <div class="mtm-list">
        <!-- slidesPerGroup: 4 추가 -->
        <Swiper class="product-unit-list product-unit-list-swipe"
          :options="{
            loop : false,
            slidesPerView: 4,
            spaceBetween: 24,
            touchRatio: 1,
            slidesPerGroup: 4,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          }"
          :class="[
            'product-unit-list-minivideo',
            'product-list-layout-6',
            {
              'swiper-no-swiping': currentItem.list.length <= 4
            }
          ]"
        >
          <SwiperSlide v-for="item, idx in currentItem.list" :key="idx">
            <ProductUnitMiniVideo :unit-data="item"></ProductUnitMiniVideo>
          </SwiperSlide>
          <button slot="button-prev" class="swiper-button-prev"></button>
          <button slot="button-next" class="swiper-button-next"></button>
        </Swiper>
      </div>

    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper' // 221122 메인룩북 : 추가

export default {
  components: {
    Swiper, SwiperSlide  // 221122 메인룩북 : 추가
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
    currentItem: null
  }),
  created(){
    const me = this
    try{
      me.currentItem = me.data.list[0]
    }catch(e){}
  },
  mounted(){
  },
  // 0530 퍼블수정
  methods: {
    selectCate(item){
      const me = this
      me.swiper = me.$el.querySelector(".main-themagazine .mtm-list .product-unit-list-swipe").swiper
      if(me.currentItem !== item){
        me.currentItem = item
      }
      me.swiper.slideTo(0, 0);
    }
  },
}
</script>

<style lang="scss" scoped></style>
