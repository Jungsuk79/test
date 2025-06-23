
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
          <div class="pc-event2024-seolbenefit">
            <div class="img-area">
              <img src="https://img.thehandsome.com/md/publish/event/240123_seolbenefit/pc-img01.jpg" alt="설레는 베네핏 - 연휴 배송 휴무에 대한 아쉬움을 달래줄 스페셜・어썸・럭키한 베네핏 / 2.8(수) - 2.12(월), 5일간" />
            </div>
            <div class="img-area">
              <img src="https://img.thehandsome.com/md/publish/event/240123_seolbenefit/pc-img02.jpg" alt="BENEFIT 01 - 설 스페셜 쿠폰" />
            </div>
          </div>
          <!-- 쿠폰 등록 영역 -->
          <!-- {{ couponArea }} -->
          <div class="pc-event2024-seolbenefit">
            <!-- 해당 혜택 삭제 -->
            <!-- <div class="img-area">
              <img src="https://img.thehandsome.com/md/publish/event/240123_seolbenefit/pc-img03.jpg" alt="BENEFIT 02 - TOP24 어썸 기프트 / 구매금액 상위 24분께 매월 5만원씩, 연간 총 50만원 쇼핑 혜택!" />
            </div> -->
            <div class="img-area">
              <button class="open_popup" @click="openPopup()">Click</button>
              <img class="click-img" src="https://img.thehandsome.com/md/publish/event/240123_seolbenefit/mo-click.png" alt="click" />
              <img class="gif-img" src="https://img.thehandsome.com/md/publish/event/240123_seolbenefit/pc-img04.png" alt="BENEFIT 03 - 럭키 행운의 리워드 / 구매에 감사드리며, 랜덤 리워드를 드려요!/ 기간 내 ID당 1회" />
              <img src="https://img.thehandsome.com/md/publish/event/240123_seolbenefit/pc_gif.gif" alt="마일리지-24,000M / 쿠폰-30,000원 / 쿠폰-10,000원" />
            </div>
            <div class="img-area">
              <a class="link" href="https://www.thehandsome.com/ko/MK/event/15347">혜택 자세히 보기</a>
              <img src="https://img.thehandsome.com/md/publish/event/240123_seolbenefit/pc-img05.jpg" alt="BENEFIT 04 - 삼성카드 결제 혜택 / 기간 - 2024.2.8 (목) ~ 소진 시 종료/ 내용 - 삼성카드로 50만원 이상 결제 시 1만원 즉시 할인/ 대상 - 더한섬닷컴 전 상품" />
            </div>
            <div class="popup-wrap" id="popWrap">
              <div class="popup-body">
                <button class="close_popup" @click="closePopup()">close</button>
                <img src="https://img.thehandsome.com/md/publish/event/240123_seolbenefit/popup_1.jpg" alt="LUCKY - 24,000M 마일리지 당첨! / 올해의 주인공은 바로 나! 청룡의 기운을 받아 힘차게 도약하는 한 해 꿈을 펼치고 날아오르는 한 해가 되세요/ 2월 21일 지급" />
                <!-- <img src="https://img.thehandsome.com/md/publish/event/240123_seolbenefit/popup_2.jpg" alt="LUCKY - 30,000M 상품 쿠폰 당첨! / 갑진년 누구보다 값진 한 해가 될 거에요! 새로운 도전을 두려워 하지 말고 용기 있게 실행해 보세요/ 2월 21일 지급" /> -->
                <!-- <img src="https://img.thehandsome.com/md/publish/event/240123_seolbenefit/popup_3.jpg" alt="LUCKY - 10,000M 상품 쿠폰 당첨! / 행운과 평안이 가득한 새해가 될 거에요 2024년 보내게 될 모든 순간이 소중하고 값질 거에요/ 2월 21일 지급" /> -->
                <!-- <img src="https://img.thehandsome.com/md/publish/event/240123_seolbenefit/popup_4.jpg" alt="로그인 후 참여 가능합니다" /> -->
                <!-- <img src="https://img.thehandsome.com/md/publish/event/240123_seolbenefit/popup_5.jpg" alt="이미 참여하셨습니다 감사합니다" /> -->
                <!-- <img src="https://img.thehandsome.com/md/publish/event/240123_seolbenefit/popup_6.jpg" alt="이벤트 대상이 아닙니다 * 본인 인증을 완료한 회원만 참여 가능" /> -->
                <!-- <img src="https://img.thehandsome.com/md/publish/event/240123_seolbenefit/popup_7.jpg" alt="이벤트 대상이 아닙니다 * 이벤트 기간 구매 이력이 있는 고객 대상 참여 가능" /> -->
              </div>
              <button class="bg_popup" @click="closePopup()">close</button>
            </div>
          </div>
          <style type="text/css">
          .pc-event2024-seolbenefit{display: block;}
          .pc-event2024-seolbenefit .img-area{display: block;position:relative;}
          .pc-event2024-seolbenefit .img-area img{display: block; margin:0 auto;}
          .pc-event2024-seolbenefit .img-area img.gif-img{position: absolute; width: 100%; height: 100%; top: 0; bottom: 0; left: 0; right: 0;}
          .pc-event2024-seolbenefit .img-area img.click-img{position: absolute; width: 7.291666666666667%; height: auto; top: 63.5%; left: 50%; transform: translateX(-50%); animation-timing-function: ease-in-out; animation-iteration-count: infinite; animation-name: move1; animation-duration: 1.3s;}
          .pc-event2024-seolbenefit .img-area button.open_popup{position: absolute;text-indent: -9999px; font-size:0; color:transparent !important; left: 39%; top: 46%; width: 22%; height: 42%;z-index: 1;}
          .pc-event2024-seolbenefit .img-area a.link{position: absolute;text-indent: -9999px; font-size:0; color:transparent !important; top: 64.3%; width: 19.4%; height: 9.8%; left: 49.9%;}
          .pc-event2024-seolbenefit .popup-wrap{display:none;align-items:center;justify-content:center;width:100%;height:100%;position:fixed;top:0;right:0;bottom:0;left:0;z-index:5;background:rgba(0, 0, 0, .5);}
          .pc-event2024-seolbenefit .popup-wrap .popup-body{position:relative; min-width:446px; max-width:603px; width:31.4%; max-height: 90%; overflow: hidden;z-index: 7;}
          .pc-event2024-seolbenefit .popup-wrap .popup-body img{width: 100%; height: auto;}
          .pc-event2024-seolbenefit .popup-wrap .popup-body .close_popup{position: absolute; width: 90px; height: 90px; top: 0; right: 0;text-indent: -9999px; font-size:0; color:transparent !important; }
          .pc-event2024-seolbenefit .popup-wrap .bg_popup{position: absolute; width: 100%; height: 100%; top: 0; bottom: 0; left: 0; right: 0;text-indent: -9999px; font-size:0; color:transparent !important; z-index: 6;}
          @keyframes move1 {
            0% {margin-top: -5px;} 50% {margin-top: 10px;} 100% {margin-top: -5px;}
          }
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
    previousScrollPosition: 0,
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
    openPopup() {
      const popup = document.getElementById("popWrap")
    
      if (popup.style.display === "flex") {
        return;
      }
    
      this.previousScrollPosition = window.pageYOffset || document.documentElement.scrollTop
    
      popup.style.display = "flex"
    
      // 스크롤 잠금
      const bodyElement = document.body
            bodyElement.style.position = "fixed"
            bodyElement.style.top = `-${this.previousScrollPosition}px`
    },
    
    closePopup() {
      const popup = document.getElementById("popWrap")
    
      popup.style.display = "none"
    
      // 스크롤 잠금 해제
      const bodyElement = document.body
            bodyElement.style.position = ""
            bodyElement.style.top = ""
    
      // 이전 스크롤 위치로 스크롤 이동
      window.scrollTo(0, this.previousScrollPosition)
    }
  },
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/event.scss'; 
</style>
