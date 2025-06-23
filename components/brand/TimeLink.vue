<template>
  <div class="time-unit-wrap">
    <div v-background-image="{url:data.image_url}" class="tu-blur-bg"></div>
    <div class="time-unit-cont">
      <ul class="tl-links">
        <li v-for="itm, idx in data.list" :key="idx">
          <nuxt-link :to="{path:itm.link_url}">{{itm.title}}</nuxt-link>
        </li>
        <!-- 개발 확인용. 글로벌에서 노출 -->
        <!-- <li>
          <p class="cmp-font fnt-24 c-white">THE HANSOME.COM</p>
        </li>
        <li>
          <nuxt-link to="#">INSTAGRAM</nuxt-link>
        </li> -->
      </ul>
    </div>
    </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data: () => ({
  }),
  created(){
  },
  methods: {
  },
}
</script>