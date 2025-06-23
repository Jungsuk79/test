<template>
  <DialogBasic class="popup-HPointPay btmfull-ver" header-title="H.Point Pay" :width="540" @hide="closeDialog"><!-- 220916 CTA고정 : btmfull-ver 클래스 추가 -->
    <template #header>
      <h1 class="tit">H.Point Pay</h1>

      <!-- S : [231113] 고객 알림노출 -->
      <!-- 상단 공지 -->
      <!-- 한줄 일때 -->
      <NotiBox :notiTextData="'테스트 공지 안내'"/>
      <!-- 두줄이상 일때 -->
      <NotiBox :notiTextData="'테스트 공지 안내 테스트 공지 안내 테스트 공지 안내 테스트 공지 안내 테스트 공지 안내'" />
      <!-- // 상단 공지 -->
      <!-- E : [231113] 고객 알림노출 -->
    </template>
    <template #body>
      <!-- 221116 로딩 : 추가 -->
      <div v-if="!loadingComplete" class="popup-priceApplyLoading">
        <div class="loading-box">loading</div>
        <p class="txt0">최대할인 혜택 계산 중</p>
        <p v-if="hPointPayMemeber" class="txt1">최대할인 혜택을 H.Point Pay에서<br>자동 적용하여 편리한 결제가 가능합니다.</p>
        <p v-else class="txt1">최대할인 혜택을 자동 적용하여<br>주문/결제시 최대할인 혜택을 드립니다.</p>
      </div>
      <!-- // 221116 로딩 : 추가 -->

      <template v-if="loadingComplete"><!-- 221116 로딩 : h point pay 컨텐츠 감싸는 div 추가 -->
        <div><!-- 221201 HPointPay : 상품내역팝업 제외 컨텐츠 감싸는 div 추가 -->
          <!-- 상품정보 -->
          <!-- [퍼블수정]23.08.22 -->
          <v-layout justify-space-between class="cmp-sub-tit small line">
            <h3 class="tit">상품정보</h3>
            <nuxt-link class="cmp-font fnt-14 button" to="#n">주문서 가기<i class="cmp-icon cmp-icon-12 i-next ml-2"></i></nuxt-link>
          </v-layout>
          <!-- [퍼블수정]23.08.22 -->
          <div class="contents-line-box">
            <!-- 221201 HPointPay : 클래스 추가 (text-cut-box, cut, fix) -->
            <p class="cmp-font fnt-18 mb-20 text-cut-box">
              <span class="cut">orea 퓨리파잉 클렌징 폼 </span>
              <span v-if="testType===1" class="fix">외 6건</span>
            </p>
            <!-- //221201 HPointPay : 클래스 추가 -->
            <v-layout row align-center justify-space-between>
              <!-- 221201 HPointPay : 마크업 변경 -->
              <p v-if="testType===0" class="cmp-fnt font-space"><!-- 1건 일때 -->
                <span>BURGUNDY</span>
                <span>90</span>
                <span>1개</span>
              </p>
              <button v-if="testType===1" class="cmp-font button" @click="openCheckProductDetails"><!-- 다건 일때 -->
                <span class="line bold">상품 내역 확인</span>
              </button>
              <p class="cmp-fnt"><strong class="bold mr-2">663,000</strong>원</p>
              <!-- // 221201 HPointPay : 마크업 변경 -->
            </v-layout>

            <!-- 230103 증정품 : 추가 -->
            <div v-if="testType===0" class="gifts-cnt">
              <p class="txt0">
                <span class="tag">증정품</span>
                <span class="name">증정품명 길게 들어갑니다 증정품명 길게 들어갑니다 증정품명 길게 들어갑니다</span>
              </p>
              <p class="txt1">외 2개</p><!-- 증정품 여러개 일때 노출 -->
            </div>
            <!-- // 230103 증정품 : 추가 -->
          </div>
          <!-- //상품정보 -->

          <!-- [추가]23.02.08  -->
          <v-layout row align-center justify-start class="mt-10">
            <!-- [240328]_쇼핑백 추가 문구 변경 -->
            <v-checkbox label="친환경 쇼핑백을 추가합니다. (주문 건당 1개)" class="cmp-form-checkbox"></v-checkbox>
            <CommonTooltipBox :tooltip-list="tooltipList.shopping_bag">
              <template #before>
                <v-img src="/images/order/shopping-bag-img.png" alt="쇼핑백 이미지" width="60" class="mr-20"/>
              </template>
            </CommonTooltipBox>
          </v-layout>

          <v-layout row align-center justify-start class="mt-12">
            <!-- 230712_선물포장 서비스 개선 -->
            <v-checkbox label="선물포장 신청하기 (THE STAR 전용)" class="cmp-form-checkbox"></v-checkbox>  
            <CommonTooltipBox :tooltip-list="tooltipList.gift">
              <template #before>
                <v-img src="/images/order/order-packing-img.png" alt="선물포장 이미지" width="64" class="mr-16 mt-4"/>
              </template>
            </CommonTooltipBox>
          </v-layout>
          <div>
            <!-- 주문서 상품 갯수에 따른 노출 메세지 -->
            <p v-if="true" class="v-input--info pl-26 mt-9">선택 시 주문서로 이동합니다.</p>
            <p v-else class="v-input--info color-red pl-26 mt-9">선물포장 서비스는 2개 이하의 상품 주문 건에 한해 이용이 가능합니다.</p>
          </div>

          <!-- 배송정보 -->
          <div class="cmp-sub-tit small line mt-40">
            <h3 class="tit">배송정보</h3>
            <button class="cmp-font fnt-14 button">
              <!--입력 --><!-- 입력 전 버튼명 -->
              변경 <!-- 입력 후 버튼명 -->
              <i v-cmp-icon="{size:12,name:'next'}"></i>
            </button>
          </div>
          <div class="contents-line-box">
            <!-- 입력 전 -->
            <!--<p class="cmp-font c-gray">배송지 정보를 입력해 주세요.</p>-->
            <!-- //입력 전 -->
            <!-- 입력 후 -->
            <!-- 221201 HPointPay : 주소 마크업 변경 (v-layout > div.text-cut-box / fix, cut 클래스 추가) -->
            <div class="text-cut-box">
              <p class="cmp-label-line c-blue mr-10 fix">기본배송지</p>
              <p class="cmp-font cut">홍길동 서울특별시 강동구 성내로 448-7 강림빌딩 2층</p>
              <!--<p class="cmp-font c-gray">택배사를 선택해 주세요.</p>--><!-- 221104 주문서 : 택배사 선택 문구 추가 -->
            </div>
            <!--개발서버 소스 가져와 현행화(택배사관련) -->
            <template>
              <span v-if="false" class="">택배사를 선택해 주세요.</span>
              <span>
                  <template>
                    CJ대한통운<template>으</template>로 배송됩니다.
                  </template>
                </span>
            </template>
            <!-- // 221201 HPointPay : 주소 마크업 변경 -->
            <!-- //입력 후 -->
          </div>
          <!-- //배송정보 -->
          <!--221201 HPointPay : 할인정보 위치변경 -->
          <!-- [퍼블수정]23.08.22 -->
          <div class="cmp-sub-tit small line mt-40">
            <h3 class="tit">할인정보</h3>
          </div>
          <v-layout row align-center justify-space-between class="contents-line-box pd20">
            <div>
              <v-layout row align-center justify-start class="mb-10">
                <p class="cmp-font">쿠폰 및 혜택</p>
                <CommonTooltipBox icon-type="info" :tooltip-list="['한섬VVIP 할인 -20,000원','중복 쿠폰 -29,000원','배송비 쿠폰 -3,000원']" />
              </v-layout>
              <v-checkbox v-model="checkboxModel1" label="최대 혜택 적용" class="cmp-form-checkbox"></v-checkbox>
            </div>
            <v-layout wrap column align-end>
              <button class="cmp-font fnt-14 button mb-10">변경<i v-cmp-icon="{size:12,name:'next'}" class="ml-2"></i></button>
              <p class="cmp-font"><strong class="bold mr-2">-355,000</strong>원</p>
            </v-layout>
          </v-layout>
          <v-layout row align-center justify-space-between class="contents-line-box pd20">
            <div>
              <v-layout row align-center justify-start class="mb-10">
                <p class="cmp-font">포인트 사용</p>
                <CommonTooltipBox icon-type="info" :tooltip-list="['한섬마일리지  20,000M','H.Point 1,234P','e-money 1,120,000P']" />
              </v-layout>
              <v-checkbox v-model="checkboxModel2" label="최대 혜택 적용" class="cmp-form-checkbox"></v-checkbox>
            </div>
            <v-layout wrap column align-end>
              <button class="cmp-font fnt-14 button mb-10">변경<i v-cmp-icon="{size:12,name:'next'}" class="ml-2"></i></button>
              <p class="cmp-font"><strong class="bold mr-2">-50,000</strong>원</p>
            </v-layout>
          </v-layout>
          <!-- //[퍼블수정]23.08.22 -->
          <!-- //221201 HPointPay : 할인정보 위치변경 -->

          <!-- [퍼블수정]23.07.18 더플러스 가입 베너 추가 -->
          <div class="contents-line-box pb-0 mt-16 bt-line-0">
            <!--  더플러스 배너 - 버튼 -->
            <div class="theplus-banner">
              <button @click="openonlymobile" class="banner-info">
                <i class="cmp-icon-etc cmp-icon-32 i-theplus-color"></i>
                <div class="banner-text">
                  <p><b>더플러스⁺</b> 가입하고 <b>지금 바로 사용 가능한 쿠폰을</b> 받아보세요!</p>
                </div>
                <i class="cmp-icon cmp-icon-16 i-next">가입하러 가기</i>
              </button>
            </div>
            <!--  // 더플러스 배너 - 버튼 -->
          </div>
          <div class="contents-line-box pb-0 mt-16 bt-line-0">
            <!--  더플러스 배너 - 아코디언 -->
            <div class="theplus-banner">
              <v-expansion-panels accordion class="cmp-acc">
                <v-expansion-panel>
                  <v-expansion-panel-header
                    >
                    <div class="banner-info">
                      <i class="cmp-icon-etc cmp-icon-32 i-theplus-color"></i>
                      <div class="banner-text">
                        <p><b>최대 1,234,000원</b>에 구매하세요!</p>
                      </div>
                    </div>
                    <template #actions>
                      <i
                        v-cmp-icon="{ size: 16, name: 'down' }"
                        class="arrow-toggle"
                        >열기/닫기</i
                      >
                    </template>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div class="acc-banner-info">
                      <ul class="cmp-list list-dotType">
                        <li>
                          <p><span>[10%] 선호 브랜드 할인권</span> <span><b>-12,000</b>원</span></p>
                        </li>
                        <li>
                          <p><span>[5만원] 가입 감사 바우처</span> <span><b>-50,000</b>원</span></p>
                        </li>
                      </ul>
                      <button @click="openonlymobile" class="join-btn">
                        <span><b>THE PLUS⁺</b> 가입하기</span>
                        <i class="cmp-icon-etc cmp-icon-18 i-theplus-join"></i>
                      </button>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
            <!--  // 더플러스 배너 - 아코디언 -->
          </div>
          <!-- //[퍼블수정]23.07.18 더플러스 가입 베너 추가 -->
          <!-- 결제수단 -->
          <div class="cmp-sub-tit small line mt-40">
            <h3 class="tit">결제수단</h3>
            <!-- [퍼블수정]23.08.22 띄어쓰기 삭제 -->
            <button class="cmp-font fnt-14 button">변경<i v-cmp-icon="{size:12,name:'next'}" class="ml-2"></i></button>
          </div>
          <div class="contents-line-box">
            <!-- H.Point Pay 결제 -->
            <div class="cmp-swiper-box btn-type2 payment-select-swiper">
              <Swiper 
                :options="{
                  slidesPerView: 1,
                  slidesPerGroup : 1,
                  navigation: {
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
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
                <!-- [퍼블수정]23.08.22 추가수정 -->
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
                <!-- //[퍼블수정]23.08.22 추가수정 -->
              </Swiper>
              <div class="swiper-button-prev swiper-no-swiping"><i v-cmp-icon="{size:24, name:'prev'}">이전</i></div>
              <div class="swiper-button-next swiper-no-swiping"><i v-cmp-icon="{size:24, name:'next'}">다음</i></div>
            </div>
            <!-- //H.Point Pay 결제 -->
            <p class="cmp-font fnt-14 mt-24">BO에서 입력된 결제수단 공지(요약) 글 3줄 정도 노출하고 말줄임 하지 않도록 BO에서 간략히 입력하도록 글자수 제한 요청 BO에서 간략히 입력하도록 글자수 제한 요청</p>
          </div>
          <!-- //결제수단 -->
          <!-- 동의 -->
          <div class="contents-line-box">
            <!-- [퍼블수정]23.02.13 오에라 마일리지 삭제 -->
            <!-- 개인정보제3자제공 동의(220920 개인정보 : 추가) -->
            <div class="agree-cnt">
              <v-checkbox label="개인정보 제3자 제공 동의" class="cmp-form-checkbox" />
              <v-btn text class="cmp-font fnt-13 button"><span class="line">안내보기</span></v-btn>
            </div>
            <p class="cmp-checkbox-desc">OUR LEGACY 정보 공유 및 마케팅 활용을 위한 개인정보 제공에 동의합니다.</p>
            <!-- //개인정보제3자제공 동의 -->
            <!-- 구매동의 -->
            <v-checkbox class="cmp-form-checkbox">
              <!-- 220920 개인정보 : label 이동/필수항목표시 추가 -->
              <template #label><div>구매 동의<i class="required"></i></div></template>
            </v-checkbox>
            <p class="cmp-checkbox-desc">주문할 상품의 상품명, 가격, 배송정보 등을 확인하였으며, 구매 진행에 동의합니다.<br>(전자상거래법 제 8조 2항)</p><!-- 220920 개인정보 : 클래스 변경 -->
            <!-- //구매동의 -->
          </div>
          <!-- //동의 -->
        </div>
        <!-- 221201 HPointPay : 상품 내역 확인 팝업 추가 -->
        <v-dialog v-model="checkProductDetails">
          <DialogBasic class="popup-basic popup-checkProductDetails" header-title="상품 내역 확인" :width="408" @hide="closeCheckProductDetails">
            <template #body>
              <div class="inner">
                <ul class="prd-list">
                  <li v-for="item, index in productInfo" :key="index">
                    <div class="name">{{item.prd_name}}</div>
                    <div class="options">
                      <span v-for="item2,index2 in item.options" :key="index2">{{item2}}</span>
                    </div>
                    <!-- 230103 증정품 : 추가 -->
                    <div v-if="item.gifts" class="gifts">[{{item.gifts.tag}}] {{item.gifts.name}}</div>
                    <!-- //230103 증정품 : 추가 -->
                  </li>
                </ul>
              </div>
            </template>
          </DialogBasic>
        </v-dialog>
        <!-- // 221201 HPointPay : 상품 내역 확인 팝업 추가 -->
        <!-- [퍼블수정]23.07.18 더플러스 가입 베너 추가 -->
        <v-dialog v-model="onlymobile">
          <DialogBasic class="popup-basic popup-onlymobile" header-title="더플러스⁺ 가입은 모바일에서만 가능합니다." :width="408" @hide="closeonlymobile">
            <template #body>
              <div class="inner">
                <p>더한섬닷컴 모바일 WEB/APP > 마이페이지 ><br/>THE서비스 중 더플러스⁺를 선택하여<br/>가입하실 수 있습니다.</p>
              </div>
              <div class="popup-btn-box">
                <v-btn @click="onlymobile = false" large color="primary">확인</v-btn>
              </div>
            </template>
          </DialogBasic>
        </v-dialog>
        <!-- //[퍼블수정]23.07.18 더플러스 가입 베너 추가 -->
      </template>

    </template>
    <template #footer>
      <!-- 220916 CTA고정 : 배송비 포함 케이스 추가 -->
      <v-btn v-if="loadingComplete" large block color="primary" :disabled="false"><!-- 221116 로딩 : v-if 추가 -->
        <strong>663,000</strong>원 결제하기<em class="btn-txt"><!-- (배송비 포함) --></em><!-- 221201 HPointPay : 배송비 포함 위치변경, 괄호 추가 -->
      </v-btn>
    </template>
  </DialogBasic>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'
import NotiBox from '~/components/order/notiBox'

export default {
  components: {
    Swiper,
    SwiperSlide,
    DialogBasic,
    NotiBox
  },
  props: {
    testType : { // 퍼블 화면 확인 용
      type : Number,
      default : 0,
    },
  },
  data: () => ({
    checkboxModel1:true,
    checkboxModel2:true,
    // [퍼블수정]23.07.18 더플러스 가입 베너 추가
    onlymobile : false,
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
    tooltipList: {
      // 툴팁 상세 정보
      shopping_bag: [
          '브랜드 쇼핑백 또는 더한섬닷컴<br />전용 쇼핑백 중 1개로 랜덤 발송되며,<br />디자인을 선택하실 수 없습니다.',
          '리퀴드 퍼퓸바 상품은 쇼핑백<br />서비스 이용이 불가합니다.',
      ],
      gift: [ // 선물포장 [퍼블수정]23.02.21 문구/이미지수정
          'THE STAR 등급 고객님들께 포장 서비스를 제공합니다.',
          // '2개 이하의 상품 주문 건에 한해 프리미엄 포장이 가능하며, <b>3개 이상의 상품을 함께 주문하신 경우에는 프리미엄 포장에서 제외</b> 됩니다. (일반 박스 배송)',
          // '주문 상품은 크기에 맞게 맞춤 포장되며, 2개의 상품을 함께 주문하실 경우 포장은 합포장 혹은 단품으로 부분 포장이 될 수 있습니다.',
          // '포장 박스에 담기지 않거나 부적합한 크기의 제품은 일반 박스로 배송될 수 있습니다. (포장 불가 시, 개별 안내 예정)',
          // '함께 주문해도 차후 별도 발송되는 배송 건 (ex. 예약/배송 지연 상품 등)은 프리미엄 포장에서 제외됩니다. (최초 발송 건만 프리미엄 포장 제공)',
          // '본 서비스는 당사의 사정에 따라 사전 고지 없이 변경 및 종료될 수도 있습니다.',
      ],
    },
    paymentSelected : 'bc-card',
    loadingComplete : false, // 221116 로딩 : 추가
    hPointPayMemeber : true, // 221116 로딩 : 추가
    checkProductDetails : false, // 221201 HPointPay : 추가
    productInfo : [ // 221201 HPointPay : 추가
      // 230103 증정품 : gifts 항목 추가
      {
        prd_name : '상품명',
        options : ['BURGUNDY','90','1개'],
        gifts : {
          tag : '증정품',
          name : '증정품명',
        }
      },
      {
        prd_name : 'orea 퓨리파잉 클렌징 폼',
        options : ['BURGUNDY','90','1개']
      },
      {
        prd_name : '상품명 1줄 처리 길어길 경우 말줄임 상품명 1줄 처리 길어길 경우 말줄임',
        options : ['BURGUNDY','90','1개']
      },
    ]
  }),
  watch : {
    checkProductDetails(){ // 221201 HPointPay : 추가
      const me = this
      me.preventPageScroll(me.checkProductDetails)
    },
    // [퍼블수정]23.07.18 더플러스 가입 베너 추가
    onlymobile(){
      const me = this
      me.preventPageScroll(me.onlymobile)
    }
  },
  mounted(){
    setTimeout(()=>{ // 퍼블 화면 확인 용
      this.loadingComplete = true
    },1000)
  },
  methods: {
    // [퍼블수정]23.07.18 더플러스 가입 베너 추가
    openonlymobile(){
      this.onlymobile = true
    },
    closeonlymobile(){
      this.onlymobile = false
    },
    closeDialog() {
      this.$emit('close')
    },
    openCheckProductDetails(){ // 221201 HPointPay : 추가
      this.checkProductDetails = true
    },
    closeCheckProductDetails(){ // 221201 HPointPay : 추가
      this.checkProductDetails = false
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/order.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>
