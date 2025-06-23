<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="event-detail">
        <div class="e-title type2"><!-- 230110 단순클릭응모형 : type2 클래스 추가 -->
          <h4>신규회원님을 위한 특별 혜택</h4>
          <v-layout align-center>
            <div class="cmp-labels">
              <span class="label black">종료</span>
            </div>
            <p>2021.12.07 ~ 2021.12.26</p>
          </v-layout>
        </div>
        <div class="html-area" style="text-align:center;">
          <!-- html 등록 영역 시작 -->
          <div class="pc-event2023-detail03">
            <div class="img-area">
              <img src="https://img.thehandsome.com/md/publish/dummy/pc/event/03/pc_detail_01.jpg"/>
            </div>
            <div class="img-area">
              <img src="https://img.thehandsome.com/md/publish/dummy/pc/event/03/pc_detail_02.jpg"/>
            </div>
            <div class="img-area">
              <img src="https://img.thehandsome.com/md/publish/dummy/pc/event/03/pc_detail_03.jpg"/>
            </div>
            <div class="img-area">
              <img src="https://img.thehandsome.com/md/publish/dummy/pc/event/03/pc_detail_04.jpg"/>
            </div>
            <div class="img-area link-box">
              <a class="ios-btn" href="#n">ios 앱 다운로드</a><!-- ios 앱 다운로드 링크 : href="링크" 입력  -->
              <a class="android-btn" href="#n">안드로이드 앱 다운로드</a><!-- 안드로이드 앱 다운로드 링크 : href="링크" 입력  -->
              <img src="https://img.thehandsome.com/md/publish/dummy/pc/event/03/pc_detail_05.jpg"/>
            </div>
            <div class="img-area link-box">
              <a class="join-btn" href="#n">더한섬닷컴 통합회원 가입하기 </a><!-- 더한섬닷컴 통합회원 가입하기 : href="링크" 입력  -->
              <a class="theclub-btn" href="#n">THE 클럽 혜택 보러가기</a><!-- THE 클럽 혜택 보러가기 : href="링크" 입력  -->
              <img src="https://img.thehandsome.com/md/publish/dummy/pc/event/03/pc_detail_06.jpg"/>
            </div>
          </div>
          <style type="text/css">
            .pc-event2023-detail03 .img-area{display: block;}
            .pc-event2023-detail03 .img-area img{display: block; margin:0 auto;}
            .pc-event2023-detail03 .img-area.link-box{position:relative;}
            .pc-event2023-detail03 .img-area.link-box a{position: absolute;width: 25.7%;height: 12.3%;text-indent: -9999px; font-size:0; color:transparent !important; bottom:14.6%;}
            .pc-event2023-detail03 .img-area.link-box a.ios-btn{left:24.0%;}
            .pc-event2023-detail03 .img-area.link-box a.android-btn{right:24.0%;}
            .pc-event2023-detail03 .img-area.link-box a.join-btn{left:18.8%;bottom:4.8%;width: 30.7%;height: 7.8%;}
            .pc-event2023-detail03 .img-area.link-box a.theclub-btn{right:18.8%;bottom:4.8%;width: 30.7%;height: 7.8%;}
          </style>
          <!-- html 등록 영역 끝 -->
        </div>
        <div class="swiper-wrap">
          <div class="cmp-sub-tit">
            <h3 class="tit">최신 이벤트</h3>
          </div>
          <div class="cmp-swiper-box btn-large search-swiper">
            <Swiper
              :options="{
                slidesPerView: 5,
                slidesPerGroup : 5,
                spaceBetween: 25,
                navigation: {
                  prevEl: '.planshop-prev-btn',
                  nextEl: '.planshop-next-btn',
                },
              }"
              :class="{'swiper-no-swiping':eventList.list.length <= 5}"
            >
              <SwiperSlide v-for="(item, index) in eventList.list" :key="index">
                <div class="swiper-unit">
                  <nuxt-link to="#none">
                    <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png" aspect-ratio="1" alt="상품 이미지"></v-img>
                    <p class="swiper-title">{{item.title}}</p>
                    <p class="swiper-text">{{item.date}}</p>
                  </nuxt-link>
                </div>
              </SwiperSlide>
            </Swiper>
            <template v-if="eventList.list.length > 5">
              <div slot="button-prev" class="swiper-button-prev swiper-no-swiping planshop-prev-btn"><i v-cmp-icon="{size:32, name:'prev', invert:1}">이전</i></div>
              <div slot="button-next" class="swiper-button-next swiper-no-swiping planshop-next-btn"><i v-cmp-icon="{size:32, name:'next', invert:1}">다음</i></div>
            </template>
          </div>       
        </div>
        <div class="bottom-btn">
          <v-btn large outlined color="primary" class="html-btn gray-outlined">목록</v-btn><!-- [퍼블수정]23.01.26 class gray-outlined 추가 -->
        </div>
      </div>

    </div>
    <script src="/scripts/event-detail-swiper.js"></script><!-- 230224 이벤트 : html script 추가 -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  layout: 'LayoutBasics',
  components : {
    Swiper,
    SwiperSlide,
  },  
  data: () => ({
    eventList : { // swiper data
      list:[
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '앱 다운로드 이벤트',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '더한섬닷컴 X 스마일페이 12월 첫 결제',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '더한섬닷컴 X 스마일페이 12월 첫 결제 더한섬닷컴 X 스마일페이 12월 첫 결제',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '앱 다운로드 이벤트',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '더한섬닷컴 X 스마일페이 12월 첫 결제',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '더한섬닷컴 X 스마일페이 12월 첫 결제',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '앱 다운로드 이벤트',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '더한섬닷컴 X 스마일페이 12월 첫 결제',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '더한섬닷컴 X 스마일페이 12월 첫 결제',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '앱 다운로드 이벤트',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '더한섬닷컴 X 스마일페이 12월 첫 결제',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '더한섬닷컴 X 스마일페이 12월 첫 결제',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
      ],
    },         
  }),
  methods: {
  },
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/event.scss'; 
</style>
