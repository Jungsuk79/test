<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogNoMemberOrder = true">
        비회원 주문조회
      </v-btn>

       <!-- 비회원 주문조회 POPUP -->
      <v-dialog
        v-model="DialogNoMemberOrder">
        <DialogNoMemberOrder @close="DialogNoMemberOrder=false" />
      </v-dialog>
    </div>
  </div>
</template>

<script>
import DialogNoMemberOrder from '~/pages/POPUP/DialogNoMemberOrder.vue' 
export default {
  components: {
    DialogNoMemberOrder
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogNoMemberOrder : false,
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
