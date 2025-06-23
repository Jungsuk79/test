<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogGiftBoxLoginInfo">
        <span class="txt">받은선물- 비로그인 시 안내 팝업(POPUP)</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogGiftBoxLoginInfo">
        <DialogGiftBoxLoginInfo @close="closeDialogGiftBoxLoginInfo" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogGiftBoxLoginInfo from '~/pages/POPUP/DialogGiftBoxLoginInfo.vue'
export default {
  components: {
    DialogGiftBoxLoginInfo
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogGiftBoxLoginInfo : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogGiftBoxLoginInfo(){
      this.DialogGiftBoxLoginInfo = true
    },
    closeDialogGiftBoxLoginInfo(){
      this.DialogGiftBoxLoginInfo = false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/order.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
