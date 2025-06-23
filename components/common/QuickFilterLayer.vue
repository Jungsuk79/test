<template>
<v-navigation-drawer
  v-model="qkfilterLayerVisible" fixed temporary width="367px" overlay-color="#000" overlay-opacity="0.5" class="filter-layer qkfilter-type"
  :class="[
    {
      'sub-page-visible': currentFilter.type
    }
  ]"
>
  <!-- 서브 페이지 -->
  <div class="filter-sub-page">
    <button class="filter-close-btn" @click="closeFilterLayer"><span class="invisible">닫기</span></button>
    <div class="filter-layer-head">{{currentFilter.label}}</div>
    <div class="filter-sub-cont" :class="currentFilter.type+'-list'">
      <template v-if="currentFilter.type==='size'">
        <v-layout justify-space-between align-center class="my-size-cover">
          <p class="cmp-font fnt-16">나의 사이즈</p>
          <div class="swith-cover">
            <v-switch v-model="switch1" inset :ripple="false" class="cmp-form-switch"></v-switch>
            <button class="cmp-font fnt-14 button ml-9"  @click="showMySize = true"><span class="line">편집</span></button>
          </div>
        </v-layout>
      </template>
      <!-- depth 1 -->
      <ul>
        <li v-for="d1, idx1 in currentFilter.list" :key="idx1" class="depth1"
          :class="[
            {
              'opened' : d1.open,
              'has-children' : d1.hasChildren,
              'selected' : d1.selected
            },
            currentFilter.type==='color' ? 'color-' + d1.label.toLowerCase() : ''
          ]"
        >
          <button @click.stop="selectFilter(currentFilter, d1)">
            <span v-if="currentFilter.type==='color'" class="chip" :style="{'background' : d1.style}"></span>
            <span class="label">
              <em v-if="currentFilter.type==='price'" class="radio"></em>
              {{d1.label}}
              <em v-if="currentFilter.type !== 'size' && d1.count > 0" class="count">{{d1.count}}</em>
            </span>
          </button>
          <!-- depth 2 -->
          <ul v-if="d1.hasChildren">
            <!-- 전체 -->
            <li v-if="currentFilter.type=='category'"
              class="depth2 children"
              :class="{
                'selected' : d1.selected
              }"
            >
              <button @click.stop="selectFilter(currentFilter, d1, 'all')">
                <span class="label">전체</span>
              </button>
            </li>
            <!-- 전체 -->
            <li v-for="d2, idx2 in d1.list" :key="idx2" class="depth2 children"
              :class="{
                'opened' : d2.open,
                'has-children' : d2.hasChildren,
                'selected' : (d1.selected || d2.selected)
              }"
            ><!-- (!d1.selected && d2.selected) -->
              <button @click.stop="selectFilter(currentFilter, d2)">
                <span class="label">
                  {{d2.label}}
                  <em v-if="d2.count > 0" class="count">{{d2.count}}</em>
                </span>
              </button>
              <!-- 3 depth -->
              <ul v-if="d2.hasChildren">
                <!-- 전체 -->
                <li class="depth3 children"
                  :class="{
                    'selected' : (d1.selected || d2.selected)
                  }"
                ><!-- (!d1.selected && d2.selected) -->
                  <button @click.stop="selectFilter(currentFilter, d2, 'all')">
                    <span class="label">전체</span>
                  </button>
                </li>
                <!-- 전체 -->
                <li v-for="d3, idx3 in d2.list" :key="idx3" class="depth3 children"
                  :class="{
                    'opened' : d3.open===true,
                    'has-children' : d3.hasChildren,
                    'selected' : (d1.selected || d2.selected || d3.selected)
                  }"
                ><!-- (!d1.selected && !d2.selected && d3.selected) -->
                  <button @click.stop="selectFilter(currentFilter, d3)">
                    <span class="label">{{d3.label}}</span>
                  </button>
                </li>
              </ul>
              <!-- 3 depth -->
            </li>
          </ul>
          <!-- depth 2 -->
        </li>
      </ul>
      <!-- depth 1 -->
    </div>
    <div class="filter-layer-foot">
      <v-container fluid>
        <v-layout justify-space-between class="cmp-btnsArea">
          <v-btn outlined color="primary" @click="resetFilter">초기화</v-btn>
          <v-btn color="primary" @click="applyFilter">{{filteredProductCount | number}}개 적용</v-btn>
        </v-layout>
      </v-container>
    </div>
  </div>
  <div class="popup-fix-mySize qk-var" v-if="showMySize && currentFilter.type==='size'">
    <div class="mySize-popup">
      <div class="popup-header">
        <h1 class="tit">나의 사이즈 편집</h1>
        <button class="filter-close-btn" @click="showMySize = false"><span class="invisible">닫기</span></button>
      </div>
      <div class="popup-body">
        <p class="cmp-font fnt-14">나의 사이즈를 저장하고 맞는 상품만을 선별하여<br />확인해보세요!</p>
        <ul class="size-list">
          <li v-for="d1, idx1 in mySizeList.list" :key="idx1" class="depth1 has-children">
            <button>{{ d1.label }}</button>
            <ul>
              <li v-for="d2, idx2 in d1.list" :key="idx2" class="depth2 children">
                <v-checkbox :label="d2.label" class="cmp-form-checkbox"></v-checkbox>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="popup-footer">
        <v-btn outlined large color="primary" @click="showMySize = false">나의 사이즈 저장</v-btn>
      </div>
    </div>
    <a class="bg-close" @click="closeDialogMySize">닫기</a>
  </div>
  <!-- 서브 페이지 -->

