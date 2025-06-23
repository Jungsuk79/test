<template>
    <!-- <v-navigation-drawer
      v-model="prodLayerVisible"
      touchless fixed
      left="false"
      width="100vw"
      class="codi-prod-list-layer"
    > -->
    <v-dialog v-model="prodLayerVisible">
        <DialogBasic class="codi-prod-list-layer" header-title="상품 선택하기" :width="880" @hide="hideLayer">
          <template #body>
            <div class="codi-layer">
              <div class="codi-layer-head cmp-tabs tabs-actionTop2">
                <v-tabs v-model="selectedTab" fixed-tabs height="58">
                  <v-tab>옷장</v-tab>
                  <v-tab>위시리스트</v-tab>
                  <v-tab>상품검색</v-tab>
                </v-tabs>
              </div>
                
              <div class="codi-layer-body tab-content" :class="{'codi-layer-body-recom':selectedTab===2}">
                <v-tabs-items v-model="selectedTab" touchless>
                  <!-- 옷장 -->
                  <v-tab-item :transition="false">

                    <v-container fluid class="closet-on-off-tab">
                      <v-row>
                        <v-col>
                          <div class="cmp-tabs tabs-contents">
                            <v-tabs v-model="onOffTab" fixed-tabs>
                              <v-tab>온라인 주문</v-tab>
                              <v-tab>오프라인 주문</v-tab>
                            </v-tabs>
                          </div>
                        </v-col>
                      </v-row>
                    </v-container>
                    <!-- [240621] 기간조회메뉴 탭버튼 너비 조정 -->
                    <div class="codi-layer-date-filter">
                      <div class="cmp-tabs tab-wrapType column04 custom">
                        <v-tabs v-model="periodTab" fixed-tabs>
                          <v-tab class="first">상세조회(5년)</v-tab>
                          <v-tab>1주일</v-tab>
                          <v-tab>1개월</v-tab>
                          <v-tab>3개월</v-tab>
                        </v-tabs>
                      </div>
                      <CommonCalendarBox />
                    </div>
                    <!-- // [240621] 기간조회메뉴 탭버튼 너비 조정 -->
                    
                    <!-- 옷장 리스트 -->
                    <ul v-if="onOffTab === 0" class="closet-list">
                    <li v-for="item, idx in productList" :key="idx" class="closet-list-item">
                      <div class="cli-image">
                        <div v-background-image="{url:item.image_url}">
                          <button :class="{on:item.checked}" @click="selecctProd(item)"><span class="invisible">상품선택</span></button>
                        </div>
                      </div>
                      <div class="cli-text">
                        <div class="cli-brand">{{item.brand_name}}</div>
                        <div class="cli-name">{{item.product_name}}</div>
                        <div class="cli-option"><span>BLACK</span><span>90</span></div>
                        <div class="cli-place">더한섬 닷컴</div>
                        <div class="cli-date">2022.02.15</div>
                      </div>
                    </li>
                    </ul>
                    <!-- 옷장 리스트 -->

                    <ProductListPaging  v-if="onOffTab === 0" />
                  </v-tab-item>
                  <!-- 옷장 -->

                  <v-tab-item :transition="false">
                  <!-- 상품유닛 리스트 -->
                  <div class="closet-list-wrap">
                    <div v-if="selectedTab!==0 && productList.length > 0" class="product-unit-list">
                      <div v-for="item, idx in productList" :key="idx" class="cl-product-unit">
                        <ProductUnitMini
                          :unit-data="item" :unit-type="'mini'" :colorchip="true"
                        ></ProductUnitMini>
                        <button :class="{checked:item.checked}" @click="selecctProd(item)"><span class="invisible">상품선택</span></button>
                      </div>
                    </div>
                  </div>
                  <!-- 상품유닛 리스트 -->
                  
                  <ProductListPaging />
                  </v-tab-item><!-- 위시리스트 -->


                  <!-- 상품검색 -->
                  <v-tab-item :transition="false">
                    <v-layout row align-center justify-space-between class="search-form">
                      <v-text-field type="text" clearable class="cmp-form-input">
                        <template #label>검색어를 입력해주세요.</template>
                      </v-text-field>
                      <v-btn icon><div class="cmp-icon cmp-icon-32 i-search2">search</div></v-btn>
                    </v-layout>
                    <div class="searched-count">{{1234 | number}} 개의 상품</div>

                    <!-- 상품유닛 리스트 -->
                    <div class="closet-list-wrap">
                      <div v-if="selectedTab!==0 && productList.length > 0" class="product-unit-list">
                        <div v-for="item, idx in productList" :key="idx" class="cl-product-unit">
                          <ProductUnitMini
                            :unit-data="item" :unit-type="'mini'" :colorchip="true"
                          ></ProductUnitMini>
                          <button :class="{checked:item.checked}" @click="selecctProd(item)"><span class="invisible">상품선택</span></button>
                        </div>
                      </div>
                    </div>
                    <!-- 상품유닛 리스트 -->
                  
                   <ProductListPaging />
                  </v-tab-item>
                  <!-- 상품검색 -->
                  
                  <!-- <div v-if="selectedTab!==2" class="no-result">
                    일치하는 상품이 없습니다.
                  </div> -->
                  <div v-if="selectedTab===2" class="no-result">
                    검색결과가 없습니다.
                  </div>
                  <div v-if="selectedTab === 0" class="no-result">
                      <div v-if="onOffTab === 0">
                        <div>옷장에 온라인에서 구매(배송완료)하신 내역이 없습니다.</div>
                        <div><nuxt-link to="">쇼핑백 바로가기</nuxt-link></div>
                      </div>
                       <!--오프라인 주문 없음 -->
                      <div v-if="onOffTab === 1">
                          <div>옷장에 오프라인에서 구매(배송완료)하신 내역이 없습니다.</div>
                      </div>
                      <!--// 오프라인 주문 없음 -->
                  </div>
                </v-tabs-items>
              </div>
            </div>
          </template>

          <!--20221206 하단버튼 이동 -->  
          <template #footer>
            <!-- 하단버튼 -->
            <div class="codi-layer-foot">
              <div class="clf-list">
                <div v-for="item, idx in list" :key="idx" class="clf-item" :class="{on:item.image_url}">
                    <div class="clf-img" :style="{'background-image' : 'url('+item.image_url+')'}"></div>
                    <button class="del-btn" @click="deleteItem(item, true)"><span class="invisible">삭제</span></button>
                </div>
                <div class="clf-text">최대 {{maxCount}}개 상품 선택 가능</div>
              </div>
              <!-- <div class="clf-text">
                <div>최대 {{maxCount}}개 상품 선택 가능</div>
                <div>{{count}} <em>/ {{maxCount}}</em></div>
              </div> -->
              <div class="clf-button" :class="{on:count>0}">
                <button @click="addProducts">코디하기</button>
              </div>
            </div>
            <!-- 하단버튼 -->
          </template>
          <!--//20221206 하단버튼 이동 -->  
        </DialogBasic>
    </v-dialog>
    <!-- </v-navigation-drawer> -->
