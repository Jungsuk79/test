<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <CommonContentsLeftMenu :title="'마이페이지'" :url="'/json/mypage_left_menu.json'" :active="'/ko/TP/thePlusGate'"></CommonContentsLeftMenu>
      <div class="my-page-r-box theplus-reward"><!-- 마이페이지 -->

        <div class="cmp-page-tit">
          <h2 class="tit">리워드 내역</h2>
        </div>

        <div class="cmp-sub-tit small">
          <h3 class="tit">더플러스⁺ 적립 내역</h3>
        </div>

        <v-layout class="info-border-box cnt-line pw-0 mb-30">
          <div>
            <p class="cmp-font fnt-14 mb-2">한섬마일리지</p>
            <p class="cmp-font fnt-20"><strong>47,010</strong>M</p>
          </div>
          <div>
            <p class="cmp-font fnt-14 mb-2">쿠폰</p>
            <p class="cmp-font fnt-20"><strong>6</strong>장</p>
          </div>
        </v-layout>

        <v-layout row align-center justify-space-between>
          <div class="cmp-line-radio">
            <div class="radio-item">
              <input id="dateRadio0" type="radio" name="dateRadio" checked />
              <label for="dateRadio0">1주일</label>
            </div>
            <div class="radio-item">
              <input id="dateRadio1" type="radio" name="dateRadio" />
              <label for="dateRadio1">1개월</label>
            </div>
            <div class="radio-item">
              <input id="dateRadio2" type="radio" name="dateRadio" />
              <label for="dateRadio2">3개월</label>
            </div>
          </div>
          <CommonCalendarBox :d1="'2021-09-01'" :d2="'2021-09-01'" />
        </v-layout>

        <!-- 상품 정보 -->
        <div class="product-row-table mt-30">
          <table>
            <caption>상품리스트</caption>
            <colgroup>
              <col style="width:158px;"/>
              <col style="width:auto;"/>
              <col style="width:138px;"/>
              <col style="width:158px;"/> 
            </colgroup>
            <thead>
              <tr>
                <th>구분</th>
                <th>내용</th>
                <th>발급일자</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, index) in rewardList">
                <tr :key="index">
                  <td class="cmp-font fnt-14 c-gray">
                    {{item.reward_name}}
                  </td>
                  <td class="text-left">
                    {{item.gift_name}}
                  </td>
                  <td class="cmp-font fnt-14">
                    {{item.date}}
                  </td>
                  <td>
                    <div v-if="index == 0" class="cmp-font fnt-14 c-blue">상품준비중</div><!-- 상품준비중 CASE -->
                    <div v-if="index == 1" class="cmp-font fnt-14">응모완료</div><!-- 응모완료 CASE -->
                    <div v-if="index == 2 || index == 6" class="cmp-font fnt-14 c-blue"><b class="mr-2">+400</b>M 적립</div><!-- 적립 CASE -->
                    <div v-if="index == 3 || index == 7 || index == 9" class="cmp-font fnt-14 c-blue">사용 가능</div><!-- 사용 가능 CASE -->
                    <div v-if="index == 4 || index == 8" class="cmp-font fnt-14">사용 완료</div><!-- 사용 완료 CASE -->
                    <div v-if="index == 5" class="cmp-font fnt-14 c-gray">소멸</div><!-- 소멸 CASE -->
                  </td>
                </tr>
              </template>
                <tr>
                  <td colspan="4" class="pt-0 pb-0">
                    <CommonNoData msg="해당하는 리워드 내역이 없습니다."/>
                  </td>
                </tr>
            </tbody>
          </table>
        </div>
        <!-- 상품 정보 -->
        <ProductListPaging />
        <div class="btm-notice">
          <div class="cmp-sub-tit small mb-10">
            <h3 class="tit">리워드 안내</h3>
          </div>
          <ul class="cmp-dotList mb-20">
            <li>플러스맵 첫 참여시 지급되는 웰컴 기프트는 가입시 입력한 배송지로 배송되오니 배송지를 확인해 주세요.</li>
            <li>플러스맵을 통해 발급된 쿠폰은 발급일로 부터 90일 이내로 사용하실 수 있습니다. (라이프/뷰티 상품군제외)</li>
            <li>플러스맵을 통해 발급된 한섬마일리지는 발급일로 부터 90일 이내로 사용하실 수 있습니다.</li>
            <li>멤버십 가입시 발급된 케어플러스 세탁 체험권 (최초1회), 온라인 바우처 5만원권 (2장), 선호 브랜드 10% 할인권 (3장)은 발급일로 부터 1년 이내로 사용하실 수 있습니다.</li>
          </ul>
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
  },
  layout: 'LayoutBasics',
  data() {
    return {
      rewardList: [
        // 상품 상세 데이터
        {
          reward_name: '플러스맵 리워드',
          gift_name: '웰컴 기프트',
          date: '2022.08.26',
        },
        {
          reward_name: '더플러스⁺ 멤버십',
          gift_name: '응모권',
          date: '2022.08.26',
        },
        {
          reward_name: '플러스맵 리워드',
          gift_name: '마일리지',
          date: '2022.08.26',
        },
        {
          reward_name: '더플러스⁺ 멤버십',
          gift_name: '케어플러스 세탁 바우처',
          date: '2022.08.26',
        },
        {
          reward_name: '플러스맵 리워드',
          gift_name: '50,000원 바우처',
          date: '2022.08.26',
        },
        {
          reward_name: '더플러스⁺ 멤버십',
          gift_name: '쿠폰',
          date: '2022.08.26',
        },
        {
          reward_name: '플러스맵 리워드',
          gift_name: '마일리지',
          date: '2022.08.26',
        },
        {
          reward_name: '더플러스⁺ 멤버십',
          gift_name: '케어플러스 세탁 바우처',
          date: '2022.08.26',
        },
        {
          reward_name: '플러스맵 리워드',
          gift_name: '브랜드 10% 할인 쿠폰',
          date: '2022.08.26',
        },
        {
          reward_name: '플러스맵 리워드',
          gift_name: '50,000원 바우처',
          date: '2022.08.26',
        },
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