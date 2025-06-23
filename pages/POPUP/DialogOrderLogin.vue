<template>
  <DialogBasic class="popup-orderLogin" header-title="지금 회원가입하고<br>더 큰 혜택을 경험하세요!" @hide="closeDialog">
    <template #body>
      <ul class="info-box">
        <li>
          <i class="cmp-icon cmp-icon-32 i-coupon"></i>
          <div class="tit">신규회원 전용 쿠폰 5종</div>
          <div class="txt">회원가입 즉시 앱전용 15% 쿠폰 등<br>쿠폰 5종이 자동 발급됩니다.</div>
        </li>
        <li>
          <i class="cmp-icon cmp-icon-32 i-benefit"></i>
          <div class="tit">마일리지 지급</div>
          <div class="txt">최대 5% 구매 마일리지, 첫구매 감사 마일리지<br>3만원 등 다양한 한섬 마일리지 혜택을 드립니다.</div>
        </li>
        <li>
          <i class="cmp-icon cmp-icon-32 i-hpoint"></i>
          <div class="tit">H.Point 적립</div>
          <div class="txt">현대백화점 그룹의 다양한 제휴사에서<br>사용 가능한 H.Point를 적립해드립니다.</div>
        </li>
      </ul>
    </template>
    <template #footer>
      <!-- 220916 CTA고정 : 버튼 <template #footer>로 이동 -->
      <div class="popup-btn-box">
        <v-btn block color="primary" large>로그인</v-btn>
        <div class="cmp-font-btnBox">
          <nuxt-link to="#n" class="cmp-font button">회원가입</nuxt-link>
          <nuxt-link to="#n" class="cmp-font button">비회원 주문</nuxt-link>
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
    
  }),
  watch: {
    
  },
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped></style>
