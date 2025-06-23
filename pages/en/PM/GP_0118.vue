
<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogQnA">
        <span class="txt">상품 Q&A(popup)</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogQnA">
        <DialogQnA @close="closeDialogQnA" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogQnA from '~/pages/en/POPUP/DialogQnA.vue'

export default {
  components: {
    DialogQnA
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogQnA : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogQnA(){
      this.DialogQnA = true
    },
    closeDialogQnA(){
      this.DialogQnA = false
    }
  }
}
</script>
<style lang="scss">
    @import '@/assets/scss/pages/detail.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
    @import '@/assets/scss/en/en.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>
