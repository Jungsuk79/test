<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogEnterShipping">
        <span class="txt">배송지 등록/수정 (팝업)</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogEnterShipping">
        <DialogEnterShipping @close="closeDialogEnterShipping" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogEnterShipping from '~/pages/en/POPUP/DialogEnterShipping.vue'

export default {
  components: {
    DialogEnterShipping
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogEnterShipping : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogEnterShipping(){
      this.DialogEnterShipping = true
    },
    closeDialogEnterShipping(){
      this.DialogEnterShipping = false
    }
  }
}
</script>
<style lang="scss">
  @import '@/assets/scss/pages/order.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
  @import '@/assets/scss/en/en.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>
