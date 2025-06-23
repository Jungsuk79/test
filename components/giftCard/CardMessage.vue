<template>
  <div class="ellipsis-message">
    <!-- eslint-disable -->
    <p class="msg" :style="{'line-height' :(lineHeight*0.1)+'rem'}" :class="lineClass" v-html="msg"></p>
    <div class="message-cnt-box" :class="contentClass">
      <slot name="content"></slot>
    </div>
    <!-- eslint-disable -->
    <div v-if="buttonShow" class="message-btn-box">
      <button class="btn-ellipsis" @click="btnToggle">{{buttonText}}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg : {
      type: String,
      default: () => '',
    },
    lineHeight : {
      type : Number,
      default : () => 31,
    },
    limitLine : {
      type : Number,
      default : () => 3,
    },
    popup : {
      type : Boolean,
      default : () => false,
    },
  },
  data() {
    return {
      buttonShow : false,
      buttonText : '더보기',
      lineClass : null,
      contentClass : 'hide',
      contentUse : false,
    }
  },
  created() {

  },
  mounted(){
    const me = this
    if(me.popup){
      me.$nextTick(() => {
        me.contentSet()
        me.lineSet()
      })
    }else{
      me.contentSet()
      me.lineSet()
    }
    
  },
  destroyed(){
    const me = this
    me.buttonShow = false
    me.buttonText = '더보기'
    me.lineClass = null
    me.contentClass = 'hide'
    me.contentUse = false
  },
  methods: {
    contentSet(){
      const me = this
      const contentBox = me.$el.querySelector('.message-cnt-box')
      if(contentBox.innerHTML!=='') me.contentUse = true
      else me.contentUse = false
    },
    lineSet(){
      const me = this
      const textH = me.$el.querySelector('.msg').clientHeight
      const cutH = me.lineHeight*me.limitLine

      if(textH > cutH || me.contentUse){
        me.lineClass = 'cut'+me.limitLine
        me.buttonShow = true
      }else{
        me.lineClass = null        
        me.buttonShow = false
      }
    },
    btnToggle(){
      const me = this
      if(me.buttonText==='더보기'){
        me.lineClass = null
        me.buttonText = '접기'
        if(me.contentUse) me.contentClass = null
        this.$emit('showText')
      }else{
        me.lineClass = 'cut'+me.limitLine
        me.buttonText = '더보기'
        if(me.contentUse) me.contentClass = 'hide'
        this.$emit('hideText')
      }
    },
  }
}
</script>

<style>

</style>