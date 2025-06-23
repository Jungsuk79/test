<template>
  <DialogBasic
   class="popup-login" 
    header-title=" 임직원 로그인" 
    @hide="closeDialog">
    <template #body>
      <div class="simple-contents">
        <div class="cmp-form-boxGroup">
          <div class="cmp-form-box">
            <v-text-field type="text" label="아이디/이메일을 입력해 주세요." clearable class="cmp-form-input"></v-text-field><!-- [퍼블수정]22.12.26 -->
          </div>
          <div class="cmp-form-box">
            <v-text-field v-model="model" :rules="modelRules" type="text" label="비밀번호를 입력해 주세요." clearable class="cmp-form-input"></v-text-field>
          </div>
        </div>

        <div class="btn-box">
          <v-btn 
            large
            block
            color="primary">
            H.Point 통합회원 로그인
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
    modelRules: [(v) => !!v || '아이디 또는 비밀번호를 다시 확인해주세요.'],
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
