<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogOrderSaleInfo">
        <span class="txt">Discount Info POPUP</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogOrderSaleInfo">
        <DialogOrderSaleInfo @close="closeDialogOrderSaleInfo" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogOrderSaleInfo from '~/pages/en/POPUP/DialogOrderSaleInfo.vue'
export default {
  components: {
    DialogOrderSaleInfo,
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogOrderSaleInfo : false,
    }
  },
  created() {
    
  },
  methods: {
    openDialogOrderSaleInfo(){
      this.DialogOrderSaleInfo = true
    },
    closeDialogOrderSaleInfo(){
      this.DialogOrderSaleInfo = false
    },
  }
}
</script>
<style lang="scss">
  @import '@/assets/scss/pages/order.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
  @import '@/assets/scss/en/en.scss'; // 글로벌 en scss
</style>
