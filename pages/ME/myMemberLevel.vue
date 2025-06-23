<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <ContentsLeftMenu :title="'마이페이지'" :left-data="menuList"></ContentsLeftMenu>

      <div class="my-page-r-box content-rank">
        <div class="cmp-page-tit">
          <h2 class="tit">나의 회원등급</h2>
        </div>

        <!-- 등급(FRIEND,CREW,MANIA)-->
        <div v-if="levelMode">
          <div class="grade-level-conts">
            <v-layout justify-start>
              <div class="level-info">
                <p class="user-info">더한섬님의 현재등급은</p>

                <div class="user-lavel">
                  <p>
                    <i class="cmp-icon-etc cmp-icon-48 i-level-friend">Friend</i>
                    <!-- 등급 ICON
                      <i class="cmp-icon-etc cmp-icon-48 i-level-crew">Crew</i>
                      <i class="cmp-icon-etc cmp-icon-48 i-level-mania">Mania</i>
                    -->
                  </p>
                  <p class="lavel-name">FRIEND</p>
                  <div class="cmp-labels">
                    <span class="label">임직원</span>
                  </div>
                </div>  

                <p class="user-data">2023.02.01~ 2023.07.31</p> <!-- [날짜 자동 세팅] -->
              </div>

              <div class="level-graph">
                <p class="graph-text">
                  <!-- S : [231101] THE 클럽 등급 표기 개선 -->
                  <!-- [퍼블수정]07.19 툴팁 추가 -->
                  <!-- <strong>1,544,000원</strong> 더 구매하시면, 2023년 하반기 CREW 등급[날짜 자동 세팅]<CommonTooltipBox :tooltip-list="tooltipList.gradeinfo" icon-type="info" right /> -->
                  2023년 12월 31일까지 <strong>1,544,000원</strong> 더 구매하시면<br />2024년 상반기 CREW 등급
                  <!-- //[퍼블수정]07.19 툴팁 추가 -->
                  <!-- E : [231101] THE 클럽 등급 표기 개선 -->
                </p>
                <div class="graph-conts">
                  <div class="cmp-graph">
                    <strong class="graph-txt start-txt">FRIEND</strong>
                    <span class="graph-bar">
                      <span class="bar-fill" style="width: 25%"> </span>
                      <span class="bar-bg">
                        <span class="bar-stop"></span>
                        <span class="bar-stop"></span>
                        <span class="bar-stop"></span>
                        <span class="bar-stop"></span>
                      </span>
                    </span>
                    <strong class="graph-txt end-txt">CREW</strong>
                  </div>
                </div>
              </div>
            </v-layout>
          </div>

          <div class="cmp-sub-tit">
            <h3 class="tit">나의 혜택</h3>
            <!-- [퍼블수정]22.12.08  -->
            <nuxt-link class="cmp-font fnt-13 button" to="#n"><span class="line">쿠폰 바로가기</span></nuxt-link>
          </div>

          <v-expansion-panels accordion class="cmp-acc acc-type2">
            <!--FRIEND / CREW / MANIA-->
            <v-expansion-panel v-for="(item,index) in MANIA" :key="index">
              <v-expansion-panel-header>
                {{item.benefitName}}
                <div v-if="item.vvipLabel" class="cmp-labels">
                  <span class="label black c-white">VVIP</span>
                </div>
                <span v-if="item.benefitInfo" class="c-blue">{{item.benefitInfo}}</span>
                <template #actions>
                  <i class="cmp-icon-etc cmp-icon-down">열기/닫기</i>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <p v-html="newLine(item.benefitTxt)"></p>
                <nuxt-link v-if="item.couponmore" class="cmp-font fnt-14 button" to="#n">쿠폰 바로가기<i class="cmp-icon cmp-icon-12 i-next"></i></nuxt-link> 
                <nuxt-link v-if="item.handsomecare" class="cmp-font fnt-14 button" to="#n">서비스 자세히 보기  <i class="cmp-icon cmp-icon-12 i-next"></i></nuxt-link> 
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <v-layout justify-space-between class="cmp-btnsArea">
            <v-btn outlined large color="primary" @click="pubCheckBtn">온라인 등급 안내사항</v-btn>
            <v-btn large color="primary">전체 등급 혜택 보기</v-btn>
          </v-layout>
        </div>
        <!-- // 등급(FRIEND,CREW,MANIA)-->

        <!--등급(STAR 이상)-->
        <div>
          <div class="cmp-tabs tabs-actionTop">
            <v-tabs v-model="tabs" fixed-tabs>
              <v-tab>온라인 등급</v-tab>
              <v-tab>한섬 VVIP</v-tab>
            </v-tabs>
          </div>

          <div class="tab-content">
            <v-tabs-items v-model="tabs">
              <!-- 온라인 등급 -->
              <v-tab-item transition="fade-transition">
                <div class="grade-level-conts">
                  <v-layout justify-start>
                    <div class="level-info">
                      <p class="user-info">더한섬님의 현재등급은</p>

                      <div class="user-lavel">
                        <p>
                          <i class="cmp-icon-etc cmp-icon-48 i-level-star">STAR</i>
                          <!-- 등급 ICON
                            <i class="cmp-icon-etc cmp-icon-48 i-level-theStar">Thestar</i>
                            <i class="cmp-icon-etc cmp-icon-48 i-level-silver">Silver</i>
                            <i class="cmp-icon-etc cmp-icon-48 i-level-gold">Gold</i>
                            <i class="cmp-icon-etc cmp-icon-48 i-level-platinum">Platinum</i>
                            <i class="cmp-icon-etc cmp-icon-48 i-level-theFirst">TheFirst</i>
                          -->
                        </p>
                        <p class="lavel-name">STAR</p>
                        <div class="cmp-labels">
                          <span class="label">임직원</span>
                        </div>
                      </div>  

                      <p class="user-data">2023.02.01~ 2023.07.31</p> <!-- [날짜 자동 세팅] -->
                    </div>

                    <div class="level-graph">
                      <!-- S : [231101] THE 클럽 등급 표기 개선 -->
                      <!-- [퍼블수정]07.19 툴팁 추가 -->
                      <p class="graph-text">별처럼 빛나는 STAR 등급이십니다.</p>
                      <!-- <p class="graph-text">현재 <strong>11,747,250</strong>원을 구매하여 2023년 하반기 STAR 등급<CommonTooltipBox :tooltip-list="tooltipList.gradeinfo" icon-type="info" right /></p> -->
                      <p class="graph-text">STAR 등급 중 <strong>상위 100분</strong>에게는 THE STAR 등급이 부여됩니다.</p>
                      <!-- //[퍼블수정]07.19 툴팁 추가 -->
                      <!-- E : [231101] THE 클럽 등급 표기 개선 -->
                      <div class="graph-conts">
                        <div class="cmp-graph">
                          <strong class="graph-txt start-txt">THESTAR</strong>
                          <span class="graph-bar">
                            <span class="bar-fill" style="width: 100%"> </span>
                            <span class="bar-bg">
                              <span class="bar-stop"></span>
                              <span class="bar-stop"></span>
                              <span class="bar-stop"></span>
                              <span class="bar-stop"></span>
                            </span>
                          </span>
                          <!-- <strong class="graph-txt end-txt">CREW</strong> -->
                        </div>
                      </div>
                    </div>
                  </v-layout>
                </div>

                <div class="cmp-sub-tit">
                  <h3 class="tit">나의 혜택</h3>
                  <button class="cmp-font fnt-13 button"><span class="line">쿠폰 바로가기</span></button>
                </div>

                <v-expansion-panels accordion class="cmp-acc acc-type2">
                  <!--STAR / THESTAR-->
                  <v-expansion-panel v-for="(item,index) in STAR" :key="index">
                    <v-expansion-panel-header>
                      {{item.benefitName}}
                      <div v-if="item.vvipLabel" class="cmp-labels">
                        <span class="label black c-white">VVIP</span>
                      </div>
                      <span v-if="item.benefitInfo" class="c-blue">{{item.benefitInfo}}</span>
                      <template #actions>
                        <i class="cmp-icon-etc cmp-icon-down">열기/닫기</i>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <p v-html="newLine(item.benefitTxt)"></p>
                      <nuxt-link v-if="item.couponmore" class="cmp-font fnt-14 button" to="#n">쿠폰 바로가기<i class="cmp-icon cmp-icon-12 i-next"></i></nuxt-link> 
                      <nuxt-link v-if="item.handsomecare" class="cmp-font fnt-14 button" to="#n">서비스 자세히 보기<i class="cmp-icon cmp-icon-12 i-next"></i></nuxt-link> 
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>

                <v-layout justify-space-between class="cmp-btnsArea">
                  <v-btn outlined large color="primary">온라인 등급 안내사항</v-btn>
                  <v-btn large color="primary">전체 등급 혜택 보기</v-btn>
                </v-layout>
              </v-tab-item>
              <!--//온라인 등급 -->

              <!-- 한섬 VVIP -->
              <v-tab-item transition="fade-transition">
                <div class="grade-level-conts vvip-conts">
                  <v-layout justify-start>
                    <div class="level-info">
                      <p class="user-info">더한섬님의 VVIP등급은</p>

                      <div class="user-lavel">
                        <p>
                          <i class="cmp-icon-etc cmp-icon-48 i-level-theFirst">THE FIRST</i>
                          <!-- 등급 ICON
                          <i class="cmp-icon-etc cmp-icon-48 i-level-silver">Silver</i>
                            <i class="cmp-icon-etc cmp-icon-48 i-level-gold">Gold</i>
                            <i class="cmp-icon-etc cmp-icon-48 i-level-platinum">Platinum</i>
                            <i class="cmp-icon-etc cmp-icon-48 i-level-theFirst">TheFirst</i>
                          -->
                        </p>
                        <p class="lavel-name">THE FIRST1</p>
                      </div>  

                      <!-- [문구 추가]25.04.10 한섬VVIP 회원 : 금년 구매실적 노출 영역 추가 -->
                      <p class="user-data benefit">혜택 제공 기간: 2021.01.01~ 2023.02.28 (1년)</p>
                      <p class="user-data">2025.01.01 ~ 2025.12.31 까지 <b>2,482,646</b>원 구매하셨습니다.</p> <!-- [날짜 자동 세팅] -->
                    </div>
                  </v-layout>
                </div>

                <div class="cmp-sub-tit">
                  <h3 class="tit">나의 혜택</h3>
                </div>

                <v-expansion-panels accordion class="cmp-acc acc-type2">
                  <!--SILVER / GOLD / PLATINUM / THEFIRST1 / THEFIRST2 / THEFIRST3 -->
                  <v-expansion-panel v-for="(item,index) in THEFIRST1" :key="index">
                    <v-expansion-panel-header>
                      {{item.benefitName}}
                      <div v-if="item.vvipLabel" class="cmp-labels">
                        <span class="label black c-white">VVIP</span>
                      </div>
                      <span v-if="item.benefitInfo" class="c-blue">{{item.benefitInfo}}</span>
                      <template #actions>
                        <i class="cmp-icon-etc cmp-icon-down">열기/닫기</i>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <a :href="item.benefitTxtLink" v-if="item.benefitTxtLinkText" class="cmp-font fnt-14 button pt-0"><span class="line">{{item.benefitTxtLinkText}}</span></a> 
                      <p v-html="newLine(item.benefitTxt)"></p>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>

                <ul class="cmp-dotList">
                  <li>1년간 (01.01~12.31) 한섬에서 구매금액이 일정 수준 이상 되시면, 다음해 우수 고객으로 모십니다.<br> 우수고객님께는 등급에 따라 5% 할인 혜택, 전용 서비스와 기프트, 이벤트 등 다양한 혜택을 드립니다.</li>
                </ul>

                <v-layout justify-space-between class="cmp-btnsArea">
                  <v-btn outlined large color="primary">한섬 VVIP 혜택 안내사항</v-btn>
                  <v-btn large color="primary">전체 등급 혜택 보기</v-btn>
                </v-layout>
              </v-tab-item>
              <!-- 한섬 VVIP -->
            </v-tabs-items>
          </div>
        </div>
        <!--//등급(STAR 이상)-->
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
    // [퍼블수정]07.19 툴팁 추가
    tooltipList: {
      // 툴팁 상세 정보
      gradeinfo: [
        '2023년 6월 30일까지 구매하신 금액 기준이며, 주문취소/반품 시 금액 및 등급이 변동 될 수 있습니다.',
        '2023년 7월 1일부터 구매하신 금액은 2024년 상반기 등급 산정 시 반영됩니다.',
      ]
    },
    tabs : null,
    levelMode : true,
    FRIEND:[ // 20221012 수정
      {
        "benefitName" : '등급 축하 바우처',
        'benefitInfo' : '1만원권 X 1장 , 10% X 1장',
        'vvipLabel' : false,
        'benefitTxt' : 'FRIEND 등급 선정 시, 6개월 간 사용 가능한 온라인 쇼핑 바우처 <br />※ 금액권 바우처: 아울렛 및 라이프스타일/뷰티 상품군 적용 제외, 3만원 이상 구매 시 사용 가능',
        'couponmore' : true,
      },
      {
        "benefitName" : '생일 축하 바우처',
        'benefitInfo' : '2만원',
        'vvipLabel' : false,
        'benefitTxt' : '생일을 맞은 THE 클럽 회원님을 위한 축하 바우처<br />(생일 7일전(연 1회) 발급, 1개월간 사용 가능)<br />※ 금액권 바우처: 아울렛 및 라이프스타일/뷰티 상품군 적용 제외',
        'couponmore' : true,
      },
      {
        "benefitName" : '무료 반품',
        'benefitInfo' : '1회',
        'vvipLabel' : false,
        'benefitTxt' : '구매한 상품을 무료로 반품할 수 있는 쿠폰',
        'couponmore' : false,
      },
    ],
    CREW:[
      {
        "benefitName" : '등급 축하 바우처',
        'benefitInfo' : '3만원권 X 1장 , 10% X 2장',
        'vvipLabel' : false,
        'benefitTxt' : 'CREW 등급 선정 시, 6개월 간 사용 가능한 온라인 쇼핑 바우처 <br />※ 금액권 바우처: 아울렛 및 라이프스타일/뷰티 상품군 적용 제외',
        'couponmore' : true,
      },
      {
        "benefitName" : '생일 축하 바우처',
        'benefitInfo' : '5만원',
        'vvipLabel' : false,
        'benefitTxt' : '생일을 맞은 THE 클럽 회원님을 위한 축하 바우처<br />(생일 7일전(연 1회) 발급, 1개월간 사용 가능)<br />※ 금액권 바우처: 아울렛 및 라이프스타일/뷰티 상품군 적용 제외',
        'couponmore' : true,
      },
      {
        "benefitName" : '마일리지 추가 적립',
        'benefitInfo' : '1% 추가적립',
        'vvipLabel' : false,
        'benefitTxt' : '온라인에서 구매 시, 구매 마일리지 추가 적립<br />(10% 초과 할인 상품 및 아울렛 제외)',
        'couponmore' : false,
      },
      {
        "benefitName" : '무료 반품',
        'benefitInfo' : '2회',
        'vvipLabel' : false,
        'benefitTxt' : '구매한 상품을 무료로 반품할 수 있는 쿠폰',
        'couponmore' : false,
      },
    ],
    MANIA :[
      {
        "benefitName" : '등급 축하 바우처',
        'benefitInfo' : '5만원권 X 2장 , 10% X 3장',
        'vvipLabel' : false,
        'benefitTxt' : 'MANIA 등급 선정 시, 6개월간 사용 가능한 온라인 쇼핑 바우처 <br />※ 금액권 바우처: 아울렛 및 라이프스타일/뷰티 상품군 적용 제외',
        'couponmore' : true,
      },
      {
        "benefitName" : '생일 축하 바우처',
        'benefitInfo' : '7만원',
        'vvipLabel' : false,
        'benefitTxt' : '생일을 맞은 THE 클럽 회원님을 위한 축하 바우처<br />(생일 7일전(연 1회) 발급, 1개월간 사용 가능)<br />※ 금액권 바우처: 아울렛 및 라이프스타일/뷰티 상품군 적용 제외',
        'couponmore' : true,
      },
      {
        "benefitName" : '마일리지 추가 적립',
        'benefitInfo' : '2% 추가적립',
        'vvipLabel' : false,
        'benefitTxt' : '온라인에서 구매 시, 구매 마일리지 추가 적립<br />(10% 초과 할인 상품 및 아울렛 제외)',
        'couponmore' : false,
      },
      {
        "benefitName" : '더한섬하우스 라운지 이용',
        'benefitInfo' : '월 2회',
        'vvipLabel' : true,
        'benefitTxt' : "한섬의 콘셉트 스토어 '더한섬하우스'에서 운영하는 VIP 라운지 이용 혜택<br /><br />※ 한섬 VVIP(SILVER 등급 이상) 고객님들은 통합 VVIP혜택으로 이용 부탁드립니다. (횟수 합산 불가)",
        'couponmore' : false,
      },
      {
        "benefitName" : '무료 반품',
        'benefitInfo' : '3회',
        'vvipLabel' : false,
        'benefitTxt' : '구매한 상품을 무료로 반품할 수 있는 쿠폰',
        'couponmore' : false,
      },
    ],
    STAR : [ // 20221012 수정
      {
        "benefitName" : '스페셜 바우처',
        'benefitInfo' : '10만원권 X 3장',
        'vvipLabel' : false,
        'benefitTxt' : 'STAR 등급 회원에게 드리는 스페셜 한섬 바우처<br />※ 유효 기간 : 발급일로부터 6개월 (기간 내 미 사용시 소멸)<br />- 아울렛 및 라이프스타일/뷰티 상품군 적용 제외',
        'couponmore' : true,
      },
      {
        "benefitName" : '등급 축하 바우처',
        'benefitInfo' : '15% X 3장, 10% X 6장',
        'vvipLabel' : false,
        'benefitTxt' : 'STAR 등급 선정 시, 6개월간 사용 가능한 온라인 쇼핑 바우처 (전 상품 해당)',//  <br />※ 15% 쿠폰은 1회 당 구매 금액 최대 200만원 이내로 사용 가능합니다.
        'couponmore' : true,
      },
      {
        "benefitName" : '생일 축하 바우처',
        'benefitInfo' : '10만원',
        'vvipLabel' : false,
        'benefitTxt' : '생일을 맞은 THE 클럽 회원님을 위한 축하 바우처<br />(생일 7일전(연 1회) 발급, 1개월간 사용 가능)<br />※ 금액권 바우처: 아울렛 및 라이프스타일/뷰티 상품군 적용 제외',
        'couponmore' : true,
      },
      {
        "benefitName" : '마일리지 추가 적립',
        'benefitInfo' : '3% 추가적립',
        'vvipLabel' : false,
        'benefitTxt' : '온라인에서 구매 시, 구매 마일리지 추가 적립<br />(10% 초과 할인 상품 및 아울렛 제외)',
        'couponmore' : false,
      },
      {// [퍼블수정] 24.06.18 수정 케어플러스 세탁 보관 서비스 개선
        "benefitName" : '케어플러스 세탁 / 보관',
        'benefitInfo' : '2회',
        'vvipLabel' : false,
        'benefitTxt' : 'STAR 등급 회원에게 제공하는 프리미엄 세탁 / 보관 서비스',
        'couponmore' : false,
        'handsomecare' : true,
      },
      {
        "benefitName" : 'VIP 스타일링 클래스',
        'benefitInfo' : '',
        'vvipLabel' : false,
        'benefitTxt' : 'STAR 등급 회원에게 제공하는 스페셜 스타일링 클래스 초청권<br>※개별 안내',
        'couponmore' : false,
      },
       {
        "benefitName" : '더한섬하우스 라운지 이용',
        'benefitInfo' : '월 4회',
        'vvipLabel' : true,
        'benefitTxt' : "한섬의 콘셉트 스토어 '더한섬하우스'에서 운영하는 VIP 라운지 이용 혜택<br><br>※ 한섬 VVIP(SILVER 등급 이상) 고객님들은 통합 VVIP혜택으로 이용 부탁드립니다. (횟수 합산 불가)",
        'couponmore' : false,
      },
      {
        "benefitName" : 'VIP 클래스',
        'benefitInfo' : '',
        'vvipLabel' : false,
        'benefitTxt' : 'STAR 등급 회원에게 제공하는 클래스 초청권<br /><br />※개별 안내',
        'couponmore' : false,
      },
      {
        "benefitName" : '더한섬하우스 라운지 이용',
        'benefitInfo' : '월4회',
        'vvipLabel' : true,
        'benefitTxt' : "한섬의 콘셉트 스토어 '더한섬하우스'에서 운영하는 VIP 라운지 이용 혜택<br /><br />※ 한섬 VVIP(SILVER 등급 이상) 고객님들은 통합 VVIP혜택으로 이용 부탁드립니다. (횟수 합산 불가)",
        'couponmore' : false,
      },
      {
        "benefitName" : 'VIP 전용 고객센터',
        'benefitInfo' : '',
        'vvipLabel' : true,
        'benefitTxt' : '-통화 대기 없이 곧바로 VIP 전용 상담원과 연결<br />-VIP전용 채팅상담 (운영시간: 평일 오전 9시~오후9시, 주말/공휴일 오전 9시~오후6시 신정/설/추석 당일은 휴무)',
        'couponmore' : false,
      },
      { 
        "benefitName" : '호텔 제휴 서비스',
        'benefitInfo' : '',
        'vvipLabel' : false,
        'benefitTxt' : 'THE STAR, STAR등급 회원님에게  호텔 제휴 서비스 제공',
        'couponmore' : false,
        'handsomecare' : true,
      },
      {
        "benefitName" : '무료 반품',
        'benefitInfo' : '무제한',
        'vvipLabel' : false,
        'benefitTxt' : '구매한 상품을 무료로 반품하실 수 있습니다. (무제한)',
        'couponmore' : false,
      },
      {
        "benefitName" : '무료 교환',
        'benefitInfo' : '무제한',
        'vvipLabel' : false,
        'benefitTxt' : '구매한 상품을 무료로 교환하실 수 있습니다. (무제한)',
        'couponmore' : false,
      }
    ],
    THESTAR : [ // 20221012 수정
      {
        "benefitName" : '스페셜 기프트',
        'benefitInfo' : '1회 증정',
        'vvipLabel' : false,
        'benefitTxt' : 'THE STAR 등급 회원에게 드리는 감사 선물<br>(1회 증정 / 증정 시기 : 개별 안내)',
        'couponmore' : false,
      },
      {
        "benefitName" : '스페셜 바우처',
        'benefitInfo' : '10만원권 X 5장',
        'vvipLabel' : false,
        'benefitTxt' : 'THE STAR 등급 회원에게 드리는 스페셜 한섬 바우처<br>※ 유효 기간 : 발급일로부터 6개월 (기간 내 미 사용시 소멸)<br>- 아울렛 및 라이프스타일/뷰티 상품군 적용 제외',
        'couponmore' : true,   
      },
      {
        "benefitName" : '등급 축하 바우처',
        'benefitInfo' : '20% X 3장, 10% X 6장',
        'vvipLabel' : false,
        'benefitTxt' : 'THE STAR 등급 선정 시, 6개월간 사용 가능한 온라인 쇼핑 바우처 (전 상품 해당)',// <br />※ 20% 쿠폰은 1회 당 구매 금액 최대 200만원 이내로 사용 가능합니다.
        'couponmore' : true,
      },
      {
        "benefitName" : '생일 축하 바우처',
        'benefitInfo' : '10만원권',
        'vvipLabel' : false,
        'benefitTxt' : '생일을 맞은 THE 클럽 회원님을 위한 축하 바우처<br>(생일 7일전(연 1회) 발급, 1개월간 사용 가능)<br>※ 금액권 바우처: 아울렛 및 라이프스타일/뷰티 상품군 적용 제외',
        'couponmore' : true,
      },
      {
        "benefitName" : '마일리지 추가 적립',
        'benefitInfo' : '5% 추가적립',
        'vvipLabel' : false,
        'benefitTxt' : '온라인에서 구매 시, 구매 마일리지 추가 적립<br>(10% 초과 할인 상품 및 아울렛 제외)',
        'couponmore' : false,
      },
      // [퍼블리싱]240110 케어플러스 세탁 THE STAR 전용 보관 서비스
      {
        "benefitName" : '케어플러스 세탁 / 보관',
        'benefitInfo' : '3회',
        'vvipLabel' : false,
        'benefitTxt' : 'THE STAR 등급 회원에게 제공하는 프리미엄 세탁 / 보관 서비스',
        'couponmore' : false,
        'handsomecare' : true,
      },
      {
        "benefitName" : '선물포장 서비스',
        'benefitInfo' : '',
        'vvipLabel' : false,
        'benefitTxt' : 'THE STAR 등급 회원에게 제공하는 프리미엄 선물 포장 서비스 (주문 시 선택 가능)',
        'couponmore' : false,
        'handsomecare' : true,
      },
      // [퍼블수정]24.01.17 오에라 스킨케어 서비스 추가
      {
        "benefitName" : '오에라 스킨케어 서비스',
        'benefitInfo' : '선착순 50명',
        'vvipLabel' : false,
        'benefitTxt' : 'THE STAR 등급 회원에게 제공하는 오에라 스페셜 스파 서비스 (선착순 50명)',
        'couponmore' : false,
        'handsomecare' : true,  //  https://www.thehandsome.com/ko/MK/event/15287
      },
      {
        "benefitName" : 'VIP 클래스',
        'benefitInfo' : '',
        'vvipLabel' : false,
        'benefitTxt' : 'THE STAR 등급 회원에게 제공하는 클래스 초청권<br>※개별 안내',
        'couponmore' : false,
      },
      {
        "benefitName" : '더한섬하우스 라운지 이용',
        'benefitInfo' : '월 8회',
        'vvipLabel' : true,
        'benefitTxt' : "한섬의 콘셉트 스토어 '더한섬하우스'에서 운영하는 VIP 라운지 이용 혜택<br/><br/>※ 한섬 VVIP(SILVER 등급 이상) 고객님들은 통합 VVIP 혜택 으로 이용 부탁드립니다. (횟수 합산 불가)",
        'couponmore' : false,
      },
      {
        "benefitName" : 'VIP 전용 고객센터',
        'benefitInfo' : '',
        'vvipLabel' : true,
        'benefitTxt' : '-통화 대기 없이 곧바로 VIP 전용 상담원과 연결<br />-VIP전용 채팅상담 (운영시간: 평일 오전 9시~오후9시, 주말/공휴일 오전 9시~오후6시 신정/설/추석 당일은 휴무)',
        'couponmore' : false,
      },
      {
        "benefitName" : '호텔 제휴 서비스',
        'benefitInfo' : '',
        'vvipLabel' : false,
        'benefitTxt' : 'THE STAR, STAR 등급 회원님에게  호텔 제휴 서비스 제공',
        'couponmore' : false,
        'handsomecare' : true,
      },
      {
        "benefitName" : 'THE STAR 전담 케어',
        'benefitInfo' : '',
        'vvipLabel' : false,
        'benefitTxt' : 'THE STAR 등급 회원만을 위한 전담 상담사가 배정되어 신속하고 차별화된 상담 서비스 제공 (전담 상담사 개별 안내)',
        'couponmore' : false,
      },
      {
        "benefitName" : '무료 반품',
        'benefitInfo' : '무제한',
        'vvipLabel' : false,
        'benefitTxt' : '구매한 상품을 무료로 반품하실 수 있습니다. (무제한)',
        'couponmore' : false,
      },
      {
        "benefitName" : '무료 교환',
        'benefitInfo' : '무제한',
        'vvipLabel' : false,
        'benefitTxt' : '구매한 상품을 무료로 교환하실 수 있습니다. (무제한)',
        'couponmore' : false,
      },
    ],
    SILVER : [ // 20221012 수정
      {
        "benefitName" : '5% 할인 혜택 (할인횟수, 년간 혜택한도)',
        'benefitInfo' : '월 1회/40만',
        'vvipLabel' : false,
        'benefitTxt' : `정상 제품 구매시 5% 할인<br>(아울렛, 행사 상품은 제외/오프라인/온라인(더한섬닷컴)에서 구매 시 할인 적용)<dl class="limit"><dt>이용 횟수 / 할인 한도 :</dt><dd>월 1회 / 40만원/년</dd></dl>`
      },
      {
        "benefitName" : '상품 책임제 (무상 A/S)',
        'benefitInfo' : '1년',
        'vvipLabel' : false,
        'benefitTxt' : '정상 제품 무상 A/S (아울렛, 행사 상품은 제외)<br />예시. ‘21년 SILVER : 구매일로부터 1년내(‘20~‘21년)<br>정상 제품 A/S 가능'
      },
      {
        "benefitName" : '신상품 입고 알림',
        'benefitInfo' : '',
        'vvipLabel' : false,
        'benefitTxt' : '신상품 매장 입고 즉시 LMS로 안내드리는 알림 서비스<br>(마케팅정보 수신 동의 및 SMS 수신 동의 고객에 한하여 발송)'
      },
      {
        "benefitName" : '더한섬하우스 VIP 라운지',
        'benefitInfo' : '월 4회 (본인포함 3인)',
        'vvipLabel' : false,
        'benefitTxt' : '위치 : 부산(부산 해운대구 좌동로 19) / 광주(광주 광산구 왕버들로87) / 제주(제주시 연북로 257) / 청주(충북 청주시 서원구 미평동 35-8 에버세이브 D동-a동)<br>방문 시 음료/다과 서비스 이용 가능'
      },
    ],
    GOLD : [
      {
        "benefitName" : '5% 할인 혜택 (할인횟수, 년간 혜택한도)',
        'benefitInfo' : '월 3회, 1백만',
        'vvipLabel' : false,
        'benefitTxt' : `정상 제품 구매시 5% 할인 (아울렛, 행사 상품은 제외/오프라인/온라인(더한섬닷컴)에서 구매 시 할인 적용)<dl class="limit"><dt>이용 횟수 / 할인 한도 :</dt><dd>월 3회 / 1백만원/년</dd></dl>`
      },
      {
        "benefitName" : '생일 선물',
        'benefitInfo' : '년 1회',
        'vvipLabel' : false,
        'benefitTxt' : '생일을 맞은 GOLD 등급 회원님께 드리는 특별한 선물<br>(사전 등록된 회원 주소로 발송)'
      },
       {
        "benefitName" : '상품 책임제 (무상 A/S)',
        'benefitInfo' : '2년',
        'vvipLabel' : false,
        'benefitTxt' : '정상 제품 무상 A/S (아울렛, 행사 상품은 제외)<br />예시. ‘21년 GOLD : 구매일로부터 2년내(‘19~‘21년)<br>정상 제품 A/S 가능'
      },
      {
        "benefitName" : '신상품 입고 알림',
        'benefitInfo' : '',
        'vvipLabel' : false,
        'benefitTxt' : '신상품 매장 입고 즉시 LMS로 안내드리는 알림 서비스<br>(마케팅정보 수신 동의 및 SMS 수신 동의 고객에 한하여 발송)'
      },
      {
        "benefitName" : '더한섬하우스 VIP 라운지',
        'benefitInfo' : '월 6회 (본인포함 3인)',
        'vvipLabel' : false,
        'benefitTxt' : '위치 : 부산(부산 해운대구 좌동로 19) / 광주(광주 광산구 왕버들로87) / 제주(제주시 연북로 257) / 청주(충북 청주시 서원구 미평동 35-8 에버세이브 D동-a동)<br>방문 시 음료/다과 서비스 이용 가능'
      },
    ],
    PLATINUM : [
      {
        "benefitName" : '5% 할인 혜택 (할인횟수, 년간 혜택한도)',
        'benefitInfo' : '월 5회, 2백만',
        'vvipLabel' : false,
        'benefitTxt' : `정상 제품 구매시 5% 할인 (아울렛, 행사 상품은 제외/오프라인/온라인(더한섬닷컴)에서 구매 시 할인 적용)<dl class="limit"><dt>이용 횟수 / 할인 한도 :</dt><dd>월 5회 / 2백만원/년</dd></dl>`
      },
      {
        "benefitName" : '생일 선물',
        'benefitInfo' : '년 1회',
        'vvipLabel' : false,
        'benefitTxt' : '생일을 맞은 PLATINUM 등급 회원님께 드리는 특별한 선물<br>(사전 등록 된 회원 주소로 발송)'
      },
       {
        "benefitName" : '상품 책임제 (무상 A/S)',
        'benefitInfo' : '3년',
        'vvipLabel' : false,
        'benefitTxt' : '정상 제품 무상 A/S (아울렛, 행사 상품은 제외)<br>예시. ‘22년 PLATINUM : 구매일로부터 3년내(’19~’22년)<br>정상 제품 A/S 가능'
      },
      {
        "benefitName" : '신상품 입고 알림',
        'benefitInfo' : '',
        'vvipLabel' : false,
        'benefitTxt' : '신상품 매장 입고 즉시 LMS로 안내드리는 알림 서비스<br>(마케팅정보 수신 동의 및 SMS 수신 동의 고객에 한하여 발송)'
      },
      {
        "benefitName" : '더한섬하우스 VIP 라운지',
        'benefitInfo' : '월 8회 (본인포함 3인)',
        'vvipLabel' : false,
        'benefitTxt' : '위치 : 부산(부산 해운대구 좌동로 19) / 광주(광주 광산구 왕버들로87) / 제주(제주시 연북로 257) / 청주(충북 청주시 서원구 미평동 35-8 에버세이브 D동-a동)<br>방문 시 음료/다과 서비스 이용 가능'
      },
    ],
    THEFIRST1: [
      {
        "benefitName" : '5% 할인 혜택 (할인횟수, 년간 혜택한도)',
        'benefitInfo' : '무제한/1천만',
        'vvipLabel' : false,
        'benefitTxt' : `정상 제품 구매시 5% 할인 (아울렛, 행사 상품은 제외/오프라인/온라인(더한섬닷컴)에서 구매 시 할인 적용)<dl class="limit"><dt>할인 한도</dt><dd>THE FIRST 1 (1억 5천이상) : 1천만</dd><dd>THE FIRST 2 (1억이상) : 7백만</dd><dd>THE FIRST 3 (그外) : 4백만</dd></dl>`
      },
      {
        "benefitName" : '생일 선물',
        'benefitInfo' : '년 1회',
        'vvipLabel' : false,
        'benefitTxt' : '생일을 맞은 THE FIRST 등급 회원님께 드리는 특별한 선물<br>(사전 등록 된 회원 주소로 발송)'
      },
      {
        "benefitName" : '명절 선물',
        'benefitInfo' : '년 2회',
        'vvipLabel' : false,
        'benefitTxt' : 'THE FIRST 등급 회원님의 격에 맞춘 명절맞이 감사 선물<br>(명절 1~2주전, 사전 등록 된 회원 주소로 발송)'
      },
      {
        "benefitName" : '한섬 THE FIRST CLASS 초청',
        'benefitInfo' : '년 6회',
        'vvipLabel' : false,
        'benefitTxt' : `"매 월(수도권 월 1회, 지방 격월) 색다른 주제로 진행되는<br>THE FIRST 회원님만을 위한 Special Class<br>(초청 및 접수 안내 별도 고지 예정)<br><dl class="limit"><dt>이용 횟수</dt><dd>THE FIRST 1 (1억 5천이상) : 년 6회</dd><dd>THE FIRST 2 (1억이상) : 년 4회</dd><dd>THE FIRST 3 (그外) : 년 2회</dd></dl>`
      },
      {
        "benefitName" : '상품 책임제 (무상 A/S)',
        'benefitInfo' : '무제한',
        'vvipLabel' : false,
        'benefitTxt' : '정상 제품 무상 A/S (아울렛, 행사 상품은 제외)<br />예시. ‘21년 THE FIRST : 무제한 A/S 가능'
      },
      {
        "benefitName" : '신상품 입고 알림',
        'benefitInfo' : '',
        'vvipLabel' : false,
        'benefitTxt' : '신상품 매장 입고 즉시 LMS로 안내드리는 알림 서비스<br>(마케팅정보 수신 동의 및 SMS 수신 동의 고객에 한하여 발송)'
      },
      {
        "benefitName" : '토탈케어 서비스',
        'benefitInfo' : '년 4회',
        'vvipLabel' : false,
        'benefitTxt' : `토탈케어서비스는 당사 3년이내 구매제품(가죽·모피류 제외)대상 연중 상시 진행
        <br />접수방법 : ① 매장 접수 ② 택배 접수 (드라이클리닝 업체 픽업요청) / 직접 택배사 접수(착불)
        <dl class="limit"><dt>이용 횟수</dt><dd>THE FIRST 1 (1억 5천이상) : 년 4회</dd><dd>THE FIRST 2 (1억이상) : 년 3회</dd><dd>THE FIRST 3 (그外) : 년 2회</dd></dl>`
      },
      {
        "benefitName" : '더한섬하우스 VIP 라운지',
        'benefitInfo' : '일 1회 (본인포함 4인)',
        'vvipLabel' : false,
        'benefitTxt' : '위치 : 부산(부산 해운대구 좌동로 19) / 광주(광주 광산구 왕버들로87) / 제주(제주시 연북로 257) / 청주(충북 청주시 서원구 미평동 35-8 에버세이브 D동-a동)<br>방문 시 음료/다과 서비스 이용 가능'
      },
      {
        "benefitName" : '1:1 퍼스널 상담서비스',
        'benefitInfo' : '',
        'vvipLabel' : false,
        'benefitTxt' : 'URL 접속 후 ‘로봇모양’ 클릭<br>(최초 1회 본인 인증 접속 필요)',
        'benefitTxtLink' : 'http://pf.kakao.com/_TxnxaWb',
        'benefitTxtLinkText' : 'http://pf.kakao.com/_TxnxaWb'
      },
    ],
    THEFIRST2: [
      {
        "benefitName" : '5% 할인 혜택 (할인횟수, 년간 혜택한도)',
        'benefitInfo' : '무제한/7백만',
        'vvipLabel' : false,
        'benefitTxt' : `정상 제품 구매시 5% 할인 (아울렛, 행사 상품은 제외/오프라인/온라인(더한섬닷컴)에서 구매 시 할인 적용)<dl class="limit"><dt>할인 한도</dt><dd>THE FIRST 1 (1억 5천이상) : 1천만</dd><dd>THE FIRST 2 (1억이상) : 7백만</dd><dd>THE FIRST 3 (그外) : 4백만</dd></dl>`
        },
      {
        "benefitName" : '생일 선물',
        'benefitInfo' : '년 1회',
        'vvipLabel' : false,
        'benefitTxt' : '생일을 맞은 THE FIRST 등급 회원님께 드리는 특별한 선물<br>(사전 등록 된 회원 주소로 발송)'
      },
      {
        "benefitName" : '명절 선물',
        'benefitInfo' : '년 2회',
        'vvipLabel' : false,
        'benefitTxt' : 'THE FIRST 등급 회원님의 격에 맞춘 명절맞이 감사 선물<br>(명절 1~2주전, 사전 등록 된 회원 주소로 발송)'
      },
      {
        "benefitName" : '한섬 THE FIRST CLASS 초청',
        'benefitInfo' : '년 4회',
        'vvipLabel' : false,
        'benefitTxt' : `"매 월(수도권 월 1회, 지방 격월) 색다른 주제로 진행되는<br>THE FIRST 회원님만을 위한 Special Class<br>(초청 및 접수 안내 별도 고지 예정)<br><dl class="limit"><dt>이용 횟수</dt><dd>THE FIRST 1 (1억 5천이상) : 년 6회</dd><dd>THE FIRST 2 (1억이상) : 년 4회</dd><dd>THE FIRST 3 (그外) : 년 2회</dd></dl>`
      },
      {
        "benefitName" : '상품 책임제 (무상 A/S)',
        'benefitInfo' : '무제한',
        'vvipLabel' : false,
        'benefitTxt' : '정상 제품 무상 A/S (아울렛, 행사 상품은 제외)<br />예시. ‘21년 THE FIRST : 무제한 A/S 가능'
      },
      {
        "benefitName" : '신상품 입고 알림',
        'benefitInfo' : '',
        'vvipLabel' : false,
        'benefitTxt' : '신상품 매장 입고 즉시 LMS로 안내드리는 알림 서비스<br>(마케팅정보 수신 동의 및 SMS 수신 동의 고객에 한하여 발송)'
      },
      {
        "benefitName" : '토탈케어 서비스',
        'benefitInfo' : '년 3회',
        'vvipLabel' : false,
        'benefitTxt' : `토탈케어서비스는 당사 3년이내 구매제품(가죽·모피류 제외)대상 연중 상시 진행
        <br />접수방법 : ① 매장 접수 ② 택배 접수 (드라이클리닝 업체 픽업요청) / 직접 택배사 접수(착불)
        <dl class="limit"><dt>이용 횟수</dt><dd>THE FIRST 1 (1억 5천이상) : 년 4회</dd><dd>THE FIRST 2 (1억이상) : 년 3회</dd><dd>THE FIRST 3 (그外) : 년 2회</dd></dl>`
      },
      {
        "benefitName" : '더한섬하우스 VIP 라운지',
        'benefitInfo' : '일 1회 (본인포함 4인)',
        'vvipLabel' : false,
        'benefitTxt' : '위치 : 부산(부산 해운대구 좌동로 19) / 광주(광주 광산구 왕버들로87) / 제주(제주시 연북로 257) / 청주(충북 청주시 서원구 미평동 35-8 에버세이브 D동-a동)<br>방문 시 음료/다과 서비스 이용 가능'
      },
      {
        "benefitName" : '1:1 퍼스널 상담서비스',
        'benefitInfo' : '',
        'vvipLabel' : false,
        'benefitTxt' : 'URL 접속 후 ‘로봇모양’ 클릭<br>(최초 1회 본인 인증 접속 필요)',
        'benefitTxtLink' : 'http://pf.kakao.com/_TxnxaWb',
        'benefitTxtLinkText' : 'http://pf.kakao.com/_TxnxaWb'
      },
    ],
    THEFIRST3: [
      {
        "benefitName" : '5% 할인 혜택 (할인횟수, 년간 혜택한도)',
        'benefitInfo' : '무제한/4백만',
        'vvipLabel' : false,
        'benefitTxt' : `정상 제품 구매시 5% 할인 (아울렛, 행사 상품은 제외/오프라인/온라인(더한섬닷컴)에서 구매 시 할인 적용)<dl class="limit"><dt>할인 한도</dt><dd>THE FIRST 1 (1억 5천이상) : 1천만</dd><dd>THE FIRST 2 (1억이상) : 7백만</dd><dd>THE FIRST 3 (그外) : 4백만</dd></dl>`
      },
      {
        "benefitName" : '생일 선물',
        'benefitInfo' : '년 1회',
        'vvipLabel' : false,
        'benefitTxt' : '생일을 맞은 THE FIRST 등급 회원님께 드리는 특별한 선물<br>(사전 등록 된 회원 주소로 발송)'
      },
      {
        "benefitName" : '명절 선물',
        'benefitInfo' : '년 2회',
        'vvipLabel' : false,
        'benefitTxt' : 'THE FIRST 등급 회원님의 격에 맞춘 명절맞이 감사 선물<br>(명절 1~2주전, 사전 등록 된 회원 주소로 발송)'
      },
      {
        "benefitName" : '한섬 THE FIRST CLASS 초청',
        'benefitInfo' : '년 2회',
        'vvipLabel' : false,
        'benefitTxt' : `"매 월(수도권 월 1회, 지방 격월) 색다른 주제로 진행되는<br>THE FIRST 회원님만을 위한 Special Class<br>(초청 및 접수 안내 별도 고지 예정)<br><dl class="limit"><dt>이용 횟수</dt><dd>THE FIRST 1 (1억 5천이상) : 년 6회</dd><dd>THE FIRST 2 (1억이상) : 년 4회</dd><dd>THE FIRST 3 (그外) : 년 2회</dd></dl>`
      },
      {
        "benefitName" : '상품 책임제 (무상 A/S)',
        'benefitInfo' : '무제한',
        'vvipLabel' : false,
        'benefitTxt' : '정상 제품 무상 A/S (아울렛, 행사 상품은 제외)<br />예시. ‘21년 THE FIRST : 무제한 A/S 가능'
      },
      {
        "benefitName" : '신상품 입고 알림',
        'benefitInfo' : '',
        'vvipLabel' : false,
        'benefitTxt' : '신상품 매장 입고 즉시 LMS로 안내드리는 알림 서비스<br>(마케팅정보 수신 동의 및 SMS 수신 동의 고객에 한하여 발송)'
      },
      {
        "benefitName" : '토탈케어 서비스',
        'benefitInfo' : '년 2회',
        'vvipLabel' : false,
        'benefitTxt' : `토탈케어서비스는 당사 3년이내 구매제품(가죽·모피류 제외)대상 연중 상시 진행
        <br />접수방법 : ① 매장 접수 ② 택배 접수 (드라이클리닝 업체 픽업요청) / 직접 택배사 접수(착불)
        <dl class="limit"><dt>이용 횟수</dt><dd>THE FIRST 1 (1억 5천이상) : 년 4회</dd><dd>THE FIRST 2 (1억이상) : 년 3회</dd><dd>THE FIRST 3 (그外) : 년 2회</dd></dl>`
      },
      {
        "benefitName" : '더한섬하우스 VIP 라운지',
        'benefitInfo' : '일 1회 (본인포함 4인)',
        'vvipLabel' : false,
        'benefitTxt' : '위치 : 부산(부산 해운대구 좌동로 19) / 광주(광주 광산구 왕버들로87) / 제주(제주시 연북로 257) / 청주(충북 청주시 서원구 미평동 35-8 에버세이브 D동-a동)<br>방문 시 음료/다과 서비스 이용 가능'
      },
       {
        "benefitName" : '1:1 퍼스널 상담서비스',
        'benefitInfo' : '',
        'vvipLabel' : false,
        'benefitTxt' : 'URL 접속 후 ‘로봇모양’ 클릭<br>(최초 1회 본인 인증 접속 필요)',
        'benefitTxtLink' : 'http://pf.kakao.com/_TxnxaWb',
        'benefitTxtLinkText' : 'http://pf.kakao.com/_TxnxaWb'
      },
    ]
    
  }),
  created() {
    const me = this
    const json = require('~/static/json/mypage_left_menu.json')
    me.menuList = json.list
  },
  methods: {
    newLine(str) {
      return String(str).replace(/(?:\r\n|\r|\n)/g,'</br>')
    },
    pubCheckBtn(){   // 퍼블 확인용
      this.levelMode = false;
    }
    
  },
}
</script>
<style lang="scss" scoped>
 @import '@/assets/scss/pages/member.scss'; 
</style>
