<template>
<div>
  <nuxt-link :to="localePath('index')">{{ $t('home') }}</nuxt-link>
<nuxt-link :to="localePath('/')">{{ $t('home') }}</nuxt-link>
<nuxt-link :to="localePath('index', 'en')">Homepage in English</nuxt-link>
<nuxt-link :to="localePath('/app/profile')">Route by path to: {{ $t('Profile') }}</nuxt-link>
<nuxt-link :to="localePath('app-profile')">Route by name to: {{ $t('Profile') }}</nuxt-link>
<!-- <nuxt-link
  :to="localePath({ name: 'category-slug', params: { slug: category.slug } })">
  {{ category.title }} </nuxt-link> -->
<!-- It's also allowed to omit 'name' and 'path'. -->
<!-- <nuxt-link :to="localePath({ params: { slug: 'ball' } })">{{ category.title }}</nuxt-link> -->
<nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
<nuxt-link :to="switchLocalePath('ko')">한국어</nuxt-link>
<p>{{ $t('welcome') }}</p>
</div>
</template>

<script>
export default {
  head() {
    return { title: this.$t('welcome') } // branch test
  }
}
</script>

<style>

</style>