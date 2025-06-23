<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <ContentsLeftMenu :title="'마이페이지'" :left-data="menuList" :active="'/ko/HC/handsomeCare'"></ContentsLeftMenu>

      <div class="my-page-r-box hansomecare-application">
        <div class="cmp-page-tit pb-0">
          <h2 class="tit">마이 케어플러스 세탁</h2><!-- [퍼블수정]23.02.08 터이틀 수정 -->
        </div>
        <div class="popup-btn text-right mt-6 mb-10"><!-- [퍼블수정]22.12.29 -->
          <button class="cmp-font button">케어플러스 세탁 서비스 안내<i class="cmp-icon cmp-icon-12 i-next"></i></button>
        </div>

        <div class="hc-couponBox">
          <div class="contents-coupon-list">
            <div v-for="(item,index) in couponList" :key="index" class="coupon-box">
              <p class="coupon-price">
                <span class="number">{{ item.title }}</span>
                <span v-if="item.titleTag!==''" class="won">{{ item.titleTag }}</span>
              </p>
              <p class="coupon-name">
                <span>{{ item.con }}</span>
              </p>
              <div class="coupon-sub">
                {{ item.text }}
                <!-- 툴팁 -->
                <CommonTooltipBox cover-none
                  icon-type ="info" >
                  <template #content class="disabled">
                    <div class="text-left vouchseTooltip">
                      <p class="cmp-font fnt-12 text-left mb-12">한섬케어세탁 바우처</p><!-- [퍼블수정]22.11.30 바우처 확인 수정 -->
                      <div v-for="item,idx in 2" :key="idx" class="cmp-info info-type3">
                        <p v-if="idx === 0" class="cmo-font">
                          <strong>3장</strong><span>THE 클럽 VIP 세탁 바우처</span><span>22.06.30까지</span><!--20221223 텍스트변경 -->
                        </p>
                        <p v-if="idx === 1" class="cmo-font">
                          <strong>3장</strong><span>더플러스+ 세탁 바우처</span><span>22.06.30까지</span><!--20221223 텍스트변경 -->
                        </p>
                      </div>
                      <p class="sub-text">사용완료 및 유효기간 만료 바우처 확인은<br> 
                        <nuxt-link class="cmp-font fnt-14 button" to="#n"><span class="line">마이페이지 > 쿠폰함</span></nuxt-link>에서 확인하실 수 있습니다.<br>(사용 및 완료일로부터 1개월간) </p>
                    </div>
                  </template>
                </CommonTooltipBox> 
              </div>
            </div>
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
                <table class="table-type1 last-border">
                  <colgroup>
                    <col width="128px" />
                    <col width="128px" />
                    <col width="auto" />
                    <col width="128px" />
                    <col width="128px" />
                    <col width="128px" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>신청번호</th>
                      <th>신청일</th>
                      <th>상품정보</th>
                      <th>수거/수령</th>
                      <th>진행상태</th>
                      <th class="pw-16">배송/결제</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- [퍼블리싱]240110 케어플러스 세탁 THE STAR 전용 보관 서비스 -->
                    <tr>
                      <td class="text-center">
                        <p class="cmp-font"><nuxt-link to="#n" class="line">22011244</nuxt-link></p>
                      </td>
                      <td class="text-center">2022.03.03</td>
                      <td class="text-left">TM2C0QOT001WM1BK90</td>
                      <td class="text-center">택배</td>
                      <td class="text-center">
                        <p class="cmp-font c-blue">보관중</p>
                        </td>
                      <td class="pw-16">&nbsp;</td>
                    </tr>
                    <!-- // [퍼블리싱]240110 케어플러스 세탁 THE STAR 전용 보관 서비스 -->
                    <tr>
                      <td class="text-center">
                        <p class="cmp-font"><nuxt-link to="#n" class="line">22011244</nuxt-link></p>
                      </td>
                      <td class="text-center">2022.03.03</td>
                      <td class="text-left">TM2C0QOT001WM1BK90</td>
                      <td class="text-center">택배</td>
                      <td class="text-center"><p class="cmp-font c-blue">접수</p></td>
                      <td class="pw-16">
                        <v-btn outlined small color="primary" width="96" class="gray-outlined">접수취소</v-btn>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-center">
                        <p class="cmp-font"><nuxt-link to="#n" class="line">22011244</nuxt-link></p>
                      </td>
                      <td class="text-center">2022.03.05</td>
                      <td class="text-left">SYSTEM 반코트, 패딩반코트 외 2개</td>
                      <td class="text-center">매장방문</td>
                      <td class="text-center">
                        <p class="cmp-font c-blue">접수</p>
                        </td>
                      <td class="pw-16">&nbsp;</td>
                    </tr>
                    <!-- [퍼블수정]23.02.17 결제 삭제 -->
                    <!-- <tr>
                      <td class="text-center">
                        <p class="cmp-font"><nuxt-link to="#n" class="line">22011244</nuxt-link></p>
                      </td>
                      <td class="text-center">2022.03.03</td>
                      <td class="text-left">TM2C0QOT001WM1BK90 외 2개</td>
                      <td class="text-center">앳홈</td>
                      <td class="text-center">
                        <p class="cmp-font c-blue">결제요청</p>
                        <p class="cmp-font c-gray">2022.01.17</p>
                      </td>
                      <td class="pw-16">
                        <p class="cmp-font fnt-14 mb-4"><strong>12,345,678</strong> 원</p>
                        <v-btn outlined small color="primary" width="96" class="gray-outlined">결제하기</v-btn>
                      </td>
                    </tr> -->
                    <tr>
                      <td class="text-center">
                        <p class="cmp-font"><nuxt-link to="#n" class="line">22011244</nuxt-link></p>
                      </td>
                      <td class="text-center">2022.03.03</td>
                      <td class="text-left">TM2C0QOT001WM1BK90 외 2개</td>
                      <td class="text-center">택배</td>
                      <td class="text-center"><p class="cmp-font c-blue">배송중</p></td>
                      <td class="pw-16">
                        <v-btn outlined small color="primary" width="96" class="gray-outlined">배송조회</v-btn>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-center">
                        <p class="cmp-font"><nuxt-link to="#n" class="line">22011244</nuxt-link></p>
                      </td>
                      <td class="text-center">2022.03.05</td>
                      <td class="text-left">SYSTEM 반코트, 패딩반코트 외 2개</td>
                      <td class="text-center">매장방문</td>
                      <td class="text-center">
                        <p class="cmp-font c-blue">접수</p>
                        </td>
                      <td class="pw-16">&nbsp;</td>
                    </tr>
                    <!-- [퍼블수정]23.02.17 결제 삭제 -->
                    <tr>
                      <td class="text-center">
                        <p class="cmp-font"><nuxt-link to="#n" class="line">22011244</nuxt-link></p>
                      </td>
                      <td class="text-center">2022.03.03</td>
                      <td class="text-left">TM2C0QOT001WM1BK90 외 2개</td>
                      <td class="text-center">택배</td>
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
                      <td class="text-left">TM2C0QOT001WM1BK90 외 2개</td>
                      <td class="text-center">택배</td>
                      <td class="text-center"><p class="cmp-font c-blue">배송중</p></td>
                      <td class="pw-16">
                        <v-btn outlined small color="primary" width="96" class="gray-outlined">배송조회</v-btn>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-center">
                        <p class="cmp-font"><nuxt-link to="#n" class="line">22011244</nuxt-link></p>
                      </td>
                      <td class="text-center">2022.03.05</td>
                      <td class="text-left">SYSTEM 반코트, 패딩반코트 외 2개</td>
                      <td class="text-center">매장방문</td>
                      <td class="text-center">
                        <p class="cmp-font c-blue">세탁진행중</p>
                        <p class="cmp-font c-gray">2022.01.17</p>
                        </td>
                      <td class="pw-16">&nbsp;</td>
                    </tr>
                    <!-- [퍼블수정]22.11.30 진행 내역 없는 경우 수정 -->
                    <tr>
                      <td colspan="6" class="nodata-pw0">
                        <CommonNoData msg="현재 진행중인 내역이 없습니다."/>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <ProductListPaging class="mb-24" /><!-- [퍼블수정]22.11.30 진행 내역 없는 경우 수정 -->
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
                <table class="table-type1 last-border">
                  <colgroup>
                    <col width="128px" />
                    <col width="128px" />
                    <col width="auto" />
                    <col width="128px" />
                    <col width="128px" />
                    <col width="128px" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>신청번호</th>
                      <th>신청일</th>
                      <th>상품정보</th>
                      <th>수거/수령</th>
                      <th>진행상태</th>
                      <th class="pw-16">배송</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-center">
                        <p class="cmp-font"><nuxt-link to="#n" class="line">22011244</nuxt-link></p>
                      </td>
                      <td class="text-center">2022.03.03</td>
                      <td class="text-left">TM2C0QOT001WM1BK90</td>
                      <td class="text-center">택배</td>
                      <td class="text-center"><p class="cmp-font c-blue">접수</p></td>
                      <td class="pw-16">
                        <v-btn outlined small color="primary" width="96" class="gray-outlined">접수취소</v-btn>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-center">
                        <p class="cmp-font"><nuxt-link to="#n" class="line">22011244</nuxt-link></p>
                      </td>
                      <td class="text-center">2022.03.05</td>
                      <td class="text-left">SYSTEM 반코트, 패딩반코트 외 2개</td>
                      <td class="text-center">매장방문</td>
                      <td class="text-center">
                        <p class="cmp-font c-blue">접수</p>
                        <p class="cmp-font c-gray">2022.01.17</p>
                        </td>
                      <td class="pw-16">&nbsp;</td>
                    </tr>
                    <!-- [퍼블수정]23.02.17 결제 삭제 -->
                    <tr>
                      <td class="text-center">
                        <p class="cmp-font"><nuxt-link to="#n" class="line">22011244</nuxt-link></p>
                      </td>
                      <td class="text-center">2022.03.03</td>
                      <td class="text-left">TM2C0QOT001WM1BK90 외 2개</td>
                      <td class="text-center">택배</td>
                      <td class="text-center"><p class="cmp-font c-blue">배송중</p></td>
                      <td class="pw-16">
                        <v-btn outlined small color="primary" width="96" class="gray-outlined">배송조회</v-btn>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-center">
                        <p class="cmp-font"><nuxt-link to="#n" class="line">22011244</nuxt-link></p>
                      </td>
                      <td class="text-center">2022.03.05</td>
                      <td class="text-left">SYSTEM 반코트, 패딩반코트 외 2개</td>
                      <td class="text-center">매장방문</td>
                      <td class="text-center">
                        <p class="cmp-font c-blue">접수</p>
                        <p class="cmp-font c-gray">2022.01.17</p>
                        </td>
                      <td class="pw-16">&nbsp;</td>
                    </tr>
                    <!-- [퍼블수정]23.02.17 결제 삭제 -->
                    <tr>
                      <td class="text-center">
                        <p class="cmp-font"><nuxt-link to="#n" class="line">22011244</nuxt-link></p>
                      </td>
                      <td class="text-center">2022.03.03</td>
                      <td class="text-left">TM2C0QOT001WM1BK90 외 2개</td>
                      <td class="text-center">택배</td>
                      <td class="text-center"><p class="cmp-font c-blue">배송중</p></td>
                      <td class="pw-16">
                        <v-btn outlined small color="primary" width="96" class="gray-outlined">배송조회</v-btn>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-center">
                        <p class="cmp-font"><nuxt-link to="#n" class="line">22011244</nuxt-link></p>
                      </td>
                      <td class="text-center">2022.03.05</td>
                      <td class="text-left">SYSTEM 반코트, 패딩반코트 외 2개</td>
                      <td class="text-center">매장방문</td>
                      <td class="text-center">
                        <p class="cmp-font c-blue">접수</p>
                        </td>
                      <td class="pw-16">&nbsp;</td>
                    </tr>
                    <!-- [퍼블수정]22.11.30 진행 내역 없는 경우 수정 -->
                    <tr>
                      <td colspan="6" class="nodata-pw0">
                        <CommonNoData msg="조회된 내역이 없습니다."/>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <ProductListPaging class="mb-24" /><!-- [퍼블수정]22.11.30 진행 내역 없는 경우 수정 -->
              </div>
            </v-tab-item>
            <!--//이용내역-->
          </v-tabs-items>
        </div>
        <!-- [퍼블수정]22.11.30 진행 내역 없는 경우 수정 -->
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
                <!-- [퍼블수정]23.02.17 세탁 내용 수정 -->
                <li>케어플러스 세탁 서비스는 더한섬닷컴 회원 대상(간편회원 제외)입니다.</li>
                <li>무료 바우처는 THE STAR/STAR 등급별 3장/2장 바우처를 드리며, 더플러스<sup>+</sup> 멤버십 가입시 정책에 따라서 바우처가 제공됩니다.</li><!-- [퍼블수정] 22.10.20 문구 수정 -->
                <li>바우처 1장은 의류 1개로 취급하며, 한 번 신청 시 여러 횟수 사용도 가능합니다.</li>
                <li><span class="cmp-font bold fnt-14">온라인 등급의 혜택 제공 마지막 달과 선정 달</span>에는 신청자가 증가함에 따라, <span class="cmp-font bold fnt-14">세탁 진행 기간이 다소 지연</span>될 수 있습니다. (약 2주 이상 소요)</li>
                <li>한섬 브랜드 외 입점 브랜드 및 타사브랜드는 신청이 불가하며, <span class="cmp-font bold fnt-14">더한섬닷컴을 통해 신청한 경우에만 적용</span>됩니다. (오프라인 매장 정책과 상이할 수 있음)</li>
                
                <li class="nodotType cmp-font fnt-16">세탁</li>
                <li>의류 수선은 제외하며, 세탁 서비스만 제공합니다.</li>
                <li>검수 과정에서 전문가의 의견에 따라 세탁이 불가능하다 판단될 수 있으며, 함께 요청하신 상품이 있으실 경우 해당 상품의 세탁이 완료된 후 함께 발송됩니다.</li>
                <li>얼룩, 털, 보풀 등의 완전한 제거는 불가 할 수 있습니다. 또한 특성과 상태에 따라 모든 얼룩을 완전히 없애지 못할 수 있으며, 이에 따른 케어플러스 세탁 바우처는 환불되지 않습니다.</li>
                <li>보내주신 세탁 상품에 대한 확인을 위해 전문 상담사가 신청 시 등록하신 연락처로 개별 연락을 드립니다.</li>

                <li class="nodotType cmp-font fnt-16">수거</li>
                <li>본 서비스는 앳홈 배송, 택배 및 매장방문으로 신청 가능하며, 신청한 것과 동일한 방식으로 발송됩니다. (예:앳홈 수거-앳홈수령 / 택배 수거 - 택배 수령 / 매장방문 수거 - 매장방문 수령)</li>
                <li>앳홈 배송 서비스 신청 시 고객님이 원하는 일시에 방문 및 수거 예정이며, 택배로 이용 시 선택하신 세탁 상품을 박스에 담아 주시면 택배사에서 수거 예정입니다.</li>
                <li>매장방문의 경우 직접 매장으로 방문하여 전달해주시면 됩니다.</li>

                <li class="nodotType cmp-font fnt-16">결제</li>
                <!-- [퍼블수정]23.02.17 세탁 내용 수정 -->
                <li>보내주신 세탁 상품 검수 후 카카오 알림톡으로 세탁 가능한 품목이 전달되며, 바우처 차감 후 세탁이 진행됩니다.</li>

                <li class="nodotType cmp-font fnt-16">배송</li>
                <li>무료 이용 대상자의 경우, 바우처 제공 되오니 선택하여 이용바랍니다.</li>
                <li>앳홈 배송 서비스 이용 시 세탁이 완료되면 전문 상담사가 배송 일정을 잡기 위해 신청 시 등록하신 연락처로 개별 연락을 드립니다.</li>
                <li>세탁 완료 후 수령은 수거 신청 주소와 동일하게 발송 됩니다.</li>
                <li>택배 이용 시 택배비는 포장박스 단위로 부과됩니다.</li>
                <li>택배 이용시 배송과 관련된 문제의 소지는 택배사에 있으며 우체국 택배로 문의 바랍니다.</li>
                <li>보다 자세한 사항은 서비스 신청 단계의 안내와 홈페이지 하단의 서비스 이용약관을 참고해주세요.<br />(서비스 신청 : 마이페이지>THE 서비스>케어플러스 세탁)</li>
                <li>본 서비스는 당사의 사정으로 인해 사전 고지 없이 중단 또는 변경될 수 있습니다.</li>
              </ul>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <!--//서비스 이용안내-->
        </v-expansion-panels>

        <button class="cmp-font button mt-20">서비스 운영정책 안내 <i class="cmp-icon cmp-icon-12 i-next"></i></button>

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
    couponList : [
      {
        title: '3',
        titleTag:'장',
        con : '케어플러스 세탁 바우처',
        text:'2022.06.05 만료예정 바우처를 확인해주세요',
      }
    ],
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
