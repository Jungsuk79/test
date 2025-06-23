
<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogRecommendStyle">
        <span class="txt">스타일 추천(POPUP)</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogRecommendStyle">
        <DialogRecommendStyle @close="closeDialogRecommendStyle" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogRecommendStyle from '~/pages/en/POPUP/DialogRecommendStyle.vue'

export default {
  components: {
    DialogRecommendStyle
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogRecommendStyle : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogRecommendStyle(){
      this.DialogRecommendStyle = true
    },
    closeDialogRecommendStyle(){
      this.DialogRecommendStyle = false
    }
  }
}
</script>
<style lang="scss">
    @import '@/assets/scss/pages/detail.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
    @import '@/assets/scss/en/en.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>
