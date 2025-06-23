<template>
  <DialogBasic class="popup-personalInfo" header-title="개인정보 제3자 제공 동의" :width="540" @hide="closeDialog">
    <template #body>  
      <div class="inner">
        <div class="info-txt">
          <p>‘아워레가시’ 브랜드 정보 공유 및 마케팅 활용 목적으로 동의하신 고객님에 한하여 최소한의 개인정보가 제 3자에게 제공됩니다.</p>
          <p>고객님께서는 개인정보 제 3자 제공에 대해 ‘동의’ 또는 ‘거부’를 선택할 수 있으며, 선택에 관계없이 제품 구매가 가능합니다.</p>
          <p>개인정보 제공 관련 구체적인 내용은 아래와 같습니다.</p>
        </div>

        <!-- [241126] 개인정보수집/이용동의개선 -->
        <dl class="info-dl">
          <dt>제공받는 자</dt>
          <dd class="txt-bold underline">국내 소재 OUR LEGACY의 대리인<br>(한섬과 OUR LEGACY 독점 계약 종료 시 사업을 이어받을 국내 신규 사업자)</dd>
          <dt>제공 항목</dt>
          <dd>성명 및 이메일 주소</dd>
          <dt>이용 목적</dt>
          <dd class="txt-bold underline">마케팅 활용 및 브랜드 정보 공유</dd>
          <dt>보유 및 이용기간</dt>
          <dd class="txt-bold underline">회원탈퇴시 또는 동의 철회시까지</dd>
        </dl>

        <v-btn
          depressed
          tile
          large
          block
          :ripple="false"
          class="mt-34"
          color="primary">
          확인
        </v-btn>
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
