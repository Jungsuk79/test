<template>
<div class="contents-handsomecare">
    <div class="hc-bannerbox"><!-- [퍼블수정]22.12.29 -->
        <img src="/images/care/handsomeRepairbg.jpg" alt="" /><!-- [퍼블수정]22.12.05 -->
        <div class="text-box">
        <p class="cmp-font bold">더한섬닷컴만의 특별한</p>
        <p class="cmp-font fnt-30">케어플러스 수선 서비스를 소개합니다.</p>
        <p class="cmp-font">
            더한섬닷컴에서 간편하게 수선을 맡겨보세요.<br />
            전문가의 프리미엄 수선 서비스로<br />
            고객님의 소중한 옷이 새롭게 태어납니다.
        </p>
        </div>
    </div>

    <v-layout justify-space-between align-center class="mb-30"><!-- [퍼블수정]22.12.05 -->
        <p>오프라인 매장에서 수선신청하신 고객님께서는, 방문 시 발급받은 수선번호로 진행내역을 확인하실 수 있습니다.</p>
        <nuxt-link class="cmp-font fnt-13 button" to="#n"><span class="line">수선번호로 확인하기</span></nuxt-link>
    </v-layout>

    <div v-sticky-tabs="{tabMove: true}" class="service-tabs"><!-- [퍼블수정]22.12.02 -->
        <div class="fixed-tabs">
        <button target="TabCont1" class="on"><!--2022.09.14 on클래스-->
            <span>1. 신청/수거</span>
        </button>
        <button target="TabCont2">
            <span>2. 수선 진행</span>
        </button>
        <button target="TabCont3">
            <span>3. 배송</span>
        </button>
        </div>
    </div>

    <div class="tab-content">
        <!--신청/수거-->
        <div id="TabCont1">
        <div class="text-box pt-10"><!-- [퍼블수정]22.12.29 -->
            <p class="cmp-font bold">STEP 1</p>
            <p class="cmp-font fnt-30">서비스 신청 / 수거</p>
            <p class="cmp-font">나에게 맞는 방법으로 신청하세요</p>
        </div>

        <div class="img-box">
            <img src="/images/care/handsomeRepair-img.jpg" alt="" /><!-- [퍼블수정]22.12.05 -->
        </div>

        <p class="cmp-font fnt-18">신청 방법</p>
        <ul class="list-box">
            <li>
            <p class="tit"><span>01</span>수거지&#47;배송지 선택</p>
            <p class="tit-sub">택배로 보내고 받아보실 주소를 입력해 주세요.</p>
            </li>
            <li>
            <p class="tit"><span>02</span>수선 상품 선택</p>
            <p class="tit-sub">더한섬닷컴 <span class="cmp-font bold">3년</span> 이내 구매내역 또는 상품품번으로 신청하세요.</p>
            </li>
            <li>
            <p class="tit"><span>03</span>신청완료</p>
            <p class="tit-sub">수선 상품을 박스에 담아 택배기사님께 전달해주세요. (신청 후 1~2일 내 방문 예정)
            </p>
            </li>
        </ul>

        <div class="contBg-box repair-contBg"><!--[퍼블수정]22.12.01 간격 수정 -->
            <p class="cmp-font fnt-20 mb-20">접수 방법</p>
            <div class="cmp-info info-type3">
                <p>구입 매장 또는 인근 매장에서 접수하실 수 있습니다.</p>
                <ul class="cmp-dotList mt-12">
                    <li>정상 상품 : 백화점 매장에서 접수</li>
                    <li>아울렛 상품 : 아울렛 매장에서 접수</li>
                </ul>
            </div>
        </div>
        </div>
        <!--//신청/수거-->

        <!--수선 진행-->
        <div id="TabCont2">
        <div class="text-box">
            <p class="cmp-font bold">STEP 2</p>
            <p class="cmp-font fnt-30">수선 & 결제</p>
            <p class="cmp-font">동일한 원단과 부자재를 활용하여 최대한 원상 복구 수선을 원칙으로 합니다.</p>
        </div>

        <div class="img-box">
            <img src="/images/care/handsomeRepair-img2.jpg" alt="" /><!-- [퍼블수정]22.12.05 -->
        </div>

        <div class="column-box">
            <p class="cmp-font fnt-20 mb-20">수선 진행 순서 안내</p>
            <v-layout align-start justify-space-between>
            <div class="item">
                <p class="cmp-font bold mb-10">01</p>
                <p>보내주신 상품을 검수 후<br>수선 진행합니다.</p>
                <span class="icon"><i class="cmp-icon-etc cmp-icon-64 i-repair">repair</i></span>
            </div>

            <div class="item">
                <p class="cmp-font bold mb-10">02</p>
                <p>수선이 완료되면 카카오<br /> 알림톡으로 최종 금액을<br /> 안내해 드립니다.</p>
                <span class="icon"><i class="cmp-icon-etc cmp-icon-64 i-presents">presents</i></span>
            </div>

            <div class="item">
                <p class="cmp-font bold mb-10">03</p>
                <p>결제가 완료되면<br /> 배송이 시작됩니다.</p>
                <span class="icon"><i class="cmp-icon-etc cmp-icon-64 i-deliveryRepair">deliveryRepair</i></span>
            </div>
            </v-layout>
        </div>

        <div class="listInfo-box mt-40">
            <dl class="noLine">
            <dt>수선 기간</dt>
            <dd>
                <ul class="cmp-dotList">
                <li>본사 접수일 기준 평균 10일 이내 소요 (수선 공정이 어려운 경우 지연될 수 있습니다.)</li>
                </ul>
            </dd>
            </dl>
        </div>

            <div class="contBg-box repair-contBg"><!--[퍼블수정]22.12.01 간격 수정 -->
            <p class="cmp-font fnt-20 mb-20">수선 비용 결제 기준</p>
            <v-layout align-center justify-space-between>
            <div class="item small-h">
                <p class="cmp-font c-blue">무료 수선</p>
                <p class="cmp-font fnt-14">구입 일자 기준 1년 이내 (취급부주의, 이월 매장 구매제품 제외)</p>
            </div>
            <div class="item small-h">
                <p class="cmp-font c-blue">유료 수선</p>
                <p class="cmp-font fnt-14">구입 일자 기준 1년 이상 / 아울렛 상품 / ACC(가죽, 신발류)</p>
            </div>
            </v-layout>

            <ul class="cmp-dotList mt-16">
            <li>수선시 오래된 제품, 수입 자재 제품(수입완제품)은 유사 원단, 부자재로 대체하거나 수선이 불가 할 수 있으며, 사이즈 변경,<br>파손이 심한 제품은 본사 수선이 불가합니다.</li>
            </ul>
        </div>
        </div>
        <!--//수선 진행-->

        <!--배송-->
        <div id="TabCont3">
            <div class="text-box">
                <p class="cmp-font bold">STEP 3</p>
                <p class="cmp-font fnt-30">배송</p>
                <p class="cmp-font">새로워진 옷을 편하게 만나보세요</p>
            </div>

            <div class="img-box mb-24"><!--2022.09.14 클래스추가-->
                <img src="/images/care/handsomecareService-img3.jpg" alt="" /><!-- [퍼블수정]22.12.05 -->
            </div>

            <div class="listInfo-box">
                <dl>
                <dd>신청하실 때 선택한 배송지로 전달해 드립니다.</dd>
                </dl>

                <dl>
                <dt>신청 가능한 아이템</dt>
                <dd>상의(티셔츠, 스웨터, 와이셔츠), 하의(팬츠, 스커트), 가디건, 조끼, 스카프, 머플러, 재킷, 원피스, 블라우스, 점퍼, 경량패딩, 파카, 반코트, 코트, 바바리, 패딩코트, 기타</dd>
                </dl>

                <dl>
                <dt>신청 가능한 브랜드</dt>
                <dd class="brand-item">
                    <span v-for="(item,index) in brandData" :key="index">{{item}}</span>
                </dd>
                <dd class="mt-16">
                    <ul class="cmp-dotList">
                    <li class="cmp-font fnt-14">한섬 브랜드만 수선 신청이 가능하며, 입점 브랜드 및 타사 브랜드는 신청이 불가합니다.</li>
                    </ul>
                </dd>
                </dl>
            </div>
        </div>
        <!--//배송-->
    </div>

    <nuxt-link to="#n">
        <v-layout justify-space-between align-center class="line-link">
            <p class="cmp-font fnt-18">품질보증 및 보상안내</p>
            <p><i class="cmp-icon cmp-icon-16 i-next">다음</i></p>
        </v-layout>
    </nuxt-link>
    <v-expansion-panels accordion class="cmp-acc acc-type2"><!--2022.09.14 클래스추가 -->
        <!--서비스 이용안내-->
        <v-expansion-panel>
        <v-expansion-panel-header>서비스 이용안내
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

    <slot name="bottom"></slot>
</div>
</template>
<script>
export default {
  props: {

  },
  data: () => ({
    tabs : null,
    brandData : [
      "TIME,",
      "MINE,",
      "LANVIN COLLECTION,",
      "SJSJ,",
      "SYSTEM,",
      "LANVIN PARIS,",
      "TIME HOMME,",
      "SYSTEM HOMME,",
      "the CASHMERE,",
      "CLUB MONACO,",
      "OBZEE,",
      "LÄTT,",
      "O’2nd,",
      "TOM GREYHOUND,",
      "FOURM THE STORE,",
      "FOURM STUDIO,",
      "FOURM MEN'S LOUNGE,",
      "MUE,",
      "H:SCENE,",
      "ROCHAS,",
      "3.1 Philip Lim,",
      "BALLY",
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

<style lang="scss" scoped>
  @import '@/assets/scss/pages/handsomecare.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>