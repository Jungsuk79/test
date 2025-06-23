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
            <h3 class="page-title">쿠폰</h3>
            <div class="contents-wrapper">
              <div class="contents-line-box">
                <div class="item-list">
                  <dl class="justice">
                    <dt>
                      <i class="cmp-icon-etc cmp-icon-30 i-coupon"></i>온라인 쿠폰
                    </dt>
                    <dd>
                      더한섬닷컴 회원 가입 시 제공되는 쿠폰으로 상품 구매 시 사용하실 수 있습니다.<br />
                      (상품 주문 시, 주문서에서 쿠폰을 적용하면 할인된 금액으로 상품을 구입하실 수 있습니다.)
                    </dd>
                  </dl>
                </div>
              </div>
              <div class="contents-line-box">
                <div class="item-list">
                  <dl class="justice">
                    <dt>
                      <i class="cmp-icon-etc cmp-icon-50 i-return-coupon"></i>반품 쿠폰
                    </dt>
                    <dd>
                      반품 시 반품 비용 없이 무료로 상품을 반품 하실 수 있습니다.
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <v-expansion-panels v-model="panel" multiple class="cmp-acc acc-type2 acc-infomation">
              <v-expansion-panel>
                <v-expansion-panel-header>
                  쿠폰 사용 시 주의사항
                  <template #actions>
                    <i class="cmp-icon-etc cmp-icon-down">열기/닫기</i>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <ul class="cmp-dotList">
                    <li>일부 상품은 쿠폰 할인 적용이 불가능합니다.</li>
                    <li>유효기간이 지난 쿠폰은 자동 소멸 됩니다.</li>
                    <li>주문취소/반품 시 사용한 쿠폰은 유효기간이 만료된 경우 재발급되지 않습니다.</li>
                  </ul>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <div class="btn-primary">
              <v-btn large color="primary">쿠폰 조회</v-btn>
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
  data: () => ({
    panel: [0]
  }),
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
