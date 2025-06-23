<template>
  <v-layout class="contents contents-type2"><!--// 공통 class="contents", 해당 메뉴 전용 class="content-메뉴명", 해당 페이지 전용 class="content-페이지명" -->
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'고객센터'" :left-data="menuList" :page-class="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="shopping-guide guide-exchange">
            <div class="cmp-page-tit">
              <h2 class="tit">쇼핑 가이드</h2>
            </div>          
            <h3 class="page-title">교환/반품/환불</h3>
            <div class="contents-wrapper">
              <div class="contents-line-box">
                <div class="item-list">
                  <dl class="justice">
                    <dt>
                      <i class="cmp-icon-etc cmp-icon-50 i-orderlist2"></i><strong>STEP 1. </strong> 교환 및 반품 신청
                    </dt>
                    <dd>
                      상품 수령하신 날로부터 7일이내 신청 가능 합니다.
                    </dd>
                  </dl>
                </div>
                <div class="list-text-wrap">
                  <h5>교환 신청</h5>
                  <ul class="cmp-dotList">
                    <li>교환은 사이즈 및 상품불량 교환만 가능(색상교환은 동일금액에 한정)합니다. (교환재고가 없을 경우, 환불로 안내예정)</li>
                    <li>교환은 배송비 결제 및 상품입고 확인 이후에 진행됩니다.</li>
                    <li>교환배송비는 6,000원(왕복)이며 당사 귀책(상품 불량 및 오배송)으로 교환하실 경우, 배송비는 무료입니다.</li>
                  </ul>
                </div>
                <div class="list-text-wrap return">
                  <h5>반품 신청</h5>
                  <ul class="cmp-dotList">
                    <li>
                      반품 사유에 따른 반품 배송비 안내<br />
                      <p class="mt-6">1. 구매자 단순 변심</p>
                      <ul class="cmp-dotList">
                        <li class="dash">주문 시 배송비 결제한 경우, 반품비 3,000원</li>
                        <li class="dash">주문 시 무료 배송 받은 경우, 반품비 6,000원</li>
                        <li class="dash">부분 반품한 경우 반품하지 않은 상품의 금액에 따라 다름<br />
                        3만원 이상일 경우, 반품비 3,000원<br />
                        3만원 미만일 경우, 반품비 6,000원</li>
                        <li class="dash">무료 배송 쿠폰 사용한 경우, 반품비 3,000원</li>
                      </ul>
                      <p class="mt-6">2. 당사 귀책(상품 불량 및 오배송)</p>
                      <ul class="cmp-dotList">
                        <li class="dash">반품 배송비 무료 (무료배송 쿠폰 사용한 경우 쿠폰 복원)</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="contents-line-box">
                <div class="item-list">
                  <dl class="justice">
                    <dt>
                      <i class="cmp-icon-etc cmp-icon-50 i-delivery-car"></i><strong>STEP 2. </strong> 상품 수거
                    </dt>
                    <dd>
                      교환 및 반품신청 후 7일이내 당사에 도착해야 합니다.
                      <ul class="cmp-dotList">
                        <li>상품수거 접수 후, 한섬 소비자 상담실에서 상품의 문제를 진단합니다.</li>
                      </ul>                  
                    </dd>
                  </dl>
                </div>
              </div>
              <div class="contents-line-box">
                <div class="item-list">
                  <dl class="justice">
                    <dt>
                      <i class="cmp-icon-etc cmp-icon-50 i-inspection"></i><strong>STEP 3. </strong> 상품 검수 (교환/반품/환불 규정)
                    </dt>
                    <dd>
                      전자상거래 등에서 소비자보호에 관한 법률에서 규정한 내용을 기준으로 합니다.
                      <ul class="cmp-dotList">
                        <li>반품 안내태그(TAG)가 부착된 상품에서 태그 (TAG)를 분리하신 경우</li>
                        <li>고객님의 책임 있는 사유로 상품등이 멸실 또는 훼손한 경우<br />단, 상품의 내용을 확인하기 위하여 포장등을 훼손한 경우는 제외합니다.</li>
                        <li>고객님의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우</li>
                        <li>시간의 경과에 의하여 재판매가 곤란할 정도로 상품등의 가치가 현저히 감소한 경우</li>
                        <li>복제가 가능한 상품등의 포장을 훼손한 경우</li>
                      </ul>                  
                    </dd>
                  </dl>
                </div>
              </div>
              <div class="contents-line-box">
                <div class="item-list">
                  <dl class="justice">
                    <dt>
                      <i class="cmp-icon-etc cmp-icon-50 i-confirm"></i><strong>STEP 4. </strong> 교환 완료/반품 승인 및 환불
                    </dt>
                    <dd>
                      교환 상품에 문제가 없을 경우 교환이 완료 됩니다.<br />환불 정보를 통해 환불과정이 진행 됩니다.
                    </dd>
                  </dl>
                </div>
                <div class="list-text-wrap">
                  <h5>반품/환불</h5>            
                  <ul class="cmp-dotList">
                    <li>환불 접수 후 즉시 환불은 불가능하며, 5일 이내 (휴일제외)에 이루어 집니다.</li>
                    <li>쿠폰 적용 여부에 따라서 취소/ 반품신청하신 상품의 판매가 보다 환불금액이 적을 수 있습니다.</li>
                    <li>변심에 의한 반품의 경우 3만원이상으로 무료배송으로 받았다 할지라도 환불 시<br /> 배송료가 차감됩니다.</li>
                    <li>반품배송비는 한섬마일리지 > e-money > 주결제수단(신용카드 등) 순으로 차감됩니다.</li>
                    <li>
                      환불 및 포인트 환급 순서
                      <br />1. 주결제 수단 환불
                      <br />2. 한섬마일리지 환급
                      <br />3. e-money 환급
                      <br />4. H.Point 환급
                    </li>
                  </ul>
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
