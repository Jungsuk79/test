<template>
  <v-layout class="contents contents-type2"><!--// 공통 class="contents", 해당 메뉴 전용 class="content-메뉴명", 해당 페이지 전용 class="content-페이지명" -->
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'Customer Center'" :left-data="menuList" :pageClass="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="shopping-guide guide-order">
            <div class="cmp-page-tit">
              <h2 class="tit">Shopping Guide</h2>
            </div>            
            <h3 class="page-title">Order</h3>
            <div class="contents-wrapper">

              <div class="contents-line-box">
                <div class="item-list">
                  <dl class="justice">
                    <dt>
                      <img src="/images/cs/order2.svg" alt="">Shopping Bag
                    </dt>
                    <dd>
                      <ul class="cmp-dotList">
                        <li>Select a color and a size of a product you wish to buy and add to the Shopping Bag.</li>
                        <li>Maximum 50 items can be added to the Shopping Bag and will be stored for 30 days. Items stored over 30 days will be deleted automatically.<br />Add items that you want to keep for a long time to the Wish List.</li>
                        <li>Prices or benefits may change if you actually purchase the items in the shopping bag.</li>
                        <li>Sold-out items in the Shopping Bag will be deleted automatically.</li>
                        <li>Coupons can be applied on the order sheet and are automatically applied as the maximum discount when entering the order form.</li>
                        <li>If you want domestic delivery, please use the Korean service of The Handsome.com.</li>
                      </ul>
                    </dd>
                  </dl>
                </div>
              </div>
              <div class="contents-line-box">
                <div class="item-list">
                  <dl class="justice">
                    <dt>
                      <i class="cmp-icon-etc cmp-icon-50 i-payment2"></i>Orders / Pay
                    </dt>
                    <dd>
                      <ul class="cmp-dotList">
                        <li>You can order when you log in after joining our membership. Non-member cannot place an order.</li>
                        <li>Click to “Pay Now” on a product detail page, or select &amp; check out a item on the Shopping Bag.</li>
                        <li>Please type your shipping address in English for international shipping.</li>
                        <li>Discount coupon applicable at the stage of an order page.</li>
                        <li>
                          4 types of payment methods<br />
                          - Credit<br />
                          - Paypal<br />
                          - Alipay<br />
                          - Wechatpay
                        </li>
                        <li>Once the payment is completed you will be able to check the order list on My page.</li>
                      </ul>
                    </dd>
                  </dl>
                </div>
              </div>
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
}
</script>
<style lang="scss">
@import '@/assets/scss/en/en.scss';
</style>
