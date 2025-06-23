<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogthePlusJoinTermsOfService">
        <span class="txt">서비스(결제/가입) 유의사항</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogthePlusJoinTermsOfService">
        <DialogthePlusJoinTermsOfService @close="closeDialogthePlusJoinTermsOfService" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogthePlusJoinTermsOfService from '~/pages/POPUP/DialogthePlusJoinTermsOfService.vue'
export default {
  components: {
    DialogthePlusJoinTermsOfService
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogthePlusJoinTermsOfService : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogthePlusJoinTermsOfService(){
      this.DialogthePlusJoinTermsOfService = true
    },
    closeDialogthePlusJoinTermsOfService(){
      this.DialogthePlusJoinTermsOfService = false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/theplusmember.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
