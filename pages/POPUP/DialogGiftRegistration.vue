<template>
  <!-- [class설명]기본 공통:popup-basic,  해당팝업 전용:popup-해당클래스" -->
  <DialogBasic class="popup-basic popup-cardRegistration" header-title="e-Gift Card 등록" @hide="closeDialogRegister">
    <template #body>
      <div class="inner">
        <p class="cmp-font fnt-16 mb-20">e-Gift Card를 등록하면 e-money로 전환됩니다.</p>
        <v-text-field :rules="rules1" outlined type="number" clearable label="카드번호를 입력해 주세요." class="cmp-form-input"></v-text-field>
        <v-text-field :rules="rules2" outlined type="number" clearable label="PIN 번호를 입력해 주세요." class="cmp-form-input mt-10"></v-text-field>
        <p class="error--text cmp-font fnt-14 mt-6" >e-Gift Card 번호 또는 PIN 번호가 올바르지 않습니다.</p>
      </div>
    </template>
    <template #footer>
      <!-- 220916 CTA고정 : 버튼 <template #footer>로 이동 -->
      <v-btn :disabled="!valid" color="primary" block large>등록하기</v-btn>
    </template>
  </DialogBasic>
</template>
<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'
export default {
  components: { DialogBasic },
  data: () => ({
    valid: '',
    email: '',
    password: '',
    rules1: [
      v => !!v || '',
    ],
    rules2: [
      v => !!v || '',
    ],
  }),
  methods: {
    closeDialogCardAuthGuide() {
      this.DialogCardAuthGuide = false
      this.$emit('close')
    },
    // 풀팝업
    openDialogRegister() {
      this.DialogRegister = true
    },
    closeDialogRegister() {
      this.$emit('close')
      this.DialogRegister = false
    },
    onSubmit() {
      this.$refs.form.validate();
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/giftCard.scss';
</style>
