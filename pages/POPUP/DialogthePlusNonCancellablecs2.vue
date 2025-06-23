<template>
  <DialogBasic class="popup-thePlusPay" header-title="멤버십 해지 불가" :width="380" @hide="closeDialog">
    <template #body>
        <p class="cmp-font fnt-16 text-center">한섬님은 혜택(혜택명1,<br />혜택명2, 혜택명3) 사용 및 플러스맵 이용<br />이력이 있어 즉시 해지가 불가하며, 다음차수에서<br />멤버십 해지가 가능합니다.</p>
        <p class="cmp-font fnt-16 text-center mt-10">다음 차수의 멤버십 해지를 원하실 경우,더플러스⁺<br />설정> 더플러스⁺ 정기결제 관리에서 ‘정기결제<br />취소‘ 를 통해 신청해주세요.</p>
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
