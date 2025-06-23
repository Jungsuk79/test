<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="event-detail detail-coupon">
        <div class="e-title">
          <h4>더한섬닷컴 5월 설문 이벤트</h4>
          <p>2021.12.07 ~ 2021.12.26</p>
        </div>
        <div class="html-area">
          <div class="pc-event25-familyDay">
            <!-- 0425 수정 -->
            <div class="visual-cover">
              <div class="visual-ani-img" :class="{ on: isLoaded }">
                <img class="flower01" src="https://img.thehandsome.com/md/publish/event/250401_familyDay/pc-visual-ani1.png" alt="" />
                <img class="flower02" src="https://img.thehandsome.com/md/publish/event/250401_familyDay/pc-visual-ani2.png" alt="" />
                <img class="flower03" src="https://img.thehandsome.com/md/publish/event/250401_familyDay/pc-visual-ani3.png" alt="" />
                <img class="flower04" src="https://img.thehandsome.com/md/publish/event/250401_familyDay/pc-visual-ani4.png" alt="" />
                <img class="flower05" src="https://img.thehandsome.com/md/publish/event/250401_familyDay/pc-visual-ani5.png" alt="" />
              </div>
              <img class="top-visual" @load="onImageLoad" src="https://img.thehandsome.com/md/publish/event/250401_familyDay/pc-visual-cover.png" alt="" />
              <Swiper
                :options="{
                  slidesPerView: 1,
                  loop: true,
                  autoplay: {
                    delay: 2000,
                  },
                  speed: 400,
                  allowTouchMove: false,
                }"
                class="visual-swiper"
              >
                <SwiperSlide>
                  <img src="https://img.thehandsome.com/md/publish/event/250401_familyDay/pc-visual-slide01.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://img.thehandsome.com/md/publish/event/250401_familyDay/pc-visual-slide02.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://img.thehandsome.com/md/publish/event/250401_familyDay/pc-visual-slide03.png" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <!-- //0425 수정 -->
            <div class="tab_menu-cover">
              <!-- 탭 버튼 영역 -->
              <div class="list">
                <a href="#tab1" class="btn">전상품 10%</a>
                <a href="#tab2" class="btn">100% 당첨 룰렛</a>
                <a href="#tab3" class="btn">1만원 선물 리워드</a>
                <a href="#tab4" class="btn">카네이션 카드 보내기</a>
              </div>
              <!-- // 탭 버튼 영역 -->
              <img src="https://img.thehandsome.com/md/publish/event/250401_familyDay/pc-tab-img.jpg" alt="" />
            </div>
            <!-- 탭1 영역 -->
            <div id="tab1" class="tab-cont">
              <img src="https://img.thehandsome.com/md/publish/event/250401_familyDay/pc-img01.jpg" alt="BENEFIT 01/ 전 상품 10%/ 소중한 사람을 위한 마음 더한섬닷컴과 함께하세요" />
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
            </div>
            <!-- // 탭1 영역 -->
            <!-- 탭2 영역 -->
            <div id="tab2" class="tab-cont">
              <!-- 룰렛영역 -->
              <div class="roulette-area">
                <img src="https://img.thehandsome.com/md/publish/event/250401_familyDay/pc-img02.jpg" alt="BENEFIT 02/ 100% 당첨 룰렛/ 소중한 마음에 행운까지 더하는 룰렛 추가 혜택을 받아 보세요" />
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
            <!-- // 탭2 영역 -->
              
            <!-- 탭3 영역 -->
            <div id="tab3" class="tab-cont">
              <img src="https://img.thehandsome.com/md/publish/event/250401_familyDay/pc-img03.jpg" alt="BENEFIT 03/ 선물 리워드/ 당신의 따뜻한 마음에 보내는 작은 선물! 선물하신 분께 1만원 바우처를 드려요" />
              <div class="swiper-show-cover" :class="{on : showtab3}">
                <button @click.stop="btnTab3Click" class="show-btn">
                  <img v-if="!showtab3" src="https://img.thehandsome.com/md/publish/event/250401_familyDay/pc-img03-btn1.jpg" alt="선물하기 이용법" />
                  <img v-else src="https://img.thehandsome.com/md/publish/event/250401_familyDay/pc-img03-btn2.jpg" alt="선물하기 이용법" />
                </button>
                <Swiper
                  :options="{
                    slidesPerView: 1,
                    pagination: {
                      el: '.tab03-swiper-pagination',
                      clickable: false,
                      type: 'bullets'
                    },
                  }"
                  class="tab03-swiper"
                >
                  <SwiperSlide class="tab03-group">
                    <img src="https://img.thehandsome.com/md/publish/event/250401_familyDay/pc-img03-slide01.png" alt="step. 1 선물하시는 상품 상세페이지에서 ‘선물하기’ 버튼을 클릭 " />
                  </SwiperSlide>
                  <SwiperSlide class="tab03-group">
                    <img src="https://img.thehandsome.com/md/publish/event/250401_familyDay/pc-img03-slide02.png" alt="step. 2 카드 선택 및 메시지 작성하기 테마별 카드 이미지를 선택하고 메시지를 작성해주세요 " />
                  </SwiperSlide>
                  <SwiperSlide class="tab03-group">
                    <img src="https://img.thehandsome.com/md/publish/event/250401_familyDay/pc-img03-slide03.png" alt="step. 3 연락처 가져오기 또는 직접 입력하여 선물 받으실 분의 연락처를 입력해주세요 " />
                  </SwiperSlide>
                  <SwiperSlide class="tab03-group">
                    <img src="https://img.thehandsome.com/md/publish/event/250401_familyDay/pc-img03-slide04.png" alt="step. 4 주문 후 3일 이내인 경우(주말 포함) 컬러, 사이즈 변경 또는 주문취소 하실 수 있어요 " />
                  </SwiperSlide>
                  <div slot="pagination" class="swiper-pagination tab03-swiper-pagination"></div>
                </Swiper>
              </div>
            </div>
            <!-- 탭3 영역 -->

            <!-- 탭4 영역 -->
            <div id="tab4" class="tab-cont">
              <div class="btn-cover">
                <div ref="flower" :class="{ on: isFlowerVisible }" class="float-flower">
                  <div class="top-img">
                    <img class="ani04 flower01" src="https://img.thehandsome.com/md/publish/event/250401_familyDay/ani/pc-ani-btfly.png" alt="" />
                    <img class="ani01 flower02" src="https://img.thehandsome.com/md/publish/event/250401_familyDay/ani/pc-ani-fl1-1.png" alt="" />
                    <img class="ani02 flower03" src="https://img.thehandsome.com/md/publish/event/250401_familyDay/ani/pc-ani-fl2-2.png" alt="" />
                    <img class="ani02 flower04" src="https://img.thehandsome.com/md/publish/event/250401_familyDay/ani/pc-ani-fl2-3.png" alt="" />
                    <img class="ani00 flower05" src="https://img.thehandsome.com/md/publish/event/250401_familyDay/ani/pc-ani-fl4-1.png" alt="" />
                  </div>
                  <img class="center-img" src="https://img.thehandsome.com/md/publish/event/250401_familyDay/ani/pc-ani-top.png" alt="" />
                  <div class="bottom-img">
                    <img class="ani01 flower01" src="https://img.thehandsome.com/md/publish/event/250401_familyDay/ani/pc-ani-fl1-2.png" alt="" />
                    <img class="ani01 flower02" src="https://img.thehandsome.com/md/publish/event/250401_familyDay/ani/pc-ani-fl1-3.png" alt="" />
                    <img class="ani02 flower03" src="https://img.thehandsome.com/md/publish/event/250401_familyDay/ani/pc-ani-fl2-1.png" alt="" />
                    <img class="ani03 flower04" src="https://img.thehandsome.com/md/publish/event/250401_familyDay/ani/pc-ani-fl3-1.png" alt="" />
                    <img class="ani03 flower05" src="https://img.thehandsome.com/md/publish/event/250401_familyDay/ani/pc-ani-fl3-2.png" alt="" />
                  </div>
                </div>
                <a href="/MK/myEventList" class="btn2">보낸 카드 보러 가기</a>
                <!-- 0425 수정 -->
                <button @click="seeCardPopup = true" class="btn">메시지 카드 보내기</button>
                <img src="https://img.thehandsome.com/md/publish/event/250401_familyDay/pc-img04.jpg" alt="BENEFIT 04/ 카네이션 메시지 카드/ 사랑을 전하는 일에는 조건이 필요 없죠 더한섬닷컴을 찾아 주신 모든 분께 카네이션 메시지 카드 보내기 서비스를 제공합니다" />
              </div>
              <div class="swiper-show-cover" :class="{on : showtab4}">
                <button @click.stop="btnTab4Click" class="show-btn">
                  <img v-if="!showtab4" src="https://img.thehandsome.com/md/publish/event/250401_familyDay/pc-img04-btn1.jpg" alt="HOW TO" />
                  <img v-else src="https://img.thehandsome.com/md/publish/event/250401_familyDay/pc-img04-btn2.jpg" alt="HOW TO" />
                </button>
                <Swiper
                  :options="{
                    slidesPerView: 1,
                    pagination: {
                      el: '.tab04-swiper-pagination',
                      clickable: false,
                      type: 'bullets'
                    },
                  }"
                  class="tab04-swiper"
                >
                  <SwiperSlide class="tab04-group">
                    <img src="https://img.thehandsome.com/md/publish/event/250401_familyDay/pc-img04-slide01.png" alt="step. 1" />
                  </SwiperSlide>
                  <SwiperSlide class="tab04-group">
                    <img src="https://img.thehandsome.com/md/publish/event/250401_familyDay/pc-img04-slide02.png" alt="step. 2" />
                  </SwiperSlide>
                  <SwiperSlide class="tab04-group">
                    <img src="https://img.thehandsome.com/md/publish/event/250401_familyDay/pc-img04-slide03.png" alt="step. 3" />
                  </SwiperSlide>
                  <SwiperSlide class="tab04-group">
                    <img src="https://img.thehandsome.com/md/publish/event/250401_familyDay/pc-img04-slide04.png" alt="step. 4" />
                  </SwiperSlide>
                  <div slot="pagination" class="swiper-pagination tab04-swiper-pagination"></div>
                </Swiper>
              </div>
            </div>
            <!-- 탭4 영역 -->
            
            <!-- 0425 수정 기획전 연결 베너 -->
            <div class="plan-btn-cover">
              <a href="https://www.thehandsome.com/ko/DP/planshopDetail/38095" class="banner-img"></a>
              <img src="https://img.thehandsome.com/md/publish/event/250401_familyDay/pc-img06.jpg" />
            </div>
            <!--// 0425 수정 기획전 연결 베너 -->

            <!-- 0425 수정 기획전 홍보 연결 베너 -->
            <div class="plan-btn-cover">
              <a href="https://www.thehandsome.com/ko/DP/planshopDetail/37721" class="btn01">채서안과 함께한 뜻밖의 발견</a>
              <a href="https://www.thehandsome.com/ko/DP/theMagazineDetail/10028942" class="btn02">SUMMER AWAKENING 지금, 여름의 시간을 입다</a>
              <a href="https://www.thehandsome.com/ko/DP/theMagazineDetail/10030088" class="btn03">일상에 여유를 더하는 데일리 오피스 룩</a>
              <a href="https://www.thehandsome.com/ko/DP/planshopDetail/37169" class="btn04">감각적인 선물 셀렉샵</a>
              <img src="https://img.thehandsome.com/md/publish/event/250401_familyDay/pc-img05.jpg" />
            </div>
            <!-- //0425 수정 기획전 홍보 연결 베너 -->
          </div>

          <!-- 0425 수정 카드 보내기 팝업 -->
          <v-dialog v-model="seeCardPopup">
            <DialogBasic class="popup-basic popup-see-card-popup btmfull-ver" header-title="메시지 카드 보내기" :width="540" @hide="closeDialog">
              <template #body>
                <div class="inner">
                  <div class="or-card-msg">
                    <img src="https://img.thehandsome.com/md/publish/event/250401_familyDay/card_1.jpg" alt="" />
                    <div class="msg-cnt">
                      <v-textarea 
                        v-model="userText" 
                        outlined 
                        label="마음을 담은 메시지를 입력해보세요" 
                        :no-resize="true" 
                        counter="200" maxlength="200" height="276" 
                        class="cmp-form-textarea counting" 
                        @keyup="textKeyUp"
                      />
                    </div>
                  </div>
                </div>
              </template>
              <template #footer>
                <v-btn large color="primary">메시지 보내기</v-btn>
              </template>
            </DialogBasic>
          </v-dialog>
          <!-- // 0425 수정 카드 보내기 팝업 -->
          <style type="text/css">
            html{scroll-behavior: smooth;}
            .pc-event25-familyDay{}
            .pc-event25-familyDay img{width:100%; display:block;}
            .pc-event25-familyDay .cpn-list{ margin-top:42px !important;}
            .pc-event25-familyDay .tab_menu-cover{position: sticky; top: 64px; width: 100%; overflow-x: auto; overflow-y: hidden; z-index: 5; display: flex; white-space: nowrap;justify-content: flex-start;}
            .pc-event25-familyDay .tab_menu-cover img{position:relative; display:block; z-index:0;}
            .pc-event25-familyDay .tab_menu-cover .list{position:absolute; top:0; left:0; width:100%; height:100%; right:0; bottom:0; z-index:1; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap;}
            .pc-event25-familyDay .tab_menu-cover .list a{height:100%; width:25%; text-indent: -99999px; font-size: 0; color: transparent !important; overflow: hidden;}
            .pc-event25-familyDay .tab-cont{padding-top: calc(64px + 5.208%); margin-top: calc(-64px + -5.208%);}
            .pc-event25-familyDay #tab3 .swiper-show-cover{background:#f9f9f9;}
            .pc-event25-familyDay .swiper-show-cover{padding-bottom:120px;}
            .pc-event25-familyDay .swiper-show-cover .swiper-container{max-height:0; width:26.042%; margin:0 auto; overflow:hidden; transition: max-height 0.4s ease-in-out;}
            .pc-event25-familyDay .swiper-show-cover.on .swiper-container{max-height:1000px;}
            .pc-event25-familyDay .swiper-show-cover .swiper-container{}
            .pc-event25-familyDay .swiper-show-cover .swiper-container-horizontal > .swiper-pagination-bullets{bottom: 0;}
            .pc-event25-familyDay .swiper-show-cover .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet{border-radius:0; height:10px; margin:0 3px; width:2px; opacity: 1;}
            .pc-event25-familyDay .swiper-show-cover .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet.swiper-pagination-bullet-active{width:4px; background:#000;}
            .pc-event25-familyDay .show-btn{width:39.063%; margin: 0 auto; display: block;}

            .pc-event25-familyDay .btn-cover{position:relative; margin-bottom:70px;}
            .pc-event25-familyDay .btn-cover a,
            .pc-event25-familyDay .btn-cover button{position: absolute; left: 36%; display: block; height: 7.5%; width: 28%; opacity: 0; text-indent: -99999px; font-size: 0; color: transparent !important; overflow: hidden;}
            .pc-event25-familyDay .btn-cover .btn{bottom: 8%;}
            .pc-event25-familyDay .btn-cover .btn2{bottom: 0;}
            .pc-event25-familyDay .btn-cover .float-flower{position:absolute; width:35.9%; left:32.1%; bottom:19.1%; background:url(//img.thehandsome.com/md/publish/event/250401_familyDay/ani/pc-ani-bottom.png) no-repeat center center; background-size: 80%; transition: all ease 0.8s;}
            .pc-event25-familyDay .btn-cover .float-flower .center-img{position:relative; z-index:1;}
            .pc-event25-familyDay .btn-cover .float-flower .top-img{z-index:2; position:absolute; width:100%; height:100%; left:0; right:0; top:0; bottom:0;}
            .pc-event25-familyDay .btn-cover .float-flower .top-img img,
            .pc-event25-familyDay .btn-cover .float-flower .bottom-img img{position:absolute; transform: scale(0.6) rotate(-15deg); opacity:0;}
            .pc-event25-familyDay .btn-cover .float-flower .top-img img.flower01{width:100%; top:0; left:0;}
            .pc-event25-familyDay .btn-cover .float-flower .top-img img.flower02{width:25.7%; right:16.7%; bottom:16.2%; z-index:3;}
            .pc-event25-familyDay .btn-cover .float-flower .top-img img.flower03{width:14.2%; right:49.8%; bottom:17.1%; z-index:2;}
            .pc-event25-familyDay .btn-cover .float-flower .top-img img.flower04{width:13.7%; right:38.5%; bottom:9.9%; z-index:1;}
            .pc-event25-familyDay .btn-cover .float-flower .top-img img.flower05{width:10.3%; left:36.8%; top:16.4%;}
            .pc-event25-familyDay .btn-cover .float-flower .bottom-img{z-index:0; position:absolute; width:100%; height:100%; left:0; right:0; top:0; bottom:0;}
            .pc-event25-familyDay .btn-cover .float-flower .bottom-img img.flower01{width:27%; bottom:10.8%; left:22%;}
            .pc-event25-familyDay .btn-cover .float-flower .bottom-img img.flower02{width:26.9%; left:22%; top:7.4%; z-index:0;}
            .pc-event25-familyDay .btn-cover .float-flower .bottom-img img.flower03{width:14.4%; right:39.7%; top:13.7%; z-index:1;}
            .pc-event25-familyDay .btn-cover .float-flower .bottom-img img.flower04{width:18.4%; left:17.1%; bottom:27.9%;}
            .pc-event25-familyDay .btn-cover .float-flower .bottom-img img.flower05{width:20.1%; right:15.7%; top:20.3%;}
            .pc-event25-familyDay .btn-cover .float-flower.on {background-size: 100%;}
            .pc-event25-familyDay .btn-cover .float-flower.on .bottom-img img,
            .pc-event25-familyDay .btn-cover .float-flower.on .top-img img{animation-duration: 0.8s; animation-name: flower-ani; animation-fill-mode: forwards;}
            .pc-event25-familyDay .btn-cover .float-flower.on .ani01{animation-delay: 0s;}
            .pc-event25-familyDay .btn-cover .float-flower.on .ani02{animation-delay: 0.3s;}
            .pc-event25-familyDay .btn-cover .float-flower.on .ani03{animation-delay: 0.5s;}
            .pc-event25-familyDay .btn-cover .float-flower .top-img .ani04{transform: scale(1);}
            .pc-event25-familyDay .btn-cover .float-flower.on .top-img .ani04{animation-delay: 0.8s; animation-duration: 0.5s; animation-name: flower-ani2; animation-fill-mode: forwards;}
            @keyframes flower-ani {
              0% {
                  opacity:0;
                  transform: scale(0.6) rotate(-15deg);
              }
              100%{
                  opacity:1;
                  transform: scale(1) rotate(0deg);
              }
            }
            @keyframes flower-ani2 {
              0% {
                  opacity:0;
              }
              100%{
                  opacity:1;
              }
            }
            .pc-event25-familyDay .plan-btn-cover{position:relative; }
            .pc-event25-familyDay .plan-btn-cover a{position:absolute; width: 19.3%; display: block; height: 57.8%; bottom: 11.5%; opacity:0; text-indent: -99999px; font-size: 0; color: transparent !important; overflow: hidden;}
            .pc-event25-familyDay .plan-btn-cover a.btn01{left:9.1%;}
            .pc-event25-familyDay .plan-btn-cover a.btn02{left:30%;}
            .pc-event25-familyDay .plan-btn-cover a.btn03{right:30%;}
            .pc-event25-familyDay .plan-btn-cover a.btn04{right:9.1%;}
            
            .popup-see-card-popup .or-card-msg{ margin: -20px 0 0;  padding-bottom: 20px; }
            .popup-see-card-popup .or-card-msg > img{width:100%;}
            .popup-see-card-popup .or-card-msg .msg-cnt{ margin: 20px 20px 0 20px;  background: #fbfbfb;  padding: 16px 0 20px 0;}
            .popup-see-card-popup .or-card-msg .msg-cnt .cmp-form-textarea.v-textarea.counting .v-input__control .v-input__slot{ background: none;  min-height: unset;}
            .popup-see-card-popup .or-card-msg .msg-cnt .cmp-form-textarea.v-textarea.counting .v-input__control .v-input__slot fieldset{ display: none;}
            .popup-see-card-popup .or-card-msg .msg-cnt .cmp-form-textarea.v-textarea.counting .v-input__control .v-input__slot label{ left: 16px !important;  font-size: 1.6rem;  line-height: 3.3rem;  padding: 0 !important;}
            /* 수정 */
            .popup-see-card-popup .or-card-msg .msg-cnt .cmp-form-textarea.v-textarea.counting .v-input__control .v-input__slot textarea{ font-size: 1.6rem;  line-height: 3.6rem;  padding: 0 16px !important;  background-attachment: local; background-image: linear-gradient(to right, #fbfbfb 19px, transparent 19px), linear-gradient(to left, #fbfbfb 19px, transparent 19px), repeating-linear-gradient(#fbfbfb, #fbfbfb 35px, #e5e5e5 35px, #e5e5e5 36px, white 36px); white-space: pre-wrap;}
            .popup-see-card-popup .or-card-msg .msg-cnt .cmp-form-textarea.v-textarea.counting .v-input__control .v-text-field__details .v-counter{ padding-top: 16px;  padding-right: 20px;  color: #000;}
            .popup-see-card-popup .or-card-msg .msg-cnt .ellipsis-message .msg{ font-size: 1.4rem;  line-height: 3.3rem !important;  padding: 0 16px !important; background-image: linear-gradient(to right, #fbfbfb 19px, transparent 19px), linear-gradient(to left, #fbfbfb 19px, transparent 19px), repeating-linear-gradient(#fbfbfb, #fbfbfb 35px, #e5e5e5 35px, #e5e5e5 36px, white 36px); white-space: pre-wrap;}
            /* 수정 */
            .popup-see-card-popup .or-card-msg .msg-cnt .ellipsis-message .message-btn-box{ padding-top: 12px;  padding-right: 16px;}
            .popup-see-card-popup .or-card-msg .msg-cnt .ellipsis-message .message-btn-box button{ line-height: 2.2rem;}
            .popup-see-card-popup .or-card-msg .card-select-cnt{ margin-top: 20px;}
            .popup-see-card-popup .or-card-msg .card-select-cnt .swiper-container{ padding-left: 18px;  padding-right: 18px;}
            .popup-see-card-popup .or-card-msg .card-select-cnt .swiper-slide{ width: auto !important;}
            .popup-see-card-popup .or-card-msg .card-select-cnt .card-list{ position: relative;  overflow: hidden;  width: 62px;  box-sizing: border-box;}
            .popup-see-card-popup .or-card-msg .card-select-cnt .card-list input{ overflow: hidden !important;  position: absolute !important;  width: 1px !important;  height: 1px !important;  margin: -1px !important;  padding: 0 !important;  border: 0 !important;  clip: rect(0, 0, 0, 0) !important;}
            .popup-see-card-popup .or-card-msg .card-select-cnt .card-list label .img{ display: block;  border: 1px solid #fff;  border-radius: 6px;  padding: 2px;  box-sizing: border-box;  width: 58px;  height: 58px;  margin: 0 auto;}
            .popup-see-card-popup .or-card-msg .card-select-cnt .card-list label .img .v-image{ width: 52px;  height: 52px;}
            .popup-see-card-popup .or-card-msg .card-select-cnt .card-list label .tit{ display: block;  padding-top: 3px;  font-size: 1.4rem;  line-height: 2.2rem;  color: #707070;  text-align: center;}
            .popup-see-card-popup .or-card-msg .card-select-cnt .card-list input:checked + label .img{ border-color: #000;}
            .popup-see-card-popup .or-card-msg .card-select-cnt .card-list input:checked + label .tit{ color: #000;}
            .popup-see-card-popup .or-card-msg.box-type2{ margin-top: 30px;  border-bottom: none;  padding-bottom: 0;}
            .popup-see-card-popup .or-card-msg.box-type3{ margin-top: 20px;  border-bottom: none;  padding-bottom: 0;}
            .popup-see-card-popup .contents-line4-box{padding-top: 20px;}
            .popup-see-card-popup .contents-line4-box .contents-tit-box{margin-bottom:22px;}
            .popup-see-card-popup .contents-line4-box .cmp-form-phoneBox{position: relative; width: 100%; gap:4px;}
            .popup-see-card-popup .contents-line4-box .cmp-form-phoneBox > div{width:calc((100% - 8px) / 3);}

            /* 0425 수정 */
            .pc-event25-familyDay .plan-btn-cover a.banner-img{ bottom: 23%; left: 35.9%; width: 28.2%; height: 13%;}
            .pc-event25-familyDay .visual-cover{position: relative; background:#f9f9f9;}
            .pc-event25-familyDay .visual-cover .top-visual{position:relative; z-index:1;}
            .pc-event25-familyDay .visual-cover .visual-swiper{position:absolute; width:42.7%; right:6.3%; top:9%; z-index:0; border-radius:50%; overflow:hidden;}
            .pc-event25-familyDay .visual-cover .visual-ani-img{position:absolute; z-index:1; top:0; bottom:0; left:0; right:0;}
            .pc-event25-familyDay .visual-cover .visual-ani-img img{position:absolute; transform: scale(0.6) rotate(-15deg); opacity:0;}
            .pc-event25-familyDay .visual-cover .visual-ani-img img.flower01{animation-delay: 0s; width:6.8%; right:5.5%; top:28.1%;}
            .pc-event25-familyDay .visual-cover .visual-ani-img img.flower02{animation-delay: 0.3s; width:6%; right:41.8%; bottom:18.8%;}
            .pc-event25-familyDay .visual-cover .visual-ani-img img.flower03{animation-delay: 0.15s; width:12.7%; right:4.2%; bottom:15.4%;}
            .pc-event25-familyDay .visual-cover .visual-ani-img img.flower04{animation-delay: 0.45s; width:6.6%; right:37.5%; top:12%;}
            .pc-event25-familyDay .visual-cover .visual-ani-img img.flower05{animation-delay: 0.6s; width:4.4%; right:10.3%; top:37.7%;}
            .pc-event25-familyDay .visual-cover .visual-ani-img.on img{animation-name: flower-ani; animation-fill-mode: forwards; animation-duration: 0.8s;}
          </style>
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
import DialogBasic from '~/pages/POPUP/DialogBasic.vue' // 팝업기본

export default {
  layout: 'LayoutBasics',
  components : {
    Swiper,
    SwiperSlide,
    DialogBasic
  },  
  data: () => ({
    // 0425 수정
    isLoaded: false,
    isFlowerVisible: false,
    observer: null,
    hiddenInput: null,
    setNum: 0,
    rolLength: 4,
    seemore: false,
    showtab3: false,
    showtab4: false,
    seeCardPopup:false,
    cpnList: [
      {
        cpn_name: '리뉴얼 기념 앱전용', // 쿠폰명
        only_app: false, // 앱전용
        cpn_value: '15%', // 쿠폰 값
        cpn_date: null,
        down_com: false, // 다운로드 여부
        notice: "리뉴얼 기념 앱전용 정상 10% 할인 쿠폰입니다.<br />*아울렛 불가"
      },
    ],
    userText:'',
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

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          this.isFlowerVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.7 }
    );

    if (this.$refs.flower) {
      this.observer.observe(this.$refs.flower);
    }
    
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
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
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
    btnTab3Click(){
      this.showtab3 = !this.showtab3;
    },
    btnTab4Click(){
      this.showtab4 = !this.showtab4;
    },
    closeDialog(){
      const me = this
      me.seeCardPopup = false
    },
    textKeyUp(){
      const me = this
      if(me.userText.length > 200){
        me.userText = me.userText.substr(0, 200)
      }
    },
    // 0425 수정
    onImageLoad() {
      this.isLoaded = true;
    },
  }
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/event.scss'; 
</style>
