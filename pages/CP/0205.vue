<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogPrivacyPolicy = true">
        이전 개인정보처리방침 POPUP
      </v-btn>

      <!-- 이전 개인정보처리방침 POPUP -->
      <v-dialog
        v-model="DialogPrivacyPolicy">
        <DialogPrivacyPolicy @close="DialogPrivacyPolicy=false" />
      </v-dialog>

    </div>
  </div>
</template>

<script>
import DialogPrivacyPolicy from '~/pages/POPUP/DialogPrivacyPolicy.vue' 
export default {
  components: {
    DialogPrivacyPolicy
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogPrivacyPolicy : false,
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
