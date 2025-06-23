
<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogAllReviewThumbnail">
        <span class="txt">포토/동영상 모아보기(POPUP)</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogAllReviewThumbnail">
        <DialogAllReviewThumbnail :view-idx="3" @close="closeDialogAllReviewThumbnail" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogAllReviewThumbnail from '~/pages/en/POPUP/DialogAllReviewThumbnail.vue'

export default {
  components: {
    DialogAllReviewThumbnail
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogAllReviewThumbnail : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogAllReviewThumbnail(){
      this.DialogAllReviewThumbnail = true
    },
    closeDialogAllReviewThumbnail(){
      this.DialogAllReviewThumbnail = false
    }
  }
}
</script>
<style lang="scss">
    @import '@/assets/scss/pages/detail.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
    @import '@/assets/scss/en/en.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>
