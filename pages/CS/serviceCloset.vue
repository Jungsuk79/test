<template>
  <v-layout class="contents contents-type2"><!--// 공통 class="contents", 해당 메뉴 전용 class="content-메뉴명", 해당 페이지 전용 class="content-페이지명" -->
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'고객센터'" :left-data="menuList" :page-class="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="shopping-service">
            <div class="cmp-page-tit">
              <h2 class="tit">나의 옷장</h2>
            </div>      
            <div class="grey-box bg2">
              <strong>더한섬닷컴의 특별 서비스</strong>
              <dl>
                <dt>나의 옷장</dt>
                <!-- [퍼블수정]23.02.23 옷장수정 -->
                <dd>구매한 상품을 다른 상품들과 코디해보고, 코디북을 공유할 수 있는 나만의 옷장</dd>
              </dl>
            </div>
    
            <section class="content-section">
              <ul class="infomation-list">
                <li>
                  <dl class="dl-wrap">
                    <dt>나의 옷장에서 상품 선택하기</dt>
                    <dd>온/오프라인에서 구매하신 상품 중에서 코디할 상품을 선택해주세요.</dd>
                  </dl>
                  <img src="/images/cs/closet1.png" alt="" class="mock-img">
                  <div class="cmp-info info-type2">
                    <p class="cmp-font fnt-14">TIP 1. 더한섬닷컴에서 구매한 옷이 옷장에 노출돼요.</p>
                    <!-- [퍼블수정]23.02.23 옷장수정 -->
                    <p class="cmp-font fnt-14">TIP 2. 평소에 위시리스트에 담아둔 상품과도 같이 코디할 수 있어요.</p>
                  </div>
                </li>
                <li>
                  <dl class="dl-wrap">
                    <dt>코디북 꾸미기</dt>
                    <dd>구매한 상품과 코디할 상품들로 원하는 코디 레이아웃을 선택해 주세요.</dd>
                  </dl>
                  <!-- [퍼블수정]23.02.21 비디오 수정 -->
                  <div class="mock-video">
                    <VideoPlayer
                      :path="'/images/cs/closet_2_video.mp4'"
                      :poster="'/images/cs/closet_2_video_poster.png'"
                      :mute="true"
                      :hide-gui="true"
                      :play-on-scroll="true"
                      :videoRatio="56.1"
                    ></VideoPlayer>
                  </div>
                </li>
                <li>
                  <dl class="dl-wrap">
                    <dt>완성된 코디북 활용하기</dt>
                    <dd>‘나의옷장’에서 나만의 코디북을 확인해 보세요. 스타일라이브에 코디북을 공유할 수도 있어요.</dd>
                  </dl>
                  <!-- [퍼블수정]23.02.21 비디오 수정 -->
                  <div class="mock-video">
                    <VideoPlayer
                      :path="'/images/cs/closet_3_video.mp4'"
                      :poster="'/images/cs/closet_3_video_poster.png'"
                      :mute="true"
                      :hide-gui="true"
                      :play-on-scroll="true"
                      :videoRatio="50"
                    ></VideoPlayer>
                  </div>
                </li>
              </ul>
              <div class="text-center">
                <v-btn large color="primary">나의 옷장 바로가기</v-btn>
              </div>
            </section>

          </div>
        </div>
      </div>

    </div>
  </v-layout>
</template>

<script>
import VideoPlayer from '~/components/common/VideoPlayer'

export default {
  components: {
    VideoPlayer,

},
  layout: 'LayoutBasics',
  created() {
    const me = this
    const json = require('~/static/json/cs_left_menu.json')
    me.menuList = json.list
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/cs.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
