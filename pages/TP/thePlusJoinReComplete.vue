<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/OR/guide/Structure 참고 -->
    <div class="content-wrap">
      <CommonContentsLeftMenu :title="'마이페이지'" :url="'/json/mypage_left_menu.json'" :active="'/ko/TP/thePlusGate'"></CommonContentsLeftMenu>
      <div class="my-page-r-box membership-joinComplete"><!-- 마이페이지 -->
        <div class="cmp-page-tit"><!-- 페이지 타이틀 -->
          <h2 class="tit">더플러스⁺ 가입 신청</h2>
        </div>
        <!--가입 완료-->
        <v-layout align-center class="complete-title">
          <div class="img"><img src="/images/member/theplus-img.jpg"></div>
          <div class="txt-info">
            <h3>더플러스⁺ 혜택이 다시 시작되었습니다.</h3>
          </div>
        </v-layout>
        <!--//가입 완료-->
        <div class="info-border-box pw-0">
          <div class="box">
            <dl class="line">
              <dt class="tit">이용기간</dt>
              <dd class="txt">2022.07.22 ~ 2023.07.21</dd>
            </dl>
            <dl class="line">
              <dt class="tit">다음 결제일</dt>
              <dd class="txt">2023.07.23</dd>
            </dl>
            <dl class="line">
              <dt class="tit">결제 예정금액</dt>
              <dd class="txt">100,000원</dd>
            </dl>
          </div>
        </div>
        <ul class="cmp-dotList mt-24 mb-40">
          <li class="cmp-font fnt-14">정기결제 정보는 <nuxt-link class="button" to="#n"><span class="line">‘더플러스⁺ > 더플러스⁺ 설정’</span></nuxt-link>에서 변경 가능합니다.</li>
        </ul>

        <h2 class="cmp-font fnt-24">더플러스⁺ 고객님만의 혜택!</h2>
        <ul class="benefit-list">
          <li>
            <i class="cmp-icon i-coupon cmp-icon-32">i-coupon</i>
            다양한 쿠폰
          </li>
          <li>
            <i class="cmp-icon i-benefit cmp-icon-32">i-benefit</i>
            플러스맵 리워드
          </li>
          <li>
            <i class="cmp-icon-etc cmp-icon-30 i-calendar">i-calendar</i>
            더플러스⁺ 데이
          </li>
        </ul>
        <p class="text-center cmp-font fnt-18">이외 더플러스⁺ 고객님을 위해 다양해질 서비스를 기대해 주세요!</p>

        <div class="text-center mt-34">
          <v-btn large color="primary">혜택 확인하러 가기</v-btn>
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
    // Swiper,
    // SwiperSlide,
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