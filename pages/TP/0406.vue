<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogthePlusPayComplete">
        <span class="txt">더플러스+ 멤버십 결제 완료</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogthePlusPayComplete">
        <DialogthePlusPayComplete @close="closeDialogthePlusPayComplete" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogthePlusPayComplete from '~/pages/POPUP/DialogthePlusPayComplete.vue'
export default {
  components: {
    DialogthePlusPayComplete
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogthePlusPayComplete : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogthePlusPayComplete(){
      this.DialogthePlusPayComplete = true
    },
    closeDialogthePlusPayComplete(){
      this.DialogthePlusPayComplete = false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/theplusmember.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
