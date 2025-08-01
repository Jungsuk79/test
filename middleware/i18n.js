/*
 * 1. sets i18n.locale and state.locale if possible
 * 2. redirects if not with locale
 */
export default function ({
  isHMR,
  app,
  store,
  route,
  params,
  error,
  redirect,
}) {
  if (isHMR) {
    // ignore if called from hot module replacement
    return
  } // if url does not have language, redirect to korean
  else if (!params.lang) {
    return redirect('/ko' + route.fullPath)
  }
  // based on directory structure _lang/xxxx, en/about has params.lang as "ko"
  const locale = params.lang || 'ko'
  store.commit('SET_LANG', locale) // set store
  app.i18n.locale = store.state.locale
}
