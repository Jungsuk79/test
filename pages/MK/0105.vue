<template>
  <v-layout class="contents">
    <div class="content-wrap">
      <v-btn @click="openDialogEventStampHistory">
        <span class="txt">스탬프 이력</span>
      </v-btn>

      <!-- 스탬프 이력 팝업 -->
      <v-dialog v-model="DialogEventStampHistory" transition="slide-x-reverse-transition">
        <DialogEventStampHistory @close="closeDialogEventStampHistory" />
      </v-dialog>
      <!-- //스탬프 이력 팝업 -->
    </div>
  </v-layout>
</template>

<script>
import DialogEventStampHistory from '~/pages/POPUP/DialogEventStampHistory.vue'

export default {
  components: {
    DialogEventStampHistory,
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogEventStampHistory: false,
    }
  },
  methods: {
    openDialogEventStampHistory() {
      this.DialogEventStampHistory = true
    },
    closeDialogEventStampHistory() {
      this.DialogEventStampHistory = false
    },
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/order.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
