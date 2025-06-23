<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogProductSearch = true">
        상품 선택
      </v-btn>

      <!-- 이전 서비스 약관 POPUP -->
      <v-dialog
        v-model="DialogProductSearch">
        <DialogProductSearch @close="DialogProductSearch=false" />
      </v-dialog>

    </div>
  </div>
</template>

<script>
import DialogProductSearch from '~/pages/en/POPUP/DialogProductSearch.vue' 
export default {
  components: {
    DialogProductSearch
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogProductSearch : false,
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
