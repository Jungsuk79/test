<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogDeliveryTracking">
        <span class="txt">배송조회(POPUP)</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogDeliveryTracking">
        <DialogDeliveryTracking @close="closeDialogDeliveryTracking" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogDeliveryTracking from '~/pages/POPUP/DialogDeliveryTracking.vue'
export default {
  components: {
    DialogDeliveryTracking
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogDeliveryTracking : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogDeliveryTracking(){
      this.DialogDeliveryTracking = true
    },
    closeDialogDeliveryTracking(){
      this.DialogDeliveryTracking = false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/order.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
