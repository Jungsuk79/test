<template>
  <div class="contents contents-type2">
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'고객센터'" :left-data="menuList" :active="'/ko/CS/csCenterNotice'" :page-class="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="cs-board-detail">
            <div class="cmp-page-tit">
              <h2 class="tit">공지사항</h2>
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
    </div>
  </div>
</template>

<script>
export default {
  layout: 'LayoutBasics',
  data: () => ({

  }),
  created() {
    const me = this
    const json = require('~/static/json/cs_left_menu.json')
    me.menuList = json.list
  },  
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/cs.scss';
</style>
