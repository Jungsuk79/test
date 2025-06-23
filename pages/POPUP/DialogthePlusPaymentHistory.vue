<template>
  <DialogBasic class="popup-thePlusPay payment-history" header-title="멤버십 결제 내역" :width="540" @hide="closeDialog">
    <template #body>
      <div class="text-center">
        <i class="cmp-icon-etc cmp-icon-80 i-receipt"></i>
        <p class="cmp-font fnt-18 mt-14">김한섬 고객님 더플러스⁺<br>결제 내역 입니다.</p>
      </div>

      <div class="info-border-box cnt-line pw-0 mt-34">
        <div v-for="(item,index) in paymentHistory" :key="index" class="box">
          <dl class="line">
            <dt class="tit">결제 일자</dt>
            <dd class="txt">{{item.date}}</dd>
          </dl>
          <dl class="line">
            <dt class="tit">결제 내역</dt>
            <dd class="txt">{{item.pay_history}}</dd>
          </dl>
          <dl class="line">
            <dt class="tit">상태</dt>
            <dd class="txt">
              <span v-if="item.status === 'complete'">결제 완료</span>
              <span v-if="item.status === 'cancel'" class="cmp-font c-red">결제 취소</span>
            </dd>
          </dl>
          <dl class="line">
            <dt class="tit">결제 금액</dt>
            <dd class="txt">
              <span v-if="item.status === 'complete'">{{item.pay}} 원</span>
              <span v-if="item.status === 'cancel'" class="cmp-font c-red">{{item.pay}} 원</span>
            </dd>
          </dl>
        </div>
      </div>
    </template>
    <template #footer>
      <v-btn large block color="primary" :disabled="false">확인</v-btn>
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
    paymentHistory : [ // 결제 내역
      {
        date: '2021.10.30 13:00',
        pay_history: '더플러스⁺',
        status: 'complete',
        pay: '100,000',
      },
      {
        date: '2021.10.30 13:00',
        pay_history: '더플러스⁺',
        status: 'cancel',
        pay: '-100,000',
      },
    ]
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
