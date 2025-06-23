<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/OR/guide/Structure 참고 -->
    <div class="content-wrap">
      <CommonContentsLeftMenu :title="'My Page'" :url="'/json/mypage_left_menu_en.json'" :active="'/en/en/OR/orderShippingList'"></CommonContentsLeftMenu>
      <div class="my-page-r-box"><!-- 마이페이지 -->

        <div class="cmp-page-tit"><!-- 페이지 타이틀 -->
          <h2 class="tit">Return Details</h2>
        </div>

        <div class="order-number-box no-line pb-11">
          <div class="line-box">
            <p class="cmp-font">Order No.<span class="ml-8">211222P12345678</span></p>
            <p class="cmp-font fnt-13">15 Jun. 2022 13:00</p>
          </div>
        </div>
        
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
                  <td class="pw-16">
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
                  <td class="pw-16"> 
                      <div class="cmp-font fnt-16 c-blue">Return<br />in Progress</div><!-- 반품회수중 CASE -->
                  </td>
                  <td class="pw-0">
                    <div class="product-row-unitBtn">
                      <v-btn outlined small width="178px" color="normal">Shipping Check</v-btn>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="4" class="pw-0">
                    <ul class="table-inputBox">
                      <li class="full pt-0">
                        <div class="cmp-info info-type3 text-left">
                          <p class="cmp-font fnt-14">
                            <span class="bold mr-10">Reason for return :</span>
                            <span>{{item.notice}}</span>
                          </p>
                          <!-- [퍼블수정]22.11.21 주문서조회 수정 -->
                          <p class="cmp-font fnt-14 mt-2">{{item.detail_notice}}</p>
                        </div>
                      </li>
                      <li class="full photo-type pt-20">
                        <!-- 첨부한사진 -->
                        <ul class="attach-file-list text-left">
                          <li v-for="(item2, index2) in item.attachFileList" class="file-cnt" :key="index2">
                            <div class="file">
                              <v-img  :src="item2" aspect-ratio="1" alt="첨부 파일"></v-img>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>

        <!-- 회수지 정보 -->
        <div class="cmp-sub-tit col line mt-24">
          <h3 class="tit cmp-font fnt-20">Retrieval Location Info</h3>
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

        <!-- 환불 예정금액 --> 
        <div class="cmp-sub-tit mt-24">
          <h3 class="tit cmp-font fnt-20">Refund Info</h3>
          <span class="cmp-font c-red">Refund Completed</span>
        </div>
        <div class="refund-box">
          <ul class="cust card-info-box">
            <li>
              <p class="cmp-font fnt-14 mb-6">Payment of<br />Returned Product</p>
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
          <div class="cmp-info info-type2">
            <span class="tit">Deduction from Refund Amount</span>
            <dl>
              <dt>
                <v-layout align-center>
                  Return Shipping Fee (Coupon Used)
                  <CommonTooltipBox class="ml-2">
                    <template #content>
                      <ul class="cmp-dotList tooltip-ver">
                        <li class="cmp-font fnt-14 ">In case actual payment amount is below<br />￦ 200,000 due to partial refund, Shipping fee of up to a maximum of ￦ 20,000 may be deducted from the refund amount according to the global return policy.</li>
                      </ul>
                      <p class="mt-14 mb-10 cmp-font fnt-14">Charged Shipping fee for an order less than ￦ 200,000.</p>
                      <div class="product-row-table tooltip-ver">
                        <table>
                          <caption>fee</caption>
                          <colgroup>
                            <col style="width:auto;"/>
                            <col style="width:183px;"/>
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
                              <td class="text-left pl-15">Mainland China,<br />Hong Kong, Japan,<br />Taiwan, Singapore,<br />Vietnam, Malaysia,<br />Indonesia, Brunei,<br />Thailand, Philippines,<br />Bangladesh, India</td>
                            </tr>
                            <tr>
                              <td class="pb-0">￦ 20,000</td>
                              <td class="text-left pl-15 pb-0">Other countries</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </template>
                  </CommonTooltipBox>
                </v-layout>
              </dt>
              <dd>
                <span class="mr-2">￦</span>6,000
              </dd>
            </dl>
          </div>
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
        <v-expansion-panels accordion class="cmp-acc acc-type2 topline-none">
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

        <v-col cols="12" class="text-center mt-30 pt-5">
          <v-btn large color="primary">Cancel Return</v-btn>
        </v-col>
      </div>
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
      historyList: [ // 반품내역
        {
          brand_name: 'MINE',
          product_name: 'Seersucker Baseball Cap',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
          options: ['BLACK', '90', '2'],
          sell_price: '355000',
          discount: '20',
          price: '366000',
          link: '#n',
          notice: 'Simple change of mind / No purchase intent',
          detail_notice:'Detailed reason indicated here (Not indicated if none)',
          prd_numebr : '2',
          attachFileList : [
            'https://img.thehandsome.com/md/publish/dummy/attach-file-img0.png',
            'https://img.thehandsome.com/md/publish/dummy/attach-file-img1.png',
          ],
        },
        {
          brand_name: 'FOURM MEN’S LOUNGE',
          product_name: 'Cashmere strap knit gloves',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
          options: ['CHARCOAL GRAY', '90', '1'],
          sell_price: '355000',
          discount: null,
          price: null,
          link: '#n',
          notice: 'Simple change of mind / No purchase intent',
          detail_notice:'Detailed reason indicated here (Not indicated if none)',
          prd_numebr : '1',
          attachFileList : [
            'https://img.thehandsome.com/md/publish/dummy/attach-file-img0.png',
            'https://img.thehandsome.com/md/publish/dummy/attach-file-img1.png',
          ],
        },
      ], 
      tabs: 0,
      cmpAccList: [
        {
        text: 'Refund guide',
        cont: [{
            tit : 'Refund guide for return of coupon applied products' ,
            txt : [
            'When canceling/returning a product with a coupon applied, it will be refunded after deducting the coupon discount amount according to the product price.',
            'Coupons that have expired cannot be restored.',
            'When canceling/returning a product with a coupon applied, an amount less than the order price may be refunded.',
            'In the case of coupons applied when the purchase amount exceeds a certain amount, the coupon application may be canceled when the purchase amount decreases due to a refund.',
            ],
            listType : false,
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