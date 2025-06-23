<template>
  <div class="contents contents-type2">
    <div class="content-wrap content-giftcard">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'마이페이지'" :left-data="menuList"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="my-giftlist">
            <div class="cmp-page-tit">
              <h2 class="tit">e-Gift Card 선물내역</h2>
            </div> 
            <div class="cmp-tabs tabs-actionTop top-tab">
              <v-tabs fixed-tabs>
                <v-tab>1주일</v-tab>
                <v-tab>1개월</v-tab>
                <v-tab>3개월</v-tab>
              </v-tabs>
            </div>
            <div class="table-wrap">
              <div class="order-number-box no-line">
                <div class="line-box"><!-- [퍼블수정] 22.10.31 선택 시 상세 페이지로 이동 -->
                  <nuxt-link class="cmp-font fnt-14" to="#n">주문번호<span class="ml-8 line">211222P12345678</span></nuxt-link>
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
                    <th>주문상태</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="user"><!-- [퍼블수정]22.10.11 -->
                    <td class="pw-0">
                      <p class="cmp-font fnt-16">더한섬님 외 1명</p>
                    </td>
                    <td class="text-center">
                      &nbsp;
                    </td>
                    <td class="text-center">
                      &nbsp;
                    </td>
                  </tr><!-- // [퍼블수정]22.10.11 -->
                  <tr v-for="n in 2" :key="n">
                    <td class="pw-0">
                      <!-- case1 -->
                      <!-- [퍼블수정]22.10.11  위치 변경 -->
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
                      <strong class="mr-2">100,000</strong>원
                    </td>
                    <td class="text-center">

                      <!-- case1 -->
                      <template v-if="n===1"><!-- [퍼블수정]22.10.11 -->
                        <p class="cmp-font fnt-14">주문취소</p>
                        <p class="cmp-font fnt-13 c-gray mt-4">2021.09.15</p>
                      </template>

                      <!-- case2 -->
                      <template v-else><!-- [퍼블수정]22.10.11 -->
                        <p class="cmp-font fnt-14 c-blue">주문완료</p>
                      </template>
                      
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-wrap">
              <div class="order-number-box no-line">
                <div class="line-box"><!-- [퍼블수정] 22.10.28 선택 시 상세 페이지로 이동 -->
                  <nuxt-link class="cmp-font fnt-14" to="#n">주문번호<span class="ml-8 line">211222P12345678</span></nuxt-link>
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
                    <th>주문상태</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="user"><!-- [퍼블수정]22.10.11 -->
                    <td class="pw-0">
                      <p class="cmp-font fnt-16">더한섬님 외 1명</p>
                    </td>
                    <td class="text-center">
                      &nbsp;
                    </td>
                    <td class="text-center">
                      &nbsp;
                    </td>
                  </tr><!-- // [퍼블수정]22.10.11 -->
                  <tr>
                    <td class="pw-0">
                      <!-- [퍼블수정]22.10.11  위치 변경 -->
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
                    <td class="text-center"><!-- [퍼블수정]22.10.11 -->
                      <p class="cmp-font fnt-14">주문취소</p>
                      <p class="cmp-font fnt-13 c-gray mt-4">2021.09.15</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ProductListPaging />
            <div class="btm-notice"><!-- [퍼블수정]22.10.11 -->
              <ul class="cmp-dotList">
                <li>e-Gift Card 선물내역은 3개월(93일) 보관됩니다.</li>
                <li>e-Gift Card 재발송은 1회까지만 가능합니다.</li>
              </ul>
              <nuxt-link class="cmp-font button mt-20" to="#n">e-Gift Card 선물하러 가기 <i class="cmp-icon cmp-icon-12 i-next"></i></nuxt-link>
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