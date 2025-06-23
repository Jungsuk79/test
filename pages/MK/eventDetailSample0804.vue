<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="event-detail detail-coupon">
        <div class="e-title type2"><!-- 230110 단순클릭응모형 : type2 클래스 추가 -->
          <h4>ALL-NEW HANDSOME 리뉴얼 기념 이벤트</h4>
          <v-layout align-center>
            <div class="cmp-labels">
              <span class="label black">종료</span>
            </div>
            <p>2021.12.07 ~ 2021.12.26</p>
          </v-layout>
        </div>
        <div class="html-area" style="text-align:center;">
          <!-- html 등록 영역 시작 -->
          <div class="pc-event2023-detail08">
            <div class="e-d-video">
              <img src="https://img.thehandsome.com/md/publish/event/20230308_allnew/gp_renewal_open_event_0308_topbanner.jpg" alt="" class="e-d-img" />
              <div class="vod-cnt">
                <video autoplay="autoplay" preload="auto" muted controls="controls" loop playsinline="playsinline" controlsList="nodownload">
                  <source src="https://img.thehandsome.com/md/publish/event/20230308_allnew/renewal_open_event_0308_videoen.mp4" type="video/mp4">
                </video>
              </div>
            </div>
            <img src="https://img.thehandsome.com/md/publish/event/20230308_allnew/gp_renewal_open_event_0308_page01.jpg" alt="ALL ITEM 20% OFF!" class="e-d-img" />
          </div>
          <style type="text/css">
            .pc-event2023-detail08{position:relative;width:100%;overflow:hidden;}
            .pc-event2023-detail08 .e-d-img{display:block;width:100%;margin:0 auto;}
            .pc-event2023-detail08 .e-d-video{position:relative;}
            .pc-event2023-detail08 .e-d-video .vod-cnt{position:absolute;width:46.9%;left:26.5%;top:47.6%;}
            .pc-event2023-detail08 .e-d-video .vod-cnt video{display:block;width:100%;object-fit:cover;position:absolute;left:0;top:0;}
            .pc-event2023-detail08 .e-tab-cover{position:relative;}
            .pc-event2023-detail08 .e-tab-cover .e-tab-01{position:absolute;left:18.8%;top:0;width:20.8%;height:100%;text-indent:-999em;}
            .pc-event2023-detail08 .e-tab-cover .e-tab-02{position:absolute;left:39.6%;top:0;width:20.8%;height:100%;text-indent:-999em;}
            .pc-event2023-detail08 .e-tab-cover .e-tab-03{position:absolute;right:18.8%;top:0;width:20.8%;height:100%;text-indent:-999em;}
            .html-area{position:relative;padding-bottom:40px !important;border-bottom:1px solid #f0f0f0 !important;}
          </style>
          <div class="cpn-list">
            <div class="cpn-list-item">
              <div class="cpn">
                  <div class="cpn-top">
                    <p>[10%] 리뉴얼 기념 앱 전용 혜택</p>
                    <p class="cmp-labels">
                      <span class="label">앱전용</span>
                    </p>
                  </div>
                  <div class="cpn-info full">
                    <h4 class="value">10%</h4>
                    <p class="date">2023.03.14 까지 사용가능</p>
                  </div>
                  <div class="cpn-botm">
                    <button class="coupon-download">
                      다운받기
                    </button>
                  </div>
              </div>
              <p class="cpn-notice">
                <span>아울렛 5%</span>
              </p>
            </div>
          </div>
          <!-- html 등록 영역 끝 -->
        </div>
        <div class="event-inner">
          <div class="info-text-wrap">
            <h5 class="list-title">꼭 읽어주세요!</h5>
            <!--20221205 BO등록형식에 맞춰 수정-->
            <div class="evt-info-dotype">
              <ul>
                <li>본 이벤트는 한섬에서만 진행됩니다.</li>
                <li>2021년 12월 구매 금액이 50만원 미만일 경우 지급 대상에서 제외됩니다.</li>
                <li>이 영역은 BO에서 이벤트관련 안내 고지 작성하는 영역입니다.</li>
              </ul>
              <!-- <p>본 이벤트는 한섬에서만 진행됩니다.</p>
              <p>2021년 12월 구매 금액이 50만원 미만일 경우 지급 대상에서 제외됩니다.</p>
              <p>이 영역은 BO에서 이벤트관련 안내 고지 작성하는 영역입니다.</p>
              <p>이 영역은 BO에서 이벤트관련 안내 고지 작성하는 영역입니다.</p> -->
            </div>
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
