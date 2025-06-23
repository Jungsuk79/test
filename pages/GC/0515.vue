<template>
  <div class="contents contents-type2">
    <div class="content-wrap">
      <v-btn nuxt @click="openDialog">e-Gift Card 등록</v-btn>
      <v-dialog v-model="DialogGiftRegistration">
        <DialogGiftRegistration 
          @close="closeDialog"
        ></DialogGiftRegistration>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import DialogGiftRegistration from '~/pages/POPUP/DialogGiftRegistration.vue'
export default {
  components: {
    DialogGiftRegistration,
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogGiftRegistration : false,
  }),
  methods: {
    // [팝업]상품상세정보
    openDialog() {
      this.DialogGiftRegistration = true
    },
    closeDialog() {
      this.DialogGiftRegistration = false
    },
    submitDialog() {
      this.closeDialog()
    },
  },
}
</script>

<style lang="sass"></style>
