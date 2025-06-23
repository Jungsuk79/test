<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/OR/guide/Structure 참고 -->
    <div class="content-wrap">
      <CommonContentsLeftMenu :title="'마이페이지'" :url="'/json/mypage_left_menu.json'" :active="'/ko/OR/orderShippingList'"></CommonContentsLeftMenu>
      <div class="my-page-r-box"><!-- 마이페이지 -->

        <div class="cmp-page-tit"><!-- 페이지 타이틀 -->
          <h2 class="tit">반품 상세</h2><!-- [퍼블수정] 22.09.30 주문조회 수정 -->
        </div>

        <div class="order-number-box no-line pb-11">
          <div class="line-box">
            <p class="cmp-font">주문번호<span class="ml-8">211222P12345678</span></p>
            <p class="cmp-font fnt-13">2021.12.22 13:00</p>
          </div>
        </div>
        <!-- [퍼블수정] 22.09.30 주문조회 수정 -->
        <div class="product-row-table bb-bold">
          <table>
            <caption>상품리스트</caption>
            <colgroup>
              <col style="width:auto;"/>
              <col style="width:248px;"/> 
              <col style="width:128px;"/> 
              <col style="width:128px;"/> 
            </colgroup>
            <thead>
              <tr>
                <th>상품정보</th>
                <th>상품금액</th>
                <th>주문상태</th>
                <th>확인&#47;신청</th>
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
                      <div class="product-sellprice"><strong>{{item.sell_price | number}}</strong>원</div>
                      <div v-if="item.price || item.discount" class="product-price-cnt">
                        <del class="product-price-origin">{{item.price | number}}원</del>
                        <!-- eslint-disable -->
                        <span class="product-discount">{{item.discount}}<em>%</em></span>
                        <!-- eslint-disable -->
                      </div>
                    </nuxt-link>
                  </td>
                  <td class="pw-16"><!-- [퍼블수정] 22.09.30 주문조회 수정 -->
                      <div v-if="index == 0" class="cmp-font fnt-14 c-blue">반품접수</div><!-- 반품접수 CASE -->
                      <div v-if="index == 1" class="cmp-font fnt-14 c-blue">반품중</div><!-- 반품중 CASE -->
                      <div v-if="index == 2" class="cmp-font fnt-14 c-blue">반품완료</div><!-- 반품완료 CASE --><!-- 220916 문구수정 -->
                  </td>
                  <td class="pw-0">
                    <div class="product-row-unitBtn">
                      <v-btn v-if="index !== 0" outlined small color="normal">배송 조회</v-btn>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="4" class="pw-0">
                    <ul class="table-inputBox">
                      <li class="full pt-0">
                        <div class="cmp-info info-type3 text-left">
                          <p class="cmp-font fnt-14">
                            <!-- [퍼블수정]22.11.07 -->
                            <span class="bold mr-10">반품 사유 :</span>
                            <span>{{item.notice}}</span>
                          </p>
                          <!-- [퍼블수정]22.11.21 주문서조회 수정 -->
                          <p class="cmp-font fnt-14 mt-2">{{item.detail_notice}}</p>
                        </div>
                      </li>
                      <li class="full photo-type pt-20"><!-- [퍼블수정] 22.09.30 주문조회 수정 -->
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
        <!-- //[퍼블수정] 22.09.30 주문조회 수정 -->

        <!-- 회수지 정보 [퍼블수정] 22.09.30 주문조회 수정 -->
        <div class="return-info no-tit no-bt bb-bold">
          <div class="box">
            <dl class="box-tit flex-ver pb-20">
              <dt class="txt cmp-font fnt-20">회수지 정보</dt>
              <dd class="btn cmp-font fnt-13"><button class="button"><span class="line">회수지 변경</span></button></dd>
            </dl>
            <dl class="pack-info">
              <dt class="tit">회수자명, 연락처</dt>
              <dd class="txt">홍길동 / 010-1111-2222</dd>
            </dl>
            <dl class="pack-info">
              <dt class="tit">회수지주소</dt>
              <dd class="txt">[05402] 서울특별시 강동구 강동대로 193 (성내동) 3층 301호</dd>
            </dl>
            <dl class="pack-info">
              <dt class="tit">배송메세지</dt>
              <dd class="txt pb-0">부재 시 문 앞에 놓아주세요.</dd>
            </dl>
            <dl class="pack-info">
              <dt class="tit">공동현관 출입번호</dt>
              <dd class="txt pb-0">공동현관 출입번호(*****)</dd>
            </dl>
          </div>
        </div>
        <!-- // 회수지 정보 [퍼블수정] 22.09.30 주문조회 수정 -->

        <!-- 환불정보 [퍼블수정] 22.09.30 주문조회 수정 -->
        <div class="cmp-sub-tit mt-24">
          <h3 class="tit cmp-font fnt-20">환불정보</h3>
          <span class="cmp-font c-red">환불완료</span>
        </div>
        <div class="refund-box pb-16">
          <ul class="cust">
            <li>
              <p class="cmp-font fnt-14 mb-6">반품상품 결제금액</p>
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
          <!-- [퍼블수정]22.11.07 케이스 추가 -->
          <!-- 차감내역이 없는 경우 (주문완료단계 취소 or 당사 귀책 시) -->
          <div class="cmp-info info-type2 mt-10">
            <span class="tit">환불 차감 금액</span>
            <dl>
              <dd>0<span>원</span></dd>
            </dl>
          </div>
          <!-- 차감내역이 있는 경우 (환불금에서 차감 시) -->
          <div class="cmp-info info-type2 mt-10">
            <span class="tit">환불 차감 금액</span>
            <dl>
              <dt>반품 배송비</dt>
              <dd>6,000<span>원</span></dd>
            </dl>
          </div>
          <!-- 차감내역이 있는 경우 (보유 쿠폰 사용 시) -->
          <div class="cmp-info info-type2 mt-10">
            <span class="tit">환불 차감 금액</span>
            <dl>
              <dt>반품 배송비(쿠폰 사용)</dt>
              <dd>0<span>원</span></dd>
            </dl>
          </div>
          <!-- 차감내역이 있는 경우 (STAR/THE STAR 등급 무제한 무료 교환 사용시) -->
          <div class="cmp-info info-type2 mt-10">
            <span class="tit">환불 차감 금액</span>
            <dl>
              <dt>반품 배송비(STAR/THE STAR 등급 혜택)</dt>
              <dd>0<span>원</span></dd>
            </dl>
          </div>
          <!-- //[퍼블수정]22.11.07 케이스 추가 -->
          <div class="cmp-info info-type2 mt-10">
            <span class="tit">최종 환불 금액</span>
            <dl>
              <dt><b>신용카드</b>/삼성카드</dt>
              <dd>270,000<span>원</span></dd>
              <dt>한섬마일리지</dt>
              <dd>10,000<span>원</span></dd>
              <dt>H.Point</dt>
              <dd>10,000<span>원</span></dd>
              <dt>e-money</dt>
              <dd>10,000<span>원</span></dd>
            </dl>
          </div>
        </div>
        <!-- // 환불정보 [퍼블수정] 22.09.30 주문조회 수정 -->


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
        
        <!-- 환불 안내 [퍼블수정] 22.09.30 주문조회 수정 -->
        <v-expansion-panels accordion class="cmp-acc acc-type2">
          <v-expansion-panel v-for="(item, index) in cmpAccList" :key="index">
            <v-expansion-panel-header class="cmp-font fnt-16">{{ item.text }}<!-- [퍼블수정] 22.09.30 주문조회 수정 -->
              <template #actions>
                <i class="cmp-icon-etc cmp-icon-down">열기/닫기</i>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div v-for="(contItem,contIndex) in item.cont" :key="contIndex">
                <p v-if="contItem.tit" class="cmp-font mb-6" :class="{'mt-12':  contIndex == 1}">{{contItem.tit}}</p>
                <ul :class="[contItem.listType ? '' : 'cmp-dotList']">
                  <li v-for="(txtItem,txtIndex) in contItem.txt" :key="txtIndex" v-html="newLine(txtItem)"></li>
                </ul>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- //환불 안내 [퍼블수정] 22.09.30 주문조회 수정 -->

        <v-col cols="12" class="text-center mt-30 pt-5">
          <v-btn large color="primary">반품 취소</v-btn>
        </v-col>
      </div>
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

