<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogOptionChange">
        <span class="txt">마이페이지 - 옵션변경</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogOptionChange">
        <DialogOptionChange @close="closeDialogOptionChange" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogOptionChange from '~/pages/POPUP/DialogOptionChange.vue'
export default {
  components: {
    DialogOptionChange
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogOptionChange : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogOptionChange(){
      this.DialogOptionChange = true
    },
    closeDialogOptionChange(){
      this.DialogOptionChange = false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/order.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
