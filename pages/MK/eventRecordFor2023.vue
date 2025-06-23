<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="event-detail">
        <div class="e-title type2"><!-- 230110 단순클릭응모형 : type2 클래스 추가 -->
          <h4>앱 다운로드 이벤트</h4>
          <v-layout align-center>
            <div class="cmp-labels">
              <span class="label black">종료</span>
            </div>
            <p>2021.12.07 ~ 2021.12.26</p>
          </v-layout>
        </div>
        <div class="html-area" style="text-align:center;">

          <!-- html 등록 영역 시작 -->
          <div class="pc-231226therecordfor2023">
            <div class="main">
              <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/231226_therecordfor2023/pc-01.jpg" alt="THE RECORD for 2023 2023.12.26(화) - 12.31(일) 올 한 해도 더한섬닷컴과 함께 해주셔서 감사드려요." />
              <div class="swiper-box">
                <Swiper
                  :options="{
                    autoplay: {
                      delay: 0,
                      disableOnInteraction: false
                    },
                    speed: 5000,
                    loop: true,
                    loopAdditionalSlides : 1,
                    allowTouchMove: false,
                    slidesPerView: 4,
                    spaceBetween: 30,
                    centeredSlides: true,
                  }"
                  >
                  <SwiperSlide v-for="(item, idx) in 9" :key="idx">
                    <img class="img" :src="`https://cdn-img.thehandsome.com/md/publish/event/231226_therecordfor2023/slide-0${idx + 1}.jpg`" alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>

            </div>

            <!-- 로그인 체크 -->
            <div class="btn-wrap">
              <div v-if="isLogin">
                <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/231226_therecordfor2023/pc-login-02.jpg" alt="BENEFIT 01 My 2023 Record * 쇼핑 유형 확인 시 쿠폰함 자동 발급, ID당 1회, * 집계 기준은 23년 1월 1일 ~ 23년 11월 30일이며, 재미로만 봐주세요 :)" />
                <p class="info-txt"><span>{{ userName }}</span>님과 함께한지 <span>{{ timeTogether }}</span>일째<br /><span>{{ userName }}</span>님의 2023년 쇼핑 유형을 살펴보고, 감사 쿠폰 10% 혜택을 받아보세요</p>
                <v-btn class="btn btn-check" @click="checkUserTypePop()">내 쇼핑 유형 확인 후 혜택 받기</v-btn>
              </div>
              <div v-else>
                <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/231226_therecordfor2023/pc-logout-02.jpg" alt="BENEFIT 01 My 2023 Record 나의 2023년 쇼핑 유형을 살펴보고  감사 쿠폰 10% 혜택을 받아보세요! * 쇼핑 유형 확인 시 쿠폰함 자동 발급, ID당 1회, * 집계 기준은 23년 1월 1일 ~ 23년 11월 30일이며, 재미로만 봐주세요 :)" />
                <a class="btn link" href="https://www.thehandsome.com/ko/ME/login">로그인하고 혜택 받기</a>
              </div>
            </div>
            
            <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/231226_therecordfor2023/pc-03.jpg" alt="BENEFIT 02 마일리지 1만점 추첨 쇼핑 유형을 스타일라이브에 공유하고 1만점 받아보세요 STEP.1 쇼핑 유형 살펴보기, STEP.2 쇼핑 유형 이미지 저장, STEP.3 스타일라이브 토크 작성" />
            <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/231226_therecordfor2023/pc-04.jpg" alt="BENEFIT 03 2024 다이어리 증정 정상 80만원 이상 구매 시 2024년 레코드를 담을 다이어리를 드려요" />
            <!-- 링크영역 추가 -->
            <div class="btn-wrap">
              <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/231226_therecordfor2023/pc-05.jpg" alt="BENEFIT 04 H.Point 결제 혜택 H.Point Pay로 40만원 이상 결제 시 1만 포인트를 드려요. (*소진시 조기 종료)" />
              <a class="btn link-point" href="https://www.thehandsome.com/ko/MK/event/14977">H.Point 결제 혜택 자세히 보기</a>
            </div>
            <div class="btn-wrap">
              <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/231226_therecordfor2023/pc-06.jpg" alt="MD RECOMMENDED" />
              <a class="btn link-week" href="https://www.thehandsome.com/ko/DP/planshopDetail/359">WEEKLY BEST 기획전 보러가기</a>
              <a class="btn link-outlet" href="https://www.thehandsome.com/ko/DP/planshopDetail/12359">Outlet +PLUS 기획전 보러가기</a>
            </div>
            <!-- //링크영역 추가 -->

            <v-dialog
              v-model="checkTypePop"
              :content-class="`user-type-pop ${timeType}`"
              transition="false">
           
              <div class="popup-header">
                <button class="pop-close" @click="checkTypePop = false">
                  <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/231226_therecordfor2023/pc-btn-close.png" alt="팝업 닫기" />
                </button>
              </div>

              <!-- proportionType >>> 60% 이상: top, 40%이상 60%미만: middle, 40% 미만: bottom, 구매이력없음: none -->
              <!-- timeType >>> 결재시간비중 (아침:morning, 낮:afternoon, 밤:night) * 구매이력없음 일때는 '' 빈값으로 주셔야 합니다.-->
              <img class="img" :src="`https://cdn-img.thehandsome.com/md/publish/event/231226_therecordfor2023/${proportionType}${proportionType != 'none'? '-' : ''}${timeType}.jpg`" alt="" />
              <img class="img" :src="`https://cdn-img.thehandsome.com/md/publish/event/231226_therecordfor2023/${proportionType}${proportionType != 'none'? '-' : ''}${timeType}-txt.jpg`" alt="" />
              
              <!-- 다운로드 버튼 -->
              <div class="pop-btn-wrap">
                <div v-if="!isImgDownload" class="btn-down-wrap">
                  <img class="img" :src="`https://cdn-img.thehandsome.com/md/publish/event/231226_therecordfor2023/pop-btn-on.jpg`" alt="" />
                  <button class="btn-down" @click="downloadImg">쇼핑유형 이미지 저장</button>
                </div>
                <img v-else class="img" :src="`https://cdn-img.thehandsome.com/md/publish/event/231226_therecordfor2023/pop-btn-off.jpg`" alt="" />
              </div>

              <!-- event user data-->
              <div v-if="proportionType != 'none'" class="list-wrap">
                <p class="tit">{{ userName }}님은</p>
                <ul class="data-list">
                  <li v-for="(item, index) in userDataList" class="list" :key="`list-${index}`">
                    <span class="l-txt">{{ item.title }}</span>
                    <span class="r-txt">{{ item.value }}{{ index === 0 ? '일': index === 1 ? '요일' : ''}}</span>
                  </li>
                </ul>
              </div>

              <!-- 안내사항 -->
              <div class="info-wrap">
                <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/231226_therecordfor2023/pop-type-info.png" alt="감사하는 마음으로 쿠폰함에 넣어둔 10% 혜택도 챙겨 보세요. 집계 기준은 23년 1월 1일 ~ 11월 30일이며, 재미로만 봐주세요 :)" />
              </div>
            </v-dialog>

          </div>
          <style type="text/css">
            .pc-231226therecordfor2023 {display:block;width:100%;margin:0 auto;}
            .pc-231226therecordfor2023 .img{display: block;width:100%; margin:0 auto;}
            .pc-231226therecordfor2023 .main{position:relative;}
            .pc-231226therecordfor2023 .main .swiper-box{position:absolute;bottom:9.855%;left:0;z-index:1;width:100%;background-color:#000;}
            .pc-231226therecordfor2023 .main .swiper-box .swiper-wrapper{transition-timing-function: linear;}
            .pc-231226therecordfor2023 .btn-wrap{position:relative;}
            .pc-231226therecordfor2023 .btn-wrap .info-txt{position:absolute;top:26.578%;left:0;width:100%;font-size:20px;font-weight:400;line-height:30px;}
            .pc-231226therecordfor2023 .btn-wrap .info-txt span{font-size:20px;font-weight:700;}
            .pc-231226therecordfor2023 .btn-wrap .btn{display:inline-block;position:absolute;margin:0;box-sizing:border-box;text-indent:-9999px;color:transparent !important;background-color:transparent;}
            .pc-231226therecordfor2023 .btn-wrap .btn-check, .pc-231226therecordfor2023 .btn-wrap .link{bottom:22.812846%;left:35.9375%;width:28.125%;height:8.859%;margin:0;}
            .pc-231226therecordfor2023 .btn-wrap .link-point{bottom:21.07%;left:35.9375%;width:28.125%;height:9.5238%;margin:0;}
            .pc-231226therecordfor2023 .btn-wrap .link-week{bottom:5.86667%;left:27.604%;width:21.875%;height:68%;margin:0;}
            .pc-231226therecordfor2023 .btn-wrap .link-outlet{bottom:5.86667%;right:27.604%;width:21.875%;height:68%;margin:0;}
            .v-dialog.user-type-pop{display:block;border-top:none;max-width:750px;max-height:100% !important;position:relative;}
            .v-dialog.user-type-pop .popup-header{display:flex;align-items:center;justify-content:flex-end;position:sticky;top:0;left:0;z-index:3;width:100%;margin-top:-65px;padding:20px;background-color:#515151;}
            .v-dialog.user-type-pop.morning .popup-header{background-color:#beb8b8;}
            .v-dialog.user-type-pop.afternoon .popup-header{background-color:#f5693d;}
            .v-dialog.user-type-pop.night .popup-header{background-color:#5469ba;}
            .v-dialog.user-type-pop .pop-close{width:34px;height:34px;}
            .v-dialog.user-type-pop .pop-btn-wrap{min-height:140px;;padding:40px 40px 0 40px;background-color:#515151;}
            .v-dialog.user-type-pop .list-wrap{padding:100px 40px 0;background-color:#515151;}
            .v-dialog.user-type-pop .list-wrap .tit{font-size:48px;color:#fff;}
            .v-dialog.user-type-pop .list-wrap .data-list{width:100%;margin-top:50px;}
            .v-dialog.user-type-pop .list-wrap .data-list .list{display:flex;align-items:center;justify-content:space-between;width:100%;height:120px;margin-top:19px;padding:0 40px;border-radius:12px;transform:translateY(30px);opacity:0;transition: all 0.5s ease-in-out;}
            .v-dialog.user-type-pop .list-wrap .data-list .list.on{transform:translateY(0);opacity:1;}
            .v-dialog.user-type-pop .list-wrap .data-list .list:first-child{margin-top:0;}
            .v-dialog.user-type-pop.morning .list-wrap .data-list .list{background-color:#ada8a8;}
            .v-dialog.user-type-pop.afternoon .list-wrap .data-list .list{background-color:#ff7f57;}
            .v-dialog.user-type-pop.night .list-wrap .data-list .list{background-color:#6279d1;}
            .v-dialog.user-type-pop .list-wrap .data-list .list .l-txt{font-size:30px;font-weight:400;color:#fff;text-align:left;}
            .v-dialog.user-type-pop .list-wrap .data-list .list .r-txt{font-size:40px;font-weight:400;color:#fff;text-align:right;}
            .v-dialog.user-type-pop .info-wrap{padding:80px 80px 106px;background-color: #515151;}
            .v-dialog.user-type-pop.morning .info-wrap{background-color: #beb8b8;}
            .v-dialog.user-type-pop.afternoon .info-wrap{background-color: #f5693d;}
            .v-dialog.user-type-pop.night .info-wrap{background-color: #5469ba;}
            .v-dialog.user-type-pop.morning .pop-btn-wrap, .v-dialog.user-type-pop.morning .list-wrap{background-color:#beb8b8;}
            .v-dialog.user-type-pop.afternoon .pop-btn-wrap, .v-dialog.user-type-pop.afternoon .list-wrap{background-color:#f5693d;}
            .v-dialog.user-type-pop.night .pop-btn-wrap, .v-dialog.user-type-pop.night .list-wrap{background-color:#5469ba;}
            .v-dialog.user-type-pop .pop-btn-wrap .btn-down-wrap{position:relative;}
            .v-dialog.user-type-pop .pop-btn-wrap .btn-down-wrap .btn-down{display:inline-block;position:absolute;bottom:0;left:0;width:100%;height:100%;margin:0;box-sizing:border-box;text-indent:-9999px;color:transparent !important;}
            .v-dialog.user-type-pop::-webkit-scrollbar, .v-application .v-dialog.user-type-pop::-webkit-scrollbar{width:10px;}
            .v-dialog.user-type-pop::-webkit-scrollbar-button, .v-application .v-dialog.user-type-pop::-webkit-scrollbar-button{width:0;height:0;}
            .v-dialog.user-type-pop::-webkit-scrollbar-thumb{background-color: #000;background-clip: padding-box;border-left: 4px solid #515151;border-right: 4px solid #515151;}
            .v-dialog.user-type-pop::-webkit-scrollbar-track{background-color: #515151;}
            .v-dialog.user-type-pop.morning::-webkit-scrollbar-thumb{border-left-color: #beb8b8;border-right-color: #beb8b8;}
            .v-dialog.user-type-pop.morning::-webkit-scrollbar-track{background-color: #beb8b8;}
            .v-dialog.user-type-pop.afternoon::-webkit-scrollbar-thumb{border-left-color: #f5693d;border-right-color: #f5693d;}
            .v-dialog.user-type-pop.afternoon::-webkit-scrollbar-track{background-color: #f5693d;}
            .v-dialog.user-type-pop.night::-webkit-scrollbar-thumb{border-left-color: #5469ba;border-right-color: #5469ba;}
            .v-dialog.user-type-pop.night::-webkit-scrollbar-track{background-color: #5469ba;}
          </style>
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
          <v-btn large outlined color="primary" class="html-btn gray-outlined">목록</v-btn>
        </div>
      </div>
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
    isLogin: true, // 로그인 유무
    checkTypePop: false,
    isImgDownload: false,
    timeTogether: '999',
    userName: '더한섬...',
    // 60% 이상: top, 40%이상 60%미만: middle, 40% 미만: bottom, 구매이력없음: none
    proportionType: '', // [top, middle, bottom, none]
    // 결재시간비중 (아침:morning, 낮:afternoon, 밤:night) * 구매이력없음 일때는 '' 빈값으로 주셔야 합니다.
    timeType: '', // [morning, afternoon, night, ]
    userDataList: [
      {title: '올해 방문 일 수', value: '9999'},
      {title: '가장 많이 방문한 요일', value: '수'},
      {title: '가장 애정하는 브랜드', value: 'TIME'},
      {title: '가장 많이 구매한 카테고리', value: '니트'},
    ],


    // 샘플 data
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
    
  },
  methods: {
    checkUserTypePop() {
      const me = this
      // 60% 이상: top, 40%이상 60%미만: middle, 40% 미만: bottom, 구매이력없음: none
      me.proportionType = 'top' // [top, middle, bottom, none]
      
      // 결재시간비중 (아침:morning, 낮:afternoon, 밤:night)  * 구매이력없음 일때는 '' 빈값으로 주셔야 합니다.
      me.timeType = 'afternoon' // [morning, afternoon, night]
      
      me.checkTypePop = true
 
      // 팝업안 리스트 애니메이션
      me.$nextTick(() => {
        const popScrollWrap = document.querySelector('.v-dialog.user-type-pop')
        const windowHeight = window.innerHeight
        const classAddPoint = windowHeight / 2 + 320
        const popDataListWrap = document.querySelector('.v-dialog.user-type-pop .list-wrap')
        const popDataList = document.querySelectorAll('.v-dialog.user-type-pop .list-wrap .list')
        // popup scroll 위치 초기화
        popScrollWrap.scrollTo(0, 0)

        if (popDataListWrap) {
          popScrollWrap.addEventListener('scroll', function(e) {
            popDataList.forEach((item) => {
              if (classAddPoint >= item.getBoundingClientRect().top) {
                item.classList.add('on')
              }
              else {
                item.classList.remove('on')
              }
            })
          })
        }
      })
    },
    downloadImg () {
      const me = this

      console.log('다운로드 되었습니다.')

      // url : https://cdn-img.thehandsome.com/md/publish/event/231226_therecordfor2023/파일명.jpg
      // 60% 이상
      //   아침 : top-morning.jpg
      //   낮 : top-afternoon.jpg
      //   밤 : top-night.jpg
      // 40% 이상 ~ 60% 미만
      //   아침 : middle-morning.jpg
      //   낮 : middle-afternoon.jpg
      //   밤 : middle-night.jpg
      // 40% 미만
      //   아침 : bottom-morning.jpg
      //   낮 : bottom-afternoon.jpg
      //   밤 : bottom-night.jpg
      // 구매이력 없음
      //   none.jpg

      // 버튼 스위칭
      me.isImgDownload = true
    }
  }
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/event.scss'; 
</style>
