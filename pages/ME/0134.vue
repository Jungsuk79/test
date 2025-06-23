<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogUniteMember = true">
        H.Point 통합회원 가입 안내
      </v-btn>

      <!-- H.Point 통합회원 가입 안내 POPUP -->
      <v-dialog
        v-model="DialogUniteMember">
        <DialogUniteMember @close="DialogUniteMember=false" />
      </v-dialog>

      
    </div>
  </div>
</template>

<script>
import DialogUniteMember from '~/pages/POPUP/DialogUniteMember.vue' 
export default {
  components: {
    DialogUniteMember
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogUniteMember : false,
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
