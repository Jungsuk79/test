<template>
  <DialogNoticeBasic
    class="list-var"
    :width="380"
    @hide="closeDialog"
  >
    <template #body>
      <div class="cmp-sub-tit small center">
        <h3 class="tit">더한섬닷컴 시스템 점검 안내</h3>
      </div>
      <p class="cmp-font fnt-14 text-center">
        더욱 안정적인 서비스를 제공하기 위해<br/>
        시스템 점검 작업이 예정되어 있습니다.<br/>
        점검 시간 동안 서비스 이용이 <br/>
        불가한 점 양해 부탁 드립니다.<br/>
        감사합니다.<br/>
        <br/>
        점검 시간<br/>
        9월 10일(토), 2:00 ~ 7:00<br/>
        상기 점검 시간은 사정에 의해 변경될 수 있습니다.<br/>
        <br/>
        고객센터 1800-5700<br/>
        평일 : 9:00 ~ 18:00<br/>
        shophelp@thehandsome.com
      </p>
      <div class="cmp-sub-tit small center mt-20">
        <h3 class="tit">더한섬닷컴 시스템 점검 안내</h3>
      </div>
      <p class="cmp-font fnt-14 text-center">
        더욱 안정적인 서비스를 제공하기 위해<br/>
        시스템 점검 작업이 예정되어 있습니다.<br/>
        점검 시간 동안 서비스 이용이 <br/>
        불가한 점 양해 부탁 드립니다.<br/>
        감사합니다.<br/>
        <br/>
        점검 시간<br/>
        9월 10일(토), 2:00 ~ 7:00<br/>
        상기 점검 시간은 사정에 의해 변경될 수 있습니다.<br/>
        <br/>
        고객센터 1800-5700<br/>
        평일 : 9:00 ~ 18:00<br/>
        shophelp@thehandsome.com
      </p>
    </template>
  </DialogNoticeBasic>
</template>
<script>
import DialogNoticeBasic from '~/pages/POPUP/DialogNoticeBasic.vue'

export default {
  components: { 
    DialogNoticeBasic
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

<style lang="scss"></style>
