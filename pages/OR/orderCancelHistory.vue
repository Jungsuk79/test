<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/OR/guide/Structure 참고 -->
    <div class="content-wrap">
      <CommonContentsLeftMenu :title="'마이페이지'" :url="'/json/mypage_left_menu.json'" :active="'/ko/OR/orderShippingList'"></CommonContentsLeftMenu>
      <div class="my-page-r-box"><!-- 마이페이지 -->

        <div class="cmp-page-tit"><!-- 페이지 타이틀 -->
          <h2 class="tit">취소 상세</h2>
        </div>
        
        <div class="order-number-box no-line">
          <div class="line-box">
            <p class="cmp-font">주문번호<span class="ml-8">211222P12345678</span></p>
            <p class="cmp-font fnt-13">2021.12.22 13:00</p>
          </div>
        </div>
        <div class="product-row-table bb-bold"><!-- [퍼블수정] 22.09.30 주문조회 수정 -->
          <table>
            <caption>상품리스트</caption>
            <colgroup>
              <col style="width:470px;"/>
              <col style="width:auto;"/> 
            </colgroup>
            <thead>
              <tr>
                <th>상품정보</th>
                <th>상품금액</th>
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
                      <div class="product-sellprice"><strong>{{item.sell_price | number}}</strong>원</div>
                      <div v-if="item.price || item.discount" class="product-price-cnt">
                        <del class="product-price-origin">{{item.price | number}}원</del>
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
                            <!-- [퍼블수정]22.11.07 --><!-- [개발확인]22.12.21 아래의 클래스 mr-10 반영 부탁드립니다. -->
                            <span class="bold mr-10">취소 사유 :</span>
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

        <!-- 환불 정보 --><!-- [퍼블수정] 22.09.30 주문조회 수정 -->
        <div class="cmp-sub-tit mt-24">
          <h3 class="tit cmp-font fnt-20">환불정보</h3>
          <span class="cmp-font c-red">환불완료</span>
        </div>
        <div class="refund-box">
          <ul class="cust">
            <li>
              <p class="cmp-font fnt-14 mb-6">취소상품 결제금액</p>
              <p class="cmp-font fnt-20">300,000<span class="cmp-font fnt-14 ml-2">원</span></p>
            </li>
            <li class="sign minus"></li>
            <li>
              <p class="cmp-font fnt-14 mb-6">환불 차감 금액</p>
              <p class="cmp-font fnt-20">0<span class="cmp-font fnt-14 ml-2">원</span></p>
            </li>
            <li class="sign equal"></li>
            <li>
              <p class="cmp-font fnt-14 mb-6">최종 환불 금액</p>
              <p class="cmp-font fnt-20">300,000<span class="cmp-font fnt-14 ml-2">원</span></p>
            </li>
          </ul>
          <div class="cmp-info info-type2">
            <span class="tit">최종 환불 금액</span>
            <dl>
              <dt><b>신용카드</b>/삼성카드</dt>
              <dd>15,000<span>원</span></dd>
              <dt>한섬마일리지</dt>
              <dd>5,000<span>원</span></dd>
              <dt>H.Point</dt>
              <dd>1,000<span>원</span></dd>
              <dt>e-money</dt>
              <dd>3,000<span>원</span></dd>
            </dl>
          </div>
        </div>
        <!-- // 환불 정보 --><!-- //[퍼블수정] 22.09.30 주문조회 수정 -->


          <!-- 복원 예정 쿠폰 [퍼블수정] 22.11.28 수정 -->
          <div class="return-info no-tit no-bt bb-bold">
            <div class="box">
              <dl class="pack-info">
                <dd class="txt cmp-font fnt-16 pb-6">복원 쿠폰</dd>
              </dl>
              <dl class="pack-info">
                <dd>
                  <ul class="bold-cpn">
                    <li>없음</li>
                  </ul>
                  <ul class="cmp-dotList">
                    <li>주문 시 적용하신 쿠폰은 취소/반품 시 복원되지 않는 쿠폰입니다.</li>
                  </ul>
                </dd>
              </dl>
            </div>
          </div>
          <div class="return-info no-tit no-bt bb-bold">
            <div class="box">
              <dl class="pack-info">
                <dd class="txt cmp-font fnt-16 pb-6">복원 쿠폰</dd>
              </dl>
              <dl class="pack-info">
                <dd>
                  <ul class="bold-cpn">
                    <li>11월 신규회원 웰컴 바우처(10%)</li>
                  </ul>
                  <ul class="cmp-dotList">
                    <li>복원된 쿠폰은 재사용이 가능합니다. 자세한 사용기간은 <nuxt-link class="cmp-font fnt-14 button" to="#n"><span class="line">마이페이지>쿠폰함</span></nuxt-link>에서 확인해 주세요.</li>
                  </ul>
                </dd>
              </dl>
            </div>
          </div>
          <div class="return-info no-tit no-bt bb-bold">
            <div class="box">
              <dl class="pack-info">
                <dd class="txt cmp-font fnt-16 pb-6">복원 쿠폰</dd>
              </dl>
              <dl class="pack-info">
                <dd>
                  <ul class="bold-cpn">
                    <li>11월 신규회원 웰컴 바우처(10%)</li>
                    <li>장바구니쿠폰 정액(1만원)</li>
                  </ul>
                  <ul class="cmp-dotList">
                    <li>복원된 쿠폰은 재사용이 가능합니다. 자세한 사용기간은 <nuxt-link class="cmp-font fnt-14 button" to="#n"><span class="line">마이페이지>쿠폰함</span></nuxt-link>에서 확인해 주세요.</li>
                  </ul>
                </dd>
              </dl>
            </div>
          </div>
          <!-- // 복원 예정 쿠폰 [퍼블수정] 22.11.28 수정 -->
        
        <!-- 환불 안내 -->
        <v-expansion-panels accordion class="cmp-acc acc-type2">
          <v-expansion-panel v-for="(item, index) in cmpAccList" :key="index">
            <v-expansion-panel-header class="cmp-font fnt-16">{{ item.text }}<!-- [퍼블수정] 22.09.30 주문조회 수정 -->
              <template #actions>
                <i class="cmp-icon-etc cmp-icon-down">열기/닫기</i>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div v-for="(contItem,contIndex) in item.cont" :key="contIndex">
                <p v-if="contItem.tit" class="cmp-font" :class="{'mt-12':  contIndex == 1}">{{contItem.tit}}</p>
                <ul :class="[contItem.listType ? '' : 'cmp-dotList']">
                  <li v-for="(txtItem,txtIndex) in contItem.txt" :key="txtIndex" v-html="newLine(txtItem)" class="cmp-font fnt-14 pl-10"></li><!-- [퍼블수정]22.11.29 들여쓰기 수정 -->
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

