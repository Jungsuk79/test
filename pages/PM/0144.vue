<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogOeraReview = true">
        오에라 체험단 POPUP
      </v-btn>

      <!-- 오에라 체험단 POPUP -->
      <v-dialog
        v-model="DialogOeraReview">
        <DialogOeraReview @close="DialogOeraReview=false" />
      </v-dialog>

    </div>
  </div>
</template>

<script>
import DialogOeraReview from '~/pages/POPUP/DialogOeraReview.vue' 
export default {
  components: {
    DialogOeraReview
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogOeraReview : false,
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
