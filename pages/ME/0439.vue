<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialognumMismatch = true">
        인증 불가
      </v-btn>
      <v-btn 
        large
        color="primary"
        @click="DialogPersonalInfoCheck = true">
        개인정보 제3자 제공 동의 POPUP
      </v-btn>

       <!-- 인증 불가 -->
      <v-dialog
        v-model="DialognumMismatch">
        <DialognumMismatch @close="DialognumMismatch=false" />
      </v-dialog>

       <!-- 개인정보 제3자 제공 동의 POPUP -->
      <v-dialog
        v-model="DialogPersonalInfoCheck">
        <DialogPersonalInfoCheck @close="DialogPersonalInfoCheck=false" />
      </v-dialog>
    </div>
  </div>
</template>

<script>
import DialognumMismatch from '~/pages/POPUP/DialognumMismatch.vue' 
import DialogPersonalInfoCheck from '~/pages/POPUP/DialogPersonalInfoCheck.vue' 
export default {
  components: {
    DialognumMismatch,
    DialogPersonalInfoCheck
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialognumMismatch : false,
    DialogPersonalInfoCheck : false,
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
