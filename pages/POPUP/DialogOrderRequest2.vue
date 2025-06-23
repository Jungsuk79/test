<template>
  <DialogBasic class="popup-orderRequest" header-title="배송 요청사항" :width="540" @hide="closeDialog">
    <template #body>  
      <!-- 배송메시지 -->

      <div>
        <div class="cmp-sub-tit small">
          <h3 class="pop-tit">배송일 선택</h3>
        </div>
        <v-checkbox v-model="selectDateCheck" class="cmp-form-checkbox">
          <template #label>
            <span class="v-label"><span class="txt-bold">선택시, 일요일 제외</span>하여 받아보실 수 있습니다.</span>
          </template>
        </v-checkbox>
        <ul class="cmp-list list-dotType mt-16">
          <li>택배사 사정으로 배송 일정이 달라질 수 있습니다.</li>
        </ul>
      </div>

      <div class="border-cnt">
        <div class="cmp-sub-tit small">
          <h3 class="tit">배송 메세지</h3>
        </div>
        <v-radio-group v-model="messageSelect" class="cmp-form-radioGroup">
          <v-radio class="cmp-form-radio" label="메시지를 선택해 주세요.."></v-radio>
          <v-radio class="cmp-form-radio" label="수거/수령 전 연락 바랍니다."></v-radio>
          <v-radio class="cmp-form-radio" label="문 앞에 둘게요. / 문 앞에 놓아주세요."></v-radio>
          <v-radio class="cmp-form-radio" label="경비실에 맡겨 둘게요. / 경비실에 맡겨주세요."></v-radio>
          <v-radio class="cmp-form-radio" label="빠른 수거/배송 부탁드립니다."></v-radio>
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
      </div>
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
        <!-- <v-checkbox label="지금 선택한 배송 요청사항을 다음에도 사용합니다." class="cmp-form-checkbox"></v-checkbox> -->
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
    selectDateCheck: false,

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
