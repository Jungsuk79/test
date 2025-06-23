<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogthePlusCard">
        <span class="txt">더플러스+ 멤버십 결제 카드 변경완료</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogthePlusCard">
        <DialogthePlusCard @close="closeDialogthePlusCard" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogthePlusCard from '~/pages/POPUP/DialogthePlusCard.vue'
export default {
  components: {
    DialogthePlusCard
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogthePlusCard : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogthePlusCard(){
      this.DialogthePlusCard = true
    },
    closeDialogthePlusCard(){
      this.DialogthePlusCard = false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/theplusmember.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
