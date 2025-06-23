<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/OR/guide/Structure 참고 -->
    <div class="content-wrap">
      <CommonContentsLeftMenu :title="'마이페이지'" :url="'/json/mypage_left_menu.json'" :active="'/ko/TP/thePlusGate'" :active-sub="'/ko/TP/thePlusMemberSet'"></CommonContentsLeftMenu>
      <div class="my-page-r-box theplus-memberSet"><!-- 마이페이지 -->
        <div class="cmp-page-tit">
          <h2 class="tit">더플러스⁺ 설정</h2>
        </div>

        <ul class="setting">
          <li>
            <div class="cmp-sub-tit">
              <h3 class="tit">정기 결제 관리</h3>
              <nuxt-link class="cmp-font button" to="#n">바로가기<i class="cmp-icon cmp-icon-12 i-next"></i></nuxt-link>
            </div>
            <p class="cmp-font fnt-16 c-gray">연회비 정기 결제 카드를 확인하세요</p>
          </li>
          <li>
            <div class="cmp-sub-tit">
              <h3 class="tit">사은품 배송지 관리</h3>
              <nuxt-link class="cmp-font button" to="#n">바로가기<i class="cmp-icon cmp-icon-12 i-next"></i></nuxt-link>
            </div>
            <p class="cmp-font fnt-16 c-gray">웰컴 기프트와 사은품 받을 배송지를 관리하세요</p>
          </li>
          <li>
            <div class="cmp-sub-tit">
              <h3 class="tit">선호 브랜드 변경</h3>
              <nuxt-link class="cmp-font button" to="#n">바로가기<i class="cmp-icon cmp-icon-12 i-next"></i></nuxt-link>
            </div>
            <p class="cmp-font fnt-16">MINE<span class="c-blue ml-10">X 1</span></p>
            <p class="cmp-font fnt-16 mt-6">LANVIN COLLECTION<span class="c-blue ml-10">X 1</span></p>
            <p class="cmp-font fnt-16 mt-6">SYSTEM<span class="c-blue ml-10">X 1</span></p>
          </li>
        </ul>

        <button class="cmp-font fnt-13 button mt-10"><span class="line">해지하기</span></button>
      </div>
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

// import EventBus from '~/api/common/EventBus'
export default {
  components: {
    // Swiper,
    // SwiperSlide,
  },
  layout: 'LayoutBasics',
  data() {
    return {
      topNotice : true,
      giftsData : [ // 증정품,사은품
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-6.png',
          reward_name: '플러스맵 리워드',
          gift_name: '50,000원 바우처',
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