<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="find-content">
        <div class="cmp-page-tit center">
          <h2 class="tit">아이디 찾기</h2>
        </div>

        <div class="cmp-tabs tabs-actionTop">
          <v-tabs fixed-tabs v-model="tab">
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
                <p class="cmp-font fnt-18">회원가입 시 본인 명의 휴대폰 번호로 가입한 경우<br>본인여부를 확인합니다.</p>

                <div class="btn-box">
                  <v-btn 
                    large
                    color="primary"
                    class="width-360"
                    @click="accreditShow">
                    휴대폰 본인인증
                  </v-btn>
                </div>

                <ul class="cmp-dotList">
                  <li>입력하신 정보는 본인확인을 위해 나이스정보통신에 제공되며, 본인확인 용도 외에 사용되거나 저장되지 않습니다.</li>
                  <li>한섬회원 가입 시 휴대폰번호를 추가하지 않았거나 변경된 경우, 더한섬닷컴 고객센터 1800-5700(유료)으로 문의해 주세요.</li>
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
                <p class="cmp-font fnt-18">아이디 전체가 기억나지 않으신다면<br>고객센터 1800-5700(유료)으로 문의해 주세요.</p>

                <div class="info-border-box col size2">
                  <div class="box">
                    <dl class="line">
                      <dt class="tit">한섬회원 아이디</dt>
                      <dd class="txt">han*******</dd>
                    </dl>
                  </div>
                </div>

                <div class="btn-box">
                  <v-btn 
                    large
                    color="primary"
                    class="width-360">
                    로그인
                  </v-btn>
                </div>
              </div>
            </v-tab-item>
            <!--//E: 한섬회원-->

            <!--S:간편회원-->
            <v-tab-item :transition="false">
              <!--찾기 영역-->
              <div v-if="accredit2" class="conts-center-box">
                <p class="cmp-font fnt-18 mb-34">간편회원 가입 시<br>입력한 이름, 생년월일을 입력해 주세요.</p>

                  <div class="cmp-form-boxGroup">
                  <div class="cmp-form-box">
                    <v-text-field
                      label="이름을 입력해 주세요."
                      clearable
                      class="cmp-form-input"
                    ></v-text-field>
                  </div>

                  <div class="cmp-form-box">
                    <div class="cmp-form-colBox type2">
                      <CommonSelectBox id="birth000" title="년" class="type1" :error="formBoxErrorTest">
                        <template #optionList>
                          <option value="placeholder">연도</option>
                          <option>2000</option>
                          <option>2001</option>
                          <option>2002</option>
                        </template>
                      </CommonSelectBox>
                      <CommonSelectBox id="birth010" title="월" class="type1" :error="formBoxErrorTest">
                        <template #optionList>
                          <option value="placeholder">월</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </template>
                      </CommonSelectBox>
                      <CommonSelectBox id="birth020" title="일" class="type1" :error="formBoxErrorTest">
                        <template #optionList>
                          <option value="placeholder">일</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </template>
                      </CommonSelectBox>
                    </div>
                  </div>
                  </div>  

                  <div class="btn-box">
                  <v-btn 
                    large
                    color="primary"
                    class="width-360"
                    @click="accreditShow1">
                    아이디 찾기
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
   
              <!--결과 영역-->
              <div v-else class="conts-center-box">
                <p class="cmp-font fnt-18">다음 정보로 가입된 아이디가 <strong>총 2개</strong> 있습니다.</p>

                <div class="info-border-box cnt-line">
                  <div v-for="i in 2" :key="i" class="box">
                    <dl class="line">
                      <dt class="tit">구매자 이름</dt>
                      <dd class="txt">더한섬</dd>
                    </dl>
                    <dl class="line">
                      <dt class="tit">생년월일</dt>
                      <dd class="txt">1900-01-01</dd>
                    </dl>
                    <dl class="line">
                      <dt class="tit">아이디</dt>
                      <dd class="txt">han********@handsome.co.kr</dd>
                    </dl>
                  </div>
                </div>

                <div class="btn-box">
                  <v-btn 
                    large
                    color="primary"
                    class="width-360">
                    로그인
                  </v-btn>
                </div>

                <ul class="cmp-dotList wid-center">
                  <li>아이디 전체가 기억나지 않으신다면 더한섬닷컴 고객센터 1800-5700(유료)으로 문의해 주세요.</li>
                </ul>
              </div>

              <!--결과 영역 없는 경우
              <div class="conts-center-box">
                 <CommonNoData msg="가입 된 아이디가 없습니다."/>
                 <div class="btn-box">
                  <v-btn 
                    large
                    color="primary">
                    아이디 다시 찾기
                  </v-btn>
                </div>
                <ul class="cmp-dotList wid-center">
                  <li>도움이 필요하신 경우, 더한섬닷컴 고객센터 1800-5700(유료)으로 문의해 주세요.</li>
                </ul>
              </div> -->
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
    accredit1 : true, // 퍼블 화면 확인용
    accredit2 : true, // 퍼블 화면 확인용
    formBoxErrorTest: false,
  }),
  methods: {
    // 퍼블 화면 확인용 버튼 (찾기결과)
    accreditShow() {
      this.accredit1 = false
    },
    accreditShow1() {
      this.accredit2 = false
    },
  },
}
</script>
<style lang="scss" scoped>
 @import '@/assets/scss/pages/member.scss'; 
</style>
