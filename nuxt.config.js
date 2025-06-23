// import colors from 'vuetify/es5/util/colors'

export default {
  target: 'static',
  server: {
    port: 8001,
    host: '0.0.0.0',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  // loading: './pages/hjsong/components/loading.vue',
  head: {
    // titleTemplate: '%s - handsome' + process.env.npm_package_name,
    titleTemplate: '더한섬닷컴 | THE HANDSOME.COM',
    title: 'handsome',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover',
      },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      // 다음 주소 검색 API
      { src: '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js' },
      // 카카오 로그인 API
      { src: 'https://developers.kakao.com/sdk/js/kakao.min.js' },
      // chatbot API
      {
        src: 'https://objectstorage.kr-central-1.kakaoi.io/v1/735f5d2ed4d742468bcbcd6e533b26aa/kakaoi-webchatbot-sdk/v1.0.0/kakaoi.js',
      },
      // html용 swiper js (230112 swiper)
      {
        src : '/resource/swiper-bundle.min.js'
      },
      // html용 swiper 실행 (230117 swiper) // 230119 swiper : 삭제
      /* {
        src : '/resource/editor-swiper-init.js'
      } */
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~plugins/persistedState.js',
      ssr: false,
    },
    { src: '~/plugins/i18n.js' },
    { src: '~/plugins/inipay.js' },
    { src: '~/plugins/directives.js' },
    { src: '~/plugins/filters.js' },
    { src: '~/plugins/mixins.js' },
    { src: '~/plugins/vuetify.js' },
    { src: '~plugins/nuxt-video-player-plugin.js', ssr: false },
    { src: '~/plugins/index.js', ssr: false },
  ],
  css: ['video.js/dist/video-js.css'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    //'@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa',
    '@nuxtjs/device',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'nuxt-lazy-load',
      {
        // These are the default values
        images: true,
        videos: true,
        audios: true,
        iframes: true,
        native: false,
        polyfill: true,
        directiveOnly: true,

        // To remove class set value to false
        loadingClass: 'isLoading',
        loadedClass: 'isLoaded',
        appendClass: 'lazyLoad',

        observerConfig: {
          // See IntersectionObserver documentation
        },
      },
    ],
    [
      '@nuxtjs/i18n',
      {
        locales: [
          {
            code: 'en',
            name: 'English',
            file: 'en-US.js',
          },
          {
            code: 'ko',
            name: '한국어',
            file: 'ko-KR.js',
          },
        ],
        lazy: true,
        langDir: 'lang/',

        strategy: 'prefix',
        defaultLocale: 'ko',
        vueI18n: {
          fallbackLocale: ['ko'],
        },
      },
    ],
    'cookie-universal-nuxt',
    '@nuxtjs/proxy',
    '@nuxtjs/dayjs',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-healthcheck',
    [
      '@nuxtjs/dotenv',
      { filename: `.env.${process.env.NODE_ENV}`, systemvars: true },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
  },
  proxy: {
    '/api/': {
      target: 'https://yts-proxy.now.sh/list_movies.json',
      pathRewrite: { '^/api:': '/' },
      chagneOrigin: true,
    },
    '/smilePay/': {
      target: 'https://pg.cnspay.co.kr',
      pathRewrite: { '^/smilePay:': '/' },
      chagneOrigin: true,
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/scss/variables.scss'],
    treeShake: true,
    defaultAssets: false,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: ['~assets/scss/_index.scss'],

  // styleResources: { scss: ['~/assets/scss/_index.scss'] },
  // PWA 설정
  manifest: {
    name: 'handsome',
    short_name: 'handsome',
    description: 'HANDSOME FRONT PC Ver 0.1',
    start_url: '/?standalone=true',
    display: 'standalone',
    background_color: '#ffffff',
  },
  workbox: {
    offline: false,
    runtimeCaching: [
      {
        urlPattern: '/*',
        handler: 'networkFirst',
        method: 'GET',
      },
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {},
    // extractCSS: true,
    extractCSS: {
      ignoreOrder: true,
    },
  },

  // 서버 미들웨어 설정
  serverMiddleware: [
    // Will register file from project api directory to handle /api/* requires
    { path: '/api', handler: '~/api/index.js' },
    // { path: '/checkplus_main', handler: '~/api/niceid.js' },
    // { path: '/ipin_main', handler: '~/api/niceidipin.js' },
  ],

  healthcheck: {
    path: '/actuator/health/liveness',
    contentType: 'application/json',
    healthy: () => {
      return JSON.stringify({ status: 'UP' })
    },
  },

  // router: {
  //   mode: `history`,
  //   extendRoutes (routes, resolve) {
  //     routes.length = 0
  //     routes.push({
  //       path: "/",
  //       component: resolve(__dirname, 'pages/pc/index.vue'),
  //       name: "index"
  //     })
  //   }
  // }

  // 원격 데이터 수집 참여 끄기
  telemetry: false,
}
