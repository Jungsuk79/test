<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/OR/guide/Structure 참고 -->
    <div class="content-wrap">
      <CommonContentsLeftMenu :title="'My Page'" :url="'/json/mypage_left_menu_en.json'" :active="'/en/en/OR/orderShippingList'"></CommonContentsLeftMenu>
      <div class="my-page-r-box"><!-- 마이페이지 -->
        <div class="cmp-page-tit">
          <h2 class="tit">Order Details</h2>
        </div>

        <div class="order-number-box no-line">
          <div class="line-box">
            <p class="cmp-font">Order No.<span class="ml-8">211222P12345678</span></p>
            <p class="cmp-font fnt-14">15 Jun. 2022 13:00</p>
          </div>
        </div>

        <!-- 상품 정보 --> 
        <div class="product-row-table">
          <table>
            <caption>product list</caption>
            <colgroup>
              <col style="width:auto;"/>
              <col style="width:248px;"/>
              <col style="width:128px;"/>
              <col style="width:210px;"/>
            </colgroup>
            <thead>
              <tr>
                <th>Product Information</th>
                <th>Price</th>
                <th>Status</th>
                <th>Check&#47;Request</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, index) in prdDetailData">
                <tr :key="index" :class="{'bottom-none':item.notice!==null || item.reason!==null}">
                  <td class="pw-0 ">
                    <nuxt-link :to="item.link" class="product-row-unitInfo">
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
                      <div class="product-sellprice">￦<strong>{{item.sell_price | number}}</strong></div>
                      <div v-if="item.price || item.discount" class="product-price-cnt">
                        <del class="product-price-origin"><span class="mr-2">￦</span>{{item.price | number}}</del>
                        <!-- eslint-disable -->
                        <span class="product-discount">{{item.discount}}<em>%</em></span>
                        <!-- eslint-disable -->
                      </div>
                    </nuxt-link>
                  </td>
                  <td class="pw-0">
                    <div v-if="index == 0" class="cmp-font c-blue">Product under<br />preparation</div><!-- 상품 준비중 CASE -->
                    <div v-if="index == 1" class="cmp-font c-blue">Delivery<br />in Progress</div><!-- 배송중 CASE -->
                    <div v-if="index == 2" class="cmp-font c-blue">Order<br />Completed</div><!-- 주문완료 CASE -->
                    <div v-if="index == 3"><!-- 반품요청 CASE -->
                      <p class="cmp-font c-blue">Request<br />for Return</p>
                      <p class="cmp-font c-gray">15 Jun. 2022</p>
                    </div>
                    <div v-if="index == 4" class="cmp-font">Delivery<br />Completed</div><!-- 배송완료 CASE -->
                    <div v-if="index == 5"><!-- 주문취소 CASE -->
                      <p class="cmp-font c-blue">Order canceled</p>
                      <p class="cmp-font c-gray">15 Jun. 2022</p>
                    </div>
                    <div v-if="index == 6"><!-- 반품완료 CASE -->
                      <p class="cmp-font">Return completed</p>
                      <p class="cmp-font c-gray">15 Jun. 2022</p>
                    </div>
                  </td>
                  <td class="pw-16">
                    <div v-if="index == 1" class="product-row-unitBtn"><!-- 배송중 CASE -->
                      <v-btn outlined small width="178px" color="normal">Shipping Check</v-btn>
                      <v-btn outlined small width="178px" color="normal">Delivery Completed</v-btn>
                    </div>
                    <div v-if="index == 2" class="product-row-unitBtn"><!-- 주문완료 CASE -->
                      <v-btn outlined small width="178px" color="normal">Cancel Order</v-btn>
                      <v-btn outlined small width="178px" color="normal">Change Option</v-btn>
                    </div>
                    <div v-if="index == 3" class="product-row-unitBtn"><!-- 반품요청 CASE -->
                      <v-btn outlined small width="178px" color="normal">Cancel Order</v-btn>
                      <v-btn outlined small width="178px" color="normal">Return Details</v-btn>
                    </div>
                    <div v-if="index == 4" class="product-row-unitBtn"><!-- 배송완료 CASE -->
                      <v-btn outlined small width="178px" color="normal">Shipping Check</v-btn>
                      <v-btn outlined small width="178px" color="normal">Write a Review</v-btn>
                      <v-btn outlined small width="178px" color="normal">Request for Return</v-btn>
                    </div>
                    <div v-if="index == 5" class="product-row-unitBtn"><!-- 주문취소 CASE -->
                      <v-btn outlined small width="178px" color="normal">Cancel Details</v-btn>
                    </div>
                    <div v-if="index == 6" class="product-row-unitBtn"><!-- 반품완료 CASE -->
                      <v-btn outlined small width="178px" color="normal">Return Details</v-btn>
                      <v-btn outlined small width="178px" color="normal">Shipping Check</v-btn>
                    </div>
                  </td>
                </tr>
                <tr v-if="item.notice || item.reason">
                  <td colspan="4" class="td-l pw-0" :class="{'pb-0' : item.gift_list}">
                    <ul class="cmp-info list-type1">
                      <li class="cmp-font fnt-14">
                        <p v-if="item.reason">
                          <b v-if="index == 5" class="mr-10">Reason for cancellation :</b><!-- 주문취소 CASE -->
                          <b v-if="index == 6" class="mr-10">Reason for return :</b><!-- 반품완료 CASE -->
                          <span v-for="(item2, index2) in item.reason" v-html="item2"></span>
                        </p>
                        <span v-for="(item2, index2) in item.notice" v-html="item2"></span>
                      </li>
                    </ul>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <!-- 상품 정보 --> 

        <!-- 회수지 정보 -->
        <div class="cmp-sub-tit col line mt-60">
          <h3 class="tit">Shipping Address Info</h3>
        </div>
        <div class="return-info no-tit no-bt">
          <div class="box">
            <dl class="box-tit">
              <dd class="txt">Thehanseom / 080-2223-2332 / aaa@naver.com</dd> 
              <dd class="btn"><button class="cmp-font fnt-13 button"><span class="line">Modify Info</span></button></dd>
            </dl>
            <dl class="pack-info mt-0">
              <dt class="tit">address</dt>
              <dd class="txt pb-0 pt-6">[95014] HANDSOME B/D 523, Dosan-daero, Gangnam-gu, Seoul, Korea</dd>
            </dl>
          </div>
        </div>
        <!-- // 회수지 정보 -->

        <!-- 초기 결제 정보 --> 
        <div class="cmp-sub-tit col mt-60">
          <h3 class="tit">Initial Payment Info</h3>
        </div>
        <!-- <div class="return-info no-bb no-bb">
          <div class="box">
            <dl class="box-tit">
              <dt class="tit cmp-font fnt-18"><b>Credit Card</b> &#47; American Express</dt>
            </dl>
          </div>
        </div> -->
        <div class="refund-box">
          <ul class="cust card-info-box btm-more">
            <li>
              <p class="cmp-font fnt-14 mb-6">Product Price</p>
              <p class="cmp-font fnt-20"><span class="mr-2">￦</span>910,000</p>
            </li>
            <li class="sign minus"></li>
            <li>
              <p class="cmp-font fnt-14 mb-6">Discounts</p>
              <p class="cmp-font fnt-20"><span class="mr-2">￦</span>21,000</p>
            </li>
            <li class="sign plus"></li>
            <li>
              <p class="cmp-font fnt-14 mb-6">Shipping fee</p>
              <p class="cmp-font fnt-20"><span class="mr-2">￦</span>0</p>
            </li>
            <li class="sign equal"></li>
            <li>
              <p class="cmp-font fnt-14 mb-6">Final Payment</p>
              <p class="cmp-font fnt-20"><span class="mr-2">￦</span>892,000</p>
              <div class="card-info"><b>Credit Card</b> / American Express<p class="mt-2">Lump sum</p></div>
            </li>
          </ul>
          <div class="cmp-info info-type2">
            <span class="tit">Discounts</span>
            <dl>
              <dt>Coupon Discounts</dt>
              <dd>-<span class="ml-2 mr-2">￦</span>50,000</dd>
            </dl>
          </div>
        </div>
        <!-- 초기 결제 정보 --> 

        <!-- 최종 환불 정보 취소&반품 시 노출--> 
        <div class="cmp-sub-tit col mt-60">
          <h3 class="tit">Final refund information</h3>
        </div>
        <!-- <div class="return-info no-bb no-bb">
          <div class="box">
            <dl class="box-tit">
              <dt class="tit cmp-font fnt-18"><b>Credit Card</b> &#47; American Express</dt>
            </dl>
          </div>
        </div> -->
        <div class="refund-box">
          <ul class="cust card-info-box">
            <li>
              <p class="cmp-font fnt-14 mb-6">Payment of Cancelled/<br />Return Product</p>
              <p class="cmp-font fnt-20"><span class="mr-2">￦</span>300,000</p>
            </li>
            <li class="sign minus"></li>
            <li>
              <p class="cmp-font fnt-14 mb-6">Deduction from<br />Refund Amount</p>
              <p class="cmp-font fnt-20"><span class="mr-2">￦</span>6,000</p>
            </li>
            <li class="sign equal"></li>
            <li>
              <p class="cmp-font fnt-14 mb-6">Final Refund<br />Amount</p>
              <p class="cmp-font fnt-20"><span class="mr-2">￦</span>294,000</p>
              <div class="card-info"><b>Credit Card</b> / American Express</div>
            </li>
          </ul>
          <div class="cmp-info info-type2">
            <span class="tit">Deduction from Refund Amount</span>
            <dl>
              <dt>Refund Shipping Fee</dt>
              <dd>-<span class="ml-2 mr-2">￦</span>6,000</dd>
            </dl>
          </div>
          <!-- <div class="cmp-info info-type2 mt-10">
            <span class="tit">Final Refund Amount</span>
            <dl>
              <dt><b>Credit Card</b> / American Express</dt>
              <dd><span class="mr-2">￦</span>270,000</dd>
            </dl>
          </div> -->
        </div>
        <!-- 최종 환불 정보 취소&반품 시 노출 --> 
        <!-- 복원 예정 쿠폰 [퍼블수정] 22.11.28 수정 -->
        <div class="return-info no-tit no-bt bb-bold">
          <div class="box">
            <dl class="pack-info">
              <dd class="txt cmp-font fnt-16 pb-6">Restored coupon</dd>
            </dl>
            <dl class="pack-info">
              <dd>
                <ul class="bold-cpn">
                  <li>None</li>
                </ul>
                <ul class="cmp-dotList">
                  <li>The coupon applied when ordering is a coupon that cannot be restored upon cancellation/return.</li>
                </ul>
              </dd>
            </dl>
          </div>
        </div>
        <div class="return-info no-tit no-bt bb-bold">
          <div class="box">
            <dl class="pack-info">
              <dd class="txt cmp-font fnt-16 pb-6">Restored coupon</dd>
            </dl>
            <dl class="pack-info">
              <dd>
                <ul class="bold-cpn">
                  <li>November New Member Welcome Voucher (10%)</li>
                </ul>
                <ul class="cmp-dotList">
                  <li>Restored coupon can be reused.<br />For detailed period of use, please check <nuxt-link class="cmp-font fnt-14 button" to="#n"><span class="line">My Page &#47; Coupons.</span></nuxt-link></li>
                </ul>
              </dd>
            </dl>
          </div>
        </div>
        <div class="return-info no-tit no-bt bb-bold">
          <div class="box">
            <dl class="pack-info">
              <dd class="txt cmp-font fnt-16 pb-6">Restored coupon</dd>
            </dl>
            <dl class="pack-info">
              <dd>
                <ul class="bold-cpn">
                  <li>November New Member Welcome Voucher (10%)</li>
                  <li>November New Member Welcome Voucher (7%)</li>
                </ul>
                <ul class="cmp-dotList">
                  <li>Restored coupon can be reused.<br />For detailed period of use, please check <nuxt-link class="cmp-font fnt-14 button" to="#n"><span class="line">My Page &#47; Coupons.</span></nuxt-link></li>
                </ul>
              </dd>
            </dl>
          </div>
        </div>
        <!-- // 복원 예정 쿠폰 [퍼블수정] 22.11.28 수정 -->

        <!-- 환불 안내 -->
        <v-expansion-panels accordion class="cmp-acc acc-type2">
          <v-expansion-panel v-for="(item, index) in cmpAccList" :key="index">
            <v-expansion-panel-header class="cmp-font fnt-16">{{ item.text }}
              <template #actions>
                <i class="cmp-icon-etc cmp-icon-down">열기/닫기</i>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div v-for="(contItem,contIndex) in item.cont" :key="contIndex">
                <p v-if="contItem.tit" class="cmp-font" :class="[{'mt-12':  contIndex == 1}, 'mb-6']">{{contItem.tit}}</p>
                <ul :class="[(contItem.listType ? '' : 'cmp-dotList'), {'dash-n-tab':contItem.listType_dash}]">
                  <li v-for="(txtItem,txtIndex) in contItem.txt" :key="txtIndex" v-html="newLine(txtItem)" class="cmp-font fnt-14"></li>
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

