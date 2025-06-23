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
        <!-- [퍼블작업]23.04.20 이벤트 작업 영역 -->
        <div class="html-area" style="text-align:center;">
          <div class="pc-event2023-8thanniv">
            <!-- 상단 동영상 영역 -->
            <div class="e-main">
              <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/230918_8thmain_event/main/pc-main-bg.jpg" alt="" />
              <div class="mov-wrap">
                <video id="myVideo" class="mov" autoplay="autoplay" muted preload="auto" controls="controls" loop playsinline="playsinline" controlsList="nodownload">
                  <source src="https://cdn-img.thehandsome.com/md/publish/event/230918_8thmain_event/main/pc-video.mp4" type="video/mp4">
                </video>
              </div>
              <img class="img frame" src="https://cdn-img.thehandsome.com/md/publish/event/230918_8thmain_event/main/pc-main-frame.png" alt="" />
              <img class="img numbA" src="https://cdn-img.thehandsome.com/md/publish/event/230918_8thmain_event/main/pc-main-num.png" alt="" />
              <img class="img numbB" src="https://cdn-img.thehandsome.com/md/publish/event/230918_8thmain_event/main/pc-main-num.png" alt="" />
              <img class="img txt" src="https://cdn-img.thehandsome.com/md/publish/event/230918_8thmain_event/main/pc-main-txt.png" alt="" />
            </div>
            <!-- // 상단 동영상 영역 -->
            <div class="tab_menu">
              <!-- 탭 버튼 영역 -->
              <div class="tab_menu_cover">
                <ul class="list">
                  <li class="is_on">
                    <a href="#tab1" class="btn">
                      <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab-img01.png" alt="8주년 GIFT" />
                      <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab-img01-on.png" class="on" alt="8주년 GIFT" />
                    </a>
                  </li>
                  <li>
                    <a href="#tab2" class="btn">
                      <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab-img02.png" alt="룰렛, 페이백" />
                      <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab-img02-on.png" class="on" alt="룰렛, 페이백" />
                    </a>
                  </li>
                </ul>
              </div>
              <!-- // 탭 버튼 영역 -->
              
              <div class="cont_area">
                <!-- 탭1 영역 -->
                <div id="tab1" class="cont">
                  <!-- 8주년 티켓 영역 -->
                  <!-- <button @click="scrollTicket">상단 버튼 이동</button> -->
                  <div class="ticket-div-cover" ref="ticketCover">
                    <div class="ticket-img-float">
                      <div class="ribbon-chek ani" v-if="!showRibbon">
                        <button class="show-ribbon" @click="toggleRibbon">티켓확인</button>
                        <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img01-ticket-01.png" alt="" />
                      </div>
                      <div class="ribbon-chek" v-if="showRibbon">
                        <div class="popup-btn">
                          <button @click="openDialogPopup(0)" class="cmp-font button">
                            <span class="tit">받은 티켓</span>
                            <span class="num">15</span>
                            <span class="count">장</span>
                            <i class="cmp-icon cmp-icon-16 i-next"></i>
                          </button>
                          <button @click="openDialogPopup(1)" class="cmp-font button">
                            <span class="tit">사용 티켓</span>
                            <span class="num">15</span>
                            <span class="count">장</span>
                            <i class="cmp-icon cmp-icon-16 i-next"></i>
                          </button>
                          <div>
                            <span class="tit">사용 가능 티켓</span>
                            <span class="num">000</span>
                            <span class="count">장</span>
                          </div>
                        </div>
                        <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img01-ticket-02.png" alt="" />
                      </div>
                    </div>
                    <div class="ribbon-tooltop" @click="toggleRibbontoolTip">
                      <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img01-btmbtn.png" alt="" />
                      <div v-if="showRibbontoolTip">
                        <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/PC_ticket_guide.jpg" alt="" />
                      </div>
                    </div>
                    <img class="ticket-bg" src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img01-bg.png" alt="" />
                  </div>
                  <!-- //8주년 티켓 영역 -->

                  <!-- GIFT FOR 섬세한 라이프 영역 -->
                  <div class="ribbon-tabs">
                    <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img02.png" alt="" />
                    <!-- 상단 스와이프 영역 -->
                    <Swiper
                      :auto-update="false"
                      :options="{
                        watchOverflow: true,
                        slidesPerView: 'auto',
                        spaceBetween: 20,
                        centeredSlides: true,
                        roundLengths: true,
                        loop: true,
                        loopAdditionalSlides: 5,
                        on: {
                          realIndexChange: swiperChange,
                          init: swiperInit
                        },
                        navigation: {
                          nextEl: '.swiper-button-next',
                          prevEl: '.swiper-button-prev',
                        },
                      }"
                      class="ribbon-tabs-swiper"
                    >
                      <SwiperSlide v-for="item, idx in list" :key="idx" class="ribbon-tabs-slide">
                        <div class="img-cover">
                          <!-- 교환완료 -->
                          <div class="flag-cover" v-if="idx === 1">
                            <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img02-float01.png" alt="" />
                          </div>
                          <!-- 소진완료 -->
                          <div class="flag-cover dimmed" v-if="idx === 2">
                            <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img02-float02.png" alt="" />
                          </div>
                          <img :src="item.image_url" alt="" />
                        </div>
                      </SwiperSlide>
                      <button v-if="list.length > 1" slot="button-prev" class="swiper-button-prev"></button>
                      <button v-if="list.length > 1" slot="button-next" class="swiper-button-next"></button>
                    </Swiper>
                    <!-- //상단 스와이프 영역 -->

                    <div class="info-Box">
                      <div v-for="item, idx in list" :key="idx" class="ribbon-tabs-content" :class="{show:index===idx}">
                        <img :src="item.content.contimg_url" alt="" />
                        <div class="txt-box">
                          <img :src="item.content.conttxt_url" alt="" />
                          <!-- 교환 하기 버튼 -->
                          <button v-if="item.content.btnvalue === 'exchange'">
                            <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img02-contbtn01.png" alt="교환 하기" />
                          </button>
                          <!-- 교환 완료 버튼 -->
                          <button v-if="item.content.btnvalue === 'exchangecompleted'">
                            <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img02-contbtn02.png" alt="교환 완료" />
                          </button>
                          <!-- 소진 완료 버튼 -->
                          <button v-if="item.content.btnvalue === 'exhausted'">
                            <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img02-contbtn03.png" alt="소진 완료" />
                          </button>
                        </div>
                      </div>
                      <!-- 초기 랜딩 이슈로 임의 셋팅 -->
                      <div class="ribbon-tabs-content first-item" v-if="index > 7">
                        <img :src="list[0].content.contimg_url" alt="" />
                        <div class="txt-box">
                          <img :src="list[0].content.conttxt_url" alt="" />
                          <!-- 교환 하기 버튼 -->
                          <button v-if="list[0].content.btnvalue === 'exchange'">
                            <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img02-contbtn01.png" alt="교환 하기" />
                          </button>
                          <!-- 교환 완료 버튼 -->
                          <button v-if="list[0].content.btnvalue === 'exchangecompleted'">
                            <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img02-contbtn02.png" alt="교환 완료" />
                          </button>
                          <!-- 소진 완료 버튼 -->
                          <button v-if="list[0].content.btnvalue === 'exhausted'">
                            <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img02-contbtn03.png" alt="소진 완료" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <!-- 소진 시 info-Box와 함께 사라지게 부탁드립니다. -->
                    <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/content/pc_reuse.jpg" alt="" />
                  </div>
                  <!-- //GIFT FOR 섬세한 라이프 영역 -->
                  <!-- GIFT FOR 섬세한 라이프 영역 - 소진완료 -->
                  <div class="ribbon-tabs item-exhausted">
                    <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img02.png" alt="" />
                    <div class="dimm-div">
                      <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/pc-gift-dimm.png" alt="준비된 기프트 수량이 모두 소진되었습니다. / 보내주신 성원에 감사드리며  티켓은 아래 2가지 바우처로 교환하실 수 있습니다." />
                    </div>
                    <!-- 상단 스와이프 영역 -->
                    <Swiper
                      :auto-update="false"
                      :options="{
                        watchOverflow: true,
                        slidesPerView: 'auto',
                        spaceBetween: 20,
                        centeredSlides: true,
                        roundLengths: true,
                        loop: true,
                        loopAdditionalSlides: 5,
                        on: {
                          realIndexChange: swiperChange,
                          init: swiperInit
                        },
                        navigation: {
                          nextEl: '.swiper-button-next',
                          prevEl: '.swiper-button-prev',
                        },
                      }"
                      class="ribbon-tabs-swiper"
                    >
                      <SwiperSlide v-for="item, idx in list" :key="idx" class="ribbon-tabs-slide">
                        <div class="img-cover">
                          <!-- 교환완료 -->
                          <div class="flag-cover" v-if="idx === 1">
                            <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img02-float01.png" alt="" />
                          </div>
                          <!-- 소진완료 -->
                          <div class="flag-cover dimmed" v-if="idx === 2">
                            <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img02-float02.png" alt="" />
                          </div>
                          <img :src="item.image_url" alt="" />
                        </div>
                      </SwiperSlide>
                      <button v-if="list.length > 1" slot="button-prev" class="swiper-button-prev"></button>
                      <button v-if="list.length > 1" slot="button-next" class="swiper-button-next"></button>
                    </Swiper>
                    <!-- //상단 스와이프 영역 -->
                  </div>
                  <!-- 소진완료 수정 -->
                  <div class="gift-soldout-cpn-cover">
                    <div>
                      <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/pc-gift-cpn-01.jpg" alt="티켓 8장_[더한섬닷컴]_VOUCHER 50,000원" />
                      <!-- 교환 하기 버튼 -->
                      <button class="cpn01">
                        <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img02-contbtn01.png" alt="교환 하기" />
                      </button>
                      <!-- 교환 완료 버튼 -->
                      <!-- <button class="cpn01">
                        <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img02-contbtn02.png" alt="교환 완료" />
                      </button> -->
                      <!-- 소진 완료 버튼 -->
                      <!-- <button class="cpn01">
                        <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img02-contbtn03.png" alt="소진 완료" />
                      </button> -->
                    </div>
                    <div>
                      <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/pc-gift-cpn-02.jpg" alt="티켓 20장_[더한섬닷컴]_VOUCHER 150,000원" />
                      <!-- 교환 하기 버튼 -->
                      <!-- <button class="cpn01">
                        <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img02-contbtn01.png" alt="교환 하기" />
                      </button> -->
                      <!-- 교환 완료 버튼 -->
                      <button class="cpn01">
                        <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img02-contbtn02.png" alt="교환 완료" />
                      </button>
                      <!-- 소진 완료 버튼 -->
                      <!-- <button class="cpn01">
                        <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img02-contbtn03.png" alt="소진 완료" />
                      </button> -->
                    </div>
                  </div>
                  <!-- // 소진완료 수정 -->
                  <!-- //GIFT FOR 섬세한 라이프 영역 - 소진완료 -->
                  <!-- 보너스 티켓 영역 -->
                  <div class="bonus-ticket">
                    <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img03.png" alt="보너스 티켓" />
                    <div class="bonus-event-cover">
                      <div>
                        <a href="https://www.thehandsome.com/ko/event/10358">
                          <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img03-event01.png" alt="웰컴! 신규가입" />
                        </a>
                        <!-- 티켓 받기 -->
                        <button>
                          <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img03-event-btnon.png" alt="티켓 받기" />
                        </button>
                        <!-- 티켓 받기 완료 -->
                        <!-- <button>
                          <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img03-event-btnoff.png" alt="티켓 받기 완료" />
                        </button> -->
                      </div>
                      <div>
                        <a href="https://www.thehandsome.com/ko/MK/event/10402">
                          <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img03-event02.png" alt="수신자 동의 전부" />
                        </a>
                        <!-- 티켓 받기 -->
                        <button>
                          <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img03-event-btnon.png" alt="티켓 받기" />
                        </button>
                        <!-- 티켓 받기 완료 -->
                        <!-- <button>
                          <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img03-event-btnoff.png" alt="티켓 받기 완료" />
                        </button> -->
                      </div>
                      <div>
                        <button  @click="openDialogPopup(2)">
                          <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img03-event03.png" alt="THE PLUS 맴버 모두" />
                        </button>
                        <!-- 티켓 받기 -->
                        <!-- <button>
                          <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img03-event-btnon.png" alt="티켓 받기" />
                        </button> -->
                        <!-- 티켓 받기 완료 -->
                        <button>
                          <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img03-event-btnoff.png" alt="티켓 받기 완료" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- // 보너스 티켓 영역 -->
                </div>
                <!-- //탭1 영역 -->
                <!-- 탭2 영역 -->
                <div id="tab2" class="cont">
                  <!-- 룰렛영역 -->
                  <div class="roulette-area" style="background-image : url(https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab02-img01-bg.png);background-size: cover;">
                    <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab02-img01-title.png" alt="8주년 스페셜 룰렛" />
                    <!-- 룰렛판 -->
                    <div class="rouletter">
                      <div class="rouletter-bg">
                          <div class="rouletter-wacu" style="background-image : url(https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/rouletter-pc-bg-fix.png)">
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
                            </div>
                          </div>
                      </div>
                      <div class="rouletter-arrow">
                        <v-img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/rouletter-pin-pc.png" alt="" :aspect-ratio="92 / 136"></v-img>
                      </div>
                      <button class="rouletter-btn" @click="rouletteStart">
                        <v-img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/rouletter-start-pc.png" alt="" aspect-ratio="1"></v-img>
                        <!-- <v-img src="/images/event/roulette_start.png" alt="" aspect-ratio="1" class="start"></v-img> -->
                        <!-- <v-img src="/images/event/roulette_start.png" alt="" aspect-ratio="1" class="end" style="opacity:0.5"></v-img> -->
                      </button>
                    </div>
                    <!-- //룰렛판 -->
                  </div>
                  <!-- //룰렛영역 -->
                  <!-- 최대 8만원 페이백 -->
                  <div class="cpn-ani-cover">
                    <div class="cpn-ani">
                      <img class="ani01" src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab02-img02-cpnimg.png" alt="[2만원] 8주년 페이백 상품 쿠폰" />
                      <img class="ani02" src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab02-img02-cpnimg.png" alt="[2만원] 8주년 페이백 상품 쿠폰" />
                      <img class="ani03" src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab02-img02-cpnimg.png" alt="[2만원] 8주년 페이백 상품 쿠폰" />
                      <img class="ani04" src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab02-img02-cpnimg.png" alt="[2만원] 8주년 페이백 상품 쿠폰" />
                      <img class="ani05" src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab02-img02-label.png" alt="MAX 4장" />
                    </div>
                    <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab02-img02-bg.png" alt="최대 8만원 페이백" />
                  </div>
                  <!-- //최대 8만원 페이백 -->
                  <!-- 주간별 결제 혜택 1주차 -->
                  <div class="week-pay-cover">
                    <!-- 소진 전 -->
                    <a href="https://www.thehandsome.com/ko/MK/event/14397">
                      <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0920-img/pc-week-btn1.jpg" alt="혜택 자세히 보기" />
                    </a>
                    <!-- // 소진 전 -->
                    <!-- 소진 후 -->
                    <span>
                      <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0920-img/pc-week-btn2.jpg" alt="소진 완료" />
                    </span>
                    <!-- // 소진 후 -->
                    <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0920-img/pc-week-01.jpg" alt="주간별 결제 혜택 - 주간별 달라지는 결제 혜택을 누려보세요 / 1주차 10.16-소진 시 종료 / 카드사 즉시 할인 혜택 40만원 이상 구매 시 1만원 할인 (ID당 1회)" />
                  </div>
                  <!-- //주간별 결제 혜택 1주차 -->
                  <!-- 주간별 결제 혜택 2주차 -->
                  <div class="week-pay-cover">
                    <!-- 소진 전 -->
                    <a href="https://www.thehandsome.com/ko/MK/event/14388">
                      <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0920-img/pc-week-btn1.jpg" alt="혜택 자세히 보기" />
                    </a>
                    <!-- // 소진 전 -->
                    <!-- 소진 후 -->
                    <span>
                      <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0920-img/pc-week-btn2.jpg" alt="소진 완료" />
                    </span>
                    <!-- // 소진 후 -->
                    <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0920-img/pc-week-02.jpg" alt="주간별 결제 혜택 - 주간별 달라지는 결제 혜택을 누려보세요 / 2주차 10.23-소진 시 종료 / 카드사 즉시 할인 혜택 40만원 이상 구매 시 1만원 할인 (ID당 1회)" />
                  </div>
                  <!-- //주간별 결제 혜택 2주차 -->
                </div>
                <!-- //탭2 영역 -->
              </div>
              <!-- 추가 -->
              <div class="theMagazine">
                <a href="https://www.thehandsome.com/ko/DP/theMagazineDetail/10011790">보러가기</a>
                <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0920-img/btm-img.jpg" alt="THE 매거진 더한섬닷컴을 만드는 8명의 사람들 " />
              </div>
            </div>
          </div>
          <!-- 받은 티켓 팝업 -->
          <v-dialog v-model="DialogPopupModel[0].open">
            <DialogBasic class="popup-ticket" :width="540" @hide="closeDialogPopup(0)">
              <template #body>
                <!-- 상단 내용 -->
                <div class="popup-top">
                  <div>
                    <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/popup-icon.png" alt="" />
                    <p class="cmp-font fnt-22 pl-15">받은 티켓</p>
                  </div>
                  <p class="cmp-font fnt-22 count">
                    <b>9,999</b> 장
                  </p>
                </div>
                <!-- //상단 내용 -->
                <ul class="event-list">
                  <li>
                    <p class="cmp-font fnt-18">티저 이벤트 참여</p>
                    <p class="cmp-font fnt-18"><span><b>1</b>장</span></p>
                  </li>
                  <li>
                    <p class="cmp-font fnt-18">신규 가입</p>
                    <p class="cmp-font fnt-18"><span><b>1</b>장</span></p>
                  </li>
                  <li>
                    <p class="cmp-font fnt-18">앱 수신동의</p>
                    <p class="cmp-font fnt-18"><span><b>1</b>장</span></p>
                  </li>
                  <li>
                    <p class="cmp-font fnt-18">THE PLUS⁺ 가입</p>
                    <p class="cmp-font fnt-18"><b>3</b>장</p>
                  </li>
                </ul>
                <ul class="event-list num">
                  <li>
                    <p class="cmp-font fnt-18">231001-2555551</p>
                    <p class="cmp-font fnt-18"><span class="pay">00,000,000원</span><span><b>9999</b>장</span></p>
                  </li>
                  <li>
                    <p class="cmp-font fnt-18">231001-2555552</p>
                    <p class="cmp-font fnt-18"><span class="pay">00,000,000원</span><span><b>4</b>장</span></p>
                  </li>
                  <li>
                    <p class="cmp-font fnt-18">231001-2555553</p>
                    <p class="cmp-font fnt-18"><span class="pay">00,000,000원</span><span><b>1</b>장</span></p>
                  </li>
                  <li>
                    <p class="cmp-font fnt-18">231001-2555554</p>
                    <p class="cmp-font fnt-18"><span class="pay">00,000,000원</span><span><b>1</b>장</span></p>
                  </li>
                  <li>
                    <p class="cmp-font fnt-18">231001-2555555</p>
                    <p class="cmp-font fnt-18"><span class="pay">00,000,000원</span><span><b>1</b>장</span></p>
                  </li>
                  <li>
                    <p class="cmp-font fnt-18">231001-2555556</p>
                    <p class="cmp-font fnt-18"><span class="pay">00,000,000원</span><span><b>1</b>장</span></p>
                  </li>
                  <li>
                    <p class="cmp-font fnt-18">231001-2555557</p>
                    <p class="cmp-font fnt-18"><span class="pay">00,000,000원</span><span><b>1</b>장</span></p>
                  </li>
                  <li>
                    <p class="cmp-font fnt-18">231001-2555558</p>
                    <p class="cmp-font fnt-18"><span class="pay">00,000,000원</span><span><b>1</b>장</span></p>
                  </li>
                  <li>
                    <p class="cmp-font fnt-18">231001-2555559</p>
                    <p class="cmp-font fnt-18"><span class="pay">00,000,000원</span><span><b>1</b>장</span></p>
                  </li>
                  <li>
                    <p class="cmp-font fnt-18">231001-2555560</p>
                    <p class="cmp-font fnt-18"><span class="pay">00,000,000원</span><span><b>1</b>장</span></p>
                  </li>
                  <li>
                    <p class="cmp-font fnt-18">231001-2555570</p>
                    <p class="cmp-font fnt-18"><span class="pay">00,000,000원</span><span><b>1</b>장</span></p>
                  </li>
                </ul>
                <div class="noData">
                  <p class="cmp-font fnt-18">아직 받은 티켓이 없습니다.<br />가이드에 따라 티켓을 받아보세요.</p>
                </div>
              </template>
            </DialogBasic>
          </v-dialog>
          <!-- // 받은 티켓 팝업 -->
          <!-- 사용 티켓 팝업 -->
          <v-dialog v-model="DialogPopupModel[1].open">
            <!-- [퍼블수정]23.10.06 쿠폰 이미지 추가 및 툴팁 수정 -->
            <DialogBasic class="btmfull-ver popup-ticket" :width="540" @hide="closeDialogPopup(1)">
              <template #body>
                <!-- 상단 내용 -->
                <div class="popup-top">
                  <div>
                    <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/popup-icon.png" alt="" />
                    <p class="cmp-font fnt-22 pl-15">사용 티켓</p>
                    <CommonTooltipBox>
                      <template #content>
                        <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0920-img/tootip-img-pc.jpg" alt="이미 교환 신청하신 기프트는 변경할 수 없습니다./기프트를 신청한 티켓의 주문 건이 반품된 경우, 티켓이 회수되어 기프트 발송이 취소됩니다./단, 본 이벤트 기간 내 다시 티켓을 발급받으신 경우, 추가로 받은 티켓의 수가 교환된 기프트의 티켓 개수 이상인 경우 기프트는 발송됩니다./반품으로 인한 티켓 회수 후 추가 주문으로 새로운 티켓을 받으신 경우 새로운 기프트를 신청하는 것이 아니라 기존 신청한 기프트 신청이 유지됩니다./반품 발생으로 기프트가 취소될 경우, 가장 마지막에 신청한 기프트 순서대로 취소됩니다." />
                      </template>
                    </CommonTooltipBox>
                  </div>
                  <p class="cmp-font fnt-22 count">
                    <b>9,999</b> 장
                  </p>
                </div>
                <!-- //상단 내용 -->
                <div class="used-list">
                  <div class="item">
                    <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/usedticket-prod.png" />
                  </div>
                  <div class="item">
                    <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/content/pc_6.jpg" />
                  </div>
                  <div class="item">
                    <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/usedticket-empty.png" />
                  </div>
                  <div class="item">
                    <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/usedticket-empty.png" />
                  </div>
                  <div class="item">
                    <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/usedticket-empty.png" />
                  </div>
                  <div class="item">
                    <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/usedticket-empty.png" />
                  </div>
                  <div class="item">
                    <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/usedticket-empty.png" />
                  </div>
                  <div class="item">
                    <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/usedticket-empty.png" />
                  </div>
                </div>
                <div class="used-list">
                  <div class="item">
                    <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0920-img/usedticket-cpn01.jpg" alt="50,000원 VOUCHER" />
                  </div>
                  <div class="item">
                    <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0920-img/usedticket-cpn02.jpg" alt="150,000원 VOUCHER" />
                  </div>
                </div>
              </template>
              <template #footer>
                <!-- [퍼블수정]0926 텍스트 수정 -->
                <v-btn large block color="primary">상세 내역 보기</v-btn> 
              </template>
            </DialogBasic>
            <!-- // [퍼블수정]23.10.06 쿠폰 이미지 추가 및 툴팁 수정 -->
          </v-dialog>
          <!-- // 사용 티켓 팝업 -->
          <!-- QR코드 팝업 -->
          <v-dialog v-model="DialogPopupModel[2].open">
            <DialogBasic class="popup-theplus-OR"  header-title="THE PLUS⁺ 멤버십은<br />모바일 전용 서비스입니다.<br />모바일로 이용해 주세요." @hide="closeDialogPopup(2)">
              <template #body>
                <img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/theplus-QRcode.png" alt="QR 이미지" />
                <div class="popup-btn-box">
                  <v-btn @click="closeDialogPopup(2)" large color="primary">확인</v-btn>
                </div>
              </template>
            </DialogBasic>
          </v-dialog>
          <!-- //QR코드 팝업 -->
          <!-- <script>

            window.initEvent = function() {
            // TODO: 적용 스크립트 입력
              
            };


          </script> -->
          <style type="text/css">
            .e-main{position:relative;overflow:hidden;}
            .e-main .mov-wrap{display:block;width:100%;position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;}
            .e-main .mov{display:block;width:100%;}
            .e-main .frame{position:absolute;top:0;left:0;width:100%;height:100%;z-index:2;}
            .e-main .numbA{position:absolute;top:0;left:0;width:100%;height:100%;z-index:3;object-fit:cover;-webkit-mask-image:url(https://cdn-img.thehandsome.com/md/publish/event/230918_8thmain_event/main/bco-01.png), url(https://cdn-img.thehandsome.com/md/publish/event/230918_8thmain_event/main/bco-02.png);mask-image:url(https://cdn-img.thehandsome.com/md/publish/event/230918_8thmain_event/main/bco-01.png), url(https://cdn-img.thehandsome.com/md/publish/event/230918_8thmain_event/main/bco-02.png);-webkit-mask-size:cover;mask-size:cover;-webkit-mask-repeat:no-repeat, no-repeat;mask-repeat:no-repeat, no-repeat;-webkit-mask-position:0px 0px, 0px 0px;mask-position:0px 0px, 0px 0px;}
            .e-main .numbB{position:absolute;top:0;left:0;width:100%;height:100%;z-index:4;opacity:1;}
            .e-main .txt{position:absolute;top:29.47826%;left:57.76%;width:4.1145833%;height:6.347826%;z-index:3;transform:translateX(0);opacity:1;}
            .e-main.on .numbA{animation:movBaco 5s forwards 2.5s linear;}
            .e-main.on .numbB{animation:movNum 0.3s forwards 2.2s linear;}
            .e-main.on .txt{animation:movTxt 1s forwards 5s linear;}

            @keyframes movBaco{from{-webkit-mask-position:0px 0px, 0px 0px;mask-position:0px 0px, 0px 0px;}to{-webkit-mask-position:-400px 0, 450px 0px;mask-position:-400px 0, 450px 0px;}}
            @keyframes movNum{from{opacity:1;}to{opacity:0;}}
            @keyframes movTxt{from{transform:translateX(0);opacity:1;}to{transform:translateX(50px);opacity:0;}}

            .ui-popup.popup-ticket.btmfull-ver{height: 800px;}
            .ui-popup.popup-ticket.btmfull-ver.hideclose .popup-header button{display:none}
            .ui-popup.popup-ticket .popup-top{border-top: 3px solid #000; border-bottom: 1px solid #000; display: flex; justify-content: space-between; padding: 30px;}
            .ui-popup.popup-ticket .popup-top > div{display: flex;}
            .ui-popup.popup-ticket .popup-top > div p{width:97px;}
            .ui-popup.popup-ticket .popup-top .cmp-tooltip-box{width:30px;height:30px;margin-left:10px;}
            .ui-popup.popup-ticket .popup-top .cmp-tooltip-box > button {width:30px;height:30px;background:url(https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/usedticket-notice-btn.png); background-size: 100%;}
            .ui-popup.popup-ticket .popup-top .cmp-tooltip-box>button span{display:none;}
            .ui-popup.popup-ticket .popup-top .cmp-tooltip-box .tooltip-cnt{width: 492px !important; left: -185px !important; top: 60px !important;}

            .ui-popup.popup-ticket .popup-noitce-btn{margin-left:11px;}

            .ui-popup.popup-ticket .event-list{padding: 30px;}
            .ui-popup.popup-ticket .event-list + .event-list{ border-top:1px solid #000;}
            .ui-popup.popup-ticket .event-list li{display: flex; justify-content: space-between;}
            .ui-popup.popup-ticket .event-list li + li{margin-top:14px;}
            .ui-popup.popup-ticket .event-list li p b{margin-right:5px;}
            .ui-popup.popup-ticket .event-list.num{}
            .ui-popup.popup-ticket .event-list.num li{}
            .ui-popup.popup-ticket .event-list.num li p{width:160px;}
            .ui-popup.popup-ticket .event-list.num li p:last-child{width: calc(100% - 160px); text-align:right;}
            .ui-popup.popup-ticket .event-list.num li p:last-child span:not(.pay){display: inline-block; width:75px; margin-left: 35px;}

            .ui-popup.popup-ticket .noData{height:565px;display: flex; align-items: center; justify-content: center; text-align: center;}

            .ui-popup.popup-ticket .used-list{display: flex; flex-wrap: wrap; padding-top:13px;}
            .ui-popup.popup-ticket .used-list .item{position:relative; margin-top:17px; overflow: hidden; width: calc(25% - 12.8px); background-color:#f4f4f4;}
            .ui-popup.popup-ticket .used-list .item:after{content:""; display: block; padding-top:100%; }
            .ui-popup.popup-ticket .used-list .item:not(:nth-child(4n)){margin-right: 17px;}
            .ui-popup.popup-ticket .used-list .item > img{position: absolute; object-fit: cover; height: 100%; top: 50%; left: 50%; margin: -50% 0 0 -50%;}
            .ui-popup.popup-ticket .used-list + .used-list{padding-top:0;}

            .ui-popup.popup-ticket .popup-notice-cover{background: rgb(0 0 0 / 70%); position: absolute; top: 0; bottom: 0; width: 100%; left: 0; right: 0; z-index: 1; max-height: 800px; overflow: hidden;}
            .ui-popup.popup-ticket .popup-notice-cover button{position: absolute; right: 18px; top: 15px;}
            .ui-popup.popup-ticket .popup-notice-cover button i{filter: invert(1);}
            .ui-popup.popup-ticket .popup-notice-cover > img {display: block; height: 100%; width: auto; margin: 0 auto; }

            .ui-popup.popup-theplus-OR .popup-body-in{text-align: center;}
            
            .pc-event2023-8thanniv .theMagazine{position:relative;}
            .pc-event2023-8thanniv .theMagazine a{position: absolute; left: 35.9%; bottom: 5.5%; width: 28.2%; height: 8.9%; font-size: 0; text-indent: -99999px; color: transparent;}
            .pc-event2023-8thanniv .swiper-wrapper {transition-timing-function: linear;}
            .pc-event2023-8thanniv .visual_cover{position:relative;}
            .pc-event2023-8thanniv .visual_cover .e-d-video{position: absolute; top: 23.55%; left: 50%; transform: translate(-50%,0); width: 62.6%; height: auto;}
            .pc-event2023-8thanniv .visual_cover .e-d-video video{display:block; width:100%; height:100%;}

            .pc-event2023-8thanniv .tab_menu{position:relative;}
            .pc-event2023-8thanniv .tab_menu .tab_menu_cover{position: relative;background:#292929;z-index:3;}
            .pc-event2023-8thanniv .tab_menu .list{overflow:hidden; display: flex; align-items: center; max-width: 1200px; margin: 0 auto;}
            .pc-event2023-8thanniv .tab_menu .list li{position: relative; width: 50%;}
            .pc-event2023-8thanniv .tab_menu .list li a{display: block;}
            .pc-event2023-8thanniv .tab_menu .list li::after{content: ""; display:block; position:absolute; width: 1px; height: 50px; top: 50%; left: 0; background: #292929; transform: translateY(-50%);}
            .pc-event2023-8thanniv .tab_menu .list li:first-child::after{content: ""; display:none;}
            .pc-event2023-8thanniv .tab_menu .list li.is_on{background:#6295fe;}
            .pc-event2023-8thanniv .tab_menu .list li.is_on::after,
            .pc-event2023-8thanniv .tab_menu .list li.is_on + li::after{display:none;}
            .pc-event2023-8thanniv .tab_menu .list li .btn{}
            .pc-event2023-8thanniv .tab_menu .list li .btn img{margin: 0 auto;}
            .pc-event2023-8thanniv .tab_menu .list li .btn img.on{display:none;}
            .pc-event2023-8thanniv .tab_menu .list li.is_on .btn img{display:none;}
            .pc-event2023-8thanniv .tab_menu .list li.is_on .btn img.on{display:block;}

            .pc-event2023-8thanniv .tab_menu .cont_area{}
            .pc-event2023-8thanniv .tab_menu .cont_area .cont{display:none; width:100%; height:auto;}

            .pc-event2023-8thanniv .ticket-div-cover{position: relative; width: 100%; padding-top:64px; margin-top:-64px; z-index:2;}
            .pc-event2023-8thanniv .ticket-div-cover .ticket-bg{display:block;width:100%;margin:0 auto;}
            .pc-event2023-8thanniv .ticket-div-cover .ticket-img-float{position: absolute; left: 13.3%; top: calc(34.2% + 42px); width: 77.2%;}
            .pc-event2023-8thanniv .ticket-div-cover .ribbon-tooltop{position: absolute; bottom: calc(10.5% - 7px); left: 50%; transform: translateX(-50%); width: 39.6%; display: block; z-index: 2;}
            .pc-event2023-8thanniv .ticket-div-cover .ribbon-tooltop > img{max-width:100%;}
            .pc-event2023-8thanniv .ticket-div-cover .ribbon-tooltop > div{position: absolute; top: 40px; left: 50%; transform: translateX(-50%); width: 100%;z-index: 2;}
            .pc-event2023-8thanniv .ticket-div-cover .ribbon-chek{position: relative;}
            .pc-event2023-8thanniv .ticket-div-cover.active .ribbon-chek.ani{transform: perspective(3000px) rotateY(0deg); animation-name: ticket-ani; animation-duration: 5s;}
            .pc-event2023-8thanniv .ticket-div-cover .ribbon-chek>.show-ribbon{position: absolute; right: 3%; bottom: 0; top: 0; width: 16.1%; font-size: 0; text-indent: -99999px; color: transparent;}
            @keyframes ticket-ani{
              0% { transform: perspective(3000px) rotateY(0deg); }
              12.5% { transform: perspective(1500px) rotateY(3deg); }
              25% { transform: perspective(1500px) rotateY(-3deg); }
              37.5% { transform: perspective(1500px) rotateY(3deg); }
              50% { transform: perspective(1500px) rotateY(-3deg); }
              62.5% { transform: perspective(1500px) rotateY(3deg); }
              75% { transform: perspective(1500px) rotateY(-3deg); }
              95% { transform: perspective(3000px) rotateY(0deg); }
              100% { transform: perspective(3000px) rotateY(0deg); }
            }
            .pc-event2023-8thanniv .ticket-div-cover .ribbon-chek .popup-btn{position: absolute; width: 94.5%; bottom: 16.9%; left: 5.5%; display: flex;}
            .pc-event2023-8thanniv .ticket-div-cover .ribbon-chek .popup-btn > button,
            .pc-event2023-8thanniv .ticket-div-cover .ribbon-chek .popup-btn > div{color: #fff; border-bottom: 1px solid #fff;font-size: 2.7rem;padding-bottom: 14px;}
            .pc-event2023-8thanniv .ticket-div-cover .ribbon-chek .popup-btn > button{margin-right:4.8%;}
            .pc-event2023-8thanniv .ticket-div-cover .ribbon-chek .popup-btn > button i{filter: invert(1);}
            .pc-event2023-8thanniv .ticket-div-cover .ribbon-chek .popup-btn .num{color:#6295fe; font-weight:700; padding-left:15px;}
            .pc-event2023-8thanniv .ticket-div-cover .ribbon-chek .popup-btn > button .num{padding-left:35px;}
            @media only screen and (max-width: 1830px) {
              .pc-event2023-8thanniv .ticket-div-cover .ribbon-chek .popup-btn > button,
              .pc-event2023-8thanniv .ticket-div-cover .ribbon-chek .popup-btn > div{font-size: 2rem;padding-bottom: 10px;}
            }

            .pc-event2023-8thanniv .ribbon-tabs{overflow:hidden; position: relative; z-index: 0;}
            .pc-event2023-8thanniv .ribbon-tabs.item-exhausted{position:relative;}
            .pc-event2023-8thanniv .ribbon-tabs.item-exhausted .dimm-div{position: absolute; z-index: 5; background: rgb(0 0 0 / 75%); left: 0; right: 0; bottom: 0; display: flex; align-items: center; height: calc(21.9vw + 40px); max-height:420px; width: auto;}
            .pc-event2023-8thanniv .gift-soldout-cpn-cover{position: relative; width: 58.9%; display: flex; justify-content: space-between; margin: 60px auto 120px;}
            .pc-event2023-8thanniv .gift-soldout-cpn-cover > div{width:47.8%;}
            .pc-event2023-8thanniv .gift-soldout-cpn-cover > div button.cpn01{margin-top:30px;}
            .pc-event2023-8thanniv .ribbon-tabs .info-Box{padding:60px 0 120px;}
            .pc-event2023-8thanniv .ribbon-tabs .info-Box .ribbon-tabs-content{display:none; width: 62.5%; margin: 0 auto; justify-content: space-between;}
            .pc-event2023-8thanniv .ribbon-tabs .info-Box .ribbon-tabs-content.show{display:flex;align-items: flex-start;}
            .pc-event2023-8thanniv .ribbon-tabs .info-Box .ribbon-tabs-content.first-item{display:flex;}
            .pc-event2023-8thanniv .ribbon-tabs .info-Box .ribbon-tabs-content.show ~ .first-item{display:none;}
            .pc-event2023-8thanniv .ribbon-tabs .info-Box .ribbon-tabs-content > img{width: 49.1%; max-width: 589px;}
            .pc-event2023-8thanniv .ribbon-tabs .info-Box .ribbon-tabs-content > .txt-box{width: 45%; max-width: 540px;}
            .pc-event2023-8thanniv .ribbon-tabs .ribbon-tabs-swiper{margin: 0 auto; position:relative; width: 100%; height:calc(21.9vw + 40px);max-height:420px; overflow: visible;}
            @media only screen and (min-width: 1720px) {
              .pc-event2023-8thanniv .ribbon-tabs .ribbon-tabs-swiper:after,
              .pc-event2023-8thanniv .ribbon-tabs .ribbon-tabs-swiper:before{content: ""; display:block; position:absolute; background:#fff; height:100%; width:2.6vw; top:0; z-index:2;}
              .pc-event2023-8thanniv .ribbon-tabs .ribbon-tabs-swiper:after{left:0;}
              .pc-event2023-8thanniv .ribbon-tabs .ribbon-tabs-swiper:before{right:0;}
            }
            .pc-event2023-8thanniv .ribbon-tabs .ribbon-tabs-swiper .swiper-wrapper{align-items: flex-end;}
            .pc-event2023-8thanniv .ribbon-tabs .ribbon-tabs-slide{position:relative; width:calc(21.9vw - 40px); height:calc(21.9vw - 40px); max-width:340px; max-height:340px;}
            .pc-event2023-8thanniv .ribbon-tabs .ribbon-tabs-slide .img-cover{position: absolute; bottom: 0; left: 40px; right: 0; text-align: center; transition:all 0.3s;}
            .pc-event2023-8thanniv .ribbon-tabs .ribbon-tabs-slide .img-cover .flag-cover{position: absolute; width:100%; height:100%; transition:all 0.3s; z-index: 1;}
            .pc-event2023-8thanniv .ribbon-tabs .ribbon-tabs-slide .img-cover .flag-cover img{position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);width:48.1%; height:48.1%;}
            .pc-event2023-8thanniv .ribbon-tabs .ribbon-tabs-slide .img-cover .flag-cover.dimmed{background:rgb(255 255 255 / 50%);}
            .pc-event2023-8thanniv .ribbon-tabs .ribbon-tabs-slide.swiper-slide-active .img-cover{left:-40px; right:-40px; transition: all 0.3s;}
            .pc-event2023-8thanniv .ribbon-tabs .ribbon-tabs-slide.swiper-slide-prev .img-cover{left: 0px; right: 40px;}
            .pc-event2023-8thanniv .ribbon-tabs .ribbon-tabs-slide.swiper-slide-next .img-cover{left: 40px; right: 0;}
            .pc-event2023-8thanniv .ribbon-tabs .ribbon-tabs-slide.swiper-slide-next ~ .ribbon-tabs-slide .img-cover{left: 0; right: 40px; }

            .pc-event2023-8thanniv .ribbon-tabs .ribbon-tabs-swiper .swiper-button-prev{left:18.8%;}
            .pc-event2023-8thanniv .ribbon-tabs .ribbon-tabs-swiper .swiper-button-next{right:18.8%;}
            .pc-event2023-8thanniv .ribbon-tabs .ribbon-tabs-slide img{width:100%; display:block; position:relative;}

            .pc-event2023-8thanniv .bonus-ticket{background:#f9f9f9; padding-bottom:120px;}
            .pc-event2023-8thanniv .bonus-ticket .bonus-event-cover{display:flex; justify-content: space-between; width:62.5%; margin:0 auto;}
            .pc-event2023-8thanniv .bonus-ticket .bonus-event-cover > div{width:30.8%;}
            
            .pc-event2023-8thanniv .roulette-area{padding-top:0;}
            .pc-event2023-8thanniv .roulette-area .rouletter{width: 550px; height: 550px;margin: 60px auto 0;}
            .pc-event2023-8thanniv .roulette-area .rouletter .rouletter-bg{width: 550px; height: 550px;}
            .pc-event2023-8thanniv .roulette-area .rouletter .rouletter-arrow{top: -3px; width: 38px; height: 40px;}
            .pc-event2023-8thanniv .roulette-area .rouletter .rouletter-btn{width: 140px; height: 140px;}

            .pc-event2023-8thanniv .cpn-ani-cover{position:relative}
            .pc-event2023-8thanniv .cpn-ani-cover .cpn-ani{position: absolute; bottom: 20.2%; left: 50%; transform: translateX(-50%); width: 32.9%; height: 36.4%;}
            .pc-event2023-8thanniv .cpn-ani-cover .cpn-ani > img{position:absolute;width:85.4%; transform: translateY(40px); opacity:0;}
            .pc-event2023-8thanniv .cpn-ani-cover .cpn-ani > img.ani01{left: 0; top: 0;animation-delay: 0s; transition: all 0.3s ease-out 0.9s;}
            .pc-event2023-8thanniv .cpn-ani-cover .cpn-ani > img.ani02{left: 3.2%; top: 6.6%;animation-delay: 0.5s; transition: all 0.3s ease-out 0.6s;}
            .pc-event2023-8thanniv .cpn-ani-cover .cpn-ani > img.ani03{left: 6.4%; top: 13.2%;animation-delay: 1s; transition: all 0.3s ease-out 0.3s;}
            .pc-event2023-8thanniv .cpn-ani-cover .cpn-ani > img.ani04{left: 9.6%; top: 19.8%;animation-delay: 1.5s; transition: all 0.3s ease-out 0s;}
            .pc-event2023-8thanniv .cpn-ani-cover .cpn-ani > img.ani05{width:15.8%; height:33.2%; right:0; top:10.3%; transform: translateY(0px) rotateY(180deg); transition: all 0.5s ease-out 1.2s;}

            .pc-event2023-8thanniv .cpn-ani-cover.active .cpn-ani > img{transform: translateY(0px); opacity:1;}
            .pc-event2023-8thanniv .cpn-ani-cover.active .cpn-ani > img.ani05{transform: rotateY(0deg); opacity:1;}

            .pc-event2023-8thanniv .week-pay-cover{position:relative}
            .pc-event2023-8thanniv .week-pay-cover a,
            .pc-event2023-8thanniv .week-pay-cover span{position: absolute; left: 25.9%; bottom: 21.7%; width: 19.3%; height: 9.6%; font-size: 0; text-indent: -99999px; color: transparent;}
            .pc-event2023-8thanniv .week-pay-cover a img,
            .pc-event2023-8thanniv .week-pay-cover span img{position: relative; display: block; width: 100%;}
          </style>
          <!-- html 등록 영역 끝 -->
        </div>
        <!-- //[퍼블작업]23.04.20 이벤트 작업 영역 -->
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
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  layout: 'LayoutBasics',
  components : {
    Swiper,
    SwiperSlide,
    DialogBasic,
  },  
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data: () => ({
    hiddenInput: null,
    setNum: 0,
    rolLength: 4,
    showRibbon:false,
    showRibbontoolTip:false,
    swiper1: null,
    swiper2: null,
    index: 8,
    DialogPopupModel : [{open : false},{open : false},{open : false}],
    //  23.10.12 데이터 수정
    list: [
      {
        image_url: "https://img.thehandsome.com/md/publish/event/230918_8thmain_event/slide/IMG_01.jpg",
        content:{
          contimg_url: "https://img.thehandsome.com/md/publish/event/230918_8thmain_event/content/pc_1.gif",
          conttxt_url: "https://img.thehandsome.com/md/publish/event/230918_8thmain_event/content/conttxt01.png",
          btnvalue: 'exchange'
        },
      },{
        image_url: "https://img.thehandsome.com/md/publish/event/230918_8thmain_event/slide/IMG_02.jpg",
        content:{
          contimg_url: "https://img.thehandsome.com/md/publish/event/230918_8thmain_event/content/pc_2.gif",
          conttxt_url: "https://img.thehandsome.com/md/publish/event/230918_8thmain_event/content/conttxt02.png",
          btnvalue: 'exchangecompleted'
        },
      },{
        image_url: "https://img.thehandsome.com/md/publish/event/230918_8thmain_event/slide/IMG_03.jpg",
        content:{
          contimg_url: "https://img.thehandsome.com/md/publish/event/230918_8thmain_event/content/pc_3.jpg",
          conttxt_url: "https://img.thehandsome.com/md/publish/event/230918_8thmain_event/content/conttxt03.png",
          btnvalue: 'exhausted'
        },
      },{
        image_url: "https://img.thehandsome.com/md/publish/event/230918_8thmain_event/slide/IMG_04.jpg",
        content:{
          contimg_url: "https://img.thehandsome.com/md/publish/event/230918_8thmain_event/content/pc_4.gif",
          conttxt_url: "https://img.thehandsome.com/md/publish/event/230918_8thmain_event/content/conttxt04.png",
          btnvalue: 'exchange'
        },
      },{
        image_url: "https://img.thehandsome.com/md/publish/event/230918_8thmain_event/slide/IMG_05.jpg",
        content:{
          contimg_url: "https://img.thehandsome.com/md/publish/event/230918_8thmain_event/content/pc_5.gif",
          conttxt_url: "https://img.thehandsome.com/md/publish/event/230918_8thmain_event/content/conttxt05.png",
          btnvalue: 'exchangecompleted'
        },
      },{
        image_url: "https://img.thehandsome.com/md/publish/event/230918_8thmain_event/slide/IMG_06.jpg",
        content:{
          contimg_url: "https://img.thehandsome.com/md/publish/event/230918_8thmain_event/content/pc_6.jpg",
          conttxt_url: "https://img.thehandsome.com/md/publish/event/230918_8thmain_event/content/conttxt06.png",
          btnvalue: 'exhausted'
        },
      },{
        image_url: "https://img.thehandsome.com/md/publish/event/230918_8thmain_event/slide/IMG_07.jpg",
        content:{
          contimg_url: "https://img.thehandsome.com/md/publish/event/230918_8thmain_event/content/pc_7.jpg",
          conttxt_url: "https://img.thehandsome.com/md/publish/event/230918_8thmain_event/content/conttxt07.png",
          btnvalue: 'exchange'
        },
      },{
        image_url: "https://img.thehandsome.com/md/publish/event/230918_8thmain_event/slide/IMG_08.jpg",
        content:{
          contimg_url: "https://img.thehandsome.com/md/publish/event/230918_8thmain_event/content/pc_8.jpg",
          conttxt_url: "https://img.thehandsome.com/md/publish/event/230918_8thmain_event/content/conttxt08.png",
          btnvalue: 'exchange'
        },
      }
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
  mounted() {
    this.$nextTick(() => {
      this.swiperInit()
      this.swiperInit2()
    })
    const videoclass = document.getElementById("myVideo");
    videoclass.addEventListener("loadeddata", function() {
      const videodiv = document.querySelector('.e-main');
      videodiv.classList.add("on");
    });

    window.addEventListener('scroll', function() {
      const animationElement = document.querySelector('.ticket-div-cover');
      const cpnAnimationElement = document.querySelector('.cpn-ani-cover');
      const imageHeight = document.querySelector('.ticket-bg').clientHeight;
      const topImageHeight = document.querySelector('.e-main').clientHeight;
      const cpnAniHeight = document.querySelector('.cpn-ani-cover').clientHeight;
      const rouletteHeight = document.querySelector('.roulette-area').clientHeight;
      const threshold = topImageHeight + (imageHeight / 5); 
      const thresholdCpn = topImageHeight + rouletteHeight + (cpnAniHeight / 5); 
      const scrollPosition = window.scrollY;
  
      // 특정 스크롤 위치에 도달하면 클래스 추가
      if (scrollPosition >= threshold) {
        animationElement.classList.add('active');
      } else {
        animationElement.classList.remove('active');
      }

      // 특정 스크롤 위치에 도달하면 클래스 추가
      if (scrollPosition >= thresholdCpn) {
        cpnAnimationElement.classList.add('active');
      } else {
        cpnAnimationElement.classList.remove('active');
      }
    });

    const tabList = document.querySelectorAll('.tab_menu .list li');
    const contents = document.querySelectorAll('.tab_menu .cont_area .cont')
    let activeCont = '#tab1'; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

    document.querySelector(activeCont).style.display = 'block';
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
    // let count = 0
    // const targetContainer = document.querySelector('#pc-event2023-8thanniv-roulette');
    // const rouletteContainer = document.querySelector('.roulette-area');

    // function cpnCheck() {
    //   if (rouletteContainer) {
    //     const rouletteElements = rouletteContainer.querySelectorAll('.rouletter');
      
    //     rouletteElements.forEach(element => {
    //       targetContainer.appendChild(element);
    //     });
    //   } else if (count < 10){
    //     count++;
    //     setTimeout(cpnCheck, 500);
    //   }
    // }
    // if (rouletteContainer) {
    //   const rouletteElements = rouletteContainer.querySelectorAll('.rouletter');
    
    //   rouletteElements.forEach(element => {
    //     targetContainer.appendChild(element);
    //   });
    // } else{
    //   setTimeout(cpnCheck, 2000);
    // }
  },
  methods: {
    scrollTicket() {
      const onDiv = this.$refs.ticketCover
      
      if (onDiv) {
          onDiv.scrollIntoView({ behavior: "smooth" });
      }
    },
    toggleRibbon(){
      if(!this.showRibbon){
        this.showRibbon = true;
      }
    },
    toggleRibbontoolTip(){
      if(!this.showRibbontoolTip){
        this.showRibbontoolTip = true;
      } else{
        this.showRibbontoolTip = false;
      }
    },
    // [퍼블수정]23.10.06 쿠폰 이미지 추가 및 툴팁 수정
    swiperInit(){
      const me = this
      const sw = me.$el.querySelector(".ribbon-tabs-swiper").swiper
      if(sw){
        me.swiper1 = sw
        me.swiper1.update()
      }
    },
    swiperInit2(){
      const me = this
      const sw2 = me.$el.querySelector(".item-exhausted .ribbon-tabs-swiper").swiper
      if(sw2){
        me.swiper2 = sw2
        me.swiper2.update()
      }
    },
    swiperChange(){
      const me = this
      const sw = me.$el.querySelector(".ribbon-tabs-swiper").swiper
      me.swiper1 = sw
      me.index = me.swiper1.realIndex
    },
    openDialogPopup(idx) {
      const me = this
      me.DialogPopupModel[idx].open = true
    },
    closeDialogPopup(idx) {
      const me = this
      me.DialogPopupModel[idx].open = false
    },
    //  룰렛
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
  },
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/event.scss';
</style>
