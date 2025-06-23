<template>
  <div class="contents contents-type2">
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'Customer Center'" :left-data="menuList" :pageClass="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="cs-main">
            <div class="cmp-page-tit">
              <h2 class="tit">Customer Center</h2>
            </div>
            <section class="section">
              <div class="top-box">
                <p>Hello, this is Handsome Customer Center. How can I help you?</p>
                <!--div class="flex-wrap"> 22.09.15 수정
                  <div class="left">
                    <div class="tel">+82 1800-5700<span>Paid</span></div>
                    <p class="text">
                      <span>Weekdays Mon~Fri 09:00~18:00 Closed Sat/Sun, Holidays</span>
                      <span>hsglobal@thehandsome.com</span>
                    </p>
                  </div>
                  <div class="right">
                    <v-layout align-center class="btns">
                      <nuxt-link to="#none">
                        <img src="/images/cs/ico-18-chat.svg" alt="" />
                          1:1 Query
                      </nuxt-link>
                    </v-layout>
                  </div>
                </div-->
              </div>
              <div class="category-menu">
                <nuxt-link to="">1:1 Query<img src="/images/cs/menu6.svg" alt=""></nuxt-link>
                <nuxt-link to="">FAQs<img src="/images/cs/menu5.svg" alt=""></nuxt-link>
                <nuxt-link to="">E-mail Inquiry<img src="/images/cs/menu2.svg" alt=""></nuxt-link>
              </div>
            </section>
            <section class="section">
              <div class="cmp-sub-tit">
                <h3 class="tit">Notice</h3>
                <nuxt-link class="cmp-font button fnt-16" to="#n">View All<i class="cmp-icon cmp-icon-16 i-next"></i></nuxt-link>
              </div>
              <table class="table-type1 last-border">
                <colgroup>
                  <col width="*" />
                  <col width="138px" />
                </colgroup>
                <thead>
                  <tr>
                    <th class="pw-16">Title</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="n in 5" :key="n">
                    <td class="text-left">
                      <nuxt-link to="">
                        <!-- 상단고정 -->
                        <template v-if="n < 4">
                          <div class="cmp-info info-type2">
                            <p>Information on change of standard for using The Handsome.com monetary voucher.</p>
                          </div>
                        </template>
                        <!-- //상단고정 -->
                        <template v-else>
                          Information on revision of the Handsome.com service terms & conditions.
                        </template>
                      </nuxt-link>
                    </td>
                    <td class="text-center">
                      11 May 2022
                    </td>
                  </tr>
                  
                </tbody>
              </table>
            </section>
            <section class="section faq">
              <div class="cmp-sub-tit">
                <h3 class="tit">Top 5 FAQs</h3>
                <nuxt-link class="cmp-font button fnt-16" to="#n">View All<i class="cmp-icon cmp-icon-16 i-next"></i></nuxt-link>
              </div>
              <div class="product-row-table">
                <table>
                  <colgroup>
                    <col width="106px" />
                    <col width="auto" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th class="pw-16 table-cell">Type</th>
                      <th class="table-cell">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="2" class="inside-table">
                        <v-expansion-panels accordion class="cmp-acc">
                          <v-expansion-panel v-for="n in 5" :key="n">
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
                              We are sorry. Dear customer, the area currently subject to our quick delivery service is limited to the Seoul area. Although it will be inconvenient, please use another delivery service. (Nationwide delivery service: 4PM/Shop receipt service) <br /><br />
                              If the reply was not satisfactory, please use the 1:1 Query.
                              <div class="shortcut">
                                <nuxt-link to="#none" class="underline">Shortcut to 1:1 Query</nuxt-link>
                              </div>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section class="section detail-manu">
              <ul class="depth1">
                <li>
                  <h5>Shopping Guide</h5>
                  <ul class="depth2 column">
                    <li><nuxt-link to="">Coupon</nuxt-link></li>
                    <li><nuxt-link to="">Order</nuxt-link></li>
                    <li><nuxt-link to="">Product</nuxt-link></li>
                    <li><nuxt-link to="">Shipping</nuxt-link></li>
                    <li><nuxt-link to="">Refund/Return</nuxt-link></li>
                    <li><nuxt-link to="">Duty/Tax</nuxt-link></li>
                  </ul>
                </li>
              </ul>
            </section>
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
