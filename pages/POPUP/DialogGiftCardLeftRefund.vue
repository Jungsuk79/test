<template>
  <DialogBasic
    class="popup-basic popup-leftRefund"
    header-title="e-money 잔액 환불 신청"
    @hide="closeDialog"
  ><!--20221018 e-Gift : 텍스트수정 -->
    <template #body>
      <v-form action="" class="refund-form">

        <!-- 환불 예정 금액 -->
        <dl class="expected-amount">
          <dt class="cmp-font fnt-16">환불 예정 금액</dt><!-- [퍼블수정]22.10.11 -->
          <dd><strong class="mr-2">18,760</strong>원</dd>
        </dl>

        <!-- [퍼블수정]22.10.11 -->
        <div class="input-item">
          <h3 class="cmp-font fnt-16 mb-10">김한섬(예금주)</h3><!-- [퍼블수정]23.01.09 -->
          <CommonSelectBox
            id="selectId0"
            title="타이틀"
            :disabled="false"
            error-text="validation 문구가 들어갑니다."
            class="form-input mb-10"
          >
            <template #optionList>
              <option value="placeholder">은행을 선택해주세요</option>
              <option value="option1">국민은행</option>
              <option value="option2">하나은행</option>
            </template>
          </CommonSelectBox>

          <v-text-field type="text" outlined clearable label="계좌번호 입력" class="cmp-form-input"></v-text-field> <!-- readonly속성 추가시 input 배경색 변경 됨 -->
          <p class="error--text cmp-font fnt-14 mt-6" >계좌번호가 올바르지 않습니다.</p>
          <v-checkbox
            v-model="checkboxModel"
            label="나의 환불계좌관리 저장하기"
            class="cmp-form-checkbox form-check mt-14"
          ></v-checkbox>
        </div>
        <!-- // [퍼블수정]22.10.11 -->

        <!-- 버튼 -->
        <div class="cmp-btnsArea mt-34"><!-- [퍼블수정]23.01.09 -->
          <v-btn block large color="primary">계좌 인증 및 환불 신청</v-btn>
        </div>

        <!-- 안내문구 -->
        <ul class="cmp-dotList mt-20">
          <li>잔액은 본인계좌로만 환불됩니다.</li>
          <li>최종 충전 후 합계 잔액의 60%이상 사용된 카드에 한해 고객 명의의 계좌로 환불신청이 가능합니다.</li>
          <li>잔액환불 신청 후 영업일 기준 7일 이내 신청하신 계좌로 잔액이 입금 됩니다.</li>
        </ul>

      </v-form>
    </template>
  </DialogBasic>
</template>
<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'
export default {
  components: { 
    DialogBasic 
  },
  data() {
    return {
      checkboxModel: false
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/giftCard.scss';
</style>
