<template>
  <div class="contents">
    <div v-scroll="onScroll" class="content-wrap content-planshopTemp">
        <MagHeader :data="{title:'기획전',subTitle : '타임옴므가 꿈꾸는 여름', date:'2021.12.29'}" />
        <!-- [s] 상단 html에디터 -->
        <div class="main-imgArea mb-120">
              <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/planshopImg.png" alt=""></v-img>
            <div class="textBox">
                <p class="tit mb-24">타임옴므가 꿈꾸는 여름</p>
                <p class="txt"> 3줄 데님과 쇼츠, 파스텔 컬러 니트와 베이직 아이템이 함께 뒤섞여 조화를 이루는 이번 타임 옴므 온라인 전용 컬렉션은 지금부터 올 여름까지 입기에 완벽한 스타일을 제안한다. </p>
            </div>
        </div>
        <!-- [e] 상단 html에디터 -->

        <div class="anchorArea">
          <!-- [s] 앵커탭 [퍼블수정]23.02.07 -->
          <div v-sticky-tabs="{planDetail: true}" class="anchorTabs planshop-tabs fullver" :class="{'column08' : tabList2.length > 8}">
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
          <div class="anchorCon column2 mb-120">
            <!-- 2줄메뉴 column2클래스 추가 -->
            <div id="TabCont1" class="anchorBox planAllBox">
              <p class="tit">잡화</p>
              <ProductList class="plan-list" :list="productList" :layout="4" :unit-type="productUnitType" :swipe="productUnitAnchor" />
            </div>
            <div id="TabCont2" class="anchorBox planAllBox">
              <!-- 이미지구분자 -->
                <img src="https://img.thehandsome.com/md/publish/dummy/pc/planImage1800.png" alt="" />
              <ProductList class="plan-list" :list="productList" :layout="4" :unit-type="productUnitType" :swipe="productUnitAnchor" />
            </div>
            <div id="TabCont3" class="anchorBox planAllBox">
              <p class="tit">가디건/베스트</p>
              <ProductList class="plan-list" :list="productList" :layout="4" :unit-type="productUnitType" :swipe="productUnitAnchor" />
            </div>
            <div id="TabCont4" class="anchorBox planAllBox">
              <p class="tit">트렌치코트</p>
              <ProductList class="plan-list" :list="productList" :layout="4" :unit-type="productUnitType" :swipe="productUnitAnchor" />
            </div>
            <div id="TabCont5" class="anchorBox planAllBox">
              <p class="tit">코트</p>
              <ProductList class="plan-list" :list="productList" :layout="4" :unit-type="productUnitType" :swipe="productUnitAnchor" />
            </div>
            <div id="TabCont6" class="anchorBox planAllBox">
              <p class="tit">코트</p>
              <ProductList class="plan-list" :list="productList" :layout="4" :unit-type="productUnitType" :swipe="productUnitAnchor" />
            </div>
            <div id="TabCont7" class="anchorBox planAllBox">
              <p class="tit">코트</p>
              <ProductList class="plan-list" :list="productList" :layout="4" :unit-type="productUnitType" :swipe="productUnitAnchor" />
            </div>
            <div id="TabCont8" class="anchorBox planAllBox">
              <p class="tit">코트</p>
              <ProductList class="plan-list" :list="productList" :layout="4" :unit-type="productUnitType" :swipe="productUnitAnchor" />
            </div>
            <div id="TabCont9" class="anchorBox planAllBox">
              <p class="tit">코트</p>
              <ProductList class="plan-list" :list="productList" :layout="4" :unit-type="productUnitType" :swipe="productUnitAnchor" />
            </div>
            <div id="TabCont10" class="anchorBox planAllBox">
              <p class="tit">코트</p>
              <ProductList class="plan-list" :list="productList" :layout="4" :unit-type="productUnitType" :swipe="productUnitAnchor" />
            </div>
          </div>
          <!-- [e] 앵커탭 내용 -->
        </div>


        <!-- [s] 쿠폰 다운로드 -->
        <div class="mb-120">
          <nuxt-link :to={}>
          <img src="https://img.thehandsome.com/md/publish/dummy/pc/coupon-image-planshop.png" alt="" />
          </nuxt-link>
        </div>
        <!-- [e] 쿠폰 다운로드 -->

        <!-- [s] 상품 모아보기 -->
        <div class="planAllBox stickyTabs mb-120"  ref="nextAnchorBox">
            <p class="tit mb-40">상품모아보기</p>
            <div class="anchorTabBox" ref="anchorTabBox">
              <div class="cmp-tabs tab-wrapType" :class="{'column06' : tabList.length > 6}"><!-- [퍼블수정]22.12.08 모아보기 수정 -->
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

            <v-layout justify-end align-center class="planshop-filter mb-24 mt-30"><!-- [퍼블수정]22.12.08 모아보기 수정 -->
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
                    <p class="tit">전체</p>
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
                <v-tab-item :transition="false">
                    <p class="tit">코트</p>
                    <ProductList class="plan-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe" />
                </v-tab-item>
                <v-tab-item :transition="false">
                    <p class="tit">코트</p>
                    <ProductList class="plan-list" :list="productList2" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe" />
                </v-tab-item>
                <v-tab-item :transition="false">
                    <p class="tit">코트</p>
                    <ProductList class="plan-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe" />
                </v-tab-item>
              </v-tabs-items>
            </div>
        </div>
        <!-- [e] 상품 모아보기 -->

        <!-- [s] html에디터 -->
        <div class="mb-120">
          <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/planshopSubImg.png" alt=""></v-img>
          <div class="textBox mt-14">
              <p class="txt cmp-font fnt-18">
                New Season, New Arrivals,<br />
                새로운 시즌, 2022 S/S 신상품 입고
              </p>
          </div>
        </div>
        <!-- [e] html에디터 -->

        <!-- [s] 최신 기획전 -->
        <div class="planAllBox planRecent">
          <MagRecent :title="'최신 기획전'"></MagRecent>
        </div>
        <!-- [e] 최신 기획전 -->

        <div class="magaBtn mt-60 text-center"><!-- [퍼블수정]23.01.26 mt-40 > mt-60 -->
          <v-btn outlined large color="primary">
            목록
          </v-btn>
        </div>

    </div>
    <!-- 230222 기획전 : planshop-detail-swiper.js 연결 추가 -->
    <script src="/scripts/planshop-detail-swiper.js"></script>
    <!-- 230222 기획전 : 삭제 /230119 구분자 슬라이드 : script 추가 -->
    <!-- <script type="text/javascript"></script> -->
  </div>
