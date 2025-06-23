<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="event-detail">
        <div class="e-title type2"><!-- 230110 단순클릭응모형 : type2 클래스 추가 -->
          <h4>앱 다운로드 이벤트</h4>
          <v-layout align-center>
            <div class="cmp-labels">
              <span class="label black">종료</span>
            </div>
            <p>2021.12.07 ~ 2021.12.26</p>
          </v-layout>
        </div>
        <!-- [퍼블작업]23.04.20 이벤트 작업 영역 -->
        <div class="html-area" style="text-align:center;">
          <div class="pc-241213fortune">
            <div class="main">
              <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/241213_fortune/pc-01-bg.jpg" alt="" />
              <img class="img ft-img txt-00" src="https://cdn-img.thehandsome.com/md/publish/event/241213_fortune/pc-txt-00.png" alt="" />
              <img class="img ft-img txt-01" src="https://cdn-img.thehandsome.com/md/publish/event/241213_fortune/pc-txt-01.png" alt="" />
              <img class="img ft-img txt-02" src="https://cdn-img.thehandsome.com/md/publish/event/241213_fortune/pc-txt-02.png" alt="" />
              <img class="img ft-img txt-03" src="https://cdn-img.thehandsome.com/md/publish/event/241213_fortune/pc-txt-03.png" alt="" />
              <img class="img ft-img txt-04" src="https://cdn-img.thehandsome.com/md/publish/event/241213_fortune/pc-txt-04.png" alt="" />
              <img class="img ft-img img-fortune" src="https://cdn-img.thehandsome.com/md/publish/event/241213_fortune/pc-img-fortune.png" alt="" />
            </div>
            <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/241213_fortune/pc-01.jpg" alt="" />
          </div>
          
          <!-- 쿠폰영역 -->
          <!-- {{ couponArea }} -->
          <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/241213_fortune/pc-down-coupon.jpg" alt="" />
          <!-- // 쿠폰영역 -->

          <div class="pc-241213fortune">
            <div class="conts-wrap">
              <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/241213_fortune/pc-02.jpg" alt="" />
              
              <button class="btn-coupon" @click.stop="openCouponPop">
                <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/241213_fortune/pc-02-fortune.png" alt="" />
              </button>

              <div id="fortune-swiper" class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="https://img.thehandsome.com/md/publish/event/241213_fortune/pc-slide-coupon.png" />
                  </div>
                  <div class="swiper-slide">
                    <img src="https://img.thehandsome.com/md/publish/event/241213_fortune/pc-slide-coupon.png" />
                  </div>
                </div>
              </div>
            </div>
            <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/241213_fortune/pc-03.jpg" alt="" />
          </div>

          <!-- 붉은실 부족 안내 팝업 -->
          <v-dialog v-model="isCouponPopup">
            <div class="fortune-coupon-pop">
              <!-- 10000원 -->
              <img v-if="couponValue === 1" class="img" src="https://cdn-img.thehandsome.com/md/publish/event/241213_fortune/pc-pop-10.png" alt="" />
              <!-- 10000M -->
              <img v-else-if="couponValue === 2" class="img" src="https://cdn-img.thehandsome.com/md/publish/event/241213_fortune/pc-pop-10000.png" alt="" />
              <!-- 20000원 -->
              <img v-else-if="couponValue === 3" class="img" src="https://cdn-img.thehandsome.com/md/publish/event/241213_fortune/pc-pop-20000.png" alt="" />
              <!-- 30000원 -->
              <img v-else-if="couponValue === 4" class="img" src="https://cdn-img.thehandsome.com/md/publish/event/241213_fortune/pc-pop-30000.png" alt="" />
              <!-- 250000원 -->
              <img v-else-if="couponValue === 5" class="img" src="https://cdn-img.thehandsome.com/md/publish/event/241213_fortune/pc-pop-250000.png" alt="" />
              <button class="btn-close" @click="closeCouponPopup">닫기</button>
            </div>
          </v-dialog>

          <script>
            new Swiper('#fortune-swiper', {
                autoplay: {
                  delay: 0,
                  disableOnInteraction: false
                },
                speed: 25000,
                loop: true,
                loopAdditionalSlides : 1,
                allowTouchMove: false,
                slidesPerView: 'auto',
                spaceBetween: 0,
                centeredSlides: false,
            })
          </script>
          <style type="text/css">
            .pc-241213fortune {display:block;width:100%;margin:0 auto;}
            .pc-241213fortune .img{display: block;width:100%; margin:0 auto;}
            .pc-241213fortune .main{position:relative;overflow:hidden;}
            .pc-241213fortune .main .ft-img{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;}
            .pc-241213fortune .main .txt-00{animation: slideDown 1s 1.3s ease-in-out forwards;z-index:4;}
            .pc-241213fortune .main .txt-01{animation: slideUp 1.2s ease-in-out forwards;z-index:1;}
            .pc-241213fortune .main .txt-02{animation: slideDown 1s ease-in-out forwards;z-index:4;}
            .pc-241213fortune .main .txt-03{animation: slideUp 1.2s 0.8s ease-in-out forwards;z-index:2;}
            .pc-241213fortune .main .txt-04{animation: slideUp 1.2s 1.3s ease-in-out forwards;z-index:3;}
            .pc-241213fortune .main .img-fortune{animation: rotate 0.8s 0.8s ease-in-out forwards;z-index:5;transform-origin:center;}
            .pc-241213fortune .conts-wrap{margin-top:100px;position:relative;overflow:hidden;}
            .pc-241213fortune .conts-wrap .btn-coupon{position:absolute;top:31.98847%;left:39.479%;width:25.052%;height:24.495677%;z-index:1;cursor:grab;}
            .pc-241213fortune .conts-wrap .btn-coupon:active{cursor:grabbing;}
            .pc-241213fortune .conts-wrap .btn-coupon img{animation: spinMov 3s linear infinite;}
            .pc-241213fortune .conts-wrap .swiper-container{position:absolute;top:69.74%;left:0;width:100%;z-index:1;}
            .pc-241213fortune .conts-wrap .swiper-container .swiper-slide{width:125.52%;}
            .pc-241213fortune .conts-wrap .swiper-wrapper{transition-timing-function:linear;}
            .html-area:has(.pc-241213fortune) .cpn-list{margin-top:0 !important;}
            .fortune-coupon-pop{position:relative;}
            .fortune-coupon-pop .img{max-width:570px;}
            .fortune-coupon-pop .btn-close{position:absolute;top:1.58%;right:4.882%;width:7.47%;height:5%;z-index:1;margin:0;box-sizing:border-box;text-indent:-9999px;color:transparent !important;}
            .v-dialog:has(.fortune-coupon-pop) {border-top:none;}
            @keyframes slideUp {0% {transform: translateY(20px);opacity: 0;} 100% {transform: translateY(0);opacity: 1;}}
            @keyframes slideDown {0% {transform: translateY(-20px);opacity: 0;} 100% {transform: translateY(0);opacity: 1;}}
            @keyframes spinMov {0%{transform:rotate(0)} 3%{transform:rotate(-5deg)} 6%{transform:rotate(5deg)} 9%{transform:rotate(-5deg)} 12%{transform:rotate(5deg)} 15%{transform:rotate(0)} 100%{transform:rotate(0)}}
            @keyframes rotate {0%{transform:rotate(10deg);opacity:0;} 40%{transform:rotate(-5deg);opacity:1;} 100%{transform:rotate(0);opacity:1;}}
          </style>
          <!-- html 등록 영역 끝 -->
        </div>
        <!-- //[퍼블작업]23.04.20 이벤트 작업 영역 -->
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
    isCouponPopup: false,
    couponValue: null,

    prdList1: [
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷",
          "sell_price": "350000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-new0.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "버튼 칼라 니트 가디건",
          "sell_price": "395000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-new1.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
          "link_url" : "#none",
          "zzim": true,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "텍스쳐 블록 드레스",
          "sell_price": "346000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-new2.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "윙 슬리브 셔링 드레스",
          "sell_price": "495000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-new3.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/014.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "포켓 싱글 재킷",
          "sell_price": "350000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/021.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "버튼 칼라 니트 가디건",
          "sell_price": "395000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/022.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "윙 슬리브 셔링 드레스",
          "sell_price": "495000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-new3.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/014.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "포켓 싱글 재킷",
          "sell_price": "350000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/021.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "버튼 칼라 니트 가디건",
          "sell_price": "395000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/022.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "텍스쳐 블록 드레스",
          "sell_price": "346000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/023.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "윙 슬리브 셔링 드레스",
          "sell_price": "495000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/014.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/024.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
    ],
    prdList2: [
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "버튼 칼라 니트 가디건",
          "sell_price": "395000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/022.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "윙 슬리브 셔링 드레스",
          "sell_price": "495000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-new3.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/014.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "포켓 싱글 재킷",
          "sell_price": "350000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/021.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "버튼 칼라 니트 가디건",
          "sell_price": "395000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/022.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "텍스쳐 블록 드레스",
          "sell_price": "346000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/023.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "윙 슬리브 셔링 드레스",
          "sell_price": "495000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/014.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/024.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
    ],
    prdList3: [
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "버튼 칼라 니트 가디건",
          "sell_price": "395000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/022.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "텍스쳐 블록 드레스",
          "sell_price": "346000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/023.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "텍스쳐 블록 드레스",
          "sell_price": "346000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-new2.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "윙 슬리브 셔링 드레스",
          "sell_price": "495000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-new3.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/014.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "포켓 싱글 재킷",
          "sell_price": "350000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/021.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "버튼 칼라 니트 가디건",
          "sell_price": "395000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/022.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "윙 슬리브 셔링 드레스",
          "sell_price": "495000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-new3.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/014.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "포켓 싱글 재킷",
          "sell_price": "350000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/021.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "윙 슬리브 셔링 드레스",
          "sell_price": "495000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/014.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/024.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷",
          "sell_price": "350000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-new0.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "버튼 칼라 니트 가디건",
          "sell_price": "395000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-new1.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
          "link_url" : "#none",
          "zzim": true,
      },
    ],
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
  mounted(){
    // 퍼블확인용 개발 반영 X
    const me = this
    if(location.search.includes("TEST_TYPE=2")){
      me.chkLogin = false
    }
  },
  methods: {
    openCouponPop () {
      this.couponValue = Math.floor(Math.random() * 5) + 1

      this.isCouponPopup = true
    },
    closeCouponPopup () {
      this.isCouponPopup = false
    }
  }
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/event.scss';
</style>
