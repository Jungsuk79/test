
<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogCoupon">
        <span class="txt">쿠폰(popup)</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogCoupon">
        <DialogCoupon @close="closeDialogCoupon" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogCoupon from '~/pages/en/POPUP/DialogCoupon.vue'

export default {
  components: {
    DialogCoupon
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogCoupon : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogCoupon(){
      this.DialogCoupon = true
    },
    closeDialogCoupon(){
      this.DialogCoupon = false
    }
  }
}
</script>
<style lang="scss">
    @import '@/assets/scss/pages/detail.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
    @import '@/assets/scss/en/en.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>