</v-navigation-drawer>
</template>

<script>
import axios from 'axios'
/* import { Swiper, SwiperSlide } from 'vue-awesome-swiper' */

import EventBus from '~/api/common/EventBus'
import Animator from '~/api/common/Animator'

export default {
  /* components: {
    Swiper, SwiperSlide,
  }, */
  props: {
    langType: {
      type: String,
      default: () => {
        return ""
      },
    },
    openList: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
    mySizeList:{
      "label":"사이즈",
      "type":"size",
      "list":[
          {
            "label":"여성 상의",
            "list": [{"label": "XXXS","item_cd": "100001"},{"label": "XXS","item_cd": "100002"},{"label": "XS","item_cd": "100003"},{"label": "S","item_cd": "100004"},{"label": "M","item_cd": "100005"},{"label": "L","item_cd": "100006"},{"label": "XL","item_cd": "100007"},{"label": "XXL","item_cd": "100008"},{"label": "XXXL","item_cd": "100009"},{"label": "XXXXL","item_cd": "100010"},{"label": "FREE","item_cd": "100011"},{"label": "ETC","item_cd": "100012"}]
          },{
              "label":"여성 하의",
              "list": [{"label": "XXXS","item_cd": "200001"},{"label": "XXS","item_cd": "200002"},{"label": "XS","item_cd": "200003"},{"label": "S","item_cd": "200004"},{"label": "M","item_cd": "200005"},{"label": "L","item_cd": "200006"},{"label": "XL","item_cd": "200007"},{"label": "XXL","item_cd": "200008"},{"label": "XXXL","item_cd": "200009"},{"label": "XXXXL","item_cd": "200010"},{"label": "FREE","item_cd": "200011"},{"label": "ETC","item_cd": "200012"}]
          },{
              "label":"여성 신발",
              "list": [{"label": "230","item_cd": "300230"},{"label": "240","item_cd": "300240"},{"label": "250","item_cd": "300250"},{"label": "260","item_cd": "300260"},{"label": "270","item_cd": "300270"}]
          },{
              "label":"남성 신발",
              "list": [{"label": "230","item_cd": "400230"},{"label": "240","item_cd": "400240"},{"label": "250","item_cd": "400250"},{"label": "260","item_cd": "400260"},{"label": "270","item_cd": "400270"},{"label": "280","item_cd": "400280"},{"label": "290","item_cd": "400290"},{"label": "300","item_cd": "400300"}]
          }
      ]
    },
    rodioMode1: '0',
    switch1: true,
    serchSlides: [
      {addfilter : true, label : '검색어1'},
      {addfilter : true, label : '검색어2'},
      {addfilter : false, label : '검색어3'},
    ],
    showMySize: false,
    filterLayerType: "",
    qkfilterLayerVisible: false,
    filterResearchVisible : false,
    currentFilter: {},
    filterList:[],
    selectedList:[],

    // 상품정보
    productInfo:{
      saleProduct: false,
      exclusiveProduct: false,
      excludeSoldOut: false,
      handsomeDelivery: false
    },

    draggingHandle: null,
    // 직접입력 가격
    price1: 1000,
    price2: 9990000,
    // 직접입력 가능 최대/최소
    minPrice: 1000,
    maxPrice: 9990000,

    filteredProductCount: 12345,
    animator : new Animator(),
  }),
  created(){
    const me = this
    EventBus.$on("showqkFilterLayer", me.showqkFilterLayer)
  },
  methods:{
    

    // 필터 데이터 로드
    loadData(){
      const me = this
      if(me.filterList.length > 0){ return }

      axios.get("/json/filterLayer.json")
      .then(function(res){
        const d = res.data

        let p1 = parseInt(d.minPrice)
        let p2 = parseInt(d.maxPrice)
        if(isNaN(p1)){
          p1 = 1000
        }
        if(isNaN(p2)){
          p2 = 10000000
        }

        me.price1 = p1// d.minPrice
        me.price2 = p2// d.maxPrice
        me.minPrice = p1// d.minPrice
        me.maxPrice = p2// d.maxPrice

        d.list.forEach(function(item){
          item.selectedItems = []// 선택된 아이템 목록
          item.selectedTemps = []// 필터 추가 이전 임시 목록
          if(item.type === "price"){
            item.customInput = false
          }
          me.processList(item)
        })
        me.filterList = d.list
      })
      .catch(function(e){
        console.log(e)
      })
    },

    // 필터 데이터 선가공
    processList(item,){
      const me = this
      if(Array.isArray(item.list) && item.list.length > 0){
        item.list.forEach(function(child){
          child.selected = false
          child.parent = item
          child.hasChildren = Array.isArray(child.list) && (child.list.length > 0)
          if(child.hasChildren){
            child.open = false
            child.count = 0
            me.processList(child)
          }
        })
      }
    },

    // 필터 레이어 열기/닫기
    showqkFilterLayer(vis, type){
      const me = this
      // me.filterLayerType = type
      me.filterResearchVisible = (type === "search")
      me.qkfilterLayerVisible = (vis === true)
      if(me.qkfilterLayerVisible){
        me.loadData()
      }
      setTimeout(() => {
        me.currentFilter = me.filterList[me.openList]
      }, 50);
    },
    closeFilterLayer(){
      const me = this
      me.currentFilter = {}
      me.qkfilterLayerVisible = false
      me.showMySize = false
    },

    // 필터 메인/서프 페이지 이동
    showSubPage(item){
      const me = this
      if(me.currentFilter === item){
        me.currentFilter = {}
      }else{
        me.currentFilter = item
      }
      /* if(item.type === "price"){
        me.$nextTick(me.initPriceSlider)
      } */
    },

    

    // 필터 선택값 초기화
    resetFilter(){
      const me = this

      me.productInfo.saleProduct = false
      me.productInfo.exclusiveProduct = false
      me.productInfo.excludeSoldOut = false
      me.productInfo.handsomeDelivery = false

      me.filterList.forEach(function(item){
        if(item.type === "price"){
          item.customInput = false
        }
        if(Array.isArray(item.list)){
          item.list.forEach(function(d1){
            d1.selected = false
            if(Array.isArray(d1.list)){
              d1.list.forEach(function(d2){
                d2.selected = false
                if(Array.isArray(d2.list)){
                  d2.list.forEach(function(d3){
                    d3.selected = false
                  })
                }
              })
            }
          })
        }
        me.updateSelectedCount(item)
        me.applySelectedFilter(item)
      })
    },

    // 필터 선택값 리스트에 적용하기
    applyFilter(){
      const me = this
      const obj = {}
      const list = []
      obj.list = list

      // 상품정보
      if(me.productInfo.saleProduct){
        obj.saleProduct = true
        list.push({
          "type": "info",
          "label": "SALE상품",
          "item_cd": "saleProduct",
          "style": ""
        })
      }
      if(me.productInfo.exclusiveProduct){
        obj.exclusiveProduct = true
        list.push({
          "type": "info",
          "label": "EXCLUSIVE 상품",
          "item_cd": "exclusiveProduct",
          "style": ""
        })
      }
      if(me.productInfo.excludeSoldOut){
        obj.excludeSoldOut = true
        list.push({
          "type": "info",
          "label": "품절상품 제외",
          "item_cd": "excludeSoldOut",
          "style": ""
        })
      }
      if(me.productInfo.handsomeDelivery){
        obj.handsomeDelivery = true
        list.push({
          "type": "info",
          "label": "한섬딜리버리",
          "item_cd": "handsomeDelivery",
          "style": ""
        })
      }

      let arr, itm
      me.filterList.forEach(function(item){
        if(item.selectedItems.length > 0){
          if(item.type === "price"){
            // 가격
            itm = item.selectedItems[0]
            obj.minPrice = itm.min
            obj.maxPrice = itm.max
            list.push({
              "type": "price",
              "label": itm.label,
              "item_cd": "",
              "style": ""
            })
          }else{
            // 카테고리, 브랜드...
            arr = []
            item.selectedItems.forEach(function(sel){
              arr.push(sel.item_cd)
              itm = {
                "type": item.type,
                "label": sel.label,
                "item_cd": sel.item_cd,
              }
              if(item.type === "color"){
                itm.style = sel.style
              }
              if(item.type === "size"){
                itm.label = sel.parent.label + " " + sel.label
              }
              list.push(itm)
            })
            obj[item.type] = arr.join(",")
          }
        }
      })

      EventBus.$emit("filterChange", obj)

      me.closeFilterLayer()
    },

    
    filterResetListener(){
      const me = this
      me.resetFilter()
      me.applyFilter()
    },
    filterDeleteListener(item){
      const me = this
      if(item.type === "info"){
        // 상품 정보
        me.productInfo[item.item_cd] = false
      }else{
        // 나머지 필터들
        me.filterList.forEach(function(itm){
          if(item.type === itm.type){
            itm.selectedItems.forEach(function(sel){
              if( (item.item_cd === sel.item_cd) || (item.type === "price" && item.label === sel.label) ){
                me.selectFilter(itm, sel, 'delete')
              }
            })
          }
        })
      }
      me.applyFilter()
    },

    
    // 필터 세부 선택
    selectFilter(filter, item, opt){
      const me = this
      const arr = filter.selectedTemps// selectedItems
      let i, list, len, cnt

      if(filter.type === "price"){
        // 가격 단일 선택
        if(opt === "delete"){
          // 가격 삭제
          filter.selectedItems = []
          filter.selectedTemps = []
          filter.list.forEach(function(prc){
            prc.selected = false
          })
          filter.customInput = false
        }else{
          // 가격 선택
          if(item.selected === true){
            item.selected = false
          }else{
            filter.list.forEach(function(obj){
              obj.selected = (obj === item)
            })
          }
  
          filter.customInput = (item.custom === true)
        }

        // 선택상태 없데이트
        arr.length = 0
        arr.push(item)

      }else{
        // 가격 제외 나머지 필터
        item.temp = ""

        if(item.hasChildren && !(opt==="all" || opt==="delete")){
          // 하위메뉴 열기/닫기
          if(item.open === true){
            item.open = false
          }else{
            item.open = true
          }
  
        }else{
          // 메뉴 선택

          // 부모가 선택된 것인지 체크
          let parentSelected = false
          i = item
          while(i.parent){
            if(i.parent.selected){
              parentSelected = true
            }
            i = i.parent
          }

          if(parentSelected){
            // 부모가 선택된 경우
            if(item.parent){
              // 형제들 선택
              item.parent.list.forEach(function(c){
                c.selected = true
              })
              // 자신은 선택 해제
              item.selected = false
            }
            
            i = item
            while(i.parent){
              // 부모의 형제들 선택
              if(i.parent.selected){
                i.parent.list.forEach(function(c){
                  if(i !== c && i.parent.parent){
                    c.selected = true
                  }
                })
                // 부모는 선택 해제
                i.parent.selected = false
              }
              i = i.parent
            }

            /* i = item
            while(i.parent){
              i.parent.list.forEach(function(c){
                c.selected = true
              })
              i.selected = false
              i = i.parent
              if(i.parent.hasChildren !== true){
                i.selected = false
                break
              }
            } */
            /* item.parent.list.forEach(function(i){
              i.selected = true
            })
            item.selected = false

            i = item.parent
            while(i.parent){
              i.selected = false
              i = i.parent
            } */
          }else{
            // 부모들 중 선택 없는 경우
            item.selected = ! item.selected

            if(item.selected){
              // 형제가 모두 선택되면 부모 전체선택으로 변경하기
              i = item
              while(i.parent){
                list = i.parent.list
                len = list.length
                cnt = 0
                list.forEach(function(sib){
                  if(sib.selected){
                    cnt++
                  }
                })
                if(len === cnt){
                  i.parent.selected = true
                  // ////////////////////////////////////////
                  // ////////////////////////////////////////
                  // ////////////////////////////////////////
                  /* list.forEach(function(sib){
                    sib.selected = false
                  }) */
                  // ////////////////////////////////////////
                  // ////////////////////////////////////////
                  // ////////////////////////////////////////
                }
                i = i.parent
              }
            }else if((opt === "all" || opt === "delete") && item.hasChildren){
              // 부모 선택 해제하면 자식 모두 해제
              item.list.forEach(function(i){
                i.selected = false// 자식 해제
                if(i.hasChildren){
                  i.list.forEach(function(c){
                    c.selected = false// 손자 해제
                  })
                }
              })
            }
          }

          // 선택상태 없데이트
          me.updateSelectedCount(filter)
        }
      }

      me.updateFilteredProductCount()
      me.applySelectedFilter(filter)
      /* if(opt === "delete"){
        me.applySelectedFilter(filter)
      } */
    },

    // 선택된 필터 개수 업데이트
    updateSelectedCount(filter){
      const arr = filter.selectedTemps
      arr.length = 0
      filter.list.forEach(function(d1){
        d1.count = 0
        if(d1.selected){
          // 1뎁스 선택
          if(d1.hasChildren){
            // 자식들 있으면 모두 카운팅
            d1.list.forEach(function(d2){
              if(d2.hasChildren){
                d2.count = 0
                d2.list.forEach(function(d3){
                  d1.count++
                  d2.count++
                  arr.push(d3)
                })
              }else{
                d1.count++
                arr.push(d2)
              }
            })
          }else{
            // 자식 없으면 1뎁스만 추가
            arr.push(d1)
          }
        }else if(d1.hasChildren){
          // 1뎁스 미선택 시 자식들 조사
          d1.list.forEach(function(d2){
            if(d2.selected){
              // 2뎁스 선택
              if(d2.hasChildren){
                // 자식들 있으면 모두 카운팅
                d2.count = 0
                d2.list.forEach(function(d3){
                  d1.count++
                  d2.count++
                  arr.push(d3)
                })
              }else{
                // 자식 없으면 2뎁스만 추가
                d1.count++
                arr.push(d2)
              }
            }else if(d2.hasChildren){
              // 2뎁스 미선택 시 3뎁스 조사
              d2.count = 0
              d2.list.forEach(function(d3){
                if(d3.selected){
                  d1.count++
                  d2.count++
                  arr.push(d3)
                }
              })
            }
          })
        }
      })// d1
    },

    // 필터 적용된 상품 개수 업데이트
    updateFilteredProductCount(){
      // //////////////////////////////////////////////////// 데이터 연동 할 것
      const me = this
      const cnt = Math.round(Math.random() * 100000)
      me.animator.start(0, cnt, 400, function(v){
        me.filteredProductCount = Math.floor(v)
      })
    },

    // 현재 상태 필터에 적용
    applySelectedFilter(filter){
      const me = this
      let arr
      if(filter && Array.isArray(filter.selectedItems)){
        arr = filter.selectedItems
        arr.length = 0
        filter.selectedTemps.forEach(function(item){
          arr.push(item)
        })
      }

      me.selectedList.length = 0
      me.filterList.forEach(function(filter){
        filter.selectedItems.forEach(function(item){
          item.filter = filter
          me.selectedList.push(item)
        })
      })
    },

    // 가격 직접입력 선택
    selectCustomPrice(){
      const me = this
      me.applyPrice()
    },
    priceKeyUp(e){
      const me = this
      if(e.type === "focus" || e.type === "blur" || e.keyCode === 13){
        const min = me.minPrice
        const max = me.maxPrice
        let p1 = parseInt(me.price1, 10)
        let p2 = parseInt(me.price2, 10)
        if(isNaN(p1) || p1 < min){
          p1 = min
        }else if(p1 > max){
          p1 = max
        }
        if(isNaN(p2) || p2 > max){
          p2 = max
        }else if(p2 < min){
          p2 = min
        }
        if(p1 <= p2){
          me.price1 = p1
          me.price2 = p2
        }else{
          me.price1 = p2
          me.price2 = p1
        }

        me.initPriceSlider()
        me.applyPrice()
      }
    },
    // 가격 슬라이더
    initPriceSlider(){
      const me = this
      const slider = me.$el.querySelector(".price-slider .slider")
      const handles = slider.querySelectorAll(".handle")
      const line = slider.querySelector(".line")
      const w = slider.clientWidth
      const dif = me.maxPrice - me.minPrice
      const x1 = Math.round(me.price1 / dif * w)
      const x2 = Math.round(me.price2 / dif * w)

      handles[0].style.left = x1 + "px"
      handles[1].style.left = x2 + "px"
      line.style.left = x1 + "px"
      line.style.right = (w - x2) + "px"
    },
    priceDragStart(e){
      const me = this
      const box = e.currentTarget
      const t = e// e.touches[0]
      const slider = me.$el.querySelector(".price-slider .slider")
      const handles = slider.querySelectorAll(".handle")
      let x = t.clientX - me.offsetLeft(box) - 6// me.offsetLeft(box) + t.clientX - 20
      const w = slider.clientWidth
      if(x < 0){
        x = 0
      }else if(x > w){
        x = w
      }
      const d0 = Math.abs(x - handles[0].offsetLeft)
      const d1 = Math.abs(x - handles[1].offsetLeft)

      me.$el.querySelector("#customPrice1").blur()
      me.$el.querySelector("#customPrice2").blur()

      if(d0 < d1){
        me.draggingHandle = handles[0]
      }else{
        me.draggingHandle = handles[1]
      }
      const el = me.draggingHandle
      el.style.left = x + "px"
      el.offsetX = me.draggingHandle.offsetLeft - t.clientX
      document.addEventListener("mousemove", me.priceDragging)
      document.addEventListener("mouseup", me.priceDragEnd)

      me.calcPrice()
      me.applyPrice()
    },
    priceDragging(e){
      const me = this
      const el = me.draggingHandle
      const t = e// e.touches[0]
      const w = el.parentElement.clientWidth
      let x = t.clientX + el.offsetX
      if(x < 0){
        x = 0
      }else if(x > w){
        x = w
      }
      el.style.left = x + "px"
      me.calcPrice()
    },
    priceDragEnd(e){
      const me = this
      document.removeEventListener("mousemove", me.priceDragging)
      document.removeEventListener("mouseup", me.priceDragEnd)
      me.applyPrice()
    },
    calcPrice(){
      const me = this
      const slider = me.$el.querySelector(".price-slider .slider")
      const handles = slider.querySelectorAll(".handle")
      const line = slider.querySelector(".line")
      const x1 = handles[0].offsetLeft
      const x2 = handles[1].offsetLeft
      const w = slider.clientWidth
      const dif = me.maxPrice - me.minPrice
      const scale = 1000
      const p1 = Math.floor( (Math.round(x1 / w * dif) + me.minPrice) / scale ) * scale
      const p2 = Math.floor( (Math.round(x2 / w * dif) + me.minPrice) / scale ) * scale
      if(p1 <= p2){
        me.price1 = p1
        me.price2 = p2
        line.style.left = x1 + "px"
        line.style.right = (w - x2) + "px"
      }else{
        me.price1 = p2
        me.price2 = p1
        line.style.left = x2 + "px"
        line.style.right = (w - x1) + "px"
      }
    },
    applyPrice(){
      const me = this
      const number = me.$root.$options.filters.number
      me.selectFilter(
        me.currentFilter,
        {
          "label": number(me.price1) + "원 ~ " + number(me.price2) + "원",
          "min": me.price1,
          "max": me.price2,
          "parent" : me.currentFilter,
          "custom" : true
        },
        true
      )
    },
    // 가격 슬라이더
    closeDialogMySize(){
      this.showMySize = false
    },
  }
}
</script>

<style lang="scss" scoped></style>
