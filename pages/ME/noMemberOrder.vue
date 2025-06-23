<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="login-content nomember-order">
        <div class="cmp-page-tit center">
          <h2 class="tit">비회원 주문조회</h2>
        </div>

        <div class="cmp-form-boxGroup">
          <div class="cmp-form-box">
            <v-text-field type="text" label="주문번호를 입력해 주세요." clearable class="cmp-form-input"></v-text-field>
          </div>
          <div class="cmp-form-box">
            <v-text-field v-model="model" :rules="modelRules" type="text" label="비밀번호를 입력해 주세요." clearable class="cmp-form-input"></v-text-field>
          </div>
        </div>

        <v-btn 
          large
          color="primary"
          class="v-btn-login width-360">
          비회원 주문조회
        </v-btn>

        <v-layout justify-end class="cmp-right find-pw">
          <button @click="resultatShow">비회원 주문 비밀번호찾기</button>
        </v-layout>

        <ul class="cmp-dotList">
          <li>비회원으로 주문하신 경우에만 조회가 가능합니다.</li>
          <li>비밀번호를 분실하신 경우 비밀번호찾기를 이용하세요.</li>
          <li>주문번호 분실시 고객센터에 문의하시기 바랍니다.</li>
        </ul>

        <div v-if="resultat" class="find-pwbox">
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

        <v-btn 
          large
          outlined
          color="primary"
          class="v-btn-hpoint width-360">
          H.Point 통합회원 회원가입
        </v-btn>

       </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  layout: 'LayoutBasics',
  data: () => ({
    model: '',
    modelRules: [(v) => !!v || '주문번호 또는 비밀번호가 올바르지 않습니다.'],
    resultat : false,
  }),
  methods: {
     resultatShow(){
      this.resultat = true
    }
  },
}
</script>
<style lang="scss" scoped>
 @import '@/assets/scss/pages/member.scss'; 
</style>
