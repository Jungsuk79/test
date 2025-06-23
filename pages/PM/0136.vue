<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogSizeGuide = true">
        사이즈 조건표 POPUP
      </v-btn>

      <!-- 사이즈 조건표 POPUP -->
      <v-dialog
        v-model="DialogSizeGuide">
        <DialogSizeGuide @close="DialogSizeGuide=false" />
      </v-dialog>

    </div>
  </div>
</template>

<script>
import DialogSizeGuide from '~/pages/POPUP/DialogSizeGuide.vue' 
export default {
  components: {
    DialogSizeGuide
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogSizeGuide : false,
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
