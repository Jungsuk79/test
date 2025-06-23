<template>
  <v-layout class="contents contents-type2"><!--// 공통 class="contents", 해당 메뉴 전용 class="content-메뉴명", 해당 페이지 전용 class="content-페이지명" -->
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'고객센터'" :left-data="menuList" :page-class="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="shopping-guide">
            <div class="cmp-page-tit">
              <h2 class="tit">쇼핑 가이드</h2>
            </div>            
            <h3 class="page-title">배송</h3>
            <div class="contents-wrapper">
              <div class="contents-line-box">
                <div class="item-list">
                  <dl class="justice">
                    <dt>
                      <i class="cmp-icon-etc cmp-icon-50 i-payment2"></i>배송비 안내
                    </dt>
                    <dd>
                      [국내 배송비] 실결제금액 기준, 30,000원 이상 결제 시 무료배송<br />
                      30,000원 미만 결제 시 3,000원(기본 배송비)
                      <ul class="cmp-dotList">
                        <li>실결제금액이란, 쿠폰/바우처 할인액 및 한섬마일리지 / H.Point 사용 금액을 제외한 금액입니다. (e-money 사용은 실결제금액에 포함)</li>
                        <li>여러 상품을 구매하실 경우 따로 결제하지 마시고 장바구니에 담아 한꺼번에 결제하시면 배송비 부담이 없습니다.<br />단, 예약구매 상품은 일반상품과 함께 주문하셔도 공지된 일괄 배송일자로 따로 배송되기에 배송비가 별도 청구될 수 있습니다.</li>
                      </ul>
                    </dd>
                  </dl>
                </div>
              </div>
              <div class="contents-line-box">
                <div class="item-list">
                  <dl class="justice">
                    <dt>
                      <i class="cmp-icon-etc cmp-icon-50 i-payment1"></i>추가 운임비 안내
                    </dt>
                    <dd>
                      국내 도서산간 지역은 별도 추가 운임비가 부과됩니다.<br />
                      실결제금액 기준, 30,000원 이상 결제 시 추가 운임비(3,000원)만 청구<br />
                      30,000원 미만 결제 시 3,000원(기본 배송비) + 3,000원(추가 운임비)
                      <ul class="cmp-dotList">
                        <li>일부 도서지역은 도선료가 추가될 수 있습니다.</li>
                      </ul>
                    </dd>
                  </dl>
                </div>
              </div>
              <div class="contents-line-box">
                <div class="item-list">
                  <dl class="justice">
                    <dt>
                      <i class="cmp-icon-etc cmp-icon-50 i-delivery-car"></i>배송 조회 안내
                    </dt>
                    <dd>
                      <ul class="cmp-dotList mt-0">
                        <li>주문하신 상품의 배송내역은 로그인 후 ‘마이페이지 > 주문 현황’에서 확인하실수 있습니다.</li>
                        <li>상품 준비중 상태에서는 주문의 취소/변경이나 주소의 변경이 불가능합니다.</li>
                        <li>주문완료 상태까지는 배송지 수정이 가능합니다.</li>
                      </ul>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="btn-primary">
              <v-btn large color="primary">배송 조회</v-btn>
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
    const json = require('~/static/json/cs_left_menu.json')
    me.menuList = json.list
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/cs.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
