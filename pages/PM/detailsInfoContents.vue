<template>
  <div class="prd-detail-info">
    <h2 class="ir">상세정보</h2>
    <!-- HTML 영역 -->
    <!--<div class="full-width prd-html-detail">
      <div 
        class="editor-box prd-html-editor" :class="{'h-auto':!htmlMore.use}" 
        :style="!htmlMore.open ? 'height:'+htmlMore.hiddenH+'px;' : 'height:auto'"
      >
        <img src="https://img.thehandsome.com/md/publish/dummy/pc/details-html-img0.png" alt="상품 상세 이미지1" />
        <img src="https://img.thehandsome.com/md/publish/dummy/pc/details-html-img1.png" alt="상품 상세 이미지3" style="margin:30px uato 20px auto"/>
        <div class="pw-20 mt-20">
          <p class="cmp-font fnt-18 mb-16">orea 상품 구성!</p>
          <ul class="cmp-list list-dotType2 bottom0">
            <li>린넨 블렌드 브레이드 라인 셔츠</li>
            <li>와이드 데님 팬츠</li>
            <li>브리티쉬 밀리터리 스니커즈</li>
            <li>블랩 레더 미니 크로스백</li>
          </ul>
        </div>
      </div>
      <div v-if="htmlMore.use" class="more-btn-cnt" :class="{open:htmlMore.open}">
        <v-btn v-if="!htmlMore.open" outlined block large color="primary" class="more-btn" @click="htmlAllView(true)">더보기<i class="cmp-icon cmp-icon-18 i-down ml-4"></i></v-btn>
        <v-btn v-else outlined block large color="primary" class="more-btn" @click="htmlAllView(false)">접기<i class="cmp-icon cmp-icon-18 i-up ml-4"></i></v-btn>
      </div>
    </div>-->
    <!-- HTML 영역 -->
    <!-- 묶음상품 리스트 -->
    <div class="prd-bundle-list">
      <div v-for="(item,index) in prdData" :key="index" class="contents-line4-box">
        <ProductRowUnit :unit-data="item" class="prd-bundle-unit">
          <!-- 230111 묶음상품 : 추가 -->
          <template #right>
            <div class="a-btn-box">
              <button class="zzim-btn type3" :class="{on:item.zzim}" @click="item.zzim = !item.zzim"><span class="ir">찜</span></button>
            </div>
          </template>
          <!-- // 230111 묶음상품 : 추가 -->
          <template #bottom>
            <v-layout row justify-space-between class="b-btn-box">
              <v-btn outlined color="normal" @click="openPrdPopup" height="42">상세보기</v-btn>
              <v-btn outlined color="normal" height="42">옵션선택</v-btn>
            </v-layout>
          </template>
        </ProductRowUnit>
      </div>
    </div>
    <!-- //묶음상품 리스트 -->
    <!--리뷰 SelectBox-->
    <div class="review-select" id="reviewContent">
      <div class="review-select-top" :class="{'on' : reviewSel}" @click="reviewSelected('N')">
        <div class="review-select-img" :style="{ backgroundImage: 'url(' + reviewTopData.images + ')' }"></div>
        <div class="review-select-info">
            <div class="review-select-tit">상품평 {{reviewTopData.review_cnt}}개</div>
            <div class="review-select-prd">{{reviewTopData.product_name}}</div>
        </div>
      </div>
      <ul class="review-select-option">
        <li v-for="(item, index) in reviewSelData" :key="index" @click="reviewSelected(index)">
          <div class="review-select-img" :style="{ backgroundImage: 'url(' + item.images + ')' }"></div>
          <div class="review-select-info">
              <div class="review-select-tit">상품평 {{item.review_cnt}}개</div>
              <div class="review-select-prd">{{item.product_name}}</div>
          </div>
        </li>
      </ul>
    </div>
    <!--//리뷰 SelectBox-->
    <v-navigation-drawer v-model="DialogBundles" fixed temporary right width="1280px" overlay-color="#000" overlay-opacity="0.2" class="prd-bundle-navigation-drawer"><!-- 230103 묶음상품 : 클래스 prd-bundle-navigation-drawer 추가 -->
        <ProductBundleDetail ref="productBundle" @hide="closeDialog()"></ProductBundleDetail>
    </v-navigation-drawer>
  </div>
</template>

<script>
import ProductBundleDetail from './productBundleDetail.vue'

