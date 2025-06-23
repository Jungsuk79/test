<template>
  <DialogBasic class="popup-thePlusPay second-ver" header-title="해지하기" :width="540" @hide="closeDialog">
    <template #body>
      <div class="cmp-sub-tit small">
        <h3 class="tit cmp-font fnt-18">한섬님이 지금까지 더플러스⁺로 받은 혜택이 사라져요.<br />그래도 해지를 진행 하시겠어요?</h3>
      </div>

      <div class="info-border-box pw-0 mt-34">
        <p class="cmp-font fnt-18 mb-14">더플러스⁺로 받은 혜택</p>
        <div class="box">
          <dl class="line">
            <dt class="tit">케어플러스 세탁 체험권</dt>
            <dd class="txt text-right"><strong>1</strong>장</dd>
          </dl>
          <dl class="line">
            <dt class="tit">온라인 바우처 5만원권</dt>
            <dd class="txt text-right"><strong>8</strong>장</dd>
          </dl>
          <dl class="line">
            <dt class="tit">선호 브랜드 10% 할인권</dt>
            <dd class="txt text-right"><strong>1</strong>장</dd>
          </dl>
          <dl class="line">
            <dt class="tit">플러스맵 이용권</dt>
            <dd class="txt text-right"><strong>8</strong>장</dd>
          </dl>
        </div>
      </div>
      <div class="popup-btn-box">
        <v-btn outlined large color="primary">해지하기</v-btn>
        <v-btn large color="primary">유지하기</v-btn>
      </div>

      <div class="cmp-sub-tit small mb-10 mt-34">
        <h3 class="tit cmp-font fnt-18">멤버십 해지 유의사항</h3>
      </div>
      <ul class="cmp-dotList">
        <!-- S : [231113] 더플러스 당일 해지,재가입 차단 -->
        <li>더플러스⁺ 멤버십은 해지 당일 재가입이 불가합니다.<br />재가입은 해지 익일부터 가능합니다.</li>
        <!-- E : [231113] 더플러스 당일 해지,재가입 차단 -->
        <li>가입 시 발급 받은 혜택 및 리워드는 멤버십 해지완료 시 바로 소멸 됩니다. (복구 불가)</li>
        <li>멤버십 해지 시, 멤버십 가입 금액은 결제하신 카드로 즉시 취소 됩니다.</li>
      </ul>
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
  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/order.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>
