<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogReStockingAlarm">
        <span class="txt">재입고 알림 신청 팝업</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogReStockingAlarm">
        <DialogReStockingAlarm @close="closeDialogReStockingAlarm" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogReStockingAlarm from '~/pages/POPUP/DialogReStockingAlarm.vue'
export default {
  components: {
    DialogReStockingAlarm
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogReStockingAlarm : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogReStockingAlarm(){
      this.DialogReStockingAlarm = true
    },
    closeDialogReStockingAlarm(){
      this.DialogReStockingAlarm = false
    },
  }
}
</script>
<style lang="scss">
</style>
