<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogReviewEnter = true">
        상품평 등록&수정
      </v-btn>
      <v-btn 
        large
        color="primary"
        @click="isDialogItgb = true">
        상품평 등록&수정 [무형상품]
      </v-btn>
      <!-- [퍼블수정]22.12.12 -->
      <v-btn 
        large
        color="primary"
        @click="DialogDeletePhoto = true">
        첨부파일 삭제
      </v-btn>

      <!-- 상품평 등록&수정 -->
      <v-dialog
        v-model="DialogReviewEnter">
        <DialogReviewEnter @close="DialogReviewEnter=false" />
      </v-dialog>

      <!-- 상품평 등록&수정[무형상품] -->
      <v-dialog
        v-model="isDialogItgb">
        <DialogReviewEnterItgb @close="isDialogItgb=false" />
      </v-dialog>

      <!-- 첨부파일 삭제 --><!-- [퍼블수정]22.12.12 -->
      <v-dialog
        v-model="DialogDeletePhoto">
        <DialogBasic class="popup-message" header-title="" @close="DialogDeletePhoto=false">
          <template #body>
            <div class="inner">
              <p class="msg-sub-txt">첨부파일을 삭제 하시겠습니까?</p>
            </div>
            <div class="popup-btn-box">
              <v-btn outlined large color="primary">취소</v-btn>
              <v-btn large color="primary">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'
import DialogReviewEnter from '~/pages/POPUP/DialogReviewEnter.vue' 
import DialogReviewEnterItgb from '~/pages/POPUP/DialogReviewEnter_itgb.vue' 
export default {
  components: {
    DialogBasic,
    DialogReviewEnter,
    DialogReviewEnterItgb
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogReviewEnter : false,
    isDialogItgb : false,
    DialogDeletePhoto : false,
  }),
  methods: {
    closeDialog(){
      this.$emit('close')
    },
  },
}
</script>
<style lang="scss">
 // @import '@/assets/scss/pages/member.scss'; 
</style>
