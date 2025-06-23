<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogEnterShipping">
        <span class="txt">배송지 등록/수정 (팝업)</span>
      </v-btn>
      <v-btn @click="openDialogNonmeMberEnterShipping">
        <span class="txt">비회원 배송지 변경 (팝업)</span>
      </v-btn>

      <!-- 회원용 배송지 등록/ 수정 팝업 -->
      <v-dialog v-model="DialogEnterShipping">
        <DialogEnterShipping @close="closeDialogEnterShipping" />
      </v-dialog>
      <!-- //팝업 -->

      <!-- 비회원 배송지변경 팝업 -->
      <v-dialog v-model="DialogNonmeMberEnterShipping">
        <DialogNonmeMberEnterShipping @close="closeDialogNonmeMberEnterShipping" />
      </v-dialog>
      <!-- //비회원 배송지변경 팝업 -->
    </div>
  </div>
</template>

<script>
import DialogEnterShipping from '~/pages/POPUP/DialogEnterShipping.vue'
import DialogNonmeMberEnterShipping from '~/pages/POPUP/DialogNonmeMberEnterShipping.vue'
export default {
  components: {
    DialogEnterShipping,
    DialogNonmeMberEnterShipping
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogEnterShipping : false,
      DialogNonmeMberEnterShipping : false
    }
  },
  created(){
    
  },
  methods: {
    openDialogEnterShipping(){
      this.DialogEnterShipping = true
    },
    closeDialogEnterShipping(){
      this.DialogEnterShipping = false
    },
    openDialogNonmeMberEnterShipping(){
      this.DialogNonmeMberEnterShipping = true
    },
    closeDialogNonmeMberEnterShipping(){
      this.DialogNonmeMberEnterShipping = false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/order.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
