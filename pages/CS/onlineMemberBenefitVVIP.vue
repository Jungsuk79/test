<template>
  <v-layout class="contents contents-type2"><!--// 공통 class="contents", 해당 메뉴 전용 class="content-메뉴명", 해당 페이지 전용 class="content-페이지명" -->
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'고객센터'" :left-data="menuList" :page-class="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="member-benefit vvip">

            <div class="cmp-page-tit">
              <h2 class="tit">한섬 회원 혜택</h2>
            </div>                
            
            <!-- 상단 탭 -->
            <div class="cmp-tabs tabs-actionTop">
              <v-tabs fixed-tabs>
                <v-tab to="onlineMemberBenefit">온라인 멤버십 혜택</v-tab>
                <v-tab to="onlineMemberBenefitVVIP">한섬 VVIP 혜택</v-tab>
              </v-tabs>
            </div>   
            <!-- //상단 탭 -->       

            <div class="tab-content">
              <div class="levelBenefit-conts full-width">
                <div class="title-area">
                  <p class="cmp-font fnt-16">한섬 우수고객님께 드리는 혜택</p>
                  <div class="level-tit">
                    <span class="level">VVIP</span>
                  </div>
                  <p class="cmp-font">
                    1년간(01.01~12.31) 한섬에서 구매 금액이 일정수준 이상 되시면,<br />
                    다음해 우수고객으로 모십니다.
                  </p>
                </div>
                <ul class="round-list">
                  <li>
                    <img src="/images/cs/icon_voucher.svg" alt="">
                    <p>5% 할인<br />혜택</p>
                  </li>
                  <li>
                    <img src="/images/cs/icon_gift.svg" alt="">
                    <p>전용 서비스와<br />기프트</p>
                  </li>
                  <li>
                    <img src="/images/cs/ico-60-rewards.svg" alt="">
                    <p>이벤트 등<br />다양한 혜택</p>
                  </li>
                </ul>
                <div class="info-area">
                  <ul class="cmp-dotList">
                    <li>
                      <dl>
                        <dt>선정 기준</dt>
                        <!-- [퍼블수정] 24.01.03 수정 & 추가요청 반영 -->
                        <dd>2023.01.01 ~ 2023.12.31<br />온/오프라인 합산 연간 1,000만원 이상 구매 회원</dd><!-- [날짜 자동 세팅] -->
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>혜택 제공 기간</dt>
                        <!-- [퍼블수정] 24.01.03 수정 & 추가요청 반영 -->
                        <dd>2024.03.01 ~ 2025.02.28 (1년)</dd><!-- [날짜 자동 세팅] -->
                      </dl>
                    </li>
                  </ul>
                  <div class="cmp-info info-type2">
                    <!-- [퍼블수정] 24.01.03 수정 & 추가요청 반영 -->
                    <p class="cmp-font fnt-14 mt-30">아래의 내용은 2023년 구매고객 대상 2024년도에 제공되는 혜택이며, 제공 혜택은 매년 변경될 수 있습니다.</p>

                  </div>
                  <!-- VVIP페이지 문구 및 링크 추가 -->
                  <p class="mt-14">
                    <nuxt-link class="cmp-font fnt-14 button" to="#n">2025년 VVIP혜택 미리보기  <i class="cmp-icon cmp-icon-12 i-next"></i></nuxt-link>
                    <!-- https://www.thehandsome.com/ko/CS/csCenterNoticeDetail/1006698 -->
                  </p>
                </div>
              </div>
              <!--전체 등급혜택-->
              <div class="benefit-tabs-conts">
                <div class="tabs-black full-width">
                  <v-tabs v-model="tabs1">
                    <v-tab>
                      <i class="cmp-icon-etc cmp-icon-36 i-level-silver">SILVER</i>
                      <p class="name">SILVER</p>
                    </v-tab>
                    <v-tab>
                      <i class="cmp-icon-etc cmp-icon-36 i-level-gold">gold</i>
                      <p class="name">GOLD</p>
                    </v-tab>
                    <v-tab>
                      <i class="cmp-icon-etc cmp-icon-36 i-level-platinum">platinum</i>
                      <p class="name">PLATINUM</p>
                    </v-tab>
                    <v-tab>
                      <i class="cmp-icon-etc cmp-icon-36 i-level-theFirst">THE FIRST</i>
                      <p class="name">THE FIRST</p>
                    </v-tab>
                  </v-tabs>
                </div>

                <div class="tab-content">
                  <div class="info-panels">
                    <v-tabs-items v-model="tabs1" touchless class="myBenefit-card">
                    
                      <!-- silver -->
                      <v-tab-item :transition="false">
                        <div class="grade-level-conts">
                          <v-layout wrap align-center class="item-level">
                            <i class="cmp-icon-etc cmp-icon-36 i-level-silver">silver</i>
                            <div>
                              <v-layout wrap align-center class="user-lavel">
                                <p class="lavel-name">SILVER</p>
                                <div class="cmp-labels">
                                  <span class="label">내 등급</span>
                                </div>
                              </v-layout>
                              <!-- [퍼블수정] 24.01.03 수정 & 추가요청 반영 -->
                              <p class="data">2024.03.01 ~ 2025.02.28</p><!-- [날짜 자동 세팅] -->
                            </div>
                          </v-layout>
                          <p class="graph-text">1,000만원 이상 구매</p>
                        </div>
                      </v-tab-item>
                      <!--//silver -->
                      <!-- gold -->
                      <v-tab-item :transition="false">
                        <div class="grade-level-conts">
                          <v-layout wrap align-center class="item-level">
                            <i class="cmp-icon-etc cmp-icon-36 i-level-gold">gold</i>
                            <div>
                              <v-layout wrap align-center class="user-lavel">
                                <p class="lavel-name">GOLD</p>
                              </v-layout>
                              <!-- [퍼블수정] 24.01.03 수정 & 추가요청 반영 -->
                              <p class="data">2024.03.01 ~ 2025.02.28</p><!-- [날짜 자동 세팅] -->
                            </div>
                          </v-layout>
                          <p class="graph-text">2,000만원 이상 구매</p>
                        </div>
                      </v-tab-item>
                      <!--//gold -->
                      <!-- platinum -->
                      <v-tab-item :transition="false">
                        <div class="grade-level-conts">
                          <v-layout wrap align-center class="item-level">
                            <i class="cmp-icon-etc cmp-icon-36 i-level-platinum">platinum</i>
                            <div>
                              <v-layout wrap align-center class="user-lavel">
                                <p class="lavel-name">PLATINUM</p>
                              </v-layout>
                              <!-- [퍼블수정] 24.01.03 수정 & 추가요청 반영 -->
                              <p class="data">2024.03.01 ~ 2025.02.28</p><!-- [날짜 자동 세팅] -->
                            </div>
                          </v-layout>
                          <p class="graph-text">3,500만원 이상 구매</p><!-- [개발반영 요청] -->
                        </div>
                      </v-tab-item>
                      <!-- //platinum -->
                      <!-- theFirst -->
                      <v-tab-item :transition="false">
                        <div class="grade-level-conts">
                          <v-layout wrap align-center class="item-level">
                            <i class="cmp-icon-etc cmp-icon-36 i-level-theFirst">theFirst</i>
                            <div>
                              <v-layout wrap align-center class="user-lavel">
                                <p class="lavel-name">THE FIRST</p>
                              </v-layout>
                              <!-- [퍼블수정] 24.01.03 수정 & 추가요청 반영 -->
                              <p class="data">2024.03.01 ~ 2025.02.28</p><!-- [날짜 자동 세팅] -->
                            </div>
                          </v-layout>
                          <p class="graph-text">상위 1,000명</p>
                        </div>
                      </v-tab-item>
                      <!--//theFirst -->
                    </v-tabs-items>

                    <div class="myBenefit-conts contents-line4-box">
                      <v-expansion-panels v-model="drawer" accordion class="cmp-acc acc-type2">
                        <v-expansion-panel v-for="(item,index) in myBenefitData[tabs1].list" :key="index">
                          <v-expansion-panel-header>
                            {{item.benefitName}}
                            <div v-if="item.vvipLabel" class="cmp-labels">
                              <span class="label black c-white">VVIP</span>
                            </div>
                            <span v-if="item.benefitInfo" class="c-blue">{{item.benefitInfo}}</span>
                            <template #actions>
                              <i v-cmp-icon="{ size: 12, name: 'down' }" class="arrow-toggle">열기/닫기</i>
                            </template>
                          </v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <!-- eslint-disable -->
                            <p v-html="item.benefitTxt"></p>
                            <!-- eslint-disable -->
                            <nuxt-link v-if="item.benefitTxtLinkText" class="cmp-font button mt-24" :to="item.benefitTxtLink">{{item.benefitTxtLinkText}}<i class="cmp-icon cmp-icon-12 i-next"></i></nuxt-link>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>
                    </div>
                    <!-- 혜택안내 -->
                    <div class="info-bottom contents-line-box">
                      <h4 class="info-title">혜택안내</h4>
                      <div class="ellipsis-area">
                        <ul class="cmp-dotList">
                          <li>구매금액은 실 결제금액 기준이며 마일리지 사용 등은 제외됩니다.</li>
                          <!-- [240723] 문구변경 -->
                          <!-- <li>특정 브랜드 (또는 상품) 마일리지 적립 과다, 대여 및 공동 적립, 그에 따른 재물 수취(상품권 등), 온라인 재판매, 탈세 등 부정 사용 및 비정상 거래로 판단되는 경우 우수고객선정 및 혜택 제공에서 제외 될 수 있습니다.</li> -->
                          <li>한섬 통합 멤버십 이용약관 제 6조(금지행위)에 해당되는 행위, 특정 브랜드 (또는 상품) 마일리지 적립 과다, 대여 및 공동 적립, 그에 따른 재물 수취(상품권 등), 온라인 재판매, 탈세, 택갈이 등 부정 사용 및 비정상 거래로 판단되는 경우 선정 기준년도와 상관없이 우수고객 선정 및 혜택 제공에서 즉시 제외될 수 있습니다.</li>
                          <!-- // [240723] 문구변경 -->
                          <li>우수고객 등급 선정 후 매출 과다 취소로 인한 마이너스 발생 시 등급 하향 또는 소멸될 수 있습니다.</li>
                          <li>온라인 맴버십 ‘THE 클럽’은 별도로 선정되며, 혜택 또한 추가 적용됩니다.</li>
                          <!-- [퍼블수정] 24.01.03 수정 & 추가요청 반영 -->
                          <!-- <li>사전 안내드린것과 같이 2022년 1년간 구매실적 기준으로 2023년 대상자 선정 시<br />PLATINUM 등급 기준 3천만원 ▷ 3천5백만원 이상으로 향상되었습니다.<br />-2022년 VVIP PLATINUM 혜택 ‘5%할인: 월4회, 2백만 / 더한섬하우스 라운지: 월8회’로 적용됩니다.</li>[개발반영 요청] -->
                        </ul>
                      </div>
                    </div>
                    <!-- //혜택안내 -->
                    <!-- 유의사항 -->
                    <div class="contents-line-box"><!-- [퍼블수정] 22.10.12 -->
                      <h4 class="info-title">유의사항</h4>
                      <div class="ellipsis-area">
                        <ul class="cmp-dotList">
                          <li>THE FIRST ~ GOLD 회원께는 우수고객 전용카드가 2월내 우편으로 배송될 예정입니다. (SILVER 회원 더한섬닷컴 APP 카드 사용)</li>
                          <!-- <li>5% 할인은 정상 제품에 한하여 가능합니다. (아울렛, 행사 상품 등 제외) -->
                          <!-- [퍼블수정] 24.01.03 수정 & 추가요청 반영 -->
                          <li>5%할인은 정상제품에 한하여 가능하며, 중복 할인 행사 적용 불가합니다.(아울렛, 행사상품, 중복 행사 에누리 등 제외)
                          <br />5% 할인 혜택을 받으실 경우, 반드시 우수고객 카드 지참 또는 더한섬닷컴 APP 바코드 인증시 할인 혜택 적용 가능합니다.
                          <br />할인 한도는 년간 할인 받으실 수 있는 최대 한도입니다. 할인금액 기준이며 홈페이지 또는 매장 방문하여 한도 조회 가능합니다.</li>
                          <li>생일 선물 및 명절 선물은 회원 주소에 따라 발송되오니, 사전에 주소지를 반드시 확인하여 주시기 바랍니다. </li>
                          <li>한섬 THE FIRST CLASS는 수도권 월1회 / 지방 격월로 운영됩니다. 매월 다른 주제로 진행되며 사전에 초청 및 접수안내를 별도로 드릴 예정입니다.
                          <br />단, 클래스 한정인원으로 선착순 마감될 수 있으며, 동반 포함 시 횟수 차감됩니다.</li>
                          <li>
                            무상 A/S의 경우 아울렛, 행사 상품을 제외한 정상 제품에 한하여 가능합니다.<br />
                            <!-- (예시: 2023년 PLATINUM 구매일로부터 4년내 (19~22년) 정상 제품 AS 가능)<br />[개발반영 요청] -->
                            <!-- [퍼블수정] 24.01.03 수정 & 추가요청 반영 -->
                            (예시: 2024년 PLATINUM 구매일로부터 4년내(‘20~’23년) 정상 제품 AS 가능)<br /><!-- [개발반영 요청] -->
                            찢김, 태움, 디자인변경, 부속물 추가에 대해서는 유상으로 진행됩니다.<br />
                            수선 원,부자재가 없는 경우, 수선이 불가하거나 유사 자재로 진행될 수 있습니다.<br />
                            A/S 수선 접수 후 제품 상태에 따라 수선이 불가할 수 있습니다.
                          </li>
                          <li>신상품 입고알림은 매장 입고 즉시 우수고객님께 LMS로 발송되어, 마케팅 SMS 수신동의 고객에 한하여 발송 가능합니다.</li>
                          <li>토탈케어서비스는 당사 3년이내 구매제품(단, 가죽,모피류는 별도 상담 후 진행가능) 대상 연중 상시 진행됩니다. 드라이크리닝 서비스(기본) 진행 제품에 한하여 수선 및 보관(3~6개월)까지 선택하여 진행하실 수 있습니다.
                          <br />드라이크리닝 및 보관 서비스 진행 시 사전 제품 검수 후 위험 제품에 대해서는 서비스 진행이 어려울 수 있습니다.
                          <br />→ 접수방법 : 매장접수 / 택배접수(컨시어지 요청: 031-388-0260)
                          <br />→ 등급별 PCS수 : THE FIRST1(1억5천이상) 년4pcs / THE FIRST2(1억이상) 년3pcs / THE FIRST3(그 외) 년2pcs
                          <br />한섬에서 무상서비스 제공되며 상기 기준 외 초과되는 pcs, 추가 제품 희망 및 보관기간 연장 시 고객 부담입니다.
                          <br />(의류 보관서비스 1개월 1pcs 당 6천원, 드라이비용 별도 컨시어지 상담으로 자세히 안내드립니다.)
                          <br />THE FIRST 토탈케어서비스 문의 : 031-388-0260 / 온라인 VIP 한섬케어세탁 문의 : 1800-5700(1번)</li> 
                          <li>더한섬하우스 VIP라운지는 부산(부산 해운대구 좌동로 19) / 광주(광주 광산구 왕버들로87) / 제주(제주시 연북로 257) / 청주(충북 청주시 서원구 미평동 35-8 에버세이브 D동-a동)에 위치하고 있으며, 방문 시 음료/다과 서비스 이용가능합니다.
                          <br />※ 더한섬하우스 방문시 등급별 할인 혜택 받으실 수 있습니다.
                          <br />(THE FIRST, PLATINUM 20% / GOLD 15% / SILVER 10%) </li>
                          <li>우수고객 혜택 관련 문의 : 한섬 본사 고객케어팀 02-3416-2517</li>
                        </ul>
                      </div>
                    </div>
                    <!-- //유의사항 -->
                  </div>

                </div>
              </div>
              <!--//전체 등급혜택-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-layout>
