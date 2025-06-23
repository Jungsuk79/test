<template>
  <DialogBasic
    class="popup-csCustomerIdeaInfomation"
    header-title="고객님의 소중한 의견에<br>항상 귀 기울이겠습니다."
    @hide="closeDialogDelivery"
  >
      <template #body>
        <div class="inner">
          <section>
            <!-- <h4 class="cmp-font fnt-20 text-center">고객님의 소중한 의견에<br>항상 귀 기울이겠습니다.</h4> -->
            <ul class="info-list">
              <li>
                <v-btn depressed tile block large :ripple="false" color="primary">오프라인 매장 문의</v-btn>
                <h5 class="bottom-text">브랜드와 상품에 대한 제안 및  매장 서비스 칭찬 또는 불편사항</h5>
              </li>
              <li>
                <v-btn depressed tile block large :ripple="false" color="primary">더한섬닷컴 문의</v-btn>
                <h5 class="bottom-text">더한섬닷컴 상품/주문/배송 등 온라인쇼핑 관련문의</h5>
              </li>
            </ul>
          </section>
        </div>
      </template>
    </DialogBasic>
</template>
<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  components: { DialogBasic },
  data: () => ({
    // 팝업
    DialogBasic: false,
  }),
  methods: {
    closeDialogDelivery() {
      this.DialogDelivery = false
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss"></style>
