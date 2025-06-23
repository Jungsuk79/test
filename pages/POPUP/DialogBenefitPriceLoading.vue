<template>
  <div class="popup-priceApplyLoading">
    <div class="loading-box">loading</div>
    <p class="txt0">최대할인 혜택 계산 중</p>
    <p v-if="hPointPayMemeber" class="txt1">최대할인 혜택을 H.Point Pay에서<br>자동 적용하여 편리한 결제가 가능합니다.</p>
    <p v-else class="txt1">최대할인 혜택을 자동 적용하여<br>주문/결제시 최대할인 혜택을 드립니다.</p>
  </div>
</template>
<script>
export default {
  props: {
    hPointPayMemeber: {
      type : Boolean,
      default : false, 
    },
  },
  data: () => ({
    
  }),
  methods: {
    
  },
}
</script>

<style lang="scss" scoped>
</style>
