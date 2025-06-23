<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
    <CommonContentsLeftMenu :title="'마이페이지'" :url="'/json/mypage_left_menu.json'" :active="'/ko/TP/thePlusGate'"></CommonContentsLeftMenu>
      <div class="my-page-r-box theplus-news"><!-- 마이페이지 -->
        <div class="cmp-page-tit pb-40">
          <h2 class="tit">더플러스⁺ 소식</h2>
        </div>
        <div class="cmp-sub-tit">
          <h3 class="tit">새로운 소식과 전용 이벤트를 알려 드립니다.</h3>
        </div>

        <div class="cmp-sub-tit line mt-40 mb-24">
          <h3 class="tit">이벤트</h3>
          <nuxt-link class="cmp-font button" to="#n">전체보기<i class="cmp-icon cmp-icon-12 i-next"></i></nuxt-link>
        </div>
        <ul class="board-list">
          <li v-for="n in 3" :key="n">
            <nuxt-link to="/ko/MK/eventHtml" >
              <div class="thumb">
                <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/gifts-img1.png" alt="상품명"></v-img>
              </div>
              <dl class="list-info"> 
                <dt>앱 다운로드 이벤트</dt>
                <dd>2021.12.07 ~ 2021.12.26</dd>
              </dl>
            </nuxt-link>
          </li>
        </ul>

        <div class="cmp-sub-tit mt-60">
          <h3 class="tit">공지사항</h3>
          <nuxt-link class="cmp-font button" to="#n">전체보기<i class="cmp-icon cmp-icon-12 i-next"></i></nuxt-link>
        </div>
        <!-- 공지사항 테이블 -->
        <div class="product-row-table">
          <table>
            <caption>상품리스트</caption>
            <colgroup>
              <col style="width:auto;"/>
              <col style="width:138px;"/>
            </colgroup>
            <thead>
              <tr>
                <th>제목</th>
                <th>등록일</th>
              </tr>
            </thead>
            <tbody>
              <!-- 상단고정 -->
              <tr v-for="n in 3" :key="n">
                <td class="text-left">
                  <nuxt-link to="">
                    <div class="cmp-info info-type2">
                      <p>더한섬닷컴 고객센터 상담문의 안내(하니톡 채팅상담 일시 중단)</p>
                    </div>
                  </nuxt-link>
                </td>
                <td class="text-center">
                  2022.11.16
                </td>
              </tr>
              <!-- //상단고정 -->
              <tr v-for="n in 2" :key="n">
                <td class="text-left">
                  <nuxt-link to="">
                    [당첨자발표] 핸썸TV 라이브 방송(11/25) 방송 중 이벤트 당첨 결과 안내
                  </nuxt-link>
                </td>
                <td class="text-center">
                  2022.11.16
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- 공지사항 테이블 -->

        <v-layout align-center justify-space-between class="sorting-area">
          <v-btn outlined color="primary">더플러스⁺ 자주 묻는 질문</v-btn>
        </v-layout>
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