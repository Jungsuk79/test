<template>
  <div class="contents contents-type2">
    <div class="content-wrap content-giftcard">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'마이페이지'" :left-data="menuList"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="gc-main">
            <div class="cmp-page-tit">
              <h2 class="tit">e-Gift Card</h2>
            </div>          
            <section class="content-section section-cardlist">
              <div class="top-box">
                <div class="box-title">
                  <p>소중한 분께 마음을 전하고 싶을 때,</p>
                  <strong>더한섬닷컴만의 e-Gift Card를<br />선물해 보시는 건 어떨까요?</strong>
                </div>
              </div>
              <ul class="card-list">
                <li>
                  <nuxt-link to="">
                    <div class="card-inner">
                      <div class="thumb">
                        <v-img src="/images/order/card-thanks.png" alt=""></v-img>
                      </div>
                      <div class="list-info">
                        <h5 class="info-title">Thank you for this year</h5>
                        <div class="info-price">
                          <strong>770,000</strong>원
                        </div>
                      </div>
                    </div>
                    <div class="cmp-labels">
                      <span class="label" style="background-color:#000;border-color:#000;color:#fff">EXCLUSIVE</span>
                    </div>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="">
                    <div class="card-inner">
                      <div class="thumb">
                        <v-img src="/images/order/card-christmas.png" alt=""></v-img>
                      </div>
                      <div class="list-info">
                        <h5 class="info-title">Merry Christmas!</h5>
                        <div class="info-price">
                          <strong>770,000</strong>원
                        </div>
                      </div>
                    </div>
                    <div class="cmp-labels">
                      <span class="label" style="background-color:#000;border-color:#000;color:#fff">EXCLUSIVE</span>
                    </div>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="">
                    <div class="card-inner">
                      <div class="thumb">
                        <v-img src="/images/order/card-congrats.png" alt=""></v-img>
                      </div>
                      <div class="list-info">
                        <h5 class="info-title">Congratulations</h5>
                        <div class="info-price">
                          <strong>770,000</strong>원
                        </div>
                      </div>
                    </div>
                    <div class="cmp-labels">
                      <span class="label" style="background-color:#000;border-color:#000;color:#fff">EXCLUSIVE</span>
                    </div>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="">
                    <div class="card-inner">
                      <div class="thumb">
                        <v-img src="/images/order/card-love.png" alt=""></v-img>
                      </div>
                      <div class="list-info">
                        <h5 class="info-title">All for love</h5>
                        <div class="info-price">
                          <strong>770,000</strong>원
                        </div>
                      </div>
                    </div>
                    <div class="cmp-labels">
                      <span class="label" style="background-color:#000;border-color:#000;color:#fff">EXCLUSIVE</span>
                    </div>
                  </nuxt-link>
                </li>
                <li class="soldout">
                  <nuxt-link to="">
                    <div class="card-inner">
                      <div class="thumb">
                        <v-img src="/images/order/card-soldout.png" alt=""></v-img>
                      </div>
                      <div class="list-info">
                        <h5 class="info-title">card soldout</h5><!-- soldout 이여도 노출되어보임 -->
                        <div class="info-price">
                          <strong>300,000</strong>원
                        </div>
                      </div>
                    </div>
                    <div class="cmp-labels">
                      <span class="label" style="background-color:#000;border-color:#000;color:#fff">EXCLUSIVE</span>
                    </div>
                  </nuxt-link>
                </li>                
                <li>
                  <nuxt-link to="">
                    <div class="card-inner">
                      <div class="thumb">
                        <v-img src="/images/order/card-base.png" alt=""></v-img>
                      </div>
                      <div class="list-info">
                        <h5 class="info-title">card basic</h5>
                        <div class="info-price">
                          <strong>100,000</strong>원
                        </div>
                      </div>
                    </div>
                    <div class="cmp-labels">
                      <span class="label" style="background-color:#000;border-color:#000;color:#fff">EXCLUSIVE</span>
                    </div>
                  </nuxt-link>
                </li>
                <!-- 여러줄 예시, 이미지 넘침 예시 -->
                <li>
                  <nuxt-link to="">
                    <div class="card-inner">
                      <div class="thumb">
                        <v-img src="/images/order/card-base.png" alt=""></v-img>
                      </div>
                      <div class="list-info">
                        <h5 class="info-title">여러줄 테스트 여러줄 테스트 여러줄 테스트 여러줄 테스트 여러줄 테스트 여러줄 테스트</h5>
                        <div class="info-price">
                          <strong>100,000</strong>원
                        </div>
                      </div>
                    </div>
                    <div class="cmp-labels">
                      <span class="label" style="background-color:#000;border-color:#000;color:#fff">EXCLUSIVE</span>
                    </div>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="">
                    <div class="card-inner">
                      <div class="thumb">
                        <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-6.png" alt=""></v-img>
                      </div>
                      <div class="list-info">
                        <h5 class="info-title">이미지 넘침 예시</h5>
                        <div class="info-price">
                          <strong>100,000</strong>원
                        </div>
                      </div>
                    </div>
                    <div class="cmp-labels">
                      <span class="label" style="background-color:#000;border-color:#000;color:#fff">EXCLUSIVE</span>
                    </div>
                  </nuxt-link>
                </li>
                <!-- // 여러줄 예시, 이미지 넘침 예시 -->
              </ul>

              <!-- e-Gift Card 없을 때 -->
              <CommonNoData msg="e-Gift Card 판매 기간이 아닙니다."></CommonNoData>
              <!-- //e-Gift Card 없을 때 -->

            </section>
            <section class="content-section section-howto">
              <div class="cmp-sub-tit small pb-0">
                <h3 class="tit">e-Gift Card 선물 및 사용방법</h3>
              </div>
              <div class="giftcard-howto">
                <!-- 기프트카드 선물방법 -->
                <div class="howto-gift">
                  <h2 class="article-title">선물방법</h2>
                  <ol class="gift-step-list">
                    <li>
                      <i class="cmp-icon-etc cmp-icon-30 i-reward"></i>
                      <p>카드 선택</p>
                    </li>
                    <li>
                      <i class="cmp-icon-etc cmp-icon-30 i-orderlist"></i>
                      <p>메시지 입력</p>
                    </li>
                    <li>
                      <i class="cmp-icon-etc cmp-icon-30 i-presentused"></i>
                      <p>카드 결제</p>
                    </li>
                    <li>
                      <i class="cmp-icon-etc cmp-icon-30 i-confirm"></i>
                      <p>선물 완료</p>
                    </li>
                  </ol>
                  <p class="info-text">
                    선물 받으실 분의 이름과 휴대폰 번호를 입력하시고 마음을 담은 메시지를 적어주세요.<br />
                    신용카드로만 결제가 가능하시며, 선물 후 마이페이지에서 보낸 내역을 확인하실 수 있습니다.
                  </p>
                </div>
                <!-- //기프트카드 선물방법 -->

                <!-- 기프트카드 사용방법 -->
                <div class="howto-use">
                  <h2 class="article-title">사용방법</h2>
                  <ol class="gift-step-list">
                    <li>
                      <i class="cmp-icon-etc cmp-icon-30 i-message"></i>
                      <p>휴대폰 카톡/MMS</p>
                    </li>
                    <li>
                      <i class="cmp-icon-etc cmp-icon-30 i-account"></i>
                      <p>더한섬닷컴 방문</p>
                    </li>
                    <li>
                      <i class="cmp-icon-etc cmp-icon-30 i-logout"></i>
                      <p>로그인 or 회원가입</p>
                    </li>
                    <li>
                      <i class="cmp-icon-etc cmp-icon-30 i-card"></i>
                      <p>카드 등록</p>
                    </li>
                  </ol>
                  <p class="info-text">
                    SMS 수신 메시지 내 URL 또는 더한섬닷컴 마이페이지를 통해 받으신 카드번호와 PIN번호를 입력해 주세요.<br />
                    등록 완료 시, e-money로 전환되어 더한섬닷컴에서만 사용 가능하십니다.
                  </p>
                </div>
                <!-- //기프트카드 사용방법 -->

                <button class="cmp-font button mt-24">마이페이지 e-Gift Card 바로가기 <i class="cmp-icon cmp-icon-12 i-next"></i></button>
              </div>
            </section>
            <section class="content-section">
              <h2 class="article-title mt-40">e-Gift Card 안내 및 유의사항</h2>
              <ul class="cmp-dotList">
                <li>한섬 e-Gift Card는 더한섬닷컴 e-money로 전환하여 사용할 수 있는 온라인 상품권입니다. (선물 가능)</li>
                <li>한섬 e-Gift Card는 한정수량으로 판매 되어 조기 품절될 수 있습니다.</li>
                <li>한섬 e-Gift Card는 여러 분에게 한 번에 선물 가능합니다. (동일 상품에 대해 1회 수신자 5명까지 가능)</li>
                <li>한섬 e-Gift Card 구매 시, 선물 받으실 분의 휴대폰 번호로 문자메시지가 전송되며 1회 재전송 하실 수 있습니다.</li>
                <li>한섬 e-Gift Card 구매 및 등록은 H.POINT 통합회원과 더한섬닷컴 회원만 가능합니다. (간편회원 불가)</li>
                <li>수신자가 7일 동안 e-Gift Card를 등록하지 않을 경우, 자동으로 취소 및 구매자에게 환불 됩니다.</li>
                <li>수신자가 등록할 경우 e-Gift Card는 수신자의 계정으로 더한섬닷컴 e-money로 전환되며, 1년간 유효합니다. (선물하기 취소 불가)</li>
                <li>한섬 e-Gift Card는 ID 당 월 1백 만원 이하, 신용카드로 구매 가능합니다. (단, 롯데카드는 e-Gift Card 30만원권 이상 구매 불가 / 일 30만원, 월 1백 만원 이하 구매 가능)</li>
                <li class="c-point">한섬 e-Gift Card를 등록하여 e-money로 전환하신 후에는 e-Gift Card 금액의 60% 이상 구매 시에만 잔액 환불이 가능합니다. (단, 이벤트 혜택 및 구매 리워드로 지급된 e-Gift는 잔액 환불이 불가합니다.) </li>
                <li>번호도용 문자차단/휴대폰번호 도용방지 서비스에 가입된 휴대폰은 발송 또는 수신이 불가합니다.</li>
                <li>수신 받는 휴대폰 설정에 따라 MMS 전송이 불가할 수 있습니다.</li>
                <li>(주)한섬은 고객 개인정보 보호 차원에서 e-Gift Card 발송 내역을 발송 후 3개월만 보관하고 있습니다. 이후 문자 삭제, 분실 등에 대한 재발송 처리가 안되오니 유의 하시기 바랍니다.</li>
                <li>사용 가능한 e-money가 남아 있는 고객은 전액 사용 또는 환불 절차 완료 전까지 탈퇴가 불가합니다.</li>
              </ul>
              <button class="cmp-font button mt-24">e-Gift Card 구매 관련 카드사별 인증 안내 <i class="cmp-icon cmp-icon-16 i-next ml-4"></i></button>
            </section>
          </div>            
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  layout: 'LayoutBasics',
  data() {
    return {
      menuList : [],
    }
  },
  created() {
    const me = this
    const json = require('~/static/json/mypage_left_menu.json')
    me.menuList = json.list
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/giftCard.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>