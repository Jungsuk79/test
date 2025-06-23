<template>
  <div class="contents">
    <div class="content-wrap">
      <div class="event-detail">
        <div class="e-title type2">
          <h4>섬세한가위</h4>
          <v-layout align-center>
            <div class="cmp-labels">
              <span class="label black">종료</span>
            </div>
            <p>2021.12.07 ~ 2021.12.26</p>
          </v-layout>
        </div>
        <div class="html-area" style="text-align:center;">

          <!-- html 등록 영역 시작 -->
          <div class="pc-230912chuseok">
            <div class="main">
              <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/230912_chuseok/pc-01_1.jpg" alt="" />
              <div class="img-txt-wrap-01" :class="{'load' : isLoaded}">
                <img class="img img-txt txt-01" src="https://cdn-img.thehandsome.com/md/publish/event/230912_chuseok/pc-txt-01.png" alt="섬세" />
                <img class="img img-01" src="https://cdn-img.thehandsome.com/md/publish/event/230912_chuseok/pc-img-01.png" alt="" />
              </div>
              <div class="img-txt-wrap-02" :class="{'load' : isLoaded}">
                <img class="img img-txt txt-02" src="https://cdn-img.thehandsome.com/md/publish/event/230912_chuseok/pc-txt-02.png" alt="한" />
                <img class="img img-txt txt-03" src="https://cdn-img.thehandsome.com/md/publish/event/230912_chuseok/pc-txt-03.png" alt="" />
                <img class="img img-txt txt-04" src="https://cdn-img.thehandsome.com/md/publish/event/230912_chuseok/pc-txt-04.png" alt="" />
                <img class="img img-02" src="https://cdn-img.thehandsome.com/md/publish/event/230912_chuseok/pc-img-02.png" alt="" />
              </div>
              <div class="img-txt-wrap-03" :class="{'load' : isLoaded}">
                <img class="img img-txt txt-05" src="https://cdn-img.thehandsome.com/md/publish/event/230912_chuseok/pc-txt-05.png" alt="가위" />
                <img class="img img-03" src="https://cdn-img.thehandsome.com/md/publish/event/230912_chuseok/pc-img-01.png" alt="" />
              </div>
              <img class="img img-04" src="https://cdn-img.thehandsome.com/md/publish/event/230912_chuseok/pc-img-02.png" alt="" />
            </div>
            <div class="ev-contents">
              <div class="cont-01">
                <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/230912_chuseok/pc-02-re.jpg" alt="혜택.01 섬세한 감 잡으세요" />
                <div class="event-wrap">

                  <div class="before">
                    <button id="drgBtn" class="btn" :class="{'on' : isHiddenBtn}">
                      <img class="img gam-line" src="https://cdn-img.thehandsome.com/md/publish/event/230912_chuseok/gam-line.png" alt="" />
                      <img class="img gam-full" src="https://cdn-img.thehandsome.com/md/publish/event/230912_chuseok/gam-full.png" alt="" />
                      <img class="img gam-leaf" src="https://cdn-img.thehandsome.com/md/publish/event/230912_chuseok/gam-leaf.png" alt="" />
                    </button>
                    <img class="img arrow" src="https://cdn-img.thehandsome.com/md/publish/event/230912_chuseok/pc-arrow.png" alt="" />
                    <img class="img info" src="https://cdn-img.thehandsome.com/md/publish/event/230912_chuseok/pc-text-info-01.jpg" alt="감을 아래로 당겨서 잡으세요." />
                  </div>

                  <div class="after" :class="{'on' : isHiddenBtn}">
                    <img class="img coupon-01" src="https://cdn-img.thehandsome.com/md/publish/event/230912_chuseok/pc-coupon-10.jpg" alt="10% 섬세한 감" />

                    <div class="btn-wrap" :class="{'on' : isHiddenBtn}">
                      <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/230912_chuseok/pc-02-01.jpg" alt="쿠폰이 발급되었습니다." />
                      <a href="https://www.thehandsome.com/ko/ME/couponList" class="link">쿠폰함을 확인해보세요</a>
                    </div>
                  </div>

                </div>
              </div>
              <div class="cont-02">
                <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/230912_chuseok/pc-03.jpg" alt="혜택.02 200만원 이상 구매 시 MILEAGE 50,000M 실결제 기준, ID당 1회" />
              </div>
            </div>
          </div>

          <style type="text/css">
            .pc-230912chuseok {display:block;width:100%;margin:0 auto;}
            .pc-230912chuseok .img{display: block;width:100%; margin:0 auto;}
            .pc-230912chuseok .main{position:relative;}
            .pc-230912chuseok .main .img-txt-wrap-01{display:none;position:absolute;top:0;left:3.125%;width:24.58333%;height:100%;overflow:hidden;}
            .pc-230912chuseok .main .img-txt-wrap-02{display:none;position:absolute;top:0;left:27.76%;width:24.58333%;height:100%;overflow:hidden;}
            .pc-230912chuseok .main .img-txt-wrap-03{display:none;position:absolute;top:0;left:52.395833%;width:24.58333%;height:100%;overflow:hidden;}
            .pc-230912chuseok .main .img-txt-wrap-01.load, .pc-230912chuseok .main .img-txt-wrap-02.load, .pc-230912chuseok .main .img-txt-wrap-03.load{display:block;}
            .pc-230912chuseok .main .img-txt{position:absolute;z-index:1;}
            .pc-230912chuseok .main .txt-01{top:35.4545%;left:8.2627%;width:67.37288%;height:22.077922%;transform:translateX(-115%);animation:movImg01 2s forwards ease-out;}
            .pc-230912chuseok .main .txt-02{top:35.4545%;left:8.47457627%;width:34.322%;height:22.72727%;transform:translateX(-130%);animation:movImg02 1.9s forwards 0.3s ease-out;}
            .pc-230912chuseok .main .txt-03{top:33.3766%;left:44.49%;width:2.54237288%;height:2.857%;transform:translateY(-20px);opacity:0;animation:movImg03 1.9s forwards 1s ease-out;}
            .pc-230912chuseok .main .txt-04{top:43.1%;left:59.11%;width:12.07627%;height:7.4%;transform:scale(0) rotate(0);opacity:0;animation:opacityImg 1.9s forwards 1.5s ease-out, rotateImg01 12s infinite linear;}
            .pc-230912chuseok .main .txt-05{top:35.4545%;left:8.68644%;width:63.3474576%;height:21.81818%;transform:translateX(-115%);animation:movImg01 2s forwards 0.8s ease-out;}
            .pc-230912chuseok .main .img-01{position:absolute;top:66.4935%;left:9.322%;width:42.37288%;height:25.974%;transform-origin:50% 51.25628%;animation:rotateImg01 7s infinite linear;}
            .pc-230912chuseok .main .img-02{position:absolute;top:66.4935%;left:8.68644%;width:42.79661%;height:26.233766%;transform-origin:50% 50%;transform:rotate(300deg);opacity:0;animation:rotateImg02 1s forwards ease-out;}
            .pc-230912chuseok .main .img-03{position:absolute;top:66.4935%;left:9.322%;width:42.37288%;height:25.974%;transform-origin:50% 51.25628%;animation:rotateImg01 8s infinite 0.5s linear;}
            .pc-230912chuseok .main .img-04{position:absolute;top:66.4935%;right:10.343%;width:10.49896%;height:26.233766%;transform-origin:50% 50%;transform:rotate(300deg);opacity:0;animation:rotateImg02 1.2s forwards 0.3s ease-out;}
            .pc-230912chuseok .ev-contents .cont-01{position:relative;padding:0;margin:0;}
            .pc-230912chuseok .ev-contents .event-wrap{position:absolute;top:39.666%;left:18.8%;width:62.395833%;height:48.78%;;z-index:1;}
            .pc-230912chuseok .ev-contents .before{position:absolute;top:9.21%;left:0;width:100%;height:90.78947368421%;z-index:2;}
            .pc-230912chuseok .ev-contents .before .btn{position:absolute;top:0;left:50% !important;transform:translateX(-50%);z-index:3;width:16.777963%;height:59.71%;cursor:grab;}
            .pc-230912chuseok .ev-contents .before .btn:active{cursor:grabbing;}
            .pc-230912chuseok .ev-contents .before .btn.on{top:70px !important;pointer-events:none;}
            .pc-230912chuseok .ev-contents .before .btn .img{position:absolute;top:0;width:100%;height:100%;}
            .pc-230912chuseok .ev-contents .before .btn .img.gam-leaf{z-index:4;}
            .pc-230912chuseok .ev-contents .before .btn .img.gam-line{z-index:3;}
            .pc-230912chuseok .ev-contents .before .btn .img.gam-full{z-index:2;opacity:0;transition:opacity 0.3s ease-in-out}
            .pc-230912chuseok .ev-contents .before .btn.active .gam-full{opacity:1;}
            .pc-230912chuseok .ev-contents .before .arrow{position:absolute;bottom:24.9275%;left:48.414%;width:3.42237%;height:6.3768%;z-index:2;animation:movArrow 1s infinite alternate ease-in-out;}
            .pc-230912chuseok .ev-contents .before .info{width:100%;height:100%;}
            .pc-230912chuseok .ev-contents .after{position:absolute;top:0;left:0%;width:100%;height:100%;opacity:0;z-index:1;transition: all 0.1s ease-out;}
            .pc-230912chuseok .ev-contents .after.on{opacity:1;z-index:3;}
            .pc-230912chuseok .ev-contents .after .coupon-01{position:absolute;top:0;left:27.5459%;width:45.075%;height:63.2%;z-index:1;transform-origin:50% 50%;transform:scale(0);opacity:0;transition: all 0.3s ease-out;}
            /* .pc-230912chuseok .ev-contents .after .coupon-02{position:absolute;top:0;right:3.338898%;width:45.075%;height:63.2%;z-index:1;transform-origin:50% 50%;transform:scale(0);opacity:0;transition: all 0.3s ease-out;} */
            .pc-230912chuseok .ev-contents .after.on .coupon-01{transform:scale(1);opacity:1;}
            /* .pc-230912chuseok .ev-contents .after.on .coupon-02{transform:scale(1);opacity:1;} */
            .pc-230912chuseok .btn-wrap{display:block;width:100%;height:0;margin:0 auto;position:relative;transition:all 1s ease-out;overflow:hidden;}
            .pc-230912chuseok .btn-wrap.on{height:auto;}
            .pc-230912chuseok .btn-wrap.on .link{display:inline-block;position:absolute;bottom:0;left:39.398998%;width:21.535893%;height:12.3684%;z-index:1;margin:0;box-sizing:border-box;text-indent:-9999px;color:transparent !important;}
            @keyframes movImg01{from{transform:translateX(-115%)}to{transform:translateX(0)}}
            @keyframes movImg02{from{transform:translateX(-130%)}to{transform:translateX(0)}}
            @keyframes movImg03{from{transform:translateY(-20px);opacity:0;}to{transform:translateY(0);opacity:1;}}
            @keyframes movArrow{from{transform:translateY(0);}to{transform:translateY(10px);}}
            @keyframes opacityImg{from{opacity:0;}to{opacity:1;}}
            @keyframes couponImg{from{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}
            @keyframes scaleImg{from{transform:scale(0)}to{transform:scale(1)}}
            @keyframes rotateImg01{from{transform:rotate(0)}to{transform:rotate(360deg)}}
            @keyframes rotateImg02{from{transform:rotate(300deg);opacity:0;}to{transform:rotate(360deg);opacity:1;}}
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
    // S : 한가위이벤트
    isLoaded: false,
    isHiddenBtn: false,
    isDragging: false,
    hasReachedMax: false, // Y 최대 좌표에 도달했는지 여부
    startY: null,
    originalY: null,
    maxAllowedY: 70, // 이동 가능한 최대 Y 좌표
    // E : 한가위이벤트

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
        }
      ]
    }       
  }),
  mounted() {
    // S : 섬세한가위
    this.$nextTick(() => {
      this.isLoaded = true
    })

    const draggable = document.getElementById("drgBtn")
    const drgImg = document.querySelector(".before")

    draggable.addEventListener("mousedown", (e) => {
      if (e.button !== 0) return // 좌클릭 (마우스 왼쪽 버튼)만 처리
        e.preventDefault() // 우클릭 이벤트의 기본 동작 막기
        draggable.style.transition = ''
        draggable.classList.add('active')
        this.isDragging = true
        this.startY = e.clientY
        this.originalY = parseInt(getComputedStyle(draggable).top) // 드래그 시작 시에만 설정
    })

    document.addEventListener("mousemove", (e) => {
      if (!this.isDragging) return
      e.preventDefault() // 다른 마우스 이벤트의 기본 동작 막기
      const deltaY = e.clientY - this.startY
      let newY = this.originalY + deltaY

      // 아래로만 이동할 수 있도록 설정
      if (newY > this.maxAllowedY) {
          newY = this.maxAllowedY
          if (!this.hasReachedMax) {
            // 쿠폰 발급
            console.log("쿠폰이 발급되었습니다.") // 이동 가능한 최대 Y 좌표에 도달한 경우 로그 출력
            this.hasReachedMax = true // 한 번만 로그를 찍도록 설정
            this.isHiddenBtn = true // 버튼영역 활성화

            drgImg.remove() // 드래그 버튼 삭제
          }
      }

      // 위로 이동을 막습니다.
      if (newY < this.originalY) {
          newY = this.originalY
      }

      draggable.style.top = newY + "px"
    })

    document.addEventListener("mouseup", (e) => {
      if (this.isDragging) {
        this.isDragging = false

        draggable.style.transition = "all 0.5s ease-out"

        // 마지막 지점까지 내려가지 않으면 초기화
        if (draggable.style.top !== "70px") {
          draggable.style.top = this.originalY + "px"
          draggable.classList.remove('active')
        }
      }
    })

    // E : 섬세한가위
  },
  methods: {
  }
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/event.scss'; 
</style>
