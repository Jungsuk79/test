<template>
  <div class="contents contents-type2">
    <div class="content-wrap">
      <v-btn nuxt @click="openDialog">e-Gift Card 구매 정보</v-btn>
      <!-- [팝업]샘플 -->
      <v-dialog v-model="DialogGiftCardPurchase">
        <DialogGiftCardPurchase 
          @close="closeDialog"
        ></DialogGiftCardPurchase>
      </v-dialog>
      <!--// [팝업]샘플 -->
    </div>
  </div>
</template>

<script>
import DialogGiftCardPurchase from '~/pages/POPUP/DialogGiftCardPurchase.vue'
export default {
  components: {
    DialogGiftCardPurchase,
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogGiftCardPurchase : false,
  }),
  methods: {
    // [팝업]공지
    openDialog() {
      this.DialogGiftCardPurchase = true
    },
    closeDialog() {
      this.DialogGiftCardPurchase = false
    }
  },
}
</script>

<style lang="sass"></style>
