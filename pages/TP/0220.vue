<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogThePlusEarnRewardsBoth">
        <span class="txt">더플러스+ 리워드 획득 2개 동시</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogThePlusEarnRewardsBoth">
        <DialogThePlusEarnRewardsBoth @close="closeDialogThePlusEarnRewardsBoth" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogThePlusEarnRewardsBoth from '~/pages/POPUP/DialogThePlusEarnRewardsBoth.vue'
export default {
  components: {
    DialogThePlusEarnRewardsBoth
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogThePlusEarnRewardsBoth : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogThePlusEarnRewardsBoth(){
      this.DialogThePlusEarnRewardsBoth = true
    },
    closeDialogThePlusEarnRewardsBoth(){
      this.DialogThePlusEarnRewardsBoth = false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/theplusmember.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
