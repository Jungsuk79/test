<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogBigBenefit = true">
        최대혜택가 POPUP
      </v-btn>

      <!-- 사이즈 조건표 POPUP -->
      <v-dialog
        v-model="DialogBigBenefit">
        <DialogBigBenefit @close="DialogBigBenefit=false" />
      </v-dialog>

    </div>
  </div>
</template>

<script>
import DialogBigBenefit from '~/pages/POPUP/DialogBigBenefit.vue' 
export default {
  components: {
    DialogBigBenefit
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogBigBenefit : false,
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
