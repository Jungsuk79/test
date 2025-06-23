<template>
  <DialogBasic class="popup-card-benefit" header-title="카드 행사 혜택 안내" :width="540" @hide="closeDialog">
    <template #body>  
      <div class="cmp-tabs tabs-actionTop">
        <v-tabs v-model="tab" fixed-tabs>
          <v-tab>무이자 할부</v-tab>
          <v-tab>청구할인</v-tab>
          <v-tab>즉시할인</v-tab>
        </v-tabs>
      </div>
      <div class="tab-content">
        <v-tabs-items v-model="tab" touchless>
          <!-- 무이자 할부 -->
          <v-tab-item :transition="false">
            <h2 class="ir">무이자 할부</h2>
            <ul class="card-benefit-list">
              <li v-for="(item,index) in interestFree" :key="index">
                <div class="img-cnt">
                  <v-img :src="item.card_logo" alt="logo"></v-img>
                  <!-- eslint-disable -->
                  <div class="name" v-html="item.card_name"></div>
                  <!-- eslint-disable -->
                </div>
                <div class="txt-cnt">
                  <!-- eslint-disable -->
                  <div class="txt0" v-html="item.desc"></div>
                  <div class="txt1" v-html="item.desc2"></div>
                  <!-- eslint-disable -->
                </div>
              </li>
            </ul>
            <h2 v-if="partialInterestFree.length > 0" class="pop-sub-tit">부분 무이자 할부</h2>
            <ul class="card-benefit-list">
              <li v-for="(item,index) in partialInterestFree" :key="index">
                <div class="img-cnt">
                  <v-img :src="item.card_logo" alt="logo"></v-img>
                  <!-- eslint-disable -->
                  <div class="name" v-html="item.card_name"></div>
                  <!-- eslint-disable -->
                </div>
                <div class="txt-cnt">
                  <!-- eslint-disable -->
                  <div class="txt0" v-html="item.desc"></div>
                  <div class="txt1" v-html="item.desc2"></div>
                  <!-- eslint-disable -->
                </div>
              </li>
            </ul>
          </v-tab-item>
          <!--// 무이자 할부 -->
          <!-- 청구할인 -->
          <v-tab-item :transition="false">
            <h2 class="ir">청구할인</h2>
            <ul v-if="billingDiscount.length > 0" class="card-benefit-list">
              <li v-for="(item,index) in billingDiscount" :key="index">
                <div class="img-cnt">
                  <v-img :src="item.card_logo" alt="logo"></v-img>
                  <!-- eslint-disable -->
                  <div class="name" v-html="item.card_name"></div>
                  <!-- eslint-disable -->
                </div>
                <div class="txt-cnt">
                  <!-- eslint-disable -->
                  <div class="txt0" v-html="item.desc"></div>
                  <div class="txt1" v-html="item.desc2"></div>
                  <!-- eslint-disable -->
                </div>
              </li>
            </ul>
            <CommonNoData v-else msg="카드 행사가 없습니다." />
          </v-tab-item>
          <!--// 청구할인 -->
          <!-- 즉시할인 -->
          <v-tab-item :transition="false">
            <h2 class="ir">즉시할인</h2>
            <ul v-if="InstantDiscount.length > 0" class="card-benefit-list">
              <li v-for="(item,index) in InstantDiscount" :key="index">
                <div class="img-cnt">
                  <v-img :src="item.card_logo" alt="logo"></v-img>
                  <!-- eslint-disable -->
                  <div class="name" v-html="item.card_name"></div>
                  <!-- eslint-disable -->
                </div>
                <div class="txt-cnt">
                  <!-- eslint-disable -->
                  <div class="txt0" v-html="item.desc"></div>
                  <div class="txt1" v-html="item.desc2"></div>
                  <!-- eslint-disable -->
                </div>
              </li>
            </ul>
            <CommonNoData v-else msg="카드 행사가 없습니다." />
          </v-tab-item>
          <!--// 즉시할인 -->
        </v-tabs-items>
        <!-- 유의사항 -->
        <!-- [퍼블수정]23.02.21유의사항 수정 -->
        <ul v-show="tab===0" class="cmp-dotList">
          <li>개인사업자/법인/체크/선불/기프트/하이브리드/토스카드/은행계열카드는 적용 대상에서 제외됩니다.</li>
          <li>고객 부담 수수료는 해당 카드사로 문의 바랍니다.</li>
          <li>전북/광주카드 무이자의 경우, 결제창 내 (무) 표기가 되지 않더라도, 금액 조건 만족 시 결제 시에 업종 무이자 적용됩니다.</li>
          <li>본 행사는 카드사 사정에 따라 변경 또는 중단될 수 있습니다.</li>
        </ul>
        <!-- //유의사항 -->
      </div>
    </template>
  </DialogBasic>
