<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-btn 
        large
        color="primary"
        @click="DialogNoticeMain1 = true">
        공지팝업 - 이미지
      </v-btn>

      <v-btn 
        large
        color="primary"
        @click="DialogNoticeMain2 = true">
        공지팝업 - 텍스트
      </v-btn>

      <v-btn 
        large
        color="primary"
        @click="DialogNoticeMain3 = true">
        공지팝업 - 이벤트 혼합 배너
      </v-btn>

      <v-btn 
        large
        color="primary"
        @click="DialogNoticeMain4 = true">
        공지팝업 - html 스와이프
      </v-btn>

      <!-- [퍼블수정]24.06.28 상품평 유도 팝업 -->
      <v-btn 
        large
        color="primary"
        @click="DialogNoticeMain5 = true">
        상품평 유도 팝업
      </v-btn>
      <!-- // [퍼블수정]24.06.28 상품평 유도 팝업 -->

      <!--[공지 팝업] 이미지-->
      <v-dialog
        v-model="DialogNoticeMain1"
        content-class="bt-none main-popup"
        transition="false"><!-- class main-popup 추가 -->
        <DialogNoticeMain :list-style="'default'" @close="DialogNoticeMain1=false" />
      </v-dialog>
  
      <!--[공지 팝업] 텍스트-->
      <v-dialog
        v-model="DialogNoticeMain2"
        content-class="bt-none main-popup"
        transition="false"><!-- class main-popup 추가 -->
        <DialogNoticeMain :list-style="'noticeText'" @close="DialogNoticeMain2=false" />
      </v-dialog>

      <!--[공지 팝업] 스와이프-->
      <v-dialog
        v-model="DialogNoticeMain3"
        content-class="bt-none main-popup"
        transition="false"><!-- class main-popup 추가 -->
        <DialogNoticeMain :list-style="'noticeSwipe'" :notice-list="listImage" @close="DialogNoticeMain3=false" />
      </v-dialog>

      <!--[공지 팝업] 스와이프 - html-->
      <v-dialog
        v-model="DialogNoticeMain4"
        content-class="bt-none main-popup"
        transition="false"><!-- class main-popup 추가 -->
        <DialogNoticeMain :list-style="'noticeSwipe'" :notice-list="listHtml" @close="DialogNoticeMain4=false" />
      </v-dialog>

      <!-- [퍼블수정]24.06.28 상품평 유도 팝업 -->
      <!--상품평 유도 팝업-->
      <v-dialog
        v-model="DialogNoticeMain5"
        content-class="bt-none main-popup"
        transition="false"><!-- class main-popup 추가 -->
        <DialogreviewNotice :list-style="'default'" :noticepopup01="noticepopup01" @update:noticepopup01="updateNoticePopup" @close="DialogNoticeMain5=false" />
        <!-- 
          공지 팝업이 있는 경우,
          위와 동일하게 띄어지는 공지 팝업에 맞는 내용을 넣는다
          
          공지 팝업이 없는 경우,
          noticepopup01 의 값을 false로 바꾼다
        -->
      </v-dialog>
      <!-- // [퍼블수정]24.06.28 상품평 유도 팝업 -->
    </div>
  </div>
</template>

