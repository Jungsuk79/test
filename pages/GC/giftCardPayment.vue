<template>
  <div class="contents contents-type2">
    <div class="content-wrap content-giftcard">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'마이페이지'" :left-data="menuList" :active="'/ko/GC/giftCardList'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="cmp-page-tit">
            <h2 class="tit">e-Gift Card 결제하기</h2>
          </div>   
          <section class="content-section">
            <div class="gc-payment">
              <section class="message-payment">
                <div class="gift-message">

                  <section class="sec1">
                    <!-- 카드영역 -->
                    <div class="card-area">
                      <div class="card-image">
                        <!-- [퍼블수정]23.02.16 v-img > lottie 변경 -->
                        <Lottie :options="t_anim.repeat_option" @animCreated="tRepeatAnim"/>
                      </div>
                      <div class="card-message">
                        <div class="message-title">
                          <h4>항상 고마운 당신에게 보내요</h4>
                          <p><strong>100,000</strong>원</p>
                        </div>
                      </div>
                    </div>

                    <!-- 카드 메세지 -->
                    <div class="card-text">한국에서 자주 먹던 아기자기한 반찬용 소시지가 기준이던 그 시절.독일 소시지의 지글거림을 처음 본 소감은 두려움 반 호기심 반이었습니다. 관광지에서 쉽게 볼 수 있는 조그마한 바게트 빵에 끼워진 소시지. 작은 빵의 크기에 비해 지나치게 긴 소시지의 모양이 익숙하지않습니다. 밖으로 한참이나 삐져나온 소시지 끝부분을 베어 무니, 달지 않고 톡 쏘는 겨자소스</div>

                    <!-- 받는사람 -->
                    <div class="card-receiver mt-24">
                      <div class="cmp-sub-tit small mb-0">
                        <h3 class="tit">받는 사람 3명</h3>
                      </div>
                      <p>김한섬 / 010-****-5678</p>
                      <p>다니엘헤니 / 010-****-5678</p>
                      <p>김한섬 / 010-****-5678</p>
                    </div>
                  </section>

                  <section class="sec2">
                    <h4 class="sec-title">결제수단</h4>
                    <article>
                      <div class="cmp-sub-tit small">
                        <h3 class="tit">H.Point Pay 결제</h3>
                      </div>                      
                      <div class="card-swiper">
                        <Swiper 
                          :options="{
                            slidesPerView: 2,
                            spaceBetween: 4,
                            loop: false,
                            navigation: {
                              nextEl: '.card-swiper .swiper-button-next',
                              prevEl: '.card-swiper .swiper-button-prev',
                            },
                            touchRatio: 0,
                          }"
                        >
                          <SwiperSlide v-for="n in 3" :key="n">
                            <div class="card-item selector" ref="cardItem" @click="selectCard">
                              <!-- 221130 기프트카드 : 마크업 변경 -->
                              <!-- <h5><v-img src="/images/egiftcard/ico-bank-bc-23.png" alt="bc"></v-img>비씨카드</h5> -->
                              <div class="logo-cnt">
                                <img src="/images/egiftcard/ico-bank-bc-23.png" alt="bc"/>
                                <span v-if="true">비씨카드</span><!-- 텍스트 있을때 사용 -->
                              </div>
                              <!-- // 221130 기프트카드 : 마크업 변경 -->
                              <p class="num">{{n}}921 **** **** 2138</p>
                              <div class="halbu">
                                <strong>H.Point Pay</strong>
                                <CommonSelectBox id="selectId0" title="타이틀">
                                  <template #optionList>
                                    <option value="placeholder">일시불</option>
                                  </template>
                                </CommonSelectBox>
                              </div>
                            </div>
                          </SwiperSlide>
                          <!-- h point pay 추가하기 -->
                          <SwiperSlide>
                            <!-- <div class="card-box"> --><!-- 221130 기프트카드 : 개발소스에 있는 card-box 삭제 -->
                            <button class="card-add">
                              <div class="cnt">
                                <span class="bar"></span>
                                <span class="txt"><strong>H.Point Pay</strong> 추가하기</span>
                              </div>
                            </button>
                          </SwiperSlide>
                          <!-- // h point pay 추가하기 -->
                        </Swiper>
                        <div class="swiper-buttons">
                          <v-btn slot="button-prev" icon class="swiper-button swiper-button-prev"><span class="ir">이전</span></v-btn>
                          <v-btn slot="button-next" icon class="swiper-button swiper-button-next"><span class="ir">다음</span></v-btn>
                        </div>
                      </div>
                    </article>
                    <article class="general">
                      <div class="cmp-sub-tit small">
                        <h3 class="tit">일반결제</h3>
                      </div>
                      <div class="select-box selector" ref="cardItem" @click="selectCard">
                        <span>신용카드</span>
                        <CommonSelectBox id="selectId0" title="타이틀">
                          <template #optionList>
                            <option value="placeholder">카드사 선택</option>
                            <option value="option1">카드1</option>
                            <option value="option2">카드2</option>
                            <option value="option3">카드3</option>
                            <option value="option4">카드4</option>
                          </template>
                        </CommonSelectBox>
                        <CommonSelectBox id="selectId0" title="타이틀">
                          <template #optionList>
                            <option value="placeholder">일시불</option>
                          </template>
                        </CommonSelectBox>
                      </div>
                      <p class="cmp-font fnt-14 mt-24">BO에서 입력된 결제수단 공지(요약) 글 3줄 정도 노출하고 말줄임 하지 않도록 BO에서 간략히 입력하도록 글자수 제한 요청 BO에서 간략히 입력하도록 글자수 제한 요청  BO에서 간략히 입력하도록 글자수 제한 요청</p>
                    </article>
                  </section>


                </div>
                <div class="gift-payment">
                  <div class="dl-wrap">
                    <dl>
                      <dt>상품금액</dt>
                      <dd><span class="mr-2">100,000</span>원</dd><!-- [퍼블수정]22.10.11 -->
                    </dl>
                    <dl>
                      <dt>받는사람</dt>
                      <dd><span class="mr-2">3</span>명</dd><!-- [퍼블수정]22.10.11 -->
                    </dl>
                    <dl>
                      <dt>수량</dt>
                      <dd>1</dd>
                    </dl>
                  </div>
                  <dl class="total">
                    <dt class="mb-8">최종 결제 금액</dt><!-- [퍼블수정]22.10.11 -->
                    <dd><strong class="mr-2">100,000</strong>원</dd><!-- [퍼블수정]22.10.11 -->
                  </dl>
                  <div class="check-wrap">
                    <v-checkbox label="구매 동의" class="cmp-form-checkbox"></v-checkbox>
                    <v-btn text class="underline cmp-font fnt-13">구매정보확인</v-btn>
                  </div>
                  <div class="btn"><v-btn large color="primary">결제하기</v-btn></div>
                </div>
              </section>
              <section class="card-benefit">
                <div class="my-34">
                  <button class="cmp-font button d-flex align-center">카드 행사 혜택(무이자,청구,즉시할인) 안내<i class="cmp-icon cmp-icon-16 ml-4 mt-0 i-next"></i></button>
                </div>
                <div class="banner-swiper">
                  <Swiper 
                    :options="{
                      pagination: {el: '.cmp-swiper-paginationBullet',clickable: true}
                    }"
                  >
                    <SwiperSlide v-for="n in 5" :key="n">
                      <nuxt-link to="#none">
                        <v-img src="/images/egiftcard/dummy-banner.png" alt="" :aspect-ratio="860 / 120"></v-img>
                      </nuxt-link>
                    </SwiperSlide>
                    <div slot="pagination" class="cmp-swiper-paginationBullet swiper-pagination"></div>
                  </Swiper>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import Lottie from 'vue-lottie/src/lottie.vue'
