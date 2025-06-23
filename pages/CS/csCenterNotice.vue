<template>
  <div class="contents contents-type2">
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'고객센터'" :left-data="menuList" :page-class="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="cs-board-list notice">
            <div class="cmp-page-tit">
              <h2 class="tit">공지사항</h2>
            </div>
            <div class="cmp-form-searchBox">
              <v-text-field label="공지사항을 검색해 보세요" clearable class="cmp-form-input"></v-text-field>
              <v-btn icon>
                <i class="cmp-icon i-search">검색</i>
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
                  <th class="pw-16">제목</th><!-- 230109 고객센터 : 문구 변경 -->
                  <th>등록일</th>
                </tr>
              </thead>
                <tbody>
                  <!-- 상단고정 -->
                  <tr v-for="n in 20" :key="n">
                    <td class="text-left">
                      <nuxt-link to="#" class="">
                        <div :class="{'cmp-info info-type2': n<4}"> <!-- 최상단 고정게시물 클래스추가 cmp-info info-type2 -->
                          <p class="list-subject">더한섬닷컴 고객센터 상담문의 안내(하니톡 채팅상담 일시 중단)</p>
                        </div>
                      </nuxt-link>
                    </td>
                    <td class="text-center">
                      2022.11.16
                    </td>
                  </tr>
                  <!-- //상단고정 -->
                  <!-- 검색결과없음 -->
                  <!-- <tr>
                    <td colspan="2">
                      <CommonNoData msg="검색결과가 없습니다."/>
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
    const json = require('~/static/json/cs_left_menu.json')
    me.menuList = json.list
  },  
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/cs.scss';
</style>
