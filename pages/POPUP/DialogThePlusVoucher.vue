<template>
  <DialogBasic class="popup-thePlusVoucher" header-title="플러스맵 이용권" :width="540" @hide="closeDialog">
    <template #body>
        <div class="list-wrap">
          <p class="mb-8 cmp-font fnt-16">사용가능 이용권</p>

          <div class="info-border-box cnt-line size1 px-0">
            <div v-for="(n, index) in 6" :key="index" class="box">
              <dl class="line">
                <dt class="tit">주문번호</dt>
                <dd class="txt"><nuxt-link to="" class="underline">123511231232</nuxt-link></dd>
              </dl>
              <dl class="line">
                <dt class="tit">상품명</dt>
                <dd class="txt">스캘럽 칼라 니트 탑</dd>
              </dl>
              <dl class="line">
                <dt class="tit">사용가능 일자</dt>
                <dd class="txt">2021.12.11</dd>
              </dl>
            </div>
            <CommonNoData msg="아직 사용가능한 플러스맵 이용권을 받지 않았어요.<br />더한섬닷컴을 이용하고 이용권을 받아 보세요."/>
          </div>
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
