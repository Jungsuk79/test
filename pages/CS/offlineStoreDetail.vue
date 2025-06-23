<template>
  <div class="contents contents-type2">
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'고객센터'" :left-data="menuList" :active="'/ko/CS/offlineStore'" :page-class="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="cs-board-detail offline-detail">
            <div class="cmp-page-tit">
              <h2 class="tit">오프라인 매장 문의</h2>
            </div>
            <!-- 상단 -->
            <div class="detail-header">
              <div class="cmp-sub-tit small">
                <h3 class="tit">
                  <div class="cmp-labels">
                    <div class="label black">문의</div>
                    <div class="label">접수완료</div>
                  </div>
                  수선 관련해서 교환 궁금합니다.
                </h3>
                <p class="date">2021.05.16</p>
              </div>
            </div>
            <!-- //상단 -->

            <!-- 본문 -->
            <div class="detail-body">

              <!-- 질문 -->
              <div class="qa-box question">
                <div class="box-title">
                  <div class="cmp-info info-type2">
                    <p class="cmp-font fnt-20 bold">Q</p>
                  </div>
                </div>
                <div class="box-content">
                  안녕하세요. 6월 13일에 바지를 구입했는데, 기장이 애매해서 수선하고 싶습니다. 수선은 직접 구입한 매장에 방문해서 맡기는 방법뿐인가요?
                </div>
              </div>
              <!-- //질문 -->

              <!-- 답변 -->
              <div class="qa-box answer">
                <div class="box-title">
                  <div class="cmp-info info-type2">
                    <p class="cmp-font fnt-20 bold">A</p>
                  </div>
                </div>
                <div class="box-content">
                  안녕하세요. 더한섬닷컴입니다.<br />
                  수선은 온라인으로도 신청이 가능합니다.
                  <p class="date">2021.05.16</p>
                </div>
              </div>
              <!-- //답변 -->

              <!-- 재질문 -->
              <div class="qa-box question re">
                <div class="box-title">
                  <div class="cmp-info info-type2">
                    <p class="cmp-font fnt-20 bold">Q</p>
                  </div>
                  온라인 수선은 어떻게 신청하나요?
                </div>
                <div class="box-content">
                  안녕하세요.<br />
                  6월 13일에 바지를 구입했는데, 기장이 애매해서 수선하고 싶습니다.<br />
                  수선은 직접 구입한 매장에 방문해서 맡기는 방법뿐인가요?
                </div>
              </div>
              <!-- //재질문 -->

              <!-- 재답변 -->
              <div class="qa-box answer re">
                <div class="box-title">
                  <div class="cmp-info info-type2">
                    <p class="cmp-font fnt-20 bold">A</p>
                  </div>
                </div>
                <div class="box-content">
                  안녕하세요. 더한섬닷컴입니다.<br />
                  수선은 온라인으로도 신청이 가능합니다.
                  <p class="date">2021.05.16</p>
                </div>
              </div>
              <!-- //재답변 -->
              
              <!-- 재질문 -->
              <div class="qa-box question re">
                <div class="box-title">
                  <div class="cmp-info info-type2">
                    <p class="cmp-font fnt-20 bold">Q</p>
                  </div>
                  온라인 수선은 어떻게 신청하나요?
                </div>
                <div class="box-content">
                  안녕하세요.<br />
                  6월 13일에 바지를 구입했는데, 기장이 애매해서 수선하고 싶습니다.<br />
                  수선은 직접 구입한 매장에 방문해서 맡기는 방법뿐인가요?
                </div>
              </div>
              <!-- //재질문 -->

              <!-- 재답변 -->
              <div class="qa-box answer re">
                <div class="box-title">
                  <div class="cmp-info info-type2">
                    <p class="cmp-font fnt-20 bold">A</p>
                  </div>
                </div>
                <div class="box-content">
                  안녕하세요. 더한섬닷컴입니다.<br />
                  수선은 온라인으로도 신청이 가능합니다.
                  <p class="date">2021.05.16</p>
                  <p class="re-inquiry"><button type="button">재문의</button></p>
                </div>
              </div>
              <!-- //재답변 -->
            </div>
            <!-- //본문 -->

            <div class="detail-footer mt-30">
              <v-btn to="" outlined large color="primary">목록</v-btn>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  layout: 'LayoutBasics',
  data: () => ({
  }),
  created() {
    const me = this
    const json = require('~/static/json/cs_left_menu.json')
    me.menuList = json.list
  },  
  methods: {
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/cs.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
