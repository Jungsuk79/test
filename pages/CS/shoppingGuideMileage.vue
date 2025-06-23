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
            <h3 class="page-title">한섬마일리지</h3>
            <div class="contents-wrapper">
              <div class="contents-line-box">
                <div class="item-list">
                  <dl class="justice">
                    <dt><i class="cmp-icon-etc cmp-icon-50 i-mpoint"></i>첫 구매 감사 한섬마일리지</dt>
                    <dd>
                      더한섬닷컴/오프라인 매장 통합 기준, 첫 구매인 고객님께 3만 마일리지를 지급합니다.<br />
                      (10% 초과 할인상품 제외)
                    </dd>
                  </dl>
                </div>
              </div>
              <div class="contents-line-box">
                <div class="item-list">
                  <dl class="justice">
                    <dt><i class="cmp-icon-etc cmp-icon-50 i-rewards"></i>생일축하 한섬마일리지</dt>
                    <dd>
                      생일 7일 전 2만 마일리지를 지급해드립니다.<br />
                      (더한섬닷컴/오프라인 매장 통합 기준, 생일 7일 전 지급일 전일 기준 최근 1년 이내 더한섬닷컴 및 오프라인 구매 이력이 있으신 고객님께<br />
                      지급됩니다.)
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <v-expansion-panels v-model="panel" multiple class="cmp-acc acc-type2 acc-infomation">
              <v-expansion-panel>
                <v-expansion-panel-header>
                  한섬마일리지 안내
                  <template #actions>
                    <i class="cmp-icon-etc cmp-icon-down">열기/닫기</i>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <!-- [퍼블수정]23.09.06 문구수정 -->
                  <ul class="cmp-dotList">
                    <li>
                      한섬마일리지는 정상 구매금액의 5%, 아울렛 구매금액의 1% 적립됩니다. (10% 초과 할인상품 제외)<br />

                      <!-- [240618] 쇼핑 가이드 문안 변경 -->
                      <!-- - 오프라인 : 백화점 5%(단, 타미힐피거 할인율 1~30%건 1%), 아울렛 1%<br /> -->
                      - 오프라인 : 백화점 5%(단, 타미힐피거 할인율 1~30%건 1%), 아울렛 1%, EQL/Kith Seoul 1%<br />
                      <!-- // [240618] 쇼핑 가이드 문안 변경 -->

                      - 더한섬닷컴 : 정상 제품 5%, 아울렛 제품 1%
                    </li>
                    <li>예약판매 상품 구매시 한섬마일리지 구매금액의 3% 추가 적립됩니다. (아울렛 제외)</li>

                    <!-- [240618] 쇼핑 가이드 문안 변경 -->
                    <!-- <li>10% 초과 할인 상품은 마일리지 적립 및 사용 불가하며, 제품 당 실결제금액(할인 적용가)이 3만원 초과 시 마일리지 사용 가능합니다.</li> -->
                    <li>10% 초과 할인 상품은 마일리지 적립 및 사용 불가하며, 제품 당 실결제금액(할인 적용가)이 3만원 초과 시 마일리지 사용 가능합니다.</li>
                    <li>오프라인 매장 중 Kith Seoul은 한섬 마일리지 사용이 불가합니다.</li>
                    <!-- // [240618] 쇼핑 가이드 문안 변경 -->

                    <li>적립된 마일리지는 소멸 일자가 빠른 마일리지부터 우선적으로 차감됩니다.</li>
                    <li>구매로 적립된 한섬마일리지는 배송완료 10일 이후 지급되며, 유효기간은 적립일로부터 2년입니다.</li>
                    <!-- S: [231110] 한섬마일리지 안내문구 수정 -->
                    <li>이벤트로 지급된 한섬마일리지는 이벤트 SMS로 개별 사용 기간이 안내되며, 미 사용 시 소멸됩니다. (추후 별도 소멸안내 없음)</li>
                    <li>오프라인 매장에서 구매 시, 한섬 마일리지는 익일 적립되며 적립 즉시 사용 가능합니다.</li>
                    <!-- <li>주문 시 한섬마일리지 사용 후 구매자 책임(단순변심 등)으로 취소/반품 시, 유효기간이 만료된 한섬마일리지는 소멸됩니다.</li> -->
                    <li>한섬마일리지 사용하여 주문 후, 취소/반품 시점에 유효기간이 만료된 경우 취소/반품완료일 기준 7일 동안 복구됩니다. (미사용 소멸 시, 재복구 불가)</li>
                    <!-- E: [231110] 한섬마일리지 안내문구 수정 -->
                    <li>한섬마일리지는 정상/아울렛 오프라인 매장, 더한섬닷컴/E.Q.L/H패션몰에서 통합 운영됩니다. (2020년 9월 15일 부터)</li>
                    <li>향후 회원 혜택은 사전공지 후 변경될 수 있습니다.</li>
                  </ul>
                  <!-- //[퍼블수정]23.09.06 문구수정 -->
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  한섬마일리지 가입 및 사용 방법
                  <template #actions>
                    <i class="cmp-icon-etc cmp-icon-down">열기/닫기</i>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <!-- [퍼블수정]23.09.06 문구수정 -->
                  <ul class="cmp-dotList">
                    <li>전국 매장에서 신청하시면 즉시 가입 가능하며, 홈페이지를 통합 회원가입으로 한섬마일리지 가입이 가능합니다.</li>
                    <li>매장에서 상품을 구매하신 후 결제 시 고객정보를 확인해 주시면 마일리지 적립 및 사용이 가능합니다.</li>
                    <li>일부 행사 상품 구매 시 적립 및 사용이 제한될 수 있습니다.</li>
                    <li>
                      고객님의 적립내역 조회는 다음과 같은 방법으로 가능합니다.<br />
                      - 더한섬닷컴 접속 &gt; 마이페이지 &gt; 나의 혜택 &gt; 한섬마일리지<br />
                      - 한섬 고객센터 연락(1800-5700) 또는 가까운 매장 방문<br />
                      - 구매 시 마일리지 적립 및 사용에 대한 SMS 안내서비스 제공
                    </li>
                    <li>한섬 마일리지는 적립일로부터 2년간 유효하며, 유효기간 경과 시 소멸됩니다.</li>
                    <li>이벤트로 지급된 한섬마일리지는 개별 유효기간 내 미사용 시 소멸됩니다.</li>
                    <li>온라인 회원가입 시 오프라인과 명의가 다르면 마일리지 통합 사용이 불가합니다.</li>
                  </ul>
                  <!-- //[퍼블수정]23.09.06 문구수정 -->
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <div class="btn-primary">
              <v-btn large color="primary">한섬마일리지 조회</v-btn>
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
    panel: [0, 1],
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
