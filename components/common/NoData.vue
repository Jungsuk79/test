<template>
  <div class="cmp-noData">
    <div class="inner">
      <slot name="message">
        <!-- eslint-disable -->
        <p class="info-text" v-html="msg"></p>
        <!-- eslint-disable -->
      </slot>
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: () => {
        return ''
      },
    }
  }
}
</script>

<style>

</style>