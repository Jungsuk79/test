<template>
  <DialogBasic
    :width="540"
    class="popup-terms" 
    header-title="더한섬닷컴" 
    @hide="closeDialog">
    <template #body>
      <div class="terms-info">
        <dl>
          <dt class="cmp-font fnt-18">개인정보처리방침이란?</dt>
          <dd>THEHANDSOME.COM(이하 “더한섬닷컴”) 개인정보처리방침은 정부의 법률 및 지침의 변경과 “더한섬닷컴”의 정책 변화에 따라 변경될 수 있으며 개인정보 보호관련 관리책임자는 페이지 하단에 명시한 바와 같습니다. 본 개인정보 처리방침은 “더한섬닷컴” 사이트의 서비스를 이용하는 인터넷 사용자들의 기본권인 사생활 비밀과 자유 및 통신 비밀을 보장하고 불법적인 도청, 정보 유출로 인한 인권침해가 나타나지 않도록 하고자 명시하는 것입니다. “더한섬닷컴” 사이트의 개인정보처리방침은 정부의 법률 및 지침 변경에 따라 변경될 수 있으므로 “더한섬닷컴” 회원은 “더한섬닷컴” 사이트 방문 시에 수시로 확인하시기 바랍니다.</dd>
        </dl>

        <dl>
          <dt class="cmp-font fnt-18 bold">개인정보 처리방침</dt>
          <dd class="cmp-font fnt-18">제1조 총칙</dd>
          <dd>“개인정보”란 생존하는 개인에 관한 정보로서 당해 정보에 포함되어 있는 성명,<br>휴대전화번호, 본인확인 값 (CI : Connecting information - 서비스 연계를 위해 본인확인기관에서 부여하는 개인식별정보)등의 사항에 의하여 당해 개인을 식별할 수도 있는 정보(당해 정보만으로는 특정 개인을 실별할 수 없더라도 다른<br>정보와 용이하게 결함하여 식별할 수 있는 것을 포함합니다)를 말합니다.</dd>
          <dd class="cmp-font fnt-18">제2조 총칙</dd>
          <dd>“개인정보”란 생존하는 개인에 관한 정보로서 당해 정보에 포함되어 있는 성명,<br>휴대전화번호, 본인확인 값 (CI : Connecting information - 서비스 연계를 위해 본인확인기관에서 부여하는 개인식별정보)등의 사항에 의하여 당해 개인을 식별할 수도 있는 정보(당해 정보만으로는 특정 개인을 실별할 수 없더라도 다른<br>정보와 용이하게 결함하여 식별할 수 있는 것을 포함합니다)를 말합니다.</dd>
        </dl>
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

<style lang="scss">
</style>
