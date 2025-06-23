<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <ContentsLeftMenu :title="'마이페이지'" :left-data="menuList" :active="'/ko/ME/withdrawal'"></ContentsLeftMenu>
      <div class="my-page-r-box personalInfo-content">
        <div class="cmp-page-tit line">
          <h2 class="tit">회원 탈퇴</h2>

          <div class="cmp-page-txt">
            <p class="cmp-font fnt-20">탈퇴 사유를 선택해 주세요.</p>
          </div>
        </div>

        <div class="personal-info line-bottom">
          <ul class="withdraw-form">
            <li>
              <h3>개인정보 관련</h3><!--20220930 수정-->
              <div class="cmp-form-chkGroup col">
                <v-checkbox label="아이디 변경을 위해 탈퇴 후 재가입" class="cmp-form-checkbox"></v-checkbox>
                <v-checkbox label="장기간 부재 (군입대, 유학 등)" class="cmp-form-checkbox"></v-checkbox>
                <v-checkbox label="개인정보 유출우려" class="cmp-form-checkbox"></v-checkbox>
              </div>
            </li>

            <li>
              <h3>사이트 이용 관련</h3><!--20220930 수정-->
              <div class="cmp-form-chkGroup col">
                <v-checkbox label="컨텐츠 등 이용할 만한 서비스 부족" class="cmp-form-checkbox"></v-checkbox>
                <v-checkbox label="사이트 이용불편" class="cmp-form-checkbox"></v-checkbox>
                <v-checkbox label="이용빈도 낮음" class="cmp-form-checkbox"></v-checkbox>
                <v-checkbox label="실질적인 혜택 부족" class="cmp-form-checkbox"></v-checkbox>
              </div>
            </li>

            <li>
              <h3>서비스 이용 관련</h3><!--20220930 수정-->
              <div class="cmp-form-chkGroup col">
                <v-checkbox label="상품의 다양성/품질불만" class="cmp-form-checkbox"></v-checkbox>
                <v-checkbox label="상품 가격불만" class="cmp-form-checkbox"></v-checkbox>
                <v-checkbox label="배송불만" class="cmp-form-checkbox"></v-checkbox>
                <v-checkbox label="교환/환불/반품불만" class="cmp-form-checkbox"></v-checkbox>
                <v-checkbox label="사후조치 불만" class="cmp-form-checkbox"></v-checkbox>
              </div>
            </li>
          </ul>
        </div>

        <div class="cmp-bottom-btns">
          <v-btn large color="primary">회원탈퇴</v-btn>
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
