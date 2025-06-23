<template>
  <div class="contents contents-type2">
    <div class="content-wrap">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'마이페이지'" :url="'/json/cl_left_menu.json'" :active="'/ko/CL/codiBook'" />
        <div class="contents-r-layout">
          <div class="layout-sel-wrap">
            <div class="cmp-page-tit">
              <h2 class="tit">코디 레이아웃 선택</h2>
            </div>

            
            <div class="layout-select-title">
              <div>코디를 시작할 레이아웃을 선택해 주세요.</div>
            </div>

            <div class="layout-select-list">
              <div v-for="idx in 10" :key="idx" class="layout-select-item" :class="{on : selectedLayout===idx}" @click="selectLayout(idx)">
                <CodibookLayout :data="{type:idx, border:1, list:[{},{},{},{},{},{}]}" />
              </div>
            </div>

            <div class="layout-select-btn">
              <nuxt-link :to="'/ko/CL/codiEdit?layout='+selectedLayout">다음</nuxt-link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CodibookLayout from "~/components/mypage/CodibookLayout.vue"

export default {
  components: {
    CodibookLayout
  },
  layout: 'LayoutBasics',
  data: () => ({
    selectedLayout : 1
  }),
  created() {
  },
  mounted(){
  },
  methods:{
    selectLayout(idx){
      const me = this
      me.selectedLayout = idx
    }
  }// methods
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/closet.scss';
</style>
