<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/OR/guide/Structure 참고 -->
    <div class="content-wrap">
      <CommonContentsLeftMenu :title="'마이페이지'" :url="'/json/mypage_left_menu.json'" :active="'/ko/OR/orderShippingList'"></CommonContentsLeftMenu>
      <div class="my-page-r-box orderinquiry-detail"><!-- 마이페이지 --><!-- [퍼블수정]22.11.30 주문 조회 상세 수정 -->
        <div class="cmp-page-tit">
          <h2 class="tit">주문 조회 상세</h2>
        </div>

        <div class="order-number-box">
          <div class="line-box">
            <p class="cmp-font">주문번호<span class="ml-8">211222P12345678</span></p>
            <p class="cmp-font fnt-13">2021.12.22 13:00</p>
          </div>
        </div>

        <!--수령매장 정보-->
        <div class="pt-14 mt-10 cmp-sub-tit">
          <h3 class="tit cmp-font fnt-20">수령매장 정보</h3><!-- [퍼블수정] 22.09.30 주문조회 수정 -->
        </div>
        <div class="store-info">
            <strong>현대백화점 목동점</strong>
            <div class="icon-group">
              <a href="tel:0310000000" class="cmp-font fnt-14">
                <i v-cmp-icon="{ size: 24, name: 'contact' }">전화하기</i>
                <span>02-517-1311</span>
              </a>
              <button class="cmp-font fnt-13">
                <i v-cmp-icon="{ size: 24, name: 'locoff' }">지도보기 열기</i>
                <span class="line">위치보기</span>
              </button>
            </div>
        </div>
        <div class="info-bg-table mb-24 pt-10 pb-10 pw-20"><!-- [퍼블수정] 22.09.30 주문조회 수정 -->
          <div class="table pr-20">
            <p class="cmp-font fnt-16">수령 예정일<span class="cmp-font pl-10">2021.12.17</span></p>
          </div>
          <div class="table pl-20">
            <p class="cmp-font fnt-16">수령 확정일<span class="cmp-font pl-10">-</span></p>
          </div>
        </div>
        <div class="info-bg-table mb-24 pt-10 pb-10 pw-20"><!-- [퍼블수정] 22.09.30 주문조회 수정 -->
          <div class="table pr-20">
            <p class="cmp-font fnt-16">수령 예정일<span class="cmp-font pl-10">2021.12.17</span></p>
          </div>
          <div class="table pl-20">
            <p class="cmp-font fnt-16">수령 확정일<span class="cmp-font pl-10 c-blue">2021.12.17</span></p>
          </div>
        </div>

        <div class="mb-20 pb-15"><!-- [퍼블수정] 22.09.30 주문조회 수정 -->
          <p class="mb-10">수령 안내</p>
          <ul class="cmp-dotList">
            <li>수령일 확정 시, SMS로 발송된 매장수령권 지참 후 매장에 방문해주세요.</li>
            <li>수령 확정일 1일 후 상품 미수령 시 주문이 자동 취소됩니다.</li>
            <li>매장수령교환권 재발송은 총 3회 가능합니다.</li>
          </ul>
        </div>
        <!--//수령매장 정보-->

        <!-- 매장수령 case -->
        <!-- 매장수령 상품 정보 - 수령일확정 전 [퍼블수정] 22.09.30 주문조회 수정 -->
        <div class="product-row-table">
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
              <template v-for="(item, index) in prdDetailData2">
                <tr :key="index" :class="{'bottom-none':item.notice!==null || item.reason!==null || item.gift_list}">
                  <td class="pw-0">
                    <nuxt-link :to="item.link" class="product-row-unitInfo or-prd-type"><!-- [퍼블수정]23.01.19 상품이미지 : or-prd-type 클래스 추가 -->
                      <div class="product-image" :class="[{'sold-out':item.sold_out},{'gift-type': item.gift_type}]">
                        <v-img :src="item.image" :alt="item.product_name" />
                        <div v-if="item.sold_out" class="sold-out-txt">SOLD OUT</div>
                        <div v-if="item.gift_type" class="cmp-labels">
                          <span class="label black c-white">증정품</span>
                        </div>
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
                    <div class="cmp-font c-blue">주문완료</div><!-- 주문완료 CASE -->
                  </td>
                  <td class="pw-16">
                    <div class="product-row-unitBtn"><!-- 주문완료 CASE -->
                      <v-btn outlined small color="normal">주문 취소</v-btn>
                      <v-btn outlined small color="normal">옵션 변경</v-btn>
                    </div>
                  </td>
                </tr>
                <tr v-if="item.gift_list" v-for="(item3, index3) in item.gift_list" class="gift-type"><!-- [퍼블 수정] 22.09.27 -->
                  <td class="pw-0 ">
                    <nuxt-link :to="item3.link" class="product-row-unitInfo">
                      <div class="product-image" :class="[{'sold-out':item3.sold_out},{'gift-type': item3.gift_type}]">
                        <v-img :src="item3.image" :alt="item3.product_name" />
                        <div v-if="item3.sold_out" class="sold-out-txt">SOLD OUT</div>
                        <div v-if="item3.gift_type" class="cmp-labels">
                          <span class="label black c-white">증정품</span>
                        </div>
                      </div>
                      <div class="product-info-cnt">
                        <!-- [퍼블수정]22.11.07 -->
                        <div :class="[{'cmp-font fnt-16':item3.gift_type},'product-brand']">{{item3.brand_name}}</div>
                        <p v-for="(item4, index4) in item3.product_note" v-html="item4" class="cmp-font fnt-14 mt-6"></p>
                      </div>
                    </nuxt-link>
                  </td>
                  <td></td>
                  <td>
                    <div class="cmp-font c-blue">상품 내 배송</div><!-- 상품 내 배송 CASE -->
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <!-- //매장수령 상품 정보 - 수령일확정 전 [퍼블수정] 22.09.30 주문조회 수정 -->
        <!-- 매장수령 상품 정보 - 수령 후 [퍼블수정] 22.09.30 주문조회 수정 -->
        <div class="product-row-table">
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
              <template v-for="(item, index) in prdDetailData2">
                <tr :key="index" :class="{'bottom-none': item.gift_list}"><!-- [퍼블수정] 22.09.30 주문조회 수정 -->
                  <td class="pw-0">
                    <nuxt-link :to="item.link" class="product-row-unitInfo or-prd-type"><!-- [퍼블수정]23.01.19 상품이미지 : or-prd-type 클래스 추가 -->
                      <div class="product-image" :class="[{'sold-out':item.sold_out},{'gift-type': item.gift_type}]">
                        <v-img :src="item.image" :alt="item.product_name" />
                        <div v-if="item.sold_out" class="sold-out-txt">SOLD OUT</div>
                        <div v-if="item.gift_type" class="cmp-labels">
                          <span class="label black c-white">증정품</span>
                        </div>
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
                    <div class="cmp-font">수령완료</div><!-- 수령완료 CASE -->
                  </td>
                  <td class="pw-16">
                    <div class="product-row-unitBtn"><!-- 수령완료 CASE -->
                      <v-btn outlined small color="normal">상품평 작성</v-btn>
                      <v-btn outlined small color="normal">교환 신청</v-btn>
                      <v-btn outlined small color="normal">반품 신청</v-btn>
                    </div>
                  </td>
                </tr>
                <tr v-if="item.gift_list" v-for="(item3, index3) in item.gift_list" class="gift-type"><!-- [퍼블 수정] 22.09.27 -->
                  <td class="pw-0 ">
                    <nuxt-link :to="item3.link" class="product-row-unitInfo">
                      <div class="product-image" :class="[{'sold-out':item3.sold_out},{'gift-type': item3.gift_type}]">
                        <v-img :src="item3.image" :alt="item3.product_name" />
                        <div v-if="item3.sold_out" class="sold-out-txt">SOLD OUT</div>
                        <div v-if="item3.gift_type" class="cmp-labels">
                          <span class="label black c-white">증정품</span>
                        </div>
                      </div>
                      <div class="product-info-cnt">
                        <!-- [퍼블수정]22.11.07 -->
                        <div :class="[{'cmp-font fnt-16':item3.gift_type},'product-brand']">{{item3.brand_name}}</div>
                        <p v-for="(item4, index4) in item3.product_note" v-html="item4" class="cmp-font fnt-14 mt-6"></p>
                      </div>
                    </nuxt-link>
                  </td>
                  <td></td>
                  <td>
                    <div class="cmp-font c-blue">상품 내 배송</div><!-- 상품 내 배송 CASE -->
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <!-- //매장수령 상품 정보 - 수령 후 [퍼블수정] 22.09.30 주문조회 수정 -->
        <!-- 매장수령 상품 정보 - 수령일확정 [퍼블수정] 22.09.30 주문조회 수정 -->
        <div class="product-row-table">
          <table>
            <caption>상품리스트</caption>
            <colgroup>
              <col style="width:auto;"/>
              <col style="width:248px;"/>
              <col style="width:128px;"/>
              <col style="width:210px;"/> 
            </colgroup>
            <thead>
              <tr>
                <th>상품정보</th>
                <th>상품금액</th>
                <th>주문상태</th>
                <th>매장수령교환권</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, index) in prdDetailData2">
                <tr :key="index" :class="{'bottom-none': item.gift_list}"><!-- [퍼블수정] 22.09.30 주문조회 수정 -->
                  <td class="pw-0">
                    <nuxt-link :to="item.link" class="product-row-unitInfo or-prd-type"><!-- [퍼블수정]23.01.19 상품이미지 : or-prd-type 클래스 추가 -->
                      <div class="product-image" :class="[{'sold-out':item.sold_out},{'gift-type': item.gift_type}]">
                        <v-img :src="item.image" :alt="item.product_name" />
                        <div v-if="item.sold_out" class="sold-out-txt">SOLD OUT</div>
                        <div v-if="item.gift_type" class="cmp-labels">
                          <span class="label black c-white">증정품</span>
                        </div>
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
                  <td class="pw-16">
                    <div class="cmp-font c-blue">수령일확정</div>
                  </td>
                  <td class="pw-16">
                      <p class="cmp-font mb-20">202110250012356446</p>
                      <!-- 매장수령교환권 재발송 -->
                      <v-btn depressed outlined :ripple="false" color="normal" width="160px" class="cmp-font fnt-14">매장수령교환권 재발송</v-btn>
                      <p class="cmp-font fnt-14 mt-10">발송 횟수 : 0 / 3회</p>
                  </td>
                </tr>
                <tr v-if="item.gift_list" v-for="(item3, index3) in item.gift_list" class="gift-type"><!-- [퍼블 수정] 22.09.27 -->
                  <td class="pw-0 ">
                    <nuxt-link :to="item3.link" class="product-row-unitInfo">
                      <div class="product-image" :class="[{'sold-out':item3.sold_out},{'gift-type': item3.gift_type}]">
                        <v-img :src="item3.image" :alt="item3.product_name" />
                        <div v-if="item3.sold_out" class="sold-out-txt">SOLD OUT</div>
                        <div v-if="item3.gift_type" class="cmp-labels">
                          <span class="label black c-white">증정품</span>
                        </div>
                      </div>
                      <div class="product-info-cnt">
                        <!-- [퍼블수정]22.11.07 -->
                        <div :class="[{'cmp-font fnt-16':item3.gift_type},'product-brand']">{{item3.brand_name}}</div>
                        <p v-for="(item4, index4) in item3.product_note" v-html="item4" class="cmp-font fnt-14 mt-6"></p>
                      </div>
                    </nuxt-link>
                  </td>
                  <td></td>
                  <td>
                    <div class="cmp-font c-blue">상품 내 배송</div><!-- 상품 내 배송 CASE -->
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <!-- 매장수령 상품 정보 [퍼블수정] 22.09.30 주문조회 수정 -->
        <!-- 매장수령 case -->

        <!-- 상품 상세 증정&사은품 table calse -->
        <div class="cmp-sub-tit col mt-60">
          <h3 class="tit">사은품</h3><!-- [퍼블수정] 22.09.30 주문조회 수정 -->
        </div>
        <div class="product-row-table">
          <table>
            <caption>상품리스트</caption>
            <colgroup>
              <col style="width:auto;"/>
              <col style="width:128px;"/>
              <col style="width:128px;"/> 
            </colgroup>
            <thead>
              <tr>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, index) in giftsData">
                <tr :key="index">
                  <td class="pw-24 pl-0"><!-- [퍼블수정] 22.09.30 주문조회 수정 -->
                    <div class="product-row-unitInfo gifts-type">
                      <div class="product-image">
                        <div v-if="item.type==='mileage'" class="mileage-txt">
                          <div class="txt"><strong>{{item.mileage | number}}</strong>M</div>
                        </div>
                        <v-img v-else :src="item.image" :alt="item.type==='event'?'사은품 이미지':'증정품 이미지'"></v-img>
                      </div>
                      <div class="product-info-cnt">
                        <div v-if="item.type==='mileage'" class="product-brand">마일리지 적립</div>
                        <div v-else class="product-brand">{{item.name}}</div>
                        <div v-if="item.type==='mileage'" class="product-name">{{item.accrual_date + '이후 적립'}}</div>
                        <div v-else class="product-name" v-html="item.desc"></div><!-- [퍼블수정] 22.09.30 주문조회 수정 -->
                      </div>
                    </div>
                  </td>
                  <td class="pw-0">
                    <div v-if="index == 0">
                      <span class="cmp-font c-blue">상품 내 배송</span>
                    </div>
                    <div v-if="index == 1">
                      <span class="cmp-font c-blue">상품준비중</span>
                    </div>
                    <div v-if="index == 3">
                      <span class="cmp-font c-blue">배송중</span>
                    </div>
                    <div v-if="index == 4">
                      <span class="cmp-font">배송완료</span>
                    </div>
                  </td>
                  <td class="pw-16">
                    <div v-if="index == 1 | index == 3 | index == 4" class="product-row-unitBtn">
                      <v-btn outlined small color="normal">배송 조회</v-btn>
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <!-- //상품 상세 증정&사은품 table calse -->

        <!-- [퍼블수정] 22.09.30 주문조회 수정 -->
        <div class="cmp-sub-tit col mt-60">
          <h3 class="tit">최초 결제정보</h3>
        </div>
        <div class="refund-box">
          <ul class="cust card-info-box">
            <li>
              <p class="cmp-font fnt-14 mb-6">상품금액</p>
              <p class="cmp-font fnt-20">1,000,000<span class="cmp-font fnt-14 ml-2">원</span></p>
            </li>
            <li class="sign minus"></li>
            <li>
              <p class="cmp-font fnt-14 mb-6">할인혜택</p>
              <p class="cmp-font fnt-20">66,000<span class="cmp-font fnt-14 ml-2">원</span></p>
            </li>
            <li class="sign plus"></li>
            <li>
              <p class="cmp-font fnt-14 mb-6">배송비</p>
              <p class="cmp-font fnt-20">0<span class="cmp-font fnt-14 ml-2">원</span></p>
            </li>
            <li class="sign equal"></li>
            <li>
              <p class="cmp-font fnt-14 mb-6">최종 결제 금액</p>
              <p class="cmp-font fnt-20">934,000<span class="cmp-font fnt-14 ml-2">원</span></p>
              <p class="card-info"><b>신용카드</b> / 삼성카드<span class="ml-6">일시불</span></p>
            </li>
          </ul>
          <div class="cmp-info info-type2">
            <span class="tit">할인혜택</span>
            <dl>
              <dt>한섬VVIP할인</dt>
              <dd>-50,000<span>원</span></dd>
              <dt>쿠폰할인</dt>
              <dd>-5,000<span>원</span></dd>
              <dt>한섬마일리지</dt>
              <dd>-3,000<span>원</span></dd>
              <dt>H.Point</dt>
              <dd>-5,000<span>원</span></dd>
              <dt>e-money</dt>
              <dd>-3,000<span>원</span></dd>
            </dl>
          </div>
        </div>
        <!-- [퍼블수정] 22.09.30 주문조회 수정 -->

        <!-- 적립 포인트 [퍼블수정] 22.09.30 주문조회 수정 -->
        <div class="cmp-sub-tit col line mt-60">
          <h3 class="tit">적립 포인트</h3>
        </div>
        <div class="return-info no-tit no-bt">
          <div class="box">
            <ul class="line-list"><!-- [퍼블수정]23.02.13 오에라 마일리지 삭제 수정 -->
              <li class="cmp-font">한섬마일리지<span class="bold ml-12">84,250</span><span class="ml-2">M</span></li>
              <li class="cmp-font">H.Point<span class="bold ml-12">1,685</span><span class="ml-2">P</span></li>
            </ul>
            <!-- [퍼블수정]23.02.13 오에라 마일리지 삭제 -->
          </div>
        </div>
        <!-- // 적립 포인트 [퍼블수정] 22.09.30 주문조회 수정 -->

        <!-- 환불 안내 -->
        <v-expansion-panels accordion class="cmp-acc acc-type2 last-bt-none">
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
      <!-- 팝업 -->
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
      applyPreocess : false,
      applyComplete : false,
      drawer: null,
      MarketTicketModel : [{open : false},{open : false}],
      prdDetailData2: [
        // 상품 상세 데이터
        {
          brand_name: 'orea',
          product_name: '퓨리파잉 클렌징 폼',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img2.png',
          options: ['MULTI', 'FR', '1개'],
          sell_price: '355000',
          discount: null,
          price: null,
          link: '#n',
          notice: null,// [퍼블수정] 22.09.30 주문조회 수정 
          reason: null,// [퍼블수정] 22.09.30 주문조회 수정 
          sold_out: false,
          zzim : false,
        },
        {
          brand_name: 'FOURM STUDIO',
          product_name: '크리스탈 니트 가디건',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
          options: ['KAHKI', '90', '1개'],
          sell_price: '29000',
          link: '#n',
          gift: true,
          notice: null,// [퍼블수정] 22.09.30 주문조회 수정 
          reason: null,// [퍼블수정] 22.09.30 주문조회 수정 
          sold_out: false,
          zzim : false,
          gift_list: [    
            {
              brand_name: '트위스트 펄 스카프 링',
              product_note: ['래트에서 150만원 이상 구매 시,<br/>트위스트 펄 스카프 링을 드립니다.'],
              image: 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-6.png',
              options: ['KAHKI', '90', '1개'],
              gift_type: true,
              sell_price: '29000',
              link: '#n',
              gift: true,
              notice: ['일 년 중 가장 특별한 오늘, 생일을 축하드립니다. 소중한 분들과 행복한 시간을 보내세요. 일 년 중 가장 특별한 생일을 축하드립니다. 일 년 중 가장 특별한 생일을 축하드립니다.'],
              sold_out: false,
              zzim : false,
            }
          ]
        },
      ],
      tabs: 0,
      giftsData : [ // 증정품,사은품
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-6.png',
          name : '오에라 화장품 샘플',
          desc : '오에라 화장품 샘플 100만원 이상 구매시 프리미엄 샘플 세트(파우치+에센스30ml)을 증정합니다.오에라 화장품 샘플 100만원 이상 구매시 프리미엄 샘플 세트(파우치+에센스30ml)을 증정합니다.오에라 화장품 샘플 100만원 이상 구매시 프리미엄 샘플 세트(파우치+에센스30ml)을 증정합니다.',
        },
      ],
      cmpAccList: [{
        text: '주문 조회 안내',// [퍼블수정] 22.09.30 주문조회 수정 
        cont: [{
            tit : null,
            txt : [
            '한섬마일리지는 배송 완료 후 10일 후 지급 됩니다.',
            '교환/반품신청은 배송 완료 후 7일까지 가능 합니다.',
            '상품준비중 상태에서는 주문 취소 및 옵션/주소 변경이 불가 합니다.',
            '주문 시 사용한 한섬마일리지, H.Point, e-money는 모두 동일 수단으로 환불됩니다.',
            '한섬마일리지는 정상 구매금액의 5%, 아울렛 구매금액의 1% 적립됩니다. (10% 초과 할인상품 제외)',
            ],
            listType : false,
          }],
        },
        {
          text: '환불 안내',
          cont: [{
            tit : null,
            txt : [
            '쿠폰 적용된 상품의 취소/반품 시, 상품금액에 따라 쿠폰 할인된 금액을 차감 후 환불됩니다.',
            '쿠폰 유효기간이 만료된 쿠폰은 복원이 불가합니다.',
            '쿠폰 적용된 상품 취소/반품 시, 주문금액 보다 적은 금액이 환불될 수 있습니다.',
            '특정 구매금액 이상일때 적용되는 쿠폰의 경우 환불로 인해 구매금액이 감소할 때 쿠폰 적용이 취소 될 수 있습니다.',
            '반품 시 환불예상금액에서 반품배송비가 차감될 수 있습니다.',
            "반품 배송비는 한섬마일리지 > e-money > 주 결제수단(신용카드 등) 순으로 차감됩니다.",  //  [퍼블수정] 22.09.30 주문조회 수정
            '반품 배송비 결제를 [환불금에서 차감]으로 선택하신 경우는 환불 예상금액에서 반품 배송비가 차감됩니다.', //  [퍼블수정] 22.09.30 주문조회 수정
            '환불 시 결제수단별 환불 순서는 다음과 같습니다.',
            ],
            listType : false,
          },
          {
            tit : null,
            txt : [
            '1. 결제 수단 환불 ',
            '2. 한섬 마일리지 환급',
            '3. e-money 환급',
            '4. H.Point 환급',
            ],
            listType : true
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
</style>