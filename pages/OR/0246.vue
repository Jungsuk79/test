<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogHPointPay">
        <span class="txt">H Point Pay 팝업 1건</span>
      </v-btn>

      <v-btn @click="openDialogHPointPay2">
        <span class="txt">H Point Pay 팝업 다건</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogHPointPay">
        <DialogHPointPay @close="closeDialogHPointPay" :test-type="test" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogHPointPay from '~/pages/POPUP/DialogHPointPay.vue'
export default {
  components: {
    DialogHPointPay
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogHPointPay : false,
      test : 0,
    }
  },
  watch:{
    
  },
  created(){
    
  },
  mounted(){
    
  },
  beforeDestroy(){
    // document.querySelector('html').classList.remove('overflow-y-h')
  },
  methods: {
    openDialogHPointPay(){
      this.test = 0
      this.DialogHPointPay = true
    },
    openDialogHPointPay2() {
      this.test = 1
      this.DialogHPointPay = true
    },
    closeDialogHPointPay(){
      this.DialogHPointPay = false
    },
  },
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/order.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
