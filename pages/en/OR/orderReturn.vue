<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/OR/guide/Structure 참고 -->
    <div class="content-wrap">
      <CommonContentsLeftMenu :title="'My Page'" :url="'/json/mypage_left_menu_en.json'" :active="'/en/en/OR/orderShippingList'"></CommonContentsLeftMenu>
      <div class="my-page-r-box "><!-- 마이페이지 -->
        <!--//반품상품 선택-->
        <div v-if="applyNext">
          <div class="cmp-page-tit"><!-- 페이지 타이틀 -->
            <h2 class="tit">Request for Return</h2>
          </div>

          <div class="cmp-info info-type1">
            <p class="cmp-font">Please select the product and quantity to be returned.</p>
          </div>

          <div class="order-number-box light-line mt-30 mb-20">
            <div class="line-box">
              <p class="cmp-font">Order No.<span class="ml-8">211222P12345678</span></p>
              <p class="cmp-font fnt-14">15 Jun. 2022 13:00</p>
            </div>
          </div>

          <!-- 카테고리 필터 -->
          <v-layout row class="cmp-form-chkGroup wide pt-4 pb-10">
              <v-checkbox label="Select All" class="cmp-form-checkbox"></v-checkbox>
          </v-layout>
          <!-- //카테고리 필터 -->

          <!-- 상품 정보 -->
          <div class="product-row-table">
            <table>
              <caption>product list</caption>
              <colgroup>
                <col style="width:28px;"/>
                <col style="width:auto;"/>
                <col style="width:248px;"/>
                <col style="width:144px;"/> 
              </colgroup>
              <thead>
                <tr>
                  <th class="pw-0"><span class="ir">Select</span></th>
                  <th>Product Information</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(item, index) in deliveryList">
                  <tr :key="index">
                    <td class="td-t pw-0"><v-checkbox label="Select" class="cmp-form-checkbox label-hide"></v-checkbox></td>
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
                        <div class="product-sellprice">￦<strong>{{item.sell_price | number}}</strong></div>
                        <div v-if="item.price || item.discount" class="product-price-cnt">
                          <del class="product-price-origin"><span class="mr-2">￦</span>{{item.price | number}}</del>
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
            <v-btn large color="primary" @click.prevent="applyNextBtn">Next Step</v-btn>
          </v-col>
        </div>
        <!--//반품상품 선택-->

        <!-- 반품상품 선택 후 신청화면-->
        <div v-if="applyPreocess">
          <div v-if="isStep1"><!-- 회수지선택 -->
            <div class="cmp-page-tit"><!-- 페이지 타이틀 -->
              <h2 class="tit">Request for Return</h2>
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
                <p class="cmp-font">Order No.<span class="ml-8">211222P12345678</span></p>
                <p class="cmp-font fnt-14">15 Jun. 2022 13:00</p>
              </div>
            </div>

            <!-- 상품 정보 -->
            <div class="product-row-table">
              <table>
                <caption>product list</caption>
                <colgroup>
                  <col style="width:470px;"/>
                  <col style="width:auto;"/>
                </colgroup>
                <thead>
                  <tr>
                    <th>Product Information</th>
                    <th>Price</th>
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
                          <div class="product-sellprice">￦<strong>{{item.sell_price | number}}</strong></div>
                          <div v-if="item.price || item.discount" class="product-price-cnt">
                            <del class="product-price-origin"><span class="mr-2">￦</span>{{item.price | number}}</del>
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

            <!-- 회수지 정보 -->
            <div class="cmp-sub-tit col line mt-24">
              <h3 class="tit cmp-font fnt-20">Retrieval Location Info</h3>
            </div>
            <div class="return-info no-tit no-bt">
              <div class="box">
                <dl class="box-tit"> 
                  <dd class="txt">Thehanseom / 080-2223-2332 / aaa@naver.com</dd>
                  <dd class="btn"><button class="cmp-font fnt-13 button"><span class="line">Modify Info</span></button></dd>
                </dl>
                <dl class="pack-info mt-0">
                  <dt class="tit">address</dt>
                  <dd class="txt pb-0 pt-6">[95014] HANDSOME B/D 523, Dosan-daero, Gangnam-gu, Seoul, Korea</dd>
                </dl>
              </div>
            </div>
            <!-- // 회수지 정보 -->

            <v-col cols="12" class="text-center mt-30 pt-5">
              <v-btn large color="primary" @click.prevent="stepNextBtn">Next Step</v-btn>
            </v-col>
          </div>
          <div v-if="isStep2"><!-- 사유선택 -->
            <div class="cmp-page-tit"><!-- 페이지 타이틀 -->
              <h2 class="tit">Request for Return</h2>
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
                <p class="cmp-font">Order No.<span class="ml-8">211222P12345678</span></p>
                <p class="cmp-font fnt-13">15 Jun. 2022 13:00</p>
              </div>
            </div>

            <!-- 상품 정보 -->
            <div class="product-row-table">
              <table>
                <caption>product list</caption>
                <colgroup>
                  <col style="width:470px;"/>
                  <col style="width:auto;"/>
                </colgroup>
                <thead>
                  <tr>
                    <th>Product Information</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="(item, index) in unitData">
                    <tr :key="index" class="bottom-none">
                      <td class="pw-0">
                        <nuxt-link :to="item.link" class="product-row-unitInfo">
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
                          <div class="product-sellprice">￦<strong>{{item.sell_price | number}}</strong></div>
                          <div v-if="item.price || item.discount" class="product-price-cnt">
                            <del class="product-price-origin"><span class="mr-2">￦</span>{{item.price | number}}</del>
                            <!-- eslint-disable -->
                            <span class="product-discount">{{item.discount}}<em>%</em></span>
                            <!-- eslint-disable -->
                          </div>
                        </nuxt-link>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2" class="pw-0">
                        <ul class="table-inputBox">
                          <li class="mr-10">
                            <!-- 반품 사유 --> 
                            <CommonSelectBox id="reason1" title="반품 사유" @submit="reason1FieldSet">
                              <template #optionList>
                                <option value="placeholder">Please select reason for return. (Required)</option>
                                <option value="option1">Simple change of mind</option><!-- 단순변심 -->
                                <option value="option2">Product defect</option><!-- 상품불량 -->
                                <option value="option3">Delivery complaint</option><!-- 배송불만 -->
                                <option value="option4">Product info error</option><!-- 상품정보오류 -->
                              </template>
                            </CommonSelectBox>
                          </li>
                          <li v-if="reason1Selected">
                            <!-- 반품 상세 사유 --> 
                            <CommonSelectBox id="reason2" title="반품 상세 사유" @submit="reason2FieldSet">
                              <template #optionList>
                                <option value="placeholder">Please select detailed reason for return. (Required)</option>
                                <option value="option1">Ordering of other product</option>
                                <option value="option2">Size is too big</option>
                                <option value="option3">Size is too small</option>
                                <option value="option4">Different from product image (Color, design, fit)</option>
                                <option value="option5">No purchase intent</option>
                                <option value="option6">No option for color or size exchange</option>
                                <option value="direct">Other</option>
                              </template>
                            </CommonSelectBox>
                          </li>
                          <li v-if="reason2Selected" class="full">
                            <!-- 반품 상세 작성 -->
                            <v-text-field outlined label="Please enter detailed reason." clearable class="cmp-form-input" :error="formBoxErrorTest"></v-text-field>
                          </li>
                          <li class="full photo-type center">
                            <!-- 사진첨부 -->
                            <div class="cmp-form-file">
                              <input id="fileUpload" type="file" />
                              <label for="fileUpload">Attach Photo</label>
                            </div>
                            <span class="cmp-font fnt-14 ml-16">jpg, gif, png file under 10 MB / Max. 5 files can be attached</span>
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
                            <p class="cmp-font fnt-14 mt-10">jpg, gif, png file under 10 MB / Max. 5 files can be attached</p>
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
              <v-btn large color="primary" @click.prevent="stepNextBtn1">Next Step</v-btn>
            </v-col>
          </div>
          <div v-if="isStep3"><!-- 최종 금액 확인 -->
            <div class="cmp-page-tit"><!-- 페이지 타이틀 -->
              <h2 class="tit">Request for Return</h2>
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
                <p class="cmp-font">Order No.<span class="ml-8">211222P12345678</span></p>
                <p class="cmp-font fnt-13">15 Jun. 2022 13:00</p>
              </div>
            </div>

            <!-- 환불 예정금액 --> 
            <div class="cmp-sub-tit mt-24">
              <h3 class="tit cmp-font fnt-20">Refund Info</h3>
              <span class="cmp-font c-red">To be refunded</span>
            </div>
            <div class="refund-box">
              <ul class="cust card-info-box">
                <li>
                  <p class="cmp-font fnt-14 mb-6">Payment of<br />Returned Product</p>
                  <p class="cmp-font fnt-20"><span class="mr-2">￦</span>30,000</p>
                </li>
                <li class="sign minus"></li>
                <li>
                  <p class="cmp-font fnt-14 mb-6">Deduction from<br />Refund Amount</p>
                  <p class="cmp-font fnt-20"><span class="mr-2">￦</span>6,000</p>
                </li>
                <li class="sign equal"></li>
                <li>
                  <p class="cmp-font fnt-14 mb-6">Final Refund<br />Amount</p>
                  <p class="cmp-font fnt-20"><span class="mr-2">￦</span>24,000</p>
                  <div class="card-info"><b>Credit Card</b> / American Express</div>
                </li>
              </ul>
              <div class="cmp-info info-type2">
                <span class="tit">Deduction from Refund Amount</span>
                <dl>
                  <dt>
                    <v-layout align-center>
                      Return Shipping Fee (Coupon Used)
                      <CommonTooltipBox class="ml-2">
                        <template #content>
                          <ul class="cmp-dotList tooltip-ver">
                            <li class="cmp-font fnt-14 ">In case actual payment amount is below<br />￦ 200,000 due to partial refund, Shipping fee of up to a maximum of ￦ 20,000 may be deducted from the refund amount according to the global return policy.</li>
                          </ul>
                          <p class="mt-14 mb-10 cmp-font fnt-14">Charged Shipping fee for returns less than ￦ 200,000</p>
                          <div class="product-row-table tooltip-ver">
                            <table>
                              <caption>fee</caption>
                              <colgroup>
                                <col style="width:auto;"/>
                                <col style="width:183px;"/>
                              </colgroup>
                              <thead>
                                <tr>
                                  <th>Shipping Fee</th>
                                  <th>Country</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>￦ 10,000</td>
                                  <td class="text-left pl-15">Mainland China,<br />Hong Kong, Japan,<br />Taiwan, Singapore,<br />Vietnam, Malaysia,<br />Indonesia, Brunei,<br />Thailand, Philippines,<br />Bangladesh, India</td>
                                </tr>
                                <tr>
                                  <td class="pb-0">￦ 20,000</td>
                                  <td class="text-left pl-15 pb-0">Other countries</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </template>
                      </CommonTooltipBox>
                    </v-layout>
                  </dt>
                  <dd>
                    <span class="mr-2">￦</span>6,000
                  </dd>
                </dl>
              </div>
            </div>
            <!-- // 환불 예정금액 --> 
            <!-- 복원 예정 쿠폰 [퍼블수정] 22.11.28 수정 -->
            <div class="return-info no-tit no-bt bb-bold">
              <div class="box">
                <dl class="pack-info">
                  <dd class="txt cmp-font fnt-16 pb-6">Restored coupon</dd>
                </dl>
                <dl class="pack-info">
                  <dd>
                    <ul class="bold-cpn">
                      <li>None</li>
                    </ul>
                    <ul class="cmp-dotList">
                      <li>The coupon applied when ordering is a coupon that cannot be restored upon cancellation/return.</li>
                    </ul>
                  </dd>
                </dl>
              </div>
            </div>
            <div class="return-info no-tit no-bt bb-bold">
              <div class="box">
                <dl class="pack-info">
                  <dd class="txt cmp-font fnt-16 pb-6">Restored coupon</dd>
                </dl>
                <dl class="pack-info">
                  <dd>
                    <ul class="bold-cpn">
                      <li>November New Member Welcome Voucher (10%)</li>
                    </ul>
                    <ul class="cmp-dotList">
                      <li>Restored coupon can be reused.<br />For detailed period of use, please check <nuxt-link class="cmp-font fnt-14 button" to="#n"><span class="line">My Page &#47; Coupons.</span></nuxt-link></li>
                    </ul>
                  </dd>
                </dl>
              </div>
            </div>
            <div class="return-info no-tit no-bt bb-bold">
              <div class="box">
                <dl class="pack-info">
                  <dd class="txt cmp-font fnt-16 pb-6">Restored coupon</dd>
                </dl>
                <dl class="pack-info">
                  <dd>
                    <ul class="bold-cpn">
                      <li>November New Member Welcome Voucher (10%)</li>
                      <li>November New Member Welcome Voucher (7%)</li>
                    </ul>
                    <ul class="cmp-dotList">
                      <li>Restored coupon can be reused.<br />For detailed period of use, please check <nuxt-link class="cmp-font fnt-14 button" to="#n"><span class="line">My Page &#47; Coupons.</span></nuxt-link></li>
                    </ul>
                  </dd>
                </dl>
              </div>
            </div>
            <!-- // 복원 예정 쿠폰 [퍼블수정] 22.11.28 수정 -->

            <!-- 환불 안내 -->
            <v-expansion-panels accordion class="cmp-acc acc-type2">
              <v-expansion-panel v-for="(item, index) in cmpAccList" :key="index">
                <v-expansion-panel-header class="cmp-font fnt-16">{{ item.text }}
                  <template #actions>
                    <i class="cmp-icon-etc cmp-icon-down">열기/닫기</i>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div v-for="(contItem,contIndex) in item.cont" :key="contIndex">
                    <p v-if="contItem.tit" class="cmp-font" :class="[{'mt-12':  contIndex == 1}, 'mb-6']">{{contItem.tit}}</p>
                    <ul :class="[(contItem.listType ? '' : 'cmp-dotList'), {'dash-n-tab':contItem.listType_dash}]">
                      <li v-for="(txtItem,txtIndex) in contItem.txt" :key="txtIndex" v-html="newLine(txtItem)"></li>
                    </ul>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <!-- //환불 안내 -->

            <v-col cols="12" class="text-center mt-30 pt-5"> 
              <v-btn large color="primary" @click.prevent="applyCompleteBtn">Request for Return Completed</v-btn>
            </v-col>
          </div>
        </div>
        <!-- 반품상품 선택 후 신청화면-->
        
        <!-- 반품신청 완료 화면 -->
        <div v-if="applyComplete">
          <div class="cmp-page-tit"><!-- 페이지 타이틀 -->
            <h2 class="tit">Request for Return</h2>
          </div>

          <div class="complete-top">
            <i class="cmp-icon-etc cmp-icon-120 i-confirm"></i>
            <p class="txt pt-24 pb-14">Your Return Request is complete.</p> 
            <p class="cmp-font">For return status, please check <nuxt-link class="cmp-font fnt-16 button" to="#n"><span class="line">My Page&gt;Order Check.</span></nuxt-link></p>
          </div>

          <div class="order-number-box">
            <div class="line-box">
              <p class="cmp-font">Order No.<span class="ml-8">211222P12345678</span></p>
              <p class="cmp-font fnt-13">15 Jun. 2022 13:00</p>
            </div>
          </div>

          <!-- 환불 예정금액 --> 
          <div class="cmp-sub-tit mt-24">
            <h3 class="tit cmp-font fnt-20">Refund Info</h3>
            <span class="cmp-font c-red">To be refunded</span>
          </div>
          <div class="refund-box">
            <ul class="cust card-info-box">
              <li>
                <p class="cmp-font fnt-14 mb-6">Payment of<br />Returned Product</p>
                <p class="cmp-font fnt-20"><span class="mr-2">￦</span>30,000</p>
              </li>
              <li class="sign minus"></li>
              <li>
                <p class="cmp-font fnt-14 mb-6">Deduction from<br />Refund Amount</p>
                <p class="cmp-font fnt-20"><span class="mr-2">￦</span>6,000</p>
              </li>
              <li class="sign equal"></li>
              <li>
                <p class="cmp-font fnt-14 mb-6">Final Refund<br />Amount</p>
                <p class="cmp-font fnt-20"><span class="mr-2">￦</span>24,000</p>
                <div class="card-info"><b>Credit Card</b> / American Express</div>
              </li>
            </ul>
            <div class="cmp-info info-type2">
              <span class="tit">Deduction from Refund Amount</span>
              <dl>
                <dt>
                  <v-layout align-center>
                    Return Shipping Fee (Coupon Used)
                    <CommonTooltipBox class="ml-2">
                      <template #content>
                        <ul class="cmp-dotList tooltip-ver">
                          <li class="cmp-font fnt-14 ">In case actual payment amount is below<br />￦ 200,000 due to partial refund, Shipping fee of up to a maximum of ￦ 20,000 may be deducted from the refund amount according to the global return policy.</li>
                        </ul>
                        <p class="mt-14 mb-10 cmp-font fnt-14">Charged Shipping fee for returns less than ￦ 200,000</p>
                        <div class="product-row-table tooltip-ver">
                          <table>
                            <caption>fee</caption>
                            <colgroup>
                              <col style="width:auto;"/>
                              <col style="width:183px;"/>
                            </colgroup>
                            <thead>
                              <tr>
                                <th>Shipping Fee</th>
                                <th>Country</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>￦ 10,000</td>
                                <td class="text-left pl-15">Mainland China,<br />Hong Kong, Japan,<br />Taiwan, Singapore,<br />Vietnam, Malaysia,<br />Indonesia, Brunei,<br />Thailand, Philippines,<br />Bangladesh, India</td>
                              </tr>
                              <tr>
                                <td class="pb-0">￦ 20,000</td>
                                <td class="text-left pl-15 pb-0">Other countries</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </template>
                    </CommonTooltipBox>
                  </v-layout>
                </dt>
                <dd>
                  <span class="mr-2">￦</span>6,000
                </dd>
              </dl>
            </div>
          </div>
          <!-- // 환불 예정금액 --> 
          <!-- 복원 예정 쿠폰 [퍼블수정] 22.11.28 수정 -->
          <div class="return-info no-tit no-bt bb-bold">
            <div class="box">
              <dl class="pack-info">
                <dd class="txt cmp-font fnt-16 pb-6">Restored coupon</dd>
              </dl>
              <dl class="pack-info">
                <dd>
                  <ul class="bold-cpn">
                    <li>None</li>
                  </ul>
                  <ul class="cmp-dotList">
                    <li>The coupon applied when ordering is a coupon that cannot be restored upon cancellation/return.</li>
                  </ul>
                </dd>
              </dl>
            </div>
          </div>
          <div class="return-info no-tit no-bt bb-bold">
            <div class="box">
              <dl class="pack-info">
                <dd class="txt cmp-font fnt-16 pb-6">Restored coupon</dd>
              </dl>
              <dl class="pack-info">
                <dd>
                  <ul class="bold-cpn">
                    <li>November New Member Welcome Voucher (10%)</li>
                  </ul>
                  <ul class="cmp-dotList">
                    <li>Restored coupon can be reused.<br />For detailed period of use, please check <nuxt-link class="cmp-font fnt-14 button" to="#n"><span class="line">My Page &#47; Coupons.</span></nuxt-link></li>
                  </ul>
                </dd>
              </dl>
            </div>
          </div>
          <div class="return-info no-tit no-bt bb-bold">
            <div class="box">
              <dl class="pack-info">
                <dd class="txt cmp-font fnt-16 pb-6">Restored coupon</dd>
              </dl>
              <dl class="pack-info">
                <dd>
                  <ul class="bold-cpn">
                    <li>November New Member Welcome Voucher (10%)</li>
                    <li>November New Member Welcome Voucher (7%)</li>
                  </ul>
                  <ul class="cmp-dotList">
                    <li>Restored coupon can be reused.<br />For detailed period of use, please check <nuxt-link class="cmp-font fnt-14 button" to="#n"><span class="line">My Page &#47; Coupons.</span></nuxt-link></li>
                  </ul>
                </dd>
              </dl>
            </div>
          </div>
          <!-- // 복원 예정 쿠폰 [퍼블수정] 22.11.28 수정 -->

          <!-- 환불 안내 -->
          <v-expansion-panels accordion class="cmp-acc acc-type2">
            <v-expansion-panel v-for="(item, index) in cmpAccList" :key="index">
              <v-expansion-panel-header class="cmp-font fnt-16">{{ item.text }}
                <template #actions>
                  <i class="cmp-icon-etc cmp-icon-down">열기/닫기</i>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div v-for="(contItem,contIndex) in item.cont" :key="contIndex">
                  <p v-if="contItem.tit" class="cmp-font" :class="[{'mt-12':  contIndex == 1}, 'mb-6']">{{contItem.tit}}</p>
                  <ul :class="[(contItem.listType ? '' : 'cmp-dotList'), {'dash-n-tab':contItem.listType_dash}]">
                    <li v-for="(txtItem,txtIndex) in contItem.txt" :key="txtIndex" v-html="newLine(txtItem)"></li>
                  </ul>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <!-- //환불 안내 -->
          <v-col cols="12" class="text-center mt-30 pt-5">
            <v-btn large color="primary">Confirm</v-btn>
          </v-col>
        </div>
        <!-- 반품신청 완료 화면 -->
      </div>
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

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
      stateText: [
        { id: 1 , name: 'Select retrieval location'},
        { id: 2 , name: 'Select reason' },
        { id: 3 , name: 'Check final amount'},
      ],
      deliveryList: [ // 택배 리스트
        {
          brand_name: 'CLUB MONACO',
          product_name: 'Seersucker Baseball Cap',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
          options: ['BLACK', '90', '2'],
          sell_price: '355000',
          discount: null,
           Price: null,
          link: '#n',
          notice: '인기 상품으로 배송 지연 예상 (평일 기준 5일 이상 소요)',
          prd_numebr : '2',
        },
        {
          brand_name: 'LANVIN COLLECTION',
          product_name: 'Cashmere strap knit gloves',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
          options: ['CHARCOAL GRAY', '90', '1'],
          sell_price: '355000',
          discount: null,
          Price: null,
          link: '#n',
          notice: null,
          prd_numebr : '1',
        },
        {
          brand_name: 'orea',
          product_name: 'Blue Mineral Sun Cream SPF30',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img2.png',
          options: ['MULTI', 'FR', '1'],
          sell_price: '355000',
          discount: null,
         Price: null,
          link: '#n',
          notice: '오에라 전용박스 별도배송',
          prd_numebr : '1',
        }
      ],
      unitData : [
        {
          brand_name: 'MINE',
          product_name: 'Seersucker Baseball Cap',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
          options: ['BLACK', '90', '2'],
          sell_price: '355000',
          discount: null,
         Price: null,
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
        text: 'Refund guide',
        cont: [{
            tit : 'Refund guide for return of coupon applied products' ,
            txt : [
            'When canceling/returning a product with a coupon applied, it will be refunded after deducting the coupon discount amount according to the product price.',
            'Coupons that have expired cannot be restored.',
            'When canceling/returning a product with a coupon applied, an amount less than the order price may be refunded.',
            'In the case of coupons applied when the purchase amount exceeds a certain amount, the coupon application may be canceled when the purchase amount decreases due to a refund.',
            ],
            listType : false,
          }],
        },
        {
          text: 'Returns & shipping fee guide',
          cont: [{
            tit : 'Return deadline' ,
            txt : [
            'Items may be returned only within one week of receipt.',
            ],
            listType : false,
          },
          {
            tit : 'Shipping fee of returns' ,
            txt : [
            'We offer a free return service except for the cast if the purchased amount is reduced to less than ￦ 200,000 by returning some of ordered items. Maximum ￦ 20,000 (Shipping fee) will be deducted from total refundable amount.<br /><p class="mt-6">Charged Shipping fee for cancellation of order less than ￦ 200,000</p>'
            ],
            listType : false,
          },
          {
            tit : null,
            txt : [
            '<span>￦ 10,000 : </span> Mainland China, Hong Kong, Japan, Taiwan, Singapore, Vietnam, Malaysia, Indonesia, Brunei, Thailand, Philippines,<br />Bangladesh, India',
            '<span>￦ 20,000 : </span> Other countries',
            ],
            listType : false,
            listType_dash : true
        }],
        },
        {
          text: 'Return policy guide',
          cont: [{
            tit : 'Products cannot be returned' ,
            txt : [
            'if products have been used or washed.',
            'if the product tag (TAG), label, or product box is damaged or lost.<br />(However, if the packaging is damaged to check the contents of the product, it can be returned.)',
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
@import '@/assets/scss/en/en.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>