<template>
  <DialogBasic class="btmfull-ver popup-hpont-join" header-title="H.Point Pay 가입" :width="540" @hide="closeDialog">
    <template #body>  
      <div class="inner">
        <section class="form-box">
          <p class="cmp-font fnt-20 mb-24">필수 약관에 동의해 주세요.</p>
          <div class="all-agree">
            <div class="chk-all">
              <v-checkbox class="cmp-form-checkbox" label="전체 동의하기"></v-checkbox>
            </div>
            <v-layout class="agree-chk-box">
              <v-checkbox class="cmp-form-checkbox agree-chk"></v-checkbox>
              <v-btn text class="open-btn">(필수) 전자금융거래 기본약관<i class="cmp-icon cmp-icon-12 i-next ml-2">약관보기</i></v-btn>
            </v-layout>
            <v-layout class="agree-chk-box">
              <v-checkbox class="cmp-form-checkbox agree-chk"></v-checkbox>
              <v-btn text class="open-btn">(필수) H.Point Pay 이용약관<i class="cmp-icon cmp-icon-12 i-next ml-2">약관보기</i></v-btn>
            </v-layout>
            <v-layout class="agree-chk-box">
              <v-checkbox class="cmp-form-checkbox agree-chk"></v-checkbox>
              <v-btn text class="open-btn">(필수) 개인정보 수집 및 이용 동의<i class="cmp-icon cmp-icon-12 i-next ml-2">약관보기</i></v-btn>
            </v-layout>
            <v-layout class="agree-chk-box">
              <v-checkbox class="cmp-form-checkbox agree-chk"></v-checkbox>
              <v-btn text class="open-btn">(필수) 개인정보 제3자 제공 동의<i class="cmp-icon cmp-icon-12 i-next ml-2">약관보기</i></v-btn>
            </v-layout>
            <v-layout class="agree-chk-box">
              <v-checkbox class="cmp-form-checkbox agree-chk"></v-checkbox>
              <v-btn text class="open-btn">(필수) 오픈뱅킹 제3자 제공 동의(은행)<i class="cmp-icon cmp-icon-12 i-next ml-2">약관보기</i></v-btn>
            </v-layout>
            <v-layout class="agree-chk-box">
              <v-checkbox class="cmp-form-checkbox agree-chk"></v-checkbox>
              <v-btn text class="open-btn">(필수) 개인정보 제3자 제공 동의(은행)<i class="cmp-icon cmp-icon-12 i-next ml-2">약관보기</i></v-btn>
            </v-layout>
          </div>
        </section>
      </div>
    </template>
    <template #footer>
      <v-btn large block color="primary">동의 후 계속</v-btn> 
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
