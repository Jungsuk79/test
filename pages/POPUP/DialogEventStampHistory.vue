<template>
  <DialogBasic 
    class="popup-basic popup-stamp-history" 
    header-title="스탬프 이력" 
    @hide="closeDialog"
    :width="540"
  >
    <template #body>
      <div class="inner">
        <p class="total">총 스탬프 개수<strong>12개</strong></p>
        <div class="info-border-box cnt-line px-0">
          <div class="box" v-for="n in 3" :key="n">
            <dl class="line">
              <dt class="tit">주문번호</dt>
              <dd class="txt">
                <nuxt-link to="" class="underline">3300129491868777</nuxt-link>
              </dd>
            </dl>
            <dl class="line">
              <dt class="tit">주문날짜</dt>
              <dd class="txt">2020.05.05</dd>
            </dl>
            <dl class="line">
              <dt class="tit">실결제금액</dt>
              <dd class="txt">345,000</dd>
            </dl>
            <dl class="line">
              <dt class="tit">스템프 개수</dt>
              <dd class="txt">4</dd>
            </dl>
          </div>
        </div>
        <!-- 스탬프 이력 없을때 -->
        <!-- <CommonNoData msg="스탬프 이력이 없습니다.<br><br>이벤트 내용을 확인 하신 후,<br>스탬프를 찍어서 리워드 받아보세요!"></CommonNoData> -->
        <!-- //스탬프 이력 없을때 -->
      </div>
    </template>
  </DialogBasic>
</template>
<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  components: { DialogBasic },
  data: () => ({
  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped></style>
