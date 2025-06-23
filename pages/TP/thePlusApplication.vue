<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/OR/guide/Structure 참고 -->
    <div class="content-wrap">
      <CommonContentsLeftMenu :title="'마이페이지'" :url="'/json/mypage_left_menu.json'" :active="'/ko/TP/thePlusGate'"></CommonContentsLeftMenu>
      <div class="my-page-r-box membership-application"><!-- 마이페이지 -->
        <div class="cmp-page-tit"><!-- 페이지 타이틀 -->
          <h2 class="tit">더플러스⁺ 가입 신청</h2>
        </div>
        <div class="order-content-box">
          <!--가입상품-->
          <div class="product">
            <v-layout class="product-row-group line-type3">
              <div class="img"><img src="/images/member/theplus-img.jpg"></div>
              <div class="txt-info">
                <p>더플러스⁺</p>
                <p class="mt-6"><strong>100,000</strong> 원</p>
              </div>
            </v-layout>
          </div>
          <!--//가입상품-->

          <div class="contents-wrap">
            <!-- 신청서 입력 전 -->
            <!-- 선호 브랜드 입력 전-->
            <div class="membership-div">
              <v-layout row align-center>
                <h2 class="cmp-font fnt-24">선호 브랜드</h2>
                <CommonTooltipBox :tooltip-list="tooltipList.fav_brand" class="ml-4" />
              </v-layout>
              <v-layout class="info-box">
                <div class="input-area">
                  <p class="before">10% 할인권 3장의 브랜드를 선택해주세요.</p>     
                </div>
                <button class="cmp-font fnt-14 button">선택<i class="cmp-icon cmp-icon-12 i-next"></i></button>
              </v-layout>
            </div>
            <!-- //선호 브랜드 입력 전-->
            <!-- 배송정보 입력 전 -->
            <div class="membership-div deliv-var">
              <v-layout row align-center>
                <h2 class="cmp-font fnt-24">배송정보</h2>
                <CommonTooltipBox :tooltip-list="tooltipList.delv_info" class="ml-4" />
              </v-layout>
              <v-layout class="info-box">
                <div class="input-area">
                  <h3 class="cmp-font fnt-20 mb-20">배송지</h3>
                  <p class="before">배송지 정보를 입력해 주세요.</p>
                </div>
                <button class="cmp-font fnt-14 button">입력<i class="cmp-icon cmp-icon-12 i-next"></i></button>
              </v-layout>
              <v-layout class="info-box">
                <div class="input-area">
                  <h3 class="cmp-font fnt-20 mb-20">배송 요청사항</h3>
                  <p class="before">배송 요청사항을 선택해 주세요.</p>
                </div>
                <button class="cmp-font fnt-14 button">선택<i class="cmp-icon cmp-icon-12 i-next"></i></button>
              </v-layout>
              <ul class="cmp-dotList mt-34">
                <li>고객님의 성별에 따라 맞춤형 사은품으로 발송 될 수 있으며, 임의로의 변경은 어렵습니다.</li>
              </ul>
            </div>
            <!-- //배송정보 입력 전 -->
            <!-- 정기 결제 정보 입력 전-->
            <div class="membership-div">
              <v-layout row align-center>
                <h2 class="cmp-font fnt-24">정기 결제 수단</h2>
              </v-layout>
              <v-layout class="info-box">
                <div class="input-area">
                  <p class="before">정기 결제 수단을 등록해 주세요.</p>     
                </div>
                <button class="cmp-font fnt-14 button">등록<i class="cmp-icon cmp-icon-12 i-next"></i></button>
              </v-layout>
              <v-layout class="info-box no-bline">
                <div class="input-area pt-10">
                  <h3 class="cmp-font fnt-18 pb-10">더플러스⁺ 유의사항</h3>
                  <ul class="cmp-dotList">
                    <li>결제 후 14일 이내 서비스 이용 이력이 없는 경우 결제 취소(청약철회)가 가능합니다.</li>
                    <li>결제 후 14일이 경과하거나 서비스 사용 이력이 있는 경우에는 멤버십 정기결제 취소만 가능합니다.<br />(다음 차수 자동결제 해지)</li>
                    <li>결제수단의 정지/한도초과/정보변경 등의 사유로 결제상태가 변경될 경우, 결제 및 서비스가 일시 정지되며 재결제 하시면 다시 결제 및 서비스가 시작됩니다.</li>
                    <!-- S : [231113] 더플러스 당일 해지,재가입 차단 -->
                    <li>더플러스⁺ 멤버십은 해지 당일 재가입이 불가합니다.<br />재가입은 해지 익일부터 가능합니다.</li>
                    <!-- E : [231113] 더플러스 당일 해지,재가입 차단 -->
                  </ul>
                </div>
              </v-layout>
            </div>
            <!-- //정기 결제 정보 입력 전-->
            <!-- //신청서 입력 전 -->

            <!-- 신청서 입력 후 -->
            <!-- 선호 브랜드 입력 후-->
            <div class="membership-div">
              <v-layout row align-center>
                <h2 class="cmp-font fnt-24">선호 브랜드</h2>
                <CommonTooltipBox :tooltip-list="tooltipList.fav_brand" class="ml-4" />
              </v-layout>
              <v-layout class="info-box">
                <div class="input-area">
                  <div class="after">
                    <p class="cmp-font fnt-14">MINE<span class="c-blue ml-10">X 1</span></p>
                    <p class="cmp-font fnt-14 mt-6">LANVIN COLLECTION<span class="c-blue ml-10">X 1</span></p>
                    <p class="cmp-font fnt-14 mt-6">SYSTEM<span class="c-blue ml-10">X 1</span></p>
                  </div> 
                </div>
                <button class="cmp-font fnt-14 button">선호 브랜드 변경<i class="cmp-icon cmp-icon-12 i-next"></i></button>
              </v-layout>
            </div>
            <!-- //선호 브랜드 입력 후-->
            <!-- 배송정보 입력 후 -->
            <div class="membership-div deliv-var">
              <v-layout row align-center>
                <h2 class="cmp-font fnt-24">배송정보</h2>
                <CommonTooltipBox :tooltip-list="tooltipList.delv_info" class="ml-4" />
              </v-layout>
              <v-layout class="info-box">
                <div class="input-area">
                  <h3 class="cmp-font fnt-20 mb-20">배송지</h3>
                  <div class="after">
                    <p><span class="cmp-label-line c-blue mr-10">기본배송지</span>홍길동 / 010-1234-5678</p>
                    <p class="mt-7">[06577] 서울 강남구 언주로 170길 28 (강남구, 스페이스데코빌딩) 3층 201호 </p>
                  </div>
                </div>
                <button class="cmp-font fnt-14 button">변경<i class="cmp-icon cmp-icon-12 i-next"></i></button>
              </v-layout>
              <v-layout class="info-box">
                <div class="input-area">
                  <h3 class="cmp-font fnt-20 mb-20">배송 요청사항</h3>
                  <div class="after">
                    <p>
                      부재 시 문 앞에 놓아주세요<br />
                      공동현관 출입번호(****)<br />
                      CJ대한통운으로 배송됩니다.<br />
                    </p>
                  </div>   
                </div>
                <button class="cmp-font fnt-14 button">변경<i class="cmp-icon cmp-icon-12 i-next"></i></button>
              </v-layout>
              <ul class="cmp-dotList mt-34">
                <li>고객님의 성별에 따라 맞춤형 사은품으로 발송 될 수 있으며, 임의로의 변경은 어렵습니다.</li>
              </ul>
            </div>
            <!-- //배송정보 입력 후 -->

            <!-- 정기 결제 정보-->
            <div class="membership-div">
              <v-layout row align-center>
                <h2 class="cmp-font fnt-24">정기 결제 정보</h2>
              </v-layout>
              <v-layout class="info-box">
                <div class="input-area">
                  <div class="after">
                    <h3 class="cmp-font fnt-18 pb-2 bold">신용카드</h3>
                    <p>비씨카드 9425-20**-****-1148</p>
                    <div class="cmp-info info-type2 mt-10">
                      <p class="cmp-font fnt-14">결제수단 공지 안내메시지 노출. BO에서 관리함. 말줄임 없이<br />여러 줄 노출되도록 구성되어 있음</p>
                    </div>
                  </div>  
                </div>
                <button class="cmp-font fnt-14 button">정기결제 수단 변경<i class="cmp-icon cmp-icon-12 i-next"></i></button>
              </v-layout>
              <v-layout class="info-box no-bline">
                <div class="input-area pt-10">
                  <h3 class="cmp-font fnt-18 pb-10">더플러스⁺ 유의사항</h3>
                  <ul class="cmp-dotList">
                    <li>결제 후 14일 이내 서비스 이용 이력이 없는 경우 결제 취소(청약철회)가 가능합니다.</li>
                    <li>결제 후 14일이 경과하거나 서비스 사용 이력이 있는 경우에는 멤버십 정기결제 취소만 가능합니다.<br />(다음 차수 자동결제 해지)</li>
                    <li>결제수단의 정지/한도초과/정보변경 등의 사유로 결제상태가 변경될 경우, 결제 및 서비스가 일시 정지되며 재결제 하시면 다시 결제 및 서비스가 시작됩니다.</li>
                    <!-- S : [231113] 더플러스 당일 해지,재가입 차단 -->
                    <li>더플러스⁺ 멤버십은 해지 당일 재가입이 불가합니다.<br />재가입은 해지 익일부터 가능합니다.</li>
                    <!-- E : [231113] 더플러스 당일 해지,재가입 차단 -->
                  </ul>
                </div>
              </v-layout>
            </div>
            <!-- //정기 결제 정보-->
            <!-- //신청서 입력 후 -->
          </div>

          <!-- 금액/주문 -->
          <div class="order-price-box">
            <div class="price-sticky-box">
              <h3 class="cmp-font fnt-22">총 결제금액</h3>
              <div class="price-info mt-24">
                <p class="tit">연간 이용권</p>
                <p class="price"><strong>100,000</strong>원</p>
              </div>
              <div class="price-sub-info">
                <p class="tit">MANIA 할인 혜택<br />(최초 1회)</p>
                <p class="price"><strong>-50,000</strong>원</p>
              </div>
              <div class="price-total-info">
                <p class="tit">최종 결제 금액</p>
                <p class="price"><strong>50,000</strong>원</p>
              </div>
              <v-checkbox class="cmp-form-checkbox lines">
                <template #label>(필수) 주문할 상품의 상품명, 가격을 확인하였으며, 구매 진행에 동의합니다. (전자상거래법 제 8조 2항)</template>
              </v-checkbox>
              <v-checkbox class="cmp-form-checkbox lines">
                <template #label>(필수) 매년 정기결제 되는 것에 동의합니다.</template>
              </v-checkbox>
              <div class="price-btn">
                <v-btn large block color="primary" :disabled="true">결제하기</v-btn>
              </div>
              <ul class="cmp-dotList mt-20">
                <li>회원 등급에 따른 가입 혜택은 최초 가입 시 1회만 적용되며,  갱신 시부터는 기본 가입비 100,000원이 적용됩니다.</li>
              </ul>
            </div>
          </div>
          <!-- // 금액/주문 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

// import EventBus from '~/api/common/EventBus'
export default {
  components: {
    // Swiper,
    // SwiperSlide,
  },
  layout: 'LayoutBasics',
  data() {
    return {
      tooltipList: { // 툴팁 상세 정보
        fav_brand: [
          '선택하신 선호 브랜드의 10% 할인 쿠폰을 발급해 드립니다.',
          '멤버십 가입 후 선호 브랜드 변경 시, 다음 차수에 적용 됩니다.',
        ],
        delv_info: [
          '웰컴 기프트 및 사은품 배송을 위한 배송지 입력란입니다.',
        ],
      },
    }
  },
  created() {
  },
  methods: {
  },
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/theplusmember.scss'; //페이지 전용 css
</style>