<template>
  <div class="contents contents-type2">
    <div class="content-wrap content-giftcard">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'마이페이지'" :left-data="menuList"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="my-giftcardpossible">
            <div class="cmp-page-tit">
              <h2 class="tit">e-money</h2><!--20221018 e-Gift : 텍스트수정 -->
            </div> 
            <div class="emoney-box">
              <div class="center-between upper">
                <span class="emoney-label">e-money</span>
                <nuxt-link class="cmp-font button link" to="#n">e-Gift Card 등록<i class="cmp-icon i-next cmp-icon-12"></i></nuxt-link>
              </div>
              <div class="center-between bottom">
                <p class="remain">
                  <strong class="mr-2">145,000</strong>P<!-- [퍼블수정]22.10.11 -->
                </p>
                <div class="dl-wrap add-text"><!-- [퍼블수정]22.11.24 -->
                  <dl class="center-between">
                    <dt>오늘, 10/30 소멸 예정 e-money</dt><!-- [퍼블수정]22.11.24 -->
                    <dd><strong class="mr-2">2,000</strong>P</dd><!-- [퍼블수정]22.10.11 -->
                  </dl>
                  <dl class="center-between">
                    <dt>이번 달 내 소멸 예정 e-money</dt><!-- [퍼블수정]22.11.24 -->
                    <dd><strong class="mr-2">100</strong>P</dd><!-- [퍼블수정]22.10.11 -->
                  </dl>
                </div>
              </div>
            </div>
            <div class="cmp-tabs tabs-actionTop mb-30">
              <v-tabs v-model="tab" fixed-tabs>
                <v-tab>사용가능</v-tab>
                <v-tab>사용완료</v-tab>
                <v-tab>기간만료</v-tab>
              </v-tabs>
            </div>
            <v-tabs-items v-model="tab">

              <!-- 사용가능 -->
              <v-tab-item :transition="false">
                <div class="table-wrap">
                  <table class="table-type1 last-border">
                    <colgroup>
                      <col width="auto" />
                      <col width="248px" />
                      <col width="158px" />
                      <col width="128px" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th class="pw-0">카드정보</th>
                        <th>포인트</th>
                        <th>상태</th>
                        <th>확인/신청</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="pw-0">
                          <div class="order-number-box no-line pb-4">
                            <div class="line-box">
                              <p class="cmp-font fnt-14">카드번호<span class="ml-10 line">3300129491868777</span></p><!-- [퍼블수정]23.01.09 -->
                            </div>
                          </div>
                          <div class="card-content">
                            <v-img src="/images/egiftcard/card2.png" alt="" class="img"></v-img>
                            <div class="cmp-labels">
                              <span class="label" style="background-color:#000;border-color:#000;color:#fff">EXCLUSIVE</span>
                            </div>
                          </div>
                        </td>
                        <td class="text-center">
                          <strong>20,000</strong><span class="mr-2 ml-2">/</span><span class="cmp-font c-gray">100,000</span><span class="cmp-font c-gray ml-2">P</span><!-- [퍼블수정]22.10.11 -->
                        </td>
                        <td class="text-center">
                          <span class="cmp-font c-gray">2022.11.16까지</span>
                        </td>
                        <td class="text-center pw-0">
                        </td>
                      </tr>
                      <tr><!-- [퍼블수정]22.10.11 케이스 추가 -->
                        <td class="pw-0">
                          <div class="order-number-box no-line pb-4">
                            <div class="line-box">
                              <p class="cmp-font fnt-14">카드번호<span class="ml-10 line">3300129491868777</span></p><!-- [퍼블수정]23.01.09 -->
                            </div>
                          </div>
                          <div class="card-content">
                            <v-img src="/images/egiftcard/card2.png" alt="" class="img"></v-img>
                            <div class="cmp-labels">
                              <span class="label" style="background-color:#000;border-color:#000;color:#fff">EXCLUSIVE</span>
                            </div>
                          </div>
                        </td>
                        <td class="text-center">
                          <strong>20,000</strong><span class="mr-2 ml-2">/</span><span class="cmp-font c-gray">100,000</span><span class="cmp-font c-gray ml-2">P</span><!-- [퍼블수정]22.10.11 -->
                        </td>
                        <td class="text-center">
                          <span class="cmp-font c-gray">2022.11.16까지</span>
                        </td>
                        <td class="text-center pw-0">
                          <div class="btns">
                            <v-btn outlined small color="primary">기간연장</v-btn>
                            <v-btn outlined small color="primary">잔액환불</v-btn>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="pw-0">
                          <div class="order-number-box no-line pb-4">
                            <div class="line-box">
                              <p class="cmp-font fnt-14">카드번호<span class="ml-10 line">3300129491868777</span></p><!-- [퍼블수정]23.01.09 -->
                            </div>
                          </div>
                          <div class="card-content">
                            <v-img src="/images/egiftcard/card2.png" alt="" class="img"></v-img>
                            <div class="cmp-labels">
                              <span class="label" style="background-color:#000;border-color:#000;color:#fff">EXCLUSIVE</span>
                            </div>
                          </div>
                        </td>
                        <td class="text-center">
                          <strong>20,000</strong><span class="mr-2 ml-2">/</span><span class="cmp-font c-gray">100,000</span><span class="cmp-font c-gray ml-2">P</span><!-- [퍼블수정]22.10.11 -->
                        </td>
                        <td class="text-center">
                          <p class="cmp-font c-blue">환불대기</p>
                        </td>
                        <td class="text-center pw-0">
                          <div class="btns">
                            <v-btn outlined small color="primary">환불신청내역</v-btn>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="pw-0">
                          <div class="order-number-box no-line pb-4">
                            <div class="line-box">
                              <p class="cmp-font fnt-14">카드번호<span class="ml-10 line">3300129491868777</span></p><!-- [퍼블수정]23.01.09 -->
                            </div>
                          </div>
                          <div class="card-content">
                            <v-img src="/images/egiftcard/card2.png" alt="" class="img"></v-img>
                            <div class="cmp-labels">
                              <span class="label" style="background-color:#000;border-color:#000;color:#fff">EXCLUSIVE</span>
                            </div>
                          </div>
                        </td>
                        <td class="text-center">
                          <strong>20,000</strong><span class="mr-2 ml-2">/</span><span class="cmp-font c-gray">100,000</span><span class="cmp-font c-gray ml-2">P</span><!-- [퍼블수정]22.10.11 -->
                        </td>
                        <td class="text-center">
                          <span class="cmp-font c-gray">2022.11.16까지</span>
                        </td>
                        <td class="text-center pw-0">
                          <div class="btns">
                            <v-btn outlined small color="primary">기간연장</v-btn>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="pw-0">
                          <div class="order-number-box no-line pb-4">
                            <div class="line-box">
                              <p class="cmp-font fnt-14">카드번호<span class="ml-10 line">3300129491868777</span></p><!-- [퍼블수정]23.01.09 -->
                            </div>
                          </div>
                          <div class="card-content">
                            <v-img src="/images/egiftcard/card2.png" alt="" class="img"></v-img>
                            <div class="cmp-labels">
                              <span class="label" style="background-color:#000;border-color:#000;color:#fff">EXCLUSIVE</span>
                            </div>
                          </div>
                        </td>
                        <td class="text-center">
                          <strong>20,000</strong><span class="mr-2 ml-2">/</span><span class="cmp-font c-gray">100,000</span><span class="cmp-font c-gray ml-2">P</span><!-- [퍼블수정]22.10.11 -->
                        </td>
                        <td class="text-center">
                          <span class="cmp-font c-gray">2022.11.16까지</span>
                        </td>
                        <td class="text-center pw-0">
                          <div class="btns">
                            <v-btn outlined small color="primary">잔액환불</v-btn>
                          </div>
                        </td>
                      </tr><!-- //[퍼블수정]22.10.11 케이스 추가 -->
                      <!-- 상품없음 -->
                      <!-- <tr>
                        <td colspan="4">
                          <CommonNoData msg="쇼핑백에 담긴 상품이 없습니다."/>
                        </td>
                      </tr> -->
                      <!-- //상품없음 -->
                    </tbody>
                  </table>
                </div>
              </v-tab-item>
              <!-- //사용가능 -->

              <!-- 사용완료 -->
              <v-tab-item :transition="false">
                <div class="table-wrap">
                  <table class="table-type1 last-border">
                    <colgroup>
                      <col width="auto" />
                      <col width="248px" />
                      <col width="158px" />
                      <col width="128px" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th class="pw-0">카드정보</th>
                        <th>포인트</th>
                        <th>상태</th>
                        <th>확인/신청</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="pw-0">
                          <div class="order-number-box no-line pb-4">
                            <div class="line-box">
                              <p class="cmp-font fnt-14">카드번호<span class="ml-10 line">3300129491868777</span></p><!-- [퍼블수정]23.01.09 -->
                            </div>
                          </div>
                          <div class="card-content">
                            <v-img src="/images/egiftcard/card2.png" alt="" class="img"></v-img>
                            <div class="cmp-labels">
                              <span class="label" style="background-color:#000;border-color:#000;color:#fff">EXCLUSIVE</span>
                            </div>
                          </div>
                        </td>
                        <td class="text-center">
                          <strong>20,000</strong><span class="mr-2 ml-2">/</span><span class="cmp-font c-gray">100,000</span><span class="cmp-font c-gray ml-2">P</span><!-- [퍼블수정]22.10.11 -->
                        </td>
                        <td class="text-center">
                          <p class="cmp-font">사용완료</p><!-- [퍼블수정]22.10.11 -->
                        </td>
                        <td class="text-center pw-0"></td>
                      </tr>
                      <tr>
                        <td class="pw-0">
                          <div class="order-number-box no-line pb-4">
                            <div class="line-box">
                              <p class="cmp-font fnt-14">카드번호<span class="ml-10 line">3300129491868777</span></p><!-- [퍼블수정]23.01.09 -->
                            </div>
                          </div>
                          <div class="card-content">
                            <v-img src="/images/egiftcard/card2.png" alt="" class="img"></v-img>
                            <div class="cmp-labels">
                              <span class="label" style="background-color:#000;border-color:#000;color:#fff">EXCLUSIVE</span>
                            </div>
                          </div>
                        </td>
                        <td class="text-center">
                          <strong>20,000</strong><span class="mr-2 ml-2">/</span><span class="cmp-font c-gray">100,000</span><span class="cmp-font c-gray ml-2">P</span><!-- [퍼블수정]22.10.11 -->
                        </td>
                        <td class="text-center">
                          <p class="cmp-font">환불완료</p><!-- [퍼블수정]22.10.11 -->
                        </td>
                        <td class="text-center pw-0">
                          <div class="btns">
                            <v-btn outlined small color="primary">환불신청내역</v-btn>
                          </div>
                        </td>
                      </tr>
                      <!-- 상품없음 -->
                      <!-- <tr>
                        <td colspan="4">
                          <CommonNoData msg="쇼핑백에 담긴 상품이 없습니다."/>
                        </td>
                      </tr> -->
                      <!-- //상품없음 -->
                    </tbody>
                  </table>
                </div>
              </v-tab-item>
              <!-- //사용완료 -->

              <!-- 기간만료 -->
              <v-tab-item :transition="false">
                <div class="table-wrap">
                  <table class="table-type1 last-border">
                    <colgroup>
                      <col width="auto" />
                      <col width="248px" />
                      <col width="158px" />
                      <col width="128px" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th class="pw-0">카드정보</th>
                        <th>포인트</th>
                        <th>상태</th>
                        <th>확인/신청</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="pw-0">
                          <div class="order-number-box no-line pb-4">
                            <div class="line-box">
                              <p class="cmp-font fnt-14">카드번호<span class="ml-10 line">3300129491868777</span></p><!-- [퍼블수정]23.01.09 -->
                            </div>
                          </div>
                          <div class="card-content">
                            <v-img src="/images/egiftcard/card2.png" alt="" class="img"></v-img>
                            <div class="cmp-labels">
                              <span class="label" style="background-color:#000;border-color:#000;color:#fff">EXCLUSIVE</span>
                            </div>
                          </div>
                        </td>
                        <td class="text-center">
                          <strong>20,000</strong><span class="mr-2 ml-2">/</span><span class="cmp-font c-gray">100,000</span><span class="cmp-font c-gray ml-2">P</span>
                        </td>
                        <td class="text-center">
                          <p class="cmp-font c-gray">유효기간만료</p><!-- [퍼블수정]22.10.11 -->
                        </td>
                        <td class="text-center pw-0">
                          <div class="btns">
                            <v-btn outlined small color="primary">1:1 문의</v-btn>
                          </div>
                        </td>
                      </tr>
                      <tr><!-- [퍼블수정]22.10.11 케이스 추가-->
                        <td class="pw-0">
                          <div class="order-number-box no-line pb-4">
                            <div class="line-box">
                              <p class="cmp-font fnt-14">카드번호<span class="ml-10 line">3300129491868777</span></p><!-- [퍼블수정]23.01.09 -->
                            </div>
                          </div>
                          <div class="card-content">
                            <v-img src="/images/egiftcard/card2.png" alt="" class="img"></v-img>
                            <div class="cmp-labels">
                              <span class="label" style="background-color:#000;border-color:#000;color:#fff">EXCLUSIVE</span>
                            </div>
                          </div>
                        </td>
                        <td class="text-center">
                          <strong>20,000</strong><span class="mr-2 ml-2">/</span><span class="cmp-font c-gray">100,000</span><span class="cmp-font c-gray ml-2">P</span>
                        </td>
                        <td class="text-center">
                          <p class="cmp-font c-gray">유효기간만료</p><!-- [퍼블수정]22.10.11 -->
                        </td>
                        <td class="text-center pw-0">
                          <div class="btns">
                            <v-btn outlined small color="primary">잔액환불</v-btn>
                            <v-btn outlined small color="primary">1:1 문의</v-btn>
                          </div>
                        </td>
                      </tr><!-- // [퍼블수정]22.10.11 케이스 추가 -->
                      <!-- 상품없음 -->
                      <!-- <tr>
                        <td colspan="4">
                          <CommonNoData msg="쇼핑백에 담긴 상품이 없습니다."/>
                        </td>
                      </tr> -->
                      <!-- //상품없음 -->
                    </tbody>
                  </table>
                </div>
              </v-tab-item>
              <!-- //기간만료 -->

            </v-tabs-items>
              <v-expansion-panels v-model="panel" multiple class="cmp-acc acc-type2">
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    e-money 안내
                    <template #actions>
                      <i class="cmp-icon-etc cmp-icon-down">열기/닫기</i>
                    </template>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <ul class="cmp-dotList">
                      <li>e-money는 한섬 e-Gift Card를 구매하거나 선물받은 고객이 더한섬닷컴 사이트에서 전환하여 적립 된 온라인 머니 입니다.</li>
                      <li>e-money 유효기간은 1년 입니다. (구매일로부터 유효기간 1년(365일) 이후 3개월씩 연장 가능/구매일로부터 유효기간 5년 이전까지)</li>
                      <li>사용 가능한 e-money가 남아 있는 고객은 전액 사용 또는 환불 절차 완료 전까지 탈퇴가 불가합니다.</li>
                    </ul>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>          
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
      tab: null,
      panel: null,
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