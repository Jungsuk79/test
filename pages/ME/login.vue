<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="login-content">
        <div class="cmp-page-tit center">
          <h2 class="tit">로그인</h2>
        </div>

        <div class="cmp-form-boxGroup">
          <div class="cmp-form-box">
            <v-text-field type="text" label="아이디/이메일을 입력해 주세요." clearable class="cmp-form-input"></v-text-field>
          </div>
          <!-- <div class="cmp-form-box">
            <v-text-field v-model="model" :rules="modelRules" type="text" label="비밀번호를 입력해 주세요." clearable class="cmp-form-input"></v-text-field>
          </div> -->
          <div class="cmp-form-box">
            <v-text-field 
            v-model="model" 
            :rules="modelRules" 
            @blur="checkValidity"
            @input="checkValidity"
            type="text" 
            label="비밀번호를 입력해 주세요." clearable class="cmp-form-input"></v-text-field>
            <span v-if="isValid" class="count-value-wrap">(1회/ 총5회)</span>
          </div>
        </div>

        <!--20221012 수정-->
        <v-checkbox label="자동 로그인" class="cmp-form-checkbox"></v-checkbox>

        <v-btn 
          large
          color="primary"
          class="v-btn-login width-360"
          @click="openDialog">
          로그인
        </v-btn>

        <v-btn 
          large
          color="#FFE100"
          class="v-btn-kakao width-360">
          <i class="cmp-icon kakao">카카오 아이콘</i>카카오 간편로그인<!-- [퍼블수정]23.01.20 -->
        </v-btn>
        
        <v-layout align-center class="v-layout-link">
          <p><nuxt-link to="">OTP 로그인</nuxt-link></p>
          <p><nuxt-link to="">비회원 주문조회</nuxt-link></p>
        </v-layout>

        <v-btn 
          large
          outlined
          color="primary"
          class="v-btn-hpoint width-360">
          H.Point 통합회원 회원가입
        </v-btn>

        <v-layout align-center class="v-layout-link">
          <p><nuxt-link to="">아이디 찾기</nuxt-link></p>
          <p><nuxt-link to="">비밀번호 찾기</nuxt-link></p>
        </v-layout>

        <v-layout align-center class="v-layout-link mt-45">
          <p><nuxt-link to="">한섬회원 아이디 찾기</nuxt-link></p>
          <p><nuxt-link to="">한섬회원 비밀번호 찾기</nuxt-link></p>
        </v-layout>
       </div>
    </div>

    <v-dialog v-model="isDialog" persistent>
      <DialogBasic class="popup-message" @hide="closeDialog">
        <template #body>
          <div class="inner">
            <p class="msg-sub-txt">
              비밀번호를 5회 이상 잘못 입력하셨습니다.<br />
              비밀번호를 재설정한 후<br />
              다시 로그인해 주세요.
            </p>
          </div>
          <div class="popup-btn-box">
            <v-btn large color="primary">비밀번호 찾기 및 재설정</v-btn>
          </div>
        </template>
      </DialogBasic>
    </v-dialog>

  </div>
</template>

<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'
export default {
  components: {
    DialogBasic
  },
  layout: 'LayoutBasics',
  data: () => ({
    isDialog: true,

    model: '',
    modelRules: [(v) => !!v || '아이디 또는 비밀번호를 다시 확인해 주세요.'],
    isValid: false,
  }),
  methods: {
    validateInput(value) {
      return !!value || false;
    },
    checkValidity() {
      // validateInput 함수가 반환한 결과가 false면 isValid를 true로 설정
      const validationResult = this.validateInput(this.model)
      console.log('???????', validationResult)
      this.isValid = validationResult === false; // validateInput이 false를 반환하면 유효
    },

    openDialog () {
      this.isDialog = true
    },
    closeDialog () {
      this.isDialog = false
    }
  },
}
</script>
<style lang="scss" scoped>
 @import '@/assets/scss/pages/member.scss'; 
</style>
