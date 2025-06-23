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

          <div class="pc-9thteaser">
            <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thteaser/pc-01.jpg" alt="9th TEASING EVENT" />

            <div class="tab_menu">
              <!-- 탭 버튼 영역 -->
              <div class="tab_menu_cover">
                <ul class="list">
                  <li v-for="(item, i) in tabsList" :class="{'is_on' : i === 0}" :key="`tab-${i+1}`">
                    <button class="btn" :name="`tab0${i+1}`" >
                      <img 
                        v-for="(image, index) in item.images" 
                        class="img"
                        :class="{'img-on': index === 1}" 
                        :src="`https://cdn-img.thehandsome.com/md/publish/event/241001_9thteaser/${image}`" :alt="item.text" 
                        :key="index"/>
                    </button>
                  </li>
                </ul>
              </div>
              <!-- // 탭 버튼 영역 -->
  
              <!-- 탭 컨텐츠 영역 -->
              <div class="cont_area">
                <!-- tab cont 01 -->
                <div class="cont cont-01" name="tab01-cont">
                  <div class="inner">
                    <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thteaser/pc-tab01-cont-01.jpg" alt="BENEFIT 1 옷깃만 스쳐도, 인연 (더한섬닷컴과 함께 한 인연에 대한 에피소드를 댓글로 남기고 혜택을 받아보세요.)" />


                    <!-- 댓글 작성시 해당 팝업 아래쪽에 있습니다. -->
                    <div style="display:flex;align-items:center;justify-content:center;width:100%;height:400px;background-color:#efefef;font-size:20px;" @click="isPopupA = true">댓글(템플릿)</div>

                  </div>
                </div>
                
                <!-- tab cont 02 -->
                <div class="cont cont-02" name="tab02-cont">
                  <div class="inner">
                    <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thteaser/pc-tab02-cont-01.jpg" alt="BENEFIT 2 매일 새로운 인연 (매일 바뀌는 브랜드 별 추가 혜택 받아보세요.)" />
                    
                    <div class="swiper-box-wrap">
                      <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thteaser/pc-tab02-cont-02.jpg" alt="TODAY's BRAND 단 하루씩 브랜드별 추가 혜택을 놓치지 마세요." />

                      <div class="swiper-box">
                        <div id="teaser9thSwiper" class="swiper-container">
                          <div class="swiper-wrapper">
                            <div v-for="(item, index) in downItemListsData" :key="index" class="swiper-slide">
                              <div v-for="(couponItem, idx) in item.itemCouponBox" :key="`coupon-${idx}`" class="swiper-unit">
                                <img :src="`https://img.thehandsome.com/md/publish/event/241001_9thteaser/${couponItem.imageName}.jpg`" class="img" :alt="couponItem.alt"/>
                                <v-btn 
                                  v-if="couponItem.btnType === 'download' || couponItem.btnType === 'end'"
                                  class="btn btn-box btn-down"
                                  :disabled="couponItem.btnType === 'end'"
                                  >
                                  <img v-if="couponItem.btnType === 'download'" class="img" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thteaser/pc-btn-down.jpg" alt="" />
                                  <img v-if="couponItem.btnType === 'end'" class="img" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thteaser/pc-btn-disabled.jpg" alt="" />
                                </v-btn>
                                <img v-else-if="couponItem.btnType === 'comingsoon'" class="img" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thteaser/pc-btn-comingsoon.jpg" alt="" />
                                <img v-else-if="couponItem.btnType === 'done'" class="img" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thteaser/pc-btn-done.jpg" alt="" />
                              </div>
                            </div>
                          </div>
                          <div class="swiper-pagination event9thteaser-pagination"></div>
                        </div>
                        <div class="swiper-button-prev event9thteaser-prev-btn"></div>
                        <div class="swiper-button-next event9thteaser-next-btn"></div>
                      </div>

                    </div>

                    <div class="card-wrap">
                      <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thteaser/pc-tab02-cont-03.jpg" alt="" />
                      <img class="img tag" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thteaser/card-tag.png" alt="" />

                      <!-- 
                        BC 카드   : card-bc.jpg
                        하나 카드 : card-hana.jpg
                        현대 카드 : card-hyundai.jpg
                        국민 카드 : card-kookmin.jpg
                        롯데 카드 : card-lotte.jpg
                        농협 카드 : card-nonghyup.jpg
                        신한 카드 : card-shinhan.jpg
                        우리 카드 : card-woori.jpg
                      -->
                      <img class="img card" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thteaser/card-bc.jpg" alt="" />
                    </div>

                  </div>
                </div>
              </div>
              <!-- // 탭 컨텐츠 영역 -->
            </div>

            <!-- popup 횟수 초과시 -->
            <v-dialog v-model="isPopupA" persistent>
              <div class="pop-wrap-01 teaser9th-pop-wrap">
                <img class="img pop-01" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thteaser/pc-pop-01.png" alt="최대 3회까지 참여 가능합니다. 이벤트 참여에 감사드려요!" />
                <button class="btn-close" @click="closePopup">닫기</button>
              </div>
            </v-dialog>
            
            <!-- popup 댓글 작성 완료 후 -->
            <v-dialog v-model="isPopupB" persistent>
              <div class="pop-wrap-02 teaser9th-pop-wrap">
                <img class="img pop-02" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thteaser/pc-pop-02.png" alt="소중한 인연이 되어 주셔서 감사드려요!" />
                <nuxt-link :to="{}" class="link">나의 쿠폰함 보러가기</nuxt-link>
                <button class="btn-close" @click="closePopup">닫기</button>
              </div>
            </v-dialog>

          </div>



          <style type="text/css">
            .pc-9thteaser {display:block;width:100%;margin:0 auto;}
            .pc-9thteaser .img{display: block;width:100%; margin:0 auto;}

            .pc-9thteaser .tab_menu{position:relative;}
            .pc-9thteaser .tab_menu .tab_menu_cover{background-color:#ff0000;}
            .pc-9thteaser .tab_menu .tab_menu_cover .list{display:flex;align-items:center;justify-content:center;width:1200px;margin:0 auto;}
            .pc-9thteaser .tab_menu .tab_menu_cover .list li{flex:1;}
            .pc-9thteaser .tab_menu .tab_menu_cover .list li .img{display:block}
            .pc-9thteaser .tab_menu .tab_menu_cover .list li .img.img-on{display:none}
            .pc-9thteaser .tab_menu .tab_menu_cover .list li.is_on .img{display:none;}
            .pc-9thteaser .tab_menu .tab_menu_cover .list li.is_on .img.img-on{display:block;}
            .pc-9thteaser .tab_menu .cont_area .cont{display:none;}
            .pc-9thteaser .tab_menu .cont_area .cont-02 .swiper-box-wrap{position:relative;}
            .pc-9thteaser .tab_menu .cont_area .cont-02 .swiper-box-wrap .swiper-box{position:absolute;top:27.35294%;left:20.052%;width:59.8958333%;z-index:1;}
            .pc-9thteaser .tab_menu .cont_area .cont-02 .swiper-box-wrap .swiper-box .swiper-container{padding-bottom:60px;}
            .pc-9thteaser .tab_menu .cont_area .cont-02 .swiper-box-wrap .swiper-box .swiper-slide{display:flex;align-items:flex-start;justify-content:space-between;}
            .pc-9thteaser .tab_menu .cont_area .cont-02 .swiper-box-wrap .swiper-box .swiper-slide .swiper-unit{width:32.173913%;margin-left:1.73913%;}
            .pc-9thteaser .tab_menu .cont_area .cont-02 .swiper-box-wrap .swiper-box .swiper-slide .swiper-unit:first-child{margin-left:0;}
            .pc-9thteaser .tab_menu .cont_area .cont-02 .swiper-unit .btn-box{width:100%;height:auto;min-width:auto;padding:0;}
            .pc-9thteaser .tab_menu .cont_area .cont-02 .swiper-box-wrap .swiper-box .swiper-button-prev{width:46px;height:46px;top:calc(50% - 60px);left:-66px;background:url('//cdn-img.thehandsome.com/md/publish/event/241001_9thteaser/pc-arrow-l.jpg') no-repeat center;background-size:46px auto;}
            .pc-9thteaser .tab_menu .cont_area .cont-02 .swiper-box-wrap .swiper-box .swiper-button-next{width:46px;height:46px;top:calc(50% - 60px);right:-66px;background:url('//cdn-img.thehandsome.com/md/publish/event/241001_9thteaser/pc-arrow-r.jpg') no-repeat center;background-size:46px auto;}
            .pc-9thteaser .tab_menu .cont_area .cont-02 .swiper-box-wrap .swiper-box .swiper-button-prev:after, .pc-9thteaser .tab_menu .cont_area .cont-02 .swiper-box-wrap .swiper-box .swiper-button-next:after{content:none;}
            .pc-9thteaser .tab_menu .cont_area .cont-02 .swiper-box-wrap .swiper-box .event9thteaser-pagination{width:100%;height:20px;bottom:0;}
            .pc-9thteaser .tab_menu .cont_area .cont-02 .swiper-box-wrap .swiper-box .event9thteaser-pagination .swiper-pagination-bullet{width:4px;height:20px;margin:0 6px;background:#000;border-radius:0;opacity:1;}
            .pc-9thteaser .tab_menu .cont_area .cont-02 .swiper-box-wrap .swiper-box .event9thteaser-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active{width:8px;}
            .pc-9thteaser .tab_menu .cont_area .cont-02 .card-wrap{position:relative;}
            .pc-9thteaser .tab_menu .cont_area .cont-02 .card-wrap .tag{position:absolute;top:23.6%;right:34.427%;width:4.6875%;height:10.9489%;z-index:2;}
            .pc-9thteaser .tab_menu .cont_area .cont-02 .card-wrap .card{position:absolute;top:26.277372%;left:35.9375%;width:28.125%;height:41.484%;z-index:1;}


            .v-dialog:has(.teaser9th-pop-wrap){border-top:none;}
            .teaser9th-pop-wrap{position:relative;}
            .teaser9th-pop-wrap .img{width:540px;}
            .teaser9th-pop-wrap.pop-wrap-01 .btn-close{position:absolute;top:9.2664%;right:4.8148%;width:7.4%;height:15.444%;z-index:1;margin:0;box-sizing:border-box;text-indent:-9999px;color:transparent !important;}
            .teaser9th-pop-wrap.pop-wrap-02 .btn-close{position:absolute;top:4.58%;right:4.444%;width:7.4%;height:7.63%;z-index:1;margin:0;box-sizing:border-box;text-indent:-9999px;color:transparent !important;}
            .teaser9th-pop-wrap.pop-wrap-02 .link{position:absolute;bottom:9.16%;left:35.9259%;width:26.85%;height:8.7786%;z-index:1;margin:0;box-sizing:border-box;text-indent:-9999px;color:transparent !important;}
            </style>

          <!-- <script>

            window.initEvent = function() {
            // TODO: 적용 스크립트 입력
              
            };


          </script> -->
          <script>
            new Swiper('#teaser9thSwiper', {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: true,
              pagination: {
                el: '.event9thteaser-pagination',
                clickable: true
              },
              navigation: {
                prevEl: '.event9thteaser-prev-btn',
                nextEl: '.event9thteaser-next-btn',
              }
            })
          </script>


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
// import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  layout: 'LayoutBasics',
  components : {
    Swiper,
    SwiperSlide,
    // DialogBasic,
  },  
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data: () => ({
    isPopupA : false, // 팝업 상태값
    isPopupB : false,

    tabsList: [ // tabs data
      {
        images : ['pc-tab-01-off.jpg', 'pc-tab-01-on.jpg'],
        text : '인연은 10%를 남기고'
      },
      {
        images : ['pc-tab-02-off.jpg', 'pc-tab-02-on.jpg'],
        text : '오늘의 인연, 추가 혜택'
      }
    ],
    downItemListsData: [
      {
        itemCouponBox: [
          {imageName:'pc-slide-1001-01', alt: '10월 1일 OBZEE', btnType: 'done'},
          {imageName:'pc-slide-1001-02', alt: '10월 1일 CLUB MONACO', btnType: 'end'},
          {imageName:'pc-slide-1001-03', alt: '10월 1일 SELECTED', btnType: 'download'}
        ]
      },
      {
        itemCouponBox: [
          {imageName:'pc-slide-1002-01', alt: '10월 2일 SYSTEM', btnType: 'comingsoon'},
          {imageName:'pc-slide-1002-02', alt: '10월 2일 SYSTEM HOMME', btnType: 'comingsoon'},
          {imageName:'pc-slide-1002-03', alt: '10월 2일 BALLY', btnType: 'comingsoon'}
        ]
      },
      {
        itemCouponBox: [
          {imageName:'pc-slide-1003-01', alt: '10월 3일 the CASHMERE', btnType: 'comingsoon'},
          {imageName:'pc-slide-1003-02', alt: '10월 3일 SJSJ', btnType: 'comingsoon'},
          {imageName:'pc-slide-1003-03', alt: '10월 3일 VERONICA BEARD', btnType: 'comingsoon'}
        ]
      },
      {
        itemCouponBox: [
          {imageName:'pc-slide-1004-01', alt: '10월 4일 LATT', btnType: 'comingsoon'},
          {imageName:'pc-slide-1004-02', alt: '10월 4일 RE/DONE', btnType: 'comingsoon'},
          {imageName:'pc-slide-1004-03', alt: '10월 4일 MUE', btnType: 'comingsoon'}
        ]
      },
      {
        itemCouponBox: [
          {imageName:'pc-slide-1005-01', alt: '10월 5일 MINE', btnType: 'comingsoon'},
          {imageName:'pc-slide-1005-02', alt: '10월 5일 FOURM', btnType: 'comingsoon'},
          {imageName:'pc-slide-1005-03', alt: '10월 5일 MOOSE KNUCKLES', btnType: 'comingsoon'}
        ]
      },
      {
        itemCouponBox: [
          {imageName:'pc-slide-1006-01', alt: '10월 6일 O2ND', btnType: 'comingsoon'},
          {imageName:'pc-slide-1006-02', alt: '10월 6일 Ten c', btnType: 'comingsoon'},
          {imageName:'pc-slide-1006-03', alt: '10월 6일 the CASHMERETHINGS', btnType: 'comingsoon'}
        ]
      },
      {
        itemCouponBox: [
          {imageName:'pc-slide-1007-01', alt: '10월 7일 ASPESI', btnType: 'comingsoon'},
          {imageName:'pc-slide-1007-02', alt: '10월 7일 LANVIN', btnType: 'comingsoon'},
          {imageName:'pc-slide-1007-03', alt: '10월 7일 Liquides, oera, FUEGUIA 1833', btnType: 'comingsoon'}
        ]
      },
      {
        itemCouponBox: [
          {imageName:'pc-slide-1008-01', alt: '10월 8일 LANVIN', btnType: 'comingsoon'},
          {imageName:'pc-slide-1008-02', alt: '10월 8일 LANVIN BLANC', btnType: 'comingsoon'},
          {imageName:'pc-slide-1008-03', alt: '10월 8일 DKNY', btnType: 'comingsoon'}
        ]
      },
      {
        itemCouponBox: [
          {imageName:'pc-slide-1009-01', alt: '10월 9일 TOM GREYHOUND', btnType: 'comingsoon'},
          {imageName:'pc-slide-1009-02', alt: '10월 9일 ROCHAS PARIS', btnType: 'comingsoon'},
          {imageName:'pc-slide-1009-03', alt: '10월 9일 AGNONA', btnType: 'comingsoon'}
        ]
      },
      {
        itemCouponBox: [
          {imageName:'pc-slide-1010-01', alt: '10월 10일 OBZEE', btnType: 'comingsoon'},
          {imageName:'pc-slide-1010-02', alt: '10월 10일 CLUB MONACO', btnType: 'comingsoon'},
          {imageName:'pc-slide-1010-03', alt: '10월 10일 OUR LEGACY', btnType: 'comingsoon'}
        ]
      },
    ],

    DialogPopupModel : [{open : false},{open : false}],
    
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
  mounted() {
    this.evTabs()
  },
  methods: {
    evTabs () {
      // S : tab script
      const tabList = document.querySelectorAll('.tab_menu .list li')
      const contents = document.querySelectorAll('.tab_menu .cont_area .cont')
      let activeCont = 'tab01'

      document.querySelector(`[name=${activeCont}-cont]`).style.display = 'block'
      for(let i = 0; i < tabList.length; i++){
        tabList[i].querySelector('.btn').addEventListener('click', function(e){
          e.preventDefault()
          for(let j = 0; j < tabList.length; j++){
            tabList[j].classList.remove('is_on')
            contents[j].style.display = 'none'
          }

          this.parentNode.classList.add('is_on')

          
          activeCont = this.getAttribute('name')
          document.querySelector(`[name=${activeCont}-cont]`).style.display = 'block'
        })
      }
      // E : tab script 
    },
    closePopup () {
      this.isPopupA = false // 팝업 상태값
      this.isPopupB = false
    }
    
  }
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/event.scss';
</style>
