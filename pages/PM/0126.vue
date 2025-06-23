<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogFitGuide = true">
        핏가이드  POPUP
      </v-btn>

      <!-- 핏가이드  POPUP -->
      <v-dialog
        v-model="DialogFitGuide">
        <DialogFitGuide @close="DialogFitGuide=false" />
      </v-dialog>

    </div>
  </div>
</template>

<script>
import DialogFitGuide from '~/pages/POPUP/DialogFitGuide.vue' 
export default {
  components: {
    DialogFitGuide
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogFitGuide : false,
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
