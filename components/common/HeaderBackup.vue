<template>
  <div
    v-scroll="scroll"
    class="ui-header"
    :class="[
      headerType,
      'header-style-' + headerStyle,
      { 
        fixed: fixed,
        'transparent-header' : transparentHeader
      }
    ]"
  >
    <!--// intro:header-intro, main:header-main, sub:header-sub, search:header-search, login:header-login -->
    <v-app-bar app absolute>
      <h1 class="logo">
        <strong class="ir">THE HANDSOME</strong>
      </h1>
      <h1 class="title-top">
        <strong>{{ headerTitle }}</strong>
      </h1>
      <!-- left-area, right-area -->
      <template v-if="!visibility.searchArea">
        <div v-if="visibility.leftArea" class="left-area">
          <div class="page-prev">
            <v-btn v-if="headerStyle !== 'orderComplete'" icon class="icon-common icon-prev" @click.stop="goBack">
              <i class="cmp-icon i-prev">이전</i>
            </v-btn>
            <v-btn v-if="headerStyle !== 'orderComplete'" icon class="icon-common icon-home" @click.stop="goHome">
              <i class="cmp-icon i-home">홈</i>
            </v-btn>
            <v-btn v-if="headerStyle === 'styleLive'" icon class="icon-common icon-alarm">
              <i class="cmp-icon i-alarm">홈</i>
            </v-btn>
          </div>
        </div>
        <div v-if="!(headerStyle === 'cart' || headerStyle === 'styleLive')" class="right-area">
          <v-btn v-if="headerStyle==='brand'" icon class="icon-common icon-favorite">
            <i class="cmp-icon i-heartoff">즐겨찾기</i>
          </v-btn>
          <v-btn icon class="icon-common icon-search">
            <i class="cmp-icon i-search">검색</i>
          </v-btn>
          <v-btn icon class="icon-common icon-cart"
            :class="{'cart-empty' : cartEmpty===true, 'cart-dense' : cartDense===true}"
          >
            <span class="icon-cart-count">{{cartCountStr}}</span>
            <span class="ir">장바구니</span>
          </v-btn>
        </div>
        <div v-if="headerStyle === 'styleLive'" class="right-area">
          <v-btn icon class="icon-common icon-profile">
            <i class="cmp-icon i-profile"></i>
          </v-btn>
          <v-btn icon class="icon-common icon-edit">
            <i class="cmp-icon i-edit"></i>
          </v-btn>
        </div>
      </template>
      <!-- // left-area, right-area -->
      <!-- 검색페이지 left-area, right-area, 이미지검색/스타일필터 -->
      <template v-if="visibility.searchArea">
        <div v-if="visibility.leftArea" class="left-area">
          <div class="page-prev">
            <v-btn icon class="icon-common icon-prev"
              @click.stop="goBack"
            >
              <i class="cmp-icon i-prev">이전</i>
            </v-btn>
          </div>
        </div>
        <div class="right-area">
          <v-text-field
            type="text"
            clearable
            class="cmp-form-input"
          >
            <!-- 기본 label -->
            <template v-if="!seachKeywrod" #label>검색어를 입력해주세요.</template>
            <!-- 수동 키워드 있을 시 -->
            <template v-else #label><span class="keyword">7월 특집 호캉스 이벤트</span></template>
          </v-text-field>
          <!--
            검색페이지 검색버튼 유형
            1. 기본 : 검색버튼
            2. 수동키워드 있을 시
              2-1. 수동키워드 링크 있을 시
                - 기본 : 링크버튼
                - 포커스 시 : 검색버튼
              2-2. 수동키워드 링크 없을 시
                - 해당 키워드로 검색
           -->
          <v-btn v-if="!seachKeywrod || (seachKeywrod && seachKeywrodLink===null)" icon class="icon-common icon-search">
            <i class="cmp-icon i-search">검색</i>
          </v-btn>
          <v-btn v-else :href="seachKeywrodLink" icon class="icon-common icon-search">
            <i class="cmp-icon i-search">검색</i>
          </v-btn>  
        </div>
        <ul class="search-header-btnBox">
          <li>
            <div class="file-upload">
              <input id="searchImgUpload" type="file" />
              <label for="searchImgUpload">
                <i v-cmp-icon="{size:18, name:'camera', invert:1}"></i>
                <span class="txt">이미지 검색</span>
              </label>
            </div>
          </li>
          <li>
            <v-btn icon class="style-filter">
              <i v-cmp-icon="{size:18, name:'filter', invert:1}"></i>
              <span class="txt">스타일 필터</span>
            </v-btn>
          </li>
        </ul>
      </template>
      <!-- // 검색페이지 left-area, right-area 이미지검색/스타일필터 -->
    </v-app-bar>
  </div>
