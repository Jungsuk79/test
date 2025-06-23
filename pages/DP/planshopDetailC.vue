<template>
  <div class="contents">
    <div class="content-wrap content-planshopTemp">
        <MagHeader :data="{title:'기획전',subTitle : '타임옴므가 꿈꾸는 여름', date:'2021.12.29'}" />
        <!-- [s] 상단 html에디터 -->
        <div class="main-imgArea mb-60">
              <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/planshopImg.png" alt=""></v-img>
            <div class="textBox">
                <p class="tit mb-24">타임옴므가 꿈꾸는 여름</p>
                <p class="txt"> 3줄 데님과 쇼츠, 파스텔 컬러 니트와 베이직 아이템이 함께 뒤섞여 조화를 이루는 이번 타임 옴므 온라인 전용 컬렉션은 지금부터 올 여름까지 입기에 완벽한 스타일을 제안한다. </p>
            </div>
        </div>
        <!-- [e] 상단 html에디터 -->

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

        <!-- [s] html에디터 -->
        <div class="mb-120">
          <!-- html 등록 영역 -->
          <!-- <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/planshopSubImg.png" alt=""></v-img>
          <div class="textBox mt-14">
              <p class="txt cmp-font fnt-18">
                New Season, New Arrivals,<br />
                새로운 시즌, 2022 S/S 신상품 입고
              </p>
          </div> -->
          <div class="swiper html-edite-swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="https://cdn-img-stg.thehandsome.com/attachment/display/2023/01/06/1205dc18-1e3e-43bf-8967-0ec0694c3bcd_10.png" alt="이미지 설명"/></div>
              <div class="swiper-slide"><img src="https://cdn-img-stg.thehandsome.com/attachment/display/2023/01/06/1205dc18-1e3e-43bf-8967-0ec0694c3bcd_10.png" alt="이미지 설명"/></div>
              <div class="swiper-slide"><img src="https://cdn-img-stg.thehandsome.com/attachment/display/2023/01/06/1205dc18-1e3e-43bf-8967-0ec0694c3bcd_10.png" alt="이미지 설명"/></div>
              <div class="swiper-slide"><img src="https://cdn-img-stg.thehandsome.com/attachment/display/2023/01/06/1205dc18-1e3e-43bf-8967-0ec0694c3bcd_10.png" alt="이미지 설명"/></div>
              <div class="swiper-slide"><img src="https://cdn-img-stg.thehandsome.com/attachment/display/2023/01/06/1205dc18-1e3e-43bf-8967-0ec0694c3bcd_10.png" alt="이미지 설명"/></div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <div class="swiper html-edite-swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="https://cdn-img-stg.thehandsome.com/attachment/display/2023/01/06/1205dc18-1e3e-43bf-8967-0ec0694c3bcd_10.png" alt="이미지 설명"/></div>
              <div class="swiper-slide"><img src="https://cdn-img-stg.thehandsome.com/attachment/display/2023/01/06/1205dc18-1e3e-43bf-8967-0ec0694c3bcd_10.png" alt="이미지 설명"/></div>
              <div class="swiper-slide"><img src="https://cdn-img-stg.thehandsome.com/attachment/display/2023/01/06/1205dc18-1e3e-43bf-8967-0ec0694c3bcd_10.png" alt="이미지 설명"/></div>
              <div class="swiper-slide"><img src="https://cdn-img-stg.thehandsome.com/attachment/display/2023/01/06/1205dc18-1e3e-43bf-8967-0ec0694c3bcd_10.png" alt="이미지 설명"/></div>
              <div class="swiper-slide"><img src="https://cdn-img-stg.thehandsome.com/attachment/display/2023/01/06/1205dc18-1e3e-43bf-8967-0ec0694c3bcd_10.png" alt="이미지 설명"/></div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <!-- //html 등록 영역 -->
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
        "link_url" : "#none",
        "flags": [
            "BEST",
            "NEW"
        ],
        "exclusive":true,
        "limited":false,
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
        "exclusive":false,
        "limited":true,
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