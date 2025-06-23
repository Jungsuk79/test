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
            <h3 class="page-title">주문/결제</h3>
            <div class="contents-wrapper">

              <div class="contents-line-box">
                <div class="item-list">
                  <dl class="justice">
                    <dt>
                      <img src="/images/cs/order1.svg" alt=""><strong>STEP 1.</strong> 상품 탐색/검색
                    </dt>
                    <dd>
                      메인에서 취향에 맞는 상품을 탐색해보세요.<br />
                      검색창에서 브랜드/카테고리 검색 및 스타일필터를<br />통해 상품을 찾아보세요.
                    </dd>
                  </dl>
                </div>
              </div>
              <div class="contents-line-box">
                <div class="item-list">
                  <dl class="justice">
                    <dt>
                      <img src="/images/cs/order2.svg" alt=""><strong>STEP 2.</strong> 주문
                    </dt>
                    <dd>
                      쇼핑백 담기/바로구매를 선택해 주문해주세요.<br />
                      보유한 쿠폰 및 혜택을 확인하여 최대 할인 혜택이 자동 적용됩니다.
                    </dd>
                  </dl>
                </div>
              </div>
              <div class="contents-line-box">
                <div class="item-list">
                  <dl class="justice">
                    <dt>
                      <img src="/images/cs/order3.svg" alt=""><strong>STEP 3.</strong> 배송준비중
                    </dt>
                    <dd>
                      배송에 필요한 상품을 준비하고 있습니다.
                    </dd>
                  </dl>
                </div>
              </div>
              <div class="contents-line-box">
                <div class="item-list">
                  <dl class="justice">
                    <dt>
                      <img src="/images/cs/order4.svg" alt=""><strong>STEP 4.</strong> 배송중
                    </dt>
                    <dd>
                      상품이 발송되어 고객님께 배송중 입니다.<br />
                      마이페이지에서 배송조회가 가능합니다.
                    </dd>
                  </dl>
                </div>
              </div>
              <div class="contents-line-box">
                <div class="item-list">
                  <dl class="justice">
                    <dt>
                      <img src="/images/cs/order5.svg" alt=""><strong>STEP 5.</strong> 배송완료
                    </dt>
                    <dd>
                      구매하신 상품이 고객님께 전달 되었습니다.
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
    const json = require('~/static/json/cs_left_menu.json')
    me.menuList = json.list
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/cs.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
