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
        <div class="html-area" style="text-align:center;">
          <!-- html 등록 영역 시작 -->
          
          <div id="test-swiper" class="swiper-container">
              <!-- 보여지는 영역 -->
              <div class="swiper-wrapper">
                <!-- div class="swiper-slide" 를 추가하면된다 -->
                <div class="swiper-slide">
                  <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/20230330_themagazinesome/pc-02-02-01.jpg" alt="" />
                </div>
                <div class="swiper-slide">
                  <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/20230330_themagazinesome/pc-02-02-02.jpg" alt="" />
                </div>
                <div class="swiper-slide">
                  <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/20230330_themagazinesome/pc-02-02-03.jpg" alt="" />
                </div>
                <div class="swiper-slide">
                  <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/20230330_themagazinesome/pc-02-02-04.jpg" alt="" />
                </div>
              </div>
              <!-- 페이징 버튼 처리 -->
              <div class="swiper-pagination"></div>

              <!-- 방향 버튼 상황에 따라 추가 삭제가능 -->
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
          </div>

          <!-- 해당 스크립트는 아래 mounted 확인 -->
          <div class="tab_menu" style="margin-top:30px;">
            <ul class="list">
              <li class="is_on">
                <a href="#tab1" class="btn">Tab Button1</a>
              </li>
              <li>
                <a href="#tab2" class="btn">Tab Button2</a>
              </li>
              <li>
                <a href="#tab3" class="btn">Tab Button3</a>
              </li>
              <li>
                <a href="#tab4" class="btn">Tab Button4</a>
              </li>
            </ul>
            
            <div class="cont_area">
              <div id="tab1" class="cont">
                Tab Content1
                <div class="tab_menu_sub" style="margin-top:30px;">
                  <ul class="list_sub">
                    <li class="is_on">
                      <a href="#tabsub1" class="btn_sub">Tab_sub Button1</a>
                    </li>
                    <li>
                      <a href="#tabsub2" class="btn_sub">Tab_sub Button2</a>
                    </li>
                    <li>
                      <a href="#tabsub3" class="btn_sub">Tab_sub Button3</a>
                    </li>
                    <li>
                      <a href="#tabsub4" class="btn_sub">Tab_sub Button4</a>
                    </li>
                  </ul>
                  
                  <div class="cont_area_sub">
                    <div id="tabsub1" class="cont_sub">
                      Tab_sub Content1
                    </div>
                    <div id="tabsub2" class="cont_sub">
                      Tab_sub Content2
                    </div>
                    <div id="tabsub3" class="cont_sub">
                      Tab_sub Content3
                    </div>
                    <div id="tabsub4" class="cont_sub">
                      Tab_sub Content4
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab2" class="cont">
                Tab Content2
              </div>
              <div id="tab3" class="cont">
                Tab Content3
              </div>
              <div id="tab4" class="cont">
                Tab Content4
              </div>
            </div>
          </div>
          <style type="text/css">
            .swiper-wrapper {transition-timing-function: linear;}


            .tab_menu{position:relative;}
            .tab_menu .list{overflow:hidden;}
            .tab_menu .list li{float:left; margin-right:14px;}
            .tab_menu .list li.is_on .btn{font-weight:bold; color:green;}
            .tab_menu .list .btn{font-size:13px;}
            .tab_menu .cont_area{margin-top:10px;}
            .tab_menu .cont_area .cont{display:none; background:#555; color:#fff; text-align:center; width:250px; line-height:100px;}
            .tab_menu .cont_area .cont:nth-child(1){display:block;}
            .tab_menu_sub .cont_area_sub .cont_sub{display:none;}
            .tab_menu_sub .cont_area_sub .cont_sub:nth-child(1){display:block;}
          </style>

          <!-- <script>

            window.initEvent = function() {
            // TODO: 적용 스크립트 입력
              
            };


          </script> -->
          <!-- <script type="text/javascript" src="https://cdn-img.thehandsome.com/md/publish/event/testJS/test_02.js"></script> -->
          <script>

            new Swiper('#test-swiper', {
                autoplay: {
                  delay: 0, // 0 보다 크면 list흐를때 스냅이 생긴다
                  disableOnInteraction: false
                },
                speed: 5000, //swiper 흐르는속도
                loop: true,
                loopAdditionalSlides : 1,
                // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
                allowTouchMove: false, // 터치 방지
                slidesPerView: 3,
                spaceBetween: 10,
                centeredSlides: true,
                pagination: {
                  el: '.swiper-pagination',
                  clickable: true
                },
                navigation: {
                  prevEl: '.swiper-button-prev',
                  nextEl: '.swiper-button-next'
                }
              })

              

          </script>
          <!-- html 등록 영역 끝 -->
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
  mounted() {
      const tabList = document.querySelectorAll('.tab_menu .list li');
      const contents = document.querySelectorAll('.tab_menu .cont_area .cont')
      const tabList2 = document.querySelectorAll('.tab_menu_sub .list_sub li')
      const contents2 = document.querySelectorAll('.tab_menu_sub .cont_area_sub .cont_sub')
      let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)
      let activeCont2 = '';

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
      for(let i2 = 0; i2 < tabList2.length; i2++){
        tabList2[i2].querySelector('.btn_sub').addEventListener('click', function(e){
          e.preventDefault()
          for(let j2 = 0; j2 < tabList2.length; j2++){
            // 나머지 버튼 클래스 제거
            tabList2[j2].classList.remove('is_on')

            // 나머지 컨텐츠 display:none 처리
            contents2[j2].style.display = 'none'
          }
          
          // 버튼 관련 이벤트
          this.parentNode.classList.add('is_on')

          // 버튼 클릭시 컨텐츠 전환
          activeCont2 = this.getAttribute('href')
          document.querySelector(activeCont2).style.display = 'block'
        })
      }
  },
  methods: {
  },
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/event.scss'; 
</style>
