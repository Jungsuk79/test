<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogCsCustomerIdea = true">
        안내
      </v-btn>

      <!-- 이전 서비스 약관 POPUP -->
      <v-dialog
        v-model="DialogCsCustomerIdea">
        <DialogCsCustomerIdea @close="DialogCsCustomerIdea=false" />
      </v-dialog>

    </div>
  </div>
</template>

<script>
import DialogCsCustomerIdea from '~/pages/POPUP/DialogCsCustomerIdea.vue' 
export default {
  components: {
    DialogCsCustomerIdea
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogCsCustomerIdea : false,
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
