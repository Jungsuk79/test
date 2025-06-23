<template>
  <v-layout class="contents contents-type2"><!--// 공통 class="contents", 해당 메뉴 전용 class="content-메뉴명", 해당 페이지 전용 class="content-페이지명" -->
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'고객센터'" :left-data="menuList" :page-class="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="shopping-guide guide-delivery">
            <div class="cmp-page-tit">
              <h2 class="tit">쇼핑 가이드</h2>
            </div>      
            <h3 class="page-title">딜리버리 서비스</h3>
            <div class="grey-box">
              <dl class="dl-wrap">
                <dt>한섬 딜리버리 서비스란?</dt>
                <dd>고객님의 상황에 맞추어, 다양한 배송 옵션을<br />선택할 수 있는 더한섬닷컴만의 특화된 배송 서비스입니다.</dd>
              </dl>
              <i class="cmp-icon-etc cmp-icon-120 i-delivery"></i>
            </div>
            <div class="tab-wrap">
              <div class="cmp-tabs tabs-actionTop">
                <v-tabs v-model="tab" fixed-tabs>
                  <v-tab>매장수령</v-tab>
                  <v-tab>퀵배송</v-tab>
                </v-tabs>
              </div>
              <div class="tab-content">
                <v-tabs-items v-model="tab" touchless>

                  <!-- 매장수령 -->
                  <v-tab-item :transition="false">
                    <div class="contents-line-box intro-info">
                      <dl class="dl-wrap">
                        <dt>택배 배송 시간을 맞추기 힘들 때,<br />가까운 매장에서 직접 상품을 수령하세요!</dt>
                        <dd>원하는 매장과 원하는 수령일에 맞추어 고객님께서 주문하신 상품을<br />직접 수령하실 수 있습니다.</dd>
                      </dl>
                      <i class="cmp-icon-etc cmp-icon-120 i-store"></i>
                    </div>
                    <div class="captures">
                      <div class="capture">
                        <dl class="dl-wrap">
                          <dt><strong>매장 및 수령 신청일 선택</strong></dt>
                          <dd>상품 상세페이지에서 ‘매장수령’을 선택 후, 원하시는 매장과 수령신청일을 체크합니다.</dd>
                        </dl>
                        <img src="/images/cs/mock1.png" class="mock-img" alt="">
                        <img src="/images/cs/mock1-1.png" class="mock-img" alt="">
                      </div>
                      <div class="capture">
                        <dl class="dl-wrap">
                          <dt><strong>SMS 교환권 발송 확인</strong></dt>
                          <dd>‘매장수령 확정일과 교환권’을 SMS로 수신하신 후 매장을 방문하여 수령하실 수 있습니다. (마이페이지>주문조회에서 확인 가능합니다.)</dd>
                        </dl>
                        <div class="text-center">
                          <img src="/images/cs/mock2.png" class="mock-img" alt="" style="width:290px">
                        </div>
                      </div>
                    </div>
                  </v-tab-item>
                  <!-- //매장수령 -->

                  <!-- 퀵배송 -->
                  <v-tab-item :transition="false">
                    <div class="contents-line-box intro-info">
                      <dl class="dl-wrap">
                        <dt>오늘 필요한 상품을 3개까지<br />당일에 바로 받아볼 수 있는 퀵배송 서비스</dt>
                        <dd>월~금요일, 자정~오전 9시까지 주문을 서울 전 지역에 당일 배송해 드립니다.<br />(퀵 배송비 : 5,000원)</dd>
                      </dl>
                      <i class="cmp-icon-etc cmp-icon-120 i-quick"></i>
                    </div>
                    <div class="captures">
                      <div class="text-center pt-60">
                        <img src="/images/cs/mock3.png" class="" alt="">
                      </div>
                    </div>                  
                  </v-tab-item>
                  <!-- //퀵배송 -->

                </v-tabs-items>
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
  data() {
    return {
      tab: null,
    }
  },
  created() {
    const me = this
    const json = require('~/static/json/cs_left_menu.json')
    me.menuList = json.list
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/cs.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
