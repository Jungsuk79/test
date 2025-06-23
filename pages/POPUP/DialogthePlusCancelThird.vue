<template>
  <DialogBasic class="popup-thePlusPay third-ver" header-title="해지사유" :width="540" @hide="closeDialog">
    <template #body>
      <div class="cmp-sub-tit small">
        <h3 class="tit cmp-font fnt-18">어떤 점이 아쉬우셨을까요?</h3>
      </div>
      <p class="cmp-font fnt-14 c-gray">해지하시려는 사유을 알려주시면, 더 좋은 멤버십을 만드는데 도움이 됩니다.</p>
      <div class="mt-34">
        <v-radio-group v-model="radioModel" column class="cmp-form-radioGroup">
          <v-radio label="더플러스⁺ 혜택이 낮아서" class="cmp-form-radio" value="1"></v-radio>
          <v-radio label="이용요금이 비싸서" class="cmp-form-radio" value="2"></v-radio>
          <v-radio label="더한섬닷컴 쇼핑 횟수가 줄어서" class="cmp-form-radio" value="3"></v-radio>
          <v-radio label="플러스맵 매력이 떨어져서" class="cmp-form-radio" value="4"></v-radio>
          <div class="radio-etc">
            <v-radio label="기타의견" class="cmp-form-radio mb-10" value="etc"></v-radio>
            <v-textarea v-model="modeltext" outlined label="의견을 작성해 주세요. (최대 200자)" :no-resize="true" :rules="[modeltextRules.length(200)]" counter="200" maxlength="200" class="cmp-form-textarea counting"></v-textarea>   
          </div>
        </v-radio-group>
      </div>
      <div class="popup-btn-box">
        <v-btn outlined large color="primary">해지하기</v-btn>
        <v-btn large color="primary">유지하기</v-btn>
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
    radioModel: null,
    modeltext: '',
    modeltextRules: {
      length: (len) => (v) =>
        (v || '').length <= len || `최대 ${len}글자까지 입력 가능합니다.`,
    },
  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/order.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>
