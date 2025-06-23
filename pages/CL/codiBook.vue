<template>
  <div v-scroll="scroll" class="contents contents-type2">
    <div class="content-wrap">
      <div class="contents-layout">
        <!-- [퍼블수정]23.02.17 menuList 추가 -->
        <CommonContentsLeftMenu :title="'마이페이지'" :left-data="menuList" />
        <div class="contents-r-layout">
          <div class="codibook-list-wrap">
            <div class="cmp-page-tit">
              <h2 class="tit">나의 옷장</h2>
            </div>

            
            <div class="closet-codi-tab">
              <nuxt-link :to="{path:'myCloset'}">옷장</nuxt-link>
              <nuxt-link :to="{}" class="on">코디북</nuxt-link>
            </div>


            <!-- 코디북 리스트 없음 -->
            <div class="codibook-list-empty">
              <div>등록된 코디 북이 없습니다.<br/>구매하신 옷과 다양한 상품을 조합하여 코디를 만들어보세요!</div>
              <div><nuxt-link :to="{path:'/ko/CL/codiLayout'}">코디 만들기</nuxt-link></div>
            </div>
            <!-- 코디북 리스트 없음 -->


            <div class="codibook-add-btn">
              <div>
                <nuxt-link :to="{path:'/ko/CL/codiLayout'}">코디 만들기</nuxt-link>
              </div>
            </div>
            <div class="codibook-add-btn fix-bottom" :class="{fixed:fixBottom}">
              <div>
                <nuxt-link :to="{path:'/ko/CL/codiLayout'}">코디 만들기</nuxt-link>
              </div>
            </div>
            
            <!-- 코디북 리스트 -->
            <ul class="codibook-list">
              <li v-for="item, idx in codibookList" :key="idx" class="codibook-list-item">
                <div class="codibook-title">{{item.title}}</div>
                <div v-background-image="{url:item.image_url}">
                  <div class="codibook-hover">
                    <button class="codi-btn" @click="showCodibookPopup(item)">코디한 상품보기 {{item.product_list.length}}</button>
                    <button class="codi-btn">스타일라이브 토크로 공유하기</button>
                    <button class="del-btn">삭제</button>
                  </div>
                </div>
              </li>
            </ul>
            <ProductListPaging />
            <!-- 코디북 리스트 -->
            
          </div>
        </div>
      </div>
    </div>



    <v-dialog v-model="codiBookPopVisible">
      <DialogBasic class="codibook-popup" :header-title="codiBookPopData.title" :width="880" @hide="closeCodibookPopup()">
        <template #body>
          <div class="codibook-popup-contents">
            <div class="cpc-date">{{codiBookPopData.date}}</div>
            <div class="cpc-cont">
              <div v-background-image="{url:codiBookPopData.image_url}" class="cpc-img"></div>
              <div class="cpc-list">
                <div v-for="item, idx in codiBookPopData.product_data_list" :key="idx" class="cpc-list-item">
                  <div v-background-image="{url:item.image_url}" class="cpcl-img"></div>
                  <div class="cpcl-txt">
                    <div class="cpcl-brand">{{item.brand_name}}</div>
                    <div class="cpcl-name">{{item.product_name}}</div>
                    <div class="cpcl-price">{{item.sell_price}}</div>
                  </div>
                  <a href="" class="cpcl-link"></a><!--20221202 링크영역추가-->
                </div>
              </div>
            </div>
            <div class="cpc-btn">
              <button class="cpc-btn-share">스타일라이브 토크로 공유하기</button>
              <button class="cpc-btn-delete">삭제하기</button>
            </div>
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
    closetCodiTab: 1,
    codiBookPopVisible: false,
    codiBookPopData: {},

    codibookList: [],
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
      axios.get("/json/codibook.json")
      .then(function(res){
        res.data.list.forEach(function(item){
          item.product_data_list = []
        })
        me.codibookList = res.data.list

        me.$nextTick(me.scroll)
      })
      .catch(function(e){
        console.log(e)
      })
    },

    showCodibookPopup(item){
      const me = this
      me.codiBookPopData = item
      
      if(me.codiBookPopData.product_data_list.length > 0){
        me.codiBookPopVisible = true
      }else{
        // /////////////////////////////// 상품 정보 로드하기
        axios.get("/json/product_list_single.json")
        .then(function(res){
          res.data.list.length = me.codiBookPopData.product_list.length
          me.codiBookPopData.product_data_list = res.data.list
          me.codiBookPopVisible = true
        })
        .catch(function(e){
          console.log(e)
        })
        // /////////////////////////////// 상품 정보 로드하기
      }
    },

    closeCodibookPopup(){
      const me = this
      try{
        document.querySelector(".codibook-popup .codibook-popup-contents .cpc-cont .cpc-list").scroll(0, 0)
      }catch(e){}
      me.codiBookPopVisible = false
    },

    
    scroll() {
      const me = this

      const btn = me.$el.querySelector(".codibook-add-btn")
      const y = me.offsetTop(btn) - window.scrollY

      if(me.fixBottom === false && y < 0){
        me.fixBottom = true
      }else if(me.fixBottom === true && y > 0){
        me.fixBottom = false
      }
    },
  }// methods
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/closet.scss';
</style>
