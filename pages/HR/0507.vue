<template>
  <div class="contents contents-type2">
    <div class="content-wrap">
      <v-btn nuxt @click="openDialog">품질보증 및 보상안내</v-btn>
      <!-- [팝업]샘플 -->
      <v-dialog v-model="DialogQuality">
        <DialogQuality 
          @close="closeDialog"
        ></DialogQuality>
      </v-dialog>
      <!--// [팝업]샘플 -->
    </div>
  </div>
</template>

<script>
import DialogQuality from '~/pages/POPUP/DialogQuality.vue'
export default {
  components: {
    DialogQuality,
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogQuality : false,
  }),
  methods: {
    // [팝업]상품상세정보
    openDialog() {
      this.DialogQuality = true
    },
    closeDialog() {
      this.DialogQuality = false
    },
    submitDialog() {
      this.closeDialog()
    },
  },
}
</script>

<style lang="sass"></style>
