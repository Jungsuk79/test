<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogOrderSaleInfo">
        <span class="txt">할인정보 팝업</span>
      </v-btn>
      <v-btn @click="openDialogOrderSaleInfo2">
        <span class="txt">할인정보 팝업</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogOrderSaleInfo">
        <DialogOrderSaleInfo @close="closeDialogOrderSaleInfo" />
      </v-dialog>
      <v-dialog v-model="DialogOrderSaleInfo2">
        <DialogOrderSaleInfo2 @close="closeDialogOrderSaleInfo2" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogOrderSaleInfo from '~/pages/POPUP/DialogOrderSaleInfo.vue'
import DialogOrderSaleInfo2 from '~/pages/POPUP/DialogOrderSaleInfo2.vue'
export default {
  components: {
    DialogOrderSaleInfo,
    DialogOrderSaleInfo2,
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogOrderSaleInfo : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogOrderSaleInfo(){
      this.DialogOrderSaleInfo = true
    },
    closeDialogOrderSaleInfo(){
      this.DialogOrderSaleInfo = false
    },
    openDialogOrderSaleInfo2(){
      this.DialogOrderSaleInfo2 = true
    },
    closeDialogOrderSaleInfo2(){
      this.DialogOrderSaleInfo2 = false
    },
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/order.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
