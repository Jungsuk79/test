<template>
  <div id="header" v-scroll="scroll"
    :class="[
      {fixed:headerFixed, 'logged-in':isLogin, 'transparent-header': transparentHeader, 'static-header':staticHeader, 'zero-height': zeroHeight},
      brandHeaderClass
    ]"
  >
  <!-- [퍼블수정]24.08.27 검색 솔루션  -->
    <header class="header-wrap">
      <div class="header-wrap-inner" :class="{'on' : isClassVisible}">
        <div class="header-head">
          <nuxt-link :to="{}" class="header-logo"><span class="invisible">THE HANDSOME</span></nuxt-link>
          <div class="header-btns">

            <div v-if="isSearchAnimation" class="search-ani-wrap">
              <div class="search-box" :class="{'on' : isSearchAniOn}">
                <div class="typing-container">
                  <!-- BO 설정값에 url이 없으면 'none' 클래스를 추가 한다. -->
                  <nuxt-link :to="{path:isSearchUrl}" class="link" :class="{'none' : isSearchUrl === ''}">
                    <span class="text">{{ displayText }}</span>
                    <span v-if="isTyping" class="cursor"></span>
                  </nuxt-link>
                </div>

                <div class="header-cont">
                  <button type="button" class="hhb-search header-btn-search" title="검색"></button>
                </div>
              </div>
            </div>

            <button class="hhb-search default-search-btn" :class="{'on' : isSearchAniOn}" title="검색" @click="showSearch"></button>
            <button v-if="isLogin===false" class="hhb-login" title="로그인" @click="toggleLogin"></button>
            <button v-if="isLogin===true" class="hhb-logout" title="로그아웃" @click="toggleLogin"></button>
            <button class="hhb-member" title="회원가입"></button>
            <button class="hhb-wish" title="마이하트"></button>
            <button class="hhb-cart" :class="{empty:cartCount===0}" title="쇼핑백" @click="toggleCart"><em>{{cartCountStr}}</em></button>
          </div>


          <div class="xxxxx"></div>


        </div>

        <div class="header-body">
          <!-- hb-left -->
          <ul v-if="dHeaderType !== 'brand' && dHeaderType !== 'editshopMain' && dHeaderType !== 'editshopSubMain' && dHeaderType !== 'editshopSub' && dHeaderType !== 'outletMain' && dHeaderType !== 'outletSub' && dHeaderType !== 'overseasBrand'" class="hb-left">
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}" :class="{'active':this.cateLink}"><!-- 카테고리 페이지 인 경우 active class 추가 -->
                <span>{{ $t('header.category')}}</span>
                <span>{{ $t('header.category')}}</span>
              </nuxt-link>
              <CommonHeaderCategory :data="menuData.main.menu1" min-height />
            </li>
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}">
                <span>{{ $t('header.brand')}}</span>
                <span>{{ $t('header.brand')}}</span>
              </nuxt-link>
              <CommonHeaderCategory :data="menuData.main.menu2" min-height />
            </li>
            <!-- [퍼블수정]편집샵 - 셀렉티드 수정 -->
            <li>
              <nuxt-link :to="{}">
                <span>{{ $t('header.outlet')}}</span>
                <span>{{ $t('header.outlet')}}</span>
              </nuxt-link>
            </li>
            <!-- 추후 파란점 제거 요청이 들어오면, new-item class 제거 -->
            <li class="new-item">
              <nuxt-link :to="{}">
                <span>{{ $t('header.editedShop')}}</span>
                <span>{{ $t('header.editedShop')}}</span>
              </nuxt-link>
            </li>
            <!-- //[퍼블수정]편집샵 - 셀렉티드 수정 -->
          </ul>
          
          <ul v-if="dHeaderType === 'brand'" class="hb-left">
            <li class="hb-brand-logo">
              <nuxt-link v-if="dBrandImg===null" :to="{}" class="logo-text">{{dBrand}}</nuxt-link>
              <nuxt-link v-else :to="{}" class="logo-img"><img :src="dBrandImg" :alt="dBrand" /></nuxt-link>
              <button type="button" class="zzim-btn" :class="{on:brandZzim}" @click="toggleBrandZzim" v-if="dBrand"><span class="ir">찜하기</span></button><!-- [퍼블수정]23.02.17 조건문 추가 -->
            </li>
            <li :class="{on:dMEnu==='소개'}"><nuxt-link :to="{}"><span>소개</span><span>소개</span></nuxt-link></li>
            <li :class="{on:dMEnu==='샵'}"><nuxt-link :to="{}"><span>샵</span><span>샵</span></nuxt-link></li>
            <li :class="{on:dMEnu==='SPECIAL SHOP'}"><nuxt-link :to="{}"><span>SPECIAL SHOP</span><span>SPECIAL SHOP</span></nuxt-link></li>
            <li :class="{on:dMEnu==='룩북'}"><nuxt-link :to="{}"><span>룩북</span><span>룩북</span></nuxt-link></li>
            <li :class="{on:dMEnu==='캠페인'}"><nuxt-link :to="{}"><span>캠페인</span><span>캠페인</span></nuxt-link></li>
          </ul>

          <ul v-if="dHeaderType === 'editshopMain'" class="hb-left">
            <!-- [퍼블수정]편집샵 - 셀렉티드 수정 25.02.12 -->
            <li class="hb-brand-logo">
              <nuxt-link :to="{}" class="logo-img"><img src="/images/common/selected-logo.svg" /></nuxt-link>
            </li>
            <!-- //[퍼블수정]편집샵 - 셀렉티드 수정 25.02.12 -->
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}"><span>브랜드</span><span>브랜드</span></nuxt-link>
              <CommonHeaderCategoryBrand :show="hbLayerShow" :fixed="headerFixed" />
            </li>
            <!-- [퍼블수정]01.31 셀렉티드 개선 -->
            <li>
              <nuxt-link :to="{}"><span>전체</span><span>전체</span></nuxt-link>
            </li>
            <!-- // [퍼블수정]01.31 셀렉티드 개선 -->
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}"><span>여성</span><span>여성</span></nuxt-link>
              <CommonHeaderCategory :data="menuData.editShopMain.menu1" />
            </li>
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}"><span>남성</span><span>남성</span></nuxt-link>
              <CommonHeaderCategory :data="menuData.editShopMain.menu2" />
            </li>
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}"><span>잡화</span><span>잡화</span></nuxt-link>
              <CommonHeaderCategory :data="menuData.editShopMain.menu3" />
            </li>
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}"><span>뷰티</span><span>뷰티</span></nuxt-link>
              <CommonHeaderCategory :data="menuData.editShopMain.menu4" />
            </li>
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}"><span>라이프스타일</span><span>라이프스타일</span></nuxt-link>
              <CommonHeaderCategory :data="menuData.editShopMain.menu5" />
            </li>
          </ul>

          <ul v-if="dHeaderType === 'editshopSubMain'" class="hb-left">
            <li class="hb-brand-logo">
              <nuxt-link v-if="dBrandImg===null" :to="{}" class="logo-text">{{dBrand}}</nuxt-link>
              <nuxt-link v-else :to="{}" class="logo-img"><img :src="dBrandImg" :alt="dBrand" /></nuxt-link>
              <button type="button" class="zzim-btn" :class="{on:brandZzim}" @click="toggleBrandZzim"><span class="ir">찜하기</span></button>
            </li>
            <!-- [퍼블수정]01.31 셀렉티드 개선 -->

            <li>
              <nuxt-link :to="{}"><span>소개</span><span>소개</span></nuxt-link>
            </li>
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}"><span>브랜드</span><span>브랜드</span></nuxt-link>
              <CommonHeaderCategoryBrand :show="hbLayerShow" :select-idx="0" :select-char="'C'" :fixed="headerFixed" />
            </li>
            <li>
              <nuxt-link :to="{}"><span>상품</span><span>상품</span></nuxt-link>
            </li>

            <!-- <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}"><span>여성</span><span>여성</span></nuxt-link>
              <CommonHeaderCategory :data="menuData.editShopSubMain.menu1" />
            </li>
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}"><span>남성</span><span>남성</span></nuxt-link>
              <CommonHeaderCategory :data="menuData.editShopSubMain.menu2" />
            </li>
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}"><span>잡화</span><span>잡화</span></nuxt-link>
              <CommonHeaderCategory :data="menuData.editShopSubMain.menu3" />
            </li>
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}"><span>뷰티</span><span>뷰티</span></nuxt-link>
              <CommonHeaderCategory :data="menuData.editShopSubMain.menu4" />
            </li>
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}"><span>라이프스타일</span><span>라이프스타일</span></nuxt-link>
              <CommonHeaderCategory :data="menuData.editShopSubMain.menu5" />
            </li>
            <li>
              <nuxt-link :to="{}"><span>매장안내</span><span>매장안내</span></nuxt-link>
            </li> -->
            <!-- // [퍼블수정]01.31 셀렉티드 개선 -->
          </ul>

          <ul v-if="dHeaderType === 'editshopSub'" class="hb-left">
            <li class="hb-brand-logo">
              <nuxt-link v-if="dBrandImg===null" :to="{}" class="logo-text">{{dBrand}}</nuxt-link>
              <nuxt-link v-else :to="{}" class="logo-img"><img :src="dBrandImg" :alt="dBrand" /></nuxt-link>
            </li>
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}"><span>브랜드</span><span>브랜드</span></nuxt-link>
              <CommonHeaderCategoryBrand :show="hbLayerShow" :select-idx="1" :select-char="'S'" :fixed="headerFixed" />
            </li>
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}"><span>여성</span><span>여성</span></nuxt-link>
              <CommonHeaderCategory :data="menuData.editShopSub.menu1" />
            </li>
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}"><span>남성</span><span>남성</span></nuxt-link>
              <CommonHeaderCategory :data="menuData.editShopSub.menu2" />
            </li>
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}"><span>잡화</span><span>잡화</span></nuxt-link>
              <CommonHeaderCategory :data="menuData.editShopSub.menu3" />
            </li>
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}"><span>라이프스타일</span><span>라이프스타일</span></nuxt-link>
              <CommonHeaderCategory :data="menuData.editShopSub.menu4" />
            </li>
            <li>
              <nuxt-link :to="{}"><span>매장안내</span><span>매장안내</span></nuxt-link>
            </li>
          </ul>

          <ul v-if="dHeaderType === 'outletMain'" class="hb-left">
            <li class="hb-brand-text">
              <nuxt-link :to="{}">아울렛</nuxt-link>
            </li>
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}"><span>브랜드</span><span>브랜드</span></nuxt-link>
              <CommonHeaderCategory :data="menuData.outletMain.menu1" />
            </li>
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}"><span>여성</span><span>여성</span></nuxt-link>
              <CommonHeaderCategory :data="menuData.outletMain.menu2" />
            </li>
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}"><span>남성</span><span>남성</span></nuxt-link>
              <CommonHeaderCategory :data="menuData.outletMain.menu3" />
            </li>
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}"><span>잡화</span><span>잡화</span></nuxt-link>
              <CommonHeaderCategory :data="menuData.outletMain.menu4" />
            </li>
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}"><span>뷰티</span><span>뷰티</span></nuxt-link>
              <CommonHeaderCategory :data="menuData.outletMain.menu5" />
            </li>
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}"><span>라이프스타일</span><span>라이프스타일</span></nuxt-link>
              <CommonHeaderCategory :data="menuData.outletMain.menu6" />
            </li>
          </ul>

          <ul v-if="dHeaderType === 'outletSub'" class="hb-left">
            <li class="hb-brand-logo">
              <em class="outlet-tag">OUTLET</em>
              <nuxt-link v-if="dBrandImg===null" :to="{}" class="logo-text">{{dBrand}}</nuxt-link>
              <nuxt-link v-else :to="{}" class="logo-img"><img :src="dBrandImg" :alt="dBrand" /></nuxt-link>
              <button type="button" class="zzim-btn" :class="{on:brandZzim}" @click="toggleBrandZzim"><span class="ir">찜하기</span></button>
            </li>
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}"><span>여성슈즈</span><span>여성슈즈</span></nuxt-link>
              <CommonHeaderCategory :data="menuData.outletSub.menu1" />
            </li>
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}"><span>남성슈즈</span><span>남성슈즈</span></nuxt-link>
              <CommonHeaderCategory :data="menuData.outletSub.menu2" />
            </li>
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}"><span>여성백</span><span>여성백</span></nuxt-link>
              <CommonHeaderCategory :data="menuData.outletSub.menu3" />
            </li>
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}"><span>남성백</span><span>남성백</span></nuxt-link>
              <CommonHeaderCategory :data="menuData.outletSub.menu4" />
            </li>
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}"><span>머플러/스카프</span><span>머플러/스카프</span></nuxt-link>
              <CommonHeaderCategory :data="menuData.outletSub.menu5" />
            </li>
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}"><span>기타 ACC</span><span>기타 ACC</span></nuxt-link>
              <CommonHeaderCategory :data="menuData.outletSub.menu6" />
            </li>
          </ul>

          <ul v-if="dHeaderType === 'overseasBrand'" class="hb-left">
            <li class="hb-brand-logo">
              <nuxt-link v-if="dBrandImg===null" :to="{}" class="logo-text">{{dBrand}}</nuxt-link>
              <nuxt-link v-else :to="{}" class="logo-img"><img :src="dBrandImg" :alt="dBrand" /></nuxt-link>
              <button type="button" class="zzim-btn" :class="{on:brandZzim}" @click="toggleBrandZzim"><span class="ir">찜하기</span></button>
            </li>
            <li>
              <nuxt-link :to="{}"><span>전체보기</span><span>전체보기</span></nuxt-link>
            </li>
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}"><span>남성</span><span>남성</span></nuxt-link>
              <CommonHeaderCategory :data="menuData.overseasBrand.menu1" />
            </li>
            <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose">
              <nuxt-link :to="{}"><span>잡화</span><span>잡화</span></nuxt-link>
              <CommonHeaderCategory :data="menuData.overseasBrand.menu2" />
            </li>
            <li>
              <nuxt-link :to="{}"><span>매장안내</span><span>매장안내</span></nuxt-link>
            </li>
          </ul>
          <!-- //hb-left -->

          <!-- hb-right -->
          <ul v-if="dHeaderType !== 'editshopMain' && dHeaderType !== 'editshopSubMain' && dHeaderType !== 'editshopSub' && dHeaderType !== 'outletMain' && dHeaderType !== 'outletSub' && dHeaderType !== 'overseasBrand'" class="hb-right">
            <!-- 글로벌 작업 : 매거진,기획전 en 케이스 추가 -->
            <template v-if="langType==='ko'">
              <li>
                <nuxt-link :to="{}" :class="{'active':this.theMagazineMainLink}"><span>THE 매거진</span><span>THE 매거진</span></nuxt-link><!-- THE 매거진 페이지 인 경우 active class 추가 -->
              </li>
              <li>
                <nuxt-link :to="{}" :class="{'active':this.planshopLink}"><span>기획전</span><span>기획전</span></nuxt-link><!-- 기획전 페이지 인 경우 active class 추가 -->
              </li>
            </template>
            <template v-if="langType==='en'">
              <li>
                <nuxt-link :to="{}" :class="{'active':this.planshopLink}"><span>THE EDITED</span><span>THE EDITED</span></nuxt-link><!-- [퍼블수정] 기획전 페이지 인 경우 active class 추가 -->
              </li>
              <li @mouseenter="hbLayerOpen" @mouseleave="hbLayerClose"><!-- [퍼블수정]23.02.14  -->
                <div class="hb-menu" :class="{'active':this.campaignLink}"><span>MAGAZINE</span><span>MAGAZINE</span></div><!-- campaignMain 페이지 인 경우 active class 추가 -->
                <div class="hb-layer hb-layer-magazine">
                  <div class="hb-layer-inner">
                    <ul class="hb-d1">
                      <li>
                        <nuxt-link :to="{}"><span>CAMPAIGN</span><span>CAMPAIGN</span></nuxt-link><!-- span 태그 추가 -->
                      </li>
                      <li>
                        <nuxt-link :to="{}"><span>INSTAGRAM</span><span>INSTAGRAM</span></nuxt-link><!-- span 태그 추가 -->
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </template>
            <!-- // 글로벌 작업 : 매거진,기획전 en 케이스 추가 -->
            <template v-if="dHeaderType !== 'brand'">
              <li>
                <nuxt-link :to="{}" :class="{'active':this.eventLink}"><span>{{ $t('header.event')}}</span><span>{{ $t('header.event')}}</span></nuxt-link><!-- 이벤트 페이지 인 경우 active class 추가 -->
              </li>
              <li><!-- 룩북 메뉴 추가 -->
                <nuxt-link :to="{}" :class="{'active':this.lookbookMainLink}"><span>{{ $t('header.lookbook')}}</span><span>{{ $t('header.lookbook')}}</span></nuxt-link><!-- 룩북 페이지 인 경우 active class 추가 -->
              </li>
            </template>
            <li v-if="dHeaderType === 'brand' && langType!=='en'"><nuxt-link :to="{}"><span>매장안내</span><span>매장안내</span></nuxt-link></li>
          </ul>
          <ul v-if="dHeaderType === 'outletSub'" class="hb-right">
            <li><nuxt-link :to="{}"><span>매장안내</span><span>매장안내</span></nuxt-link></li>
          </ul>          
          <!-- //hb-right -->
        </div>
      </div>
    </header>
    <div v-if="hbLayerShow" class="header-dimmed" :class="{fixed : headerFixed}"></div>
  </div>
