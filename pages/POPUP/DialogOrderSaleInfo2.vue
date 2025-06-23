<template>
  <DialogBasic class="popup-orderSaleInfo btmfull-ver" header-title="혜택정보" :width="540" @hide="closeDialog"><!-- 220916 CTA고정 : btmfull-ver 클래스 추가 -->
    <template #header>
      <h1 class="tit">혜택정보</h1>
      <!-- S : [231113] 고객 알림노출 -->
      <!-- 상단공지 -->
      <div v-if="topNotice" class="cmp-info top-notice">
        <p class="txt">배송지 긴급 공지 안내메시지 노출.배송지 긴급 공지 안내메시지 노출.배송지 긴급 공지 안내메시지 노출.</p>
        <v-btn icon small class="del" @click="topNotice = false">
          <i v-cmp-icon="{ size: 18, name: 'close', invert: 1 }">닫기</i>
        </v-btn>
      </div>
      <!-- //상단공지 -->
      <!-- E : [231113] 고객 알림노출 -->
    </template>
    <template #body>

      <!-- 한섬VVIP, 임직원 한도 노출 영역 -->
      <div class="info-border-box pw-0">
        <v-layout row align-start justify-space-between class="info-table-cnt">
          <p class="tit">VVIP혜택</p>
          <ul class="table">
            <li class="tr">
              <div class="td"><span class="txt0">잔여</span></div>
              <div class="td"><strong class="txt0">1,000,000<em>원</em></strong><span class="txt1">년</span></div>
              <div class="td bar"><strong class="txt0">3<em>회</em></strong><span class="txt1">월</span></div>
            </li>
            <li class="tr tr-gray">
              <div class="td"><span class="txt0">한도</span></div>
              <div class="td"><span class="txt0">2,500,000<em>원</em></span><span class="txt1">년</span></div>
              <div class="td bar"><span class="txt0">5<em>회</em></span><span class="txt1">월</span></div>
            </li>
          </ul>
        </v-layout>
        <v-layout row align-start justify-space-between class="info-table-cnt">
          <p class="tit">임직원할인</p>
          <ul class="table">
            <li class="tr">
              <div class="td"><span class="txt0">잔여</span></div>
              <div class="td"><strong class="txt0">1,000,000<em>원</em></strong></div>
            </li>
            <li class="tr tr-gray">
              <div class="td"><span class="txt0">한도</span></div>
              <div class="td"><span class="txt0">5,000,000<em>원</em></span></div>
            </li>
          </ul>
        </v-layout>
      </div>
      <!-- //한섬VVIP, 임직원 한도 노출 영역 -->
      <!-- 최대할인 체크 -->
      <div class="sale-box">
        <v-checkbox class="cmp-form-checkbox">
          <template #label>
            <div class="cmp-font">최대 할인 혜택 <strong class="c-red bold">20,000</strong> 원 적용</div>
          </template>
        </v-checkbox>
      </div>
      <!-- //최대할인 체크 -->
      <!-- 혜택 -->
      <div class="contents-line-box full">
        <div class="cmp-sub-tit small">
          <h3 class="tit">혜택</h3>
        </div>
        <v-radio-group v-model="saleRadioModel" class="sale-radio-box">
          <!-- vvip 할인 -->
          <div class="sale-info-cnt">
            <v-layout row align-center justify-space-between>
              <!-- [240806]_임직원할인 (5% 할인) >> (5%)로 변경 (할인 제거)-->
              <v-radio value="vvip" label="한섬 VVIP (5%)" class="cmp-form-radio"></v-radio>
              <p class="cmp-font"><strong class="bold">-29,500</strong>원</p>
            </v-layout>
          </div>
          <!-- //vvip 할인 -->
          <!-- 임직원 할인 -->
          <div class="sale-info-cnt">
            <!-- 다건 (221215 할인정보 : 케이스 추가) -->
            <template v-if="employeeSaleData.length > 1">
              <v-layout row align-center>
                <!-- [240806]_임직원할인 (10% 할인) >> (10%)로 변경 (할인 제거)-->
                <v-radio value="employee" label="임직원 할인 (10%)" class="cmp-form-radio"></v-radio>
                <!-- [240806]_임직원할인 다건(다건 전체 비차감일때) 추가 -->
                <span class="txt-label">한도 비차감</span>
                <CommonTooltipBox :tooltip-list="['임직원가는 정상가 기준으로 할인 적용됩니다.']" />
              </v-layout>
              <ul class="sale-list">
                <!-- S: [231205] 주문서 쿠폰적용화면 표기개선 -->
                <li v-for="(item, index) in employeeSaleData" :key="index">
                  <div class="txt-wrap">
                    <div class="cmp-font fnt-14 c-gray">{{item.product_name}}</div>
                    <div class="cmp-font fnt-14 sub-fnt">
                      {{ item.option }}
                      <!-- [240806]_임직원할인 다건(일부상품 일때) 추가 -->
                      <span class="txt-label">한도 비차감</span>
                    </div>
                  </div>
                  <div class="cmp-font num"><strong class="bold">-{{item.sale_price.toLocaleString('ko-KR') || number}}</strong>원</div>
                </li>
                <!-- E: [231205] 주문서 쿠폰적용화면 표기개선 -->
              </ul>
            </template>
            <!-- // 다건 -->
            <!-- 단건 -->
            <v-layout v-else row align-center justify-space-between>
              <v-layout row align-center>
                <v-radio value="employee" label="임직원 할인 (10% 할인)" class="cmp-form-radio"></v-radio>
                <!-- [240806]_임직원할인 단건 추가 -->
                <span class="txt-label">한도 비차감</span>
                <CommonTooltipBox :tooltip-list="['임직원가는 정상가 기준으로 할인 적용됩니다.']" />
              </v-layout>
              <p class="cmp-font"><strong class="bold">-9,000,500</strong>원</p>
            </v-layout>
            <!-- // 단건 -->
          </div>
          <!-- //임직원 할인 -->
          <!-- 쇼핑백 쿠폰 -->
          <div class="sale-info-cnt">
            <v-layout row align-center justify-space-between>
              <!-- [퍼블수정]23.03.08 쿠폰 총 갯수 추가 -->
              <v-layout>
                <v-radio id="dateRadio0" value="shoppingbag" class="cmp-form-radio"></v-radio>
                <label for="dateRadio0">쇼핑백 쿠폰 (총 N개)</label>
              </v-layout>
              <!-- //[퍼블수정]23.03.08 쿠폰 총 갯수 추가 -->
              <p class="cmp-font"><strong class="bold">-1,000,000</strong>원</p>
            </v-layout>
            <div class="sale-select-cnt">
              <OrderCouponSelect 
                :coupon-data="shoppingbagData" :disabled="false" 
                :error="false" error-text="특정 상품에만 적용되는 쿠폰입니다." 
                @submit="shoppingbagSubmit"
              />
            </div>
          </div>
          <!-- //쇼핑백 쿠폰 -->
          <!-- 상품 쿠폰 -->
          <div class="sale-info-cnt">
            <!-- 다건 -->
            <template v-if="prdCouponData.length > 1">
              <!-- [퍼블수정]23.03.08 쿠폰 총 갯수 추가 -->
              <v-layout>
                <v-radio id="dateRadio1" value="product" class="cmp-form-radio mb-0"></v-radio>
                <label for="dateRadio1">상품 쿠폰 (총 N개)</label>
              </v-layout>
              <!-- //[퍼블수정]23.03.08 쿠폰 총 갯수 추가 -->
              <div class="sale-select-cnt">
                <div v-for="(item, index) in prdCouponData" :key="index" class="cnt">
                  <v-layout row align-center justify-space-between>
                    <!-- S: [231205] 주문서 쿠폰적용화면 표기개선 -->
                    <div class="txt-wrap">
                      <p class="cmp-font fnt-14 c-gray">{{item.product_name}}</p>
                      <p class="cmp-font fnt-14 sub-fnt">NAVY / 105</p>
                    </div>
                    <p class="cmp-font num"><strong class="bold">-1,000,000</strong>원</p>
                    <!-- E: [231205] 주문서 쿠폰적용화면 표기개선 -->
                  </v-layout>
                  <OrderCouponSelect 
                    :coupon-data="prdCouponData[index]" 
                    :disabled="false" :list-idx="index"
                    @submit="prdCouponSubmit"
                  />
                </div>
              </div>
            </template>
            <!-- //다건 -->
            <!-- 단건 -->
            <template v-else>
              <v-layout row align-center justify-space-between>
                <v-radio value="product" label="상품 쿠폰" class="cmp-form-radio"></v-radio>
                <p class="cmp-font"><strong class="bold">-10,000</strong>원</p>
              </v-layout>
              <div class="sale-select-cnt">
                <OrderCouponSelect 
                  :coupon-data="prdCouponData[0]" :disabled="false" 
                  @submit="prdCouponSubmit"
                />
              </div>
            </template>
            <!-- //단건 -->
          </div>
          <!-- //상품 쿠폰 -->
        </v-radio-group>
      </div>
      <!-- //혜택 -->
      <!-- 중복 쿠폰 -->
      <div class="contents-line-box full">
        <!-- 다건 --><!-- [퍼블수정]23.01.03 -->
        <template v-if="duplicateData.length > 1">
          <v-radio-group v-model="saleRadioModel0" class="sale-radio-box">
            <div class="cmp-sub-tit small">
              <!-- [퍼블수정]23.03.24 (총 N개) 추가 -->
              <h3 class="tit">추가 혜택 <span class="cmp-font fnt-16">(총 N개)</span></h3>
              <!-- //[퍼블수정]23.03.24 (총 N개) 추가 -->
            </div>
            <!-- VVIP장바구니 -->
            <div class="sale-info-cnt">
              <v-layout row align-center justify-space-between>
                <v-radio value="vvipshoppingbag" label="VVIP장바구니" class="cmp-form-radio"></v-radio>
                <p class="cmp-font"><strong class="bold">-10,000</strong>원</p>
              </v-layout>
              <div class="sale-select-cnt">
                <OrderCouponSelect 
                  :coupon-data="duplicateData0[0]" :disabled="false" 
                  @submit="duplicateSubmit"
                />
              </div>
            </div>
            <!-- //VVIP장바구니 -->
            <!-- 상품 쿠폰 -->
            <div class="sale-info-cnt">
              <!-- 다건 -->
              <template v-if="duplicateData.length > 1">
                <v-radio value="productduble" label="상품" class="cmp-form-radio mb-0"></v-radio>
                <div class="sale-select-cnt">
                  <div v-for="(item, index) in duplicateData" :key="index" class="cnt">
                    <v-layout row align-center justify-space-between>
                      <!-- S: [231205] 주문서 쿠폰적용화면 표기개선 -->
                      <div class="txt-wrap">
                        <p class="cmp-font fnt-14 c-gray">{{item.product_name}}</p>
                        <p class="cmp-font fnt-14 sub-fnt">NAVY / 105</p>
                      </div>
                      <p class="cmp-font num"><strong class="bold">-10,000</strong>원</p>
                      <!-- E: [231205] 주문서 쿠폰적용화면 표기개선 -->
                    </v-layout>
                    <OrderCouponSelect 
                      :coupon-data="duplicateData[index]" 
                      :disabled="false" :list-idx="index"
                      @submit="prdCouponSubmit"
                    />
                  </div>
                </div>
              </template>
              <!-- //다건 -->
              <!-- 단건 -->
              <template v-else>
                <v-layout row align-center justify-space-between>
                  <v-radio value="product" label="상품 쿠폰" class="cmp-form-radio"></v-radio>
                  <p class="cmp-font"><strong class="bold">-10,000</strong>원</p>
                </v-layout>
                <div class="sale-select-cnt">
                  <OrderCouponSelect 
                    :coupon-data="duplicateData[0]" :disabled="false" 
                    @submit="prdCouponSubmit"
                  />
                </div>
              </template>
              <!-- //단건 -->
            </div>
          <!-- //상품 쿠폰 -->
          </v-radio-group>
        </template>
        <!-- //다건 --><!-- //[퍼블수정]23.01.03 -->
        <!-- 단건 -->
        <template v-else>
          <div class="cmp-sub-tit small">
            <v-layout row align-center justify-space-between>
              <h3 class="tit">중복 쿠폰</h3>
              <p class="cmp-font"><strong class="bold">-15,000</strong>원</p>
            </v-layout>
          </div>
          <OrderCouponSelect 
            :coupon-data="duplicateData[0]" :disabled="false" 
            @submit="duplicateSubmit"
          />
        </template>  
        <!-- //단건 -->
      </div>
      <!-- //중복 쿠폰 -->
      <!-- 배송비 쿠폰 --> 
      <div class="contents-line-box full">
        <div class="cmp-sub-tit small">
          <v-layout row align-center justify-space-between>
            <h3 class="tit">배송비 쿠폰</h3>
            <p class="cmp-font"><strong class="bold">-15,000</strong>원</p>
          </v-layout>
        </div>
        <v-layout row align-center justify-start>
          <v-checkbox class="cmp-form-checkbox">
            <template #label>
              <div class="cmp-font">무료배송쿠폰 1 / <span class="cmp-font c-gray">5 개</span></div>
            </template>
          </v-checkbox>
          <CommonTooltipBox icon-type="info" bottom :tooltip-list="['기간 만료 임박한 쿠폰이 자동 적용됩니다']"/>
        </v-layout>
      </div>
      <!-- //배송비 쿠폰 -->
      <!-- 쿠폰 등록 -->
      <div class="contents-line-box full last">
        <h3 class="cmp-font fnt-20">쿠폰 등록</h3>
        <div class="cmp-form-btnBox mt-20">
          <v-text-field type="text" outlined label="쿠폰 번호입력" clearable class="cmp-form-input"></v-text-field>
          <v-btn outlined color="normal">등록</v-btn>
        </div>
      </div>
      <!-- //쿠폰 등록 -->
    </template>
    <template #footer>
      <!-- 220916 CTA고정 : 버튼 <template #footer>로 이동 -->
      <v-btn large block color="primary"><strong>-663,000</strong>원 적용하기</v-btn>
    </template>
  </DialogBasic>
