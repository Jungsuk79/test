<template>
  <div 
    class="ui-popup" 
    :class="{'none-tit':headerTitle===null || headerTitle===''}" 
    :style="{'width':width+'px'}"
  >
    <!--:class="[{'none-tit':headerTitle===null || headerTitle===''},{'scroll-use': scrollUse},{'scroll-fix' : scrollFix}]" -->
    <div class="popup-header">
      <v-btn small icon class="btn-back"><!-- [퍼블추가]23.01.11 -->
        <i class="cmp-icon i-prev cmp-icon-24">뒤로가기</i>
      </v-btn>
      <slot name="header">
        <!-- eslint-disable -->
        <h1 v-if="headerTitle!==null" class="tit" v-html="headerTitle"></h1>
        <!-- eslint-disable -->
      </slot>
      <v-btn small icon class="btn-close" @click="$emit('hide')">
        <i class="cmp-icon i-close">닫기</i>
      </v-btn>
    </div>
    <div class="popup-body">
      <div class="popup-body-in" :style="{'width':width-48+'px'}">
        <slot name="body"></slot>
      </div>
    </div>
    <div class="popup-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DialogBasic',
  props: {
    headerTitle: {
      type: String,
      default: null,
    },
    width : {
      type : Number,
      default : 380,
    },
    scrollFix : {
      type : Boolean,
      default : false,
    }
  },
  data: () => ({
    // scrollUse : false,
  }),
  mounted() {
    /* const me = this
    if(!me.scrollFix){
      me.scrollSet()
      window.addEventListener('resize', me.scrollSet);
    } */
  },
  beforeDestroy(){
    /* const me = this
    window.removeEventListener('resize', me.scrollSet); */
  },
  methods: {
    /* scrollSet(){
      const me = this
      setTimeout(()=>{
        const popup =  me.$el
        const popupHeaderH = popup.querySelector('.popup-header').clientHeight
        const popupBodyH = popup.querySelector('.popup-body-in').clientHeight
        const popupFooterH = popup.querySelector('.popup-footer').clientHeight
        const contH = popupHeaderH + popupBodyH + popupFooterH + 34 // 34 : 팝업 padding-bottom
        if(contH > popup.clientHeight) me.scrollUse = true
        else me.scrollUse = false
      },100)
    } */
  }
}
</script>

<style lang="scss"></style>
