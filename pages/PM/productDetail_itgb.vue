<template>
  <div v-scroll="scrollContent" class="contents contents-type2"><!-- 2022-09-15-prd 스크롤 이벤트 추가 -->
    <div class="content-wrap">
      <div><!-- [퍼블수정]22.12.06 수정 이미지 확대보기 시 사라짐 삭제 -->
        <!-- 상품 상단 영역 -->
        <div class="prd-detail-top">
          <!-- 상품swipe 영역 -->
          <div class="swiper-box">
            <!-- 상품 swiper -->
            <div class="swiper-thumb-wrap" :class="{more: prdData[prdSelectIdx] && prdData[prdSelectIdx].images && prdData[prdSelectIdx].images.length >= 8}">
              <Swiper 
              ref="swiperThumbs"
              :options="galleryOptionThumbs"
              class="detail-top-swiper thumb">
                <SwiperSlide v-for="(item, index) in itgb_images" :key="index">
                  <div class="swiper-cnt" :class="{selected: curSlideIdx === index}">
                    <img :src="item.image_url" alt="상품이미지" role="button" class="img" @click="topSwiperSlideTo(index, 0)"/>
                    <!-- 동영상 썸네일 -->
                    <div v-if="index === itgb_images.length - 1 && isItgb" class="play-ico-cnt">
                      <i v-cmp-icon="{ name: 'play', invert: 1 }"></i>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <button slot="button-prev" class="detail-swiper-top"></button>
              <button slot="button-next" class="detail-swiper-bottom"></button>
            </div>
            <Swiper 
              ref="swiperMain"
              v-prd-detail-img 
              :options="galleryOptionTop"
              class="detail-top-swiper normal"
              @slideChange="slideChangeTop">
              <SwiperSlide v-for="(item, index) in itgb_images" :key="index">
                <div class="swiper-cnt">
                  <div v-if="item.video_url" class="video-cnt">
                    <VideoPlayer :auto-play="true" :loop="true" :path="item.video_url" :poster="item.image_url" :mute="true" :video-ratio="150.93" />
                  </div>
                  <img v-else :src="item.image_url" alt="상품이미지" class="img"/>
                </div>
              </SwiperSlide>
              <button slot="button-prev" class="detail-swiper-next"></button>
              <button slot="button-next" class="detail-swiper-prev"></button>
            </Swiper>
            <!-- //상품 swiper -->

            <!-- 버튼 모음 -->
            <button class="zoom-btn" @click="DialogProductZoom = true">
              <span class="icon">확대</span>
            </button>
            <button v-if="isItgb" v-show="!isTopSlideVideo" class="cody-lookbook-btn">
              <span class="icon"></span>
              <span class="txt">코디&amp;룩북</span>
            </button>
            <button v-if="isItgb" v-show="swiperPlayBtnShow && topSwiperBtnShow && !isTopSlideVideo" class="video-play-btn" @click="topSwiperSlideTo(prdData[prdSelectIdx].images.length - 1,300)">
              <span class="icon">동영상 재생</span>
            </button>
            <!-- //버튼 모음 -->

            <!-- 프로모션 메시지 -->
            <template v-if="promotionMsg!==null">
              <transition name="fade-in-out">
                <div v-if="promotionMsg.show" class="promotion-txt">
                  <!-- eslint-disable -->
                  <nuxt-link v-if="promotionMsg.link" :to="promotionMsg.link" class="link" v-html="promotionMsg.message"></nuxt-link>
                  <p v-else class="msg" v-html="promotionMsg.message"></p>
                  <!-- eslint-disable -->
                </div>
              </transition>
            </template>
            <!-- //프로모션 메시지 -->
          </div>
          <!-- //상품swipe 영역 -->

          <!-- 상품상단 정보 -->
          <div class="detail-top-info">
            <div class="top-info-box"> 

              <ul v-if="isItgb" class="prd-category">
                <li><nuxt-link to="#n">TOM GREYHOUND</nuxt-link></li>
                <!-- 240411_상품상세 브레드크럼 內 PB스티커 추가 -->
                <li><nuxt-link to="#n">TOM GREYHOUND</nuxt-link></li>
                <li style="font-weight: 700;">
                  <nuxt-link to="#n">
                    TOM GREYHOUND
                    <span class="label">PB</span>
                  </nuxt-link>
                </li>
                <!-- // 240411_상품상세 브레드크럼 內 PB스티커 추가 -->
                <li><nuxt-link to="#n">여성</nuxt-link></li>
                <li><nuxt-link to="#n">아우터</nuxt-link></li>
                <li><nuxt-link to="#n"><span class="line">코트</span></nuxt-link></li><!-- [개발확인]22.12.28 strong 이 아닌 span 입니다. -->
              </ul>
              <!-- [무형상품] no-link 추가 & nuxt-link 제거 -->
              <ul v-else class="prd-category no-link">
                <li>MOMENT</li>
                <li>걸쳐</li>
              </ul>

              <div class="prd-name">
                <span>달리기 : 마음이 즐거워지는 아크릴 과슈화</span>
                <ShareBox ref="shareBox"></ShareBox><!-- 2022-09-15-prd 공유하기 -->
                <!-- [240729] 텍스트스티커 & 찜 개수 추가 -->
                <button class="zzim-btn" :class="{'on' : isZzim}" @click="zzimBtn">
                  <span class="ir">찜</span>
                  <span class="zzim-cnt">{{zzimCount>=999 ? '999+' : zzimCount}}</span>
                </button>
                <!-- // [240729] 텍스트스티커 & 찜 개수 추가 -->
              </div>
              <div class="prd-price">
                <p class="sell-price"><strong>556,500</strong>원</p>
                <del class="price">126,500원</del>
                <p class="discount"><em>20</em>%</p>
                <v-btn icon class="discount-info">
                  <i v-cmp-icon="{ size: 18, name: 'question' }">최대혜택가 보기</i>
                </v-btn>
              </div>
              <!-- [240729] 텍스트스티커 & 찜 개수 추가 -->
              <ul class="prd-label">
                <li class="label">EXCLUSIVE</li>
                <li class="label">24FW</li>
                <li class="label">ICONIC</li>
              </ul>
              <!-- // [240729] 텍스트스티커 & 찜 개수 추가 -->
              <button class="prd-number">TN2B9KTOG29NM1_DN</button>
              <v-layout row align-items justify-space-between class="mt-10">
                <div class="prd-review" role="button" tabindex="0" @click="scrollMove('#reviewContent',-48)">
                  <v-rating half-increments :value="5" readonly class="cmp-rating rating-default">
                    <v-icon><i class="icon star">별점</i></v-icon>
                  </v-rating>
                  <p class="txt">상품평 103</p>
                </div>
                <v-btn outlined small color="normal" class="prd-coupon-btn">쿠폰보기</v-btn><!-- 2022-09-15-prd 문구변경 -->
              </v-layout>
            </div><!-- .top-info-box End -->
            <div class="top-info-box">
              <!-- 혜택&배송비 -->
              <dl class="prd-info">
                <dt>혜택</dt>
                <dd class="table"><!-- [퍼블수정]23.01.18 -->
                  <div class="tr">
                    <div class="td td0">한섬마일리지</div>
                    <div class="td td1">
                      6,750M(5%)
                      <!-- [퍼블수정]icon-type="text" tooltipText="추가적립 안내" 추가 -->
                      <CommonTooltipBox :width="381" icon-type="text" tooltipText="추가적립 안내" :tooltip-list="['예약판매 상품 구매시 마일리지 3%추가 적립됩니다. (총 8%)']" />
                    </div>
                  </div>
                  <div class="tr">
                    <div class="td td0">한섬마일리지</div>
                    <div class="td td1">
                      6,750M(5%)
                      <!-- [퍼블수정]icon-type="text" tooltipText="추가적립 안내" 추가 -->
                      <CommonTooltipBox :width="381" icon-type="text" tooltipText="추가적립 안내" :tooltip-list="['예약판매 진행 중인 옵션 구매 시 한섬마일리지를 3% 추가<br>적립해드립니다.<br><b>2,250M (5%) + 1,350M (3%) = 3,600M (8%)</b>']" />
                    </div>
                  </div>
                  <div class="tr">
                    <div class="td td0">H.Point</div>
                    <div class="td td1">135P(0.1%)</div>
                  </div>
                  <!-- [퍼블수정]23.02.13 오에라 마일리지 삭제 수정 -->
                  <button class="cmp-font c-gray fnt-13"><span class="line">카드사 혜택</span></button>
                </dd>
                <!-- [개발수정요청]23.02.21 아래 내용 참고하시어 수정 부탁드립니다.-->
                <!-- <dd class="table">
                  태그 수정 & class="tr" 삭제
                  <template v-for="item, idx in checkGoodsArray ? getSelectedGoodsJson.benefitList : getGoodsJson.benefitList" :key="idx">
                    태그 수정
                    <template v-if="item.benefitColorCd == colorChipModel">
	                    <div v-if="item.benefitGrpCd == 'CM018'" class="tr">
	                      <div class="td td0">한섬마일리지</div>
	                      <div class="td td1">
	                        {{
	                          checkStatCd() === '예약'
	                          ?
	                          (
	                            getAddMile('allMile') +
	                            'M ' +
	                            '(' +
	                            getAddMile('allMileRate') +
	                            item.benefitUnit +
	                            ')'
	                          )
	                          :
	                          (
	                            numberWithCommas(item.benefitAmt) +
	                            'M ' +
	                            '(' +
	                            getInt(item.benefitRate) +
	                            item.benefitUnit +
	                            ')'
	                          )
	                        }}

	                        <CommonTooltipBox v-if="checkPreOrder" :iconType="'earnExtra'" :width="381"
                            :tooltip-list="['예약판매 진행 중인 옵션 구매 시 한섬마일리지를 '
                            +getAddMile('addMileRate')+ '% 추가<br>적립해드립니다.<br><b>'+getAddMile('sub')+'</b>']"
                          />
	                      </div>
	                    </div>
										</template>
                    태그 수정
										<template v-if="item.benefitColorCd == colorChipModel">
	                    <div v-if="item.benefitGrpCd == 'CM023'" class="tr">
	                      <div class="td td0">H.Point</div>
	                      <div class="td td1">
	                        {{
	                          numberWithCommas(item.benefitAmt) +
	                          'P ' +
	                          '(' +
	                          item.benefitRate +
	                          item.benefitUnit +
	                          ')'
	                        }}
	                      </div>
	                    </div>
	                	</template>
                  </template>
                  <button class="cmp-font c-gray fnt-13" @click="[DialogCardBenefit = true, callGtmGAEvent({category: 'PC_상품상세', action: '혜택정보', label: '카드사 혜택'})]"><span class="line">카드사 혜택</span></button>
                </dd> -->
              </dl>
              <dl v-if="isItgb" class="prd-info">
                <dt>배송비</dt>
                <dd class="table">
                  <div class="tr">
                    <div class="td">30,000원 이상 무료배송 (실결제 기준)</div>
                  </div>
                  <div class="tr">
                    <div class="td">퀵배송 시 5,000원 별도 (서울 지역만 가능)</div>
                  </div>
                </dd>
              </dl>
              <!-- //혜택&배송비 -->
            </div><!-- .top-info-box End -->
            <div class="top-info-box">
              <dl v-if="isItgb" class="prd-info"><!-- [개발확인]22.12.28 안의 내용이 없다면 미노출 되도록 부탁 드립니다. -->
                <dt>컬러</dt>
                <!-- 컬러칩 -->  
                <dd class="color-table">
                  <ul class="color-chip-box size-type3">
                    <template>
                      <li v-for="(item, index) in prdData" :key="index" class="chip">
                        <input 
                          :id="'colorChip'+index" type="radio" 
                          :checked="prdSelectIdx === item.prd_idx" 
                          :value="item.color_value" name="colorChip" 
                          :class="{soldout: index === 2}"
                          @input="colorChipChange(item.prd_idx)" 
                        />
                        <label :for="'colorChip'+index">
                          <span :style="{'background-image': 'url('+item.color_image+')'}">{{item.color_value}}</span>
                        </label>
                      </li>
                    </template>
                  </ul>
                  <span class="color-name">{{colorVar}}</span>
                </dd>
                <!-- //컬러칩 -->  
              </dl>
              <!-- 사이즈 -->
              <dl v-if="isItgb" class="prd-info">
                <dt>&nbsp;</dt><!-- [개발확인]23.02.28 해당 내용이 없다면 빈값(&nbsp;)으로 노출되게 부탁 드립니다. -->
                <dd>
                  <v-layout row align-center justify-space-between>
                    <button class="cmp-font fnt-13 button">
                      <i class="cmp-icon cmp-icon-18 i-cleaning"></i>
                      사이즈 추천받기<!--<strong class="bold c-blue">L</strong>사이즈를 추천합니다--><i class="cmp-icon cmp-icon-12 i-next"></i>
                    </button>
                    <div>
                      <button class="cmp-font fnt-13 button"><span class="line">핏가이드</span></button>
                      <button class="cmp-font fnt-13 button ml-10"><span class="line">사이즈 조견표</span></button>
                    </div>
                  </v-layout>
                </dd>
              </dl>
              <dl class="prd-info mt-8 align-center"><!-- [개발확인]22.12.28 안의 내용이 없다면 미노출 되도록 부탁 드립니다. -->
                <dt>옵션</dt>
                <dd>
                  <ProductOptionSelect :size-data="optionSizeData" :defaultText="'옵션 선택'" @submit="sizeSelect"/>
                </dd>
              </dl>
              <!-- [퍼블수정]23.03.08 인기상품 문구 추가 -->
              <dl v-if="isItgb" class="prd-info align-center popular-tooltip mt-8">
                <dt></dt>
                <dd>
                    <p class="cmp-font fnt-16">인기상품으로 전국 매장 수급 후 배송 예정</p>
                    <CommonTooltipBox cover-none :tooltip-list="['불량 등의 이유로 취소될 수 있음<br>(평일 기준 5일 이상 소요)']"/>
                </dd>
              </dl>
              <!-- //[퍼블수정]23.03.08 인기상품 문구 추가 -->
              <dl class="prd-info align-center"><!-- [개발확인]22.12.28 안의 내용이 없다면 미노출 되도록 부탁 드립니다. -->
                <dt>수량</dt>
                <dd>
                  <ProductCountingBox max="10"></ProductCountingBox>
                </dd>
              </dl>
              <dl v-if="isItgb" class="prd-info align-center">
                <dt>배송방식</dt>
                <dd>
                  <div class="cmp-tabs tab-wrapType column03">
                    <v-tabs fixed-tabs v-model="delivTabs">
                      <v-tab>택배</v-tab>
                      <v-tab>매장수령</v-tab>
                      <v-tab>퀵배송</v-tab>
                    </v-tabs>
                  </div>
                </dd>
              </dl>

              <!-- [퍼블수정]23.02.22 퀵배송 수정 -->
              <dl v-if="delivTabs === 2" class="prd-info mt-8 align-center">
                <dt></dt>
                <dd>
                  <div class="prd-address">
                    <div>
                      서울 전지역, 배송비 5,000원(별도)
                    </div>
                    <button class="cmp-font fnt-13 button pt-0">
                      <span class="line">퀵 배송지 변경</span>
                    </button>
                  </div>
                </dd>
              </dl>
            </div>
            <div class="top-info-box">
              <dl class="prd-info align-center">
                <dt>총합계</dt>
                <dd class="prd-price2"><strong>556,500</strong>원</dd>
              </dl>

              <div class="prd-detail-btn">
                <!-- [240729] 텍스트스티커 & 찜 개수 추가 -->
                <button class="zzim-btn" :class="{'on' : isZzim}" @click="zzimBtn">
                  <span class="ir">찜</span>
                  <span class="zzim-cnt">{{zzimCount>=999 ? '999+' : zzimCount}}</span>
                </button>
                <v-btn height="60" color="primary" @click="openDialog">바로구매</v-btn>
                <!-- // [240729] 텍스트스티커 & 찜 개수 추가 -->
              </div>

              <!-- [240729] 텍스트스티커 & 찜 개수 추가 -->
              <!-- <div class="prd-detail-btn"> -->
                <!-- <button class="zzim-btn" :class="{'on' : isZzim}" @click="zzimBtn">
                  <span class="ir">찜</span>
                  <span class="zzim-cnt">{{zzimCount>=999 ? '999+' : zzimCount}}</span>
                </button>
                <v-btn height="60" color="primary">선물하기</v-btn>
                <v-btn height="60" color="primary">쇼핑백</v-btn>
                <v-btn height="60" color="primary">바로구매</v-btn> -->
                <!-- <v-btn large height="60" color="primary" :disabled="true">품절된 상품입니다.</v-btn> -->
              <!-- </div> -->
              <!-- // [240729] 텍스트스티커 & 찜 개수 추가 -->

              <!-- 증정&사은품 -->
              <p class="cmp-font prd-gift-tit">증정&amp;사은품</p>
              <div class="cmp-swiper-box mt-8 prd-gifts-swiper"><!-- 221202 상품상세 : prd-gifts-swiper 클래스 추가 -->
                <Swiper :options="{slidesPerView: 'auto', spaceBetween: 8}">
                  <SwiperSlide v-for="(item, index) in giftsData" :key="index">
                    <div class="prd-gifts-box" role="button" tabindex="0" @click="giftsDetailView">
                      <i class="cmp-icon-etc cmp-icon-12 i-add"></i>
                      <div class="img-cnt">
                        <div v-if="item.type==='mileage'" class="mileage-img">
                          <div><strong>{{item.mileage | number}}</strong>M</div>
                        </div>
                        <v-img v-else :src="item.image" :alt="item.name" />
                        <p v-if="item.image_length" class="total">{{item.image_length}}</p>
                      </div>
                      <div class="txt-cnt">
                        <p class="name">
                          <template v-if="item.type==='mileage'">마일리지 적립</template>
                          <template v-else>{{item.name}}</template>
                        </p>
                        <template v-if="item.type==='present'">
                          <p class="desc">{{item.desc}}</p>
                        </template>
                        <template v-else>
                          <ul class="cmp-list list-dotType">
                            <li>{{item.date}}</li>
                            <li>{{item.desc}}</li>
                          </ul>
                        </template>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <!-- //증정&사은품 -->
            </div>
          </div>
          <!-- //상품상단 정보 -->
        </div>
        <!-- //상품 상단 영역 -->

        <!-- 상품상세 메뉴 -->
        <div v-sticky-tabs="{fixTop : true, noTranslate: true}" class="prd-detail-menu">
          <div class="menu-box">
            <button target="detailInfoContent">상세정보</button>
            <button target="reviewContent">상품평 103</button>
            <!-- 스타일 탭 제거 및 내용 제거 -->
            <!-- <button target="styleContent">스타일<span class="plus"></span></button> -->
          </div>
        </div>
        <!-- //상품상세 메뉴 -->

        <!-- 상품상세정보 -->
        <div id="detailInfoContent">
          <!-- 실측사이즈/사이즈 조건표 -->
          <detailInfoContents :isItgb="true"></detailInfoContents>
          <!--// 실측사이즈/사이즈 조건표 -->

          <!-- 상세 이미지 영역 -->
          <div class="full-width prd-html-detail"><!-- [개발확인]22.12.30 -->
            <div 
              class="editor-box prd-html-editor" :class="{'h-auto':!htmlMore.use}" 
              :style="!htmlMore.open ? 'height:'+htmlMore.hiddenH+'px;' : 'height:auto'"
            >
              <img src="https://img.thehandsome.com/md/publish/dummy/pc/details-html-img0.png" alt="상품 상세 이미지1"/>
              <img src="https://img.thehandsome.com/md/publish/dummy/pc/details-html-img1.png" alt="상품 상세 이미지3"/>
              <!-- //HTML 관리자 등록 -->
            </div>
            <div v-if="htmlMore.use" class="more-btn-cnt" :class="{open:htmlMore.open}">
              <v-btn v-if="!htmlMore.open" outlined block large color="primary" class="more-btn" @click="htmlAllView(true)">더보기<i class="cmp-icon cmp-icon-12 i-down ml-4"></i></v-btn>
              <v-btn v-else outlined block large color="primary" class="more-btn" @click="htmlAllView(false)">접기<i class="cmp-icon cmp-icon-12 i-up ml-4"></i></v-btn>
            </div>
          </div>
          <!--// 상세 이미지 영역 -->

          <!-- 상품정보고시 -->
           <!-- [무형상품] 컴포넌드 변경 -->
           <detailInfoNoticeItgb></detailInfoNoticeItgb>
           <!--// 상품정보고시 -->
          </div>
          <!-- //상품상세정보 -->
          
          <!-- 리뷰 -->
          <!-- [무형상품] isItgb 추가 (제외 영역 컨트롤) -->
        <div id="reviewContent" class="product-detail-reviewContents">
          <detailReviewContents :isItgb="true"></detailReviewContents>
        </div>
        <!-- //리뷰 -->

        <!-- 스타일 탭 제거 및 내용 제거 -->
        <!-- 스타일 --> 
        <!-- <div id="styleContent"  class="product-detail-styleContents">
          <detailStyleContents></detailStyleContents>
        </div> -->
        <!-- //스타일 -->

        <!-- 팝업 버튼 -->
        <ul class="prd-detail-popBtns">
          <li>
            <button class="cmp-font block">배송/교환/반품 <i class="cmp-icon cmp-icon-12 i-next"></i></button>
          </li>
          <!-- [무형상품] 숨김 -->
          <!-- <li>
            <button class="cmp-font block">매장 재고 확인 <i class="cmp-icon cmp-icon-12 i-next"></i></button>
          </li> -->
          <li>
            <button class="cmp-font block">상품 Q&amp;A 11 <i class="cmp-icon cmp-icon-12 i-next"></i></button>
          </li>
        </ul>
        <!-- //팝업 버튼 -->
      </div>  
      <!-- [퍼블수정]22.12.06 수정 이미지 확대보기 --> 
      <v-dialog
        v-model="DialogProductZoom"
        content-class="full-popup product-zoom">
        <div class="header-fix">
          <div class="inner">
            <v-btn small icon class="btn-close" @click="(DialogProductZoom=false)">
              <i class="cmp-icon i-close">닫기</i>
            </v-btn>
          </div>
        </div>
        <div class="inner">
          <div class="img-box" v-for="(item, index) in prdData[prdSelectIdx].images" :key="index">
            <img :src="item.image_url" alt="상품이미지" role="button" class="img"/>
          </div>
        </div>
      </v-dialog>
      <!-- //[퍼블수정]22.12.06 수정 이미지 확대보기 --> 
    </div>
    <!-- 구매툴 하단 플로팅 2022-09-15-prd -->
    <div v-show="showOrdTool && !DialogOrdTool" class="ord-tool-bottom">
      <div class="ord-tool-inner">
        <dl class="ord-tool-info">
          <dt>총 합계</dt>
          <dd class="prd-price2"><strong>556,500</strong>원</dd>
        </dl>

        <div class="ord-tool-btns">
          <!-- [240729] 텍스트스티커 & 찜 개수 추가 -->
          <button class="zzim-btn" :class="{'on' : isZzim}" @click="zzimBtn">
            <span class="ir">찜</span>
            <span class="zzim-cnt">{{zzimCount>=999 ? '999+' : zzimCount}}</span>
          </button>
          <v-btn height="46" color="primary" @click="openDialog">바로구매</v-btn>
          <!-- // [240729] 텍스트스티커 & 찜 개수 추가 -->
        </div>

        <!-- [240729] 텍스트스티커 & 찜 개수 추가 -->
        <!-- <div class="ord-tool-btns"> -->
          <!-- <button class="zzim-btn" :class="{'on' : isZzim}" @click="zzimBtn">
            <span class="ir">찜</span>
            <span class="zzim-cnt">{{zzimCount>=999 ? '999+' : zzimCount}}</span>
          </button>
          <v-btn height="46" color="primary" @click="openOrdToolPopup('선물하기')">선물하기</v-btn>
          <v-btn height="46" color="primary" @click="openOrdToolPopup('쇼핑백')">쇼핑백</v-btn>
          <v-btn height="46" color="primary" @click="openOrdToolPopup('바로구매')">바로구매</v-btn> -->
          <!-- <v-btn large height="46" color="primary" :disabled="true">품절된 상품입니다.</v-btn> -->
        <!-- </div> -->
        <!-- // [240729] 텍스트스티커 & 찜 개수 추가 -->

        
      </div>
    </div>
    <!--// 구매툴 하단 플로팅-->
    <!-- 구매툴 우측 레이어 2022-09-15-prd -->
    <v-navigation-drawer v-model="DialogOrdTool" fixed temporary right width="600px" overlay-color="#000" overlay-opacity="0.2">
      <productOrdTool ref="ordTool" @hide="closeOrdTool()" :button-text="orderBtnText"></productOrdTool>
    </v-navigation-drawer>
    <!--// 구매툴 우측 레이어 -->

    <v-dialog v-model="isMsPop">
      <DialogBasic class="popup-message mk-eventpopup" :header-title="`지금 주문하시면<br />클래스 행사일에 임박하여<br />주문 취소/부분 취소가 불가합니다.<br /><p class='cmp-font fnt-14 c-gray mt-8'>(행사일 5일전까지 주문취소 가능)</p>`" @hide="closeDialog">
        <template #body>
          <div class="inner">
            <div class="cmp-font text-center">
              <p class="cmp-font fnt-16">유의사항을 확인하셨고,<br />계속 주문을 진행하시겠습니까?</p>
            </div>
          </div>
          <div class="popup-btn-box">
            <v-btn large color="primary">확인</v-btn>
          </div>
        </template>
      </DialogBasic>
    </v-dialog>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import VideoPlayer from '~/components/common/VideoPlayer'
