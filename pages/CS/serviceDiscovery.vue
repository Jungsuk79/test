<template>
  <v-layout class="contents contents-type2"><!--// 공통 class="contents", 해당 메뉴 전용 class="content-메뉴명", 해당 페이지 전용 class="content-페이지명" -->
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'고객센터'" :left-data="menuList" :page-class="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="shopping-service discovery">
            <div class="cmp-page-tit">
              <h2 class="tit">취향의 발견</h2>
            </div>      
            <div class="grey-box bg1">
              <strong>더한섬닷컴 취향 저격 서비스</strong>
              <dl>
                <dt>취향의 발견</dt>
                <dd>취향에 맞는 상품을 추천받고, 마일리지도 적립 받으세요.</dd>
              </dl>
            </div>
            <section class="content-section">
              <ul class="infomation-list col-wrap">
                <li>
                  <dl class="dl-wrap">
                    <dt>취향의 발견 참여하기</dt>
                    <dd>취향에 맞는 상품을 ‘좋아요’ 해주세요.</dd>
                  </dl>
                  <div class="mock-area">
                    <img src="/images/cs/discovery1.png" alt="" class="mock-img">
                  </div>
                </li>
                <li>
                  <dl class="dl-wrap">
                    <dt>내 취향 찾고, 상품 추천받기</dt>
                    <dd>고객님 취향을 분석하여 맞춤 상품을 추천해<br />드려요.</dd>
                  </dl>
                  <div class="mock-area">
                    <img src="/images/cs/discovery2.png" alt="" class="mock-img">
                  </div>
                </li>
                <li>
                  <dl class="dl-wrap">
                    <dt>취향의 발견 히스토리 확인하기</dt>
                    <dd>취향의 발견 참여 결과는 ‘마이하트’에서 다시<br />확인하실 수 있어요.</dd>
                  </dl>
                  <div class="mock-area">
                    <img src="/images/cs/discovery3.png" alt="" class="mock-img">
                  </div>
                </li>
              </ul>
            </section>            
            <section class="content-section">
              <ul class="infomation-list no-count">
                <li>
                  <dl class="dl-wrap">
                    <dt>취향의 발견 TIP!</dt>
                    <dd>취향의 발견은 매일 1회 참여할 수 있으며, 로그인 후 참여하시면 100마일리지가 적립됩니다.</dd>
                  </dl>
                  <div class="mock-area">
                    <img src="/images/cs/discovery4.png" alt="" class="mock-img">
                  </div>
                </li>
              </ul>
            </section>
            <div class="qr-wrap">
              <dl class="dl-wrap">
                <dt>취향의 발견은 모바일 전용 서비스입니다.</dt>
                <dd class="mt-8">더한섬닷컴 앱을 설치 후 이용해보세요!</dd>
              </dl>
              <ul class="qr-img">
                <li><img src="/images/cs/qr_android.png" alt="android"></li>
                <li><img src="/images/cs/qr_ios.png" alt="ios"></li>
              </ul>
            </div>         
          </div>
        </div>
      </div>

    </div>
  </v-layout>
</template>

<script>
export default {
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
