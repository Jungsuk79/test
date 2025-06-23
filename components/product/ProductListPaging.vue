<template>

    <div class="list-paging">
      <nuxt-link :to="{}" class="lp-first"><span class="invisible">처음</span></nuxt-link>
      <nuxt-link :to="{}" class="lp-prev"><span class="invisible">이전</span></nuxt-link>
      <nuxt-link v-for="idx in 10" :key="idx" :to="{}" class="lp-page" :class="{on:idx===2}">{{idx}}</nuxt-link>
      <nuxt-link :to="{}" class="lp-next"><span class="invisible">다음</span></nuxt-link>
      <nuxt-link :to="{}" class="lp-last"><span class="invisible">마지막</span></nuxt-link>
    </div>

</template>

<script>
export default {
  props: {
  },
  data: () => ({
    length: 0
  }),
  created() {
  },

  methods:{
  }
}
</script>