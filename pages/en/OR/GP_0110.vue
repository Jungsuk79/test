<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogRecommendProduct">
        <span class="txt">How about this product? POPUP</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogRecommendProduct">
        <DialogRecommendProduct @close="closeDialogRecommendProduct" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogRecommendProduct from '~/pages/en/POPUP/DialogRecommendProduct.vue'
export default {
  components: {
    DialogRecommendProduct
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogRecommendProduct : false,
    }
  },
  created() {
    
  },
  methods: {
    openDialogRecommendProduct(){
      this.DialogRecommendProduct = true
    },
    closeDialogRecommendProduct(){
      this.DialogRecommendProduct = false
    }
  }
}
</script>
<style lang="scss">
  @import '@/assets/scss/pages/order.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
  @import '@/assets/scss/en/en.scss'; // 글로벌 en scss
</style>
