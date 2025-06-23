<template>
  <DialogBasic
    :width="540"
    class="popup-terms" 
    header-title="더한섬닷컴 이용약관" 
    @hide="closeDialog">
    <template #body>
      <div class="terms-info">
        <dl>
          <dt class="cmp-font fnt-18">제1조 목적</dt>
          <dd class="pb-12">이 약관은 주식회사 한섬(이하 “회사”라고 함)이 운영하는 온라인 쇼핑몰<br> THEHANDSOME.COM(이하 “더한섬닷컴”)에서 제공하는 재화 또는 용역 서<br>비스(이하 “서비스”)를 이용함에 있어 “회사”와 이용자의 권리ㆍ의무 및 책임사<br>항을 규정함을 목적으로 합니다.</dd>
          <dd>※ PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.</dd>
        </dl>

        <dl>
          <dt class="cmp-font fnt-18">제2조 정의</dt>
          <dd>이 약관에서 사용하는 용어는 다음과 같이 정의합니다.<br>① "더한섬닷컴"이란 “회사”가 재화 또는 용역(이하 “재화 등”을 이용자에게 제<br>공하기 위하여 컴퓨터, 모바일 등 정보통신설비를 이용하여 “재화 등”을 거래할<br>수 있도록 설정한 가상의 영업장을 말하며, 아울러 “더한섬닷컴”을 운영하는 사업자의 으미로도 사용합니다.</dd>
          <dd>이 약관에서 사용하는 용어는 다음과 같이 정의합니다.<br>① "더한섬닷컴"이란 “회사”가 재화 또는 용역(이하 “재화 등”을 이용자에게 제공하기 위하여 컴퓨터, 모바일 등 정보통신설비를 이용하여 “재화 등”을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 “더한섬닷컴”을 운영하는 사업자의 으미로도 사용합니다.</dd>
          <dd>이 약관에서 사용하는 용어는 다음과 같이 정의합니다.<br>① "더한섬닷컴"이란 “회사”가 재화 또는 용역(이하 “재화 등”을 이용자에게 제공하기 위하여 컴퓨터, 모바일 등 정보통신설비를 이용하여 “재화 등”을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 “더한섬닷컴”을 운영하는 사업자의 으미로도 사용합니다.</dd>
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
