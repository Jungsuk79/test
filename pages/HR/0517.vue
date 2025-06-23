<template>
  <div class="contents contents-type2">
    <div class="content-wrap">
      <v-btn nuxt @click="openDialog">수선상품 추가</v-btn>
      <!-- [팝업]샘플 -->
      <v-dialog v-model="DialogAddRepairProduct">
        <DialogAddRepairProduct 
          @close="closeDialog"
        ></DialogAddRepairProduct>
      </v-dialog>
      <!--// [팝업]샘플 -->
    </div>
  </div>
</template>

<script>
import DialogAddRepairProduct from '~/pages/POPUP/DialogAddRepairProduct.vue'
export default {
  components: {
    DialogAddRepairProduct,
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogAddRepairProduct : false,
  }),
  methods: {
    // [팝업]상품상세정보
    openDialog() {
      this.DialogAddRepairProduct = true
    },
    closeDialog() {
      this.DialogAddRepairProduct = false
    },
    submitDialog() {
      this.closeDialog()
    },
  },
}
</script>

<style lang="sass"></style>
