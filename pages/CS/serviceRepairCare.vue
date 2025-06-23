<template>
  <v-layout class="contents contents-type2"><!--// 공통 class="contents", 해당 메뉴 전용 class="content-메뉴명", 해당 페이지 전용 class="content-페이지명" -->
    <div class="content-wrap content-cs">
      <ContentsLeftMenu :title="'고객센터'" :left-data="menuList" :page-class="'cs-menu'"></ContentsLeftMenu>
      <div class="my-page-r-box">
        <div class="cmp-page-tit">
          <h2 class="tit">케어플러스 수선</h2>
        </div>
        <RepairCare>
          <template #bottom>
            <v-layout justify-space-between class="cmp-btnsArea center-area">
              <v-btn large color="primary">케어플러스 수선 바로가기</v-btn>
            </v-layout>
          </template>
        </RepairCare>   
      </div>
    </div>
  </v-layout>
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
  created() {
    const me = this
    const json = require('~/static/json/cs_left_menu.json')
    me.menuList = json.list
  },
}
</script>
<style lang="scss" scoped>
</style>
