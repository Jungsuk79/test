<template>
  <li class="product-unit product-unit-mini">
    <div class="product-unit-wrap">
      <!-- 이미지 -->
      <div class="product-image">
        <div v-background-image="{'url' : data.image_url}" class="prod-image"></div>
        <div v-if="data.image_url2" v-background-image="{'url' : data.image_url2}" class="prod-image prod-image-2"></div>
        <a class="link-block" @click="gotoLink('')"></a>
      </div>
      <!-- 이미지 -->
      <!-- 컬러칩 -->
      <div v-if="colorchip && data.colors && data.colors.length > 0" class="product-colors">
        <div v-for="chip, cdx in data.colors" :key="cdx" :style="{'background':chip.image}" class="product-color-chip" :class="{on:cdx===0,'soldout' : soldout === chip.soldout}"></div><!--20221201 soldout 추가-->
      </div>
      <!-- 컬러칩 -->
      <!-- 텍스트 -->
      <div v-if="unitType!=='micro'" class="product-info">
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
        <!-- [퍼블수정]23.09.14 a 태그 수정 및 추가 -->
        <span class="link-block"></span>
      </div>
      <!-- 텍스트 -->
      <button class="zzim-btn" :class="{on:data.zzim}" @click.stop="zzim"></button>
      <!-- 스티커 추가, 기획전, 매거진에만 노출 -->
      <div v-if="data.exclusive || data.limited" class="product-edition">
        <span v-if="data.exclusive">EXCLUSIVE</span>
        <span v-if="data.limited">LIMITED</span>
      </div>
      <!-- [퍼블수정]23.09.14 a 태그 수정 및 추가 -->
      <a v-if="unitType!=='micro'" @click="gotoLink('')" class="mini-acover"></a>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    unitData: {
      type: Object,
      default: ()=>{ return null },
    },
    unitType: {
      type: String,
      default: ()=>{ return "mini" },
    },
    colorchip: {
      type: Boolean,
      default: ()=>{ return false },
    }
  },
  data: () => ({
    data: null,
  }),
  watch: {
    unitData(){
      const me = this
      me.initData()
    }
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

      me.data = me.unitData
    },
    gotoLink(size){
      const me = this
      console.log("상품 링크 이동하기", "url: " + me.data.link_url)
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
