<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn @click="openDialog">
        <span class="txt">주문진행 안내(POPUP)</span>
      </v-btn>

      <!-- 팝업 -->
      <v-dialog v-model="isDialogInfo">
        <DialogBasic class="popup-message" header-title=" " @hide="closeDialog">
          <template #body>
            <div class="inner">
               <p class="msg-sub-txt">
                  지금 주문하시면 클래스 행사일이 임박하여<br />
                  주문취소/부분취소가 불가합니다.<br />
                  (행사일 5일전까지 주문취소 가능)
                </p>
               <p class="msg-sub-txt mt-20">
                  유의사항을 확인하셨고,<br />
                  계속 주문을 진행하시겠습니까?
                </p>
            </div>
            <div class="popup-btn-box">
              <v-btn large color="primary">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //팝업 -->
    </div>
  </div>
</template>

<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'
export default {
  components: {
    DialogBasic,
  },
  layout: 'LayoutBasics',
  data() {
    return {
      isDialogInfo : false,
    }
  },
  created(){
    
  },
  methods: {
    openDialog(){
      this.isDialogInfo = true
    },
    closeDialog(){
      this.isDialogInfo = false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/order.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
