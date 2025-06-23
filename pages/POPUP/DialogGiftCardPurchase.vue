<template>
  <DialogBasic
    class="popup-basic popup-cardPurchase"
    header-title="e-Gift Card 구매 정보"
    @hide="closeDialog"
  >
    <template #body>
      <section class="sec-notice">
        <div class="info-wrap">
          <dl class="">
            <dt class="cmp-font fnt-18">발행자</dt>
            <dd class="cmp-font fnt-16 mt-6">㈜한섬</dd>
          </dl>
          <dl class="mt-24">
            <dt class="cmp-font fnt-18">유효기간</dt>
            <dd class="cmp-font fnt-16 mt-6">한섬 e-Gift</dd>
          </dl>
          <dl class="mt-24">
            <dt class="cmp-font fnt-18">이용조건</dt>
            <dd class="cmp-font fnt-16 mt-6">수신자가 MMS로 받은 카드를 더한섬닷컴 e-money로 전환 후 사용</dd>
          </dl>
          <dl class="mt-24">
            <dt class="cmp-font fnt-18">이용가능매장</dt>
            <dd class="cmp-font fnt-14 mt-6">
              <a href="http://www.thehansome.com" target="_blank" class="line">www.thehandsome.com</a>
            </dd>
          </dl>
          <dl class="mt-24">
            <dt class="cmp-font fnt-18">환불조건 및 방법</dt>
            <!-- [퍼블수정]24.03.07 문구 추가 -->
            <ul class="cmp-dotList">
              <li class="cmp-font fnt-16 mt-6">e-Gift Card의 유효기간(1년) 내에는 전환된 e-money의 60% 이상 구매 시 잔액 환불 가능(최종 소비자에게)</li>
              <li class="cmp-font fnt-16 mt-6">유효기간(1년) 이후부터 소멸시효(5년) 이전에는 미사용 잔액의 90% 환불 가능</li>
              <li class="cmp-font fnt-16 mt-6">소멸시효(5년) 이후에는 잔액 환불 불가</li>
            </ul>
          </dl>
          <dl class="mt-24">
            <dt class="cmp-font fnt-18">지급보증 또는 피해보상보험<br>계약 체결에 관한 사항</dt>
            <dd class="cmp-font fnt-16 mt-6">한섬 e-Gift Card는 지급 보증 및 피해 보상보험 계약 없이 ㈜한섬의 신용으로 발행</dd>
          </dl>
          <dl class="mt-24">
            <dt class="cmp-font fnt-18">현금영수증</dt>
            <dd class="cmp-font fnt-16 mt-6">구매 시점에는 발급하지 않고, 한섬 e-Gift Card 사용시점에 사용자에게 발급</dd>
          </dl>
          <dl class="mt-24">
            <dt class="cmp-font fnt-18">e-Gift Card 신용카드 구매한도</dt>
            <dd class="cmp-font fnt-16 mt-6">e-Gift Card를 신용카드로 결제할 경우 개인 신용카드 이용 한도와 별도로, 월 1백만원 이하로 구매가능</dd>
          </dl>
        </div>
      </section>
    </template>
  </DialogBasic>
</template>

<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  components: { DialogBasic },
  data: () => ({
  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss">
// @import '@/assets/scss/pages/giftCard.scss'; 
</style>
