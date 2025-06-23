<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="cmp-page-tit">
        <h2 class="tit">Shopping Bag</h2>
      </div>
      <div class="order-content-box">
        <v-layout v-if="deliveryList.length > 0" row align-center justify-space-between class="mb-10">
          <v-checkbox label="Select 5" class="cmp-form-checkbox"></v-checkbox>
          <button class="cmp-font fnt-14"><span class="line">Delete Selected</span></button>
        </v-layout>
        <div class="product-row-table">
          <!-- 상품 있을 때 -->
          <table v-if="deliveryList.length > 0">
            <caption>상품리스트</caption>
            <colgroup>
              <col style="width:26px;"/>
              <col style="width:auto;"/>
              <col style="width:230px;"/>
              <col style="width:210px;"/>
              <col style="width:50px;"/> 
            </colgroup>
            <thead>
              <tr>
                <th class="pw-0"><span class="ir">select</span></th>
                <th>Product information</th>
                <th>Price</th>
                <th class="pw-16">Select</th>
                <th class="pw-0"><span class="ir">delete/wish</span></th>
              </tr>
            </thead>
            <tbody>
              <!-- 상품리스트 -->
              <template v-for="(item, index) in deliveryList">
                <tr :key="index">
                  <td class="td-t pw-0"><v-checkbox label="선택" class="cmp-form-checkbox label-hide"></v-checkbox></td>
                  <td class="pw-0">
                    <nuxt-link :to="item.link" class="product-row-unitInfo or-prd-type"><!-- 230105 상품이미지 : or-prd-type 클래스 추가 -->
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
                    </nuxt-link>
                  </td>
                  <td class="pw-16">
                    <v-btn v-if="item.sold_out" outlined small color="normal" width="178">How about this product?</v-btn>
                    <div v-else class="product-row-unitBtn">
                      <v-btn outlined small color="normal" width="178">Change Option</v-btn>
                      <v-btn small color="primary" width="178">Buy Now</v-btn>
                    </div>
                  </td>
                  <td class="pw-0">
                    <div class="product-row-unitBtn">
                      <v-btn icon>
                        <span v-cmp-icon="{ size: 18, name: 'close'}">delete</span>
                      </v-btn>
                      <button class="zzim-btn" :class="{on:item.zzim}" @click="item.zzim = !item.zzim"><span class="ir">wish</span></button>
                    </div>
                  </td>
                </tr>
              </template>
              <!-- //상품리스트 -->
            </tbody>
          </table>
          <!-- 상품 없을 때 -->
          <CommonNoData v-else msg="There are no products in the shopping bag."/>
        </div>
        
        <!-- 배너 -->
        <div class="mt-40">
          <Swiper 
            :options="{
              loop: true,
              autoplay: {
                delay: 5000,
              },
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

        <!-- 쇼핑백 이용안내 -->
        <v-expansion-panels accordion class="cmp-acc acc-type2 mt-40">
          <v-expansion-panel>
            <v-expansion-panel-header>
              Shopping Bag Guide
              <template #actions>
                <i class="cmp-icon-etc cmp-icon-down">open/close</i>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <ul class="cmp-dotList">
                <li>Items added to the Shopping Bag will be stored for 30 days. Items stored over 30 days to be deleted automatically. Add items that you want to keep for a long time to the Wish List.</li>
                <li>Maximum 50 items can be added to the Shopping Bag, and its price and benefits may change according to the time of purchasing.</li>
                <li>Sold-out items in the Shopping Bag to be deleted automatically.</li>
                <li>Coupons can be applicable in the stage of shipping &amp; payment information.</li>
                <li>If you want domestic delivery, please use the Korean language service of the Handsome.com.</li>
              </ul>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- //쇼핑백 이용안내-->

        <!-- 금액/주문 -->
        <div class="order-price-box">
          <div class="price-sticky-box">
            <h3 class="box-tit">Total 1</h3>
            <div class="price-total-info bd-none">
              <p class="tit">Product Total</p>
              <p class="price">
                <em>￦</em><strong>530,000</strong><br>
                (<em>$</em><strong class="price2">404.33</strong>)
              </p>
            </div>
            <div class="price-btn">
              <v-btn large block color="primary">Order</v-btn>
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
      deliveryList: [ // 택배 리스트
        {
          brand_name: 'MINE',
          product_name: 'Sequin emblem cardigan',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
          options: ['BLACK', '90', '2'],
          sell_price: '284000',
          sell_price_en : '199.83',
          discount: '20',
          price: '355000',
          price_en : '285.47',
          link: '#n',
          sold_out: false,
          zzim : false,
        },
        {
          brand_name: 'FOURM MEN’S LOUNGE',
          product_name: '[BEARBRICK] one tuck wide pants',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
          options: ['CHARCOAL GRAY', '90', '1'],
          sell_price: '284000',
          sell_price_en : '199.83',
          discount: null,
          price: null,
          price_en : null,
          link: '#n',
          sold_out: false,
          zzim : false,
        },
        {
          brand_name: 'TIME',
          product_name: 'Sequin emblem cardigan',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img2.png',
          options: ['BURGUNDY', '90', '2'],
          sell_price: '284000',
          sell_price_en : '199.83',
          discount: '20',
          price: '355000',
          price_en : '285.47',
          link: '#n',
          sold_out: true,
          zzim : false,
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
