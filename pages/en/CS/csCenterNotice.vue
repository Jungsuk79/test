<template>
  <div class="contents contents-type2">
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'Customer Center'" :left-data="menuList" :pageClass="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="cs-board-list notice">
            <div class="cmp-page-tit">
              <h2 class="tit">Notice</h2>
            </div>
            <div class="cmp-form-searchBox">
              <v-text-field label="Search notice" clearable class="cmp-form-input"></v-text-field>
              <v-btn icon>
                <i class="cmp-icon i-search">search</i>
              </v-btn>
            </div>

            <!-- [241204] 공지사항 게시글 수정 -->
            <div class="cmp-tabs tab-wrapType column05 my-30">
              <v-tabs fixed-tabs>
                <v-tab>NEWS</v-tab>
                <v-tab>EVENT</v-tab>
              </v-tabs>
            </div>

            <table class="table-type1 last-border table-list">
              <colgroup>
                <col width="auto" />
                <col width="138px" />
              </colgroup>
              <thead>
                <tr>
                  <th class="pw-16">Title</th>
                  <th>Date</th>
                </tr>
              </thead>
                <tbody>
                  <tr v-for="n in 20" :key="n">
                    <td class="text-left">
                      <nuxt-link to="#" class="">
                        <div :class="{'cmp-info info-type2': n<4}"> <!-- 최상단 고정게시물 클래스추가 cmp-info info-type2 -->
                          <p class="list-subject">Information on change of standard for using The Handsome.com monetary voucher.</p>
                        </div>
                      </nuxt-link>
                    </td>
                    <td class="text-center">
                      07 Feb. 2022
                    </td>
                  </tr>
                  <!-- 검색결과없음 -->
                  <!-- <tr>
                    <td colspan="2">
                      <CommonNoData msg="No search results."/>
                    </td>
                  </tr> -->
                  <!-- //검색결과없음 -->
                </tbody>
            </table>
            <div class="mt-40">
              <ProductListPaging />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'LayoutBasics',
  data: () => ({

  }),
  created() {
    const me = this
    const json = require('~/static/json/cs_left_menu_en.json')
    me.menuList = json.list
  },  
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/cs.scss';
</style>