</template>

<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue' // 팝업기본
import EventBus from "~/api/common/EventBus"

export default {
  components: {
    DialogBasic
  },
  props: {
  },
  data: () => ({
    prodLayerVisible: false,
    selectedTab: 0,
    onOffTab: 0,
    periodTab: 0,
    recomTab: 0,
    productList: [],
    maxCount: 0,
    count: 0,
    list:[],
    required: true,
  }),
  watch: {
    selectedTab() {
      const me = this
      document.querySelector(".codi-layer-body").scroll(0, 0)
      me.loadData()
    },
  },

  created(){
    const me = this
    EventBus.$on("showCodiProdLayer", me.showLayer)
    me.loadData()
  },
  mounted(){
  },
  methods: {
    showLayer(arr){
      const me = this
      me.maxCount = arr.length
      me.list = [].concat(arr)
      me.productList.forEach(function(item){
        item.checked = false
      })
      me.updateCount()

      me.prodLayerVisible = true

      // me.required = required === true
      if(me.count >= me.maxCount){
        me.showAlert("레이아웃을 변경하거나 상품을 삭제해 주세요.")
      }

      // me.$nextTick(me.calcSwipeWidth)
    },
    hideLayer(){
      const me = this
      try{
        document.querySelector(".codi-layer-body").scroll(0, 0)
      }catch(e){}
      me.prodLayerVisible = false
    },

    /* calcSwipeWidth(){
      const me = this
      try{
        me.$el.querySelector(".clf-swiper").swiper.allowTouchMove = (me.$el.querySelector(".swiper-container").clientWidth < me.list.length * 56 - 1)
      }catch(e){}
    }, */

    selectRecomTab(tab){
      const me = this
      if(me.recomTab === tab){ return }
      me.recomTab = tab
    },

    loadData(){
      const me = this

      // 로컬 테스트 데이터
      const json = require("~/static/json/product_list_single.json")
      // 로컬 테스트 데이터

      // 선택된 상품들
      const arr = []
      me.list.forEach(function(item){
        if(item.product_cd){
          arr.push(item.product_cd)
        }
      })

      // 선택된 상품 체크 표시
      json.list.forEach(function(item){
        item.checked = arr.includes(item.product_cd)
      })

      me.productList = json.list
      me.updateCount()
    },

    // 상품 선택/해제
    selecctProd(item){
      const me = this
      if(!item.checked && me.count >= me.maxCount){
        return false
      }

      item.checked = ! item.checked

      const cd = item.product_cd
      let len, i, obj
      if(item.checked){
        len = me.list.length
        for(i=0; i<len; i++){
          obj = me.list[i]
          if(obj.product_cd === undefined || obj.product_cd === ""){
            obj.product_cd = cd
            obj.image_url = item.image_url
            break
          }
        }
        me.updateCount()
      }else{
        // me.deleteItem(item)
        len = me.list.length
        for(i=0; i<len; i++){
          obj = me.list[i]
          if(obj.product_cd === item.product_cd){
            me.deleteItem(obj)
            break
          }
        }
      }

      me.$forceUpdate()
    },

    // 아이템 삭제하기
    deleteItem(item, updateProdList){
      const me = this
      const cd = item.product_cd
      let len = me.list.length
      let i, obj

      // 상품 제거
      item.product_cd = ""
      item.image_url = ""
      /* for(i=0; i<len; i++){
        obj = me.list[i]
        if(obj.product_cd === cd){
          obj.product_cd = ""
          obj.image_url = ""
          // me.list.splice(i, 1)
          // me.list.push({})
          break
        }
      } */

      // 상품 리스트 업데이트
      if(updateProdList===true){
        len = me.productList.length
        for(i=0; i<len; i++){
          obj = me.productList[i]
          if(obj.product_cd === cd){
            obj.checked = false
            break
          }
        }
      }
      me.updateCount()
    },
    updateCount(){
      const me = this
      let cnt = 0
      me.list.forEach(function(item){
        if(item.product_cd){
          cnt++
        }
      })
      me.count = cnt
    },

    addProducts(){
      const me = this
      me.$parent.addImages(me.list)
      me.hideLayer()
    }
  },
}
</script>

<style lang="scss" scoped></style>