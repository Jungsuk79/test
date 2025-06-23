<template>
  <DialogBasic class="popup-thePlusPay" header-title="더플러스⁺ 해지완료" :width="380" @hide="closeDialog">
    <template #body>
        <p class="cmp-font fnt-16 text-center">한섬님의 더플러스⁺ 해지가 완료되었습니다.<br />멤버십의 혜택 및 리워드는 자동소멸되어<br />더 이상 사용하실 수 없습니다.</p>
        <p class="cmp-font fnt-16 text-center mt-10">그동안 더한섬닷컴의 더플러스⁺를<br />이용해 주셔서 진심으로 감사드립니다.</p>
        <p class="cmp-font fnt-16 text-center mt-10">궁금하신 사항은 ‘1:1 문의 > 더플러스⁺’ 또는<br />고객센터(1800-5700 유료)로 문의 부탁 드립니다.</p>
        <div class="popup-btn-box">
          <v-btn large block color="primary">확인</v-btn>
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
