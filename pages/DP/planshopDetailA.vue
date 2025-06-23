<template>
  <div class="contents">
    <div class="content-wrap content-planshopTemp">
        <MagHeader :data="{title:'기획전',subTitle : '타임옴므가 꿈꾸는 여름!!', date:'2021.12.29'}" />
        <!-- [s] 상단 html에디터 [퍼블수정]22.12.08 결함 HUN3-2525 수정 -->
        <div class="mag-temp-full-width">
            <div class="main-imgArea mb-40">
                <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/maga-banner.png" alt=""></v-img>
                <div class="textBox">
                    <p class="tit mb-24">타임옴므가 꿈꾸는 여름</p>
                    <p class="txt"> 3줄 데님과 쇼츠, 파스텔 컬러 니트와 베이직 아이템이 함께 뒤섞여 조화를 이루는 이번 타임 옴므 온라인 전용 컬렉션은 지금부터 올 여름까지 입기에 완벽한 스타일을 제안한다. </p>
                </div>
            </div>
            <div class="main-imgArea mb-60">
                <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/planshopImg.png" alt=""></v-img>
                <div class="textBox">
                    <p class="tit mb-24">타임옴므가 꿈꾸는 여름</p>
                    <p class="txt"> 3줄 데님과 쇼츠, 파스텔 컬러 니트와 베이직 아이템이 함께 뒤섞여 조화를 이루는 이번 타임 옴므 온라인 전용 컬렉션은 지금부터 올 여름까지 입기에 완벽한 스타일을 제안한다. </p>
                </div>
            </div>
        </div>
        <!-- [e] 상단 html에디터 [퍼블수정]22.12.08 결함 HUN3-2525 수정 -->
        
        <!-- [s] 상단 html에디터2 -->
        <div class="main-imgArea mb-60">
            <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/planshopImg.png" alt=""></v-img>
            <div class="textBox">
                <p class="tit mb-24">타임옴므가 꿈꾸는 여름</p>
                <p class="txt"> 3줄 데님과 쇼츠, 파스텔 컬러 니트와 베이직 아이템이 함께 뒤섞여 조화를 이루는 이번 타임 옴므 온라인 전용 컬렉션은 지금부터 올 여름까지 입기에 완벽한 스타일을 제안한다. </p>
            </div>
        </div>
        <!-- [e] 상단 html에디터2 -->

        <div class="planAllBox mb-100">
          <p class="tit">잡화</p>
          <ProductList class="plan-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe" />
        </div>

        <!-- [s] 이미지 구분자 -->
        <div class="mb-40">
          <img src="https://img.thehandsome.com/md/publish/dummy/pc/planImage1800.png" alt="" />
        </div>
        <!-- [e] 이미지 구분자 -->
        <div class="planAllBox mb-120">
          <ProductList class="plan-list" :list="productList2" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe" />
        </div>


        <!-- [s] 쿠폰 다운로드 -->
        <div class="mb-120">
          <nuxt-link :to={}>
          <img src="https://img.thehandsome.com/md/publish/dummy/pc/coupon-image-planshop.png" alt="" />
          </nuxt-link>
        </div>
        <!-- [e] 쿠폰 다운로드 -->

        <!-- [s] 앵커탭 [퍼블수정]22.12.08 -->
        <div v-sticky-tabs="{planDetail: true}" class="anchorTabs planshop-tabs">
          <div class="fixed-tabsBox">
            <div class="fixed-tabs">
              <button target="TabCont1">
                  <span>전체</span>
              </button>
              <button target="TabCont2">
                  <span>재킷</span>
              </button>
              <button target="TabCont3">
                  <span>가디건/베스트</span>
              </button>
              <button target="TabCont4">
                  <span>트렌치코트</span>
              </button>
              <button target="TabCont5">
                  <span>코트</span>
              </button>
            </div>
          </div>
        </div>
        <!-- [e] 앵커탭 -->

        <!-- [s] 앵커탭 내용 [퍼블수정]22.12.08 -->
        <div class="anchorCon mb-80">
          <div id="TabCont1" class="anchorBox planAllBox pt-24">
            <v-layout justify-end align-center class="planshop-filter pt-30">
              <div class="filtering-btnBox">
                <button type="button" class="on">신상순</button>
                <button type="button">판매순</button>
                <button type="button">고가순</button>
                <button type="button">저가순</button>
                <button type="button">리뷰순</button>
              </div>
            </v-layout>
            <p class="tit">전체</p>
          <ProductList class="plan-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe" />
          </div>
          <div id="TabCont2" class="anchorBox planAllBox">
            <p class="tit">재킷</p>
          <ProductList class="plan-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe" />
          </div>
          <div id="TabCont3" class="anchorBox planAllBox">
            <p class="tit">가디건/베스트</p>
          <ProductList class="plan-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe" />
          </div>
          <div id="TabCont4" class="anchorBox planAllBox">
            <p class="tit">트렌치코트</p>
          <ProductList class="plan-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe" />
          </div>
          <div id="TabCont5" class="anchorBox planAllBox">
            <p class="tit">코트</p>
          <ProductList class="plan-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe" />
          </div>
        </div>
        <!-- [e] 앵커탭 내용 -->

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
    productUnitType : 'mini',
    productUnitSwipe : false,
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
    ]
  }),
  created(){
  },
  methods: {
    onScroll(e) {
    	// 스크롤 움직일 때 마다 호출됨
    	this.scroll = window.scrollY;
    },
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/magazine.scss';
</style>