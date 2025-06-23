<template>
  <div class="hb-layer hb-layer-editshop">
    <div class="hb-layer-inner">
      <div class="gnb-shop-brand-top">
        <div class="brand-list-cnt">
          <!-- [퍼블수정]편집샵 - 셀렉티드 수정 -->
          <nuxt-link :to="{}" class="home-link">셀렉티드 HOME</nuxt-link>
          <!-- //[퍼블수정]편집샵 - 셀렉티드 수정 -->
          <ul class="brand-list">
            <li :class="{on:shopData.brand.selectedBrand.item_cd===''}">
              <button @click="selectShopBrand(null)">
                <span>ALL</span>
                <span class="hidden">ALL</span><!-- [퍼블수정]22.12.06 추가 -->
              </button>
            </li>
            <li v-for="(item, idx) in shopData.brand.originList" :key="idx" :class="{on:shopData.brand.selectedBrand.item_cd===item.item_cd}">
              <button @click="selectShopBrand(item)">
                <span>{{item.label}}</span>
                <span class="hidden">{{item.label}}</span><!-- [퍼블수정]22.12.06 추가 -->
              </button>
            </li>
          </ul>
        </div>
        <div class="link-index-cnt">
          <nuxt-link v-if="shopData.brand.selectedBrand.item_cd!==''" :to="{path:shopData.brand.selectedBrand.link_url}" class="brand-link">
            {{shopData.brand.selectedBrand.label}} 
            <span>바로가기</span>
          </nuxt-link>
          <ul class="brand-index">
            <li v-for="(char, idx) in shopData.brand.charEnableList" :key="idx">
              <button 
                v-if="idx===0" 
                :class="{'on':charScroll.now < charScroll.tops[idx+1]}" 
                @click="scrollToChar(char.char)"
              >{{char.char}}</button> 
              <button 
                v-if="idx!==0 && idx!==shopData.brand.charEnableList.length-1"
                :class="{'on':charScroll.now >= charScroll.tops[idx] && charScroll.now < charScroll.tops[idx+1]}"
                @click="scrollToChar(char.char)"
              >{{char.char}}</button>
              <button 
                v-if="idx===shopData.brand.charEnableList.length-1"
                :class="{'on':charScroll.now >= charScroll.tops[idx]}"
                @click="scrollToChar(char.char)"
              >{{char.char}}</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="gnb-shop-brand-list">
        <ul>
          <template v-for="(item, idx) in shopData.brand.list">
            <li v-if="item.char" :key="idx+'n'" class="char-tit" :char="item.char">{{item.char}}</li>
            <li :key="idx">
              <nuxt-link :to="{path:item.link_url}"><!-- [퍼블수정]해당 하위 브랜드에 class="on" 추가 -->
                <span class="list-cnt">
                  <span class="label">{{item.label}}</span>
                  <span v-if="item.flags && item.flags.length > 0" class="flags">
                    <em v-for="flag, fdx in item.flags" :key="fdx">{{flag}}</em>
                  </span>
                </span>
                <span v-if="shopData.brand.selectedBrand.item_cd==='' && item.dupe" class="brand-name">{{item.group_name}}</span>
              </nuxt-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    show : {
      type : Boolean,
      default : false,
    },
    selectIdx : {
      type : Number,
      default : null,
    },
    selectChar : {
      type : String,
      default : null,
    },
  },
  data: () => ({
    shopData: {
      brand:{
        originList: [],
        allList: [],
        list: [],
        selectedBrand:{ item_cd : "" },
        charList: [],
        charEnableList : [],
        timer: -1,
        index:"",
        indexHeight: 12
      },
    },
    charScroll : {
      tops : [],
      now : 0,
    },
  }),
  watch: {
    show(){
      const me = this
      if(me.show && me.selectChar!==null) me.scrollToChar(me.selectChar)
    }
  },
  created() {
    
  },
  mounted() {
    const me = this
    me.loadShopData()
  },
  destroyed(){

  },
  methods: {
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
      me.scrollCharInit()
      if(me.selectIdx!==null) me.selectShopBrand(me.shopData.brand.originList[me.selectIdx])
      setTimeout(()=>{me.scrollCharSet()},10)
    },

    // 인덱싱에 브랜드 유무 표시
    checkExistingChar(){
      const me = this
      me.shopData.brand.charList.forEach(function(item){
        item.enable = false
      })
      me.shopData.brand.charEnableList = []
      me.shopData.brand.list.forEach(function(item){
        if(item.char){
          me.shopData.brand.charList.forEach(function(char){
            if(char.char === item.char){
              char.enable = true
              me.shopData.brand.charEnableList.push(item)
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
    // 편집샵 브랜드 load data
    loadShopData(){
      const me = this
      if(me.shopData.brand.list.length === 0){
        const dataUrl = "/json/gnb_shop_brand.json"
        axios.get(dataUrl)
        .then(function(res){
          const d = res.data
          me.processShopBrandList(d)
        })
        .catch(function(e){
          console.log(e)
        })
      }
    },
    // 편집샵 상위 브랜드 선택
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

      setTimeout(()=>{me.scrollCharSet()},200) 
    },
    // 편집샵 브랜드 알파펫 스크롤 이동
    scrollToChar(char){
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
      const y = li.offsetTop
      
      wrap.scroll({
        top: y
      })
    },
    // 편집샵 알파펫 offsetTop 값 배열
    scrollCharSet(){
      const me = this
      me.charScroll.tops = []
      const list = me.shopData.brand.charEnableList
      const len = list.length
      let li, i
      for(i=0; i<len; i++){
        li = me.$el.querySelector(".gnb-shop-brand-list li[char='" + list[i].char + "']")
        me.charScroll.tops.push(li.offsetTop-10)
      }
    },
    // 편집샵 알파펫 scrollTop값 가져오기
    scrollChar(){
      const me = this
      const wrap = me.$el.querySelector(".gnb-shop-brand-list")
      me.charScroll.now = wrap.scrollTop
    },
     // 편집샵 스크롤 이벤트 init
    scrollCharInit(){
      const me = this
      me.$el.querySelector(".gnb-shop-brand-list").addEventListener("scroll",me.scrollChar)
    },
  },// methods
}
</script>
<style lang="scss"></style>
