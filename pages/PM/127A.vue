<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogReviewBlocking = true">
        리뷰 신고 POPUP
      </v-btn>

      <!-- 리뷰 신고  POPUP -->
      <v-dialog
        v-model="DialogReviewBlocking">
        <DialogReviewBlocking @close="DialogReviewBlocking=false" />
      </v-dialog>

    </div>
  </div>
</template>

<script>
import DialogReviewBlocking from '~/pages/POPUP/DialogReviewBlocking.vue' 
export default {
  components: {
    DialogReviewBlocking
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogReviewBlocking : false,
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
