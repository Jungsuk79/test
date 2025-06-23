<template>
  <div class="contents contents-type2">
    <div class="content-wrap content-giftcard">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'마이페이지'" :left-data="menuList" :active="'/ko/GC/myeGiftCardList'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="gc-useagedetail">
            <div class="cmp-page-tit">
              <h2 class="tit">e-money 상세내역</h2><!--20221018 e-Gift : 텍스트수정 -->
            </div>
            <v-expansion-panels accordion class="cmp-acc acc-type2">
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <div class="card-info">
                    <v-img src="/images/egiftcard/messagecard3.png" alt=""></v-img>
                    <div class="details">
                      <div class="cmp-labels">
                        <span class="label" style="background-color:#000;border-color:#000;color:#fff">EXCLUSIVE</span>
                      </div>
                      <p class="cmp-font fnt-18 mt-4">항상 고마운 당신에게 보내요</p><!-- [퍼블수정]23.01.09 -->
                      <p class="cmp-font fnt-16 mt-8"><strong class="mr-2">100,000</strong>원</p><!-- [퍼블수정]22.10.11 -->
                      <p class="cmp-font fnt-14 mt-4">2021.11.17</p>
                      <p class="cmp-font fnt-16 mt-24">환불완료</p><!-- [퍼블수정]22.10.11 -->
                    </div>
                  </div>
                  <template #actions>
                    <i class="cmp-icon-etc cmp-icon-down">열기/닫기</i>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div class="panel-content">
                    <h5 class="cmp-font fnt-18">TO. 김한섬하나</h5>
                    <p class="cmp-font fnt-14 mt-10">정신없이 달려와보니 어느덧 12월이네요. 빠르게 흐른 시간 만큼 올 한해도 정말 수고 많으셨습니다. 항상 몸조심 하시고, 2022년 건강하고 행복하게 시작하시길 바라요! 소중한 분들이 더욱 생각나는 하루입니다. 한 해를 돌아보니 더한섬님께 늘 감사한 마음뿐입니다. 임인년에도 가족 모두 건강하시고 만사형통하시길 바라며, 새해에는 뜻하는 바 모두 이루시기를</p>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <div class="cmp-info info-type3 grey-box">
              <dl>
                <dt>사용 e-money</dt>
                <dd><strong class="mr-4">-810,234</strong>P</dd><!-- [퍼블수정]22.10.11 -->
              </dl>
              <dl>
                <dt>잔여 e-money</dt>
                <dd><strong class="mr-4">189,766</strong>P</dd><!-- [퍼블수정]22.10.11 -->
              </dl>
            </div>
            <div class="table-wrap mt-30">
              <table class="table-type1 last-border">
                <colgroup>
                  <col width="auto" />
                  <col width="auto" />
                  <col width="158px" />
                </colgroup>
                <thead>
                  <tr>
                    <th>주문번호</th>
                    <th>사용일</th>
                    <th>사용/환불금액</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="n in 4" :key="n">
                    <td class="text-center">
                      <nuxt-link to="" class="underline">3300129491868777</nuxt-link>
                    </td>
                    <td class="text-center">
                      2021.11.21  13:00
                    </td>
                    <td class="text-center">

                      <!-- case1 -->
                      <template v-if="n===2">
                        <p class="cmp-font c-blue"><strong class="mr-2">+30,000</strong>P</p><!-- [퍼블수정]22.10.11 -->
                      </template>

                      <!-- case2 -->
                      <template v-else>
                        <p><strong class="mr-2">-20,000</strong>P</p><!-- [퍼블수정]22.10.11 -->
                      </template>
                    </td>
                  </tr>

                  <!--20221212 내역 없을 경우-->
                  <tr>
                    <td colspan="3" class="pt-0 pb-0 pw-0">
                      <CommonNoData msg="e-money 사용 내역이 없습니다."/>
                    </td>
                  </tr>
                </tbody>
              </table>
            <div class="mt-40">
              <ProductListPaging />
            </div>
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
      tab: null,
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