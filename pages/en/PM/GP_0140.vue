
<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogBigBenefit">
        <span class="txt">최대혜택가(popup)</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogBigBenefit">
        <DialogBigBenefit @close="closeDialogBigBenefit" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogBigBenefit from '~/pages/en/POPUP/DialogBigBenefit.vue'

export default {
  components: {
    DialogBigBenefit
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogBigBenefit : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogBigBenefit(){
      this.DialogBigBenefit = true
    },
    closeDialogBigBenefit(){
      this.DialogBigBenefit = false
    }
  }
}
</script>
<style lang="scss">
    @import '@/assets/scss/pages/detail.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
    @import '@/assets/scss/en/en.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>
