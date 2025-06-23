<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogthePlusServiceContent = true">
        더플러스+ 이용약관 POPUP
      </v-btn>

      <!-- 더플러스+ 이용약관  POPUP -->
      <v-dialog
        v-model="DialogthePlusServiceContent">
        <DialogthePlusServiceContent @close="DialogthePlusServiceContent=false" />
      </v-dialog>

    </div>
  </div>
</template>

<script>
import DialogthePlusServiceContent from '~/pages/POPUP/DialogthePlusServiceContent.vue' 
export default {
  components: {
    DialogthePlusServiceContent
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogthePlusServiceContent : false,
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
