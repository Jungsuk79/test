<template>
  <div class="contents contents-brand-system"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap"><!-- [퍼블수정]23.01.19 class wrap-full 삭제 -->
      <div v-for="unit, idx in unitList" :key="idx" class="system-main-unit">
        <component :is="unit.unitName" :data="unit.data" :unit-name="unit.unitName" :class="unit.unitName | kebabCase" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import EventBus from '~/api/common/EventBus'

export default {
  components: {
  },
  layout: 'LayoutBasics',

  data: () => ({
    unitList: [],
  }),

  created(){
    const me = this
    axios.get("/json/brandMain_system.json")
    .then(function(res){
      // me.unitList = res.data.list
      me.processData(res.data.list)
    })
    .catch(function(e){
      console.log(e)
    })
  },// created

  mounted(){
    EventBus.$emit("setHeader", {static: true, type: "brand", brand: "SYSTEM", brand_image : "/images/common/logo-system.svg"})
  },// mounted

  methods: {
   processData(list){
      const me = this
      // let cls
      list.forEach(function(unit){
        if(typeof(me.$options.components[unit.unitName]) !== "undefined"){
          // cls = me.$options.filters.kebabCase(unit.unitName)
          unit.classStr = me.$options.filters.kebabCase(unit.unitName)// cls + " " + cls + "-" + me.brandType
          me.unitList.push(unit)
        }
      })
    },
  }// methods
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/brand.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
