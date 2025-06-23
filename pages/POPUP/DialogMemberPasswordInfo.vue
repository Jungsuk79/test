<template>
  <DialogBasic
   class="popup-login" 
    header-title="비밀번호 변경" 
    @hide="closeDialog">
    <template #body>
      <div class="password-contents">
        <p class="cmp-font fnt-16">
          새로운 비밀번호로 개인정보를 보호해 주세요.<br> 회원님의 소중한 개인정보 보호를 위해 주기적으로<br> 비밀번호를 변경해주시기 바랍니다.
        </p>

        <div class="cmp-form-boxGroup">
          <div class="cmp-form-box">
            <p class="form-tit">현재 비밀번호</p>
            <v-text-field v-model="model" :rules="modelRules" type="text" label="현재 비밀번호를 입력해 주세요." clearable class="cmp-form-input"></v-text-field>
          </div>

          <div class="cmp-form-box">
            <p class="form-tit">신규 비밀번호</p>
            <v-text-field type="text" label="비밀번호(영문, 숫자, 특수문자 포함 8~30자)" clearable class="cmp-form-input"></v-text-field>
            <v-text-field v-model="model1" :rules="modelRules1" type="text" label="비밀번호를 한번 더 입력해 주세요." clearable class="cmp-form-input mt-20"></v-text-field>
          </div>
        </div>

        <ul class="cmp-dotList">
          <li>비밀번호 설정시 영문, 숫자, 특수문자를 포함하여 8~30자<br>리로 입력해 주세요. 연속된 3자리 이상의 숫자, 문자는 입<br>력할 수 없습니다.</li>
        </ul>

        <div class="btn-box">
          <v-btn 
            large
            block
            color="primary">
            비밀번호 변경하기
          </v-btn>
          <v-btn 
            large
            outlined
            block
            color="primary">
            90일 후에 변경하기
          </v-btn>
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
    model: '',
    modelRules: [(v) => !!v || '입력하신 비밀번호가 올바르지 않습니다.'],
    model1: '',
    modelRules1: [(v) => !!v || '입력하신 비밀번호가 일치하지 않습니다.'],
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
