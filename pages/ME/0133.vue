<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogUniteMemberChange = true">
        H.Point 통합 전환 안내
      </v-btn>

      <!-- H.Point 통합 전환 안내 POPUP -->
      <v-dialog
        v-model="DialogUniteMemberChange">
        <DialogUniteMemberChange @close="DialogUniteMemberChange=false" />
      </v-dialog>

    </div>
  </div>
</template>

<script>
import DialogUniteMemberChange from '~/pages/POPUP/DialogUniteMemberChange.vue' 
export default {
  components: {
    DialogUniteMemberChange
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogUniteMemberChange : false,
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
