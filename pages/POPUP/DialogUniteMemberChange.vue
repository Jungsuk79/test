<template>
  <DialogBasic
   class="popup-login" 
    header-title="H.Point 통합회원 전환 안내" 
    @hide="closeDialog">
    <template #body>
      <div class="simple-contents">
        <div class="contens-center">
          <p class="cmp-font fnt-18">고객님은 이미<br>H.Point 통합회원 계정이 있습니다.<br>간편회원을 통합회원으로 전환하셔야<br> 서비스를 이용하실 수 있습니다.<br>(통합 전환 미진행 시, 간편회원 로그인 제한)</p>
        </div>

       <div class="info-border-box col size2 pl-16 pr-16"><!-- [퍼블수정] 22.12.28  -->
        <div class="box">
          <dl class="line">
            <dt class="tit">H.Point 통합회원 아이디</dt>
            <dd class="txt">han*******</dd>
          </dl>
        </div>
      </div>

        <ul class="cmp-dotList mt-24">
          <li>기존 주문내역 통합이 진행됩니다.</li>
          <li>H.Point 통합회원으로 전환된 간편회원 계정은 삭제됩니다.</li>
        </ul>

        <div class="btn-box">
          <v-btn 
            large
            block
            color="primary">
           H.Point 통합회원 전환하기
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
    rodioModel1 : 0,
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
