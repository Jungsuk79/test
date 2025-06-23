<template>
  <li class="product-unit product-unit-mini">
    <div class="product-unit-wrap">
      <!-- 이미지 -->
      <div class="product-image">
        <template v-if="data.colors">
          <div class="prod-image"><img v-image-error="{type:'product'}" :src="data.images[selectedColor][0]" class="img" alt="" /></div>
          <div class="prod-image prod-image-2"><img v-if="data.images[selectedColor][1]" v-image-error="{type:'product'}" :src="data.images[selectedColor][1]" class="img" alt="" /></div>
        </template>
        <template v-else>
          <div v-background-image="{'url' : data.images[selectedColor][0]}" class="prod-image"></div>
          <div v-if="data.images[selectedColor][1]" v-background-image="{'url' : data.images[selectedColor][1]}" class="prod-image prod-image-2"></div>
        </template>
        <a class="link-block" @click="gotoLink('')"></a>

        <nuxt-link v-if="data.colors && data.colors[selectedColor].soldout || data.soldout" :to="data.links[selectedColor]" class="prod-soldout">SOLD OUT</nuxt-link>

      </div>
      <!-- //이미지 -->
      <!-- 컬러칩 -->
      <ul v-if="data.colors" class="product-colors">
        <li v-for="item, idx in data.colors" :key="idx" class="color-item" :class="{on:selectedColor===idx, 'soldout' : soldout===item.soldout || data.soldout}">
          <button :style="{'background' : item.image}" @click="selectColor(idx)"></button>
        </li>
      </ul>
      <!-- //컬러칩 -->
      <!-- 텍스트 -->
      <div class="product-info">
        <div v-if="data.brand_name" class="brand-name">{{data.brand_name}}</div>
        <div class="product-name">{{data.product_name}}</div>
        <div v-if="data.discount" class="discount-price">
            <div class="sell-price">{{data.sell_price | number}}</div>
            <del class="product-price-origin">{{data.price | number}}</del>
            <!-- eslint-disable -->
            <span class="product-discount">{{data.discount | number}}</span>
            <!-- eslint-disable -->
        </div>
        <div v-else class="sell-price">{{data.sell_price | number}}</div>
        <!-- flag 추가, 기획전, 매거진에만 노출 -->
        <div v-if="data.flags && data.flags.length > 0" class="flag-list">
          <span v-if="data.stkrBtmWrd" :style="{'background-color':data.stkrColorCd || ''}" class="sticker-tag">{{data.stkrBtmWrd}}</span>
          <template v-if="data.flags">
            <span v-for="item, idx in data.flags" :key="idx" >{{item}}</span>
          </template>
        </div>
        <a class="link-block" @click="gotoLink('')"></a>
      </div>
      <!-- //텍스트 -->
      <button class="shoppingbag-add-btn" :disabled="data.soldout && data.soldout===true">쇼핑백 담기</button>
      <button class="zzim-btn" :class="{on:data.zzim}" @click.stop="zzim"></button>
    </div>
  </li>
</template>

<script>
// import { mapMutations } from 'vuex'


export default {
  components: {
  },
  props: {
    unitData: {
      type: Object,
      default: ()=>{ return null },
    },
    layout: {
      type: Number,
      default: ()=>{ return 4 }
    },
  },
  data: () => ({
    data: null,
    selectedColor: 0,
    soldout : true, // 20221201 추가
  }),
  watch: {
    unitData(){
      const me = this
      me.initData()
    },
    layout() {
      const me = this
      me.updateSwipe()  
    },
  },
  created() {
      const me = this
      me.initData()
  },
  mounted() {
  },
  methods: {
    initData(){
      const me = this

      // 예외처리
      const d = me.unitData
      if(d.images === undefined){
        if(d.image_url === undefined){
          d.images = [[]]
        }else{
          d.images = [[d.image_url]]
        }
      }
      if(d.links === undefined){
        if(d.link_url === undefined){
          d.links = []
        }else{
          d.links = [d.link_url]
        }
      }
      if(d.zzim !== true){
        d.zzim = false
      }
      // 예외처리

      if(d.colors.length > 2){
        d.colors2 = d.colors.slice(2)
      }else{
        d.colors2 = []
      }
      if(d.colors.length > 3){
        d.colors3 = d.colors.slice(3)
      }else{
        d.colors3 = []
      }

      me.data = me.unitData
    },
    selectColor(idx){
      const me = this
      if(me.selectedColor === idx){ return }

      me.selectedColor = idx
    },
    replacePercent(str){
      try{
        return str.replace("%", "<em>%</em>")
      }catch(e){
        return ""
      }
    },

    updateSwipe(){
      const me = this
      setTimeout(()=>{
        const cs = me.$el.querySelectorAll(".color-list-swiper")
        if(cs && cs.length > 0){
          cs.forEach((c)=>{
            try{
              c.swiper.update()
            }catch(e){}
          })
        }

        const sz = me.$el.querySelector(".size-list-swiper")
        if(sz && sz.swiper){
          try{
            sz.swiper.update()
          }catch(e){}
        }
      }, 200)
    },

    gotoLink(size){
      const me = this
      // 색상별로 링크가 다름
      // 사이즈 선택 시 상품상세에서 해당 사이트 활성화 해야 함
      console.log("상품 링크 이동하기", "url: " + me.data.links[me.selectedColor], "size: " + size)
    },

    zzim(){
      const me = this
      me.data.zzim = ! me.data.zzim
      me.$forceUpdate()
    }
  },
}
</script>

<style lang="scss" scoped></style>
