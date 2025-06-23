<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogReviewBenefit = true">
        리뷰작성 혜택 POPUP
      </v-btn>

      <!-- 리뷰작성 혜택 POPUP -->
      <v-dialog
        v-model="DialogReviewBenefit">
        <DialogReviewBenefit @close="DialogReviewBenefit=false" />
      </v-dialog>

    </div>
  </div>
</template>

<script>
import DialogReviewBenefit from '~/pages/POPUP/DialogReviewBenefit.vue' 
export default {
  components: {
    DialogReviewBenefit
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogReviewBenefit : false,
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
