<template>
  <DialogBasic class="popup-message" header-title="인증 불가" @hide="closeDialog">
    <template #body>  
      <div class="inner">
        <p class="text-center">인증 정보가 일치하지 않습니다<br />고객센터 82-1800-5700(유료)으로<br />문의하시기 바랍니다</p>
        <v-btn
          depressed
          tile
          large
          block
          :ripple="false"
          class="mt-34"
          color="primary">
          확인
        </v-btn>
      </div>
    </template>
  </DialogBasic>
</template>
<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  components: {
    DialogBasic,
  },
  data: () => ({
    DialogBasic: false, // 팝업
   
  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