// import EventBus from '~/api/common/EventBus'
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
          product_name: '컬러 블록 니트 가디건 컬러 니트',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
          options: ['BLACK', '90', '2개'],
          sell_price: '355000',
          discount: '20',
          price: '366000',
          link: '#n',
          notice: '단순 변심 / 구매의사가 사라짐',
          detail_notice:'자세한 사유는 여기에 표기(없을 경우 미표기)',
          prd_numebr : '2',
          attachFileList : [
            'https://img.thehandsome.com/md/publish/dummy/attach-file-img0.png',
            'https://img.thehandsome.com/md/publish/dummy/attach-file-img1.png',
          ],
        },
        {
          brand_name: 'FOURM MEN’S LOUNGE',
          product_name: '[BEARBRICK] 사이키델릭 페이즐리',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
          options: ['CHARCOAL GRAY', '90', '1개'],
          sell_price: '355000',
          discount: null,
          price: null,
          link: '#n',
          notice: '단순 변심 / 구매의사가 사라짐',
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
          notice: '단순 변심 / 구매의사가 사라짐',
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
            tit : '쿠폰 적용 상품 반품 환불 안내' ,
            txt : [
            '상품금액에 따라 쿠폰 할인된 금액 차감 후 환불됩니다.',
            '환불 계좌정보가 부정확하거나, 결제하실 카드에 문제가 있을 경우 반품완료가 진행되지 않습니다.',
            ],
            listType : false,
          },
          {
            tit : '환불 및 포인트 환급 순서' ,
            txt : [
            '1. 결제수단 환불', // 220919 문구변경
            '2. 한섬마일리지 환급',
            '3. e-money 환급',
            '4. H.Point 환급',
            ],
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