import detailInfoContents from '~/pages/PM/detailInfoContents'
import detailReviewContents from '~/pages/PM/detailReviewContents'
// import detailStyleContents from '~/pages/PM/detailStyleContents' // 스타일 탭 제거 및 내용 제거
// import detailInfoNotice from '~/pages/PM/detailInfoNotice'
import detailInfoNoticeItgb from '~/pages/PM/detailInfoNotice_itgb'
import productOrdTool from '~/pages/PM/productOrdTool'
import ShareBox from '~/components/common/ShareBox.vue'
import ProductCountingBox from '~/components/common/ProductCountingBox'
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
    VideoPlayer,
    detailInfoContents,
    detailReviewContents,
    // detailStyleContents,  // 스타일 탭 제거 및 내용 제거
    // detailInfoNotice,
    detailInfoNoticeItgb,
    productOrdTool,
    ShareBox,
    ProductCountingBox,
    DialogBasic
  },
  layout: 'LayoutBasics',
  data: () => ({
    isMsPop: false,
    isItgb: false, // 무형상품 제외 화면 히든 처리
    zzimCount: 998, // 찜 카운트
    isZzim: false, // 찜 카운트
    delivTabs: 0,
    topSwiperBtnShow : true,
    isTopSlideVideo: false,
    prdSelectIdx : 0, // 상단 상품 선택 index
    curSlideIdx: 0, // 선택된 슬라이드
    prdData : [], // 상단 상품 data
    swiperPlayBtnShow : true,
    colorVar : null, // 컬러칩 value
    DialogProductZoom : false,
    DialogOrdTool : false, // 우측 구매툴 레이어
    showOrdTool: false, // 구매툴 하단
    prdSizeData : [],
    // promotionMsg : null,
    promotionMsg : { // 상단 프로모션 메시지
      once : false,
      show:false,
      message : '해당 상품 관련한 프로모션이 지금 진행중이예요.',
      link : '#n',
    },
    itgb_images: [
      {
          "image_url" : "https://img.thehandsome.com/md/publish/dummy/pc/pc-itgb-01.jpg"
      },
      {
          "image_url" : "https://img.thehandsome.com/md/publish/dummy/pc/pc-itgb-01.jpg"
      },
    ],
    giftsData : [ // 증정품,사은품
      {
        type : 'present', // present 증정품 , event 사은품, mileage 사은품-마일리지
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-6.png',
        name : '오에라 화장품 샘플',
        desc : '오에라 화장품 샘플 100만원 이상 구매시 프리미엄 샘플 세트(파우치+에센스30ml)을 증정합니다.',
      },
      {
        type : 'event',
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-1.png',
        image_length : 3,
        name : 'IPANEMA 에코백',
        date : '6월 14일 ~ 소진 시 까지',
        desc : '폼더스토어, 폼맨즈라운지 IPANEMA 상품 구매 고객님께 사은품으로 IPANEM 에코백을 드립니다.',
      },
      {
        type : 'mileage',
        mileage : 100000,
        date : '6월 14일 ~ 6월 30일까지',
        desc : '정상 30만원 이상 구매 고객님께 100,000마일리지 드립니다.',},
    ],
    optionSizeData : {
      select_idx : null,
      list : [
        {
          size_en : '09:30',
          size_num : '',
          state_msg : '소량재고',
          sold_out : false,
        },
        {
          size_en : '10:00',
          size_num : '',
          state_msg : '',
          sold_out : false,
        },
        {
          size_en : '10:30',
          size_num : '',
          state_msg : '',
          sold_out : false,
        },
        {
          size_en : '11:00',
          size_num : '',
          state_msg : '재입고알림',
          sold_out : true,
        },
        {
          size_en : '11:30',
          size_num : '',
          state_msg : '품절',
          sold_out : true,
        },
        {
          size_en : '12:00',
          size_num : '',
          state_msg : '',
          sold_out : false,
        },
      ]
    },
    // 갤러리타입
    galleryOptionTop: {
      centeredSlides: true,
      navigation: {
        nextEl: ".detail-swiper-next",
        prevEl: ".detail-swiper-prev",
      },
    },
    galleryOptionThumbs: {
      direction: 'vertical',
      slidesPerView: 'auto',
      spaceBetween: 10,
      slideToClickedSlide: true,
      mousewheel: true,
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
      },
      navigation: {
        nextEl: ".detail-swiper-bottom",
        prevEl: ".detail-swiper-top",
      },
      observer: true, 
      observeParents: true,
    },
    htmlMore : {
      use : true,
      open : false,
      hiddenH : 750,
      top : null
    },
    orderBtnText : '바로구매',
  }),
  created() {
    const me = this
    const json = require('~/static/json/detail_product_list2.json')
    me.prdData = json.list
    for(let i=0;i<me.prdData.length;i++){
      me.prdData[i].prd_idx = i;
    }
  },
  mounted() {
    const me = this
    // 230216 상품상세 : 삭제 Start
    /* const codyLookbookBtn = document.querySelector(".cody-lookbook-btn") // 코디&룩북 버튼
    if(!codyLookbookBtn.classList.contains('hide')){
      setTimeout(() => {
        codyLookbookBtn.classList.add('hide'); // 코디&룩북 버튼 텍스트 숨김
      }, 2000)
    } */
    // 230216 상품상세 : 삭제 End
    me.colorVar = me.prdData[0].color_value

    me.$nextTick(() => {
      const swiperMain = me.$refs.swiperMain.$swiper
      const swiperThumbs = me.$refs.swiperThumbs.$swiper
      swiperMain.params.control = swiperThumbs
      swiperThumbs.params.control = swiperMain
    })
  },
  methods: {
    sizeSelect(val){
      const me = this
      const values = me.optionSizeData.list[val];
      const sizeData = {
        name: '플로럴 자수 칼라 프릴 탑',
        size: values.size_en + ' ' + values.size_num,
        color: me.colorVar,
        price: '556,500'
      }
      me.prdSizeData.push(sizeData)
    },
    sizeSelectClose(idx){
      const me = this
      me.prdSizeData.splice(idx, 1)
    },
    playVideo(){ // 상단 스와이퍼 video play
      const me = this
      me.$nextTick(function(){
        const vp = me.$el.querySelector(".detail-top-swiper .swiper-slide-active .video-player")
        if(vp){
          vp.__vue__.playVideo()
        }
      })
    },
    pauseVideo(){ // 상단 스와이퍼 video pause
      const me = this
      const vps = me.$el.querySelectorAll(".video-player")
      const len = vps.length
      let i, vp
      for(i=0; i<len; i++){
        vp = vps[i]
        vp.__vue__.pauseVideo()
      }
    },
    topSwiperSlideTo(idx, time){ // 상단 스와이퍼 slideTo
      const me = this
      const swiper = me.$el.querySelector('.detail-top-swiper.normal').swiper
      swiper.slideTo(idx,time)
      setTimeout(() => {
        me.curSlideIdx = idx
      }, time)
    },
    topSwiperPlayBtnSet(){ // 스와이프 마지막 영상 이동 버튼 노출 유무 세팅
      const me = this
      me.swiperPlayBtnShow = false
      for(let i=0;i<me.prdData[me.prdSelectIdx].images.length;i++){
        if(me.prdData[me.prdSelectIdx].images[i].video_url) me.swiperPlayBtnShow = true
      }
    },
    colorChipChange(idx){ // 컬러칩 선택
      const me = this
      me.topSwiperSlideTo(0,0)
      me.prdSelectIdx = idx
      me.topSwiperPlayBtnSet()
      me.colorVar = me.prdData[me.prdSelectIdx].color_value;
    },
    giftsDetailView(){
      console.log('증정&사은품 팝업 오픈')
    },
    // [퍼블수정]22.12.06 삭제
    zzimBtn(e){
      const me = this

      me.isZzim = !me.isZzim

      me.isZzim ? me.zzimCount++ : me.zzimCount--
    },
    slideChangeTop(){
      const me = this
      const swiper = me.$el.querySelector('.detail-top-swiper.normal').swiper
      const idx = swiper.realIndex
      const time = 300

      const swiperThumb = me.$el.querySelector('.detail-top-swiper.thumb')

      if(swiperThumb != null){
        swiperThumb.swiper.slideTo(idx,time)
      }

      setTimeout(() => {
        me.curSlideIdx = idx
      }, time)

      const slideData = me.prdData[me.prdSelectIdx].images
      if (slideData && slideData.length >= idx) {
        if(idx === slideData.length-1){
          this.isTopSlideVideo = true
        }else{
          this.isTopSlideVideo = false
        }
      }
    },
    htmlAllView(open){
      const me = this
      if(open){
        me.htmlMore.top = window.scrollY
        me.htmlMore.open = true
      }else{
        me.htmlMore.open = false
        window.scrollTo(0,me.htmlMore.top)
      }
    },
    scrollContent(){
      const me = this
      const scr = window.scrollY

      const headerHeight = document.querySelector('.header-body').getBoundingClientRect().height
      const tools = document.querySelector('.prd-detail-btn')
      const btnsCl = document.querySelector('#topButton').classList // 221206 상품상세 : 추가

      if(scr > tools.offsetTop + headerHeight + tools.getBoundingClientRect().height){
        me.showOrdTool = true
        btnsCl.add('up-type1') // 221206 상품상세 : 추가
      }else{
        me.showOrdTool = false
        btnsCl.remove('up-type1') // 221206 상품상세 : 추가
      }
    },
    openOrdToolPopup(text){
      this.DialogOrdTool = true
      this.orderBtnText = text
      this.$refs.ordTool.setup()
    },
    closeOrdTool(){
      const me = this
      me.DialogOrdTool = false
    },
    // 무형상품 행사 4일전 구매 안내팝업
    openDialog () {
      this.isMsPop = true
    },
    closeDialog () {
      this.isMsPop = false
    }
  },
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/detail.scss'; //페이지 전용 css
</style>
