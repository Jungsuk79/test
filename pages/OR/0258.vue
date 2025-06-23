<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogHpointJoin">
        <span class="txt">H.Point Pay 가입</span>
      </v-btn>
      <v-btn @click="openDialogHpointJointerms">
        <span class="txt">H.Point Pay 약관 팝업</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogHpointJoin">
        <DialogHpointJoin @close="closeDialogHpointJoin" />
      </v-dialog>
      <!-- //팝업 -->

      <!-- 팝업 -->
      <v-dialog v-model="DialogHpointJointerms">
        <DialogHpointJointerms @close="closeDialogHpointJointerms" />
      </v-dialog>
      <!-- //팝업 -->

    </div>
  </div>
</template>

<script>
import DialogHpointJoin from '~/pages/POPUP/DialogHpointJoin.vue'
import DialogHpointJointerms from '~/pages/POPUP/DialogHpointJointerms.vue'
export default {
  components: {
    DialogHpointJoin,
    DialogHpointJointerms
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogHpointJoin : false,
      DialogHpointJointerms : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogHpointJoin(){
      this.DialogHpointJoin = true
    },
    closeDialogHpointJoin(){
      this.DialogHpointJoin = false
    },
    openDialogHpointJointerms(){
      this.DialogHpointJointerms = true
    },
    closeDialogHpointJointerms(){
      this.DialogHpointJointerms = false
    },
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/order.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
