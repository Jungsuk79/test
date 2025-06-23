<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="event-detail detail-coupon">
        <div class="e-title">
          <h4>쿠폰 이벤트</h4>
          <p>2021.12.07 ~ 2021.12.26</p>
        </div>
        <!--20230125 쿠폰 이벤트 HTML 추가-->
        <div class="html-area" style="text-align:center;">
          <!-- S : 등록 영역 -->
          <!-- 이벤트 내용<br />
          HTML 영역 예시
          <div class="html-btn">
            <v-btn large color="primary">쿠폰 받기</v-btn>
            <v-btn large color="primary">쿠폰 받기</v-btn>
          </div> -->
          <img src="https://img.thehandsome.com/md/publish/dummy/pc/cpn-event-image.png" alt="현대카드 the Red 쇼핑바우처 사용이벤트 안내" />
          <div class="cpn-list">
            <div v-for="(item, index) in cpnList" :key="index" class="cpn-list-item">
              <!-- [퍼블수정]23.03.13 -->
              <template v-if="!seemore & index < 2">
                <div class="cpn" :class="{'downloaded':item.down_com}">
                  <div class="cpn-top">
                    <p>{{ item.cpn_name }}</p>
                    <p v-if="item.only_app" class="cmp-labels">
                      <span class="label">앱전용</span>
                    </p>
                  </div>
                  <div class="cpn-info" :class="{'full':!item.cpn_date}">
                    <h4 class="value">{{ item.cpn_value }}</h4>
                    <p class="date">{{ item.cpn_date }}<template v-if="item.cpn_date != null">까지 사용가능</template></p>
                  </div>
                </div>
                <!-- [나와야함] -->
                <div class="cpn-botm">
                  <v-btn v-if="!item.down_com" large color="primary" class="coupon-download">다운받기</v-btn>
                  <v-btn v-if="item.down_com" large color="primary" class="coupon-download" disabled>다운받기</v-btn>
                </div>
                <p class="cpn-notice">
                  <span v-html="item.notice"></span>
                </p>
              </template>
              <template v-if="seemore">
                <div class="cpn" :class="{'downloaded':item.down_com}">
                  <div class="cpn-top">
                    <p>{{ item.cpn_name }}</p>
                    <p v-if="item.only_app" class="cmp-labels">
                      <span class="label">앱전용</span>
                    </p>
                  </div>
                  <div class="cpn-info" :class="{'full':!item.cpn_date}">
                    <h4 class="value">{{ item.cpn_value }}</h4>
                    <p class="date">{{ item.cpn_date }}<template v-if="item.cpn_date != null">까지 사용가능</template></p>
                  </div>
                </div>
                <!-- [나와야함] -->
                <div class="cpn-botm">
                  <v-btn v-if="!item.down_com" large color="primary" class="coupon-download">다운받기</v-btn>
                  <v-btn v-if="item.down_com" large color="primary" class="coupon-download" disabled>다운받기</v-btn>
                </div>
                <p class="cpn-notice">
                  <span v-html="item.notice"></span>
                </p>
              </template>
              
              <!-- //[퍼블수정]23.03.13 -->
            </div>
          </div>
          <div class="cmp-paging paging-more" v-if="cpnList.length > 2 && !seemore"><!-- [퍼블수정]23.01.26 버튼 large 추가 -->
            <v-btn @click="seemore=!seemore" outlined large color="primary" class="gray-outlined">쿠폰 더보기<em v-cmp-icon="{ size: 12, name: 'down' }" class="cmp-icon"></em></v-btn>
          </div>
          <!-- //E : 등록 영역 -->
        </div>
        <!-- //20230125 쿠폰 이벤트 HTML 추가-->
        <div class="event-inner">
          <div class="info-text-wrap">
            <h5 class="list-title">꼭 읽어주세요!</h5>
            <!--20221205 BO등록형식에 맞춰 수정-->
            <div class="evt-info-dotype">
              <ul>
                <li>본 이벤트는 한섬에서만 진행됩니다.</li>
                <li>2021년 12월 구매 금액이 50만원 미만일 경우 지급 대상에서 제외됩니다.</li>
                <li>이 영역은 BO에서 이벤트관련 안내 고지 작성하는 영역입니다.</li>
              </ul>
              <!-- <p>본 이벤트는 한섬에서만 진행됩니다.</p>
              <p>2021년 12월 구매 금액이 50만원 미만일 경우 지급 대상에서 제외됩니다.</p>
              <p>이 영역은 BO에서 이벤트관련 안내 고지 작성하는 영역입니다.</p>
              <p>이 영역은 BO에서 이벤트관련 안내 고지 작성하는 영역입니다.</p> -->
            </div>
          </div>
        </div>
        <div class="swiper-wrap">
          <div class="cmp-sub-tit">
            <h3 class="tit">최신 이벤트</h3>
          </div>
          <div class="cmp-swiper-box btn-large search-swiper">
            <Swiper
              :options="{
                slidesPerView: 5,
                slidesPerGroup : 5,
                spaceBetween: 25,
                navigation: {
                  prevEl: '.planshop-prev-btn',
                  nextEl: '.planshop-next-btn',
                },
              }"
              :class="{'swiper-no-swiping':eventList.list.length <= 5}"
            >
              <SwiperSlide v-for="(item, index) in eventList.list" :key="index">
                <div class="swiper-unit">
                  <nuxt-link to="#none">
                    <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png" aspect-ratio="1" alt="상품 이미지"></v-img>
                    <p class="swiper-title">{{item.title}}</p>
                    <p class="swiper-text">{{item.date}}</p>
                  </nuxt-link>
                </div>
              </SwiperSlide>
            </Swiper>
            <template v-if="eventList.list.length > 5">
              <div slot="button-prev" class="swiper-button-prev swiper-no-swiping planshop-prev-btn"><i v-cmp-icon="{size:32, name:'prev', invert:1}">이전</i></div>
              <div slot="button-next" class="swiper-button-next swiper-no-swiping planshop-next-btn"><i v-cmp-icon="{size:32, name:'next', invert:1}">다음</i></div>
            </template>
          </div>       
        </div>
        <div class="bottom-btn">
          <v-btn large outlined color="primary" class="html-btn gray-outlined">목록</v-btn><!-- [퍼블수정]23.01.26 class gray-outlined 추가 -->
        </div>
      </div>

    </div>
    <script src="/scripts/event-detail-swiper.js"></script><!-- 230224 이벤트 : html script 추가 -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  layout: 'LayoutBasics',
  components : {
    Swiper,
    SwiperSlide,
  },  
  data: () => ({
    seemore: false,
   // [퍼블수정]23.03.13 참고 데이터 수정
    cpnList: [
      {
        cpn_name: '리뉴얼 기념 앱전용', // 쿠폰명
        only_app: true, // 앱전용
        cpn_value: '15%', // 쿠폰 값
        cpn_date: '22.01.22 13:00:00', // 기간
        down_com: false, // 다운로드 여부
        notice: "리뉴얼 기념 앱전용 정상 10% 할인 쿠폰입니다.<br />*아울렛 불가"
      },
      {
        cpn_name: '아울렛 COUPON',
        only_app: false,
        cpn_value: '30000',
        cpn_date: '22.01.22 13:00:00',
        down_com: true,
        notice: "리뉴얼 기념 앱전용 정상 5% 할인 쿠폰입니다."
      },
      {
        cpn_name: '아울렛 COUPON',
        only_app: false,
        cpn_value: '10%',
        cpn_date: '22.01.22 13:00:00',
        down_com: false,
        notice: null
      },
      {
        cpn_name: '아울렛 COUPON',
        only_app: true,
        cpn_value: '10000',
        cpn_date: '22.01.22 13:00:00',
        down_com: true,
        notice: "정상 30만원 이상 구매 시 (아울렛 및 라이프스타일 제외)<br/>기본 10%할인, 2% 추가적립"
      },
      {
        cpn_name: '아울렛 COUPON',
        only_app: false,
        cpn_value: '무료배송/교환',
        cpn_date: '22.01.22 13:00:00',
        down_com: true,
        notice: null
      },
    ],
    eventList : { // swiper data
      list:[
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '앱 다운로드 이벤트',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '더한섬닷컴 X 스마일페이 12월 첫 결제',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '더한섬닷컴 X 스마일페이 12월 첫 결제 더한섬닷컴 X 스마일페이 12월 첫 결제',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '앱 다운로드 이벤트',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '더한섬닷컴 X 스마일페이 12월 첫 결제',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '더한섬닷컴 X 스마일페이 12월 첫 결제',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '앱 다운로드 이벤트',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '더한섬닷컴 X 스마일페이 12월 첫 결제',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '더한섬닷컴 X 스마일페이 12월 첫 결제',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '앱 다운로드 이벤트',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '더한섬닷컴 X 스마일페이 12월 첫 결제',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '더한섬닷컴 X 스마일페이 12월 첫 결제',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
      ],
    },        
  }),
  methods: {
  },
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/event.scss'; 
</style>
