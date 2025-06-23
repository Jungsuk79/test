<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <ContentsLeftMenu :title="'마이페이지'" :left-data="menuList" :active="'/ko/ME/handsomeMileage'"></ContentsLeftMenu>
      <div class="my-page-r-box contents-benefit">
        <div class="cmp-page-tit"><h2 class="tit">나의 혜택</h2></div>

        <div class="cmp-tabs tabs-actionTop">
          <v-tabs fixed-tabs v-model="tabs">
            <v-tab>한섬마일리지</v-tab>
            <v-tab>H.Point</v-tab>
            <v-tab>e-money</v-tab>
            <v-tab>한섬 VVIP</v-tab>
          </v-tabs>
        </div>

        <!--이용내역-->
        <div class="benefit-box ">
          <v-layout justify-space-between class="mileage-wrap">
            <div class="mileage-total">
              <dl>
                <dt>H.Point</dt>
                <dd>42,000<em class="unit">P</em></dd>
              </dl>
            </div>

            <!--20221216 한섬회원일경우 이용내역-->
            <div v-if="integration" class="mileage-info-integration">
              <div class="card-link">  
                <button class="cmp-font fnt-14 c-white button">통합회원 전환<i v-cmp-icon="{size : 12, name : 'next', invert : 1}"></i></button>
              </div>
              <p class="info-txt">통합회원만 사용 가능합니다.</p>
            </div>
            <!--//20221216 한섬회원일경우 이용내역-->

            <!--20221216 상세 조회-->
            <div v-else class="mileage-info">
              <button class="cmp-font fnt-13 c-white button" @click="integrationTestBtn"><span class="line">상세 조회</span></button>
            </div>

            
          </v-layout>
        </div>
        <!--//이용내역-->

        <div class="benefit-info">
          <p class="cmp-font fnt-18">H.Point 안내</p>
          <ul class="cmp-dotList">
            <li>H.Point는 현대백화점그룹 통합멤버쉽 포인트로 현대백화점 그룹의 온라인/오프라인 매장에서 구매한 금액의 일부를 포인트로 적립하고 현금으로 사용가능한 포인트입니다.</li>
            <li>한섬 오프라인 매장과 더한섬닷컴에서 구매 시 결제금액의 0.1%를 적립하여 드립니다. (세일상품 제외)</li>
            <li>더한섬닷컴에서 구매 후 적립되는 포인트는 배송완료 10일 이후 적립됩니다.</li>
            <li>한섬 오프라인 매장에서 구매 시, 포인트는 익일 적립됩니다.</li>
            <li>1,000P 이상 보유 시 1P 단위로 현금처럼 사용 가능합니다.</li>
            <li>유효기간은 포인트 별 상이합니다.</li>
            <li>포인트 적립/사용 내역 및 자세한 사항은 통합멤버쉽 사이트에서 확인 가능합니다.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentsLeftMenu from '~/components/common/ContentsLeftMenu'
export default {
  components: {
    ContentsLeftMenu
  },
  layout: 'LayoutBasics',
  data: () => ({
    tabs:1,
    integration : false
  }),
  created() {
    const me = this
    const json = require('~/static/json/mypage_left_menu.json')
    me.menuList = json.list
  },
  methods: {
    integrationTestBtn(){ // 퍼블확인용 버튼
      this.integration = true ; 
    }
  },
}
</script>
<style lang="scss" scoped>
 @import '@/assets/scss/pages/member.scss'; 
</style>
