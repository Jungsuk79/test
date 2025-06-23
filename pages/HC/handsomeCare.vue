<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <ContentsLeftMenu :title="'마이페이지'" :left-data="menuList"></ContentsLeftMenu>
      <div class="my-page-r-box">
        <div class="cmp-page-tit">
          <h2 class="tit">케어플러스 세탁 서비스 안내</h2>
        </div>
        <LaundryCare>
          <template #bottom>
            <v-layout justify-space-between class="cmp-btnsArea center-area">
                <v-btn outlined large color="primary">FAQ 바로가기</v-btn>
                <v-btn large color="primary">신청하기</v-btn>
            </v-layout>
          </template>
        </LaundryCare>
      </div>
    </div>
  </div>
</template>

<script>
import ContentsLeftMenu from '~/components/common/ContentsLeftMenu'
import LaundryCare from '~/components/handsomeCare/LaundryCare'

export default {
  components: {
    ContentsLeftMenu,
    LaundryCare
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
<style lang="scss" scoped></style>
