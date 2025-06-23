<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="event-detail detail-comment">
        <div class="e-title">
          <h4>더한섬닷컴 5월 설문 이벤트</h4>
          <v-layout align-center>
            <div class="cmp-labels">
              <span class="label black">종료</span>
            </div>
            <p>2021.12.07 ~ 2021.12.26</p>
          </v-layout>
        </div>
        <div class="html-area" style="text-align:center;">
          이벤트 내용<br />
          HTML 영역
        </div>
        <div class="event-inner">
          <div class="info-text-wrap">
            <h5 class="list-title">꼭 읽어주세요!</h5>
            <!--20221205 BO등록형식에 맞춰 수정-->
            <div class="evt-info-dotype">
              <p>본 이벤트는 한섬에서만 진행됩니다.</p>
              <p>2021년 12월 구매 금액이 50만원 미만일 경우 지급 대상에서 제외됩니다.</p>
              <p>이 영역은 BO에서 이벤트관련 안내 고지 작성하는 영역입니다.</p>
              <p>이 영역은 BO에서 이벤트관련 안내 고지 작성하는 영역입니다.</p>
            </div>
          </div>
        <!-- 댓글쓰기 -->
        <div class="comment-wrap">
          <div class="write-area">
            <h4 class="cmp-font fnt-18 mb-10">댓글쓰기</h4>
            <v-textarea v-model="model7" outlined :no-resize="true" :rules="[model7Rules.length(500)]" counter="500" maxlength="500" height="140" class="cmp-form-textarea counting">
              <template #label>
                로그인 후 댓글을 입력해 주세요!
              </template>
            </v-textarea>
            <div class="text-center mt-24">
              <v-btn nuxt color="primary" large>등록하기</v-btn>
            </div>
          </div>
          <div class="list-area">
            <div class="title-tab">
              <h4 class="cmp-font fnt-20">댓글 2,415</h4>
              <v-btn-toggle mandatory v-model="toggleText" tile color="primary" group class="toggle-btn">
                <v-btn text>전체</v-btn>
                <v-btn text>내가 쓴 댓글</v-btn>
              </v-btn-toggle>
            </div>
            <v-tabs-items v-model="toggleText" touchless>
              <!-- 전체 -->
              <v-tab-item :transition="false">
                <ul class="comment-list">
                  <li v-for="n in 10" :key="n" class="list-item">
                    <div class="list-inner">
                      <v-layout align-center justify-space-between>
                        <strong class="nick">woojoo***</strong>
                        <p class="date">2022.05.19</p>
                      </v-layout>
                      <p class="content">주인공들이 완전 찰떨궁합이네요~~ 스타일도 독특하고 재밌있게 보고있어요!!</p>
                    </div>
                  </li>
                </ul>
                <ProductListPaging />
                <!-- 데이터없음 -->
                  <!-- <CommonNoData msg="등록된 댓글이 없습니다."></CommonNoData> -->
                <!-- 데이터 없음 -->
              </v-tab-item>
              <!-- //전체 -->
              <!-- 내가 쓴 댓글 -->
              <v-tab-item :transition="false">
                <ul class="comment-list">
                  <li class="list-item">
                    <div class="list-inner">
                      <v-layout align-center justify-space-between>
                        <strong class="nick">woojoo***</strong>
                        <p class="date">2022.05.19</p>
                      </v-layout>                    
                      <p class="content">내가 쓴 글 주인공들이 완전 찰떨궁합이네요~~ 스타일도 독특하고 재밌있게 보고있어요!!</p>
                      <div class="text-right mt-20">
                        <v-btn-toggle mandatory tile color="primary" group class="toggle-btn onecolor">
                          <v-btn text @click="onModify=!onModify">수정</v-btn>
                          <v-btn text>삭제</v-btn>
                        </v-btn-toggle>               
                      </div>     
                    </div>                      
                    <template v-if="onModify">
                      <div class="modify-area full-width full">
                        <v-textarea v-model="modifyModel" outlined :no-resize="true" :rules="[model7Rules.length(500)]" counter="500" maxlength="500" height="162" class="cmp-form-textarea counting"></v-textarea>
                        <div class="text-center">
                          <v-btn nuxt color="primary" large class="mt-24">수정하기</v-btn>
                        </div>
                      </div>
                    </template>
                  </li>
                </ul>
                <ProductListPaging />
                <!-- 데이터없음 -->
                  <!-- <CommonNoData msg="참여하신 댓글이 없습니다."></CommonNoData> -->
                <!-- 데이터 없음 -->
              </v-tab-item>
              <!-- //내가 쓴 댓글 -->
            </v-tabs-items>
          </div>
        </div>
        <!-- //댓글쓰기 -->          
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
    model7: '',
    model7Rules: {
      length: (len) => (v) =>
        (v || '').length <= len || ``,
    },
    modifyModel: '내가 쓴 글 주인공들이 완전 찰떨궁합이네요~~ 스타일도 독특하고 재밌있게 보고있어요!!',
    toggleText: '1',
    onModify: false, // 수정하기 (퍼블확인용)    
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
