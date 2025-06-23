<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/OR/guide/Structure 참고 -->
    <div class="content-wrap">
      <CommonContentsLeftMenu :title="'마이페이지'" :url="'/json/mypage_left_menu.json'" :active="'/ko/TP/thePlusGate'"></CommonContentsLeftMenu>
      <div class="my-page-r-box theplus-payment"><!-- 마이페이지 -->
        <div class="cmp-page-tit">
          <h2 class="tit">더플러스⁺ 정기 결제 관리</h2>
        </div>

        <!-- 정기 결제 유지 시 -->
        <div class="cmp-sub-tit small">
          <h3 class="tit">정기결제 정보</h3>
          <nuxt-link class="cmp-font fnt-14 button" to="#n">결제 내역 보기<i class="cmp-icon cmp-icon-12 i-next"></i></nuxt-link>
        </div>
        <!-- 정기결제 정보 -->
        <div class="info-border-box pw-0">
          <div class="box">
            <dl class="line">
              <dt class="tit pr-20">다음 결제 예정일</dt>
              <dd class="txt">2022년 12월 13일</dd>
            </dl>
            <dl class="line">
              <dt class="tit pr-20">결제 예정 금액</dt>
              <dd class="txt"><strong>100,000</strong>원</dd>
            </dl>
          </div>
        </div>
        <!-- //정기결제 정보 -->
        <ul class="payment-info">
          <li>
            <div class="cmp-sub-tit small">
              <h3 class="tit">결제 수단 정보</h3>
            </div>
            <v-layout row justify-space-between>
              <div>
                <p class="tit bold">신용카드</p>
                <div class="cmp-info info-type2">
                  <p>비씨카드 <span>정기 결제 해지 신청일  2022.03.10</span></p>
                </div>
              </div>
              <div class="btn-box">
                <v-btn small outlined color="primary" class="gray-outlined">결제 카드 변경</v-btn>
              </div>
            </v-layout>
          </li>
          <li>
            <div class="cmp-sub-tit small">
              <h3 class="tit">정기결제 예정 알림</h3>
            </div>
            <v-layout row align-items justify-space-between>
              <div>
                <p class="tit mb-20">카카오톡 또는 SMS로 정기 결제 예정 알림을 받아 보실 수 있습니다.</p>
                <div class="cmp-info info-type2">
                  <p>010-****-1234</p>
                </div>
              </div>
              <div class="btn-box">
                <v-btn small outlined color="primary" class="gray-outlined">정기결제 취소</v-btn>
              </div>
            </v-layout>
          </li>
        </ul>
        <div class="cmp-sub-tit small mb-10">
          <h3 class="tit">멤버십 및 정기결제 유의사항</h3>
        </div>
        <ul class="cmp-dotList mb-40">
          <li>가입일로부터 365일이 지난 시점 기존 가입 시 사용했던 결제 수단으로 자동 결제가 이루어집니다.</li>
          <li>정기결제 수단이 정지/한도초과/정보변경 등으로 결제 상태가 변경된 경우 정기결제 예정일에 가입중이던 멤버십은 종료됩니다.</li>
          <li>정기결제 실패시 플러스맵 및 더플러스⁺ 혜택 사용이 일시 정지 되며, 재결제 기간 내 결제가 이루어지지 않을 경우 멤버십이 자동 종료되고 혜택도 소멸 됩니다.</li>
          <li>정기결제 해지를 신청 하였어도 다음 정기결제일 전까지는 멤버십은 유지됩니다. (정기결제 해지 취소 가능)</li>
          <li>플러스맵 리워드로 지급된 리워드(쿠폰/한섬마일리지)는 멤버십 상태와 별개로 유효기간까지 사용 가능합니다.</li>
          <li>멤버십 갱신 시마다 웰컴기프트, 온라인바우처 2장, 선호브랜드 할인권 3장이 발급 됩니다.(웰컴기프트는 플러스맵 첫 참여시 지급)</li>
          <li>멤버십 갱신 시, 플러스맵은 이어서 진행 됩니다. (단, 해지 후 재가입 시 처음부터 시작)</li>
        </ul>
        <!-- //정기 결제 유지 시 -->

        <!-- 정기 결제 해지 신청 중인 경우 화면 -->
        <div class="cmp-sub-tit small">
          <h3 class="tit">정기결제 정보</h3>
          <nuxt-link class="cmp-font fnt-14 button" to="#n">결제 내역 보기<i class="cmp-icon cmp-icon-12 i-next"></i></nuxt-link>
        </div>
        <!-- 정기결제 정보 -->
        <div class="info-border-box pw-0">
          <div class="box">
            <dl class="line">
              <dt class="tit">다음 결제 예정일</dt>
              <dd class="cmp-font txt c-blue">정기 결제 해지 신청중</dd>
            </dl>
            <dl class="line">
              <dt class="tit">결제 예정 금액</dt>
              <dd class="txt"><strong>0</strong>원</dd>
            </dl>
          </div>
        </div>
        <!-- //정기결제 정보 -->
        <ul class="payment-info">
          <li>
            <div class="cmp-sub-tit small">
              <h3 class="tit">결제 수단 정보</h3>
            </div>
            <v-layout row justify-space-between>
              <div>
                <p class="tit bold">신용카드</p>
                <div class="cmp-info info-type2">
                  <p>비씨카드 <span class="c-gray">정기 결제 해지 신청일  2022.03.10</span></p>
                </div>
              </div>
              <div class="btn-box">
                <v-btn small outlined color="primary" class="gray-outlined">정기 결제 해지 취소</v-btn>
              </div>
            </v-layout>
          </li>
        </ul>
        <div class="cmp-sub-tit small mb-10">
          <h3 class="tit">정기 결제 해지 유의사항</h3>
        </div>
        <ul class="cmp-dotList mb-40">
          <li>정기결제 해지를 신청 하였어도 다음 정기결제일 전까지는 멤버십은 유지됩니다. (정기결제 해지 취소 가능)</li>
          <li>플러스맵 리워드로 지급된 리워드(쿠폰/한섬마일리지)는 멤버십 상태와 별개로 유효기간까지 사용 가능합니다.</li>
          <li>멤버십 갱신 시마다 웰컴기프트, 온라인바우처 2장, 선호브랜드 할인권 3장이 발급 됩니다.(웰컴기프트는 플러스맵 첫 참여시 지급)</li>
          <li>멤버십 갱신 시, 플러스맵은 이어서 진행 됩니다. (단, 해지 후 재가입 시 처음부터 시작)</li>
        </ul>
        <!-- //정기 결제 해지 신청 중인 경우 화면 -->

        <!-- 정기 결제 실패 시의 화면 -->
        <div class="cmp-sub-tit small">
          <h3 class="tit">정기결제 정보</h3>
          <nuxt-link class="cmp-font fnt-14 button" to="#n">결제 내역 보기<i class="cmp-icon cmp-icon-12 i-next"></i></nuxt-link>
        </div>
        <!-- 정기결제 정보 -->
        <div class="info-border-box pw-0">
          <div class="box">
            <dl class="line">
              <dt class="tit">다음 결제 예정일</dt>
              <dd class="cmp-font txt c-blue">멤버십 보류 중 - 2022년 12월 14일까지</dd>
            </dl>
            <dl class="line">
              <dt class="tit">결제 예정 금액</dt>
              <dd class="txt"><strong>100,000</strong>원</dd>
            </dl>
          </div>
        </div>
        <!-- //정기결제 정보 -->
        <ul class="payment-info">
          <li>
            <div class="cmp-sub-tit small">
              <h3 class="tit">결제 수단 정보</h3>
            </div>
            <v-layout row justify-space-between>
              <div>
                <p class="tit bold">신용카드</p>
                <div class="cmp-info info-type2">
                  <p>비씨카드 <span class="c-red">결제 실패</span></p>
                </div>
              </div>
              <div class="btn-box">
                <v-btn small outlined color="primary" class="gray-outlined">지금 결제하기</v-btn>
              </div>
            </v-layout>
          </li>
        </ul>
        <div class="cmp-sub-tit small mb-10">
          <h3 class="tit">멤버십 및 정기결제 유의사항</h3>
        </div>
        <ul class="cmp-dotList mb-40">
          <li>가입일로부터 365일이 지난 시점 기존 가입 시 사용했던 결제 수단으로 자동 결제가 이루어집니다.</li>
          <li>정기결제 수단이 정지/한도초과/정보변경 등으로 결제 상태가 변경된 경우 정기결제 예정일에 가입중이던 멤버십은 종료됩니다.</li>
          <li>정기결제 실패시 플러스맵 및 더플러스⁺ 혜택 사용이 일시 정지 되며, 재결제 기간 내 결제가 이루어지지 않을 경우 멤버십이 자동 종료되고 혜택도 소멸 됩니다.</li>
          <li>정기결제 해지를 신청 하였어도 다음 정기결제일 전까지는 멤버십은 유지됩니다. (정기결제 해지 취소 가능)</li>
          <li>플러스맵 리워드로 지급된 리워드(쿠폰/한섬마일리지)는 멤버십 상태와 별개로 유효기간까지 사용 가능합니다.</li>
          <li>멤버십 갱신 시마다 웰컴기프트, 온라인바우처 2장, 선호브랜드 할인권 3장이 발급 됩니다.(웰컴기프트는 플러스맵 첫 참여시 지급)</li>
          <li>멤버십 갱신 시, 플러스맵은 이어서 진행 됩니다. (단, 해지 후 재가입 시 처음부터 시작)</li>
        </ul>
        <!-- //정기 결제 실패 시의 화면 -->
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