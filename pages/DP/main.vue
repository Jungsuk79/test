<template>
  <div class="contents contents-main">
    <div class="content-wrap">
      <component v-for="unit, idx in unitList" :key="idx" :is="unit.unitName" :data="unit.data" :unit-name="unit.unitName" class="main-unit" />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'LayoutMain',
  data: () => ({
    unitList: []
  }),
  created(){
    const me = this

    // 로컬 테스트 데이터
    const json = require("~/static/json/main.json") // 221123 메인 핫키워드 : MainHotKeyword 전체보기 link_url 추가
    me.unitList = json.list
    // 로컬 테스트 데이터
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/main.scss'; 
</style>