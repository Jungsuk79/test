<template>
  <DialogBasic header-title="매장위치" class="popup-store-map" :width="540" @hide="closeDialog">
    <template #body>
      <h2 class="pop-tit">현대백화점 목동점</h2>
      <p class="pop-txt">서울특별시 양천구 목동동로 257</p>
      <div class="map-box">
        <img src="https://img.thehandsome.com/md/publish/dummy/pc/map2.png"/><!-- 지도 더미 이미지 -->
      </div>
    </template>
  </DialogBasic>
</template>
<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  components: { DialogBasic},
  props: {
    
  },
  data: () => ({
    
  }),
  mounted() {
    
  },
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped></style>
