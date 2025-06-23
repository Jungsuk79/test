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
          <div class="pc-event2023-detail06">
            <div class="img-area">
              <img src="https://img.thehandsome.com/md/publish/dummy/pc/event/06/pc_detail_01.jpg"/>
            </div>
            <div class="img-area">
              <img src="https://img.thehandsome.com/md/publish/dummy/pc/event/06/pc_detail_02.jpg"/>
            </div>
            <div class="img-area">
              <img src="https://img.thehandsome.com/md/publish/dummy/pc/event/06/pc_detail_03.jpg"/>
            </div>
            <!-- <div class="img-area">
              <img src="https://img.thehandsome.com/md/publish/dummy/pc/event/06/pc_detail_04.jpg"/>
            </div>
            <div class="img-area">
              <img src="https://img.thehandsome.com/md/publish/dummy/pc/event/06/pc_detail_05.jpg"/>
            </div> -->
            <div class="img-area">
              <img src="https://img.thehandsome.com/md/publish/dummy/pc/event/06/pc_detail_06.jpg"/>
            </div>
            <div class="img-area">
              <img src="https://img.thehandsome.com/md/publish/dummy/pc/event/06/pc_detail_07.jpg"/>
            </div>
            <div class="img-area">
              <div id="noticeBtn">
                <img class="open" src="https://img.thehandsome.com/md/publish/event/event06_hotel/fo-event06-btn01.jpg"/>
                <img class="close" src="https://img.thehandsome.com/md/publish/event/event06_hotel/fo-event06-btn02.jpg"/>
              </div>
              <div class="notice-img">
                <img src="https://img.thehandsome.com/md/publish/event/event06_hotel/fo-event06-notice.jpg"/>
              </div>
            </div>
          </div>
          <style type="text/css">
            .pc-event2023-detail06 .img-area{display: block;}
            .pc-event2023-detail06 .img-area img{display: block; margin:0 auto;}
            .pc-event2023-detail06 #noticeBtn{display: block; cursor:pointer;}
            .pc-event2023-detail06 #noticeBtn .close{display: none;}
            .pc-event2023-detail06 #noticeBtn .open{display: block;}
            .pc-event2023-detail06 #noticeBtn+.notice-img{max-height:0; overflow:hidden; transition: all 0.5s;}
            .pc-event2023-detail06 #noticeBtn.on+.notice-img{max-height:5000px; overflow:hidden; transition: all 0.8s;}
            .pc-event2023-detail06 #noticeBtn.on .close{display: block;}
            .pc-event2023-detail06 #noticeBtn.on .open{display: none;}
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
  mounted(){
    const tgbtn01 = document.getElementById('noticeBtn');
    tgbtn01.addEventListener('click', function() {
      if (tgbtn01.classList.contains('on')) {
        tgbtn01.classList.remove('on');
      } else {
        tgbtn01.classList.add('on');
      }
    });
  },
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/event.scss'; 
</style>
