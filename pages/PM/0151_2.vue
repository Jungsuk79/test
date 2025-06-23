<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogCodyProduct">
        <span class="txt">코디한 상품 팝업</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogCodyProduct">
        <DialogCodyProduct @close="closeDialogCodyProduct" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogCodyProduct from '~/pages/POPUP/DialogCodyProduct.vue'
export default {
  components: {
    DialogCodyProduct
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogCodyProduct : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogCodyProduct(){
      this.DialogCodyProduct = true
    },
    closeDialogCodyProduct(){
      this.DialogCodyProduct = false
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
