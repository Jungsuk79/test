<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogOrderRequest">
        <span class="txt">배송 요청사항 팝업</span>
      </v-btn>

      <v-btn @click="openDialogOrderRequest2">
        <span class="txt">수거/수령 요청사항</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogOrderRequest">
        <DialogOrderRequest @close="closeDialogOrderRequest" />
      </v-dialog>
      <!-- //팝업 -->

      <!-- 팝업 -->
      <v-dialog v-model="DialogOrderRequest2">
        <DialogOrderRequest2 @close="closeDialogOrderRequest2" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogOrderRequest from '~/pages/POPUP/DialogOrderRequest.vue'
import DialogOrderRequest2 from '~/pages/POPUP/DialogOrderRequest2.vue'
export default {
  components: {
    DialogOrderRequest,
    DialogOrderRequest2,
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogOrderRequest : false,
      DialogOrderRequest2 : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogOrderRequest(){
      this.DialogOrderRequest = true
    },
    closeDialogOrderRequest(){
      this.DialogOrderRequest = false
    },
    openDialogOrderRequest2(){
      this.DialogOrderRequest2 = true
    },
    closeDialogOrderRequest2(){
      this.DialogOrderRequest2 = false
    },
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/order.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
