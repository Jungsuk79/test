<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="event-detail">
        <div class="e-title">
          <h4>이벤트 제목이 들어갈 공간입니다.</h4>
          <v-layout align-center>
            <div class="cmp-labels">
              <span class="label black">종료</span>
            </div>
            <p>2021.12.07 ~ 2021.12.26</p>
          </v-layout>
        </div>
        <div class="html-area" style="text-align:center;">
          <div class="mueEvent-cover_240807">
            <!-- 상단 고정 -->
            <div class="fix-div">
              <button @click="opencalenderPop" class="calender">캘린더 팝업</button>
              <button @click="moveVisual" class="center-btn">상단 이동</button>
              <a class="mue_link" href="https://www.thehandsome.com/ko/DP/editShopMainSub/BR16">무이 페이지 이동</a>
              <img src="https://cdn-img.thehandsome.com/md/publish/event/240807_muereffle/pc-fix-top.jpg">
            </div>
            <!-- //상단 고정 -->
            <!-- visual -->
            <div class="visual-cover">
              <img src="https://cdn-img.thehandsome.com/md/publish/event/240807_muereffle/pc-img01.jpg">
            </div>
            <!-- //visual -->
            <!-- ANNIVERSARY SCHEDULE -->
            <div class="anniversary-cover">
              <div class="tag-cover">
                <swiper
                  :options="{
                    autoplay: {
                      delay: 0,
                      disableOnInteraction: false
                    },
                    allowTouchMove : false,
                    loop: true,
                    spaceBetween: 15,
                    speed: 1400,
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    observer: true, 
                    observeParents: true,
                  }"
                  class="swiper01"
                >
                <swiper-slide v-for="idx in 3" :key="idx">
                  <img :src="`https://cdn-img.thehandsome.com/md/publish/event/240807_muereffle/pc-img02-slide1.png`">
                </swiper-slide>
                </swiper>
              </div>
              <div class="tag-cover div02">
                <swiper
                  :options="{
                    autoplay: {
                      delay: 0,
                      disableOnInteraction: false
                    },
                    allowTouchMove : false,
                    loop: true,
                    spaceBetween: 15,
                    speed: 2000,
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    observer: true, 
                    observeParents: true,
                  }"
                  class="swiper02"
                >
                <swiper-slide v-for="idx in 3" :key="idx">
                  <img :src="`https://cdn-img.thehandsome.com/md/publish/event/240807_muereffle/pc-img02-slide2.png`">
                </swiper-slide>
                </swiper>
              </div>
              <img src="https://cdn-img.thehandsome.com/md/publish/event/240807_muereffle/pc-img02.jpg">
            </div>
            <!-- //ANNIVERSARY SCHEDULE -->
            <!-- EXCLUSIVE DROP -->
            <div class="mue-items-list">
              <!-- [퍼블수정]24.08.16 요청사항 반영 -->
              <swiper
                :options="{
                  autoplay: {
                    delay: 1300,
                    disableOnInteraction: false
                  },
                  allowTouchMove : false, 
                  loop: true,
                  speed: 300,
                  slidesPerView: 'auto',
                  centeredSlides: true,
                  observer: true, 
                  observeParents: true,
                }"
              >
              <!-- [퍼블수정]24.09.03 무이이벤트 수정 -->
              <swiper-slide v-for="idx in 6" :key="idx">
                <div class="title-imgbox">
                  <img class="up" v-if="idx < 5" :src="`https://cdn-img.thehandsome.com/md/publish/event/240807_muereffle/pc-img03_topslide0${idx}.png`">
                  <img class="bg" v-if="idx < 5" :src="`https://cdn-img.thehandsome.com/md/publish/event/240807_muereffle/pc-img03_topslide0${idx}.png`">
                </div>
                <img :src="`https://cdn-img.thehandsome.com/md/publish/event/240807_muereffle/pc-img03_slide0${idx}.png`">
              </swiper-slide>
              <!-- //[퍼블수정]24.09.03 무이이벤트 수정 -->
              </swiper>
              <img src="https://cdn-img.thehandsome.com/md/publish/event/240807_muereffle/pc-img03.jpg">
            </div>
            <!-- //EXCLUSIVE DROP -->
            <!-- RAFFLE 10 -->
            <div class="raffle12-list">
              <img src="https://cdn-img.thehandsome.com/md/publish/event/240807_muereffle/pc-img04-1.jpg">
              <div class="float-swiper">
                <img src="https://cdn-img.thehandsome.com/md/publish/event/240807_muereffle/pc-img04-text.png">
              </div>
              <swiper
                :options="{
                  autoplay: {
                    delay: 0,
                    disableOnInteraction: false
                  },
                  allowTouchMove : false, 
                  spaceBetween: 80,
                  loop: true,
                  speed: 2000,
                  slidesPerView: 'auto',
                  centeredSlides: true,
                  observer: true, 
                  observeParents: true,

                }"
                class="raffle12-list_swiper"
              >
              <swiper-slide v-for="idx2 in 10" :key="idx2">
                <img v-if="idx2 < 10" :src="`https://cdn-img.thehandsome.com/md/publish/event/240807_muereffle/pc-img04-slide0${idx2}.png`">
                <img v-else :src="`https://cdn-img.thehandsome.com/md/publish/event/240807_muereffle/pc-img04-slide${idx2}.png`">
              </swiper-slide>
              </swiper>
              <img src="https://cdn-img.thehandsome.com/md/publish/event/240807_muereffle/pc-img04-2.jpg">
            </div>
            <!-- //RAFFLE 10 -->
            <!-- RAFFLE 이벤트 -->
            <div class="raffleSwipe-cover">
              <div class="tabs-actionTop">
                <swiper
                  :options="{
                    on: {
                      realIndexChange: swiperslidechange,
                    },
                    autoplay: false,
                    speed: 300,
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    observer: true, 
                    observeParents: true,
                  }"
                  id="top-tab-swipe"
                >
                <swiper-slide v-for="item, index in listImage" :key="index">
                  <button @click="changeTab(index)" :class="{ 'on': tabSwipe === index }">
                    {{ item.title }}
                    <span v-if="item.tag === 'tagwom'">WOMEN</span>
                    <span v-if="item.tag === 'tagmen'">MEN</span>
                  </button>
                </swiper-slide>
                </swiper>
              </div>
              <div class="raffle-area">
                <template v-for="(item, index2) in listImage">
                  <div v-if="tabSwipe === index2" :key="index2" class="mue-timer-cover">
                    <p class="date">{{item.date}}</p>
                    <p class="weekdate">{{item.dayweek}}</p>
                    <p class="timer">{{item.time}}</p>
                  </div>
                </template>
                <div class="swiper-box">
                  <Swiper
                    :options="{
                      slidesPerView: 'auto',
                      centeredSlides: true,
                      on: {
                        slideChange : swiperChange,
                      },
                      observer: true, 
                      observeParents: true,
                      resistanceRatio: 0,
                      navigation: {
                        nextEl: '.evnt-top-swiper-next',
                        prevEl: '.evnt-top-swiper-prev',
                      },
                    }"
                    class="product-img-swiper">
                    <SwiperSlide v-for="(item, index) in listImage" :key="index">
                      <div class="swiper-cnt">
                        <img :src="item.prdData" alt="상품이미지" class="img"/>
                      </div>
                    </SwiperSlide>
                    <div slot="button-prev" class="swiper-button-prev evnt-top-swiper-prev"></div>
                    <div slot="button-next" class="swiper-button-next evnt-top-swiper-next"></div>
                  </Swiper>
                  <div class="detail-top-info">
                    <v-btn color="primary" height="60">DRAW</v-btn>
                    <v-btn @click="openDialogReadMore(tabSwipe)" outlined color="primary" height="60">READ MORE</v-btn>
                  </div>
                </div>
              </div>
              <img src="https://cdn-img.thehandsome.com/md/publish/event/240807_muereffle/pc-img05_btm.jpg">
            </div>
            <!-- // RAFFLE 이벤트 -->
            <!-- WELCOME PAYBACK -->
            <img src="https://cdn-img.thehandsome.com/md/publish/event/240807_muereffle/pc-img06.jpg">
            <!-- //WELCOME PAYBACK -->
          </div>
        </div>
        <!-- 달력 팝업 -->
        <v-dialog v-model="calenderPop" content-class="bt-none">
          <DialogBasic class="popup-mueCalender" :width="1200" @hide="closeCalenderPop">
            <template #body>
              <div class="mueCalender-contents">
                <img src="https://cdn-img.thehandsome.com/md/publish/event/240807_muereffle/popup_title.jpg">
                <ul class="moveto-slide-btn">
                  <!-- [퍼블수정]24.09.03 무이이벤트 수정 -->
                  <li v-for="idx in 13" :key="idx">
                    <button @click="popupChangeTab(idx - 1)">
                      <img v-if="idx < 10" :src="`https://cdn-img.thehandsome.com/md/publish/event/240807_muereffle/popup_calender_item0${idx}.jpg`">
                      <img v-if="idx >= 10" :src="`https://cdn-img.thehandsome.com/md/publish/event/240807_muereffle/popup_calender_item${idx}.jpg`">
                    </button>
                  </li>
                  <!-- //[퍼블수정]24.09.03 무이이벤트 수정 -->
                </ul>
              </div>
            </template>
          </DialogBasic>
        </v-dialog>
        <!-- // 달력 팝업 -->
         
        <!-- READ MORE 팝업 -->
        <v-dialog v-model="DialogReadMoreModel[tabSwipe].open" content-class="bt-none">
          <DialogBasic class="popup-mueReadMore" :width="750" @hide="closeDialogReadMore(tabSwipe)">
            <template #body>
              <template v-for="(item, popupidx2) in listImage">
                <div v-if="tabSwipe === popupidx2" :key="popupidx2">
                  <div class="readheader-cover">
                    <p class="brand-name" v-html="item.popupInfo.brand"></p>
                    <h2 class="product-name" v-html="item.popupInfo.pruductName"></h2>
                    <p class="size">
                      <b>SIZE</b>
                      <span v-html="item.popupInfo.puductInfo"></span>
                    </p>
                  </div>
                  <!-- [퍼블수정]24.09.03 무이이벤트 수정 -->
                  <div class="product-info">
                    <p class="main-info-box" v-html="item.popupInfo.mainInfo"></p>
                    <div class="subInfo-cover">
                      <p class="sub-info" v-html="item.popupInfo.subInfo"></p>
                      <span class="sub-info">정상가의 22% 제세공과금 ONLY</span>
                      <div v-for="(imgSrc, imgIndex) in item.popupInfo.puductImg" :key="imgIndex" class="img-cover">
                        <img :src="imgSrc" class="img"/>
                      </div>
                      <p class="sub-info-size" v-html="item.popupInfo.realSize"></p>
                    </div>
                  </div>
                  <!-- //[퍼블수정]24.09.03 무이이벤트 수정 -->
                  <div class="product-info">
                    <h2 class="subInfo-title">BRAND STORY</h2>
                    <div class="subInfo-cover">
                      <div v-for="(imgSrc, imgIndex) in item.popupInfo.brandImg" :key="imgIndex">
                        <img :src="imgSrc" class="img"/>
                      </div>
                      <p class="brand-sub-info" v-html="item.popupInfo.brandInfo"></p>
                    </div>
                  </div>
                </div>
              </template>
              <div class="popup-btn-box">
                <!-- [퍼블수정]24.09.03 무이이벤트 수정 -->
                <a href="https://www.thehandsome.com/ko/DP/planshopDetail/23641"><span>BRAND SHOP 바로 가기</span></a>
              </div>
            </template>
          </DialogBasic>
        </v-dialog>
        <!-- // READ MORE 팝업 -->
        <!-- [퍼블수정]24.09.03 무이이벤트 수정 -->
        <style type="text/css">
          .mueEvent-cover_240807{position:relative;}
          .mueEvent-cover_240807 .visual-cover{margin-top:calc(-64px + -6.25%); padding-top:calc(64px + 6.25%); }
          .mueEvent-cover_240807 .fix-div{position:sticky; top:64px; z-index:3;}
          .mueEvent-cover_240807 .fix-div a,
          .mueEvent-cover_240807 .fix-div button{position:absolute; top:0; width:10%; height:100%; display:block;text-indent:-999em;color:transparent !important; font-size:0;}
          .mueEvent-cover_240807 .fix-div button.calender{left:0;}
          .mueEvent-cover_240807 .fix-div button.center-btn{left:45%;}
          .mueEvent-cover_240807 .fix-div a.mue_link{right:0;}

          .mueEvent-cover_240807 .anniversary-cover{position: relative;}
          .mueEvent-cover_240807 .anniversary-cover .tag-cover{position:absolute; width:4.2%; top:56.4%; left:30.7%; background:#fff; overflow:hidden;}
          .mueEvent-cover_240807 .anniversary-cover .tag-cover.div02{left:63.6%;}
          .mueEvent-cover_240807 .anniversary-cover .tag-cover .swiper-wrapper {transition-timing-function: linear;}
          .mueEvent-cover_240807 .anniversary-cover .tag-cover .swiper-wrapper .swiper-slide{width: auto; display: flex; align-items: center; padding:7px 0;}

          .mueEvent-cover_240807 .raffleSwipe-cover{position: relative; border-bottom:1px solid #000;}
          .mueEvent-cover_240807 .raffleSwipe-cover .tabs-actionTop{margin:0; margin-top:calc(-64px + -6.25%); padding-top:calc(64px + 6.25%); border-bottom:1px solid #000;}
          .mueEvent-cover_240807 .raffleSwipe-cover .tabs-actionTop .swiper-wrapper .swiper-slide{width: 23.8%;}
          .mueEvent-cover_240807 .raffleSwipe-cover .tabs-actionTop .swiper-wrapper .swiper-slide button{width:100%; min-height: 47px; color: #000 !important; font-size:24px; line-height:24px; padding: 28px 0 25px;}
          .mueEvent-cover_240807 .raffleSwipe-cover .tabs-actionTop .swiper-wrapper .swiper-slide button span{font-size:13px; width:100%; display:block; line-height: 13px; margin-top: 9px;}
          .mueEvent-cover_240807 .raffleSwipe-cover .tabs-actionTop .swiper-wrapper .swiper-slide button.on{font-weight:700;}
          .mueEvent-cover_240807 .raffleSwipe-cover .tabs-actionTop .swiper-wrapper .swiper-slide button.on span{font-weight:400;}

          .mueEvent-cover_240807 .raffleSwipe-cover .raffle-area{width:62.6%; margin:0 auto; display: flex; padding-top:80px;}
          .mueEvent-cover_240807 .raffleSwipe-cover .raffle-area .mue-timer-cover{width:37.4%; text-align:left;}
          .mueEvent-cover_240807 .raffleSwipe-cover .raffle-area .mue-timer-cover .date{font-size: 130px; line-height: 110px; width: 50%; max-width:200px;}
          .mueEvent-cover_240807 .raffleSwipe-cover .raffle-area .mue-timer-cover .weekdate{font-size: 20px; line-height: 20px; margin-top:5px;}
          .mueEvent-cover_240807 .raffleSwipe-cover .raffle-area .mue-timer-cover .timer{font-size: 62px; line-height: 62px; margin-top:90px;}
          .mueEvent-cover_240807 .raffleSwipe-cover .raffle-area .swiper-box{width:62.5%;}
          .mueEvent-cover_240807 .raffleSwipe-cover .raffle-area .swiper-container .swiper-button-prev,
          .mueEvent-cover_240807 .raffleSwipe-cover .raffle-area .swiper-container .swiper-button-next{opacity:1;background-color: transparent;}
          .mueEvent-cover_240807 .raffleSwipe-cover .raffle-area .swiper-container .swiper-button-prev.swiper-button-disabled,
          .mueEvent-cover_240807 .raffleSwipe-cover .raffle-area .swiper-container .swiper-button-next.swiper-button-disabled{opacity:0.35;}
          .mueEvent-cover_240807 .raffleSwipe-cover .raffle-area .swiper-container .swiper-button-prev:after,
          .mueEvent-cover_240807 .raffleSwipe-cover .raffle-area .swiper-container .swiper-button-next:after{filter: invert(0); width: 60px; height: 60px; background-size: 100% 100%; background-position: 0 0;}
          .mueEvent-cover_240807 .raffleSwipe-cover .raffle-area .swiper-container .swiper-button-prev:after{background-image: url(/images/common/icon-60-prev.svg);margin-left: -30px;}
          .mueEvent-cover_240807 .raffleSwipe-cover .raffle-area .swiper-container .swiper-button-next:after{background-image: url(/images/common/icon-60-next.svg);margin-right: -30px;}
          .mueEvent-cover_240807 .raffleSwipe-cover .raffle-area .detail-top-info{margin-top:40px;}
          .mueEvent-cover_240807 .raffleSwipe-cover .raffle-area .detail-top-info .v-btn{width:100%; padding:0; box-sizing:border-box; margin-top:20px;font-size: 20px;}

          .mueEvent-cover_240807 .mue-items-list{position:relative;}
          .mueEvent-cover_240807 .mue-items-list .swiper-container{position:absolute; width: 31.45832%; left: 34.5%; bottom: 11.6%;}
          .mueEvent-cover_240807 .mue-items-list .title-imgbox{position:absolute; top:0; left:0; overflow:hidden;}
          .mueEvent-cover_240807 .mue-items-list .title-imgbox .bg{opacity:0;}
          .mueEvent-cover_240807 .mue-items-list .title-imgbox .up{position:absolute; transform:translateY(-110%); transition: 0.35s all 0.5s;}
          .mueEvent-cover_240807 .mue-items-list .swiper-container .swiper-slide-active .title-imgbox .up{transform:translateY(0%);}
          
          .mueEvent-cover_240807 .raffle12-list{position:relative; background:#000;}
          .mueEvent-cover_240807 .raffle12-list .raffle12-list_swiper{}
          .mueEvent-cover_240807 .raffle12-list .raffle12-list_swiper .swiper-wrapper {transition-timing-function: linear;}
          .mueEvent-cover_240807 .raffle12-list .raffle12-list_swiper .swiper-slide{width:auto;}
          .mueEvent-cover_240807 .raffle12-list .raffle12-list_swiper .swiper-slide[data-swiper-slide-index="0"]{width:16.14583%;}
          .mueEvent-cover_240807 .raffle12-list .raffle12-list_swiper .swiper-slide[data-swiper-slide-index="1"]{width:20.052083%;}
          .mueEvent-cover_240807 .raffle12-list .raffle12-list_swiper .swiper-slide[data-swiper-slide-index="2"]{width:18.75%;}
          .mueEvent-cover_240807 .raffle12-list .raffle12-list_swiper .swiper-slide[data-swiper-slide-index="3"]{width:19.27083%;}
          .mueEvent-cover_240807 .raffle12-list .raffle12-list_swiper .swiper-slide[data-swiper-slide-index="4"]{width:18.802083%;}
          .mueEvent-cover_240807 .raffle12-list .raffle12-list_swiper .swiper-slide[data-swiper-slide-index="5"]{width:14.114583%;}
          .mueEvent-cover_240807 .raffle12-list .raffle12-list_swiper .swiper-slide[data-swiper-slide-index="6"]{width:19.7916%;}
          .mueEvent-cover_240807 .raffle12-list .raffle12-list_swiper .swiper-slide[data-swiper-slide-index="7"]{width:18.802083%;}
          .mueEvent-cover_240807 .raffle12-list .raffle12-list_swiper .swiper-slide[data-swiper-slide-index="8"]{width:19.21875%;}
          .mueEvent-cover_240807 .raffle12-list .raffle12-list_swiper .swiper-slide[data-swiper-slide-index="9"]{width:16.197916%;}
          .mueEvent-cover_240807 .raffle12-list .raffle12-list_swiper .swiper-slide[data-swiper-slide-index="10"]{width:13.28125%;}
          .mueEvent-cover_240807 .raffle12-list .raffle12-list_swiper .swiper-slide[data-swiper-slide-index="11"]{width:19.53125%;}
          .mueEvent-cover_240807 .raffle12-list .raffle12-list_swiper .swiper-slide[data-swiper-slide-index="12"]{width:19.84375%;}
          .mueEvent-cover_240807 .float-swiper{background: #00000099; position: absolute; z-index: 2; width: 100%; top: 28.8%; left:0; right:0; text-align: center; display: flex; justify-content: center;}
          .mueEvent-cover_240807 .float-swiper img{width: 21.041666666666668%;}

          .ui-popup.popup-mueCalender{}
          .ui-popup.popup-mueCalender .popup-header{padding:0 !important;}
          .ui-popup.popup-mueCalender .mueCalender-contents{position: relative;}
          .ui-popup.popup-mueCalender .mueCalender-contents .moveto-slide-btn{position: relative; display: flex; flex-wrap: wrap; gap: 0 60px; padding: 0 56px;}
          .ui-popup.popup-mueCalender .mueCalender-contents .moveto-slide-btn li{width: calc(50% - 30px);}
          .ui-popup.popup-mueReadMore{text-align:center;}
          .ui-popup.popup-mueReadMore .popup-header{padding:0 !important;}
          .ui-popup.popup-mueReadMore .readheader-cover{margin:120px 0 60px; text-align:center;}
          .ui-popup.popup-mueReadMore .readheader-cover .brand-name{font-size:22px; line-height:22px;}
          .ui-popup.popup-mueReadMore .readheader-cover .product-name{margin-top:17px; font-size:55px; line-height:70px; text-transform:uppercase; word-break: keep-all;}
          .ui-popup.popup-mueReadMore .readheader-cover .size{font-size:20px; line-height:20px; margin-top:20px;}
          .ui-popup.popup-mueReadMore .product-info{padding:0 16px;}
          .ui-popup.popup-mueReadMore .product-info .main-info-box{border-top:4px solid #000; border-bottom:1px solid #000; font-size: 23px; line-height: 36px; padding: 31px 0 34px; margin-bottom:50px;}
          .ui-popup.popup-mueReadMore .product-info .sub-info{font-size: 21px; line-height: 34px; text-transform:uppercase; margin-bottom:20px;}
          .ui-popup.popup-mueReadMore .product-info span.sub-info{color:#666666; font-size:18px; line-height:30px;}
          .ui-popup.popup-mueReadMore .product-info .img-cover{margin-top:60px;}
          .ui-popup.popup-mueReadMore .product-info .img-cover + .img-cover{margin-top:20px;}
          .ui-popup.popup-mueReadMore .product-info .subInfo-title{font-size: 46px; line-height: 36px; margin:120px 0 60px;}
          .ui-popup.popup-mueReadMore .product-info .brand-sub-info{margin-top:50px; font-size: 23px; line-height: 38px;}
          .ui-popup.popup-mueReadMore .product-info .sub-info-size{font-size: 22px; line-height: 34px; text-transform:uppercase; margin-top:50px;}
          .ui-popup.popup-mueReadMore .popup-btn-box{margin-top:78px !important;}
          .ui-popup.popup-mueReadMore .popup-btn-box > a{text-align: center; width: 100%; height: 101px; font-size: 25px; line-height: 23px; background: #000; display: flex; align-items: center; justify-content: center;}
          .ui-popup.popup-mueReadMore .popup-btn-box > a span{color: #fff !important; font-weight: 700;}
        </style>
        <!-- //[퍼블수정]24.09.03 무이이벤트 수정 -->
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
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  layout: 'LayoutBasics',
  components : {
    Swiper,
    SwiperSlide,
    DialogBasic
  },  
  data: () => ({
    tabSwipe: 0,
    calenderPop: false,
    DialogReadMoreModel : [{open : false},{open : false},{open : false},{open : false},{open : false},{open : false},{open : false},{open : false},{open : false},{open : false},{open : false},{open : false},{open : false},{open : false}],
    // [퍼블수정]24.09.03 무이이벤트 수정
    listImage : [
      {
        title:"9.23 MON",
        date: "0923",
        dayweek:"MON",
        time:"10:00",
        tag:"tagwom",
        prdData: "https://img.thehandsome.com/md/publish/event/240807_muereffle/pc-img05-slide01.jpg",
        popupInfo:{
          // 9.23 MON 동일한 날짜는 같은 팝업 내용으로
          brand:"MIHARA YASUHIRO",
          pruductName : "AUTOGRAPHED<br />BLAKEY SNEAKER",
          puductInfo: "WOMEN 37(240)",
          mainInfo: "2006년부터 MIHARA YASUHIRO를 국내에 선보인 MUE의 20주년을 기념하며 디자이너 미하라 야스히로의 친필 사인이 들어가있는 시그니처 스니커즈입니다.<br />*남녀 개별 DRAW 응모, 상품 상이",
          subInfo: "정상가 &#x20a9;430,000",
          realSize:"",
          puductImg: [
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item9.23_1.jpg",
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item9.23_2.jpg",
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item9.23_3.jpg",
          ],
          brandImg:[
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/MIHARA YASUHIRO.jpg"
          ],
          brandInfo:"MASION MIHARA YASUHIRO는 1997년에 신발 브랜드에서 시작하여, 해체주의적 시각을 담은 독특한 디자인의 컬렉션을 전개하는 도쿄 베이스의 브랜드입니다.",
        }
      },
      {
        title:"9.23 MON",
        date: "0923",
        dayweek:"MON",
        time:"10:00",
        tag:"tagmen",
        prdData: "https://img.thehandsome.com/md/publish/event/240807_muereffle/pc-img05-slide02.jpg",
        popupInfo:{
          // 9.23 MON 동일한 날짜는 같은 팝업 내용으로
          brand:"MIHARA YASUHIRO",
          pruductName : "AUTOGRAPHED<br />BLAKEY SNEAKER",
          puductInfo: "MEN 42(270)",
          mainInfo: "2006년부터 MIHARA YASUHIRO를 국내에 선보인 MUE의 20주년을 기념하며 디자이너 미하라 야스히로의 친필 사인이 들어가있는 시그니처 스니커즈입니다.<br />*남녀 개별 DRAW 응모, 상품 상이",
          subInfo: "정상가 &#x20a9;490,000",
          realSize:"",
          puductImg: [
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item9.23_4.jpg",
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item9.23_5.jpg",
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item9.23_6.jpg",
          ],
          brandImg:[
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/MIHARA YASUHIRO.jpg"
          ],
          brandInfo:"MASION MIHARA YASUHIRO는 1997년에 신발 브랜드에서 시작하여, 해체주의적 시각을 담은 독특한 디자인의 컬렉션을 전개하는 도쿄 베이스의 브랜드입니다.",
        }
      },
      {
        title:"9.24 TUE",
        date: "0924",
        dayweek:"TUE",
        time:"10:00",
        tag:"tagwom",
        prdData: "https://img.thehandsome.com/md/publish/event/240807_muereffle/pc-img05-slide03.jpg",
        popupInfo:{
          // 9.24 TUE 동일한 날짜는 같은 팝업 내용으로
          brand:"BODE",
          pruductName : "SPECIAL EMBROIDERY<br />MULTI BEAD TEE",
          puductInfo: "WOMEN S",
          mainInfo: "MUE의 20주년을 의미하는 숫자 “20” 자수와 멀티 컬러 비즈 디테일이 돋보이는 하나뿐인 티셔츠로 소장가치를 높였습니다.<br />*남녀 개별 DRAW 응모, SIZE 상이",
          subInfo: "정상가 &#x20a9;520,000",
          realSize:"WOMEN(YELLOW)<br />총장 69.5 / 가슴둘레 114 / 어깨너비 42 / 소매길이 17cm",
          puductImg: [
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item9.24_1.jpg",
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item9.24_2.jpg",
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item9.24_3.jpg",
          ],
          brandImg:[
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/BODE.jpg"
          ],
          brandInfo:"BODE는 뉴욕을 기반으로 전 세계의 희귀하고 빈티지한 패브릭을 통해 젠더리스 감성의 컬렉션을 전개하는 하이엔드 브랜드입니다.",
        }
      },
      {
        title:"9.24 TUE",
        date: "0924",
        dayweek:"TUE",
        time:"10:00",
        tag:"tagmen",
        prdData: "https://img.thehandsome.com/md/publish/event/240807_muereffle/pc-img05-slide04.jpg",
        popupInfo:{
          // 9.24 TUE 동일한 날짜는 같은 팝업 내용으로
          brand:"BODE",
          pruductName : "SPECIAL EMBROIDERY<br />MULTI BEAD TEE",
          puductInfo: "MEN XL",
          mainInfo: "MUE의 20주년을 의미하는 숫자 “20” 자수와 멀티 컬러 비즈 디테일이 돋보이는 하나뿐인 티셔츠로 소장가치를 높였습니다.<br />*남녀 개별 DRAW 응모, SIZE 상이",
          subInfo: "정상가 &#x20a9;520,000",
          realSize:"MEN(BLACK)<br />총장 70.5 / 가슴둘레 128 / 어깨너비 43 / 소매길이 21cm",
          puductImg: [
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item9.24_4.jpg",
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item9.24_5.jpg",
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item9.24_6.jpg",
          ],
          brandImg:[
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/BODE.jpg"
          ],
          brandInfo:"BODE는 뉴욕을 기반으로 전 세계의 희귀하고 빈티지한 패브릭을 통해 젠더리스 감성의 컬렉션을 전개하는 하이엔드 브랜드입니다.",
        }
      },
      {
        title:"9.25 WED",
        date: "0925",
        dayweek:"WED",
        time:"10:00",
        prdData: "https://img.thehandsome.com/md/publish/event/240807_muereffle/pc-img05-slide05.jpg",
        popupInfo:{
          brand:"SATOSHI NAKAMOTO",
          pruductName : "OFF ROAD BOMBER",
          puductInfo: "XL (MEN)",
          mainInfo: "MUE를 통해 국내에 처음으로 소개되는 스트리트 웨어 브랜드 SATOSHI NAKAMOTO의 상징적인 디자인을 녹여낸 봄버 재킷입니다. 모터사이클 웨어에서 영감을 받아 다양한 디테일이 가미되어있습니다.",
          subInfo: "정상가 &#x20a9;3,210,000",
          realSize:"총장 67 / 가슴둘레 140 / 어깨너비 48 / 소매길이 66cm",
          puductImg: [
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item9.25_1.jpg",
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item9.25_2.jpg",
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item9.25_3.jpg",
          ],
          brandImg:[
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/SATOSHI NAKAMOTO.jpg"
          ],
          brandInfo:"SATOSHI NAKAMOTO는 미국을 기반으로 전개되는 하이엔드 스트릿 브랜드로 설립자와 디자이너 모두 익명에 가려져 있습니다. 브랜드명의 끝 네글자인 “MOTO”를 모티브로 모터사이클 웨어의 강렬한 디테일과 빈티지한 감성을 선보입니다.",
        }
      },
      {
        title:"9.26 THU",
        date: "0926",
        dayweek:"THU",
        time:"10:00",
        prdData: "https://img.thehandsome.com/md/publish/event/240807_muereffle/pc-img05-slide06.jpg",
        popupInfo:{
          brand:"GALLERY DEPT.",
          pruductName : "ART FRAMES",
          puductInfo: "SIZE OS",
          mainInfo: "국내 최초 브랜드와 협업한 팝업을 진행하며 제작된 제품으로, 갤러리 디파트먼트의 그래픽 작업물이 돋보이는 아트 프레임입니다.",
          subInfo: "정상가 &#x20a9;1,620,000",
          realSize:"가로 52 * 세로 71cm",
          puductImg: [
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item9.26_1.jpg",
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item9.26_2.jpg",
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item9.26_3.jpg",
          ],
          brandImg:[
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/GALLERY DEPT_.jpg"
          ],
          brandInfo:"GALLERY DEPT.는 LA를 기반으로 설립된 스트리트웨어 브랜드로 상징적인 페인트 스플래터 디테일과 빈티지함이 돋보이는 제품을 선보이며, 수공예적 터치와 디테일로 브랜드의 개성을 담아냅니다.",
        }
      },
      {
        title:"9.27 FRI",
        date: "0927",
        dayweek:"FRI",
        time:"10:00",
        prdData: "https://img.thehandsome.com/md/publish/event/240807_muereffle/pc-img05-slide07.jpg",
        popupInfo:{
          brand:"MASTERMIND",
          pruductName : "AUTOGRAPHED<br />SKULL T-SHIRT",
          puductInfo: "XL (MEN)",
          mainInfo: "MASTERMIND의 시그니쳐 SKULL 그래픽 티셔츠입니다. MUE의 20주년을 기념하여 디자이너의 친필 사인(유성펜 사인)이 들어가 있는 하나뿐인 제품으로 소장가치를 높였습니다. ",
          subInfo: "정상가 &#x20a9;1,120,000",
          realSize:"총장 82 / 가슴둘레 139 / 어깨너비 48.5 / 소매길이 29cm",
          puductImg: [
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item9.27_1.jpg",
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item9.27_2.jpg",
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item9.27_3.jpg",
          ],
          brandImg:[
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/MASTERMIND.jpg"
          ],
          brandInfo:"MASREMIND는 장인 정신과 스트릿 감성이 결합된 도쿄 베이스의 브랜드로 스컬 모티프의 상징적인 디자인을 선보입니다.",
        }
      },
      {
        title:"9.28 SAT",
        date: "0928",
        dayweek:"SAT",
        time:"10:00",
        prdData: "https://img.thehandsome.com/md/publish/event/240807_muereffle/pc-img05-slide08.jpg",
        popupInfo:{
          brand:"EXTREME CASHMERE",
          pruductName : "LOVE CASHMERE<br />SWEATER",
          puductInfo: "OS(WOMEN)",
          mainInfo: "소프트한 터치감의 최고급 캐시미어와 시그니처 컬러웨이가 어우러졌으며, 센터의 귀여운 하트 그래픽이 돋보이는 무이 익스클루시브 오버사이즈 스웨터입니다.",
          subInfo: "정상가 &#x20a9;1,070,000",
          realSize:"총장 69.5 / 가슴둘레 128 / 어깨너비 50 / 소매길이 71cm",
          puductImg: [
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item9.28_1.jpg",
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item9.28_2.jpg",
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item9.28_3.jpg",
          ],
          brandImg:[
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/EXTREME CASHMERE.jpg"
          ],
          brandInfo:"EXTREME CASHMERE는 2016년 네덜란드에서 시작한 캐시미어 브랜드로 최고급 캐시미어만을 사용하며 유행이나 성별에 구애받지 않는 미니멀하면서도 다채로운 디자인을 추구합니다.",
        }
      },
      {
        title:"9.29 SUN",
        date: "0929",
        dayweek:"SUN",
        time:"10:00",
        prdData: "https://img.thehandsome.com/md/publish/event/240807_muereffle/pc-img05-slide09.jpg",
        popupInfo:{
          brand:"OUR LEGACY",
          pruductName : "EXCLUSIVE<br />LEATHER JACKET",
          puductInfo: "36(WOMEN)",
          mainInfo: "아워레가시와 스웨덴의 빈티지 바이커 감성을 느낄 수 있는 118 Second Läder 와 콜라보제품으로 20주년을 기념하여 선보이는 단 하나뿐인 빈티지 바이커 자켓입니다.",
          subInfo: "정상가 &#x20a9;1,840,000",
          realSize:"총장 55.5 / 가슴둘레 100 / 어깨너비 47 / 소매길이 61cm",
          puductImg: [
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item9.29_1.jpg",
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item9.29_2.jpg",
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item9.29_3.jpg",
          ],
          brandImg:[
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/OUR LEGACY.jpg"
          ],
          brandInfo:"OUR LEGACY는 2005년 스톡홀름에서 시작한 브랜드로 미니멀한 북유럽 미학에 실험적인 스타일을 가미하여, 편안함을 중심으로 한 모던한 감성을 제안합니다.",
        }
      },
      {
        title:"9.30 MON",
        date: "0930",
        dayweek:"MON",
        time:"10:00",
        prdData: "https://img.thehandsome.com/md/publish/event/240807_muereffle/pc-img05-slide10.jpg",
        popupInfo:{
          brand:"VAQUERA",
          pruductName : "SPECIAL<br />BEAR KEY RING",
          puductInfo: "OS",
          mainInfo: "많은 이들에게 사랑받는 바케라의 시그니처 곰돌이 키링에 20주년을 기념하여 디자이너 Patric과 Bryn이 직접 다양한 악세사리들을 더해 꾸민 특유의 키치한 감성을 느낄 수 있는 익스클루시브 키링입니다.",
          subInfo: "정상가 &#x20a9;690,000",
          realSize:"곰인형 가로 15 * 세로 20cm (오너먼트 길이 제외)",
          puductImg: [
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item9.30_1.jpg",
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item9.30_2.jpg",
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item9.30_3.jpg",
          ],
          brandImg:[
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/VAQUERA.jpg"
          ],
          brandInfo:"VAQUERA는 2013년 뉴욕에서 시작된 라이징 브랜드로 스타일리스트 출신의 디자이너가 특유의 키치하고 독창적인 젠더 플루이드 디자인을 선보이는 브랜드입니다.",
        }
      },
      {
        title:"10.1 TUE",
        date: "1001",
        dayweek:"TUE",
        time:"10:00",
        prdData: "https://img.thehandsome.com/md/publish/event/240807_muereffle/pc-img05-slide11.jpg",
        popupInfo:{
          brand:"IENKI IENKI",
          pruductName : "SPECIAL<br />EMBROIDERED VEST",
          puductInfo: "S (WOMEN)",
          mainInfo: "브랜드만의 무드가 느껴지는 시그니처 스티치를 활용한 아카이브 베스트이며 무이의 20주년을 기념한 익스클루시브 아이템입니다.",
          subInfo: "정상가 &#x20a9;1,220,000",
          realSize:"총장 66 / 가슴둘레 104 / 어깨너비 47cm",
          puductImg: [
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item10.1_1.jpg",
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item10.1_2.jpg",
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item10.1_3.jpg",
          ],
          brandImg:[
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/IENKI IENKI.jpg"
          ],
          brandInfo:"IENKI IENKI는 2016년 우크라이나에서 런칭한 아웃웨어 브랜드로 패션을 선도하면서도 좋은 품질의 아웃웨어를 제작하고자 하는 열정으로 혁신적이고 현대적인 아웃웨어 디자인을 선보입니다.",
        }
      },
      {
        title:"10.2 WED",
        date: "1002",
        dayweek:"WED",
        time:"10:00",
        tag:"tagwom",
        prdData: "https://img.thehandsome.com/md/publish/event/240807_muereffle/pc-img05-slide12.jpg",
        popupInfo:{
          brand:"MIHARA YASUHIRO",
          pruductName : "AUTOGRAPHED<br /> DUCK T-SHIRTS",
          puductInfo: "WOMEN 38",
          mainInfo: "MIHARA YASUHIRO의 스테디 셀러 시그니쳐 프린트 반팔 티셔츠 입니다. MUE의 20주년을 기념하여 디자이너 미하라 야스히로의 친필 사인(유성펜 사인)이 들어가 있는 하나뿐인 제품으로 소장가치를 높였습니다.<br />*남녀 개별 DRAW 응모, 상품 상이",
          subInfo: "정상가 &#x20a9;430,000",
          realSize:"WOMEN(DUCK PRINT)<br />총장 64 / 가슴둘레 102 / 소매길이 22cm",
          puductImg: [
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item10.2_1.jpg",
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item10.2_2.jpg",
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item10.2_3.jpg",
          ],
          brandImg:[
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/MIHARA YASUHIRO.jpg"
          ],
          brandInfo:"MASION MIHARA YASUHIRO는 1997년에 신발 브랜드에서 시작하여, 해체주의적 시각을 담은 독특한 디자인의 컬렉션을 전개하는 도쿄 베이스의 브랜드 입니다.",
        }
      },
      {
        title:"10.2 WED",
        date: "1002",
        dayweek:"WED",
        time:"10:00",
        tag:"tagmen",
        prdData: "https://img.thehandsome.com/md/publish/event/240807_muereffle/pc-img05-slide13.jpg",
        popupInfo:{
          brand:"MIHARA YASUHIRO",
          pruductName : "AUTOGRAPHED<br /> SMILE T-SHIRTS",
          puductInfo: "MEN 48",
          mainInfo: "MIHARA YASUHIRO의 스테디 셀러 시그니쳐 프린트 반팔 티셔츠 입니다. MUE의 20주년을 기념하여 디자이너 미하라 야스히로의 친필 사인(유성펜 사인)이 들어가 있는 하나뿐인 제품으로 소장가치를 높였습니다.<br />*남녀 개별 DRAW 응모, 상품 상이",
          subInfo: "정상가 &#x20a9;430,000",
          realSize:"MEN(SMILE PRINT)<br />총장 79 / 가슴둘레 128 /  소매길이 28.5cm",
          puductImg: [
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item10.2_4.jpg",
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item10.2_5.jpg",
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/readmore_item10.2_6.jpg",
          ],
          brandImg:[
            "https://img.thehandsome.com/md/publish/event/240807_muereffle/MIHARA YASUHIRO.jpg"
          ],
          brandInfo:"MASION MIHARA YASUHIRO는 1997년에 신발 브랜드에서 시작하여, 해체주의적 시각을 담은 독특한 디자인의 컬렉션을 전개하는 도쿄 베이스의 브랜드 입니다.",
        }
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
  },
  methods: {
    swiperChange(){
      const me = this
      me.$nextTick(() => {
        setTimeout(() => {
          me.tabSwipe = me.$el.querySelector('.product-img-swiper').swiper.realIndex;
          const tabswiper = me.$el.querySelector('#top-tab-swipe').swiper
          tabswiper.slideTo(me.tabSwipe,300);
        }, 20);
      })
    },
    changeTab(index) {
      this.tabSwipe = index;
      const me = this
      me.$nextTick(() => {
        const slideToIndex = index;
        const swiper = me.$el.querySelector('.product-img-swiper').swiper
        const swiper2 = me.$el.querySelector('#top-tab-swipe').swiper

        swiper2.slideTo(slideToIndex, 300, function () {
          me.changeTab(index);
        });
        swiper.slideTo(slideToIndex, 300, function () {
          me.changeTab(index);
        });
      })
    },
    popupChangeTab(index){
      this.calenderPop = false
      this.changeTab(index);
      this.scrollToTopTabSwipe();
    },
    scrollToTopTabSwipe() {
      const tabswiper = this.$el.querySelector('.tabs-actionTop')
      if (tabswiper) {
        tabswiper.scrollIntoView({ behavior: "smooth" });
      }
    },
    moveVisual(){
      const visual = this.$el.querySelector('.visual-cover')
      if (visual) {
        visual.scrollIntoView({ behavior: "smooth" });
      }
    },
    opencalenderPop(){
      this.calenderPop = true
    },
    closeCalenderPop() {
      this.calenderPop = false
    },
    openDialogReadMore(idx) {
      const me = this
      me.DialogReadMoreModel[idx].open = true
    },
    closeDialogReadMore(idx) {
      const me = this
      me.DialogReadMoreModel[idx].open = false
    },
    swiperslidechange(){
      const me = this
      const swiper = me.$el.querySelector('.product-img-swiper').swiper
      const tabswiper = me.$el.querySelector('#top-tab-swipe').swiper
      me.$nextTick(() => {
        setTimeout(() => {
          me.tabSwipe = tabswiper.realIndex
          swiper.slideTo(me.tabSwipe, 300);
        }, 20);
      })
    }
  },
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/event.scss'; 
</style>
