<template>
  <div class="magazine-unit magazine-unit-title">
    <div class="mut-title">{{data.title}}</div>
    <div class="mut-detail">{{data.desc}}</div>
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

<style lang="scss" scoped></style>
