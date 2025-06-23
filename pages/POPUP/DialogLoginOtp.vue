<template>
  <DialogBasic
   class="popup-login" 
    header-title="OTP 로그인" 
    @hide="closeDialog">
    <template #body>
      <div class="login-contents">
        <div class="cmp-form-box">
          <v-text-field
            v-model="model1"
            :rules="model1Rules" 
            label="OTP 인증번호를 입력해 주세요."
            clearable 
            class="cmp-form-input"
          ></v-text-field>
        </div>

        <div class="btn-box">
          <v-btn 
            large
            block
            color="primary">
            로그인
          </v-btn>
        </div>

        <div class="opt-cnt">
          <p class="cmp-font fnt-16">OTP 인증번호 로그인 방법</p>
          <v-layout justify-space-between class="opt-box">
            <div>
              <p class="step">STEP 1</p>
              <p>모바일에서<br>H.Point 앱 실행</p>
            </div>
            <div>
              <p class="step">STEP 2</p>
              <p>메뉴 > 설정 ><br>OTP 인증번호 발급</p>
            </div>
            <div>
              <p class="step">STEP 3</p>
              <p>발급된 인증번호<br>제한시간 내 입력</p>
            </div>
          </v-layout>
        </div>
      </div>
    </template>
  </DialogBasic>
</template>
<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'
export default {
  components: {
    DialogBasic,
  },
  data: () => ({
    DialogBasic: false, // 팝업
    model1: '',
    model1Rules: [(v) => !!v || 'OTP 번호가 올바르지 않습니다.']
  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss">
</style>
