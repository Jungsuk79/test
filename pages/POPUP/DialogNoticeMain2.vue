<template>
  <DialogNoticeBasic
    :width="380"
    @hide="closeDialog"
  >
    <template #body>
      <!-- 링크 있는 경우 -->
      <nuxt-link v-if="link !== null" :to="link">
        <img :src="image" :alt="desc">
      </nuxt-link>

      <!-- 링크 없는 경우 -->
      <img v-if="link == null" :src="image" :alt="desc">
    </template>
  </DialogNoticeBasic>
</template>
<script>
import DialogNoticeBasic from '~/pages/POPUP/DialogNoticeBasic.vue'

export default {
  components: { 
    DialogNoticeBasic,
  },
  data: () => ({
    image : 'https://img.thehandsome.com/md/publish/dummy/pc/mainnotice-banner2.png',
    desc : '추석 연후 배송안내',
    link : '#n',
    // link : null,
  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss"></style>
