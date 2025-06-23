<template>
  <DialogBasic class="popup-basic popup-event-review" header-title="고객리뷰 안내" @hide="closeDialog">
    <template #body>
      <div class="inner">
        <h3 class="content-title">
          <v-img src="/images/event/ico-60-rewards.png"></v-img>
          더한섬닷컴 설문에 참여하시면<br>특별한 혜택을 드려요!
        </h3>
        <dl class="qa">
          <dt>고객 리뷰 설문은?</dt>
          <dd>
            더한섬닷컴을 이용하시는 회원을 대상으로 다양한 의견을 수렴하는 고객 참여형 설문 이벤트입니다.<br>
            설문에 참여하시는 회원에게는 한섬마일리지, 경품 등<br>다양한 혜택을 드리고 있습니다.
          </dd>
        </dl>
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

<style lang="scss"></style>
