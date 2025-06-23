<template>
  <div class="contents contents-brand"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->  
    <!-- 상단 비주얼 (221116 컨텐츠 순서변경 : 텍스트 타입 추가) -->
      <!-- 이미지 타입 -->
      <BrandTopVisual :data="topVisual"/>
      <!-- 텍스트 타입 -->
      <!--
      <div class="section-wrap mt-0 mt-40">
        <div class="editshop-brand-info">
          <h3 class="tit">TOM GREYHOUND</h3>
          <p class="desc">‘이상한 나라의 앨리스’를 컨셉으로 재미있는 상상력이 더해진 인터리어와 함께 Fun &amp; Pop 스타일을 제안하는 신선한 브랜드를 접할 수 있는 프로젝트 편집숍</p>
        </div>
      </div>
      -->
    <!-- //상단 비주얼 -->


    <!--
      221116 컨텐츠 순서변경 : 레이아웃 수정
      - <div class="editshop-sub-cont"> 추가
      - 상단배너 <section> (v-for용) 추가
      - 공통배너 추가
    -->
    <div class="editshop-sub-cont">
      <!-- 상단 배너 -->
      <section>
        <BrandSlider :data="mainBanner"/>
      </section>
      <!-- //상단 배너 -->
      <!-- 공통 배너 -->
      <section>
        <div class="section-wrap">
          <CommonBanner :data="banner"></CommonBanner>
        </div>
      </section>
      <!-- //공통 배너 -->
    </div>
    <!-- // 221116 컨텐츠 순서변경 : 레이아웃 수정 -->

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
  components: {},
  layout: 'LayoutBasics',

  data: () => ({
    topVisual : {
        title: "SAINT JAMES",
        desc: "프랑스 몽생미셸에서 시작된 프랑스 브랜드로써<br>실용적이고 편안한 캐주얼 웨어를 소개하고 있습니다.",
        image_url : "https://img.thehandsome.com/md/publish/dummy/pc/editshop-sub-banner.png",
    },
    mainBanner:[
      {
          tags: ["#SOME"],
          title: "TOM GREYHOUND의<br>PB 브랜드",
          desc: "TOM GREYHOUND 22 S/S 신규 브랜드",
          image_url : "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-banner0.png",
          link_url : "#none"
      },
      {
          tags: ["커버스토리"],
          title: "TOM GREYHOUND의<br>PB 브랜드",
          desc: "TOM GREYHOUND 22 S/S 신규 브랜드",
          image_url : "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-banner.png",
          link_url : "#none"
      },
      {
          tags: ["기획전"],
          title: "TOM GREYHOUND의<br>PB 브랜드",
          desc: "TOM GREYHOUND 22 S/S 신규 브랜드",
          image_url : "https://img.thehandsome.com/md/publish/dummy/pc/outlet-main-banner.png",
          link_url : "#none"
      },
      {
          tags: ["#SOME"],
          title: "TOM GREYHOUND의<br>PB 브랜드",
          desc: "TOM GREYHOUND 22 S/S 신규 브랜드",
          image_url : "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-banner0.png",
          link_url : "#none"
      },
      {
          tags: ["커버스토리"],
          title: "TOM GREYHOUND의<br>PB 브랜드",
          desc: "TOM GREYHOUND 22 S/S 신규 브랜드",
          image_url : "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-banner.png",
          link_url : "#none"
      },
    ],
    banner : {
      list : [
        {
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-banner-02.png",
          "bg_color": "#E5E8EB",
          "text_color": "#000",
          "link_url": "#none",
          "type": 2,
          "desc": "MUE STYLING CURATION",
          "title": "유일무이 vol 1 : 세상에 유일한 MUE 스타일",
          "subtitle": "eyesmag과 함께하는 MUE만의 유일무이한 스타일 큐레이션"
        },
        /* {
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-banner-01.png",
          "bg_color": "#E0B47B",
          "text_color": "#000",
          "link_url": "#none",
          "type": 1,
          "desc": "PAIRS 세컨드 레이블",
          "title": "Deli & Grocery 신상품 보러가기!",
          "subtitle": ""
        },
        {
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-banner-03.png",
          "bg_color": "#3F3D40",
          "text_color": "#fff",
          "link_url": "#none",
          "type": 3,
          "desc": "SYSTEM HOMME",
          "title": "스포트라이트 온 타임옴므",
          "subtitle": "CHECK OUT NOW"
        } */
      ]
    },
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
    EventBus.$emit("setHeader", {static: true, type: "editshopSub", brand: "SAINT JAMES"})
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
