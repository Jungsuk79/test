<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap search-content-wrap">
      <div class="cmp-page-tit center">
        <h2 class="tit">스타일필터</h2>
      </div>
      <p class="cmp-page-tit-desc center">선택하신 스타일 기반으로 AI가 찾은 상품이에요!</p>
      <div class="style-filter-btn">
        <v-btn outlined large height="46" class="width-160"><i class="cmp-icon cmp-icon-18 i-filter"></i><span>스타일필터</span></v-btn>
      </div>
      
      <div class="search-prd-styleFilter">
        <div class="filter-sort-wrap">
          <div class="count-layout split-layout">
            <div class="product-count">{{productCount | number}}개의 상품</div>
          </div>
        </div>
        <ProductList :list="productList" :layout="productListLayout" />
        <ProductListPaging />
      </div>
    </div>                                                  
  </div>
</template>

<script>
export default {
  components: {
    
  },
  layout: 'LayoutBasics',
  data() {
    return {
      productListLayout: 5,
      productList: [],
      productCount: 0,
    }
  },
  created() {
    const me = this
    // 로컬 테스트 데이터
    const json = require("~/static/json/search_product_list.json")
    me.productList = json.list
    me.productCount = json.total_count
    // 로컬 테스트 데이터
  },
  methods: {
    
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/pages/search.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>
