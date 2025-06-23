<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <CommonContentsLeftMenu :title="'마이페이지'" :url="'/json/mypage_left_menu.json'" :active="'/ko/TP/thePlusGate'"></CommonContentsLeftMenu>
      <div class="my-page-r-box theplus-join"><!-- 마이페이지 -->
        <div class="cmp-page-tit pb-40">
          <h2 class="tit">더플러스⁺ 가입 동의</h2>
        </div>

        <section class="section-top">
          <div class="mb-40">
            <div class="cmp-sub-tit">
              <h3 class="tit">지금 시작으로 가입비 그 이상의 혜택을 누려보세요!</h3>
            </div>
            <p class="cmp-font fnt-16 c-gray">1분이면 가입 완료돼요.</p>
          </div>
          <div class="info-border-box cnt-line pw-0">
            <div class="box">
              <dl class="line">
                <dt class="tit fnt-18 pb-14">더플러스⁺ 연간 이용권<CommonTooltipBox :tooltip-list="tooltipList.list1" /></dt>
                <dd class="txt"></dd>
              </dl>
              <dl class="line">
                <dt class="tit subinfo"><span>연 <strong class="mr-2">100,000</strong>원</span><span>2022년 05월 01일부터</span></dt>
                <dd class="txt"></dd>
              </dl>
            </div>
          </div>
        </section>

        <section class="section-benefit">
          <h4 class="cmp-font fnt-20">한 눈에 보는 멤버십 혜택</h4>
          <!-- 20230320 [HFOT-7132] 아이콘 변경이슈 수정 -->
          <ul class="benefit-list">
            <li>
              <i class="cmp-icon-etc cmp-icon-32 i-benefit-new">i-benefit</i>
              <p class="cmp-font fnt-18 mb-6">반가운 웰컴 혜택</p>
              <p class="cmp-font fnt-16">
                웰컴 기프트<br />
                케어플러스 세탁 1회 체험권 (최초 1회)
              </p>
            </li>
            <li>
              <i class="cmp-icon-etc cmp-icon-32 i-coupon-new">i-coupon</i>
              <p class="cmp-font fnt-18 mb-6">강력한 쇼핑 지원 쿠폰</p>
              <p class="cmp-font fnt-16">
                온라인 5만원 바우처 x 2장<br />
                선호브랜드 10% 할인권 x 3장
              </p>
            </li>
            <li>
              <i class="cmp-icon-etc cmp-icon-32 i-shoppingbenefit-new">i-shoppingbenefit</i>
              <p class="cmp-font fnt-18 mb-6">즐거운 쇼핑 플러스 혜택</p>
              <p class="cmp-font fnt-16">
                구매할 때마다 플러스 맵 이용권 받고, <br />
                플러스 볼 뽑기
              </p>
            </li>
            <li>
              <i class="cmp-icon-etc cmp-icon-32 i-calendar-new">i-day</i>
              <p class="cmp-font fnt-18 mb-6">매월 찾아오는 더플러스⁺ 데이</p>
              <p class="cmp-font fnt-16">
                더플러스⁺ 고객님만을 위한<br />
                더플러스⁺ 이벤트
              </p>
            </li>
          </ul>
        </section>
        <section class="form-box">
          <div class="all-agree">
            <div class="chk-all">
              <v-checkbox class="cmp-form-checkbox" label="전체 동의하기"></v-checkbox>
            </div>
            <div class="agree-chk-box">
              <v-checkbox class="cmp-form-checkbox agree-chk" label="(필수) 더플러스⁺ 정기 결제에 동의합니다."></v-checkbox>
            </div>
            <v-layout class="agree-chk-box">
              <v-checkbox class="cmp-form-checkbox agree-chk">
                <template v-slot:label>
                  (필수)<p class="ml-5"><button class="cmp-font button"><span class="line">이용약관</span></button> 및 <button class="cmp-font button"><span class="line">서비스(결제/가입) 유의사항</span></button>에동의합니다.</p>
                </template>
              </v-checkbox>
            </v-layout>
          </div>
        </section>
        <v-layout justify-space-between class="cmp-btnsArea center-area mt-0">
          <v-btn large color="primary" disabled>가입 신청서 작성</v-btn>
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
    tooltipList: {
      list1: [
        '연회비는 최초 가입 시에만 첫 가입 혜택 가격으로 이용이 가능하며, 두 번째 구독 시나 해지 후 재구매 시 정상 가격(100,000원)으로 결제됩니다.'
      ]
    },
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