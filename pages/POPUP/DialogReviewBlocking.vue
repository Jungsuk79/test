<template>
  <DialogBasic class="popup-reivew-blocking" header-title="상품평 신고" :width="380" @hide="closeDialog">
    <template #body>  
      <div class="full-width">
        <div class="pop-chk-box">
          <!-- [퍼블수정]23.02.22 차단 삭제 -->
          <div class="cmp-font fnt-18">상품평 신고 사유</div>
        </div>
        <!-- [퍼블수정]23.02.22 차단 삭제 -->
        <div class="contents-box bg-gray">
          <v-radio-group v-model="radioModel" column class="cmp-form-radioGroup" @change="radioChange">
            <v-radio label="상품과 관련 없는 내용" class="cmp-form-radio"></v-radio>
            <v-radio label="욕설, 비방, 명예훼손" class="cmp-form-radio"></v-radio>
            <v-radio label="폭력, 음란성, 반사회적" class="cmp-form-radio"></v-radio>
            <v-radio label="저작권 침해 및 개인정보 유출" class="cmp-form-radio"></v-radio>
            <v-radio label="개인 광고 및 상업적 홍보" class="cmp-form-radio"></v-radio>
            <v-radio label="중복되는 도배글" class="cmp-form-radio"></v-radio>
            <v-radio label="기타" class="cmp-form-radio"></v-radio>
            <div class="txtarea-cnt">
              <v-textarea v-model="textareaModel" maxlength="300" outlined :no-resize="true" label="추가로 제보하실 신고 사유를 작성해주세요." :disabled="radioModel!==6"  counter="300" height="130" class="cmp-form-textarea counting" />
            </div>
          </v-radio-group>
        </div>
      </div>

      <!-- [퍼블수정]23.02.22 차단 삭제 -->
      <ul class="cmp-dotList">
        <li>신고된 상품평은 내부 정책에 의거하여 조치될 예정입니다.</li>
      </ul>
    </template>
    <template #footer>
      <v-btn block large color="primary">
        신고 및 차단하기
      </v-btn>
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
    radioModel : 0,
    textareaModel : null,
   
  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
    radioChange(){
      const me = this
      if(me.radioModel!==6) me.textareaModel = null
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