</template>
<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  components: { DialogBasic },
  data: () => ({
    tab: 0,
    interestFree : [ // 무이자 할부
      {
        card_logo : '/images/card/card-logo-shinhan.png',
        card_name : '신한카드',
        desc : '5만원이상 결제시 2-7개월 무이자 할부<br>대상 신한카드 전회원',
        desc2 : '신한BC제외/법인,기프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-samsung.png',
        card_name : '삼성카드',
        desc : '5만원이상 결제시 2-7개월 무이자 할부<br>대상 삼성카드 전회원',
        desc2 : 'BC제외/법인,기프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-bc.png',
        card_name : '비씨카드',
        desc : '5만원이상 결제시 2-7개월 무이자 할부<br>대상 비씨카드 전회원',
        desc2 : '법인,기프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-hyundai.png',
        card_name : '현대카드',
        desc : '5만원이상 결제시 2-7개월 무이자 할부<br>대상 현대카드 전회원',
        desc2 : '법인,기프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-kb.png',
        card_name : '국민카드',
        desc : '5만원이상 결제시 2-7개월 무이자 할부<br>대상 국민카드 전회원',
        desc2 : '법인,기프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-hana.png',
        card_name : '하나카드',
        desc : '5만원이상 결제시 2-7개월 무이자 할부<br>대상 하나카드 전회원',
        desc2 : '법인,기프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-nh.png',
        card_name : 'NH카드',
        desc : '5만원이상 결제시 2-7개월 무이자 할부<Br>대상 NH카드 전회원',
        desc2 : '법인,기프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28', 
      },
      {
        card_logo : '/images/card/card-logo-lotte.png',
        card_name : '롯데카드',
        desc : '롯데카드 5만원이상 결제시 2~4개월 무이자 할부<br>대상:롯데카드 전 회원',
        desc2 : '법인,기프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-master.png',
        card_name : '글로벌<br>MASTER',
        desc : '5만원이상 결제시 2-7개월 무이자 할부<Br>대상 NH카드 전회원',
        desc2 : '법인,기프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-amex.png',
        card_name : '글로벌<br>아멕스',
        desc : '5만원이상 결제시 2-7개월 무이자 할부<Br>대상 NH카드 전회원',
        desc2 : '법인,기프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-unionpay.png',
        card_name : '중국은련<br>카드',
        desc : '5만원이상 결제시 2-7개월 무이자 할부<Br>대상 NH카드 전회원',
        desc2 : '법인,기프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-jb.png',
        card_name : '전북카드',
        desc : '5만원이상 결제시 2-7개월 무이자 할부<Br>대상 NH카드 전회원',
        desc2 : '법인,기프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-kdb.png',
        card_name : '산업카드',
        desc : '5만원이상 결제시 2-7개월 무이자 할부<Br>대상 NH카드 전회원',
        desc2 : '법인,기프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-jeju.png',
        card_name : '제주카드',
        desc : '5만원이상 결제시 2-7개월 무이자 할부<Br>대상 NH카드 전회원',
        desc2 : '법인,기프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-kbank.png',
        card_name : '케이뱅크<br>카드',
        desc : '5만원이상 결제시 2-7개월 무이자 할부<Br>대상 NH카드 전회원',
        desc2 : '법인,기프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-post.png',
        card_name : '우체국<br>체크카드',
        desc : '5만원이상 결제시 2-7개월 무이자 할부<Br>대상 NH카드 전회원',
        desc2 : '법인,기프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-keb.png',
        card_name : '외환카드',
        desc : '5만원이상 결제시 2-7개월 무이자 할부<Br>대상 NH카드 전회원',
        desc2 : '법인,기 프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-visa.png',
        card_name : '비자카드',
        desc : '5만원이상 결제시 2-7개월 무이자 할부<Br>대상 NH카드 전회원',
        desc2 : '법인,기프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-jcb.png',
        card_name : '글로벌 JCB',
        desc : '5만원이상 결제시 2-7개월 무이자 할부<Br>대상 NH카드 전회원',
        desc2 : '법인,기프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-diners.png',
        card_name : '글로벌<br>다이너스',
        desc : '5만원이상 결제시 2-7개월 무이자 할부<Br>대상 NH카드 전회원',
        desc2 : '법인,기프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-kj.png',
        card_name : '광주카드',
        desc : '5만원이상 결제시 2-7개월 무이자 할부<Br>대상 NH카드 전회원',
        desc2 : '법인,기프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-citi.png',
        card_name : '씨티카드',
        desc : '5만원이상 결제시 2-7개월 무이자 할부<Br>대상 NH카드 전회원',
        desc2 : '법인,기프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-sh.png',
        card_name : '수협카드',
        desc : '5만원이상 결제시 2-7개월 무이자 할부<Br>대상 NH카드 전회원',
        desc2 : '법인,기프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-mg.png',
        card_name : '새마을 금고<br>체크카드',
        desc : '5만원이상 결제시 2-7개월 무이자 할부<Br>대상 NH카드 전회원',
        desc2 : '법인,기프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-sb.png',
        card_name : '저축은행<br>체크카드',
        desc : '5만원이상 결제시 2-7개월 무이자 할부<Br>대상 NH카드 전회원',
        desc2 : '법인,기프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28',
      },
    ],
    partialInterestFree : [ // 부분 무이자
      {
        card_logo : '/images/card/card-logo-shinhan.png',
        card_name : '신한카드',
        desc : '10개월 부분무이자',
        desc2 : '5만원 이상 결제시/ 1,2,3,4회차 고객부담, 잔여할부 수수료 면제/법인,기프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-samsung.png',
        card_name : '삼성카드',
        desc : '10개월 부분무이자',
        desc2 : '5만원 이상 결제시/ 1,2,3,4회차 고객부담, 잔여할부 수수료 면제/법인,기프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-bc.png',
        card_name : '비씨카드',
        desc : '10개월 부분무이자',
        desc2 : '5만원 이상 결제시/ 1,2,3,4회차 고객부담, 잔여할부 수수료 면제/법인,기프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-hyundai.png',
        card_name : '현대카드',
        desc : '10개월 부분무이자',
        desc2 : '5만원 이상 결제시/ 1,2,3,4회차 고객부담, 잔여할부 수수료 면제/법인,기프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-kb.png',
        card_name : '국민카드',
        desc : '10개월 부분무이자',
        desc2 : '5만원 이상 결제시/ 1,2,3,4회차 고객부담, 잔여할부 수수료 면제/법인,기프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-payco.png',
        card_name : '페이코',
        desc : '10개월 부분무이자',
        desc2 : '5만원 이상 결제시/ 1,2,3,4회차 고객부담, 잔여할부 수수료 면제/법인,기프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-npay.png',
        card_name : '네이버페이',
        desc : '10개월 부분무이자',
        desc2 : '5만원 이상 결제시/ 1,2,3,4회차 고객부담, 잔여할부 수수료 면제/법인,기프트,체크,선불카드 제외<br>2022.02.01 ~ 2022.02.28',
      },
    ],
    billingDiscount : [ // 청구 할인
      /* {
        card_logo : '/images/card/card-logo-bc.png',
        card_name : '비씨카드',
        desc : '페이북으로 결제 시, 1만원 결제일 할인<br>(30만원 이상 결제 시/1인당 최대 1회 적용)',
        desc2 : '페이북>마이태그 ‘ 더한섬닷컴’ 태그 후,<br>결제한 회원에 한해 적용됩니다.<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-shinhan.png',
        card_name : '신한카드',
        desc : '신한카드 50만원이상 결제 시 5% 청구할인',
        desc2 : '1인 1일 최대 10만원 할인<br>2022.02.01 ~ 2022.02.28',
      }, */
    ],
    InstantDiscount: [ // 즉시 할인
      {
        card_logo : '/images/card/card-logo-lpoint.png',
        card_name : '엘포인트',
        desc : '신한카드로 30만원 이상 결제 시, 3만원 할인',
        desc2 : '선착순 적용되며, 조기 종료될 수 있습니다.<br>신용카드 결제창에서 쿠폰 적용하세요<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-samsung.png',
        card_name : '삼성카드',
        desc : '삼성카드로 30만원 이상 결제 시 3만원 할인',
        desc2 : '할인 횟수 제한 없습니다.<br>선착순 혜택으로, 기간 내 조기 종료될 수 있습니다.<br>2022.02.01 ~ 2022.02.28',
      },
      {
        card_logo : '/images/card/card-logo-toss.png',
        card_name : '토스머니',
        desc : '토스로 20만원 이상 결제 시 3,000원 할인<br>대상 페이나우 전 상점 (첫 결제 시 3,000원 할인)',
        desc2 : '2022.02.01 ~ 2022.02.28',
      },
    ],
  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped></style>
