<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogCoupon = true">
        쿠폰 POPUP
      </v-btn>

      <!-- 쿠폰 POPUP -->
      <v-dialog
        v-model="DialogCoupon">
        <DialogCoupon @close="DialogCoupon=false" />
      </v-dialog>

    </div>
  </div>
</template>

<script>
import DialogCoupon from '~/pages/POPUP/DialogCoupon.vue' 
export default {
  components: {
    DialogCoupon
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogCoupon : false,
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
