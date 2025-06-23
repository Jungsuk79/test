<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogQnAResearchA = true">
        만족도 조사
      </v-btn>
      <v-btn 
        large
        color="primary"
        @click="DialogQnAResearchB = true">
        콜상담 문의
      </v-btn>
      <v-btn 
        large
        color="primary"
        @click="DialogQnAResearchC = true">
        세탁서비스 만족도 조사
      </v-btn>

      <!-- 이전 서비스 약관 POPUP -->
      <v-dialog
        v-model="DialogQnAResearchA">
        <DialogQnAResearchA @close="DialogQnAResearchA=false" />
      </v-dialog>

      <v-dialog
        v-model="DialogQnAResearchB">
        <DialogQnAResearchB @close="DialogQnAResearchB=false" />
      </v-dialog>

      <v-dialog
        v-model="DialogQnAResearchC">
        <DialogQnAResearchC @close="DialogQnAResearchC=false" />
      </v-dialog>

    </div>
  </div>
</template>

<script>
import DialogQnAResearchA from '~/pages/POPUP/DialogQnAResearch.vue' 
import DialogQnAResearchB from '~/pages/POPUP/DialogQnAResearchB.vue' 
import DialogQnAResearchC from '~/pages/POPUP/DialogQnAResearchC.vue' 
export default {
  components: {
    DialogQnAResearchA,
    DialogQnAResearchB,
    DialogQnAResearchC
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogQnAResearchA : false,
    DialogQnAResearchB : false,
    DialogQnAResearchC : false
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
