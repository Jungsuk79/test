<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="event-detail detail-raffle">
        <div class="e-title">
          <h4>더한섬닷컴 5월 설문 이벤트</h4>
          <v-layout align-center>
            <div class="cmp-labels">
              <span class="label black">종료</span>
            </div>
            <p>2021.12.07 ~ 2021.12.26</p>
          </v-layout>
        </div>
        <div class="html-area" style="text-align:center;">
          <!-- 이미지 등록 영역 -->
          <img src="https://img.thehandsome.com/md/publish/event/event_raffle/pc-html01.png" alt="Kith Artist Series Capsule" />
          <!-- //이미지 등록 영역 -->
          
          <!-- 래플 이벤트 영역 -->
          <div class="raffle-area">
            <div class="timer-cover">
              <template v-if="timering">
                <p class="timer">02:10:36</p>
                <div class="cmp-labels">
                  <span class="label"><strong>6,200</strong>명 참여 중</span>
                </div>
              </template>
              <template v-else>
                <p v-if="timerend" class="timer">02:10:36</p>
                <p v-if="!timerend" class="timer">00:00:00</p>
                <div class="cmp-labels">
                  <span v-if="timerend" class="label"><strong>0000</strong>년 <strong>00</strong>월 <strong>00</strong>일 <strong>00</strong>시 오픈예정</span>
                  <span v-if="!timerend" class="label black c-white"><strong>8,000</strong>명 참여 완료</span>
                </div>
              </template>
            </div>
            <div class="prd-detail-top">
              <div class="swiper-box">
                <Swiper
                  :options="{
                    centeredSlides: true,
                    navigation: {
                      nextEl: '.evnt-top-swiper-next',
                      prevEl: '.evnt-top-swiper-prev',
                    }
                  }"
                  class="detail-top-swiper">
                  <SwiperSlide v-for="(item, index) in prdData.images" :key="index">
                    <div class="swiper-cnt">
                      <img :src="item.image_url" alt="상품이미지" class="img"/>
                    </div>
                  </SwiperSlide>
                  <div slot="button-prev" class="swiper-button-prev evnt-top-swiper-prev"></div>
                  <div slot="button-next" class="swiper-button-next evnt-top-swiper-next"></div>
                </Swiper>
              </div>
              <div class="detail-top-info">
                <div class="top-info-box">
                  <ul class="prd-category">
                    <li><nuxt-link to="#n">SJSJ</nuxt-link></li>
                  </ul>
                  <div class="prd-name">
                    <span>Kith for EDO Artist Nelson Crewneck Kith for EDO Artist Nelson Crewneck</span>
                  </div>
                  <div class="prd-price">
                    <p class="sell-price"><strong>556,500</strong>원</p>
                    <p class="price"><del>126,500</del>원</p>
                    <p class="discount"><em>20</em>%</p>
                  </div>
                  <p class="prd-number">TN2B9KTOG29NM1_DN</p>
                </div>
                <div class="top-info-box">
                  <dl class="prd-info align-center">
                    <dt>사이즈</dt>
                    <dd>
                      <ProductOptionSelect v-if="timerend" :size-data="optionSizeData" />
                      <div v-else class="option-size-select disabled-type">
                        <button disabled class="selected-item">사이즈 선택</button>
                      </div>
                    </dd>
                  </dl>
                </div>
                <div class="top-info-box">
                  <div class="prd-detail-btn">
                    <template v-if="timering">
                      <v-btn height="60" color="primary">응모하기</v-btn>
                    </template>
                    <template v-else>
                      <v-btn v-if="timerend" height="60" color="primary" disabled>오픈예정</v-btn>
                      <v-btn v-else height="60" color="primary" disabled>당첨자 발표 예정</v-btn>
                    </template>
                  </div>
                </div>
                <div class="top-info-box">
                  <div class="notice-cover">
                    <p>오프라인 매장 수령 드로잉</p>
                    <p>0000년 00월 00일 00시 당첨자 발표 예정</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- //래플 이벤트 영역 -->
        </div>
        <div class="event-inner">
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
    // s calendar
    today: '',
    attended: [], // 출석체크한 날짜
    // e calendar   
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
    optionSizeData : {
      select_idx : null,
      list : [
        {
          size_en : 'S',
          size_num : '82',
          state_msg : '소량재고',
          sold_out : false,
        },
        {
          size_en : 'M',
          size_num : '88',
          state_msg : '',
          sold_out : false,
        },
        {
          size_en : 'L',
          size_num : '94',
          state_msg : '',
          sold_out : false,
        },
        {
          size_en : 'XL',
          size_num : '100',
          state_msg : '재입고알림',
          sold_out : true,
        },
        {
          size_en : '2XL',
          size_num : '110',
          state_msg : '품절',
          sold_out : true,
        },
        {
          size_en : 'FREE',
          size_num : '',
          state_msg : '',
          sold_out : false,
        },
      ]
    },  
    prdData : {
      "images" : [
        {
            "image_url" : "https://img.thehandsome.com/md/publish/event/event_raffle/img_sample_01.png"
        },
        {
            "image_url" : "https://img.thehandsome.com/md/publish/event/event_raffle/img_sample_01.png"
        },
        {
            "image_url" : "https://img.thehandsome.com/md/publish/event/event_raffle/img_sample_01.png"
        },
        {
            "image_url" : "https://img.thehandsome.com/md/publish/event/event_raffle/img_sample_01.png"
        },
        {
            "image_url" : "https://img.thehandsome.com/md/publish/event/event_raffle/img_sample_01.png"
        },
      ]
    },
    timering:true,
    timerend:true,
  }),
  mounted(){
    // ---- 퍼블 화면 확인 용 Start
    if(location.search.includes("TEST_TYPE=2")){
      // 오픈 예정 CASE
      this.timering = false
      this.timerend = true
    }else if(location.search.includes("TEST_TYPE=3")){
      // 이벤트 종료 CASE
      this.timering = false
      this.timerend = false
    }
  },
  methods: {
  },
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/event.scss'; 
</style>
