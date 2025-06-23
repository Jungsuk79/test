<template>
  <DialogBasic
   class="popup-login" 
    header-title="H.Point 통합회원 가입 안내" 
    @hide="closeDialog">
    <template #body>
      <div class="simple-contents">
        <div class="contens-center">
          <p class="cmp-font fnt-18">H.Point 통합회원으로 가입하고<br>통합회원만이 가지는 특별한 혜택을 누려보세요</p>
        </div>

        <div class="join-info">
          <ul>
            <li>
              <i class="cmp-icon cmp-icon-32 i-coupon">coupon</i>
              <p class="tit">신규회원 전용 5종 쿠폰 혜택!</p>
              <p class="txt">회원가입 즉시 최대 15% 할인 등 5종 쿠폰 혜택을<br>바로 누려보세요.</p>
            </li>
            <li>
              <i class="cmp-icon cmp-icon-32 i-hpoint">hpoint</i>
              <p class="tit">한섬마일리지 & H.Point 혜택!</p>
              <p class="txt">구매 시 최대 5% 마일리지 적립 혜택과<br>현대백화점그룹 H.Point를 동시에 받아보세요.</p>
            </li>
            <li>
              <i class="cmp-icon cmp-icon-32 i-benefit">benefit</i>
              <p class="tit">다양한 서비스들과 각종 혜택!</p>
              <p class="txt">더한섬닷컴의 다양한 서비스와 혜택까지 바로 이용해 보세요!</p>
            </li>
          </ul>
        </div>

        <div class="btn-box">
          <v-btn 
            large
            block
            color="primary">
            H.Point 통합회원 가입하기
          </v-btn>
        </div>

        <v-checkbox label="1주일동안 열지 않음" class="cmp-form-checkbox"></v-checkbox>
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
