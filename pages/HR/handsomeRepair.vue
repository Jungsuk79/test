<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <ContentsLeftMenu :title="'마이페이지'" :left-data="menuList"></ContentsLeftMenu>
      <div class="my-page-r-box contents-handsomecare">
        <div class="cmp-page-tit">
          <h2 class="tit">케어플러스 수선 서비스 안내</h2>
        </div>
        <RepairCare>
          <template #bottom>
            <v-layout justify-space-between class="cmp-btnsArea center-area">
                <v-btn outlined large color="primary">FAQ 바로가기</v-btn>
                <v-btn large color="primary">신청하기</v-btn>
            </v-layout>
          </template>
        </RepairCare>
      </div>
    </div>
  </div>
</template>

<script>
import ContentsLeftMenu from '~/components/common/ContentsLeftMenu'
import RepairCare from '~/components/handsomeCare/RepairCare'


export default {
  components: {
    ContentsLeftMenu,
    RepairCare
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
  @import '@/assets/scss/pages/mypage.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
