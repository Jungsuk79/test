<template>
  <v-layout class="contents content-mypage"
    ><!--// 공통 class="contents", 해당 메뉴 전용 class="content-메뉴명", 해당 페이지 전용 class="content-페이지명" -->
     <div class="content-wrap">
      <v-btn large color="primary" nuxt @click="openDialogNoticeList2">[팝업] 케어플러스 세탁 - 이용자 동의</v-btn>
      <!-- [팝업] 케어플러스 세탁 - 이용자 동의 -->
      <v-dialog v-model="DialogNoticeList2">
      <DialogNoticeList2 :list-data="NoticeData" @close="closeDialogNoticeList2" />
      </v-dialog>
      <!--// [팝업] 케어플러스 세탁 - 이용자 동의 -->
    </div>
  </v-layout>
</template>

<script>
import DialogNoticeList2 from '~/pages/POPUP/DialogNoticeList2.vue'
export default {
  components: {
    DialogNoticeList2,
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogNoticeList2 : false,
    NoticeData : {
        title : '케어플러스 세탁 이용자 동의',
        list : [
          {
            //   [퍼블수정]23.02.17 세탁 내용 수정
            text : '케어플러스 세탁 서비스는 온라인 VIP(THE STAR/STAR) 고객 및 일반회원 대상(간편회원 제외)으로 한 서비스로, 고객님의 개인정보를 ㈜한섬 및 세탁 업체에 위탁합니다.',
          },
          {
            text : '더한섬닷컴 개인정보처리방침에 의거하여 개인정보 제3자 위탁을 동의하지 않을 시, 세탁 서비스 의뢰에 제한될 수 있으며 위탁된 개인정보는 한 달간 보관 후 폐기됩니다.',
          },
          {
            text : '서비스 이용 과정에서 케어플러스 세탁 신청시 기입하신 고객님의 연락처로 전문 상담사가 연락을 드릴 수 있으며, 필요한 최소한의 개인정보는 수집 및 취급될 수 있습니다.',
          },
          {
            text : '검수 과정에서 전문가의 의견에 따라 세탁이 불가능하다 판단될 수 있으며, 함께 요청하신 상품이 있으실 경우 해당 상품의 케어가 완료된 후 함께 발송됩니다.',
          },
          {
            text : '본 서비스는 앳홈, 택배 및 매장방문으로 신청 가능하며, 신청한 것과 동일한 주소와 방식으로 발송됩니다. <br />(예:앳홈 수거-앳홈 수령/택배수거-택배수령/매장방문 수거-매장방문 수령)',
          },
          {
            text : '세탁 상품 하자 접수 및 문제 제기는 세탁물 수령일로부터 7일 이내에 고객센터를 통해 이루어져야 합니다. 이 기간 동안 고객님으로부터 어떠한 요청이나 문의가 없는 경우 세탁물에 이상이 없다는 확인으로 봅니다.',
          },
          {
            text : '불편사항을 해결하기 위해 세탁 상품의 사진을 요구하거나 실물을 회수 할 수 있습니다.',
          },
          {
            text : '고객님께 세탁 완료 및 회수에 대한 통지를 했음에도 통지의 도달일로부터 30일이 경과하도록 회원이 세탁물을 회수하지 않는 경우 당사는 이로 인한 보관 책임을 면합니다.',
          },
        ]
    }
  }),
  methods: {
    openDialogNoticeList2() {
      this.DialogNoticeList2 = true
    },
    closeDialogNoticeList2() {
      this.DialogNoticeList2 = false
    },
  },
}
</script>
<style lang="scss" scoped>
</style>
