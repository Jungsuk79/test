<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogCardBenefit">
        <span class="txt">카드행사혜택안내</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogCardBenefit">
        <DialogCardBenefit @close="closeDialogCardBenefit" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogCardBenefit from '~/pages/POPUP/DialogCardBenefit.vue'
export default {
  components: {
    DialogCardBenefit
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogCardBenefit : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogCardBenefit(){
      this.DialogCardBenefit = true
    },
    closeDialogCardBenefit(){
      this.DialogCardBenefit = false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/order.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
