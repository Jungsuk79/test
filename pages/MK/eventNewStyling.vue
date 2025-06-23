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
          <div class="pc-event2024-newstyling">
            <!-- 상단 visual 영역 -->
            <div class="visual_cover">
              <div id="holyday-swiper" class="swiper-container">
                <!-- 보여지는 영역 -->
                <div class="swiper-wrapper">
                  <!-- div class="swiper-slide" 를 추가하면된다 -->
                  <div class="swiper-slide">
                    <img src="https://img.thehandsome.com/md/publish/event/241202_newstyling/visual-slide01.png" alt="이미지를 지원하지 않습니다." />
                  </div>
                  <div class="swiper-slide">
                    <img src="https://img.thehandsome.com/md/publish/event/241202_newstyling/visual-slide02.png" alt="이미지를 지원하지 않습니다." />
                  </div>
                  <div class="swiper-slide">
                    <img src="https://img.thehandsome.com/md/publish/event/241202_newstyling/visual-slide03.png" alt="이미지를 지원하지 않습니다." />
                  </div>
                  <div class="swiper-slide">
                    <img src="https://img.thehandsome.com/md/publish/event/241202_newstyling/visual-slide04.png" alt="이미지를 지원하지 않습니다." />
                  </div>
                  <div class="swiper-slide">
                    <img src="https://img.thehandsome.com/md/publish/event/241202_newstyling/visual-slide05.png" alt="이미지를 지원하지 않습니다." />
                  </div>
                  <div class="swiper-slide">
                    <img src="https://img.thehandsome.com/md/publish/event/241202_newstyling/visual-slide06.png" alt="이미지를 지원하지 않습니다." />
                  </div>
                </div>
                <!-- 페이징 버튼 처리 -->
              </div>
              <img src="https://img.thehandsome.com/md/publish/event/241202_newstyling/pc-visual-cover.jpg" alt="2025 새해 행운을 위한 스타일링 운세/ Luck to You" />
            </div>
            <img src="https://img.thehandsome.com/md/publish/event/241202_newstyling/pc-visual-btm.jpg" alt="new year styling/ 2024.12.26 (목) - 12.31 (화)/ luck to you" />
            <!-- // 상단 visual 영역 -->

            <!-- 로그인 안한 케이스 / 데이터 "chkLogin" 참고 -->
            <div class="login-cover" v-if="!chkLogin">
              <a class="btn" href="https://www.thehandsome.com/ko/ME/login">로그인 하기</a>
              <img src="https://img.thehandsome.com/md/publish/event/241202_newstyling/pc-unlogin-startimg.jpg" alt="2025 IS COMING/ 로그인하고 스타일링 운세를 확인해보세요/ 최대 7만원 혜택과 함께 새해 행운을 부르는 아이템을 추천해드립니다/ ID당 1회 참여 가능" />
            </div>
            <!-- //로그인 안한 케이스 / 데이터 "chkLogin" 참고 -->
            <!-- 로그인  -->
            <div class="start_style" v-if="chkLogin">
              <img src="https://img.thehandsome.com/md/publish/event/241202_newstyling/pc-comming01.jpg" alt="2025 IS COMMING" />
              <h2 class="styling-title"><b>{{ userInfo.name }}</b>님의 <b>스타일링 운세</b></h2>
              <img src="https://img.thehandsome.com/md/publish/event/241202_newstyling/pc-comming02.jpg" alt="최대 7만원 혜택과 함께  새해 행운을 부르는 아이템을 추천해드립니다" />
              <div class="btn-cover">
                <button v-if="!stylingGo" class="btn" @click="stylingGo = true">스타일링 운세 GO</button>
                <img v-if="stylingGo" src="https://img.thehandsome.com/md/publish/event/241202_newstyling/pc-endimg.jpg" alt="ID당 1회 참여 가능" />
                <img v-else src="https://img.thehandsome.com/md/publish/event/241202_newstyling/pc-startimg.jpg" alt="ID당 1회 참여 가능" />
              </div>
            </div>
            <div v-if="stylingGo" class="styling-cover">
              <div class="your-style-cover">
                <div class="your-style">
                  <div class="your-type">
                    <img src="https://img.thehandsome.com/md/publish/event/241202_newstyling/pc-clover.png" alt="CLOVER" />
                    <h2 class="your-type-top">
                      <span v-if="userInfo.type === '시크'">시크한 매력으로 가득 찬</span>
                      <span v-if="userInfo.type === '클래식'">클래식한 품격으로 빛났던</span>
                      <span v-if="userInfo.type === '베이직'">베이직한 감성으로 완벽한</span>
                      <span v-if="userInfo.type === '모던'">모던한 세련미로 빛난</span>
                      <span v-if="userInfo.type === '에스닉'">독특한 개성을 빛낸</span>
                      <span v-if="userInfo.type === '로맨틱'">모든 순간을 사랑스럽게</span>
                      <span v-if="userInfo.type === '엘레강스'">우아한 품격이 느껴지는</span>
                      <span v-if="userInfo.type === '영트렌디'">스타일의 아이콘으로</span>
                      <span v-if="userInfo.type === '스포티'">건강한 에너지가 넘쳤던</span>
                      <span v-if="userInfo.type === '스트릿'">스트릿 감각으로 반짝인</span>
                      <span v-if="userInfo.type === '빈티지'">시간의 멋을 새롭게 쓴</span>
                      <span v-if="userInfo.type === '글램'">블링블링 화려한</span>
                      <br>24년을 보내신 {{ userInfo.name }}님!
                    </h2>
                    <p class="your-type-bottom">
                      <span v-if="userInfo.type === '시크'">도시적이고 세련된 스타일로 자신감 넘치는<br>당신의 에너지가 모든 순간을 더욱 특별하게 만들었죠.<br>2025년에도 시크한 매력으로<br>매 순간 주인공이 되시길 응원합니다!</span>
                      <span v-if="userInfo.type === '클래식'">시대를 초월한 세련된 스타일로<br>언제나 우아함의 표본이 되었던 당신,<br>2025년에도 변치 않는 품격으로<br>멋진 날들을 이어가세요.</span>
                      <span v-if="userInfo.type === '베이직'">심플하지만 코디 활용도 높은 센스로<br>매일 새로운 매력을 보여주셨죠.<br>2025년에도 당신만의 실용적이고<br>감각적인 매력을 더해보세요!</span>
                      <span v-if="userInfo.type === '모던'">현대적이고 미니멀한 스타일로<br>트렌드를 넘어서 완벽한 룩을 완성했던 당신,<br>2025년에도 당신만의 세련된<br>모던미를 한층 더해보세요!</span>
                      <span v-if="userInfo.type === '에스닉'">유니크한 패턴과 디테일로<br>스타일에 예술을 더했던 당신,<br>2025년에도 그 독창적 에너지로<br>새로움을 이어가세요.</span>
                      <span v-if="userInfo.type === '로맨틱'">섬세한 디테일과 여성스러운 매력으로,<br>주변을 따뜻하게 밝혀주셨죠.<br>2025년에도 사랑스러운 낭만을<br>가득 담은 하루하루를 만드세요!</span>
                      <span v-if="userInfo.type === '엘레강스'">우아하면서도 고급스러운 스타일로,<br>어떤 자리에서도 빛나셨죠.<br>2025년에도 당신의 기품 있는 매력으로<br>더욱 빛나는 순간을 만들어보세요!</span>
                      <span v-if="userInfo.type === '영트렌디'">항상 새로운 트렌드를 가장 먼저 시도하며<br>스타일의 리더가 된 당신,<br>2025년에도 모두가 주목하는<br>스타일 아이콘이 되어주세요!</span>
                      <span v-if="userInfo.type === '스포티'">활동적인 스타일링으로<br>언제나 생기 가득했던 당신,<br>2025년에도 이 건강하고<br>멋진 에너지로 모든 순간을 즐겨보세요.</span>
                      <span v-if="userInfo.type === '스트릿'">트렌디하면서도 개성 넘치는 스타일로<br>나만의 멋을 각인시킨 당신,<br>2025년에도 그 독창적 감각으로<br>어디에서든 자신감 넘치게 자신을 표현하세요.</span>
                      <span v-if="userInfo.type === '빈티지'">당신의 빈티지한 감각은<br>시간의 멋을 새롭게 썼어요!<br>2025년에도 그 독보적인 감각으로<br>사람들의 마음을 사로잡으세요.</span>
                      <span v-if="userInfo.type === '글램'">화려하고 매혹적인 스타일로 주변까지<br>블링블링하게 만드는 멋진 스타일로,<br>2025년에 더욱 빛나는 한 해를 보내세요!</span>
                    </p>
                  </div>
                  <div class="your-percent">
                    <div class="percent-cover" v-for="(item, idx) in userInfo.buyList" :key="idx">
                      <p class="percent-title">{{ item.listType }}</p>
                      <div class="percent" :style="{ width: `${item.percent * 4}px` }"></div><span class="percent-num">{{ item.percent }}%</span>
                    </div>
                    <!-- [퍼블수정]24.12.02 문구수정 -->
                    <div class="share-benefit"><img src="https://img.thehandsome.com/md/publish/event/241202_newstyling/pc-notice-text.png" alt="※ 24년 1월~11월 구매 데이터 중 주요 선호 무드 타입과 비중/ ※ 스타일라이브 공유 시 한섬 마일리지 1만점 (50명 추첨 / 모바일 전용)" /></div>
                    <!-- // [퍼블수정]24.12.02 문구수정 -->
                  </div>
                </div>
              </div>
              <img src="https://img.thehandsome.com/md/publish/event/241202_newstyling/pc-tabtitle.jpg" alt="새해 받고 싶은 행운을 선택해 보세요/ 행운을 부르는 아이템을 추천해드려요" />
              <div class="cmp-tabs box-type">
                <v-tabs v-model="tab" fixed-tabs>
                  <v-tab>
                    <img src="https://img.thehandsome.com/md/publish/event/241202_newstyling/pc-tab01-off.jpg" alt="재물운 off" />
                    <img class="on" src="https://img.thehandsome.com/md/publish/event/241202_newstyling/pc-tab01-on.jpg" alt="재물운 on" />
                  </v-tab>
                  <v-tab>
                    <img src="https://img.thehandsome.com/md/publish/event/241202_newstyling/pc-tab02-off.jpg" alt="애정운 off" />
                    <img class="on" src="https://img.thehandsome.com/md/publish/event/241202_newstyling/pc-tab02-on.jpg" alt="애정운 on" />
                  </v-tab>
                  <v-tab>
                    <img src="https://img.thehandsome.com/md/publish/event/241202_newstyling/pc-tab03-off.jpg" alt="건강운 off" />
                    <img class="on" src="https://img.thehandsome.com/md/publish/event/241202_newstyling/pc-tab03-on.jpg" alt="건강운 on" />
                  </v-tab>
                </v-tabs>
              </div>
              <div class="tab-content">
                <v-tabs-items v-model="tab" touchless>
                  <v-tab-item :transition="false">
                    <h3><span>재물운</span>을 부르는 아이템</h3>
                    <p class="item-title" v-if="userInfo.gender === 'w'">부드러운 새틴으로 우아한 스타일을 연출하세요.<br>품격 있는 스타일이 당신의 재물운을 끌어당깁니다.</p>
                    <p class="item-title" v-if="userInfo.gender === 'm'">풍요와 행운을 부르는 골드 포인트!<br>빛나는 당신의 스타일이 재물운까지 불러올 거예요.</p>
                    <ProductList :list="prdList1" :layout="6" :unit-type="'mini'" :swipe="true" />
                  </v-tab-item>
                  <v-tab-item :transition="false">
                    <h3><span>애정운</span>을 부르는 아이템</h3>
                    <p class="item-title" v-if="userInfo.gender === 'w'">섬세한 레이스로 당신의 애정운을 한껏 끌어올려 보세요!<br>사랑스러운 디테일이 로맨틱한 순간을 만들어 줄 거예요.</p>
                    <p class="item-title" v-if="userInfo.gender === 'm'">사랑스러운 핑크로 애정운을 한껏 끌어올려 보세요!<br>부드러운 매력이 특별한 인연을 불러옵니다.</p>
                    <ProductList :list="prdList2" :layout="6" :unit-type="'mini'" :swipe="true" />
                  </v-tab-item>
                  <v-tab-item :transition="false">
                    <h3><span>건강운</span>을 부르는 아이템</h3>
                    <p class="item-title">자연의 에너지를 담은 그린 컬러로 건강운을 담으세요!<br>2025년, 몸도 마음도 싱그럽게 충전하세요.</p>
                    <ProductList :list="prdList3" :layout="6" :unit-type="'mini'" :swipe="true" />
                  </v-tab-item>
                </v-tabs-items>
              </div>
              <div class="my-shopping-luck">
                <img src="https://img.thehandsome.com/md/publish/event/241202_newstyling/pc-getluck.jpg" alt="나의 쇼핑 운은?/ 쇼핑백 쿠폰과 함께 사용 가능한  추가 상품 쿠폰을 받아 보세요/ ID당 1회 참여 가능" />
                <div class="cpn-img">
                  <img v-if="!getLuck" src="https://img.thehandsome.com/md/publish/event/241202_newstyling/pc-getluck-img01.jpg" alt="랜덤 행운 쿠폰/ ???" />
                  <img v-if="getLuck" src="https://img.thehandsome.com/md/publish/event/241202_newstyling/pc-getluck-img02.jpg" alt="득템 기운 가득한 쇼핑운/ 10,000원/ 30만원 이상의 정상 상품 구매 시" />
                  <!-- <img v-if="getLuck" src="https://img.thehandsome.com/md/publish/event/241202_newstyling/pc-getluck-img03.jpg" alt="인생템 찾을 쇼핑운/ 20,000원/ 30만원 이상의 정상 상품 구매 시" />
                  <img v-if="getLuck" src="https://img.thehandsome.com/md/publish/event/241202_newstyling/pc-getluck-img04.jpg" alt="플렉스 기쁨 가득한 쇼핑운/ 30,000원/ 30만원 이상의 정상 상품 구매 시" /> -->
                </div>
                <div class="btn-cover">
                  <button class="btn" @click="getLuck = true" :disabled="getLuck">
                    <img v-if="!getLuck" src="https://img.thehandsome.com/md/publish/event/241202_newstyling/pc-getluck-btn.jpg" alt="행운 받기" />
                    <img v-else src="https://img.thehandsome.com/md/publish/event/241202_newstyling/pc-getluck-btn2.jpg" alt="이미 참여 하셨습니다." />
                  </button>
                </div>
                <img src="https://img.thehandsome.com/md/publish/event/241202_newstyling/pc-getluck-btmimg.jpg" alt="ID당 1회 참여 가능" />
              </div>
            </div>
            <!-- //운세 시작 / 데이터 "stylingGo" 참고 -->
            <div class="pay_benefits">
              <a class="btn" href="https://www.thehandsome.com/ko">국민카드 결제 혜택 자세히 보기</a>
              <img src="https://img.thehandsome.com/md/publish/event/241202_newstyling/pc-img02.jpg" alt="결제 혜택/ 국민카드 40만원 이상 구매시 1만원 할인/ 소진 시 종료" />
            </div>

          </div>
          <script>
            new Swiper('#holyday-swiper', {
              autoplay: {
                delay: 0, // 0 보다 크면 list흐를때 스냅이 생긴다
                disableOnInteraction: false
              },
              speed: 3500, //swiper 흐르는속도
              loop: true,
              loopAdditionalSlides : 1,
              // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
              allowTouchMove: false, // 터치 방지
              slidesPerView: 'auto',
              spaceBetween: 0,
              centeredSlides: true,
            })
          </script>
          <style type="text/css">
            .pc-event2024-newstyling{position:relative; width:100%; margin:0 auto; overflow:hidden;}
            .pc-event2024-newstyling .visual_cover{position:relative;}
            .pc-event2024-newstyling .visual_cover #holyday-swiper{position: absolute; top: 9.524%; left: 0;  width: 100%; height: auto;}
            .pc-event2024-newstyling .visual_cover #holyday-swiper .swiper-wrapper {transition-timing-function: linear; z-index: 1;}
            .pc-event2024-newstyling .visual_cover #holyday-swiper .swiper-wrapper .swiper-slide{width:15.625% !important; z-index: 1; margin-left:130px;}

            .pc-event2024-newstyling .login-cover{position:relative;}
            /* [퍼블수정]24.12.02 문구수정 */
            .pc-event2024-newstyling .login-cover .btn{position:absolute; width: 28%; height: 7.8%; right: 36%; bottom: 17%; font-size:0; color:transparent !important; text-indent:-9999px;}
            .pc-event2024-newstyling .start_style{position:relative;}
            .pc-event2024-newstyling .start_style .btn-cover{position:relative;}
            .pc-event2024-newstyling .start_style .btn-cover button{position:absolute; top:0; left: 35%; height: 34%; width: 30%; font-size:0; color:transparent !important; text-indent:-9999px;}
            .pc-event2024-newstyling .pay_benefits{position:relative;}
            .pc-event2024-newstyling .pay_benefits .btn{position:absolute; width: 28%; height: 9.8%; right: 36%; bottom: 10.5%; font-size:0; color:transparent !important; text-indent:-9999px;}

            .pc-event2024-newstyling .styling-title{width: 100%; text-align: center;font-size: 48px; line-height: 48px; font-weight: 400; word-break: break-all;}
            .pc-event2024-newstyling .styling-title b{font-weight: 500; word-break: break-all;}
            .pc-event2024-newstyling .styling-cover{position:relative;}
            .pc-event2024-newstyling .your-style-cover{background:#1644cb; padding:244px 0 120px; color:#fff;text-align: left;}
            .pc-event2024-newstyling .your-style-cover .your-style{display: flex; justify-content: space-between; align-items: stretch; width: 1200px; margin: 0 auto;}
            .pc-event2024-newstyling .your-style-cover .your-style .your-type{position:relative; width:600px;}
            .pc-event2024-newstyling .your-style-cover .your-style .your-type > img{position:absolute; top:-110px; left:0; width:91px;}
            .pc-event2024-newstyling .your-style-cover .your-style .your-type h2.your-type-top{font-size:48px; line-height:72px; margin-bottom:60px;font-weight:400;padding-right: 30px;}
            .pc-event2024-newstyling .your-style-cover .your-style .your-type h2.your-type-top span{font-weight:500;}
            .pc-event2024-newstyling .your-style-cover .your-style .your-type p.your-type-bottom{font-size:22px; line-height:34px;}

            .pc-event2024-newstyling .your-style-cover .your-style .your-percent{position:relative; width:600px; padding-bottom: 30px;}
            .pc-event2024-newstyling .your-style-cover .your-style .your-percent .share-benefit{position: absolute; left: 0; bottom: 0;}
            .pc-event2024-newstyling .your-style-cover .your-style .your-percent .percent-cover{display: flex; height: 61px; line-height: 61px; margin-bottom:11px; justify-content: flex-start; align-items: center;color:#00d474;}
            .pc-event2024-newstyling .your-style-cover .your-style .your-percent .percent-cover .percent-title{width:105px; font-size:26px;}
            .pc-event2024-newstyling .your-style-cover .your-style .your-percent .percent-cover .percent{background-color:#00d474; height: 61px;}
            .pc-event2024-newstyling .your-style-cover .your-style .your-percent .percent-cover span.percent-num{margin-left: 10px; font-size: 22px; display: block;}

            .pc-event2024-newstyling .cmp-tabs.box-type{width:660px; margin:0 auto;}
            .pc-event2024-newstyling .cmp-tabs.box-type .v-tabs .v-tabs-bar{height:210px;}
            .pc-event2024-newstyling .cmp-tabs.box-type .v-tabs .v-tabs-bar .v-slide-group__content .v-tab{width:210px; height:210px; border:0; background-color:#fff; padding: 0; margin: 0 15px 0 0; flex: unset;}
            .pc-event2024-newstyling .cmp-tabs.box-type .v-tabs .v-tabs-bar .v-slide-group__content .v-tab:last-child{margin-right:0;}
            .pc-event2024-newstyling .cmp-tabs.box-type .v-tabs .v-tabs-bar .v-slide-group__content .v-tab::before{display:none;}
            .pc-event2024-newstyling .cmp-tabs.box-type .v-tabs .v-tabs-bar .v-slide-group__content .v-tab img{display:block;}
            .pc-event2024-newstyling .cmp-tabs.box-type .v-tabs .v-tabs-bar .v-slide-group__content .v-tab img.on{display:none;}
            .pc-event2024-newstyling .cmp-tabs.box-type .v-tabs .v-tabs-bar .v-slide-group__content .v-tab.v-tab--active img{display:none;}
            .pc-event2024-newstyling .cmp-tabs.box-type .v-tabs .v-tabs-bar .v-slide-group__content .v-tab.v-tab--active img.on{display:block;}
            .pc-event2024-newstyling .tab-content{margin:80px 61px 0;}
            .pc-event2024-newstyling .tab-content h3{font-size:40px; line-height:40px; margin-bottom:30px; font-weight:400;text-align: center;}
            .pc-event2024-newstyling .tab-content h3 span{color:#1644cb; font-weight:500;}
            .pc-event2024-newstyling .tab-content p{font-size:22px; line-height:34px;text-align: center;}
            .pc-event2024-newstyling .tab-content .product-unit-list{margin-top:50px;}

            .pc-event2024-newstyling .my-shopping-luck{position:relative;}
            .pc-event2024-newstyling .my-shopping-luck .cpn-img{position:relative; width:28.1%; margin:0 auto;}
            .pc-event2024-newstyling .my-shopping-luck .btn-cover{position:relative; width:28.1%; margin:20px auto 0;}
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

export default {
  layout: 'LayoutBasics',
  components : {
    Swiper,
    SwiperSlide,
  },  
  data: () => ({
    tab: null,
    chkLogin: true,
    getLuck: false,
    stylingGo: false,
    // 유저 정보
    userInfo : {
      name : "김한섬",
      type : "시크",
      gender : 'm',
      buyList : [
        {
          listType : "영트렌디",
          percent : "65"
        },
        {
          listType : "모던",
          percent : "30"
        },
        {
          listType : "엘레강스",
          percent : "5"
        }
      ]
    },
    prdList1: [
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷",
          "sell_price": "350000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-new0.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "버튼 칼라 니트 가디건",
          "sell_price": "395000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-new1.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
          "link_url" : "#none",
          "zzim": true,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "텍스쳐 블록 드레스",
          "sell_price": "346000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-new2.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "윙 슬리브 셔링 드레스",
          "sell_price": "495000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-new3.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/014.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "포켓 싱글 재킷",
          "sell_price": "350000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/021.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "버튼 칼라 니트 가디건",
          "sell_price": "395000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/022.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "윙 슬리브 셔링 드레스",
          "sell_price": "495000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-new3.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/014.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "포켓 싱글 재킷",
          "sell_price": "350000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/021.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "버튼 칼라 니트 가디건",
          "sell_price": "395000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/022.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "텍스쳐 블록 드레스",
          "sell_price": "346000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/023.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "윙 슬리브 셔링 드레스",
          "sell_price": "495000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/014.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/024.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
    ],
    prdList2: [
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "버튼 칼라 니트 가디건",
          "sell_price": "395000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/022.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "윙 슬리브 셔링 드레스",
          "sell_price": "495000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-new3.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/014.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "포켓 싱글 재킷",
          "sell_price": "350000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/021.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "버튼 칼라 니트 가디건",
          "sell_price": "395000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/022.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "텍스쳐 블록 드레스",
          "sell_price": "346000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/023.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "윙 슬리브 셔링 드레스",
          "sell_price": "495000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/014.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/024.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
    ],
    prdList3: [
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "버튼 칼라 니트 가디건",
          "sell_price": "395000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/022.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "텍스쳐 블록 드레스",
          "sell_price": "346000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/023.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "텍스쳐 블록 드레스",
          "sell_price": "346000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-new2.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "윙 슬리브 셔링 드레스",
          "sell_price": "495000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-new3.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/014.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "포켓 싱글 재킷",
          "sell_price": "350000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/021.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "버튼 칼라 니트 가디건",
          "sell_price": "395000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/022.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "윙 슬리브 셔링 드레스",
          "sell_price": "495000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-new3.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/014.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "포켓 싱글 재킷",
          "sell_price": "350000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/021.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "윙 슬리브 셔링 드레스",
          "sell_price": "495000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/014.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/024.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷",
          "sell_price": "350000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-new0.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "버튼 칼라 니트 가디건",
          "sell_price": "395000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-new1.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
          "link_url" : "#none",
          "zzim": true,
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
  mounted(){
    // 퍼블확인용 개발 반영 X
    const me = this
    if(location.search.includes("TEST_TYPE=2")){
      me.chkLogin = false
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/event.scss';
</style>
