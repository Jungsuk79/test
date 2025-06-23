<template>
  <DialogBasic class="popup-thePlusReward" header-title="한섬마일리지와 사은품을 받았어요." :width="380" @hide="closeDialog">
    <template #body>
      <ul class="benefit-list">
        <li>
          <img src="/images/theplus/ico-36-mileage.svg" alt="마일리지">
          <dl>
            <dt>총 획득한 마일리지</dt>
            <dd><strong>840</strong>M</dd>
          </dl>
        </li>
        <li>
          <img src="/images/theplus/ico-36-coupon.svg" alt="쿠폰">
          <dl>
            <dt>사은품</dt>
            <dd><strong>3,000원</strong> 쿠폰</dd>
          </dl>
        </li>
      </ul>
      
      <p class="comment">
        획득한 마일리지로 더한섬닷컴과 함께 하세요.<br />
        쿠폰은 90일 이내로 사용하실 수 있어요.<br />
        (라이프/뷰티 상품군제외)
      </p>
      <div class="popup-btn-box">
        <v-btn large block color="primary" :disabled="false">리워드 확인하기</v-btn>
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
