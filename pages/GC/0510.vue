<template>
  <div class="contents contents-type2">
    <div class="content-wrap">
      <v-btn nuxt @click="openDialog">e-money 잔액 환불 신청</v-btn>
      <!-- [팝업]샘플 -->
      <v-dialog v-model="DialogGiftCardLeftRefund">
        <DialogGiftCardLeftRefund 
          @close="closeDialog"
        ></DialogGiftCardLeftRefund>
      </v-dialog>
      <!--// [팝업]샘플 -->
    </div>
  </div>
</template>

<script>
import DialogGiftCardLeftRefund from '~/pages/POPUP/DialogGiftCardLeftRefund.vue'
export default {
  components: {
    DialogGiftCardLeftRefund,
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogGiftCardLeftRefund : false,
  }),
  methods: {
    // [팝업]상품상세정보
    openDialog() {
      this.DialogGiftCardLeftRefund = true
    },
    closeDialog() {
      this.DialogGiftCardLeftRefund = false
    },
    submitDialog() {
      this.closeDialog()
    },
  },
}
</script>

<style lang="sass"></style>
