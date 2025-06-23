<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogMyGiftsDetail">
        <span class="txt">사은품 안내 팝업</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogMyGiftsDetail">
        <DialogMyGiftsDetail @close="closeDialogMyGiftsDetail" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogMyGiftsDetail from '~/pages/POPUP/DialogMyGiftsDetail.vue'
export default {
  components: {
    DialogMyGiftsDetail
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogMyGiftsDetail : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogMyGiftsDetail(){
      this.DialogMyGiftsDetail = true
    },
    closeDialogMyGiftsDetail(){
      this.DialogMyGiftsDetail = false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/order.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
