<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogStyleReviewDetail = true">
        스타일리뷰 상세보기
      </v-btn>

      <!-- 스타일리뷰 상세보기 POPUP -->
      <v-dialog
        v-model="DialogStyleReviewDetail">
        <DialogStyleReviewDetail @close="DialogStyleReviewDetail=false" />
      </v-dialog>

    </div>
  </div>
</template>

<script>
import DialogStyleReviewDetail from '~/pages/POPUP/DialogStyleReviewDetail.vue' 
export default {
  components: {
    DialogStyleReviewDetail
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogStyleReviewDetail : false,
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
