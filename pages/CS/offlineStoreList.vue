<template>
  <div class="contents contents-type2">
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'고객센터'" :left-data="menuList" :active="'/ko/CS/offlineStore'" :page-class="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="onetoone-list">
            <div class="cmp-page-tit">
              <h2 class="tit">오프라인 매장 문의</h2>
            </div>
            
            <!-- 221206 매장문의 : 기간 검색 추가 -->
            <v-layout row align-center justify-space-between>
              <div class="cmp-line-radio">
                <div class="radio-item">
                  <input id="dateRadio0" type="radio" name="dateRadio" checked />
                  <label for="dateRadio0">1주일</label>
                </div>
                <div class="radio-item">
                  <input id="dateRadio1" type="radio" name="dateRadio" />
                  <label for="dateRadio1">1개월</label>
                </div>
                <div class="radio-item">
                  <input id="dateRadio2" type="radio" name="dateRadio" />
                  <label for="dateRadio2">3개월</label>
                </div>
              </div>
              <CommonCalendarBox />
            </v-layout>
            <!-- // 221206 매장문의 : 기간 검색 추가 -->
            <div class="mt-30 mb-18 text-right"><!-- 221206 매장문의 : mt-30 클래스 추가 -->
              <nuxt-link class="cmp-font button fnt-16" to="#n">문의하기<i class="cmp-icon cmp-icon-16 i-next"></i></nuxt-link>
            </div>

              <table class="table-type1 last-border"><!-- 220914 고객센터 수정 -->
                <colgroup>
                  <col width="72px" />
                  <col width="auto" />
                  <col width="138px" />
                  <col width="144px" />
                </colgroup>
                <thead>
                  <tr>
                    <th class="pw-0">유형</th>
                    <th class="pw-16">제목</th>
                    <th>등록일</th>
                    <th>상태</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="n in 20" :key="n">
                    <td class="pw-0 text-center">
                      <div class="cmp-labels">
                        <div class="label black">제안</div>
                      </div>
                    </td>
                    <td class="text-left">
                      <nuxt-link to="">
                        현대카드 레드바우처 사용 시 혜택이 궁금합니다. 한섬마일리지 중복 혜택이 가능한가요?
                      </nuxt-link>
                    </td>
                    <td class="text-center">
                      <p class="cmp-font fnt-14">2021.06.15</p>
                    </td>
                    <td class="text-center">
                      <div class="cmp-labels">
                        <!-- CASE 별 (디자인확인용) -->
                        <template v-if="n===1">
                          <div class="label">접수완료</div>
                        </template>
                        <template v-else-if="n===2">
                          <div class="label c-blue">처리중</div>
                        </template>
                        <template v-else-if="n===3">
                          <div class="label">답변완료</div>
                        </template>
                        <template v-else-if="n===4">
                          <div class="label">재문의 접수완료</div>
                        </template>
                        <template v-else-if="n===5">
                          <div class="label c-blue">재문의 처리중</div>
                        </template>
                        <template v-else>
                          <div class="label">재문의 답변완료</div>
                        </template>
                        <!-- //CASE 별 (디자인확인용) -->
                      </div>
                    </td>
                  </tr>
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
