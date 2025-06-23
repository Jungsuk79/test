<template>
  <div class="contents contents-brand"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->  
    <!-- 상단 배너 -->
    <BrandSlider :data="mainBanner"/>
    <!-- //상단 배너 -->
    <div class="content-wrap">
      <!-- 필터/정렬 바 -->
      <div class="filter-sort-wrap">
        <div class="filter-sort-btns split-layout">
          <div class="filter-button">
            <button @click="showFilter">필터</button>
          </div>
          <!-- [퍼블수정]공통-우측 필터 수정 -->
          <div class="sort-buttons">
            <button :class="{on:sortType===1}" @click="setSort(1)">
              <span>신상품</span>
              <span>신상품</span>
            </button>
            <button :class="{on:sortType===2}" @click="setSort(2)">
              <span>판매순</span>
              <span>판매순</span>
            </button>
            <button :class="{on:sortType===3}" @click="setSort(3)">
              <span>고가순</span>
              <span>고가순</span>
            </button>
            <button :class="{on:sortType===4}" @click="setSort(4)">
              <span>저가순</span>
              <span>저가순</span>
            </button>
            <button :class="{on:sortType===5}" @click="setSort(5)">
              <span>리뷰순</span>
              <span>리뷰순</span>
            </button>
            <button :class="{on:sortType===6}" @click="setSort(6)">
              <span>추천순</span>
              <span>추천순</span>
            </button>
          </div>
        </div>

        <div v-if="filterData.list && filterData.list.length > 0" class="selected-filter-list">
          <ul>
            <li>
              초기화
              <button @click="resetFilter"><span class="invisible">초기화</span></button>
            </li><li v-for="item, idx in filterData.list" :key="idx">
              <span v-if="item.style" :style="{'background':item.style}" :class="'color-'+item.label.toLowerCase()" class="colorchip"></span>
              {{item.label}}
              <button @click="deleteFilter(item)"><span class="invisible">삭제</span></button>
            </li>
          </ul>
        </div>

        <div class="count-layout split-layout">
          <div class="product-count">{{productCount | number}}개의 상품</div>
          <div class="layout-buttons">
            <button class="layout1" :class="{on:productListLayout===4}" @click="setListType(4)"><span class="invisible">레이아웃</span></button>
            <button class="layout2" :class="{on:productListLayout===5}" @click="setListType(5)"><span class="invisible">레이아웃</span></button>
          </div>
        </div>

      </div>
      <!-- 필터/정렬 바 -->

      <ProductList :list="productList" :layout="productListLayout" :unit-type="productUnitType" />

      <ProductListPaging />
    </div>
  </div>
</template>

<script>
import EventBus from '~/api/common/EventBus'

export default {
  components: {
  },
  layout: 'LayoutBasics',

  data: () => ({
    mainBanner:[
      {
          title: "SPRING JACKET",
          desc: "하객 룩으로 좋은 봄 재킷<br>딱 일주일만 더한섬닷컴 단독 10% 할인",
          image_url : "https://img.thehandsome.com/md/publish/dummy/pc/outlet-main-banner.png",
          link_url : "#none"
      },
      {
          title: "SPRING JACKET",
          desc: "하객 룩으로 좋은 봄 재킷<br>딱 일주일만 더한섬닷컴 단독 10% 할인",
          image_url : "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-banner0.png",
          link_url : "#none"
      },
      {
          title: "SPRING JACKET",
          desc: "하객 룩으로 좋은 봄 재킷<br>딱 일주일만 더한섬닷컴 단독 10% 할인",
          image_url : "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-banner.png",
          link_url : "#none"
      },
    ],
    filterData: { list:[] },
    sortType: 2,
    productListLayout: 4,
    productUnitType: "normal",
    productList: [],
    productCount: 0
  }),

  created(){
    const me = this
    EventBus.$emit("setLayout", {filter:true})
    EventBus.$on("filterChange", me.filterChange)

    // 로컬 테스트 데이터
    const json = require("~/static/json/product_list.json")
    me.productList = json.list
    me.productCount = json.total_count
    // 로컬 테스트 데이터
  },// created

  mounted(){
    EventBus.$emit("setHeader", {static: true, type: "outletMain"})
  },// mounted

  methods: {
    showFilter(){
        EventBus.$emit("showFilterLayer", true)
    },
    // 필터 변경 이벤트 핸들릭
    filterChange(obj){
      const me = this
      me.filterData = obj
      console.log(JSON.stringify(obj, null, 4))
    },

    // 필터 리셋
    resetFilter(){
      EventBus.$emit("filterLayerReset")
    },
    // 필터 개별 삭제
    deleteFilter(item){
      EventBus.$emit("filterLayerDelete", item)
    },

    setSort(n){
      const me = this
      me.sortType = n
    },
    setListType(n){
      const me = this
      if(me.productListLayout !== n){
        me.productListLayout = n
      }
    }
  }// methods
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/brand.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
