
<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogReviewDetail">
        <span class="txt">포토/동영상 리뷰(popup)</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogReviewDetail">
        <DialogReviewDetail @close="closeDialogReviewDetail" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogReviewDetail from '~/pages/en/POPUP/DialogReviewDetail.vue'

export default {
  components: {
    DialogReviewDetail
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogReviewDetail : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogReviewDetail(){
      this.DialogReviewDetail = true
    },
    closeDialogReviewDetail(){
      this.DialogReviewDetail = false
    }
  }
}
</script>
<style lang="scss">
    @import '@/assets/scss/pages/detail.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
    @import '@/assets/scss/en/en.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>
