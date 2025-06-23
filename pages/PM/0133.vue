<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogReceivingStore">
        <span class="txt">매장 선택 팝업</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogReceivingStore">
        <DialogReceivingStore @close="closeDialogReceivingStore" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogReceivingStore from '~/pages/POPUP/DialogReceivingStore.vue'
export default {
  components: {
    DialogReceivingStore
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogReceivingStore : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogReceivingStore(){
      this.DialogReceivingStore = true
    },
    closeDialogReceivingStore(){
      this.DialogReceivingStore = false
    },
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/order.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
