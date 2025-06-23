
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
          <div class="pc-eventdutyfree">
            <img class="img" src="https://img.thehandsome.com/md/publish/event/240408_dutyfree/pc-01.jpg" alt="THE PLUS+ X THE SHILLA duty free 오직 더플러스⁺ 고객님만을 위한 신라면세점 쇼핑 혜택" />
            <img class="img" src="https://img.thehandsome.com/md/publish/event/240408_dutyfree/pc-02.jpg" alt="신라면세점 단독 쇼핑 혜택으로 설레는 여행을 준비 해보세요! 대상:더한섬닷컴 더플러스⁺ 회원, 혜택:신라면세점 멤버십 다이아몬드 등급, 기간:2024. 04. 30(화) - 2024. 10. 31(목)" />
            <img class="img" src="https://img.thehandsome.com/md/publish/event/240408_dutyfree/pc-03.jpg" alt="온라인 면세점 혜택. 적립금 300만원 (결제금액의 최대 30%까지 사용 가능), S.Rewards 610,000p (구매금액 조건 있음 전액 사용 가능), 제휴 적립금 15,000원 ($100 이상 구매 시 사용 가능), THE PLUS+ 특별구매 딜 (더플러스 고객님을 위한 특별한 이벤트)" />

            <div class="btn-coupon-wrap">
              <!-- 쿠폰 확인하기 버튼 -->
              <button v-if="!isCouponNum" class="btn-cp" @click="isCouponNum = true">신라면세점 쿠폰 확인하기</button>
              
              <!-- 쿠폰번호 노출 영역 -->
              <div v-else class="coupon-num-wrap">
                <span class="coupon-num">{{ couponNumber }}</span>
                <button class="btn-copy" @click="copyCouponNumer">복사하기</button>
              </div>
            </div>

            <div class="link-wrap">
              <a class="link" href="https://www.shilladfs.com/estore/kr/ko/event/eventView?eventId=E72281&affl_id=903438">신라면세점 쿠폰 등록 하러가기</a>
            </div>

          </div>
          <style type="text/css">
          .pc-eventdutyfree{display:block;}
          .pc-eventdutyfree .img{display:block;width:100%;}
          .pc-eventdutyfree .link-wrap, .pc-eventdutyfree .btn-coupon-wrap{display:flex;align-items:center;justify-content:center;background-color:#f2f2f2;}
          .pc-eventdutyfree .btn-coupon-wrap .btn-cp{display:flex;align-items:center;justify-content:center;width:540px;height:80px;font-size:26px;color:#fff;background-color:#ef3f3b;}
          .pc-eventdutyfree .btn-coupon-wrap .coupon-num-wrap{display:flex;align-items:center;justify-content:flex-start;width:540px;height:80px;padding:0 130px 0 35px;position:relative;border:3px solid #ef3f3b;background-color:#fff;}
          .pc-eventdutyfree .coupon-num-wrap .coupon-num{font-size:32px;font-weight:700;color:#de3831;}
          .pc-eventdutyfree .coupon-num-wrap .btn-copy{display:inline-block;margin-top:-13px;font-size:20px;line-height:26px;color:#000;position:absolute;top:50%;;right:40px;}
          .pc-eventdutyfree .coupon-num-wrap .btn-copy:after{display:inline-block;content:'';width:100%;height:1px;position:absolute;bottom:0;left:0;z-index:1;background-color:#000;}
          .pc-eventdutyfree .link-wrap .link{display:flex;align-items:center;justify-content:center;width:540px;height:80px;margin:22px 0 160px;font-size:26px;color:#fff !important;background-color:#3d352b;}
          .pc-eventdutyfree .link-wrap .link:after{display:inline-block;content:'';width:8px;height:14px;margin-left:10px;background:url('//img.thehandsome.com/md/publish/event/240408_dutyfree/pc-arrow-icon.png') no-repeat center;background-size:contain;}
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
    isCouponNum: false,
    couponNumber: 'SHILLA1234', 
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
    copyCouponNumer () {
      console.log('복사하기')
    }
  },
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/event.scss'; 
</style>
