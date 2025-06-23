<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogMemberPasswordInfo = true">
        비밀번호 변경
      </v-btn>

       <!-- 비밀번호 변경 안내 POPUP -->
      <v-dialog
        v-model="DialogMemberPasswordInfo">
        <DialogMemberPasswordInfo @close="DialogMemberPasswordInfo=false" />
      </v-dialog>
    </div>
  </div>
</template>

<script>
import DialogMemberPasswordInfo from '~/pages/POPUP/DialogMemberPasswordInfo.vue' 
export default {
  components: {
    DialogMemberPasswordInfo
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogMemberPasswordInfo : false,
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
