<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <ProductList :prod-list="productList" :list-style="'swipe'" />
      <div style="height:50px"></div>
      <ProductList :prod-list="productList" :list-style="'triplet'" />
    </div>
  </div>
</template>

<script>
import ProductList from '~/components/product/ProductList'
export default {
  components: {
    ProductList,
  },
  layout: 'LayoutBasics',
  data: () => ({
    prodList: [],
    totalCount: 0,
  }),
  created() {
    const me = this
    me.setTitle("상품 유닛 3단")

    const json = require('~/static/json/product_list_3.json')
    me.productList = json.list
    me.totalCount = json.total_count
  },
}
</script>

<style lang="scss" scoped></style>