export default {
  components: {
    ProductBundleDetail,
  },
  props: {
    
  },
  data: () => ({
    DialogBundles : false,
    prdSel : false, // select open or close
    prdTopData : null, // selected value
    prdSizeData : [],
    prdData : [
      // 230111 묶음상품 : zzim 항목 추가
      {
        "brand_name" : "상품 01",
        "product_name": "린넨 블렌드 브레이드 라인 셔츠",
        "sell_price": "284000",
        "price": "355000",
        "discount": "20%",
        "links": ['#n'],
        "images": [
          ["https://img.thehandsome.com/md/publish/dummy/pc/bundle-prd-img0.png"],
        ],
        "zzim" : false
      },
      {
        "brand_name" : "상품 02",
        "product_name": "와이드 데님 팬츠",
        "sell_price": "284000",
        "price": "355000",
        "discount": "20%",
        "links": ['#n'],
        "images": [
          ["https://img.thehandsome.com/md/publish/dummy/pc/bundle-prd-img1.png"],
        ],
        "zzim" : false
      },
      {
        "brand_name" : "상품 03",
        "product_name": "브리티쉬 밀리터리 스니커즈",
        "sell_price": "284000",
        "price": "355000",
        "discount": "20%",
        "links": ['#n'],
        "images": [
          ["https://img.thehandsome.com/md/publish/dummy/pc/bundle-prd-img2.png"],
        ],
        "zzim" : false
      },
      {
        "brand_name" : "상품 04",
        "product_name": "플랩 레더 미니 크로스백",
        "sell_price": "284000",
        "price": "355000",
        "discount": "20%",
        "links": ['#n'],
        "images": [
          ["https://img.thehandsome.com/md/publish/dummy/pc/bundle-prd-img3.png"],
        ],
        "zzim" : false
      },
    ],
    prdSelData : [
      {
        "product_name": "01) 플로럴 자수 칼라 프릴 탑",
        "sell_price": "355,000",
        "price": "284,000",
        "discount": "20%",
        "images": "https://img.thehandsome.com/md/publish/dummy/pc/bundle-prd-img0.png",
      },
      {
        "product_name": "02) 비딩 헴 크롭 데님 팬츠",
        "sell_price": "355,000",
        "price": "284,000",
        "discount": "20%",
        "images": "https://img.thehandsome.com/md/publish/dummy/pc/bundle-prd-img1.png",
      },
      {
        "product_name": "03) 브이넥 플리츠 드레스",
        "sell_price": "355,000",
        "price": "284,000",
        "discount": "20%",
        "images": "https://img.thehandsome.com/md/publish/dummy/pc/bundle-prd-img2.png"
      },
      {
        "product_name": "04) 브이넥 플리츠 드레스",
        "sell_price": "355,000",
        "price": "284,000",
        "discount": "20%",
        "images": "https://img.thehandsome.com/md/publish/dummy/pc/bundle-prd-img3.png",
      }
    ],
    reviewSel : false, // select open or close
    reviewTopData : null, // selected value
    reviewSelData : [
      {
        "product_name": "01) 플로럴 자수 칼라 프릴 탑",
        "images": "https://img.thehandsome.com/md/publish/dummy/pc/bundle-prd-img0.png",
        "review_cnt": "34"
      },
      {
        "product_name": "02) 플로럴 자수 칼라 프릴 탑",
        "images": "https://img.thehandsome.com/md/publish/dummy/pc/bundle-prd-img0.png",
        "review_cnt": "34"
      },
      {
        "product_name": "03) 플로럴 자수 칼라 프릴 탑",
        "images": "https://img.thehandsome.com/md/publish/dummy/pc/bundle-prd-img0.png",
        "review_cnt": "34"
      },
      {
        "product_name": "04) 플로럴 자수 칼라 프릴 탑",
        "images": "https://img.thehandsome.com/md/publish/dummy/pc/bundle-prd-img0.png",
        "review_cnt": "34"
      },
      {
        "product_name": "05) 플로럴 자수 칼라 프릴 탑",
        "images": "https://img.thehandsome.com/md/publish/dummy/pc/bundle-prd-img0.png",
        "review_cnt": "34"
      },
      {
        "product_name": "06) 플로럴 자수 칼라 프릴 탑",
        "images": "https://img.thehandsome.com/md/publish/dummy/pc/bundle-prd-img0.png",
        "review_cnt": "34"
      },
    ],
    htmlMore : {
      use : false,
      open : false,
      hiddenH : 750,
      top : null
    },
  }),
  created() {
    const me = this
    me.prdTopData = me.prdSelData[0];
    me.reviewTopData = me.reviewSelData[0];
  },
  mounted() {
  },
  methods: {
    prdSelected(idx){
      const me = this
      
      if(!me.prdSel){
        me.prdSel = true;
      }else{
        me.prdSel = false;
      }
      
      if(idx !== 'N'){
        me.prdTopData = me.prdSelData[idx];
      }
    },
    reviewSelected(idx){
      const me = this
      
      if(!me.reviewSel){
        me.reviewSel = true;
      }else{
        me.reviewSel = false;
      }
      
      if(idx !== 'N'){
        me.reviewTopData = me.reviewSelData[idx];
      }
    },
    openPrdPopup(){
      this.DialogBundles = true
      this.$refs.productBundle.setup()
    },
    closeDialog(){
      const me = this
      console.log(me.DialogBundles)
      me.DialogBundles = false
    }
  },
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/pages/detail.scss'; //페이지 전용 css
</style>
