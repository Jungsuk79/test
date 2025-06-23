<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap" v-if="!showEventCase">
      <CommonContentsLeftMenu :title="'마이페이지'" :url="'/json/mypage_left_menu.json'" :active="'/ko/OR/giftBoxList'"></CommonContentsLeftMenu>
      <div class="my-page-r-box content-myGiftbox"><!-- 마이페이지 -->
        <div class="cmp-page-tit">
          <h2 class="tit">받은 선물</h2>
        </div>
        <div class="cmp-sub-tit small mb-24"><!-- [퍼블수정] 22.09.30 주문조회 수정 -->
          <h3 class="tit"><strong class="bold">김한섬</strong>님께 선물이 도착 했습니다!</h3><!-- 230206 선물하기 : <strong> 테그 추가 -->
        </div>

        <!--메세지 카드 (230206 선물하기 : 마크업 변경) -->
        <div class="or-card-msg box-type3" :class="{'none-msg' : !cardMsg}">
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
            <p class="msg">{{cardMsg}}</p>
          </div>
        </div>
        <!--//메세지 카드 (230206 선물하기 : 마크업 변경) -->

        <!-- 보낸 사람 정보 -->
        <div class="return-info no-tit no-bt no-bb">
          <div class="box">
            <dl class="pack-info">
              <dd class="txt cmp-font fnt-18 pb-10">보낸 사람</dd><!-- [퍼블수정] 22.09.30 주문조회 수정 -->
            </dl>
            <dl class="pack-info">
              <dd class="txt pb-0">김한섬 / 010-****-5678</dd><!-- [퍼블수정] 22.09.30 주문조회 수정 -->
            </dl>
          </div>
        </div>
        <!-- // 보낸 사람 정보 -->
      
        <!-- 상품 정보 -->
        <div class="product-row-table">
          <table>
            <caption>상품리스트</caption>
            <colgroup>
              <col style="width:auto"/>
              <col style="width:248px;"/>
              <col style="width:128px;"/> 
            </colgroup>
            <thead>
              <tr>
                <th>상품정보</th>
                <th>상품금액</th>
                <th>확인&#47;신청</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, index) in deliveryList">
                <tr :key="index">
                  <td class="pw-0">
                    <nuxt-link :to="item.link" class="product-row-unitInfo or-prd-type"><!-- [퍼블수정]23.01.19 상품이미지 : or-prd-type 클래스 추가 -->
                      <div class="product-image" :class="{'sold-out':item.sold_out}">
                        <v-img :src="item.image" :alt="item.product_name" />
                        <div v-if="item.sold_out" class="sold-out-txt">SOLD OUT</div>
                      </div>
                      <div class="product-info-cnt">
                        <div class="product-brand">{{item.brand_name}}</div>
                        <div class="product-name">{{item.product_name}}</div>
                        <div v-if="item.options" class="product-option">
                          <span v-for="(item2,index2) in item.options" :key="index2" class="option">{{item2}}</span>
                        </div>
                      </div>
                    </nuxt-link>
                  </td>
                  <td>
                    <nuxt-link :to="item.link" class="product-row-unitPrice">
                      <div class="product-sellprice"><strong>{{item.sell_price | number}}</strong>원</div>
                      <div v-if="item.price || item.discount" class="product-price-cnt">
                        <del class="product-price-origin">{{item.price | number}}원</del>
                        <!-- eslint-disable -->
                        <span class="product-discount">{{item.discount}}<em>%</em></span>
                        <!-- eslint-disable -->
                      </div>
                    </nuxt-link>
                  </td>
                  <td class="pw-16">
                    <div class="product-row-unitBtn">
                      <v-btn outlined small color="normal">옵션 변경</v-btn>
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <!-- //상품 정보 -->

        <div class="text-center mt-34">
          <v-btn outlined small color="normal" width="160px" height="46px">배송지 입력</v-btn>
          <p class="cmp-font fnt-14 c-red mt-14">2021.12.24까지 배송지를 입력하지 않으시면 자동 취소됩니다.</p>
        </div>
        <div class="mt-24"><!-- [퍼블수정] 22.09.30 주문조회 수정 -->
          <ul class="cmp-dotList">
            <li>받은선물은 주문완료 후 3일 이내에 배송지를 입력하지 않으시면 자동 취소됩니다. (주말 포함 3일 기준)</li>
            <li>옵션 변경은 동일 금액에 한해서 배송지 입력 전까지 가능합니다.</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- [퍼블수정]25.04.02 가정의달 이벤트 -->
    <div class="content-wrap" v-if="showEventCase">
      <div class="my-page-r-box content-myGiftbox show-event-case"><!-- 마이페이지 -->
        <div class="cmp-page-tit">
          <!-- 0425 수정 -->
          <h2 class="tit">받은 메시지 카드</h2>
        </div>
        <!--메세지 카드 (230206 선물하기 : 마크업 변경) -->
        <div class="or-card-msg box-type3" :class="{'none-msg' : !cardMsg}">
          <div class="card-cnt">
            <img src="https://img.thehandsome.com/md/publish/event/250401_familyDay/card_1.jpg" alt="" />
          </div>
          <div v-if="cardMsg" class="msg-cnt">
            <p class="msg">{{cardMsg}}</p>
          </div>
        </div>
        <!--//메세지 카드 (230206 선물하기 : 마크업 변경) -->

        <div class="event-banner">
          <!-- 미 가입자 화면 -->
          <a href="#none">
            <img src="https://img.thehandsome.com/md/publish/event/250401_familyDay/banner01.png" alt="" />
            <div class="text-cover">
              <p class="event">EVENT</p>
              <p>더한섬닷컴<br />신규 가입 최대 20% 혜택</p>
            </div>
          </a>
          <!-- //미 가입자 화면 -->
          <!--  0425 수정 가입자 화면 -->
          <a href="#none">
            <img src="https://img.thehandsome.com/md/publish/event/250401_familyDay/banner02.jpg" alt="" />
            <div class="text-cover">
              <p class="event">EVENT</p>
              <p>LOVE MORE, HANDSOMELY<br />전 상품 10% & 룰렛 추가 혜택</p>
            </div>
          </a>
          <!-- // 0425 수정 가입자 화면 -->
        </div>
      </div>
    </div>
    <!-- //[퍼블수정]25.04.02 가정의달 이벤트 -->
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
  },
  layout: 'LayoutBasics',
  data() {
    return {
      // gift card background color
      // giftcardBg : '#EA5532', // 230206 선물하기 : 삭제
      // textareaModel : '200자를적용합니다. 200자를적용합니다. 200자를적용합니다. 200자를적용합니다. 200자를적용합니다. 200자를적용합니다. 200자를적용합니다. 200자를적용합니다. 200자를적용합니다. 200자를적용합니다. 200자를적용합니다. 200자를적용합니다. 200자를적용합니다. 200자를적용합니다. 200자를적용합니다. 200자를적용합니다. 200자를적용합니다. 200자를적용합니다. 200자를', // 230206 선물하기 : 삭제

      // 230206 선물하기 : 추가 Start
      // cardMsg : null,
      cardMsg : '영희야 너무 반갑다. 내가 너를 위해 200자 편지와 선물을 준비했어 새해가 되서도 너와 나의 관계가 언제나 돈독하여 200년해로 지냈으면 좋겠다. 영희야 항상 건강하고 언제나 즐겁고 밝은 영희가 되도록 하자. 낼모래 티타임 잊지 않았지? 그때 만나~ 사랑해!! 영희야 너무 반갑다. 내가 너를 위해 200자 편지와 선물을 준비했어 새해가 되서도 너와 나의 관계가 언제나 돈독하여 200년해로 지냈으면 좋겠다. 영희야 항상 건강하고 언제나 즐겁고 밝은 영희가 되도록 하자.',
      cardSelectIdx : 0,
      cardList:[
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
      // 230206 선물하기 : 추가 End

      deliveryList: [ // 택배 리스트
        {
          brand_name: 'MINE',
          product_name: '컬러 블록 니트 가디건 컬러 니트',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
          options: ['BLACK', '90', '2개'],
          sell_price: '355000',
          discount: null,
          price: null,
          link: '#n',
          notice: '인기 상품으로 배송 지연 예상 (평일 기준 5일 이상 소요)',
        },
        {
          brand_name: 'FOURM MEN’S LOUNGE',
          product_name: '[BEARBRICK] 사이키델릭 페이즐리',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
          options: ['CHARCOAL GRAY', '90', '1개'],
          sell_price: '355000',
          discount: null,
          price: null,
          link: '#n',
          notice: null,
        },
      ],
      // [퍼블수정]25.04.02 가정의달 이벤트
      showEventCase:false,
    }
  },
  created() {
  },
  mounted(){
    // [퍼블수정]25.04.02 가정의달 이벤트
    if(location.search.includes("eventCase")){
      this.showEventCase = true
    }
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
<style lang="scss">
@import '@/assets/scss/pages/order.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>