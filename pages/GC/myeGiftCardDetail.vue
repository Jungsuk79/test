<template>
  <div class="contents contents-type2">
    <div class="content-wrap content-giftcard">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'마이페이지'" :left-data="menuList" :active="'/ko/GC/myeGiftCardList'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="my-giftdetail">
            <div class="cmp-page-tit">
              <h2 class="tit">e-Gift Card 선물내역</h2>
            </div>

            <!-- 테이블 정보 -->
            <div class="table-wrap">
              <div class="table-wrap">
                <div class="order-number-box no-line"><!-- [퍼블수정]22.10.11 -->
                  <div class="line-box">
                    <p class="cmp-font fnt-14">주문번호<span class="ml-8">211222P12345678</span></p>
                    <p class="cmp-font fnt-13">2021.12.22 13:00</p>
                  </div>
                </div>
                <table class="table-type1 last-border">
                  <colgroup>
                    <col width="auto" />
                    <col width="248px" />
                    <col width="158px" /><!-- [퍼블수정]22.10.11 -->
                  </colgroup>
                  <thead>
                    <tr>
                      <th class="pw-0">상품정보</th>
                      <th>상품금액</th>
                      <th>수량</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- [퍼블수정] 22.10.31 주문조회와 동일하게 목록/상세 나열구조로 변경 -->
                    <tr>
                      <td class="pw-0">
                        <div class="card-content">
                          <v-img src="/images/egiftcard/card2.png" alt="" class="img"></v-img>
                          <div class="text">
                            <div class="cmp-labels">
                              <div class="label black" style="background-color:#000;border-color:#000;color:#fff">EXCLUSIVE</div>
                            </div>    
                            <p>새해 복 많이 받으세요</p>
                          </div>
                        </div>
                      </td>
                      <td class="text-center">
                        <strong class="mr-2">100,000</strong>원<!-- [퍼블수정]22.10.11 -->
                      </td>
                      <td class="text-center">1</td>
                    </tr>
                    <tr>
                      <td class="pw-0">
                        <div class="card-content">
                          <v-img src="/images/egiftcard/card2.png" alt="" class="img"></v-img>
                          <div class="text">
                            <div class="cmp-labels">
                              <div class="label black" style="background-color:#000;border-color:#000;color:#fff">EXCLUSIVE</div>
                            </div>    
                            <p>새해 복 많이 받으세요</p>
                          </div>
                        </div>
                      </td>
                      <td class="text-center">
                        <strong class="mr-2">100,000</strong>원<!-- [퍼블수정]22.10.11 -->
                      </td>
                      <td class="text-center">1</td>
                    </tr>
                    <tr>
                      <td class="pw-0">
                        <div class="card-content">
                          <v-img src="/images/egiftcard/card2.png" alt="" class="img"></v-img>
                          <div class="text">
                            <div class="cmp-labels">
                              <div class="label black" style="background-color:#000;border-color:#000;color:#fff">EXCLUSIVE</div>
                            </div>    
                            <p>새해 복 많이 받으세요</p>
                          </div>
                        </div>
                      </td>
                      <td class="text-center">
                        <strong class="mr-2">100,000</strong>원<!-- [퍼블수정]22.10.11 -->
                      </td>
                      <td class="text-center">1</td>
                    </tr>
                    <!-- //[퍼블수정] 22.10.31 주문조회와 동일하게 목록/상세 나열구조로 변경 -->
                  </tbody>
                </table>
              </div>
              <ul class="cmp-dotList mt-20 mb-40">
                <li>휴대폰으로 전송된 e-Gift Card 번호 및 PIN 번호를 마이페이지>e-Gift Card 메뉴에 등록하여 e-money로 전환된 후 사용이 가능합니다.</li>
                <li><span class="cmp-font fnt-14 c-red">2021.12.09</span>까지 e-Gift Card가 미등록 되면 자동취소 되니 확인해주세요.</li>
              </ul>
            </div>
            <!-- //테이블 정보 -->
            <div class="line-box">
              <!-- 받는사람 -->
              <section class="contents-line-box">
                <div class="card-receiver">
                  <div class="cmp-sub-tit small mb-0">
                    <h3 class="tit">받는 사람 3명</h3>
                  </div>
                  <div class="receiver">
                    <p>김한섬 / 010-****-5678</p>
                    <div class="btns">
                      <v-btn outlined small color="primary">1회 재전송</v-btn>
                      <v-btn outlined small color="primary">주문취소</v-btn>
                    </div>
                  </div>
                  <div class="receiver">
                    <p>다니엘헤니 / 010-****-5678</p>
                    <span class="cmp-font fnt-14 mr-23">주문취소</span><!-- [퍼블수정]22.10.11 -->
                  </div>
                  <div class="receiver">
                    <p>김한섬 / 010-****-5678</p>
                    <span class="cmp-font fnt-14 mr-23">등록완료</span>
                  </div>
                </div>    
              </section>              
              <!-- //받는사람 -->
              <!-- 결제수단 --><!-- [퍼블수정]22.10.11 -->
              <div class="return-info no-tit no-bt no-bb pb-20">
                <div class="box">
                  <dl class="box-tit">
                    <dt class="tit cmp-font fnt-20 pb-20">결제 수단</dt>
                  </dl>
                  <dl class="pack-info">
                    <dd class="txt cmp-font fnt-18 pb-0"><span class="bold">신용카드</span> / <span>삼성카드</span></dd>
                  </dl>
                </div>
              </div>
              <!-- //결제수단 --><!-- // [퍼블수정]22.10.11 -->
              <!-- 최종 결제 금액 --><!-- [퍼블수정]22.10.11 -->
              <div class="cmp-info info-type3 table-type">
                <span class="text-left cmp-font fnt-18">최종 결제 금액</span>
                <span class="text-right cmp-font fnt-20"><b class="mr-2">200,000</b>원</span>
              </div>    
              <!-- //최종 결제 금액 --><!-- // [퍼블수정]22.10.11 -->
              <!-- 안내문구 -->
              <section class="contents-line-box pt-24"><!-- [퍼블수정]23.01.09 -->
                <ul class="cmp-dotList">
                  <li>e-Gift Card 선물내역은 3개월(93일) 보관됩니다.</li>
                  <li>e-Gift Card 재발송은 1회까지만 가능합니다.</li>
                </ul>
              </section>
              <!-- 안내문구 -->
            </div>
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
    }
  },
  created() {
    const me = this
    const json = require('~/static/json/mypage_left_menu.json')
    me.menuList = json.list
  },  
  methods: {
  },

}
</script>

<style lang="scss">
@import '@/assets/scss/pages/giftCard.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>