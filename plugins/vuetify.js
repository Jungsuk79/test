import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import { en, ko } from 'vuetify/es5/locale'
import '@/assets/scss/_index.scss' // _index.scss를 한번만 불러오면 자동으로 css로 컴파일 해줌

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: { ko, en },
    current: 'ko',
  },
  // preset,
  breakpoint: {
    scrollBarWidth: 17,
    thresholds: {
      xs: 3600,
      sm: 3600,
      md: 3600,
      lg: 3600,
    },
  },
  rtl: false,
  theme: {
    dark: false, // dark 타입일 경우 true
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#000000',
        brand: '#000000',
        point: '#DF2101',
        secondary: '#2950B1',
        accent: '#ED4444',
        error: '#DF2101',
        info: '#5093E1',
        success: '#5676C5',
        blue: '#2950B1',
        normal: '#E5E5E5',
        warning: '#FCB909',
        lightGrey: '#F0F0F0',
        grey: '#aaa',
        darkGrey: '#707070',
        chipsDefault: '#E5E5E5',
      },
      dark: {},
    },
  },
  global: {
    ripples: false,
  },
})
