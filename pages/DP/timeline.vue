<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogTimelime = true">
        타임라인
      </v-btn>
     
     
      <!-- 타임라인 POPUP -->
      <v-navigation-drawer v-model="DialogTimelime" fixed temporary right width="500px" overlay-color="#000" overlay-opacity="0.5" class="test">
        <DialogTimelime @close="DialogTimelime=false" />
      </v-navigation-drawer>

    </div>
  </div>
</template>

<script>
// import EventBus from '~/api/common/EventBus'
import DialogTimelime from '~/pages/POPUP/DialogTimelime.vue' 

export default {
  components: {
    DialogTimelime,
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogTimelime : false,
  }),
  created(){

  },
  methods: {

  },
}
</script>
<style lang="scss">
</style>
