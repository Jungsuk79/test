export const state = () => ({
  counter: 0,
  locale: '',
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  SET_SERVICE: (state, service) => {
    state.service = service
  },
  setLocale(state, newLocale) {
    state.locale = newLocale.value
    console.log('state.locale', state.locale)
  },
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
      console.log('locale', locale)
    }
  },
}
