<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogReviewDetail = true">
        포토/동영상 리뷰(POPUP)
      </v-btn>

      <!-- 포토/동영상 리뷰(POPUP) -->
      <v-dialog 
        v-model="DialogReviewDetail">
        <DialogReviewDetail @close="DialogReviewDetail=false" />
      </v-dialog>

    </div>
  </div>
</template>

<script>
import DialogReviewDetail from '~/pages/POPUP/DialogReviewDetail.vue' 
export default {
  components: {
    DialogReviewDetail
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogReviewDetail : false,
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
