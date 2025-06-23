<template>
  <v-app class="ui-wrap" :class="langType"><!--// id:app --><!-- 글로벌 작업 : langType 추가 -->
    <div class="ui-layout-wrap">
      <Header v-if="visibility.header" :lang-type="langType" /><!-- 글로벌 작업 : langType 추가 -->
      <!-- [231004_FO 통합검색&스라검색 영역 수정] 검색 영역 수정 -->
      <SearchLayer v-if="visibility.search" :lang-type="langType" />
      <!-- container -->
      <v-main class="ui-container">
        <Nuxt />
      </v-main>
      <!--// container -->
      <Footer v-if="visibility.footer" :lang-type="langType"/><!-- 글로벌 작업 : langType 추가 -->
      <TopButton v-if="visibility.topbutton" />
    </div>
    <FilterLayer v-if="visibility.filter" :lang-type="langType" /><!-- 글로벌 작업 : langType 추가 -->
    <!-- <TimeMenu v-if="visibility.timemenu" /> -->
    <!-- <Gnb v-if="visibility.gnb" /> -->
  </v-app>
</template>

<script>
import EventBus from '~/api/common/EventBus'
import Header from '~/components/common/Header.vue'
import Footer from '~/components/common/Footer.vue'
import SearchLayer from '~/components/common/SearchLayer.vue'
import TopButton from '~/components/common/TopButton.vue'
import FilterLayer from '~/components/common/FilterLayer.vue'
/* import Gnb from '~/components/common/Gnb.vue'
import TimeMenu from '~/components/brand/TimeMenu' */

export default {
  components: {
    Header,
    Footer,
    TopButton,
    FilterLayer,
    SearchLayer,
    /* Gnb,
    TimeMenu, */
  },
  data: () => ({
    visibility : {
      header : true,
      footer : true,
      actionbar : true,
      topbutton : true,
      gnb : true,
      search : true,
      filter : false,
      timemenu : false,
    },
    langType : null, // 글로벌 작업 : 추가
  }),
  created(){
    const me = this
    me.langType = me.$i18n.locale // 글로벌 작업
    EventBus.$on("setLayout", me.setLayout)
  },
  mounted(){
    const me = this
    me.checkDevMode()
    this.htmlOsClassSet() // 221209 mac : 추가
  },
  methods: {
    setLayout(data){
      const me = this
      const v = me.visibility
      v.header = (data.header !== false)
      v.footer = (data.footer !== false)
      v.actionbar = (data.actionbar !== false)
      v.topbutton = (data.topbutton !== false)
      v.search =  (data.search !== false)
      v.gnb = (data.gnb !== false)
      v.filter = (data.filter === true)
      v.timemenu = (data.timemenu === true)
    },
  },
}
</script>
<style lang="scss" scoped></style>
