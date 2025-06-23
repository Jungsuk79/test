<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogthePlusNonCancellablecs1">
        <span class="txt">멤버십 해지 불가 - 멤버십 결제일로부터 14일 지났을 시</span>
      </v-btn>

      <v-btn @click="openDialogthePlusNonCancellablecs2">
        <span class="txt">멤버십 해지 불가 - 혜택 사용 이력이 있을 시</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogthePlusNonCancellablecs1">
        <DialogthePlusNonCancellablecs1 @close="closeDialogthePlusNonCancellablecs1" />
      </v-dialog>
      <!-- //팝업 -->

      <!-- 팝업 -->
      <v-dialog v-model="DialogthePlusNonCancellablecs2">
        <DialogthePlusNonCancellablecs2 @close="closeDialogthePlusNonCancellablecs2" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogthePlusNonCancellablecs1 from '~/pages/POPUP/DialogthePlusNonCancellablecs1.vue'
import DialogthePlusNonCancellablecs2 from '~/pages/POPUP/DialogthePlusNonCancellablecs2.vue'
export default {
  components: {
    DialogthePlusNonCancellablecs1,
    DialogthePlusNonCancellablecs2
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogthePlusNonCancellablecs1 : false,
      DialogthePlusNonCancellablecs2 : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogthePlusNonCancellablecs1(){
      this.DialogthePlusNonCancellablecs1 = true
    },
    closeDialogthePlusNonCancellablecs1(){
      this.DialogthePlusNonCancellablecs1 = false
    },
    openDialogthePlusNonCancellablecs2(){
      this.DialogthePlusNonCancellablecs2 = true
    },
    closeDialogthePlusNonCancellablecs2(){
      this.DialogthePlusNonCancellablecs2 = false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/theplusmember.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
