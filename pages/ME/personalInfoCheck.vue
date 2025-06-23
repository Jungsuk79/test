<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <ContentsLeftMenu :title="'마이페이지'" :left-data="menuList" :active="'/ko/ME/withdrawal'"></ContentsLeftMenu>
      <div class="my-page-r-box personalInfo-content">
          <div class="cmp-page-tit line">
            <h2 class="tit">비밀번호 변경</h2>

            <div class="cmp-page-txt">
              <p class="cmp-font fnt-20">새로운 비밀번호를 입력해주세요.</p>
            </div>
          </div>

          <div class="personal-info">
            <div class="info-center">
              <div class="cmp-form-boxGroup">
                <div class="cmp-form-box">
                  <p class="form-tit">신규 비밀번호</p>
                  <v-text-field v-model="model1" :rules="model1Rules" outlined type="password" label="신규 비밀번호를 입력해 주세요." clearable class="cmp-form-input"></v-text-field>
                </div>

                <div class="cmp-form-box">
                  <p class="form-tit">신규 비밀번호 확인</p>
                  <v-text-field outlined type="password" label="입력하신 비밀번호를 다시 한번 입력해 주세요." clearable class="cmp-form-input"></v-text-field>
                </div>
              </div>

              <div class="cmp-btnsArea">
                <v-btn disabled large block color="primary" class="width-360">확인</v-btn>
              </div>
            </div>
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
    model1Rules: [(v) => !!v || '비밀번호는 8~30자리 이하로 영문/숫자/특수문자를 혼합하여 사용해 주세요.'], // 수정 : 2022.07.15 문구수정
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
