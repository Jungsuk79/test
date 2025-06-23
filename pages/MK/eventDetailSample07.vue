<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="event-detail">
        <div class="e-title type2"><!-- 230110 단순클릭응모형 : type2 클래스 추가 -->
          <h4>더한섬닷컴 멤버십 THE 클럽</h4>
          <v-layout align-center>
            <div class="cmp-labels">
              <span class="label black">종료</span>
            </div>
            <p>2021.12.07 ~ 2021.12.26</p>
          </v-layout>
        </div>
        <div class="html-area" style="text-align:center;">
          <!-- html 등록 영역 시작 -->
          <div class="pc-event2023-detail07">
            <div class="e-d-video">
              <img src="https://img.thehandsome.com/studio/goods/EVENT/pc_renewal_open_event_0301_01.jpg" alt="" class="e-d-img" />
              <div class="vod-cnt">
                <video autoplay="autoplay" preload="auto" muted controls="controls" loop playsinline="playsinline" controlsList="nodownload">
                  <source src="https://img.thehandsome.com/studio/goods/EVENT/pc_renewal_open_event_0301_video.mp4" type="video/mp4">
                </video>
              </div>
            </div>
            <div class="e-d-cnt0">
              <img src="https://img.thehandsome.com/studio/goods/EVENT/pc_renewal_open_event_0301_02.jpg" alt="" class="e-d-img" />
              <a href="https://www.thehandsome.com/ko/MK/event/10358" class="e-d-link">신규회원 더 많은 혜택 보기</a>
            </div>
            <img src="https://img.thehandsome.com/studio/goods/EVENT/pc_renewal_open_event_0301_03.jpg" alt="" class="e-d-img" />
            <div class="e-d-cnt1">
              <img src="https://img.thehandsome.com/studio/goods/EVENT/pc_renewal_open_event_0301_04.jpg" alt="" class="e-d-img" />
              <a href="https://www.thehandsome.com/ko/MK/event/10561" class="e-d-link">상품평 더 많은 혜택 보기</a>
            </div>
          </div>
          <style type="text/css">
            .pc-event2023-detail07{position:relative;width:100%;overflow:hidden;}
            .pc-event2023-detail07 .e-d-img{display:block;width:100%;margin:0 auto;}
            .pc-event2023-detail07 .e-d-video{position:relative;}
            .pc-event2023-detail07 .e-d-video .vod-cnt{position:absolute;width:62.5%;left:18.75%;top:43.4%;}
            .pc-event2023-detail07 .e-d-video video{display:block;width:100%;object-fit:cover;position:absolute;left:0;top:0;}
            .pc-event2023-detail07 .e-d-cnt0{position:relative;}
            .pc-event2023-detail07 .e-d-cnt0 .e-d-link{position:absolute;left:calc(50% - 12.1%);top:84.029%;width:24.2708%;height:0;padding-top:4.7%;text-indent:-999em;}
            .pc-event2023-detail07 .e-d-cnt1{position:relative;}
            .pc-event2023-detail07 .e-d-cnt1 .e-d-link{position:absolute;left:calc(50% - 12.1%);top:82.05%;width:24.2708%;height:0;padding-top:4.7%;text-indent:-999em;}
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
