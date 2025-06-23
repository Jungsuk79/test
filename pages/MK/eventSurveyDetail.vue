<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="event-detail detail-survey">
        <div class="e-title">
          <h4>더한섬닷컴 5월 설문 이벤트</h4>
          <p>2021.12.07 ~ 2021.12.26</p>
        </div>
        <div class="html-area" style="text-align:center;">
          이벤트 내용<br />
          HTML 영역
        </div>
        <div class="event-inner">
          <div class="cmp-form-boxGroup">
            <div class="cmp-form-box required">
              <p class="form-tit">1. 가장 좋았던 구매 경험은?</p>
              <v-radio-group v-model="rodioModel0" row class="cmp-form-radioGroup"> <!-- disabled시 disabled 속성 추가 -->
                <v-radio label="너무너무 빠른배송" class="cmp-form-radio" value="1"></v-radio>
                <v-radio label="신속한 고객응대" class="cmp-form-radio" value="2"></v-radio>
              </v-radio-group>
            </div>
            <div class="cmp-form-box required radioType">
              <p class="form-tit">2. 더한섬닷컴의 장점은?</p>
              <v-radio-group v-model="rodioModel1" row class="cmp-form-radioGroup">
                <!--20221214 개발된 화면에 맞춰 클래스 추가-->
                <div class="radio-box"><v-radio label="정직한 상품" class="cmp-form-radio" value="1"></v-radio></div>
                <div class="radio-box"><v-radio label="친절한 서비스" class="cmp-form-radio" value="2"></v-radio></div>
                <div class="radio-box"><div><v-radio label="빠른 배송" class="cmp-form-radio" value="3"></v-radio></div></div>
                <div class="radio-box radio-etc-box">
                  <div class="radio-etc">
                    <v-radio label="기타(의견을 써주세요.)" class="cmp-form-radio" value="4"></v-radio>
                    <div class="radio-inner">
                      <v-textarea v-model="model7" outlined :disabled="rodioModel1!=='4'" :no-resize="true" :rules="[model7Rules.length(50)]" counter="50" maxlength="50" class="cmp-form-textarea counting size1"></v-textarea>
                    </div>
                  </div>
                </div>
              </v-radio-group>
            </div>
            <div class="cmp-form-box required">
              <div class="img-radio">
                <p class="form-tit">3. 갖고 싶은 사은품은 무엇인가요?</p>
                <v-radio-group v-model="rodioModel2" row class="cmp-form-radioGroup">
                  <div class="radio">
                    <v-radio label="스타일러" class="cmp-form-radio" value="1"></v-radio>
                    <div class="radio-inner">
                      <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/event/survey1.png" aspect-ratio="1" alt=""></v-img>
                    </div>
                  </div>
                  <div class="radio">
                    <v-radio label="룸스프레이" class="cmp-form-radio" value="2"></v-radio>
                    <div class="radio-inner">
                      <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/event/survey2.png" aspect-ratio="1" alt=""></v-img>
                    </div>
                  </div>
                  <div class="radio">
                    <v-radio label="에센스" class="cmp-form-radio" value="3"></v-radio>
                    <div class="radio-inner">
                      <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/event/survey3.png" aspect-ratio="1" alt=""></v-img>
                    </div>
                  </div>
                  <div class="radio">
                    <v-radio label="에센스" class="cmp-form-radio" value="4"></v-radio>
                    <div class="radio-inner">
                      <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/event/survey4.png" aspect-ratio="1" alt=""></v-img>
                    </div>
                  </div>
                </v-radio-group>
              </div>
            </div>
            <div class="cmp-form-box">
              <p class="form-tit">4. 더한섬닷컴 4주년을 맞아 갖고 싶은 사은품은 무엇인가요?</p>
              <v-textarea v-model="model8" outlined :no-resize="true" :rules="[model8Rules.length(100)]" counter="100" maxlength="100" class="cmp-form-textarea size2 counting">
                <template #label>
                  내용을 입력해주세요. 
                </template>
              </v-textarea>
            </div>
            <div class="cmp-form-box mt-100 pb-28">
              <div class="img-textarea">
                <p class="form-tit">5. 더한섬닷컴에 런칭되었으면 하는 품목이 있나요?</p>
                <div class="input-area">
                  <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/event/mockup.png" alt=""></v-img>
                  <v-textarea v-model="model9" outlined :no-resize="true" :rules="[model9Rules.length(100)]" counter="100" maxlength="100" class="cmp-form-textarea counting"> <!-- disabled시 disabled 속성 추가 -->
                    <template #label>
                      내용을 입력해주세요. 
                    </template>
                  </v-textarea>
                </div>
              </div>
            </div>
            <div class="cmp-form-box no6">
              <div class="horizontal-radio">
                <p class="form-tit">6. 앱 이용에 대한 만족도를 평가해주세요.</p>
                <v-radio-group v-model="rodioModel3" row class="cmp-form-radioGroup">
                  <v-radio label="매우 불만족" class="cmp-form-radio" value="1"></v-radio>
                  <v-radio label="불만족" class="cmp-form-radio" value="2"></v-radio>
                  <v-radio label="보통" class="cmp-form-radio" value="3"></v-radio>
                  <v-radio label="만족" class="cmp-form-radio" value="4"></v-radio>
                  <v-radio label="매우 만족" class="cmp-form-radio" value="5"></v-radio>
                </v-radio-group>
              </div>
            </div>
          </div>
          <div class="text-center mt-34">
            <v-btn large color="primary">응모하기</v-btn>
          </div>
          <div class="info-text-wrap mt-60"><!-- 230110 이벤트 : mt-60 클래스 추가 -->
            <h5 class="list-title">꼭 읽어주세요!</h5>
            <!--20221205 BO등록형식에 맞춰 수정-->
            <div class="evt-info-dotype">
              <p>본 이벤트는 한섬에서만 진행됩니다.</p>
              <p>2021년 12월 구매 금액이 50만원 미만일 경우 지급 대상에서 제외됩니다.</p>
              <p>이 영역은 BO에서 이벤트관련 안내 고지 작성하는 영역입니다.</p>
              <p>이 영역은 BO에서 이벤트관련 안내 고지 작성하는 영역입니다.</p>
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
      <script src="/scripts/event-detail-swiper.js"></script><!-- 230224 이벤트 : html script 추가 -->
    </div>
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
    rodioModel0: null,
    rodioModel1: null,
    rodioModel2: null,
    rodioModel3: null,
    model7: '',
    model7Rules: {
      length: (len) => (v) =>
        (v || '').length <= len || ``,
    },
    model8: '',
    model8Rules: {
      length: (len) => (v) =>
        (v || '').length <= len || ``,
    },
    model9: '',
    model9Rules: {
      length: (len) => (v) =>
        (v || '').length <= len || ``,
    },
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
