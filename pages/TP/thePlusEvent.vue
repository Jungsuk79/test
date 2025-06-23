<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <CommonContentsLeftMenu :title="'마이페이지'" :url="'/json/mypage_left_menu.json'" :active="'/ko/TP/thePlusGate'"></CommonContentsLeftMenu>
      <div class="my-page-r-box theplus-event"><!-- 마이페이지 -->
        <div class="cmp-page-tit">
          <h2 class="tit">더플러스⁺ 이벤트</h2>
        </div>   
        <div class="cmp-tabs tabs-actionTop">
          <v-tabs v-model="tabModel" fixed-tabs>
            <v-tab>진행 중인 이벤트</v-tab>
            <v-tab>지난 이벤트</v-tab>
          </v-tabs>
        </div>      
        <v-tabs-items v-model="tabModel" touchless>
          <!-- 진행 중인 이벤트 -->
          <v-tab-item :transition="false">
            <v-layout align-center justify-space-between class="sorting-area">
              <v-btn outlined color="primary">당첨자 발표 공지</v-btn>
            </v-layout>
            <ul class="board-list">
              <li v-for="n in 15" :key="n">
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
            <ProductListPaging />  
          </v-tab-item>
          <!-- //진행 중인 이벤트 -->
          <!-- 지난 이벤트 -->
          <v-tab-item :transition="false">
            <v-layout align-center justify-space-between class="sorting-area">
              <v-btn outlined color="primary">당첨자 발표 공지</v-btn>
            </v-layout>
            <ul class="board-list">
              <li v-for="n in 15" :key="n">
                <nuxt-link to="/ko/MK/eventHtml" >
                  <div class="thumb">
                    <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/gifts-img1.png" alt="상품명"></v-img>
                  </div>
                  <dl class="list-info">
                    <dt>앱 다운로드 이벤트</dt>
                    <dd>
                      <div class="cmp-labels">
                        <div class="label black">종료</div>
                      </div>
                      2021.12.07 ~ 2021.12.26
                    </dd>
                  </dl>
                </nuxt-link>
              </li>
            </ul>      
            <ProductListPaging />  
          </v-tab-item>
          <!-- //지난 이벤트 -->
        </v-tabs-items>      
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
      tabModel: 0
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