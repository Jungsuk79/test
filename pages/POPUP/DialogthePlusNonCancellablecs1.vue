<template>
  <DialogBasic class="popup-thePlusPay" header-title="멤버십 해지 불가" :width="380" @hide="closeDialog">
    <template #body>
        <p class="cmp-font fnt-16 text-center">한섬님은 더플러스⁺ 가입일로부터<br />14일이 지나 즉시 해지가 불가하며,<br />다음 차수에서 멤버십 해지가 가능합니다.</p>
        <p class="cmp-font fnt-16 text-center mt-10">다음 차수의 멤버십 해지를 원하실 경우,<br />‘더플러스⁺ 설정 > 정기 결제 관리’에서<br />‘정기 결제 취소‘ 를 통해 신청해주세요.</p>
        <div class="popup-btn-box">
          <v-btn large block color="primary">다음차수 해지신청 바로가기</v-btn>
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
@import '@/assets/scss/pages/theplusmember.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>