</template>

<script>
import EventBus from '~/api/common/EventBus'

export default {
  props: {
    headerType: {
      type: String,
      default: () => {
        return ""
      },
    },
    langType: {
      type: String,
      default: () => {
        return ""
      },
    },
  },
  data: () => ({
    // 검색 신규 -----------------------------------------
    isSearchAnimation: true,
    isSearchAniOn: false,
    isClassVisible: false,
    isSearchUrl: '', // BO에서 설정하는 url 값
    
    // 타이핑
    fullText: "상반기 BEST OF BEST!!",
    displayText: "",
    isTyping: true,
    typingSpeedNumber: 100, // 타이핑 속도 (밀리초)
    typingSpeed: 0, 
    typingIndex: 0,

    firstTimer: null,
    secondTimer: null,
    thirdTimer: null,
    fourthTimer: null,
    fifthTimer: null,
    classVisibleTimerStart: null,
    classVisibleTimerEnd: null,
    textTyping: null,
    cursorTimer: null,
    // 검색 신규 -----------------------------------------



    dHeaderType: "",
    dBrand: "",
    dBrandImg:null,
    dMEnu : "",
    headerFixed: false,
    cartCount: 0,
    cartCountStr: "0",
    isLogin: false,
    transparentHeader: false,
    zeroHeight: false,
    transparent :false,
    staticHeader: false,
    brandHeaderClass: "",
    brandZzim: false,
    hbLayerShow : false,
    menuData : {
      main : null,
      editshopMain : null,
      editshopSubMain : null,
      editshopSub : null,
      outletMain : null,
      outletSub : null,
      overseasBrand : null,
    },
    // 퍼블 확인용
    cateLink: false,
    campaignLink: false,
    theMagazineMainLink: false,
    planshopLink: false,
    lookbookMainLink: false,
    eventLink: false,
  }),
  watch: {
    cartCount(cnt) {
      const me = this
      if(cnt < 100){
        me.cartCountStr = "" + cnt
      }else{
        me.cartCountStr = "99+"
      }
    },
    // 퍼블 수정
    '$route'(to, from) {
      const me = this
      me.$nextTick(() => {
        setTimeout(() => {
          this.setActive()
        }, 100)
      })
    }
  },
  created() {
    const me = this
    EventBus.$on("setHeader", me.setHeader)
    if(me.headerType === "main"){
      me.transparentHeader = true
      me.dHeaderType = "main"
    }

    const json = require("~/static/json/header_category_demo.json")
    me.menuData.main = json.main
    me.menuData.editShopMain = json.editShopMain
    me.menuData.editShopSubMain = json.editShopSubMain
    me.menuData.editShopSub = json.editShopSub
    me.menuData.outletMain = json.outletMain
    me.menuData.outletSub = json.outletSub
    me.menuData.overseasBrand = json.overseasBrand
  },
  mounted() {
    // 퍼블 확인용
    this.setActive()
    const me = this
    EventBus.$on('setActive', function(){
      me.setActive()
    });

    // 메인 화면만 노출
    if(me.headerType === 'main') {
      // 기존 타이머 초기화
      me.clearAllTimers();
      // 애니메이션 초기화
      me.searchMovInit()
  
      me.$nextTick(() => {
        me.setAnimation()
      })
    }

  },
  // 삭제
  destroyed(){
    
  },
  methods: {
    setHeader(op){
      const me = this
      if(op){
        if(op.static === true){
          me.staticHeader = true
        }
        if(op.zeroHeight === true){
          me.zeroHeight = true
        }
        me.transparentHeader = (op.transparent === true)
        // op.type : brand, editshopMain, editshopSubMain, editshopSub, outletMain, outletSub, overseasBrand
        if(op.type) me.dHeaderType = op.type
        if(op.brand) me.dBrand = op.brand
        if(op.brand_image) me.dBrandImg = op.brand_image
        if(op.type === "brand"){
          me.dMEnu = op.menu
          switch(me.dBrand){
          case "SYSTEM":
            me.brandHeaderClass = "brand-header-system"
            break
          // no default
          }
        }
      }
    },
    scroll(){
      const me = this
      if(me.headerFixed && window.scrollY < 72){
        me.headerFixed = false
      }else if(me.headerFixed === false && window.scrollY > 72){
        me.headerFixed = true
      }
    },
    toggleLogin(){
      const me = this
      me.isLogin = ! me.isLogin
    },
    toggleCart(){
      const me = this
      switch(me.cartCount){
      case 0:
        me.cartCount = 25
        break
      case 25:
        me.cartCount = 110
        break
      default:
        me.cartCount = 0
        break
      }
    },

    // 2뎁스 메뉴 딤드
    hbLayerOpen(){
      const me = this
      me.hbLayerShow = true
      document.querySelector('html').classList.add('scroll-hidden')
    },
    hbLayerClose(){
      const me = this
      me.hbLayerShow = false
      document.querySelector('html').classList.remove('scroll-hidden')
    },
    // 브랜드 로고 옆 찜
    toggleBrandZzim(){
      const me = this
      me.brandZzim = ! me.brandZzim
    },

    // 브랜드 메뉴내 브랜드 찜 
    zzimBrand(e){
      const cl = e.currentTarget.classList
      if(cl.contains("on")){
        cl.remove("on")
      }else{
        cl.add("on")
      }
    },

    showSearch(){
      EventBus.$emit("showSearchLayer", true)
    },
    // 퍼블 수정
    setActive(){
      if(this.$router.history.current.fullPath.includes('/DP/category')){
        this.cateLink = true
        this.theMagazineMainLink = false
        this.planshopLink = false
        this.lookbookMainLink = false
        this.eventLink = false
        this.campaignLink = false
      }else if(this.$router.history.current.fullPath.includes('/DP/theMagazineMain')){
        this.theMagazineMainLink = true
        this.cateLink = false
        this.planshopLink = false
        this.lookbookMainLink = false
        this.eventLink = false
        this.campaignLink = false
      }else if(this.$router.history.current.fullPath.includes('/DP/planshop')){
        this.planshopLink = true
        this.cateLink = false
        this.theMagazineMainLink = false
        this.lookbookMainLink = false
        this.eventLink = false
        this.campaignLink = false
      }else if(this.$router.history.current.fullPath.includes('/DP/lookbookMain')){
        this.lookbookMainLink = true
        this.cateLink = false
        this.theMagazineMainLink = false
        this.planshopLink = false
        this.eventLink = false
        this.campaignLink = false
      }else if(this.$router.history.current.fullPath.includes('/MK/event')){
        this.eventLink = true
        this.cateLink = false
        this.theMagazineMainLink = false
        this.planshopLink = false
        this.lookbookMainLink = false
        this.campaignLink = false
      }else if(this.$router.history.current.fullPath.includes('/DP/campaignMain')){
        this.campaignLink = true
        this.cateLink = false
        this.theMagazineMainLink = false
        this.planshopLink = false
        this.lookbookMainLink = false
        this.eventLink = false
      }
    },

    clearAllTimers() {
      const me = this
      // 모든 타이머를 초기화하는 함수
      if (me.firstTimer) clearTimeout(me.firstTimer)
      if (me.secondTimer) clearTimeout(me.secondTimer)
      if (me.thirdTimer) clearTimeout(me.thirdTimer)
      if (me.fourthTimer) clearTimeout(me.fourthTimer)
      if (me.fifthTimer) clearTimeout(me.fifthTimer)
      if (me.classVisibleTimerStart) clearTimeout(me.classVisibleTimerStart)
      if (me.classVisibleTimerEnd) clearTimeout(me.classVisibleTimerEnd)
      if (me.textTyping) clearTimeout(me.textTyping)
      if (me.cursorTimer) clearTimeout(me.cursorTimer)

      // 타이머 ID를 초기화
      me.firstTimer = null
      me.secondTimer = null
      me.thirdTimer = null
      me.fourthTimer = null
      me.fifthTimer = null
      me.classVisibleTimerStart = null
      me.classVisibleTimerEnd = null
      me.textTyping = null
      me.cursorTimer = null
    },
    searchMovInit() {
      const me = this

      me.isSearchAnimation = false
      me.isSearchAniOn = false
      me.isClassVisible = false
      me.displayText = ""
      me.isTyping = true
      me.typingSpeed = me.typingSpeedNumber // 타이핑 속도 (밀리초)
      me.typingIndex = 0
    },
    setAnimation() {
      const me = this

      me.firstTimer = setTimeout(() => {
        // page 진입 후 5초뒤 애니메이션 tag 생성
        me.isSearchAnimation = true

        me.secondTimer = setTimeout(() => {
          // 0.5초 후 애니메이션 영역 보여짐 (보여지는속도 0.5초 [style 정의])
          me.isSearchAniOn = true
          // 하단 메뉴 애니메이션 영역 만큼 위치 변경
          me.classVisibleTimerStart = setTimeout(() => {
            me.isClassVisible = true
          }, 300)
          // 검색창 텍스트 타이핑 animation
          me.thirdTimer = setTimeout(() => {
            // 0.8초 후 텍스트 애니메이션 시작
            this.typeText()
            
            // 타이핑 완료 후 값 초기화 및 제거
            me.fourthTimer = setTimeout(() => {
              // 10초뒤 애니메이션 영역 사라짐
              me.isSearchAniOn = false

              me.classVisibleTimerEnd = setTimeout(() => {
                // 0.4초 뒤 하단 메뉴 영역 애니메이션 원위치
                me.isClassVisible = false

              }, 400)
              me.fifthTimer = setTimeout(() => {
                // 1초 뒤 애니메이션 영역 tag 삭제
                me.isSearchAnimation = false

              }, 1000)

            }, 10000)

          }, 1200)

        }, 500)

      }, 5000)
    },
    typeText() {
      const me = this

      if (me.typingIndex < me.fullText.length) {
        me.displayText += me.fullText.charAt(me.typingIndex)
        me.typingIndex++
        me.textTyping = setTimeout(me.typeText, me.typingSpeed)
      } else {
        me.cursorTimer = setTimeout(() => {
          me.isTyping = false
        }, 500);
      }
    }
  },// methods
}
</script>
<style lang="scss">
.xxxxx{
  display:block;position:absolute;left:calc(50% + 50px);top:10px;width:100px;background-color:#fff;text-align:center;font-size:12px;font-family:monospace;line-height:15px;
}
/* .dev-mode .xxxxx{display:block;} */
</style>
