<template>
  <DialogBasic class="popup-thePlusPay" header-title="정기 결제 카드 변경 완료" :width="380" @hide="closeDialog">
    <template #body>
      <div class="text-center">
        <i class="cmp-icon-etc cmp-icon-80 i-change"></i>
        <p class="mt-14">김한섬 고객님 더플러스⁺<br>정기 결제 카드 변경이 완료되었습니다.</p>
      </div>
      <div class="popup-btn-box">
        <v-btn large block color="primary" :disabled="false">정기 결제 관리 바로가기</v-btn>
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
  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/order.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>
