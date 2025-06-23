<template>
  <div class="main-best-cate-prods">
    <div class="main-unit-title">{{data.title}}</div>
    <div class="main-unit-cont">
      <ProductList :list="data.list" :layout="4" :unit-type="'mini'" :swipe="data.list.length > 4" />
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
