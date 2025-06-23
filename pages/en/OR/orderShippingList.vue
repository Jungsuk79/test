<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <CommonContentsLeftMenu :title="'My Page'" :url="'/json/mypage_left_menu_en.json'" :active="'/en/en/OR/orderShippingList'"></CommonContentsLeftMenu>
      <div class="my-page-r-box"><!-- 마이페이지 -->
        <div class="cmp-page-tit">
          <h2 class="tit">Order Check</h2>
        </div>
        <!-- 상단 공지 -->
        <div v-if="topNotice" class="cmp-info top-notice mb-30">
          <p class="txt">Expose emergency announcement info message for Shipping Address. It is managed in BO. Process so that many lines</p>
          <v-btn icon small class="del" @click="topNotice = false">
            <i v-cmp-icon="{ size: 18, name: 'close', invert: 1 }">닫기</i>
          </v-btn>
        </div>
        <!--// 상단 공지 -->

        <!-- 날짜 검색 -->
        <v-layout row align-center justify-space-between class="pb-30">
          <div class="cmp-line-radio">
            <div class="radio-item">
              <input id="dateRadio0" type="radio" name="dateRadio" checked />
              <label for="dateRadio0">1 week</label>
            </div>
            <div class="radio-item">
              <input id="dateRadio1" type="radio" name="dateRadio" />
              <label for="dateRadio1">1 month</label>
            </div>
            <div class="radio-item">
              <input id="dateRadio2" type="radio" name="dateRadio" />
              <label for="dateRadio2">3 months</label>
            </div>
          </div>
          <CommonCalendarBox :d1="'2022-07-20'" :d2="'2022-07-28'"/>
        </v-layout>
        <!-- // 날짜 검색 -->

        <!-- 상품 테이블 --> 
        <div class="product-row-table">
          <table>
            <caption>product list</caption>
            <colgroup>
              <col style="width:165px;"/>
              <col style="width:auto;"/>
              <col style="width:116px;"/>
              <col style="width:94px;"/>
              <col style="width:210px;"/>
            </colgroup>
            <thead>
              <tr>
                <th>Order No.</th>
                <th>Product Information</th>
                <th>Price</th>
                <th>Status</th>
                <th>Check&#47;Request</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, index) in serchOrder">
                <tr :key="index">
                  <td :rowspan="2" class="pw-16">
                    <nuxt-link class="cmp-font button" :to="item.order_link"><span class="line">{{item.order_id}}</span></nuxt-link>
                    <p class="cmp-font fnt-14 mt-4">{{item.order_date}}</p>
                  </td>
                </tr>
                <tr :key="index+'1'">
                  <td colspan="4" class="inside-table pw-0">
                    <table v-for="(item2,index2) in item.prod_list" :key="index2">
                      <colgroup>
                        <col style="width:auto;"/>
                        <col style="width:116px;"/>
                        <col style="width:94px;"/>
                        <col style="width:210px;"/>
                      </colgroup>
                      <tbody>
                        <tr :class="{'bottom-none':item2.notice!==null}">
                          <td class="pw-0">
                            <nuxt-link :to="item2.link" class="product-row-unitInfo">
                              <div class="product-image" :class="{'sold-out':item.sold_out}">
                                <v-img :src="item2.image" :alt="item.product_name" />
                                <div v-if="item2.sold_out" class="sold-out-txt">SOLD OUT</div>
                              </div>
                              <div class="product-info-cnt">
                                <div class="product-brand">{{item2.brand_name}}</div>
                                <div class="product-name">{{item2.product_name}}</div>
                                <div v-if="item2.options" class="product-option">
                                  <span v-for="(item3,index3) in item2.options" :key="index3" class="option">{{item3}}</span>
                                </div>
                              </div>
                            </nuxt-link>
                          </td>
                          <td class="pw-0">
                            <nuxt-link :to="item2.link" class="product-row-unitPrice">
                              <div class="product-sellprice">￦<strong>{{item2.sell_price | number}}</strong></div>
                              <div v-if="item2.price || item.discount" class="product-price-cnt">
                                <del class="product-price-origin"><span class="mr-2">￦</span>{{item2.price | number}}</del>
                                <span class="product-discount">{{item2.discount}}<em>%</em></span>
                              </div>
                            </nuxt-link>
                          </td>

                          <td class="pw-0">
                            <div v-if="index == 0 & index2 == 0" class="cmp-font c-blue">Order<br />Completed</div><!-- 주문완료 CASE -->
                            <div v-if="index == 1 & index2 == 0" class="cmp-font c-blue">Delivery<br />in Progress</div><!-- 배송중 CASE -->
                            <div v-if="index == 1 & index2 == 1" class="cmp-font c-blue">Product under<br />preparation</div><!-- 상품준비중 CASE -->
                            <div v-if="index == 1 & index2 == 2" class="cmp-font">Delivery<br />Completed</div><!-- 배송완료 CASE -->
                            <div v-if="index == 2"><!-- 반품 요청 접수 CASE -->
                              <p class="cmp-font c-blue">Return request<br />received</p>
                              <p class="cmp-font c-gray">15 Jun. 2022</p>
                            </div>
                            <div v-if="index == 3" class="cmp-font"><!-- 주문 취소 CASE -->
                              <p class="cmp-font">Order<br />canceled</p>
                              <p class="cmp-font c-gray">15 Jun. 2022</p>
                            </div>
                            <div v-if="index == 4"><!-- 반품 진행 중 CASE -->
                              <p class="cmp-font c-blue">Return in<br />progress</p>
                              <p class="cmp-font c-gray">15 Jun. 2022</p>
                            </div>
                            <div v-if="index == 5"><!-- 반품 완료 CASE -->
                              <p class="cmp-font">Return<br />completed</p>
                              <p class="cmp-font c-gray">15 Jun. 2022</p>
                            </div>
                          </td>

                          <td class="pw-16">
                            <div v-if="index == 0 & index2 == 0" class="product-row-unitBtn"><!-- 주문완료 CASE -->
                              <v-btn outlined small width="178px" color="normal">Cancel Order</v-btn>
                              <v-btn outlined small width="178px" color="normal">Change Option</v-btn>
                            </div>
                            <div v-if="index == 1 & index2 == 0" class="product-row-unitBtn"><!-- 배송중 CASE -->
                              <v-btn outlined small width="178px" color="normal">Shipping Check</v-btn>
                              <v-btn outlined small width="178px" color="normal">Delivery Completed</v-btn><!-- CON-GP-09 - messagePopup.vue 에서 확인 가능 -->
                            </div>
                            <!-- 상품준비중 CASE 버튼 없음 -->
                            <div v-if="index == 1 & index2 == 2" class="product-row-unitBtn"><!-- 배송완료 CASE -->
                              <v-btn outlined small width="178px" color="normal">Shipping Check</v-btn>
                              <v-btn outlined small width="178px" color="normal">Write a Review</v-btn>
                              <v-btn outlined small width="178px" color="normal">Request for Return</v-btn>
                            </div>
                            <div v-if="index == 2" class="product-row-unitBtn"><!-- 반품 요청 접수 CASE -->
                              <v-btn outlined small width="178px" color="normal">Cancel Order</v-btn>
                              <v-btn outlined small width="178px" color="normal">Return Details</v-btn>
                            </div>

                            <div v-if="index == 3" class="product-row-unitBtn"><!-- 주문 취소 CASE -->
                              <v-btn outlined small width="178px" color="normal">Cancel Details</v-btn>
                            </div>
                            <div v-if="index == 4" class="product-row-unitBtn"><!-- 반품 진행 중 CASE -->
                              <v-btn outlined small width="178px" color="normal">Return Details</v-btn>
                              <v-btn outlined small width="178px" color="normal">Shipping Check</v-btn>
                            </div>
                            <div v-if="index == 5" class="product-row-unitBtn"><!-- 반품 완료 CASE -->
                              <v-btn outlined small width="178px" color="normal">Return Details</v-btn>
                              <v-btn outlined small width="178px" color="normal">Shipping Check</v-btn>
                            </div>
                          </td>
                        </tr>

                        <tr v-if="item2.notice">
                          <td colspan="4" class="td-l pw-0">
                            <div class="product-row-unitNotice">
                              <ul class="product-notice">
                                <!-- eslint-disable -->
                                <li v-for="(item3, index3) in item2.notice" v-html="item3"></li>
                                <!-- eslint-disable -->
                              </ul>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </template>
              <tr>
                <td colspan="6" class="pw-0 pt-0 pb-0">
                  <CommonNoData msg="There are no order details yet.<br />Would you like to check the products in your shopping bag?">
                    <template #button>
                      <v-btn outlined large color="primary" class="mt-60" to="#n">Go to Shopping Bag</v-btn>
                    </template>
                  </CommonNoData>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //상품 테이블 --><!-- // [퍼블수정]22.10.25 글로벌 기획수정 반영 -->

        <ProductListPaging />

        <div class="btm-notice">
          <h2 class="article-title">Order check guide</h2>
          <ul class="cmp-dotList">
            <li>Request for return can be made up to 7 days after delivery.</li>
            <li>Order cancellation and change of option/address are not possible while product is being prepared.</li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
  },
  layout: 'LayoutBasics',
  data() {
    return {
        topNotice: true,
        applyNext : true,
        applyPreocess : false,
        applyComplete : false,
        drawer: null,
        serchOrder: [
          // 주문 조회 데이터
          {
            order_id:'202110225600000',
            order_link: '#n',
            order_date: '15 Jun. 2022 13:43',
            prod_list:[
              {
                brand_name: 'LANVIN COLLECTION',
                product_name: 'Double Breasted Cropped Jacket',
                image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
                options: ['CHARCOAL GRAY', '90', '2'],
                sell_price: '355000',
                discount: '20',
                price: '366000',
                link: '#n',
                notice: null,
                sold_out: false,
                zzim : false,
                request_date: '15 Jun. 2022',
              }
            ]
          },
          {
            order_id:'202110225600001',
            order_link: '#n',
            order_date: '15 Jun. 2022 13:43',
            prod_list:[
              {
                brand_name: 'TIME',
                product_name: '[Signature] Two Tuck Loose Pants',
                image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
                options: ['BLACK', '90', '2'],
                sell_price: '355000',
                link: '#n',
                notice: null,
                sold_out: false,
                zzim : false,
              },
              {
                brand_name: 'orea',
                product_name: 'Blue Mineral Sun Cream SPF30',
                image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img2.png',
                options: ['MULTI', 'FR', '1'],
                sell_price: '355000',
                link: '#n',
                notice: null,
                sold_out: false,
                zzim : false,
              },
              {
                brand_name: 'LANVIN COLLECTION',
                product_name: 'Cashmere strap knit gloves',
                image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img3.png',
                options: ['BLACK', '90', '2'],
                sell_price: '355000',
                link: '#n',
                notice: null,
                sold_out: false,
                zzim : false,
              },
            ]
          },
          {
            order_id:'202110225600004',
            order_link: '#n',
            order_date: '15 Jun. 2022 13:43',
            prod_list:[
              {
                brand_name: 'FOURM MEN’S LOUNGE',
                product_name: 'Seersucker Baseball Cap',
                image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
                options: ['BLACK', '90', '2'],
                sell_price: '355000',
                link: '#n',
                notice: null,
                sold_out: false,
                zzim : false,
              }
            ]
          },
          {
            order_id:'202110225600004',
            order_link: '#n',
            order_date: '15 Jun. 2022 13:43',
            prod_list:[
              {
                brand_name: 'MINE',
                product_name: 'Texture Block Sneakers',
                image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img3.png',
                options: ['BLACK', '90', '2'],
                sell_price: '355000',
                link: '#n',
                notice: null,
                sold_out: false,
                zzim : false,
              }
            ]
          },
          {
            order_id:'202110225600007',
            order_link: '#n',
            order_date: '15 Jun. 2022 13:43',
            prod_list:[
              {
                brand_name: 'MINE',
                product_name: 'Back Button High Neck T-Shirt',
                image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
                options: ['BLACK', '90', '2'],
                sell_price: '355000',
                link: '#n',
                notice: null,
                sold_out: false,
                zzim : false,
              }
            ]
          },
          {
            order_id:'202110225600004',
            order_link: '#n',
            order_date: '15 Jun. 2022 13:43',
            prod_list:[
              {
                brand_name: 'FOURM MEN’S LOUNGE',
                product_name: 'Seersucker Baseball Cap',
                image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
                options: ['BLACK', '90', '2'],
                sell_price: '355000',
                link: '#n',
                notice: null,
                sold_out: false,
                zzim : false,
              }
            ]
          },
        ],
      tabs: 0,
    }
  },
  created() {
  },
  methods: {
    applyNextBtn(){
      this.applyNext = false
      this.applyPreocess = true
      window.location.href = '#inner';
    },
    applyCompleteBtn(){
      this.applyPreocess = false
      this.applyComplete = true
      window.location.href = '#inner';
    },
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/order.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
@import '@/assets/scss/en/en.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>