<template>
  <DialogBasic class="popup-orderSaleInfo" header-title="Discount Info" :width="540" @hide="closeDialog">
    <template #body>
      <!-- 최대할인 체크 -->
      <div class="sale-box">
        <v-checkbox class="cmp-form-checkbox">
          <template #label>
            <div class="cmp-font">Maximum discount <span class="c-red">￦<b class="ml-2">53,000</b></span> applied</div><!-- [퍼블수정]23.02.01 -->
          </template>
        </v-checkbox>
      </div>
      <!-- //최대할인 체크 -->
      <!-- 쿠폰 등록 -->
      <div class="contents-line-box full">
        <div class="cmp-form-box"><!-- 에러 시 'valid' 클래스 추가 -->
          <h3 class="form-tit">Coupon Registration</h3>
          <div class="cmp-form-btnBox mt-10">
            <v-text-field type="text" outlined label="Enter coupon number." clearable class="cmp-form-input" :error="false"></v-text-field>
            <v-btn outlined color="normal">Register</v-btn>
          </div>
          <p class="validation-text">Please enter the accurate coupon code once again.</p>
        </div>
      </div>
      <!-- //쿠폰 등록 -->
      <!-- 할인 -->
      <div class="contents-line-box full">
        <div class="cmp-sub-tit small">
          <h3 class="tit">Discount</h3>
        </div>
        <v-radio-group v-model="saleRadioModel" class="sale-radio-box">
          <!-- 쇼핑백 쿠폰 -->
          <div class="sale-info-cnt">
            <v-layout row align-center justify-space-between>
              <!-- [퍼블수정]23.03.24 (총 N개) 추가 -->
              <v-layout>
                <v-radio id="dateRadio0" value="shoppingbag" class="cmp-form-radio"></v-radio>
                <label for="dateRadio0">Shopping bag coupon (Total 1coupon)</label>
              </v-layout>
              <!-- //[퍼블수정]23.03.24 (총 N개) 추가 -->
              <p class="cmp-font">-<em class="mw-2">￦</em><strong class="bold">10,000</strong></p><!-- [개발확인] -->
            </v-layout>
            <div class="sale-select-cnt">
              <OrderCouponSelect 
                :coupon-data="shoppingbagData" :disabled="false" 
                @submit="shoppingbagSubmit"
              />
            </div>
          </div>
          <!-- //쇼핑백 쿠폰 -->
          <!-- 상품 쿠폰 -->
          <div class="sale-info-cnt">
            <!-- 다건 -->
            <template v-if="prdCouponData.length > 1">
              <!-- [퍼블수정]23.03.24 (총 N개) 추가 -->
              <v-layout>
                <v-radio id="dateRadio1" value="shoppingbag" class="cmp-form-radio mb-0"></v-radio>
                <label for="dateRadio1">Product coupon (Total 1coupon)</label>
              </v-layout>
              <!-- //[퍼블수정]23.03.24 (총 N개) 추가 -->
              <div class="sale-select-cnt">
                <div v-for="(item, index) in prdCouponData" :key="index" class="cnt">
                  <v-layout row align-center justify-space-between>
                    <p class="cmp-font fnt-14 c-gray">{{item.product_name}}</p>
                    <p class="cmp-font">-<em class="mw-2">￦</em><strong class="bold">10,000</strong></p>
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
                <v-radio value="product" label="Product coupon" class="cmp-form-radio"></v-radio>
                <p class="cmp-font">-<em class="mw-2">￦</em><strong class="bold">10,000</strong></p>
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
      <!-- //할인 -->
      <!-- 중복 쿠폰 -->
      <div class="contents-line-box full">
        <!-- 다건 -->
        <template v-if="duplicateData.length > 1">
          <div class="cmp-sub-tit small">
            <!-- [퍼블수정]23.03.24 (총 N개) 추가 -->
            <h3 class="tit">Overlapping coupon <span class="cmp-font fnt-16">(Total 1coupon)</span></h3>
            <!-- //[퍼블수정]23.03.24 (총 N개) 추가 -->
          </div>
          <div class="sale-select-cnt pl-0">
            <div v-for="(item, index) in duplicateData" :key="index" class="cnt">
              <v-layout row align-center justify-space-between>
                <p class="cmp-font fnt-14 c-gray">{{item.product_name}}</p>
                <p class="cmp-font">-<em class="mw-2">￦</em><strong>10,000</strong></p>
              </v-layout>
              <OrderCouponSelect 
                :coupon-data="duplicateData[index]" :disabled="false" 
                @submit="duplicateSubmit"
              />
            </div>
          </div>
        </template>
        <!-- //다건 -->
        <!-- 단건 -->
        <template v-else>
          <div class="cmp-sub-tit small">
            <v-layout row align-center justify-space-between>
              <h3 class="tit">Overlapping coupon</h3>
              <p class="cmp-font">-<em class="mw-2">￦</em><strong class="bold">15,000</strong></p>
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
    </template>
    <template #footer>
      <v-btn large block color="primary">Apply -<em class="mw-2">￦</em><strong>53,000</strong></v-btn>
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
    saleRadioModel : null, // 할인 radio v-model
    shoppingbagData : { // 쇼핑쿠폰
      select_idx : null,
      list : [
        '5% discount coupon',
        '5% discount coupon',
        '5% discount coupon',
      ]
    },
    prdCouponData:[ // 상품쿠폰
      {
        product_name : 'CLUB MONACO linen blend pocket shirt',
        select_idx : null,
        list : [
          '15% coupon for new members only (app only)(12 May 2021~12 Sep. 2021)',
          '15% coupon for new members only',
          "7% coupon for Men's Clothing (12 May 2021~12 Sep. 2021)",
          '15% coupon for new members only (app only)(12 May 2021~12 Sep. 2021)',
        ]
      },
      {
        product_name : 'CLUB MONACO open collar cropped Cardigan',
        select_idx : null,
        list : [
          "7% coupon for Men's Clothing (12 May 2021~12 Sep. 2021)",
          "7% coupon for Men's Clothing (12 May 2021~12 Sep. 2021)",
        ]
      },
      {
        product_name : 'TIME floral button chirring blouse',
        select_idx : null,
        list : [
          '15% coupon for new members only (app only)(12 May 2021~12 Sep. 2021)',
          '15% coupon for new members only (app only)(12 May 2021~12 Sep. 2021)',
        ]
      },
    ],
    duplicateData:[
      {
        product_name : 'CLUB MONACO linen blend pocket shirt',
        select_idx : null,
        list : [
          'Special voucher for ￦ 10,000 discount (12 May 2021~12 Sep. 2021)',
        ]
      },
      {
        product_name : 'CLUB MONACO open collar cropped jacket',
        select_idx : null,
        list : [
          'Special voucher for ￦ 10,000 discount (12 May 2021~12 Sep. 2021)',
          'Special voucher for ￦ 10,000 discount (12 May 2021~12 Sep. 2021)',
        ]
      },
      {
        product_name : 'TIME floral button chirring blouse',
        select_idx : null,
        list : [
          'Special voucher for ￦ 10,000 discount (12 May 2021~12 Sep. 2021)',
          'Special voucher for ￦ 10,000 discount (12 May 2021~12 Sep. 2021)',
          'Special voucher for ￦ 10,000 discount (12 May 2021~12 Sep. 2021)',
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
