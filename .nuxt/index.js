import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_2069b2d2 from 'nuxt_plugin_plugin_2069b2d2' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_plugin_f3261686 from 'nuxt_plugin_plugin_f3261686' // Source: .\\vuetify\\plugin.js (mode: 'all')
import nuxt_plugin_dayjsplugin_3c7a433a from 'nuxt_plugin_dayjsplugin_3c7a433a' // Source: .\\dayjs-plugin.js (mode: 'all')
import nuxt_plugin_cookieuniversalnuxt_651a70e2 from 'nuxt_plugin_cookieuniversalnuxt_651a70e2' // Source: .\\cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_pluginutils_23387718 from 'nuxt_plugin_pluginutils_23387718' // Source: .\\nuxt-i18n\\plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_caf5f682 from 'nuxt_plugin_pluginrouting_caf5f682' // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_eb3591e0 from 'nuxt_plugin_pluginmain_eb3591e0' // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_vlazyload_19a762b0 from 'nuxt_plugin_vlazyload_19a762b0' // Source: .\\v-lazy-load.js (mode: 'all')
import nuxt_plugin_axios_7562f58c from 'nuxt_plugin_axios_7562f58c' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_deviceplugin_5ddb7a76 from 'nuxt_plugin_deviceplugin_5ddb7a76' // Source: .\\device.plugin.js (mode: 'all')
import nuxt_plugin_workbox_2d9293d6 from 'nuxt_plugin_workbox_2d9293d6' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_456f5256 from 'nuxt_plugin_metaplugin_456f5256' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_4a16f7ca from 'nuxt_plugin_iconplugin_4a16f7ca' // Source: .\\pwa\\icon.plugin.js (mode: 'all')
import nuxt_plugin_persistedState_55796362 from 'nuxt_plugin_persistedState_55796362' // Source: ..\\plugins\\persistedState.js (mode: 'client')
import nuxt_plugin_i18n_1fba523a from 'nuxt_plugin_i18n_1fba523a' // Source: ..\\plugins\\i18n.js (mode: 'all')
import nuxt_plugin_inipay_59bfee7d from 'nuxt_plugin_inipay_59bfee7d' // Source: ..\\plugins\\inipay.js (mode: 'all')
import nuxt_plugin_directives_521c0486 from 'nuxt_plugin_directives_521c0486' // Source: ..\\plugins\\directives.js (mode: 'all')
import nuxt_plugin_filters_2dd71012 from 'nuxt_plugin_filters_2dd71012' // Source: ..\\plugins\\filters.js (mode: 'all')
import nuxt_plugin_mixins_9ca86422 from 'nuxt_plugin_mixins_9ca86422' // Source: ..\\plugins\\mixins.js (mode: 'all')
import nuxt_plugin_vuetify_d6afc2c2 from 'nuxt_plugin_vuetify_d6afc2c2' // Source: ..\\plugins\\vuetify.js (mode: 'all')
import nuxt_plugin_nuxtvideoplayerplugin_0b6b2e46 from 'nuxt_plugin_nuxtvideoplayerplugin_0b6b2e46' // Source: ..\\plugins\\nuxt-video-player-plugin.js (mode: 'client')
import nuxt_plugin_index_0c69654a from 'nuxt_plugin_index_0c69654a' // Source: ..\\plugins\\index.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const store = createStore(ssrContext)
  const router = await createRouter(ssrContext, config, { store })

  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"titleTemplate":"더한섬닷컴 | THE HANDSOME.COM","title":"handsome","htmlAttrs":{"lang":"en"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"},{"hid":"description","name":"description","content":""},{"name":"format-detection","content":"telephone=no"},{"hid":"charset","charset":"utf-8"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"handsome"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"handsome"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"handsome"},{"hid":"og:description","name":"og:description","property":"og:description","content":"HANDSOME FRONT PC Ver 0.1"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"hid":"shortcut-icon","rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.19af29.png"},{"hid":"apple-touch-icon","rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.19af29.png","sizes":"512x512"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.fd93803a.json","hid":"manifest"}],"script":[{"src":"\u002F\u002Ft1.daumcdn.net\u002Fmapjsapi\u002Fbundle\u002Fpostcode\u002Fprod\u002Fpostcode.v2.js"},{"src":"https:\u002F\u002Fdevelopers.kakao.com\u002Fsdk\u002Fjs\u002Fkakao.min.js"},{"src":"https:\u002F\u002Fobjectstorage.kr-central-1.kakaoi.io\u002Fv1\u002F735f5d2ed4d742468bcbcd6e533b26aa\u002Fkakaoi-webchatbot-sdk\u002Fv1.0.0\u002Fkakaoi.js"},{"src":"\u002Fresource\u002Fswiper-bundle.min.js"}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      errPageReady: false,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        nuxt.errPageReady = false
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_2069b2d2 === 'function') {
    await nuxt_plugin_plugin_2069b2d2(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_f3261686 === 'function') {
    await nuxt_plugin_plugin_f3261686(app.context, inject)
  }

  if (typeof nuxt_plugin_dayjsplugin_3c7a433a === 'function') {
    await nuxt_plugin_dayjsplugin_3c7a433a(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_651a70e2 === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_651a70e2(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_23387718 === 'function') {
    await nuxt_plugin_pluginutils_23387718(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_caf5f682 === 'function') {
    await nuxt_plugin_pluginrouting_caf5f682(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_eb3591e0 === 'function') {
    await nuxt_plugin_pluginmain_eb3591e0(app.context, inject)
  }

  if (typeof nuxt_plugin_vlazyload_19a762b0 === 'function') {
    await nuxt_plugin_vlazyload_19a762b0(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_7562f58c === 'function') {
    await nuxt_plugin_axios_7562f58c(app.context, inject)
  }

  if (typeof nuxt_plugin_deviceplugin_5ddb7a76 === 'function') {
    await nuxt_plugin_deviceplugin_5ddb7a76(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_2d9293d6 === 'function') {
    await nuxt_plugin_workbox_2d9293d6(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_456f5256 === 'function') {
    await nuxt_plugin_metaplugin_456f5256(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_4a16f7ca === 'function') {
    await nuxt_plugin_iconplugin_4a16f7ca(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_persistedState_55796362 === 'function') {
    await nuxt_plugin_persistedState_55796362(app.context, inject)
  }

  if (typeof nuxt_plugin_i18n_1fba523a === 'function') {
    await nuxt_plugin_i18n_1fba523a(app.context, inject)
  }

  if (typeof nuxt_plugin_inipay_59bfee7d === 'function') {
    await nuxt_plugin_inipay_59bfee7d(app.context, inject)
  }

  if (typeof nuxt_plugin_directives_521c0486 === 'function') {
    await nuxt_plugin_directives_521c0486(app.context, inject)
  }

  if (typeof nuxt_plugin_filters_2dd71012 === 'function') {
    await nuxt_plugin_filters_2dd71012(app.context, inject)
  }

  if (typeof nuxt_plugin_mixins_9ca86422 === 'function') {
    await nuxt_plugin_mixins_9ca86422(app.context, inject)
  }

  if (typeof nuxt_plugin_vuetify_d6afc2c2 === 'function') {
    await nuxt_plugin_vuetify_d6afc2c2(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_nuxtvideoplayerplugin_0b6b2e46 === 'function') {
    await nuxt_plugin_nuxtvideoplayerplugin_0b6b2e46(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_index_0c69654a === 'function') {
    await nuxt_plugin_index_0c69654a(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
