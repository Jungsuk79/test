<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogGiftsApply">
        <span class="txt">사은품 신청하기 팝업</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogGiftsApply">
        <DialogGiftsApply @close="closeDialogGiftsApply" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogGiftsApply from '~/pages/POPUP/DialogGiftsApply.vue'
export default {
  components: {
    DialogGiftsApply,
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogGiftsApply : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogGiftsApply(){
      this.DialogGiftsApply = true
    },
    closeDialogGiftsApply(){
      this.DialogGiftsApply = false
    },
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/order.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
