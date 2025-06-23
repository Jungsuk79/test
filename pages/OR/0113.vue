<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogGiftsDetail">
        <span class="txt">증정사은품 상세</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogGiftsDetail">
        <DialogGiftsDetail @close="closeDialogGiftsDetail" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogGiftsDetail from '~/pages/POPUP/DialogGiftsDetail.vue'
export default {
  components: {
    DialogGiftsDetail
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogGiftsDetail : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogGiftsDetail(){
      this.DialogGiftsDetail = true
    },
    closeDialogGiftsDetail(){
      this.DialogGiftsDetail = false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/order.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
