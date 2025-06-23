<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogserviceContent = true">
        이전 서비스 약관 POPUP
      </v-btn>

      <!-- 이전 서비스 약관 POPUP -->
      <v-dialog
        v-model="DialogserviceContent">
        <DialogserviceContent @close="DialogserviceContent=false" />
      </v-dialog>

    </div>
  </div>
</template>

<script>
import DialogserviceContent from '~/pages/POPUP/DialogserviceContent.vue' 
export default {
  components: {
    DialogserviceContent
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogserviceContent : false,
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
