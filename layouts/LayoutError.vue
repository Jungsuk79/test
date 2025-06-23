<template>
  <v-app class="ui-wrap ui-error" :class="langType"><!--// id:app --><!-- 글로벌 작업 : langType 추가 -->
    <div>
      <div class="header-head">
        <nuxt-link :to="localePath('/ko/DP/main')" class="header-logo"><span class="invisible">로고</span></nuxt-link>
      </div>
      <v-main class="ui-container">
        <Nuxt />
      </v-main> 
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    langType : null, // 글로벌 작업 : 추가
  }),
  created(){
    const me = this
    me.langType = me.$i18n.locale // 글로벌 작업
  },
  mounted(){
    this.htmlOsClassSet() // 221209 mac : 추가
  },
  methods:{
    
  }
}
</script>

<style lang="scss" scoped>
  .header-head{
    max-width: 1800px;
    min-width: 1320px;
      margin: 56px 50px 0;
    height:72px;display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .header-logo{
    margin:0 auto;
    width:200px;height:24px;background:url(/images/common/header-footer-logo.svg) no-repeat 0 0;
  }
  .contents{
    padding: 36px 0;
    width: 100%;
  }
  .ui-container{
    margin-bottom: 50px;
  }
</style>