</template>
<script>
import MagRecent from '~/components/planshop/MagRecent.vue'
import MagHeader from '~/components/planshop/MagHeader'


export default {
  components: {
    MagRecent,
    MagHeader,
},
  layout: 'LayoutBasics',
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
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/004.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "FOURM MEN’S LOUNGE",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/005.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "LOUNGE",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
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
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/010.jpg",
        "link_url" : "#none",
      }      
    ],
    productList2 : [
      {
        "brand_name": "FOURM MEN’S LOUNGE",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/005.jpg",
        "link_url" : "#none",
        "flags": [
            "BEST",
            "NEW"
        ],
        "exclusive":false,
        "limited":true,
      },
      {
        "brand_name": "LOUNGE",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/006.jpg",
        "link_url" : "#none",
        "exclusive":true,
        "limited":false,
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
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/008.jpg",
        "link_url" : "#none",
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
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/010.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "FOURM LOUNGE",
        "product_name": "[BEARBRICK] 사이키델릭 페이즐",
        "sell_price": "284000",
        "price": "355000",
        "discount": "20%",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/001.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "FOURM MEN’S LOUNGE",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/002.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "FOURM MEN’S",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/003.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "LOUNGE",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/004.jpg",
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
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/008.jpg",
        "link_url" : "#none",
      },
    ],
    tabList: [
      '전체',
      '재킷',
      '점퍼',
      '가디건/베스트',
      '트렌치코트',
      '코트',
      '코트',
      '코트',
      '코트',
    ],
    tabList2: [
      '잡화',
      '재킷',
      '가디건/베스트',
      '트렌치코트',
      '코트',
      '코트',
      '코트',
      '코트',
      '코트',
      '코트',
    ],
  }),
  created(){
  },
  methods: {
    tabTitle(idx){
      this.tabTitleName = this.tabList[idx]
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
@import '@/assets/scss/pages/magazine.scss';
</style>