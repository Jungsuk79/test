<template>
  <div class="main-others-recom">
    <div class="main-unit-title">{{data.title}}</div>
    <div class="main-unit-cont">
      <div class="mor-list">
        <ProductList :list="data.list" :layout="6" :group="6" :unit-type="'mini'" :swipe="true" class="product-lineClamp"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {   
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data: () => ({
  }),
  created(){
  },
  mounted(){
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped></style>
