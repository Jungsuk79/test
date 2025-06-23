<template>
  <v-layout class="contents content-cs">
    <div class="content-wrap shopping-guide">
      <h3 class="page-title">Shipping</h3>
      <div class="contents-wrapper">

        <div class="contents-line-box full fit">
          <div class="item-list">
            <dl class="justice">
              <dt>
                <img src="/images/cs/order-address-book.png" alt="">Shipping Available Countries
              </dt>
              <dd>
                <ul class="cmp-dotList">
                  <li>The Americas : USA, Canada</li>
                  <li>Asia : China, Hong Kong, Japan, Taiwan, Singapore, Viet Nam, Malaysia, Indonesia, Brunei, Thailand, Philippines, Bangladeshi, India</li>
                  <li>Middle East : Qatar, UAE, Kuwait</li>
                  <li>Europe : Swiss, Denmark, Sweden, Holland, Finland, Ireland, Belgium, Germany, France, Iceland, UK, Italy, Spain, Turkey</li>
                  <li>Oceania : Australia, New Zealand<br />※ Estimated shipping time will vary by country(Average shipping time is 4~7days)</li>
                </ul>
              </dd>
            </dl>
          </div>
        </div>
        <div class="contents-line-box full fit">
          <div class="item-list">
            <dl class="justice">
              <dt>
                <img src="/images/cs/shipping1.png" alt="">Shipping Fee
              </dt>
              <dd>
                <ul class="cmp-dotList">
                  <li>
                    Purchase Over KRW 200,000(approx. $180) For Free Shipping<br />
                    ※ Free shipping benefit to be offered based on an actual payment amount, not total order amount before applying discount coupon.
                  </li>
                  <li>By country, shipping fee to be charged for orders under KRW 200,000.</li>
                </ul>                  
              </dd>
            </dl>
          </div>
          <table class="guide-table">
            <colgroup>
              <col width="47px">
              <col width="97px">
              <col width="*">
            </colgroup>
            <thead>
              <tr>
                <th>Area</th>
                <th>Shipping Fee</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p class="cmp-font fnt-13 text-center">A</p>
                </td>
                <td clas="text-center">
                  <strong>￦ 10,000</strong>
                </td>
                <td>China, Hong Kong, Japan, Taiwan, Singapore, Viet Nam, Malaysia, Indonesia, Brunei, Thailand, Philippines, Bangladeshi, India</td>
              </tr>
              <tr>
                <td class="text-center">
                  <p class="cmp-font fnt-13 text-center">B</p>
                </td>
                <td class="text-center">
                  <strong>￦ 20,000</strong>
                </td>
                <td>USA, Canada, Australia, New Zealand, Middle East, Europe</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="contents-line-box full fit">
          <div class="item-list">
            <dl class="justice">
              <dt>
                <img src="/images/cs/order-delivery.png" alt="">Ext.
              </dt>
              <dd>
                <ul class="cmp-dotList">
                  <li>Check a delivery tracking on My Page.</li>
                  <li>If you find an error on a delivery tracking, please leave your query on <nuxt-ink to="" class="underline">my page>1:1 query</nuxt-ink>.</li>
                  <li>Any changes of options of ordered items, a shipping address and cancellation cannot be allowed at the stage of a product preparation.</li>
                </ul>
              </dd>
            </dl>
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

  },
  mounted(){
    this.setTitle('Shopping Guide')
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/en/en.scss';
</style>