</template>

<script>

export default {
  components: {
  },
  layout: 'LayoutBasics',
  data: () => ({
    tabs : 2,
    tabs1 : 0,
    drawer: undefined,
    myBenefitData : [
      {
        level: "silver",
        list: [
          { // [퍼블수정] 22.12.23 간격 수정요청 반영
            "benefitName" : '5% 할인 혜택',
            'benefitInfo' : '월 1회/40만원/년',
            'vvipLabel' : false,
            'benefitTxt' : `
              정상 제품 구매시 5% 할인 (아울렛, 행사 상품은 제외/오프라인/온라인(더한섬닷컴)에서 구매 시 할인 적용)<br />* 이용 횟수 / 할인 한도 : 월 1회 / 40만원/년
            `
          },
          {
            "benefitName" : '상품 책임제 (무상 A/S)',
            'benefitInfo' : '2년',
            'vvipLabel' : false,
            'benefitTxt' : '정상 제품 무상 A/S (아울렛, 행사 상품은 제외) <br />예시. ‘24년 SILVER : 구매일로부터 2년내(’22~’23년)정상 제품 A/S 가능'  // [퍼블수정] 24.01.03 수정 & 추가요청 반영
          },
          // { // [퍼블수정] 22.10.12 문구 추가
          //   "benefitName" : '신상품 입고알림',
          //   'benefitInfo' : '',
          //   'vvipLabel' : false,
          //   'benefitTxt' : '신상품 매장 입고 즉시 LMS로 안내드리는 알림 서비스<br />(마케팅정보 수신 동의 및 SMS 수신 동의 고객에 한하여 발송)'
          // },
          {
            "benefitName" : '더한섬하우스 VIP 라운지',
            'benefitInfo' : '월 4회 (본인포함 3인)',
            'vvipLabel' : false,
            'benefitTxt' : '위치 : 부산(부산 해운대구 좌동로 19) / 광주(광주 광산구 왕버들로87) / 제주(제주시 연북로 257) / 청주(충북 청주시 서원구 미평동 35-8 에버세이브 D동-a동) 방문 시 음료/다과 서비스 이용 가능'
          }
        ]
      },
      {
        level: "gold",
        list: [
          { // [퍼블수정] 22.12.23 간격 수정요청 반영
            "benefitName" : '5% 할인 혜택',
            'benefitInfo' : '월 3회/1백만원/년',
            'vvipLabel' : false,
            'benefitTxt' : `
              정상 제품 구매시 5% 할인 (아울렛, 행사 상품은 제외/오프라인/온라인(더한섬닷컴)에서 구매 시 할인 적용)<br />* 이용 횟수 / 할인 한도 : 월 3회 / 1백만원/년
            `
          },
          {
            "benefitName" : '생일선물',
            'benefitInfo' : '년 1회',
            'vvipLabel' : false,
            'benefitTxt' : '생일을 맞은 GOLD 등급 회원님께 드리는 특별한 선물(사전 등록된 회원 주소로 발송)'
          },
          {
            "benefitName" : '상품 책임제 (무상 A/S)',
            'benefitInfo' : '3년',
            'vvipLabel' : false,
            'benefitTxt' : '정상 제품 무상 A/S (아울렛, 행사 상품은 제외) <br />예시. ‘24년 GOLD : 구매일로부터 3년내(’21~’23년)정상 제품 A/S 가능'  // [퍼블수정] 24.01.03 수정 & 추가요청 반영
          },
          // { // [퍼블수정] 22.10.12 문구 추가
          //   "benefitName" : '신상품 입고알림',
          //   'benefitInfo' : '',
          //   'vvipLabel' : false,
          //   'benefitTxt' : '신상품 매장 입고 즉시 LMS로 안내드리는 알림 서비스<br />(마케팅정보 수신 동의 및 SMS 수신 동의 고객에 한하여 발송)'
          // },
          {
            "benefitName" : '더한섬하우스 VIP 라운지',
            'benefitInfo' : '월 6회 (본인포함 3인)',
            'vvipLabel' : false,
            'benefitTxt' : '위치 : 부산(부산 해운대구 좌동로 19) / 광주(광주 광산구 왕버들로87) / 제주(제주시 연북로 257) / 청주(충북 청주시 서원구 미평동 35-8 에버세이브 D동-a동) 방문 시 음료/다과 서비스 이용 가능'
          }
        ]
      },
      {
        level: "platinum",
        list: [
          { // [퍼블수정] 22.12.23 간격 수정요청 반영
            "benefitName" : '5% 할인 혜택',
            'benefitInfo' : '월 10회/3백만원/년',
            'vvipLabel' : false,
            'benefitTxt' : `
              정상 제품 구매시 5% 할인 (아울렛, 행사 상품은 제외/오프라인/온라인(더한섬닷컴)에서 구매 시 할인 적용)<br />* 이용 횟수 / 할인 한도 : 월 10회 / 3백만원/년`
          },
          {
            "benefitName" : '생일선물',
            'benefitInfo' : '년 1회',
            'vvipLabel' : false,
            'benefitTxt' : '생일을 맞은 PLATINUM 등급 회원님께 드리는 특별한 선물(사전 등록된 회원 주소로 발송)'
          },
          {
            "benefitName" : '상품 책임제 (무상 A/S)',
            'benefitInfo' : '4년',
            'vvipLabel' : false,
            'benefitTxt' : '정상 제품 무상 A/S (아울렛, 행사 상품은 제외) <br />예시. ‘24년 PLATINUM : 구매일로부터 4년내(’20~’23년)정상 제품 A/S 가능'  // [퍼블수정] 24.01.03 수정 & 추가요청 반영
          },
          // { // [퍼블수정] 22.10.12 문구 추가
          //   "benefitName" : '신상품 입고알림',
          //   'benefitInfo' : '',
          //   'vvipLabel' : false,
          //   'benefitTxt' : '신상품 매장 입고 즉시 LMS로 안내드리는 알림 서비스<br />(마케팅정보 수신 동의 및 SMS 수신 동의 고객에 한하여 발송)'
          // },
          {
            "benefitName" : '더한섬하우스 VIP 라운지',
            'benefitInfo' : '월 10회 (본인포함 3인)',
            'vvipLabel' : false,
            'benefitTxt' : '위치 : 부산(부산 해운대구 좌동로 19) / 광주(광주 광산구 왕버들로87) / 제주(제주시 연북로 257) / 청주(충북 청주시 서원구 미평동 35-8 에버세이브 D동-a동) 방문 시 음료/다과 서비스 이용 가능'
          }
        ]
      },
      {
        level: "thsFirst",
        list: [
          { // [퍼블수정] 22.12.23 간격 수정요청 반영
            "benefitName" : '5% 할인 혜택',
            'benefitInfo' : '',
            'vvipLabel' : false,
            'benefitTxt' : `
              정상 제품 구매시 5% 할인 (아울렛, 행사 상품은 제외/오프라인/온라인(더한섬닷컴)에서 구매 시 할인 적용)
              <dl class="limit mt-0">
                <dt>할인 한도</dt>
                <dd>THE FIRST 1 (1억 5천이상) : 1천만</dd>
                <dd>THE FIRST 2 (1억이상) : 7백만</dd>
                <dd>THE FIRST 3 (그外) : 4백만</dd>
              </dl>
            `
          },
          {
            "benefitName" : '생일선물',
            'benefitInfo' : '년 1회',
            'vvipLabel' : false,
            'benefitTxt' : '생일을 맞은 THE FIRST 등급 회원님께 드리는 특별한 선물(사전 등록된 회원 주소로 발송)'
          },
          {
            "benefitName" : '명절선물',
            'benefitInfo' : '년 2회',
            'vvipLabel' : false,
            'benefitTxt' : 'THE FIRST등급 회원님의 격에 맞춘 명절맞이 감사 선물(명절 1~2주전, 사전 등록된 회원 주소로 발송)'
          },
          { // [퍼블수정] 22.12.23 간격 수정요청 반영
            "benefitName" : '한섬 THE FIRST CLASS 초청',
            'benefitInfo' : '',
            'vvipLabel' : false,
            'benefitTxt' : `
              매 월(수도권 월 1회, 지방 격월) 색다른 주제로 진행되는<br />THE FIRST 회원님만을 위한 Special Class<br />(초청 및 접수 안내 별도 고지 예정)
              <dl class="limit mt-0">
                <dt>이용 횟수</dt>
                <dd>THE FIRST 1 (1억 5천이상) : 년 6회</dd>
                <dd>THE FIRST 2 (1억이상) : 년 4회</dd>
                <dd>THE FIRST 3 (그外) : 년 2회</dd>
              </dl>
            `
          },
          {
            "benefitName" : '상품 책임제 (무상 A/S)',
            'benefitInfo' : '',
            'vvipLabel' : false,
            'benefitTxt' : '정상 제품 무상 A/S (아울렛, 행사 상품은 제외) <br />예시. ‘24년 THE FIRST : 무제한 A/S 가능'  // [퍼블수정] 24.01.03 수정 & 추가요청 반영
          },
          { // [퍼블수정] 24.01.03 수정 & 추가요청 반영
            "benefitName" : 'Fast A/S Service',
            'benefitInfo' : '',
            'vvipLabel' : false,
            'benefitTxt' : '본사 수선접수건 선처리 진행'
          },
          // { // [퍼블수정] 22.10.12 문구 수정
          //   "benefitName" : '신상품 입고알림',
          //   'benefitInfo' : '',
          //   'vvipLabel' : false,
          //   'benefitTxt' : '신상품 매장 입고 즉시 LMS로 안내드리는 알림 서비스<br />(마케팅정보 수신 동의 및 SMS 수신 동의 고객에 한하여 발송)'
          // },
          { // [퍼블수정] 22.12.23 간격 수정요청 반영
            "benefitName" : '토탈케어서비스',
            'benefitInfo' : '',
            'vvipLabel' : false,
            'benefitTxt' : `
              토탈케어서비스는 당사 구매제품(가죽·모피류 제외)대상 연중 상시 진행<br />접수방법 : ① 매장 접수 ② 택배 접수 (드라이클리닝 업체 픽업요청) / 직접 택배사 접수(착불)
              <dl class="limit mt-0">
                <dt>이용 횟수</dt>
                <dd>THE FIRST 1 (1억 5천이상) : 년 4회</dd>
                <dd>THE FIRST 2 (1억이상) : 년 3회</dd>
                <dd>THE FIRST 3 (그外) : 년 2회</dd>
              </dl>
            `
          },
          {
            "benefitName" : '더한섬하우스 VIP 라운지',
            'benefitInfo' : '일 1회 (본인포함 4인)',
            'vvipLabel' : false,
            'benefitTxt' : '위치 : 부산(부산 해운대구 좌동로 19) / 광주(광주 광산구 왕버들로87) / 제주(제주시 연북로 257) / 청주(충북 청주시 서원구 미평동 35-8 에버세이브 D동-a동) 방문 시 음료/다과 서비스 이용 가능'
          },
           { // 20220929 추가
            "benefitName" : '1:1 퍼스널 상담서비스',
            'benefitInfo' : '(최초 1회 본인 인증 접속 필요)',
            'vvipLabel' : false,
            'benefitTxt' : 'URL 접속 후 ‘로봇모양’ 클릭',
            'benefitTxtLink' : 'http://pf.kakao.com/_TxnxaWb',
            'benefitTxtLinkText' : 'http://pf.kakao.com/_TxnxaWb'
          }
        ]
      },
    ],
  }),
  watch: {
    tabs1() {
      this.drawer = undefined;
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
