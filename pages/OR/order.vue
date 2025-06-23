<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap content-oeder-form"><!-- [퍼블수정]23.01.18 -->

      <div class="cmp-page-tit">
        <h2 class="tit">주문서 작성</h2>
      </div>

      <!-- 상단공지 -->
      <div v-if="topNotice" class="cmp-info top-notice">
        <p class="txt">배송지 긴급 공지 안내메시지 노출.배송지 긴급 공지 안내메시지 노출.배송지 긴급 공지 안내메시지 노출. 배송지 긴급 공지 안내메시지 노출.배송지 긴급 공지 안내메시지 노출.배송지</p>
        <v-btn icon small class="del" @click="topNotice = false">
          <i v-cmp-icon="{ size: 18, name: 'close', invert: 1 }">닫기</i>
        </v-btn>
      </div>
      <!-- //상단공지 -->

      <div class="order-content-box">
        <!-- 주문상품 리스트 -->
        <div class="cmp-sub-tit small mb-10"><!-- 220913 쇼핑백 : mb-10 클래스 추가 -->
          <h3 class="tit">주문상품 {{prdList.length}}건</h3>
        </div>
        <div class="product-row-table oeder-form"><!-- [퍼블수정]23.01.18 -->
          <table>
            <caption>주문 상품 리스트</caption>
            <colgroup>
              <col style="width:auto;"/>
              <col style="width:248px;"/>
            </colgroup>
            <thead>
              <tr>
                <th class="pw-0">상품정보</th>
                <th>상품금액</th>
              </tr>
            </thead>
            <tbody>
              <!-- 상품리스트 -->
              <template v-for="(item, index) in prdList">
                <tr :key="index" :class="{'bottom-none':item.notice!==null}">
                  <td class="pw-0">
                    <div class="product-row-unitInfo or-prd-type"><!-- 230105 상품이미지 : or-prd-type 클래스 추가 -->
                      <div class="product-image">
                        <v-img :src="item.image" :alt="item.product_name" />
                      </div>
                      <div class="product-info-cnt">
                        <div class="product-brand">{{item.brand_name}}</div>
                        <div class="product-name">{{item.product_name}}</div>
                        <div v-if="item.options" class="product-option">
                          <span v-for="(item2,index2) in item.options" :key="index2" class="option">{{item2}}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="product-row-unitPrice">
                      <div class="product-sellprice"><strong>{{item.sell_price | number}}</strong>원</div>
                      <div v-if="item.price || item.discount" class="product-price-cnt">
                        <del class="product-price-origin">{{item.price | number}}원</del>
                        <!-- eslint-disable -->
                        <span class="product-discount">{{item.discount}}<em>%</em></span>
                        <!-- eslint-disable -->
                      </div>
                    </div>
                  </td>
                </tr>
                <!-- 230103 증정품 : 추가 -->
                <tr v-if="item.gifts" class="gifts-tr">
                  <td colspan="2">
                    <ul v-if="item.gifts" class="product-row-giftsInfo">
                      <li v-for="(giftsItem, giftsIdx) in item.gifts" :key="giftsIdx">
                        <v-img :src="giftsItem.image_url"></v-img>
                        <div class="txt-cnt">
                          <p class="name">
                            <span class="tag">{{giftsItem.tag}}</span>
                            <span class="txt">{{giftsItem.name}}</span>
                          </p>
                          <p class="desc">{{giftsItem.desc}}</p>
                        </div>
                      </li>
                    </ul>
                  </td>
                </tr>
                <!-- // 230103 증정품 : 추가 -->
                <tr v-if="item.notice" class="notice-tr"><!-- [퍼블수정]23.01.18 -->
                  <td colspan="2" class="td-l pw-0">
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
        </div>
        <p class="cmp-font fnt-14 c-red mt-10">임직원 할인은 정상가 기준으로 적용 됩니다.</p>
        <!-- //주문상품 리스트 -->

        <!-- 쇼핑백포장, 선물포장 신청 -->
        <div class="or-chkbox-space">
          <v-layout row align-center justify-start>
            <!-- [240328]_쇼핑백 추가 문구 변경 -->
            <v-checkbox label="친환경 쇼핑백을 추가합니다. (주문 건당 1개)" class="cmp-form-checkbox"></v-checkbox>  
            <CommonTooltipBox :tooltip-list="tooltipList.shopping_bag">
              <template #before>
                <v-img src="/images/order/shopping-bag-img.png" alt="쇼핑백 이미지" width="60" class="mr-14 mt-4"/>
              </template>
            </CommonTooltipBox>
          </v-layout>
          <v-layout row align-center justify-start>
            <!-- 230712_선물포장 서비스 개선 -->
            <v-checkbox v-model="giftWrappingCheck" label="선물포장 신청하기 (THE STAR 전용)" class="cmp-form-checkbox"></v-checkbox>  
            <CommonTooltipBox :tooltip-list="tooltipList.gift">
              <template #before>
                <v-img src="/images/order/order-packing-img.png" alt="선물포장 이미지" width="64" class="mr-16 mt-4"/>
              </template>
            </CommonTooltipBox>
          </v-layout>
          <!-- 주문서 상품 3개 이상일 때 활성화-->
          <p v-if="true" class="v-input--info color-red pl-26 mt-9">선물포장 서비스는 2개 이하의 상품 주문 건에 한해 이용이 가능합니다.</p>

          <template v-if="giftWrappingCheck">
            <div class="mt-24">
              <p>선물포장에는 메세지 카드가 함께 동봉됩니다. 원하는 메시지 내용을 선택해주세요.</p>
            </div>
            <v-radio-group v-model="radioModel" column class="cmp-form-radioGroup mt-25 wrap-layout item-3" :class="{'text-field' : radioModel === 3}">
              <v-radio label="Happy Birthday" class="cmp-form-radio" value=""></v-radio>
              <v-radio label="Thank You" class="cmp-form-radio" value=""></v-radio>
              <v-radio label="Congratulations" class="cmp-form-radio" value=""></v-radio>
              <v-radio label="직접 입력하기" class="cmp-form-radio" value=""></v-radio>
              <v-radio label="선택 안함 (카드 미동봉)" class="cmp-form-radio" value=""></v-radio>
            </v-radio-group>
          </template>
          
          <template v-if="radioModel === 3">
            <v-textarea outlined :no-resize="true" counter="100" maxlength="100" height="130" class="cmp-form-textarea counting">
              <template #label>
                <ul class="cmp-list">
                  <li>선물과 함께 전하고 싶은 메시지를 입력해주세요.</li>
                  <!-- <li>선물포장에는 메시지 카드가 함께 동봉됩니다. (주문 1건당 카드 1개)</li>
                  <li>메시지 내용 미입력 시 메시지 카드 없이 상품만 포장됩니다.</li>
                  <li>선물포장 관련 자세한 내용은 '물음표 버튼'에서 확인해주세요.</li> -->
                </ul>
              </template>
            </v-textarea>
            <v-text-field outlined type="text" clearable class="cmp-form-input fnt-14 mt-8">
              <template #label>
                <p class="cmp-font fnt-14 c-grey">선물 받는 분의 성함/호칭 (ex. OO에게)</p>
              </template>
            </v-text-field>
            <v-text-field outlined type="text" clearable class="cmp-form-input fnt-14 mt-8">
              <template #label>
                <p class="cmp-font fnt-14 c-grey">선물 보내는 고객님의 성함/호칭 (ex. From.OOO 등)</p>
              </template>
            </v-text-field>
          </template>

          <!-- 230712_선물포장 서비스 개선 -->
          <!-- 꼭 확인해 주세요 -->
          <template v-if="giftWrappingCheck">
            <div class="mt-18 pl-0 pr-0">
              <v-expansion-panels accordion class="cmp-acc info-text-wrap acc-type2">
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <h2 class="cmp-font fnt-16">꼭 확인해 주세요</h2>
                    <template #actions>
                      <i v-cmp-icon="{ size: 12, name: 'down' }" class="arrow-toggle">열기/닫기</i>
                    </template>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <ul class="cmp-list list-dotType">
                      <li><strong>2개 이하의 상품 주문 건에 한해</strong> 서비스 제공이 가능합니다.</li>
                      <li>포장 박스에 담기지 않거나 <strong>부적합한 크기 혹은 손상 우려가 있는 상품은 일반 박스로 배송</strong>될 수 있습니다. (포장 불가 시, 개별 안내 예정)</li>
                      <li>주문 상품은 크기에 맞게 맞춤 포장되며, 2개의 상품을 함께 주문하실 경우 포장은 합포장 혹은 단품으로 부분 포장이 될 수 있습니다.</li>
                      <li>주문 1건당 메시지 카드는 1회 입력 가능하며, 미입력 시 메시지 카드는 발송되지 않습니다.</li>
                      <li>본 서비스는 당사의 사정에 따라 사전 고지 없이 변경 및 종료될 수 있습니다.</li>
                    </ul>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </template>
          <!-- // 꼭 확인해 주세요 -->
        </div>
        <!-- //쇼핑백포장, 선물포장 신청 -->

        <!-- 주문자 정보 -->
        <!--
        <div class="cmp-sub-tit line mt-60">
          <h3 class="tit">주문자 정보</h3>
        </div>
        <p class="cmp-font mt-24">홍길동 / 010-1234-5678</p>
        <div class="cmp-form-box width-449">
          <div class="cmp-form-emailBox mt-10">
            <div class="email-box">
              <v-text-field label="이메일 입력" outlined clearable class="cmp-form-input label-hide"></v-text-field>
              <div class="btw-txt">@</div>
              <CommonSelectBox id="emailSelect" title="도메인 선택" @submit="dominFieldSet">
                <template #optionList>
                  <option value="placeholder">선택해 주세요</option>
                  <option value="naver.com">naver.com</option>
                  <option value="gmail.com">gmail.com</option>
                  <option value="daum.net">daum.net</option>
                  <option value="kakao.com">kakao.com</option>
                  <option value="nate.com">nate.com</option>
                  <option value="outlook.com">outlook.com</option>
                  <option value="hotmail.com">hotmail.com</option>
                  <option value="direct">직접입력</option>
                </template>
              </CommonSelectBox>
            </div>
            <v-text-field v-if="domainDirectFieldShow" outlined label="이메일을 입력해 주세요." clearable class="cmp-form-input"></v-text-field>
          </div>
          <v-text-field outlined label="비밀번호 입력" clearable class="cmp-form-input mt-20"></v-text-field>
          <v-text-field outlined label="비밀번호 재입력" clearable class="cmp-form-input"></v-text-field>
        </div>
        -->
        <!-- //주문자 정보 -->

        <!-- 수령매장 -->
        <!--
        <div class="cmp-sub-tit line mt-60">
          <h3 class="tit">수령매장</h3>
        </div>
        <div class="contents-line-box">
          <v-layout row align-center justify-space-between>
            <p class="cmp-font bold">청담애비뉴</p>
            <button class="cmp-font fnt-14 button">변경 <i v-cmp-icon="{size:12,name:'next'}"></i></button>
          </v-layout>
          <p class="cmp-font mt-8">수령예정일 2021.12.17</p>
          <div class="cmp-info info-type2 mt-10">
            <p class="cmp-font fnt-13">매장수령교환권 SMS 수신 후 상품 수령이 가능합니다.</p>
          </div>
        </div>
        -->
        <!-- //수령매장 -->

        <!-- 배송지 -->
        <div class="cmp-sub-tit line mt-60">
          <h3 class="tit">배송정보</h3>
        </div>
        <div class="contents-line-box">
          <div class="cmp-sub-tit small">
            <h4 class="tit">배송지</h4>
            <button class="cmp-font fnt-14 button">
              <!--입력 --><!-- 입력 전 버튼명 -->
              변경 <!-- 입력 후 버튼명 -->
              <i v-cmp-icon="{size:12,name:'next'}"></i>
            </button>
          </div>
          <!-- 입력 전 -->
          <!--<p class="cmp-font c-gray">배송지 정보를 입력해 주세요.</p>-->
          <!-- //입력 전 -->
          <!-- 입력 후 -->
          <v-layout row align-center justify-start>
            <p class="cmp-label-line c-blue mr-10">기본배송지</p>
            <p class="cmp-font">홍길동 / 010-1234-5678</p>
          </v-layout>
          <p class="cmp-font mt-6">[06577] 서울 강남구 언주로 170길 28 (강남구, 스페이스데코빌딩) 3층 201호 </p>
          <!-- //입력 후 -->
        </div>
        <!-- //배송지 -->
        <!-- 배송 요청사항 -->
        <div class="contents-line-box">

          <!-- 구조 변경 -->
          <div class="mb-20">
            <div class="cmp-sub-tit small mb-4">
              <h4 class="tit">배송 요청사항</h4>
              <button class="cmp-font fnt-14 button">
                <!--입력 --><!-- 입력 전 버튼명 -->
                변경 <!-- 입력 후 버튼명 -->
                <i v-cmp-icon="{size:12,name:'next'}"></i>
              </button>
            </div>
            <p class="cmp-font c-red fnt-14">배송 메시지 및 일요일 배송 여부를 선택해주세요.</p>
          </div>

          <!-- 입력 전 -->
          <!-- //입력 전 -->
          <p class="cmp-font">
            부재 시 문 앞에 놓아주세요
            <br>공동현관 출입번호(****)
          </p>
          <p class="cmp-font c-gray">택배사를 선택해 주세요.</p><!-- 221104 주문서 : 택배사 선택 문구 추가 -->
          <!-- CJ대한통운 (월~일 배송) -->
          <p class="cmp-font">
            CJ대한통운으로 배송됩니다.<br />
            월~일 배송
          </p>
          <!-- 우체국 (월~토 배송) -->
          <p class="cmp-font">
            우체국으로 배송됩니다.<br />
            월~토 배송
          </p>
          <!-- CJ대한통운 (일 배송 제외) -->
          <p class="cmp-font">
            일요일 배송 제외 요청
          </p>
        </div>
        <!-- //배송 요청사항 -->

        <div class="cmp-sub-tit line mt-60">
          <h3 class="tit">할인정보</h3>
        </div>
        <!-- 쿠폰 및 혜택 -->
        <!-- [퍼블수정]23.07.18 더플러스 가입 베너 추가 -->
        <!-- [퍼블수정]23.08.22 -->
        <div class="contents-line-box">
          <div class="cmp-sub-tit small">
            <v-layout align-center>
              <h4 class="tit">쿠폰 및 혜택</h4>
              <!-- [퍼블수정]23.09.12 색상변경 -->
              <span class="cmp-font c-blue fnt-14 ml-8">사용가능 2개</span>
            </v-layout>
            <button class="cmp-font fnt-14">변경<i v-cmp-icon="{size:12,name:'next'}" class="ml-2"></i></button>
          </div>
          <!-- 입력 전 -->
          <!--<p class="cmp-font c-gray">적용 가능한 할인 혜택이 없습니다.</p>-->
          <!-- //입력 전 -->
          <!-- 입력 후 -->
          <div class="or-apply-discount">
            <v-checkbox v-model="checkboxModel1" class="cmp-form-checkbox">
              <template #label>
                <dl class="total">
                  <dt>최대 혜택 적용</dt>
                  <dd><strong>0</strong>원</dd>
                </dl>
                <div class="list">
                  <dl>
                    <dt>한섬VVIP 할인</dt>
                    <dd><strong>-205,000</strong>원</dd>
                  </dl>
                  <dl>
                    <dt>중복 쿠폰</dt>
                    <dd><strong>-147,000</strong>원</dd>
                  </dl>
                  <dl>
                    <dt>배송비 쿠폰</dt>
                    <dd><strong>-3,000</strong>원</dd>
                  </dl>
                </div>
              </template>
            </v-checkbox>
          </div>
          <!-- //입력 후 -->
          <!--  더플러스 배너 - 버튼 -->
          <div class="theplus-banner">
            <button @click="openonlymobile" class="banner-info">
              <i class="cmp-icon-etc cmp-icon-32 i-theplus-color"></i>
              <div class="banner-text">
                <p><b>더플러스⁺</b> 가입하고 <b>지금 바로 사용 가능한 쿠폰을</b> 받아보세요!</p>
              </div>
              <i class="cmp-icon cmp-icon-16 i-next">가입하러 가기</i>
            </button>
          </div>
          <!--  // 더플러스 배너 - 버튼 -->
        </div>
        <div class="contents-line-box">
          <div class="cmp-sub-tit small">
            <v-layout align-center>
              <h4 class="tit">쿠폰 및 혜택</h4>
              <!-- [퍼블수정]23.09.12 색상변경 -->
              <span class="cmp-font c-blue fnt-14 ml-8">사용가능 2개</span>
            </v-layout>
            <button class="cmp-font fnt-14">변경<i v-cmp-icon="{size:12,name:'next'}" class="ml-2"></i></button>
          </div>
          <!-- 입력 전 -->
          <!--<p class="cmp-font c-gray">적용 가능한 할인 혜택이 없습니다.</p>-->
          <!-- //입력 전 -->
          <!-- 입력 후 -->
          <div class="or-apply-discount">
            <v-checkbox v-model="checkboxModel2" class="cmp-form-checkbox">
              <template #label>
                <dl class="total">
                  <dt>최대 혜택 적용</dt>
                  <dd><strong>0</strong>원</dd>
                </dl>
                <div class="list">
                  <dl>
                    <dt>한섬VVIP 할인</dt>
                    <dd><strong>-205,000</strong>원</dd>
                  </dl>
                  <dl>
                    <dt>중복 쿠폰</dt>
                    <dd><strong>-147,000</strong>원</dd>
                  </dl>
                  <dl>
                    <dt>배송비 쿠폰</dt>
                    <dd><strong>-3,000</strong>원</dd>
                  </dl>
                </div>
              </template>
            </v-checkbox>
          </div>
          <!-- //입력 후 -->
          <!--  더플러스 배너 - 아코디언 -->
          <div class="theplus-banner">
            <v-expansion-panels accordion class="cmp-acc">
              <v-expansion-panel>
                <v-expansion-panel-header
                  >
                  <div class="banner-info">
                    <i class="cmp-icon-etc cmp-icon-32 i-theplus-color"></i>
                    <div class="banner-text">
                      <p><b>최대 1,234,000원</b>에 구매하세요!</p>
                    </div>
                  </div>
                  <template #actions>
                    <i
                      v-cmp-icon="{ size: 16, name: 'down' }"
                      class="arrow-toggle"
                      >열기/닫기</i
                    >
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div class="acc-banner-info">
                    <ul class="cmp-list list-dotType">
                      <li>
                        <p><span>[10%] 선호 브랜드 할인권</span> <span><b>-12,000</b>원</span></p>
                      </li>
                      <li>
                        <p><span>[5만원] 가입 감사 바우처</span> <span><b>-50,000</b>원</span></p>
                      </li>
                    </ul>
                    <button @click="openonlymobile" class="join-btn">
                      <span><b>THE PLUS⁺</b> 가입하기</span>
                      <i class="cmp-icon-etc cmp-icon-18 i-theplus-join"></i>
                    </button>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
          </v-expansion-panels>
          </div>
          <!--  // 더플러스 배너 - 아코디언 -->
        </div>

        <div class="contents-line-box">
          <div class="cmp-sub-tit small">
            <v-layout align-center>
              <h4 class="tit">쿠폰 및 혜택</h4>
              <!-- [퍼블수정]23.09.12 색상변경 -->
              <span class="cmp-font c-blue fnt-14 ml-8">사용가능 1개</span>
            </v-layout>
            <button class="cmp-font fnt-14">변경<i v-cmp-icon="{size:12,name:'next'}" class="ml-2"></i></button>
          </div>
          <!-- 입력 전 -->
          <!--<p class="cmp-font c-gray">적용 가능한 할인 혜택이 없습니다.</p>-->
          <!-- //입력 전 -->
          <!-- 입력 후 -->
          <div class="or-apply-discount">
            <!-- [퍼블수정]23.08.22 최대 혜택 적용 아닌경우 체크박수 삭제 -->
            <dl class="total">
              <dt>혜택 적용</dt>
              <dd><strong>0</strong>원</dd>
            </dl>
            <div class="list">
              <dl>
                <dt>한섬VVIP 할인</dt>
                <dd><strong>-205,000</strong>원</dd>
              </dl>
              <dl>
                <dt>중복 쿠폰</dt>
                <dd><strong>-147,000</strong>원</dd>
              </dl>
              <dl>
                <dt>배송비 쿠폰</dt>
                <dd><strong>-3,000</strong>원</dd>
              </dl>
            </div>
            <!-- //[퍼블수정]23.08.22 최대 혜택 적용 아닌경우 체크박수 삭제 -->
          </div>
          <!-- //입력 후 -->
        </div>
        <!-- // [퍼블수정]23.08.22-->
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
        <!-- //[퍼블수정]23.07.18 더플러스 가입 베너 추가 -->
        <!-- //쿠폰 및 혜택 -->
        <!-- 포인트 사용 -->
        <div class="contents-line-box">
          <div class="cmp-sub-tit small justify-start">
            <h4 class="tit">포인트 사용</h4>
            <CommonTooltipBox :tooltip-list="tooltipList.point_use" />
          </div>
          <!-- 한섬마일리지 -->
          <div class="point-input-box" :class="{'disabled' : pointDisabled.mileage}">
            <p class="tit-cnt">
              <span class="tit">한섬마일리지</span>
              <span class="total">20,000 M</span>
            </p>
            <div class="input-cnt">
              <v-text-field 
                type="text" value="0" outlined clearable :disabled="pointDisabled.mileage"
                label="한선마일리지 입력" class="cmp-form-input label-hide">
              </v-text-field>
              <div class="txt">M</div>
            </div>
            <div class="btn-cnt">
              <v-btn text :disabled="pointDisabled.mileage" class="cmp-font fnt-13 button"><span class="line">적용하기</span></v-btn><!-- 220913 포인트사용 : 문구변경 -->
            </div>
            <!-- 220913 포인트사용 : 추가 -->
            <div class="chk-cnt">
              <v-checkbox class="cmp-form-checkbox">
                <template #label><div class="cmp-font fnt-14">모두사용</div></template>
              </v-checkbox>
            </div>
            <!-- //220913 포인트사용 : 추가 -->
          </div>
          <!-- //한섬마일리지 -->
          <!-- H.point -->
          <div class="point-input-box" :class="{'disabled':pointDisabled.h_point}">
            <p class="tit-cnt">
              <span class="tit">H.Point</span>
              <span class="total">1,234 P</span>
            </p>
            <div class="input-cnt">
              <v-text-field 
                type="text" value="0" outlined clearable :disabled="pointDisabled.h_point"
                label="H.Point 입력" class="cmp-form-input label-hide">
              </v-text-field>
              <div class="txt">P</div>
            </div>
            <div class="btn-cnt">
              <v-btn text :disabled="pointDisabled.h_point" class="cmp-font fnt-13 button"><span class="line">적용하기</span></v-btn><!-- 220913 포인트사용 : 문구변경 -->
            </div>
            <!-- 220913 포인트사용 : 추가 -->
            <div class="chk-cnt">
              <v-checkbox class="cmp-form-checkbox">
                <template #label><div class="cmp-font fnt-14">모두사용</div></template>
              </v-checkbox>
            </div>
            <!-- //220913 포인트사용 : 추가 -->
          </div>
          <!-- //H.point -->
          <!-- e-money -->
          <div class="point-input-box" :class="{'disabled':pointDisabled.e_money}">
            <p class="tit-cnt">
              <span class="tit">e-money</span>
              <span class="total">1,120,000 P</span>
            </p>
            <div class="input-cnt">
              <v-text-field 
                type="text" value="0" outlined clearable :disabled="pointDisabled.e_money"
                label="e-money 입력" class="cmp-form-input label-hide">
              </v-text-field>
              <div class="txt">P</div>
            </div>
            <div class="btn-cnt">
              <v-btn text :disabled="pointDisabled.e_money" class="cmp-font fnt-13 button"><span class="line">적용하기</span></v-btn><!-- 220913 포인트사용 : 문구변경 -->
            </div>
            <!-- 220913 포인트사용 : 추가 -->
            <div class="chk-cnt">
              <v-checkbox class="cmp-form-checkbox">
                <template #label><div class="cmp-font fnt-14">모두사용</div></template>
              </v-checkbox>
            </div>
            <!-- //220913 포인트사용 : 추가 -->
          </div>
          <!-- //e-money -->
        </div>
        <!-- //포인트 사용 -->

        <div class="cmp-sub-tit line mt-60">
          <h3 class="tit">결제수단</h3>
        </div>
        <!-- 결제수단 선택 -->
        <div class="contents-line-box">
          <div class="cmp-sub-tit small">
            <h4 class="tit">H.Point Pay 결제</h4>
          </div>
          <!-- H.Point Pay 결제 -->
          <div class="cmp-swiper-box w-auto btn-type2 payment-select-swiper">
            <Swiper 
              :options="{
                slidesPerView: 3,
                slidesPerGroup : 3,
                spaceBetween: 4,
                navigation: {
                  prevEl: '.hpay-prev-btn',
                  nextEl: '.hpay-next-btn',
                },
              }"
              :class="{'swiper-no-swiping':hPointPayCard.length < 3}"
            >
              <SwiperSlide v-for="(item,index) in hPointPayCard" :key="index">
                <div class="card-box">
                  <input v-model="paymentSelected" :id="item.id" type="radio" :value="item.value" name="paymentSelect" class="card-input">
                  <label :for="item.id" class="card-label">{{item.card_name}} 선택</label>
                  <div class="card-cnt">
                    <div class="cnt0">
                      <div class="logo-cnt">
                        <img :src="item.logo" :alt="item.value" class="logo">
                        <span class="name">{{item.name}}</span>
                      </div>
                      <p class="cnt-txt">{{item.number}}</p>
                    </div>
                    <div class="cnt1">
                      <p class="cnt-txt bold">H.Point Pay</p>
                      <CommonSelectBox title="할부선택">
                        <template #optionList>
                          <option value="">일시불</option>
                          <option value="">3개월</option>
                        </template>
                      </CommonSelectBox>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="card-box">
                  <button class="card-add">
                    <div class="cnt">
                      <span class="bar"></span>
                      <span class="txt"><strong>H.Point Pay</strong> 추가하기</span>
                    </div>
                  </button>
                </div>
              </SwiperSlide>
            </Swiper>
            <div class="swiper-button-prev hpay-prev-btn swiper-no-swiping"><i v-cmp-icon="{size:24, name:'prev'}">이전</i></div>
            <div class="swiper-button-next hpay-next-btn swiper-no-swiping"><i v-cmp-icon="{size:24, name:'next'}">다음</i></div>
          </div>
          <!-- //H.Point Pay 결제 -->

          <div class="cmp-sub-tit small mt-40">
            <h4 class="tit">일반결제</h4>
          </div>
          <!-- 일반 결제 -->
          <div class="payment-select-credit">
            <input v-model="paymentSelected" id="creditCard" type="radio" value="creditCard" name="paymentSelect" class="card-input">
            <label for="creditCard" class="card-label">신용카드 선택</label>
            <div class="card-box">
              <p class="card-tit">신용카드</p>
              <div class="card-cnt">
                <CommonSelectBox title="카드사선택">
                  <template #optionList>
                    <option value="placeholder">카드사 선택</option>
                    <option value="">현대카드</option>
                  </template>
                </CommonSelectBox>
                <!-- [퍼블수정]23.03.10 할부선택 삭제 -->
                <!-- <CommonSelectBox title="할부선택">
                  <template #optionList>
                    <option value="">일시불</option>
                    <option value="">3개월</option>
                  </template>
                </CommonSelectBox> -->
              </div>
            </div>
          </div>
          <div class="payment-select-etc">
            <div v-for="(item,index) in domesticPayment" :key="index" class="card-box">
              <input 
                v-model="paymentSelected" :id="item.id" type="radio" :value="item.value" 
                :disabled="item.id==='hyundaicardRed'&& item.disabled"
                name="paymentSelect" class="card-input"
              >
              <label :for="item.id" class="card-label">{{item.name}} 선택</label>
              <div class="card-cnt">
                <div class="cnt" :class="{'disabled':item.id==='hyundaicardRed'&& item.disabled}">
                  <img :src="item.image" :alt="item.name" class="icon">
                  <p class="cnt-tit">{{item.name}}</p>
                </div>
                <p v-if="item.id==='hyundaicardRed'&& item.disabled" class="cnt-txt">*30만원 미만 주문시 결제불가</p>
              </div>
            </div>
          </div>
          <!-- //일반 결제 -->
          <!-- 해외 -->
          <!-- 220819 yjh 수정 : <p class="cnt-tit">CREDIT CARD</p> > <p class="card-tit">CREDIT CARD</p> 클래스 변경 -->
          <!--
          <div class="payment-select-credit">
            <input v-model="paymentSelected" id="creditCard" type="radio" value="creditCard" name="paymentSelect" class="card-input">
            <label for="creditCard" class="card-label">CREDIT CARD 선택</label>
            <div class="card-box">
              <p class="card-tit">CREDIT CARD</p>
              <div class="card-cnt">
                <CommonSelectBox title="카드사선택">
                  <template #optionList>
                    <option value="placeholder">카드사 선택</option>
                    <option value="">현대카드</option>
                  </template>
                </CommonSelectBox>
                <CommonSelectBox title="할부선택">
                  <template #optionList>
                    <option value="">일시불</option>
                    <option value="">3개월</option>
                  </template>
                </CommonSelectBox>
              </div>
            </div>
          </div>
          <div class="payment-select-etc">
            <div v-for="(item,index) in overseasPayment" :key="index" class="card-box">
              <input 
                v-model="paymentSelected" :id="item.id" type="radio" :value="item.value" 
                :disabled="item.id==='hyundaicardRed'&& item.disabled"
                name="paymentSelect" class="card-input"
              >
              <label :for="item.id" class="card-label">{{item.name}} 선택</label>
              <div class="card-cnt">
                <div class="cnt" :class="{'disabled':item.id==='hyundaicardRed'&& item.disabled}">
                  <img :src="item.image" :alt="item.name" class="icon">
                  <p class="cnt-tit">{{item.name}}</p>
                </div>
              </div>
            </div>
          </div> 
          -->
          <!-- //해외 -->

          <p class="cmp-font fnt-14 mt-24">BO에서 입력된 결제수단 공지(요약) 글 3줄 정도 노출하고 말줄임 하지 않도록 BO에서 간략히 입력하도록 글자수 제한 요청 BO에서 간략히 입력하도록 글자수 제한 요청  BO에서 간략히 입력하도록 글자수 제한 요청</p>
          <v-checkbox label="지금 선택한 결제방법을 다음에도 사용합니다." class="cmp-form-checkbox mt-44"></v-checkbox>  
        </div>
        <!-- //결제수단 선택 -->
        <!-- 팝업버튼&배너 -->
        <div class="contents-line-box">
          <button class="cmp-font button">카드 행사 혜택(무이자,청구,즉시할인) 안내 <i class="cmp-icon i-next cmp-icon-16"></i></button>
          <!-- 배너 -->
          <div class="mt-34">
            <Swiper 
              :options="{
                pagination: {el: '.swiper-pagination',clickable: true}
              }"
              class="or-banner-box"
              :class="{'swiper-no-swiping':eventBanner.length < 2}"
            ><!-- 230113 주문서배너 : or-banner-box 클래스 추가  -->
              <SwiperSlide v-for="(item,index) in eventBanner" :key="index">
                <nuxt-link :to="item.link">
                  <img :src="item.image" :alt="item.desc">
                </nuxt-link>
              </SwiperSlide>
              <div v-if="eventBanner.length > 1" slot="pagination" class="cmp-swiper-paginationBullet swiper-pagination"></div>
            </Swiper>
          </div>
          <!-- //배너 -->
        </div>
        <!-- //팝업버튼&배너 -->
        <!-- 오에라 신청취소 -->
        <!-- [퍼블수정]23.02.13 오에라 마일리지 삭제 -->
        <!-- //오에라 신청취소 -->

        <!-- 개인정보 제3자 제공 동의 (220920 개인정보 : 추가) -->
        <div class="contents-line-box last">
          <div class="cmp-sub-tit small">
            <h4 class="tit">개인정보 제3자 제공 동의</h4>
            <button class="cmp-font fnt-13"><span class="line">안내보기</span></button>
          </div>
          <v-checkbox v-model="personalInfoAgreeCheck" label="OUR LEGACY의 개인정보 제3자 제공에 동의" class="cmp-form-checkbox"></v-checkbox><!-- 221024 주문서 : v-model 추가 -->
          <p v-if="personalInfoAgreeCheck" class="cmp-checkbox-desc">OUR LEGACY 정보 공유 및 마케팅 활용을 위한 개인정보 제공에 동의합니다.</p><!-- 221024 주문서 : 문구 추가 -->
        </div>
        <!-- 개인정보 제3자 제공 동의 -->

        <!-- 금액/주문 -->
        <div class="order-price-box">
          <div class="price-sticky-box">
            <div class="price-info">
              <p class="tit">상품금액</p>
              <p class="price"><strong>910,000</strong>원</p>
            </div>
            <div class="price-info">
              <p class="tit">할인금액</p>
              <p class="price"><strong>-10,000</strong>원</p>
            </div>
            <div class="price-sub-info">
              <p class="tit">쿠폰할인</p>
              <p class="price"><strong>-10,000</strong>원</p>
            </div>
            <div class="price-info">
              <p class="tit">포인트 사용</p>
              <p class="price"><strong>-18,000</strong>원</p>
            </div>
            <div class="price-sub-info">
              <p class="tit">한섬마일리지</p>
              <p class="price"><strong>-3,000</strong>원</p>
            </div>
            <div class="price-sub-info">
              <p class="tit">H.Point </p>
              <p class="price"><strong>-5,000</strong>원</p>
            </div>
            <div class="price-sub-info">
              <p class="tit">e-money</p>
              <p class="price"><strong>-10,000</strong>원</p>
            </div>
            <div class="price-info">
              <div class="tit-box">
                <p class="tit">배송비</p>
                <CommonTooltipBox :tooltip-list="tooltipList.coupon" right /><!-- 배송비 유료 & 무료배송비 툴팁 : 221024 주문서 : 추가 -->
                <!--<CommonTooltipBox :tooltip-list="tooltipList.delivery" right />--><!-- 택배 툴팁 -->
                <!--<CommonTooltipBox :tooltip-list="tooltipList.quick_delivery" right />--><!-- 퀵배송 툴팁 -->
              </div>
              <p class="price"><strong>0</strong>원</p>
            </div>
            <!--221024 주문서 : 무료배송 쿠폰 사용된 case-->
            <div class="price-sub-info">
              <p class="tit">무료 배송 쿠폰 사용</p>
              <p class="price"><strong>-3,000</strong>원</p>
            </div>
            <!--// 221024 주문서 : 무료배송 쿠폰 사용된 case-->
            <div class="price-total-info">
              <p class="tit">최종 결제 금액</p>
              <p class="price"><strong>882,000</strong>원</p>
            </div>
            <div class="price-info">
              <div class="tit-box">
                <p class="tit">적립예정 포인트</p>
                <CommonTooltipBox :tooltip-list="tooltipList.point_save" right />
              </div>
            </div>
            <div class="price-sub-info">
              <p class="tit">한섬마일리지</p>
              <p class="price"><strong>8,000</strong>M</p>
            </div>
            <div class="price-sub-info">
              <p class="tit">H.Point</p>
              <p class="price"><strong>2,000</strong>P</p>
            </div>
            <v-checkbox v-model="buyAgreeCheck" class="cmp-form-checkbox lines"><!-- 221024 주문서 : v-model 추가 -->
              <template #label><div>주문 상품정보 확인 및 구매 진행 동의<br>(전자상거래법 제 8조 2항)<i class="required"></i></div></template><!-- 220920 개인정보 : label 마크업 수정 -->
            </v-checkbox>
            <!-- [241126] 개인정보수집/이용동의개선 --> 
            <p class="cmp-font fnt-14 mt-30">고객(정보주체)의 개인정보보호 및 권리는<br />「개인정보보호법」 및관계 법령에 따라 안전하게 관리하고 있습니다.<br />
              자세한 사항은 <button class="cmp-font fnt-14 button"><span class="line">더한섬닷컴 개인정보처리방침</span></button>에서 확인할 수 있습니다.
            </p>

            <p v-if="freeShippingInfo" class="delivery-msg">쿠폰 및 혜택에서 ‘무료배송쿠폰’을<br>사용하실 수 있어요</p>
            <div class="price-btn">
              <v-btn large block color="primary" :disabled="true"><strong>882,000</strong>원 결제하기</v-btn>
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
      // [퍼블수정]23.08.17 - 체크박스 해제 디폴트
      checkboxModel1: false,
      checkboxModel2: false,
      checkboxModel3: false,
      // [퍼블수정]23.07.18 더플러스 가입 베너 추가
      onlymobile : false,
      // [퍼블수정]23.04.13
      radioModel: 4, // 선물포장 신청 radio value
      topNotice : true, // 상단공지
      giftWrappingCheck : false, // 선물포장 신청
      tooltipList: { // 툴팁 상세 정보
        shopping_bag: [
          // 쇼핑백 포장 230111 툴팁문구 : 수정
          '브랜드 쇼핑백 또는 더한섬닷컴<br />전용 쇼핑백 중 1개로 랜덤 발송되며,<br />디자인을 선택하실 수 없습니다.',
          '리퀴드 퍼퓸바 상품은 쇼핑백<br />서비스 이용이 불가합니다.',
        ],
        gift: [ // 선물포장 230712_선물포장 서비스 개선
          'THE STAR 등급 고객님들께 포장 서비스를 제공합니다.',
          // '2개 이하의 상품 주문 건에 한해 프리미엄 포장이 가능하며, <b>3개 이상의 상품을 함께 주문하신 경우에는 프리미엄 포장에서 제외</b> 됩니다. (일반 박스 배송)',
          // '주문 상품은 크기에 맞게 맞춤 포장되며, 2개의 상품을 함께 주문하실 경우 포장은 합포장 혹은 단품으로 부분 포장이 될 수 있습니다.',
          // '포장 박스에 담기지 않거나 부적합한 크기의 제품은 일반 박스로 배송될 수 있습니다. (포장 불가 시, 개별 안내 예정)',
          // '함께 주문해도 차후 별도 발송되는 배송 건 (ex. 예약/배송 지연 상품 등)은 프리미엄 포장에서 제외됩니다. (최초 발송 건만 프리미엄 포장 제공)',
          // '본 서비스는 당사의 사정에 따라 사전 고지 없이 변경 및 종료될 수도 있습니다.',
        ],
        point_use: [ // 포인트사용
          '보유중인 한섬마일리지/H.Point/e-money 금액을 확인하시고 사용하실 금액을 입력해 주세요.',
          'H.Point 10만점 이상 사용 시 비밀번호 입력이 필요합니다.',
        ],
        delivery: [ // 배송비(택배) 230111 툴팁문구 : 수정
          '쿠폰/바우처 할인금액 및 한섬마일리지/H.Point<br />사용을 제외한 <strong>실 결제금액 기준 3만원 미만<br />결제 시 3,000원 배송비가 부과</strong>됩니다.<br />(3만원 이상 구매 시 무료배송)',
          '도서산간 지역은 배송비가 추가 될 수 있습니다.',
          '한섬마일리지, H.Point, e-money로 배송비<br />결제가 불가합니다.',
        ],
        quick_delivery: [ // 배송비(퀵배송)
          '퀵 배송비(5,000원)는 주문상품의 금액과 관계없이 별도로 청구되는 배송비입니다.',
          '퀵배송 서비스는 한섬마일리지, H.Point, e-money로 배송비 결제가 불가합니다.',
        ],
        point_save: [ // 적립예정포인트 230111 툴팁문구 : 수정
          '배송 완료 후 10일 후 적립됩니다.',
          '기존 마이너스 포인트를 보유하고 있는 고객은<br />포인트가 차감되어 적립됩니다.<br />적립 예정 포인트가 상이할 수 있습니다.',
          '통합멤버십으로 가입하시면, H.point 적립 및<br />사용이 가능합니다.',
        ],
        coupon : [ // 221024 주문서 : 추가
          "사용 가능한 무료배송비 쿠폰이 있습니다.",
          "쿠폰 및 혜택에서 선택해주세요."
        ]
      },
      prdList: [
        // 230103 증정품 : gifts 항목 추가
        {
          brand_name: 'MINE',
          product_name: '컬러 블록 니트 가디건',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/001.jpg',
          options: ['BLACK', '90', '1개'],
          sell_price: '355000',
          discount: '20',
          price: '366000',
          notice : ['인기상품으로 전국 매장에서 수급 후 배송 예정<br>불량 등의 이유로 취소될 수 있음<br>(평일 기준 5일 이상 소요)'],
          gifts : [
            {
              name : '실크 스카프',
              desc : '군더더기 없이 심플한 니트 탑에 착용시 마치 가디건을 두른 듯한 느낌을 낼 수 있는 머플러',
              tag : '증정품',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-6.png',
            },
            {
              name : '오에라 퓨리파잉 클렌징 폼',
              desc : '모든피부타입에게 가능',
              tag : '증정품',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-6.png',
            },
          ]
        },
        {
          brand_name: 'OREA',
          product_name: '퓨리파잉 클렌징 폼',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/002.jpg',
          options: ['Charcoal gray', '90', '1개'],
          sell_price: '355000',
          discount: null,
          price: null,
          notice : ['오에라 상품은 전용 박스로 별도배송'],
        },
        {
          brand_name: 'FOURM MEN’S LOUNGE',
          product_name: '[BEARBRICK] 사이키델릭 페이즐리',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/003.jpg',
          options: ['MULTI', 'FR', '1개'],
          sell_price: '355000',
          discount: '20',
          price: '366000',
          notice : ['예약상품은 0년 0월 0일부터 순차 발송'],
          gifts : [
            {
              name : '엘로이즈 실크 스카프',
              desc : '군더더기 없이 심플한 니트 탑',
              tag : '증정품',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-6.png',
            },
          ]
        },
        {
          brand_name: 'FOURM MEN’S LOUNGE',
          product_name: '[BEARBRICK] 사이키델릭 페이즐리',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/003.jpg',
          options: ['MULTI', 'FR', '1개'],
          sell_price: '355000',
          discount: '20',
          price: '366000',
          notice : null,
          gifts : [
            {
              name : '엘로이즈 실크 스카프',
              desc : '군더더기 없이 심플한 니트 탑',
              tag : '증정품',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-6.png',
            },
          ]
        },
        {
          brand_name: 'OREA',
          product_name: '퓨리파잉 클렌징 폼',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/002.jpg',
          options: ['Charcoal gray', '90', '1개'],
          sell_price: '355000',
          discount: null,
          price: null,
          notice : null,
        },
      ],
      pointDisabled : { // 포인트 적립 disabled
        mileage : false,
        h_point : false,
        e_money : false,
      },
      domainDirectFieldShow: false, // [비회원]이메일 직접입력필드
      eventBanner : [ // 이벤트 배너
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/order-banner.png',
          desc : '현대카드 쇼핑바우처 제휴 30만원 이상 결제 시 이용가능',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/payment-evnet-banner.png',
          desc : '현대카드 쇼핑바우처 제휴 30만원 이상 결제 시 이용가능',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/order-banner.png',
          desc : '현대카드 쇼핑바우처 제휴 30만원 이상 결제 시 이용가능',
          link : '#n',
        },
      ],
      /*
        logo 이미지 경로
        비씨 : /images/payment/logo-bc.png
        신한 : /images/payment/logo-shinhan.png
        국민 : /images/payment/logo-kb.png
        농협 : /images/payment/logo-nh.png
        롯데 : /images/payment/logo-lotte.png
        하나 : /images/payment/logo-hana.png
        현대카드 : /images/payment/logo-hyundaicard.png
        삼성카드 : /images/payment/logo-samsungcard.png
        마스터 : /images/payment/logo-master.png
        아멕스 : /images/payment/logo-amex.png
        유니온페이 : /images/payment/logo-unionpay.png
        전북 : /images/payment/logo-jb.png
        산업 : /images/payment/logo-kdb.png
        제주 : /images/payment/logo-jeju.png
        케이뱅크 : /images/payment/logo-kbank.png
        우체국 : /images/payment/logo-post.png
        외환 : /images/payment/logo-keb.png
        비자 : /images/payment/logo-visa.png
        글로벌JCB : /images/payment/logo-jcb.png
        다이너클럽 : /images/payment/logo-diners.png
        광주 : /images/payment/logo-kj.png
        우리 : /images/payment/logo-woori.png
        씨티 : /images/payment/logo-citi.png
        새마을금고 : /images/payment/logo-mg.png
        저축은행 : /images/payment/logo-sb.png
        토스 : /images/payment/logo-toss.png
        기업 : /images/payment/logo-ibk.png
        제일은행 : /images/payment/logo-sc.png
        대구은행 : /images/payment/logo-dgb.png
        부산은행 : /images/payment/logo-bnk.png
        경남은행 : /images/payment/logo-knbank.png
        수협 : /images/payment/logo-sh.png
        신협 : /images/payment/logo-cu.png
        카카오뱅크 : /images/payment/logo-kakaobank.png
        산림조합 : /images/payment/logo-sj.png
      */
      hPointPayCard : [ // H Point Pay 결제
        {
          id : 'bc-card',
          value : 'bc-card',
          name:'비씨카드',
          logo : '/images/payment/logo-bc.png',
          number : '4921 **** **** 2138',
        },
        {
          id : 'shinhan-card',
          value : 'shinhan-card',
          name:'신한카드',
          logo : '/images/payment/logo-shinhan.png',
          number : '4921 **** **** 2138',
        },
        {
          id : 'shinhan-bank',
          value : 'shinhan-bank',
          name:'신한은행',
          logo : '/images/payment/logo-shinhan.png',
          number : '12345***********',
        },
      ],
      domesticPayment:[ // 국내 결제
        {
          id : 'kakaopay',
          value : 'kakaopay',
          name : '카카오페이',
          image : '/images/payment/ico-kakaopay.png',
        },
        {
          id : 'smilepay',
          value : 'smilepay',
          name : '스마일페이',
          image : '/images/payment/ico-smilepay.png',
        },
        {
          id : 'payco',
          value : 'payco',
          name : '페이코',
          image : '/images/payment/ico-payco.png',
        },
        {
          id : 'hyundaicardRed',
          value : 'hyundaicardRed',
          name : '현대카드 바우처',
          image : '/images/payment/ico-hyundaicard.png',
          disabled : false,
        },
        {
          id : 'accountTransfer',
          value : 'accountTransfer',
          name : '실시간 계좌이체',
          image : '/images/payment/ico-account-transfer.png',
        },
      ],
      overseasPayment:[ // 해외 결제
        {
          id : 'alipay',
          value : 'alipay',
          name : 'ALIPAY',
          image : '/images/payment/ico-alipay.png',
        },
        {
          id : 'paypal',
          value : 'paypal',
          name : 'PAYPAL',
          image : '/images/payment/ico-paypal.png',
        },
        {
          id : 'wechatpay',
          value : 'wechatpay',
          name : 'WECHATPAY',
          image : '/images/payment/ico-wechatpay.png',
        },
      ],
      paymentSelected : 'bc-card', //
      personalInfoAgreeCheck : false, // 221024 주문서 : 추가
      buyAgreeCheck : false, // 221024 주문서 : 추가
      oeraAgreeCheck : false, // 오에라 신청
      oeraCancelAgreeCheck : false, // 오에라 취소
      freeShippingInfo : false, // 221024 주문서 : 추가
    }
  },
  watch: { // 221024 주문서 : buyAgreeCheck, oeraAgreeCheck, personalInfoAgreeCheck 추가
    // [퍼블수정]23.04.13
    giftWrappingCheck () {
      if(!this.giftWrappingCheck){
        this.radioModel = 4
      }
    },
    buyAgreeCheck(){
      this.freeShippingInfoSet()
    },
    oeraAgreeCheck(){
      this.freeShippingInfoSet()
    },
    personalInfoAgreeCheck(){
      this.freeShippingInfoSet()
    }
  },
  created() {
    
  },
  methods: {
    dominFieldSet(val) { // 이메일 직접 입력필드
      if (val === 'direct') this.domainDirectFieldShow = true
      else this.domainDirectFieldShow = false
    },
    freeShippingInfoSet(){ // 221024 주문서 : 추가
      const me = this
      if(me.personalInfoAgreeCheck || me.buyAgreeCheck || me.oeraAgreeCheck) me.freeShippingInfo = true
      else me.freeShippingInfo = false
    },
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
<style lang="scss" scoped>
@import '@/assets/scss/pages/order.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>
