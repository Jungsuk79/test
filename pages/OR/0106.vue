<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogGiftsReachAmount">
        <span class="txt">증정사은품-확인해보셨어요</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogGiftsReachAmount">
        <DialogGiftsReachAmount @close="closeDialogGiftsReachAmount" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogGiftsReachAmount from '~/pages/POPUP/DialogGiftsReachAmount.vue'
export default {
  components: {
    DialogGiftsReachAmount
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogGiftsReachAmount : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogGiftsReachAmount(){
      this.DialogGiftsReachAmount = true
    },
    closeDialogGiftsReachAmount(){
      this.DialogGiftsReachAmount = false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/order.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
