<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
     <v-btn large color="primary" @click="openDialogNoticeList">온라인 등급 안내사항</v-btn>

    <v-btn large color="primary" @click="openDialogNoticeListVvip">한섬 VVIP 안내사항</v-btn>

    <!-- [팝업] 온라인 등급 안내사항 -->
      <v-dialog v-model="DialogNoticeList">
      <DialogNoticeList :list-data="NoticeData" @close="closeDialogNoticeList" />
      </v-dialog>
    <!--// [팝업] 온라인 등급 안내사항 -->

    <!-- [팝업] 한섬 VVIP 안내사항 -->
      <v-dialog v-model="DialogNoticeListVvip">
      <DialogNoticeList :list-data="NoticeDataVvip" @close="closeDialogNoticeListVvip" />
      </v-dialog>
    <!--// [팝업] 한섬 VVIP 안내사항 -->
     
    </div>
  </div>
</template>

<script>
import DialogNoticeList from '~/pages/POPUP/DialogNoticeList.vue'
export default {
  components: {
    DialogNoticeList
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogNoticeList: false,
    DialogNoticeListVvip : false,
     NoticeData : {
        title : '온라인 등급 안내사항',
        list : [
          {
            text : '신규 가입 시, FRIEND 등급 혜택이 제공되며, 가입 이후 온라인에서 구매한 실적에 따라 다음 선정 시 THE 클럽 등급이 변경됩니다.',
          },
          {
            text : '더한섬닷컴 휴면회원은 FRIEND 등급이 부여되며, 혜택은 등급 축하 바우처(1만원 1장, 10% 1장), 무료 반품(1회)만 제공됩니다.<br>(휴면회원에게는 FRIEND 등급 생일 축하 바우처(2만원)가 제공되지 않습니다.)',
          },
          {
            text : 'THE 클럽 등급은 한섬 온라인(더한섬닷컴)에서 쿠폰/바우처 할인액을 제외한 실제 결제한 금액 기준으로 선정되며, 선정 기간 내 주문한 상품을 추후 취소/반품 시 등급이 하락될 수 있습니다.',
          },
          {
            text : 'THE 클럽의 모든 혜택은 더한섬닷컴(한섬 온라인) 이용 시 제공되며, 오프라인 매장에서는 혜택을 받으실 수 없습니다.',
          },
          {
            text : '한섬 VVIP (온/오프라인 합산 연간 1,000만원 이상 구매) 회원께는 VIP 전용 고객센터 혜택을 제공합니다.<br>※ 한섬 VVIP 회원 등급 기준 및 혜택에 대한 자세한 안내는 <span style="text-decoration: underline;">한섬 VVIP 혜택</span> 을 확인해주세요.',
          },
          {
            text :'THE STAR, STAR 등급 축하 바우처(THE STAR 20%, STAR 15%)는 1회 당 구매 금액 최대 200만원 이내로 사용 가능합니다.'
          },
          {
            text :'FRIEND 등급 축하 바우처 금액권(1만원)은 3만원 이상 구매 시 사용 가능합니다.'
          },
          {
            text :'금액권 바우처는 아울렛 및 라이프스타일/뷰티 상품에 적용이 불가합니다.'
          },
          {
            text :'THE STAR, STAR 등급 더한섬하우스 라운지 이용 횟수는 한섬 VVIP 혜택 기준으로 제공됩니다.<br>(THE STAR 등급 : 본인 포함 4인 / STAR, MANIA 등급 : 본인 포함 3인 동반 입장 가능)'
          },
          {
            text :'THE 클럽 등급 기준 및 혜택은 당사 사정에 의해 별도 고지 없이 변경될 수 있습니다.'
          }
        ]
     },
     NoticeDataVvip : {
       title :'한섬 VVIP 안내사항',
       list :[
         {
           text :'구매금액은 실 결제금액 기준이며 마일리지 사용 등은 제외됩니다.'
         },
         {
           text :'특정 브랜드 (또는 상품) 마일리지 적립 과다, 대여 및 공동 적립, 그에 따른 재물 수취(상품권 등), 온라인 재판매, 탈세 등 부정 사용 및 비정상 거래로<br>판단되는 경우 우수고객선정 및 혜택 제공에서 제외 될 수 있습니다.'
         },
         {
           text :'우수고객 등급 선정 후 매출 과다 취소로 인한 마이너스 발생 시 등급 하향 또는 소멸될 수 있습니다.'
         },
         {
           text :'온라인 맴버십 ‘THE 클럽’은 별도로 선정되며, 혜택 또한 추가 적용됩니다.'
         },
         //   개발반영 요청
         {
           text :'사전 안내드린것과 같이 2022년 1년간 구매실적 기준으로 2023년 대상자 선정 시<br />PLATINUM 등급 기준 3천만원 ▷ 3천5백만원 이상으로 향상되었습니다.<br />-2022년 VVIP PLATINUM 혜택 ‘5%할인: 월4회, 2백만 / 더한섬하우스 라운지: 월8회’로 적용됩니다.'
         },
          {
           text : '유의사항',
           dotType : true,
         },
         {
           text :'THE FIRST ~ GOLD 회원께는 우수고객 전용카드가 2월내 우편으로 배송될 예정입니다.(SILVER 회원 더한섬닷컴 APP 카드 사용)'
         },
         {
           text :'5% 할인은 정상 제품에 한하여 가능합니다.(아울렛, 행사 상품 등 제외)<br>5% 할인 혜택을 받으실 경우, 반드시 우수고객 카드 지참 또는 더한섬닷컴 APP 바코드 인증시 할인 혜택 적용 가능합니다.<br>할인 한도는 년간 할인 받으실 수 있는 최대 한도입니다.<br>할인금액 기준이며 홈페이지 또는 매장 방문하여 한도 조회 가능합니다.'
         },
         {
           text :'생일 선물 및 명절 선물은 회원 주소에 따라 발송되오니, 사전에 주소지를 반드시 확인하여 주시기 바랍니다.'
         },
         
         {
           text :'한섬 THE FIRST CLASS는 수도권 월1회 / 지방 격월로 운영됩니다.<br>매월 다른 주제로 진행되며 사전에 초청 및 접수안내를 별도로 드릴 예정입니다.<br>단, 클래스 한정인원으로 선착순 마감될 수 있으며, 동반 포함 시 횟수 차감됩니다.'
         },
         //   개발반영 요청
         {
           text :'무상 A/S의 경우 아울렛, 행사 상품을 제외한 정상 제품에 한하여 가능합니다.<br>(예시 : 2023년 PLATINUM 구매일로부터 4년내 (19~22년) 정상 제품 AS 가능)<br>찢김, 태움, 디자인변경, 부속물 추가에 대해서는 유상으로 진행됩니다.<br>수선 원,부자재가 없는 경우, 수선이 불가하거나 유사 자재로 진행될 수 있습니다.<br>A/S 수선 접수 후 제품 상태에 따라 수선이 불가할 수 있습니다.'
         },
         {
           text :'신상품 입고알림은 매장 입고 즉시 우수고객님께 LMS로 발송되어, 마케팅 SMS 수신동의 고객에 한하여 발송 가능합니다.'
         },
         {
           text :'토탈케어서비스는 당사 3년이내 구매제품(단, 가죽,모피류는 별도 상담 후 진행가능) 대상 연중 상시 진행됩니다.<br>드라이크리닝 서비스(기본) 진행 제품에 한하여 수선 및 보관(3~6개월)까지 선택하여 진행하실 수 있습니다.드라이크리닝 및 보관 서비스 진행 시 사전 제품 검수 후 위험 제품에 대해서는 서비스 진행이 어려울 수 있습니다<br>→ 접수방법 : 매장접수 / 택배접수(컨시어지 요청: 031-388-0260)<br>→ 등급별 PCS수 : THE FIRST1(1억5천이상) 년4pcs / THE FIRST2(1억이상) 년3pcs / THE FIRST3(그 외) 년2pcs한섬에서 무상서비스 제공되며 상기 기준 외 초과되는 pcs, 추가 제품 희망 및 보관기간 연장 시 고객 부담입니다.<br>(의류 보관서비스 1개월 1pcs 당 6천원, 드라이비용 별도 컨시어지 상담으로 자세히 안내드립니다.)<br>THE FIRST 토탈케어서비스 문의 : 031-388-0260 / 온라인 VIP 한섬 케어플러스 문의 : 1800-5700(1번)'
         },
         {
           text :'더한섬하우스 VIP라운지는 부산(부산 해운대구 좌동로 19) / 광주(광주 광산구 왕버들로87) / 제주(제주시 연북로 257) / 청주(충북 청주시 서원구 미평동 35-8 에버세이브 D동-a동)에 위치하고 있으며, 방문 시 음료/다과 서비스 이용가능합니다.<br>※ 더한섬하우스 방문시 등급별 할인 혜택 받으실 수 있습니다. (THE FIRST, PLATINUM 20% / GOLD 15% / SILVER 10%)'
         },
          {
           text :'우수고객 혜택 관련 문의 : 한섬 본사 고객케어팀 02-3416-2517'
         },
       ]
     }
  }),
  methods:{
    openDialogNoticeList() {
      this.DialogNoticeList = true
    },
    closeDialogNoticeList() {
      this.DialogNoticeList = false
    },
    openDialogNoticeListVvip(){
      this.DialogNoticeListVvip = true
    },
    closeDialogNoticeListVvip(){
      this.DialogNoticeListVvip = false
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
