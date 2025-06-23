<template>
  <div class="contents contents-type2">
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'Customer Center'" :left-data="menuList" :pageClass="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="onetoone-list">
            <div class="cmp-page-tit">
              <h2 class="tit">1:1 Query</h2>
            </div>

            <v-layout row align-center justify-space-between>
              <div class="cmp-line-radio">
                <div class="radio-item">
                  <input id="dateRadio0" type="radio" name="dateRadio" checked />
                  <label for="dateRadio0">1 week</label>
                </div>
                <div class="radio-item">
                  <input id="dateRadio1" type="radio" name="dateRadio" />
                  <label for="dateRadio1">1 month</label>
                </div>
                <div class="radio-item">
                  <input id="dateRadio2" type="radio" name="dateRadio" />
                  <label for="dateRadio2">3 months</label>
                </div>
              </div>
              <CommonCalendarBox :d1="'2022-07-20'" :d2="'2022-07-28'"/>
            </v-layout>

            <div class="mt-30 mb-18 text-right">
              <nuxt-link class="cmp-font button fnt-16" to="#n">Inquire<i class="cmp-icon cmp-icon-16 i-next"></i></nuxt-link>
            </div>

              <table class="table-type1 last-border">
                <colgroup>
                  <col width="151px" />
                  <col width="auto" />
                  <col width="138px" />
                  <col width="104px" />
                </colgroup>
                <thead>
                  <tr>
                    <th class="pw-16">Type</th>
                    <th class="pw-16">Title</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="n in 20" :key="n">
                    <td class="text-left">
                      <div class="cmp-labels">
                        <div class="label black">
                          <template v-if="n===1">Coupon / Promotion</template>
                          <template v-else-if="n===2">Order Confirm / Cancel</template>
                          <template v-else-if="n===3">Item Query</template>
                          <template v-else-if="n===4">Shipping</template>
                          <template v-else-if="n===5">Return</template>
                          <template v-else-if="n===6">ETC</template>
                          <template v-else>Event</template>
                        </div>
                      </div>
                    </td>
                    <td class="text-left">
                      <nuxt-link to="" class="overflow-ellipsis">
                        I am wondering when the refund will be deposited after the request for a refund.
                      </nuxt-link>
                    </td>
                    <td class="text-center">
                      <p class="cmp-font fnt-14">26 Apr. 2022</p>
                    </td>
                    <td class="text-center">
                      <div class="cmp-labels">
                        <div v-if="n===1" class="label">Replied</div>
                        <div v-else class="label c-blue">In Progress</div>
                      </div>
                    </td>
                  </tr>
                  <!-- 내역없음 -->
                  <!-- <tr>
                    <td colspan="4">
                      <CommonNoData msg="There are no registered 1:1 inquiries."/>
                    </td>
                  </tr> -->
                  <!-- //내역없음 -->
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
