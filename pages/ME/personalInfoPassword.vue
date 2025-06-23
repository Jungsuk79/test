<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <ContentsLeftMenu :title="'마이페이지'" :left-data="menuList" :active="'/ko/ME/withdrawal'"></ContentsLeftMenu>
      <div class="my-page-r-box personalInfo-content">
          <div class="cmp-page-tit line">
            <h2 class="tit">비밀번호 재확인</h2>

             <div class="cmp-page-txt">
              <p class="cmp-font fnt-20">회원정보를 확인 및 수정하기 위해 비밀번호를 입력해 주세요.</p>
              <p class="mt-14">개인정보보호를 위해 비밀번호를 한 번 더 확인합니다.<br>로그인 시 사용하는 비밀번호를 입력해 주세요.</p>
            </div>
          </div>
         
          <div class="personal-info">
            <div class="info-center">
              <div class="info-border-box col size2">
                <div class="box">
                  <dl class="line">
                    <dt class="tit">H.Point 통합회원 아이디</dt>
                    <dd class="txt">han*******</dd>
                  </dl>
                </div>
              </div>

              <div class="cmp-pass-box">
                <v-text-field 
                v-model="model1" 
                :rules="model1Rules" 
                @blur="checkValidity"
                @input="checkValidity"
                outlined 
                type="password" 
                label="비밀번호를 입력해 주세요." clearable class="cmp-form-input"></v-text-field>
                <span v-if="isValid" class="count-value-wrap">(1회/ 총5회)</span>
              </div>

              <div class="cmp-btnsArea">
                <v-btn outlined large block color="primary" class="width-360">비밀번호 찾기</v-btn>
                <v-btn disabled large block color="primary" class="width-360" @click="openDialog">확인</v-btn>
              </div>
            </div>
          </div>
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
import ContentsLeftMenu from '~/components/common/ContentsLeftMenu'
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'
export default {
  components: {
    ContentsLeftMenu,
    DialogBasic
  },
  layout: 'LayoutBasics',
  data: () => ({
    isDialog: true,
    model1: '',
    model1Rules: [(v) => !!v || '입력하신 비밀번호가 일치하지 않습니다.'],
    isValid: false,
  }),
  created() {
    const me = this
    const json = require('~/static/json/mypage_left_menu.json')
    me.menuList = json.list
  },
  methods: {
    validateInput(value) {
      return !!value || false;
    },
    checkValidity() {
      // validateInput 함수가 반환한 결과가 false면 isValid를 true로 설정
      const validationResult = this.validateInput(this.model1)
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
