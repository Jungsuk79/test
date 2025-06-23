<template>
  <v-layout class="contents contents-type2"><!--// 공통 class="contents", 해당 메뉴 전용 class="content-메뉴명", 해당 페이지 전용 class="content-페이지명" -->
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'Customer Center'" :left-data="menuList" :pageClass="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="shopping-guide">
            <div class="cmp-page-tit">
              <h2 class="tit">Shopping Guide</h2>
            </div>                
            <h3 class="page-title">Coupon</h3>
            <div class="contents-wrapper">
              <div class="contents-line-box">
                <div class="item-list">
                  <dl class="justice">
                    <dt>
                      <i class="cmp-icon-etc cmp-icon-30 i-coupon"></i>Online coupon
                    </dt>
                    <dd>
                      This is a coupon provided when signing up for the Handsome.com membership that can be used when purchasing a product.<br />
                      (When ordering a product, you can purchase the product at a discounted price by applying a coupon in the order form.)
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <v-expansion-panels v-model="panel" multiple class="cmp-acc acc-type2 acc-infomation">
              <v-expansion-panel>
                <v-expansion-panel-header>
                  Precautions when using a coupon
                  <template #actions>
                    <i class="cmp-icon-etc cmp-icon-down">show/hide</i>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <ul class="cmp-dotList">
                    <li>Coupon discounts cannot be applied to some products.</li>
                    <li>A coupon that has expired is automatically terminated.</li>
                    <li>A coupon used when canceling an order/returning a product is not reissued if it has expired.</li>
                  </ul>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <div class="btn-primary">
              <v-btn large color="primary">Query Coupon</v-btn>
            </div>
          </div>
        </div>
      </div>

    </div>
  </v-layout>
</template>

<script>
export default {
  layout: 'LayoutBasics',
  created() {
    const me = this
    const json = require('~/static/json/cs_left_menu_en.json')
    me.menuList = json.list
  },
  data: () => ({
    panel: [0]
  })
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/cs.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
