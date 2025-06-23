<template>
  <div class="contents contents-type2">
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'고객센터'" :left-data="menuList" :page-class="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="cs-main">
            <div class="cmp-page-tit">
              <h2 class="tit">고객센터</h2>
            </div>
            <section class="section">
              <div class="top-box">
                <p>안녕하세요, 한섬 고객센터입니다. 무엇을 도와드릴까요?</p>
                <div class="flex-wrap">
                  <div class="left">
                    <div class="tel">1800-5700<span>유료</span></div>
                    <p class="text">평일 월~금 09:00~18:00 토/일, 공휴일 휴무<span class="cmp-font fnt-12 mr-8 ml-8 c-gray">|</span>shophelp@thehandsome.com</p><!-- 220914 고객센터 수정 -->
                  </div>
                  <div class="right">
                    <v-layout align-center class="btns">
                      <nuxt-link to="#none">
                        <i v-cmp-icon="{ size: '18', name: 'volumeOn' }">volumeOn</i>
                        고객의 소리
                      </nuxt-link>
                      <nuxt-link to="#none">
                        <img src="/images/cs/ico-18-chat.svg" alt="" />
                        1:1 문의
                      </nuxt-link>
                    </v-layout>
                  </div>
                </div>
              </div>
              <div class="category-menu">
                <nuxt-link to="">
                  자주 묻는 질문
                  <img src="/images/cs/menu5.svg" alt="">
                </nuxt-link>
                <nuxt-link to="">
                  매장안내
                  <img src="/images/cs/menu4.svg" alt="">
                </nuxt-link>
                <nuxt-link to="">
                  온라인 멤버십 혜택
                  <img src="/images/cs/menu3.svg" alt="">
                </nuxt-link>
                <nuxt-link to="">
                  이메일 문의
                  <img src="/images/cs/menu2.svg" alt="">
                </nuxt-link>
                <!--2022.11.21 챗봇제거 <nuxt-link to="">
                  상담 챗봇 하이<br />(HAAi)
                  <img src="/images/cs/menu1.svg" alt="">
                </nuxt-link> -->
              </div>
            </section>
            <section class="section">
              <div class="cmp-sub-tit">
                <h3 class="tit">공지사항</h3>
                <nuxt-link class="cmp-font button fnt-16" to="#n">전체보기<i class="cmp-icon cmp-icon-16 i-next"></i></nuxt-link>
              </div>
              <table class="table-type1 last-border">
                <colgroup>
                  <col width="*" />
                  <col width="138px" />
                </colgroup>
                <thead>
                  <tr>
                    <th class="pw-16">제목</th>
                    <th>등록일</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- 상단고정 -->
                  <tr v-for="n in 3" :key="n">
                    <td class="text-left">
                      <nuxt-link to="">
                        <div class="cmp-info info-type2">
                          <p>더한섬닷컴 고객센터 상담문의 안내(하니톡 채팅상담 일시 중단)</p>
                        </div>
                      </nuxt-link>
                    </td>
                    <td class="text-center">
                      2022.11.16
                    </td>
                  </tr>
                  <!-- //상단고정 -->
                  <tr v-for="n in 2" :key="n">
                    <td class="text-left">
                      <nuxt-link to="">
                        [당첨자발표] 핸썸TV 라이브 방송(11/25) 방송 중 이벤트 당첨 결과 안내
                      </nuxt-link>
                    </td>
                    <td class="text-center">
                      2022.11.16
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section class="section faq">
              <div class="cmp-sub-tit">
                <h3 class="tit">자주 묻는 질문 Top5</h3>
                <nuxt-link class="cmp-font button fnt-16" to="#n">전체보기<i class="cmp-icon cmp-icon-16 i-next"></i></nuxt-link>
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
                        <v-expansion-panels accordion class="cmp-acc">
                          <v-expansion-panel v-for="n in 5" :key="n">
                            <v-expansion-panel-header>
                              <table>
                                <colgroup>
                                  <col width="88px"/>
                                  <col width="auto"/>
                                  <col width="48px"/>
                                </colgroup>
                                <tbody>
                                  <tr>
                                    <td class="pw-16">
                                      <div class="cmp-labels">
                                        <span class="label black">주문배송</span>
                                      </div>
                                    </td>
                                    <td class="text-left">
                                      [퀵배송] 서울이 아닌 지역에서 퀵배송을 받고 싶어요
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
                  </tbody>
                </table>
              </div>
            </section>
            <section class="section detail-manu">
              <ul class="depth1">
                <li>
                  <h5>한섬 회원 혜택</h5>
                  <ul class="depth2 column">
                    <li><nuxt-link to="">온라인 멤버십 혜택</nuxt-link></li>
                    <li><nuxt-link to="">한섬 VVIP 혜택</nuxt-link></li>
                  </ul>
                </li>
                <li>
                  <h5>서비스 소개</h5>
                  <ul class="depth2">
                    <li><nuxt-link to="">스타일라이브</nuxt-link></li>
                    <!-- [퍼블수정]23.02.13 더플러스 삭제 -->
                    <li><nuxt-link to="">취향의 발견</nuxt-link></li>
                    <li><nuxt-link to="">나의 옷장</nuxt-link></li>
                    <li><nuxt-link to="">선물하기</nuxt-link></li>
                    <!-- 240612_나의사이즈 서비스 종료 제거 -->
                    <!-- <li><nuxt-link to="">나의 사이즈</nuxt-link></li> -->
                    <li><nuxt-link to="">케어플러스 세탁</nuxt-link></li>
                    <li><nuxt-link to="">케어플러스 수선</nuxt-link></li>
                  </ul>
                </li>
                <li>
                  <h5>쇼핑 가이드</h5>
                  <ul class="depth2">
                    <li><nuxt-link to="">한섬마일리지</nuxt-link></li>
                    <li><nuxt-link to="">쿠폰</nuxt-link></li>
                    <li><nuxt-link to="">주문/결제</nuxt-link></li>
                    <li><nuxt-link to="">배송</nuxt-link></li>
                    <li><nuxt-link to="">교환/반품/환불</nuxt-link></li>
                    <li><nuxt-link to="">딜리버리 서비스</nuxt-link></li>
                  </ul>
                </li>
              </ul>
            </section>
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

  }),
  created() {
    const me = this
    const json = require('~/static/json/cs_left_menu.json')
    me.menuList = json.list
  },  
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/cs.scss';
</style>
