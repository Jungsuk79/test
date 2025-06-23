<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogLoginOffcers = true">
       임직원 로그인
      </v-btn>

      <!-- 임직원 로그인 POPUP -->
      <v-dialog
        v-model="DialogLoginOffcers">
        <DialogLoginOffcers @close="DialogLoginOffcers=false" />
      </v-dialog>
    </div>
  </div>
</template>

<script>
import DialogLoginOffcers from '~/pages/POPUP/DialogLoginOffcers.vue' 
export default {
  components: {
    DialogLoginOffcers
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogLoginOffcers : false,
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
