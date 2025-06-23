<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogShopStock = true">
        매장재고확인 POPUP
      </v-btn>

      <!-- 매장재고확인 POPUP -->
      <v-dialog
        v-model="DialogShopStock">
        <DialogShopStock @close="DialogShopStock=false" />
      </v-dialog>

    </div>
  </div>
</template>

<script>
import DialogShopStock from '~/pages/POPUP/DialogShopStock.vue' 
export default {
  components: {
    DialogShopStock
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogShopStock : false,
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
