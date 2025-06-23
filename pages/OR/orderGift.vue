<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap content-oeder-form"><!-- [퍼블수정]23.01.18 -->

      <div class="cmp-page-tit">
        <h2 class="tit">주문서 작성</h2>
      </div>
      <div class="order-content-box">
        <!-- 카드 메시지 -->
        <div class="cmp-sub-tit">
          <h3 class="tit">카드 &amp; 메세지</h3>
        </div>
        <!-- 230206 선물하기 : 마크업 전체 변경 -->
        <div class="or-card-msg">
          <div class="card-msg-cnt">
            <div class="card-cnt">
              <div v-show="cardSelectIdx==0">
                <Lottie :options="cardList[0].option" class="cmp-lottie" @animCreated="cardBaseAnim"/>
              </div>
              <div v-show="cardSelectIdx==1">
                <Lottie :options="cardList[1].option" class="cmp-lottie" @animCreated="cardCongratsAnim"/>
              </div>
              <div v-show="cardSelectIdx==2">
                <Lottie :options="cardList[2].option" class="cmp-lottie" @animCreated="cardThanksAnim"/>
              </div>
              <div v-show="cardSelectIdx==3">
                <Lottie :options="cardList[3].option" class="cmp-lottie" @animCreated="cardLoveAnim"/>
              </div>
              <div v-show="cardSelectIdx==4">
                <Lottie :options="cardList[4].option" class="cmp-lottie" @animCreated="cardChristmasAnim"/>
              </div>
            </div>
            <div class="msg-cnt">
              <v-textarea 
                v-model="userText" 
                outlined 
                label="마음을 담은 메세지를 입력해보세요" 
                :no-resize="true" 
                counter="200" maxlength="200" height="259" 
                class="cmp-form-textarea counting" 
              />
            </div>
          </div>
          <div class="card-select-cnt" :class="{'no-swiping' : cardList.length <= 10}">
            <Swiper
              :options="{
                slidesPerView: 10,
                slidesPerGroup : 10,
                spaceBetween: 6,
                threshold : 10,
                navigation: {
                  prevEl: '.card-prev-btn',
                  nextEl: '.card-next-btn',
                },
              }"
              :class="{'swiper-no-swiping': cardList.length <= 10}"
            >
              <SwiperSlide v-for="(item,index) in cardList" :key="index">
                <div class="card-list">
                  <input :id="'cardSelect'+index" v-model="cardSelectIdx" :value="index" type="radio" name="cardSelect"/>
                  <label :for="'cardSelect'+index">
                    <span class="img">
                      <v-img :src="item.image" :alt="item.desc" :class="{line:item.line}"/>
                    </span>
                    <span class="tit">{{item.title}}</span>
                  </label>
                </div>
              </SwiperSlide>
            </Swiper>
            <div class="swiper-button-prev card-prev-btn">이전</div>
            <div class="swiper-button-next card-next-btn">다음</div>
          </div>
        </div>
        <!-- // 230206 선물하기 : 마크업 전체 변경 -->
        <!-- //카드 메시지 -->
        <!-- 카드 받는사람 -->
        <h4 class="cmp-font fnt-20 mt-28">받는 사람</h4><!-- 230206 선물하기 : mt-24 > mt-28 클래스 변경 -->
        <v-checkbox label="나에게 선물하기" class="cmp-form-checkbox mt-24" />
        <div class="cmp-form-colBox mt-12">
          <v-text-field outlined type="text" label="이름" clearable class="cmp-form-input width-214"></v-text-field>
          <CommonSelectBox id="phoneSelect" title="앞자리 번호 선택">
            <template #optionList>
              <option value="010">010</option>
              <option value="011">011</option>
              <option value="017">017</option>
              <option value="018">018</option>
              <option value="019">019</option>
            </template>
          </CommonSelectBox>
          <v-text-field type="text" outlined label="가운데 번호 입력" clearable class="cmp-form-input label-hide"></v-text-field>
          <v-text-field type="text" outlined label="뒷자리 번호 입력" clearable class="cmp-form-input label-hide"></v-text-field>
        </div>
        <!-- //카드 받는사람 -->
        
        <!-- 주문상품 리스트 -->
        <div class="cmp-sub-tit small mt-60">
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
                <th>상품정보</th>
                <th>상품금액</th>
              </tr>
            </thead>
            <tbody>
              <!-- 상품리스트 -->
              <template v-for="(item, index) in prdList">
                <tr :key="index" :class="{'bottom-none':item.notice!==null}"><!-- [개발확인]23.01.11 문구 없는 경우 bottom-none 노출 안함 -->
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
        <!-- //주문상품 리스트 -->

        <!-- 쇼핑백포장, 선물포장 신청 -->
        <div class="or-chkbox-space">
          <v-layout row align-center justify-start>
            <v-checkbox label="쇼핑백 포장 무료 서비스 이용하기" class="cmp-form-checkbox"></v-checkbox>  
            <CommonTooltipBox :tooltip-list="tooltipList.shopping_bag">
              <template #before>
                <v-img src="/images/order/shopping-bag-img.png" alt="쇼핑백 이미지" width="60" class="mr-14 mt-4"/>
              </template>
            </CommonTooltipBox>
          </v-layout>
          <v-layout row align-center justify-start>
            <v-checkbox v-model="giftWrappingCheck" label="선물포장 신청하기" class="cmp-form-checkbox"></v-checkbox>  
            <CommonTooltipBox :tooltip-list="tooltipList.gift">
              <template #before>
                <v-img src="/images/order/packing-img.png" alt="선물포장 이미지" width="60" class="mr-16 mt-4"/>
              </template>
            </CommonTooltipBox>
          </v-layout>
          <template v-if="giftWrappingCheck">
            <v-text-field outlined type="text" label="받는 분의 성함을 입력해주세요." clearable class="cmp-form-input mt-20" />
            <v-textarea outlined :no-resize="true" label="내용을 입력해주세요." counter="100" maxlength="100" height="130" class="cmp-form-textarea counting mt-8" />
          </template>
        </div>
        <!-- //쇼핑백포장, 선물포장 신청 -->

        <!-- 할인정보 쿠폰 및 혜택 -->
        <div class="cmp-sub-tit line mt-60">
          <h3 class="tit">할인정보</h3>
        </div>
        <div class="contents-line-box">
          <div class="cmp-sub-tit small">
            <h4 class="tit">쿠폰 및 혜택</h4>
            <button class="cmp-font fnt-14">혜택변경 <i v-cmp-icon="{size:12,name:'next'}"></i></button>
          </div>
          <!-- 입력 전 -->
          <!--<p class="cmp-font c-gray">적용 가능한 할인 혜택이 없습니다.</p>-->
          <!-- //입력 전 -->
          <!-- 입력 후 -->
          <div class="or-apply-discount">
            <dl class="total">
              <dt>최대혜택적용 1개</dt>
              <dd><strong>-355,000</strong>원</dd>
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
          </div>
          <!-- //입력 후 -->
        </div>
        <!-- //할인정보 쿠폰 및 혜택 -->
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

        <!-- 결제수단 선택 -->
        <div class="cmp-sub-tit line mt-60">
          <h3 class="tit">결제수단</h3>
        </div>    
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
          <!--
          <div class="payment-select-credit">
            <input v-model="paymentSelected" id="creditCard" type="radio" value="creditCard" name="paymentSelect" class="card-input">
            <label for="creditCard" class="card-label">CREDIT CARD 선택</label>
            <div class="card-box">
              <p class="cnt-tit">CREDIT CARD</p>
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

