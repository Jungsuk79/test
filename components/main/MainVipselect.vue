<template>
  <div class="main-unit-wide main-vip-select">
    <div class="main-unit-cont">
      <div class="vip-box">
        <div class="vip-left">
          <!-- 메인 툴팁 추가 -->
          <v-layout flex-start align-center class="main-unit-title">
            <div v-html="data.title"></div>
            <CommonTooltipBox icon-type="info">
              <template #content>
                <p class="cmp-font fnt-14">더클럽 STAR, THE STAR 등급 고객님들이<br />최근 주목한 상품이에요</p>
              </template>
            </CommonTooltipBox>
          </v-layout>
          <!-- //메인 툴팁 추가 -->
          <ul class="vip-cates">
            <li v-for="item, idx in data.list" :key="idx" :class="{on:item===currentItem}">
              <button @click="selectCate(item)">{{item.title}}</button>
            </li>
          </ul>
          <p class="time-update">00시 업데이트</p>
        </div>
        <div class="vip-right" :class="{'no-swiping' : currentItem.list.length <= 5}">
          <Swiper class="product-unit-list product-unit-list-swipe product-unit-list-mini product-list-layout-5"
            :options="{
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 24,
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              on: {
                init: swiperInit
              }
            }"
            :class="{'swiper-no-swiping':currentItem.list.length <= 5}"
          >
            <SwiperSlide v-for="item, idx in currentItem.list" :key="idx">
              <ProductUnitMini :unit-data="item" :unit-type="'mini'"></ProductUnitMini>
              <div class="status-cover">
                <p class="status-up" v-if="idx === 0 || idx > 4">3</p>
                <p class="status-down" v-if="idx === 1">3</p>
                <p class="cmp-font fnt-12 c-red" v-if="idx === 2">NEW</p>
                <p class="cmp-font fnt-12 status-stay" v-if="idx === 3">ㅡ</p>
                <p class="cmp-font fnt-12 c-red" v-if="idx === 4">급상승</p>
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
    currentItem: null
  }),
  created(){
    const me = this
    try{
      me.currentItem = me.data.list[0]
    }catch(e){}
  },
  mounted(){
    const me = this
    me.$nextTick(me.moveButtons)
  },
  methods: {
    selectCate(item){
      const me = this
      if(me.currentItem !== item){
        me.currentItem = item
      }
      
      const sw = me.$el.querySelector(".vip-right .product-unit-list").swiper
      sw.slideTo(0, 0)
    },
    moveButtons(){
      const me = this
      const div = me.$el.querySelector(".vip-right")
      div.append(me.$el.querySelector(".swiper-button-prev"))
      div.append(me.$el.querySelector(".swiper-button-next"))
    },
    swiperInit(){
      this.$emit('setupSwiper')
    }
  },
}
</script>

<style lang="scss" scoped></style>
