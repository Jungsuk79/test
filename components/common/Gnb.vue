<template>
  <v-navigation-drawer v-model="visible" touchless fixed left width="100vw" class="gnb-drawer"
    :class="[
      { 'sub-page-visible' : currentPage !== '' }
    ]"
  >

    <!-- 메인 페이지 -->
    <div class="gnb-main">
      <div class="gnb-head">
        <div class="gnb-head-left">
          <button class="gnb-hb-home" @click.stop="goHome"><span class="invisible">홈</span></button>
        </div>
        <div class="gnb-head-right">
          <button class="gnb-hb-close" @click.stop="closeGnb"><span class="invisible">닫기</span></button>
        </div>
      </div>
      <div class="gnb-body">
        <!-- 쇼핑 -->
        <div class="link-list primary-link">
          <div>쇼핑<nuxt-link :to="{}">HOME</nuxt-link></div>
          <ul>
            <li><button @click.stop="showSub('카테고리')">카테고리</button></li>
            <li><button @click.stop="showSub('브랜드')">브랜드</button></li>
            <li><button @click.stop="showSub('편집샵')">편집샵</button></li>
            <li><button @click.stop="showSub('아울렛')">아울렛</button></li>
          </ul>
        </div>
        <!-- 쇼핑 -->
        <!-- 콘텐츠 -->
        <div class="link-list primary-link">
          <div>콘텐츠<nuxt-link :to="{}">HOME</nuxt-link></div>
          <ul>
            <li><nuxt-link :to="{}">핸썸TV<span class="flag live">LIVE</span></nuxt-link></li>
            <li><nuxt-link :to="{}">스타일라이브</nuxt-link></li>
            <li><nuxt-link :to="{}">THE매거진</nuxt-link></li>
            <li><nuxt-link :to="{}">기획전</nuxt-link></li>
            <li><nuxt-link :to="{}">이벤트</nuxt-link></li>
            <li><nuxt-link :to="{}">룩북</nuxt-link></li>
          </ul>
        </div>
        <!-- 콘텐츠 -->
        <!-- 마이페이지 -->
        <div class="link-list cs-link">
          <ul>
            <li>
              <nuxt-link :to="{}">
                <span v-background-image="{url:'https://img.thehandsome.com/md/publish/dummy/pc/001.jpg'}" class="cs-link-img"></span>
                <span class="cs-link-txt">한섬케어 세탁</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{}">
                <span v-background-image="{url:'https://img.thehandsome.com/md/publish/dummy/pc/002.jpg'}" class="cs-link-img"></span>
                <span class="cs-link-txt">쿠폰</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{}">
                <span v-background-image="{url:'https://img.thehandsome.com/md/publish/dummy/pc/003.jpg'}" class="cs-link-img"></span>
                <span class="cs-link-txt">1:1 문의</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{}">
                <span v-background-image="{url:'https://img.thehandsome.com/md/publish/dummy/pc/004.jpg'}" class="cs-link-img"></span>
                <span class="cs-link-txt">나의옷장</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{}">
                <span v-background-image="{url:'https://img.thehandsome.com/md/publish/dummy/pc/005.jpg'}" class="cs-link-img"></span>
                <span class="cs-link-txt">한섬케어 세탁</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{}">
                <span v-background-image="{url:'https://img.thehandsome.com/md/publish/dummy/pc/006.jpg'}" class="cs-link-img"></span>
                <span class="cs-link-txt">쿠폰</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{}">
                <span v-background-image="{url:'https://img.thehandsome.com/md/publish/dummy/pc/007.jpg'}" class="cs-link-img"></span>
                <span class="cs-link-txt">1:1 문의</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{}">
                <span v-background-image="{url:'https://img.thehandsome.com/md/publish/dummy/pc/008.jpg'}" class="cs-link-img"></span>
                <span class="cs-link-txt">나의옷장</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <!-- 마이페이지 -->
        <!-- 회원 -->
        <div class="link-list login-link">
          <nuxt-link :to="{}">로그인</nuxt-link>
          <nuxt-link :to="{}">고객센터</nuxt-link>
          <nuxt-link :to="{}">고객리뷰</nuxt-link>
        </div>
        <!-- 회원 -->
      </div>
    </div>
    <!-- 메인 페이지 -->


    <!-- 서브 페이지 -->
    <div class="gnb-sub">

      <div class="gnb-head">
        <div class="gnb-head-left">
          <button class="gnb-hb-back" @click.stop="showSub('')"><span class="invisible">뒤로</span></button>
        </div>
        <div class="gnb-head-center">{{currentPage}}</div>
        <div class="gnb-head-right">
          <button class="gnb-hb-close" @click.stop="closeGnb"><span class="invisible">닫기</span></button>
        </div>
      </div>

      <!-- 카테고리 -->
      <div v-if="currentPage==='카테고리'" class="gnb-body">
        <GnbCategory :list="categoryList" />
      </div>
      <!-- 카테고리 -->

      <!-- 브랜드 -->
      <div v-if="currentPage==='브랜드'" class="gnb-body gnb-body-fix">
        <div v-if="brandData" class="gnb-brand">
          <div class="gnb-sub-cont-head gnb-brand-head">
            <ul>
              <li :class="{on:brandData.selected===''}">
                <button @click="selectTab('brand', '')">전체</button>
              </li>
              <li v-for="item, idx in brandData.category" :key="idx" :class="{on:brandData.selected===item.item_cd}">
                <button @click="selectTab('brand', item.item_cd)">{{item.label}}</button>
              </li>
            </ul>
          </div>

          <div class="gnb-sub-cont-body gnb-brand-body">
            <ul v-if="filteredBrandZzimList.length > 0" class="gbl-zzim-list">
              <li v-for="item, idx in filteredBrandZzimList" :key="idx" :class="{new:item.new}">
                <button class="gbl-zzim" :class="{on:item.checked}" @click="setBrandCheked(item)"></button>
                <button class="gbl-label" @click="goToLink(item.link_url)">{{item.label}}</button>
              </li>
            </ul>
            <ul>
              <li v-for="item, idx in filteredBrandList" :key="idx" :class="{new:item.new}">
                <button class="gbl-zzim" :class="{on:item.checked}" @click="setBrandCheked(item)"></button>
                <button class="gbl-label" @click="goToLink(item.link_url)">{{item.label}}</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 브랜드 -->

      <!-- 편집샵 -->
      <div v-if="currentPage==='편집샵'" class="gnb-body gnb-body-fix">
        <div class="gnb-shop">
          <div class="gnb-sub-cont-head gnb-shop-head">
            <ul>
              <li :class="{on:shopData.selected===1}">
                <button @click="selectTab('shop', 1)">브랜드</button>
              </li>
              <li :class="{on:shopData.selected===2}">
                <button @click="selectTab('shop', 2)">카테고리</button>
              </li>
            </ul>
          </div>
          <!-- 편집샵 - 브랜드 -->
          <div v-if="shopData.selected===1" class="gnb-sub-cont-body gnb-shop-body">
            <div class="gnb-shop-swiper-wrap">
              <Swiper
                :options="{
                  slidesPerView: 'auto',
                  spaceBetween: 8,
                }"
                class="gnb-shop-swiper swiper-visible"
              >
                <SwiperSlide class="gnb-shop-slide" :class="{on:shopData.brand.selectedBrand.item_cd===''}">
                  <button @click="selectShopBrand(null)">
                    <span v-background-image="{url:'https://img.thehandsome.com/md/publish/dummy/pc/search-planshop-thumb0.png'}" class="gss-img"></span>
                    <span class="gss-txt">ALL</span>
                  </button>
                </SwiperSlide>
                <SwiperSlide v-for="item, idx in shopData.brand.originList" :key="idx"
                  class="gnb-shop-slide" :class="{on:shopData.brand.selectedBrand.item_cd===item.item_cd}"
                >
                  <button @click="selectShopBrand(item)">
                    <span v-background-image="{url:item.image_url}" class="gss-img"></span>
                    <span class="gss-txt">{{item.label}}</span>
                  </button>
                </SwiperSlide>
              </Swiper>
            </div> 
            <div v-if="shopData.brand.selectedBrand.item_cd!==''" class="gnb-shop-brand-link">
              <nuxt-link :to="{path:shopData.brand.selectedBrand.link_url}">{{shopData.brand.selectedBrand.label}}</nuxt-link>
            </div>
            <ul class="gnb-shop-brand-list">
              <li v-for="item, idx in shopData.brand.list" :key="idx" :char="item.char">
                <button @click="goToLink(item.link_url)">
                  <span>{{item.label}}</span>
                  <span v-if="shopData.brand.selectedBrand.item_cd==='' && item.dupe" class="brand-name">{{item.group_name}}</span>
                  <span v-if="item.flags && item.flags.length > 0" class="flags">
                    <em v-for="flag, fdx in item.flags" :key="fdx">{{flag}}</em>
                  </span>
                </button>
              </li>
            </ul>
            <div class="gnb-shop-brand-index" @touchstart="indexingEvent">
              <ul>
                <li v-for="char, idx in shopData.brand.charList" :key="idx" :class="{enabled:char.enable}">
                  <button @click="scrollToChar(char.char)">{{char.char}}</button>
                </li>
              </ul>
            </div>
            <div class="gnb-shop-brand-noti"></div>
          </div>
          <!-- 편집샵 - 브랜드 -->
          <!-- 편집샵 - 카테고리 -->
          <div v-if="shopData.selected===2" class="gnb-sub-cont-body">
            <GnbCategory :list="shopData.cateList" />
          </div>
          <!-- 편집샵 - 카테고리 -->
        </div>
      </div>
      <!-- 편집샵 -->

      <!-- 아울렛 -->
      <div v-if="currentPage==='아울렛'" class="gnb-body gnb-body-fix">
        <div class="gnb-outlet">
          <div class="gnb-sub-cont-head gnb-outlet-head">
            <ul>
              <li :class="{on:outletData.selected===1}">
                <button @click="selectTab('outlet',1)">브랜드</button>
              </li>
              <li :class="{on:outletData.selected===2}">
                <button @click="selectTab('outlet', 2)">카테고리</button>
              </li>
            </ul>
          </div>
          <!-- 아울렛 - 브랜드 -->
          <div v-if="outletData.selected===1" class="gnb-sub-cont-body">
            <GnbCategory :list="outletData.brandList" />
          </div>
          <!-- 아울렛 - 브랜드 -->
          <!-- 아울렛 - 카테고리 -->
          <div v-if="outletData.selected===2" class="gnb-sub-cont-body">
            <GnbCategory :list="outletData.cateList" />
          </div>
          <!-- 아울렛 - 카테고리 -->
        </div>
      </div>
      <!-- 아울렛 -->

    </div>
    <!-- 서브 페이지 -->


  </v-navigation-drawer>
