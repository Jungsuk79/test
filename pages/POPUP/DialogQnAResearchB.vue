<template>
  <DialogBasic
   class="popup-research" 
   :width="540"
    header-title="더한섬닷컴 상담서비스 만족도 조사" 
    @hide="closeDialog">
    <template #body>
      <div class="research-contents">
        <p class="cmp-font fnt-22">
          고객님께 보다 더 나은<br />상담서비스를 제공하기 위해<br />만족도 조사를 진행하고 있습니다.
        </p>
        <p class="cmp-font fnt-16 mt-20">
          본 조사는 1분 내외로 소요될 예정이니<br />고객님의 많은 참여 부탁드립니다. 감사합니다.
        </p>

        <!-- 친절도 -->
        <div class="cmp-form-box mt-40">
          <p class="cmp-font bold fnt-18">01. 친절도</p>
          <p class="cmp-font fnt-16 mt-2">통화하신 상담원은 친절하게 상담을 진행하였나요?</p>
          <v-layout row align-start justify-space-between class="form-guide-sub-cnt mt-20">
              <v-radio-group v-model="rodioModel0" column class="cmp-form-radioGroup">
                <v-radio label="매우 만족" class="cmp-form-radio"></v-radio>
                <v-radio label="만족" class="cmp-form-radio"></v-radio>
                <v-radio label="보통" class="cmp-form-radio"></v-radio>
                <v-radio label="불만족" class="cmp-form-radio"></v-radio>
                <v-radio label="매우 불만족" class="cmp-form-radio"></v-radio>
              </v-radio-group>
          </v-layout>
        </div>
        <!-- //친절도 -->

        <!-- 문제 해결능력 -->
        <div class="cmp-form-box mt-44">
          <p class="cmp-font bold fnt-18">02. 문제 해결능력</p>
          <p class="cmp-font fnt-16 mt-2">통화하신 상담원은 고객님의 문의를 빠르고 정확하게 해결하였나요?</p>
          <v-layout row align-start justify-space-between class="form-guide-sub-cnt mt-20">
              <v-radio-group v-model="rodioModel1" column class="cmp-form-radioGroup">
                <v-radio label="매우 만족" class="cmp-form-radio"></v-radio>
                <v-radio label="만족" class="cmp-form-radio"></v-radio>
                <v-radio label="보통" class="cmp-form-radio"></v-radio>
                <v-radio label="불만족" class="cmp-form-radio"></v-radio>
                <v-radio label="매우 불만족" class="cmp-form-radio"></v-radio>
              </v-radio-group>
          </v-layout>
        </div>
        <!-- //문제 해결능력 -->

        <!-- 만족도 -->
        <div class="cmp-form-box mt-44">
          <p class="cmp-font bold fnt-18">03. 만족도</p>
          <p class="cmp-font fnt-16 mt-2">더한섬닷컴 상담서비스는 만족스러우셨나요?</p>
          <v-layout row align-start justify-space-between class="form-guide-sub-cnt mt-20">
              <v-radio-group v-model="rodioModel2" column class="cmp-form-radioGroup">
                <v-radio label="매우 만족" class="cmp-form-radio"></v-radio>
                <v-radio label="만족" class="cmp-form-radio"></v-radio>
                <v-radio label="보통" class="cmp-form-radio"></v-radio>
                <v-radio label="불만족" class="cmp-form-radio"></v-radio>
                <v-radio label="매우 불만족" class="cmp-form-radio"></v-radio>
              </v-radio-group>
          </v-layout>
        </div>
        <!-- //만족도 -->

        <!-- 기타의견 -->
        <div class="cmp-form-box mt-44">
          <p class="cmp-font bold fnt-18">04. 기타의견</p>
          <p class="cmp-font fnt-16 mt-2">더한섬닷컴을 이용하시면서 불편한 점이나 개선할 점이 있으시면 자유롭게 의견 부탁드립니다.</p>
          <v-textarea 
            outlined :no-resize="true" 
            height="98" counter="1000" maxlength="1000" 
            label="내용을 입력해주세요."
            class="cmp-form-textarea counting">
          </v-textarea>
        </div>
        <!-- //기타의견 -->

        <div class="cmp-form-box mt-18">
          <v-checkbox v-model="isChkBox" label="(필수) 상기 만족도 조사를 진행하는데 동의합니다." class="cmp-form-checkbox"></v-checkbox>
          <v-btn large block color="primary" class="mt-18" :disabled="!isChkBox">설문 제출</v-btn>
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
    rodioModel0 : 1,
    rodioModel1 : 1,
    rodioModel2 : 1,
    isChkBox: false,

    // DialogBasic: false, // 팝업
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
