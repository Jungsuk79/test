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
                <dt>한섬 VVIP</dt>
                <dd>590,000<em class="unit">원</em></dd>
              </dl>
            </div>

            <div class="mileage-info">
              <dl class="mileage-sub">
                <dt>당월 사용횟수</dt>
                <dd><strong>5</strong> 회 / 당월 <strong>2</strong> 회</dd>
              </dl>
              <dl class="mileage-sub">
                <dt>할인 받은 금액</dt>
                <dd><strong>320,000</strong> 원</dd>
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
            <col width="138x" />
            <col width="374px" />
            <col width="248px" />
            <col width="auto" />
          </colgroup>
          <thead>
            <tr>
              <th>날짜</th>
              <th>내용</th>
              <th>구분</th>
              <th>내역</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2021.12.11</td>
              <td>더한섬닷컴 타임아울렛</td>
              <td>
                <p class="cmp-font c-gray">921,500원 취소</p>
              </td>
              <td><span class="cmp-font c-blue bold mr-2">+45,500</span>원 복원</td><!-- [퍼블수정]23.01.10 class 추가 및 띄어쓰기 삭제 -->
            </tr>
            <tr>
              <td>2021.12.11</td>
              <td>더한섬닷컴 타임옴므아울렛</td>
              <td>
                <p class="cmp-font">921,500원 구매</p>
              </td>
              <td><span class="cmp-font c-red bold mr-2">-45,500</span>원 사용</td><!-- [퍼블수정]23.01.10 class 추가 및 띄어쓰기 삭제 -->
            </tr>
            <tr>
              <td>2021.12.11</td>
              <td>더한섬닷컴 발리</td>
              <td>
                <p class="cmp-font c-gray">921,500원 취소</p>
              </td>
              <td><span class="cmp-font c-blue bold mr-2">+1,245,500</span>M 적립</td><!-- [퍼블수정]23.01.10 class 추가 및 띄어쓰기 삭제 -->
            </tr>
            <tr>
              <td>2021.12.11</td>
              <td>더한섬닷컴 발리</td>
              <td>
                <p class="cmp-font">921,500원 구매</p>
              </td>
              <td><span class="cmp-font c-red bold mr-2">-45,500</span>원 사용</td><!-- [퍼블수정]23.01.10 class 추가 및 띄어쓰기 삭제 -->
            </tr>
            <tr>
              <td>2021.12.11</td>
              <td>더한섬닷컴 타임옴므아울렛</td>
              <td>
                <p class="cmp-font">921,500원 구매</p>
              </td>
              <td><span class="cmp-font c-red bold mr-2">-45,500</span>원 사용</td><!-- [퍼블수정]23.01.10 class 추가 및 띄어쓰기 삭제 -->
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

        <v-expansion-panels v-model="panelS" multiple accordion class="cmp-acc acc-type2"><!--20221202 펼침 : v-model="panelS" multiple -->
          <v-expansion-panel>
            <v-expansion-panel-header>한섬 VVIP 안내
              <template #actions>
                <i class="cmp-icon-etc cmp-icon-down">열기/닫기</i>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <ul class="cmp-dotList">
                <li>한섬 VVIP 5% 할인은 정상 제품에 한하여 가능합니다. (아울렛, 행사 상품 등은 제외)</li>
                <li>오프라인에서 5% 할인 혜택을 받으실 경우, 반드시 우수고객 카드 지참 또는 더한섬닷컴 APP 바코드 인증시 할인 혜택 적용 가능합니다.</li>
                <li>한섬 온오프라인 통합 회원(본인인증 회원)은 온라인(더한섬닷컴)에서도 5% 할인 혜택을 받으실 수 있습니다. (간편 회원 제외)</li>
                <li>할인 한도는 년간 할인받을 수 있는 최대 한도(할인 금액 기준)이며, 온라인과 오프라인 합산하여 관리됩니다.</li>
                <li>5% 할인 혜택은 타 할인 행사(쿠폰 포함) 및 한섬 더블마일리지 행사와 중복 적용 불가합니다.</li>
                <li>5% 할인 적용 상품 구매 취소/반품 시 할인 한도 사용분은 취소/반품 승인완료 이후 복원됩니다.</li>
                <li>할인 한도 유효기간은 우수고객 멤버십 혜택 제공기간(해당년도 3월 1일 ~ 차년도 2월 말일)과 동일하며, 유효기간 경과 시 미사용 할인 한도는 일괄 소멸됩니다.</li>
               </ul>
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
    tabs:3,
    panelS : [0] // 20221202 펼침 
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
