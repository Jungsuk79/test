<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogthePlusTermsOfService">
        <span class="txt">서비스(결제/가입) 유의사항</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogthePlusTermsOfService">
        <DialogthePlusTermsOfService @close="closeDialogthePlusTermsOfService" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogthePlusTermsOfService from '~/pages/POPUP/DialogthePlusTermsOfService.vue'
export default {
  components: {
    DialogthePlusTermsOfService
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogthePlusTermsOfService : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogthePlusTermsOfService(){
      this.DialogthePlusTermsOfService = true
    },
    closeDialogthePlusTermsOfService(){
      this.DialogthePlusTermsOfService = false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/theplusmember.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
