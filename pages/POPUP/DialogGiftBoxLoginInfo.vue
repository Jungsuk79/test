<template>
  <DialogBasic class="popup-coupon" header-title="" :width="380" @hide="closeDialog">
    <template #body>
      <div class="test-popup-contents">
        <p class="text-center">로그인 하신 후 배송지를<br>입력하실 수 있습니다.</p>
      </div>
      <div class="btn-box mt-34">
        <v-btn large block color="primary">로그인</v-btn>
        <v-btn large outlined block color="primary" class="mt-10">회원가입하기</v-btn>
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
  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
