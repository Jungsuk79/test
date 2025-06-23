<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogShippingList">
        <span class="txt">나의 배송지 목록(팝업)</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogShippingList">
        <DialogShippingList @close="closeDialogShippingList" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogShippingList from '~/pages/POPUP/DialogShippingList.vue'
export default {
  components: {
    DialogShippingList
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogShippingList : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogShippingList(){
      this.DialogShippingList = true
    },
    closeDialogShippingList(){
      this.DialogShippingList = false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/order.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
