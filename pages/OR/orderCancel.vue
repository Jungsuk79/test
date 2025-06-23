<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/OR/guide/Structure 참고 -->
    <div class="content-wrap">
      <CommonContentsLeftMenu :title="'마이페이지'" :url="'/json/mypage_left_menu.json'" :active="'/ko/OR/orderShippingList'"></CommonContentsLeftMenu>
      <div class="my-page-r-box"><!-- 마이페이지 -->
        <!--//주문 취소 선택-->
        <div v-if="applyNext">
          <div class="cmp-page-tit"><!-- 페이지 타이틀 -->
            <h2 class="tit">주문 취소</h2>
          </div>

          <div class="cmp-info info-type1">
            <p class="cmp-font">취소하시려는 상품과 수량을 선택해 주세요.</p>
          </div>

          <div class="order-number-box light-line mt-30 mb-20">
            <div class="line-box">
              <p class="cmp-font">주문번호<span class="ml-8">211222P12345678</span></p>
              <p class="cmp-font fnt-13">2021.12.22 13:00</p>
            </div>
          </div>

          <!-- 카테고리 필터 -->
          <v-layout row class="cmp-form-chkGroup wide pt-4 pb-10">
              <v-checkbox label="전체선택" class="cmp-form-checkbox"></v-checkbox>
          </v-layout>
          <!-- //카테고리 필터 -->

          <!-- 상품 정보 -->
          <div class="product-row-table">
            <table>
              <caption>상품리스트</caption>
              <colgroup>
                <col style="width:28px;"/>
                <col style="width:auto;"/>
                <col style="width:248px;"/>
                <col style="width:144px;"/> 
              </colgroup>
              <thead>
                <tr>
                  <th class="pw-0"><span class="ir">선택</span></th>
                  <th>상품정보</th>
                  <th>상품금액</th>
                  <th>수량</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(item, index) in deliveryList">
                  <tr :key="index">
                    <td class="td-t pw-0"><v-checkbox label="선택" class="cmp-form-checkbox label-hide"></v-checkbox></td>
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
                    <td class="pw-16"><!-- 환불정보 [퍼블수정] 22.09.30 주문조회 수정 -->
                      <CommonCountingBox min="1" :max="item.prd_numebr" :count="item.prd_numebr"></CommonCountingBox>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
          <!-- //상품 정보 -->

          <v-col cols="12" class="text-center mt-30 pt-5">
            <v-btn large color="primary" @click.prevent="applyNextBtn">다음 단계</v-btn>
          </v-col>
        </div>
        <!--//주문 취소 선택-->

        <!-- 주문 취소 선택 후 신청화면-->
        <div v-if="applyPreocess">
          <div class="cmp-page-tit">
            <h2 class="tit">주문 취소</h2>
          </div>
          <div class="order-number-box no-line">
            <div class="line-box">
              <p class="cmp-font">주문번호<span class="ml-8">211222P12345678</span></p>
              <p class="cmp-font fnt-13">2021.12.22 13:00</p>
            </div>
          </div>

          <!-- 상품 정보 -->
          <div class="product-row-table">
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
                <template v-for="(item, index) in unitData">
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
                    <td colspan="2" class="pw-0 pt-10"><!-- [퍼블수정] 22.09.30 주문조회 수정 -->
                      <ul class="table-inputBox">
                        <li>
                          <!-- 반품 사유 -->
                          <CommonSelectBox id="reason1" title="취소 사유">
                            <template #optionList>
                              <option value="placeholder">취소 사유를 선택해 주세요.(필수)</option>
                              <option value="option1">배송이 늦어짐</option>
                              <option value="option2">상품이 품절됨</option>
                              <option value="option3">옵션/ 사이즈 변경/ 취소</option>
                              <option value="option4">다른 곳보다 비쌈</option>
                              <option value="option5">쿠폰/할인혜택 변경</option>
                              <option value="option6">구매의사 없어짐</option>
                              <option value="option7">사은품 변경/취소</option>
                              <option value="option8">결제수단 변경(카드변경 등)</option>
                              <option value="option9">유사상품 구매</option>
                              <option value="option10">상품정보 미흡</option>
                            </template>
                          </CommonSelectBox>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
          <!-- //상품 정보 -->
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
          <v-col cols="12" class="text-center mt-30 pt-5">
            <v-btn large color="primary"  @click.prevent="applyCompleteBtn">주문 취소 신청</v-btn>
          </v-col>
        </div>
        <!-- 주문 취소 선택 후 신청화면-->
        
        <!-- 주문 취소 완료 화면 -->
        <div v-if="applyComplete">
          <div class="cmp-page-tit"><!-- 페이지 타이틀 -->
            <h2 class="tit">주문 취소</h2>
          </div>

          <div class="complete-top">
            <i class="cmp-icon-etc cmp-icon-120 i-confirm"></i>
            <p class="txt">주문 취소가 완료 되었습니다.</p>
            <p class="cmp-font">취소 현황은 <nuxt-link class="cmp-font fnt-16 button" to="#n"><span class="line">마이페이지&gt;주문조회</span></nuxt-link>에서 확인해 주세요.</p>
          </div>

          <div class="order-number-box">
            <div class="line-box">
              <p class="cmp-font">주문번호<span class="ml-8">211222P12345678</span></p>
              <p class="cmp-font fnt-13">2021.12.22 13:00</p>
            </div>
          </div>

          <!-- 환불정보 [퍼블수정] 22.09.30 주문조회 수정 -->
          <div class="cmp-sub-tit mt-24">
            <h3 class="tit cmp-font fnt-20">환불정보</h3>
            <span class="cmp-font c-red">환불예정</span>
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
                <dt>신용카드 / 우리카드</dt>
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
                    <li v-for="(txtItem,txtIndex) in contItem.txt" :key="txtIndex" v-html="newLine(txtItem)" class="cmp-font fnt-14 pl-10"></li>
                  </ul>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <!-- //환불 안내 -->

          <v-col cols="12" class="text-center mt-30 pt-5">
            <v-btn large color="primary" >확인</v-btn>
          </v-col>

        </div>
        <!-- 반품신청 완료 화면 -->
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
      user_name: '김한섬',
      applyNext : true,
      applyComplete : false,
      drawer: null,
      isStep1: true,
      applyPreocess : false,
      rodioModel0 : 0,
      isStep2: false,
      isStep3: false,
      stepActive: 1,
      stateText: [
        { id: 1 , name: '회수지선택'},
        { id: 2 , name: '사유선택' },
        { id: 3 , name: '최종 금액 확인'},
      ],
      deliveryList: [ // 택배 리스트
        {
          brand_name: 'MINE',
          product_name: '컬러 블록 니트 가디건 컬러 니트',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
          options: ['BLACK', '90', '2개'],
          sell_price: '355000',
          discount: null,
          price: null,
          link: '#n',
          notice: '인기 상품으로 배송 지연 예상 (평일 기준 5일 이상 소요)',
          prd_numebr : '2',
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
          notice: null,
          prd_numebr : '1',
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
          notice: '오에라 전용박스 별도배송',
          prd_numebr : '1',
        },
        {
          brand_name: 'FOURM STUDIO',
          product_name: '[예약판매] 스티치 레더 스커트',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img3.png',
          options: ['BLACK', '90', '1개'],
          sell_price: '355000',
          discount: null,
          price: null,
          link: '#n',
          notice:'2021년 12월 17일부터 순차 배송 (제작 상황에 따라 변경 가능)',
          prd_numebr : '1',
        },
        {
          brand_name: 'FOURM STUDIO',
          product_name: '크리스탈 니트 가디건',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
          options: ['KAHKI', '90', '1개'],
          sell_price: '29000',
          link: '#n',
          notice:'리퀴드 퍼퓸바 전용 박스 별도 배송',
          prd_numebr : '1',
        }
      ],
      unitData : [
        {
          brand_name: 'MINE',
          product_name: '컬러 블록 니트 가디건 컬러 니트',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
          options: ['BLACK', '90', '2개'],
          sell_price: '355000',
          discount: null,
          price: null,
          link: '#n',
          notice: '인기 상품으로 배송 지연 예상 (평일 기준 5일 이상 소요)',
          prd_numebr : '2',
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
          notice: null,
          prd_numebr : '1',
        }
      ],
      tabs: 0,
      attachFileList : [
        'https://img.thehandsome.com/md/publish/dummy/attach-file-img0.png',
        'https://img.thehandsome.com/md/publish/dummy/attach-file-img1.png',
      ],
      cmpAccList: [{
          text: '주문 취소 안내',// [퍼블수정] 22.09.30 주문조회 수정
          cont: [{
            tit : null,
            txt : [
            '주문 취소는 주문 완료 상태에서만 가능합니다.',
            '주문 취소 내역은 <button class="cmp-font fnt-14 button"><span class="line">마이페이지>주문 조회</span></button>에서 확인 하실 수 있습니다.',
            '카드결제: 결제하신 카드사로 즉시 취소 요청되며 영엽일 기준 2~3일 소요됩니다.', // 220919 문구변경
            '실시간 계좌이체: 결제하신 계좌로 환불 처리 됩니다.',
            'e-money/쿠폰: 주문 취소 후 즉시 복원 됩니다. (부분 취소 시, 복원 되지 않습니다.)'
            ],
            listType : false,
          },],
        },
        {
        text: '환불 안내',// [퍼블수정] 22.09.30 주문조회 수정
        cont: [{
            tit : null,
            txt : [
            '쿠폰 적용된 상품의 취소/반품 시, 상품금액에 따라 쿠폰 할인된 금액을 차감 후 환불됩니다.', // 220919 문구변경
            '쿠폰 유효기간이 만료된 쿠폰은 복원이 불가합니다.',
            '쿠폰 적용된 상품 취소/반품 시, 주문금액 보다 적은 금액이 환불될 수 있습니다.',
            '특정 구매금액 이상일때 적용되는 쿠폰의 경우 환불로 인해 구매금액이 감소할 때 쿠폰 적용이 취소 될 수 있습니다.',
            '반품 시 환불 예상금액에서 반품 배송비가 차감될 수 있습니다.', // 220919 문구변경
            '반품 배송비는 한섬마일리지 > e-money > 주 결제수단(신용카드 등) 순으로 차감됩니다.', // [퍼블수정] 22.09.30 주문조회 수정
            '반품 배송비 결제를 [환불금에서 차감]으로 선택하신 경우는 환불 예상금액에서 반품 배송비가 차감됩니다.', // [퍼블수정] 22.09.30 주문조회 수정
            '환불 시 결제수단별 환불 순서는 다음과 같습니다.'
            ],
            listType : false,
          },
          {
            tit : null,
            txt : [
            '1.결제 수단 환불', // 220919 문구변경
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
    stepClassCase() {
      return {
        step1: this.isStep1, // step1: 회수지 정보
        step2: this.isStep2, // step2: 사유/변경
        step3: this.isStep3, // step3 : 배송비결제
      }
    },
    stepNextBtn() {
      this.stepActive = 2
      this.isStep1 = false
      this.isStep2 = true;
      window.scrollTo(0,0);
    },
    stepNextBtn1() {
      this.stepActive = 3
      this.isStep2 = false
      this.isStep3 = true
      window.scrollTo(0,0);
    },
    applyNextBtn(){
      this.applyNext = false
      this.applyPreocess = true
      window.scrollTo(0,0);
    },
    applyCompleteBtn(){
      this.applyPreocess = false
      this.applyComplete = true
      window.scrollTo(0,0);
    },
    newLine(str) {
      return String(str).replace(/(?:\r\n|\r|\n)/g, '</span>','</br>')
    }
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/order.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>