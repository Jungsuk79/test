<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogAllReviewThumbnail = true">
        포토/동영상 모아보기(POPUP)
      </v-btn>

      <!-- 포토/동영상 모아보기(POPUP) -->
      <v-dialog 
        v-model="DialogAllReviewThumbnail">
        <DialogAllReviewThumbnail :view-idx="3" @close="DialogAllReviewThumbnail=false" />
      </v-dialog>

    </div>
  </div>
</template>

<script>
import DialogAllReviewThumbnail from '~/pages/POPUP/DialogAllReviewThumbnail.vue' 
export default {
  components: {
    DialogAllReviewThumbnail
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogAllReviewThumbnail : false,
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
