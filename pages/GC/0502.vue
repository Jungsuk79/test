<template>
  <div class="contents contents-type2">
    <div class="content-wrap">
      <v-btn nuxt @click="openDialog"> [팝업]구매 카드사별 인증 안내</v-btn>
      <!-- [팝업]샘플 -->
      <v-dialog v-model="DialogCardAuthGuide">
        <DialogCardAuthGuide 
          @close="closeDialog"
        ></DialogCardAuthGuide>
      </v-dialog>
      <!--// [팝업]샘플 -->
    </div>
  </div>
</template>

<script>
import DialogCardAuthGuide from '~/pages/POPUP/DialogCardAuthGuide.vue'
export default {
  components: {
    DialogCardAuthGuide,
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogCardAuthGuide : false,
  }),
  methods: {
    // [팝업]상품상세정보
    openDialog() {
      this.DialogCardAuthGuide = true
    },
    closeDialog() {
      this.DialogCardAuthGuide = false
    },
    submitDialog() {
      this.closeDialog()
    },
  },
}
</script>

<style lang="sass"></style>