import * as cardLottieBaseWhite from '~/assets/lottie/e-gift/default_white.json'
/*
기본 하얀색 카드
import * as cardLottieBaseWhite from '~/assets/lottie/e-gift/default_white.json'
기본 검은색 카드
import * as cardLottieBaseBlack from '~/assets/lottie/e-gift/default_black.json'
러브 카드
import * as cardLottieLove from '~/assets/lottie/e-gift/All_for_love.json'
크리스마스 카드
import * as cardLottieXMas from '~/assets/lottie/e-gift/MerryChristmas.json'
뉴이어 카드
import * as cardLottieThxThisYear from '~/assets/lottie/e-gift/Thank_you_for_this_year.json'
생일축하 카드 추가
import * as cardLottieThxThisYear from '~/assets/lottie/e-gift/Happy_birthday.json'
*/

export default {
  components: {
    Lottie,
    Swiper,
    SwiperSlide
  },
  layout: 'LayoutBasics',
  data() {
    return {
      t_anim : {
          start : null,
          repeat : null,
          switch : false,
          repeat_option : {
            animationData: cardLottieBaseWhite.default,
            autoplay: true
          }
        },
    }
  },
  created() {
    const me = this
    const json = require('~/static/json/mypage_left_menu.json')
    me.menuList = json.list
  },  
  methods: {
    selectCard(e) {
      document.querySelectorAll('.selector').forEach(element => {
        element.classList.remove('active');        
      });
      e.target.closest('.selector').classList.add('active');
    },
    tRepeatAnim(anim){
      const me = this
      me.t_anim.repeat = anim
    },
  },

}
</script>

<style lang="scss">
@import '@/assets/scss/pages/giftCard.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>