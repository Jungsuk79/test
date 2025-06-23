<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/OR/guide/Structure 참고 -->
    <div class="content-wrap">
      <CommonContentsLeftMenu :title="'마이페이지'" :url="'/json/mypage_left_menu.json'" :active="'/ko/OR/orderShippingList'"></CommonContentsLeftMenu>
      <div class="my-page-r-box "><!-- 마이페이지 -->
        <!--//반품상품 선택-->
        <div v-if="applyNext">
          <div class="cmp-page-tit"><!-- 페이지 타이틀 -->
            <h2 class="tit">반품 신청</h2>
          </div>

          <div class="cmp-info info-type1">
            <p class="cmp-font">반품하시려는 상품과 수량을 선택해 주세요.</p>
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
        <!--//반품상품 선택-->

        <!-- 반품상품 선택 후 신청화면-->
        <div v-if="applyPreocess">
          <div v-if="isStep1"><!-- 회수지선택 -->
            <div class="cmp-page-tit"><!-- 페이지 타이틀 -->
              <h2 class="tit">반품 신청</h2>
              <div class="state-number">
                <ul>
                  <li v-for="(item,index) in stateText" :key="index" :class="{ active: item.id == stepActive }">
                    <span class="number">{{item.id}}</span><span>{{item.name}}</span>
                    <i class="cmp-icon i-next cmp-icon-18"></i>
                  </li>
                </ul>
              </div>
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
                  <col style="width:465px;"/>
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
                    <tr :key="index">
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
                  </template>
                </tbody>
              </table>
            </div>
            <!-- //상품 정보 -->

            <!-- 회수지 정보 [퍼블수정] 22.09.30 주문조회 수정 -->
            <div class="return-info no-tit no-bt">
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

            <v-col cols="12" class="text-center mt-30 pt-5">
              <v-btn large color="primary" @click.prevent="stepNextBtn">다음 단계</v-btn>
            </v-col>
          </div>
          <div v-if="isStep2"><!-- 사유선택 -->
            <div class="cmp-page-tit"><!-- 페이지 타이틀 -->
              <h2 class="tit">반품 신청</h2>
              <div class="state-number">
                <ul>
                  <li v-for="(item,index) in stateText" :key="index" :class="{ active: item.id == stepActive }">
                    <span class="number">{{item.id}}</span><span>{{item.name}}</span>
                    <i class="cmp-icon i-next cmp-icon-18"></i>
                  </li>
                </ul>
              </div>
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
                  <col style="width:465px;"/>
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
                          <li class="mr-10">
                            <!-- 반품 사유 -->
                            <CommonSelectBox id="reason1" title="반품 사유" @submit="reason1FieldSet">
                              <template #optionList>
                                <option value="placeholder">반품 사유를 선택해 주세요. (필수)</option>
                                <option value="option1">단순변심</option>
                                <option value="option2">상품불량</option>
                                <option value="option3">배송불만</option>
                                <option value="option4">상품정보오류</option>
                              </template>
                            </CommonSelectBox>
                          </li>
                          <li v-if="reason1Selected">
                            <!-- 반품 상세 사유 -->
                            <CommonSelectBox id="reason2" title="반품 상세 사유" @submit="reason2FieldSet">
                              <template #optionList>
                                <option value="placeholder">반품 상세 사유를 선택해 주세요. (필수)</option>
                                <option value="option1">다른상품 주문</option>
                                <option value="option2">사이즈가 큼</option>
                                <option value="option3">사이즈가 작음</option>
                                <option value="option4">상품이미지 상이(컬러, 디자인, 핏)</option>
                                <option value="option5">구매의사가 사라짐</option>
                                <option value="option6">색상 또는 사이즈 교환기능이 없어서</option>
                                <option value="direct">기타</option>
                              </template>
                            </CommonSelectBox>
                          </li>
                          <li v-if="reason2Selected" class="full"><!-- [퍼블수정] 22.09.30 주문조회 수정 -->
                            <!-- 반품 상세 작성 -->
                            <v-text-field outlined label="자세한 사유를 입력해 주세요." clearable class="cmp-form-input" :error="formBoxErrorTest"></v-text-field>
                          </li>
                          <li class="full photo-type center">
                            <!-- 사진첨부 -->
                            <div class="cmp-form-file">
                              <input id="fileUpload" type="file" />
                              <label for="fileUpload">사진첨부</label>
                            </div>
                            <span class="cmp-font fnt-14 ml-16">10MB 이하의 jpg, gif, png 파일 / 최대 5개 첨부가능</span>
                          </li>
                          <li class="full photo-type">
                            <!-- 사진첨부 후 노출 -->
                            <ul class="attach-file-list text-left">
                              <li v-for="(item, index) in attachFileList" :key="index" class="file-cnt">
                                <div class="file">
                                  <v-img  :src="item" aspect-ratio="1" alt="첨부 파일"></v-img>
                                  <v-btn icon></v-btn>
                                </div>
                              </li>
                              <li v-if="attachFileList.length < 5" class="file-cnt">
                                <div class="cmp-form-fileIcon">
                                  <input id="fileUpload3" type="file" />
                                  <label for="fileUpload3">사진첨부</label>
                                </div>
                              </li>
                            </ul>
                            <p class="cmp-font fnt-14 mt-10">10MB 이하의 jpg, gif, png 파일 / 최대 5개 첨부가능</p>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
            <!-- //상품 정보 -->

            <v-col cols="12" class="text-center mt-30 pt-5">
              <v-btn large color="primary" @click.prevent="stepNextBtn1">다음 단계</v-btn>
            </v-col>
          </div>
          <div v-if="isStep3"><!-- 최종 금액 확인 -->
            <div class="cmp-page-tit"><!-- 페이지 타이틀 -->
              <h2 class="tit">반품 신청</h2>
              <div class="state-number">
                <ul>
                  <li v-for="(item,index) in stateText" :key="index" :class="{ active: item.id == stepActive }">
                    <span class="number">{{item.id}}</span><span>{{item.name}}</span>
                    <i class="cmp-icon i-next cmp-icon-18"></i>
                  </li>
                </ul>
              </div>
            </div>

            <div class="order-number-box">
              <div class="line-box">
                <p class="cmp-font">주문번호<span class="ml-8">211222P12345678</span></p>
                <p class="cmp-font fnt-13">2021.12.22 13:00</p>
              </div>
            </div>

            <!-- 반품 배송비 결제방법 [퍼블수정] 22.09.30 주문조회 수정-->
            <div class="return-info no-tit no-bt">
              <div class="box">
                <dl class="box-tit">
                  <dt class="tit cmp-font fnt-20 pb-10">반품 배송비 결제방법</dt>
                </dl>
                <dl class="pack-info">
                  <dd class="txt cmp-font fnt-16 pb-0">배송비 6,000원 발생</dd>
                </dl>
                <dl class="pack-info">
                  <dd class="txt pt-20 pb-0">
                    <v-radio-group v-model="rodioModel0" row class="cmp-form-radioGroup">
                      <v-radio label="환불금에서 차감" class="cmp-form-radio mr-40"></v-radio>
                      <v-radio label="무료쿠폰" class="cmp-form-radio mr-4"></v-radio>
                      <v-layout row align-center justify-start>
                        <p class="cmp-font fnt-16">1 <span class="cmp-font c-light-gray">/ 2 개</span></p>
                        <CommonTooltipBox :tooltip-list="tooltipList.list0" icon-type="info" right/>
                      </v-layout>
                    </v-radio-group>
                  </dd>
                </dl>
              </div>
            </div>
            <!-- // 반품 배송비 결제방법 [퍼블수정] 22.09.30 주문조회 수정-->

            <!-- 반품 배송비 [퍼블수정] 22.09.30 주문조회 수정-->
            <div class="return-info no-tit no-bt bb-bold">
              <div class="box">
                <dl class="box-tit">
                  <dt class="tit cmp-font fnt-20 pb-14">반품 배송비</dt>
                  <dd class="btn">
                    <span class="cmp-font fnt-20 bold">6,000</span><span class="cmp-font fnt-20 ml-2">원</span>
                  </dd>
                </dl>
                <dl class="pack-info">
                  <dd class="txt cmp-font fnt-14 c-red pb-0">상품 검수 후 귀책 사유에 따라 반품 배송비가 발생될 수 있습니다.</dd>
                </dl>
              </div>
            </div>
            <!-- // 반품 배송비 [퍼블수정] 22.09.30 주문조회 수정-->

            <!-- 반품 배송비 결제방법 [퍼블수정] 22.09.30 주문조회 수정-->
            <div class="return-info no-tit no-bt">
              <div class="box">
                <dl class="box-tit">
                  <dt class="tit cmp-font fnt-20 pb-10">반품 배송비 결제방법</dt>
                </dl>
                <dl class="pack-info">
                  <dd class="txt cmp-font fnt-16 pb-0">배송비 0원 발생</dd>
                </dl>
                <dl class="pack-info">
                  <dd class="txt pt-20 pb-0">
                    <!-- [퍼블수정]22.11.21 주문서조회 수정 -->
                    <v-radio-group row class="cmp-form-radioGroup select-disabled all" readonly>
                      <v-radio label="환불금에서 차감" class="cmp-form-radio mr-40"></v-radio>
                      <v-radio label="무료쿠폰" class="cmp-form-radio mr-4"></v-radio>
                      <v-layout row align-center justify-start>
                        <p class="cmp-font fnt-16">1 <span class="cmp-font c-light-gray">/ 2 개</span></p>
                        <CommonTooltipBox :tooltip-list="tooltipList.list0" icon-type="info" right/>
                      </v-layout>
                    </v-radio-group>
                  </dd>
                </dl>
              </div>
            </div>
            <!-- // 반품 배송비 결제방법 [퍼블수정] 22.09.30 주문조회 수정-->

            <!-- 반품 배송비 [퍼블수정] 22.09.30 주문조회 수정 -->
            <div class="return-info no-tit no-bt bb-bold">
              <div class="box">
                <dl class="box-tit">
                  <dt class="tit cmp-font fnt-20 pb-14">반품 배송비</dt>
                  <dd class="btn">
                    <span class="cmp-font fnt-20 bold">0</span><span class="cmp-font fnt-20 ml-2">원</span>
                  </dd>
                </dl>
                <dl class="pack-info">
                  <dd class="txt cmp-font fnt-14 pb-10">반품 사유에 따라 배송비 차감이 되지 않습니다.</dd>
                </dl>
                <dl class="pack-info">
                  <dd class="txt cmp-font fnt-14 c-red pb-0">상품 검수 후 귀책 사유에 따라 반품 배송비가 발생될 수 있습니다.</dd>
                </dl>
              </div>
            </div>
            <!-- // 반품 배송비 [퍼블수정] 22.09.30 주문조회 수정 -->

            <!-- 환불정보 [퍼블수정] 22.09.30 주문조회 수정 -->
            <div class="cmp-sub-tit mt-24">
              <h3 class="tit cmp-font fnt-20">환불정보</h3>
              <span class="cmp-font c-red">환불예정</span>
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
                    <p v-if="contItem.tit" class="cmp-font mb-6" :class="{'mt-12':  contIndex == 1}">{{contItem.tit}}</p>
                    <ul :class="[contItem.listType ? '' : 'cmp-dotList']">
                      <li v-for="(txtItem,txtIndex) in contItem.txt" :key="txtIndex" v-html="newLine(txtItem)"></li>
                    </ul>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <!-- //환불 안내 -->

            <v-col cols="12" class="text-center mt-30 pt-5">
              <v-btn large color="primary" @click.prevent="applyCompleteBtn">반품 신청 완료</v-btn>
            </v-col>
          </div>
        </div>
        <!-- 반품상품 선택 후 신청화면 [퍼블수정] 22.09.30 주문조회 수정 -->
        
        <!-- 반품신청 완료 화면 -->
        <div v-if="applyComplete">
          <div class="cmp-page-tit"><!-- 페이지 타이틀 -->
            <h2 class="tit">반품 신청</h2>
          </div>

          <div class="complete-top">
            <i class="cmp-icon-etc cmp-icon-120 i-confirm"></i>
            <p class="txt">반품 신청이 완료 되었습니다.</p>
            <p class="cmp-font">반품 현황은 <nuxt-link class="cmp-font fnt-16 button" to="#n"><span class="line">마이페이지&gt;주문조회</span></nuxt-link>에서 확인해 주세요.</p>
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
            <div class="cmp-info info-type2">
              <span class="tit">환불 차감 금액</span>
              <dl>
                <dt>반품 배송비</dt>
                <dd>6,000<span>원</span></dd>
                <dt>반품 배송비(쿠폰 사용)</dt>
                <dd>0<span>원</span></dd>
                <dt>반품 배송비(쿠폰 사용/VVIP혜택)</dt>
                <dd>0<span>원</span></dd>
              </dl>
            </div>
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
            <v-btn large color="primary">확인</v-btn>
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
      applyPreocess : false,
      applyComplete : false,
      drawer: null,
      isStep1: true,
      rodioModel0 : 0,
      isStep2: false,
      isStep3: false,
      deliveryMsgInput: false,
      reason2Selected: false,
      reason1Selected:false,
      formBoxErrorTest: false,
      stepActive: 1,
      tooltipList: {
        // 툴팁 상세 정보
        list0: [
          '무료 배송비 쿠폰을 사용은 만료가 임박한 쿠폰이 우선적으로 사용 됩니다.',
        ],
      },
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
        }
      ],
      tabs: 0,
      attachFileList : [
        'https://img.thehandsome.com/md/publish/dummy/attach-file-img0.png',
        'https://img.thehandsome.com/md/publish/dummy/attach-file-img1.png',
      ],
      cmpAccList: [{
        text: '환불 안내',// [퍼블수정] 22.09.30 주문조회 수정
        cont: [{
            tit : '쿠폰 적용 상품 반품 환불 안내' ,
            txt : [
            '쿠폰 적용된 상품 취소/반품 시, 상품금액에 따라 쿠폰 할인된 금액 차감 후 환불됩니다.',
            '쿠폰 적용 여부에 따라 취소/반품 신청하신 상품의 판매가 보다 환불금액이 작을 수 있습니다.',
            '특정 금액 이상 구매 시 적용되는 쿠폰의 경우 환불로 인해 구매 금액이 감소할 때  쿠폰 적용이 취소 될 수 있습니다.',
            '기간이 만료된 쿠폰은 복원되어도 사용 불가하며, <button class="cmp-font fnt-14 button"><span class="line">마이페이지>쿠폰함</span></button>에서 기간을 확인하실 수 있습니다.',
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
        {
          text: '반품 신청 및 배송비 안내', // [퍼블수정] 22.09.30 주문조회 수정
          cont: [{
            tit : '반품 기간' ,
            txt : [
            '상품 수령 후 7일 이내 반품 신청하셔야 합니다. (단 당사 귀책으로 인한 반품 시 반품 기간 이후 1:1 문의로 접수 가능)', // 220919 문구변경
            '반품 신청 후 7일 이내 반품 상품이 당사에 도착해야 합니다.'
            ],
            listType : false,
          },
          {
            tit : '반품 배송비' ,
            txt : [
            '고객 변심으로 인한 반품 배송비는 6,000원입니다.',
            '상품 불량 및 오발송으로 인한 반품 배송비는 무료입니다.',
            '반품 배송비는 한섬마일리지 > e-money > 주 결제수단(신용카드 등) 순으로 차감됩니다.', // [퍼블수정] 22.09.30 주문조회 수정
            '반품 배송비 결제를 [환불금에서 차감]으로 선택하신 경우는 환불 예상금액에서 반품 배송비가 차감됩니다.', //  [퍼블수정] 22.09.30 주문조회 수정
            ],
            listType : false
        }],
        },
        {
          text: '반품 규정 안내',
          cont: [{
            tit : null,
            txt : [
            '전자 상거래 등에서 소비자보호에 관한 법률에서 규정한 내용을 기준으로 합니다.',
            ],
            listType : false,
          },
          {
            tit : '반품 불가 사유' ,
            txt : [
            '상품을 사용 또는 세탁한 경우',
            '상품의 태그(TAG)나 라벨, 상품 박스가 훼손 또는 분실된 경우 (단, 상품의 내용을 확인하기 위하여 포장 등을 훼손한 경우는 반품이 가능합니다.)',
            ],
            listType : false
          }],
        },
        {
          text: '뷰티 상품 반품 시 주의사항',
          cont: [{
            tit : '반품 불가 사유' ,
            txt : [
            '뷰티 카테고리 상품은 개봉한 경우 반품이 불가합니다.<br>단, 내용물 불량 혹은 피부트러블로 인한 반품은 가능합니다. (용량 1/3 미만 사용 및 의사소견서 1:1 문의에 첨부 필수)',
            ],
            listType : false,
          },
          {
            tit : '반품 배송 안내' ,
            txt : [
            '배송 받으신 박스에 상품을 담아 반송하셔야 합니다.<br>다른 박스로 반송 시 반품 처리가 불가할 수 있습니다.<br>(한섬/오에라/리퀴드 퍼퓸바 상품을 반품하실 경우, 각각의 배송 박스에 상품을 담아 반송하셔야 합니다)',
            ],
            listType : false
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
    reason1FieldSet(val){
      if(val !== '') this.reason1Selected = true
      else this.reason1Selected = false
    },
    reason2FieldSet(val) {
      if (val === 'direct') this.reason2Selected = true
      else this.reason2Selected = false
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