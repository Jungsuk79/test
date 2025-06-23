<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogQnA = true">
        상품 Q&A POPUP
      </v-btn>

      <!-- 상품 Q&A POPUP -->
      <v-dialog
        v-model="DialogQnA">
        <DialogQnA @close="DialogQnA=false" />
      </v-dialog>

    </div>
  </div>
</template>

<script>
import DialogQnA from '~/pages/POPUP/DialogQnA.vue' 
export default {
  components: {
    DialogQnA
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogQnA : false,
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
