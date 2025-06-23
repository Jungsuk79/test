<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <CommonContentsLeftMenu :title="'마이페이지'" :url="'/json/mypage_left_menu.json'" :active="'/ko/TP/thePlusGate'"></CommonContentsLeftMenu>
      <div class="my-page-r-box theplus-notice"><!-- 마이페이지 -->

        <div class="cmp-page-tit">
          <h2 class="tit">더플러스⁺ 공지사항</h2>
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
              <template v-for="(item, index) in noticeList">
                <tr :key="index">
                  <td class="text-left">
                    <nuxt-link to="#" class="">
                      <div :class="{'cmp-info info-type2': index < 3}"> <!-- 최상단 고정게시물 클래스추가 cmp-info info-type2 -->
                        <p class="list-subject">{{item.notice_title}}</p>
                      </div>
                    </nuxt-link>
                  </td>
                  <td>
                    {{item.date}}
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <!-- 공지사항 테이블 -->
        <ProductListPaging />
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
      noticeList: [
        // 공지사항 상단고정
        {
          notice_title: '더한섬닷컴 고객센터 상담문의 안내(하니톡 채팅상담 일시 중단)',
          date: '2022.08.26',
        },
        {
          notice_title: '물류센터 재고이관에 따른 배송서비스 불가 양해 안내',
          date: '2021.06.15',
        },
        {
          notice_title: '[당첨자발표] 9월 멤버스 이벤트 당첨자결과안내',
          date: '2021.06.15',
        },
        // 공지사항
        {
          notice_title: '더한섬닷컴 서비스 점검 안내(12/10, 00시~07시)',
          date: '2021.06.15',
        },
        {
          notice_title: '[당첨자발표] 핸썸TV 라이브 방송(11/25) 방송 중 이벤트 당첨 결과 안내',
          date: '2021.06.15',
        },
        {
          notice_title: '청담애비뉴(직영점) TIME 매장 리뉴얼 공사에 따른 매장수령 서비스 일시중지 안내',
          date: '2021.06.15',
        },
        {
          notice_title: '더한섬닷컴 동일 상품 최대 구매 수량 제한 기능 추가 안내 건',
          date: '2021.06.15',
        },
        {
          notice_title: '더한섬닷컴 동일 상품 최대 구매 수량 제한 기능 추가 안내 건',
          date: '2021.06.15',
        },
        {
          notice_title: '[당첨자발표] 핸썸TV 라이브 방송(11/25) 방송 중 이벤트 당첨 결과 안내',
          date: '2021.06.15',
        },
        {
          notice_title: '[당첨자발표] 더한섬닷컴 22년 2월 베스트 리뷰 TOP5 선정 안내',
          date: '2021.06.15',
        },
        {
          notice_title: '청담애비뉴(직영점) TIME 매장 리뉴얼 공사에 따른 매장수령 서비스 일시중지 안내',
          date: '2021.06.15',
        },
        {
          notice_title: '더한섬닷컴 동일 상품 최대 구매 수량 제한 기능 추가 안내 건',
          date: '2021.06.15',
        },
        {
          notice_title: '더한섬닷컴 서비스 점검 안내(12/10, 00시~07시)',
          date: '2021.06.15',
        },
        {
          notice_title: '[당첨자발표] 핸썸TV 라이브 방송(11/25) 방송 중 이벤트 당첨 결과 안내',
          date: '2021.06.15',
        },
        {
          notice_title: '[당첨자발표] 더한섬닷컴 22년 2월 베스트 리뷰 TOP5 선정 안내',
          date: '2021.06.15',
        },
        {
          notice_title: '청담애비뉴(직영점) TIME 매장 리뉴얼 공사에 따른 매장수령 서비스 일시중지 안내',
          date: '2021.06.15',
        },
        {
          notice_title: '더한섬닷컴 동일 상품 최대 구매 수량 제한 기능 추가 안내 건',
          date: '2021.06.15',
        },
        {
          notice_title: '더한섬닷컴 서비스 점검 안내(12/10, 00시~07시)',
          date: '2021.06.15',
        },
        {
          notice_title: '[당첨자발표] 핸썸TV 라이브 방송(11/25) 방송 중 이벤트 당첨 결과 안내',
          date: '2021.06.15',
        },
        {
          notice_title: '[당첨자발표] 더한섬닷컴 22년 2월 베스트 리뷰 TOP5 선정 안내',
          date: '2021.06.15',
        },
        {
          notice_title: '청담애비뉴(직영점) TIME 매장 리뉴얼 공사에 따른 매장수령 서비스 일시중지 안내',
          date: '2021.06.15',
        },
        {
          notice_title: '더한섬닷컴 동일 상품 최대 구매 수량 제한 기능 추가 안내 건',
          date: '2021.06.15',
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