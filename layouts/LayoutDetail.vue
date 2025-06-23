<template>
  <v-app class="ui-wrap ui-detail" :class="langType"><!--// id:app --><!-- 글로벌 작업 : langType 추가 -->
    <!-- <AppBanner /> -->
    <Header class="header-style-detail" :lang-type="langType"/><!-- 글로벌 작업 : langType 추가 -->
    <!-- container -->
    <v-main class="ui-container detail-container">
      <Nuxt />
    </v-main>
    <!--// container -->
    <TopButton />
  </v-app>
</template>

<script>
// import AppBanner from '~/components/common/AppBanner.vue'
import Header from '~/components/common/Header.vue'
import TopButton from '~/components/common/TopButton.vue'

export default {
  components: {
    Header,
    TopButton,
    // ActionBar,
  },
  data: () => ({
    langType : null, // 글로벌 작업 : 추가
  }),
  created() {
    const me = this
    me.langType = me.$i18n.locale // 글로벌 작업
  },
  mounted() {
    const me = this
    me.checkDevMode()
  },
  methods: {
    
  },
}
</script>
<style lang="scss" scoped></style>
