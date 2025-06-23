<template>
  <v-app class="ui-wrap">
    <!-- container -->
    <v-main class="ui-container sub-container">
      <Nuxt />
    </v-main>
    <!-- // container -->
  </v-app>
</template>

<script>

export default {
  components: {

  },
  mounted(){
    const me = this
    me.checkDevMode()
  }
}

</script>
<style lang="scss" scoped></style>
