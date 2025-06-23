<template>
  <DialogBasic
   class="popup-login no-closeBtn" 
    header-title="간편회원 휴대폰 인증" 
    @hide="closeDialog"><!--20221012 클래스추가-->
    <template #body>
      <div class="simple-contents">
        <div class="contens-center">
          <p class="cmp-font fnt-18">더한섬닷컴의 회원 정책 변경에 따라<br>간편회원 로그인 시, 최초 1회 휴대폰<br>본인인증이 필요합니다.</p>
          <p class="cmp-font fnt-18 mt-8">간편회원 아이디가 여러 개인 경우,<br>하나로 통합해 주세요.</p>
        </div>

        <!--20221012 수정-->
        <ul class="cmp-dotList mt-34">
          <li>휴대폰 인증 후 간편회원 아이디 통합이 이어서 진행됩니다. 간편회원 아이디 통합을 거부하실 경우, 처음으로 휴대폰 인증을 받은 간편회원 아이디로만 로그인 하실 수 있습니다.</li>
          <li>다른 간편회원 아이디로 통합을 원하시면 다시 로그인해 주세요.</li>
          <li>H.Point 통합회원인 경우, 간편회원 아이디를 H.Point 통합회원으로 전환하여 온/오프라인 마일리지, 쿠폰 등 다양한 혜택을 제공받으실 수 있습니다.</li>
        </ul>

        <div class="btn-box">
          <v-btn 
            large
            block
            color="primary">
           휴대폰 본인인증하기
          </v-btn>
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
