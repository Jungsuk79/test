<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogShoppingbagOptionChange">
        <span class="txt">쇼핑백 옵션변경</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogShoppingbagOptionChange">
        <DialogShoppingbagOptionChange @close="closeDialogShoppingbagOptionChange" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogShoppingbagOptionChange from '~/pages/en/POPUP/DialogShoppingbagOptionChange.vue'
export default {
  components: {
    DialogShoppingbagOptionChange
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogShoppingbagOptionChange : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogShoppingbagOptionChange(){
      this.DialogShoppingbagOptionChange = true
    },
    closeDialogShoppingbagOptionChange(){
      this.DialogShoppingbagOptionChange = false
    }
  }
}
</script>
<style lang="scss">
  @import '@/assets/scss/pages/order.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
  @import '@/assets/scss/en/en.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>
