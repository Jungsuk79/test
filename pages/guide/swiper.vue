<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <!-- -------------------    --------------------- -->
      <h3 class="guide-tit">pagination bullet</h3>
      <Swiper 
        :options="{
          pagination: {el: '.cmp-swiper-paginationBullet',clickable: true}
        }"
        :class="{'swiper-no-swiping':eventBanner.length <= 1}"
      >
        <SwiperSlide v-for="(item,index) in eventBanner" :key="index">
          <nuxt-link :to="item.link">
            <img :src="item.image" :alt="item.desc">
          </nuxt-link>
        </SwiperSlide>
        <div v-if="eventBanner.length > 1" slot="pagination" class="cmp-swiper-paginationBullet swiper-pagination"></div>
      </Swiper>
      <!-- -------------------    --------------------- -->
      <h3 class="guide-tit">prev/next 버튼</h3>
      <div style="width:492px">
        <div class="cmp-swiper-box w-auto">
          <Swiper ref="popularSwiper" 
            :options="{
              slidesPerView: 4,
              slidesPerGroup : 4,
              spaceBetween: 16,
              navigation: {
                prevEl: '.prev-btn-test-class',
                nextEl: '.next-btn-test-class',
              },
              // init:false
            }"
            :class="{'swiper-no-swiping':popularList.length <= 4}"
          >
            <SwiperSlide v-for="(item, index) in popularList" :key="index">
              <div class="swiper-prd-unit">
                <nuxt-link :to="item.link">
                  <v-img :src="item.image" alt="상품 이미지" class="prd-img"></v-img>
                  <span class="brand-name">{{item.brand_name}}</span>
                  <span class="sell-price">{{item.sell_price | number}}</span>
                </nuxt-link>
              </div>
            </SwiperSlide>
          </Swiper>
          <template v-if="popularList.length > 4">
            <div slot="button-prev" class="swiper-button-prev top-type1 swiper-no-swiping prev-btn-test-class"><i v-cmp-icon="{size:24, name:'prev', invert:1}">이전</i></div>
            <div slot="button-next" class="swiper-button-next top-type1 swiper-no-swiping next-btn-test-class"><i v-cmp-icon="{size:24, name:'next', invert:1}">다음</i></div>
          </template>
        </div>
      </div>

      <h3 class="guide-tit">prev/next 버튼 large size</h3>
      <div class="cmp-swiper-box btn-large search-swiper">
        <Swiper
          :options="{
            slidesPerView: 5,
            slidesPerGroup : 5,
            spaceBetween: 24,
            navigation: {
              prevEl: '.planshop-prev-btn',
              nextEl: '.planshop-next-btn',
            },
          }"
          :class="{'swiper-no-swiping':planshopList.list.length <= 5}"
        >
          <SwiperSlide v-for="(item, index) in planshopList.list" :key="index">
            <div class="swiper-unit">
              <nuxt-link :to="item.link">
                <v-img :src="item.image" aspect-ratio="1" alt="상품 이미지"></v-img>
                <span class="tit">{{item.title}}</span>
                <span class="txt bold">{{item.brand_name}}</span>
              </nuxt-link>
            </div>
          </SwiperSlide>
        </Swiper>
        <template v-if="planshopList.list.length > 5">
          <div slot="button-prev" class="swiper-button-prev swiper-no-swiping planshop-prev-btn"><i v-cmp-icon="{size:32, name:'prev', invert:1}">이전</i></div>
          <div slot="button-next" class="swiper-button-next swiper-no-swiping planshop-next-btn"><i v-cmp-icon="{size:32, name:'next', invert:1}">다음</i></div>
        </template>
      </div>
      <!-- -------------------    --------------------- -->
      <h3 class="guide-tit">prev/next 버튼 타입2</h3>
      <div class="cmp-swiper-box btn-type2">
        <Swiper 
          :options="{
            navigation: {
              prevEl: '.prev-btn-test-class2',
              nextEl: '.next-btn-test-class2',
            },
          }"
          :class="{'swiper-no-swiping':eventBanner.length <= 1}"
        >
          <SwiperSlide v-for="(item,index) in eventBanner" :key="index">
            <nuxt-link :to="item.link">
              <img :src="item.image" :alt="item.desc">
            </nuxt-link>
          </SwiperSlide>
        </Swiper>
        <div slot="button-prev" class="swiper-button-prev prev-btn-test-class2 swiper-no-swiping"><i v-cmp-icon="{size:24, name:'prev'}">이전</i></div>
        <div slot="button-next" class="swiper-button-next next-btn-test-class2 swiper-no-swiping"><i v-cmp-icon="{size:24, name:'next'}">다음</i></div>
      </div>
      <!-- -------------------    --------------------- -->
      <!-- -------------------    --------------------- -->
      <h3 class="guide-tit">prev/next 버튼 타입2 , 버튼 large size</h3>
      <div class="cmp-swiper-box btn-type2 btn-large">
        <Swiper 
          :options="{
            navigation: {
              prevEl: '.prev-btn-test-class4',
              nextEl: '.next-btn-test-class4',
            },
          }"
          :class="{'swiper-no-swiping':eventBanner.length <= 1}"
        >
          <SwiperSlide v-for="(item,index) in eventBanner" :key="index">
            <nuxt-link :to="item.link">
              <v-img :src="item.image" :alt="item.desc" />
            </nuxt-link>
          </SwiperSlide>
        </Swiper>
        <div slot="button-prev" class="swiper-button-prev prev-btn-test-class4 swiper-no-swiping"><i class="cmp-icon-etc cmp-icon-60 i-prev">이전</i></div>
        <div slot="button-next" class="swiper-button-next next-btn-test-class4 swiper-no-swiping"><i class="cmp-icon-etc cmp-icon-60 i-next">다음</i></div>
      </div>
      <!-- -------------------    --------------------- -->
      <h3 class="guide-tit">pagination progressbar</h3>
      <div style="width:332px">
        <div class="cmp-swiper-box w-auto">
          <Swiper 
            :options="{
              pagination: {
                el: '.cmp-swiper-paginationBar',
                type: 'progressbar',
              },
            }"
            :class="{'swiper-no-swiping':testImages.length <= 1}"
          >
            <SwiperSlide v-for="(item, index) in testImages" :key="index">
                <v-img :src="item" alt="" aspect-ratio="1" width="332"></v-img>
            </SwiperSlide>
            <div slot="pagination" class="swiper-pagination cmp-swiper-paginationBar"></div>
          </Swiper>
        </div>
      </div>
      <!-- -------------------    --------------------- -->
      <!-- -------------------    --------------------- -->
      <!-- -------------------    --------------------- -->
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  components : {
    Swiper,
    SwiperSlide,
  },
  layout: 'LayoutBasics',
  // 정렬버튼
  data: () => ({
    eventBanner : [ // 이벤트 배너
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/shoppingbag-banner.png',
        desc : 'SYSTEM HOMME 스포트라이트 온 타임옴므 CHECK OUT NOW',
        link : '#n',
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/shoppingbag-banner.png',
        desc : 'SYSTEM HOMME 스포트라이트 온 타임옴므 CHECK OUT NOW',
        link : '#n',
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/shoppingbag-banner.png',
        desc : 'SYSTEM HOMME 스포트라이트 온 타임옴므 CHECK OUT NOW',
        link : '#n',
      },
    ],
    popularList:[ // 추천상품
      {
        brand_name : 'SJSJ',
        sell_price : '355000',
        link : '#n',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/001.jpg',
      },
      {
        brand_name : 'SJSJ',
        sell_price : '355000',
        link : '#n',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/002.jpg',
      },
      {
        brand_name : 'SJSJ',
        sell_price : '355000',
        link : '#n',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/003.jpg',
      },
      {
        brand_name : 'SJSJ',
        sell_price : '355000',
        link : '#n',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/004.jpg',
      },
      {
        brand_name : 'SJSJ',
        sell_price : '355000',
        link : '#n',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/005.jpg',
      },
      {
        brand_name : 'SJSJ',
        sell_price : '355000',
        link : '#n',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/005.jpg',
      },
      {
        brand_name : 'SJSJ',
        sell_price : '355000',
        link : '#n',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/005.jpg',
      },
      {
        brand_name : 'SJSJ',
        sell_price : '355000',
        link : '#n',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/005.jpg',
      },
    ],
    testImages : ['https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-0.png','https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-1.png','https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-2.png','https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-3.png',],
    planshopList : { // 기획전
        title_link : '#n',
        total:24,
        list:[
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-planshop-thumb0.png',
            title : '타임옴므 윈터 니트컬렉션',
            brand_name : 'TIME HOMME',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-planshop-thumb1.png',
            title : '21FW 시즌오프 ~50%',
            brand_name : 'TOM & FORUM',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-planshop-thumb0.png',
            title : '타임옴므 윈터 니트컬렉션',
            brand_name : 'TIME HOMME',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-planshop-thumb1.png',
            title : '21FW 시즌오프 ~50%',
            brand_name : 'TOM & FORUM',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-planshop-thumb0.png',
            title : '타임옴므 윈터 니트컬렉션',
            brand_name : 'TIME HOMME',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-planshop-thumb1.png',
            title : '21FW 시즌오프 ~50%',
            brand_name : 'TOM & FORUM',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-planshop-thumb0.png',
            title : '타임옴므 윈터 니트컬렉션',
            brand_name : 'TIME HOMME',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-planshop-thumb1.png',
            title : '21FW 시즌오프 ~50%',
            brand_name : 'TOM & FORUM',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-planshop-thumb0.png',
            title : '타임옴므 윈터 니트컬렉션',
            brand_name : 'TIME HOMME',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-planshop-thumb1.png',
            title : '21FW 시즌오프 ~50%',
            brand_name : 'TOM & FORUM',
            link : '#n',
          },
        ],
      },
  }),
  methods: {
    
  },
}
</script>
<style lang="scss" scoped>
  .guide-tit{
    font-size:1.8rem;margin-bottom:20px;
    &:not(:first-child){margin-top:40px;}
  }
  @import '@/assets/scss/pages/search.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>
