<template>
  <div class="system-unit-wrap">
    <ul>
      <li v-for="item, idx in data.list" :key="idx">
        <nuxt-link :to="item.link_url">
          {{item.title}}<template v-if="idx!==(data.list.length-1)">,</template>
        </nuxt-link>
      </li>
    </ul>
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