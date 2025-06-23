<template>
  <div class="contents contents-type2">
    <div class="content-wrap">
      <v-btn nuxt @click="openDialog">케어플러스 수선 안내</v-btn>
      <!-- [팝업]샘플 -->
      <v-dialog v-model="DialogRepairInfo">
        <DialogRepairInfo 
          @close="closeDialog"
        ></DialogRepairInfo>
      </v-dialog>
      <!--// [팝업]샘플 -->
    </div>
  </div>
</template>

<script>
import DialogRepairInfo from '~/pages/POPUP/DialogRepairInfo.vue'
export default {
  components: {
    DialogRepairInfo,
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogRepairInfo : false,
  }),
  methods: {
    // [팝업]상품상세정보
    openDialog() {
      this.DialogRepairInfo = true
    },
    closeDialog() {
      this.DialogRepairInfo = false
    },
    submitDialog() {
      this.closeDialog()
    },
  },
}
</script>

<style lang="sass"></style>
