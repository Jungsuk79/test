<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="event-detail">
        <div class="e-title">
          <h4>더한섬닷컴 5월 설문 이벤트</h4>
          <p>2021.12.07 ~ 2021.12.26</p>
        </div>
        <div class="html-area">
          <!-- 룰렛영역 -->
          <div class="roulette-area" style="background-color:#fff;">
            <div class="area-title">
              <h4><span>5월 한달간</span> 룰렛 이벤트!</h4>
              <p>더한섬닷컴 회원이라면<br>룰렛 돌리고 당첨되는 혜택을 받아보세요.</p>
            </div>
            <!-- 룰렛판 -->
            <div class="rouletter">
              <div class="rouletter-bg">
                  <div class="rouletter-wacu" style="background-image : url(https://cdn-img.thehandsome.com/md/publish/event/240131_roulette/pc-roulette_circle4.png)">
                    <div ref="rouletterInner" class="rouletter-inner">
                      <div class="item">
                        <div class="benefit">
                          <h5>1,000M</h5>
                          <p>마일리지</p>
                        </div>
                      </div>
                      <div class="item">
                        <div class="benefit">
                          <h5>40,000원</h5>
                          <p>쿠폰</p>
                        </div>
                      </div>
                      <div class="item">
                        <div class="benefit">
                          <h5>oera KIT set</h5>
                          <p>사은품</p>
                        </div>
                      </div>
                      <div class="item">
                        <div class="benefit">
                          <h5>50%</h5>
                          <p>쿠폰</p>
                        </div>
                      </div>
                      <!-- <div class="item">
                        <div class="benefit">
                          <h5><strong>꽝!</strong></h5>
                          <p>다음기회에!</p>
                        </div>
                      </div>
                      <div class="item">
                        <div class="benefit">
                          <h5><strong>3</strong>만원</h5>
                          <p>즉시할인</p>
                        </div>
                      </div> -->
                    </div>
                  </div>
              </div>
              <div class="rouletter-arrow">
                <v-img src="https://cdn-img.thehandsome.com/md/publish/event/240131_roulette/pc-roulette_arrow.png" alt="" :aspect-ratio="92 / 136"></v-img>
              </div>
              <button class="rouletter-btn" @click="rouletteStart">
                <v-img src="https://cdn-img.thehandsome.com/md/publish/event/240131_roulette/pc-roulette_start.png" alt="" aspect-ratio="1"></v-img>
                <!-- <v-img src="/images/event/roulette_start.png" alt="" aspect-ratio="1" class="start"></v-img> -->
                <!-- <v-img src="/images/event/roulette_start.png" alt="" aspect-ratio="1" class="end" style="opacity:0.5"></v-img> -->
              </button>
            </div>
            <!-- //룰렛판 -->
          </div>
          <!-- //룰렛영역 -->
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
    hiddenInput: null,
    setNum: 0,
    rolLength: 4,
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
    this.hiddenInput = document.createElement("input"); // 히든인풋을 사용
    this.hiddenInput.className = "hidden-input";

    let x = 0;
		let y = 0;
    let a = 0;
    let temp = 0;
    const ary = this.$refs.rouletterInner.querySelectorAll('.item');

    for(let i=0; i<4; i++) {
      temp = (90 * i )-90;
      a = temp / 180 * Math.PI;

      x = Math.cos(a) * 170;
		  y = Math.sin(a) * 170;
  
      ary[i].style.left = x+'px';
      ary[i].style.top = y+'px';
      ary[i].style.transform = 'rotate('+(temp+90)+'deg)';
    }
  },
  methods: {
    rouletteStart(e) {
      const target = e.target;

      this.rouletteRotate();
      this.rouletteReset(target);
    },
    rouletteRotate() {
      const panel = document.querySelector(".rouletter-wacu");
      const btn = document.querySelector(".rouletter-btn");

      const deg = [];
      for (let i = 1, len = this.rolLength; i <= len; i++) {
        deg.push((360 / len) * i - 90);
      }

      let num = 0;
      document.body.append(this.hiddenInput);
      this.setNum = this.hiddenInput.value = this.rouletteRandom();

      const ani = setInterval(() => {
        num++;
        panel.style.transform = "rotate(" + 360 * num + "deg)";
        btn.disabled = true; // button,input
        btn.style.pointerEvents = "none"; // a 태그
        btn.classList.add("end");

        if (num === 30) {
          clearInterval(ani);
          panel.style.transform = "rotate(-" + deg[this.setNum] + "deg)";
        }
      }, 50);
    },
    rouletteReset(target) {
      setTimeout(() => {
        target.disabled = false;
        target.style.pointerEvents = "auto";
        this.rouletteLayerPopup(this.setNum);
        this.hiddenInput.remove();
      }, 3000);
    },
    rouletteLayerPopup(num) {
      switch (num) {
        case 0:
          alert("당첨!! 한섬마일리지");
          break;
        case 1:
          alert("당첨!! 쿠폰");
          break;
        case 2:
          alert("당첨!! 사은품");
          break;
        case 3:
          alert("당첨!! 쿠폰");
          break;
        // case 5:
        //   alert("당첨!! 3만원");
        //   break;
        // default:
        //   alert("꽝! 다음기회에");
      }
    },
    rouletteRandom() {
      const min = Math.ceil(0);
      const max = Math.floor(this.rolLength - 1);
      return Math.floor(Math.random() * (max - min)) + min;
    },
  }
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/event.scss'; 
</style>
