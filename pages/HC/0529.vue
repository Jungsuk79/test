<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogCareDeliveryTracking">
        <span class="txt">배송조회(POPUP)</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogCareDeliveryTracking">
        <DialogCareDeliveryTracking @close="closeDialogCareDeliveryTracking" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogCareDeliveryTracking from '~/pages/POPUP/DialogCareDeliveryTracking.vue'
export default {
  components: {
    DialogCareDeliveryTracking
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogCareDeliveryTracking : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogCareDeliveryTracking(){
      this.DialogCareDeliveryTracking = true
    },
    closeDialogCareDeliveryTracking(){
      this.DialogCareDeliveryTracking = false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/order.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
