<template>
  <div class="main-noticepopup-cover" 
    :class="{'none-tit':headerTitle===null || headerTitle===''}">
    <div 
      class="main-noticepopup" 
      :style="{'width':width+'px'}"
      v-if="noticepopup02"
    >
      <!-- ui-popup 삭제 -->
      <div class="popup-body">
        <div class="popup-body-in">
          <slot name="revbody"></slot>
        </div>
      </div>
      <div class="popup-footer">
        <button class="cmp-font button">오늘 하루 보지 않기</button>
        <button v-if="noticepopup01" class="cmp-font button" @click="noticepopup02 = false">닫기</button>
        <button v-else class="cmp-font button" @click="$emit('hide')">닫기</button>
      </div>
    </div>
    <div 
      class="main-noticepopup"
      :style="{'width':width+'px'}"
      v-if="noticepopup01">
      <!-- ui-popup 삭제 -->
      <div class="popup-body">
        <div class="popup-body-in">
          <slot name="body"></slot>
        </div>
      </div>
      <div class="popup-footer">
        <button class="cmp-font button">오늘 하루 보지 않기</button>
        <button v-if="noticepopup02" class="cmp-font button" @click="closePopup">닫기</button>
        <button v-else class="cmp-font button" @click="$emit('hide')">닫기</button>
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
    },
    noticepopup01: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    // scrollUse : false,
    noticepopup02:true,
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
    closePopup() {
      this.$emit('update:noticepopup01', false);
      console.log("111111111")
    },
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