</template>
<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  components: {
    DialogBasic,
  },
  data: () => ({
    topNotice : true, // 상단공지

    saleRadioModel : null, // 할인 radio v-model
    saleRadioModel0 : null, // 할인 radio v-model
    shoppingbagData : { // 쇼핑쿠폰
      select_idx : null,
      list : [
        '첫 구매고객 10% 할인',
        '첫 구매고객 15% 할인',
        '첫 구매고객 20% 할인',
      ]
    },
    employeeSaleData : [
      {
        product_name : '브랜드명 상품명',
        option: '컬러 / 사이즈',
        sale_price : 5000,
      },
      {
        product_name : 'CLUB MONACO 로고 자수 스웹셔츠 스웹셔츠',
        option: 'NAVY / 105',
        sale_price : 9000000,
      }
    ],
    prdCouponData:[ // 상품쿠폰
      {
        product_name : 'CLUB MONACO 로고 자수 스웹셔츠CLUB MONACO 로고 자수 스웹셔츠',
        select_idx : null,
        list : [
          '[THE클럽] STAR 스페셜 바우처',
          '핸썸티비 태그사푸 10%+5% (2021.12.15~2021.12.31)',
          '남성의류 정상 7% 쿠폰 (2021.12.15~2021.12.31)',
          '신규회원 전용 정상 15% 쿠폰(앱전용) 2021.12.15~ 2021.12.31)',
        ]
      },
      {
        product_name : 'CLUB MONACO 울 블렌드 니트 가디건 가디건',
        select_idx : null,
        list : [
          '[THE클럽] STAR 스페셜 바우처',
          '핸썸티비 태그사푸 10%+5% (2021.12.15~2021.12.31)',
          '남성의류 정상 7% 쿠폰 (2021.12.15~2021.12.31)',
        ]
      },
      {
        product_name : 'TIME 비딩 & 크리스탈 니트 가디건',
        select_idx : null,
        list : [
          '[THE클럽] STAR 스페셜 바우처',
          '핸썸티비 태그사푸 10%+5% (2021.12.15~2021.12.31)',
          '남성의류 정상 7% 쿠폰 (2021.12.15~2021.12.31)',
          '신규회원 전용 정상 15% 쿠폰(앱전용) 2021.12.15~ 2021.12.31)',
          '핸썸티비 태그사푸 10%+5% (2021.12.15~2021.12.31)',
        ],
      },
    ],
    duplicateData0:[
      {
        product_name : 'CLUB MONACO 로고 자수 스웹셔츠',
        select_idx : null,
        list : [
          '[THE클럽] STAR 스페셜 바우처',
          '핸썸티비 태그사푸 10%+5% (2021.12.15~2021.12.31)',
          '남성의류 정상 7% 쿠폰 (2021.12.15~2021.12.31)',
          '신규회원 전용 정상 15% 쿠폰(앱전용) 2021.12.15~ 2021.12.31)',
        ]
      },
    ],
    duplicateData:[
      {
        product_name : 'CLUB MONACO 로고 자수 스웹셔츠',
        select_idx : null,
        list : [
          '[THE클럽] STAR 스페셜 바우처',
          '핸썸티비 태그사푸 10%+5% (2021.12.15~2021.12.31)',
          '남성의류 정상 7% 쿠폰 (2021.12.15~2021.12.31)',
          '신규회원 전용 정상 15% 쿠폰(앱전용) 2021.12.15~ 2021.12.31)',
        ]
      },
      {
        product_name : 'CLUB MONACO 울 블렌드 니트 가디건 가디건',
        select_idx : null,
        list : [
          '[THE클럽] STAR 스페셜 바우처',
          '핸썸티비 태그사푸 10%+5% (2021.12.15~2021.12.31)',
          '남성의류 정상 7% 쿠폰 (2021.12.15~2021.12.31)',
          '신규회원 전용 정상 15% 쿠폰(앱전용) 2021.12.15~ 2021.12.31)',
        ]
      },
      {
        product_name : 'TIME 비딩 & 크리스탈 니트 가디건',
        select_idx : null,
        list : [
          '[THE클럽] STAR 스페셜 바우처',
          '핸썸티비 태그사푸 10%+5% (2021.12.15~2021.12.31)',
          '남성의류 정상 7% 쿠폰 (2021.12.15~2021.12.31)',
          '신규회원 전용 정상 15% 쿠폰(앱전용) 2021.12.15~ 2021.12.31)',
        ]
      },
    ],
  }),
  watch: {
    
  },
  methods: {
    closeDialog() {
      this.$emit('close')
    },
    shoppingbagSubmit(idx){ // 쇼핑백 쿠폰
      const me = this
      console.log(me.shoppingbagData.list[idx])
    },
    prdCouponSubmit(idx,idx2){ // 상품 쿠폰
      const me = this
      console.log(me.prdCouponData[idx2].list[idx])
    },
    duplicateSubmit(idx,idx2){ // 중복 할인 쿠폰
      const me = this
      console.log(me.duplicateData[idx2].list[idx])
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
