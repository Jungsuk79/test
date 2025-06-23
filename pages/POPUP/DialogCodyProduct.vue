<template>
  <DialogBasic class="popup-recommend-style" header-title="코디한 상품" :width="540" @hide="closeDialog">
    <template #body>  
      <div class="prd-cnt1">
        <ProductList :list="codyList" :layout="productListLayout" :unit-type="productUnitType" />
      </div>
    </template>
  </DialogBasic>
</template>
<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'
export default {
  components: { 
    DialogBasic 
  },
  data: () => ({
    productListLayout : 2,
    productUnitType : 'mini',
    codyList : [],
  }),
  created() {
    const me = this
    const json = require('~/static/json/recommend_style_list.json')
    me.codyList = json.cody
  },
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped></style>
