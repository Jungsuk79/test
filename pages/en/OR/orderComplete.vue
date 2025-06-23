<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="cmp-page-tit">
        <h2 class="tit">Order Completed</h2>
      </div>
      <!-- 주문완료 상단 -->
      <div class="order-complete-top">
        <i class="cmp-icon-etc cmp-icon-120 i-order"></i>
        <p class="txt">Kim Han-seom’s order has been completed.</p>
      </div>
      <!-- //주문완료 상단 -->

      <!-- 주문번호 -->
      <div class="order-number-box mb-34">
        <div class="line-box">
          <p class="cmp-font">Order No.<span class="ml-8">211222P12345678</span></p>
          <p class="cmp-font fnt-14">01 May 2022</p>
        </div>
      </div>
      <!-- //주문번호 -->

      <!-- 주문상품 리스트 -->
      <div class="cmp-sub-tit small mb-10">
        <h3 class="tit">Ordered Product Total {{prdList.length}}</h3>
      </div>
      <div class="product-row-table or-complete-type">
        <table>
          <caption>Ordered Product List</caption>
          <colgroup>
            <col style="width:50%;"/>
            <col style="width:50%;"/>
          </colgroup>
          <thead>
            <tr>
              <th>Product information</th>
              <th>Price</th>
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
        </div>
        <v-layout row align-center justify-start>
          <p class="cmp-label-line c-blue mr-10">Default</p>
          <p class="cmp-font">KIMHANDSOME / 010-1234-5678</p>
        </v-layout>
        <p class="cmp-font mt-6">[95014] HANDSOME B/D 523, Dosan-daero, Gangnam-gu, Seoul, Korea</p>
      </div>
      <!-- //배송지 -->
      
      <!-- 결제 정보 -->
      <div class="cmp-sub-tit line mt-60">
        <h3 class="tit">Payment Information</h3>
      </div>
      <p class="cmp-font fnt-18 mt-24"><strong class="bold">CREDIT CARD / DEBIT CARD</strong> / VISA</p>
      <div class="refund-box pd-type2 no-line mt-26">
        <ul class="cust">
          <li>
            <p class="cmp-font fnt-14 mb-6">Product price</p>
            <p class="cmp-font fnt-20"><span class="mr-2">￦</span>910,000</p>
          </li>
          <li class="sign minus"></li>
          <li>
            <p class="cmp-font fnt-14 mb-6">Discount</p>
            <p class="cmp-font fnt-20"><span class="mr-2">￦</span>21,000</p>
          </li>
          <li class="sign plus"></li>
          <li>
            <p class="cmp-font fnt-14 mb-6">Shipping fee</p>
            <p class="cmp-font fnt-20"><span class="mr-2">￦</span>10,000</p>
          </li>
          <li class="sign equal"></li>
          <li>
            <p class="cmp-font fnt-14 mb-6">Payment Amount</p>
            <p class="cmp-font fnt-20"><span class="mr-2">￦</span>892,000<span class="cmp-font fnt-14 ml-2">(Lump sum)</span></p>
          </li>
        </ul>
      </div>
      <!-- //결제정보 -->

      <v-layout justify-center class="cmp-btnsArea flex-auto mt-34">
        <v-btn outlined large color="primary">Continue shopping</v-btn>
        <v-btn large color="primary">Order details</v-btn>
      </v-layout>
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    // Swiper,
    // SwiperSlide,
  },
  layout: 'LayoutBasics',
  data() {
    return {
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