</template>

<script>
import EventBus from '~/api/common/EventBus'

export default {
  props: {
    headerType: {
      type: String,
      default: () => {
        return "header-sub"
      },
    },
    title: {
      type: String,
      default: () => {
        return ""
      }
    }
  },
  data: () => ({
    fixed: false,
    hasBanner: false,
    visibility: {
      leftArea: true,
      searchArea: false,
    },
    cartCount: 0,
    cartCountStr: "0",
    cartEmpty: true,
    cartDense: false,
    headerStyle: "",
    seachKeywrod : false,
    seachKeywrodLink : '#n',
    transparentHeader : false,
    headerTitle: "",

    position: {
      scrollY: 0,
      y: 0,
      ty: 0,
      delta: 0,
      el: null
    }
  }),
  watch: {
    cartCount(cnt) {
      const me = this
      me.cartEmpty = (cnt === 0)
      me.cartDense = (cnt >= 10)
      if(cnt < 100){
        me.cartCountStr = "" + cnt
      }else{
        me.cartCountStr = "99+"
      }
    },
  },
  created() {
    const me = this
    EventBus.$on("headerTransparency", me.headerTransparency)
    EventBus.$on('hideAppBanner', me.hideAppBanner)
    switch(me.headerType){
      case "header-main":
      me.visibility.leftArea = false
      me.transparentHeader = true
      break
      case "header-search":
      me.visibility.searchArea = true
      break
      // no default
    }
  },
  mounted() {
    const me = this
    // me.scroll()
    me.position.el = me.$el.querySelector("header")
    me.hasBanner = localStorage.getItem('hideAppBanner') !== 'Y'
    if (me.hasBanner) {
      me.$nextTick(() => {
        me.scroll()
      })
    } else {
      me.fixed = true
    }
  },
  methods: {
    setHeaderTitle(str, option){
      const me = this
      me.headerTitle = str
      if(option && option.type){
          me.headerStyle = option.type
      }
    },
    goBack(){
      history.back()
    },
    goHome(){
      location.href = "/ko/DP/main"
    },

    headerTransparency(transparency){
      const me = this
      me.transparentHeader = transparency
    },
    
    hideAppBanner() {
      const me = this
      me.hasBanner = false
      me.fixed = true
    },
    scroll() {
      const me = this
      if (me.hasBanner) {
        me.fixed = window.scrollY >= me.offsetTop(me.$el)
      }

      const p = me.position
      const sy = Math.floor(window.scrollY)
      if(sy === p.scrollY){ return }

      const delta = sy - p.scrollY
      p.scrollY = sy;
      if(delta * p.delta <= 0){
        p.y = sy
        p.ty = me.getTranslateY(p.el)
      }

      let ty = p.ty + (p.y - sy) / 2
      if(ty < -56){
        ty = -56
      }else if(ty > 0){
        ty = 0
      }
      p.el.style.transform = "translateY(" + ty + "px)"

      p.delta = delta
      EventBus.$emit("headerTranslateY")
    },
  },// methods
}
</script>
<style lang="scss">
</style>
