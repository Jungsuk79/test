<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="cmp-page-tit">
        <h2 class="tit">주문완료</h2>
      </div>
      <!-- 주문완료 상단 -->
      <div class="order-complete-top">
        <i class="cmp-icon-etc cmp-icon-120 i-order"></i>
        <p class="txt">
          김한섬 고객님 선물이 발송되었습니다.
        </p>
      </div>
      <!-- //주문완료 상단 -->

      <!-- 주문번호 -->
      <div class="order-number-box mb-10">
        <div class="line-box">
          <p class="cmp-font">주문번호<span class="ml-8">211222P12345678</span></p>
          <p class="cmp-font fnt-14">2021.12.22</p>
        </div>
      </div>
      <!-- //주문번호 -->

      <!-- 상품공지 -->
      <ul v-if="prdNotice" class="cmp-info list-type2 mb-34">
        <!-- eslint-disable -->
        <li v-for="(item,index) in prdNotice" :key="index" class="cmp-font fnt-14" v-html="item"></li>
        <!-- eslint-disable -->
      </ul>
      <!-- //상품공지 -->

      <!-- 카드 메시지 -->
      <div class="contents-line-box first mb-34 mt-34">
        <!-- 230206 선물하기 : 마크업 변경 -->
        <div class="or-card-msg box-type2" :class="{'none-msg' : !cardMsg}">
          <div class="card-cnt">
            <div v-if="cardSelectIdx==0">
              <Lottie :options="cardList[0].option" class="cmp-lottie" @animCreated="cardBaseAnim"/>
            </div>
            <div v-if="cardSelectIdx==1">
              <Lottie :options="cardList[1].option" class="cmp-lottie" @animCreated="cardCongratsAnim"/>
            </div>
            <div v-if="cardSelectIdx==2">
              <Lottie :options="cardList[2].option" class="cmp-lottie" @animCreated="cardThanksAnim"/>
            </div>
            <div v-if="cardSelectIdx==3">
              <Lottie :options="cardList[3].option" class="cmp-lottie" @animCreated="cardLoveAnim"/>
            </div>
            <div v-if="cardSelectIdx==4">
              <Lottie :options="cardList[4].option" class="cmp-lottie" @animCreated="cardChristmasAnim"/>
            </div>
          </div>
          <div v-if="cardMsg" class="msg-cnt">
            <p class="msg" v-html="cardMsg"></p>
          </div>
        </div>
        <!-- // 230206 선물하기 : 마크업 변경 -->
        <dl class="mt-24">
          <dt class="cmp-font fnt-18">받는 사람</dt>
          <dd class="cmp-font mt-10">더한섬 / 010-****-5678</dd>
        </dl>
      </div>
      <!-- //카드 메시지 -->

      <!-- 주문상품 리스트 -->
      <div class="cmp-sub-tit small">
        <h3 class="tit">주문상품 {{prdList.length}}건</h3>
      </div>
      <div class="product-row-table or-complete-type">
        <table>
          <caption>주문 상품 리스트</caption>
          <colgroup>
            <col style="width:50%;"/>
            <col style="width:50%;"/>
          </colgroup>
          <thead>
            <tr>
              <th>상품정보</th>
              <th>상품금액</th>
            </tr>
          </thead>
          <tbody>
            <!-- 상품리스트 -->
            <template v-for="(item, index) in prdList">
              <tr :key="index">
                <td>
                  <div class="product-row-unitInfo or-prd-type"><!-- 230105 상품이미지 : or-prd-type 클래스 추가 -->
                    <div class="product-image">
                      <v-img :src="item.image" :alt="item.product_name" />
                    </div>
                    <div class="product-info-cnt">
                      <div class="product-brand">{{item.brand_name}}</div>
                      <div class="product-name">{{item.product_name}}</div>
                      <div v-if="item.options" class="product-option">
                        <span v-for="(item2,index2) in item.options" :key="index2" class="option">{{item2}}</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="product-row-unitPrice">
                    <div class="product-sellprice"><strong>{{item.sell_price | number}}</strong>원</div>
                    <div v-if="item.price || item.discount" class="product-price-cnt">
                      <del class="product-price-origin">{{item.price | number}}원</del>
                      <!-- eslint-disable -->
                      <span class="product-discount">{{item.discount}}<em>%</em></span>
                      <!-- eslint-disable -->
                    </div>
                  </div>
                </td>
              </tr>
            </template>
            <!-- //상품리스트 -->
          </tbody>
        </table>
      </div>
      <ul class="cmp-info list-type1 mt-14"><!-- [퍼블수정] 22.09.30 주문조회 수정 -->
        <li class="cmp-font fnt-14">친환경 쇼핑백 무료 서비스 신청완료</li>
        <li class="cmp-font fnt-14">
          선물포장 신청완료
          <div class="order-msg-cnt">
            <div class="name">김한섬님</div>
            <div class="cnt">일 년 중 가장 특별한 오늘, 생일을 축하드립니다. 소중한 분들과 행복한 시간을 보내세요. 일 년 중 가장 특별한 생일을 축하드립니다. 일 년 중 가장 특별한 생일을 축하드립니다.</div>
          </div>
        </li>
      </ul>
      <!-- //주문상품 리스트 -->

      <!-- 증정/사은품 -->
      <div class="cmp-sub-tit line mt-60">
        <h3 class="tit">증정&amp;사은품</h3>
      </div>
      <ul class="gifts-list-box box2 mt-24">
        <li v-for="(item,index) in giftsData" :key="index">
          <div class="info-cnt">
            <div v-if="item.type==='mileage'" class="mileage-txt">
              <div class="txt"><strong>{{item.mileage | number}}</strong>M</div>
            </div>
            <v-img v-else :src="item.image" aspect-ratio="1" :alt="item.type==='event'?'사은품 이미지':'증정품 이미지'"></v-img>
            <div class="cnt">
              <div class="name">
                <template v-if="item.type==='mileage'">마일리지 적립</template>
                <template v-else>{{item.name}}</template>
              </div>
              <!-- eslint-disable -->
              <div class="desc" v-html="item.desc"></div>
              <div v-if="item.desc2" class="desc2" v-html="item.desc2"></div><!-- 221215 주문완료 : 추가 -->
              <!-- eslint-disable -->
            </div>
          </div>
        </li>
      </ul>
      <!-- //증정/사은품 -->

      <!-- 결제 정보 [퍼블수정] 22.09.30 주문조회 수정 -->
      <div class="cmp-sub-tit line mt-60">
        <h3 class="tit">결제정보</h3>
      </div>
      <p class="cmp-font fnt-18 mt-24"><strong class="bold">신용카드</strong> / 비씨카드</p>
      <div class="refund-box mt-20">
        <ul class="cust">
          <li>
            <p class="cmp-font fnt-14 mb-6">상품금액</p>
            <p class="cmp-font fnt-20">910,000<span class="cmp-font fnt-14 ml-2">원</span></p>
          </li>
          <li class="sign minus"></li>
          <li>
            <p class="cmp-font fnt-14 mb-6">할인혜택</p>
            <p class="cmp-font fnt-20">21,000<span class="cmp-font fnt-14 ml-2">원</span></p>
          </li>
          <li class="sign plus"></li>
          <li>
            <p class="cmp-font fnt-14 mb-6">배송비</p>
            <p class="cmp-font fnt-20">3,000<span class="cmp-font fnt-14 ml-2">원</span></p>
          </li>
          <li class="sign equal"></li>
          <li>
            <p class="cmp-font fnt-14 mb-6">최종 결제 금액</p>
            <p class="cmp-font fnt-20">892,000<span class="cmp-font fnt-14 ml-2">원</span><span class="cmp-font fnt-14">(일시불)</span></p>
          </li>
        </ul>
        <div class="cmp-info info-type2">
          <span class="tit">할인혜택</span>
          <dl>
            <dt>할인금액</dt>
            <dd>15,000<span>원</span></dd>
            <dt>한섬마일리지</dt>
            <dd>5,000<span>원</span></dd>
            <dt>H.Point</dt>
            <dd>1,000<span>원</span></dd>
            <dt>e-money</dt>
            <dd>3,000<span>원</span></dd>
          </dl>
        </div>
      </div>
      <!-- //결제정보 [퍼블수정] 22.09.30 주문조회 수정 -->

      <!-- 적립 예정 포인트 -->
      <div class="cmp-sub-tit line mt-60">
        <h3 class="tit">적립예정포인트</h3>
      </div>
      <div class="contents-line-box">
        <ul class="col-bar-list">
          <li class="point-cnt">
            <span class="tit">한섬마일리지</span>
            <span class="num">84,250</span>
            <span class="txt">M</span>
          </li>
          <li class="point-cnt">
            <span class="tit">H.Point</span>
            <span class="num">1,685</span>
            <span class="txt">P</span>
          </li>
        </ul>
        <!-- [퍼블수정]23.02.13 오에라 마일리지 삭제 -->
      </div>
      <!-- //적립 예정 포인트 -->

      <v-layout justify-center class="cmp-btnsArea flex-auto mt-34">
        <v-btn outlined large color="primary">쇼핑 계속하기</v-btn>
        <v-btn large color="primary">주문내역조회</v-btn>
      </v-layout>
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import EventBus from '~/api/common/EventBus'

