
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
          <div class="pc-eventfirstbrands">
            <img class="img" src="https://img.thehandsome.com/md/publish/event/240624_eventfirstbrands/pc-01.jpg" alt="처음이라 더 특별한 10% 추가 할인! OBZÉÉ · LÄTT · SJSJ · O’2ND first brands. 대상: OBZEE / LATT / SJSJ / O’2ND 브랜드 첫 구매 대상 고객(아울렛 상품 제외). 혜택:쇼핑백 쿠폰과 함께 사용 가능한 브랜드 정상 10% 상품 할인(발급일로부터 7일)" />

            <div>
              <div class="link-wrap">
                <img class="img" src="https://img.thehandsome.com/md/publish/event/240624_eventfirstbrands/pc-02.jpg" alt="ICONIC OBZÉÉ 쿠틔르적인 섬세함과 시크함을 담은 브랜드" />
                <a class="link link-01" href="https://www.thehandsome.com/ko/DP/brandMain/BR43">OBZÉÉ 바로가기</a> 
              </div>
              <div class="btn-wrap">
                <!-- [10%] OBZÉÉ 정상 상품 10% 다운 쿠폰 영역 -->
              </div>
            </div>

            <div>
              <div class="link-wrap">
                <img class="img" src="https://img.thehandsome.com/md/publish/event/240624_eventfirstbrands/pc-03.jpg" alt="LÄTT NORTHERN CREATIVE 북유럽의 창의적인 라이프스타일과 빛에서 영감받은 브랜드" />
                <a class="link link-02" href="https://www.thehandsome.com/ko/DP/brandMain/BR31">LÄTT 바로가기</a> 
              </div>
              <div class="btn-wrap">
                <!-- [10%] LÄTT 정상 상품 10% 다운 쿠폰 영역 -->
              </div>
            </div>

            <div>
              <div class="link-wrap">
                <img class="img" src="https://img.thehandsome.com/md/publish/event/240624_eventfirstbrands/pc-04.jpg" alt="SJSJ MODERN, ARTISTIC, FEMININE 예술적이고 모던하며 여성스러운 삶을 지향하는 브랜드" />
                <a class="link link-03" href="https://www.thehandsome.com/ko/DP/brandMain/BR04">SJSJ 바로가기</a> 
              </div>
              <div class="btn-wrap">
                <!-- [10%] SJSJ 정상 상품 10% 다운 쿠폰 영역 -->
              </div>
            </div>

            <div>
              <div class="link-wrap">
                <img class="img" src="https://img.thehandsome.com/md/publish/event/240624_eventfirstbrands/pc-05.jpg" alt="O’2ND ORIGIN ANOTHER 독창적이며 예술적인 무드와 자유로움을 담은 브랜드" />
                <a class="link link-04" href="https://www.thehandsome.com/ko/DP/brandMain/BR45">O’2ND 바로가기</a> 
              </div>
              <div class="btn-wrap">
                <!-- [10%] O’2ND 정상 상품 10% 다운 쿠폰 영역 -->
              </div>
            </div>

          </div>
          <style type="text/css">
          .pc-eventfirstbrands{display:block;}
          .pc-eventfirstbrands .img{display:block;width:100%;}
          .pc-eventfirstbrands .link-wrap, .pc-eventfirstbrands .btn-wrap{position:relative;}
          .pc-eventfirstbrands .link, .pc-eventfirstbrands .btn{display:inline-block;position:absolute;z-index:1;margin:0;box-sizing:border-box;text-indent:-9999px;color:transparent !important;}
          .pc-eventfirstbrands .link-01{bottom:18.095238%;right:26.875%;width:14.583333%;height:12.6984%;}
          .pc-eventfirstbrands .link-02{bottom:19.595238%;left:5.46875%;width:14.583333%;height:12.6984%;}
          .pc-eventfirstbrands .link-03{bottom:17.595238%;right:26.875%;width:14.583333%;height:12.6984%;}
          .pc-eventfirstbrands .link-04{bottom:18.795238%;left:5.46875%;width:14.583333%;height:12.6984%;}
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
