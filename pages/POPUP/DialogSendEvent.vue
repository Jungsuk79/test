<template>
  <DialogBasic
    class="popup-basic popup-send-message btmfull-ver"
    header-title="보낸 메세지 카드"
    :width="540"
    @hide="closeDialog"
  >
    <template #body>
      <div class="inner">
        <div class="content-wrap">
            <div class="card-cnt">
              <img src="https://img.thehandsome.com/md/publish/event/250401_familyDay/card_1.jpg" alt="" />
            </div>
            <div v-if="cardMsg" class="msg-cnt">
              <CardMessage :msg="cardMsg" popup></CardMessage>
            </div>
        </div>
      </div>
    </template>
    <template #footer>
      <v-btn large color="primary">다시 보내기</v-btn>
    </template>
  </DialogBasic>
</template>
<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'
import CardMessage from '~/components/giftCard/CardMessage'
export default {
  components: {
    DialogBasic,
    CardMessage
  },
  data: () => ({
    DialogBasic: false, // 팝업
    cardMsg : '정신없이 달려와보니 어느덧 12월이네요. 빠르게 흐른 시간 만큼 올 한해도 정말 수고 많으셨습니다. 항상 몸조심 하시고, 2022년 건강하고 행복하게 시작하시길 바라요! 소중한 분들이 더욱 생각나는 하루입니다. 한 해를 돌아보니 더한섬님께 늘 감사한 마음뿐입니다. 임인년에도 가족 모두 건강하시고 만사형통하시길 바라며, 새해에는 뜻하는 바 모두 이루시길', // 230206 선물하기 : 추가
    cardSelectIdx : 0,
  }),
  methods: {
    closeDialog() {
      this.DialogSendEvent = false
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss">
</style>
