<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogQnAWrite = true">
        상품 Q&A 작성 POPUP
      </v-btn>

      <!-- 상품 Q&A 작성 POPUP -->
      <v-dialog
        v-model="DialogQnAWrite">
        <DialogQnAWrite @close="DialogQnAWrite=false" />
      </v-dialog>

    </div>
  </div>
</template>

<script>
import DialogQnAWrite from '~/pages/POPUP/DialogQnAWrite.vue' 
export default {
  components: {
    DialogQnAWrite
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogQnAWrite : false,
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
