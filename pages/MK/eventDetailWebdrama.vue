<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="event-detail">
        <div class="e-title type2"><!-- 230110 단순클릭응모형 : type2 클래스 추가 -->
          <h4>상품평 마일리지 혜택</h4>
          <v-layout align-center>
            <div class="cmp-labels">
              <span class="label black">종료</span>
            </div>
            <p>2021.12.07 ~ 2021.12.26</p>
          </v-layout>
        </div>
        <div class="html-area" style="text-align:center;">
          <!-- html 등록 영역 시작 -->
          <div class="pc-20230807webdrama">
            <!-- 상단 동영상 -->
            <div class="mov-wrap main"><!-- [퍼블수정]07.26 -->
              <img class="img" src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-img01-fix.jpg" alt="더한섬닷컴 첫번째 웹드라마 어른애들 어른애들 마지막 화 공개! 정주행 후 이벤트 참여하면 100% 혜택 2023. 8. 7(월) - 8. 13(일)">
              <video class="mov" autoplay="autoplay" muted="" preload="auto" controls="controls" loop="" playsinline="playsinline" controlslist="nodownload" poster="https://cdn-img.thehandsome.com/md/publish/event/230609_webdrama/pc-mov-poster.jpg">
                <source src="https://img.thehandsome.com/md/publish/event/230609_webdrama/mov.mp4" type="video/mp4">
              </video>
              <a href="https://www.youtube.com/playlist?list=PL9fAsk1AIjk79eJtrN3dZI58Tn1EkzgjP" class="link">더한섬닷컴 youtube 바로가기</a>
            </div>
            <!-- //상단 동영상 -->

            <div class="tab_menu">
              <div class="tab-list-cover">
                <ul class="list">
                  <li class="is_on">
                    <a href="#tab1" class="btn">
                      <img class="img" src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-img-tab-01.png" alt="정주행 이벤트">
                      <img class="img img-on" src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-img-tab-on-01.png" alt="">
                    </a>
                  </li>
                  <li class="">
                    <a href="#tab2" class="btn">
                      <img class="img" src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-img-tab-02.png" alt="어른애들 기획의도 & 인물소개">
                      <img class="img img-on" src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-img-tab-on-02.png" alt="">
                    </a>
                  </li>
                </ul>
                <a href="https://www.thehandsome.com/ko/DP/planshopDetail/6967" class="btn-move">
                  <img class="img" src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-img-tab-03.png" alt="드라마 속 의상">
                </a>
              </div>
              
              <div class="cont_area">
                <div id="tab1" class="cont" style="display: block;">
                  <div class="img-cover">
                    <!-- [퍼블수정]08.01 -->
                    <img class="img" src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-tab1-img01_fix.jpg" alt="EVENT 1/ 퀴즈 풀면 전원 10% 쿠폰을 드려요 정답을 모두 맞히면 80명 추첨 3만 마일리지 증정">
                  </div>
                  <!-- [개발]퀴즈영역 -->
                  <div class="quiz-cover">
                    <!-- 1번째 퀴즈 -->
                    <div class="quiz-list" v-if="quizzes.quiz01">
                      <v-radio-group v-model="rodioQuiz1" column class="cmp-form-radioGroup">
                        <v-radio label="5년차" class="cmp-form-radio"></v-radio>
                        <v-radio label="8년차" class="cmp-form-radio"></v-radio>
                      </v-radio-group>
                      <div class="btn-cover">
                        <button @click="goToNext"><img src="https://img.thehandsome.com/md/publish/event/230807_webdrama/radio-quiz-btn-nextL.png" alt="다음" /></button>
                      </div>
                      <img class="img" src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-quiz01.png" alt="질문 1/ 주인공 백한아는 몇년차일까요?">
                    </div>
                    <!-- 2번째 퀴즈 -->
                    <div class="quiz-list" v-if="quizzes.quiz02">
                      <v-radio-group v-model="rodioQuiz2" column class="cmp-form-radioGroup">
                        <v-radio label="샌드위치" class="cmp-form-radio"></v-radio>
                        <v-radio label="떡볶이" class="cmp-form-radio"></v-radio>
                      </v-radio-group>
                      <div class="btn-cover">
                        <button @click="goToPrev"><img src="https://img.thehandsome.com/md/publish/event/230807_webdrama/radio-quiz-btn-prev.png" alt="이전" /></button>
                        <button @click="goToNext"><img src="https://img.thehandsome.com/md/publish/event/230807_webdrama/radio-quiz-btn-nextS.png" alt="다음" /></button>
                      </div>
                      <img class="img" src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-quiz02.png" alt="질문 2/ 극 중 백한아의 연차를 비유하는 단어는?">
                    </div>
                    <!-- 3번째 퀴즈 -->
                    <div class="quiz-list" v-if="quizzes.quiz03">
                      <v-radio-group v-model="rodioQuiz3" column class="cmp-form-radioGroup">
                        <v-radio label="정재호" class="cmp-form-radio"></v-radio>
                        <v-radio label="이정재" class="cmp-form-radio"></v-radio>
                      </v-radio-group>
                      <div class="btn-cover">
                        <button @click="goToPrev"><img src="https://img.thehandsome.com/md/publish/event/230807_webdrama/radio-quiz-btn-prev.png" alt="이전" /></button>
                        <button @click="goToNext"><img src="https://img.thehandsome.com/md/publish/event/230807_webdrama/radio-quiz-btn-nextS.png" alt="다음" /></button>
                      </div>
                      <img class="img" src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-quiz03.png" alt="질문 3/ 극 중 천새나의 남자친구로 나온 배우는?">
                    </div>
                    <!-- 4번째 퀴즈 -->
                    <div class="quiz-list" v-if="quizzes.quiz04">
                      <v-radio-group v-model="rodioQuiz4" column class="cmp-form-radioGroup full-var">
                        <v-radio label="프리랜서 포토그래퍼" class="cmp-form-radio"></v-radio>
                        <v-radio label="개발자" class="cmp-form-radio"></v-radio>
                      </v-radio-group>
                      <div class="btn-cover">
                        <button @click="goToPrev"><img src="https://img.thehandsome.com/md/publish/event/230807_webdrama/radio-quiz-btn-prev.png" alt="이전" /></button>
                        <button @click="goToNext"><img src="https://img.thehandsome.com/md/publish/event/230807_webdrama/radio-quiz-btn-nextS.png" alt="다음" /></button>
                      </div>
                      <img class="img" src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-quiz04.png" alt="질문 4/ 극 중 문희정의 직업은?">
                    </div>
                    <!-- 5번째 퀴즈 -->
                    <div class="quiz-list" v-if="quizzes.quiz05">
                      <v-radio-group v-model="rodioQuiz5" column class="cmp-form-radioGroup">
                        <v-radio label="호텔" class="cmp-form-radio"></v-radio>
                        <v-radio label="사무실" class="cmp-form-radio"></v-radio>
                      </v-radio-group>
                      <div class="btn-cover">
                        <!-- [퍼블수정]08.01 -->
                        <button @click="goToPrev"><img src="https://img.thehandsome.com/md/publish/event/230807_webdrama/radio-quiz-btn-prev.png" alt="이전" /></button>
                        <button @click="goToNext"><img src="https://img.thehandsome.com/md/publish/event/230807_webdrama/radio-quiz-btn-submitS.jpg" alt="다음" /></button>
                      </div>
                      <img class="img" src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-quiz05.png" alt="질문 5/  8회에서 백한아가 생일파티를 한 장소는?">
                    </div>
                    <!-- 마지막 페이지 -->
                    <div class="quiz-list" v-if="quizzes.quizEnd">
                      <a href="#n" class="download-btn">다운로드</a>
                      <p class="count-num"><span>3</span>문제를 맞혔습니다! (<span>3</span>/5)</p>
                      <img class="img" src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-quiz-end_fix.png" alt="참여 리워드/ [10%] (아울렛 제외)/ * 기간 내 무제한 다운로드">
                    </div>
										<img class="img" src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-quiz-Bg_fix.png" alt="">
                  </div>
                  <!-- //[개발]퀴즈영역 -->
                  
                  <!-- [퍼블수정]07.26 -->
                  <div class="img-cover accordion-cover">
                    <!-- [퍼블수정]08.01 -->
                    <img class="img" src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-tab1-img03_fix.jpg" alt="EVENT 2/ 스타일라이브 아바타 꾸미기 / 주인공 착장의 아바타를 '토크'에 업로드하면 프로필 뱃지 & 어른애들 단추를 드려요/ *23. 9. 1(금) 일괄 지급 / 어른애들 단추 혜택 전 상품 1만원 *쇼핑백 쿠폰 적용 후 상품 할인">
                    <v-expansion-panels accordion class="cmp-acc">
                      <v-expansion-panel>
                        <v-expansion-panel-header>
                          <img class="btn1" src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-tab1-img02-btn1.jpg" alt="스타일라이브 참여방법 확인하기">
                          <img class="btn2 " src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-tab1-img02-btn3.jpg" alt="">
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                          <div class="joine-stylelive">
                            <p>STEP 1 / 마이페이지 > 아바타 만들기 > ROOM 클릭</p>
                            <p>STEP 2 / 나의 아바타 룸에 '추가' 클릭</p>
                            <p>STEP 3 / '의상' 클릭하여 '어른애들'이  태그된 제품으로 꾸민 후  '저장'</p>
                            <p>STEP 4 / 아바타를 선택하고 '스타일라이브 토크 등록＇ 클릭하면 완료</p>
                          </div>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </div>
									<!-- 스와이프 영역 -->
									<div class="swiper-bg-cover" ref="swiperanion">
										<!-- 소품 -->
										<Swiper 
                      :options="{
                        slidesPerView: 1,
                        spaceBetween: 1,
                        autoplay: {
                          delay: 5000,
                        },
                        loop: true,
                        speed: 500,
                        navigation: {
                          prevEl: '.swiper-button-prev',
                          nextEl: '.swiper-button-next',
                        },
                      }"
                      class="swiper-ani"
                      >
											<SwiperSlide class="slide-01">
                        <div class="center-cover">
                          <!-- [퍼블수정]08.01 -->
                          <img class="img fadeimg" src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-ani-center01-2_fix.jpg" alt="이미지를 지원하지 않습니다.">
                          <img class="img" src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-ani-center01-1.jpg" alt="이미지를 지원하지 않습니다.">
                        </div>
                        <a class="img-float img-01" href="https://www.thehandsome.com/ko/PM/productDetail/IL2D1WSHV17WM">
												  <img src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-ani01-1.png" alt="이미지를 지원하지 않습니다.">
                        </a>
                        <a class="img-float img-02" href="https://www.thehandsome.com/ko/PM/productDetail/OB2D4WPC323W">
                          <img src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-ani01-2.png" alt="이미지를 지원하지 않습니다.">
                        </a>
                        <a class="img-float img-03" href="https://www.thehandsome.com/ko/PM/productDetail/TM2D1ABG101W">
                          <img src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-ani01-3.png" alt="이미지를 지원하지 않습니다.">
                        </a>
                        <a class="img-float img-04" href="https://www.thehandsome.com/ko/PM/productDetail/OB2D3ASZ033W">
                          <img src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-ani01-4.png" alt="이미지를 지원하지 않습니다.">
                        </a>
											</SwiperSlide>
											<SwiperSlide class="slide-02">
                        <div class="center-cover">
                          <!-- [퍼블수정]08.01 -->
                          <img class="img fadeimg" src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-ani-center02-2_fix.jpg" alt="이미지를 지원하지 않습니다.">
                          <img class="img" src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-ani-center02-1.jpg" alt="이미지를 지원하지 않습니다.">
                        </div>
                        <a class="img-float img-01" href="https://www.thehandsome.com/ko/PM/productDetail/TM2D1AMF214W">
												  <img src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-ani02-1.png" alt="이미지를 지원하지 않습니다.">
                        </a>
                        <a class="img-float img-02" href="https://www.thehandsome.com/ko/PM/productDetail/SY2D1WPC815WM1">
                          <img src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-ani02-2.png" alt="이미지를 지원하지 않습니다.">
                        </a>
                        <a class="img-float img-03" href="https://www.thehandsome.com/ko/PM/productDetail/TM2D1TTO422W">
                          <img src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-ani02-3.png" alt="이미지를 지원하지 않습니다.">
                        </a>
                        <a class="img-float img-04" href="https://www.thehandsome.com/ko/PM/productDetail/LC2D1ABG118W">
                          <img src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-ani02-4.png" alt="이미지를 지원하지 않습니다.">
                        </a>
											</SwiperSlide>
											<SwiperSlide class="slide-03">
                        <div class="center-cover">
                          <!-- [퍼블수정]08.01 -->
                          <img class="img fadeimg" src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-ani-center03-2_fix.jpg" alt="이미지를 지원하지 않습니다.">
                          <img class="img" src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-ani-center03-1.jpg" alt="이미지를 지원하지 않습니다.">
                        </div>
                        <a class="img-float img-01" href="https://www.thehandsome.com/ko/PM/productDetail/SY2D3KTO631W">
                          <img src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-ani03-1.png" alt="이미지를 지원하지 않습니다.">
                        </a>
                        <a class="img-float img-04" href="https://www.thehandsome.com/ko/PM/productDetail/SY2D3WSC722W">
                          <img src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-ani03-2.png" alt="이미지를 지원하지 않습니다.">
                        </a>
                        <a class="img-float img-03" href="https://www.thehandsome.com/ko/PM/productDetail/SY2D1ABG117W">
                          <img src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-ani03-3.png" alt="이미지를 지원하지 않습니다.">
                        </a>
                        <a class="img-float img-02" href="https://www.thehandsome.com/ko/PM/productDetail/O22D3ASZ033WS">
                          <img src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-ani03-4.png" alt="이미지를 지원하지 않습니다.">
                        </a>
											</SwiperSlide>
											<SwiperSlide class="slide-04">
                        <div class="center-cover">
                          <!-- [퍼블수정]08.01 -->
                          <img class="img fadeimg" src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-ani-center04-2_fix.jpg" alt="이미지를 지원하지 않습니다.">
                          <img class="img" src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-ani-center04-1.jpg" alt="이미지를 지원하지 않습니다.">
                        </div>
                        <a class="img-float img-01" href="https://www.thehandsome.com/ko/PM/productDetail/MN2D1KTO227W">
                          <img src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-ani04-1.png" alt="이미지를 지원하지 않습니다.">
                        </a>
                        <a class="img-float img-02" href="https://www.thehandsome.com/ko/PM/productDetail/O22D3NPCM20W">
                          <img src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-ani04-2.png" alt="이미지를 지원하지 않습니다.">
                        </a>
                        <a class="img-float img-03" href="https://www.thehandsome.com/ko/PM/productDetail/MN2D1KOT323W">
                          <img src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-ani04-3.png" alt="이미지를 지원하지 않습니다.">
                        </a>
                        <a class="img-float img-04" href="https://www.thehandsome.com/ko/PM/productDetail/OB2D1ASZ004W">
                          <img src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-ani04-4.png" alt="이미지를 지원하지 않습니다.">
                        </a>
											</SwiperSlide>
											<button slot="button-prev" class="swiper-button-prev"></button>
											<button slot="button-next" class="swiper-button-next"></button>
										</Swiper>
										<!-- 드라마컷 -->
									</div>
									<!-- //스와이프 영역 -->
                  <!-- //[퍼블수정]07.26 -->
                </div>

                <div id="tab2" class="cont" style="display: none;">
                  <div class="img-cover">
										<a href="https://www.youtube.com/playlist?list=PL9fAsk1AIjk79eJtrN3dZI58Tn1EkzgjP" class="tab2-btn">더한섬닷컴 YouTube 바로가기</a>
										<img class="img" src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-tab2-img01.png" alt="프로페셔널한 일 처리, 퇴근 후엔 반신욕과 와인 한 잔. 원만한 인간관계와 든든한 통장 잔고까지! 우아한 30대를 꿈꿨지만 · · · 현실은 영양제로 배 채우는 부실한 직장인일 뿐. 몸만 자란 30대들의 리얼 스토리. 대체, 진짜 어른이 뭔데? 2023. 6. 19(월) - 8. 7(월) 매주 월요일 늦은 6시 / 더한섬닷컴 공식 유튜브 채널 공개">
                  </div>
                  <div class="img-cover">
										<img class="img" src="https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-tab2-img02.png" alt="어른애들 인물소개/ 백한아_류혜영-더한섬닷컴 마케터-8년차-#사회생활 #오피스룩/ 천새나_신도현-프리랜서 패션 모델-7년차-#결혼 #스타일리시/ 문희정_백수희-프리랜서 포토그래퍼-10년차-#경제 #트렌디 #키치/ 민윤채_윤상정-더한섬닷컴 MD-2년차-#MZ #러블리">
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- [퍼블수정]08.01 -->
          <!-- //[퍼블수정]08.01 -->
          <!-- html 등록 영역 끝 -->
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
    quizzes: {
      quiz01: true,
      quiz02: false,
      quiz03: false,
      quiz04: false,
      quiz05: false,
      quizEnd: false,
    },
    currentIndex: 0,
    quizKeys: ["quiz01", "quiz02", "quiz03", "quiz04", "quiz05", "quizEnd"],
    rodioQuiz1 : 0,
    rodioQuiz2 : 0,
    rodioQuiz3 : 0,
    rodioQuiz4 : 0,
    rodioQuiz5 : 0,
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
  mounted() {
      const tabList = document.querySelectorAll('.tab_menu .list li');
      const contents = document.querySelectorAll('.tab_menu .cont_area .cont')
      let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

      for(let i = 0; i < tabList.length; i++){
        tabList[i].querySelector('.btn').addEventListener('click', function(e){
          e.preventDefault();
          for(let j = 0; j < tabList.length; j++){
            // 나머지 버튼 클래스 제거
            tabList[j].classList.remove('is_on');

            // 나머지 컨텐츠 display:none 처리
            contents[j].style.display = 'none';
          }

          // 버튼 관련 이벤트
          this.parentNode.classList.add('is_on');

          // 버튼 클릭시 컨텐츠 전환
          activeCont = this.getAttribute('href');
          document.querySelector(activeCont).style.display = 'block';
        });
      }
      // [퍼블수정]07.26
      const observer = new IntersectionObserver(this.onIntersection, { threshold: 0.5 });
      observer.observe(this.$refs.swiperanion);
  },
  methods: {
    goToNext() {
      if (this.currentIndex < this.quizKeys.length - 1) {
        this.quizzes[this.quizKeys[this.currentIndex]] = false;
        this.currentIndex++;
        this.quizzes[this.quizKeys[this.currentIndex]] = true;
      }
    },
    goToPrev() {
      if (this.currentIndex > 0) {
        this.quizzes[this.quizKeys[this.currentIndex]] = false;
        this.currentIndex--;
        this.quizzes[this.quizKeys[this.currentIndex]] = true;
      }
    },
    // [퍼블수정]07.26
    onIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.$refs.swiperanion.classList.add('is_on');
          this.swiper = this.$el.querySelector(".swiper-ani").swiper
          this.swiper.autoplay.start();
        }
        else{
          // [퍼블수정]08.01
          this.$refs.swiperanion.classList.remove('is_on');
          this.swiper = this.$el.querySelector(".swiper-ani").swiper
          this.swiper.autoplay.stop();
        }
      });
    },
  },
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/event.scss'; 
  .pc-20230807webdrama {display:block;width:100%;margin:0 auto;}
  .pc-20230807webdrama .img{display: block;width:100%; margin:0 auto;}
  .pc-20230807webdrama .img-cover{position:relative;}
  .pc-20230807webdrama .img-cover.accordion-cover{position:relative;padding-top: 64.27083333333333%;}
  .pc-20230807webdrama .img-cover.accordion-cover > img{position: absolute; top: 0; left: 0; right: 0;}
  .v-application .theme--light.v-expansion-panels .v-expansion-panel,
  .pc-20230807webdrama .img-cover.accordion-cover .cmp-acc .v-expansion-panel:last-child.v-item--active{background: transparent; border-bottom: 0;}
  .pc-20230807webdrama .img-cover.accordion-cover .cmp-acc .v-expansion-panel-header{margin: 0 28.6% 7.3% 29.0%; padding: 0; text-align: center; color: transparent; width: 42.4%;}
  .pc-20230807webdrama .img-cover.accordion-cover .cmp-acc .v-expansion-panel-content__wrap{padding:0; background:#fff;}
  .pc-20230807webdrama .img-cover.accordion-cover .cmp-acc .joine-stylelive{background:url('https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-tab1-img04-2_fix.jpg') center center / 100% auto no-repeat; padding-top: 59.270833333333336%;}
  .pc-20230807webdrama .img-cover.accordion-cover .cmp-acc .joine-stylelive p{height:0; opacity:0; font-size: 0; color: transparent;text-indent: -9999px;}
  .pc-20230807webdrama .img-cover.accordion-cover .cmp-acc .v-expansion-panel-header .btn1{display:block;}
  .pc-20230807webdrama .img-cover.accordion-cover .cmp-acc .v-expansion-panel-header .btn2{display:none;}
  .pc-20230807webdrama .img-cover.accordion-cover .cmp-acc .v-expansion-panel-header.v-expansion-panel-header--active .btn1{display:none;}
  .pc-20230807webdrama .img-cover.accordion-cover .cmp-acc .v-expansion-panel-header.v-expansion-panel-header--active .btn2{display:block;}
  .pc-20230807webdrama .img-cover .tab2-btn{position:absolute; bottom:5.1%; left: 50%; transform: translateX(-50%); font-size: 0; color: transparent !important; width:41%; height:5.4%;}
  .pc-20230807webdrama .img-cover .tab1-event02-btn{position:absolute; bottom:10.9%; left: 50%; transform: translateX(-50%); font-size: 0; color: transparent !important; width:42.5%; height:6.9%;}
  .pc-20230807webdrama .mov-wrap{width:100%;position:relative;}
  .pc-20230807webdrama .mov-wrap .mov{position: absolute; top: 44.4%; left: 16.7%; display: block; width: 66.7%; height: 35.4%;}
  .pc-20230807webdrama .mov-wrap.main .link{display:inline-block;position:absolute;bottom:13.75862%;left:16.7%;width:66.7%;height:6.5%;margin:0;box-sizing:border-box;text-indent:-9999px;color:transparent !important;}
  .pc-20230807webdrama .swiper-wrap{position:relative;}
  .pc-20230807webdrama .quiz-cover{position:relative;}
  .pc-20230807webdrama .quiz-cover .quiz-list{position:absolute; top:0; left: 50%; transform: translateX(-50%); width: 56.5%; height: 74.836%;}
  .pc-20230807webdrama .quiz-cover .quiz-list .download-btn{position: absolute; width: 46.3%; height: 16.3%; bottom: 15%; left: 50%; transform: translateX(-50%); font-size: 0; color: transparent !important;}
  .pc-20230807webdrama .quiz-cover .quiz-list .cmp-form-radioGroup{position:absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);width: 150px;}
  .pc-20230807webdrama .quiz-cover .quiz-list .cmp-form-radioGroup.full-var{width:265px;}
  .pc-20230807webdrama .quiz-cover .quiz-list .cmp-form-radioGroup .cmp-form-radio.v-radio:not(:last-child){margin-bottom:0;}
  .pc-20230807webdrama .quiz-cover .quiz-list .cmp-form-radioGroup .v-label{font-size: 24px; line-height: 57px;}
  .pc-20230807webdrama .quiz-cover .quiz-list .cmp-form-radioGroup .v-input--selection-controls__input{width:36px; height:36px;margin-right: 23px;}
  .pc-20230807webdrama .quiz-cover .quiz-list .cmp-form-radioGroup .v-input--selection-controls__input i{border:3px solid #000;box-shadow: rgba(0, 0, 0, 0.16) 0 6px 8px inset;box-sizing: border-box;}
  .pc-20230807webdrama .quiz-cover .quiz-list .cmp-form-radioGroup .v-input--selection-controls__input .v-icon:before{position: absolute; left: 4px; top: 4px; width: 22px; height: 22px; border-radius: 50%; background: #b21b9e;}
  .pc-20230807webdrama .quiz-cover .quiz-list .btn-cover{position:absolute; left:50%; transform: translate(-50%, 0); width: 46.3%; height: 16.3%; bottom: 15%; display: flex; justify-content: space-between;}
  .pc-20230807webdrama .quiz-cover .quiz-list .btn-cover button + button{margin-left:0.9%;}
  .pc-20230807webdrama .quiz-cover .quiz-list .count-num{position: absolute; left: 50%; transform: translateX(-50%); top: 20.6%; font-size: 30px; line-height: 30px; font-weight:700; width: 100%; text-align: center;}
  .pc-20230807webdrama .quiz-cover .quiz-list .count-num span{color:#c32caf;}
  .pc-20230807webdrama .swiper-bg-cover{position:relative;}
  .pc-20230807webdrama .swiper-container.swiper-ani{z-index:1; margin:0 auto; width:100%; height: 100%; padding:0;}
  .pc-20230807webdrama .swiper-container.swiper-ani .swiper-slide.slide-01{background:url('https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-tab1-swipeBG_01.png') no-repeat; background-size:auto 100%;}
  .pc-20230807webdrama .swiper-container.swiper-ani .swiper-slide.slide-02{background:url('https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-tab1-swipeBG_02.png') no-repeat; background-size:auto 100%;}
  .pc-20230807webdrama .swiper-container.swiper-ani .swiper-slide.slide-03{background:url('https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-tab1-swipeBG_03.png') no-repeat; background-size:auto 100%;}
  .pc-20230807webdrama .swiper-container.swiper-ani .swiper-slide.slide-04{background:url('https://img.thehandsome.com/md/publish/event/230807_webdrama/pc-tab1-swipeBG_04.png') no-repeat; background-size:auto 100%;}
  .pc-20230807webdrama .swiper-container.swiper-ani .swiper-slide .img-float{position:absolute;}
  .pc-20230807webdrama .swiper-container.swiper-ani .swiper-slide .img-float.img-01{width: 11.9%; left: 22.4%;}
  .pc-20230807webdrama .swiper-container.swiper-ani .swiper-slide .img-float.img-02{width: 16.7%; right: 17.6%;}
  .pc-20230807webdrama .swiper-container.swiper-ani .swiper-slide .img-float.img-03{width: 11.8%; left: 21.9%;}
  .pc-20230807webdrama .swiper-container.swiper-ani .swiper-slide .img-float.img-04{width: 16.7%; right: 18.5%;}
  .pc-20230807webdrama .swiper-bg-cover .swiper-container.swiper-ani .swiper-slide .img-float{opacity:0;}
  .pc-20230807webdrama .swiper-bg-cover.is_on .swiper-container.swiper-ani .swiper-slide.swiper-slide-prev .img-float{opacity:1;}
  .pc-20230807webdrama .swiper-bg-cover.is_on .swiper-container.swiper-ani .swiper-slide.swiper-slide-active .img-float.img-01{animation: fadeOuton 1s 0.4s ease-in 1 forwards, vibration 0.5s infinite;}
  .pc-20230807webdrama .swiper-bg-cover.is_on .swiper-container.swiper-ani .swiper-slide.swiper-slide-active .img-float.img-02{animation: fadeOuton 1s 1s ease-in 1 forwards, vibration 0.5s 0.2s infinite;}
  .pc-20230807webdrama .swiper-bg-cover.is_on .swiper-container.swiper-ani .swiper-slide.swiper-slide-active .img-float.img-03{animation: fadeOuton 1s 0.8s ease-in 1 forwards, vibration 0.5s 0.5s infinite;}
  .pc-20230807webdrama .swiper-bg-cover.is_on .swiper-container.swiper-ani .swiper-slide.swiper-slide-active .img-float.img-04{animation: fadeOuton 1s 0.6s ease-in 1 forwards, vibration 0.5s 0.1s infinite;}
  .pc-20230807webdrama .swiper-container.swiper-ani .swiper-slide.slide-01 .img-float.img-01{top: 14.3%;}
  .pc-20230807webdrama .swiper-container.swiper-ani .swiper-slide.slide-01 .img-float.img-02{top: 12.5%;}
  .pc-20230807webdrama .swiper-container.swiper-ani .swiper-slide.slide-01 .img-float.img-03{bottom: 8.3%;}
  .pc-20230807webdrama .swiper-container.swiper-ani .swiper-slide.slide-01 .img-float.img-04{bottom: 13%;}
  .pc-20230807webdrama .swiper-container.swiper-ani .swiper-slide.slide-02 .img-float.img-01{top: 20%;}
  .pc-20230807webdrama .swiper-container.swiper-ani .swiper-slide.slide-02 .img-float.img-02{top: 13.4%;}
  .pc-20230807webdrama .swiper-container.swiper-ani .swiper-slide.slide-02 .img-float.img-03{bottom: 11.4%;}
  .pc-20230807webdrama .swiper-container.swiper-ani .swiper-slide.slide-02 .img-float.img-04{bottom: 18.9%;}
  .pc-20230807webdrama .swiper-container.swiper-ani .swiper-slide.slide-03 .img-float.img-01{top: 15.8%;}
  .pc-20230807webdrama .swiper-container.swiper-ani .swiper-slide.slide-03 .img-float.img-02{top: 18.9%; right: 20%;}
  .pc-20230807webdrama .swiper-container.swiper-ani .swiper-slide.slide-03 .img-float.img-03{bottom: 10.5%;}
  .pc-20230807webdrama .swiper-container.swiper-ani .swiper-slide.slide-03 .img-float.img-04{bottom: 8.2%; right: 19.3%;}
  .pc-20230807webdrama .swiper-container.swiper-ani .swiper-slide.slide-04 .img-float.img-01{top: 13.7%;}
  .pc-20230807webdrama .swiper-container.swiper-ani .swiper-slide.slide-04 .img-float.img-02{top: 12.3%; right:18.1%;}
  .pc-20230807webdrama .swiper-container.swiper-ani .swiper-slide.slide-04 .img-float.img-03{bottom: 8.4%;}
  .pc-20230807webdrama .swiper-container.swiper-ani .swiper-slide.slide-04 .img-float.img-04{bottom: 9.9%;}
  .pc-20230807webdrama .swiper-container.swiper-ani .swiper-slide .center-cover{position:relative; z-index:0; margin:5% auto; width:27.5%; }
  .pc-20230807webdrama .swiper-container.swiper-ani .swiper-slide .center-cover img{z-index:0;}
  .pc-20230807webdrama .swiper-container.swiper-ani .swiper-slide .center-cover img.fadeimg{position:absolute; z-index:1; top:50%; transform: translate(0, -50%); bottom:0; left:0; right:0;}
  .pc-20230807webdrama .swiper-bg-cover.is_on .swiper-container.swiper-ani .swiper-slide.swiper-slide-prev .center-cover img.fadeimg,
  .pc-20230807webdrama .swiper-bg-cover.is_on .swiper-container.swiper-ani .swiper-slide.swiper-slide-active .center-cover img.fadeimg{animation: fadeOut 4s 0.5s ease-in infinite alternate;}
  @keyframes fadeOuton {
  0% {opacity: 0;}
  100% {opacity: 1;}
  }
  @keyframes fadeOut {
  0% {opacity: 1;}
  45% {opacity: 1;}
  60% {opacity: 0;}
  100% {opacity: 0;}
  }
  @keyframes vibration {
  0% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(-0.1px, -0.1px) rotate(0.5deg); }
  50% { transform: translate(0.1px, 0.1px)  rotate(0deg); }
  75% { transform: translate(-0.1px, -0.1px) rotate(-0.5deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
  }
  .pc-20230807webdrama .swiper-button-prev{top:50% !important;margin-top:-20px !important;background-color:transparent !important;opacity:1 !important;}
  .pc-20230807webdrama .swiper-button-next{top:50% !important;margin-top:-20px !important;background-color:transparent !important;opacity:1 !important;}
  .pc-20230807webdrama .swiper-container:hover > .swiper-button-prev{opacity:1 !important;}
  .pc-20230807webdrama .swiper-container:hover > .swiper-button-next{opacity:1 !important;}
  .pc-20230807webdrama .swiper-button-prev{left:5.3%;}
  .pc-20230807webdrama .swiper-button-next{right:5.3%;}
  .pc-20230807webdrama .swiper-button-prev:after{width: 32px; height: 50px; background: none !important; filter: none !important; color: #000 !important; font-size: 50px;}
  .pc-20230807webdrama .swiper-button-next:after{width: 32px; height: 50px; background: none !important; filter: none !important; color: #000 !important; font-size: 50px;}
  .pc-20230807webdrama .swiper-button-prev:after{content:'prev' !important;}
  .pc-20230807webdrama .swiper-button-next:after{content:'next' !important;}
  .pc-20230807webdrama .tab_menu{position:relative;}
  .pc-20230807webdrama .tab_menu .tab-list-cover{position:relative;overflow: hidden;}
  .pc-20230807webdrama .tab_menu .tab-list-cover .btn-move{width:33.3%; position:absolute; right:0; top:0;}
  .pc-20230807webdrama .tab_menu .tab-list-cover .btn-move .img{display:block}
  .pc-20230807webdrama .tab_menu .list{display:flex;align-items:center; width: 66.7%;}
  .pc-20230807webdrama .tab_menu .list li{border-right:1px solid #595959;width: calc(100% / 2);}
  .pc-20230807webdrama .tab_menu .list li .img{display:block}
  .pc-20230807webdrama .tab_menu .list li .img.img-on{display:none}
  .pc-20230807webdrama .tab_menu .list li.is_on .img{display:none;}
  .pc-20230807webdrama .tab_menu .list li.is_on .img.img-on{display:block;}
  .pc-20230807webdrama .tab_menu .cont_area .cont{display:none;}
</style>
