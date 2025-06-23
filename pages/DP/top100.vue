<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="cmp-page-tit">
        <h2 class="tit">TOP 100</h2>
      </div>

      <!-- s 탭메뉴 -->
      <div class="cmp-tabs tabs-actionTop">
        <v-tabs v-model="top100mainTab" fixed-tabs>
        <v-tab>카테고리</v-tab>
        <v-tab>브랜드</v-tab>
        </v-tabs>
      </div>
      <!-- e 탭메뉴 -->

      <!-- s 탭내용 -->
      <div class="tab-content">
          <v-tabs-items v-model="top100mainTab" touchless>
          <!-- s 카테고리 -->
          <v-tab-item :transition="false">
            <v-layout justify-start align-center class="mt-20 pt-2 mb-44">
              <div class="cmp-tabs tabs-actionText">
                <v-tabs v-model="selectedTab">
                    <v-tab v-for="(item,index) in planCateList" :key="index">
                      <span>{{item}}</span>
                    </v-tab>
                </v-tabs>
              </div>
            </v-layout>

            <div class="count-layout split-layout">
              <div class="product-count">{{100 | number}}개의 상품</div>
            </div>

            <ProductList :list="productList" :layout="4" :unit-type="productType" />

          </v-tab-item>
          <!-- e 카테고리 -->

          <!-- s 브랜드 내용 -->
          <v-tab-item :transition="false">
            <v-layout justify-start align-center class="mt-20 pt-2 mb-60">
              <div class="cmp-tabs tabs-actionText top100-case">
                <v-tabs v-model="selectedTab">
                  <v-tab v-for="(item,index) in planCateList2" :key="index" @click="scrollToTab(item)">
                    <span>{{item}}</span>
                  </v-tab>
                </v-tabs>
                <div class="tab-content" :class="{'toggle': !toggleBtn}">
                  <div class="top100-tab-cover">
                    <swiper
                      :options="{
                        slidesPerView: 'auto',
                        observer: true, 
                        observeParents: true,
                      }"
                      id="top-tab-swipe"
                      :class="{'swiper-no-swiping': !toggleBtn}"
                    >
                    <swiper-slide v-for="item, idx in brandList" :key="idx">
                      <button @click="changeTab(idx)" :class="{ 'on': tabSwipe === idx }">
                        <span class="show">{{ item }}{{ selectedTab + 1 }}</span>
                        <span class="hide">{{ item }}{{ selectedTab + 1 }}</span>
                      </button>
                    </swiper-slide>
                    </swiper>
                  </div>
                  <button class="toggle" @click="changeToggle()"><i class="cmp-icon-etc cmp-icon-down">열기/닫기</i></button>
                </div>
              </div>
            </v-layout>

            <div class="count-layout split-layout">
              <div class="product-count">{{100 | number}}개의 상품</div>
            </div>

            <ProductList :list="productList" :layout="4" :unit-type="productType" />

          </v-tab-item>
          <!-- e 브랜드 내용 -->
          </v-tabs-items>
      </div>
      <!-- e 탭내용 -->

    </div>                                                  
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    Swiper, SwiperSlide
  },
  layout: "LayoutBasics",
  data: () => ({
    top100mainTab: 0,
    selectedTab: 0,
    selectedbrandTab: 0,
    productType:"top100",
    productList: [],
    planCateList:[
      "전체", "여성", "남성", "잡화", "골프"
    ],
    planCateList2:[
      "한섬", "해외", "셀렉티드", "뷰티"
    ],
    brandList:[
      "전체", "TIME", "the CASHMERE", "SJSJ", "LANVIN COLLECTION", "MINE", "TIME HOMME", "SYSTEM HOMME", "O'2nd", "LÄTT", "OBZEE", "LANVIN BLANC", "LANVIN BLANC", "LANVIN BLANC", "LANVIN BLANC"
    ],
    tabSwipe: 0,
    toggleBtn: true
  }),
  created() {
    const me = this
    // 로컬 테스트 데이터
    const json = require("~/static/json/search_product_list.json")
    me.productList = json.list
    // 로컬 테스트 데이터
  },
  methods: {
    changeTab(index) {
      this.tabSwipe = index;
      const me = this
      me.$nextTick(() => {
        const slideToIndex = index;
        const swiper = me.$el.querySelector('#top-tab-swipe').swiper

        if(me.toggleBtn === true){
          swiper.slideTo(slideToIndex, 300, function () {
            me.changeTab(index);
          });
        }
        
      })
    },
    changeToggle(){
      const me = this
      if(me.toggleBtn === true){
        const swiper = me.$el.querySelector('#top-tab-swipe').swiper
        swiper.slideTo(0, 0)
        me.toggleBtn = false
      }else{
        const swiper = me.$el.querySelector('#top-tab-swipe').swiper
        me.toggleBtn = true
        setTimeout(() => {
          swiper.slideTo(me.tabSwipe, 300);
        }, 100);
      }
    },
    scrollToTab(){
      if(this.top100mainTab===1){
        const swiper = this.$el.querySelector('#top-tab-swipe').swiper
        this.tabSwipe = 0;
        swiper.slideTo(this.tabSwipe, 0);
      }
    }
  }
}
</script>
<style lang="scss">
</style>
