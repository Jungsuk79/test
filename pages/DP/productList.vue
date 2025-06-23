<template>
  <div class="contents">
    <div class="content-wrap">
      
      
      <div class="layout-button">
        <span>레이아웃</span>
        <button :class="{on:productListLayout===2}" @click="setListLayout(2)">Layout 2</button>
        <button :class="{on:productListLayout===3}" @click="setListLayout(3)">Layout 3</button>
        <button :class="{on:productListLayout===4}" @click="setListLayout(4)">Layout 4</button>
        <button :class="{on:productListLayout===5}" @click="setListLayout(5)">Layout 5</button>
        <button :class="{on:productListLayout===6}" @click="setListLayout(6)">Layout 6</button>
        <span>유닛타입</span>
        <button :class="{on:productUnitType==='normal'}" @click="setListType('normal')">Normal</button>
        <button :class="{on:productUnitType==='mini'}" @click="setListType('mini')">Mini</button>
        <button :class="{on:productUnitType==='micro'}" @click="setListType('micro')">Micro</button>
        <!-- [퍼블작업] top100 퍼블 참고용 -->
        <button :class="{on:productUnitType==='top100'}" @click="setListType('top100')">top100</button>
        <span>스와이프</span>
        <button :class="{on:productUnitSwipe===true}" @click="setListSwipe">Swipe</button>
      </div>

      <ProductList :list="productList" :layout="productListLayout" :unit-type="productUnitType" :swipe="productUnitSwipe" />

      <ProductListPaging v-if="productUnitSwipe!==true" />
      
    </div>
  </div>
</template>

<script>
// import EventBus from '~/api/common/EventBus'

export default {
  layout: 'LayoutBasics',
  data: () => ({
    productListLayout: 4,
    productUnitType: "normal",
    productUnitSwipe: false,
    productList: []
  }),
  created(){
    const me = this

    // 로컬 테스트 데이터
    const json = require("~/static/json/product_list.json")
    me.productList = json.list
    // 로컬 테스트 데이터
  },
  mounted(){
    // EventBus.$emit("setHeader", {static: true, type: "brand", brand: "SYSTEM"})
  },
  methods:{
    setListLayout(layout){
      const me = this
      if(me.productListLayout !== layout){
        me.productListLayout = layout
      }

      window.dispatchEvent(new Event("resize"))
    },
    setListType(type){
      const me = this
      if(me.productUnitType !== type){
        me.productUnitType = type
        if(me.productUnitType === "normal"){
          me.productUnitSwipe = false
        }
      }

      window.dispatchEvent(new Event("resize"))
    },
    setListSwipe(){
      const me = this
      me.productUnitSwipe = ! me.productUnitSwipe
      if(me.productUnitSwipe && me.productUnitType === "normal"){
        me.productUnitType = "mini"
      }

      window.dispatchEvent(new Event("resize"))
    }
  }
}
</script>
<style lang="scss" scoped>
.layout-button{
  span{display:inline-block;margin-right:10px;}
  span ~ span{margin-left:40px;}
  button{
    padding:0 16px;height:30px;margin-right:5px;background-color:#efefef;border-radius:15px;
    &.on{background-color:#ccc;}
  }
}
</style>