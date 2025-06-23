<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <ContentsLeftMenu :title="'마이페이지'" :left-data="menuList" :active="'/ko/ME/handsomeMileage'"></ContentsLeftMenu>
      <div class="my-page-r-box contents-benefit">
        <div class="cmp-page-tit"><h2 class="tit">나의 혜택</h2></div>

        <div class="cmp-tabs tabs-actionTop">
          <v-tabs fixed-tabs v-model="tabs">
            <v-tab>한섬마일리지</v-tab>
            <v-tab>H.Point</v-tab>
            <v-tab>e-money</v-tab>
            <v-tab>한섬 VVIP</v-tab>
          </v-tabs>
        </div>

        <!--이용내역-->
        <div class="benefit-box">
          <v-layout justify-space-between class="mileage-wrap">
            <div class="mileage-total">
              <dl>
                <dt>e-money
                </dt>
                <dd>145,000<em class="unit ml-2">P</em></dd><!-- [퍼블수정]22.10.11 -->
              </dl>
            </div>

            <div class="mileage-info add-text"><!-- [퍼블수정]22.11.24 -->
              <dl class="mileage-sub">
                <dt>오늘, 10/30 소멸 예정 e-money</dt><!-- [퍼블수정]22.11.24 -->
                <dd><strong>2,000</strong> P</dd><!-- [퍼블수정]22.10.11 -->
              </dl>
              <dl class="mileage-sub">
                <dt>이번 달 내 소멸 예정 e-money</dt><!-- [퍼블수정]22.11.24 -->
                <dd><strong>100</strong> P</dd><!-- [퍼블수정]22.10.11 -->
              </dl>
            </div>

            <div class="card-link">  
              <button class="cmp-font fnt-14 c-white button">e-Gift Card 등록<i v-cmp-icon="{size : 12, name : 'next', invert : 1}"></i></button><!-- [퍼블수정]22.10.11 -->
            </div>
          </v-layout>
        </div>
        <!--//이용내역-->

        <div class="cmp-tabs tabs-actionTop">
            <v-tabs v-model="tabsub" fixed-tabs>
              <v-tab>사용가능</v-tab>
              <v-tab>사용완료</v-tab>
              <v-tab>기간만료</v-tab>
            </v-tabs>
        </div>
        <v-tabs-items v-model="tabsub">
          <!-- 사용가능 -->
          <v-tab-item :transition="false">
            <div class="table-wrap">
              <table class="table-type1">
                <colgroup>
                  <col width="auto" />
                  <col width="248px" />
                  <col width="158px" />
                  <col width="128px" />
                </colgroup>
                <thead>
                  <tr>
                    <th>카드정보</th>
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
                          <p class="cmp-font fnt-14">카드번호<span class="ml-8 line">3300129491868777</span></p>
                        </div>
                      </div>
                      <div class="card-content">
                        <v-img src="/images/egiftcard/card2.png" alt="" class="img"></v-img>
                        <!-- [퍼블수정]22.12.01 -->
                        <div class="cmp-labels">
                          <span class="label" style="background-color:#000;border-color:#000;color:#fff">EXCLUSIVE</span>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <strong>20,000</strong><span class="mr-2 ml-2">/</span><span class="cmp-font c-gray">100,000</span><span class="cmp-font c-gray ml-2">P</span><!-- [퍼블수정]22.10.11 -->
                    </td>
                    <td class="text-center">
                      <span class="cmp-font c-gray">2022.11.16까지</span><!-- [퍼블수정]22.10.11 -->
                    </td>
                    <!-- [퍼블수정]220808 클래스추가 -->
                    <td class="text-center pw-16">
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
                          <p class="cmp-font fnt-14">카드번호<span class="ml-8 line">3300129491868777</span></p>
                        </div>
                      </div>
                      <div class="card-content">
                        <v-img src="/images/egiftcard/card2.png" alt="" class="img"></v-img>
                        <!-- [퍼블수정]22.12.01 -->
                        <div class="cmp-labels">
                          <span class="label" style="background-color:#000;border-color:#000;color:#fff">EXCLUSIVE</span>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <strong>20,000</strong><span class="mr-2 ml-2">/</span><span class="cmp-font c-gray">100,000</span><span class="cmp-font c-gray ml-2">P</span><!-- [퍼블수정]22.10.11 -->
                    </td>
                    <td class="text-center">
                      <p class="cmp-font c-blue">환불대기</p><!-- [퍼블수정]22.10.11 -->
                    </td>
                    <!-- [퍼블수정]220808 클래스추가 -->
                    <td class="text-center pw-16">
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
          <!-- //사용가능 -->

          <!-- 사용완료 -->
          <v-tab-item :transition="false">
            <div class="table-wrap">
              <table class="table-type1">
                <colgroup>
                  <col width="auto" />
                  <col width="248px" />
                  <col width="158px" />
                  <col width="128px" />
                </colgroup>
                <thead>
                  <tr>
                    <th>카드정보</th>
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
                          <p class="cmp-font fnt-14">카드번호<span class="ml-8 line">3300129491868777</span></p>
                        </div>
                      </div>
                      <div class="card-content">
                        <v-img src="/images/egiftcard/card2.png" alt="" class="img"></v-img>
                        <!-- [퍼블수정]22.12.01 -->
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
                    <td class="text-center pw-16"></td><!-- [퍼블수정]22.10.11 -->
                  </tr>
                  <tr>
                    <td class="pw-0">
                      <div class="order-number-box no-line pb-4">
                        <div class="line-box">
                          <p class="cmp-font fnt-14">카드번호<span class="ml-8 line">3300129491868777</span></p>
                        </div>
                      </div>
                      <div class="card-content">
                        <v-img src="/images/egiftcard/card2.png" alt="" class="img"></v-img>
                        <!-- [퍼블수정]22.12.01 -->
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
                    <td class="text-center pw-16"><!-- [퍼블수정]22.10.11 -->
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
              <table class="table-type1">
                <colgroup>
                  <col width="auto" />
                  <col width="248px" />
                  <col width="158px" />
                  <col width="128px" />
                </colgroup>
                <thead>
                  <tr>
                    <th>카드정보</th>
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
                          <p class="cmp-font fnt-14">카드번호<span class="ml-8 line">3300129491868777</span></p>
                        </div>
                      </div>
                      <div class="card-content">
                        <v-img src="/images/egiftcard/card2.png" alt="" class="img"></v-img>
                        <!-- [퍼블수정]22.12.01 -->
                        <div class="cmp-labels">
                          <span class="label" style="background-color:#000;border-color:#000;color:#fff">EXCLUSIVE</span>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <strong>20,000</strong><span class="mr-2 ml-2">/</span><span class="cmp-font c-gray">100,000</span><span class="cmp-font c-gray ml-2">P</span><!-- [퍼블수정]22.10.11 -->
                    </td>
                    <td class="text-center">
                      <p class="cmp-font c-gray">유효기간만료</p><!-- [퍼블수정]22.10.11 -->
                    </td>
                    <td class="text-center pw-16"><!-- [퍼블수정]22.10.11 -->
                      <div class="btns">
                        <v-btn outlined small color="primary">잔액환불</v-btn><!-- [퍼블수정]22.10.11 -->
                        <v-btn to="emoney" outlined small color="primary">1:1 문의</v-btn>
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
          <!-- //기간만료 -->
        </v-tabs-items>

        <ProductListPaging />

        <v-expansion-panels accordion class="cmp-acc acc-type2">
          <v-expansion-panel>
            <v-expansion-panel-header>e-money 안내
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
</template>

<script>
import ContentsLeftMenu from '~/components/common/ContentsLeftMenu'
export default {
  components: {
    ContentsLeftMenu
  },
  layout: 'LayoutBasics',
  data: () => ({
    tabs:2,
    tabsub : null
  }),
  created() {
    const me = this
    const json = require('~/static/json/mypage_left_menu.json')
    me.menuList = json.list
  },
  methods: {
  
  },
}
</script>
<style lang="scss" scoped>
 @import '@/assets/scss/pages/member.scss'; 
</style>
