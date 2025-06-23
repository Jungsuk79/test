<template>
  <div class="contents contents-type2">
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'Customer Center'" :left-data="menuList" :pageClass="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="cs-faq">
            <div class="cmp-page-tit">
              <h2 class="tit">FAQs</h2>
            </div>
            <div class="cmp-form-searchBox">
              <v-text-field label="Please search if you have any questions." clearable class="cmp-form-input"></v-text-field>
              <v-btn icon>
                <i class="cmp-icon i-search">search</i>
              </v-btn>
            </div>
            <!-- [퍼블수정]23.02.14 br 태그 삭제 -->
            <div class="cmp-tabs tab-wrapType column06 my-30">
              <v-tabs fixed-tabs>
                <v-tab>All</v-tab>
                <v-tab>Order Delivery</v-tab>
                <v-tab>Refund</v-tab>
                <v-tab>Return</v-tab>
                <v-tab>Coupon Benefit</v-tab>
                <v-tab>Product Inquiry</v-tab>
                <v-tab>Site Use</v-tab>
                <v-tab>Other</v-tab>
              </v-tabs>
            </div>
            <div class="product-row-table">
              <table>
                <colgroup>
                  <col width="106px" />
                  <col width="auto" />
                  <col width="48px"/>
                </colgroup>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th class="pw-16">Title</th>
                    <th class="pw-0"><span class="ir">Close</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="3"  class="inside-table">
                      <v-expansion-panels accordion class="cmp-acc">
                        <v-expansion-panel v-for="n in 20" :key="n">
                          <v-expansion-panel-header>
                            <table>
                              <colgroup>
                                <col width="106px"/>
                                <col width="auto"/>
                                <col width="48px"/>
                              </colgroup>
                              <tbody>
                                <tr>
                                  <td class="pl-16 text-left pr-0">
                                    <div class="cmp-labels">
                                      <span class="label black">
                                        <template v-if="n===1">Refund</template>
                                        <template v-else-if="n===2">Order Delivery</template>
                                        <template v-else-if="n===3">Product Inquiry</template>
                                        <template v-else-if="n===4">Coupon Benefit</template>
                                        <template v-else>Other</template>
                                      </span>
                                    </div>
                                  </td>
                                  <td class="text-left">
                                    [Quick Delivery] I want to receive quick delivery from an area other than Seoul.
                                  </td>
                                  <td class="pw-0"></td>
                                </tr>
                              </tbody>
                            </table>
                            <template #actions>
                              <i class="cmp-icon-etc cmp-icon-down">Open/Close</i>
                            </template>
                          </v-expansion-panel-header>
                          <v-expansion-panel-content class="text-left">
                            We are sorry. Dear customer, the area currently subject to our quick delivery service is limited to the Seoul area. Although it will be inconvenient, please use another delivery service. (Nationwide delivery service: 4PM/Shop receipt service)<br /><br />
                            If the reply was not satisfactory, please use the 1:1 Query.
                            <div class="shortcut">
                              <nuxt-link to="#none" class="underline">Shortcut to 1:1 Query</nuxt-link>
                            </div>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>
                    </td>
                  </tr>
                  <!-- 결과없음 -->
                  <!-- <tr class="nodata">
                    <td colspan="3">
                      <CommonNoData msg="No search results.">
                        <div slot="button">
                          <v-btn outlined large>1:1 Query</v-btn>
                        </div>
                      </CommonNoData>
                    </td>
                  </tr> -->
                  <!-- //결과없음 -->
                </tbody>
              </table>
            </div>
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
@import '@/assets/scss/en/en.scss';
</style>
