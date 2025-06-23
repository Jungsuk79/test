<template>
  <v-layout class="contents contents-type2"><!--// 공통 class="contents", 해당 메뉴 전용 class="content-메뉴명", 해당 페이지 전용 class="content-페이지명" -->
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'Customer Center'" :left-data="menuList" :pageClass="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="shopping-guide guide-refund">
            <div class="cmp-page-tit">
              <h2 class="tit">Shopping Guide</h2>
            </div>          
            <h3 class="page-title">Refund/Return</h3>
            <div class="contents-wrapper">
              <div class="contents-line-box">
                <div class="item-list">
                  <dl class="justice">
                    <dt>
                      <i class="cmp-icon-etc cmp-icon-50 i-orderlist2"></i>Cancel Order
                    </dt>
                    <dd>
                      <ul class="cmp-dotList">
                        <li>You may cancel an order at the stage of payment completed.</li>
                        <li>If you want a partial cancellation, please place a new order after cancelling the previous order. (It may not go through Customs)</li>
                        <li>Cancellation cannot be allowed at the stage of a product preparation. Please request a product return after receiving a package.</li>
                      </ul>
                    </dd>
                  </dl>
                </div>
              </div>
              <div class="contents-line-box">
                <div class="item-list">
                  <dl class="justice">
                    <dt>
                      <i class="cmp-icon-etc cmp-icon-50 i-delivery-car"></i>How to Return
                    </dt>
                    <dd>
                      <ul class="cmp-dotList">
                        <li>Please click to “Request Return” on My Page and Select a reason for return and upload photo proof.</li>
                        <li>After approval of return, we ask a shipping company to pick up your return item.</li>
                        <li>Courier service will contact you directly to arrange time of pickup.</li>
                        <li>Along with a package of your return item, please send a filled return document which you received by email to courier service.</li>
                        <li>Once your return item arrives, we compare the state of a returned item and a submitted reason with photo proof, and confirm to proceed refund process. For a full refund, a return item should be a new and unworn condition in the original packaging.</li>
                        <li>If the returned product is confirmed to be not defected or misdelivered, the refund amount can be different from the estimated refund amount.</li>
                      </ul>                  
                    </dd>
                  </dl>
                </div>
              </div>
              <div class="contents-line-box">
                <div class="item-list">
                  <dl class="justice">
                    <dt>
                      <i class="cmp-icon-etc cmp-icon-50 i-return"></i>Return
                    </dt>
                    <dd>
                      <ul class="cmp-dotList">
                        <li>Items may be returned only within one week of receipt.</li>
                        <li>We offer a free return service except for the case if the purchased amount is reduced to less than ￦200,000 by returning some of ordered items, Maximum ￦20,000 (Shipping fee) will be deducted from total refundable amount.</li>
                        <li>Product return cannot be allowed in case tags have been removed or damaged.</li>
                        <li>In case the purchased amount is reduced due to a partial return, coupons which are only applicable when purchasing over a certain amount cannot be applied.</li>
                        <li>Note that it may take 2-3 days for a payment approval cancellation by a card/payment company. Please contact directly to the customer service of a card/payment company.</li>
                        <li>
                          Followings are cases for a full refund.<br />
                          1. Original state of an item is damaged or defective. (It should be confirmable by a uploaded photo.)<br />
                          2. Confirmed wrong delivery.<br />
                          3. Actual size measurement differ from details on THEHANDSOME.COM (Excl. error less than 1-2cm)<br />
                          4. Packages are not delivered to customers properly, due to other reasons caused by THEHANDSOME.COM or a delivery company.
                        </li>
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
