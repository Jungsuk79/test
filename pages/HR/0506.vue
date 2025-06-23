<template>
  <div class="contents contents-type2">
    <div class="content-wrap">
      <v-btn nuxt @click="openDialog">수선진행 및 비용안내</v-btn>
      <!-- [팝업]샘플 -->
      <v-dialog v-model="DialogRepair">
        <DialogRepair 
          @close="closeDialog"
        ></DialogRepair>
      </v-dialog>
      <!--// [팝업]샘플 -->
    </div>
  </div>
</template>

<script>
import DialogRepair from '~/pages/POPUP/DialogRepair.vue'
export default {
  components: {
    DialogRepair,
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogRepair : false,
  }),
  methods: {
    // [팝업]상품상세정보
    openDialog() {
      this.DialogRepair = true
    },
    closeDialog() {
      this.DialogRepair = false
    },
    submitDialog() {
      this.closeDialog()
    },
  },
}
</script>

<style lang="sass"></style>
