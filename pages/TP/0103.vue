<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogBrandPreference">
        <span class="txt">선호 브랜드 선택하기</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogBrandPreference">
        <DialogBrandPreference @close="closeDialogBrandPreference" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogBrandPreference from '~/pages/POPUP/DialogBrandPreference.vue'
export default {
  components: {
    DialogBrandPreference
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogBrandPreference : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogBrandPreference(){
      this.DialogBrandPreference = true
    },
    closeDialogBrandPreference(){
      this.DialogBrandPreference = false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/theplusmember.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
