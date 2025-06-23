<template>
  <v-app class="ui-wrap ui-wrap-main" :class="langType"><!--// id:app --><!-- 글로벌 작업 : langType 추가 -->
    <!-- <AppBanner /> -->
    <Header v-if="visibility.header" :header-type="'main'" :lang-type="langType"/><!-- 글로벌 작업 : langType 추가 -->
    <SearchLayer v-if="visibility.search" />
    <!-- container -->
    <v-main class="ui-container main-container">
      <!-- <PubBreadcrumbs /> -->
      <Nuxt />
    </v-main>
    <!--// container -->
    <Footer v-if="visibility.footer" :lang-type="langType"/><!-- 글로벌 작업 : langType 추가 -->
    <TopButton v-if="visibility.topbutton" />
    <!-- <Gnb /> -->
  </v-app>
</template>

<script>
import EventBus from '~/api/common/EventBus'
/* import AppBanner from '~/components/common/AppBanner.vue' */
import Header from '~/components/common/Header.vue'
import SearchLayer from '~/components/common/SearchLayer.vue'
/* import Breadcrumbs from '~/components/common/Breadcrumbs.vue' */
import Footer from '~/components/common/Footer.vue'
/* import Gnb from '~/components/common/Gnb.vue' */
import TopButton from '~/components/common/TopButton.vue'

export default {
  components: {
    /* AppBanner, */
    Header,
    /* Breadcrumbs, */
    Footer,
    TopButton,
    SearchLayer,
    /* Gnb, */
  },
  data: () => ({
    visibility : {
      header : true,
      footer : true,
      topbutton : true,
      search : true,
      // gnb : true,
      // filter : false
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
      me.visibility.header = (data.header !== false)
      me.visibility.footer = (data.footer !== false)
      me.visibility.topbutton = (data.topbutton !== false)
      me.visibility.search = (data.search !== false)
      // me.visibility.gnb = (data.gnb !== false)
      // me.visibility.filter = (data.filter === true)
    },
  }
}
</script>
<style lang="scss" scoped></style>
