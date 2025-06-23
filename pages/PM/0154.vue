<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogReviewPhoto = true">
        리뷰 사진 크게보기(POPUP)
      </v-btn>

      <!-- 리뷰 사진 크게보기(POPUP) -->
      <v-dialog
        v-model="DialogReviewPhoto">
        <DialogReviewPhoto @close="DialogReviewPhoto=false" />
      </v-dialog>

    </div>
  </div>
</template>

<script>
import DialogReviewPhoto from '~/pages/POPUP/DialogReviewPhoto.vue' 
export default {
  components: {
    DialogReviewPhoto
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogReviewPhoto : false,
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