<script>
import DialogNoticeMain from '~/pages/POPUP/DialogNoticeMain.vue'
// [퍼블수정]24.06.28 상품평 유도 팝업
import DialogreviewNotice from '~/pages/POPUP/DialogreviewNotice.vue'
export default {
  components: {
    DialogNoticeMain,
    // [퍼블수정]24.06.28 상품평 유도 팝업
    DialogreviewNotice,
  },
  layout: 'LayoutBasics',
  data: () => ({
    // [퍼블수정]24.06.28 상품평 유도 팝업
    // 상품평 유도 팝업 외의 팝업 띄울 여부
    noticepopup01: true,
    DialogNoticeMain1 : false,
    DialogNoticeMain2 : false,
    DialogNoticeMain3 : false,
    DialogNoticeMain4 : false,
    DialogNoticeMain5 : false,
    // [퍼블수정]23.11.10 title 추가
    listImage : [
      {
        title:"시스템 점검 안내",
        html_cont :"<br><br><br><br><br><p class='cmp-font fnt-18 text-center'><b>시스템 점검 안내</b></p><br><p class='cmp-font fnt-14 text-center'>더욱 안정적인 서비스를 제공하기 위해<br>시스템 점검 작업이 예정되어 있습니다.<br>점검 시간 동안 서비스 이용이<br>불가한 점 양해 부탁 드립니다.<br>감사합니다.</p>",
        link_url: null,
      },
      {
        title:"추석 배송 안내",
        image_url : "https://img.thehandsome.com/md/publish/dummy/mo/mainnotice-popup-img.png",
        link_url: "#none",
      },
      {
        title:"시스템 점검 안내",
        html_cont :"<br><p class='cmp-font fnt-18 text-center'><b>시스템 점검 안내</b></p><br><p class='cmp-font fnt-14 text-center'><b>[서비스 점검 일정]</b><br>2023년 09월 29일(목) 23:00 ~<br>29(금) 08:00 (9시간)<br><br><br><b>[중단 서비스]</b><br>H.Point 통합회원 로그인/가입<br>H.Point 조회 /사용/적립<br>한섬마일리지 조회/사용<br>주문 취소/반품<br>카카오 로그인, OTP 로그인<br><br>고객님의 서비스 이용에<br>불편을 드려 죄송합니다.<br><br><br><b>[중단 서비스]</b><br>H.Point 통합회원 로그인/가입<br>H.Point 조회 /사용/적립<br>한섬마일리지 조회/사용<br>주문 취소/반품<br>카카오 로그인, OTP 로그인<br><br><br>고객님의 서비스 이용에<br>불편을 드려 죄송합니다.</p>",
        link_url: null,
      }
    ],
    listHtml : [
      {
        title:"시스템 점검 안내",
        html_cont :"<br><br><br><br><br><p class='cmp-font fnt-18 text-center'><b>시스템 점검 안내</b></p><br><p class='cmp-font fnt-14 text-center'>더욱 안정적인 서비스를 제공하기 위해<br>시스템 점검 작업이 예정되어 있습니다.<br>점검 시간 동안 서비스 이용이<br>불가한 점 양해 부탁 드립니다.<br>감사합니다.</p>",
        link_url: "#none",
      },
      {
        title:"추석 배송 안내",
        html_cont :"<p class='cmp-font fnt-20 text-center'>더한섬닷컴 시스템 점검 안내</p><p class='cmp-font fnt-14 text-center'>더욱 안정적인 서비스를 제공하기 위해<br/>시스템 점검 작업이 예정되어 있습니다.<br/>점검 시간 동안 서비스 이용이 <br/>불가한 점 양해 부탁 드립니다.<br/>감사합니다.<br/><br/>점검 시간<br/>9월 10일(토), 2:00 ~ 7:00<br/>상기 점검 시간은 사정에 의해 변경될 수 있습니다.<br/><br/>고객센터 1800-5700<br/>평일 : 9:00 ~ 18:00<br/>shophelp@thehandsome.com</p><br><br><p class='cmp-font fnt-20 text-center'>더한섬닷컴 시스템 점검 안내</p><p class='cmp-font fnt-14 text-center'>더욱 안정적인 서비스를 제공하기 위해<br/>시스템 점검 작업이 예정되어 있습니다.<br/>점검 시간 동안 서비스 이용이 <br/>불가한 점 양해 부탁 드립니다.<br/>감사합니다.<br/><br/>점검 시간<br/>9월 10일(토), 2:00 ~ 7:00<br/>상기 점검 시간은 사정에 의해 변경될 수 있습니다.<br/><br/>고객센터 1800-5700<br/>평일 : 9:00 ~ 18:00<br/>shophelp@thehandsome.com</p><p class='cmp-font fnt-20 text-center'>더한섬닷컴 시스템 점검 안내</p><p class='cmp-font fnt-14 text-center'>더욱 안정적인 서비스를 제공하기 위해<br/>시스템 점검 작업이 예정되어 있습니다.<br/>점검 시간 동안 서비스 이용이 <br/>불가한 점 양해 부탁 드립니다.<br/>감사합니다.<br/><br/>점검 시간<br/>9월 10일(토), 2:00 ~ 7:00<br/>상기 점검 시간은 사정에 의해 변경될 수 있습니다.<br/><br/>고객센터 1800-5700<br/>평일 : 9:00 ~ 18:00<br/>shophelp@thehandsome.com</p><p class='cmp-font fnt-20 text-center'>더한섬닷컴 시스템 점검 안내</p><p class='cmp-font fnt-14 text-center'>더욱 안정적인 서비스를 제공하기 위해<br/>시스템 점검 작업이 예정되어 있습니다.<br/>점검 시간 동안 서비스 이용이 <br/>불가한 점 양해 부탁 드립니다.<br/>감사합니다.<br/><br/>점검 시간<br/>9월 10일(토), 2:00 ~ 7:00<br/>상기 점검 시간은 사정에 의해 변경될 수 있습니다.<br/><br/>고객센터 1800-5700<br/>평일 : 9:00 ~ 18:00<br/>shophelp@thehandsome.com</p>",
        link_url: null,
      },
      {
        title:"추석 배송 안내",
        html_cont :"<p class='cmp-font fnt-20 text-center'>더한섬닷컴 시스템 점검 안내</p><p class='cmp-font fnt-14 text-center'>더욱 안정적인 서비스를 제공하기 위해<br/>시스템 점검 작업이 예정되어 있습니다.<br/>점검 시간 동안 서비스 이용이 <br/>불가한 점 양해 부탁 드립니다.<br/>감사합니다.<br/><br/>점검 시간<br/>9월 10일(토), 2:00 ~ 7:00<br/>상기 점검 시간은 사정에 의해 변경될 수 있습니다.<br/><br/>고객센터 1800-5700<br/>평일 : 9:00 ~ 18:00<br/>shophelp@thehandsome.com</p>",
        link_url: null,
      },
    ],
  }),
  methods: {
    closeDialog(){
      this.$emit('close')
    },
    // [퍼블수정]24.06.28 상품평 유도 팝업
    updateNoticePopup(value) {
      this.noticepopup01 = value;
    }
  },
}
</script>
<style lang="scss">
</style>
