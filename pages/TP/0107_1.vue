<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogthePlusJoinTerms = true">
        더플러스+ 이용약관 POPUP
      </v-btn>

      <!-- 더플러스+ 이용약관  POPUP -->
      <v-dialog
        v-model="DialogthePlusJoinTerms">
        <DialogthePlusJoinTerms @close="DialogthePlusJoinTerms=false" />
      </v-dialog>

    </div>
  </div>
</template>

<script>
import DialogthePlusJoinTerms from '~/pages/POPUP/DialogthePlusJoinTerms.vue' 
export default {
  components: {
    DialogthePlusJoinTerms
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogthePlusJoinTerms : false,
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
