<template>
  <v-layout class="contents contents-type2"><!--// 공통 class="contents", 해당 메뉴 전용 class="content-메뉴명", 해당 페이지 전용 class="content-페이지명" -->
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'고객센터'" :left-data="menuList" :page-class="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="member-benefit">
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
                  <p class="cmp-font fnt-16">한섬 온라인 멤버십</p>
                  <div class="level-tit">
                    <span class="the">THE</span>
                    <span class="level">클럽</span><!-- 230217 온라인멤버십 : 문구변경 -->
                  </div>
                  <p class="cmp-font">더한섬닷컴 고객님을 위한 온라인 전용 멤버십입니다.</p>
                </div>
                <div class="info-area">
                  <ul class="cmp-dotList">
                    <li>
                      <dl>
                        <dt>선정 기간</dt>
                        <dd>1년에 2회 등급 선정 (2월/8월 선정)</dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>선정 기준</dt><!-- [퍼블수정] 22.10.12 문구 수정 -->
                        <dd>2022.01.01 ~ 2022.12.31<br />온라인 구매실적 기준</dd><!-- [날짜 자동 세팅] -->
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>혜택 제공 기간</dt><!-- [퍼블수정] 22.10.12 문구 수정 -->
                        <dd>2023.02.01 ~ 2023.07.31 (6개월)</dd><!-- [날짜 자동 세팅] -->
                      </dl>
                    </li>
                  </ul>
                </div>
              </div>
              <!--전체 등급혜택-->
              <div class="benefit-tabs-conts">
                <div class="tabs-black full-width">
                  <v-tabs v-model="tabs1">
                    <v-tab>
                      <i class="cmp-icon-etc cmp-icon-36 i-level-friend">Friend</i>
                      <p class="name">FRIEND</p>
                    </v-tab>
                    <v-tab>
                      <i class="cmp-icon-etc cmp-icon-36 i-level-crew">CREW</i>
                      <p class="name">CREW</p>
                    </v-tab>
                    <v-tab>
                      <i class="cmp-icon-etc cmp-icon-36 i-level-mania">MANIA</i>
                      <p class="name">MANIA</p>
                    </v-tab>
                    <v-tab>
                      <i class="cmp-icon-etc cmp-icon-36 i-level-star">STAR</i>
                      <p class="name">STAR</p>
                    </v-tab>
                    <v-tab>
                      <i class="cmp-icon-etc cmp-icon-36 i-level-theStar">THE STAR</i>
                      <p class="name">THE STAR</p>
                    </v-tab>
                  </v-tabs>
                </div>

                <div class="tab-content">
                  <div class="info-panels">
                    <v-tabs-items v-model="tabs1" touchless class="myBenefit-card">
                    
                      <!-- FRIEND -->
                      <v-tab-item :transition="false">
                        <div class="grade-level-conts">
                          <v-layout wrap align-center class="item-level">
                            <i class="cmp-icon-etc cmp-icon-36 i-level-friend">FRIEND</i>
                            <div>
                              <v-layout wrap align-center class="user-lavel">
                                <p class="lavel-name">FRIEND</p>
                                <div class="cmp-labels">
                                    <span class="label black c-white">내 등급</span>
                                </div>
                              </v-layout>
                              <p class="data">2023.02.01 ~ 2023.07.31</p><!-- [날짜 자동 세팅] -->
                            </div>
                          </v-layout>
                          <p class="graph-text">신규가입 + 200만원 미만 구매</p>
                        </div>
                      </v-tab-item>
                      <!--//FRIEND -->
                      <!-- CREW -->
                      <v-tab-item :transition="false">
                        <div class="grade-level-conts">
                          <v-layout wrap align-center class="item-level">
                            <i class="cmp-icon-etc cmp-icon-36 i-level-crew">crew</i>
                            <div>
                              <v-layout wrap align-center class="user-lavel">
                                <p class="lavel-name">CREW</p>
                              </v-layout>
                              <p class="data">2023.02.01 ~ 2023.07.31</p><!-- [날짜 자동 세팅] -->
                            </div>
                          </v-layout>
                          <p class="graph-text">200만원 이상 구매</p>
                        </div>
                      </v-tab-item>
                      <!--//CREW -->
                      <!-- MANIA -->
                      <v-tab-item :transition="false">
                        <div class="grade-level-conts">
                          <v-layout wrap align-center class="item-level">
                            <i class="cmp-icon-etc cmp-icon-36 i-level-mania">mania</i>
                            <div>
                              <v-layout wrap align-center class="user-lavel">
                                <p class="lavel-name">MANIA</p>
                              </v-layout>
                              <p class="data">2023.02.01 ~ 2023.07.31</p><!-- [날짜 자동 세팅] -->
                            </div>
                          </v-layout>
                          <p class="graph-text">500만원 이상 구매</p>
                        </div>
                      </v-tab-item>
                      <!-- //MANIA -->
                      <!-- STAR -->
                      <v-tab-item :transition="false">
                        <div class="grade-level-conts">
                          <v-layout wrap align-center class="item-level">
                            <i class="cmp-icon-etc cmp-icon-36 i-level-star">star</i>
                            <div>
                              <v-layout wrap align-center class="user-lavel">
                                <p class="lavel-name">STAR</p>
                              </v-layout>
                              <p class="data">2023.02.01 ~ 2023.07.31</p><!-- [날짜 자동 세팅] -->
                            </div>
                          </v-layout>
                          <p class="graph-text">1,000만원 이상 구매</p>
                        </div>
                      </v-tab-item>
                      <!--//STAR -->
                      <!-- THESTAR -->
                      <v-tab-item :transition="false">
                        <div class="grade-level-conts">
                          <v-layout wrap align-center class="item-level">
                            <i class="cmp-icon-etc cmp-icon-36 i-level-theStar">theStar</i>
                            <div>
                              <v-layout wrap align-center class="user-lavel">
                                <p class="lavel-name">THE STAR</p>
                              </v-layout>
                              <p class="data">2023.02.01 ~ 2023.07.31</p><!-- [날짜 자동 세팅] -->
                            </div>
                          </v-layout>
                          <p class="graph-text">최상위 100명</p>
                        </div>
                      </v-tab-item>
                      <!--//THESTAR -->
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
                    <!-- VVIP -->
                    <div v-if="tabs1>1" class="info-bottom vvip">
                      <!-- <h4 class="cmp-font fnt-16 mb-8">VVIP</h4> -->
                      <div class="cmp-labels mb-8">
                        <span class="label black c-white">VVIP</span>
                      </div>
                      <ul class="cmp-dotList">
                        <li>한섬 VVIP 회원님께는 추가 서비스가 제공됩니다. (온/오프라인 합산 연간 1,000만원 이상 구매 회원)</li>
                        <li>상단의 ‘한섬 VVIP 혜택’에서 자세한 내용을 보실 수 있습니다.</li>
                      </ul>
                    </div>
                    <!-- //VVIP -->
                    <!-- 안내사항 -->
                    <div class="info-bottom">
                      <h4 class="info-title">안내사항</h4>
                      <div class="ellipsis-area">
                        <ul class="cmp-dotList">
                          <li>THE 클럽 회원 혜택은 본인인증하여 가입한 더한섬닷컴 H.Point 통합회원에게 제공되며, 간편회원에게는 제공되지 않습니다.</li>
                          <li>상반기 등급은 전년 1월 ~ 12월 구매 실적 기준, 하반기 등급은 전년 7월 ~ 금년 6월 구매 실적을 기준으로 등급이 산정됩니다.</li>
                          <li>신규 가입 시, FRIEND 등급 혜택이 제공되며, 가입 이후 온라인에서 구매한 실적에 따라 다음 선정 시 THE 클럽 등급이 변경됩니다.</li>
                          <!-- 240214_휴면회원 폐지_내용 삭제 -->
                          <!-- <li>더한섬닷컴 휴면회원은 FRIEND 등급이 부여되며, 혜택은 등급 축하 바우처 (1만원 1장, 10% 1장), 무료 반품 (1회)만 제공됩니다.<br>(휴면회원에게는 FRIEND 등급 생일 축하 바우처(2만원)가 제공되지 않습니다.)</li> -->
                          <!-- // 240214_휴면회원 폐지_내용 삭제 -->
                          <li>THE 클럽 등급은 한섬 온라인(더한섬닷컴)에서 쿠폰/바우처 할인액을 제외한 실제 결제한 금액 기준으로 선정되며, 선정 기간 내 주문한 상품을 추후 취소/반품 시 등급이 하락될 수 있습니다.</li>
                          <li>THE 클럽의 모든 혜택은 더한섬닷컴(한섬 온라인) 이용 시 제공되며, 오프라인 매장에서는 혜택을 받으실 수 없습니다.</li>
                          <li>한섬 VVIP (온/오프라인 합산 연간 1,000만원 이상 구매) 회원께는 VIP 전용 고객센터 혜택을 제공합니다.<br />
                              ※ 한섬 VVIP 회원 등급 기준 및 혜택에 대한 자세한 안내는 한섬 VVIP 혜택을 확인해주세요.</li>
                          <li>FRIEND 등급 축하 바우처 금액권(1만원)은 3만원 이상 구매 시 사용 가능합니다.</li>
                          <li>금액권 바우처는 아울렛 및 라이프스타일/뷰티 상품에 적용이 불가합니다.</li>
                          <!-- [퍼블수정] 23.08.09 내용 수정반영 -->
                          <li>VIP 클래스는 VIP 전용 라이브 방송, 오프라인 클래스, 스타일링 콘텐츠 등 다양한 형태로 진행되며, 개별 안내 예정입니다.</li>
                          <!-- //[퍼블수정] 23.08.09 내용 수정반영 -->
                          <li>THE STAR, STAR 등급 더한섬하우스 라운지 이용 횟수는 한섬 VVIP 혜택 기준으로 제공됩니다.<br />(THE STAR 등급 : 본인 포함 4인 / STAR, MANIA 등급 : 본인 포함 3인 동반 입장 가능)</li>
                          <li>THE 클럽 등급 기준 및 혜택은 당사 사정에 의해 별도 고지 없이 변경될 수 있습니다.</li>
                          <li>문의 : 더한섬닷컴 고객센터 1800-5700(유료)</li>
                        </ul>
                      </div>
                    </div>
                    <!-- //안내사항 -->
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
    tabs : 1,
    tabs1 : 0,
    drawer: undefined,
    myBenefitData : [
      {
        level: "friend",
        list: [
          {
            "benefitName" : '등급 축하 바우처',
            'benefitInfo' : '1만원권 X 1장 , 10% X 1장',
            'vvipLabel' : false,
            'benefitTxt' : 'FRIEND 등급 선정 시, 6개월 간 사용 가능한 온라인 쇼핑 바우처 <br />※ 금액권 바우처: 아울렛 및 라이프스타일/뷰티 상품군 적용 제외, 3만원 이상 구매 시 사용 가능',
            'benefitTxtLink' : '/ko/ME/couponList',
            'benefitTxtLinkText' : '쿠폰 바로가기'
          },
          {
            "benefitName" : '생일 축하 바우처',
            'benefitInfo' : '2만원',
            'vvipLabel' : false,
            'benefitTxt' : '생일을 맞은 THE 클럽 회원님을 위한 축하 바우처<br />(생일 7일전(연 1회) 발급, 1개월간 사용 가능)<br />※ 금액권 바우처: 아울렛 및 라이프스타일/뷰티 상품군 적용 제외',
            'benefitTxtLink' : '/ko/ME/couponList',
            'benefitTxtLinkText' : '쿠폰 바로가기'
          },
          {  // [퍼블수정] 22.10.12 수정
            "benefitName" : '무료 반품',
            'benefitInfo' : '1회',
            'vvipLabel' : false,
            'benefitTxt' : '구매한 상품을 무료로 반품할 수 있는 쿠폰',
            'benefitTxtLink' : '',
            'benefitTxtLinkText' : ''
          }
        ]
      },
      {
        level: "crew",
        list: [
          {
            "benefitName" : '등급 축하 바우처',
            'benefitInfo' : '3만원권 X 1장 , 10% X 2장',
            'vvipLabel' : false,
            'benefitTxt' : 'CREW 등급 선정 시, 6개월 간 사용 가능한 온라인 쇼핑 바우처 <br />※ 금액권 바우처: 아울렛 및 라이프스타일/뷰티 상품군 적용 제외',
            'benefitTxtLink' : '/ko/ME/couponList',
            'benefitTxtLinkText' : '쿠폰 바로가기'
          },
          {
            "benefitName" : '생일 축하 바우처',
            'benefitInfo' : '5만원',
            'vvipLabel' : false,
            'benefitTxt' : '생일을 맞은 THE 클럽 회원님을 위한 축하 바우처<br />(생일 7일전(연 1회) 발급, 1개월간 사용 가능)<br />※ 금액권 바우처: 아울렛 및 라이프스타일/뷰티 상품군 적용 제외',
            'benefitTxtLink' : '/ko/ME/couponList',
            'benefitTxtLinkText' : '쿠폰 바로가기'
          },
          {
            "benefitName" : '마일리지 추가 적립',
            'benefitInfo' : '1% 추가적립',
            'vvipLabel' : false,
            'benefitTxt' : '온라인에서 구매 시, 구매 마일리지 추가 적립<br />(10% 초과 할인 상품 및 아울렛 제외)',
            'benefitTxtLink' : '',
            'benefitTxtLinkText' : ''
          },
          { // [퍼블수정] 22.10.12 수정
            "benefitName" : '무료 반품',
            'benefitInfo' : '2회',
            'vvipLabel' : false,
            'benefitTxt' : '구매한 상품을 무료로 반품할 수 있는 쿠폰',
            'benefitTxtLink' : '',
            'benefitTxtLinkText' : ''            
          }
        ]
      },
      {
        level: "mania",
        list: [
          {
            "benefitName" : '등급 축하 바우처',
            'benefitInfo' : '5만원권 X 2장, 10% X 3장',
            'vvipLabel' : false,
            'benefitTxt' : 'MANIA 등급 선정 시, 6개월간 사용 가능한 온라인 쇼핑 바우처 <br />※ 금액권 바우처: 아울렛 및 라이프스타일/뷰티 상품군 적용 제외',
            'benefitTxtLink' : '/ko/ME/couponList',
            'benefitTxtLinkText' : '쿠폰 바로가기'            
          },
          {
            "benefitName" : '생일 축하 바우처',
            'benefitInfo' : '7만원',
            'vvipLabel' : false,
            'benefitTxt' : '생일을 맞은 THE 클럽 회원님을 위한 축하 바우처<br />(생일 7일전(연 1회) 발급, 1개월간 사용 가능)<br />※ 금액권 바우처: 아울렛 및 라이프스타일/뷰티 상품군 적용 제외',
            'benefitTxtLink' : '/ko/ME/couponList',
            'benefitTxtLinkText' : '쿠폰 바로가기'            
          },
          {
            "benefitName" : '마일리지 추가 적립',
            'benefitInfo' : '2% 추가적립',
            'vvipLabel' : false,
            'benefitTxt' : '온라인에서 구매 시, 구매 마일리지 추가 적립<br />(10% 초과 할인 상품 및 아울렛 제외)',
            'benefitTxtLink' : '',
            'benefitTxtLinkText' : ''
          },
          { // [퍼블수정] 22.12.23 간격 수정요청 반영
            "benefitName" : '더한섬하우스 라운지 이용',
            'benefitInfo' : '월2회',
            'vvipLabel' : true,
            'benefitTxt' : "한섬의 콘셉트 스토어 '더한섬하우스'에서 운영하는 VIP 라운지 이용 혜택<br />※ 한섬 VVIP(SILVER 등급 이상) 고객님들은 통합 VVIP혜택으로 이용 부탁드립니다. (횟수 합산 불가)",
            'benefitTxtLink' : '',
            'benefitTxtLinkText' : ''            
          },
          { // [퍼블수정] 22.10.12 수정
            "benefitName" : '무료 반품',
            'benefitInfo' : '3회',
            'vvipLabel' : false,
            'benefitTxt' : '구매한 상품을 무료로 반품할 수 있는 쿠폰',
            'benefitTxtLink' : '',
            'benefitTxtLinkText' : ''            
          }
        ]
      },
      {
        level: "star",
        list: [
          {
            "benefitName" : '스페셜 바우처',
            'benefitInfo' : '10만원권 X 3장',
            'vvipLabel' : false,
            'benefitTxt' : 'STAR 등급 회원에게 드리는 스페셜 한섬 바우처<br />※ 유효 기간 : 발급일로부터 6개월 (기간 내 미 사용시 소멸)<br />- 아울렛 및 라이프스타일/뷰티 상품군 적용 제외',
            'benefitTxtLink' : '/ko/ME/couponList',
            'benefitTxtLinkText' : '쿠폰 바로가기'
          },
          {
            "benefitName" : '등급 축하 바우처',
            'benefitInfo' : '15% X 3장, 10% X 6장',
            'vvipLabel' : false,
            'benefitTxt' : 'STAR 등급 선정 시, 6개월간 사용 가능한 온라인 쇼핑 바우처 (전 상품 해당)',//  <br />※ 15% 쿠폰은 1회 당 구매 금액 최대 200만원 이내로 사용 가능합니다.
            'benefitTxtLink' : '',
            'benefitTxtLinkText' : ''
          },
          {
            "benefitName" : '생일 축하 바우처',
            'benefitInfo' : '10만원',
            'vvipLabel' : false,
            'benefitTxt' : '생일을 맞은 THE 클럽 회원님을 위한 축하 바우처<br />(생일 7일전(연 1회) 발급, 1개월간 사용 가능)<br />※ 금액권 바우처: 아울렛 및 라이프스타일/뷰티 상품군 적용 제외',
            'benefitTxtLink' : '/ko/ME/couponList',
            'benefitTxtLinkText' : '쿠폰 바로가기'
          },
          {
            "benefitName" : '마일리지 추가 적립',
            'benefitInfo' : '3% 추가적립',
            'vvipLabel' : false,
            'benefitTxt' : '온라인에서 구매 시, 구매 마일리지 추가 적립<br />(10% 초과 할인 상품 및 아울렛 제외)',
            'benefitTxtLink' : '',
            'benefitTxtLinkText' : ''
          },
          { // [퍼블수정] 24.06.18 케어플러스 세탁 보관 서비스 개선
            "benefitName" : '케어플러스 세탁 / 보관',
            'benefitInfo' : '2회',
            'vvipLabel' : false,
            'benefitTxt' : 'STAR 등급 회원에게 제공하는 프리미엄 세탁 / 보관 서비스',
            'benefitTxtLink' : '/ko/CS/serviceCareWash',
            'benefitTxtLinkText' : '서비스 자세히 보기'
          },
          {
            "benefitName" : 'VIP 클래스',
            'benefitInfo' : '',
            'vvipLabel' : false,
            'benefitTxt' : 'STAR 등급 회원에게 제공하는 클래스 초청권<br>※개별 안내',
            'benefitTxtLink' : '',
            'benefitTxtLinkText' : ''            
          },
          { // [퍼블수정] 22.12.23 간격 수정요청 반영
            "benefitName" : '더한섬하우스 라운지 이용',
            'benefitInfo' : '월4회',
            'vvipLabel' : true,
            'benefitTxt' : "한섬의 콘셉트 스토어 '더한섬하우스'에서 운영하는 VIP 라운지 이용 혜택<br />※ 한섬 VVIP(SILVER 등급 이상) 고객님들은 통합 VVIP혜택으로 이용 부탁드립니다. (횟수 합산 불가)",
            'benefitTxtLink' : '',
            'benefitTxtLinkText' : ''             
          },
          {
            "benefitName" : 'VIP 전용 고객센터', // [퍼블수정] 22.10.28 기획 수정반영
            'benefitInfo' : '',
            'vvipLabel' : true,
            'benefitTxt' : '- 통화 대기 없이 곧바로 VIP 전용 상담원과 연결<br />- VIP전용 채팅상담 (운영시간: 평일 오전 9시~오후9시, 주말/공휴일 오전 9시~오후6시 신정/설/추석 당일은 휴무)',
            'benefitTxtLink' : '',
            'benefitTxtLinkText' : ''
          },
          { // [퍼블수정] 22.12.23 간격 수정요청 반영
            "benefitName" : '호텔 제휴 서비스',
            'benefitInfo' : '',
            'vvipLabel' : false,
            'benefitTxt' : 'THE STAR, STAR 등급 회원님에게  호텔 제휴 서비스 제공',
            'benefitTxtLink' : '/ko/MK/event/10508',
            'benefitTxtLinkText' : '서비스 자세히 보기'
          },
          {
            "benefitName" : '무료 반품',
            'benefitInfo' : '무제한',
            'vvipLabel' : false,
            'benefitTxt' : '구매한 상품을 무료로 반품하실 수 있습니다. (무제한)',
            'benefitTxtLink' : '',
            'benefitTxtLinkText' : ''             
          },
          {
            "benefitName" : '무료 교환',
            'benefitInfo' : '무제한',
            'vvipLabel' : false,
            'benefitTxt' : '구매한 상품을 무료로 교환하실 수 있습니다. (무제한)',
            'benefitTxtLink' : '',
            'benefitTxtLinkText' : ''             
          },
        ]
      },
      {
        level: "thestar",
        list: [
          {
            "benefitName" : '스페셜 기프트',
            'benefitInfo' : '1회 증정',
            'vvipLabel' : false,
            'benefitTxt' : 'THE STAR 등급 회원에게 드리는 감사 선물<br />(1회 증정 / 증정 시기 : 개별 안내)',
            'benefitTxtLink' : '',
            'benefitTxtLinkText' : ''            
          },
          {
            "benefitName" : '스페셜 바우처',
            'benefitInfo' : '10만원권 X 5장',
            'vvipLabel' : false,
            'benefitTxt' : 'THE STAR 등급 회원에게 드리는 스페셜 한섬 바우처<br />※ 유효 기간 : 발급일로부터 6개월 (기간 내 미 사용시 소멸)<br />- 아울렛 및 라이프스타일/뷰티 상품군 적용 제외',
            'benefitTxtLink' : '/ko/ME/couponList',
            'benefitTxtLinkText' : '쿠폰 바로가기'            
          },
          {
            "benefitName" : '등급 축하 바우처',
            'benefitInfo' : '20% X 3장, 10% X 6장',
            'vvipLabel' : false,
            'benefitTxt' : 'THE STAR 등급 선정 시, 6개월간 사용 가능한 온라인 쇼핑 바우처 (전 상품 해당)',// <br />※ 20% 쿠폰은 1회 당 구매 금액 최대 200만원 이내로 사용 가능합니다.
            'benefitTxtLink' : '/ko/ME/couponList',
            'benefitTxtLinkText' : '쿠폰 바로가기'            
          },
          {
            "benefitName" : '생일 축하 바우처',
            'benefitInfo' : '10만원',
            'vvipLabel' : false,
            'benefitTxt' : '생일을 맞은 THE 클럽 회원님을 위한 축하 바우처<br />(생일 7일전(연 1회) 발급, 1개월간 사용 가능)<br />※ 금액권 바우처: 아울렛 및 라이프스타일/뷰티 상품군 적용 제외',
            'benefitTxtLink' : '/ko/ME/couponList',
            'benefitTxtLinkText' : '쿠폰 바로가기'            
          },
          {
            "benefitName" : '마일리지 추가 적립',
            'benefitInfo' : '5% 추가적립',
            'vvipLabel' : false,
            'benefitTxt' : '온라인에서 구매 시, 구매 마일리지 추가 적립<br />(10% 초과 할인 상품 및 아울렛 제외)',
            'benefitTxtLink' : '',
            'benefitTxtLinkText' : ''            
          },
          // [퍼블리싱]240110 케어플러스 세탁 THE STAR 전용 보관 서비스
          {
            "benefitName" : '케어플러스 세탁 / 보관',
            'benefitInfo' : '3회',
            'vvipLabel' : false,
            'benefitTxt' : 'THE STAR 등급 회원에게 제공하는 프리미엄 세탁 / 보관 서비스',
            'benefitTxtLink' : '/ko/CS/serviceCareWash',
            'benefitTxtLinkText' : '서비스 자세히 보기'            
          },
          {
            "benefitName" : '선물포장 서비스',
            'benefitInfo' : '',
            'vvipLabel' : false,
            'benefitTxt' : 'THE STAR 등급 회원에게 제공하는 프리미엄 선물 포장 서비스 (주문 시 선택 가능)',
            'benefitTxtLink' : '/ko/MK/event/12237',
            'benefitTxtLinkText' : '서비스 자세히 보기'            
          },
          // [퍼블수정]24.01.17 오에라 스킨케어 서비스 추가
          {
            "benefitName" : '오에라 스킨케어 서비스',
            'benefitInfo' : '선착순 50명',
            'vvipLabel' : false,
            'benefitTxt' : 'THE STAR 등급 회원에게 제공하는 오에라 스페셜 스파 서비스 (선착순 50명)',
            'benefitTxtLink' : '/ko/MK/event/15287',  //  https://www.thehandsome.com/ko/MK/event/15287
            'benefitTxtLinkText' : '서비스 자세히 보기'            
          },
          {
            "benefitName" : 'VIP 클래스',
            'benefitInfo' : '',
            'vvipLabel' : false,
            'benefitTxt' : 'THE STAR 등급 회원에게 제공하는 클래스 초청권<br>※개별 안내',
            'benefitTxtLink' : '',
            'benefitTxtLinkText' : ''            
          },
          { // [퍼블수정] 22.12.23 간격 수정요청 반영
            "benefitName" : '더한섬하우스 라운지 이용',
            'benefitInfo' : '월8회',
            'vvipLabel' : true,
            'benefitTxt' : "한섬의 콘셉트 스토어 '더한섬하우스'에서 운영하는 VIP 라운지 이용 혜택<br />※ 한섬 VVIP(SILVER 등급 이상) 고객님들은 통합 VVIP혜택으로 이용 부탁드립니다. (횟수 합산 불가)",
            'benefitTxtLink' : '',
            'benefitTxtLinkText' : ''             
          },
          {
            "benefitName" : 'VIP 전용 고객센터', // [퍼블수정] 22.10.28 기획 수정반영
            'benefitInfo' : '',
            'vvipLabel' : true,
            'benefitTxt' : '-통화 대기 없이 곧바로 VIP 전용 상담원과 연결<br />-VIP전용 채팅상담 (운영시간: 평일 오전 9시~오후9시, 주말/공휴일 오전 9시~오후6시 신정/설/추석 당일은 휴무)',
            'benefitTxtLink' : '',
            'benefitTxtLinkText' : ''
          },
          { // [퍼블수정] 22.12.23 간격 수정요청 반영
            "benefitName" : '호텔 제휴 서비스',
            'benefitInfo' : '',
            'vvipLabel' : false,
            'benefitTxt' : 'THE STAR, STAR 등급 회원님에게  호텔 제휴 서비스 제공',
            'benefitTxtLink' : '/ko/MK/event/10508',
            'benefitTxtLinkText' : '서비스 자세히 보기'
          },
          {
            "benefitName" : 'THE STAR 전담 케어',
            'benefitInfo' : '',
            'vvipLabel' : false,
            'benefitTxt' : 'THE STAR 등급 회원만을 위한 전담 상담사가 배정되어 신속하고 차별화된 상담 서비스 제공 (전담 상담사 개별 안내)',
            'benefitTxtLink' : '',
            'benefitTxtLinkText' : ''             
          },
          {// [퍼블수정] 22.10.12 문구 위치변경
            "benefitName" : '무료 반품',
            'benefitInfo' : '무제한',
            'vvipLabel' : false,
            'benefitTxt' : '구매한 상품을 무료로 반품하실 수 있습니다. (무제한)',
            'benefitTxtLink' : '',
            'benefitTxtLinkText' : ''             
          },
          {// [퍼블수정] 22.10.12 문구 위치변경
            "benefitName" : '무료 교환',
            'benefitInfo' : '무제한',
            'vvipLabel' : false,
            'benefitTxt' : '구매한 상품을 무료로 교환하실 수 있습니다. (무제한)',
            'benefitTxtLink' : '',
            'benefitTxtLinkText' : ''             
          },
        ]
      },

    ],
    toggletext: true,  
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
