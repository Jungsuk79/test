
<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogDelivery">
        <span class="txt">배송/교환/반품(popup)</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogDelivery">
        <DialogDelivery @close="closeDialogDelivery" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogDelivery from '~/pages/en/POPUP/DialogDelivery.vue'

export default {
  components: {
    DialogDelivery
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogDelivery : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogDelivery(){
      this.DialogDelivery = true
    },
    closeDialogDelivery(){
      this.DialogDelivery = false
    }
  }
}
</script>
<style lang="scss">
    @import '@/assets/scss/pages/detail.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
    @import '@/assets/scss/en/en.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>
