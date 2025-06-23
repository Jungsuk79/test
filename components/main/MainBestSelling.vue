<template>
  <div class="main-best-selling">
    <div class="main-unit-title">{{data.title}}</div>
    <div class="main-unit-cont">

      <ul class="mbs-cates">
        <li v-for="item, idx in data.list" :key="idx" :class="{on:item===currentItem}">
          <button @click="selectCate(item)">{{item.title}}</button>
        </li>
      </ul>
      <!-- [퍼블작업] top100 -->
      <nuxt-link :to="localePath('/DP/top100')" class="mbs-link">TOP 100 전체보기<i class="cmp-icon cmp-icon-12 i-next"></i></nuxt-link>
      <div class="mbs-list">
        <ProductList :list="currentItem.list" :layout="6" :unit-type="'mini'" :swipe="true" class="product-lineClamp" />
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
    currentItem: null
  }),
  created(){
    const me = this
    try{
      me.currentItem = me.data.list[0]
    }catch(e){}
  },
  mounted(){
  },
  methods: {
    selectCate(item){
      const me = this
      if(me.currentItem !== item){
        me.currentItem = item
      }
    }
  },
}
</script>

<style lang="scss" scoped></style>
