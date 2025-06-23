<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="event-detail">
        <div class="e-title type2"><!-- 230110 단순클릭응모형 : type2 클래스 추가 -->
          <h4>더한섬하우스 이벤트 모아보기</h4>
          <v-layout align-center>
            <div class="cmp-labels">
              <span class="label black">종료</span>
            </div>
            <p>2021.12.07 ~ 2021.12.26</p>
          </v-layout>
        </div>
        <div class="html-area" style="text-align:center;">
          <!-- html 등록 영역 시작 -->
          <div class="pc-event2023-detail01">
            <div class="img-area handsome_haus">
              <a class="link busan" href="#n">더한섬하우스 부산</a><!-- 더한섬하우스 부산 링크 : href="링크" 입력  -->
              <a class="link gwangju" href="#n">더한섬하우스 광주</a><!-- 더한섬하우스 광주 링크 : href="링크" 입력  -->
              <a class="link jeju" href="#n">더한섬하우스 제주</a><!-- 더한섬하우스 제주 링크 : href="링크" 입력  -->
              <a class="link cheongju" href="#n">더한섬하우스 청주 확장</a><!-- 더한섬하우스 청주 확장 링크 : href="링크" 입력  -->
              <a class="link cheongju2" href="#n">더한섬하우스 청주</a><!-- 더한섬하우스 청주 링크 : href="링크" 입력  -->
              <a class="link insta" href="#n">인스타</a><!-- 더한섬하우스 인스타 링크 : href="링크" 입력  -->
              <img src="https://img.thehandsome.com/md/publish/dummy/pc/event/01/pc_detail.jpg"/>
            </div>
          </div>
          <style type="text/css">
          .pc-event2023-detail01 .img-area{display: block;}
          .pc-event2023-detail01 .img-area img{display: block; margin:0 auto;}
          .pc-event2023-detail01 .img-area.handsome_haus{position:relative;}
          .pc-event2023-detail01 .img-area.handsome_haus a.link{position: absolute;text-indent: -9999px; font-size:0; color:transparent !important; top:19.3%; width:17.5%; height:32.6%;}
          .pc-event2023-detail01 .img-area.handsome_haus a.link.busan{left:22.2%;}
          .pc-event2023-detail01 .img-area.handsome_haus a.link.gwangju{left:41.2%;}
          .pc-event2023-detail01 .img-area.handsome_haus a.link.jeju{right:22.2%;}
          .pc-event2023-detail01 .img-area.handsome_haus a.link.cheongju{width:27.1%; height:17.3%;left:22.2%; top:58.1%;}
          .pc-event2023-detail01 .img-area.handsome_haus a.link.cheongju2{width:27.1%; height:17.3%;right:22.2%; top:58.1%;}
          .pc-event2023-detail01 .img-area.handsome_haus a.link.insta{width:20.7%; height:2.7%;left:50%; margin-left: -10.35%;top:unset;bottom:3.2%;}
          </style>
          <!-- html 등록 영역 끝 -->
        </div>
        <div class="info-text-wrap">
          <h5 class="list-title">꼭 읽어주세요!</h5>
          <!--20221205 BO등록형식에 맞춰 수정-->
          <div class="evt-info-dotype">
            <p>본 이벤트는 한섬에서만 진행됩니다.</p>
            <p>2021년 12월 구매 금액이 50만원 미만일 경우 지급 대상에서 제외됩니다.</p>
            <p>이 영역은 BO에서 이벤트관련 안내 고지 작성하는 영역입니다.</p>
            <p>이 영역은 BO에서 이벤트관련 안내 고지 작성하는 영역입니다.</p>
          </div>
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
