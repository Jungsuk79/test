<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogShopStockList = true">
        매장재고확인 POPUP
      </v-btn>

      <!-- 매장재고확인 POPUP -->
      <v-dialog
        v-model="DialogShopStockList">
        <DialogShopStockList @close="DialogShopStockList=false" />
      </v-dialog>

    </div>
  </div>
</template>

<script>
import DialogShopStockList from '~/pages/POPUP/DialogShopStockList.vue' 
export default {
  components: {
    DialogShopStockList
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogShopStockList : false,
  }),
  methods: {
    closeDialog(){
      this.$emit('close')
    },
  },
}
</script>
<style lang="scss">
 // @import '@/assets/scss/pages/member.scss'; 
</style>
