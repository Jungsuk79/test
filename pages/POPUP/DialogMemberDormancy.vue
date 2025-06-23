<template>
  <DialogBasic
   class="popup-login" 
    header-title="휴면 제한 해제" 
    @hide="closeDialog">
    <template #body>
      <div class="dormancy-contents">
        <p class="cmp-font fnt-16">
          더한섬닷컴에 1년 이상 로그인하지 않아 휴면 상태로<br>전환되었습니다.<br>더한섬닷컴을 다시 이용하시려면 비밀번호를 입력 후<br>휴면 해제 해주시기 바랍니다.
        </p>

        <div class="cmp-form-box mt-34">
          <v-text-field v-model="model" :rules="modelRules" type="text" label="비밀번호를 입력해 주세요." clearable class="cmp-form-input"></v-text-field>
        </div>

        <div class="btn-box">
          <v-btn 
            large
            block
            color="primary">
           휴면 해제 하기
          </v-btn>
          <v-btn 
            large
            outlined
            block
            color="primary">
            취소
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
