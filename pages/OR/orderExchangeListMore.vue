<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/OR/guide/Structure 참고 -->
    <div class="content-wrap">
      <CommonContentsLeftMenu :title="'마이페이지'" :url="'/json/mypage_left_menu.json'" :active="'/ko/OR/orderShippingList'"></CommonContentsLeftMenu>
      <div class="my-page-r-box order-exchangeList"><!-- 마이페이지 -->

        <div class="cmp-page-tit"><!-- 페이지 타이틀 -->
          <h2 class="tit">교환 상세</h2>
        </div>
        
        <!-- 교환대상이 2개 이상 일 때 [퍼블수정] 22.09.30 주문조회 수정 -->
        <v-expansion-panels accordion class="cmp-acc acc-type3" v-model="panel" multiple>
          <v-expansion-panel v-for="(item, i) in 2" :key="i">
            <v-expansion-panel-header class="cmp-font fnt-18"
              >교환신청 <span class="cmp-font fnt-18 bold ml-10">2022.11.08</span>
              <template #actions>
                <i class="cmp-icon-etc cmp-icon-down">열기/닫기</i>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="order-number-box no-line pb-7">
                <div class="line-box">
                  <p class="cmp-font">주문번호<span class="ml-8">211222P12345678</span></p>
                  <p class="cmp-font fnt-13">2021.12.22 13:00</p>
                </div>
              </div>
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
                        <td>
                          <div v-if="index == 0" class="cmp-font c-blue">교환접수</div><!-- 교환접수 CASE -->
                          <div v-if="index == 1" class="cmp-font c-blue">교환회수중</div><!-- 교환회수중 CASE -->
                          <div v-if="index == 2" class="cmp-font c-blue">교환회수완료</div><!-- 교환회수완료 CASE -->
                          <div v-if="index == 3" class="cmp-font c-blue">교환배송중</div><!-- 교환배송중 CASE -->
                          <div v-if="index == 4" class="cmp-font c-blue">교환배송완료</div><!-- 교환배송완료 CASE -->
                          <div v-if="index == 0" class="cmp-font c-gray">2021.12.28</div>
                        </td>
                        <td>
                          <div class="product-row-unitBtn">
                            <v-btn outlined small color="normal">배송 조회</v-btn>
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
                                  <span class="bold mr-10">교환 사유 :</span>
                                  <span>{{item.notice}}</span>
                                </p>
                                <!-- [퍼블수정]22.11.21 주문서조회 수정 -->
                                <p class="cmp-font fnt-14 mt-2">{{item.detail_notice}}</p>
                                <p class="cmp-font fnt-14 options pt-10">
                                  <!-- [퍼블수정]22.11.07 -->
                                  <span class="bold mr-10">상품 변경 :</span>
                                  <span v-for="(item2,index2) in item.change_options" :key="index2" class="option">{{item2}}</span>
                                </p>
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
              
              <!-- 배송지 정보  [퍼블수정] 22.09.30 주문조회 수정 -->
              <div class="return-info no-tit no-bt bb-bold">
                <div class="box">
                  <dl class="box-tit flex-ver pb-20">
                    <dt class="txt cmp-font fnt-20">배송지 정보</dt>
                    <dd class="btn cmp-font fnt-13"><button class="button"><span class="line">배송지 변경</span></button></dd>
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
              <!-- // 배송지 정보 [퍼블수정] 22.09.30 주문조회 수정 -->
              <!-- [퍼블수정]22.11.07 소스 수정 및 케이스 수정 -->
              <!-- 교환배송비 - 무료쿠폰 -->
              <div class="return-info no-tit no-bt no-bb pb-20">
                <div class="box">
                  <dl class="box-tit">
                    <dt class="tit cmp-font fnt-20">교환 배송비</dt>
                  </dl>
                  <dl class="pack-info">
                    <dd class="txt cmp-font fnt-18 pb-0 pt-20">쿠폰 사용</dd>
                  </dl>
                </div>
              </div>
              <div class="cmp-info info-type3 table-type">
                <span class="text-left cmp-font fnt-18">교환 배송비</span>
                <span class="text-right cmp-font fnt-20"><b class="mr-2">0</b>원</span>
              </div>
              <!-- // 교환배송비 - 무료쿠폰 -->
              <!-- 교환배송비 - 면제(당사 귀책인 경우) -->
              <div class="return-info no-tit no-bt no-bb pb-20">
                <div class="box">
                  <dl class="box-tit">
                    <dt class="tit cmp-font fnt-20">교환 배송비</dt>
                  </dl>
                </div>
              </div>
              <div class="cmp-info info-type3 table-type">
                <span class="text-left cmp-font fnt-18">교환 배송비</span>
                <span class="text-right cmp-font fnt-20"><b class="mr-2">0</b>원</span>
              </div>
              <!-- // 교환배송비 - 면제(당사 귀책인 경우) -->
              <!-- 교환배송비 - STAR/THE STAR 등급 무제한 무료 쿠폰 -->
              <div class="return-info no-tit no-bt no-bb pb-20">
                <div class="box">
                  <dl class="box-tit">
                    <dt class="tit cmp-font fnt-20">교환 배송비</dt>
                  </dl>
                  <dl class="pack-info">
                    <dd class="txt cmp-font fnt-18 pb-0 pt-20">STAR/THE STAR 등급 혜택</dd>
                  </dl>
                </div>
              </div>
              <div class="cmp-info info-type3 table-type">
                <span class="text-left cmp-font fnt-18">교환 배송비</span>
                <span class="text-right cmp-font fnt-20"><b class="mr-2">0</b>원</span>
              </div>
              <!-- // 교환배송비 - STAR/THE STAR 등급 무제한 무료 쿠폰 -->
              <!-- 교환배송비 - 신용카드 결제(동일 카드) -->
              <div class="return-info no-tit no-bt no-bb pb-20">
                <div class="box">
                  <dl class="box-tit">
                    <dt class="tit cmp-font fnt-20">교환 배송비 합계</dt>
                  </dl>
                  <dl class="pack-info">
                    <dd class="txt cmp-font fnt-18 pb-0 pt-20"><span class="bold">신용카드</span> / <span>삼성카드</span></dd>
                  </dl>
                </div>
              </div>
              <div class="cmp-info info-type3 table-type">
                <span class="text-left cmp-font fnt-18">교환 배송비</span>
                <span class="text-right cmp-font fnt-20"><b class="mr-2">6,000</b>원</span>
              </div>
              <!-- // 교환배송비 - 신용카드 결제(동일 카드) -->
              <!-- 교환배송비 - 신용카드 결제(다른 카드) -->
              <div class="return-info no-tit no-bt no-bb pb-20">
                <div class="box">
                  <dl class="box-tit">
                    <dt class="tit cmp-font fnt-20">교환 배송비 합계</dt>
                  </dl>
                  <dl class="pack-info">
                    <dd class="txt cmp-font fnt-18 pb-0 pt-20"><span class="bold">신용카드</span> / <span>삼성카드</span><span class="add-info">현대카드</span></dd>
                  </dl>
                </div>
              </div>
              <div class="cmp-info info-type3 table-type">
                <span class="text-left cmp-font fnt-18">교환 배송비</span>
                <span class="text-right cmp-font fnt-20"><b class="mr-2">6,000</b>원</span>
              </div>
              <!-- // 교환배송비 - 신용카드 결제(다른 카드) -->
              <!-- 교환배송비 - 신용카드 결제, 배송비 면제(당사귀책), 쿠폰사용, STAR/THE STAR 등급 혜택  -->
              <div class="return-info no-tit no-bt no-bb pb-20">
                <div class="box">
                  <dl class="box-tit">
                    <dt class="tit cmp-font fnt-20">교환 배송비 합계</dt>
                  </dl>
                  <dl class="pack-info">
                    <dd class="txt cmp-font fnt-18 pb-0 pt-20"><span class="bold">신용카드</span> / <span>삼성카드</span><span class="add-info">현대카드</span><span class="add-info">STAR/THE STAR 등급 혜택</span></dd>
                  </dl>
                </div>
              </div>
              <div class="cmp-info info-type3 table-type">
                <span class="text-left cmp-font fnt-18">교환 배송비</span>
                <span class="text-right cmp-font fnt-20"><b class="mr-2">6,000</b>원</span>
              </div>
              <!-- // 교환배송비 - 신용카드 결제, 배송비 면제(당사귀책), 쿠폰사용, STAR/THE STAR 등급 혜택  -->
              <!-- //[퍼블수정]22.11.07 소스 수정 및 케이스 수정 -->
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- //교환대상이 2개 일 때 [퍼블수정] 22.09.30 주문조회 수정 -->

        <v-col cols="12" class="text-center mt-30 pt-5">
          <v-btn large color="primary">교환 취소</v-btn>
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
      panel: [1],
      historyList: [ // 교환내역
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
          change_options: ['BLACK', '90'],
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
          change_options: ['BLACK', '90'],
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
          change_options: ['BLACK', '90'],
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
          change_options: ['BLACK', '90'],
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
          notice: '단순 변심 / 구매의사가 사라짐',
          detail_notice: null,
          prd_numebr : '1',
          attachFileList : [
            'https://img.thehandsome.com/md/publish/dummy/attach-file-img0.png',
            'https://img.thehandsome.com/md/publish/dummy/attach-file-img1.png',
          ],
          change_options: ['BLACK', '90'],
        },
      ], 
      tabs: 0,
      cmpAccList: [{
        text: '환불 안내',// [퍼블수정] 22.09.30 주문조회 수정
        cont: [{
            tit : '쿠폰 적용 상품 교환 환불 안내' ,
            txt : [
            '쿠폰 적용된 상품 취소/교환 시, 상품금액에 따라 쿠폰 할인된 금액 차감 후 환불됩니다.',
            '쿠폰 적용 여부에 따라 취소/교환 신청하신 상품의 판매가 보다 환불금액이 작을 수 있습니다.',
            '특정 금액 이상 구매 시 적용되는 쿠폰의 경우 환불로 인해 구매 금액이 감소할 때 쿠폰 적용이 취소 될 수 있습니다.',
            '기간이 만료된 쿠폰은 복원되어도 사용 불가하며,<br><span>마이페이지>쿠폰함</span>에서 기간을 확인하실 수 있습니다.'
            ],
            listType : false,
          },
          {
            tit : '환불 및 포인트 환급 순서' ,
            txt : [
            '1. 주결제 수단 환불',
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