<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="testLoading">
        <span class="txt">Applying Discount Loding POPUP</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogBenefitPriceLoading" persistent>
        <DialogBenefitPriceLoading @close="closeDialogBenefitPriceLoading" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogBenefitPriceLoading from '~/pages/en/POPUP/DialogBenefitPriceLoading.vue'
export default {
  components: {
    DialogBenefitPriceLoading
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogBenefitPriceLoading : false,
    }
  },
  created() {
    
  },
  methods: {
    openDialogBenefitPriceLoading(){
      this.DialogBenefitPriceLoading = true
    },
    closeDialogBenefitPriceLoading(){
      this.DialogBenefitPriceLoading = false
    },
    testLoading(){ // 퍼블 화면 확인 용
      const me = this
      me.openDialogBenefitPriceLoading();
      setTimeout(me.closeDialogBenefitPriceLoading,5000)
    },
  }
}
</script>
<style lang="scss">
  @import '@/assets/scss/pages/order.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
  @import '@/assets/scss/en/en.scss'; // 글로벌 en scss
</style>
