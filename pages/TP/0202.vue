<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogThePlusVoucher">
        <span class="txt">더플러스⁺ 플러스맵 이용권 (popup)</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogThePlusVoucher">
        <DialogThePlusVoucher @close="closeDialogThePlusVoucher" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogThePlusVoucher from '~/pages/POPUP/DialogThePlusVoucher.vue'
export default {
  components: {
    DialogThePlusVoucher
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogThePlusVoucher : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogThePlusVoucher(){
      this.DialogThePlusVoucher = true
    },
    closeDialogThePlusVoucher(){
      this.DialogThePlusVoucher = false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/theplusmember.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
