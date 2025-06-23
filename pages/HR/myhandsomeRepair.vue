<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <ContentsLeftMenu :title="'마이페이지'" :left-data="menuList" :active="'/ko/HR/handsomeRepair'"></ContentsLeftMenu>

      <div class="my-page-r-box hansomecare-application">
        <div class="cmp-page-tit line main-tit"><!-- [퍼블수정]22.12.01 -->
          <h2 class="tit">마이 케어플러스 수선</h2><!-- [퍼블수정]23.01.06 -->
          <div class="btn-right">
            <nuxt-link class="cmp-font button" to="#n">케어플러스 수선 서비스 안내<i class="cmp-icon cmp-icon-12 i-next"></i></nuxt-link>
          </div>
        </div>

        <div class="cmp-tabs tabs-actionTop mb-30">
          <v-tabs v-model="tabs" fixed-tabs>
            <v-tab>진행내역</v-tab>
            <v-tab>이용내역</v-tab>
          </v-tabs>
        </div>

        <div class="tab-content">
          <v-tabs-items v-model="tabs" touchless>
            <!--진행내역-->
            <v-tab-item :transition="false">
              <div class="table-wrap">
                <table class="repairTable table-type1 last-border">
                  <colgroup>
                    <col width="128px" />
                    <col width="128px" />
                    <col width="auto" />
                    <col width="158px" />
                    <col width="128px" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>수선번호</th>
                      <th>신청일</th>
                      <th>상품정보</th>
                      <th>진행상태</th>
                      <th>배송/결제</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-center">
                        <p class="cmp-font"><nuxt-link to="#n" class="line">22011244</nuxt-link></p>
                      </td>
                      <td class="text-center">2022.03.03</td>
                      <td class="text-left">TM2C0QOT001WM1BK90</td>
                      <td class="text-center"><p class="cmp-font c-blue">접수</p></td>
                      <td class="pw-16">
                        <v-btn outlined small color="primary" width="96" class="gray-outlined">접수취소</v-btn>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-center">
                        <p class="cmp-font"><nuxt-link to="#n" class="line">22011244</nuxt-link></p>
                      </td>
                      <td class="text-center">2022.03.03</td>
                      <td class="text-left">TM2C0QOT001WM1BK90</td>
                      <td class="text-center"><p class="cmp-font c-blue">접수</p></td>
                      <td class="pw-16">
                        <v-btn outlined small color="primary" width="96" class="gray-outlined">배송조회</v-btn>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-center">
                        <p class="cmp-font"><nuxt-link to="#n" class="line">22011244</nuxt-link></p>
                      </td>
                      <td class="text-center">2022.03.05</td>
                      <td class="text-left">SJSJ 레터링 데님 집업 드레스</td>
                      <td class="text-center">
                        <p class="cmp-font c-blue">수선진행중</p>
                        <p class="cmp-font c-gray">2022.01.17</p>
                      </td>
                      <td class="pw-16">&nbsp;</td>
                    </tr>
                    <tr>
                      <td class="text-center">
                        <p class="cmp-font"><nuxt-link to="#n" class="line">22011244</nuxt-link></p>
                      </td>
                      <td class="text-center">2022.03.03</td>
                      <td class="text-left">TM2C0QOT001WM1BK90</td>
                      <td class="text-center">
                        <p class="cmp-font c-blue">결제요청</p>
                        <p class="cmp-font c-gray">2022.01.17</p>
                      </td>
                      <td class="pw-16">
                        <p class="cmp-font fnt-14 mb-4"><strong>12,345,678</strong> 원</p>
                        <v-btn outlined small color="primary" width="96" class="gray-outlined">결제하기</v-btn>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-center">
                        <p class="cmp-font"><nuxt-link to="#n" class="line">22011244</nuxt-link></p>
                      </td>
                      <td class="text-center">2022.03.03</td>
                      <td class="text-left">TM2C0QOT001WM1BK90</td>
                      <td class="text-center">
                        <p class="cmp-font c-blue">결제완료</p>
                        <p class="cmp-font c-gray">2022.01.17</p>
                      </td>
                      <td class="pw-16">&nbsp;</td>
                    </tr>
                    <tr>
                      <td class="text-center">
                        <p class="cmp-font"><nuxt-link to="#n" class="line">22011244</nuxt-link></p>
                      </td>
                      <td class="text-center">2022.03.03</td>
                      <td class="text-left">TM2C0QOT001WM1BK90</td>
                      <td class="text-center">
                        <p class="cmp-font c-blue">결제완료</p>
                        <p class="cmp-font c-gray">2022.01.17</p>
                      </td>
                      <td class="text-center">수선비 무료</td>
                    </tr>
                    <tr>
                      <td class="text-center">
                        <p class="cmp-font"><nuxt-link to="#n" class="line">22011244</nuxt-link></p>
                      </td>
                      <td class="text-center">2022.03.03</td>
                      <td class="text-left">TM2C0QOT001WM1BK90</td>
                      <td class="text-center"><p class="cmp-font c-blue">배송중</p></td>
                      <td class="pw-16">
                        <v-btn outlined small color="primary" width="96" class="gray-outlined">배송조회</v-btn>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-center">
                        <p class="cmp-font"><nuxt-link to="#n" class="line">22011244</nuxt-link></p>
                      </td>
                      <td class="text-center">2022.03.03</td>
                      <td class="text-left">TM2C0QOT001WM1BK90</td>
                      <td class="text-center">
                        <p class="cmp-font c-blue">환불접수</p>
                        <p class="cmp-font c-gray">2022.01.17</p>
                      </td>
                      <td class="pw-16">&nbsp;</td>
                    </tr>
                    <tr>
                      <td class="text-center">
                        <p class="cmp-font"><nuxt-link to="#n" class="line">22011244</nuxt-link></p>
                      </td>
                      <td class="text-center">2022.03.03</td>
                      <td class="text-left">TM2C0QOT001WM1BK90</td>
                      <td class="text-center">
                        <p class="cmp-font c-blue">환불진행</p>
                        <p class="cmp-font c-gray">2022.01.17</p>
                      </td>
                      <td class="pw-16">&nbsp;</td>
                    </tr>
                    <!-- [퍼블수정]22.11.30 진행 내역 없는 경우 수정 -->
                    <tr>
                      <td colspan="5" class="nodata-pw0">
                        <CommonNoData msg="현재 진행중인 내역이 없습니다."/>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <ProductListPaging class="mb-40" /><!-- [퍼블수정]22.11.30 진행 내역 없는 경우 수정 -->
              </div>
            </v-tab-item>
            <!--//진행내역-->

            <!--이용내역-->
            <v-tab-item :transition="false">
              <v-layout row align-center justify-space-between class="mb-30">
                <div class="cmp-line-radio">
                  <div class="radio-item">
                    <input id="dateRadio0" type="radio" name="dateRadio" checked />
                    <label for="dateRadio0">1주일</label>
                  </div>
                  <div class="radio-item">
                    <input id="dateRadio1" type="radio" name="dateRadio" />
                    <label for="dateRadio1">1개월</label>
                  </div>
                  <div class="radio-item">
                    <input id="dateRadio2" type="radio" name="dateRadio" />
                    <label for="dateRadio2">3개월</label>
                  </div>
                </div>
                <CommonCalendarBox />
              </v-layout>

              <div class="table-wrap">
                <table class="repairTable table-type1 last-border">
                  <colgroup>
                    <col width="128px" />
                    <col width="128px" />
                    <col width="auto" />
                    <col width="128px" />
                    <col width="128px" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>수선번호</th>
                      <th>신청일</th>
                      <th>상품정보</th>
                      <th>진행상태</th>
                      <th>배송</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-center">
                        <p class="cmp-font"><nuxt-link to="#n" class="line">22011244</nuxt-link></p>
                      </td>
                      <td class="text-center">2022.03.03</td>
                      <td class="text-left">TM2C0QOT001WM1BK90</td>
                      <td class="text-center"><p class="cmp-font c-blue">반송</p></td>
                      <td>
                        <v-btn outlined small color="primary" width="96" class="gray-outlined">배송조회</v-btn>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-center">
                        <p class="cmp-font"><nuxt-link to="#n" class="line">22011244</nuxt-link></p>
                      </td>
                      <td class="text-center">2022.03.03</td>
                      <td class="text-left">TM2C0QOT001WM1BK90</td>
                      <td class="text-center">
                        <p class="cmp-font c-blue">접수취소</p>
                        <p class="cmp-font c-gray">2022.01.17</p>
                      </td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td class="text-center">
                        <p class="cmp-font"><nuxt-link to="#n" class="line">22011244</nuxt-link></p>
                      </td>
                      <td class="text-center">2022.03.03</td>
                      <td class="text-left">TM2C0QOT001WM1BK90</td>
                      <td class="text-center"><p class="cmp-font c-blue">배송완료</p></td>
                      <td>
                        <v-btn outlined small color="primary" width="96" class="gray-outlined">배송조회</v-btn>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-center">
                        <p class="cmp-font"><nuxt-link to="#n" class="line">22011244</nuxt-link></p>
                      </td>
                      <td class="text-center">2022.03.03</td>
                      <td class="text-left">TM2C0QOT001WM1BK90</td>
                      <td class="text-center">
                        <p class="cmp-font c-blue">환불완료</p>
                        <p class="cmp-font c-gray">2022.01.17</p>
                      </td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td class="text-center">
                        <p class="cmp-font"><nuxt-link to="#n" class="line">22011244</nuxt-link></p>
                      </td>
                      <td class="text-center">2022.03.03</td>
                      <td class="text-left">TM2C0QOT001WM1BK90</td>
                      <td class="text-center">
                        <p class="cmp-font c-blue">환불완료</p>
                        <p class="cmp-font c-gray">2022.01.17</p>
                      </td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td class="text-center">
                        <p class="cmp-font"><nuxt-link to="#n" class="line">22011244</nuxt-link></p>
                      </td>
                      <td class="text-center">2022.03.03</td>
                      <td class="text-left">TM2C0QOT001WM1BK90</td>
                      <td class="text-center">
                        <p class="cmp-font c-blue">환불완료</p>
                        <p class="cmp-font c-gray">2022.01.17</p>
                      </td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td class="text-center">
                        <p class="cmp-font"><nuxt-link to="#n" class="line">22011244</nuxt-link></p>
                      </td>
                      <td class="text-center">2022.03.03</td>
                      <td class="text-left">TM2C0QOT001WM1BK90</td>
                      <td class="text-center">
                        <p class="cmp-font c-blue">환불완료</p>
                        <p class="cmp-font c-gray">2022.01.17</p>
                      </td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td class="text-center">
                        <p class="cmp-font"><nuxt-link to="#n" class="line">22011244</nuxt-link></p>
                      </td>
                      <td class="text-center">2022.03.03</td>
                      <td class="text-left">TM2C0QOT001WM1BK90</td>
                      <td class="text-center">
                        <p class="cmp-font c-blue">환불완료</p>
                        <p class="cmp-font c-gray">2022.01.17</p>
                      </td>
                      <td>&nbsp;</td>
                    </tr>
                    <!-- [퍼블수정]22.11.30 진행 내역 없는 경우 수정 -->
                    <tr>
                      <td colspan="5" class="nodata-pw0">
                        <CommonNoData msg="조회된 내역이 없습니다."/>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <ProductListPaging class="mb-40" /><!-- [퍼블수정]22.11.30 진행 내역 없는 경우 수정 -->
              </div>
            </v-tab-item>
            <!--//이용내역-->
          </v-tabs-items>
        </div>
        
        <div><!-- [퍼블수정]22.11.30 진행 내역 없는 경우 수정 -->
          <v-layout align-center justify-space-between class="mb-24">
            <p>오프라인 매장에서 수선신청하신 고객님께서는, 방문 시 발급받은 수선번호로 진행내역을 확인하실 수 있습니다.</p>
            <nuxt-link class="cmp-font fnt-13 button" to="#n"><span class="line">수선번호로 확인하기</span></nuxt-link>
          </v-layout>
          <div class="mb-20">
            <button class="cmp-font button">수선진행 및 비용안내 <i class="cmp-icon cmp-icon-12 i-next"></i></button>
          </div>
          <div class="mb-24">
            <button class="cmp-font button">품질보증 및 보상안내 <i class="cmp-icon cmp-icon-12 i-next"></i></button>
          </div>
        </div>
        
        <v-expansion-panels accordion class="cmp-acc acc-type2">
            <!--서비스 이용안내-->
            <v-expansion-panel>
            <v-expansion-panel-header class="cmp-font fnt-16">서비스 이용안내
                <template #actions>
                <i class="cmp-icon-etc cmp-icon-down">열기/닫기</i>
                </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <ul class="cmp-dotList">
                <li class="nodotType cmp-font fnt-16">이용대상</li>
                <li>케어플러스 수선 서비스는 더한섬닷컴 정회원 대상(간편회원 제외) 으로 한 서비스로 한섬의 브랜드만 신청이 가능하며, 입점상품 또는 타사 브랜드는 신청이 불가합니다.</li>
                <li>행사상품, 2년차 아울렛 상품인 경우 수선이 불가하여 반송처리 될 수 있습니다.</li>

                <li class="nodotType cmp-font fnt-16">수선</li>
                <li>의류 세탁은 제외하며, 수선 서비스만 제공합니다.</li>
                <li>보내주신 수선 상품에 대한 확인을 위해 전문 상담사가 신청 시 등록하신 연락처로 개별 연락을 드립니다.</li>
                <li>검수 과정에서 전문가의 의견에 따라 수선이 불가능하다 판단될 수 있으며, 해당 수선품은 접수 신청 주소와 동일하게 발송됩니다.</li>

                <li class="nodotType cmp-font fnt-16">수거</li>
                <li>본 서비스는 택배로 수거 신청이 가능합니다.</li>

                <li class="nodotType cmp-font fnt-16">결제</li>
                <li>보내주신 수선 상품 수선 완료 후 카카오 알림톡으로 최종 결제금액이 발송되며, 결제 완료 후 배송이 진행됩니다.</li>
                <li>택배 배송비는 수선비가 없는 경우 무료이며, 수선비가 발생시 유료입니다.</li>

                <li class="nodotType cmp-font fnt-16">배송</li>
                <li>수선 완료 후 배송은 수거 신청 주소로 발송됩니다.</li>
                <li>택배 이용시 배송과 관련된 문제의 소지는 택배사에 있으며 우체국 택배로 문의 바랍니다.</li>
                <li>보다 자세한 사항은 서비스 신청 단계의 안내와 홈페이지 하단의 서비스 이용약관을 참고해주세요.(서비스 신청 : 마이페이지 > THE서비스 > 케어플러스 수선)</li>
                <li>본 서비스는 당사의 사정으로 인해 사전 고지 없이 중단 또는 변경될 수 있습니다.</li>
                </ul>
            </v-expansion-panel-content>
            </v-expansion-panel>
            <!--//서비스 이용안내-->
        </v-expansion-panels>

        <v-layout justify-space-between class="cmp-btnsArea center-area">
          <v-btn outlined large color="primary">1:1 문의</v-btn>
          <v-btn large color="primary">서비스 신청하기</v-btn>
        </v-layout>
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
    tabs : null,
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
  @import '@/assets/scss/pages/mypage.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
