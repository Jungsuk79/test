<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <CommonContentsLeftMenu :title="'마이페이지'" :url="'/json/mypage_left_menu.json'" :active="'/ko/OR/orderShippingList'"></CommonContentsLeftMenu>
      <div class="my-page-r-box"><!-- 마이페이지 -->
        <div class="cmp-page-tit">
          <h2 class="tit">비회원 주문 조회</h2>
        </div>
        <!-- 상단 공지 -->
        <div v-if="topNotice" class="cmp-info top-notice">
          <p class="txt">배송지 긴급 공지 안내메시지 노출.배송지 긴급 공지 안내메시지 노출.배송지 긴급 공지 안내메시지 노출.</p>
          <v-btn icon small class="del" @click="topNotice = false">
            <i v-cmp-icon="{ size: 18, name: 'close', invert: 1 }">닫기</i>
          </v-btn>
        </div>
        <!--// 상단 공지 -->

        <!-- 날짜 검색 -->
        <v-layout row align-center justify-space-between class="pb-10">
          <div class="cmp-line-radio">
            <div class="radio-item">
              <input id="dateRadio0" type="radio" name="dateRadio" checked />
              <label for="dateRadio0">1주일</label>
            </div>
            <div class="radio-item">
              <input id="dateRadio1" type="radio" name="dateRadio" />
              <label for="dateRadio1">1개월</label>
            </div>
            <div class="radio-item">
              <input id="dateRadio2" type="radio" name="dateRadio" />
              <label for="dateRadio2">3개월</label>
            </div>
          </div>
          <CommonCalendarBox />
        </v-layout>
        <!-- // 날짜 검색 -->

        <!-- 카테고리 필터 -->
        <div class="pt-20 pb-10">
          <v-layout row class="cmp-form-chkGroup left">
              <v-checkbox label="택배" class="cmp-form-checkbox"></v-checkbox>
              <v-checkbox label="퀵배송" class="cmp-form-checkbox"></v-checkbox>
              <v-checkbox label="매장수령" class="cmp-form-checkbox"></v-checkbox>
              <v-checkbox label="선물" class="cmp-form-checkbox"></v-checkbox>
              <v-checkbox label="e-Gift Card" class="cmp-form-checkbox"></v-checkbox>
          </v-layout>
        </div>
        <!-- //카테고리 필터 -->

        <!-- 상품 테이블 -->
        <div class="product-row-table">
          <table>
            <caption>상품리스트</caption>
            <colgroup>
              <col style="width:165px;"/>
              <col style="width:82px;"/>
              <col style="width:auto;"/>
              <col style="width:116px;"/>
              <col style="width:94px;"/>
              <col style="width:128px;"/>
            </colgroup>
            <thead>
              <tr>
                <th class="pw-16">주문번호</th>
                <th class="pw-16">배송</th>
                <th class="pw-16">상품정보</th>
                <th class="pw-16">상품금액</th>
                <th class="pw-16">주문상태</th>
                <th class="pw-16">확인&#47;신청</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, index) in serchOrder">
                <tr :key="index+`1`">
                  <td :rowspan="2" class="pw-16">
                    <nuxt-link class="cmp-font button mb-4" :to="item.order_link"><span class="line">{{item.order_id}}</span></nuxt-link><!-- [퍼블수정]23.01.19 간격 추가 -->
                    <p class="cmp-font fnt-14">{{item.order_date}}</p>
                  </td>
                  <td :rowspan="2" class="pw-16">
                    <span v-if="index == 0" class="cmp-font">퀵배송</span><!-- 퀵배송 CASE -->
                    <span v-if="index == 1" class="cmp-font">택배</span><!-- 택배 CASE -->
                    <span v-if="index == 2" class="cmp-font">택배</span><!-- 택배 CASE -->
                    <span v-if="index == 3" class="cmp-font">택배</span><!-- 택배 CASE -->
                    <span v-if="index == 4" class="cmp-font">택배</span><!-- 택배 CASE -->
                    <span v-if="index == 5" class="cmp-font">택배</span><!-- 택배 CASE -->

                    <!-- 매장수령 CASE
                    <span v-if="index == 4" class="cmp-font">매장수령</span>

                    e-Gift Card CASE 
                    <span v-if="index == 5" class="cmp-font">e-Gift Card</span>
                    -->
                  </td>
                </tr>
                <tr :key="index">
                  <td colspan="4" class="inside-table">
                    <table v-for="(item2,index2) in item.prod_list" :key="index2">
                      <colgroup>
                        <col style="width:auto;"/>
                        <col style="width:116px;"/>
                        <col style="width:94px;"/>
                        <col style="width:128px;"/>
                      </colgroup>
                      <tbody>
                        <tr :class="{'bottom-none':item2.notice!==null}">
                          <td class="pw-0">
                            <nuxt-link :to="item2.link" class="product-row-unitInfo or-prd-type"><!-- [퍼블수정]23.01.19 상품이미지 : or-prd-type 클래스 추가 -->
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
                              <div class="product-sellprice"><strong>{{item2.sell_price | number}}</strong> 원</div>
                              <div v-if="item2.price || item.discount" class="product-price-cnt">
                                <del class="product-price-origin">{{item2.price | number}} 원</del>
                                <span class="product-discount">{{item2.discount}}<em>%</em></span>
                              </div>
                            </nuxt-link>
                          </td>
                          
                          <td class="pw-0">
                            <div v-if="index == 0 & index2 == 0" class="cmp-font c-blue">주문완료</div><!-- 주문완료 CASE -->
                            <div v-if="index == 1 & index2 == 0" class="cmp-font c-blue">상품 준비중</div><!-- 배송중 CASE -->
                            <div v-if="index == 1 & index2 == 1" class="cmp-font c-blue">배송중</div><!-- 배송중 CASE -->
                            <div v-if="index == 1 & index2 == 2"><!-- 주문취소 CASE -->
                              <!-- [퍼블수정]22.11.07 -->
                              <p class="cmp-font">주문취소</p>
                              <p class="cmp-font c-gray">2021.10.30</p>
                            </div>
                            <div v-if="index == 2 & index2 == 0"><!-- 반품접수 CASE -->
                              <p class="cmp-font c-blue">반품접수</p>
                              <p class="cmp-font c-gray">2021.10.30</p>
                            </div>
                            <div v-if="index == 3 & index2 == 0"><!-- 반품신청 CASE -->
                              <p class="cmp-font c-blue">반품신청</p>
                              <p class="cmp-font c-gray">2021.10.30</p>
                            </div>
                            <div v-if="index == 4 & index2 == 0"><!-- 교환신청 CASE -->
                              <p class="cmp-font c-blue">교환신청</p>
                              <p class="cmp-font c-gray">2021.10.30</p>
                            </div>
                            <div v-if="index == 5 & index2 == 0" class="cmp-font">배송완료</div><!-- 배송완료 CASE -->
                            <div v-if="index == 5 & index2 == 1" class="cmp-font c-blue">교환(대기)</div><!-- 교환(대기) CASE -->
                            <div v-if="index == 5 & index2 == 2" class="cmp-font c-blue"><!-- 교환완료 CASE -->
                              <p class="cmp-font">교환완료</p>
                              <p class="cmp-font c-gray">{{item2.request_date}}</p>
                            </div>
                          </td>

                          <td class="pw-16">
                            <div v-if="index == 0 & index2 == 0" class="product-row-unitBtn"><!-- 주문완료 CASE -->
                              <v-btn outlined small color="normal">주문 취소</v-btn>
                              <v-btn outlined small color="normal">옵션 변경</v-btn>
                            </div>
                            <div v-if="index == 1 & index2 == 1" class="product-row-unitBtn"><!-- 배송중 CASE -->
                              <v-btn outlined small color="normal">배송 조회</v-btn>
                              <v-btn outlined small color="normal">수령 확인</v-btn>
                            </div>
                            <div v-if="index == 1 & index2 == 2" class="product-row-unitBtn"><!-- 주문취소 CASE -->
                              <v-btn outlined small color="normal">취소 상세보기</v-btn>
                            </div>
                            <div v-if="index == 2 & index2 == 0" class="product-row-unitBtn"><!-- 반품접수 CASE -->
                              <v-btn outlined small color="normal">반품 상세보기</v-btn>
                            </div>
                            <div v-if="index == 3 & index2 == 0" class="product-row-unitBtn"><!-- 반품신청 CASE -->
                              <v-btn outlined small color="normal">반품 상세보기</v-btn>
                            </div>
                            <div v-if="index == 4 & index2 == 0" class="product-row-unitBtn"><!-- 교환신청 CASE -->
                              <v-btn outlined small color="normal">교환 상세보기</v-btn>
                              <v-btn outlined small color="normal">상품평 작성</v-btn>
                            </div>
                            <div v-if="index == 5 & index2 == 0" class="product-row-unitBtn"><!-- 배송완료 CASE -->
                              <v-btn outlined small color="normal">배송 조회</v-btn>
                              <v-btn outlined small color="normal">상품평 작성</v-btn>
                              <v-btn outlined small color="normal">교환 신청</v-btn>
                              <v-btn outlined small color="normal">반품 신청</v-btn>
                            </div>
                            <div v-if="index == 5 & index2 == 1" class="product-row-unitBtn"><!-- 교환(대기) CASE -->
                              <v-btn outlined small color="normal">배송비 결제</v-btn>
                            </div>
                            <div v-if="index == 5 & index2 == 2" class="product-row-unitBtn"><!-- 교환완료 CASE -->
                              <v-btn outlined small color="normal">교환 상세보기</v-btn>
                              <v-btn outlined small color="normal">상품평 작성</v-btn>
                              <v-btn outlined small color="normal">교환 신청</v-btn>
                              <v-btn outlined small color="normal">반품 신청</v-btn>
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
            </tbody>
          </table>
        </div>
        <!-- //상품 테이블 -->
        
        <div class="btm-notice none-bt">
          <h2 class="article-title">주문 조회 안내</h2>
          <ul class="cmp-dotList">
            <li>교환/반품신청은 배송 완료 후 7일까지 가능 합니다.</li>
            <li>상품준비중 상태에서는 주문 취소 및 옵션/주소 변경이 불가 합니다.</li>
          </ul>
        </div>

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
        page: 1,
        topNotice: true,
        applyNext : true,
        applyPreocess : false,
        applyComplete : false,
        drawer: null,
        serchOrder: [
          // 주문 조회 데이터
          {
            order_id:'202110225600002',
            order_link: '#n',
            order_date: '2021.10.28 17:01',
            prod_list:[
              {
                brand_name: 'orea',
                product_name: '퓨리파잉 클렌징 폼',
                image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img2.png',
                options: ['MULTI', 'FR', '1개'],
                sell_price: '355000',
                link: '#n',
                notice: ['오에라 상품은 전용 박스로 별도배송'],
                sold_out: false,
                zzim : false,
              },
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
</style>