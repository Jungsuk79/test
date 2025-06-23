<template>
  <div class="contents contents-type2">
    <div class="content-wrap">
      <v-btn nuxt @click="openDialog">세탁물 추가</v-btn>
      <!-- [팝업]샘플 -->
      <v-dialog v-model="DialogAddLaundry">
        <DialogAddLaundry 
          @close="closeDialog"
        ></DialogAddLaundry>
      </v-dialog>
      <!--// [팝업]샘플 -->
    </div>
  </div>
</template>

<script>
import DialogAddLaundry from '~/pages/POPUP/DialogAddLaundry.vue'
export default {
  components: {
    DialogAddLaundry,
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogAddLaundry : false,
  }),
  methods: {
    // [팝업]상품상세정보
    openDialog() {
      this.DialogAddLaundry = true
    },
    closeDialog() {
      this.DialogAddLaundry = false
    },
    submitDialog() {
      this.closeDialog()
    },
  },
}
</script>

<style lang="sass"></style>
