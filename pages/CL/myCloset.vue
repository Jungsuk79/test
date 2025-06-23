<template>
  <div v-scroll="scroll" class="contents contents-type2">
    <div class="content-wrap">
      <div class="contents-layout">
        <!-- [퍼블수정]23.02.17 menuList 추가 -->
        <CommonContentsLeftMenu :title="'마이페이지'" :left-data="menuList" />
        <div class="contents-r-layout">
          <div class="closet-list-wrap">
            <div class="cmp-page-tit">
              <h2 class="tit">나의 옷장</h2>
            </div>

            
            <div class="closet-codi-tab">
              <nuxt-link :to="{}" class="on">옷장</nuxt-link>
              <nuxt-link :to="{path:'codiBook'}">코디북</nuxt-link>
            </div>

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
            <div fluid class="closet-date-filter layout-fit">
              <div class="cmp-tabs tab-wrapType column04 custom">
                <v-tabs v-model="periodTab">
                  <v-tab class="first">상세조회(5년)</v-tab>
                  <v-tab>1주일</v-tab>
                  <v-tab>1개월</v-tab>
                  <v-tab>3개월</v-tab>
                </v-tabs>
              </div>

              <CommonCalendarBox :d1="'2022-08-15'" :d2="'2022-09-15'" />
            </div>
            <!-- // [240621] 기간조회메뉴 탭버튼 너비 조정 -->

            <!-- 옷장 리스트 없음 -->
            <div v-if="false" class="closet-list-empty">
              <div>옷장에 구매 또는 수령하신 상품이 없습니다.</div>
              <div><nuxt-link :to="{}">쇼핑백 바로가기</nuxt-link></div>
            </div>
            <!-- 옷장 리스트 없음 -->

            <!-- 오프라인 주문  없음 -->
            <div v-if="onOffTab === 1" class="closet-list-empty">
              <div>옷장에 구매 또는 수령하신 상품이 없습니다.</div>
            </div>
            <!-- 오프라인 주문 없음 -->


            <!-- 옷장 리스트 -->
            <ul v-if="onOffTab === 0" class="closet-list">
              <li v-for="item, idx in closetList" :key="idx" class="closet-list-item">
                <div class="cli-image">
                  <div v-background-image="{url:item.image_url}">
                    <button :class="{on:item.selected}" @click="selectProduct(item)"><span class="invisible">상품선택</span></button>
                  </div>
                  <!--
                  <div class="cli-button" v-if="idx != 4">
                    <button v-if="idx != 0">수선</button>
                    <button v-if="idx != 1" @click="showCleaningPopup(item)">세탁</button>
                  </div>
                  -->
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
            <ProductListPaging v-if="onOffTab === 0" />
            <!-- 옷장 리스트 -->

            <div class="closet-sel-list-wrap" :class="{fixed:fixBottom}">
              <div class="closet-sel-list">
                <div class="closet-sel-list-inner">
                  <div class="closet-sel-left">
                    <ul>
                      <li v-for="n in 6" :key="n">
                        <div v-if="selectedList[n-1]" v-background-image="{url:selectedList[n-1].image_url}">
                          <button @click="selectProduct(selectedList[n-1])"><span class="invisible">삭제</span></button>
                        </div>
                      </li>
                    </ul>
                    <div>최대 6개 상품 선택 가능</div>
                  </div>
                  <div class="closet-sel-right">
                    <nuxt-link :to="{path:'/ko/CL/codiLayout'}" :class="{empty:selectedCount===0}"></nuxt-link>
                  </div>
                </div>
              </div>
            </div>


            
            
          </div>
        </div>
      </div>
    </div>

    <v-dialog v-model="cleaningPopVisible">
      <DialogBasic class="cleaning-popup" header-title="세탁 가격표 선택하기" @hide="closeCleaningPopup()">
        <template #body>
          <div class="cleaning-popup-contents">
            <div class="cpc-cont">
              <div v-background-image="{url:cleaningPopData.image_url}" class="cpc-img"></div>
              <div class="cpc-txt">
                <div class="cpc-brand">{{cleaningPopData.brand_name}}</div>
                <div class="cpc-name">{{cleaningPopData.product_name}}</div>
                <div class="cpc-option"><span>BLACK</span><span>90</span></div>
              </div>
            </div>
            <CommonSelectBox id="selectId0" title="타이틀">
            <template #optionList>
              <option value="placeholder">가격표를 선택해주세요.</option>
              <option value="option1">옵션1</option>
              <option value="option2">옵션2</option>
              <option value="option3">옵션3</option>
              <option value="option4">옵션4</option>
            </template>
          </CommonSelectBox>
          <button class="cpc-btn" @click="closeCleaningPopup">확인</button>
          </div>
        </template>
      </DialogBasic>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios'
import DialogBasic from '~/pages/POPUP/DialogBasic.vue' // 팝업기본

export default {
  components: {
    DialogBasic
  },
  layout: 'LayoutBasics',
  data: () => ({
    closetCodiTab: 0,
    onOffTab: 0,
    periodTab: 0,

    cleaningPopVisible: false,
    cleaningPopData: {},

    closetList: [],
    selectedCount: 0,
    selectedList: [],
    fixBottom: false
  }),
  //   [퍼블수정]23.02.17 menuList 추가
  created() {
    const me = this
    const json = require('~/static/json/cl_left_menu.json')
    me.menuList = json.list
  },
  mounted(){
    const me = this
    me.loadData()
  },
  methods:{
    loadData(){
      const me = this
      axios.get("/json/product_list_single.json")
      .then(function(res){
        res.data.list.forEach(function(item, idx){
          // 이미지 없을 때 예시
          if(idx === 1){
            item.image_url = "no.jpg"
          }
          // 이미지 없을 때 예시
          item.selected = false
        });
        me.closetList = res.data.list
        me.selectedCount = 0
        me.$nextTick(me.scroll)
      })
      .catch(function(e){
        console.log(e)
      })
    },
    
    selectProduct(item){
      const me = this
      let len, i, sel

      if(item.selected){
        item.selected = false
        len = me.selectedList.length
        for(i=0; i<len; i++){
          sel = me.selectedList[i]
          if(sel.product_cd === item.product_cd){
            me.selectedList.splice(i, 1)
            break
          }
        }
      }else if(me.selectedCount >= 6){
        me.showAlert("코디하기는 6개까지 가능합니다.")
      }else{
        item.selected = true
        let exist = false
        len = me.selectedList.length
        for(i=0; i<len; i++){
          sel = me.selectedList[i]
          if(sel.product_cd === item.product_cd){
            exist = true
            break
          }
        }
        if(!exist){
          me.selectedList.push(item)
        }
      }

      me.selectedCount = me.selectedList.length
    },

    
    scroll() {
      const me = this

      const wrap = me.$el.querySelector(".closet-sel-list-wrap")
      const tb = document.querySelector("#topButton").__vue__
      if(wrap){
        const bt = window.scrollY + window.innerHeight - wrap.clientHeight
        const ot = me.offsetTop(wrap)
        if(me.fixBottom === true && bt > ot){
          me.fixBottom = false
          try{
            tb.setFloating(0)
          }catch(e){}
        }else if(me.fixBottom === false && bt < ot){
          me.fixBottom = true
          try{
            tb.setFloating(-84)
          }catch(e){}
        }
      }
    },

    showCleaningPopup(item){
      const me = this
      me.cleaningPopData = item
      me.cleaningPopVisible = true
    },
    closeCleaningPopup(){
      const me = this
      me.cleaningPopVisible = false
    }
  }// methods
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/closet.scss';
</style>
