<template>
  <DialogBasic class="popup-productDelivery" header-title="Delivery/Return" :width="540" @hide="closeDialog">
    <template #body>  
     <div class="inner">
        <section class="sec-explain">
          <div class="tit-type">
            <h2>Shipping Available Countries</h2>
          </div>
          <div class="list-prdExplain">
            <ul class="cmp-dotList">
              <li>The Americas : USA, Canada</li>
              <li>Asia: China, Hong Kong, Japan, Taiwan, Singapore, Vietnam, Malaysia, Indonesia, Brunei, Thailand, Philippines, Bangladeshi, India</li>
              <li>Middle East: Qatar, UAE, Kuwait</li>
              <li>Europe: Swiss, Denmark, Sweden, Holland, Finland, Ireland, Belgium, Germany, France, Iceland, UK, Italy, Spain, Turkey</li>
              <li>Oceania: Australia, New Zealand</li>
              <li class="star">Estimated shipping time will vary by country(Average shipping time is 4~7days)</li>
            </ul>
          </div>
          <div class="tit-type">
            <h2>Shipping Fee</h2>
          </div> 
          <div class="list-prdExplain">
            <ul class="cmp-dotList">
                <li>
                  Purchase over ₩200,000(approx. $180) for Free Shipping
                  <ul class="cmp-dotList">
                    <li class="star">Free shipping benefit to be offered based on an actual payment amount, not total order amount before applying discount coupon.</li>
                  </ul>
                </li>
                <li>By country, shipping fee to be charged for orders under KRW 200,000.</li>
            </ul>
            <table class="terms-row-table last-borde table-type1 mt-16">
              <caption>Shipping Fee</caption>
              <colgroup>
                <col style="width:62px">
                <col style="width:129px">
                <col style="width:auto">
              </colgroup>
              <thead>
                <tr>
                  <th class="pw-16">Area</th>
                  <th>Shipping Fee</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td class="pw-16 text-center">A</td>
                    <td class="text-center">&#8361; 10,000</td>
                    <td>China, Hong Kong, Japan, Taiwan, Singapore, Vietnam, Malaysia, Indonesia, Brunei, Thailand, Philippines, Bangladeshi, India</td>
                </tr>
                <tr>
                    <td class="pw-16 text-center">B</td>
                    <td class="text-center">&#8361; 20,000</td>
                    <td>USA, Canada, Australia, NewZealand, Europe, MiddleEast</td>
                </tr>
              </tbody>
            </table>
          </div> 

          <div class="tit-type">
            <h2>Return</h2>
          </div> 
          <div class="list-prdExplain">
            <ul class="cmp-dotList">
              <li>Items may be returned only within one week of receipt.</li>
              <li>We offer a free return service except for the case if the purchased amount is reduced</li>
              <li>to less than ₩200,000 by returning some of ordered items,<br>Maximum ₩20,000 (shipping fee) will be deducted from total refundable amount.</li>
              <li>Please click to “Request Return” on My Page and refer to return policy for full detail.</li>
            </ul>
          </div> 
        </section>
      </div>
    </template>
  </DialogBasic>
</template>
<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  components: {
    DialogBasic,
  },
  data: () => ({
    DialogBasic: false, // 팝업
  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss">
</style>
