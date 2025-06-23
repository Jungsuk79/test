<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialogStoreMap">
        <span class="txt">매장위치 팝업</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="DialogStoreMap">
        <DialogStoreMap @close="closeDialogStoreMap" />
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogStoreMap from '~/pages/POPUP/DialogStoreMap.vue'
export default {
  components: {
    DialogStoreMap
  },
  layout: 'LayoutBasics',
  data() {
    return {
      DialogStoreMap : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialogStoreMap(){
      this.DialogStoreMap = true
    },
    closeDialogStoreMap(){
      this.DialogStoreMap = false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/order.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
