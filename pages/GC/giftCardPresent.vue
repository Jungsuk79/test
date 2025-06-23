<template>
  <div class="contents contents-type2">
    <div class="content-wrap content-giftcard">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'마이페이지'" :left-data="menuList" :active="'/ko/GC/giftCardList'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="cmp-page-tit">
            <h2 class="tit">e-Gift Card 선물하기</h2>
          </div>  
          <section class="content-section pb-70">
            <div class="gc-gift">
              <section class="message-payment">
                <div class="gift-message">
                  <div class="card-area" style="background-color:#f8f8f8">
                    <div class="card-image">
                      <!-- [퍼블수정]23.02.16 v-img > lottie 변경 -->
                      <Lottie :options="t_anim.repeat_option" @animCreated="tRepeatAnim"/>
                    </div>
                    <div class="card-message">
                      <div class="message-title">
                        <h4>항상 고마운 당신에게 보내요</h4>
                        <p><strong>100,000</strong>원</p>
                      </div>
                      <div class="message-input">
                        <v-textarea v-model="model3" outlined label="메시지 입력" maxlength="200" :no-resize="true" :rules="[model3Rules.length(200)]" counter="200" rows="5" class="cmp-form-textarea counting"></v-textarea>
                      </div>
                    </div>
                  </div>
                  <div class="receiver-list-wrap">
                    <div class="cmp-sub-tit small">
                      <h3 class="tit">받는 사람</h3>
                    </div>
                    <div class="check-wrap">
                      <v-checkbox label="나에게 선물하기" class="cmp-form-checkbox"></v-checkbox>
                      <p class="text">1회 최대 5명까지 수신 가능합니다.</p>
                    </div>

                    <ul class="user-list">
                      <li v-for="(item, index) in giftReceive" :key="index">
                        <div class="cmp-form-colBox">
                          <v-text-field v-model="item.name" outlined type="text" label="이름" clearable class="cmp-form-input"></v-text-field>
                          <CommonSelectBox id="phoneSelect" v-model="item.phoneNum1" title="앞자리 번호 선택">
                            <template #optionList>
                              <option value="010">010</option>
                              <option value="011">011</option>
                              <option value="017">017</option>
                              <option value="018">018</option>
                              <option value="019">019</option>
                            </template>
                          </CommonSelectBox>
                          <v-text-field v-model="item.phoneNum2" type="text" outlined label="가운데 번호 입력" clearable class="cmp-form-input label-hide"></v-text-field>
                          <v-text-field v-model="item.phoneNum3" type="text" outlined label="뒷자리 번호 입력" clearable class="cmp-form-input label-hide"></v-text-field>
                        </div>
                        <div class="btn-del">
                          <button v-if="index!==0" type="text" text class="cmp-font btn-remove" @click="receiveRemove(index)"><span class="underline">삭제</span></button>
                        </div>
                      </li>
                    </ul>
                    <v-layout justify-space-between class="cmp-btnsArea center-area">
                      <v-btn outlined large color="primary" :disabled="giftReceive.length > 4" @click="receiveAdd">추가하기</v-btn>
                    </v-layout>                    
                  </div>
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
                    <dl class="quantity">
                      <dt>수량</dt>
                      <dd>
                        <CommonCountingBox max="10"></CommonCountingBox>
                        <p class="guide-text">1명 수신일 때만 복수 가능</p>
                      </dd>
                    </dl>
                  </div>
                  <dl class="total">
                    <dt class="mb-8">최종 결제 금액</dt><!-- [퍼블수정]22.10.11 -->
                    <dd><strong class="mr-2">100,000</strong>원</dd><!-- [퍼블수정]22.10.11 -->
                  </dl>
                  <v-layout justify-space-between class="cmp-btnsArea center-area">
                    <v-btn large disabled color="primary">선물하기</v-btn>
                  </v-layout>                    
                  <ul class="cmp-dotList mt-20">
                    <li>e-Gift Card 결제는 H.Point Pay, 신용카드 결제만 가능하며 신용카드사마다 정책이 다르니 확인하세요.</li>
                  </ul>
                  <nuxt-link class="cmp-font fnt-16 button golink" to="#n">
                    <span>e-Gift Card 구매 관련 카드사별<br />인증 안내</span> 
                    <i class="cmp-icon cmp-icon-16 i-next ml-4"></i>
                  </nuxt-link>
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
  },
  layout: 'LayoutBasics',
  data() {
    return {
      model3: '',
      model3Rules: {
        length: (len) => (v) =>
          (v || '').length <= len || `최대 ${len}글자까지 입력 가능합니다.`,
      },
      giftReceive: [ // 받는 사람
      {
        name: '',
        phoneNum1: null,
        phoneNum2: null,
        phoneNum3: null,
      },
    ],
    addDisabled: false,
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
    receiveAdd() {
      // 받는 사람 입력폼 추가
      const item = {
        name: '',
        phoneNum1: null,
        phoneNum2: null,
        phoneNum3: null,
      }
      this.giftReceive.push(item)
      this.addDisabled = true
    },
    receiveRemove(idx) {
      // 받는 사람 리스트 삭제
      this.giftReceive.splice(idx, 1)
      if(this.giftReceive.length === 1) this.addDisabled = false
    },
    tRepeatAnim(anim){
      const me = this
      me.t_anim.repeat = anim
    },
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/giftCard.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>