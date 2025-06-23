<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogLoginOtp = true">
        OTP 로그인
      </v-btn>

      <!-- OTP 로그인 POPUP -->
      <v-dialog
        v-model="DialogLoginOtp">
        <DialogLoginOtp @close="DialogLoginOtp=false" />
      </v-dialog>

    </div>
  </div>
</template>

<script>
import DialogLoginOtp from '~/pages/POPUP/DialogLoginOtp.vue' 
export default {
  components: {
    DialogLoginOtp
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogLoginOtp : false,
  }),
  methods: {
    closeDialog(){
      this.$emit('close')
    },
  },
}
</script>
<style lang="scss">
 // @import '@/assets/scss/pages/member.scss'; 
</style>
