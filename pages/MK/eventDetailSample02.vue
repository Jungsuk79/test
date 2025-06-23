<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="event-detail">
        <div class="e-title type2"><!-- 230110 단순클릭응모형 : type2 클래스 추가 -->
          <h4>상품평 마일리지 혜택</h4>
          <v-layout align-center>
            <div class="cmp-labels">
              <span class="label black">종료</span>
            </div>
            <p>2021.12.07 ~ 2021.12.26</p>
          </v-layout>
        </div>
        <div class="html-area" style="text-align:center;">
          <!-- html 등록 영역 시작 -->
           <!-- 24.12.31 상품평 수정 -->
          <div class="pc-event2023-detail02">
            <div class="mileage-video">
              <video playsinline autoplay="autoplay" muted="muted" loop="loop">
                  <source src="https://cdn-img.thehandsome.com/md/publish/event/241015_REVIEW/PC_k.mp4" type="video/mp4" />
              </video>
            </div>
            <div id="review-tabcover">
              <div class="atag-cover">
                <a class="on" href="#tab1">
                  <img class="off" src="https://img.thehandsome.com/md/publish/event/241231_REVIEW/pc-tab1.jpg"/>
                  <img src="https://img.thehandsome.com/md/publish/event/241231_REVIEW/pc-tab1-on.jpg"/>
                </a>
                <a href="#tab2">
                  <img class="off" src="https://img.thehandsome.com/md/publish/event/241231_REVIEW/pc-tab2.jpg"/>
                  <img src="https://img.thehandsome.com/md/publish/event/241231_REVIEW/pc-tab2-on.jpg"/>
                </a>
                <a href="#tab3">
                  <img class="off" src="https://img.thehandsome.com/md/publish/event/241231_REVIEW/pc-tab3.jpg"/>
                  <img src="https://img.thehandsome.com/md/publish/event/241231_REVIEW/pc-tab3-on.jpg"/>
                </a>
                <a href="#tab4">
                  <img class="off" src="https://img.thehandsome.com/md/publish/event/241231_REVIEW/pc-tab4.jpg"/>
                  <img src="https://img.thehandsome.com/md/publish/event/241231_REVIEW/pc-tab4-on.jpg"/>
                </a>
                <a href="#tab5">
                  <img class="off" src="https://img.thehandsome.com/md/publish/event/241231_REVIEW/pc-tab5.jpg"/>
                  <img src="https://img.thehandsome.com/md/publish/event/241231_REVIEW/pc-tab5-on.jpg"/>
                </a>
              </div>
            </div>
            <div class="img-area">
              <img src="https://img.thehandsome.com/md/publish/event/241231_REVIEW/pc-img02.jpg"/>
            </div>
            <div id="tab1" class="img-area tab-div">
              <img src="https://img.thehandsome.com/md/publish/event/241231_REVIEW/pc-img03.jpg"/>
            </div>
            <div id="tab2" class="img-area tab-div">
              <img src="https://img.thehandsome.com/md/publish/event/241231_REVIEW/pc-img04.jpg"/>
            </div>
            <div id="tab3" class="img-area tab-div">
              <img src="https://img.thehandsome.com/md/publish/event/241231_REVIEW/pc-img05.jpg"/>
            </div>
            <div id="tab4" class="img-area tab-div">
              <img src="https://img.thehandsome.com/md/publish/event/241231_REVIEW/pc-img06.jpg"/>
            </div>
            <div id="tab5" class="img-area tab-div link-box">
              <a href="https://www.thehandsome.com/ko/ME/myPageMain">상품평 작성 바로가기</a>
              <img src="https://img.thehandsome.com/md/publish/event/241231_REVIEW/pc-img07.jpg"/>
            </div>
          </div>
          <style type="text/css">
            html{scroll-behavior: smooth;}
            .pc-event2023-detail02 #review-tabcover{background:#000; width:100%; position: sticky; top: 64px; z-index:2; padding-bottom: 1px;}
            .pc-event2023-detail02 #review-tabcover .atag-cover{width:63.021%; margin: 0 auto; display: flex; white-space: nowrap;}
            .pc-event2023-detail02 #review-tabcover .atag-cover a{display: inline-block; height:100%; text-decoration: none; flex-shrink: 0;}
            .pc-event2023-detail02 #review-tabcover .atag-cover a:nth-child(1){width:15.207%;}
            .pc-event2023-detail02 #review-tabcover .atag-cover a:nth-child(2){width:23.223%;}
            .pc-event2023-detail02 #review-tabcover .atag-cover a:nth-child(3){width:23.306%;}
            .pc-event2023-detail02 #review-tabcover .atag-cover a:nth-child(4){width:23.223%;}
            .pc-event2023-detail02 #review-tabcover .atag-cover a:nth-child(5){width:15.041%;}
            .pc-event2023-detail02 #review-tabcover .atag-cover a img{display:none; height:100%; width: auto;}
            .pc-event2023-detail02 #review-tabcover .atag-cover a img.off{display:block;}
            .pc-event2023-detail02 #review-tabcover .atag-cover a.on img{display:block;}
            .pc-event2023-detail02 #review-tabcover .atag-cover a.on img.off{display:none;}
            .pc-event2023-detail02 .mileage-video,
            .pc-event2023-detail02 .img-area{display: block;}
            .pc-event2023-detail02 .mileage-video video{display: block; margin:0 auto; width: 100%;}
            .pc-event2023-detail02 .img-area.tab-div{margin-top:calc(-64px + -6.8%); padding-top:calc(64px + 6.8%);}
            .pc-event2023-detail02 .img-area img{display: block; margin:0 auto;}
            .pc-event2023-detail02 .img-area.link-box{position:relative;}
            .pc-event2023-detail02 .img-area.link-box a{position: absolute;width: 43.6%;height: 6.2%;text-indent: -9999px; font-size:0; color:transparent !important; left:28.1%; bottom:0;}
          </style>
           <!-- //24.12.31 상품평 수정 -->
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
  // 24.12.31 상품평 수정
  mounted(){
    const tabs = document.querySelectorAll('#review-tabcover a');

    tabs.forEach(tab => {
      tab.addEventListener('click', (event) => {
        // 모든 a 태그에서 "on" 클래스 제거
        tabs.forEach(tab => tab.classList.remove('on'));

        // 클릭한 a 태그에 "on" 클래스 추가
        tab.classList.add('on');
      });
    });
  },
  methods: {
  },
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/event.scss'; 
</style>
