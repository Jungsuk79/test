<template>
  <DialogBasic
   class="popup-login" 
   :class="{'pb-0' : resultat === true}"
    header-title="비회원 주문조회" 
    @hide="closeDialog">
    <template #body>
      <div class="nomemember-contents">
        <div class="cmp-form-boxGroup">
           <div class="cmp-form-box">
            <v-text-field
              label="주문번호를 입력해 주세요."
              clearable 
              class="cmp-form-input"
            ></v-text-field>
          </div>
          <div class="cmp-form-box">
            <v-text-field
              v-model="model1"
              :rules="model1Rules" 
              label="비밀번호를 입력해 주세요."
              clearable 
              class="cmp-form-input"
            ></v-text-field>
          </div>
        </div>

        <div class="btn-box">
          <v-btn 
            large
            block
            color="primary">
           비회원 주문조회
          </v-btn>
        </div>

        <v-layout justify-end class="cmp-right">
          <button @click="resultatShow">비회원 주문 비밀번호찾기</button>
        </v-layout>
        
        <ul class="cmp-dotList">
          <li>비회원으로 주문하신 경우에만 조회가 가능합니다.</li>
          <li>비밀번호를 분실하신 경우 비밀번호찾기를 이용하세요.</li>
        </ul>

        <!--비밀번호 찾기 인증 후 노출영역-->
        <div v-if="resultat" class="resultat-inner">
          <p class="cmp-font fnt-16">비밀번호 찾기를 하시면 구매 시 입력하신 휴대폰<br>번호로 임시 비밀번호를 발송해 드립니다.</p>
          <div class="cmp-info info-type2">
            <span class="name">이름</span><span>더한섬</span>
          </div>

          <div class="cmp-form-box">
            <v-text-field
              label="주문번호를 입력해 주세요."
              clearable 
              class="cmp-form-input"
            ></v-text-field>
          </div>

           <div class="btn-box">
            <v-btn 
              large
              block
              disabled
              color="primary">
              임시 비밀번호 발송
            </v-btn>
          </div>
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
    model1: '',
    model1Rules: [(v) => !!v || '주문번호 또는 비밀번호가 올바르지 않습니다.'],
    resultat : false,
  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
     resultatShow(){
      this.resultat = true
    }
  },
}
</script>

<style lang="scss">
</style>
