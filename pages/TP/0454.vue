<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogthePlusCancelComplete">
        <span class="txt">멤버십 해지하기 - 해지 가능 회원 case(POPUP)</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogthePlusCancelComplete">
        <DialogthePlusCancelComplete @close="closeDialogthePlusCancelComplete" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogthePlusCancelComplete from '~/pages/POPUP/DialogthePlusCancelComplete.vue'
export default {
  components: {
    DialogthePlusCancelComplete
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogthePlusCancelComplete : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogthePlusCancelComplete(){
      this.DialogthePlusCancelComplete = true
    },
    closeDialogthePlusCancelComplete(){
      this.DialogthePlusCancelComplete = false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/theplusmember.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
