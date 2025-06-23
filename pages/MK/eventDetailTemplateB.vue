<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div v-scroll="onScroll" class="content-wrap">
      <div class="event-detail">
        <div class="e-title type2"><!-- 230110 단순클릭응모형 : type2 클래스 추가 -->
          <h4>상품평 마일리지 혜택</h4>
          <v-layout align-center>
            <div class="cmp-labels">
              <span class="label black">종료</span>
            </div>
            <p>2021.12.07 ~ 2021.12.26</p>
          </v-layout>
        </div>
        <div class="html-area" style="text-align:center;">
          <!-- html 등록 영역 시작 -->
          <div class="pc-event2023-ex">
            <div class="mileage-video">
              <video playsinline poster="https://img.thehandsome.com/md/publish/dummy/pc/event/02/pc_detail_01.jpg" autoplay="autoplay" muted="muted" loop="loop">
                  <source src="https://img.thehandsome.com/md/publish/dummy/pc/event/02/pc_detail_01.mp4" type="video/mp4" />
              </video>
            </div>
            <div class="img-area link-box">
              <a href="#n">상품평 작성 바로가기</a><!-- 상품평 작성 바로가기 링크 : href="링크" 입력  -->
              <img src="https://img.thehandsome.com/md/publish/dummy/pc/event/02/pc_detail_06.jpg"/>
            </div>
          </div>
          <style type="text/css">
            .pc-event2023-ex .img-area{display: block;}
            .pc-event2023-ex .img-area img{display: block; margin:0 auto;}
            .pc-event2023-ex .img-area.link-box{position:relative;}
            .pc-event2023-ex .img-area.link-box a{position: absolute;width: 43.6%;height: 7.3%;text-indent: -9999px; font-size:0; color:transparent !important; left:28.1%;bottom:7.1%;}
          </style>
          <!-- html 등록 영역 끝 -->
        </div>
        <!-- //20230125 쿠폰 이벤트 HTML 추가-->
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
        
        <!-- [퍼블리싱]23.11.23 이벤트 템플릿 추가 작업 - 템플릿 B - 앵커 탭 / 상품 모아보기 n개 등록  -->
        <div class="eventTemplate-cover">
          <!-- 템플릿 B 상단 탭 -->
          <section class="event-unit-tab">
            <div class="anchorArea">
              <!-- [s] 앵커탭 -->
              <div v-sticky-tabs="{planDetail: true}" class="anchorTabs event-tabs fullver" :class="{'column08' : tabList2.length > 8}">
                <div class="fixed-tabsBox">
                  <div class="fixed-tabs">
                    <button v-for="(item,index) in tabList2" :key="index" :target="'TabCont' + (index + 1)">
                        <span>{{item}}</span>
                    </button>
                  </div>
                </div>
              </div>
              <!-- [e] 앵커탭 -->

              <!-- [s] 앵커탭 내용 -->
              <div class="anchorCon"><!-- 2줄메뉴 column2 클래스 추가 -->
                <div id="TabCont1" class="anchorBox event-tab-unit-list">
                  <div class="img-tit full-width">
                    <p class="tit">잡화</p>
                    <img src="https://img.thehandsome.com/md/publish/dummy/pc/event/1018_time_1691.png" alt="" />
                  </div>
                  <ProductList class="plan-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe" />
                </div>
                <div id="TabCont2" class="anchorBox event-tab-unit-list">
                  <p class="tit">재킷</p>
                  <ProductList class="plan-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe" />
                </div>
                <div id="TabCont3" class="anchorBox event-tab-unit-list">
                  <p class="tit">가디건/베스트</p>
                  <ProductList class="plan-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe" />
                </div>
                <div id="TabCont4" class="anchorBox event-tab-unit-list">
                  <p class="tit">트렌치코트</p>
                  <ProductList class="plan-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe" />
                </div>
                <div id="TabCont5" class="anchorBox event-tab-unit-list">
                  <p class="tit">코트</p>
                  <ProductList class="plan-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe" />
                </div>
              </div>
              <!-- [e] 앵커탭 내용 -->
            </div>
          </section>
          <!-- // 템플릿 B 상단 탭 -->

          <!-- html 등록 유닛 -->
          <!-- <section class="event-tab-unit-list">
            <div class="full-width">
              html 등록 영역
              <img src="https://img.thehandsome.com/md/publish/dummy/pc/event/1018_time_1691.png" alt="" />
            </div>
          </section> -->
          <!--//  html 등록 유닛 -->

          <!-- 상품 모아보기 - 등록 항목 1개 일때 필터 정렬예시 -->
          <section class="event-unit-anchor">
            <!-- [s] 상품 모아보기 -->
            <!-- [퍼블수정]24.02.21 구분자 최상단으로 이동 -->
            <div class="planAllBox stickyTabs" ref="nextAnchorBox" id="selectAnchorBox-title">
              <p class="tit">상품모아보기</p>
              <div class="anchorTabBox" ref="anchorTabBox">
                <div class="cmp-tabs tab-wrapType" :class="{'column06' : tabList.length > 6}">
                  <div class="fixed-tabsBox">
                    <v-tabs v-model="tab" fixed-tabs>
                      <v-tabs v-model="tab" fixed-tabs>
                        <v-tab v-for="(item,index) in tabList" :key="index" @click="tabTitle(index)">{{item}}</v-tab>
                      </v-tabs>
                    </v-tabs>
                  </div>
                </div>
                <v-expansion-panels v-sticky-tabs accordion class="cmp-acc">
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      {{tabTitleName}}
                      <template #actions>
                        <i class="cmp-icon-etc cmp-icon-down">열기/닫기</i>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="cmp-tabs tab-wrapType" :class="{'column06' : tabList.length > 6}">
                        <div class="fixed-tabsBox">
                          <v-tabs v-model="tab" fixed-tabs>
                            <v-tab v-for="(item,index) in tabList" :key="index" @click="tabTitle(index)">
                              <p>{{item}}</p>
                            </v-tab>
                          </v-tabs>
                        </div>
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>

              <v-layout justify-end align-center class="event-filter">
                <div class="filtering-btnBox">
                  <button type="button" class="on">신상순</button>
                  <button type="button">판매순</button>
                  <button type="button">고가순</button>
                  <button type="button">저가순</button>
                  <button type="button">리뷰순</button>
                </div>
              </v-layout>
              <div class="tab-content">
                <v-tabs-items v-model="tab" touchless>
                  <v-tab-item :transition="false" class="planAllBox">
                    <v-layout justify-space-between align-center class="event-filter">
                      <p class="tit">전체</p>
                      <!-- [s] 필터탭 있는 경우 - 비노출 -->
                      <!-- <div class="filtering-btnBox">
                        <button type="button" class="on">신상순</button>
                        <button type="button">판매순</button>
                        <button type="button">고가순</button>
                        <button type="button">저가순</button>
                        <button type="button">리뷰순</button>
                      </div> -->
                      <!-- [e] 필터탭 있는 경우 - 비노출 -->
                    </v-layout>
                    <ProductList class="plan-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe" />
                  </v-tab-item>
                  <v-tab-item :transition="false">
                    <p class="tit">재킷</p>
                    <ProductList class="plan-list" :list="productList2" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe" />
                  </v-tab-item>
                  <v-tab-item :transition="false">
                    <p class="tit">점퍼</p>
                    <ProductList class="plan-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe" />
                  </v-tab-item>
                  <v-tab-item :transition="false">
                    <p class="tit">가디건/베스트</p>
                    <ProductList class="plan-list" :list="productList2" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe" />
                  </v-tab-item>
                  <v-tab-item :transition="false">
                    <p class="tit">트렌치코트</p>
                    <ProductList class="plan-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe" />
                  </v-tab-item>
                  <v-tab-item :transition="false">
                    <p class="tit">코트</p>
                    <ProductList class="plan-list" :list="productList2" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe" />
                  </v-tab-item>
                </v-tabs-items>
              </div>
            </div>
            <!-- [e] 상품 모아보기 -->
          </section>
        </div>
        <!-- // [퍼블리싱]23.11.23 이벤트 템플릿 추가 작업 - 템플릿 B -->

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
    tabTitleName : '전체',
    tab : null,
    nextAnchorBox : '',
    anchorTabBox : '',
    productUnitType : 'mini',
    productUnitSwipe : false,
    productUnitAnchor : true,
    productList : [
      {
        "brand_name": "FOURM LOUNGE",
        "product_name": "[BEARBRICK] 사이키델릭 페이즐 사이키델릭 페이즐사이키델릭 페이즐사이키델릭 페이즐사이키델릭 페이즐사이키델릭 페이즐사이키델릭 페이즐",
        "sell_price": "284000",
        "price": "355000",
        "discount": "20%",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/001.jpg",
        "stkrBtmWrd" : "셀럽착용",
        "stkrColorCd" : "#db390c",
        "link_url" : "#none",
        "flags": [
            "BEST",
            "NEW"
        ],
        "exclusive":false,
        "limited":true,
      },
      {
        "brand_name": "FOURM MEN’S LOUNGE",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/002.jpg",
        "link_url" : "#none",
        "flags": [
            "BEST",
        ],
        "exclusive":true,
        "limited":false,
      },
      {
        "brand_name": "FOURM MEN’S",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/003.jpg",
        "link_url" : "#none",
        "flags": [
            "NEW"
        ],
      },
      {
        "brand_name": "LOUNGE",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "price": "355000",
        "discount": "20%",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/004.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "FOURM MEN’S LOUNGE",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "price": "355000",
        "discount": "20%",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/005.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "LOUNGE",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "price": "355000",
        "discount": "20%",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/006.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "FOURM MNGE",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/007.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": " MEN’S LOUNGE",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "price": "355000",
        "discount": "20%",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/008.jpg",
        "link_url" : "#none",
        "flags": [
            "BEST",
            "NEW"
        ],
      },
      {
        "brand_name": "FOURM MENUNGE",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/009.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "LOUNGE",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "price": "355000",
        "discount": "20%",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/010.jpg",
        "link_url" : "#none",
      }      
    ],
    productList2 : [
      {
        "brand_name": "FOURM LOUNGE",
        "product_name": "[BEARBRICK] 사이키델릭 페이즐",
        "sell_price": "284000",
        "price": "355000",
        "discount": "20%",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/001.jpg",
        "link_url" : "#none",
        "exclusive":false,
        "limited":true,
      },
      {
        "brand_name": "FOURM MEN’S LOUNGE",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "price": "355000",
        "discount": "20%",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/002.jpg",
        "link_url" : "#none",
        "exclusive":true,
        "limited":false,
      },
      {
        "brand_name": "FOURM MEN’S",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "price": "355000",
        "discount": "20%",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/003.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "LOUNGE",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "price": "355000",
        "discount": "20%",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/004.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "FOURM MEN’S LOUNGE",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "price": "355000",
        "discount": "20%",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/005.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "LOUNGE",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "price": "355000",
        "discount": "20%",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/006.jpg",
        "link_url" : "#none",
      }    
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
    tabList: [
      '전체',
      '재킷',
      '점퍼',
      '가디건/베스트',
      '트렌치코트',
      '코트',
    ],
    tabList2: [
      '잡화',
      '재킷',
      '가디건/베스트',
      '트렌치코트',
      '코트',
    ],  
  }),
  methods: {
    tabTitle(idx){
      // [퍼블수정]24.02.21 구분자 최상단으로 이동
      const me = this
      me.tabTitleName = this.tabList[idx]
      
      const selectAnchor = document.getElementById("selectAnchorBox-title");
      const anchorTabs = document.querySelector('.anchorTabs')
      const fixedTabsBox = document.querySelector('.fixed-tabsBox')
      const windowTop = window.pageYOffset;
      me.lastScrollTop = windowTop;

      let gap
      if (window.getComputedStyle(anchorTabs).display === 'none') {
        gap = 0
        // console.log('Title is hidden.',selectAnchor.offsetTop + gap);
      } else {
        gap = -fixedTabsBox.offsetHeight
        // console.log('Title is visible.',selectAnchor.offsetTop + gap);
      }
      window.scrollTo({top:selectAnchor.offsetTop + gap + 40,behavior:'smooth'})
    },
    onScroll(e) {
    	// 스크롤 움직일 때 마다 호출됨
    	this.scroll = window.scrollY;
      const anchorChange = this.$refs.nextAnchorBox.offsetTop;
      const anchorTabBoxFix = this.$refs.anchorTabBox.offsetTop;

      // 탭1 숨김 [퍼블수정]22.12.08 모아보기 수정
      if(this.scroll + 100 > anchorChange){
        document.querySelector('.anchorTabs').style.display = 'none';
      }else{
        document.querySelector('.anchorTabs').style.display = 'block';
      }

      // 탭2 [퍼블수정]22.12.08 모아보기 수정
      if(this.scroll - 100 > anchorTabBoxFix){
        document.querySelector('.anchorTabBox .cmp-acc').style.display = 'block';
        document.querySelector('.anchorTabBox .cmp-tabs').style.display = 'none';
        document.querySelector('.anchorTabBox + div').style.paddingTop = '124px';
      }else{
        document.querySelector('.anchorTabBox .cmp-acc').style.display = 'none';
        document.querySelector('.anchorTabBox .cmp-tabs').style.display = 'block';
        document.querySelector('.anchorTabBox + div').style.paddingTop = '0';
      }

    },
  },
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/event.scss'; 
</style>
