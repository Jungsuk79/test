<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogThePlusEarnRewardsMileage">
        <span class="txt">더플러스+ 리워드 획득</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogThePlusEarnRewardsMileage">
        <DialogThePlusEarnRewardsMileage @close="closeDialogThePlusEarnRewardsMileage" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogThePlusEarnRewardsMileage from '~/pages/POPUP/DialogThePlusEarnRewardsMileage.vue'
export default {
  components: {
    DialogThePlusEarnRewardsMileage
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogThePlusEarnRewardsMileage : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogThePlusEarnRewardsMileage(){
      this.DialogThePlusEarnRewardsMileage = true
    },
    closeDialogThePlusEarnRewardsMileage(){
      this.DialogThePlusEarnRewardsMileage = false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/theplusmember.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
