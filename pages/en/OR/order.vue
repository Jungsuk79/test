<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">

      <div class="cmp-page-tit">
        <h2 class="tit">Order</h2>
      </div>

      <!-- 상단공지 -->
      <div v-if="topNotice" class="cmp-info top-notice">
        <p class="txt">message area message area message area message area message area message area message area message area message area message (shipping)</p>
        <v-btn icon small class="del" @click="topNotice = false">
          <i v-cmp-icon="{ size: 18, name: 'close', invert: 1 }">close</i>
        </v-btn>
      </div>
      <!-- //상단공지 -->

      <div class="order-content-box">
        <!-- 주문상품 리스트 -->
        <div class="cmp-sub-tit small mb-10">
          <h3 class="tit">Ordered Product Total {{prdList.length}}</h3>
        </div>
        <div class="product-row-table">
          <table>
            <caption>Ordered Product List</caption>
            <colgroup>
              <col style="width:auto;"/>
              <col style="width:248px;"/>
            </colgroup>
            <thead>
              <tr>
                <th class="pw-0">Product information</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <!-- 상품리스트 -->
              <template v-for="(item, index) in prdList">
                <tr :key="index">
                  <td class="pw-0">
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
                      <div class="product-sellprice">
                        ￦<strong>{{item.sell_price | number}}</strong> 
                        <template v-if="item.sell_price_en">
                          ($<strong>{{item.sell_price_en | number}}</strong>)
                        </template>
                      </div>
                      <div v-if="item.price || item.discount" class="product-price-cnt">
                        <span class="product-price-origin">￦<del>{{item.price | number}}</del></span> 
                        <span v-if="item.price_en" class="product-price-origin">($<del>{{item.price_en | number}}</del>)</span>
                        <span class="product-discount">{{item.discount}}<em>%</em></span>
                      </div>
                    </div>
                  </td>
                </tr>
              </template>
              <!-- //상품리스트 -->
            </tbody>
          </table>
        </div>
        <!-- //주문상품 리스트 -->

        <!-- 배송지 -->
        <div class="cmp-sub-tit line mt-60">
          <h3 class="tit">Shipping Information</h3>
        </div>
        <div class="contents-line-box">
          <div class="cmp-sub-tit small">
            <h4 class="tit">Shipping Address</h4>
            <button class="cmp-font fnt-14 button">
              <!-- Edit --><!-- 입력 전 버튼명 -->
              Change a new address <!-- 입력 후 버튼명 -->
              <i v-cmp-icon="{size:12,name:'next'}"></i>
            </button>
          </div>
          <!-- 입력 전 -->
          <!--<p class="cmp-font c-gray">Please enter your shipping information.</p>-->
          <!-- //입력 전 -->
          <!-- 입력 후 -->
          <v-layout row align-center justify-start>
            <p class="cmp-label-line c-blue mr-10">Default</p>
            <p class="cmp-font">KIMHANDSOME / 010-1234-5678</p>
          </v-layout>
          <p class="cmp-font mt-6">[95014] HANDSOME B/D 523, Dosan-daero, Gangnam-gu, Seoul, Korea</p>
          <!-- //입력 후 -->
        </div>
        <!-- //배송지 -->

        <div class="cmp-sub-tit line mt-60">
          <h3 class="tit">Discount Information</h3>
        </div>
        <!-- 쿠폰 및 혜택 -->
        <div class="contents-line-box">
          <div class="cmp-sub-tit small">
            <h4 class="tit">Coupons &amp; Benefits</h4>
            <button class="cmp-font fnt-14">Coupon Change <i v-cmp-icon="{size:12,name:'next'}"></i></button>
          </div>
          <!-- 입력 전 -->
          <!--<p class="cmp-font c-gray">There are no applicable discount benefits.</p>-->
          <!-- //입력 전 -->
          <!-- 입력 후 -->
          <div class="or-apply-discount">
            <p class="num-txt">Maximum applied benefits 2 cases</p>
            <div class="list-box">
              <p class="total-txt">-<em>￦</em><strong>61,000</strong></p>
              <div class="list">
                <dl>
                  <dt>Shopping bag coupon</dt>
                  <dd>-<em>￦</em><strong>29,000</strong></dd>
                </dl>
                <dl>
                  <dt>Overlapping coupon</dt>
                  <dd>-<em>￦</em><strong>29,000</strong></dd>
                </dl>
                <dl>
                  <dt>Shipping fee coupon</dt>
                  <dd>-<em>￦</em><strong>3,000</strong></dd>
                </dl>
              </div>
            </div>
          </div>
          <!-- //입력 후 -->
        </div>
        <!-- //쿠폰 및 혜택 -->

        <div class="cmp-sub-tit line mt-60">
          <h3 class="tit">Payment Method</h3>
        </div>
        <!-- 결제수단 선택 -->
        <div class="contents-line-box last">
          <div class="cmp-sub-tit small">
            <h4 class="tit">Payment option</h4>
          </div>
          <div class="payment-select-etc">
            <div v-for="(item,index) in overseasPayment" :key="index" class="card-box">
              <input 
                v-model="paymentSelected" :id="item.id" type="radio" :value="item.value" 
                :disabled="item.id==='hyundaicardRed'&& item.disabled"
                name="paymentSelect" class="card-input"
              >
              <label :for="item.id" class="card-label">{{item.name}} selected</label>
              <div class="card-cnt">
                <div class="cnt" :class="{'disabled':item.id==='hyundaicardRed'&& item.disabled}">
                  <img :src="item.image" :alt="item.name" class="icon">
                  <p class="cnt-tit">{{item.name}}</p>
                </div>
              </div>
            </div>
          </div> 

          <p class="cmp-font fnt-14 mt-24">message area message area message area message area message area message area message area message area message area message area message area message area message area message area message area message area message area (Payment Method)</p>
          <v-checkbox label="Use the currently selected payment method next time." class="cmp-form-checkbox mt-44"></v-checkbox>  
        </div>
        <!-- //결제수단 선택 -->

        <!-- 배너 -->
        <div class="mt-44">
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

        <!-- 금액/주문 -->
        <div class="order-price-box">
          <div class="price-sticky-box">
            <div class="price-info">
              <p class="tit">Product price</p>
              <p class="price"><em>￦</em><strong>2,021,000</strong></p>
            </div>
            <div class="price-info">
              <p class="tit">Discount</p>
              <p class="price">-<em>￦</em><strong>61,000</strong></p>
            </div>
            <div class="price-info">
              <div class="tit-box">
                <p class="tit">Shipping fee</p>
                <CommonTooltipBox right :width="320">
                  <template #content>
                  <div>
                    <ul class="tooltip-list mb-12">
                      <li>Shipping fee is charged when payment of less than ￦200,000 is made based on actual payment price excluding coupon discounts. (Free shipping when more than 200,000 KRW is purchased)</li>
                    </ul>
                    <p class="tooltip-table-tit">Information on shipping fee by country</p>
                    <table class="tooltip-table">
                      <caption>Shipping fee info</caption>
                      <colgroup>
                        <col style="width:auto;">
                        <col style="width:183px;">
                      </colgroup>
                      <thead>
                        <tr>
                          <th>Shipping Fee</th>
                          <th>Country</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>￦ 10,000</td>
                          <td class="td0">Mainland China, Hong Kong, Japan, Taiwan, Singapore, Vietnam, Malaysia, Indonesia, Brunei, Thailand, Philippines, Bangladesh, India</td>
                        </tr>
                        <tr>
                          <td>￦ 20,000</td>
                          <td class="td0">Other countries</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </template>
                </CommonTooltipBox>
              </div>
              <p class="price"><em>￦</em><strong>0</strong></p>
            </div>
            <div class="price-total-info">
              <p class="tit">Final Payment Price</p>
              <p class="price">
                <em>￦</em><strong>1,960,000</strong><br>
                (<em>$</em><strong class="price2">1,505.38</strong>)
              </p>
            </div>
            <div class="price-agree-info">
              <p class="txt">Price in USD is just for your reference and it may vary by currency exchange rate. Your payment transaction will be in KRW</p>
              <dl class="txt-cnt">
                <dt>Guide of consent to purchase</dt>
                <dd>By completing your order, you agree to The Handsome.com's Terms of Use and Privacy Policy.</dd>
              </dl>
              <nuxt-link to="#n" class="cmp-font fnt-16 button">
                Duty/Tax GUIDEDuty/Tax GUIDE
                <i v-cmp-icon="{size:16,name:'next'}">open</i>
              </nuxt-link>
            </div>
            <div class="price-btn">
              <v-btn large block color="primary" :disabled="false">Make Payment<em>￦</em><strong>1,960,000</strong></v-btn>
            </div>
          </div>
        </div>
        <!-- // 금액/주문 -->
      </div>
    </div>                                                  
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  layout: 'LayoutBasics',
  data() {
    return {
      topNotice : true, // 상단공지
      prdList: [
        {
          brand_name: 'MINE',
          product_name: 'Sequin emblem cardigan',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/001.jpg',
          options: ['BURGUNDY', '90', '2'],
          sell_price: '251300',
          sell_price_en : '199.83',
          discount: '30',
          price: '359000',
          price_en : '285.37',
        },
        {
          brand_name: 'SYSTEM HOMME',
          product_name: 'open collar banding hem top',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/002.jpg',
          options: ['KAHKO', '90', '1'],
          sell_price: '425000',
          sell_price_en : '335.7',
          discount: null,
          price: null,
          price_en : null,
        },
      ],
      eventBanner : [ // 이벤트 배너
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/shoppingbag-banner-en.png',
          desc : 'SYSTEM HOMME SPORT-LIGHT ON TIME HOMME CHECK OUT NOW',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/shoppingbag-banner-en.png',
          desc : 'SYSTEM HOMME SPORT-LIGHT ON TIME HOMME CHECK OUT NOW',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/shoppingbag-banner-en.png',
          desc : 'SYSTEM HOMME SPORT-LIGHT ON TIME HOMME CHECK OUT NOW',
          link : '#n',
        },
      ],
      overseasPayment:[ // 해외 결제
        {
          id : 'credit',
          value : 'credit',
          name : 'CREDIT CARD / DEBIT CARD',
          image : '/images/payment/ico-credit.png',
        },
        {
          id : 'alipay',
          value : 'alipay',
          name : 'ALIPAY',
          image : '/images/payment/ico-alipay.png',
        },
        {
          id : 'wechatpay',
          value : 'wechatpay',
          name : 'WECHATPAY',
          image : '/images/payment/ico-wechatpay.png',
        },
        {
          id : 'paypal',
          value : 'paypal',
          name : 'PAYPAL',
          image : '/images/payment/ico-paypal.png',
        },
      ],
      paymentSelected : 'bc-card', //
    }
  },
  created() {
    
  },
  methods: {
    
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/order.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
@import '@/assets/scss/en/en.scss'; // 글로벌 en scss
</style>
