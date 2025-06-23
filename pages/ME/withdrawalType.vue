<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <ContentsLeftMenu :title="'마이페이지'" :left-data="menuList" :active="'/ko/ME/withdrawal'"></ContentsLeftMenu>
      <div class="my-page-r-box personalInfo-content">
        <div class="cmp-page-tit line">
          <h2 class="tit">회원 탈퇴</h2>

          <div class="cmp-page-txt">
            <p class="cmp-font fnt-20">탈퇴 유형을 선택해 주세요.</p>
          </div>
        </div>
       
        <div class="personal-info">
          <div class="info-center">
            <ul class="withdraw-type">
              <li>
              <v-btn
                outlined
                large
                block
                color="primary"
                class="width-360">
                더한섬닷컴 탈퇴
              </v-btn>
              <p class="txt">더한섬닷컴만 탈퇴 (한섬 오프라인 매장/H패션몰/EQL 유지)</p>
            </li>
            <li>
              <v-btn
                outlined
                large
                block
                color="primary"
                class="width-360">
                한섬 통합멤버십 탈퇴
              </v-btn>
              <p class="txt">한섬 온라인(더한섬닷컴/H패션몰/EQL), 오프라인 매장 탈퇴</p>
            </li>
            <li>
              <v-btn
                outlined
                large
                block
                color="primary"
                class="width-360">
                H.Point 탈퇴
              </v-btn>
              <p class="txt">H.Point 현대백화점그룹 통합멤버십 제휴사 모두 탈퇴</p >
            </li>
            </ul>
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
