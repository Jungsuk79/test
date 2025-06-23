<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <!-- [퍼블수정]23.02.17 menuList 추가 -->
      <CommonContentsLeftMenu :title="'마이페이지'" :left-data="menuList" :active="'/ko/OR/orderShippingList'"></CommonContentsLeftMenu>
      <div class="my-page-r-box orderShippingList"><!-- 마이페이지 --><!-- [퍼블 수정] 22.09.27 -->
        <div class="cmp-page-tit">
          <h2 class="tit">주문 조회</h2>
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
              <!-- [무형상품] 추가 (추후 적용)-->
              <!-- <v-checkbox label="컬쳐" class="cmp-form-checkbox"></v-checkbox> -->
          </v-layout>
        </div>
        <!-- //카테고리 필터 -->

        <!-- 상품 테이블 [퍼블수정] 22.09.30 주문조회 수정 -->
        <div class="product-row-table">
          <table>
            <caption>상품리스트</caption>
            <colgroup>
              <col style="width:165px;"/>
              <col style="width:82px;"/>
              <col style="width:335px;"/><!-- [퍼블추가수정] -->
              <col style="width:116px;"/>
              <col style="width:94px;"/>
              <col style="width:128px;"/>
            </colgroup>
            <thead>
              <tr>
                <th class="pw-0">주문번호</th>
                <th class="pw-0">배송</th>
                <th class="pw-0">상품정보</th>
                <th class="pw-0">상품금액</th>
                <th class="pw-0">주문상태</th>
                <th class="pw-0">확인&#47;신청</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, index) in serchOrder">
                <tr :key="index+`1`"><!-- [퍼블 수정] 22.09.27 -->
                  <td :rowspan="2" class="pw-16">
                    <p v-if="index == 3" class="mb-10">더한섬님 외 1명</p>
                    <p v-if="index == 4" class="mb-10">내게 주는 선물</p>
                    <p v-if="index == 5" class="mb-10"><b>더한섬님</b>에게 보낸 선물</p>
                    <p v-if="index == 6" class="mb-10"><b>김한섬님</b>에게 보낸 선물</p>
                    <nuxt-link class="cmp-font button mb-4" :to="item.order_link"><span class="line">{{item.order_id}}</span></nuxt-link><!-- [퍼블수정]23.01.19 간격 추가 -->
                    <p class="cmp-font fnt-14">{{item.order_date}}</p>
                  </td>
                  <td :rowspan="2" class="pw-16">
                    <span v-if="index == 0 || index == 1 || index == 2" class="cmp-font"></span><!-- [무형상품] CASE -->
                    <span v-else-if="index == 3 || index == 4" class="cmp-font">e-Gift<br/>Card</span><!-- e-Gift Card CASE -->
                    <span v-else-if="index == 5 || index == 6" class="cmp-font">택배<br/>(선물)</span><!-- e-Gift Card CASE -->
                    <span v-else-if="index == 7" class="cmp-font">퀵배송</span><!-- 퀵배송 CASE -->
                    <span v-else-if="index == 16 || index == 17 || index == 18" class="cmp-font">매장<br/>수령</span><!-- 매장수령 CASE -->
                    <span v-else class="cmp-font">택배</span><!-- 택배 CASE -->
                  </td>
                </tr>
                <tr :key="index">
                  <td colspan="4" class="inside-table pw-0">
                    <table v-for="(item2,index2) in item.prod_list" :key="index2">
                      <colgroup>
                        <col style="width:335px;"/><!-- [퍼블추가수정] -->
                        <col style="width:116px;"/>
                        <col style="width:94px;"/>
                        <col style="width:128px;"/>
                      </colgroup>
                      <tbody>
                        <tr :class="[{'bottom-none':item2.notice!==null},{'gift-card-type':item.gift_card==true}]"><!-- [퍼블 수정] 22.09.27 -->
                          <td class="pw-0">
                            <nuxt-link v-if="index == 3 & index2 == 0 || index == 3 & index2 == 1 || index == 4 & index2 == 0 || index == 4 & index2 == 1" :to="item2.link" class="product-row-unitInfo">
                              <div class="product-image" :class="{'sold-out':item.sold_out}">
                                <v-img :src="item2.image" :alt="item.product_name" />
                                <div v-if="item2.sold_out" class="sold-out-txt">SOLD OUT</div>
                              </div>
                              <div class="product-info-cnt">
                                <div class="cmp-labels">
                                  <span class="label black c-white">EXCLUSIVE</span>
                                </div>
                                <p class="cmp-font fnt-14">새해 복 많이 받으세요</p>
                              </div>
                            </nuxt-link>
                            <nuxt-link v-else :to="item2.link" class="product-row-unitInfo or-prd-type"><!-- [퍼블수정]23.01.19 상품이미지 : or-prd-type 클래스 추가 -->
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

                          <td class="pw-0"><!-- [퍼블 수정] 22.09.27 -->
                            <div v-if="index == 0 & index2 == 0 || index == 1 & index2 == 0 || index == 2 & index2 == 0"><!-- [무형상품] 주문완료 -->
                              <p class="cmp-font">주문완료</p>
                            </div>
                            <div v-if="index == 3 & index2 == 0"><!-- e-Gift Card CASE 주문취소 -->
                              <p class="cmp-font">주문취소</p>
                              <p class="cmp-font c-gray">2021.10.30</p>
                            </div>
                            <div v-if="index == 3 & index2 == 1"><!-- e-Gift Card CASE 주문완료 -->
                              <p class="cmp-font c-blue">주문완료</p>
                            </div>
                            <div v-if="index == 4 & index2 == 0"><!-- e-Gift Card CASE 등록완료 CASE -->
                              <p class="cmp-font">등록완료</p>
                            </div>
                            <div v-if="index == 4 & index2 == 1"><!-- e-Gift Card CASE 자동취소 CASE -->
                              <p class="cmp-font">자동취소</p>
                              <p class="cmp-font c-gray">2021.10.30</p>
                            </div>

                            <div v-if="index == 5 & index2 == 0 || index == 6 & index2 == 0"><!-- 택배(선물) CASE 주문완료 -->
                              <p class="cmp-font c-blue">주문완료</p>
                            </div>
                            <div v-if="index == 5 & index2 == 1 || index == 7 & index2 == 1" ><!-- 택배(선물) CASE 상품준비중 -->
                              <p class="cmp-font c-blue">상품준비중</p>
                            </div>

                            <div v-if="index == 7"><!-- 반품접수 CASE -->
                              <p class="cmp-font c-blue">반품접수</p>
                              <p class="cmp-font c-gray">2021.10.30</p>
                            </div>
                            <div v-if="index == 8 & index2 == 0"><!-- 반품중 CASE -->
                              <p class="cmp-font c-blue">반품중</p>
                              <p class="cmp-font c-gray">2021.10.30</p>
                            </div>
                            <div v-if="index == 8 & index2 == 1"><!-- 반품완료 CASE -->
                              <p class="cmp-font">반품완료</p>
                              <p class="cmp-font c-gray">2021.10.30</p>
                            </div>

                            <div v-if="index == 8 & index2 == 2"><!-- 교환접수 CASE -->
                              <p class="cmp-font c-blue">교환접수</p>
                              <p class="cmp-font c-gray">2021.10.30</p>
                            </div>
                            <div v-if="index == 9 & index2 == 0"><!-- 교환회수중 CASE -->
                              <p class="cmp-font c-blue">교환회수중</p>
                              <p class="cmp-font c-gray">2021.10.30</p>
                            </div>
                            <div v-if="index == 9 & index2 == 1"><!-- 교환회수완료 CASE -->
                              <p class="cmp-font c-blue">교환회수완료</p>
                              <p class="cmp-font c-gray">2021.10.30</p>
                            </div>
                            <div v-if="index == 10"><!-- 교환배송중 CASE -->
                              <p class="cmp-font c-blue">교환배송중</p>
                              <p class="cmp-font c-gray">2021.10.30</p>
                            </div>
                            <div v-if="index == 11"><!-- 교환배송완료 CASE -->
                              <p class="cmp-font">교환배송완료</p>
                              <p class="cmp-font c-gray">2021.10.30</p>
                            </div>
                            <div v-if="index == 12"><!-- 교환(대기) CASE -->
                              <p class="cmp-font c-blue">교환(대기)</p>
                              <p class="cmp-font c-gray">2021.10.30</p>
                            </div>

                            <div v-if="index == 13"><!-- 배송중 CASE -->
                              <p class="cmp-font c-blue">배송중</p>
                            </div>
                            <div v-if="index == 14 & index2 == 0"><!-- 상품준비중 CASE -->
                              <p class="cmp-font c-blue">상품준비중</p>
                            </div>
                            <div v-if="index == 14 & index2 == 1"><!-- 배송완료 CASE -->
                              <p class="cmp-font">배송완료</p>
                            </div>
                            <div v-if="index == 14 & index2 == 2"><!-- 주문완료 CASE -->
                              <p class="cmp-font c-blue">주문완료</p>
                            </div>
                            <div v-if="index == 15"><!-- 주문취소 CASE -->
                              <p class="cmp-font">주문취소</p>
                              <p class="cmp-font c-gray">2021.10.30</p>
                            </div>
                            <div v-if="index == 16"><!-- 수령일확정 CASE -->
                              <p class="cmp-font c-blue">수령일확정</p>
                            </div>
                            <div v-if="index == 17"><!-- 수령완료 CASE -->
                              <p class="cmp-font">수령완료</p>
                            </div>
                            <div v-if="index == 18 & index2 == 0"><!-- 수령완료 CASE - 매장수령 CASE -->
                              <p class="cmp-font c-blue">주문완료</p>
                            </div>
                            <div v-if="index == 18 & index2 == 1"><!-- 수령완료 CASE - 매장수령 CASE -->
                              <p class="cmp-font c-blue">주문완료</p>
                            </div>
                          </td>

                          <td class="pw-0"><!-- [퍼블 수정] 22.12.23 -->
                            <div v-if="index == 0 & index2 == 0 || index == 3 & index2 == 0" class="product-row-unitBtn"><!-- [무혈상품] CASE 주문완료 -->
                              <v-btn outlined small color="normal">주문 취소</v-btn>
                              <v-btn outlined small color="normal">옵션 변경</v-btn>
                            </div>
                            <div v-if="index == 1 & index2 == 0" class="product-row-unitBtn"><!-- [무혈상품] CASE 주문완료 -->
                              <v-btn outlined small color="normal">1:1 문의하기</v-btn>
                            </div>
                            <div v-if="index == 2 & index2 == 0" class="product-row-unitBtn"><!-- [무혈상품] CASE 주문완료 -->
                              <!-- [퍼블수정]24.10.28 상품평 3차 -->
                              <v-btn outlined small color="normal" class="mileage-btn"><div class="max-mileage">최대 +3,825M</div>상품평 작성</v-btn>
                            </div>

                            <div v-if="index == 4" class="product-row-unitBtn"><!-- 반품접수 CASE -->
                              <v-btn outlined small color="normal">반품 취소</v-btn>
                              <v-btn outlined small color="normal">반품 상세</v-btn>
                            </div>
                            <div v-if="index == 5 & index2 == 0" class="product-row-unitBtn"><!-- 반품중 CASE -->
                              <v-btn outlined small color="normal">반품 상세</v-btn>
                              <v-btn outlined small color="normal">배송 조회</v-btn>
                            </div>
                            <div v-if="index == 5 & index2 == 1" class="product-row-unitBtn"><!-- 반품완료 CASE -->
                              <v-btn outlined small color="normal">반품 상세</v-btn>
                              <v-btn outlined small color="normal">배송 조회</v-btn>
                            </div>

                            <div v-if="index == 5 & index2 == 2" class="product-row-unitBtn"><!-- 교환접수 CASE -->
                              <v-btn outlined small color="normal">교환 취소</v-btn>
                              <v-btn outlined small color="normal">교환 상세</v-btn>
                              <!-- [퍼블수정]24.10.28 상품평 3차 -->
                              <v-btn outlined small color="normal" class="mileage-btn"><div class="max-mileage">최대 +3,825M</div>상품평 작성</v-btn>
                            </div>
                            <div v-if="index == 6 & index2 == 0"  class="product-row-unitBtn"><!-- 교환회수중 CASE -->
                              <v-btn outlined small color="normal">교환 상세</v-btn>
                              <v-btn outlined small color="normal">배송 조회</v-btn>
                              <!-- [퍼블수정]24.10.28 상품평 3차 -->
                              <v-btn outlined small color="normal" class="mileage-btn"><div class="max-mileage">최대 +3,825M</div>상품평 작성</v-btn>
                            </div>
                            <div v-if="index == 6 & index2 == 1" class="product-row-unitBtn"><!-- 교환회수완료 CASE -->
                              <v-btn outlined small color="normal">교환 상세</v-btn>
                              <v-btn outlined small color="normal">배송 조회</v-btn>
                              <!-- [퍼블수정]24.10.28 상품평 3차 -->
                              <v-btn outlined small color="normal" class="mileage-btn"><div class="max-mileage">최대 +3,825M</div>상품평 작성</v-btn>
                            </div>
                            <div v-if="index == 7" class="product-row-unitBtn"><!-- 교환배송중 CASE -->
                              <v-btn outlined small color="normal">교환 상세</v-btn>
                              <v-btn outlined small color="normal">배송 조회</v-btn>
                              <v-btn outlined small color="normal">배송 완료</v-btn>
                              <!-- [퍼블수정]24.10.28 상품평 3차 -->
                              <v-btn outlined small color="normal" class="mileage-btn"><div class="max-mileage">최대 +3,825M</div>상품평 작성</v-btn>
                            </div>
                            <div v-if="index == 8" class="product-row-unitBtn"><!-- 교환배송완료 CASE -->
                              <v-btn outlined small color="normal">교환 상세</v-btn>
                              <!-- [퍼블수정]24.10.28 상품평 3차 -->
                              <v-btn outlined small color="normal" class="mileage-btn"><div class="max-mileage">최대 +3,825M</div>상품평 작성</v-btn>
                              <v-btn outlined small color="normal">교환 신청</v-btn>
                              <v-btn outlined small color="normal">반품 신청</v-btn>
                            </div>
                            <div v-if="index == 9" class="product-row-unitBtn"><!-- 교환(대기) CASE -->
                              <v-btn outlined small color="normal">배송비 결제</v-btn>
                            </div>

                            <div v-if="index == 10" class="product-row-unitBtn"><!-- 배송중 CASE -->
                              <v-btn outlined small color="normal">배송 조회</v-btn>
                              <v-btn outlined small color="normal">배송 완료</v-btn>
                            </div>
                            <!-- 상품준비중 CASE -버튼없음- -->
                            <div v-if="index == 11 & index2 == 1" class="product-row-unitBtn"><!-- 배송완료 CASE -->
                              <v-btn outlined small color="normal">배송 조회</v-btn>
                              <!-- [퍼블수정]24.10.28 상품평 3차 -->
                              <v-btn outlined small color="normal" class="mileage-btn"><div class="max-mileage">최대 +3,825M</div>상품평 작성</v-btn>
                              <v-btn outlined small color="normal">교환 신청</v-btn>
                              <v-btn outlined small color="normal">반품 신청</v-btn>
                            </div>
                            <div v-if="index == 11 & index2 == 2" class="product-row-unitBtn"><!-- 주문완료 CASE -->
                              <v-btn outlined small color="normal">주문 취소</v-btn>
                              <v-btn outlined small color="normal">옵션 변경</v-btn>
                            </div>
                            <div v-if="index == 12" class="product-row-unitBtn"><!-- 주문취소 CASE -->
                              <v-btn outlined small color="normal">취소 상세</v-btn>
                            </div>
                            <!-- 수령일확정 CASE -버튼없음- -->
                            <div v-if="index == 14" class="product-row-unitBtn"><!-- 수령완료 CASE -->
                              <v-btn outlined small color="normal">상품평 작성</v-btn>
                              <v-btn outlined small color="normal">교환 신청</v-btn>
                              <v-btn outlined small color="normal">반품 신청</v-btn>
                            </div>
                            <div v-if="index == 15 & index2 == 0 || index == 15 & index2 == 1" class="product-row-unitBtn"><!-- 주문완료 - 매장수령 CASE -->
                              <v-btn outlined small color="normal">주문 취소</v-btn>
                              <v-btn outlined small color="normal">옵션 변경</v-btn>
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
        <!-- //상품 테이블 [퍼블수정] 22.09.30 주문조회 수정 -->
        <div class="product-row-table">
          <table>
            <caption>상품리스트</caption>
            <colgroup>
              <col style="width:165px;"/>
              <col style="width:82px;"/>
              <col style="width:335px;"/><!-- [퍼블추가수정] -->
              <col style="width:116px;"/>
              <col style="width:94px;"/>
              <col style="width:128px;"/>
            </colgroup>
            <thead>
              <tr>
                <th class="pw-0">주문번호</th>
                <th class="pw-0">배송</th>
                <th class="pw-0">상품정보</th>
                <th class="pw-0">상품금액</th>
                <th class="pw-0">주문상태</th>
                <th class="pw-0">확인&#47;신청</th>
              </tr>
            </thead>
            <tbody>
              <tr><!-- [퍼블수정] 22.09.30 주문조회 수정 -->
                <td rowspan="2" class="pw-16">
                  <a class="cmp-font button" to="#n"><span class="line">202110225600005</span></a>
                  <p class="cmp-font fnt-14">2021.10.28 17:01</p>
                </td>
                <td rowspan="2" class="pw-16">
                  <span class="cmp-font">택배</span>
                </td>
              </tr>
              <tr><!-- [퍼블수정] 22.11.29 repay 수정 -->
                <td colspan="4" class="inside-table pw-0">
                  <table>
                    <colgroup>
                      <col style="width:335px;"/>
                      <col style="width:116px;"/>
                      <col style="width:94px;"/>
                    </colgroup>
                    <tbody>
                      <tr class="re-pay">
                        <td class="pw-0">
                          <a src="#n" class="product-row-unitInfo or-prd-type"><!-- [퍼블수정]23.01.19 상품이미지 : or-prd-type 클래스 추가 -->
                            <div class="product-image">
                              <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img2.png" alt="퓨리파잉 클렌징 폼" />
                            </div>
                            <div class="product-info-cnt">
                              <div class="product-brand">orea</div>
                              <div class="product-name">퓨리파잉 클렌징 폼</div>
                              <div class="product-option">
                                <span class="option">BLACK</span>
                                <span class="option">55</span>
                                <span class="option">1개</span>
                              </div>
                            </div>
                          </a>
                        </td>
                        <td class="pw-0">
                          <a src="#n" class="product-row-unitPrice">
                            <div class="product-sellprice"><strong>155,000</strong> 원</div>
                          </a>
                        </td>

                        <td class="pw-0">
                          <div>
                            <p class="cmp-font c-blue">재결제요청</p>
                          </div>
                        </td>
                        <td class="pw-0 re-payBtn"><!-- [퍼블 수정] 22.12.23 -->
                          <div class="product-row-unitBtn">
                            <v-btn outlined small color="normal">재결제</v-btn>
                          </div>
                          <p class="cmp-font c-red fnt-12 mt-10">2022년12월15일 이내<br/>결제하셔야 됩니다.<br/>(기존 주문은 환불 예정)</p><!-- [퍼블 수정] 22.12.23 -->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <colgroup>
                      <col style="width:335px;"/>
                      <col style="width:116px;"/>
                      <col style="width:94px;"/>
                    </colgroup>
                    <tbody>
                      <tr class="re-pay">
                        <td class="pw-0">
                          <a src="#n" class="product-row-unitInfo or-prd-type"><!-- [퍼블수정]23.01.19 상품이미지 : or-prd-type 클래스 추가 -->
                            <div class="product-image">
                              <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img2.png" alt="퓨리파잉 클렌징 폼" />
                            </div>
                            <div class="product-info-cnt">
                              <div class="product-brand">orea</div>
                              <div class="product-name">퓨리파잉 클렌징 폼</div>
                              <div class="product-option">
                                <span class="option">BLACK</span>
                                <span class="option">55</span>
                                <span class="option">1개</span>
                              </div>
                            </div>
                          </a>
                        </td>
                        <td class="pw-0">
                          <a src="#n" class="product-row-unitPrice">
                            <div class="product-sellprice"><strong>155,000</strong> 원</div>
                          </a>
                        </td>

                        <td class="pw-0">
                          <div>
                            <p class="cmp-font c-blue">재결제요청</p>
                          </div>
                        </td>
                        <td class="pw-0"><!-- 빈 내용 --></td><!-- [퍼블 수정] 22.12.23 -->
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td rowspan="2" class="pw-16">
                  <a class="cmp-font button" to="#n"><span class="line">202110225600005</span></a>
                  <p class="cmp-font fnt-14">2021.10.28 17:01</p>
                </td>
                <td rowspan="2" class="pw-16">
                  <span class="cmp-font">택배</span>
                </td>
              </tr>
              <tr>
                <td colspan="4" class="inside-table pw-0">
                  <table>
                    <colgroup>
                        <col style="width:335px;"/>
                        <col style="width:116px;"/>
                        <col style="width:94px;"/>
                        <col style="width:128px;"/>
                    </colgroup>
                    <tbody>
                      <tr class="re-pay bottom-none">
                        <td class="pw-0">
                          <a src="#n" class="product-row-unitInfo or-prd-type"><!-- [퍼블수정]23.01.19 상품이미지 : or-prd-type 클래스 추가 -->
                            <div class="product-image">
                              <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img2.png" alt="퓨리파잉 클렌징 폼" />
                            </div>
                            <div class="product-info-cnt">
                              <div class="product-brand">orea</div>
                              <div class="product-name">퓨리파잉 클렌징 폼</div>
                              <div class="product-option">
                                <span class="option">BLACK</span>
                                <span class="option">55</span>
                                <span class="option">1개</span>
                              </div>
                            </div>
                          </a>
                        </td>
                        <td class="pw-0">
                          <a src="#n" class="product-row-unitPrice">
                            <div class="product-sellprice"><strong>155,000</strong> 원</div>
                          </a>
                        </td>

                        <td class="pw-0">
                          <div>
                            <p class="cmp-font c-blue">재결제요청</p>
                          </div>
                        </td>
                        <td class="pw-0 re-payBtn"><!-- [퍼블 수정] 22.12.23 -->
                          <div class="product-row-unitBtn">
                            <v-btn outlined small color="normal">재결제</v-btn>
                          </div>
                          <p class="cmp-font c-red fnt-12 mt-10">2022년12월15일 이내<br/>결제하셔야 됩니다.<br/>(기존 주문은 환불 예정)</p><!-- [퍼블 수정] 22.12.23 -->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <colgroup>
                        <col style="width:335px;"/><!-- [퍼블추가수정] -->
                        <col style="width:116px;"/>
                        <col style="width:94px;"/>
                        <col style="width:128px;"/><!-- [퍼블추가수정] -->
                    </colgroup>
                    <tbody>
                      <tr class="re-pay">
                        <td colspan="4" class="td-l pw-0"><!-- [퍼블추가수정] -->
                          <div class="product-row-unitNotice">
                            <ul class="product-notice">
                              <li>인기상품으로 전국 매장에서 수급 후 배송 예정</li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <colgroup>
                        <col style="width:335px;"/><!-- [퍼블추가수정] -->
                        <col style="width:116px;"/>
                        <col style="width:94px;"/>
                        <col style="width:128px;"/><!-- [퍼블추가수정] -->
                    </colgroup>
                    <tbody>
                      <tr class="re-pay">
                        <td class="pw-0">
                          <a src="#n" class="product-row-unitInfo or-prd-type"><!-- [퍼블수정]23.01.19 상품이미지 : or-prd-type 클래스 추가 -->
                            <div class="product-image">
                              <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img2.png" alt="퓨리파잉 클렌징 폼" />
                            </div>
                            <div class="product-info-cnt">
                              <div class="product-brand">orea</div>
                              <div class="product-name">퓨리파잉 클렌징 폼</div>
                              <div class="product-option">
                                <span class="option">BLACK</span>
                                <span class="option">55</span>
                                <span class="option">1개</span>
                              </div>
                            </div>
                          </a>
                        </td>
                        <td class="pw-0">
                          <a src="#n" class="product-row-unitPrice">
                            <div class="product-sellprice"><strong>155,000</strong> 원</div>
                          </a>
                        </td>

                        <td class="pw-0">
                          <div>
                            <p class="cmp-font c-blue">재결제요청</p>
                          </div>
                        </td>
                        <td class="pw-0"><!-- 빈 내용 --></td><!-- [퍼블 수정] 22.12.23 -->
                      </tr>
                    </tbody>
                  </table>
                </td>
                <!-- [퍼블추가수정] 재결제 삭제 -->
              </tr>
              <!-- //[퍼블수정] 22.09.30 주문조회 수정 -->
              <tr>
                <td colspan="6" class="pw-0 pt-0 pb-0">
                  <CommonNoData msg="아직 주문내역이 없습니다.<br>쇼핑백에 담아두신 상품을 확인해볼까요?">
                    <template #button>
                      <v-btn outlined large color="primary" class="mt-60" to="#n">쇼핑백 바로가기</v-btn>
                    </template>
                  </CommonNoData>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ProductListPaging />

        <div class="btm-notice">
          <h2 class="article-title">주문 조회 안내</h2>
          <ul class="cmp-dotList">
            <li>한섬마일리지는 배송 완료 후 10일 후 지급 됩니다.</li>
            <li>교환/반품신청은 배송 완료 후 7일까지 가능 합니다.</li>
            <li>상품준비중 상태에서는 주문 취소 및 옵션/주소 변경이 불가 합니다.</li>
            <li>주문 시 사용한 한섬마일리지, H.Point, e-money는 모두 동일 수단으로 환불됩니다.</li>
            <li>한섬마일리지는 정상 매장 기준 5%, 아울렛 1% 적립됩니다. (아울렛, 세일상품, 수입상품의 경우 상이할 수 있음)</li>
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
        topNotice: true,
        applyNext : true,
        applyPreocess : false,
        applyComplete : false,
        drawer: null,
        serchOrder: [
          // 주문 조회 데이터
          {
            order_id:'202110225600000',
            order_link: '#n',
            order_date: '2021.10.28 17:01',
            prod_list:[
              {
                brand_name: 'MOMENT',
                product_name: '달리기 : 마음이 즐거워지는 아크 즐거워지는 아크 즐거워지는 아크',
                image: 'https://img.thehandsome.com/md/publish/dummy/pc/pc-itgb-001.jpg',
                options: ['12:30'],
                sell_price: '355000',
                link: '#n',
                notice: ['MM/DD까지 주문 취소 가능(부분취소 불가)'],
                sold_out: false,
                zzim : false,
                request_date: '2024.07.31',
              }
            ]
          }, 
          {
            order_id:'202110225600000',
            order_link: '#n',
            order_date: '2021.10.28 17:01',
            prod_list:[
              {
                brand_name: 'MOMENT',
                product_name: '리퀴드 퍼퓸바와 함께하는, 나만, 나만, 나만, 나만, 나만',
                image: 'https://img.thehandsome.com/md/publish/dummy/pc/pc-itgb-002.jpg',
                options: ['12:30'],
                sell_price: '355000',
                link: '#n',
                notice: null,
                sold_out: false,
                zzim : false,
                request_date: '2024.07.31',
              }
            ]
          }, 
          {
            order_id:'202110225600000',
            order_link: '#n',
            order_date: '2021.10.28 17:01',
            prod_list:[
              {
                brand_name: 'MOMENT',
                product_name: '퍼스널 컬러부터 한 번에 알려드립니다.',
                image: 'https://img.thehandsome.com/md/publish/dummy/pc/pc-itgb-003.jpg',
                options: ['12:30'],
                sell_price: '355000',
                link: '#n',
                notice: null,
                sold_out: false,
                zzim : false,
                request_date: '2024.07.31',
              }
            ]
          }, 
          {
            order_id:'202110225600000',
            order_link: '#n',
            order_date: '2021.10.28 17:01',
            gift_card:true ,
            prod_list:[
              {
                brand_name: null,
                product_name: null,
                image: '/images/egiftcard/messagecard3.png',
                options: null,
                sell_price: '100000',
                link: '#n',
                notice: null,
                sold_out: false,
                zzim : false,
                request_date: '2021.10.30',
              },
              {
                brand_name: null,
                product_name: null,
                image: '/images/egiftcard/messagecard3.png',
                options: null,
                sell_price: '100000',
                link: '#n',
                notice: null,
                sold_out: false,
                zzim : false,
                request_date: '2021.10.30',
              }
            ]
          },
          {
            order_id:'202110225600000',
            order_link: '#n',
            order_date: '2021.10.28 17:01',
            gift_card:true ,
            prod_list:[
              {
                brand_name: null,
                product_name: null,
                image: '/images/egiftcard/messagecard2.png',
                options: null,
                sell_price: '100000',
                link: '#n',
                notice: null,
                sold_out: false,
                zzim : false,
                request_date: '2021.10.30',
              },
              {
                brand_name: null,
                product_name: null,
                image: '/images/egiftcard/messagecard2.png',
                options: null,
                sell_price: '100000',
                link: '#n',
                notice: null,
                sold_out: false,
                zzim : false,
                request_date: '2021.10.30',
              }
            ]
          },
          {
            order_id:'202110225600005',
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
                notice: null,
                sold_out: false,
                zzim : false,
              },
              {
                brand_name: 'MINE',
                product_name: '컬러 블록 니트 가디건 컬러 니트',
                image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
                options: ['BLACK', '90', '2개'],
                sell_price: '355000',
                link: '#n',
                notice: null,
                sold_out: false,
                zzim : false,
              }
            ]
          },
          {
            order_id:'202110225600005',
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
                notice: null,
                sold_out: false,
                zzim : false,
              },
              {
                brand_name: 'MINE',
                product_name: '컬러 블록 니트 가디건 컬러 니트',
                image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
                options: ['BLACK', '90', '2개'],
                sell_price: '355000',
                link: '#n',
                notice: null,
                sold_out: false,
                zzim : false,
              }
            ]
          },
          {
            order_id:'202110225600000',
            order_link: '#n',
            order_date: '2021.10.28 17:01',
            prod_list:[
              {
                brand_name: 'FOURM MEN’S LOUNGE',
                product_name: '[BEARBRICK] 사이키델릭 페이즐리',
                image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
                options: ['BLACK', '90', '2개'],
                sell_price: '355000',
                discount: '20',
                price: '366000',
                link: '#n',
                notice: null,
                sold_out: false,
                zzim : false,
                request_date: '2021.10.30',
              }
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
                options: ['BLACK', '90', '2개'],
                sell_price: '355000',
                link: '#n',
                notice: null,
                sold_out: false,
                zzim : false,
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
              {
                brand_name: 'MINE',
                product_name: '컬러 블록 니트 가디건 컬러 니트',
                image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
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
            order_id:'202110225600005',
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
                notice: ['인기상품으로 전국 매장에서 수급 후 배송 예정'],
                sold_out: false,
                zzim : false,
              },
              {
                brand_name: 'MINE',
                product_name: '컬러 블록 니트 가디건 컬러 니트',
                image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
                options: ['BLACK', '90', '2개'],
                sell_price: '355000',
                link: '#n',
                notice: null,
                sold_out: false,
                zzim : false,
              }
            ]
          },
          {
            order_id:'202110225600004',
            order_link: '#n',
            order_date: '2021.10.28 17:01',
            prod_list:[
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
              }
            ]
          },
          {
            order_id:'202110225600004',
            order_link: '#n',
            order_date: '2021.10.28 17:01',
            prod_list:[
              {
                brand_name: 'MINE',
                product_name: '컬러 블록 니트 가디건 컬러 니트',
                image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
                options: ['BLACK', '90', '2개'],
                sell_price: '355000',
                link: '#n',
                notice: null,
                sold_out: false,
                zzim : false,
              }
            ]
          },
          {
            order_id:'202110225600007',
            order_link: '#n',
            order_date: '2021.10.28 17:01',
            prod_list:[
              {
                brand_name: 'MINE',
                product_name: '컬러 블록 니트 가디건 컬러 니트',
                image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
                options: ['BLACK', '90', '2개'],
                sell_price: '355000',
                link: '#n',
                notice: null,
                sold_out: false,
                zzim : false,
              }
            ]
          },
          {
            order_id:'202110225600000',
            order_link: '#n',
            order_date: '2021.10.28 17:01',
            prod_list:[
              {
                brand_name: 'FOURM MEN’S LOUNGE',
                product_name: '[BEARBRICK] 사이키델릭 페이즐리',
                image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
                options: ['BLACK', '90', '2개'],
                sell_price: '355000',
                discount: '20',
                price: '366000',
                link: '#n',
                notice: null,
                sold_out: false,
                zzim : false,
                request_date: '2021.10.30',
              }
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
                options: ['BLACK', '90', '2개'],
                sell_price: '355000',
                link: '#n',
                notice: null,
                sold_out: false,
                zzim : false,
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
              {
                brand_name: 'MINE',
                product_name: '컬러 블록 니트 가디건 컬러 니트',
                image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
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
            order_id:'202110225600004',
            order_link: '#n',
            order_date: '2021.10.28 17:01',
            prod_list:[
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
              }
            ]
          },
          {
            order_id:'202110225600004',
            order_link: '#n',
            order_date: '2021.10.28 17:01',
            prod_list:[
              {
                brand_name: 'MINE',
                product_name: '컬러 블록 니트 가디건 컬러 니트',
                image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
                options: ['BLACK', '90', '2개'],
                sell_price: '355000',
                link: '#n',
                notice: null,
                sold_out: false,
                zzim : false,
              }
            ]
          },
          {
            order_id:'202110225600007',
            order_link: '#n',
            order_date: '2021.10.28 17:01',
            prod_list:[
              {
                brand_name: 'MINE',
                product_name: '컬러 블록 니트 가디건 컬러 니트',
                image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
                options: ['BLACK', '90', '2개'],
                sell_price: '355000',
                link: '#n',
                notice: null,
                sold_out: false,
                zzim : false,
              }
            ]
          },
          {
            order_id:'202110225600005',
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
                notice: ['인기상품으로 전국 매장에서 수급 후 배송 예정'],
                sold_out: false,
                zzim : false,
              },
              {
                brand_name: 'MINE',
                product_name: '컬러 블록 니트 가디건 컬러 니트',
                image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
                options: ['BLACK', '90', '2개'],
                sell_price: '355000',
                link: '#n',
                notice: null,
                sold_out: false,
                zzim : false,
              }
            ]
          },
        ],
      tabs: 0,
    }
  },
  //   [퍼블수정]23.02.17 menuList 추가
  created() {
    const me = this
    const json = require('~/static/json/mypage_left_menu.json')
    me.menuList = json.list
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