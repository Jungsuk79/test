<template>
  <v-layout class="contents content-mypage"
    ><!--// 공통 class="contents", 해당 메뉴 전용 class="content-메뉴명", 해당 페이지 전용 class="content-페이지명" -->
     <div class="content-wrap">
      <v-btn large color="primary" nuxt @click="openDialogNoticeList2">[팝업] 세탁 불가 상품안내</v-btn>
      <!-- [팝업] 세탁 불가 상품안내 -->
      <v-dialog v-model="DialogNoticeList2">
      <DialogNoticeList2 :list-data="NoticeData" @close="closeDialogNoticeList2" />
      </v-dialog>
      <!--// [팝업] 세탁 불가 상품안내 -->
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
        title : '세탁 불가 상품안내',
        list : [
          {
            text : '세탁불가 상품',
            dotType: true,
          },
          // [퍼블수정]24.01.09 세탁 서비스 안내문구 수정
          {
            text : '타사 및 입점 브랜드(Champion, FILA, NAU 등) 제품은 제외합니다.',
          },
          {
            text : '가죽류, 무스탕류, 밍크류 소재는 제외합니다.',
          },
          {
            text : '패션잡화 품목, 특수 약품처리 제품(방수코팅, 고무, 비닐 제품 등)은 제외합니다.',
          },
          {
            text : '구매한 지 3년이 경과된 제품 혹은 오랜 시간으로 원단이 약해지거나 찢어진 제품은 제외합니다.',
          },
          {
            text : '반송 및 유의사항',
            dotType: true,
          },
          {
            text : '검수 과정에서 전문가의 의견에 따라 세탁이 불가능하다 판단 될 수 있으며, 함께 요청하신 상품이 있으실 경우 해당 상품의 세탁이 완료된 후 함께 발송해 드립니다.',
          },
          {
            text : '얼룩, 털, 보풀 등의 완전한 제거는 불가 할 수 있습니다. 또한 특성과 상태에 따라 모든 얼룩을 완전히 없애지 못할 수 있으며, 이에 따른 케어플러스 세탁 바우처의 횟수는 차감됩니다.',
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
