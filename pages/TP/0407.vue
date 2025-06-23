<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogthePlusPaymentHistory">
        <span class="txt">더플러스+ 멤버십 결제 내역</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogthePlusPaymentHistory">
        <DialogthePlusPaymentHistory @close="closeDialogthePlusPaymentHistory" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogthePlusPaymentHistory from '~/pages/POPUP/DialogthePlusPaymentHistory.vue'
export default {
  components: {
    DialogthePlusPaymentHistory
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogthePlusPaymentHistory : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogthePlusPaymentHistory(){
      this.DialogthePlusPaymentHistory = true
    },
    closeDialogthePlusPaymentHistory(){
      this.DialogthePlusPaymentHistory = false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/theplusmember.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
