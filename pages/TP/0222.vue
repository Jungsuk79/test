<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogThePlusEarnRewardsCoupon">
        <span class="txt">더플러스+ 리워드 획득</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogThePlusEarnRewardsCoupon">
        <DialogThePlusEarnRewardsCoupon @close="closeDialogThePlusEarnRewardsCoupon" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogThePlusEarnRewardsCoupon from '~/pages/POPUP/DialogThePlusEarnRewardsCoupon.vue'
export default {
  components: {
    DialogThePlusEarnRewardsCoupon
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogThePlusEarnRewardsCoupon : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogThePlusEarnRewardsCoupon(){
      this.DialogThePlusEarnRewardsCoupon = true
    },
    closeDialogThePlusEarnRewardsCoupon(){
      this.DialogThePlusEarnRewardsCoupon = false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/theplusmember.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