// 230206 선물하기 : 카드 이미지 로티 추가 Start
import Lottie from 'vue-lottie/src/lottie.vue'
import * as cardLottieBase from '~/assets/lottie/order/card-base.json'
import * as cardLottieCongrats from '~/assets/lottie/order/card-congrats.json'
import * as cardLottieThanks from '~/assets/lottie/order/card-thanks.json'
import * as cardLottieLove from '~/assets/lottie/order/card-love.json'
import * as cardLottieChristmas from '~/assets/lottie/order/card-christmas.json'
// 230206 선물하기 : 카드 이미지 로티 추가 End

export default {
  components: {
    Lottie, // 230206 선물하기 : 추가
    // Swiper,
    // SwiperSlide,
  },
  layout: 'LayoutBasics',
  data() {
    return {
      // cardMsg : null,
      cardMsg : '영희야 너무 반갑다.<br /> 내가 너를 위해 200자 편지와<br /> 선물을 준비했어.영희야 너무 반갑다.<br /> 내가 너를 위해 200자 편지와<br /> 선물을 준비했어.영희야 너무 반갑다.<br /> 내가 너를 위해 200자 편지와<br /> 선물을 준비했어.',
      // cardMsg : '영희야 너무 반갑다. 내가 너를 위해 200자 편지와 선물을 준비했어 새해가 되서도 너와 나의 관계가 언제나 돈독하여 200년해로 지냈으면 좋겠다. 영희야 항상 건강하고 언제나 즐겁고 밝은 영희가 되도록 하자. 낼모래 티타임 잊지 않았지? 그때 만나~ 사랑해!! 영희야 너무 반갑다. 내가 너를 위해 200자 편지와 선물을 준비했어 새해가 되서도 너와 나의 관계가 언제나 돈독하여 200년해로 지냈으면 좋겠다. 영희야 항상 건강하고 언제나 즐겁고 밝은 영희가 되도록 하자.',
      cardSelectIdx : 0, // 230206 선물하기 : 추가
      cardList:[ // 230206 선물하기 : 추가
        {
          anim : null,
          option : {animationData: cardLottieBase.default}
        },
        {
          anim : null,
          option : {animationData: cardLottieCongrats.default}
        },
        {
          anim : null,
          option : {animationData: cardLottieThanks.default}
        },
        {
          anim : null,
          option : {animationData: cardLottieLove.default}
        },
        {
          anim : null,
          option : {animationData: cardLottieChristmas.default}
        }
      ],
      prdNotice : null, 
      /* prdNotice : [
        '오에라 상품은 전용 박스로 별도배송',
        '예약상품은 0년 0월 0일부터 순차 배송',
        '준비된 상품부터 순차 발송 예정'
      ], */
      prdList: [
        {
          brand_name: 'MINE',
          product_name: '컬러 블록 니트 가디건',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/001.jpg',
          options: ['BLACK', '90', '1개'],
          sell_price: '355000',
          discount: '20',
          price: '366000',
        },
        {
          brand_name: 'OREA',
          product_name: '퓨리파잉 클렌징 폼',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/002.jpg',
          options: ['Charcoal gray', '90', '1개'],
          sell_price: '355000',
          discount: null,
          price: null,
        },
        {
          brand_name: 'FOURM MEN’S LOUNGE',
          product_name: '[BEARBRICK] 사이키델릭 페이즐리',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/003.jpg',
          options: ['MULTI', 'FR', '1개'],
          sell_price: '355000',
          discount: '20',
          price: '366000',
        },
      ],
      giftsData : [ // 증정품,사은품
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-6.png',
          name : '오에라 화장품 샘플',
          desc : '오에라 화장품 샘플 100만원 이상 구매시<br>프리미엄 샘플 세트(파우치+에센스30ml)을 증정합니다.',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-5.png',
          name : 'IPANEMA 에코백',
          desc : '오에라 화장품 샘플 100만원 이상 구매시<br>프리미엄 샘플 세트(파우치+에센스30ml)을 증정합니다.',
          desc2 : '별도 배송 10월 7일 사은품은 이벤트 종료 후 취소 및 반품을 고려하여 10월 7일 발송 예정', // 221215 주문완료 : 추가
        },
        {
          type : 'mileage',
          mileage : 100000,
          desc : '5월 2일 이후 적립 예정',
        },
      ],
    }
  },
  created() {
    
  },
  methods: {
    /* 230206 선물하기 : mtthod 추가 Start */
    cardBaseAnim(anim){
      const me = this
      me.cardList[0].anim = anim
    },
    cardCongratsAnim(anim){
      const me = this
      me.cardList[1].anim = anim
    },
    cardThanksAnim(anim){
      const me = this
      me.cardList[2].anim = anim
    },
    cardLoveAnim(anim){
      const me = this
      me.cardList[3].anim = anim
    },
    cardChristmasAnim(anim){
      const me = this
      me.cardList[4].anim = anim
    },
    /* 230206 선물하기 : mtthod 추가 End */
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/pages/order.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>
