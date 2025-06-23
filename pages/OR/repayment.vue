<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/OR/guide/Structure 참고 -->
    <div class="content-wrap">
      <CommonContentsLeftMenu :title="'마이페이지'" :url="'/json/mypage_left_menu.json'" :active="'/ko/OR/orderShippingList'"></CommonContentsLeftMenu>
      <div class="my-page-r-box repay-type"><!-- 마이페이지 -->
        <div class="cmp-page-tit">
          <h2 class="tit">재결제</h2>
        </div>
        <div class="order-content-box">
          <div class="order-number-box">
            <div class="line-box">
              <p class="cmp-font">주문번호<span class="ml-8">211222P12345678</span></p>
              <p class="cmp-font fnt-14">2021.12.22 13:00</p>
            </div>
          </div>
          <!-- 포인트 사용 -->
          <div class="contents-line-box">
            <div class="cmp-sub-tit small justify-start">
              <h4 class="tit">포인트 사용</h4>
              <CommonTooltipBox :tooltip-list="tooltipList.point_use" />
            </div>
            <!-- 한섬마일리지 -->
            <div class="point-input-box" :class="{'disabled' : pointDisabled.mileage}">
              <p class="tit-cnt">
                <span class="tit">한섬마일리지</span>
                <span class="total">20,000 M</span>
              </p>
              <div class="input-cnt">
                <v-text-field 
                  type="text" value="0" outlined clearable :disabled="pointDisabled.mileage"
                  label="한선마일리지 입력" class="cmp-form-input label-hide">
                </v-text-field>
                <div class="txt">M</div>
              </div>
              <div class="btn-cnt">
                <v-btn text :disabled="pointDisabled.mileage" class="cmp-font fnt-13 button"><span class="line">적용하기</span></v-btn>
              </div>
              <!-- [퍼블수정] 22.09.30 주문조회 수정 -->
              <div class="chk-cnt">
                <v-checkbox class="cmp-form-checkbox">
                  <template #label><div class="cmp-font fnt-14">모두사용</div></template>
                </v-checkbox>
              </div>
              <!-- //[퍼블수정] 22.09.30 주문조회 수정 -->
            </div>
            <!-- //한섬마일리지 -->
            <!-- H.point -->
            <div class="point-input-box" :class="{'disabled':pointDisabled.h_point}">
              <p class="tit-cnt">
                <span class="tit">H.Point</span>
                <span class="total">1,234 P</span>
              </p>
              <div class="input-cnt">
                <v-text-field 
                  type="text" value="0" outlined clearable :disabled="pointDisabled.h_point"
                  label="H.Point 입력" class="cmp-form-input label-hide">
                </v-text-field>
                <div class="txt">P</div>
              </div>
               <div class="btn-cnt">
                <v-btn text :disabled="pointDisabled.h_point" class="cmp-font fnt-13 button"><span class="line">적용하기</span></v-btn><!-- 220913 포인트사용 : 문구변경 -->
              </div>
              <!-- 220913 포인트사용 : 추가 -->
              <div class="chk-cnt">
                <v-checkbox class="cmp-form-checkbox">
                  <template #label><div class="cmp-font fnt-14">모두사용</div></template>
                </v-checkbox>
              </div>
            </div>
            <!-- //H.point -->
            <!-- e-money -->
            <div class="point-input-box" :class="{'disabled':pointDisabled.e_money}">
              <p class="tit-cnt">
                <span class="tit">e-money</span>
                <span class="total">1,120,000 P</span>
              </p>
              <div class="input-cnt">
                <v-text-field 
                  type="text" value="0" outlined clearable :disabled="pointDisabled.e_money"
                  label="e-money 입력" class="cmp-form-input label-hide">
                </v-text-field>
                <div class="txt">P</div>
              </div>
              <div class="btn-cnt">
                <v-btn text :disabled="pointDisabled.e_money" class="cmp-font fnt-13 button"><span class="line">적용하기</span></v-btn><!-- 220913 포인트사용 : 문구변경 -->
              </div>
              <!-- 220913 포인트사용 : 추가 -->
              <div class="chk-cnt">
                <v-checkbox class="cmp-form-checkbox">
                  <template #label><div class="cmp-font fnt-14">모두사용</div></template>
                </v-checkbox>
              </div>
            </div>
            <!-- //e-money -->
          </div>
          <!-- //포인트 사용 -->
          <!-- 배송비 쿠폰 -->
          <div class="contents-line-box">
            <div class="cmp-sub-tit small justify-start">
              <h4 class="tit">배송비 쿠폰</h4>
            </div>
            <div class="cmp-sub-tit small justify-start mb-0">
              <v-checkbox label="무료배송쿠폰" class="cmp-form-checkbox mr-4"></v-checkbox><!-- [퍼블수정] 22.09.30 주문조회 수정 -->
              <p class="cmp-font fnt-16">1 <span class="cmp-font c-light-gray">/ 2 개</span></p>
              <CommonTooltipBox :tooltip-list="tooltipList.freecoupon" icon-type="info" />
            </div>
          </div>
          <!-- //배송비 쿠폰 -->

          <div class="cmp-sub-tit line mt-60">
            <h3 class="tit">결제수단</h3>
          </div>
          <!-- 결제수단 선택 -->
          <div class="pt-24">
            <div class="cmp-sub-tit small">
              <h4 class="tit">H.Point Pay 결제</h4>
            </div>
            <!-- H.Point Pay 결제 -->
            <div class="cmp-swiper-box btn-type2 payment-select-swiper">
              <Swiper 
                :options="{
                  slidesPerView: 2,
                  slidesPerGroup : 1,
                  spaceBetween: 4,
                  navigation: {
                    prevEl: '.hpay-prev-btn',
                    nextEl: '.hpay-next-btn',
                  },
                }"
                :class="{'swiper-no-swiping':hPointPayCard.length < 2}"
              >
                <SwiperSlide v-for="(item,index) in hPointPayCard" :key="index">
                  <div class="card-box">
                    <input :id="item.id" v-model="paymentSelected" type="radio" :value="item.value" name="paymentSelect" class="card-input">
                    <label :for="item.id" class="card-label">{{item.card_name}} 선택</label>
                    <div class="card-cnt">
                      <div class="cnt0">
                        <div class="logo-cnt">
                          <img :src="item.logo" :alt="item.value" class="logo">
                          <span class="name">{{item.name}}</span>
                        </div>
                        <p class="cnt-txt">{{item.number}}</p>
                      </div>
                      <div class="cnt1">
                        <p class="cnt-txt bold">H.Point Pay</p>
                        <CommonSelectBox title="할부선택">
                          <template #optionList>
                            <option value="">일시불</option>
                            <option value="">3개월</option>
                          </template>
                        </CommonSelectBox>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="card-box">
                    <button class="card-add">
                      <div class="cnt">
                        <span class="bar"></span>
                        <span class="txt"><strong>H.Point Pay</strong> 추가하기</span>
                      </div>
                    </button>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div class="swiper-button-prev hpay-prev-btn swiper-no-swiping"><i v-cmp-icon="{size:24, name:'prev'}">이전</i></div>
              <div class="swiper-button-next hpay-next-btn swiper-no-swiping"><i v-cmp-icon="{size:24, name:'next'}">다음</i></div>
            </div>
            <!-- //H.Point Pay 결제 -->

            <div class="cmp-sub-tit small mt-40">
              <h4 class="tit">일반결제</h4>
            </div>
            <!-- 일반 결제 -->
            <div class="payment-select-credit">
              <input id="creditCard" v-model="paymentSelected" type="radio" value="creditCard" name="paymentSelect" class="card-input">
              <label for="creditCard" class="card-label">신용카드 선택</label>
              <div class="card-box">
                <p class="card-tit">신용카드</p>
                <div class="card-cnt">
                  <CommonSelectBox title="카드사선택">
                    <template #optionList>
                      <option value="placeholder">카드사 선택</option>
                      <option value="">현대카드</option>
                    </template>
                  </CommonSelectBox>
                  <CommonSelectBox title="할부선택">
                    <template #optionList>
                      <option value="">일시불</option>
                      <option value="">3개월</option>
                    </template>
                  </CommonSelectBox>
                </div>
              </div>
            </div>
            <div class="payment-select-etc">
              <div v-for="(item,index) in domesticPayment" :key="index" class="card-box">
                <input 
                  :id="item.id" v-model="paymentSelected" type="radio" :value="item.value" 
                  :disabled="item.id==='hyundaicardRed'&& item.disabled"
                  name="paymentSelect" class="card-input"
                >
                <label :for="item.id" class="card-label">{{item.name}} 선택</label>
                <div class="card-cnt">
                  <div class="cnt" :class="{'disabled':item.id==='hyundaicardRed'&& item.disabled}">
                    <img :src="item.image" :alt="item.name" class="icon">
                    <p class="cnt-tit">{{item.name}}</p>
                  </div>
                  <p v-if="item.id==='hyundaicardRed'&& item.disabled" class="cnt-txt">*30만원 미만 주문시 결제불가</p>
                </div>
              </div>
            </div>
            <!-- //일반 결제 -->
            <!-- 해외 -->
            <!--
            <div class="payment-select-credit">
              <input id="creditCard" v-model="paymentSelected" type="radio" value="creditCard" name="paymentSelect" class="card-input">
              <label for="creditCard" class="card-label">CREDIT CARD 선택</label>
              <div class="card-box">
                <p class="cnt-tit">CREDIT CARD</p>
                <div class="card-cnt">
                  <CommonSelectBox title="카드사선택">
                    <template #optionList>
                      <option value="placeholder">카드사 선택</option>
                      <option value="">현대카드</option>
                    </template>
                  </CommonSelectBox>
                  <CommonSelectBox title="할부선택">
                    <template #optionList>
                      <option value="">일시불</option>
                      <option value="">3개월</option>
                    </template>
                  </CommonSelectBox>
                </div>
              </div>
            </div>
            <div class="payment-select-etc">
              <div v-for="(item,index) in overseasPayment" :key="index" class="card-box">
                <input 
                  :id="item.id" v-model="paymentSelected" type="radio" :value="item.value" 
                  :disabled="item.id==='hyundaicardRed'&& item.disabled"
                  name="paymentSelect" class="card-input"
                >
                <label :for="item.id" class="card-label">{{item.name}} 선택</label>
                <div class="card-cnt">
                  <div class="cnt" :class="{'disabled':item.id==='hyundaicardRed'&& item.disabled}">
                    <img :src="item.image" :alt="item.name" class="icon">
                    <p class="cnt-tit">{{item.name}}</p>
                  </div>
                </div>
              </div>
            </div> 
            -->
            <!-- //해외 -->
          </div>
          <p class="cmp-font fnt-14 pt-24">BO에서 입력된 결제수단 공지(요약) 글 3줄 정도 노출하고 말줄임 하지 않도록 BO에서 간략히 입력하도록 글자수 제한 요청 BO에서 간략히 입력하도록 글자수 제한 요청  BO에서 간략히 입력하도록 글자수 제한 요청</p>
          <v-checkbox label="지금 선택한 결제방법을 다음에도 사용합니다." class="cmp-form-checkbox mt-20 pt-24 mb-24"></v-checkbox>
          <!-- //결제수단 선택 -->

          <!-- 금액/주문 [퍼블수정] 22.09.30 주문조회 수정 -->
          <div class="order-price-box">
            <div class="price-sticky-box">
              <div class="price-info">
                <p class="tit">상품금액</p>
                <p class="price"><strong>910,000</strong>원</p>
              </div>
              <div class="price-info">
                <p class="tit">할인금액</p>
                <p class="price"><strong>-10,000</strong>원</p>
              </div>
              <div class="price-sub-info">
                <p class="tit">쿠폰할인</p>
                <p class="price"><strong>-10,000</strong>원</p>
              </div>
              <div class="price-info">
                <p class="tit">포인트 사용</p>
                <p class="price"><strong>-18,000</strong>원</p>
              </div>
              <div class="price-sub-info">
                <p class="tit">한섬마일리지</p>
                <p class="price"><strong>-3,000</strong>원</p>
              </div>
              <div class="price-sub-info">
                <p class="tit">H.Point </p>
                <p class="price"><strong>-5,000</strong>원</p>
              </div>
              <div class="price-sub-info">
                <p class="tit">e-money</p>
                <p class="price"><strong>-10,000</strong>원</p>
              </div>
              <div class="price-info">
                <div class="tit-box">
                  <p class="tit">배송비</p>
                  <CommonTooltipBox :tooltip-list="tooltipList.delivery" right /><!-- 택배 툴팁 -->
                  <!--<CommonTooltipBox :tooltip-list="tooltipList.quick_delivery" right />--><!-- 퀵배송 툴팁 -->
                </div>
                <p class="price"><strong>0</strong>원</p>
              </div>
              <div class="price-total-info">
                <p class="tit">최종 결제 금액</p>
                <p class="price"><strong>882,000</strong>원</p>
              </div>
              <div class="price-info">
                <div class="tit-box">
                  <p class="tit">적립예정 포인트</p>
                  <CommonTooltipBox :tooltip-list="tooltipList.point_save" right />
                </div>
              </div>
              <div class="price-sub-info">
                <p class="tit">한섬마일리지</p>
                <p class="price"><strong>8,000</strong>M</p>
              </div>
              <div class="price-sub-info">
                <p class="tit">H.Point</p>
                <p class="price"><strong>2,000</strong>P</p>
              </div>
              <p class="cmp-font fnt-14 c-red mt-24">재결제 시 신규 주문이 생성됩니다.<br/>(기존 주문은 취소 및 환불 예정)</p>
              <div class="price-btn">
                <v-btn large block color="primary" :disabled="true"><strong>882,000</strong>원 결제하기</v-btn>
              </div>
            </div>
          </div>
          <!-- // 금액/주문 [퍼블수정] 22.09.30 주문조회 수정 -->
        </div>
        <!-- 팝업버튼&배너 -->
        <div class="contents-line-box last">
          <button class="cmp-font button">카드 행사 혜택(무이자,청구,즉시할인) 안내 <i class="cmp-icon i-next cmp-icon-16"></i></button>
          <!-- 배너 -->
          <div class="mt-34">
            <Swiper 
              :options="{
                pagination: {el: '.swiper-pagination',clickable: true}
              }"
              :class="{'swiper-no-swiping':eventBanner.length < 2}"
            >
              <SwiperSlide v-for="(item,index) in eventBanner" :key="index">
                <nuxt-link :to="item.link">
                  <img :src="item.image" :alt="item.desc">
                </nuxt-link>
              </SwiperSlide>
              <div v-if="eventBanner.length > 1" slot="pagination" class="cmp-swiper-paginationBullet swiper-pagination"></div>
            </Swiper>
          </div>
          <!-- //배너 -->
        </div>
        <!-- //팝업버튼&배너 -->
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import EventBus from '~/api/common/EventBus'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  layout: 'LayoutBasics',
  data() {
    return {
      topNotice : true, // 상단공지
      giftWrappingCheck : false, // 선물포장 신청
      tooltipList: { // 툴팁 상세 정보
        freecoupon: [
          '무료 배송비 쿠폰을 사용은 만료가 임박한 쿠폰이 우선적으로 사용 됩니다.',
        ],
        shopping_bag: [ // 쇼핑백 포장 230111 툴팁문구 : 수정
          '브랜드 쇼핑백 또는 더한섬닷컴<br />전용 쇼핑백 중 1개로 랜덤 발송되며,<br />디자인을 선택하실 수 없습니다.',
          '리퀴드 퍼퓸바 상품은 쇼핑백<br />서비스 이용이 불가합니다.',
        ],
        gift: [ // 선물포장
          'THE STAR등급 고객님들께 포장 서비스를 제공합니다.',
          '다수의 상품을 주문하실 경우, 포장은 합포장 또는 단품으로 부분 포장이 될 수 있습니다.',
          '실제 포장과 이미지는 상이할 수 있습니다.',
        ],
        point_use: [ // 포인트사용
          '보유중인 한섬마일리지/H.Point/e-money 금액을 확인하시고 사용하실 금액을 입력해 주세요.',
          'H.Point 10만점 이상 사용 시 비밀번호 입력이 필요합니다.',
        ],
        delivery: [ // 배송비(택배) 230111 툴팁문구 : 수정
          '쿠폰/바우처 할인금액 및 한섬마일리지/H.Point<br />사용을 제외한 <strong>실 결제금액 기준 3만원 미만<br />결제 시 3,000원 배송비가 부과</strong>됩니다.<br />(3만원 이상 구매 시 무료배송)',
          '도서산간 지역은 배송비가 추가 될 수 있습니다.',
          '한섬마일리지, H.Point, e-money로 배송비<br />결제가 불가합니다.',
        ],
        quick_delivery: [ // 배송비(퀵배송)
          '퀵 배송비(5,000원)는 주문상품의 금액과 관계없이 별도로 청구되는 배송비입니다.',
          '퀵배송 서비스는 한섬마일리지, H.Point, e-money로 배송비 결제가 불가합니다.',
        ],
        point_save: [ // 적립예정포인트 230111 툴팁문구 : 수정
          '배송 완료 후 10일 후 적립됩니다.',
          '기존 마이너스 포인트를 보유하고 있는 고객은<br />포인트가 차감되어 적립됩니다.<br />적립 예정 포인트가 상이할 수 있습니다.',
          '통합멤버십으로 가입하시면, H.point 적립 및<br />사용이 가능합니다.',
        ],
      },
      prdList: [
        {
          brand_name: 'MINE',
          product_name: '컬러 블록 니트 가디건',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/001.jpg',
          options: ['BLACK', '90', '1개'],
          sell_price: '355000',
          discount: '20',
          price: '366000',
          notice : ['인기상품으로 전국 매장에서 수급 후 배송 예정<br>불량 등의 이유로 취소될 수 있음<br>(평일 기준 5일 이상 소요)'],
        },
        {
          brand_name: 'OREA',
          product_name: '퓨리파잉 클렌징 폼',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/002.jpg',
          options: ['Charcoal gray', '90', '1개'],
          sell_price: '355000',
          discount: null,
          price: null,
          notice : ['오에라 상품은 전용 박스로 별도배송'],
        },
        {
          brand_name: 'FOURM MEN’S LOUNGE',
          product_name: '[BEARBRICK] 사이키델릭 페이즐리',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/003.jpg',
          options: ['MULTI', 'FR', '1개'],
          sell_price: '355000',
          discount: '20',
          price: '366000',
          notice : ['예약상품은 0년 0월 0일부터 순차 발송'],
        },
      ],
      pointDisabled : { // 포인트 적립 disabled
        mileage : false,
        h_point : false,
        e_money : false,
      },
      domainDirectFieldShow: false, // [비회원]이메일 직접입력필드
      eventBanner : [ // 이벤트 배너
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/order-banner-02.png',
          desc : '현대카드 쇼핑바우처 제휴 30만원 이상 결제 시 이용가능',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/order-banner-02.png',
          desc : '현대카드 쇼핑바우처 제휴 30만원 이상 결제 시 이용가능',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/order-banner-02.png',
          desc : '현대카드 쇼핑바우처 제휴 30만원 이상 결제 시 이용가능',
          link : '#n',
        },
      ],
      /*
        logo 이미지 경로
        비씨 : /images/payment/logo-bc.png
        신한 : /images/payment/logo-shinhan.png
        국민 : /images/payment/logo-kb.png
        농협 : /images/payment/logo-nh.png
        롯데 : /images/payment/logo-lotte.png
        하나 : /images/payment/logo-hana.png
        현대카드 : /images/payment/logo-hyundaicard.png
        삼성카드 : /images/payment/logo-samsungcard.png
        마스터 : /images/payment/logo-master.png
        아멕스 : /images/payment/logo-amex.png
        유니온페이 : /images/payment/logo-unionpay.png
        전북 : /images/payment/logo-jb.png
        산업 : /images/payment/logo-kdb.png
        제주 : /images/payment/logo-jeju.png
        케이뱅크 : /images/payment/logo-kbank.png
        우체국 : /images/payment/logo-post.png
        외환 : /images/payment/logo-keb.png
        비자 : /images/payment/logo-visa.png
        글로벌JCB : /images/payment/logo-jcb.png
        다이너클럽 : /images/payment/logo-diners.png
        광주 : /images/payment/logo-kj.png
        우리 : /images/payment/logo-woori.png
        씨티 : /images/payment/logo-citi.png
        새마을금고 : /images/payment/logo-mg.png
        저축은행 : /images/payment/logo-sb.png
        토스 : /images/payment/logo-toss.png
        기업 : /images/payment/logo-ibk.png
        제일은행 : /images/payment/logo-sc.png
        대구은행 : /images/payment/logo-dgb.png
        부산은행 : /images/payment/logo-bnk.png
        경남은행 : /images/payment/logo-knbank.png
        수협 : /images/payment/logo-sh.png
        신협 : /images/payment/logo-cu.png
        카카오뱅크 : /images/payment/logo-kakaobank.png
        산림조합 : /images/payment/logo-sj.png
      */
      hPointPayCard : [ // H Point Pay 결제
        {
          id : 'bc-card',
          value : 'bc-card',
          name:'비씨카드',
          logo : '/images/payment/logo-bc.png',
          number : '4921 **** **** 2138',
        },
        {
          id : 'shinhan-card',
          value : 'shinhan-card',
          name:'신한카드',
          logo : '/images/payment/logo-shinhan.png',
          number : '4921 **** **** 2138',
        },
        {
          id : 'shinhan-bank',
          value : 'shinhan-bank',
          name:'신한은행',
          logo : '/images/payment/logo-shinhan.png',
          number : '12345***********',
        },
      ],
      domesticPayment:[ // 국내 결제
        {
          id : 'kakaopay',
          value : 'kakaopay',
          name : '카카오페이',
          image : '/images/payment/ico-kakaopay.png',
        },
        {
          id : 'smilepay',
          value : 'smilepay',
          name : '스마일페이',
          image : '/images/payment/ico-smilepay.png',
        },
        {
          id : 'payco',
          value : 'payco',
          name : '페이코',
          image : '/images/payment/ico-payco.png',
        },
        {
          id : 'hyundaicardRed',
          value : 'hyundaicardRed',
          name : '현대카드 레드 바우처',
          image : '/images/payment/ico-hyundaicard.png',
          disabled : false,
        },
        {
          id : 'accountTransfer',
          value : 'accountTransfer',
          name : '실시간 계좌이체',
          image : '/images/payment/ico-account-transfer.png',
        },
      ],
      overseasPayment:[ // 해외 결제
        {
          id : 'alipay',
          value : 'alipay',
          name : 'ALIPAY',
          image : '/images/payment/ico-alipay.png',
        },
        {
          id : 'paypal',
          value : 'paypal',
          name : 'PAYPAL',
          image : '/images/payment/ico-paypal.png',
        },
        {
          id : 'wechatpay',
          value : 'wechatpay',
          name : 'WECHATPAY',
          image : '/images/payment/ico-wechatpay.png',
        },
      ],
      paymentSelected : 'bc-card', //
      oeraAgreeCheck : false, // 오에라 신청
      oeraCancelAgreeCheck : false, // 오에라 취소
    }
  },
  created() {
  },
  methods: {
    dominFieldSet(val) { // 이메일 직접 입력필드
      if (val === 'direct') this.domainDirectFieldShow = true
      else this.domainDirectFieldShow = false
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/pages/order.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>
