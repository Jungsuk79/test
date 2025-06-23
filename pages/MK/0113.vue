<template>
  <v-layout class="contents">
    <div class="content-wrap">
      <v-btn @click="openDialogEventReview">
        <span class="txt">스탬프 이력</span>
      </v-btn>

      <v-dialog v-model="DialogEventReview" transition="slide-x-reverse-transition">
        <DialogEventReview @close="closeDialogEventReview" />
      </v-dialog>
    </div>
  </v-layout>
</template>

<script>
import DialogEventReview from '~/pages/POPUP/DialogEventReview.vue'

export default {
  components: {
    DialogEventReview,
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogEventReview: false,
    }
  },
  methods: {
    openDialogEventReview() {
      this.DialogEventReview = true
    },
    closeDialogEventReview() {
      this.DialogEventReview = false
    },
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/order.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
