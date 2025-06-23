<template>
  <div class="main-unit-wide main-hot-keyword">
    <div class="main-unit-cont">
      <div class="mhk-box"><!-- 221209 메인 : <div class="mhk-box"> 추가 -->
        <div class="mhk-left">
          <div class="main-unit-title">{{data.title}}</div>
          <ul class="mhk-keyword">
            <li v-for="item, idx in data.list" :key="idx" :class="{on:item===currentItem}">
              <button @click="selectItem(item)">{{item.title}}</button>
            </li>
          </ul>
          <!-- 221123 메인 핫키워드 : 전체보기 버튼 추가 -->
          <nuxt-link :to="currentItem.link_url" class="all-view-btn">
            <span>{{currentItem.title}} 전체보기</span>
            <i class="cmp-icon cmp-icon-12 i-next"></i>
          </nuxt-link>
          <!-- // 221123 메인 핫키워드 : 전체보기 버튼 추가 -->
        </div>
        <div class="mhk-right">
          <ProductList :list="currentItem.list" :layout="5" :unit-type="'mini'" :no-grid-fit="true" />
        </div>
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
    selectItem(item){
      const me = this
      if(me.currentItem !== item){
        me.currentItem = item
        console.log(me.currentItem.title)
      }
    }
  },
}
</script>

<style lang="scss" scoped></style>
