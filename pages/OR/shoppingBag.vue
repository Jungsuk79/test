<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="cmp-page-tit">
        <h2 class="tit">쇼핑백</h2>
      </div>
      <div class="order-content-box">
        <!-- 탭메뉴 -->
        <div class="cmp-tabs tabs-actionTop">
          <v-tabs v-model="tabs" fixed-tabs>
            <v-tab>택배 5</v-tab>
            <v-tab>매장수령 3</v-tab>
            <v-tab>퀵배송 2</v-tab>
          </v-tabs>
        </div>
        <!-- //탭메뉴 -->

        <!-- 탭 상단 공지 (221205 쇼핑백 : 마크업 변경 ) -->
        <ul class="shoppingbag-top-notice">
          <li>준비된 상품부터 당일 출고됩니다.</li>
          <!-- <li>동일 브랜드, 동일 매장 상품만 함께 주문하실 수 있습니다.</li>
          <li>퀵배송은 한 주문에 상품 최대 3개까지 주문 가능합니다.</li> -->
        </ul>
        <!-- <v-tabs-items v-model="tabs" touchless class="mb-30">
          <v-tab-item :transition="false">
            <div class="cmp-info info-type1">
              <p class="cmp-font">준비된 상품부터 당일 출고됩니다.</p>
            </div>
          </v-tab-item>
          <v-tab-item :transition="false">
            <div class="cmp-info info-type1">
              <p class="cmp-font">동일 브랜드, 동일 매장 상품만 함께 주문하실 수 있습니다.</p>
            </div>
          </v-tab-item>
          <v-tab-item :transition="false">
            <div class="cmp-info info-type1">
              <p class="cmp-font">퀵배송은 한 주문에 상품 최대 3개까지 주문 가능합니다.</p>
            </div>
          </v-tab-item>
        </v-tabs-items> -->
        <!-- //탭 상단 공지 -->

        <!-- [퍼블수정]23.02.22 퀵배송 수정 -->
        <v-layout v-if="tabs === 2" row align-center justify-space-between class="quick-address pt-20">
          <p class="cmp-font fnt-14 c-blue">서울시 강남구 도산대로 11길</p>
          <v-btn outlined small color="normal">기본배송지변경</v-btn>
        </v-layout>
        <!-- [퍼블수정]23.02.24
        <v-layout v-if="tabs === 2" row align-center justify-space-between class="quick-address pt-20">
          <p class="cmp-font fnt-14">퀵배송을 위한 기본배송지를 입력해주세요.</p>
          <v-btn outlined small color="normal">기본배송지 입력</v-btn>
        </v-layout> -->

        <!-- 할인 및 혜택안내 -->
        <div class="cmp-sub-tit small mb-14 mt-30"><!-- 230103 쇼핑백 : mt-30 클래스 추가 -->
          <h3 class="tit">할인 및 혜택안내</h3>
        </div>
        <div class="info-bg-table mb-40">
          <div class="table-cnt">
            <div class="tit">VVIP혜택</div>
            <ul class="table">
              <li class="tr">
                <div class="td">
                  <span class="txt0">잔여</span>
                </div>
                <div class="td">
                  <strong class="txt0">1,000,000<em>원</em></strong>
                  <span class="txt1">년</span>
                </div>
                <div class="td bar">
                  <strong class="txt0">3<em>회</em></strong>
                  <span class="txt1">월</span>
                </div>
              </li>
              <li class="tr tr-gray">
                <div class="td">
                  <span class="txt0">한도</span>
                </div>
                <div class="td">
                  <span class="txt0">2,500,000<em>원</em></span>
                  <span class="txt1">년</span>
                </div>
                <div class="td bar">
                  <span class="txt0">5<em>회</em></span>
                  <span class="txt1">월</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="table-cnt">
            <div class="tit-box">
                <div class="tit">임직원할인</div>
                <CommonTooltipBox :tooltip-list="tooltipList.employee_sale" />
            </div>
            <ul class="table">
              <li class="tr">
                <div class="td">
                  <span class="txt0">잔여</span>
                </div>
                <div class="td">
                  <strong class="txt0">1,000,000<em>원</em></strong>
                </div>
              </li>
              <li class="tr tr-gray">
                <div class="td">
                  <span class="txt0">한도</span>
                </div>
                <div class="td">
                  <span class="txt0">5,000,000<em>원</em></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- //할인 및 혜택안내 -->

        <!-- 탭 상품 리스트 -->
        <v-tabs-items v-model="tabs" touchless class="mt-30"><!-- 230106 쇼핑백 : mt-30 클래스 추가 -->
          <!-- 택배 탭 -->
          <v-tab-item :transition="false">
            <v-layout v-if="deliveryList.length > 0" row align-center justify-space-between class="mb-10"><!-- 220913 쇼핑백 : 클래스 수정 -->
              <v-checkbox label="선택 5" class="cmp-form-checkbox"></v-checkbox>
              <button class="cmp-font fnt-14"><span class="line">선택삭제</span></button><!-- 220913 쇼핑백 : 클래스 수정 -->
            </v-layout>
            <div class="product-row-table">
              <table v-if="deliveryList.length > 0">
                <caption>상품리스트</caption>
                <colgroup>
                  <col style="width:28px;"/>
                  <col style="width:auto;"/>
                  <col style="width:248px;"/>
                  <col style="width:192px;"/>
                  <col style="width:50px;"/> 
                </colgroup>
                <thead>
                  <tr>
                    <th class="pw-0"><span class="ir">선택</span></th>
                    <th>상품정보</th>
                    <th>상품금액</th>
                    <th class="pw-16">선택</th>
                    <th class="pw-0"><span class="ir">삭제/찜</span></th>
                  </tr>
                </thead>
                <tbody>
                  <!-- 상품리스트 -->
                  <template v-for="(item, index) in deliveryList">
                    <tr :key="index" :class="{'bottom-none':item.notice!==null}">
                      <td class="td-t pw-0"><v-checkbox label="선택" class="cmp-form-checkbox label-hide"></v-checkbox></td>
                      <td class="pw-0">
                        <nuxt-link :to="item.link" class="product-row-unitInfo or-prd-type"><!-- 230105 상품이미지 : or-prd-type 클래스 추가 -->
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
                      <td class="pw-16">
                        <v-btn v-if="item.sold_out" outlined small color="normal" width="160">이런 상품 어때요?</v-btn>
                        <div v-else class="product-row-unitBtn">
                          <v-btn outlined small color="normal">옵션변경</v-btn>
                          <v-btn v-if="item.gift" outlined small color="normal">선물하기</v-btn>
                          <v-btn small color="primary">바로구매</v-btn>
                        </div>
                      </td>
                      <td class="pw-0">
                        <div class="product-row-unitBtn">
                          <v-btn icon>
                            <span v-cmp-icon="{ size: 18, name: 'close'}">상품 삭제</span>
                          </v-btn>
                          <button class="zzim-btn" :class="{on:item.zzim}" @click="item.zzim = !item.zzim"><span class="ir">찜</span></button>
                        </div>
                      </td>
                    </tr>
                    <tr v-if="item.notice">
                      <td class="pw-0">&nbsp;</td>
                      <td colspan="4" class="td-l pw-0">
                        <div class="product-row-unitNotice">
                          <ul class="product-notice">
                            <!-- eslint-disable -->
                            <li v-for="(item2, index2) in item.notice" v-html="item2"></li>
                            <!-- eslint-disable -->
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </template>
                  <!-- //상품리스트 -->
                </tbody>
              </table>
              <CommonNoData v-else msg="쇼핑백에 담긴 상품이 없습니다."/>
            </div>
            <!-- //택배 상품 있을때 -->
          </v-tab-item>
          <!-- //택배 탭 -->
          <!-- 매장수령 탭 -->
          <v-tab-item :transition="false">
            <v-layout v-if="pickupList.length > 0" row align-center justify-space-between class="mb-10"><!-- 220913 쇼핑백 : 클래스 수정 -->
              <v-checkbox class="cmp-form-checkbox" label="선택 5"></v-checkbox>
              <button class="cmp-font fnt-14"><span class="line">선택삭제</span></button><!-- 220913 쇼핑백 : 클래스 수정 -->
            </v-layout>
            <div class="product-row-table">
              <table v-if="pickupList.length > 0">
                <caption>상품리스트</caption>
                <colgroup>
                  <col style="width:28px;"/>
                  <col style="width:auto;"/>
                  <col style="width:248px;"/>
                  <col style="width:192px;"/>
                  <col style="width:50px;"/> 
                </colgroup>
                <thead>
                  <tr>
                    <th class="pw-0"><span class="ir">선택</span></th>
                    <th>상품정보</th>
                    <th>상품금액</th>
                    <th class="pw-16">선택</th>
                    <th class="pw-0"><span class="ir">삭제/찜</span></th>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="(item, index) in pickupList">
                    <!-- 매장 타이틀 -->
                    <tr class="store-tr">
                      <td class="td-l" colspan="3">
                        <div class="cmp-font fnt-22">{{item.store}}</div>
                      </td>
                      <td class="td-r" colspan="2">
                        <v-btn text>
                          <i class="cmp-icon i-contact"></i>
                          <span class="cmp-font fnt-13">{{item.tel}}</span>
                        </v-btn>
                        <v-btn text>
                          <i class="cmp-icon i-locationoff"></i>
                          <span class="cmp-font fnt-13"><em class="line">위치보기</em></span>
                        </v-btn>
                      </td>
                    </tr>
                    <!-- //매장 타이틀 -->
                    <!-- 상품리스트 -->
                    <template v-for="(item2, index2) in item.list">
                      <tr :class="{'bottom-none':item2.notice!==null}">
                        <td class="td-t pw-0"><v-checkbox label="선택" class="cmp-form-checkbox label-hide"></v-checkbox></td>
                        <td class="pw-0">
                          <nuxt-link :to="item2.link" class="product-row-unitInfo or-prd-type"><!-- 230105 상품이미지 : or-prd-type 클래스 추가 -->
                            <div class="product-image" :class="{'sold-out':item2.sold_out}">
                              <v-img :src="item2.image" :alt="item2.product_name" />
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
                        <td>
                          <nuxt-link :to="item2.link" class="product-row-unitPrice">
                            <div class="product-sellprice"><strong>{{item2.sell_price | number}}</strong>원</div>
                            <div v-if="item2.price || item2.discount" class="product-price-cnt">
                              <del class="product-price-origin">{{item2.price | number}}원</del>
                              <!-- eslint-disable -->
                              <span class="product-discount">{{item2.discount}}<em>%</em></span>
                              <!-- eslint-disable -->
                            </div>
                          </nuxt-link>
                        </td>
                        <td class="pw-16">
                          <v-btn v-if="item2.sold_out" outlined small color="normal" width="160">이런 상품 어때요?</v-btn>
                          <div v-else class="product-row-unitBtn">
                            <v-btn outlined small color="normal">옵션변경</v-btn>
                            <v-btn outlined small color="normal">택배로 받기</v-btn>
                            <v-btn small color="primary">바로구매</v-btn>
                          </div>
                        </td>
                        <td class="pw-0">
                          <div class="product-row-unitBtn">
                            <v-btn icon>
                              <span v-cmp-icon="{ size: 18, name: 'close'}">상품 삭제</span>
                            </v-btn>
                            <button class="zzim-btn" :class="{on:item2.zzim}" @click="item2.zzim = !item2.zzim"><span class="ir">찜</span></button>
                          </div>
                        </td>
                      </tr>
                      <tr v-if="item2.notice">
                        <td class="pw-0">&nbsp;</td>
                        <td colspan="4" class="td-l pw-0">
                          <div class="product-row-unitNotice">
                            <!-- eslint-disable -->
                            <ul class="product-notice">
                              <li v-for="(item3, index3) in item2.notice" v-html="item3"></li>
                              <!-- eslint-disable -->
                            </ul>
                            <button v-if="!item2.sold_out" class="cmp-font fnt-13"><span class="line">변경</span></button>
                          </div>
                        </td>
                      </tr>
                    </template>
                    <!-- //상품리스트 -->
                  </template>
                </tbody>
              </table>
              <CommonNoData v-else msg="쇼핑백에 담긴 상품이 없습니다."/>
            </div>
            
          </v-tab-item>
          <!-- //매장수령 탭 -->
          <!-- 퀵배송 탭 -->
          <v-tab-item :transition="false">
            <v-layout v-if="quickDeliveryList.length > 0" row align-center justify-space-between class="mb-10"><!-- 220913 쇼핑백 : 클래스 수정 -->
              <v-checkbox class="cmp-form-checkbox" label="선택 2"></v-checkbox>
              <button class="cmp-font fnt-14"><span class="line">선택삭제</span></button><!-- 220913 쇼핑백 : 클래스 수정 -->
            </v-layout>
            <div class="product-row-table">
              <table v-if="quickDeliveryList.length > 0">
                <caption>상품리스트</caption>
                <colgroup>
                  <col style="width:28px;"/>
                  <col style="width:auto;"/>
                  <col style="width:248px;"/>
                  <col style="width:192px;"/>
                  <col style="width:50px;"/> 
                </colgroup>
                <thead>
                  <tr>
                    <th class="pw-0"><span class="ir">선택</span></th>
                    <th>상품정보</th>
                    <th>상품금액</th>
                    <th class="pw-16">선택</th>
                    <th class="pw-0"><span class="ir">삭제/찜</span></th>
                  </tr>
                </thead>
                <tbody>
                  <!-- 상품리스트 -->
                  <template v-for="(item, index) in quickDeliveryList">
                    <tr :key="index" :class="{'bottom-none':item.notice!==null}">
                      <td class="td-t pw-0"><v-checkbox label="선택" class="cmp-form-checkbox label-hide" /></td>
                      <td class="pw-0">
                        <nuxt-link :to="item.link" class="product-row-unitInfo or-prd-type"><!-- 230105 상품이미지 : or-prd-type 클래스 추가 -->
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
                      <td class="pw-16">
                        <v-btn v-if="item.sold_out" outlined small color="normal" width="160">이런 상품 어때요?</v-btn>
                        <div v-else class="product-row-unitBtn">
                          <v-btn outlined small color="normal">옵션변경</v-btn>
                          <v-btn small color="primary">바로구매</v-btn>
                        </div>
                      </td>
                      <td class="pw-0">
                        <div class="product-row-unitBtn">
                          <v-btn icon>
                            <span v-cmp-icon="{ size: 18, name: 'close'}">상품 삭제</span>
                          </v-btn>
                          <button class="zzim-btn" :class="{on:item.zzim}" @click="item.zzim = !item.zzim"><span class="ir">찜</span></button>
                        </div>
                      </td>
                    </tr>
                    <tr v-if="item.notice">
                      <td class="pw-0">&nbsp;</td>
                      <td colspan="4" class="td-l pw-0">
                        <div class="product-row-unitNotice">
                          <ul class="product-notice">
                            <!-- eslint-disable -->
                            <li v-for="(item2, index2) in item.notice" v-html="item2"></li>
                            <!-- eslint-disable -->
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </template>
                  <!-- //상품리스트 -->
                </tbody>
              </table>
              <CommonNoData v-else msg="쇼핑백에 담긴 상품이 없습니다."/>
            </div>
            <!-- //퀵배송 상품 있을때 -->
          </v-tab-item>
          <!-- //퀵배송 탭 -->
        </v-tabs-items>
        <!-- //탭 상품 리스트 -->

        <!-- 증정/사은품 안내 -->
        <div class="cmp-sub-tit col mt-60">
          <h3 class="tit">증정&amp;사은품 안내</h3>
          <p class="sub-txt c-red">실결제 금액 기준으로 할인/쿠폰 적용시 달라질 수 있습니다.</p>
        </div>
        <!-- [퍼블수정]23.02.01 -->
        <ul class="gifts-list-box shopping-bag">
          <li v-for="(item,index) in giftsData" :key="index" v-if="index < 6">
            <div class="tit" :class="{'num': item.num}">
              <template v-if="item.type==='mileage'">마일리지 적립</template>
              <template v-else><span class="title">{{item.name}}</span><span v-if="item.num">외 {{item.num}}건</span></template>
            </div>
            <div class="info-cnt">
              <div v-if="item.type==='mileage'" class="mileage-txt">
                <div class="txt"><strong>{{item.mileage | number}}</strong>M</div>
              </div>
              <v-img v-else :src="item.image" :alt="item.type==='event'?'사은품 이미지':'증정품 이미지'"></v-img>
              <div class="cnt">
                <div>
                  <div v-if="item.type!=='present'" class="date">{{item.date}}</div>
                  <div class="desc">{{item.desc}}</div>
                </div>
                <p v-if="item.notice" v-html="item.notice" class="notice"></p>
                <button class="cmp-font fnt-13"><span class="line">자세히 보기</span></button>
              </div>
            </div>
          </li>
          <li v-for="(item,index) in giftsData" :key="index" v-if="index >= 6 & giftsView">
            <div class="tit" :class="{'num': item.num}">
              <template v-if="item.type==='mileage'">마일리지 적립</template>
              <template v-else><span class="title">{{item.name}}</span><span v-if="item.num">외 {{item.num}}건</span></template>
            </div>
            <div class="info-cnt">
              <div v-if="item.type==='mileage'" class="mileage-txt">
                <div class="txt"><strong>{{item.mileage | number}}</strong>M</div>
              </div>
              <v-img v-else :src="item.image" :alt="item.type==='event'?'사은품 이미지':'증정품 이미지'"></v-img>
              <div class="cnt">
                <div>
                  <div v-if="item.type!=='present'" class="date">{{item.date}}</div>
                  <div class="desc">{{item.desc}}</div>
                </div>
                <p v-if="item.notice" v-html="item.notice" class="notice"></p>
                <button class="cmp-font fnt-13"><span class="line">자세히 보기</span></button>
              </div>
            </div>
          </li>
          
        </ul>
        <!-- //[퍼블수정]23.02.01 -->
        <!-- [퍼블수정]23.02.01 더보기 버튼 증정&사은품 6개 이상일 시 노출 -->
        <button class="gifts-more-btn" :class="{'on' : giftsView}" @click="giftsView = !giftsView" v-if="giftsData.length > 6">
          증정&amp;사은품
          <template v-if="giftsView">닫기</template>
          <template v-else>더보기</template>
          <i class="arr-icon"></i>
        </button>
        <!-- //[퍼블수정]23.02.01 더보기 버튼 증정&사은품 6개 이상일 시 노출 -->
        <!-- //증정/사은품 안내 -->

        <!-- 배너 -->
        <div class="mt-40">
          <Swiper 
            :options="{
              loop: true,
              autoplay: {
                delay: 5000,
              },
              pagination: {el: '.swiper-pagination',clickable: true}
            }"
            :class="{'swiper-no-swiping':eventBanner.length < 2}"
          >
            <SwiperSlide v-for="(item,index) in eventBanner" :key="index">
              <nuxt-link :to="item.link">
                <img :src="item.image" :alt="item.desc">
              </nuxt-link>
            </SwiperSlide>
            <div v-if="eventBanner.length > 1" slot="pagination" class="cmp-swiper-paginationBullet swiper-pagination"></div>
          </Swiper>
        </div>
        <!-- //배너 -->

        <!-- 쇼핑백 이용안내/카드행사 혜택안내 -->
        <v-expansion-panels v-model="panelS" multiple accordion class="cmp-acc acc-type2 mt-40"><!--20221202 펼침 : v-model="panelS" multiple -->
          <v-expansion-panel>
            <v-expansion-panel-header>
              쇼핑백 이용안내
              <template #actions>
                <i class="cmp-icon-etc cmp-icon-down">열기/닫기</i>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <ul class="cmp-dotList">
                <li>3만원 구매 시 무료 배송됩니다. 3만원 미만 구매 시 배송비 3,000원이 추가되며, 도서산간 지역으로 배송을 원하실 경우 배송비가 추가될 수 있습니다.</li>
                <li>쇼핑백에 담긴 상품은 30일 동안 보관됩니다. 30일이 지난 상품은 자동 삭제됩니다. 더 오래 보관하고 싶은 상품은 위시리스트에 담아주세요.</li>
                <li>쇼핑백에는 최대 50개까지 상품 보관이 가능하며, 실제 구매 시에는 가격이나 혜택이 변동될 수 있습니다.</li>
                <li>쇼핑백에 담은 상품이 판매종료가 되었을 경우 자동 삭제됩니다.</li>
                <li>쿠폰은 배송&amp;결제정보 화면에서 적용하실 수 있으며 H.Point Pay 결제시에는 최대 할인 혜택으로 자동 적용됩니다.</li>
                <li>상품별 지급율에 따라 한섬마일리지 및 H.POINT가 적립됩니다. 배송완료 10일 이후 적립되며 실 결제금액 기준입니다.</li>
                <li>해외 배송을 원할 경우 더한섬닷컴의 영문 서비스를 이용해 주시기 바랍니다.</li>
              </ul>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <button class="cmp-font button mt-40">카드행사 혜택안내(무이자/청구/즉시할인) <i class="cmp-icon i-next cmp-icon-16"></i></button>
        <!-- //쇼핑백 이용안내/카드행사 혜택안내 -->
        <!-- [퍼블수정]23.07.18 더플러스 가입 베너 추가 -->
        <button @click="openonlymobile" class="theplus-banner-img cover-860 mt-20">
          <div class="banner-text">
            <h3>더플러스⁺ 가입 즉시 쿠폰 제공</h3>
            <div class="oneline">
              <p>전상품 5만원 할인상품 쿠폰 +2장</p>
              <p>선호브랜드 10%할인 쿠폰 +3장 </p>
            </div>
          </div>
        </button>

        <v-dialog v-model="onlymobile">
          <DialogBasic class="popup-basic popup-onlymobile" header-title="더플러스⁺ 가입은 모바일에서만 가능합니다." :width="408" @hide="closeonlymobile">
            <template #body>
              <div class="inner">
                <p>더한섬닷컴 모바일 WEB/APP > 마이페이지 ><br/>THE서비스 중 더플러스⁺를 선택하여<br/>가입하실 수 있습니다.</p>
              </div>
              <div class="popup-btn-box">
                <v-btn @click="onlymobile = false" large color="primary">확인</v-btn>
              </div>
            </template>
          </DialogBasic>
        </v-dialog>
        <!-- [퍼블수정]23.07.18 더플러스 가입 베너 추가 -->

        <!-- 금액/주문 -->
        <div class="order-price-box">
          <div class="price-sticky-box">
            <h3 class="box-tit">총 상품 1개</h3>
            <div class="price-info">
              <p class="tit">상품 합계</p>
              <p class="price"><strong>910,000</strong>원</p>
            </div>
            <div class="price-info">
              <div class="tit-box">
                <p class="tit">배송비</p>
                <CommonTooltipBox :tooltip-list="tooltipList.delivery" right /><!-- 택배 툴팁 -->
                <!--<CommonTooltipBox :tooltip-list="tooltipList.quick_delivery" right />--><!-- 퀵배송 툴팁 -->
              </div>
              <p class="price"><strong>0</strong>원</p>
            </div>
            <div class="price-total-info">
              <p class="tit">결제예상금액</p>
              <p class="price"><strong>530,000</strong>원</p>
            </div>
            <div class="price-btn">
              <v-btn large block color="primary">주문하기</v-btn>
              <v-btn outlined large block color="primary">선물하기</v-btn>
            </div>
          </div>
        </div>
        <!-- // 금액/주문 -->
      </div>
    </div>                                                  
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import EventBus from '~/api/common/EventBus'
// [퍼블수정]23.07.18 더플러스 가입 베너 추가
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
    // [퍼블수정]23.07.18 더플러스 가입 베너 추가
    DialogBasic,
  },
  layout: 'LayoutBasics',
  data() {
    return {
      // [퍼블수정]23.07.18 더플러스 가입 베너 추가
      onlymobile : false,
      tabs: 0,
      panelS :[0], // 20221202 펼침
      deliveryList: [ // 택배 리스트
        {
          brand_name: 'MINE',
          product_name: '컬러 블록 니트 가디건 컬러 니트',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
          options: ['BLACK', '90', '2개'],
          sell_price: '355000',
          discount: '20',
          price: '366000',
          link: '#n',
          notice: ['인기상품으로 전국 매장에서 수급 후 배송 예정','불량 등의 이유로 취소될 수 있음','(평일 기준 5일 이상 소요)'],
          gift: true,
          sold_out: false,
          zzim : false,
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
          gift: false,
          sold_out: false,
          zzim : false,
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
          notice: ['오에라 전용박스 별도배송'],
          gift: true,
          sold_out: false,
          zzim : false,
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
          notice:['2021년 12월 17일부터 순차 배송 (제작 상황에 따라 변경 가능)'],
          gift: true,
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
          notice:null,
          gift: true,
          sold_out: true,
          zzim : false,
        }
      ],
      pickupList: [ // 매장수령 리스트
        {
          store: '갤러리아백화점 센터시티점',
          // map: 'https://m.map.kakao.com/actions/detailMapView?id=8171240&refService=place', // 카카오맵 지도 정보(test)
          tel: '041-559-9114', // 전화번호 (test)
          list: [
            {
              brand_name: 'MINE',
              product_name: '컬러 블록 니트 가디건',
              image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
              options: ['BLACK', '90', '1개'],
              sell_price: '355000',
              discount: '20',
              price: '366000', 
              link: '#n',
              notice: ['수령예정 2021.12.12'],
              sold_out: false,
              zzim : false,
            },
            {
              brand_name: 'TIME',
              product_name: '글리터링 니트 가디건 ',
              image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
              options: ['Charcoal gray', '90', '1개'],
              sell_price: '355000',
              discount: null,
              price: null,
              link: '#n',
              notice: ['수령예정일 만료'],
              sold_out: false,
              zzim : false,
            },
          ],
        },
        {
          store: '현대백화점 무역센터점',
          // map: 'https://m.map.kakao.com/actions/detailMapView?id=18384587&refService=place', // 카카오맵 지도 정보(test)
          tel: '02-552-2233', // 전화번호 (test)
          list: [
            {
              brand_name: 'MINE',
              product_name: '컬러 블록 니트 가디건',
              image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
              options: ['BLACK', '90', '1개'],
              sell_price: '355000',
              discount: '20',
              price: '366000',
              link: '#n',
              notice: ['수령예정 2021.12.12'],
              sold_out: false,
              zzim : false,
            },
            {
              brand_name: 'TIME',
              product_name: '글리터링 니트 가디건 ',
              image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
              options: ['Charcoal gray', '90', '1개'],
              sell_price: '636000',
              discount: '20',
              price: '795000',
              link: '#n',
              notice: null,
              sold_out: true,
              zzim : false,
            },
          ],
        },
        {
          store: '현대백화점 디큐브시티',
          // map: 'https://m.map.kakao.com/actions/detailMapView?id=26776860&refService=place', // 카카오맵 지도 정보(test)
          tel: '02-2622-2233', // 전화번호 (test)
          list: [
            {
              brand_name: 'MINE',
              product_name: '컬러 블록 니트 가디건',
              image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img3.png',
              options: ['BLACK', '90', '1개'],
              sell_price: '355000',
              discount: '20',
              price: '366000',
              link: '#n',
              notice: ['수령예정 2021.12.12'],
              sold_out: false,
              zzim : false,
            },
          ],
        },
      ],
      quickDeliveryList: [ // 퀵배송 리스트
        {
          brand_name: 'MINE',
          product_name: '컬러 블록 니트 가디건 컬러 니트',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
          options: ['BLACK', '90', '2개'],
          sell_price: '355000',
          discount: '20',
          price: '366000',
          link: '#n',
          notice: null,
          sold_out: false,
          zzim : false,
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
          sold_out: false,
          zzim : false,
        },
      ],
      giftsData : [ // 증정품,사은품
        {
          type : 'present', // present 증정품 , event 사은품
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-6.png',
          name : '오에라 화장품 샘플',
          desc : '오에라 화장품 샘플 100만원 이상 구매시 프리미엄 샘플 세트(파우치+에센스30ml)을 증정합니다.',
        },
        {
          type : 'event',
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-5.png',
          name : '톰그레이하운드 X 콤팩트레코드바 미니 에코백 톰그레이하운드 X 콤팩트레코드바 미니 에코백',
          date : '05월 13일 ~ 소진 시 까지',
          desc : '정상 30만원 이상 구매 고객님께 구매 사은품으로 톰그레이하운드 X 콤팩트레 미니 에코백을 드립니다.',
        },
        {
          type : 'mileage',
          mileage : 100000,
          date : '6월 14일 ~ 6월 30일까지',
          desc : '폼더스토어, 폼맨즈라운지 IPANEMA 상품 구매 고객님께 100,000 마일리지 적립해 드립니다.',
        },
        {
          type : 'event',
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-1.png',
          name : 'IPANEMA 에코백',
          num : 2,
          date : '6월 14일 ~ 소진 시 까지',
          desc : '폼더스토어, 폼맨즈라운지 IPANEMA 상품 구매 고객님께 사은품으로 IPANEM 에코백을 드립니다. 자세한 내용은',
          notice : '별도 배송 10월 7일<br/>사은품은 이벤트 종료 후 취소 및 반품을 고려하여<br/>10월 7일 발송 예정'
        },
        {
          type : 'event',
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-1.png',
          name : 'IPANEMA 에코백 IPANEMA 에코백 IPANEMA 에코백 IPANEMA 에코백',
          num : 2,
          date : '6월 14일 ~ 소진 시 까지',
          desc : '폼더스토어, 폼맨즈라운지 IPANEMA 상품 구매 고객님께 사은품으로 IPANEM 에코백을 드립니다.',
          notice : '동봉 배송<br/>사은품은 주문 상품과 함께 동봉하여 발송<br/>(주문 1건당 사은품 1개 제공)'
        },
        {
          type : 'event',
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-5.png',
          name : '톰그레이하운드 X 콤팩트레코드바 미니 에코백',
          date : '05월 13일 ~ 소진 시 까지',
          desc : '정상 30만원 이상 구매 고객님께 구매 사은품으로 톰그레이하운드 X 콤팩트레 미니 에코백을 드립니다.',
          notice : '동봉 배송<br/>사은품은 주문 상품과 함께 동봉하여 발송<br/>(주문 1건당 사은품 1개 제공)'
        },
        {
          type : 'event',
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-5.png',
          name : '톰그레이하운드 X 콤팩트레코드바 미니 에코백',
          date : '05월 13일 ~ 소진 시 까지',
          desc : '정상 30만원 이상 구매 고객님께 구매 사은품으로 톰그레이하운드 X 콤팩트레 미니 에코백을 드립니다.',
          notice : '동봉 배송<br/>사은품은 주문 상품과 함께 동봉하여 발송<br/>(주문 1건당 사은품 1개 제공)'
        },
        {
          type : 'event',
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-4.png',
          name : '이벤트 타임 스카프 사은품',
          date : '05월 13일 ~ 소진 시 까지',
          desc : '자세한 내용을 확인해 주세요',
          notice : '자동응모 사은품 상세 내용은 주문 후,<br/>‘마이페이지>참여내역’에서 확인 가능'
        },
      ],
      tooltipList:{
        employee_sale:[
          '할인기준: 정상가 기준으로 임직원 할인 적용, 시즌/브랜드 별 할인율 상이',
          '적용 범위: 주문서 단위로 임직원 할인 적용 여부 선택 가능',
          '임직원 할인 가능/불가능한 상품은 함께 주문할 수 없으므로, 별도 주문해주세요.',
          '임직원 할인 적용을 원하지 않을 경우, 주문서 할인정보 화면에서 다른 할인 혜택을 적용해주세요.'
        ],
        delivery: [
          // 배송비(택배)
          '쿠폰/바우처 할인금액 및 한섬마일리지/H.Point 사용을 제외한 실 결제금액 기준 3만원 미만<br>결제 시 3,000원 배송비가 부과됩니다.<br>(3만원 이상 구매 시 무료배송)', // 221221 툴팁 : br 추가
          '도서산간 지역은 배송비가 추가 될 수 있습니다.',
          '한섬마일리지, H.Point, e-money로 배송비<br>결제가 불가합니다.', // 221221 툴팁 : br 추가
        ],
        quick_delivery: [
          // 배송비(퀵배송)
          '퀵 배송비(5,000원)는 주문상품의 금액과 관계없이 별도로 청구되는 배송비입니다.',
          '퀵배송 서비스는 한섬마일리지, H.Point, e-money로 배송비 결제가 불가합니다.',
        ],
      },
      eventBanner : [ // 이벤트 배너
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/shoppingbag-banner.png',
          desc : 'SYSTEM HOMME 스포트라이트 온 타임옴므 CHECK OUT NOW',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/shoppingbag-banner.png',
          desc : 'SYSTEM HOMME 스포트라이트 온 타임옴므 CHECK OUT NOW',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/shoppingbag-banner.png',
          desc : 'SYSTEM HOMME 스포트라이트 온 타임옴므 CHECK OUT NOW',
          link : '#n',
        },
      ],
      giftsView : false, // 230104 쇼핑백 : 추가
    }
  },
  created() {
    
  },
  methods: {
    // [퍼블수정]23.07.18 더플러스 가입 베너 추가
    openonlymobile(){
      this.onlymobile = true
    },
    closeonlymobile(){
      this.onlymobile = false
    },
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/order.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>
