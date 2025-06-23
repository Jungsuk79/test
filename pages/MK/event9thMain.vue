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

          <div class="pc-2410019thmain">
            <div class="main">
              <!-- <img class="img dim" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-main-dim.png" alt="" />
              <img class="img text" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-main-text.png" alt="" />

              <img v-if="!isVideoFile" class="img" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-01.jpg" alt="" /> -->
              <video class="mov" autoplay="autoplay" controls="controls" muted preload="auto" loop playsinline="playsinline" controlsList="nodownload">
                <source :src="movUrl" type="video/mp4">
              </video>
            </div>

            <div class="tab_menu">
              <!-- 탭 버튼 영역 -->
              <div class="tab_menu_cover">
                <ul class="list">
                  <li v-for="(item, i) in tabsList" :class="{'is_on' : i === 0}" :key="`tab-${i+1}`">
                    <button class="btn" :name="`tab0${i+1}`" >
                      <img 
                        v-for="(image, index) in item.images" 
                        class="img"
                        :class="{'img-on': index === 1}" 
                        :src="`https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/${image}`" :alt="item.text" 
                        :key="index"/>
                    </button>
                  </li>
                </ul>
              </div>
              <!-- // 탭 버튼 영역 -->

              <!-- 탭 컨텐츠 영역 -->
              <div class="cont_area">
                <!-- tab cont 01 -->
                <div class="cont cont-01" name="tab01-cont">
                  <div class="inner">

                    <!-- EVENT 01 -->
                    <div class="event-wrap-01">
                      <img class="img title" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-tab01-tit-01.jpg" alt="EVENT 01. 전 상품 10% 더한섬닷컴으로부터 온 인연 메세지를 확인하고 전 상품 10% 혜택 받아 보세요!" />
                      <!-- 메세지 box -->
                      <div class="message-box">
                        <div class="box">
                          <!-- 로그인 유무 -->
                          <span v-if="!isLogin" class="tit bold">{{ loginText }}</span>
                          <span v-else class="tit"><span class="name">{{ userName }}</span>님</span>

                          <span class="txt">메세지가 도착했습니다</span>

                          <div class="logo-box">
                            <span class="thumb-wrap"></span>
                            <div class="txt-wrap">
                              <span class="logo-tit">THE HANDSOME</span>
                              <div class="logo-txt dot-layout">
                                입력중
                                <div class="dot-wrap">
                                  <span class="dot"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- 로그인 유무 -->
                        <!-- <v-btn v-if="!isLogin" large>로그인 하러가기</v-btn> -->
                        <nuxt-link :to="{}" v-if="!isLogin" class="link-btn">로그인하기</nuxt-link>
                        <v-btn v-else large :disabled="isMessageCheck" @click="messageCheckShow">{{`메세지 확인 ${isMessageCheck ? '완료' : '하기'}`}}</v-btn>
                      </div>
                    </div>
                    
                    <!-- EXTRA BENEFIT -->
                    <div class="event-wrap-02">
                      <img class="img title" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-tab01-tit-02.jpg" alt="EXTRA BENEFIT. 랜덤 최대 3만원 나의 인연에 관한 에피소드를 남기고 최대 3만원 상품 쿠폰을 받아보세요." />
                      
                      <div class="message-list-box">
                        <div class="title-txt-wrap">
                          <span class="tit">New Messages</span>
                          <span class="txt">실시간으로 만나보는 에피소드</span>
                        </div>
                        
                        <ul class="list-wrap">
                          <li v-for="(item, index) in myMessageLists.slice(0, 3)" :key="`list-${index}`" class="list">
                            <div class="img-wrap"
                              :style="`${item.imageUrl !== '' ? 'background-size:cover;' : ''}background-image:url(${item.imageUrl}), url(//cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-icon-user.png)`"
                              :class="{'on' : index === 0 && isMyEpisodeText}"></div>
                            <!-- <div class="img-wrap" :style="`background:url(${item.imageUrl}) no-repeat center`"></div> -->

                            <div class="text-wrap">
                              <span class="name">{{ item.userName }}</span>
                              <span class="text">{{ item.userText }}</span>
                            </div>
                            <span class="time">{{item.minute}}분 전</span>
                          </li>
                        </ul>
                        <div class="btn-wrap">
                          <button class="cmp-font button" @click="openNewMessagePopup">상세 보기 <i class="cmp-icon cmp-icon-18 i-next"></i></button>
                        </div>
                      </div>

                      <div class="cmp-form-textareaBox">
                        <v-textarea 
                          v-model="userTextInput" 
                          outlined 
                          :no-resize="true"
                          counter="1000" 
                          maxlength="1000" 
                          :disabled="isMyEpisodeText"
                          class="cmp-form-textarea counting"
                        >
                          <template #label>
                            인연을 만난 에피소드를 공유하고<br />랜덤 추가 혜택 받아 보세요!
                          </template>
                        </v-textarea>
                        <v-btn large :disabled="isMyEpisodeText" @click="newEpisodeEmit">등록</v-btn>
                      </div>
                    </div>
                    
                    <div class="event-wrap-03">
                      <div class="link-wrap">
                        <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-tab01-02.jpg" alt="" />
                        <a href="https://www.thehandsome.com/ko/DP/theMagazineDetail/10023076" class="link">더한섬닷컴 9주년 화보 더 보기</a>
                      </div>
                    </div>

                  </div>
                </div>
                
                <!-- tab cont 02 -->
                <div class="cont cont-02" name="tab02-cont">
                  <div class="inner">
                    <div class="week-wrap">
                      <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-tab02-01.jpg" alt="" />

                      <!-- 1주차:pc-tab02-week-01.jpg   2주차:pc-tab02-week-02.jpg  3주차:pc-tab02-week-03.jpg-->
                      <div v-if="weekNumber === 1" class="week">
                        <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-tab02-week-01.jpg" alt="" />
                      </div>
                      <div v-else-if="weekNumber === 2" class="week">
                        <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-tab02-week-02.jpg" alt="" />
                        <button class="btn pop-01" @click.stop="msInfoPop('1')">앱 알림 동의</button>
                        <button class="btn pop-02" @click.stop="msInfoPop('2')">스타일라이브 댓글</button>
                        <button class="btn pop-03" @click.stop="msInfoPop('3')">친구 추천</button>
                      </div>
                      <div v-else-if="weekNumber === 3" class="week">
                        <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-tab02-week-03.jpg" alt="" />
                        <button class="btn pop-01" @click.stop="msInfoPop('4')">콘텐츠 마이하트</button>
                        <button class="btn pop-02" @click.stop="msInfoPop('5')">스타일라이브 해시태그</button>
                        <a href="https://www.thehandsome.com/ko/PM/myReviewListPossible" class="btn pop-03">상품평 작성</a>
                      </div>
                      <button class="btn-week" @click="openMyRedLineView">나의 붉은 실 보기</button>
                    </div>

                    <!-- 나의 붉은실 갯수 -->
                    <div v-if="isMyRedLineView" class="myred-line mb-60">
                      <div class="title-wrap">
                        <span class="tit red">나의 붉은 실</span>
                        <span class="txt">총 0000개</span>
                      </div>
                      
                      <div class="redline-view-wrap">
                        <div class="row">
                          <div class="top-box">
                            <span class="tit">받은 붉은 실</span>
                            <span class="txt"><span class="bold">100</span> 개</span>
                          </div>
                          <div class="bottom-box">
                            <ul class="lists">
                              <li v-for="(item, index) in getRedItemsData" :key="`item-${index}`" class="list">
                                <span class="tit">{{ item.itemName }}</span>
                                <span class="txt">{{ item.itemNumb }}</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div class="row">
                          <div class="top-box">
                            <span class="tit">교환한 붉은실</span>
                            <span class="txt"><span class="bold">10</span>개</span>
                          </div>
                          <div class="bottom-box">
                            <ul class="lists">
                              <li v-for="(item, idx) in exchangeRedItemsData" :key="`item-${idx}`" class="list">
                                <span class="tit">{{ item.itemName }}</span>
                                <span class="txt">{{ item.itemDate }} 발급</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <p class="info-txt">매주 금요일 미션 변경과 함께 붉은 실 개수가 초기화됩니다</p>
                    </div>

                    <img class="img mt-40" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-tab02-02-01.jpg" alt="혜택1 붉은실을 쿠폰으로 교환해 보세요" />
                    
                    <div class="myred-line background">
                      <div class="redline-btn-wrap">
                        <ul class="lists">
                          <li v-for="(item, idx) in exchangeCouponData" :key="`item-${idx}`" class="list">
                            <span class="numb">{{item.itemNumb}}개</span>
                            <img class="img img-coupon" :src="item.itemImgUrl" :alt="item.itemText" />
                            <!-- <span class="text">{{item.itemText}}</span> -->
                            <v-btn :disabled="item.isCouponExchange" class="btn-exchange" @click.stop="redLineExchangeCoupon(idx)">교환</v-btn> 
                          </li>
                        </ul>
                        <!-- <span class="info-txt">주차별 최대 3번까지만 교환 가능</span> -->
                      </div>
                    </div>

                    <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-tab02-02-02.jpg" alt="혜택2 주차 별 무제한 미션 최다 달성 고객님께 더한섬닷컴 10만원 바우처를 드려요" />
                  </div>
                </div>
                
                <!-- tab cont 03 -->
                <div class="cont cont-03" name="tab03-cont">
                  <div class="inner">

                    <img class="img title" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-tab03-01.jpg" alt="" />

                    <ul class="gift-list-wrap">
                      <li v-for="(item, idx) in giftItemData" :key="`item-${idx}`" class="list">
                          <img class="img img-gift" :src="item.itemImgUrl" :alt="item.itemText" />
                          <div class="txt-wrap">
                            <span class="tit">{{item.itemTit}}</span>
                            <span class="txt">{{item.itemTxt}}</span>
                          </div>
                          <v-btn class="btn-gift" @click.stop="giftPopView(idx)">상세보기</v-btn> 
                      </li>
                    </ul>

                    <div class="card-wrap">
                      <img class="img img-bg" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-tab03-02.jpg" alt="" />
                      <img class="img img-tag" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/card-tag.png" alt="" />

                      <!-- 
                      BC 카드   : card-bc.png
                      하나 카드 : card-hana.png
                      현대 카드 : card-hyundai.png
                      국민 카드 : card-kookmin.png
                      롯데 카드 : card-lotte.png
                      농협 카드 : card-nonghyup.png
                      신한 카드 : card-shinhan.png
                      우리 카드 : card-woori.png
                    -->
                      <img class="img img-card" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/card-bc.png" alt="" />
                    </div>

                  </div>
                </div>
              </div>
              <!-- // 탭 컨텐츠 영역 -->

            </div>
            
            <!-- 메세지 확인하기 팝업 -->
            <v-dialog ref="messagePop" v-model="isMessagePopup" persistent>
              <DialogBasic class="pop-9th popup-message-lists" :width="540"  header-title="" @hide="closeMessagePopup">
                <template #body>
                  <div class="inner">
                    <div class="img-title">
                      <img class="img title" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-pop-message.jpg" alt="" />
                    </div>
                    <div class="message-lists">
                      <!--구매이력 : isPurchaseHistory >> 있음 : true, 없음 : false -->
                      <p v-html="popMessageTextFirst" class="text-box left first" :class="{'on' : isAnimation01}"></p>

                      <div class="message-box-wrap second mt-30"  :class="{'on' : isAnimation02}">
                        <p v-if="popMyMessageText !== ''" class="text-box right my-text" :class="{'on' : isAnimation02 && isMyMessageText}">{{popMyMessageText}}</p>

                        <div v-else class="message-input-wrap">
                          <ul class="btn-lists-wrap">
                            <li v-for="(btnText, index) in popMessageBtnsText" :key="`btn-${index}`">
                              <v-btn class="text-box right" @click="messageSelectText(btnText)">{{ btnText }}</v-btn>
                            </li>
                          </ul>
                          <div class="input-box">
                            <v-text-field ref="myTextField" v-model="popMessageText" outlined maxlength="50" type="text" label="자유롭게 대답해주세요 (20자 이내)" clearable class="cmp-form-input custom-box" @keyup.enter="messageUptext"></v-text-field>
                            <button class="btn-submit" @click="messageUptext">입력</button>
                          </div>
                        </div>
                      </div>
                      
                      <ul class="message-lists-wrap third" :class="{'on' : isAnimation03}">
                        <li v-for="(msText, idx) in popMessageListsText" :key="`ms-${idx}`" class="list">
                          <p class="text-box" v-html="msText"></p>
                        </li>
                      </ul>
                      
                      <div class="text-box left fourth mt-20" :class="{'on' : isAnimation04}">
                        <img class="img coupon" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-pop-ms-coupon.jpg" alt="" />
                        <p>쿠폰함에 발급되었습니다</p>
                      </div>

                      <v-btn large class="btn-round fifth" :class="{'on' : isAnimation05}" @click="messageCheckOk">쇼핑하러 가기</v-btn>
                    </div>
                  </div>
                </template>
              </DialogBasic>
            </v-dialog>

            <!-- New Messages 실시간 확인하기 팝업 -->
            <v-dialog v-model="isNewMessagePopup" persistent>
              <DialogBasic class="pop-9th popup-new-message-lists" :width="540"  header-title="" @hide="closeNewMessagePopup">
                <template #body>
                  <div class="inner">
                    <v-btn v-if="isMyNewMessageSelected" class="btn-back" @click="isMyNewMessageSelected = false">뒤로가기</v-btn>

                    <div class="message-list-box">
                      <div class="title-txt-wrap">
                        <span class="tit">New Messages</span>
                        <span class="txt">실시간으로 만나보는 에피소드</span>
                      </div>
                      
                      <ul class="list-wrap">
                        <li v-for="(item, index) in myNewMessagePopupLists" :key="`list-${index}`" class="list" @click="showMyNewMessage(item)">
                          <div class="img-wrap"
                            :style="`${item.imageUrl !== '' ? 'background-size:cover;' : ''}background-image:url(${item.imageUrl}), url(//cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-icon-user.png)`"></div>
                          <!-- <div class="img-wrap" :style="`background:url(${item.imageUrl}) no-repeat center`"></div> -->

                          <div class="text-wrap">
                            <span class="name">{{ item.userName }}</span>
                            <span class="text">{{ item.userText }}</span>
                          </div>
                          <span class="time">{{item.minute}}분 전</span>
                        </li>
                      </ul>
                    </div>

                    <div class="message-detail-box" :class="{'on' : isMyNewMessageSelected}">
                      <div class="img-wrap"
                            :style="`${myNewMessageSelected.imageUrl !== '' ? 'background-size:cover;' : ''}background-image:url(${myNewMessageSelected.imageUrl}), url(//cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-icon-user.png)`"></div>

                      <div class="text-wrap">
                        <span class="name">{{ myNewMessageSelected.userName }}</span>
                        <span class="text">{{ myNewMessageSelected.userText }}</span>
                      </div>
                    </div>

                  </div>
                </template>
              </DialogBasic>
            </v-dialog>

            <!-- 메세지 작성 보상 팝업 -->
            <v-dialog v-model="isMessageCouponPopup" persistent>
              <div class="main9th-coupon-pop coupon-type-01">
                <img class="img bg" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-coupon-bg-01.jpg" alt="재미있는 에피소드를 공유 해주셔서 감사드려요!" />

                <!-- 
                  에피소드 랜덤쿠폰 1만원 : pc-coupon-10000.jpg
                  에피소드 랜덤쿠폰 2만원 : pc-coupon-20000.jpg
                  에피소드 랜덤쿠폰 3만원 : pc-coupon-30000.jpg
                -->
                <img v-if="isMessageCouponType === 1" class="img coupon" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-coupon-10000.jpg" alt="" />
                <img v-else-if="isMessageCouponType === 2" class="img coupon" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-coupon-20000.jpg" alt="" />
                <img v-else-if="isMessageCouponType === 3" class="img coupon" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-coupon-30000.jpg" alt="" />

                <nuxt-link :to="{}" class="link">나의 쿠폰함 보러가기</nuxt-link>
                <button class="btn-close" @click="closeCouponPopup">닫기</button>
              </div>
            </v-dialog>
            
            <!-- 붉은실 보상 팝업 -->
            <v-dialog v-model="isRedLineCouponPopup" persistent>
              <div class="main9th-coupon-pop coupon-type-02">

                <img class="img bg" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-coupon-bg-02.jpg" alt="쿠폰으로 교환 완료! 즐거원 인연 만들어 보세요" />
                <!-- 
                  붉은실 3개 (정상 10%) : pc-cp-10.jpg
                  붉은실 5개 (전품목 10%) : pc-cp-10-all.jpg
                  붉은실 10개 (정상 15%) : pc-cp-15.jpg
                -->
                <img v-if="redLineCouponIndex === 0" class="img coupon" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-cp-10-new.jpg" alt="" />
                <img v-else-if="redLineCouponIndex === 1" class="img coupon" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-cp-10-all.jpg" alt="" />
                <img v-else-if="redLineCouponIndex === 2" class="img coupon" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-cp-15.jpg" alt="" />

                <nuxt-link v-if="redLineCouponIndex === 0" :to="{}" class="link link-01">나의 쿠폰함 보러가기</nuxt-link>
                <nuxt-link v-else :to="{}" class="link">나의 쿠폰함 보러가기</nuxt-link>

                <button class="btn-close" @click="closeCouponPopup">닫기</button>
              </div>
            </v-dialog>
            
            <!-- 붉은실 부족 안내 팝업 -->
            <v-dialog v-model="isRedLineInfoPopup" persistent>
              <div class="main9th-coupon-pop coupon-type-03">
                <img class="img bg" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-info.jpg" alt="교환 가능한 붉은 실이 부족해요! 미션을 더 달성해보세요!" />
                <button class="btn-close" @click="closeCouponPopup">닫기</button>
              </div>
            </v-dialog>

            <!-- GIFT 팝업 -->
            <v-dialog v-model="isGiftPopup" persistent>
              <DialogBasic class="pop-9th main9th-gift-pop" :width="540"  header-title="" @hide="closeGiftPopup">
                <template #body>
                  <div class="inner">
                    <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-popup-logo.jpg" alt="" />
                    
                    <div>
                      <img class="img" :src="`https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-popup-0${giftListIndex}-title.jpg`" alt="" />
                      <img class="img" :src="`https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-popup-0${giftListIndex}-img.gif`" alt="" />
                      <img class="img" :src="`https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-popup-0${giftListIndex}-text.jpg`" alt="" />
                    </div>
                  </div>
                </template>
              </DialogBasic>
            </v-dialog>
            
            <!-- 주차별 붉은실 획득 안내 팝업 -->
            <v-dialog v-model="isWeekRedLineInfoPopup" persistent>
              <DialogBasic class="pop-9th main9th-redlineInfo-pop" :width="540"  header-title="" @hide="closeWeekRedLineInfoPopup">
                <template #body>
                  <div class="inner">
                    <img class="img" :src="`https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-week-info-0${weekInfoNumb}.jpg`" alt="" />
                    
                  </div>
                </template>
              </DialogBasic>
            </v-dialog>

          </div>
          <style type="text/css">
            .pc-2410019thmain {display:block;width:100%;margin:0 auto;}
            .pc-2410019thmain .img{display: block;width:100%; margin:0 auto;}
            .pc-2410019thmain .main{position:relative;}
            .pc-2410019thmain .main .dim{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;}
            .pc-2410019thmain .main .text{position:absolute;top:0;left:0;width:100%;height:100%;z-index:2;}
            .pc-2410019thmain .main .mov{display:block;width:100%;}
            .pc-2410019thmain .tab_menu{position:relative;}
            .pc-2410019thmain .tab_menu .tab_menu_cover{background-color:#ff0000;}
            .pc-2410019thmain .tab_menu .tab_menu_cover .list{display:flex;align-items:center;justify-content:center;width:1200px;margin:0 auto;}
            .pc-2410019thmain .tab_menu .tab_menu_cover .list li{flex:1;}
            .pc-2410019thmain .tab_menu .tab_menu_cover .list li .img{display:block}
            .pc-2410019thmain .tab_menu .tab_menu_cover .list li .img.img-on{display:none}
            .pc-2410019thmain .tab_menu .tab_menu_cover .list li.is_on .img{display:none;}
            .pc-2410019thmain .tab_menu .tab_menu_cover .list li.is_on .img.img-on{display:block;}
            .pc-2410019thmain .tab_menu .cont_area .cont{display:none;}
            .pc-2410019thmain .cont_area .cont-01 .event-wrap-01{padding:72px 0 120px;background-color:#f9f9f9;margin:0 auto;}
            .pc-2410019thmain .cont_area .cont-01 .event-wrap-01 .title{width:400px;height:200px;opacity:0;transform:translateY(40px);transition:all 0.6s ease-in-out;}
            .pc-2410019thmain .cont_area .cont-01 .event-wrap-01 .title.active{opacity:1;transform:translateY(0);}
            .pc-2410019thmain .cont_area .cont-01 .event-wrap-01 .message-box{max-width:540px;margin:48px auto 0;opacity:0;transform:translateY(40px);transition:all 0.6s ease-in-out;}
            .pc-2410019thmain .cont_area .cont-01 .event-wrap-01 .message-box.active{opacity:1;transform:translateY(0);}
            .pc-2410019thmain .cont_area .cont-01 .event-wrap-01 .message-box .box{width:100%;margin-bottom:20px;padding:59px 90px 63px 40px;border-radius:20px;background-color:#fff;position:relative;}
            .pc-2410019thmain .cont_area .cont-01 .event-wrap-01 .message-box .box:after{display:inline-block;content:'';width:37px;height:39px;position:absolute;top:59px;right:40px;z-index:1;background:url('//cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-icon-mg.jpg') no-repeat center;background-size:37px auto;}
            .pc-2410019thmain .cont_area .cont-01 .event-wrap-01 .message-box .box .tit{display:block;text-align:left;font-size:42px;line-height:1;}
            .pc-2410019thmain .cont_area .cont-01 .event-wrap-01 .message-box .box .tit.bold{font-weight:bold;}
            .pc-2410019thmain .cont_area .cont-01 .event-wrap-01 .message-box .box .tit .name{font-weight:bold;}
            .pc-2410019thmain .cont_area .cont-01 .event-wrap-01 .message-box .box .txt{display:block;text-align:left;margin-top:20px;font-size:24px;line-height:1;}
            .pc-2410019thmain .cont_area .cont-01 .event-wrap-02{padding:120px 0;background-color:#fff;margin:0 auto;}
            .pc-2410019thmain .cont_area .cont-01 .event-wrap-02 .title{width:400px;height:200px;}
            .pc-2410019thmain .cont_area .cont-02 .week-wrap{position:relative;}
            .pc-2410019thmain .cont_area .cont-02 .week-wrap .week{position:absolute;top:32.55378858746%;left:18.75%;width:62.5%;height:50.6%;z-index:1;}
            .pc-2410019thmain .cont_area .cont-02 .week-wrap .week .img{display:block;width:100%;}
            .pc-2410019thmain .cont_area .cont-02 .week-wrap .week .btn{display:inline-block;position:absolute;z-index:1;margin:0;box-sizing:border-box;text-indent:-9999px;color:transparent !important;}
            .pc-2410019thmain .cont_area .cont-02 .week-wrap .week .pop-01{top:23.84473%;left:10.8333%;width:25%;height:55.452865%;}
            .pc-2410019thmain .cont_area .cont-02 .week-wrap .week .pop-02{top:23.84473%;left:37.5%;width:25%;height:55.452865%;}
            .pc-2410019thmain .cont_area .cont-02 .week-wrap .week .pop-03{top:23.84473%;right:10.8333%;width:25%;height:55.452865%;}
            
            .pc-2410019thmain .cont_area .cont-02 .week-wrap .btn-week{display:inline-block;position:absolute;bottom:5.612722%;left:35.9375%;width:28.125%;height:7.48362956%;z-index:1;margin:0;box-sizing:border-box;text-indent:-9999px;color:transparent !important;}
            .pc-2410019thmain .message-list-box{max-width:540px;margin:46px auto 0;padding:60px 40px;border:1px solid #ddd;border-radius:25px;background-color:#fff;}
            .pc-2410019thmain .message-list-box .title-txt-wrap{display:flex;align-items:center;justify-content:flex-start;flex-direction:column;}
            .pc-2410019thmain .message-list-box .title-txt-wrap .tit{display:block;width:100%;font-size:28px;line-height:1;text-align:left;}
            .pc-2410019thmain .message-list-box .title-txt-wrap .txt{display:block;width:100%;margin-top:15px;font-size:18px;line-height:1;text-align:left;}
            .pc-2410019thmain .message-list-box .list-wrap{margin-top:40px;}
            .pc-2410019thmain .message-list-box .list-wrap .list{display:flex;align-items:center;padding:20px 0;}
            .pc-2410019thmain .message-list-box .list-wrap .list .img-wrap{display:inline-block;width:80px;height:80px;background:#f9f9f9 url('//cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-icon-user.png') no-repeat center;background-size:38px auto;border-radius:40px;position:relative;}
            .pc-2410019thmain .message-list-box .list-wrap .list .img-wrap.on:after{display:inline-block;content:'';width:14px;height:14px;position:absolute;bottom:5px;right:4px;z-index:1;background-color:#ff0000;border-radius:7px;}
            .pc-2410019thmain .message-list-box .list-wrap .list .text-wrap{display:flex;align-items:center;justify-content:flex-start;flex-direction:column;width:calc(100% - 230px);margin-left:20px;text-align:left;}
            .pc-2410019thmain .message-list-box .list-wrap .list .text-wrap .name{display:block;width:100%;font-size:26px;font-weight:700;line-height:1;text-align:left;}
            .pc-2410019thmain .message-list-box .list-wrap .list .text-wrap .text{display:block;width:100%;margin-top:10px;font-size:20px;line-height:1.5;text-align:left;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;word-break:break-all;}
            .pc-2410019thmain .message-list-box .list-wrap .list .time{min-width:130px;font-size:20px;color:#aaa;text-align:right;}
            .pc-2410019thmain .myred-line{display:flex;align-items:center;justify-content:center;flex-direction:column;}
            .pc-2410019thmain .myred-line.background{background:#f9f9f9;}
            .pc-2410019thmain .myred-line .title-wrap{display:flex;align-items:center;justify-content:flex-start;margin-top:20px;}
            .pc-2410019thmain .myred-line .title-wrap .tit{display:inline-block;font-size:40px;color:#ff0100;font-weight:700;line-height:1;}
            .pc-2410019thmain .myred-line .title-wrap .txt{display:inline-block;margin-left:30px;font-size:40px;font-weight:700;line-height:1;}
            .pc-2410019thmain .myred-line .redline-view-wrap{display:flex;align-items:stretch;justify-content:space-between;width:100%;max-width:1110px;margin-top:40px;}
            .pc-2410019thmain .myred-line .redline-view-wrap .row{width:100%;max-width:540px;}
            .pc-2410019thmain .myred-line .redline-view-wrap .row .top-box{display:flex;align-items:center;justify-content:space-between;width:100%;max-height:92px;padding:28px 30px 26px 20px;border-top:3px solid #000;border-bottom:1px solid #000;}
            .pc-2410019thmain .myred-line .redline-view-wrap .row .top-box .tit{display:flex;align-items:center;justify-content:flex-start;font-size:30px;font-weight:700;line-height:3.7rem;}
            .pc-2410019thmain .myred-line .redline-view-wrap .row .top-box .tit:before{display:inline-block;content:'';width:31px;height:37px;margin-right:10px;background:url('//cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-ico-line.png') no-repeat center;background-size:31px auto;}
            .pc-2410019thmain .myred-line .redline-view-wrap .row .top-box .txt{display:inline-block;font-size:30px;line-height:3.7rem;}
            .pc-2410019thmain .myred-line .redline-view-wrap .row .top-box .txt .bold{font-weight:700;}
            .pc-2410019thmain .myred-line .redline-view-wrap .row .bottom-box{width:100%;height:calc(100% - 40px);padding:30px 30px 30px 20px;}
            .pc-2410019thmain .myred-line .redline-view-wrap .row .bottom-box .list{display:flex;align-items:center;justify-content:space-between;margin-top:20px;}
            .pc-2410019thmain .myred-line .redline-view-wrap .row .bottom-box .list:first-child{margin-top:0;}
            .pc-2410019thmain .myred-line .redline-view-wrap .row .bottom-box .list span{display:inline-block;font-size:22px;line-height:1;}
            .pc-2410019thmain .myred-line .redline-view-wrap .row .bottom-box .list .tit{width:calc(100% - 110px);text-align:left;}
            .pc-2410019thmain .myred-line .redline-view-wrap .row .bottom-box .list .txt{width:110px;text-align:right;}
            .pc-2410019thmain .myred-line .info-txt{margin:25px 0 80px;font-size:18px;line-height:1;color:#666;text-align:center;}
            .pc-2410019thmain .myred-line .redline-btn-wrap{display:flex;align-items:center;justify-content:center;width:100%;}
            .pc-2410019thmain .myred-line .redline-btn-wrap .lists{display:flex;align-items:center;justify-content:center;width:100%;max-width:1200px;}
            .pc-2410019thmain .myred-line .redline-btn-wrap .list{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;max-width:380px;margin-left:30px;padding-bottom:65px;}
            .pc-2410019thmain .myred-line .redline-btn-wrap .list:first-child{margin-left:0;}
            .pc-2410019thmain .myred-line .redline-btn-wrap .list .info-txt{margin:0;position:absolute;bottom:0;left:0;width:100%;}
            .pc-2410019thmain .myred-line .redline-btn-wrap .list .info-txt span{display:block;font-size:18px;color:#666;line-height:1;text-align:left;}
            .pc-2410019thmain .myred-line .redline-btn-wrap .list .info-txt span + span{margin-top:10px;}
            .pc-2410019thmain .myred-line .redline-btn-wrap .list .numb{display:flex;align-items:center;justify-content:center;width:100%;font-size:30px;font-weight:700;line-height:3.7rem;}
            .pc-2410019thmain .myred-line .redline-btn-wrap .list .numb:before{display:inline-block;content:'';width:31px;height:37px;margin-right:10px;background:url('//cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-ico-line.png') no-repeat center;background-size:31px auto;}
            .pc-2410019thmain .myred-line .redline-btn-wrap .list .img-coupon{display:inline-block;width:100%;margin-top:20px;}
            .pc-2410019thmain .myred-line .redline-btn-wrap .list .btn-exchange{display:inline-block;width:100%;height:70px;margin-top:30px;padding:0 !important;background:#ff0100;color:#fff;}
            .pc-2410019thmain .myred-line .redline-btn-wrap .list .btn-exchange .v-btn__content{font-size:26px;}
            .pc-2410019thmain .gift-list-wrap{display:flex;align-items:center;justify-content:center;width:100%;margin:0 0 120px;}
            .pc-2410019thmain .gift-list-wrap .list{display:flex;flex-direction:column;align-items:center;justify-content:center;width:360px;margin-left:60px;}
            .pc-2410019thmain .gift-list-wrap .list:first-child{margin-left:0;}
            .pc-2410019thmain .gift-list-wrap .list .img-gift{width:100%;}
            .pc-2410019thmain .gift-list-wrap .list .txt-wrap{padding:30px 0;}
            .pc-2410019thmain .gift-list-wrap .list .tit{display:inline-block;width:100%;font-size:26px;font-weight:700;line-height:1;text-align:center;}
            .pc-2410019thmain .gift-list-wrap .list .txt{display:inline-block;width:100%;margin-top:8px;font-size:18px;line-height:1;text-align:center;}
            .pc-2410019thmain .gift-list-wrap .list .btn-gift{display:inline-block;width:100%;min-width:auto;height:70px;padding:0 !important;background:#ff0100;color:#fff;}
            .pc-2410019thmain .gift-list-wrap .list .btn-gift .v-btn__content{font-size:26px;}
            .pc-2410019thmain .card-wrap{position:relative;}
            .pc-2410019thmain .card-wrap .img-tag{position:absolute;top:30%;right:34.375%;width:4.6875%;height:10.3448%;z-index:2;}
            .pc-2410019thmain .card-wrap .img-card{position:absolute;top:32.5287%;left:35.9375%;width:28.125%;height:39.1954%;z-index:1;}
            .v-application .ui-popup.none-tit.pop-9th.popup-new-message-lists{height:800px;padding-bottom:0;position:relative;}
            .pop-9th.popup-new-message-lists .btn-back{position:absolute;top:20px;left:0;width:24px;height:24px;z-index:1;background:url('//cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-icon-arrow-r.jpg') no-repeat center;background-size:auto 22px;font-size:0;color:transparent;}
            .pop-9th.popup-new-message-lists .popup-body .inner{padding:0 16px;}
            .pop-9th.popup-new-message-lists .message-list-box{background-color:#fff;}
            .pop-9th.popup-new-message-lists .message-list-box .title-txt-wrap{display:flex;align-items:center;justify-content:flex-start;flex-direction:column;}
            .pop-9th.popup-new-message-lists .message-list-box .title-txt-wrap .tit{display:block;width:100%;font-size:28px;line-height:1;text-align:left;}
            .pop-9th.popup-new-message-lists .message-list-box .title-txt-wrap .txt{display:block;width:100%;margin-top:15px;font-size:18px;line-height:1;text-align:left;}
            .pop-9th.popup-new-message-lists .message-list-box .list-wrap{margin-top:40px;}
            .pop-9th.popup-new-message-lists .message-list-box .list-wrap .list{display:flex;align-items:center;padding:20px 0;cursor:pointer;}
            .pop-9th.popup-new-message-lists .message-list-box .list-wrap .list .img-wrap{display:inline-block;width:80px;height:80px;background:#f9f9f9 url('//cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-icon-user.png') no-repeat center;background-size:38px auto;border-radius:40px;position:relative;}
            .pop-9th.popup-new-message-lists .message-list-box .list-wrap .list .img-wrap.on:after{display:inline-block;content:'';width:14px;height:14px;position:absolute;bottom:5px;right:4px;z-index:1;background-color:#ff0000;border-radius:7px;}
            .pop-9th.popup-new-message-lists .message-list-box .list-wrap .list .text-wrap{display:flex;align-items:center;justify-content:flex-start;flex-direction:column;width:calc(100% - 230px);margin-left:20px;text-align:left;}
            .pop-9th.popup-new-message-lists .message-list-box .list-wrap .list .text-wrap .name{display:block;width:100%;font-size:26px;font-weight:700;line-height:1;text-align:left;}
            .pop-9th.popup-new-message-lists .message-list-box .list-wrap .list .text-wrap .text{display:block;width:100%;margin-top:10px;font-size:20px;line-height:1.5;text-align:left;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;word-break:break-all;}
            .pop-9th.popup-new-message-lists .message-list-box .list-wrap .list .time{min-width:130px;font-size:20px;color:#aaa;text-align:right;}
            .pop-9th.popup-new-message-lists .message-detail-box{width:100%;height:calc(100% - 60px);padding:0 30px 20px;position:absolute;top:60px;left:0;z-index:1;background:#fff;transform:translateX(100%);transition: all 0.2s ease-in-out;overflow-y:auto;}
            .pop-9th.popup-new-message-lists .message-detail-box::-webkit-scrollbar{width:10px;}
            .pop-9th.popup-new-message-lists .message-detail-box::-webkit-scrollbar-button{width:0;height:0;}
            .pop-9th.popup-new-message-lists .message-detail-box::-webkit-scrollbar-thumb{background-color: #000; background-clip: padding-box;border-left: 4px solid transparent;border-right: 4px solid transparent;}
            .pop-9th.popup-new-message-lists .message-detail-box::-webkit-scrollbar-track{background-color: transparent;}
            .pop-9th.popup-new-message-lists .message-detail-box.on{transform:translateX(0);}
            .pop-9th.popup-new-message-lists .message-detail-box .img-wrap{display:block;width:110px;height:110px;margin:0 auto;background:#f9f9f9 url('//cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-icon-user.png') no-repeat center;background-size:52px auto;border-radius:55px;position:relative;}
            .pop-9th.popup-new-message-lists .message-detail-box .img-wrap.on:after{display:inline-block;content:'';width:14px;height:14px;position:absolute;bottom:5px;right:4px;z-index:1;background-color:#ff0000;border-radius:7px;}
            .pop-9th.popup-new-message-lists .message-detail-box .text-wrap{display:flex;align-items:center;justify-content:flex-start;flex-direction:column;width:100%;text-align:left;}
            .pop-9th.popup-new-message-lists .message-detail-box .text-wrap .name{display:block;width:100%;margin-top:20px;font-size:26px;font-weight:700;line-height:1;text-align:center;}
            .pop-9th.popup-new-message-lists .message-detail-box .text-wrap .text{display:inline-block;width:100%;min-height:56px;margin-top:35px;padding:15px 30px;font-size:22px;line-height:1.5;text-align:left;color:#000;background-color:#f2f2f2;border-radius:28px;position:relative;}
            .pop-9th.popup-new-message-lists .message-detail-box .text-wrap .text:before{display:inline-block;content:'';width:14px;height:23px;position:absolute;left:-5px;bottom:-3px;background:url('//cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-textbox-tail-01.png') no-repeat center;background-size:14px auto;box-shadow:none;}
            .pop-9th.popup-new-message-lists .message-detail-box .time{min-width:100px;font-size:20px;color:#aaa;text-align:right;}
            .pc-2410019thmain .message-list-box .btn-wrap{display:flex;align-items:center;justify-content:flex-end;margin-top:20px;text-align:right;}
            .pc-2410019thmain .message-list-box .btn-wrap .button{display:flex;align-items:center;justify-content:flex-end;font-size:22px;font-weight:700;line-height:1;}
            .pc-2410019thmain .cont_area .cont-01 .event-wrap-02 .cmp-form-textareaBox{width:540px;margin:20px auto 0;}
            .pc-2410019thmain .cont_area .cont-01 .event-wrap-02 .cmp-form-textareaBox .v-input__slot{height:150px;padding:0 !important;}
            .pc-2410019thmain .cont_area .cont-01 .event-wrap-02 .cmp-form-textareaBox .v-input__slot textarea{padding:20px 25px !important;font-size:22px;line-height:1.5;color:#666 !important;}
            .pc-2410019thmain .cont_area .cont-01 .event-wrap-02 .cmp-form-textareaBox .v-label{padding:20px 25px !important;font-size:22px;line-height:1.5;color:#666 !important;}
            .pc-2410019thmain .cont_area .cont-01 .event-wrap-02 .cmp-form-textareaBox .v-btn{margin-top:20px;}
            .pc-2410019thmain .cont_area .cont-01 .event-wrap-03 .link-wrap{position:relative;}
            .pc-2410019thmain .cont_area .cont-01 .event-wrap-03 .link-wrap .link{display:inline-block;position:absolute;top:62.4%;left:35.9375%;width:28.125%;height:16%;margin:0;box-sizing:border-box;text-indent:-9999px;color:transparent !important;}

            .pc-2410019thmain .cont-01 .v-btn{width:100%;height:80px;background-color:#ff0000;}
            .pc-2410019thmain .cont-01 .v-btn .v-btn__content{font-size:26px;color:#fff;}
            .pc-2410019thmain .cont-01 .link-btn{display:flex;align-items:center;justify-content:center;width:100%;height:80px;background-color:#ff0000;font-size:26px;color:#fff !important;}
            .pc-2410019thmain .cont-01 .event-wrap-01 .message-box .logo-box{display:flex;align-items:center;width:100%;margin-top:60px;}
            .pc-2410019thmain .cont-01 .event-wrap-01 .message-box .logo-box .thumb-wrap{display:inline-block;width:80px;height:80px;border-radius:40px;background:#000 url('//cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-thumb-logo.jpg') no-repeat center;background-size:77px auto;position:relative;}
            .pc-2410019thmain .cont-01 .event-wrap-01 .message-box .logo-box .thumb-wrap:after{display:inline-block;content:'';width:14px;height:14px;background-color:#ff0000;border-radius:7px;position:absolute;bottom:3px;right:4px;z-index:1;}
            .pc-2410019thmain .cont-01 .event-wrap-01 .message-box .logo-box .txt-wrap{display:flex;align-items:center;justify-content:flex-start;flex-direction:column;width:calc(100% - 100px);margin-left:20px;}
            .pc-2410019thmain .cont-01 .event-wrap-01 .message-box .logo-box .txt-wrap .logo-tit{display:block;width:100%;font-size:25px;line-height:1;font-weight:700;text-align:left;}
            .pc-2410019thmain .cont-01 .event-wrap-01 .message-box .logo-box .txt-wrap .logo-txt.dot-layout{display:block;width:100%;margin-top:15px;font-size:25px;line-height:1;text-align:left;}
            .pc-2410019thmain .cont-01 .event-wrap-01 .message-box .logo-box .txt-wrap .logo-txt.dot-layout{display:flex;align-items:stretch;justify-content:flex-start;}
            .pc-2410019thmain .dot-wrap{display:flex;align-items:center;justify-content:space-between;;width:18px;margin-left:5px;}
            .pc-2410019thmain .dot-wrap:before{display:inline-block;content:'';width:4px;height:4px;border-radius:2px;background-color:#000;animation: bounce 1.5s 0s infinite;transform-origin: bottom;}
            .pc-2410019thmain .dot-wrap .dot{display:inline-block;width:4px;height:4px;border-radius:2px;background-color:#000;animation: bounce 1.5s 0.3s infinite;transform-origin: bottom;}
            .pc-2410019thmain .dot-wrap:after{display:inline-block;content:'';width:4px;height:4px;border-radius:2px;background-color:#000;animation: bounce 1.5s 0.6s infinite;transform-origin: bottom;}
            @keyframes bounce { 0%, 20%, 50%, 80%, 100% { transform: translateY(0); opacity: 1; } 40% { transform: translateY(-5px); opacity: 0.3; } 60% { transform: translateY(-2px); opacity: 0.7; } }
            .v-dialog:has(.pop-9th){border-top:none;}
            .v-application .ui-popup.none-tit.pop-9th{min-height:800px;overflow:hidden;}
            .v-application .ui-popup.none-tit.pop-9th .popup-header, .ui-popup.none-tit.pop-9th .popup-header{padding:30px 24px 30px;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .inner .img-title{display:flex;align-items:flex-start;justify-content:center;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .inner .message-lists{margin-top:50px;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .inner .message-lists .btn-round{width:100%;height:80px;margin:40px 0 20px;background-color:#ff0000;border-radius:40px;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .inner .message-lists .btn-round .v-btn__content{font-size:26px;color:#fff;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .text-box{display:inline-block;min-height:56px;padding:15px 20px;font-size:20px;line-height:1.3;color:#000;background-color:#f2f2f2;border-radius:28px;position:relative;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .inner .message-lists .first{opacity:0;transform:translateY(20px);transition:all 0.3s ease-in-out;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .inner .message-lists .second{opacity:0;transform:translateY(20px);transition:all 0.3s ease-in-out;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .inner .message-lists .second .my-text{word-break:break-all;opacity:0;transform:translateY(20px);transition:all 0.3s ease-in-out;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .inner .message-lists .third .list:nth-child(1){position:absolute;opacity:0;transform:translateY(20px);transition:all 0.3s ease-in-out;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .inner .message-lists .third .list:nth-child(2){position:absolute;opacity:0;transform:translateY(20px);transition:all 0.3s 1.5s ease-in-out;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .inner .message-lists .third .list{position:absolute;opacity:0;transform:translateY(20px);transition:all 0.3s ease-in-out;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .inner .message-lists .fourth{position:absolute;opacity:0;transform:translateY(20px);transition:all 0.3s ease-in-out;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .inner .message-lists .fifth{position:absolute;opacity:0;transform:translateY(20px);transition:all 0.3s ease-in-out;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .inner .message-lists .first.on{opacity:1;transform:translateY(0);}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .inner .message-lists .second.on{opacity:1;transform:translateY(0);}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .inner .message-lists .second.on .my-text.on{opacity:1;transform:translateY(0);}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .inner .message-lists .third.on .list:nth-child(1){position:static;opacity:1;transform:translateY(0);}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .inner .message-lists .third.on .list:nth-child(2){position:static;opacity:1;transform:translateY(0);}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .inner .message-lists .fourth.on{position:static;opacity:1;transform:translateY(0);}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .inner .message-lists .fifth.on{position:static;opacity:1;transform:translateY(0);}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .text-box.left{color:#000;background-color:#f2f2f2;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .text-box.right{color:#fff;background-color:#ff0000;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .text-box.left:before{display:inline-block;content:'';width:14px;height:23px;position:absolute;left:-5px;bottom:0;background:url('//cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-textbox-tail-01.png') no-repeat center;background-size:14px auto;box-shadow:none;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .text-box.right:after{display:inline-block;content:'';width:14px;height:23px;position:absolute;right:-7px;bottom:0;background:url('//cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-textbox-tail-02.png') no-repeat center;background-size:14px auto;box-shadow:none;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .text-box .bold{font-weight:700;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .text-box .coupon{margin:10px 0;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .message-box-wrap{text-align:right;opacity:0;transform:translateY(20px);transition:all 0.5s ease-in-out;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .message-input-wrap{padding-top:10px;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .message-input-wrap .btn-lists-wrap{display:flex;align-items:center;justify-content:flex-end;margin-bottom:20px;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .message-input-wrap .btn-lists-wrap > li{margin-left:10px;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .message-input-wrap .btn-lists-wrap > li:first-child{margin-left:0;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .message-input-wrap .input-box{display:flex;align-items:center;justify-content:flex-end;width:100%;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .message-input-wrap .input-box .btn-submit{width:90px;height:60px;font-size:20px;background-color:#ff0000;color:#fff;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .message-input-wrap .custom-box{font-size:20px;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .message-input-wrap .custom-box .v-input__control .v-input__slot{height:60px;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .message-input-wrap .custom-box .v-input__control .v-input__slot .v-label{padding:0 20px;font-size:20px;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .message-input-wrap .custom-box .v-input__control .v-input__slot input{font-size:20px;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .message-lists-wrap{padding-top:20px;}
            .v-application .ui-popup.none-tit.pop-9th .popup-body .message-lists-wrap > li{margin-top:20px;}
            .v-dialog:has(.main9th-coupon-pop){width:540px !important;border-top:none;}
            .main9th-coupon-pop{position:relative;}
            .main9th-coupon-pop .img{width:100%;}
            .main9th-coupon-pop.coupon-type-01 .btn-close, .main9th-coupon-pop.coupon-type-02 .btn-close{position:absolute;top:3.5%;right:4.382%;width:7.47%;height:5.88235%;z-index:1;margin:0;box-sizing:border-box;text-indent:-9999px;color:transparent !important;}
            .main9th-coupon-pop.coupon-type-01 .link, .main9th-coupon-pop.coupon-type-02 .link{position:absolute;bottom:6.5882%;left:32.83582%;width:32.83582%;height:7%;z-index:1;margin:0;box-sizing:border-box;text-indent:-9999px;color:transparent !important;}
            .main9th-coupon-pop.coupon-type-01 .coupon, .main9th-coupon-pop.coupon-type-02 .coupon{position:absolute;top:46.884%;left:13.8889%;width:72.2222%;height:34.124629%;z-index:1;margin:0;box-sizing:border-box;text-indent:-9999px;color:transparent !important;}
            .main9th-coupon-pop.coupon-type-02 .link{position:absolute;bottom:6.78925%;left:32.83582%;width:32.83582%;height:7%;z-index:1;margin:0;box-sizing:border-box;text-indent:-9999px;color:transparent !important;}
            /* .main9th-coupon-pop.coupon-type-02 .coupon-01{position:absolute;top:44.695898%;left:13.8889%;width:72.2222%;height:35.36%;z-index:1;margin:0;box-sizing:border-box;text-indent:-9999px;color:transparent !important;} */
            .main9th-coupon-pop.coupon-type-03 .btn-close{position:absolute;top:4.58%;right:4.582%;width:7.47%;height:11.63%;z-index:1;margin:0;box-sizing:border-box;text-indent:-9999px;color:transparent !important;}
            .v-application .ui-popup.none-tit.pop-9th.main9th-gift-pop{padding-bottom:0;}
            .v-application .ui-popup.none-tit.pop-9th.main9th-gift-pop .popup-body{padding:0;}
            .v-application .ui-popup.none-tit.pop-9th.main9th-gift-pop .popup-body .popup-body-in{width:100% !important;}
            .v-application .ui-popup.none-tit.pop-9th.main9th-redlineInfo-pop{padding-bottom:0;}
            .v-application .ui-popup.none-tit.pop-9th.main9th-redlineInfo-pop .popup-body{padding:0;}
            .v-application .ui-popup.none-tit.pop-9th.main9th-redlineInfo-pop .popup-body .popup-body-in{width:100% !important;}
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
    movUrl: 'https://img.thehandsome.com/md/publish/event/241001_9thmain/pc-mov.mp4',
    isVideoFile: false, // 서버 비디오 파일 유무 

    isLogin: true, // 로그인 상태값
    loginText : '로그인해 보세요!',
    isMessageCheck: false,
    isMessagePopup: false, // 메세지 확인하기 팝업 상태값
    isNewMessagePopup: false, // new 메세지 실시간 확인하기 팝업 상태값
    userName: '김한섬',
    userTextInput: null, // user textarea 에피소드 data
    popMessageText: '', // 팝업 메세지 창 input 값

    isPurchaseHistory: true, // 구매이력 상태값
    dateOfJoining: '2019년 4월 19일', // 가입일
    popMessageTextFirst: '',
    popMyMessageText: '',
    popMessageBtnsText: [],
    popBrandName : 'TIME',
    popItemName : 'SYSTEM 린넨 블렌드 투턱 와이드 팬츠',
    popMessageListsText: [],

    isAnimation01: false,
    isAnimation02: false,
    isAnimation03: false,
    isAnimation04: false,
    isAnimation05: false,
    isMyMessageText: false,

    firstTimer: null,
    secondTimer: null,
    thirdTimer: null,
    fourthTimer: null,
    fifthTimer: null,

    tabsList: [ // tabs data
      {
        images : ['pc-tab-01-off.jpg', 'pc-tab-01-on.jpg'],
        text : '인연 메시지 (최대 10% + 3만원)'
      },
      {
        images : ['pc-tab-02-off.jpg', 'pc-tab-02-on.jpg'],
        text : '붉은 실 모으면 (최대 10만원 혜택)'
      },
      {
        images : ['pc-tab-03-off.jpg', 'pc-tab-03-on.jpg'],
        text : '옷깃만 스쳐도 (구매 사은품 4종)'
      }
    ],

    isMessageCouponPopup: false, // 메세지 입력 보상 팝업 상태값
    isMessageCouponType: null, // 메세지 입력 보상 쿠폰 type (1 ~ 3)
    isRedLineCouponPopup: false, // 붉은실 보상 팝업 상태값
    redLineCouponType: null, // 붉은실 보상 쿠폰 type (0, 3, 5, 8, 10)
    redLineCouponIndex: null, // 붉은실 보상 쿠폰 버튼 선택 순서 (0 ~ 3)
    isRedLineInfoPopup: false, // 붉은실 부족 팝업 상태값
    isGiftPopup: false, // gift 상세보기 popup 상태값
    giftListIndex: null, // gift 리스트 index 값
    isWeekRedLineInfoPopup:false, // 주차별 붉은실 미션 안내 팝업
    weekInfoNumb: null, // 주차별 붉은실 미션 안내 팝업 순서

    isMyEpisodeText: false, // 나의 에피소드 입력 유무 값
    myMessageLists: [], // 메인 new 메세지
    myNewMessagePopupLists: [], // 팝업 new 메세지
    myNewMessageSelected: {}, // 팝업 리스트 선택 data
    isMyNewMessageSelected: false, // 팝업 리스트 선택 유무 값
    messageListsData: [
      {
        imageUrl: '',
        userName: '김한섬섬섬',
        userText: '나의 인연에 관한 에피소드를 남겨서 남겨서 남겨서~~',
        minute: '23시간 59'
      },
      {
        imageUrl: '',
        userName: '김한섬-1',
        userText: '나의 인연에 관한 에피소드를 남겨서 남겨서 남겨서~~',
        minute: '999'
      },
      {
        imageUrl: 'https://cdn-img.thehandsome.com/attachment/display/2024/08/12/111f8473-e867-4c97-97ce-56e135024ef5.jpeg',
        userName: '김한섬-2',
        userText: '나의 인연에 관한 에피소드를 남겨서 남겨서 남겨서~~나의 인연에 관한 에피소드를 남겨서 남겨서 남겨서~~나의 인연에 관한 에피소드를 남겨서 남겨서 남겨서~~나의 인연에 관한 에피소드를 남겨서 남겨서 남겨서~~나의 인연에 관한 에피소드를 남겨서 남겨서 남겨서~~나의 인연에 관한 에피소드를 남겨서 남겨서 남겨서~~',
        minute: '999'
      },
      {
        imageUrl: '',
        userName: '김한섬-3',
        userText: '나의 인연에 관한 에피소드를 남겨서 남겨서 남겨서~~',
        minute: '999'
      },
      {
        imageUrl: 'https://cdn-img.thehandsome.com/attachment/display/2024/08/12/111f8473-e867-4c97-97ce-56e135024ef5.jpeg',
        userName: '김한섬-4',
        userText: '나의 인연에 관한 에피소드를 남겨서 남겨서 남겨서~~',
        minute: '999'
      },
      {
        imageUrl: 'https://cdn-img.thehandsome.com/attachment/display/2024/08/12/111f8473-e867-4c97-97ce-56e135024ef5.jpeg',
        userName: '김한섬-5',
        userText: '나의 인연에 관한 에피소드를 남겨서 남겨서 남겨서~~',
        minute: '999'
      },
      {
        imageUrl: 'https://cdn-img.thehandsome.com/attachment/display/2024/08/12/111f8473-e867-4c97-97ce-56e135024ef5.jpeg',
        userName: '김한섬-6',
        userText: '나의 인연에 관한 에피소드를 남겨서 남겨서 남겨서~~',
        minute: '999'
      },
    ],

    // tab 2
    weekNumber: 2,
    isMyRedLineView: false, // 나의 붉은실 확인하기 팝업 상태값
    getRedItemsData: [
      {
        itemName: '마이하트 (상품)',
        itemNumb: '3/3'
      },
      {
        itemName: '스타일라이브 팔로우',
        itemNumb: '0/5'
      },
      {
        itemName: '이벤트 공유',
        itemNumb: '3'
      },
    ],
    exchangeRedItemsData: [
      {
        itemName: '정상 15%',
        itemDate: '10/13'
      },
      {
        itemName: '전상품 10%',
        itemDate: '10/13'
      },
    ],
    exchangeCouponData: [
      {
        itemNumb: '3',
        itemImgUrl: 'https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-cp-cont-10-new.jpg',
        itemText: '정상 10%',
        isCouponExchange: false
      },
      {
        itemNumb: '5',
        itemImgUrl: 'https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-cp-cont-10-all.jpg',
        itemText: '전 상품 10%',
        isCouponExchange: false
      },
      {
        itemNumb: '10',
        itemImgUrl: 'https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-cp-cont-15.jpg',
        itemText: '정상 15%',
        isCouponExchange: false
      },
    ],
    giftItemData: [
      {
        itemImgUrl: 'https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-gift-01.jpg',
        itemTit: '모바일 스트랩',
        itemTxt: '60만원 이상'
      },
      {
        itemImgUrl: 'https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-gift-02.jpg',
        itemTit: '마와 아우터 세트',
        itemTxt: '100만원 이상'
      },
      {
        itemImgUrl: 'https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-gift-03.jpg',
        itemTit: '마와 풀 착장 세트',
        itemTxt: '200만원 이상'
      },
      // 기획변경 삭제 처리
      // {
      //   itemImgUrl: 'https://cdn-img.thehandsome.com/md/publish/event/241001_9thmain/pc-gift-04.gif',
      //   itemTit: '인형 키링 세트',
      //   itemTxt: 'TOP 100'
      // },
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
  watch: {

  },
  mounted() {
    // 메인 화면 new 메세지 리스트
    this.myMessageLists = [...this.messageListsData]
    
    // const videoUrl = this.movUrl
    // this.checkVideoUrl(videoUrl)

    this.evScroll()
    this.evTabs()
  },
  methods: {
    async checkVideoUrl (url) {
      try {
        const response = await fetch(url, { method: 'HEAD' })
        if (response.ok) {
          console.log('동영상 파일이 존재합니다.')
          this.isVideoFile = true
        } else {
          console.log('동영상 파일이 존재하지 않습니다.')
          this.isVideoFile = false
        }
      } catch (error) {
        console.error('에러 발생:', error)
        this.isVideoFile = false
      }
    },

    evScroll () {
      window.addEventListener('scroll', function() {
        const aniTitle = document.querySelector('.event-wrap-01 .title')
        const aniMessageBox = document.querySelector('.event-wrap-01 .message-box')
        const windowHeight = window.innerHeight
        const classAddPoint = windowHeight / 2 + 200
    
        // 특정 스크롤 위치에 도달하면 클래스 추가
        if (classAddPoint >= aniTitle.getBoundingClientRect().top) {
          aniTitle.classList.add('active')
        } else {
          aniTitle.classList.remove('active')
        }

        // 특정 스크롤 위치에 도달하면 클래스 추가
        if (classAddPoint >= aniMessageBox.getBoundingClientRect().top) {
          aniMessageBox.classList.add('active')
        } else {
          aniMessageBox.classList.remove('active')
        }
      })
    },
    evTabs () {
      // S : tab script
      const tabList = document.querySelectorAll('.tab_menu .list li')
      const contents = document.querySelectorAll('.tab_menu .cont_area .cont')
      let activeCont = 'tab01'

      document.querySelector(`[name=${activeCont}-cont]`).style.display = 'block'
      for(let i = 0; i < tabList.length; i++){
        tabList[i].querySelector('.btn').addEventListener('click', function(e){
          e.preventDefault()
          for(let j = 0; j < tabList.length; j++){
            tabList[j].classList.remove('is_on')
            contents[j].style.display = 'none'
          }

          this.parentNode.classList.add('is_on')

          activeCont = this.getAttribute('name')
          document.querySelector(`[name=${activeCont}-cont]`).style.display = 'block'
        })
      }
      // E : tab script 
    },

    messageCheckShow () {
      // 메세지 확인하기 popup open
      this.isMessagePopup = true

      // isPurchaseHistory : 구매이력 유무
      if(this.isPurchaseHistory) {
        // 구매이력 있음
        this.popMessageTextFirst = `우리 처음 인연을 맺은 <span class="bold">${this.dateOfJoining}</span>을 기억하나요?`
        this.popMessageBtnsText = ['벌써 그렇게 됐구나', '기억나요']
        this.popMessageListsText = [`누군가의 말처럼 옷깃만 스쳐도 인연이라면,<br />스치는 정도가 아니라 한 올 한 올<br />정성스럽게 엮인 우리의 인연은 운명 같아요.`, `가장 애정 해주신 <span class="bold">${this.popBrandName}</span>부터 인연을 기다리는<br /><span class="bold">${this.popItemName}</span>까지.<br />인연 맺은 그날부터 언제나 처음처럼 두근거리고<br />함께 하면 편안하게 해드릴게요.`]
      }
      else {
        // 구매이력 없음
        this.popMessageTextFirst = `세상에는 흩어진 인연들이 붉은 실로 엮여 있다 하죠…<br />두근거리는 우리의 새로운 인연<br />한 올 한 올 정성스럽게 엮어 보내드리고 싶어요.<br />인연 맺은 그날부터 언제나 처음처럼 두근거리고<br />함께 하면 편안하게 해드릴게요.`
        this.popMessageBtnsText = ['그래', '함께하자', '고마워']
        this.popMessageListsText = [`새로운 인연을 위한 선물이에요.`]
      }

      this.setAnimation()
    },

    showMyNewMessage (itemData) {
      // new 메세지 실시간 팝업 선택 리스트 전체 보기
      this.isMyNewMessageSelected = false

      this.myNewMessageSelected = {...itemData}

      // 팝업 new 메세지 리스트 선택 유무
      this.isMyNewMessageSelected = true
    },
    messageSelectText(text) {
      // popup 메세지 선택 버튼
      this.popMessageText = text

      // input box 포커스
      this.$refs.myTextField.focus()
    },
    messageUptext(text) {
      // popup 메세지 input enter
      this.popMyMessageText = this.popMessageText
      
      if(this.popMyMessageText !== '') {
        this.$nextTick(() => {
          this.isMyMessageText = true
          this.thirdTimer = setTimeout(() => {
            // 메세지 팝업 세번째 - 문장리스트 
            this.isAnimation03 = true
            
            // this.$nextTick(() => {
            //   this.scrollToBottom()
            // }, 1500)

            // 구매이력 : isPurchaseHistory >> 있음 : true, 없음 : false
            // 텍스트 리스트 갯수가 달라 예외처리
            // if(this.isPurchaseHistory) {
              this.fourthTimer = setTimeout(() => {
                // 메세지 팝업 네번째 - 쿠폰
                this.isAnimation04 = true
    
                this.$nextTick(() => {
                  this.scrollToBottom()
                }, 500)
                this.fourthTimer = setTimeout(() => {
                  // 메세지 팝업 다섯번째 - 버튼
                  this.isAnimation05 = true
                  this.$nextTick(() => {
                    this.scrollToBottom()
                  }, 500)
                }, 500)
              }, this.isPurchaseHistory ? 2300 : 1300)
            // }
          }, 1200)
        }, 500)
      }
    },
    messageCheckOk() {
      this.isMessagePopup = false
      this.isMessageCheck = true // 메세지 확인하기 버튼 disabled

      this.clearAllInit()
    },
    clearAllInit() {
      const me = this
      // 모든 타이머를 초기화하는 함수
      if (me.firstTimer) clearTimeout(me.firstTimer)
      if (me.secondTimer) clearTimeout(me.secondTimer)
      if (me.thirdTimer) clearTimeout(me.thirdTimer)
      if (me.fourthTimer) clearTimeout(me.fourthTimer)
      if (me.fifthTimer) clearTimeout(me.fifthTimer)

      // 타이머 ID를 초기화
      me.firstTimer = null
      me.secondTimer = null
      me.thirdTimer = null
      me.fourthTimer = null
      me.fifthTimer = null

      me.isAnimation01 = false
      me.isAnimation02 = false
      me.isAnimation03 = false
      me.isAnimation04 = false
      me.isAnimation05 = false
      me.isMyMessageText = false

      me.popMyMessageText = ''
      me.popMessageText = ''

      document.querySelector('.pop-9th.popup-message-lists .popup-body').scrollTo(0, 0)
    },
    setAnimation() {
      const me = this
      me.firstTimer = setTimeout(() => {
        // 메세지 팝업 첫번째 문장
        me.isAnimation01 = true
        me.secondTimer = setTimeout(() => {
          // 메세지 팝업 두번째 문장 자동완성 버튼 및 input
          me.isAnimation02 = true

        }, 1200)
      }, 500)
    },
    scrollToBottom() {
      const dialogContent = this.$refs.messagePop
      const popBody = document.querySelector('.pop-9th.popup-message-lists .popup-body')
      if (dialogContent) {
        // popBody.scrollTop = popBody.scrollHeight
        popBody.scrollTo({
          top: 99999,
          behavior: 'smooth'
        })
      }
    },


    redLineExchangeCoupon (index) {
      // 붉은 실 교환 보상 팝업

      // 퍼블 화면 확인용 코드입니다.
      this.redLineCouponType = Math.floor(Math.random() * 2)

      this.redLineCouponIndex = index // 버튼 순서 index 전달

      if (this.redLineCouponType === 0) {
        // 붉은실 부족 팝업
        this.isRedLineInfoPopup = true
        // 쿠폰 발급 팝업
        this.isRedLineCouponPopup = false
      }
      else {
        // 붉은실 부족 팝업
        this.isRedLineInfoPopup = false
        // 쿠폰 발급 팝업
        this.isRedLineCouponPopup = true
      }
    },
    giftPopView (index) {
      // gift 상세보기 팝업
      this.giftListIndex = null

      this.$nextTick(() => {
        this.isGiftPopup = true
        this.giftListIndex = index + 1
      })
    },
    closeGiftPopup () {
      // gift 상세보기 팝업 닫기

      this.isGiftPopup = false
    },
    newEpisodeEmit () {
      if(this.userTextInput !== null && this.userTextInput.trim() !== '') {
        // 나의 에피소드 입력 textarea
        this.myMessageLists.unshift({
          imageUrl: 'https://cdn-img.thehandsome.com/attachment/display/20210415/8803273703428_20210415_5092180307573322_ko.jpg',
          userName: '사용자입니다.',
          userText: this.userTextInput,
          minute: '0'
        })
  
        // 나의 에피소드 입력 유무 값 & 등록 버튼 disabled
        this.isMyEpisodeText = true
  
        // textarea 값 초기화
        this.userTextInput = null
  
        // 쿠폰 랜덤 발급
        // 퍼블 화면 확인용 코드입니다.
        this.isMessageCouponPopup = true
          
        this.isMessageCouponType = Math.floor(Math.random() * 3) + 1
      }
    },
    closeMessagePopup () {
      // 메세지 확인하기 popup close
      this.isMessagePopup = false
      
      this.clearAllInit()
    },
    closeCouponPopup () {
      // 쿠폰 관련 팝업 닫기

      this.isMessageCouponPopup = false // 메세지 입력 보상 팝업 상태값
      this.isRedLineCouponPopup = false // 붉은실 보상 팝업 상태값
      this.isRedLineInfoPopup = false // 붉은실 부족 팝업 상태값
    },
    openNewMessagePopup () {
      // new 메세지 실시간 확인하기 popup open

      // 팝업용 new 메세지 리스트
      this.myNewMessagePopupLists = [...this.messageListsData]

      this.isNewMessagePopup = true

    },
    closeNewMessagePopup () {
      // new 메세지 실시간 확인하기 popup close
      this.isNewMessagePopup = false

      // 팝업 new 메세지 리스트 초기화
      this.myNewMessageSelected = {}

      // 팝업 new 메세지 리스트 선택 유무
      this.isMyNewMessageSelected = false
    },
    openMyRedLineView () {
      // 나의 붉은실 확인하기

      this.isMyRedLineView = true
    },
    
    msInfoPop (index) {
      // 주차별 붉은실 미션 안내 팝업 열기
      this.weekInfoNumb = null

      this.isWeekRedLineInfoPopup = true
      this.weekInfoNumb = index
    },
    closeWeekRedLineInfoPopup () {
      // 주차별 붉은실 미션 안내 팝업 닫기
      this.isWeekRedLineInfoPopup = false
    }
  },
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/event.scss';
</style>
