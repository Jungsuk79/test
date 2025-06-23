<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <CommonContentsLeftMenu :title="'마이페이지'" :url="'/json/mypage_left_menu.json'" :active="'/ko/TP/thePlusGate'"></CommonContentsLeftMenu>
      <div class="my-page-r-box theplus-noticeDetail"><!-- 마이페이지 -->

        <div class="cmp-page-tit">
          <h2 class="tit">더플러스⁺ 공지사항</h2>
        </div>

        <div class="detail-header">
          <div class="cmp-sub-tit small">
            <h3 class="tit">더한섬닷컴 고객센터 상담문의 안내(하니톡 채팅상담 일시 중단)</h3>
            <p class="date">2021.05.16</p>
          </div>
        </div>
        <div class="detail-body">
          안녕하세요. 더한섬닷컴입니다.<br />
          지난 11월 11일(목) 핸썸tv ‘더블 마일리지에 놓칠 수 없는 겨울 아우터' 라이브 방송을 시청해주셔서 감사드리며, 라이브 방송 중 이벤트 당첨 결과를 발표합니다.
          <br /><br />
          [이벤트 정보]<br />
          이벤트명 : ‘핸썸tv’ 방송 중 이벤트<br />
          일시 : 2021년 11월 11일(목) 저녁 8시 ~ 9시<br />
          핸썸TV 라이브 방송 중 이벤트 참여 고객 대상 20분을 선정하여 h.point를 증정합니다.<br />
          사은품 증정일 : 12월 15일(수) 이후 적립 예정<br /><br />
          지난 11월 11일(목) 핸썸tv ‘더블 마일리지에 놓칠 수 없는 겨울 아우터' 라이브 방송을 시청해주셔서 감사드리며, 라이브 방송 중 이벤트 당첨 결과를 발표합니다. 안녕하세요. 더한섬닷컴입니다. 지난 11월 11일(목) 핸썸tv ‘더블 마일리지에 놓칠 수 없는 겨울 아우터' 라이브 방송을 시청해주셔서 감사드리며, 라이브 방송 중 이벤트 당첨 결과를 발표합니다.
        </div>
        <div class="detail-footer">
          <v-btn outlined large color="primary">목록</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import EventBus from '~/api/common/EventBus'
export default {
  components: {
  },
  layout: 'LayoutBasics',
  data() {
    return {
      noticeData: [
        {
          notice_title: '더한섬닷컴 고객센터 상담문의 안내(하니톡 채팅상담 일시 중단)',
          date: '2022.08.26',
        }
      ],
    }
  },
  created() {
  },
  methods: {
  },
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/theplusmember.scss'; //페이지 전용 css
</style>