// 230206 선물하기 : 카드 이미지 로티 추가 Start
import Lottie from 'vue-lottie/src/lottie.vue'
import * as cardLottieBase from '~/assets/lottie/order/card-base.json'
import * as cardLottieCongrats from '~/assets/lottie/order/card-congrats.json'
import * as cardLottieThanks from '~/assets/lottie/order/card-thanks.json'
import * as cardLottieLove from '~/assets/lottie/order/card-love.json'
import * as cardLottieChristmas from '~/assets/lottie/order/card-christmas.json'
// 230206 선물하기 : 카드 이미지 로티 추가 End

export default {
  components: {
    Lottie, // 230206 선물하기 : 추가
    Swiper,
    SwiperSlide,
  },
  layout: 'LayoutBasics',
  data() {
    return {
      userText : '',
      cardSelectIdx : 0,
      cardList:[ // 230206 선물하기 : 추가
        {
          anim : null,
          option : {animationData: cardLottieBase.default},
          image : '/images/order/card-base-thumbnail.png',
          title : '기본'
        },
        {
          anim : null,
          option : {animationData: cardLottieCongrats.default},
          image : '/images/order/card-congrats-thumbnail.png',
          title : '축하'
        },
        {
          anim : null,
          option : {animationData: cardLottieThanks.default},
          image : '/images/order/card-thanks-thumbnail.png',
          title : '감사'
        },
        {
          anim : null,
          option : {animationData: cardLottieLove.default},
          image : '/images/order/card-love-thumbnail.png',
          title : '사랑'
        },
        {
          anim : null,
          option : {animationData: cardLottieChristmas.default},
          image : '/images/order/card-christmas-thumbnail.png',
          title : '크리스마스'
        }
      ],
      // orderCard : [], // 230206 선물하기 : 삭제
      giftWrappingCheck : false, // 선물포장 신청
      tooltipList: { // 툴팁 상세 정보
        shopping_bag: [ // 쇼핑백 포장 230111 툴팁문구 : 수정
          '브랜드 쇼핑백 또는 더한섬닷컴<br />전용 쇼핑백 중 1개로 랜덤 발송되며,<br />디자인을 선택하실 수 없습니다.',
          '리퀴드 퍼퓸바 상품은 쇼핑백<br />서비스 이용이 불가합니다.',
        ],
        gift: [ // 선물포장
          'THE STAR등급 고객님들께 포장 서비스를 제공합니다.',
          '다수의 상품을 주문하실 경우, 포장은 합포장 또는 단품으로 부분 포장이 될 수 있습니다.',
          '실제 포장과 이미지는 상이할 수 있습니다.',
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
        {
          brand_name: 'MINE',
          product_name: '컬러 블록 니트 가디건',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/001.jpg',
          options: ['BLACK', '90', '1개'],
          sell_price: '355000',
          discount: '20',
          price: '366000',
          notice : ['인기상품으로 전국 매장에서 수급 후 배송 예정<br>불량 등의 이유로 취소될 수 있음<br>(평일 기준 5일 이상 소요)'],
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
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/order-banner.png',
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
          name : '현대카드 레드 바우처',
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
    buyAgreeCheck(){
      this.freeShippingInfoSet()
    },
    oeraAgreeCheck(){
      this.freeShippingInfoSet()
    },
    personalInfoAgreeCheck(){
      this.freeShippingInfoSet()
    },
    cardSelectIdx(){ // 230206 선물하기 : 추가
      const me = this
      me.cardList[me.cardSelectIdx].anim.stop()
      me.cardList[me.cardSelectIdx].anim.play()
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

    /* 230206 선물하기 : mtthod 추가 Start */
    cardBaseAnim(anim){
      const me = this
      me.cardList[0].anim = anim
    },
    cardCongratsAnim(anim){
      const me = this
      me.cardList[1].anim = anim
    },
    cardThanksAnim(anim){
      const me = this
      me.cardList[2].anim = anim
    },
    cardLoveAnim(anim){
      const me = this
      me.cardList[3].anim = anim
    },
    cardChristmasAnim(anim){
      const me = this
      me.cardList[4].anim = anim
    },
    /* 230206 선물하기 : mtthod 추가 End */
  },
}
</script>
<style lang="scss"> // 20221230 scoped 제거
@import '@/assets/scss/pages/order.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>
