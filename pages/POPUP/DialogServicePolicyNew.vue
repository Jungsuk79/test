<template>
  <DialogBasic
    :width="540"
    class="popup-servicePolicy" 
    header-title="서비스 운영정책" 
    @hide="closeDialog">
    <template #body>
      <!-- 한섬 케어 플러스 이용약관 -->
      <div class="serviceContent laundry-servicePolicy">
        <p class="date">변경일자 : $2023.00.00$</p>

        <p>본 운영정책은 (주)한섬(이하 “회사”)이 제공하는 케어플러스 세탁 서비스(이하 “서비스”)를 운영함에 있어, 서비스 내에 발생할 수 있는 문제 상황에 대하여 일관성 있게 대처하기 위하여 서비스 운영의 기준과 회원 여러분이 지켜주셔야 할 세부적인 사항이 규정되어 있습니다. 본 운영정책은 약관에 포함하기 어려운 서비스 운영의 세부 규칙을 포함하고 있으며, 약관의 일부를 구성 합니다. 운영정책을 지키지 않을 경우 불이익을 당할 수 있으니 주의 깊게 읽어 주시기 바랍니다.</p>
        <p>회사는 서비스와 관련된 정책을 개선하고자 회원과의 지속적인 의견 교환을 통해 합리적인 운영정책을 세울 수 있도록 노력하고 있으며, 그에 따라 운영정책의 내용을 추가, 변경, 삭제할 수 있습 니다. 이 경우 최소 7일 전에 더한섬닷컴 공지사항를 통해 공지 하도록 하겠습니다. 단, 서비스의 새로운 기능과 관련된 변경이나 법률적인 사유로 인한 변경은 즉시 발효되며 서비스 운영 정책, 정책 설명 등은 수시로 업데이트될 수 있습니다. 변경된 내용을 숙지하지 못해 발생하는 피해나 불편에 대해서는 도움을 드릴 수 없습니다.</p>

        <h5 class="sp-title">1. 인수증</h5>
        <p>회원은 ㈜한섬으로부터 다음의 내용을 포함한 인수증을 더한섬닷컴 내에서 열람할 수 있습니다.</p>
        <ul class="cmp-dotList">
            <li>회원의 신청정보 (신청번호, 이름, 장소, 휴대폰 번호, 신청일시)</li>
            <li>세탁물 인수일</li>
            <li>케어플러스 세탁 바우처 사용개수 (단, 세탁물의 상태나 원단의 특수성, 타브랜드 상품 등의 이유로 세탁이 거부될 수 있음)</li>
            <li>그 밖에 피해 발생 시 손해배상기준, 세탁물 보관료 등 기타 사항은 본 이용약관 및 운영정책을 참고해 주시기 바랍니다.</li>
        </ul>

        <h5 class="sp-title">2.케어플러스 세탁 바우처</h5>
        <p>1)케어플러스 세탁 바우처의 개수는 “더한섬닷컴” 온라인 멤버십 등급에 따라 아래 표와 같이 “회원”에게 차등 제공됩니다.</p>

        <div class="hs_table_wrap"><!-- [퍼블수정]23.01.10 -->
            <table>
                <caption>회원가입 및 주문 등 필요시점에 수집하는 개인정보의 범위</caption>
                <colgroup>
                    <col style="width:20%;">
                    <col style="width:22%;">
                    <col style="width:28%;">
                    <col style="width:30%;">
                    <col>
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col" colspan="2">고객 유형</th>
                        <th scope="col">제공되는 바우처</th>
                        <th scope="col">사용 가능 기간</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="no_bd" rowspan="2">THE 클럽<br/>VIP</td>
                        <td>THE STAR</td>
                        <td>3장</td>
                        <td>해당 등급<br>유지기간까지</td>
                    </tr>
                    <tr>
                        <td>STAR</td>
                        <td>2장</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="2">더플러스+ 가입 (최초 1회)</td>
                        <td>1장</td>
                        <td>1년</td>
                    </tr>
                </tbody>
            </table>
        </div><!-- //[퍼블수정]23.01.10 -->

        <h5 class="sp-title">3. 보관료</h5>
        <p>본 서비스는 “회원”이 세탁 후 배송 일자 이후에도 세탁물을 수령하지 않는다 할지라도 별도의 보관료를 청구하지 않습니다.</p>

        <h5 class="sp-title">4. 서비스 제공 대상</h5>
        <p>“회사”가 본 서비스를 제공하는 대상 제품은 아래와 같습니다.</p>
        <!-- [퍼블수정]23.02.22 문구수정 -->
        <p class="sm-txt">한섬 브랜드 : TIME / MINE / LANVIN COLLECTION / SJSJ / SYSTEM / LANVIN PARIS / TIME HOMME / the CASHMERE / CLUB MONACO / OBZEE / LÄTT / LANVIN BLANC / O'2nd / TOM GREYHOUND / FOURM THE STORE / FOURM STUDIO / FOURM MEN'S LOUNGE / MUE / H:SCENE / ROCHAS / 3.1 Phillip Lim / BALLY / TOMMY HILFIGER / DKNY / CALVIN KLEIN / SJYP / rareview / OUR LEGACY<br/>세탁 가능 품목 : 상의(티셔츠, 스웨터, 와이셔츠) / 하의(팬츠, 스커트) / 가디건 / 조끼 / 스카프 / 머플러 / 재킷 / 원피스 / 블라우스 / 점퍼 / 경량패딩 / 파카 / 반코트 / 코트 / 바바리 / 패딩코트 (가죽류, 무스탕류, 밍크류는 세탁불가)</p>

        <h5 class="sp-title">5. 서비스 제공 방법</h5>
        <p>1)회사가 본 서비스를 제공하는 방법은 '앳홈(수거배달)', '택배', '매장방문(더한섬하우스)' 세가지입니다.</p>
        <p>2)앳홈(수거배달)의 경우 아래 지역에 한하여 신청할 수 있으며, 아래 방법에 따라 서비스를 제공합니다.</p>
        <ul class="cmp-dotList">
            <li>가능 지역 : 서울 강남구, 강동구, 마포구, 서초구, 송파구, 영등포구, 용산구, 동작구</li>
            <li>제공 방법 : 더한섬닷컴 내 별도 페이지에서 신청 후, 신청 당시 기재한 일시에 위탁사의 직원이 방문하여 본 서비스 전용 차량을 통해 세탁물을 수거합니다. 세탁 완료 후 직원 이 유선 연락을 드리며, 회원님이 원하시는 세탁물 방문배달일시로 방문예약을 진행합니다. 예약한 일시에 신청하신 배송지로 위탁사의 직원이 방문하여 완료된 세탁물을 전달드립니다.</li>
        </ul>
        <p>3)택배의 경우 수거배달 가능 지역 외 전국의 고객이 신청할 수 있으며, 아래 방법에 따라 서비스를 제공합니다.</p>
        <ul class="cmp-dotList">
            <li>제공 방법 : 더한섬닷컴 내 별도 페이지에서 신청 후, 회원님에게 세탁물을 상자에 포장을 부탁드립니다. 포장된 택배를 수거하기 위해 회사와 계약된 택배 업체 직원이 방문합니다. 세탁이 완료되면 회사는 택배 상자에 완료된 세탁물을 포장하여 회원님에게 발송합니다. 회사는 세탁 완료 및 배송 시작 일자를 회원님에게 안내 드릴 것 입니다.</li>
        </ul>
        <p>4)매장방문(더한섬하우스)</p>
        <ul class="cmp-dotList">
            <li>가능 매장 : 고객센터>서비스소개>케어플러스 세탁 서비스 안내 참고</li>
            <li>유의사항 : 더한섬닷컴을 통하지 않고 매장에서 직접 접수하시는 경우, 일부 정책 사항이 상이할 수 있습니다.</li>
        </ul>

        <h5 class="sp-title">6. 취소와 환불 정책</h5>
        <p>1)“회원”은 “더한섬닷컴” 사이트 또는 고객센터를 통해 케어플러스 세탁 바우처의 취소 및 환불을 요청할 수 있습니다.</p>
        <p>2)“회원”은 다음과 같은 경우에 “케어플러스 세탁 바우처” 사용 취소 및 환불이 가능합니다.</p>
        <ul class="cmp-dotList">
            <li>세탁이 완료되었으나 세탁물이 손상된 경우</li>
        </ul>
      </div>
      <!-- //한섬 케어 플러스 이용약관 -->
    </template>
  </DialogBasic>
</template>
<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'
export default {
  components: {
    DialogBasic,
  },
  data: () => ({
    DialogBasic: false, // 팝업

  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss">
</style>
