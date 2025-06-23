<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogthePlusCancelFirst">
        <span class="txt">더플러스+ 멤버십 해지</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogthePlusCancelFirst">
        <DialogthePlusCancelFirst @close="closeDialogthePlusCancelFirst" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogthePlusCancelFirst from '~/pages/POPUP/DialogthePlusCancelFirst.vue'
export default {
  components: {
    DialogthePlusCancelFirst
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogthePlusCancelFirst : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogthePlusCancelFirst(){
      this.DialogthePlusCancelFirst = true
    },
    closeDialogthePlusCancelFirst(){
      this.DialogthePlusCancelFirst = false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/theplusmember.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
