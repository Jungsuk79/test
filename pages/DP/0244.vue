<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogRealSize = true">
        [팝업] 실측사이즈
      </v-btn>


      <!--[팝업] 실측사이즈-->
      <v-dialog
        v-model="DialogRealSize"
        content-class="bt-none">
        <DialogRealSize :list-style="'default'" @close="DialogRealSize=false" />
      </v-dialog>
    </div>
  </div>
</template>

<script>
import DialogRealSize from '~/pages/POPUP/DialogRealSize.vue'
export default {
  components: {
    DialogRealSize,
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogRealSize : false,
  }),
  methods: {
    closeDialog(){
      this.$emit('close')
    },
  },
}
</script>
<style lang="scss">
</style>
