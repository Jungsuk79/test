`<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogProductZoom = true">
        이미지 확대보기
      </v-btn>

      <!-- 
        이미지 확대보기 POPUP
        221220 팝업 : 이미지 확대보기 팝업 v-dialog에  hide-overlay="true" 추가
       -->
      <v-dialog
        v-model="DialogProductZoom"
        :hideOverlay="true"
        content-class="full-popup product-zoom">
        <div class="header-fix">
          <div class="inner">
            <v-btn small icon class="btn-close" @click="(DialogProductZoom=false)">
              <i class="cmp-icon i-close">닫기</i>
            </v-btn>
          </div>
        </div>
        <div class="inner">
          <div class="img-box" v-for="(item, index) in productList" :key="index">
            <img :src="item.image_url" alt="상품이미지" role="button" class="img"/>
          </div>
        </div>
      </v-dialog>

    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogProductZoom : false,
    productList : [
      {
        "brand_name": "FOURM LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/001.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "FOURM MEN’S LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/002.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "FOURM MEN’S",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/003.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/004.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "FOURM MEN’S LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/005.jpg",
        "link_url" : "#none",
      },        
    ],
  }),
  methods: {},
}
</script>
<style lang="scss">
 // @import '@/assets/scss/pages/member.scss'; 
</style>
