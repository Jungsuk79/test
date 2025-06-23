<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogthePlusCancelThird">
        <span class="txt">더플러스+ 멤버십 해지사유</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogthePlusCancelThird">
        <DialogthePlusCancelThird @close="closeDialogthePlusCancelThird" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogthePlusCancelThird from '~/pages/POPUP/DialogthePlusCancelThird.vue'
export default {
  components: {
    DialogthePlusCancelThird
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogthePlusCancelThird : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogthePlusCancelThird(){
      this.DialogthePlusCancelThird = true
    },
    closeDialogthePlusCancelThird(){
      this.DialogthePlusCancelThird = false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/theplusmember.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
