<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="isDialogSearchFavorite = true">
        즐겨찾는 검색어
      </v-btn>

      <!-- [퍼블수정]24.08.27 검색 솔루션  -->
      <v-dialog
        v-model="isDialogSearchFavorite">
        <DialogSearchFavorite @close="isDialogSearchFavorite=false" />
      </v-dialog>

      
    </div>
  </div>
</template>

<script>
import DialogSearchFavorite from '~/pages/POPUP/DialogSearchFavorite.vue' 
export default {
  components: {
    DialogSearchFavorite
  },
  layout: 'LayoutBasics',
  data: () => ({
    isDialogSearchFavorite : false,
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
