<template>
  <div class="order-coupon-select" :class="{valid : error}">
    <template v-if="data === null || data.list.length === 0">
      <button disabled class="coupon-selected-item" :class="{disabled : disabled}">
        <span class="txt0">{{$t('components.couponSelect.none')}}</span><!-- 글로벌 작업 : en 케이스 추가 -->
        <i class="down-icon">{{$t('components.common.open')}}</i><!-- 글로벌 작업 : en 케이스 추가 -->
      </button>
    </template>
    <template v-else>
      <button :disabled="disabled" class="coupon-selected-item" :class="{disabled : disabled}" @click="open">
        <span v-if="data.select_idx === 'undefined' || data.select_idx === null" class="txt0">{{$t('components.couponSelect.select')}}</span><!-- 글로벌 작업 : en 케이스 추가 -->
        <!-- eslint-disable -->
        <span v-else v-html="data.list[data.select_idx]" class="txt1"></span>
        <!-- eslint-disable -->
        <i class="down-icon">{{$t('components.common.open')}}</i><!-- 글로벌 작업 : en 케이스 추가 -->
      </button>
      <div v-if="show" v-click-outside="close" class="coupon-select-list">
        <button class="list-tit" @click="close">
          <span class="txt0">{{$t('components.couponSelect.noSelect')}}</span><!-- 글로벌 작업 : en 케이스 추가 -->
          <i class="up-icon">{{$t('components.common.close')}}</i><!-- 글로벌 작업 : en 케이스 추가 -->
        </button>
        <ul class="list-cnt" :style="{'max-height':maxHeight+'px'}">  
          <li v-for="(item, index) in data.list" :key="index" role="button" tabindex="0" @click="[couponSelect(index),$emit('submit',data.select_idx,listIdx)]">
            <!-- eslint-disable -->
            <div v-html="item"></div>
            <!-- eslint-disable -->
            <i v-if="index === data.select_idx" class="cmp-icon cmp-icon-18 i-check">{{$t('components.couponSelect.selected')}}</i><!-- 글로벌 작업 : en 케이스 추가 -->
          </li>
        </ul>
      </div>
      <p v-if="error" class="validation-text">{{errorText}}</p>
    </template>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  props: {
    couponData: {
      type: Object,
      default: () => {
        return null
      },
    },
    listIdx : {
      type : Number,
      default : 0,
    },
    disabled : {
      type : Boolean,
      default : false,
    },
    error : {
      type : Boolean,
      default : false,
    },
    errorText : {
      type : String,
      default : '',
    },
    maxHeight : {
      type : Number,
      default : 163,
    },
  },
  data: () => ({
    data : null,
    show : false,
  }),
  watch:{
    couponData(){
      const me = this
      me.data = me.couponData
    }
  },
  created(){
    const me = this
    me.data = me.couponData
  },
  mounted(){
    
  },
  destroyed(){

  },
  methods: {
    open(){
      const me = this
      me.show = true
    },
    close(){
      const me = this
      me.show = false
    },
    couponSelect(idx){
      const me = this
      me.data.select_idx = idx
      me.close()
    }
  },
}
</script>
<style lang="scss" scoped></style>
