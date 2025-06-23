<template>
  <DialogBasic
   class="popup-enterShipping" 
    header-title="배송지 변경" 
    :width="540"
    @hide="closeDialog">
    <template #body>
      <div class="cmp-form-boxGroup">
        <!-- 수령인 -->
        <div class="cmp-form-box required">
          <p class="form-tit">수령인</p>
          <v-text-field v-model="model2" outlined type="text" value="홍길동" label="수령인 이름을 입력해 주세요." clearable class="cmp-form-input"></v-text-field>
        </div>
        <!-- //수령인 -->
        <!-- 휴대폰번호 -->
        <div class="cmp-form-box required" :class="{valid:formBoxErrorTest}">
          <p class="form-tit">휴대폰번호</p>
          <div class="cmp-form-colBox">
            <CommonSelectBox id="phoneSelect" title="앞자리 번호 선택">
              <template #optionList>
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="017">017</option>
                <option value="018">018</option>
                <option value="019">019</option>
              </template>
            </CommonSelectBox>
            <v-text-field type="text" outlined label="가운데 번호 입력" value="1234" clearable class="cmp-form-input label-hide" :error="formBoxErrorTest"></v-text-field>
            <v-text-field type="text" outlined label="뒷자리 번호 입력" value="5678" clearable class="cmp-form-input label-hide" :error="formBoxErrorTest"></v-text-field>
          </div>
          <p class="validation-text">필수항목 입니다</p>
        </div>
        <!-- //휴대폰번호 -->
        <!-- 연락처 -->
        <div class="cmp-form-box" :class="{valid:formBoxErrorTest}">
          <p class="form-tit">연락처</p>
          <div class="cmp-form-colBox">
            <CommonSelectBox id="phoneSelect" title="앞자리 번호 선택">
              <template #optionList>
                <option value="02">02</option>
                <option value="070">070</option>
              </template>
            </CommonSelectBox>
            <v-text-field type="text" outlined label="가운데 번호 입력" clearable class="cmp-form-input label-hide"></v-text-field>
            <v-text-field type="text" outlined label="뒷자리 번호 입력" clearable class="cmp-form-input label-hide"></v-text-field>
          </div>
          <p class="validation-text">validation 문구가 들어갑니다.</p>
        </div>
        <!-- //연락처 -->
        <!-- 이메일 -->
        <div class="cmp-form-box" :class="{valid:formBoxErrorTest}">
          <p class="form-tit">이메일</p>
          <div class="cmp-form-emailBox">
            <div class="email-box">
              <v-text-field label="이메일 입력" outlined clearable class="cmp-form-input label-hide" :error="formBoxErrorTest"></v-text-field>
              <div class="btw-txt">@</div>
              <CommonSelectBox id="selectId5" title="도메인 선택" @submit="dominFieldSet">
                <template #optionList>
                  <option value="placeholder">선택해 주세요</option>
                  <option value="naver.com">naver.com</option>
                  <option value="gmail.com">gmail.com</option>
                  <option value="daum.net">daum.net</option>
                  <option value="kakao.com">kakao.com</option>
                  <option value="nate.com">nate.com</option>
                  <option value="outlook.com">outlook.com</option>
                  <option value="hotmail.com">hotmail.com</option>
                  <option value="direct">직접입력</option>
                </template>
              </CommonSelectBox>
            </div>
            <v-text-field v-if="domainDirectFieldShow" outlined label="이메일을 입력해 주세요." clearable class="cmp-form-input" :error="formBoxErrorTest"></v-text-field>
          </div>
          <p class="validation-text">validation 문구가 들어갑니다.</p>
        </div>
        <!-- //이메일 -->
        <!-- 주소 -->
        <div class="cmp-form-box required" :class="{valid:formBoxErrorTest}">
          <p class="form-tit">배송지주소</p>
          <div class="cmp-form-addressBox">
            <div class="cmp-form-btnBox">
              <v-text-field type="text" value="" outlined label="우편번호를 입력해 주세요." clearable class="cmp-form-input"></v-text-field>
              <v-btn outlined color="normal">우편번호 찾기</v-btn>
            </div>
            <v-text-field type="text" value="" outlined label="주소를 입력해 주세요." clearable class="cmp-form-input"></v-text-field>
            <v-text-field type="text" value="" outlined label="상세 주소를 입력해 주세요." clearable class="cmp-form-input"></v-text-field>
          </div>
        </div>
        <!-- //주소 -->
        <!-- 배송 요청사항 (선택) -->
        <div class="cmp-form-box pb-4" :class="{valid:formBoxErrorTest}">
          <p class="form-tit mb-10">배송 요청사항 (선택)</p>
          <CommonSelectBox id="selectId5" title="도메인 선택" @submit="deliveryMsgInputSet">
            <template #optionList>
              <option value="placeholder">배송메세지를 선택해 주세요.</option>
              <option value="">배송 전 연락 바랍니다</option>
              <option value="">부재 시 문 앞에 놓아주세요</option>
              <option value="">부재 시 경비실에 맡겨주세요</option>
              <option value="">빠른 배송 부탁 드립니다</option>
              <option value="">부재 시 핸드폰으로 연락바랍니다</option>
              <option value="direct">직접입력</option>
            </template>
          </CommonSelectBox>
          <v-text-field v-if="deliveryMsgInput" outlined label="20자 이내로 입력하세요." clearable class="cmp-form-input" :error="formBoxErrorTest"></v-text-field>

          <CommonSelectBox title="공동현관 출입방법 선택" @submit="entranceWaySet">
            <template #optionList>
              <option value="placeholder">공동현관 출입번호를 선택해주세요.</option>
              <option value="pw">공동현관 출입번호</option>
              <option value="free">자유 출입 가능</option>
              <option value="etc">기타</option>
            </template>
          </CommonSelectBox>
          <v-text-field v-if="entranceWayPw" outlined label="10자 이내로 입력하세요." clearable class="cmp-form-input"></v-text-field>
          <v-text-field v-if="entranceWayEtc" outlined label="20자 이내로 입력하세요." clearable class="cmp-form-input"></v-text-field>
          <v-checkbox label="배송을 위해 공동현관 출입번호 제공에 동의합니다." class="cmp-form-checkbox"></v-checkbox>
        </div>
        <!-- //배송 요청사항 (선택) -->
        <!-- 유의사항 -->
        <ul class="cmp-dotList mt-20">
          <li>공동현관 출입번호가 정확하지 않을 경우, 배송기사의 판단에 따라 1층 공동현관 앞 또는 경비실에 배송될 수 있습니다.</li>
          <li>새벽배송 시 배송 전 연락을 드리지 않습니다.</li>
        </ul>
        <!-- //유의사항 -->
      </div>
      <div class="popup-btn-box">
        <v-btn large block color="primary">배송지 변경</v-btn> 
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
    model2: '',
    //  model2Rules: [(v) => !!v || '필수항목 입니다'],
    formBoxErrorTest: false,
    domainDirectFieldShow: false,
    deliveryMsgInput: false,
    entranceWayPw : false,
    entranceWayEtc : false,
  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
    dominFieldSet(val) {
      if (val === 'direct') this.domainDirectFieldShow = true
      else this.domainDirectFieldShow = false
    },
    deliveryMsgInputSet(val) {
      if (val === 'direct') this.deliveryMsgInput = true
      else this.deliveryMsgInput = false
    },
    entranceWaySet(val){
      if (val === 'pw') this.entranceWayPw = true
      else this.entranceWayPw = false

      if (val === 'etc') this.entranceWayEtc = true
      else this.entranceWayEtc = false
    }
  },
}
</script>

<style lang="scss">
</style>
