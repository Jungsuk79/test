<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/OR/guide/Structure 참고 -->
    <div class="content-wrap">
      <CommonContentsLeftMenu :title="'My Page'" :url="'/json/mypage_left_menu_en.json'" :active="'/en/en/OR/orderShippingList'"></CommonContentsLeftMenu>
      <div class="my-page-r-box"><!-- 마이페이지 -->

        <div class="cmp-page-tit"><!-- 페이지 타이틀 -->
          <h2 class="tit">Cancellation Details</h2>
        </div>
        
        <div class="order-number-box no-line">
          <div class="line-box">
            <p class="cmp-font">Order No.<span class="ml-8">211222P12345678</span></p>
            <p class="cmp-font fnt-14">15 Jun. 2022 13:00</p>
          </div>
        </div>
        <div class="product-row-table">
          <table>
            <caption>product list</caption>
            <colgroup>
              <col style="width:470px;"/>
              <col style="width:auto;"/> 
            </colgroup>
            <thead>
              <tr>
                <th>Product Information</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, index) in historyList">
                <tr :key="index" class="bottom-none">
                  <td class="pw-0">
                    <nuxt-link :to="item.link" class="product-row-unitInfo or-prd-type"><!-- [퍼블수정]23.01.19 상품이미지 : or-prd-type 클래스 추가 -->
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
                </tr>
                <tr>
                  <td colspan="4" class="pw-0">
                    <ul class="table-inputBox">
                      <li class="full pt-0">
                        <div class="cmp-info info-type3 text-left">
                          <p class="cmp-font fnt-14">
                            <span class="bold mr-10">Reason for cancellation:</span>
                            <span>{{item.notice}}</span>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>

        <!-- 환불 예정금액 --> 
        <div class="cmp-sub-tit mt-24">
          <h3 class="tit cmp-font fnt-20">Refund Info</h3>
          <span class="cmp-font c-red">Refund Completed</span>
        </div>
        <div class="refund-box no-line">
          <ul class="cust card-info-box">
            <li>
              <p class="cmp-font fnt-14 mb-6">Payment of<br />Cancelled Product</p>
              <p class="cmp-font fnt-20"><span class="mr-2">￦</span>30,000</p>
            </li>
            <li class="sign minus"></li>
            <li>
              <p class="cmp-font fnt-14 mb-6">Deduction from<br />Refund Amount</p>
              <p class="cmp-font fnt-20"><span class="mr-2">￦</span>6,000</p>
            </li>
            <li class="sign equal"></li>
            <li>
              <p class="cmp-font fnt-14 mb-6">Final Refund<br />Amount</p>
              <p class="cmp-font fnt-20"><span class="mr-2">￦</span>24,000</p>
              <div class="card-info"><b>Credit Card</b> / American Express</div>
            </li>
          </ul>
        </div>
        <!-- // 환불 예정금액 --> 

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
                  <li v-for="(txtItem,txtIndex) in contItem.txt" :key="txtIndex" v-html="newLine(txtItem)"></li>
                </ul>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- //환불 안내 -->
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
      historyList: [ // 반품내역
        {
          brand_name: 'FOURM MEN’S LOUNGE',
          product_name: 'Double Breasted Cropped Jacket',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
          options: ['CHARCOAL GRAY', '90', '1'],
          sell_price: '355000',
          discount: null,
          price: null,
          link: '#n',
          notice: 'Product is out of stock',
          prd_numebr : '1',
          attachFileList : [
            'https://img.thehandsome.com/md/publish/dummy/attach-file-img0.png',
            'https://img.thehandsome.com/md/publish/dummy/attach-file-img1.png',
          ],
        },
        {
          brand_name: 'orea',
          product_name: '[Signature] Two Tuck Loose Pants',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img2.png',
          options: ['MULTI', 'FR', '1'],
          sell_price: '355000',
          discount: null,
          price: null,
          link: '#n',
          notice: 'Product is out of stock',
          prd_numebr : '1',
          attachFileList : [
            'https://img.thehandsome.com/md/publish/dummy/attach-file-img0.png',
            'https://img.thehandsome.com/md/publish/dummy/attach-file-img1.png',
          ],
        },
      ], 
      tabs: 0,
      cmpAccList: [{
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