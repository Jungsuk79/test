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
        <div class="benefit-box">
          <v-layout justify-space-between class="mileage-wrap">
            <div class="mileage-total">
              <dl>
                <dt>한섬마일리지</dt>
                <dd>342,000<em class="unit">M</em></dd>
              </dl>
            </div>

            <div class="mileage-info">
              <dl class="mileage-sub">
                <dt>오늘, 10/30 소멸 예정 마일리지</dt><!-- 20221213 텍스트 수정 -->
                <dd><strong>2,000</strong> M</dd>
              </dl>
              <dl class="mileage-sub">
                <dt>이번 달 소멸 예정 마일리지</dt><!-- 20221213 텍스트 수정 -->
                <dd><strong>0</strong> M</dd>
              </dl>
            </div>
          </v-layout>
        </div>
        <!--//이용내역-->

        <v-layout align-center justify-space-between>
          <div class="cmp-line-radio">
            <div class="radio-item">
              <input id="dateRadio0" type="radio" name="dateRadio" checked />
              <label for="dateRadio0">1주일</label>
            </div>
            <div class="radio-item">
              <input id="dateRadio1" type="radio" name="dateRadio" />
              <label for="dateRadio1">1개월</label>
            </div>
            <div class="radio-item">
              <input id="dateRadio2" type="radio" name="dateRadio" />
              <label for="dateRadio2">3개월</label>
            </div>
          </div>
          <CommonCalendarBox />
        </v-layout>

        <table class="table-type1">
          <colgroup>
            <col width="148x" />
            <col width="574px" />
            <col width="auto" />
          </colgroup>
          <thead>
            <tr>
              <th>날짜</th>
              <th>내용</th>
              <th>내역</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2021.12.11</td>
              <td>더한섬닷컴 타임아울렛</td>
              <td><span class="cmp-font c-blue bold">+2,310</span> M 적립</td>
            </tr>
            <tr>
              <td>2021.12.11</td>
              <td>더한섬닷컴 타임옴므아울렛</td>
              <td><span class="cmp-font c-red bold">-1,052,120</span> M 사용취소</td>
            </tr>
            <tr>
              <td>2021.12.11</td>
              <td>현대가산 오브제</td>
              <td><span class="cmp-font c-blue bold">+10,000</span> M 적립</td>
            </tr>
            <tr>
              <td>2021.12.11</td>
              <td>상품평 마일리지</td>
              <td><span class="cmp-font c-blue bold">+2,000</span> M 적립</td>
            </tr>
            <tr>
              <td>2021.12.11</td>
              <td>스타일 투표 이벤트 – 1만점 혜택</td>
              <td><span class="cmp-font c-red bold">-2,000</span> M 회수</td>
            </tr>

            <!--내역이 없는 경우
            <tr>
              <td colspan="4">
                <CommonNoData msg="마일리지 적립/사용 내역이 없습니다."/>
              </td>
            </tr>
            -->
          </tbody>
        </table>

        <ProductListPaging />

        <v-expansion-panels accordion class="cmp-acc acc-type2">
          <v-expansion-panel>
            <v-expansion-panel-header
              >한섬 마일리지 안내
              <template #actions>
                <i class="cmp-icon-etc cmp-icon-down">열기/닫기</i>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <!-- [240703] 나의 혜택 문구 변경 -->
              <ul class="cmp-dotList">
                <li>한섬마일리지는 정상 구매금액의 5%, 아울렛 구매금액의 1% 적립됩니다. (10% 초과 할인상품 제외)<br />
                  - 오프라인 : 백화점 5%(단, 타미힐피거 할인율 1~30%건 1%), 아울렛 1%, EQL/Kith Seoul 1%<br />
                  - 더한섬닷컴 : 정상 제품 5%, 아울렛 제품 1%
                </li>
                <li>적립된 마일리지는 소멸 일자가 빠른 마일리지부터 우선적으로 차감됩니다.</li>
                <li>구매로 적립된 한섬마일리지는 배송완료 10일 이후 지급되며, 유효기간은 적립일로부터 2년입니다.</li>
                <li>이벤트로 지급된 한섬마일리지는 이벤트 SMS로 개별 사용 기간이 안내되며, 미 사용 시 소멸됩니다. (추후 별도 소멸안내 없음)</li>
                <li>한섬마일리지 사용하여 주문 후, 취소/반품 시점에 유효기간이 만료된 경우 취소/반품완료일 기준 7일 동안 복구됩니다. (미사용 소멸 시, 재복구 불가)</li>
                <li>오프라인 매장에서 구매 시, 한섬 마일리지는 익일 적립되며 적립 즉시 사용 가능합니다.</li>
                <li>10% 초과 할인 상품은 마일리지 사용 불가하며, 제품 당 실결제금액(할인 적용가)이 3만원 초과 시 마일리지 사용 가능합니다.</li>
                <li>오프라인 매장 중 Kith Seoul은 한섬 마일리지 사용이 불가합니다.</li>
              </ul>
              <!-- // [240703] 나의 혜택 문구 변경 -->
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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
    tabs:0,
  }),
  created() {
    const me = this
    const json = require('~/static/json/mypage_left_menu.json')
    me.menuList = json.list
  },
  methods: {
  
  },
}
</script>
<style lang="scss" scoped>
 @import '@/assets/scss/pages/member.scss'; 
</style>
