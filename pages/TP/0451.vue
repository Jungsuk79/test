<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogthePlusCancelSecond">
        <span class="txt">더플러스+ 멤버십 해지하기</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogthePlusCancelSecond">
        <DialogthePlusCancelSecond @close="closeDialogthePlusCancelSecond" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogthePlusCancelSecond from '~/pages/POPUP/DialogthePlusCancelSecond.vue'
export default {
  components: {
    DialogthePlusCancelSecond
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogthePlusCancelSecond : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogthePlusCancelSecond(){
      this.DialogthePlusCancelSecond = true
    },
    closeDialogthePlusCancelSecond(){
      this.DialogthePlusCancelSecond = false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/theplusmember.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
