<template>
  <v-layout class="contents contents-type2"><!--// 공통 class="contents", 해당 메뉴 전용 class="content-메뉴명", 해당 페이지 전용 class="content-페이지명" -->
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'고객센터'" :left-data="menuList" :page-class="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="shopping-service">
            <div class="cmp-page-tit">
              <h2 class="tit">나의 사이즈</h2>
            </div>      
            <div class="grey-box bg4">
              <strong>더한섬닷컴의 특별 서비스</strong>
              <dl>
                <dt>나의 사이즈</dt>
                <dd>간단한 설문에 응답하고, 나에게 꼭 맞는 사이즈를 추천받으세요.</dd>
              </dl>
            </div>
            <section class="content-section">
              <ul class="infomation-list">
                <li>
                  <dl class="dl-wrap">
                    <dt>사이즈 추천 받기</dt>
                    <dd>구매하기 전 상품이 나의 사이즈와 잘 맞는지 확인해 보세요.</dd>
                  </dl>
                  <img src="/images/cs/size1.png" alt="" class="mock-img">
                  <div class="cmp-info info-type2">
                    <p class="cmp-font fnt-14">나의 사이즈 추천 영역을 클릭만 하면<br />몇 가지 설문을 통해 나에게 꼭 맞는 제품을 알아볼 수 있어요.</p>
                  </div>
                </li>
                <li>
                  <dl class="dl-wrap">
                    <dt>정보 입력하기</dt>
                    <dd>성별, 키/몸무게, 신체 특징 등을 입력해 주세요.</dd>
                  </dl>
                  <img src="/images/cs/size2.png" alt="" class="mock-img"><!-- [퍼블수정]11.12.15 수정 -->
                </li>
                <li>
                  <dl class="dl-wrap">
                    <dt>사이즈 추천 결과</dt>
                    <dd>로그인한 경우, 입력된 정보를 통해 쇼핑 시 고객님께 꼭 맞는 제품 사이즈를 추천해 드려요.</dd>
                  </dl>
                  <img src="/images/cs/size3.png" alt="" class="mock-img"><!-- [퍼블수정]11.12.15 수정 -->
                </li>
              </ul>
              <div class="text-center">
                <v-btn large color="primary">나의 사이즈 입력하기</v-btn>
              </div>
            </section>          
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
