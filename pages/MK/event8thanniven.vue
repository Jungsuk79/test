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
          <div class="pc-event2023-8thanniv">
            <!-- 상단 영역 -->
            <img src="https://img.thehandsome.com/md/publish/event/231012_8thmain_enevent/PC_main_01.jpg" class="e-img" alt="THE HANDSOME 8th Anniv. 2023.10.20(Fri) - 10.31(Tue)" />
            <!-- // 상단 영역 -->
            <div class="tab_menu">
              <!-- 탭 버튼 영역 -->
              <div class="tab_menu_cover">
                <ul class="list">
                  <li class="is_on">
                    <a href="#tab1" class="btn">
                      <img src="https://img.thehandsome.com/md/publish/event/231012_8thmain_enevent/pc-tab-img01.jpg" alt="BENEFIT 01 MAX 18% ROULETTE" />
                      <img src="https://img.thehandsome.com/md/publish/event/231012_8thmain_enevent/pc-tab-img01-on.jpg" class="on" alt="BENEFIT 01 MAX 18% ROULETTE" />
                    </a>
                  </li>
                  <li>
                    <a href="#tab2" class="btn">
                      <img src="https://img.thehandsome.com/md/publish/event/231012_8thmain_enevent/pc-tab-img02.jpg" alt="BENEFIT 02 EXTRA 8% OFF" />
                      <img src="https://img.thehandsome.com/md/publish/event/231012_8thmain_enevent/pc-tab-img02-on.jpg" class="on" alt="BENEFIT 02 EXTRA 8% OFF" />
                    </a>
                  </li>
                </ul>
              </div>
              <!-- // 탭 버튼 영역 -->
              
              <div class="cont_area">
                <!-- 탭1 영역 -->
                <div id="tab1" class="cont">
                  <!-- 룰렛영역 -->
                  <div class="roulette-area" style="background-image : url(https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab02-img01-bg.png);background-size: cover;">
                    <img src="https://img.thehandsome.com/md/publish/event/231012_8thmain_enevent/pc-tab01-title.png" class="e-img" alt="BENEFIT 01 Join our sitewide savings event! Simply click the GO button and score your discount offer raging from 10% to 18% off sitewide / * ALL ITEMS 10% / ALL ITEMS 12% / 23 COLLECTIONS 15% / 23 COLLECTIONS 18%" />
                    <!-- 룰렛판 -->
                    <div class="rouletter">
                      <div class="rouletter-bg">
                          <div class="rouletter-wacu" style="background-image : url(https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/rouletter-pc-bg-fix.png)">
                            <div ref="rouletterInner" class="rouletter-inner">
                              <div class="item">
                                <div class="benefit">
                                  <h5>1,000M</h5>
                                  <p>마일리지</p>
                                </div>
                              </div>
                              <div class="item">
                                <div class="benefit">
                                  <h5>40,000원</h5>
                                  <p>쿠폰</p>
                                </div>
                              </div>
                              <div class="item">
                                <div class="benefit">
                                  <h5>oera KIT set</h5>
                                  <p>사은품</p>
                                </div>
                              </div>
                              <div class="item">
                                <div class="benefit">
                                  <h5>50%</h5>
                                  <p>쿠폰</p>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div class="rouletter-arrow">
                        <v-img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/rouletter-pin-pc.png" alt="" :aspect-ratio="92 / 136"></v-img>
                      </div>
                      <button class="rouletter-btn" @click="rouletteStart">
                        <v-img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/rouletter-start-pc.png" alt="" aspect-ratio="1"></v-img>
                        <!-- <v-img src="/images/event/roulette_start.png" alt="" aspect-ratio="1" class="start"></v-img> -->
                        <!-- <v-img src="/images/event/roulette_start.png" alt="" aspect-ratio="1" class="end" style="opacity:0.5"></v-img> -->
                      </button>
                    </div>
                    <!-- //룰렛판 -->
                  </div>
                  <!-- //룰렛영역 -->
                </div>
                <!-- //탭1 영역 -->
                <!-- 탭2 영역 -->
                <div id="tab2" class="cont">
                  <img src="https://img.thehandsome.com/md/publish/event/231012_8thmain_enevent/pc-tab02-title.jpg" class="e-img" alt="BENEFIT 02 Receive an additional 8% off coupon for any style." />
                  <!-- 쿠폰 영역 -->
                  <!-- {{ couponArea }} -->
                </div>
                <!-- //탭2 영역 -->
              </div>
            </div>
          </div>
          <style type="text/css">
            .pc-event2023-8thanniv{position:relative;width:100%;overflow:hidden;}
            .pc-event2023-8thanniv .e-img{display:block;width:100%;margin:0 auto;}
            .pc-event2023-8thanniv .swiper-wrapper {transition-timing-function: linear;}
            .pc-event2023-8thanniv .visual_cover{position:relative;}
            .pc-event2023-8thanniv .visual_cover .e-d-video{position: absolute; top: 23.55%; left: 50%; transform: translate(-50%,0); width: 62.6%; height: auto;}
            .pc-event2023-8thanniv .visual_cover .e-d-video video{display:block; width:100%; height:100%;}

            .pc-event2023-8thanniv .tab_menu{position:relative;}
            .pc-event2023-8thanniv .tab_menu .tab_menu_cover{position: relative;background:#292929;z-index:3;}
            .pc-event2023-8thanniv .tab_menu .list{overflow:hidden; display: flex; align-items: center; max-width: 1200px; margin: 0 auto;}
            .pc-event2023-8thanniv .tab_menu .list li{position: relative; width: 50%;}
            .pc-event2023-8thanniv .tab_menu .list li a{display: block;}
            .pc-event2023-8thanniv .tab_menu .list li::after{content: ""; display:block; position:absolute; width: 1px; height: 50px; top: 50%; left: 0; background: #292929; transform: translateY(-50%);}
            .pc-event2023-8thanniv .tab_menu .list li:first-child::after{content: ""; display:none;}
            .pc-event2023-8thanniv .tab_menu .list li.is_on{background:#6295fe;}
            .pc-event2023-8thanniv .tab_menu .list li.is_on::after,
            .pc-event2023-8thanniv .tab_menu .list li.is_on + li::after{display:none;}
            .pc-event2023-8thanniv .tab_menu .list li .btn{}
            .pc-event2023-8thanniv .tab_menu .list li .btn img{margin: 0 auto;}
            .pc-event2023-8thanniv .tab_menu .list li .btn img.on{display:none;}
            .pc-event2023-8thanniv .tab_menu .list li.is_on .btn img{display:none;}
            .pc-event2023-8thanniv .tab_menu .list li.is_on .btn img.on{display:block;}

            .pc-event2023-8thanniv .tab_menu .cont_area{}
            .pc-event2023-8thanniv .tab_menu .cont_area .cont{display:none; width:100%; height:auto;}

            .pc-event2023-8thanniv .roulette-area{padding-top:0;}
            .pc-event2023-8thanniv .roulette-area .rouletter{width: 550px; height: 550px;margin: 60px auto 0;}
            .pc-event2023-8thanniv .roulette-area .rouletter .rouletter-bg{width: 550px; height: 550px;}
            .pc-event2023-8thanniv .roulette-area .rouletter .rouletter-arrow{top: -3px; width: 38px; height: 40px;}
            .pc-event2023-8thanniv .roulette-area .rouletter .rouletter-btn{width: 140px; height: 140px;}

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
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data: () => ({
    hiddenInput: null,
    setNum: 0,
    rolLength: 4,
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
    const tabList = document.querySelectorAll('.tab_menu .list li');
    const contents = document.querySelectorAll('.tab_menu .cont_area .cont')
    let activeCont = '#tab1'; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

    document.querySelector(activeCont).style.display = 'block';
    for(let i = 0; i < tabList.length; i++){
      tabList[i].querySelector('.btn').addEventListener('click', function(e){
        e.preventDefault();
        for(let j = 0; j < tabList.length; j++){
          // 나머지 버튼 클래스 제거
          tabList[j].classList.remove('is_on');

          // 나머지 컨텐츠 display:none 처리
          contents[j].style.display = 'none';
        }

        // 버튼 관련 이벤트
        this.parentNode.classList.add('is_on');

        // 버튼 클릭시 컨텐츠 전환
        activeCont = this.getAttribute('href');
        document.querySelector(activeCont).style.display = 'block';
      });
    }

    this.hiddenInput = document.createElement("input"); // 히든인풋을 사용
    this.hiddenInput.className = "hidden-input";

    let x = 0;
		let y = 0;
    let a = 0;
    let temp = 0;
    const ary = this.$refs.rouletterInner.querySelectorAll('.item');

    for(let i=0; i<4; i++) {
      temp = (90 * i )-90;
      a = temp / 180 * Math.PI;

      x = Math.cos(a) * 170;
		  y = Math.sin(a) * 170;
  
      ary[i].style.left = x+'px';
      ary[i].style.top = y+'px';
      ary[i].style.transform = 'rotate('+(temp+90)+'deg)';
    }
  },
  methods: {
    //  룰렛
    rouletteStart(e) {
      const target = e.target;

      this.rouletteRotate();
      this.rouletteReset(target);
    },
    rouletteRotate() {
      const panel = document.querySelector(".rouletter-wacu");
      const btn = document.querySelector(".rouletter-btn");

      const deg = [];
      for (let i = 1, len = this.rolLength; i <= len; i++) {
        deg.push((360 / len) * i - 90);
      }

      let num = 0;
      document.body.append(this.hiddenInput);
      this.setNum = this.hiddenInput.value = this.rouletteRandom();

      const ani = setInterval(() => {
        num++;
        panel.style.transform = "rotate(" + 360 * num + "deg)";
        btn.disabled = true; // button,input
        btn.style.pointerEvents = "none"; // a 태그
        btn.classList.add("end");

        if (num === 30) {
          clearInterval(ani);
          panel.style.transform = "rotate(-" + deg[this.setNum] + "deg)";
        }
      }, 50);
    },
    rouletteReset(target) {
      setTimeout(() => {
        target.disabled = false;
        target.style.pointerEvents = "auto";
        this.rouletteLayerPopup(this.setNum);
        this.hiddenInput.remove();
      }, 3000);
    },
    rouletteLayerPopup(num) {
      switch (num) {
        case 0:
          alert("당첨!! 한섬마일리지");
          break;
        case 1:
          alert("당첨!! 쿠폰");
          break;
        case 2:
          alert("당첨!! 사은품");
          break;
        case 3:
          alert("당첨!! 쿠폰");
          break;
        // case 5:
        //   alert("당첨!! 3만원");
        //   break;
        // default:
        //   alert("꽝! 다음기회에");
      }
    },
    rouletteRandom() {
      const min = Math.ceil(0);
      const max = Math.floor(this.rolLength - 1);
      return Math.floor(Math.random() * (max - min)) + min;
    },
  },
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/event.scss';
</style>
