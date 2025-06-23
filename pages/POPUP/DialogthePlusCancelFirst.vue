<template>
  <DialogBasic class="popup-thePlusPay" header-title="더플러스⁺ 해지" :width="540" @hide="closeDialog">
    <template #body>
      <div class="cmp-sub-tit small">
        <h3 class="tit cmp-font fnt-18">한섬님, 잠시만요! 이대로 해지하시려구요?</h3>
      </div>
      <p class="cmp-font fnt-14">더플러스⁺로 함께하신다면, 플러스맵 이용을 통해 가입축하 ‘웰컴기프트’와 다양한 리워드(쿠폰/한섬마일리지/사은품)를 받으실 수 있습니다.<br />또한 더플러스⁺ 고객님만을 위한 전용 이벤트인 ‘더플러스⁺ 데이’를 통해 다양한 이벤트에 참여하실 수 있습니다.</p>
      <div class="cmp-info info-type3">
        <p class="cmp-font">더플러스⁺와 함께한 기간</p>
        <p class="cmp-font mt-6">2021.12.13 ~ 2022.03.10</p>
      </div>
      <v-layout class="cmp-btnsArea mt-34">
        <v-btn large color="primary">멤버십 해지</v-btn>
      </v-layout>
      <div class="cmp-sub-tit small mt-34 mb-10">
        <h3 class="tit cmp-font fnt-18">멤버십 해지 유의사항</h3>
      </div>
      <ul class="cmp-dotList">
        <!-- S : [231113] 더플러스 당일 해지,재가입 차단 -->
        <li>더플러스⁺ 멤버십은 해지 당일 재가입이 불가합니다.<br />재가입은 해지 익일부터 가능합니다.</li>
        <!-- E : [231113] 더플러스 당일 해지,재가입 차단 -->
        <li>정기 결제 전날까지 해지 신청을 취소하실 수 있으며, 일 단위로는 취소하실 수 없습니다.</li>
        <li>멤버십 해지 후 가입 시 지급된 리워드/플러스맵 이용권 등의 혜택은 소멸되고 복구되지 않습니다.</li>
        <li>멤버십 가입 후 지급된 바우처 미사용, 플러스맵 미참여의 경우에 한해 결제일로부터 14일 안에 청약 철회를 신청하실 수 있습니다.</li>
        <li>결제일로부터 14일이 지났거나, 14일이 지나지 않았더라도 해당 서비스를 이용한 경우에는 전자상거래법 제17조 제2항에 따라 환불 받으실 수 없습니다.</li>
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
