<template>
  <DialogBasic class="popup-orderRequest" header-title="배송 요청사항" :width="540" @hide="closeDialog">
    <template #body>  
      <!-- 택배사 선택 -->
      <div class="cmp-sub-tit small">
        <h3 class="tit">택배사 선택</h3>
      </div>
      <v-layout row align-center class="delivery-select">
        <div class="item post-office">
          <input id="postOffice" v-model="deliverySelectValue" type="radio" name="deliverySelect" value="postOffice">
          <label for="postOffice">
            <span class="label-txt">우체국 선택</span>
            <span class="txt">월~토 배송</span>
          </label>
        </div>
        <div class="item cj">
          <input id="CJ" v-model="deliverySelectValue" type="radio" name="deliverySelect" value="CJ">
          <label for="CJ">
            <span class="label-txt">CJ 선택</span>
            <span class="txt">월~<span class="c-red">일</span> 배송</span>
          </label>
        </div>
      </v-layout>
      <ul class="cmp-dotList mt-24">
        <li>택배사의 배송비와 예상 배송일은 동일하며, 평소 선호하시는 택배사를 선택해주세요.</li>
        <li>우체국은 일요일 배송이 불가하며, 택배사 사정으로 배송업체가 변경될 수 있습니다.</li>
        <li><span class="txt-bold">도서산간 및 제주도</span>는 <span class="txt-bold">우체국 택배</span>만 배송 가능합니다.</li>
      </ul>
      <!-- //택배사 선택 -->

      <!-- 배송메시지 -->
      <div class="cmp-sub-tit small">
        <h3 class="tit">배송 메시지</h3>
      </div>
      <v-radio-group v-model="messageSelect" class="cmp-form-radioGroup">
        <v-radio class="cmp-form-radio" label="배송메세지를 선택해 주세요."></v-radio>
        <v-radio class="cmp-form-radio" label="배송 전 연락 바랍니다."></v-radio>
        <v-radio class="cmp-form-radio" label="부재 시 문 앞에 놓아주세요."></v-radio>
        <v-radio class="cmp-form-radio" label="부재 시 경비실에 맡겨주세요."></v-radio>
        <v-radio class="cmp-form-radio" label="빠른 배송 부탁드립니다."></v-radio>
        <v-radio class="cmp-form-radio" label="부재 시 핸드폰으로 연락바랍니다."></v-radio>
        <v-radio class="cmp-form-radio" label="직접입력"></v-radio>
        <v-text-field 
          v-model="directMessage" 
          label="20자 이내 입력" type="text" outlined 
          :disabled="messageSelect!==6" 
          clearable 
          class="cmp-form-input">
        </v-text-field>
      </v-radio-group>
      <!-- //배송메시지 -->

      <!-- 출입방법 -->
      <div class="cmp-sub-tit small">
        <h3 class="tit">공동현관 출입방법</h3>
      </div>
      <v-radio-group v-model="enterSelect" class="cmp-form-radioGroup">
        <v-radio class="cmp-form-radio" label="공동현관 출입번호"></v-radio>
        <v-text-field 
          v-model="enterPw" 
          label="10자 이내 입력" type="text" outlined 
          :disabled="enterSelect!==0" 
          clearable 
          class="cmp-form-input">
        </v-text-field>
        <v-radio class="cmp-form-radio" label="자유 출입 가능"></v-radio>
        <v-radio class="cmp-form-radio" label="기타"></v-radio>
        <v-text-field 
          v-model="enterMessage" 
          label="20자 이내 입력" 
          type="text" outlined 
          :disabled="enterSelect!==2" 
          clearable 
          class="cmp-form-input">
        </v-text-field>
      </v-radio-group>
      <v-checkbox v-model="commonEntranceAgree" label="배송을 위해 공동현관 출입번호 제공에 동의합니다." class="cmp-form-checkbox" />
      <ul v-if="commonEntranceAgree" class="cmp-dotList mt-20">
        <li>공동현관 출입번호가 정확하지 않을 경우, 배송 기사의 판단에 따라 1층 공동현관 앞 또는 경비실에 배송 될 수 있습니다.</li>
        <li>새벽배송 시 배송 전 연락을 드리지 않습니다.</li>
      </ul>
      <!-- //출입방법 -->
      <div class="border-cnt">
        <v-checkbox label="지금 선택한 배송 요청사항을 다음에도 사용합니다." class="cmp-form-checkbox" />
        <v-btn large block color="primary">확인</v-btn>
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
    deliverySelectValue : 'postOffice',
    messageSelect : 0,
    directMessage : '',
    enterSelect : null,
    enterPw:'',
    enterMessage:'',
    commonEntranceAgree : false,
  }),
  watch: {
    messageSelect(){
      const me = this
      if(me.messageSelect !== 6) me.directMessage=''
    },
    enterSelect(){
      const me = this
      if(me.enterSelect !== 0) me.enterPw=''
      if(me.enterSelect !== 2) me.enterMessage=''
    },
  },
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped></style>
