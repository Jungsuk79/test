<template>
  <v-layout class="contents contents-type2"><!--// 공통 class="contents", 해당 메뉴 전용 class="content-메뉴명", 해당 페이지 전용 class="content-페이지명" -->
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'고객센터'" :left-data="menuList" :page-class="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="shopping-service present">
            <div class="cmp-page-tit">
              <h2 class="tit">선물하기</h2>
            </div>      
            <div class="grey-box bg3">
              <strong>더한섬닷컴 특별함을</strong>
              <dl>
                <dt>선물하기</dt>
                <dd>마음을 전하는 특별한 방법, 더한섬닷컴 상품 또는 e-Gift Card로<br />쉽고 편리하게 마음을 전하세요.</dd>
              </dl>
            </div>
            <div class="tab-wrap">
              <div class="cmp-tabs tabs-actionTop">
                <v-tabs v-model="tabModel" fixed-tabs>
                  <v-tab>상품 선물</v-tab>
                  <v-tab>e-Gift Card 선물</v-tab>
                </v-tabs>
              </div>
              <div class="tab-content">
                <v-tabs-items v-model="tabModel" touchless>
                  <!-- 상품 선물 -->
                  <v-tab-item :transition="false" class="tab-item">
                    <section class="content-section">
                      <h5 class="section-title">선물할 때</h5>
                      <ul class="infomation-list">
                        <li>
                          <dl class="dl-wrap">
                            <dt>카드 선택 및 메시지 작성하기</dt>
                            <dd>다양한 테마별 카드 이미지를 선택하고 마음을 담은 메시지를 작성해 주세요.</dd>
                          </dl>
                          <img src="/images/cs/present_product1.png" alt="" class="mock-img">
                        </li>
                        <li>
                          <dl class="dl-wrap">
                            <dt>연락처 입력하기</dt>
                            <dd>연락처 가져오기 또는 직접 입력하여 선물 받으실 분의 연락처를 입력해 주세요.</dd>
                          </dl>
                          <img src="/images/cs/present_product2.png" alt="" class="mock-img">
                        </li>
                        <li>
                          <dl class="dl-wrap">
                            <dt>보낸 선물내역 확인하기</dt>
                            <dd>주문 후 3일 이내인 경우 컬러, 사이즈 변경 또는 주문취소 하실 수 있어요.</dd>
                          </dl>
                          <img src="/images/cs/present_product3.png" alt="" class="mock-img">
                        </li>
                      </ul>
                      <div class="text-center">
                        <v-btn large color="primary">선물하기 바로가기</v-btn>
                      </div>
                    </section>
                    <section class="content-section">
                      <h5 class="section-title">선물 받을 때</h5>
                      <ul class="infomation-list">
                        <li>
                          <dl class="dl-wrap">
                            <dt>받은 선물내역 확인하기</dt>
                            <dd>동일한 가격 이내인 경우 배송지 입력 전 컬러, 사이즈 변경이 가능해요.</dd>
                          </dl>
                          <img src="/images/cs/present_product4.png" alt="" class="mock-img">
                        </li>
                        <li>
                          <dl class="dl-wrap">
                            <dt>배송지 주소 입력하기</dt>
                            <dd>선물을 받은 후 3일 이내에 배송지를 입력해주세요. 배송지 미등록시 자동 취소 됩니다.<br />취소된 금액은 선물을 보낸 사람에게 환불됩니다.</dd>
                          </dl>
                          <img src="/images/cs/present_product5.png" alt="" class="mock-img">
                        </li>
                      </ul>
                      <div class="text-center">
                        <v-btn large color="primary">선물내역 바로가기</v-btn>
                      </div>
                    </section>
                  </v-tab-item>
                  <!-- //상품 선물 -->

                  <!-- e-Gift Card 선물 -->
                  <v-tab-item :transition="false" class="tab-item">
                    <section class="content-section">
                      <h5 class="section-title">선물할 때</h5>
                      <ul class="infomation-list">
                        <li>
                          <dl class="dl-wrap">
                            <dt>e-Gift Card 선택하기</dt>
                            <dd>축하, 감사, 사랑, 시즌별 e-Gift Card를 선택해 주세요.</dd>
                          </dl>
                          <img src="/images/cs/present_egiftcard1.png" alt="" class="mock-img">
                        </li>
                        <li>
                          <dl class="dl-wrap">
                            <dt>메시지 입력하기</dt>
                            <dd>e-Gift Card를 받는 분께 전할 메세지를 작성해 주세요.</dd>
                          </dl>
                          <img src="/images/cs/present_egiftcard2.png" alt="" class="mock-img">
                        </li>
                        <li>
                          <dl class="dl-wrap">
                            <dt>연락처 및 수량 입력하기</dt>
                            <dd>연락처 가져오기 또는 직접 입력하여 선물 받으실 분의 연락처, 수량을 입력해 주세요.<br />받는 사람이 1명인 경우 수량 변경이 가능하며, 월 1백 만원 이하, 신용카드로 구매 가능합니다.</dd>
                          </dl>
                          <img src="/images/cs/present_egiftcard3.png" alt="" class="mock-img">
                        </li>
                        <li>
                          <dl class="dl-wrap">
                            <dt>보낸 선물내역 확인하기</dt>
                            <dd>선물한 e-Gift Card 미등록시 SMS 1회 재전송 또는 주문 후 7일 이내인 경우 주문취소 하실 수 있어요.<br />취소된 금액은 선물을 보낸 사람에게 환불됩니다.</dd>
                          </dl>
                          <img src="/images/cs/present_egiftcard4.png" alt="" class="mock-img">
                        </li>
                      </ul>
                      <div class="text-center">
                        <v-btn large color="primary">선물하기 바로가기</v-btn>
                      </div>
                    </section>
                    <section class="content-section">
                      <h5 class="section-title">선물 받을 때</h5>
                      <ul class="infomation-list">
                        <li>
                          <dl class="dl-wrap">
                            <dt>선물받은 e-Gift Card 등록하기</dt>
                            <dd>선물 받은 후 7일 이내 등록 해주세요. 미등록시 자동 취소됩니다.<br />취소된 금액은 선물을 보낸 사람에게 환불됩니다.</dd>
                          </dl>
                          <img src="/images/cs/present_egiftcard5.png" alt="" class="mock-img">
                        </li>
                        <li>
                          <dl class="dl-wrap">
                            <dt>e-money 내역 확인하기</dt>
                            <dd>등록된 e-Gift Card는 e-money로 전환되며, 상품 구매시 사용내역을 확인하실 수 있어요.</dd>
                          </dl>
                          <img src="/images/cs/present_egiftcard6.png" alt="" class="mock-img">
                        </li>
                      </ul>
                      <div class="text-center">
                        <v-btn large color="primary">선물내역 바로가기</v-btn>
                      </div>
                    </section>
                  </v-tab-item>
                  <!-- //e-Gift Card 선물 -->
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
      tabModel: null,
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
