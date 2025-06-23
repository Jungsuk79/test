<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogOrderLogin">
        <span class="txt">로그인 회원가입 안내</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogOrderLogin">
        <DialogOrderLogin @close="closeDialogOrderLogin" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogOrderLogin from '~/pages/POPUP/DialogOrderLogin.vue'
export default {
  components: {
    DialogOrderLogin,
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogOrderLogin : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogOrderLogin(){
      this.DialogOrderLogin = true
    },
    closeDialogOrderLogin(){
      this.DialogOrderLogin = false
    },
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/order.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
