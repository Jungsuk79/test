<template>
  <div class="contents contents-type2">
    <div class="content-wrap">
      <v-btn nuxt @click="openDialog">e-money 잔액 환불 신청내역</v-btn>
      <!-- [팝업]샘플 -->
      <v-dialog v-model="DialogGiftCardRefund">
        <DialogGiftCardRefund 
          @close="closeDialog"
        ></DialogGiftCardRefund>
      </v-dialog>
      <!--// [팝업]샘플 -->
    </div>
  </div>
</template>

<script>
import DialogGiftCardRefund from '~/pages/POPUP/DialogGiftCardRefund.vue'
export default {
  components: {
    DialogGiftCardRefund,
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogGiftCardRefund : false,
  }),
  methods: {
    // [팝업]상품상세정보
    openDialog() {
      this.DialogGiftCardRefund = true
    },
    closeDialog() {
      this.DialogGiftCardRefund = false
    },
    submitDialog() {
      this.closeDialog()
    },
  },
}
</script>

<style lang="sass"></style>
