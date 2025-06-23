<template>
  <div class="magazine-unit magazine-unit-style-title">
    <div class="must-title">{{data.title}}</div>
    <div class="must-number">{{data.number}}</div>
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
