<template>
  <div class="contents contents-type2">
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'고객센터'" :left-data="menuList" :page-class="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="onetoone-list">
            <div class="cmp-page-tit">
              <h2 class="tit">1:1 문의</h2>
            </div>

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

            <div class="mt-30 mb-18 text-right">
              <nuxt-link class="cmp-font button fnt-16" to="#n">문의하기<i class="cmp-icon cmp-icon-16 i-next"></i></nuxt-link><!-- [개발확인]22.12.12 -->
            </div>

              <table class="table-type1 last-border">
                <colgroup>
                  <col width="114px" />
                  <col width="auto" />
                  <col width="138px" />
                  <col width="120px" /><!-- 220914 고객센터 수정 -->
                </colgroup>
                <thead>
                  <tr>
                    <th class="pw-16">유형</th>
                    <th class="pw-16">제목</th>
                    <th>등록일</th>
                    <th>상태</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-left">
                      <div class="cmp-labels">
                        <div class="label black">결제/환불 문의</div>
                      </div>
                    </td>
                    <td class="text-left">
                      <nuxt-link to="" class="overflow-ellipsis">
                        더한섬닷컴 고객센터 상담문의 안내(하니톡 채팅상담 일시 중단)
                        더한섬닷컴 고객센터 상담문의 안내(하니톡 채팅상담 일시 중단)
                      </nuxt-link>
                    </td>
                    <td class="text-center">
                      <p class="cmp-font fnt-14">2021.06.15</p>
                    </td>
                    <td class="text-center">
                      <div class="cmp-labels">
                        <div class="label">답변완료</div>
                      </div>
                    </td>
                  </tr>
                  <tr v-for="n in 19" :key="n">
                    <td class="text-left">
                      <div class="cmp-labels">
                        <div class="label black">현대카드 레드바우처</div>
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
                        <div class="label c-blue">처리중</div>
                        <!-- [개발확인]22.12.12 라벨 참고
                        <div class="label">접수완료</div>
                        <div class="label">답변완료</div>
                        <div class="label c-blue">처리중</div> -->
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
