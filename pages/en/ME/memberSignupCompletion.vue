<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="register-content">
        <div class="cmp-page-tit center">
          <h2 class="tit">Register</h2>
        </div>

        <div class="conts-center-box">
          <p class="cmp-font fnt-20 bold">Congratulations on becoming a member<br> of TheHandsome.com!</p>
          <p class="cmp-font fnt-16 pt-10">
            The personal information you have entered can be<br>changed at My Page > My Info Management > Account Edit.
          </p>

          <div class="contents-coupon-list">
            <ul class="list-wrap">
              <li>
                <div class="coupon-box">
                  <p class="coupon-name">NEW MEMBER VOUCHER</p>
                  <p class="coupon-price">
                    <span class="number">15</span>
                    <span class="won">%</span>
                    <span class="won">OFF</span>
                  </p>
                  <div class="coupon-sub">For New Arrivals (valid for 1 month)</div>
                </div>
              </li>
              <li>
                <div class="coupon-box">
                  <p class="coupon-name">NEW MEMBER VOUCHER</p>
                  <p class="coupon-price">
                    <span class="number">5</span>
                    <span class="won">%</span>
                    <span class="won">OFF</span>
                  </p>
                  <div class="coupon-sub">For Outlet (valid for 1 month)</div>
                </div>
              </li>
            </ul>
          </div>

          <div class="btn-box">
            <v-btn 
              large
              block
              color="primary"
              class="width-360">
              Login
            </v-btn>
             <v-btn 
              large
              block
              outlined
              color="primary"
              class="width-360">
              Go to the TheHandsome.com
            </v-btn>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
import EventBus from '~/api/common/EventBus'
export default {
  components: {
  },
  layout: 'LayoutBasics',
  data: () => ({

  }),
  created() {
    EventBus.$emit("setLayout", {topbutton: false})
  },
  methods: {

  },
}
</script>
<style lang="scss">
  @import '@/assets/scss/pages/member.scss'; 
  @import '@/assets/scss/en/en.scss'; // 글로벌 scss 
</style>
