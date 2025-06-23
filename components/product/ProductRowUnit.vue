<template>
  <div class="product-row-unit">
    <div class="row-unit-box">
      <div class="l-cnt">
        <slot name="left"></slot>
      </div>
      <div class="c-cnt">
        <div class="row-unit-cnt">
          <!-- 상품 이미지 -->
          <Swiper
            :options="{
              on: {
                init : swipeInit,
              },
              spaceBetween : 0,
              slidesPerView : 1
            }"
            class="product-image-swiper"
            :class="[
              {'swiper-no-swiping' : data.images[selectedIndex].length <= 1},
              {'disabled' : data.sold_out},
              imgSize
            ]"
          >
            <SwiperSlide v-for="img, idx in data.images[selectedIndex]" :key="idx">
              <div class="product-image">
                <div v-background-image="{'url' : img}" class="background-image"></div>
                <nuxt-link v-if="data.links" :to="data.links[selectedIndex]" class="product-link"></nuxt-link>
              </div>
            </SwiperSlide>
            <span v-if="data.sold_out" class="sold-out">SOLD OUT</span>
          </Swiper>
          <!-- //상품 이미지 -->
          <div class="product-info-box"><!-- :class="infoBoxClass" -->
            <!-- 상품 정보 -->
            <div class="product-info">
              <div v-if="data.brand_name" class="product-brand" :class="brandClass">{{data.brand_name}}</div>
              <div v-if="data.product_name" class="product-name" :class="{cut:data.links}">{{data.product_name}}</div>
              <div v-if="data.options" class="product-option">
                <span v-for="(option, optionIdx) in data.options" :key="optionIdx" class="option">{{option}}</span>
              </div>
              <div v-if="data.sell_price" class="product-price">
                <span class="product-sellprice">
                  <strong>{{data.sell_price | number}}</strong><span v-if="!wonHidden">원</span>
                </span>
                <span v-if="data.price" class="product-price-origin">
                  <del>{{data.price | number}}</del><span v-if="!wonHidden">원</span>
                </span>
                <!-- eslint-disable -->
                <span v-if="data.discount" class="product-discount" v-html="replacePercent(data.discount)"></span>
                <!-- eslint-disable -->
              </div>
              <slot name="infoContent"></slot>
              <nuxt-link v-if="data.links" :to="data.links[selectedIndex]" class="product-link"></nuxt-link>
            </div>
            <!-- //상품 정보 -->
            <!-- 컬러칩 & 선택 -->
            <div v-if="data.colors" class="product-color-box">
              <ul class="product-color-list">
                <li v-for="chip, idx in data.colors" :key="idx" :class="{'on' : selectedIndex===idx}">
                  <button class="background-image" :style="{'background' : chip.image}" @click.stop="selectColor(idx)"></button>
                </li>
              </ul>
              <p class="color-name">{{data.colors[selectedIndex].name}}</p>
            </div>
            <!-- //컬러칩 & 선택 -->
          </div>
        </div><!-- .row-unit-cnt End -->
        <slot name="bottom"></slot>
      </div><!-- .c-cnt End -->
      <!-- //data -->
      <div class="r-cnt"><slot name="right"></slot></div>
    </div><!-- .row-unit-box End -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'


export default {
  components: {
    Swiper, SwiperSlide,
  },
  props: {
    unitData: {
      type: Object,
      default: ()=>{ return null },
    },
    /* infoBoxClass : {
      type: String,
      default: ()=>{ return null },
    }, */
    brandClass : {
      type: String,
      default: ()=>{ return null },
    },
    wonHidden : {
      type: Boolean,
      default: ()=>{ return false },
    },
    imgSize : {
      type : String,
      default : null
    }
  },
  data: () => ({
    data: null,
    swiper: null,
    selectedIndex: 0,
  }),
  watch: {
    unitData(){
      const me = this
      me.data = me.unitData
    }
  },
  created() {
    const me = this
    me.data = me.unitData
  },
  mounted() {
    
  },
  methods: {
    swipeInit(){
      const me = this
      me.$nextTick(function(){
        me.swiper = me.$el.querySelector(".product-image-swiper").swiper
      })
    },
    slideChange(){
      const me = this
      if(me.swiper){
        me.selectedIndex = me.swiper.realIndex
      }
    },
    selectColor(idx){
      const me = this
      if(me.selectedIndex === idx){ return }

      me.selectedIndex = idx
    },
    replacePercent(str){
      try{
        return str.replace("%", "<em>%</em>")
      }catch(e){
        return ""
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