export default {
  components: {
    // Swiper,
    // SwiperSlide,
  },
  layout: 'LayoutBasics',
  data() {
    return {
      user_name: '김한섬',
      applyNext : true,
      applyPreocess : false,
      applyComplete : false,
      drawer: null,
      MarketTicketModel : [{open : false},{open : false}],
      prdDetailData: [
        // 상품 상세 데이터
        {
          brand_name: 'orea',
          product_name: 'Blue Mineral Sun Cream SPF30',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img2.png',
          options: ['MULTI', 'FR', '1'],
          sell_price: '355000',
          discount: null,
          price: null,
          link: '#n',
          reason: null,
          notice: ['Delivery delay expected due to product supply and demand.'],
          sold_out: false,
          zzim : false,
        },
        {
          brand_name: 'CLUB MONACO',
          product_name: 'Seersucker Baseball Cap',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
          options: ['BLACK', '90', '2'],
          sell_price: '355000',
          discount: '20',
          price: '366000',
          link: '#n',
          reason: null,
          notice: null,
          sold_out: false,
          zzim : false,
        },
        {
          brand_name: 'TIME',
          product_name: '[Signature] Two Tuck Loose Pants',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
          options: ['KAHKI', '90', '1'],
          sell_price: '29000',
          link: '#n',
          reason: null,
          notice: null,
          sold_out: false,
          zzim : false,
        },
        {
          brand_name: 'CLUB MONACO',
          product_name: 'Seersucker Baseball Cap',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img3.png',
          options: ['BLACK', '90', '2'],
          sell_price: '355000',
          discount: '20',
          price: '366000',
          link: '#n',
          reason: null,
          notice: null,
          sold_out: false,
          zzim : false,
        },
        {
          brand_name: 'TIME',
          product_name: '[Signature] Two Tuck Loose Pants',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
          options: ['KAHKI', '90', '1'],
          sell_price: '29000',
          link: '#n',
          reason: null,
          notice: null,
          sold_out: false,
          zzim : false,
        },
        {
          brand_name: 'CLUB MONACO',
          product_name: 'Seersucker Baseball Cap',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
          options: ['MULTI', 'FR', '1'],
          sell_price: '355000',
          discount: null,
          price: null,
          link: '#n',
          reason: ['Product is out of stock'],
          notice: null,
          sold_out: false,
          zzim : false,
        },
        {
          brand_name: 'TIME',
          product_name: '[Signature] Two Tuck Loose Pants',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
          options: ['MULTI', 'FR', '1'],
          sell_price: '355000',
          discount: null,
          price: null,
          link: '#n',
          reason: ['Simple change of mind'],
          notice: ['Detailed reason indicated here (Not indicated if none)'],
          sold_out: false,
          zzim : false,
        },
      ],
      cmpAccList: [{
        text: 'Order check guide',
        cont: [{
            tit : null,
            txt : [
            'Request for return can be made up to 7 days after delivery.',
            'Order cancellation and change of option/address are not possible while product is being prepared.',
            ],
            listType : false,
          }],
        },
        {
          text: 'Refund guide',
          cont: [{
            tit : null,
            txt : [
            'When canceling/returning a product with a coupon applied, it will be refunded after deducting the coupon discount amount according to the product price.',
            'Coupons that have expired cannot be restored.',
            'When canceling/returning a product with a coupon applied, an amount less than the order price may be refunded.',
            'In the case of coupons applied when the purchase amount exceeds a certain amount, the coupon application may be canceled when the purchase amount decreases due to a refund.',
            'If the actual payment amount is less than ￦ 200,000 due to a partial return, up to ￦ 200,000 shipping fee may be deducted from the refund amount.<br /><p class="mt-6">Charged Shipping fee for an order less than ￦ 200,000.</p>'
            ],
            listType : false,
          },
          {
            tit : null,
            txt : [
            '<span>￦ 10,000 : </span> Mainland China, Hong Kong, Japan, Taiwan, Singapore, Vietnam, Malaysia, Indonesia, Brunei, Thailand, Philippines,<br />Bangladesh, India',
            '<span>￦ 20,000 : </span> Other countries',
            ],
            listType : false,
            listType_dash : true
        }],
        }
      ],
    }
  },
  created() {
    
  },
  methods: {
    openMarketTicket(idx) {
      const me = this
      me.MarketTicketModel[idx].open = true
    },
    closeMarketTicket(idx) {
      const me = this
      me.MarketTicketModel[idx].open = false
    },
    newLine(str) {
      return String(str).replace(/(?:\r\n|\r|\n)/g, '</span>','</br>')
    }
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/order.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
@import '@/assets/scss/en/en.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>