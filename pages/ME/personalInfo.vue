<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <ContentsLeftMenu :title="'마이페이지'" :left-data="menuList" :active="'/ko/ME/withdrawal'"></ContentsLeftMenu>
      <div class="my-page-r-box personalInfo-content">
        <div class="cmp-page-tit line mb-20"><!-- [퍼블수정]22.12.30 -->
          <h2 class="tit">개인정보 수정</h2>
        </div>

        <div class="personal-info line-bottom">
          <p class="text-right cmp-font fnt-14"><span class="c-red mr-4">*</span>필수입력정보</p><!-- [퍼블수정]22.12.30 -->
          <div class="info-center form-width">
            <div class="cmp-form-boxGroup">
              <div class="cmp-form-box">
                <p class="form-tit">아이디</p>
                <v-text-field outlined disabled type="text" value="the********" label="아이디를 입력해 주세요." clearable class="cmp-form-input" ></v-text-field>
              </div>

              <div class="cmp-form-box">
                <p class="form-tit">이름<span class="right-txt">개명 시 1:1 문의 접수로 변경 가능</span></p>
                <v-text-field outlined disabled type="text" value="더*섬" label="이름을 입력해 주세요." clearable class="cmp-form-input" ></v-text-field>
              </div>

              <div class="cmp-form-box required">
                <p class="form-tit">비밀번호</p>
                <div class="cmp-form-btnBox">
                  <v-text-field outlined type="password" value="******"  label="비밀번호를 입력해 주세요." clearable class="cmp-form-input"></v-text-field>
                  <v-btn outlined color="normal">변경</v-btn>
                </div>
              </div>

              <div class="cmp-form-box required">
                <p class="form-tit">휴대폰번호</p>
                <div class="cmp-form-colBox"><!--20220930 클래스수정 -->
                  <v-layout row class="cmp-form-colBox">
                    <v-text-field type="text" value="010" outlined label="앞자리 번호 입력" clearable class="cmp-form-input"></v-text-field>
                    <v-text-field type="password" value="1234" outlined label="가운데 번호 입력"  clearable class="cmp-form-input"></v-text-field>
                    <v-text-field type="text" value="1234" outlined label="뒷자리 번호 입력" clearable class="cmp-form-input"></v-text-field>
                    
                    <v-btn outlined color="normal" :disabled="false">인증</v-btn>
                  </v-layout>
                </div>
              </div>

              <!--20220930 생년월일 추가 -->
              <div class="cmp-form-box required">
                <p class="form-tit">생년월일</p>
                <div class="cmp-form-colBox cmp-form-birthBox">
                  <CommonSelectBox id="birth000" title="년">
                    <template #optionList>
                      <option value="placeholder">연도</option>
                      <option>2000</option>
                      <option>2001</option>
                      <option>2002</option>
                    </template>
                  </CommonSelectBox>
                  <CommonSelectBox id="birth010" title="월">
                    <template #optionList>
                      <option value="placeholder">월</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </template>
                  </CommonSelectBox>
                  <CommonSelectBox id="birth020" title="일">
                    <template #optionList>
                      <option value="placeholder">일</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </template>
                  </CommonSelectBox>
                </div>
              </div>
              <!--//20220930 생년월일 추가 -->

              <div class="cmp-form-box cmp-form-addressBox"><!-- 20220930 수정 -->
                <p class="form-tit">주소</p>
                <div class="cmp-form-btnBox">
                  <v-text-field type="text" value="05402" outlined :disabled="false" label="우편번호를 입력해 주세요." clearable class="cmp-form-input"></v-text-field>
                  <v-btn outlined height="42" color="normal" :disabled="false">우편번호 찾기</v-btn>
                </div>
                <v-text-field type="text" value="서울특별시 강동구 강동대로 195" :disabled="false" outlined label="주소를 입력해 주세요." clearable class="cmp-form-input"></v-text-field>
                <v-text-field type="text" value="한섬빌딩" outlined :disabled="false" label="상세 주소를 입력해 주세요." clearable class="cmp-form-input"></v-text-field>
                <v-checkbox v-model="chkModel1" label="기본배송지로 설정" :disabled="false" class="cmp-form-checkbox"></v-checkbox>
              </div>

              <div v-if="chkModel1" class="cmp-form-box required">
                <p class="form-tit">배송지명</p>
                <v-text-field outlined type="text" label="배송지명을 입력해 주세요." clearable class="cmp-form-input"></v-text-field>
              </div>

              <div class="cmp-form-box required"><!-- 20220930 수정 -->
                <p class="form-tit">이메일</p>
                <v-text-field outlined type="text" value="The*********@handsome.co.kr" label="이메일 입력" clearable class="cmp-form-input label-hide" disabled></v-text-field>
              </div>
            </div>

            <div class="editInfo-info">
              <p class="cmp-font fnt-18">마케팅 정보 수신동의</p>
              <p class="cmp-font fnt-14">더한섬닷컴 공지사항 및 특별한 이벤트 소식을 받아보실 수 있습니다.</p>
              <p class="cmp-font fnt-14 c-red">단, 가입 및 주문/결제와 재입고 알림 등에 관련된 이메일 및 SMS는 동의와 상관 없이 발송 됩니다.</p>
              <v-layout row align-center>
                <v-checkbox label="이메일" class="cmp-form-checkbox" />
                <v-checkbox label="SMS" class="cmp-form-checkbox" />
              </v-layout>
            </div>
          </div>
        </div>

        <!-- [퍼블수정]23.02.13 개인정보 제공동의 삭제 -->

        <div class="cmp-bottom-btns">
          <v-btn outlined large color="primary">회원탈퇴</v-btn>
          <v-btn large color="primary">저장</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentsLeftMenu from '~/components/common/ContentsLeftMenu'
export default {
  components: {
    ContentsLeftMenu
  },
  layout: 'LayoutBasics',
  data: () => ({
    model1: '',
    model1Rules: [(v) => !!v || '입력하신 비밀번호가 올바르지 않습니다.'],
    chkModel1 : false,
  }),
  created() {
    const me = this
    const json = require('~/static/json/mypage_left_menu.json')
    me.menuList = json.list
  },
  methods: {
   
  },
}
</script>
<style lang="scss" scoped>
 @import '@/assets/scss/pages/member.scss'; 
</style>
