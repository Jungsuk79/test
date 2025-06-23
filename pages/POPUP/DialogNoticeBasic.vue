<template>
   <!-- [퍼블수정]24.06.28 상품평 유도 팝업 -->
  <div class="main-noticepopup-cover" 
  :class="{'none-tit':headerTitle===null || headerTitle===''}" >
    <div 
      class="main-noticepopup" 
      :style="{'width':width+'px'}"
    >
    <!-- ui-popup 삭제 -->
      <div class="popup-body">
        <div class="popup-body-in">
          <slot name="body"></slot>
        </div>
      </div>
      <div class="popup-footer">
        <button class="cmp-font button">오늘 하루 보지 않기</button>
        <button class="cmp-font button" @click="$emit('hide')">닫기</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DialogNoticeBasic',
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
