<template>
  <div class="main-unit-wide main-new-arrival">
    <div class="main-unit-cont">
      <div class="mna-box"><!-- 221209 메인 : <div class="mna-box"> 추가 -->
        <div class="mna-left">
          <div class="main-unit-title">{{data.title}}</div>
          <ul class="mna-cates">
            <li v-for="item, idx in data.list" :key="idx" :class="{on:item===currentItem}">
              <button @click="selectCate(item)">{{item.title}}</button>
            </li>
          </ul>
        </div>
        <div class="mna-right" :class="{'no-swiping' : currentItem.list.length <= 5}">
          <ProductList :list="currentItem.list" :layout="5" :unit-type="'mini'" :swipe="true" :no-grid-fit="true" />
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
    const me = this
    me.$nextTick(me.moveButtons)
  },
  methods: {
    selectCate(item){
      const me = this
      if(me.currentItem !== item){
        me.currentItem = item
      }
    },
    moveButtons(){
      const me = this
      const div = me.$el.querySelector(".mna-right")
      div.append(me.$el.querySelector(".swiper-button-prev"))
      div.append(me.$el.querySelector(".swiper-button-next"))
    }
  },
}
</script>

<style lang="scss" scoped></style>
