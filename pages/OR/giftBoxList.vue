<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <!-- [퍼블수정]23.02.17 menuList 추가 -->
      <CommonContentsLeftMenu :title="'마이페이지'" :left-data="menuList" :active="'/ko/OR/giftBoxList'"></CommonContentsLeftMenu>
      <div class="my-page-r-box giftbox-list"><!-- 마이페이지 --><!-- [퍼블수정] 22.09.30 주문조회 수정 -->
        <div class="cmp-page-tit">
          <h2 class="tit">선물함</h2>
        </div>

        <!-- 상단공지 -->
        <div v-if="topNotice" class="cmp-info top-notice mb-30"><!-- [퍼블수정] 22.09.30 주문조회 수정 -->
          <p class="txt">배송지 긴급 공지 안내메시지 노출.배송지 긴급 공지 안내메시지 노출.배송지 긴급 공지 안내메시지 노출.</p>
          <v-btn icon small class="del" @click="topNotice = false">
            <i v-cmp-icon="{ size: 18, name: 'close', invert: 1 }">닫기</i>
          </v-btn>
        </div>
        <!-- //상단공지 -->

        <!-- 탭메뉴 -->
        <div class="cmp-tabs tabs-actionTop">
          <v-tabs v-model="tabs" fixed-tabs>
            <v-tab>받은 선물함</v-tab>
            <v-tab>보낸 선물함</v-tab>
          </v-tabs>
        </div>
        <!-- //탭메뉴 -->

        <!-- 탭 내용 -->
        <v-tabs-items v-model="tabs" touchless class="mb-30">
          <!-- 받은 선물함 -->
          <v-tab-item :transition="false">
            <!-- 날짜 검색 -->
            <v-layout row align-center justify-space-between class="mt-30">
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
            <!-- //날짜 검색 -->

            <!-- 상품 테이블 [퍼블수정] 22.09.30 주문조회 수정 -->
            <div class="product-row-table mt-30">
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
                        <!-- 보낸사람 -->
                        <p v-if="index == 0" class="cmp-font mb-10"><b>김한섬님</b>이 보낸 선물</p>
                        <p v-else class="cmp-font mb-10"><b>이한섬님</b>이 보낸 선물</p>
                        <!-- // 보낸사람 -->

                        <nuxt-link class="cmp-font button" :to="item.order_link"><span class="line">{{item.order_id}}</span></nuxt-link>
                        <p class="cmp-font fnt-14">{{item.order_date}}</p>

                        <!-- 배송지 미 입력시 -->
                        <div v-if="index == 0" class="mt-20"><!-- 주문완료 CASE -->
                          <v-btn outlined small color="normal" width="96px" height="36px">배송지 입력</v-btn>
                          <p class="cmp-font fnt-12 mt-10 c-red">2021.12.24까지<br>배송지를 입력하지 않으시면<br>자동취소됩니다.</p>
                        </div>
                        <!-- //배송지 미 입력시 -->
                      </td>
                      <td :rowspan="2" class="pw-16">
                        <span v-if="index == 0" class="cmp-font fnt-14">퀵배송</span><!-- 퀵배송 CASE -->
                        <span v-else class="cmp-font fnt-14">택배</span><!-- 택배 CASE -->

                        <!-- 매장수령 CASE
                          <span class="cmp-font fnt-14">매장<br/>수령</span>

                          e-Gift Card CASE 
                          <span class="cmp-font fnt-14">e-Gift<br/>Card</span>
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
                            <tr :class="{'bottom-none':item2.notice!==null}"><!-- [개발 확인 부탁드립니다] -->
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
                              <td class="pw-16">
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
                                <div v-if="index == 0 & index2 == 1" class="cmp-font c-blue">상품 준비중</div><!-- 상품 준비중 CASE -->
                                <div v-if="index == 1 & index2 == 0" class="cmp-font ">배송완료</div><!-- 배송완료 CASE -->
                              </td>

                              <td class="pw-16">
                                <div class="product-row-unitBtn">
                                  <v-btn v-if="index == 0 & index2 == 0" outlined small color="normal">옵션 변경</v-btn>
                                  <v-btn v-if="index == 1 & index2 == 0" outlined small color="normal">배송 조회</v-btn>
                                </div>
                              </td>
                            </tr>
                            <!-- [퍼블수정] 22.09.30 주문조회 수정 -->
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
                            <!-- // [퍼블수정] 22.09.30 주문조회 수정 -->
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </template>
                  <tr>
                    <td colspan="6" class="pt-0 pb-0">
                      <CommonNoData msg="받은 선물이 없습니다.<br>따뜻한 마음을 선물해보세요.">
                        <template #button><!-- [퍼블수정] 22.09.30 주문조회 수정 -->
                          <div class="btn-box">
                            <v-btn outlined color="primary" class="mr-10" to="#n" width="260px" height="60px">여성 선물하기</v-btn>
                            <v-btn outlined color="primary" to="#n" width="260px" height="60px">남성 선물하기</v-btn>
                          </div>
                        </template>
                      </CommonNoData>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- //상품 테이블 -->

            <!-- [퍼블수정] 22.09.30 -->
            <ProductListPaging />
            <!-- [퍼블수정] 22.12.01 상품 없을 시 비노출 -->
            <div class="btm-notice">
              <ul class="cmp-dotList">
                <li>받은선물은 주문완료 후 3일 이내에 배송지를 입력하지 않으시면 자동 취소됩니다. (주말 포함 3일 기준)</li>
                <li>옵션 변경은 동일 금액에 한해서 배송지 입력 전까지 가능합니다.</li>
              </ul>
            </div>
            <!-- //[퍼블수정] 22.12.01 상품 없을 시 비노출 -->
          </v-tab-item>
          <!-- //받은 선물함 [퍼블수정] 22.09.30 주문조회 수정 -->

          <!-- 보낸 선물함 -->
          <v-tab-item :transition="false">
            <!-- 날짜 검색 -->
            <v-layout row align-center justify-space-between class="mt-30">
              <div class="cmp-line-radio">
                <div class="radio-item">
                  <input id="dateRadio2_0" type="radio" name="dateRadio2" checked />
                  <label for="dateRadio2_0">1주일</label>
                </div>
                <div class="radio-item">
                  <input id="dateRadio2_1" type="radio" name="dateRadio2" />
                  <label for="dateRadio2_1">1개월</label>
                </div>
                <div class="radio-item">
                  <input id="dateRadio2_2" type="radio" name="dateRadio2" />
                  <label for="dateRadio2_2">3개월</label>
                </div>
              </div>
              <CommonCalendarBox />
            </v-layout>
            <!-- //날짜 검색 -->

            <!-- 상품 테이블 [퍼블수정] 22.09.30 주문조회 수정 -->
            <div class="product-row-table mt-30">
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
                    <tr :key="index+`2`">
                      <td :rowspan="2" class="pw-16">
                        <!-- 보낸사람 -->
                        <p v-if="index == 0" class="cmp-font mb-10"><b>김한섬님</b>에게 보낸 선물</p>
                        <p v-else class="cmp-font mb-10"><b>이한섬님</b>에게 보낸 선물</p>
                        <!-- // 보낸사람 -->
                        <nuxt-link class="cmp-font button" :to="item.order_link"><span class="line">{{item.order_id}}</span></nuxt-link>
                        <p class="cmp-font fnt-14">{{item.order_date}}</p>
                      </td>
                      <td :rowspan="2" class="pw-16">
                        <span v-if="index == 0" class="cmp-font fnt-14">퀵배송</span><!-- 퀵배송 CASE -->
                        <span v-else class="cmp-font fnt-14">택배</span><!-- 택배 CASE -->

                        <!-- 매장수령 CASE
                        <span class="cmp-font fnt-14">매장수령</span>

                        e-Gift Card CASE 
                        <span class="cmp-font fnt-14">e-Gift Card</span>
                        -->
                      </td>
                    </tr>
                    <tr :key="index">
                      <td colspan="4" class="inside-table pw-0">
                        <table v-for="(item2,index2) in item.prod_list" :key="index2">
                          <colgroup>
                            <col style="width:auto;"/>
                            <col style="width:116px;"/>
                            <col style="width:94px;"/>
                            <col style="width:128px;"/>
                          </colgroup>
                          <tbody>
                            <tr :class="{'bottom-none':item2.notice!==null}"><!-- [개발 확인 부탁드립니다] -->
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
                              <td class="pw-16">
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
                                <div v-if="index == 0 & index2 == 1" class="cmp-font c-blue">상품 준비중</div><!-- 상품 준비중 CASE -->
                                <div v-if="index == 1 & index2 == 0" class="cmp-font ">배송완료</div><!-- 배송완료 CASE -->
                              </td>

                              <td class="pw-16">
                                <div class="product-row-unitBtn"><!-- 주문완료 CASE -->
                                  <v-btn v-if="index == 0 & index2 == 0" outlined small color="normal">옵션 변경</v-btn>
                                  <v-btn v-if="index == 1 & index2 == 0" outlined small color="normal">배송 조회</v-btn>
                                </div>
                              </td>
                            </tr>
                            <!-- [퍼블수정] 22.09.30 주문조회 수정 -->
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
                            <!-- // [퍼블수정] 22.09.30 주문조회 수정 -->
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </template>
                  <tr>
                    <td colspan="6" class="pt-0 pb-0">
                      <CommonNoData  msg="보낸 선물이 없습니다.<br>따뜻한 마음을 선물해보세요.">
                        <template #button><!-- [퍼블수정] 22.09.30 주문조회 수정 -->
                          <div class="btn-box">
                            <v-btn outlined color="primary" class="mr-10" to="#n" width="260px" height="60px">여성 선물하기</v-btn>
                            <v-btn outlined color="primary" to="#n" width="260px" height="60px">남성 선물하기</v-btn>
                          </div>
                        </template>
                      </CommonNoData>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- //상품 테이블 [퍼블수정] 22.09.30 주문조회 수정 -->
            <!-- [퍼블수정] 22.09.30 -->
            <ProductListPaging />
            <!-- [퍼블수정] 22.12.01 상품 없을 시 비노출 -->
            <div class="btm-notice">
              <ul class="cmp-dotList">
                <li>받은선물은 주문완료 후 3일 이내에 배송지를 입력하지 않으시면 자동 취소됩니다. (주말 포함 3일 기준)</li>
                <li>옵션 변경은 동일 금액에 한해서 배송지 입력 전까지 가능합니다.</li>
              </ul>
            </div>
            <!-- //[퍼블수정] 22.12.01 상품 없을 시 비노출 -->
          </v-tab-item>
          <!-- // 보낸 선물함 -->
        </v-tabs-items>
        <!-- //탭 내용 -->
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
      // Tabs
      tabs: 0,
      tab: null,
      topNotice : true, // 상단공지
      serchOrder: [
        // 주문 조회 데이터
        {
          order_id:'202110225600000',
          order_link: '#n',
          order_date: '2021.10.28 17:01',
          prod_list:[
            {
              brand_name: 'FOURM MEN’S LOUNGE',
              product_name: '[BEARBRICK] 사이키델릭 페이즐리',
              image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
              options: ['BLACK', '95', '1개'],
              sell_price: '355000',
              link: '#n',
              notice: null,
              sold_out: false,
              zzim : false,
              request_date: '2021.10.30',
            },
            {
              brand_name: 'FOURM MEN’S LOUNGE',
              product_name: '[BEARBRICK] 사이키델릭 페이즐리',
              image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
              options: ['BLACK', '90', '2개'],
              sell_price: '355000',
              link: '#n',
              notice: null,
              sold_out: false,
              zzim : false,
            },
          ]
        },
        {
          order_id:'202110225600001',
          order_link: '#n',
          order_date: '2021.10.28 17:01',
          prod_list:[
            {
              brand_name: 'MINE',
              product_name: '컬러 블록 니트 가디건 컬러 니트',
              image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
              options: ['BLACK', '100', '3개'],
              sell_price: '355000',
              link: '#n',
              notice: ['오에라 상품은 전용 박스로 별도배송'],
              sold_out: false,
              zzim : false,
            }
          ]
        },
      ],
    }
  },
  //   [퍼블수정]23.02.17 menuList 추가
  created() {
    const me = this
    const json = require('~/static/json/mypage_left_menu.json')
    me.menuList = json.list
  },
  methods: {
    zzimBtn(e){
      const cl = e.currentTarget.classList
      if(cl.contains("on")){
        cl.remove("on")
      }else{
        cl.add("on")
      }
    }
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/order.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>