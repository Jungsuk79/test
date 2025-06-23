<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogMemberDormancy = true">
        휴면 제한 해제
      </v-btn>

       <!-- 휴면 제한 해제 POPUP -->
      <v-dialog
        v-model="DialogMemberDormancy">
        <DialogMemberDormancy @close="DialogMemberDormancy=false" />
      </v-dialog>
    </div>
  </div>
</template>

<script>
import DialogMemberDormancy from '~/pages/POPUP/DialogMemberDormancy.vue' 
export default {
  components: {
    DialogMemberDormancy
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogMemberDormancy : false,
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
