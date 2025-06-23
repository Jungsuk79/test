<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogThePlusEarnRewardsBothCoupon">
        <span class="txt">더플러스+ 리워드 획득 2개 동시</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogThePlusEarnRewardsBothCoupon">
        <DialogThePlusEarnRewardsBothCoupon @close="closeDialogThePlusEarnRewardsBothCoupon" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogThePlusEarnRewardsBothCoupon from '~/pages/POPUP/DialogThePlusEarnRewardsBothCoupon.vue'
export default {
  components: {
    DialogThePlusEarnRewardsBothCoupon
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogThePlusEarnRewardsBothCoupon : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogThePlusEarnRewardsBothCoupon(){
      this.DialogThePlusEarnRewardsBothCoupon = true
    },
    closeDialogThePlusEarnRewardsBothCoupon(){
      this.DialogThePlusEarnRewardsBothCoupon = false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/theplusmember.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
