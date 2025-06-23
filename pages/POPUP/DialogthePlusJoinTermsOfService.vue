<template>
  <DialogBasic class="popup-thePlusTermsOfService" header-title="서비스(결제/가입) 유의사항" :width="540" @hide="closeDialog">
    <template #body>
      <div class="inner">
        <div class="contents-line-box">
          <div class="cmp-sub-tit small mb-10">
            <h3 class="tit cmp-font fnt-18">정기 결제 유의사항</h3>
          </div>
          <ul class="cmp-dotList">
            <li>최초 결제일로부터 365일 이후에 자동결제 됩니다.</li>
            <li>가장 마지막으로 더플러스⁺ 서비스에 결제하신 수단으로 더플러스⁺ 서비스가 정기 결제됩니다.</li>
            <li>더플러스⁺ 서비스 이용료 결제 후, 가입 시 발급된 쿠폰 및 바우처 사용 또는 플러스맵 참여 시 해당 회차에 대하여 해지 및 환불이 불가능합니다.</li>
            <li>더플러스⁺ 서비스 이용료 결제일의 익일부터 14일 이내에, 가입 시 발급된 어떠한 혜택도 사용하지 않은 경우에 한하여, 즉시 환불이 가능합니다.</li>
            <li>미성년자가 법정대리인 동의 없이 계약을 체결한 경우, 미성년자 본인 또는 법정대리인이 이를 취소할 수 있습니다.</li>
          </ul>
        </div>
        <div class="contents-line-box">
          <div class="cmp-sub-tit small mb-10">
            <h3 class="tit cmp-font fnt-18">가입 유의사항</h3>
          </div>
          <ul class="cmp-dotList">
            <li>더플러스⁺ 서비스 가입은 실명 인증된 더한섬닷컴 아이디 1개에서만 이용이 가능하며, 동시에 2개 이상의 아이디에서 중복 사용이 제한됩니다. (간편회원/비회원 불가)</li>
            <li>더플러스⁺ 서비스의 모든 혜택은 더한섬닷컴 사정에 따라 변경될 수 있습니다.</li>
            <li>징계, 탈퇴 등 각 서비스에서 정한 정책 기준에 따라 더플러스⁺ 서비스 혜택을 이용하시지 못하는 경우가 발생할 수 있습니다.</li>
          </ul>
        </div>
      </div>
    </template>
  </DialogBasic>
</template>
<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  components: { DialogBasic},
  props: {
    
  },
  data: () => ({
    
  }),
  mounted() {
    
  },
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped></style>
