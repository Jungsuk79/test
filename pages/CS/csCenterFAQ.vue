<template>
  <div class="contents contents-type2">
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'고객센터'" :left-data="menuList" :page-class="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="cs-faq">
            <div class="cmp-page-tit">
              <h2 class="tit">자주 묻는 질문</h2>
            </div>
            <div class="cmp-form-searchBox">
              <v-text-field label="궁금한 점이 있다면 검색해 보세요" clearable class="cmp-form-input"></v-text-field>
              <v-btn icon>
                <i class="cmp-icon i-search">검색</i>
              </v-btn>
            </div>
            <div class="cmp-tabs tab-wrapType column06 my-30"><!-- [퍼블수정]23.02.07 -->
              <v-tabs fixed-tabs @change="accodionReset()"><!--  221128 faq : change 이벤트 추가 -->
                <v-tab>전체</v-tab>
                <v-tab>주문배송</v-tab>
                <v-tab>결제환불</v-tab>
                <v-tab>교환반품</v-tab>
                <v-tab>쿠폰혜택</v-tab>
                <v-tab>상품문의</v-tab>
                <v-tab>더플러스⁺ 멤버십</v-tab>
                <v-tab>사이트이용</v-tab>
                <v-tab>기타</v-tab>
              </v-tabs>
            </div>
            <div class="product-row-table"><!-- 220914 고객센터 수정 -->
              <table>
                <colgroup>
                  <col width="88px" />
                  <col width="auto" />
                  <col width="48px"/>
                </colgroup>
                <thead>
                  <tr>
                    <th class="pw-16">유형</th>
                    <th class="pw-16">제목</th>
                    <th class="pw-0"><span class="ir">접기</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="3"  class="inside-table">
                      <v-expansion-panels v-model="faqAccodian" accordion class="cmp-acc"><!-- 221128 faq : v-model 추가 -->
                        <v-expansion-panel v-for="n in 20" :key="n">
                          <v-expansion-panel-header>
                            <table>
                              <colgroup>
                                <col width="88px"/>
                                <col width="auto"/>
                                <col width="48px"/>
                              </colgroup>
                              <tbody>
                                <tr>
                                  <td class="pw-16 pr-0"><!-- [퍼블수정]22.12.01 -->
                                    <div class="cmp-labels">
                                      <span class="label black">주문배송</span>
                                    </div>
                                  </td>
                                  <td class="text-left">
                                    <!--20221024 P태그 추가-->
                                    <p>[퀵배송] 서울이 아닌 지역에서 퀵배송을 받고 싶어요</p>
                                  </td>
                                  <td class="pw-0"></td>
                                </tr>
                              </tbody>
                            </table>
                            <template #actions>
                              <i class="cmp-icon-etc cmp-icon-down">열기/닫기</i>
                            </template>
                          </v-expansion-panel-header>
                          <v-expansion-panel-content class="text-left">
                            죄송합니다. 고객님, 현재 퀵배송 서비스 대상지역은 서울 지역에서만 진행되고있습니다. 불편하시더라도 다른 배송서비스를 이용 부탁드립니다.<br />
                            (전국권 배송서비스 : 4PM/매장수령 서비스)<br /><br />

                            답변이 충분하지 않으셨다면 1:1 문의를 이용해주세요.
                            <div class="shortcut">
                              <nuxt-link to="#none" class="underline">1:1 문의 바로가기</nuxt-link>
                            </div>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>
                    </td>
                  </tr>
                  <!-- 결과없음 -->
                  <!-- <tr class="nodata">
                    <td colspan="2">
                      <CommonNoData msg="검색결과가 없습니다.">
                        <div slot="button">
                          <v-btn outlined large>1:1 문의</v-btn>
                        </div>
                      </CommonNoData>
                    </td>
                  </tr> -->
                  <!-- //결과없음 -->
                </tbody>
              </table>
            </div>
            <div class="mt-40">
              <ProductListPaging />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'LayoutBasics',
  data: () => ({
    faqAccodian : null, // 221128 faq : 추가
  }),
  created() {
    const me = this
    const json = require('~/static/json/cs_left_menu.json')
    me.menuList = json.list
  },
  methods:{
    accodionReset(){ // 221128 faq : 추가
      this.faqAccodian = null
    }
  }  
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/cs.scss';
</style>