// import EventBus from '~/api/common/EventBus'
export default {
  components: {
  },
  layout: 'LayoutBasics',
  data() {
    return {
      historyList: [ // 반품내역
        {
          brand_name: 'FOURM MEN’S LOUNGE',
          product_name: '[BEARBRICK] 사이키델릭 페이즐리',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
          options: ['CHARCOAL GRAY', '90', '1개'],
          sell_price: '355000',
          discount: null,
          price: null,
          link: '#n',
          notice: '상품이 품절됨',
          detail_notice:'자세한 사유는 여기에 표기(없을 경우 미표기)',
          prd_numebr : '1',
          attachFileList : [
            'https://img.thehandsome.com/md/publish/dummy/attach-file-img0.png',
            'https://img.thehandsome.com/md/publish/dummy/attach-file-img1.png',
          ],
        },
        {
          brand_name: 'orea',
          product_name: '퓨리파잉 클렌징 폼',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img2.png',
          options: ['MULTI', 'FR', '1개'],
          sell_price: '355000',
          discount: null,
          price: null,
          link: '#n',
          notice: '상품이 품절됨',
          detail_notice:'자세한 사유는 여기에 표기(없을 경우 미표기)',
          prd_numebr : '1',
          attachFileList : [
            'https://img.thehandsome.com/md/publish/dummy/attach-file-img0.png',
            'https://img.thehandsome.com/md/publish/dummy/attach-file-img1.png',
          ],
        },
      ], 
      tabs: 0,
      cmpAccList: [{
        text: '환불 안내',// [퍼블수정] 22.09.30 주문조회 수정
        cont: [{
            txt : [
            '쿠폰 적용된 상품을 취소/반품 시, 상품금액에 따라 쿠폰 할인 금액 차감 후 환불됩니다.',
            '쿠폰 유효기간이 만료된 쿠폰은 복원이 불가합니다.',
            '쿠폰 적용된 상품 취소/반품 시, 주문금액 보다 적은 금액이 환불될 수 있습니다.',
            '특정 구매금액 이상일때 적용되는 쿠폰의 경우 환불로 인해 구매금액이 감소할 때 쿠폰 적용이 취소 될 수 있습니다.',
            '반품 시 환불예상금액에서 반품배송비가 차감될 수 있습니다.',
            '반품 배송비는 한섬마일리지 > e-money > 주 결제수단(신용카드 등) 순으로 차감됩니다.', //  [퍼블수정] 22.09.30 주문조회 수정
            '반품 배송비 결제를 [환불금에서 차감]으로 선택하신 경우는 환불 예상금액에서 반품 배송비가 차감됩니다.', //  [퍼블수정] 22.09.30 주문조회 수정
            '환불 시 결제수단별 환불 순서는 다음과 같습니다.'],
            listType : false,
          },
          {
            txt : [
            '1.주결제 수단 환불',
            '2.한섬마일리지 환급',
            '3.e-money 환급',
            '4.H.Point 환급'],
            listType : true
        }],
        },
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
</style>