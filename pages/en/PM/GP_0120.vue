
<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogQnAWrite">
        <span class="txt">상품 Q&A작성(popup)</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogQnAWrite">
        <DialogQnAWrite @close="closeDialogQnAWrite" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogQnAWrite from '~/pages/en/POPUP/DialogQnAWrite.vue'

export default {
  components: {
    DialogQnAWrite
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogQnAWrite : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogQnAWrite(){
      this.DialogQnAWrite = true
    },
    closeDialogQnAWrite(){
      this.DialogQnAWrite = false
    }
  }
}
</script>
<style lang="scss">
    @import '@/assets/scss/pages/detail.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
    @import '@/assets/scss/en/en.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>
