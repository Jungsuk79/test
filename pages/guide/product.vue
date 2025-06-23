<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="prod-total-count"><span>{{totalCount | number}}</span>개의 상품</div>
      <ProductList :prod-list="productList" :swiper-initial-motion="true" />
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
    me.setTitle("상품 유닛")

    const json = require('~/static/json/product_list.json')
    me.productList = json.list
    me.totalCount = json.total_count
  },
}
</script>

<style lang="scss" scoped></style>
