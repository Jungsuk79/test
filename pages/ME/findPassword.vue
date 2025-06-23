<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="find-content">
        <div class="cmp-page-tit center">
          <h2 class="tit">비밀번호 찾기</h2>
        </div>

        <div class="cmp-tabs tabs-actionTop">
          <v-tabs v-model="tab" fixed-tabs>
            <v-tab>한섬회원</v-tab>
            <v-tab>간편회원</v-tab>
          </v-tabs>
        </div>

        <div class="tab-content">
          <v-tabs-items v-model="tab">
            <!--S: 한섬회원-->
            <v-tab-item :transition="false">
              <!--찾기 영역-->
              <div v-if="accredit1" class="conts-center-box">
               <div class="cmp-form-box conts-width">
                 <v-text-field v-model="model" :rules="modelRules" type="text" label="아이디를 입력해 주세요." clearable class="cmp-form-input error-btm0"></v-text-field><!-- [퍼블수정]22.12.27 error-btm0 추가 -->
               </div>

                <div class="btn-box">
                  <v-btn 
                    large
                    color="primary"
                    class="width-360"
                    @click="accreditShow">
                    휴대폰 본인인증
                  </v-btn>
                  <v-btn 
                    large
                    color="primary"
                    class="width-360">
                    아이핀(i-PIN) 인증
                  </v-btn>
                </div>

                <ul class="cmp-dotList">
                  <li>휴대폰 본인인증 진행 시 휴대폰번호로 임시 비밀번호를 전송합니다.</li>
                  <li>아이핀 본인인증 진행 시 회원정보에 휴대폰번호가 등록되지 않으신 경우, 아이디로 사용중이신 이메일주소로 임시 비밀번호가 전송됩니다.</li>
                  <li>입력하신 정보는 본인확인을 위해 나이스정보통신에 제공되며, 본인확인 용도 외에 사용되거나 저장되지 않습니다.</li>
                  <li>임시비밀번호로 로그인 후 비밀번호를 변경해주세요. 마이페이지 > 나의정보관리 > 개인정보변경에서 변경하실 수 있습니다.</li>
                </ul>

                <div class="hpoint-conts">
                  <p class="cmp-font fnt-18">H.Point 통합회원으로 가입하셨나요?</p>

                  <v-layout align-center class="v-layout-link">
                    <p><nuxt-link to="">아이디 찾기</nuxt-link></p>
                    <p><nuxt-link to="">비밀번호 찾기</nuxt-link></p>
                  </v-layout>
                </div>
              </div>

              <!--결과 영역-->
              <div v-else class="conts-center-box">
                <p class="cmp-font fnt-20">한섬회원 가입 정보가 없으세요.</p>
                <p class="cmp-font fnt-16">혹시 H.Point 통합회원이나 간편회원이실까요?</p>

                <div class="conts-line">
                  <ul class="cmp-dotList">
                    <li>H.Point 통합회원일 시, 하단의 아이디 찾기/비밀번호 찾기를 이용해 주세요.</li>
                    <li>간편회원일 시, 우측 상단 간편회원 탭을 이용해 주세요.</li>
                    <li>한섬회원 가입 시 휴대폰번호를 추가하지 않았거나 변경된 경우, 더한섬닷컴 고객센터 1800-5700(유료)으로 문의해 주세요.</li>
                  </ul>
                </div>

                <div class="hpoint-conts">
                  <p class="cmp-font fnt-18">H.Point 통합회원으로 가입하셨나요?</p>

                  <v-layout align-center class="v-layout-link">
                    <p><nuxt-link to="">아이디 찾기</nuxt-link></p>
                    <p><nuxt-link to="">비밀번호 찾기</nuxt-link></p>
                  </v-layout>
                </div>
              </div>
            </v-tab-item>
            <!--//E: 한섬회원-->

            <!--S:간편회원-->
            <v-tab-item :transition="false">
              <!--찾기 영역-->
                <div class="conts-center-box">
                  <p class="cmp-font fnt-18 mb-34">간편회원 가입 시<br>입력한 이름, 이메일을 입력해 주세요.</p>

                   <div class="cmp-form-boxGroup">
                    <div class="cmp-form-box">
                      <v-text-field
                        label="이름을 입력해 주세요."
                        clearable
                        class="cmp-form-input"
                      ></v-text-field>
                    </div>

                    <div class="cmp-form-box">
                     <v-text-field
                        v-model="model"
                        :rules="modelRules"
                        label="이메일을 입력해 주세요."
                        clearable
                        class="cmp-form-input"
                      ></v-text-field>
                    </div>
                   </div>  

                   <div class="btn-box">
                    <v-btn 
                      large
                      color="primary"
                      class="width-360">
                      비밀번호 찾기
                    </v-btn>
                  </div>

                  <div class="hpoint-conts">
                    <p class="cmp-font fnt-18">H.Point 통합회원으로 가입하셨나요?</p>

                    <v-layout align-center class="v-layout-link">
                      <p><nuxt-link to="">아이디 찾기</nuxt-link></p>
                      <p><nuxt-link to="">비밀번호 찾기</nuxt-link></p>
                    </v-layout>
                  </div>
                </div>
            </v-tab-item>
          </v-tabs-items>
          <!--//E: 간편회원-->
        </div>
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
    tab : null,
    model: '',
    modelRules: [(v) => !!v || '이름과 이메일을 입력해 주세요.'],
    accredit1 : true, // 퍼블 화면 확인용
    formBoxErrorTest: false,
  }),
  methods: {
    // 퍼블 화면 확인용 버튼 (찾기결과)
    accreditShow() {
      this.accredit1 = false
    },
  },
}
</script>
<style lang="scss" scoped>
 @import '@/assets/scss/pages/member.scss'; 
</style>
