<template>
  <DialogBasic
    class="popup-basic refund-historyPopup"
    header-title="e-money 잔액 환불 신청내역"
    @hide="closeDialog"
  ><!--20221018 e-Gift : 텍스트수정 -->
    <template #body>
      <div class="inner">
        <p class="cmp-font fnt-16 c-blue mb-10">환불대기</p><!-- [퍼블수정]22.10.11 -->
        <!-- <p class="cmp-font fnt-16 c-blue mb-10">환불완료</p> -->
        <div class="info-border-box cnt-line px-0">
          <div class="box">
            <dl class="line">
              <dt class="tit">예금주</dt>
              <dd class="txt">더한섬</dd>
            </dl>
            <dl class="line">
              <dt class="tit">은행</dt>
              <dd class="txt">국민은행</dd>
            </dl>
            <dl class="line">
              <dt class="tit">계좌번호</dt>
              <dd class="txt">123456*********</dd>
            </dl>
            <dl class="line">
              <dt class="tit">입금예정금액</dt>
              <dd class="txt"><strong class="mr-2">18,760</strong>원</dd><!-- [퍼블수정]22.10.11 -->
            </dl>
          </div>
        </div>
        <ul class="cmp-dotList mt-20">
          <li>잔액은 본인계좌로만 환불됩니다.</li>
          <li>최종 충전 후 합계 잔액의 60%이상 사용된 카드에 한해 고객 명의의계좌로 환불신청이 가능합니다.</li>
          <li>잔액환불 신청 후 영업일 기준 7일 이내 신청하신 계좌로 잔액이 입금됩니다.</li>
        </ul>
      </div>
    </template>
  </DialogBasic>
</template>
<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'
export default {
  components: { DialogBasic },
  data: () => ({}),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/giftCard.scss';
</style>
