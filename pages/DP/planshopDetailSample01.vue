<template>
  <div class="contents">
    <div class="content-wrap content-planshopTemp">
        <MagHeader :data="{title:'기획전',subTitle : '타임옴므가 꿈꾸는 여름', date:'2021.12.29'}" />
        <!-- [s] 상단 html에디터 -->
        <div class="mag-temp-full-width">
            <div class="main-imgArea mb-60">
                <!--html 등록 Start -->
                <div class="pc-planshop2023-detail01">
                  <img src="https://img.thehandsome.com/md/publish/dummy/pc/planshop/01/pc_detail_01.jpg" alt="" class="p-d-img" />
                  <div class="p-d-video">
                    <img src="https://img.thehandsome.com/md/publish/dummy/pc/planshop/01/pc_detail_02_bg.jpg" alt="" class="p-d-img" />
                    <div class="vod-cnt">
                      <video poster="https://img.thehandsome.com/md/publish/dummy/pc/planshop/01/pc_detail_02_video.jpg" autoplay="autoplay" muted controls="controls" playsinline="playsinline" controlsList="nodownload">
                        <source src="https://img.thehandsome.com/md/publish/dummy/pc/planshop/01/pc_detail_02_video_vod.mp4" type="video/mp4">
                      </video>
                    </div>
                  </div>
                  <img src="https://img.thehandsome.com/md/publish/dummy/pc/planshop/01/pc_detail_03.jpg" alt="" class="p-d-img" />
                  <img src="https://img.thehandsome.com/md/publish/dummy/pc/planshop/01/pc_detail_04.jpg" alt="" class="p-d-img" />
                </div>
                <style type="text/css">
                  .pc-planshop2023-detail01{position:relative;width:100%;overflow:hidden;}
                  .pc-planshop2023-detail01 .p-d-img{display:block;width:100%;margin:0 auto;}
                  .pc-planshop2023-detail01 .p-d-video{position:relative;}
                  .pc-planshop2023-detail01 .p-d-video .vod-cnt{position:absolute;width:62.5%;left:18.75%;top:9.0909%;}
                  .pc-planshop2023-detail01 .p-d-video video{display:block;width:100%;object-fit:cover;}
                </style>
                <!--html 등록 End -->
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