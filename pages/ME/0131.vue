<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogSimpleMemberConfirm = true">
        간편회원 휴대폰 인증
      </v-btn>

      <!-- 간편회원 휴대폰 인증 POPUP -->
      <v-dialog
        v-model="DialogSimpleMemberConfirm">
        <DialogSimpleMemberConfirm @close="DialogSimpleMemberConfirm=false" />
      </v-dialog>

      
    </div>
  </div>
</template>

<script>
import DialogSimpleMemberConfirm from '~/pages/POPUP/DialogSimpleMemberConfirm.vue' 
export default {
  components: {
    DialogSimpleMemberConfirm
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogSimpleMemberConfirm : false,
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
