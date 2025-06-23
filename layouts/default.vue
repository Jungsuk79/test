<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list>
        <!-- <v-list-item
          v-for="(movieItem, i) in movielItems"
          :key="i"
          
          :to="movieItem.to"
         
        >
          <v-list-item-content>
            <v-list-item-title v-text="movieItem.title" />
          </v-list-item-content>
        </v-list-item> -->
        <div v-for="(movieItem, i) in movielItems" :key="i">
          <nuxt-link :to="localePath(movieItem.to, $i18n.locale)">{{
            movieItem.title
          }}</nuxt-link>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <Header :dr-awer="drawer" @childClickDrawer="onClickDrawer" />
      <v-spacer />
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/common/Header.vue'
import Footer from '~/components/common/Footer.vue'

export default {
  components: { Header, Footer },

  data() {
    return {
      drawer: false,
      movielItems: [
        {
          title: 'home',
          to: '/',
        },
        {
          title: 'mjkang',
          to: '/mjkang',
        },
        {
          title: 'ryu',
          to: '/ryu',
        },
        {
          title: 'hjsong',
          to: '/hjsong',
        },
        {
          title: 'ji',
          to: '/order',
        },
        {
          title: 'test',
          to: '/test',
        },
      ],
    }
  },

  methods: {
    onClickDrawer(drawer) {
      this.drawer = drawer
    },
  },
}
</script>
