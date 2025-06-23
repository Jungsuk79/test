<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="openDialog">
        더한섬닷컴 개인정보 처리방침 POPUP
      </v-btn>

      <!-- 더한섬닷컴 개인정보 처리방침 POPUP -->
      <!-- 아래 methods에 팝업시 스크롤 관련 openDialog, closeDialog, onDialogInput 도 같이 사용되어야 합니다. -->
      <v-dialog
        v-model="isDialogPrivacyPolicyContent"
        @input="onDialogInput">
        <DialogPrivacyPolicyContent @close="closeDialog" />
      </v-dialog>
      <div style="height:1000px;"></div>
    </div>
  </div>
</template>

<script>
import DialogPrivacyPolicyContent from '~/pages/POPUP/DialogPrivacyPolicyContent.vue' 
export default {
  components: {
    DialogPrivacyPolicyContent
  },
  layout: 'LayoutBasics',
  data: () => ({
    isDialogPrivacyPolicyContent : false,
  }),
  methods: {
    // closeDialog(){
    //   this.$emit('close')
    // },
    openDialog() {
      this.isDialogPrivacyPolicyContent = true

      this.$nextTick(() => {
        const popScroll = document.querySelector('.popup-privacy .popup-body')
        if(popScroll) {
          popScroll.scrollTop = 0
        }
      })

      this.scrollPosition = window.pageYOffset;
      // document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${this.scrollPosition}px`;
      document.body.style.width = '100%';
    },
    closeDialog() {
      this.$emit('close')
      this.isDialogPrivacyPolicyContent = false
      
      // document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, this.scrollPosition);
    },
    onDialogInput(val) {
      // 팝업 닫힘 감지
      if (!val) {
        this.closeDialog()
      }
    }
  },
}
</script>
<style lang="scss">
 // @import '@/assets/scss/pages/member.scss'; 
</style>
