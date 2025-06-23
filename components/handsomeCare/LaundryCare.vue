<template>
    <div class="contents-handsomecare">

    <div class="hc-bannerbox">
        <img src="/images/care/handsomecareServicebg.jpg" alt="" /><!-- [퍼블수정]22.12.05 -->
        <div class="text-box">
        <p class="cmp-font bold">더한섬닷컴만의 특별한</p>
        <p class="cmp-font fnt-30">케어플러스 세탁 서비스를 소개합니다.</p>
        <p class="cmp-font">
            이제 더한섬닷컴에서 편하게 세탁 맡기고 받아보세요.<br>
            한층 더 업그레이드된 프리미엄 세탁 서비스로 고객님의 소중한 옷을 더 특별하게
        </p>
        </div>
    </div>

    <div v-sticky-tabs="{tabMove: true}" class="service-tabs"><!-- [퍼블수정]22.12.02 -->
        <div class="fixed-tabs">
        <button target="TabCont1" class="on"><!--2022.09.14 on클래스-->
            <span>1. 신청/수거</span>
        </button>
        <button target="TabCont2">
            <span>2. 세탁 진행</span>
        </button>
        <button target="TabCont3">
            <span>3. 배송</span>
        </button>
        </div>
    </div>

    <div class="tab-content">
        <!--신청/수거-->
        <div id="TabCont1">
        <div class="text-box">
            <p class="cmp-font bold">STEP 1</p>
            <p class="cmp-font fnt-30">서비스 신청 / 수거</p>
            <p class="cmp-font">나에게 맞는 방법으로 신청하세요</p>
        </div>

        <div class="img-box">
            <img src="/images/care/handsomecareService-img.jpg" alt="" />
        </div>

        <p class="cmp-font fnt-20">신청 방법</p>
        <ul class="list-box">
            <li>
            <p class="tit"><span>01</span>수거&#47;수령 방식 선택</p>
            <p class="tit-sub">앳홈, 택배, 매장 방문(더한섬하우스) 중 원하는 방법으로 선택하세요. <span class="cmp-font fnt-14 pl-10">* 지역에 따라 상이</span>
            </p>
            </li>
            <li>
            <p class="tit"><span>02</span>세탁 상품 선택</p>
            <!-- [퍼블수정]23.02.24 결함 - 581 수정 -->
            <p class="tit-sub">
                <!-- [퍼블수정]24.01.09 세탁 서비스 안내문구 수정 -->
                더한섬닷컴 <span class="cmp-font bold">3년</span> 이내 구매내역 또는 <span class="cmp-font bold">직접선택</span>으로 신청하세요.<br />
                <span class="mt-16 cmp-font c-red fnt-14">※구매 후 3년 초과된 상품은 세탁 서비스 이용이 불가합니다.</span>
            </p>
            </li>
            <li>
            <!-- [퍼블수정]23.02.24 결함 - 581 수정 -->
            <p class="tit"><span>03</span>결제 방법</p>
            <p class="tit-sub">
                세탁물 1개당 바우처 1개가 필요합니다.<br/>
                <span class="mt-16 cmp-font c-red fnt-14">※바우처외 다른수단으로 결제가 불가능합니다.</span>
            </p>
            </li>
            <li>
            <p class="tit"><span>04</span>신청완료</p>
            <p class="tit-sub">
                신청하신 수거&#47;수령 방법에 따라 세탁하실 상품을 전달해주세요.
                <ul class="cmp-dotList mt-16">
                <li>앳홈 : 고객님이 원하는 일시에 앳홈 기사가 방문해 수거</li>
                <li>택배 : 세탁 상품을 박스에 담아 택배기사님께 전달 (신청 후 1~2일 내 방문 예정)</li>
                <li>매장방문 : 신청 후 3~5일 이내 매장으로 방문하여 직접 전달</li>
                </ul>
            </p>
            </li>
        </ul>

        <!-- [퍼블수정]23.02.24 결함 - 581 수정 -->
        <div class="contBg-box">
            <p class="cmp-font fnt-20 mb-20">바우처 제공 안내</p>
            <v-layout align-center justify-space-between>
            <div class="item">
                <p>VIP 회원 등급별 바우처 제공</p>
                <p class="cmp-font fnt-14">(THE STAR 3장 &#47; STAR 2장)</p>
                <span class="icon"><i class="cmp-icon-etc cmp-icon-64 i-vipvoucher">vipvoucher</i></span>
            </div>

            <div class="item">
                <p>더플러스<sup>+</sup> 멤버십 바우처 1장 제공</p>
                <p class="cmp-font fnt-14">(최초 가입 1회)</p>
                <span class="icon"><i class="cmp-icon-etc cmp-icon-64 i-theplus">theplus</i></span>
            </div>
            </v-layout>
        </div>
        </div>
        <!--//신청/수거-->

        <!--세탁 진행-->
        <div id="TabCont2">
        <div class="text-box">
            <p class="cmp-font bold">STEP 2</p>
            <p class="cmp-font fnt-30">결제 & 세탁</p>
            <p class="cmp-font">프리미엄 세탁으로 더 깨끗하게</p>
        </div>

        <div class="img-box">
            <img src="/images/care/handsomecareService-img2.jpg" alt="" />
        </div>

        <div class="column-box">
            <p class="cmp-font fnt-20 mb-20">세탁 진행 순서 안내</p>
            <v-layout align-start justify-space-between>
            <div class="item">
                <p class="cmp-font bold mb-10">01</p>
                <p>고객님의 세탁물을<br />검수합니다.</p>
                <span class="icon"><i class="cmp-icon-etc cmp-icon-64 i-closet">closet</i></span>
            </div>

            <!-- [퍼블수정]23.02.24 결함 - 581 수정 -->
            <div class="item">
                <p class="cmp-font bold mb-10">02</p>
                <p>세탁 가능 품목 및 최종 세탁<br/>내용을 카카오 알림톡으로<br/>안내해 드립니다.</p>
                <span class="icon"><i class="cmp-icon-etc cmp-icon-64 i-presents">presents</i></span>
            </div>

            <!-- [퍼블수정]23.02.24 결함 - 581 수정 -->
            <div class="item">
                <p class="cmp-font bold mb-10">03</p>
                <p>바우처 차감 후 세탁 시작</p>
                <span class="icon"><i class="cmp-icon-etc cmp-icon-64 i-laundy">laundy</i></span>
            </div>
            </v-layout>
        </div>

        <!-- [퍼블수정]23.02.24 결함 - 581 수정 -->
        </div>
        <!--//세탁 진행-->

        <!--배송-->
        <div id="TabCont3">
        <div class="text-box">
            <p class="cmp-font bold">STEP 3</p>
            <p class="cmp-font fnt-30">배송</p>
            <p class="cmp-font">새로워진 옷을 편하게 만나보세요</p>
        </div>

        <div class="img-box">
            <img src="/images/care/handsomecareService-img3.jpg" alt="" />
        </div>

        <div class="listInfo-box">
            <dl>
            <dt>배송 안내</dt>
            <dd>고객님이 신청하신 배송 방식으로 전달드립니다.</dd>
            <!-- [퍼블수정]23.02.24 결함 - 581 수정 -->
            <dd class="cmp-font fnt-14 mt-6">* 매장 신청은 별도 안내 날짜에 신청한 동일 매장에서 직접 픽업</dd>
            </dl>

            <dl>
            <dt>신청 가능한 아이템</dt>
            <dd>상의(티셔츠, 스웨터, 와이셔츠), 하의(팬츠, 스커트), 가디건, 조끼, 스카프, 머플러, 재킷, 원피스, 블라우스, 점퍼, 경량패딩, 파카, 반코트, 코트, 바바리, 패딩코트, 기타</dd>
            <dd class="mt-16">
                <ul class="cmp-dotList">
                <li>가죽류, 무스탕류, 밍크류, 캐시미어, 트위드 소재 및 패션잡화 품목 (슈즈, 가방, 모자, 액세서리 등)은 제외합니다.</li>
                <li>특수한 약품 처리가 된 제품은 제외합니다. (방수코팅, 고무, 비닐 제품 등)</li>
                <li>오랜 시간으로 원단이 약해지거나 찢어진 제품은 제외합니다.</li>
                <li><span class="cmp-font fnt-14 bold">의류 수선은 제외</span>하며, 세탁 서비스만 제공합니다.</li>
                <li>검수 과정에서 전문가의 의견에 따라 세탁이 불가능하다 판단될 수 있으며, 함께 요청하신 상품이 있으실 경우 해당 상품의 세탁이 완료된 후 함께 발송해드립니다.</li>
                </ul>
            </dd>
            </dl>

            <dl>
            <dt>신청 가능한 브랜드</dt>
            <dd class="brand-item">
                <span v-for="(item,index) in brandData" :key="index">{{item}}</span>
            </dd>
            <dd class="mt-16">
                <ul class="cmp-dotList">
                <!-- [퍼블수정]23.02.24 결함 - 581 수정 -->
                <li>입점 브랜드 및 타사 브랜드는 신청이 불가합니다.</li>
                </ul>
            </dd>
            </dl>
            
        </div>
        </div>
        <!--//배송-->
    </div>

    <v-expansion-panels accordion class="cmp-acc acc-type2"><!--2022.09.14 클래스추가 -->
        <!-- 믿고 맡길 수 있는 세탁 전문 업체  -->
        <!-- [퍼블수정]23.02.24 결함 - 581 수정 -->
        <!-- //믿고 맡길 수 있는 세탁 전문 업체  -->

        <!--At HOME(앳홈) 차량 배송 서비스란?-->
        <v-expansion-panel>
        <v-expansion-panel-header>At HOME(앳홈) 차량 배송 서비스란?
        <template #actions>
        <i class="cmp-icon-etc cmp-icon-down">열기/닫기</i>
        </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <p class="cmp-font mb-6">At HOME (앳홈)</p>
            <p class="cmp-font fnt-14">보다 정확하고 안전한 배송을 위해<span class="bold"> 앳홈 서비스 전용차량</span>을 운영합니다.<span class="bold"> 원하는 회수 시간대에 방문</span>하여 상품을 수거하고<br /> 세탁 완료 후 옷걸이에 건 상태로 배송해 드립니다.</p>
            <ul class="cmp-dotList mt-4">
            <!-- [퍼블수정]23.02.24 결함 - 581 수정 -->
            <li>더한섬닷컴 앳홈 서비스는 현재 서울시 강남구, 강동구, 동작구,마포구, 서초구, 송파구, 영등포구, 용산구에 한해 서비스 중입니다. (배송지 기준)</li>
            </ul>
        </v-expansion-panel-content>
        </v-expansion-panel>
        <!--//At HOME(앳홈) 차량 배송 서비스란?-->

        <!--신청 가능한 더한섬하우스 매장은?-->
        <v-expansion-panel>
            <v-expansion-panel-header>신청 가능한 더한섬하우스 매장은?
            <template #actions>
                <i class="cmp-icon-etc cmp-icon-down">열기/닫기</i>
            </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="cmp-acc-shoplist">
                <v-expansion-panels>
                    <!-- [퍼블수정]23.02.24 결함 - 581 수정 -->
                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            <v-layout justify-space-between align-center class="takemap-header">
                            <div>
                                <p class="cmp-font fnt-16 bold mb-10">더한섬하우스 부산점</p>
                                <p class="cmp-font fnt-14">부산광역시 해운대구 중동 1336-2</p>
                                <p class="cmp-font fnt-14">043-283-7572</p>
                            </div>
                            <div class="btns-group d-flex">
                                    <i v-cmp-icon="{ name: 'locoff' }">지도보기 열기</i>
                                    <i v-cmp-icon="{ name: 'locon' }">지도보기 닫기</i>
                            </div>
                            </v-layout>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <div class="area-map">
                                <v-card height="335">
                                    <div style="height:inherit;background: url('https://img.thehandsome.com/md/publish/dummy/pc/temp_map.png')  no-repeat center center / cover;"></div> <!-- 다음지도API -->
                                </v-card>
                            </div>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <!-- [퍼블수정]23.02.24 결함 - 581 수정 -->
                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            <v-layout justify-space-between align-center class="takemap-header">
                            <div>
                                <p class="cmp-font fnt-16 bold mb-10">더한섬하우스 청주점</p>
                                <p class="cmp-font fnt-14">충청북도 청주시 서원구 미평동 35-8</p>
                                <p class="cmp-font fnt-14">051-744-8515</p>
                            </div>
                            <div class="btns-group d-flex">
                                    <i v-cmp-icon="{ name: 'locoff' }">지도보기 열기</i>
                                    <i v-cmp-icon="{ name: 'locon' }">지도보기 닫기</i>
                            </div>
                            </v-layout>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <div class="area-map">
                                <v-card height="335">
                                    <div style="height:inherit;background: url('https://img.thehandsome.com/md/publish/dummy/pc/temp_map.png')  no-repeat center center / cover;"></div> <!-- 다음지도API -->
                                </v-card>
                            </div>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <!-- [퍼블수정]23.02.17 세탁 내용 수정 -->
                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            <v-layout justify-space-between align-center class="takemap-header">
                            <div>
                                <p class="cmp-font fnt-16 bold mb-10">더한섬하우스 광주점</p>
                                <p class="cmp-font fnt-14">광주광역시 광산구 수완동 672-8</p>
                                <p class="cmp-font fnt-14">062-955-8094</p>
                            </div>
                            <div class="btns-group d-flex">
                                    <i v-cmp-icon="{ name: 'locoff' }">지도보기 열기</i>
                                    <i v-cmp-icon="{ name: 'locon' }">지도보기 닫기</i>
                            </div>
                            </v-layout>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <div class="area-map">
                                <v-card height="335">
                                    <div style="height:inherit;background: url('https://img.thehandsome.com/md/publish/dummy/pc/temp_map.png')  no-repeat center center / cover;"></div> <!-- 다음지도API -->
                                </v-card>
                            </div>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
                <!--20221117 위치이동-->
                <p class="shoplist-info">* 더한섬닷컴을 통하지 않고 매장에서 직접 접수하시는 경우, 일부 정책 사항이 상이할 수 있습니다.</p><!-- [개발확인]22.12.29 -->
            </v-expansion-panel-content>
        </v-expansion-panel>
        <!--//신청 가능한 더한섬하우스 매장은?-->

        <!--서비스 이용안내-->
        <v-expansion-panel>
        <v-expansion-panel-header>서비스 이용안내
            <template #actions>
            <i class="cmp-icon-etc cmp-icon-down">열기/닫기</i>
            </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <ul class="cmp-dotList ml-4"><!-- [퍼블수정]22.12.29 -->
                <li class="nodotType cmp-font fnt-16">이용대상</li>
                <!-- [퍼블수정]23.02.24 결함 - 581 수정 -->
                <li>케어플러스 세탁서비스는 더한섬닷컴 회원 대상(간편회원 제외)입니다.</li>
                <li>무료 바우처는 THE STAR/STAR 등급별 3장/2장 바우처를 드리며, 더플러스<sup>+</sup> 멤버십 가입시 정책에 따라서 바우처가 제공됩니다.</li>
                <li>바우처 1장은 의류 1개로 취급하며, 한 번 신청 시 여러 횟수 사용도 가능합니다.</li>
                <li><span class="cmp-font bold fnt-14">온라인 등급의 혜택 제공 마지막 달과 선정 달</span>에는 신청자가 증가함에 따라, <span class="cmp-font bold fnt-14">세탁 진행 기간이 다소 지연</span>될 수 있습니다. (약 2주 이상 소요)</li>
                <!-- [퍼블수정]23.02.24 결함 - 581 수정 -->
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
                <!-- [퍼블수정]23.02.17 세탁 내용 수정 -->
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

    <slot name="bottom"></slot>
    </div>
</template>
<script>
export default {
  props: {

  },
  data: () => ({
    tabs : null,
    // [퍼블수정]24.01.09 세탁 서비스 안내문구 수정
    brandData : [
        "TIME, ",
        "MINE, ",
        "LANVIN COLLECTION, ",
        "SJSJ, ",
        "SYSTEM, ",
        "LANVIN PARIS, ",
        "TIME HOMME, ",
        "SYSTEM HOMME, ",
        "the CASHMERE, ",
        "CLUB MONACO, ",
        "OBZEE, ",
        "LÄTT, ",
        "LANVIN BLANC, ",
        "O'2nd, ",
        "TOM GREYHOUND, ",
        "FOURM THE STORE, ",
        "FOURM STUDIO, ",
        "FOURM, ",
        "FOURM MEN'S LOUNGE, ",
        "FOURM LOUNGE, ",
        "MUE, ",
        "H:SCENE, ",
        "SÉLECTED, ",
        "ROCHAS, ",
        "3.1 Phillip Lim, ",
        "BALLY, ",  
        "TOMMY HILFIGER, ",
        "TOMMY JEANS, ",
        "DKNY, ",
        "CALVIN KLEIN, ",
        "SJYP, ",
        "rareview, ",
        "OUR LEGACY, ",
        "VERONICA BEARD, ",
        "ASPESI, ",
        "MOOSE KNUCKLES "
    ],
  }),
  created() {
  },
  methods: {
    onScroll(e) {
    	// 스크롤 움직일 때 마다 호출됨
    	this.scroll = window.scrollY;
    },
  },
}
</script>

<style lang="scss">
  @import '@/assets/scss/pages/handsomecare.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>