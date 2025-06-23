<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogRecommendID = true">
       추천인 ID 등록(POPUP)
      </v-btn>

      <!-- 임직원 로그인 POPUP -->
      <v-dialog
        v-model="DialogRecommendID">
        <DialogRecommendID @close="DialogRecommendID=false" />
      </v-dialog>
    </div>
  </div>
</template>

<script>
import DialogRecommendID from '~/pages/POPUP/DialogRecommendID.vue' 
export default {
  components: {
    DialogRecommendID
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogRecommendID : false,
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
