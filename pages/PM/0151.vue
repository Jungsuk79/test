<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogRecommendStyle">
        <span class="txt">스타일 추천 팝업</span>
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
import DialogRecommendStyle from '~/pages/POPUP/DialogRecommendStyle.vue'
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
<style lang="scss" scoped>
</style>