</template>

<script>
import axios from 'axios'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

import GnbCategory from '~/components/common/GnbCategory.vue'
import EventBus from '~/api/common/EventBus'

export default {
  components: {
    Swiper, SwiperSlide,
    GnbCategory
  },
  data: () => ({
    currentPage: "",
    visible: false,
    categoryList: [],
    brandData: null,
    shopData: {
      selected: 1,
      brand:{
        originList: [],
        allList: [],
        list: [],
        selectedBrand:{ item_cd : "" },
        charList: [],
        timer: -1,
        index:"",
        indexHeight: 12
      },
      cateList: []
    },
    outletData: {
      selected: 1,
      brandList: [],
      cateList: []
    }
  }),
  computed: {
    filteredBrandList(){
      const me = this
      return me.brandData.selectedList.filter(item => {
        return item.checked !== true
      })
    },
    filteredBrandZzimList(){
      const me = this
      const cd = me.brandData.selected
      return me.brandData.zzimList.filter(item => {
        return cd === "" || item.category.includes(cd)
      })
    },
  },
  created(){
    const me = this;
    EventBus.$on('showCategory', function(flag, sub) {
      if(flag && sub==="shop"){
        me.showSub("편집샵")
        setTimeout(function(){
          me.visible = flag;
        }, 200)
      }else if(flag && sub==="아울렛") {
        me.showSub("아울렛")
        setTimeout(function(){
          me.visible = flag;
        }, 200)
      }else{
        me.visible = flag;
      }
    });
  },
  methods:{
    goHome(){
      location.href = "/"
    },
    closeGnb(){
      const me = this
      if(me.currentPage !== ""){
        me.currentPage = ""
      }
      me.visible = false
    },

    showSub(flag){
      const me = this
      me.currentPage = flag

      switch(flag){
      case "카테고리":
        if(me.categoryList.length === 0){
          me.loadData(flag, "/json/gnb_category_1.json")
        }
        break
      case "브랜드":
        if(me.brandData === null){
          me.loadData(flag, "/json/gnb_brand.json")
        }
        break
      case "편집샵":
        me.loadShopData()
        break
      case "아울렛":
        me.loadOutletData()
        break
      // no default
      }
    },

    // 서브 데이터 로드
    loadData(flag, url){
      const me = this
      axios.get(url)
      .then(function(res){
        const d = res.data

        switch(flag){
        case "카테고리":
          me.processCateList(d)
          me.categoryList = d.list
          break
        case "브랜드":
          d.selected = ""
          d.selectedList = []// .concat(d.list)
          d.zzimList = []
          d.zzimCount = 0
          me.brandData = d
          me.filterBrandList(true)
          break
        case "편집샵_브랜드":
          me.processShopBrandList(d)
          break
        case "편집샵_카테고리":
          me.processCateList(d)
          me.shopData.cateList = d.list
          break
        case "아울렛_브랜드":
          me.processCateList(d)
          me.outletData.brandList = d.list
          break
        case "아울렛_카테고리":
          me.processCateList(d)
          me.outletData.cateList = d.list
          break
        // no default
        }
      })
      .catch(function(e){
        console.log(e)
      })
    },

    loadShopData(){
      const me = this
      if(me.shopData.selected === 1 && me.shopData.brand.list.length === 0){
        me.loadData("편집샵_브랜드", "/json/gnb_shop_brand.json")
      }else if(me.shopData.selected === 2 && me.shopData.cateList.length === 0){
        me.loadData("편집샵_카테고리", "/json/gnb_category.json")
      }
    },

    loadOutletData(){
      const me = this
      if(me.outletData.selected === 1 && me.outletData.brandList.length === 0){
        me.loadData("아울렛_브랜드", "/json/gnb_outlet_brand.json")
      }else if(me.outletData.selected === 2 && me.outletData.cateList.length === 0){
        me.loadData("아울렛_카테고리", "/json/gnb_category.json")
      }
    },
    

    // 카테고리 데이터 가공
    processCateList(item){
      const me = this
      if(Array.isArray(item.list) && item.list.length > 0){
        item.list.forEach(function(child){
          child.hasChildren = Array.isArray(child.list) && (child.list.length > 0)
          if(child.hasChildren){
            child.open = false
            me.processCateList(child)
          }
        })
      }
    },

    // 편집샵 브랜드 데이터 가공
    processShopBrandList(data){
      const me = this
      me.shopData.brand.allList.length = 0

      data.list.forEach(function(group){
        group.list.forEach(function(item){
          item.group_cd = group.item_cd
          item.group_name = group.label
          item.dupe = false
          me.shopData.brand.allList.push(item)
        })
      })

      // 알파벳순 정렬
      let a1, a2
      me.shopData.brand.allList.sort(function(a, b){
        // 기호 등 알파벳 뒤로
        a1 = a.label.charAt(0).match(/[a-z]|[A-Z]/) === null
        a2 = b.label.charAt(0).match(/[a-z]|[A-Z]/) === null
        if(a1 !== a2){
          if(a1){
            return 1
          }else if(a2){
            return -1
          }
        }

        if(a.label < b.label){
          return -1
        }else if(a.label > b.label){
          return 1
        }
        a.dupe = true
        b.dupe = true
        return 0
      })

      // init indexing
      me.shopData.brand.charList.length = 0
      const list = me.shopData.brand.charList
      const arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split("")
      arr[arr.length - 1] = "etc"
      arr.forEach(function(str){
        list.push({
          char : str,
          enable: false
        })
      })

      me.shopData.brand.list = [].concat(me.shopData.brand.allList)
      me.shopData.brand.originList = data.list
      me.checkHeadText()
      me.checkExistingChar()
    },

    // 인덱싱에 브랜드 유무 표시
    checkExistingChar(){
      const me = this
      me.shopData.brand.charList.forEach(function(item){
        item.enable = false
      })
      me.shopData.brand.list.forEach(function(item){
        if(item.char){
          me.shopData.brand.charList.forEach(function(char){
            if(char.char === item.char){
              char.enable = true
            }
          })
        }
      })
    },

    // 알파벳 첫 브랜드 세팅
    checkHeadText(){
      const me = this
      let c1 = ""
      let c2 = ""
      me.shopData.brand.list.forEach(function(item){
        c2 = item.label.charAt(0)
        if(c2.match(/[a-z]|[A-Z]/) === null){
          c2 = "etc"
        }
        if(c1 !== c2){
          item.char = c2
        }else{
          delete item.char
        }
        c1 = c2
      })
    },
    
    // 편집샵 브랜드 선택
    selectShopBrand(brand){
      const me = this
      if(brand === null){
        brand = { item_cd : "" }
      }
      const cd = brand.item_cd
      if(me.shopData.brand.selectedBrand.item_cd === cd){ return }

      if(cd === ""){
        me.shopData.brand.list = [].concat(me.shopData.brand.allList)
      }else{
        me.shopData.brand.list.length = 0
        me.shopData.brand.allList.forEach(function(item){
          if(item.group_cd === cd){
            me.shopData.brand.list.push(item)
          }
        })
      }

      me.checkHeadText()
      me.checkExistingChar()

      me.shopData.brand.selectedBrand = brand

      me.$el.querySelector(".gnb-shop-brand-list").scroll(0, 0)
    },

    // 편집샵 인덱싱 드래그 이벤트
    indexingEvent(e){
      const me = this
      const brand = me.shopData.brand
      switch(e.type){
      case "touchstart":
        document.addEventListener("touchmove", me.indexingEvent)
        document.addEventListener("touchend", me.indexingEvent)
        break
      case "touchmove":
        e.stopImmediatePropagation()
        if(e.touches && e.touches.length > 0){
          const wrap = me.$el.querySelector(".gnb-shop-brand-index")
          const list = brand.charList
          const len = list.length
          const t = e.touches[0]
          const x = t.clientX - me.offsetLeft(wrap) + window.innerWidth
          const y = t.clientY - me.offsetTop(wrap)
          const n = Math.round(y / me.shopData.brand.indexHeight)
          const c = list[n]
          if(x > -30 && n >= 0 && n < len && c && brand.index !== c.char){
            me.showBrandIndexing(c.char)
            me.scrollToChar(c.char, true)
            brand.index = c.char
          }
        }
        break
      case "touchend":
        document.removeEventListener("touchmove", me.indexingEvent)
        document.removeEventListener("touchend", me.indexingEvent)
        break
      // no default
      }
    },

    // 편집샵 A-Z 인덱싱 표시
    showBrandIndexing(char){
      const me = this
      const el = me.$el
      const brand = me.shopData.brand
      const noti = el.querySelector(".gnb-shop-brand-noti")
      const cl = noti.classList

      clearTimeout(brand.timer)
      noti.textContent = char
      cl.add("on")
      brand.timer = setTimeout(function(){
        cl.remove("on")
      }, 1000)
    },

    // 편집샵 브랜드 스크롤
    scrollToChar(char, immediate){
      const me = this
      const el = me.$el
      const list = me.shopData.brand.charList
      let idx = 0// list.indexOf(char)
      list.forEach(function(item, i){
        if(item.char === char){
          idx = i
          return false
        }
      })
      const len = list.length
      let li, i
      for(i=idx; i<len; i++){
        li = el.querySelector(".gnb-shop-brand-list li[char='" + list[i].char + "']")
        if(li !== null){
          break
        }
      }

      const wrap = el.querySelector(".gnb-shop-brand-list")
      let y
      if(li){
        y = li.offsetTop
      }else{
        y = wrap.scrollHeight - wrap.offsetHeight
      }

      wrap.scroll({
        top: y,
        behavior: immediate===true ? "auto" : "smooth",
      })
    },

    // 서브 탭 선택
    selectTab(flag, cd){
      const me = this
      let data
      switch(flag){
      case "brand":
        data = me.brandData
        break
      case "shop":
        data = me.shopData
        break
      case "outlet":
        data = me.outletData
        break
      // no default
      }
      if(data.selected === cd){ return }

      switch(flag){
        case "brand":
        // 브랜드 리스트 필터링
        data.selected = cd
        me.filterBrandList()
        break
      case "shop":
        me.$nextTick(me.loadShopData)
        break
      case "outlet":
        me.$nextTick(me.loadOutletData)
        break
      // no default
      }

      data.selected = cd
    },

    // 브랜드 즐겨찾기
    setBrandCheked(item){
      const me = this
      item.checked = ! item.checked
      if(item.checked){
        me.brandData.zzimList.unshift(item)
      }else{
        let no = -1
        me.brandData.zzimList.forEach(function(obj, idx){
          if(obj === item){
            no = idx
            return false
          }
        })

        if(no >= 0){
          me.brandData.zzimList.splice(no, 1)
        }
      }
    },

    filterBrandList(init){
      const me = this
      const cd = me.brandData.selected
      const data = me.brandData
      data.selectedList.length = 0
      data.list.forEach(function(item){
        if(cd === "" || item.category.includes(cd)){
          data.selectedList.push(item)

          if(init === true && item.checked){
            data.zzimList.push(item)
          }
        }
      })
    },


    goToLink(url){
      console.log("링크 이동하기", url)
    }

  }// methods
}
</script>

<style lang="scss" scoped></style>