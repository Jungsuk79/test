<template>
  <div class="contents contents-type2">
    <div class="content-wrap">
      <v-btn nuxt @click="openDialog">e-Gift Card 등록완료</v-btn>
      <v-dialog v-model="DialogGiftRegistrationComplete">
        <DialogGiftRegistrationComplete 
          @close="closeDialog"
        ></DialogGiftRegistrationComplete>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import DialogGiftRegistrationComplete from '~/pages/POPUP/DialogGiftRegistrationComplete.vue'
export default {
  components: {
    DialogGiftRegistrationComplete,
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogGiftRegistrationComplete : false,
  }),
  methods: {
    // [팝업]상품상세정보
    openDialog() {
      this.DialogGiftRegistrationComplete = true
    },
    closeDialog() {
      this.DialogGiftRegistrationComplete = false
    },
    submitDialog() {
      this.closeDialog()
    },
  },
}
</script>

<style lang="scss">
// @import '@/assets/scss/pages/giftCard.scss';
</style>