<template>
  <div class="contents">
    <div class="content-wrap content-magazineTemp content-magazineTempA"><!-- [퍼블수정]23.03.13 class 추가 -->
        <MagHeader :data="{title:'커버스토리',subTitle : '타임옴므가 꿈꾸는 여름', date:'2021.12.29'}" />
        <!-- [s] html영역 -->
        <div class="mb-40 mag-temp-full-width">
            <div class="main-imgArea mb-40">
                <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/maga-banner.png" alt=""></v-img>
                <div class="textBox">
                    <p class="tit mb-24">타임옴므가 꿈꾸는 여름</p>
                    <p class="txt"> 3줄 데님과 쇼츠, 파스텔 컬러 니트와 베이직 아이템이 함께 뒤섞여 조화를 이루는 이번 타임 옴므 온라인 전용 컬렉션은 지금부터 올 여름까지 입기에 완벽한 스타일을 제안한다. </p>
                </div>
            </div>
            <div class="sub-imgArea">
              <div class="col-l">
                <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/maga-imgm.png" alt=""></v-img>
              </div>
              <div class="col-r">
                <div class="row-t">
                  <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/maga-imgs.png" alt=""></v-img>
                </div>
                <div class="row-b">
                  <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/maga-imgs.png" alt=""></v-img>
                </div>
              </div>
            </div>
        </div>
        <!-- 퍼블 확인용 -->
        <div>
          <div>
            <div class="mb-120"></div>
          </div>
          <div>
            <div class="mb-120">
              <!-- <p><img src="http://cdn.thehandsome.com/pc/editorial_gu/221103_%ED%83%80%EC%9E%84%EC%98%B4%EB%AF%80%20%EC%98%A8%EC%A0%84%20%EA%B2%A8%EC%9A%B8%202%EC%B0%A8/pc_detail_01.jpg" alt="" width="1205" height="2640"></p> -->
            </div>
          </div>
        </div>
        <!-- [e] html영역 -->
        
        <!-- [s] 구분자 -->
        <!-- <div class="mb-40"></div> -->
        <!-- [e] 구분자 -->

        <!-- [s] 이미지 슬라이드 -->
        <!-- [퍼블수정]23.10.11 더매거진 수정 - 타이틀에 class 추가 -->
        <h3 class="muh-list-title">1</h3>
        <!-- [240813] THE 매거진 쿠폰 구분자 영역 추가 -->
        <div class="mb-130">
          <ProductList class="muh-list" :list="productList" :layout="4" :unit-type="productUnitType" :swipe="productUnitSwipe" />
          
          <div class="couponArea text-center mag-temp-full-width mt-140">
            <button class="button">
              <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/planshop/coupon-banner-sample.jpg" alt=""></v-img>
            </button>
          </div>
        </div>
        <!-- // [240813] THE 매거진 쿠폰 구분자 영역 추가 -->
        <!-- [e] 이미지 슬라이드 -->
        
        <!-- [s] html 영역 -->
        <div class="mb-40 mag-temp-full-width">
          <div class="sub-imgArea">
            <div class="col-l">
              <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/maga-imgm.png" alt=""></v-img>
            </div>
            <div class="col-r">
              <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/maga-imgs.png" alt=""></v-img>
            </div>
          </div>
        </div>
        <!-- [e] html 영역 -->

        <!-- [s] 이미지 슬라이드 -->
        <!-- [퍼블수정]23.10.11 더매거진 수정 - 타이틀에 class 추가 -->
        <h3 class="muh-list-title">2</h3>
        <div class="mb-120">
          <ProductList class="muh-list" :list="productList" :layout="4" :unit-type="productUnitType" :swipe="productUnitSwipe" />
        </div>
        <!-- [e] 이미지 슬라이드 -->

        <!-- [s] 모아보기 -->
        <div class="magaAllBox mb-120">
          <p class="tit">위 화보에 실린 상품 모아보기</p>
          <ProductList class="muh-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe2" />
          <div class="magaBtn mt-40 text-center">
            <v-btn outlined large color="primary" @click="moreView = !moreView">
              <template v-if="moreView">접기<i class="cmp-icon cmp-icon-12 i-up"></i></template>
              <template v-else>더보기<i class="cmp-icon cmp-icon-12 i-down"></i></template>
            </v-btn>
          </div>
        </div>
        <!-- [e] 모아보기 -->

        <!-- [s] 최신 the 매거진 -->
        <div class="magaAllBox magaRecent dim">
          <MagRecent></MagRecent>
        </div>
        <!-- [e] 최신 the 매거진 -->

        <div class="magaBtn mt-60 text-center"><!-- [퍼블수정]23.01.26 mt-40 > mt-60 -->
          <v-btn outlined large color="primary">
            목록
          </v-btn>
        </div>

    </div>
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
    productUnitSwipe: true,
    productUnitSwipe2 : false,
    productList : [
      {
        "brand_name": "FOURM LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/001.jpg",
        "link_url" : "#none",
        "product_name" : "[BEARBRICK] 사이키델릭 페이즐 사이키델릭 페이즐사이키델릭 페이즐사이키델릭 페이즐사이키델릭 페이즐사이키델릭 페이즐사이키델릭 페이즐",
        "flags": [
            "BEST",
            "NEW"
        ],
        "exclusive":true,
        "limited":false,
      },
      {
        "brand_name": "FOURM MEN’S LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/002.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트",
        "flags": [
            "BEST",
        ],
        "exclusive":false,
        "limited":true,
      },
      {
        "brand_name": "FOURM MEN’S",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/003.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트",
        "flags": [
            "NEW"
        ],
      },
      {
        "brand_name": "LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/004.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      },
      {
        "brand_name": "FOURM MEN’S LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/005.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      },
      {
        "brand_name": "LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/006.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      },
      {
        "brand_name": "FOURM MNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/007.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      },
      {
        "brand_name": " MEN’S LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/008.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트",
        "flags": [
            "BEST",
            "NEW"
        ],
      },
      {
        "brand_name": "FOURM MENUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/009.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      },
      {
        "brand_name": "LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/010.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      },{
        "brand_name": "LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/006.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      },
      {
        "brand_name": "FOURM MNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/007.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      },

    ],
    moreView : false,
  }),
  created(){
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/magazine.scss'; 
</style>