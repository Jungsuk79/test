<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/OR/guide/Structure 참고 -->
    <div class="content-wrap">
      <CommonContentsLeftMenu :title="'마이페이지'" :url="'/json/mypage_left_menu.json'" :active="'/ko/OR/giftBoxList'"></CommonContentsLeftMenu>
      <div class="my-page-r-box content-myGiftbox"><!-- 마이페이지 -->
        <div class="cmp-page-tit">
          <h2 class="tit">보낸 선물함</h2>
        </div>

        <div class="order-number-box">
          <div class="line-box">
            <p class="cmp-font">주문번호<span class="ml-10">211222P12345678</span></p>
            <p class="cmp-font fnt-14">2021.12.22 13:00</p>
          </div>
        </div>

        <div class="cmp-sub-tit small fix-flex mb-0 mt-24"><!-- [퍼블수정] 22.09.30 주문조회 수정 -->
          <h3 class="tit">김한섬님에게 보낸 선물</h3>
          <div class="cmp-labels">
            <span class="label c-blue">선물 수락</span>
          </div>
        </div>

        <!-- 카드 내용 -->
        <div class="gift-card-info">
        <v-expansion-panels accordion class="cmp-acc acc-type2 last-bt-none">
          <v-expansion-panel>
            <v-expansion-panel-header>
              <div class="info-upper">
                <div class="card-img">
                  <!-- 230206 선물하기 : v-img > lottie 변경 -->
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
                  <!-- // 230206 선물하기 : v-img > lottie 변경 -->
                </div>
                <div class="card-text">
                  <p class="tit">받는 사람</p>
                  <p>김한섬<span class="pl-20">010-****-5678</span></p>
                </div>
              </div>
              <template #actions>
                <!-- 230206 선물하기 : 마크업 변경 -->
                <div v-if="cardMsg" class="msg-view-btn">
                  <span class="txt0">메시지 보기</span>
                  <span class="txt1">메시지 접기</span>
                </div>
                <!-- // 230206 선물하기 : 마크업 변경 -->
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content v-if="cardMsg"><!-- 230206 선물하기 : v-if 추가 -->
              <!-- <p class="cmp-font fnt-18 pb-8">TO. 김한섬</p> --><!-- 230206 선물하기 : 삭제 -->
              <p class="msg">{{cardMsg}}</p><!-- 230206 선물하기 : 수정 -->
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        </div>
        <!-- //카드 내용 -->

        <!-- 상품 정보 [퍼블수정] 22.09.30 주문조회 수정 -->
        <div class="product-row-table">
          <table>
            <caption>상품리스트</caption>
            <colgroup>
              <col style="width:auto"/>
              <col style="width:248px;"/>
              <col style="width:128px;"/>
              <col style="width:128px;"/> 
            </colgroup>
            <thead>
              <tr>
                <th>상품정보</th>
                <th>상품금액</th>
                <th>주문상태</th>
                <th>확인&#47;신청</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, index) in prdDetailData">
                <tr :key="index" :class="{'bottom-none':item.notice!==null || item.reason!==null || item.gift_list}">
                  <td class="pw-0 ">
                    <nuxt-link :to="item.link" class="product-row-unitInfo or-prd-type"><!-- [퍼블수정]23.01.19 상품이미지 : or-prd-type 클래스 추가 -->
                      <div class="product-image" :class="[{'sold-out':item.sold_out},{'gift-type': item.gift_type}]">
                        <v-img :src="item.image" :alt="item.product_name" />
                        <div v-if="item.sold_out" class="sold-out-txt">SOLD OUT</div>
                        <div v-if="item.gift_type" class="cmp-labels">
                          <span class="label black c-white">증정품</span>
                        </div>
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
                      <div class="product-sellprice"><strong>{{item.sell_price | number}}</strong> 원</div>
                      <div v-if="item.price || item.discount" class="product-price-cnt">
                        <del class="product-price-origin">{{item.price | number}} 원</del>
                        <!-- eslint-disable -->
                        <span class="product-discount">{{item.discount}}<em>%</em></span>
                        <!-- eslint-disable -->
                      </div>
                    </nuxt-link>
                  </td>
                  <td>
                    <div v-if="index == 0" class="cmp-font c-blue">주문완료</div><!-- 주문완료 CASE -->
                    <div v-if="index == 1" class="cmp-font c-blue">배송중</div><!-- 배송중 CASE -->
                  </td>
                  <td class="pw-16">
                    <div v-if="index == 0" class="product-row-unitBtn"><!-- 주문완료 CASE -->
                      <v-btn outlined small color="normal">주문 취소</v-btn>
                      <v-btn outlined small color="normal">옵션 변경</v-btn>
                    </div>
                    <div v-if="index == 1" class="product-row-unitBtn"><!-- 배송중 CASE -->
                      <v-btn outlined small color="normal">배송 조회</v-btn>
                      <v-btn outlined small color="normal">배송 완료</v-btn>
                    </div>
                  </td>
                </tr>
                <tr v-if="item.notice">
                  <td colspan="4" class="td-l pw-0" :class="{'pb-0':item.gift_list}">
                    <div class="product-row-unitNotice">
                      <ul class="product-notice">
                        <!-- eslint-disable -->
                        <li v-for="(item2, index2) in item.notice" v-html="item2"></li>
                        <!-- eslint-disable -->
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr v-if="item.gift_list" v-for="(item3, index3) in item.gift_list" class="gift-type"><!-- [퍼블 수정] 22.09.27 -->
                  <td class="pw-0 ">
                    <nuxt-link :to="item3.link" class="product-row-unitInfo">
                      <div class="product-image" :class="[{'sold-out':item3.sold_out},{'gift-type': item3.gift_type}]">
                        <v-img :src="item3.image" :alt="item3.product_name" />
                        <div v-if="item3.sold_out" class="sold-out-txt">SOLD OUT</div>
                        <div v-if="item3.gift_type" class="cmp-labels">
                          <span class="label black c-white">증정품</span>
                        </div>
                      </div>
                      <div class="product-info-cnt">
                        <!-- [퍼블수정]22.11.07 -->
                        <div :class="[{'cmp-font fnt-16':item3.gift_type},'product-brand']">{{item3.brand_name}}</div>
                        <p v-for="(item4, index4) in item3.product_note" v-html="item4" class="cmp-font fnt-14 mt-6"></p>
                      </div>
                    </nuxt-link>
                  </td>
                  <td></td>
                  <td>
                    <div class="cmp-font c-blue">상품 내 배송</div><!-- 상품 내 배송 CASE -->
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <ul class="cmp-info list-type1 mt-14">
          <li class="cmp-font fnt-14">친환경 쇼핑백 무료 서비스 신청완료</li>
          <li class="cmp-font fnt-14">
            선물포장 신청완료
            <div class="order-msg-cnt">
              <div class="name">김한섬님</div>
              <div class="cnt">일 년 중 가장 특별한 오늘, 생일을 축하드립니다. 소중한 분들과 행복한 시간을 보내세요. 일 년 중 가장 특별한 생일을 축하드립니다. 일 년 중 가장 특별한 생일을 축하드립니다.</div>
            </div>
          </li>
        </ul>
        <!-- // 상품 정보 [퍼블수정] 22.09.30 주문조회 수정 -->

        <!-- 상품 상세 증정&사은품 table calse -->
        <div class="cmp-sub-tit col mt-60">
          <h3 class="tit">사은품</h3><!-- [퍼블수정] 22.09.30 주문조회 수정 -->
        </div>
        <div class="product-row-table">
          <table>
            <caption>상품리스트</caption>
            <colgroup>
              <col style="width:auto;"/>
              <col style="width:128px;"/>
              <col style="width:128px;"/> 
            </colgroup>
            <thead>
              <tr>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, index) in giftsData">
                <tr :key="index">
                  <td class="pw-24 pl-0"><!-- [퍼블수정] 22.09.30 주문조회 수정 -->
                    <div class="product-row-unitInfo gifts-type">
                      <div class="product-image">
                        <div v-if="item.type==='mileage'" class="mileage-txt">
                          <div class="txt"><strong>{{item.mileage | number}}</strong>M</div>
                        </div>
                        <v-img v-else :src="item.image" :alt="item.type==='event'?'사은품 이미지':'증정품 이미지'"></v-img>
                      </div>
                      <div class="product-info-cnt">
                        <div v-if="item.type==='mileage'" class="product-brand">마일리지 적립</div>
                        <div v-else class="product-brand">{{item.name}}</div>
                        <div v-if="item.type==='mileage'" class="product-name">{{item.accrual_date + ' 이후 적립 예정'}}</div>
                        <div v-else class="product-name">{{item.desc}}</div>
                      </div>
                    </div>
                  </td>
                  <td class="pw-0">
                    <div v-if="index == 0">
                      <span class="cmp-font c-blue">상품 내 배송</span>
                    </div>
                  </td>
                  <td class="pw-16">
                    <div v-if="index == 0" class="product-row-unitBtn">
                      <v-btn outlined small color="normal">배송 조회</v-btn>
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <!-- //상품 상세 증정&사은품 table calse -->

        <!-- [퍼블수정] 22.09.30 주문조회 수정 -->
        <div class="cmp-sub-tit col mt-60">
          <h3 class="tit">최초 결제정보</h3>
        </div>
        <div class="refund-box">
          <ul class="cust card-info-box">
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
              <p class="cmp-font fnt-20">892,000<span class="cmp-font fnt-14 ml-2">원</span></p>
              <p class="card-info"><b>신용카드</b> / 삼성카드<span class="ml-6">일시불</span></p>
            </li>
          </ul>
          <div class="cmp-info info-type2">
            <span class="tit">할인혜택</span>
            <dl>
              <dt>한섬VVIP할인</dt>
              <dd>-50,000<span>원</span></dd>
              <dt>쿠폰할인</dt>
              <dd>-5,000<span>원</span></dd>
              <dt>한섬마일리지</dt>
              <dd>-3,000<span>원</span></dd>
              <dt>H.Point</dt>
              <dd>-5,000<span>원</span></dd>
              <dt>e-money</dt>
              <dd>-3,000<span>원</span></dd>
            </dl>
          </div>
        </div>
        <!-- //[퍼블수정] 22.09.30 주문조회 수정 -->

        <!-- 적립 포인트 [퍼블수정] 22.09.30 주문조회 수정 -->
        <div class="cmp-sub-tit col line mt-60">
          <h3 class="tit">적립 포인트</h3>
        </div>
        <div class="return-info no-tit no-bt">
          <div class="box">
            <ul class="line-list"><!-- [퍼블수정]23.02.13 오에라 마일리지 삭제 수정 -->
              <li class="cmp-font">한섬마일리지<span class="bold ml-12">84,250</span><span class="ml-2">M</span></li>
              <li class="cmp-font">H.Point<span class="bold ml-12">1,685</span><span class="ml-2">P</span></li>
            </ul>
            <!-- [퍼블수정]22.11.07 -->
            <!-- [퍼블수정]23.02.13 오에라 마일리지 삭제 -->
          </div>
        </div>
        <!-- // 적립 포인트 [퍼블수정] 22.09.30 주문조회 수정 -->

        <!-- 환불 안내 -->
        <v-expansion-panels accordion class="cmp-acc acc-type2">
          <v-expansion-panel v-for="(item, index) in cmpAccList" :key="index">
            <v-expansion-panel-header class="cmp-font fnt-16">{{ item.text }}<!--[퍼블수정] 22.09.30 주문조회 수정 -->
              <template #actions>
                <i class="cmp-icon-etc cmp-icon-down">열기/닫기</i>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div v-for="(contItem,contIndex) in item.cont" :key="contIndex">
                <p v-if="contItem.tit" class="cmp-font" :class="{'mt-12':  contIndex == 1}">{{contItem.tit}}</p>
                <ul :class="[contItem.listType ? '' : 'cmp-dotList']">
                  <li v-for="(txtItem,txtIndex) in contItem.txt" :key="txtIndex" v-html="newLine(txtItem)" class="cmp-font fnt-14 pl-10"></li><!-- [퍼블수정]22.11.29 들여쓰기 수정 -->
                </ul>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- //환불 안내 -->
      </div>
      <!-- 팝업 -->
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
    // Swiper,
    // SwiperSlide,
    Lottie // 230206 선물하기 : 추가
  },
  layout: 'LayoutBasics',
  data() {
    return {
      /* user_name: '김한섬',
      applyNext : true,
      applyPreocess : false,
      applyComplete : false,
      drawer: null,
      MarketTicketModel : [{open : false},{open : false}],    
      textareaModel : '정신없이 달려와보니 어느덧 12월이네요. 빠르게 흐른 시간 만큼 올 한해도 정말 수고 많으셨습니다. 항상 몸조심 하시고, 2022년 건강하고 행복하게 시작하시길 바라요! 소중한 분들이 더욱 생각나는 하루입니다. 한 해를 돌아보니 더한섬님께 늘 감사한 마음뿐입니다. 임인년에도 가족 모두 건강하시고 만사형통하시길 바라며, 새해에는 뜻하는 바 모두 이루시길', */

      // 230206 선물하기 : 추가 Start
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

      prdDetailData: [
        // 상품 상세 데이터 [퍼블수정] 22.09.30 주문조회 수정 결제정보
        {
          brand_name: 'FOURM STUDIO',
          product_name: '크리스탈 니트 가디건',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
          options: ['KAHKI', '90', '1개'],
          sell_price: '29000',
          link: '#n',
          gift: true,
          notice: null,
          reason: null,
          sold_out: false,
          zzim : false,
        },
        {
          brand_name: 'orea',
          product_name: '퓨리파잉 클렌징 폼',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img2.png',
          options: ['MULTI', 'FR', '1개'],
          sell_price: '355000',
          discount: null,
          price: null,
          link: '#n',
          notice: ['인기 상품으로 배송 지연 예상 (평일 기준 5일 이상 소요)'],
          reason: null,
          sold_out: false,
          zzim : false,
          gift_list: [    
            {
              brand_name: '트위스트 펄 스카프 링',
              product_note: ['래트에서 150만원 이상 구매 시,<br/>트위스트 펄 스카프 링을 드립니다.'],
              image: 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-6.png',
              options: ['KAHKI', '90', '1개'],
              gift_type: true,
              sell_price: '29000',
              link: '#n',
              gift: true,
              notice: ['일 년 중 가장 특별한 오늘, 생일을 축하드립니다. 소중한 분들과 행복한 시간을 보내세요. 일 년 중 가장 특별한 생일을 축하드립니다. 일 년 중 가장 특별한 생일을 축하드립니다.'],
              sold_out: false,
              zzim : false,
            }
          ]
        },
      ],
      // tabs: 0,
      giftsData : [ // 증정품,사은품
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-5.png',
          name : '톰그레이하운드 X 콤팩트레코드바 미니 에코백',
          date : '05월 13일 ~ 소진 시 까지',
          desc : '정상 30만원 이상 구매 고객님께 구매 사은품으로 톰그레이하운드 X 콤팩트레 미니 에코백을 드립니다.',
        },
        {
          type : 'mileage',
          mileage : 100000,
          accrual_date: '7월 30일',
          date : '6월 14일 ~ 6월 30일까지',
          desc : '폼더스토어, 폼맨즈라운지 IPANEMA 상품 구매 고객님께 100,000 마일리지 적립해 드립니다.',
        },
      ],
      cmpAccList: [
        {
          text: '환불 안내',
          cont: [
            {
              tit : null,
              txt : [
              '쿠폰 적용된 상품의 취소/반품 시, 상품금액에 따라 쿠폰 할인된 금액을 차감 후 환불됩니다.',
              '쿠폰 유효기간이 만료된 쿠폰은 복원이 불가합니다.',
              '쿠폰 적용된 상품 취소/반품 시, 주문금액 보다 적은 금액이 환불될 수 있습니다.',
              '특정 구매금액 이상일때 적용되는 쿠폰의 경우 환불로 인해 구매금액이 감소할 때 쿠폰 적용이 취소 될 수 있습니다.',
              '반품 시 환불예상금액에서 반품배송비가 차감될 수 있습니다.',
              '반품 배송비는 한섬마일리지 > e-money > 주 결제수단(신용카드 등) 순으로 차감됩니다.', // [퍼블수정] 22.09.30 주문조회 수정
              '반품 배송비 결제를 [환불금에서 차감]으로 선택하신 경우는 환불 예상금액에서 반품 배송비가 차감됩니다.', // [퍼블수정] 22.09.30 주문조회 수정
              '환불 시 결제수단별 환불 순서는 다음과 같습니다.',
              ],
              listType : false,
            },
            {
              tit : null,
              txt : [
                '1. 결제 수단 환불 ',
                '2. 한섬 마일리지 환급',
                '3. e-money 환급',
                '4. H.Point 환급',
              ],
              listType : true,
            }
          ],
        }
      ],
    }
  },
  created() {
  },
  methods: {
    /* openMarketTicket(idx) {
      const me = this
      me.MarketTicketModel[idx].open = true
    },
    closeMarketTicket(idx) {
      const me = this
      me.MarketTicketModel[idx].open = false
    }, */
    newLine(str) {
      return String(str).replace(/(?:\r\n|\r|\n)/g, '</span>','</br>')
    },

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
@import '@/assets/scss/pages/order.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>