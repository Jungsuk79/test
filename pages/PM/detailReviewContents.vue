<template>
  <div class="prd-detail-review" :class="pageClass">
    <h2 class="ir">상품 리뷰</h2>
    <!-- 리뷰 있을 때 -->
    <template v-if="reviewList.length > 0">
      <!-- 평균 평가 정보 -->
       <!-- [무형상품] 클래스 추가 -->
       <div class="rating-score-top" :class="{'fullWidth' : isItgb}">
         <div class="rating-score-left">
          <!-- div 태그 추가해서 내용 분리-->
          <div>
            <div class="score-left-txt">
              <h3 class="tit">상품만족도</h3>
              <p class="txt">구매하신 분들의 상품에 대한 평점입니다.</p>
            </div>
            <div class="rating-score-average">
              <v-rating :value="ratingAverageInfo.score | parseFloat" readonly class="cmp-rating rating-large">
                <v-icon><i class="icon star">별점</i></v-icon>
              </v-rating>
              <p class="score-txt"><strong>{{ratingAverageInfo.score | parseFloat}}</strong><span>/</span><em>5</em></p>
            </div>
          </div>
          <div class="review-btn-cnt">
            <v-btn outlined color="primary" height="46" width="160" class="gray-outlined">상품평 쓰기</v-btn>
          </div>
        </div>
        <div v-if="!isItgb" class="rating-score-right">
          <ul class="rating-item-average">
            <li v-for="(item,index) in ratingAverageInfo.item" :key="index" class="item-cnt">
              <span class="tit">{{item.text}}</span>
              <span class="txt">{{item.name}}</span>
              <!-- <span class="per">({{item.percent}}%)</span> --><!-- 221129 상품평 항목 : 삭제 -->
              <ul>
                <li v-for="(item2,index2) in ratingDetailInfo[index]" :key="index2" class="item-cnt" :class="{'active' : item2.activeRating === true }">
                  <span class="txt">{{item2.text}}</span>
                  <span class="bar"><span class="fill" :style="'width:'+item2.percent+'%'"></span></span>
                  <span class="per">{{item2.percent}}%</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <!-- //평균 평가 정보 -->

      <!-- [퍼블추가]24.07.30 상품평 고도화 -->
      <div v-if="!isItgb" class="ai-review-box">
        <div class="title">
          <img src="/images/product/ai-icon.svg" alt="AI review icon" class="title-icon" />
          AI 리뷰
          <!-- beta icon 제거 -->
          <!-- <img src="/images/product/ai-beta.svg" alt="BETA" class="beta-icon" /> -->
        </div>
        <!-- [퍼블수정]24.08.14 문장 케이스 추가 -->
        <ul v-if="aiListType" class="ai-review-list">
          <li><span>촉감이 부들부들</span></li>
          <li><span>소재가 좋아요</span></li>
          <li><span>좋은가격</span></li>
          <li><span>가볍게</span></li>
          <li><span>부드러워</span></li>
          <li><span>시원함</span></li>
        </ul>
        <div v-else class="ai-review" :class="{'show':more_view}">
          <p v-html="reviewTxt" class="review" :class="{'eclips':btnShow}"></p>
          <button v-if="btnShow" class="more cmp-font fnt-16 button c-gray" @click="more_view=!more_view">
            <template v-if="more_view">접기</template>
            <template v-else>더보기</template>
            <i class="cmp-icon cmp-icon-12" :class="(more_view===false ? 'i-down' : 'i-up')">열기/닫기</i>
          </button>
        </div>
        <!-- [퍼블수정]24.08.14 문장 케이스 추가 -->
      </div>
      <!-- 베스트/ 체험단 리뷰 탭 추가 -->
      <div v-if="!isItgb" class="cmp-tabs tabs-contents mt-40 mb-20 pb-12">
        <v-tabs v-model="bestexperientab" fixed-tabs>
          <v-tab>베스트 리뷰</v-tab>
          <v-tab>체험단 리뷰</v-tab>
        </v-tabs>
      </div>
      <!-- 베스트 리뷰/ 체험단 리뷰 둘중 하나가 없을 시 맞춰서 노출
      <div class="prd-tit-box"><h3 class="tit">베스트 리뷰</h3></div>
      <div class="prd-tit-box"><h3 class="tit">체험단 리뷰</h3></div>
       -->
     
      <div v-if="!isItgb" class="tab-content review-tab-cover">
        <v-tabs-items v-model="bestexperientab" touchless>
          <v-tab-item :transition="false">
            <Swiper class="reviewSwipe1"
              :options="{
                slidesPerView: 'auto',
                spaceBetween: 8,
                observer: true,
                observeParents: true,
              }"
            >
              <SwiperSlide v-for="(item, index) in reviewList2" :key="index" class="prd-review-item">
                <div class="info-box">
                  <div class="info-cnt" :class="{full : item.image_url===null && item.video_url===null}">
                    <v-layout align-center>
                      <div role="button" tabindex="0" class="review-profile-btn">
                        <div v-background-image="{url:item.profile_image || '/images/common/profile-no-48.svg'}" class="profile-img"></div>
                      </div>
                      <div class="user-data">
                        <v-rating :value="item.rating_score" readonly class="cmp-rating rating-default">
                          <v-icon><i class="icon star">별점</i></v-icon>
                        </v-rating>
                        <div class="review-spec">
                          <span class="id">{{item.id}}</span>
                          <span class="date">{{item.date}}</span>
                        </div>
                      </div>
                    </v-layout>
                    <p class="review" v-html="item.review"></p>
                  </div>
                  <div v-if="(item.video_url || item.image_url) && (item.image_length >= 1)" role="button" tabindex="0" class="review-thumbnail-btn" @click="reviewDetailOpen">
                    <div v-if="item.video_url" class="video-cnt">
                      <VideoPlayer :path="item.video_url" :poster="item.image_url[0]" :mute="true"></VideoPlayer>
                    </div>
                    <v-img v-if="item.video_url===null && item.image_url[0]" :src="item.image_url[0]" alt="리뷰 썸네일" />
                    
                    <div v-if="item.video_url" class="play-ico-cnt">
                      <i v-cmp-icon="{name:'play',invert:1}" ></i>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </v-tab-item>
          <v-tab-item :transition="false">
            <Swiper class="reviewSwipe2"
              :options="{
                slidesPerView: 'auto',
                spaceBetween: 8,
                observer: true,
                observeParents: true,
              }"
            >
              <SwiperSlide v-for="(item, index) in reviewList3" :key="index" class="prd-review-item">
                <div class="info-box">
                  <div class="info-cnt" :class="{full : item.image_url===null && item.video_url===null}">
                    <v-layout align-center>
                      <div role="button" tabindex="0" class="review-profile-btn">
                        <div v-background-image="{url:item.profile_image || '/images/common/profile-no-48.svg'}" class="profile-img"></div>
                      </div>
                      <div class="user-data">
                        <v-rating :value="item.rating_score" readonly class="cmp-rating rating-default">
                          <v-icon><i class="icon star">별점</i></v-icon>
                        </v-rating>
                        <div class="review-spec">
                          <span class="id">{{item.id}}</span>
                          <span class="date">{{item.date}}</span>
                        </div>
                      </div>
                    </v-layout>
                    <p class="review" v-html="item.review"></p>
                  </div>
                  <div v-if="(item.video_url || item.image_url) && (item.image_length >= 1)" role="button" tabindex="0" class="review-thumbnail-btn" @click="reviewDetailOpen">
                    <div v-if="item.video_url" class="video-cnt">
                      <VideoPlayer :path="item.video_url" :poster="item.image_url[0]" :mute="true"></VideoPlayer>
                    </div>
                    <v-img v-if="item.video_url===null && item.image_url[0]" :src="item.image_url[0]" alt="리뷰 썸네일" />
                    
                    <div v-if="item.video_url" class="play-ico-cnt">
                      <i v-cmp-icon="{name:'play',invert:1}" ></i>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </v-tab-item>
        </v-tabs-items>
      </div>
      <!-- // 베스트/ 체험단 리뷰 탭 추가 -->
      <!-- //[퍼블추가]24.07.30 상품평 고도화 -->
      <!-- 최근 리뷰 썸네일 리스트 --><!-- [퍼블수정]23.02.03 -->
      <ul class="prd-recent-review">
        <template v-for="(item, index) in recentReviewList">
          <li :key="index"  @click="reviewDetailOpen" v-if="index < 7">
            <!-- [퍼블추가]24.07.30 상품평 고도화 -->
            <div v-if="index < 3 && !isItgb" class="cmp-labels">
              <span class="label black c-white">BEST</span>
            </div>
            <div class="cnt">
              <div role="button" tabindex="0" class="review-thumbnail-btn">
                <div v-if="item.video_url" class="video-cnt">
                  <VideoPlayer :path="item.video_url" :poster="item.image_url" :mute="true"></VideoPlayer>
                </div>
                <v-img v-else :src="item.image_url" alt="리뷰 썸네일" />
                <div v-if="item.video_url" class="play-ico-cnt">
                  <i v-cmp-icon="{name:'play',invert:1}" ></i>
                </div>
                <div v-if="item.image_length > 1" class="size">{{item.image_length}}</div>
              </div>
            </div>
          </li>
        </template>
        <li v-if="recentReviewList.length > 0" class="more">
            <div class="cnt">
              <button class="more-btn" @click="reviewAllOpen">
                <span v-cmp-icon="{size : 24, name : 'add', invert : 1}"></span>
                더보기
              </button>
            </div>
        </li>
      </ul>
      <!-- //최근 리뷰 썸네일 리스트 -->
      <!-- [퍼블추가]24.07.30 상품평 고도화 -->
      <!-- 리뷰 정렬/필터 -->
      <div class="filter-btn-cover">
        <div class="review-sort-box" >
          <v-btn-toggle v-model="reviewFilter" tile color="primary" group class="cmp-toggleBtn toggleBtn-text">
            <v-btn text height="auto" class="cmp-font fnt-14">전체</v-btn>
            <v-btn text height="auto" class="cmp-font fnt-14">포토/동영상 리뷰 34</v-btn>
            <v-btn text height="auto" class="cmp-font fnt-14">일반리뷰 69</v-btn>
          </v-btn-toggle>
          <CommonSelectSortBox id="sort1" label-class="cmp-font fnt-14" icon-class="cmp-icon-12">
            <template #optionList>
                <option value="option1">최신순</option>
                <option value="option2">추천순</option>
            </template>
          </CommonSelectSortBox>
        </div>
        <!-- [무형상품] 제외 항목 -->
        <v-layout v-if="!isItgb" row align-center class="mt-14 mb-20 reviewOption-cover">
          <p class="cmp-font fnt-16 gray-color mr-34">43개</p>
          <v-btn @click="reviewListOption" small outlined color="primary" class="gray-outlined color-size-filterbtn">컬러/사이즈<i class="cmp-icon cmp-icon-12" :class="(reviewOptionPopup===false ? 'i-down' : 'i-up')"></i></v-btn>
          <!-- 필터 팝업 -->
          <div v-if="reviewOptionPopup" class="reviewOption-popup">
            <div class="cate-filter-reset"><button @click="resetOptionFilter">초기화</button></div>
            <div class="option-cover" v-for="item, idx in optionList" :key="idx" >
              <h2 v-if="item.type === 'color'" class="pop-tit">{{item.label}}</h2>
              <ul v-if="item.type === 'color'" class="color-list">
                <li v-for="(d1, idx1) in item.list" :key="idx1" class="depth1" :class="['color-' + d1.value]">
                  <v-checkbox 
                    :id="d1.value" 
                    :value="d1.value" 
                    v-model="selectedColors"
                    class="cmp-form-checkbox chip" :style="{'background-image':'url('+d1.color_image+')','background-color' : d1.style}"
                  ></v-checkbox>
                </li>
              </ul>
              <h2 v-if="item.type === 'size'" class="pop-tit">{{item.label}}</h2>
              <ul v-if="item.type === 'size'" class="size-list">
                <li v-for="(d2, idx2) in item.list" :key="idx2" class="depth1">
                  <v-checkbox
                  :id="d2.label" 
                  :value="d2.label" 
                  v-model="selectedSizes"
                  class="cmp-form-checkbox sizelabel">
                    <template #label>{{d2.label}}</template>
                  </v-checkbox>
                </li>
              </ul>
            </div>
            <div class="btn-cover">
              <v-btn @click="changeCateShow" large color="primary">23개의 상품평 보기</v-btn>
            </div>
          </div>
          <!-- // 필터 팝업 -->
        </v-layout>
        <!-- 필터 노출 -->
        <div v-if="cateShow && !isItgb" class="selected-filter-list">
          <ul>
            <li>
              초기화
              <button @click="resetFilter"><span class="invisible">초기화</span></button>
            </li>
            <li v-for="item, idx in cateOption" :key="idx">
              <span v-if="item.style" :style="{background:item.style}" :class="{'border':item.value==='WHITE'}" class="colorchip"></span>
              <span v-if="item.style">{{item.value}}</span>
              <span>{{item.label}}</span>
              <button @click="deleteFilter(idx)"><span class="invisible">삭제</span></button>
            </li>
          </ul>
        </div>
        <!-- //필터 노출 -->
      </div>
      <!-- //리뷰 정렬/필터 -->
      <!-- //[퍼블추가]24.07.30 상품평 고도화 -->

      <!-- 리뷰 리스트 -->
      <div class="prd-review-list" :class="{'pt-33' : isItgb}">
        <!-- [퍼블수정]24.10.28 상품평 3차 체험단 리뷰 케이스 추가 -->
        <div v-for="(item,index) in reviewList" :key="index" role="button" class="prd-review-item" @click="reviewToggle">
          <div class="info-box">
            <div v-if="(item.video_url || item.image_url) && (item.image_length >= 1)" role="button" tabindex="0" class="review-thumbnail-btn" @click="reviewDetailOpen">
              <div v-if="item.video_url" class="video-cnt">
                <VideoPlayer :path="item.video_url" :poster="item.image_url[0]" :mute="true"></VideoPlayer>
              </div>
              <v-img v-if="item.video_url===null && item.image_url[0]" :src="item.image_url[0]" alt="리뷰 썸네일" />
              
              <div v-if="item.video_url" class="play-ico-cnt">
                <i v-cmp-icon="{name:'play',invert:1}" ></i>
              </div>
              <div v-if="item.image_length > 1" class="size">{{item.image_length}}</div>
            </div>

            <div class="info-cnt" :class="{full : item.image_url===null && item.video_url===null}">
              <div class="cnt-box0"><!-- 221024 상품평 품번 : <div class="cnt-box0"> 추가 --->
                <v-rating :value="item.rating_score" readonly class="cmp-rating rating-default">
                  <v-icon><i class="icon star">별점</i></v-icon>
                </v-rating>
                <!-- 2022-09-15-prd 상품평 정보 추가 -->
                <div v-if="item.prd_name" class="info-txt0">
                  <span>{{item.prd_name}}</span>
                </div>
                <!--// 2022-09-15-prd 상품평 정보 추가 -->

                <!-- [240111] 직원리뷰 라벨 추가 -->
                <!-- [퍼블추가]24.07.30 상품평 고도화 -->
                <v-layout v-if="!isItgb" align-center>
                  <div v-if="index === 0" class="txt-label best">
                    <span class="txt">BEST</span>
                  </div>
                  <div v-if="index === 0" class="txt-label">
                    <span class="txt">직원리뷰</span>
                  </div>
                  <div v-if="index === 1" class="txt-label">
                    <span class="txt">체험단 리뷰</span>
                  </div>
                </v-layout>
                <!-- //[퍼블추가]24.07.30 상품평 고도화 -->
                <!-- // [240111] 직원리뷰 라벨 추가 -->
              </div>
              <div class="cnt-box1"><!-- 221024 상품평 품번 : <div class="cnt-box1"> 추가 --->
                <div class="info-txt0">
                  <span>{{item.id}}</span>
                  <span>{{item.level}}</span>
                </div>
                <div class="date">{{item.date}}</div>
                <!-- [퍼블수정]23.02.22 차단 삭제 -->
                <button class="info-txt1">신고</button>
                <button class="review-like-btn" :class="{on:item.like_checked}" @click="reviewLike($event, index)">
                  <i class="cmp-icon icon-before" :class="[{'i-recommendon':item.like_checked},{'i-recommendoff':!item.like_checked}]">추천</i>
                  <span class="count">
                    <template v-if="item.like_count > 99">99+</template>
                    <template v-else>{{item.like_count}}</template>
                  </span>
                </button>
              </div>
              <!-- 2022-09-15-prd 상품평 정보 추가 -->
              <div v-if="!isItgb" class="review-spec">
                <!-- <nuxt-link v-if="item.prd_number" :to="item.prd_number.link" class="">{{item.prd_number.num}}</nuxt-link> -->
                <!-- [퍼블수정] 상춤평 유저 정보 수정 -->

                <p v-if="index === 0">
                  <template v-for="(item2, index2) in item.info">
                    <span v-if="index2 === 0" :key="`wrap-${index2}`" class="link-wrap">
                      <i class="cmp-icon-etc cmp-icon-12 i-link">링크</i>
                      <a href="#n">
                        <span>{{ item.prd_number.num }}</span>
                        <span>{{ item2 }}</span>
                      </a>
                    </span>
                    <span v-else :key="`span-${index2}`">{{ item2 }}</span>
                  </template>
                </p>
                
                 <!-- [퍼블수정]24.10.28 상품평 3차 체험단 리뷰 케이스 추가 -->
                <p v-else-if="index === 1">
                  <template v-for="(item2, index2) in item.info">
                    <a href="#n" v-if="index2 === 0" :key="`a-${index2}`"><i class="cmp-icon-etc cmp-icon-12 i-link">링크</i>{{ item2 }} </a>
                    <span v-else :key="`span-${index2}`">{{ item2 }}</span>
                  </template>
                </p>
                <!-- //[퍼블수정]24.10.28 상품평 3차 체험단 리뷰 케이스 추가 -->
                <p v-else><span v-for="(item2, index2) in item.info" :key="index2">{{item2}}</span></p>
                <p><span v-for="(item3, index3) in item.info2" :key="index3">{{item3}}</span></p>
              </div>
              <!-- [무형상품] -->
              <div v-else class="review-spec">
                <p>
                  <span>17:00</span>
                  <span>더한섬닷컴</span>
                </p>
              </div>
              <!--// 2022-09-15-prd 상품평 정보 추가 -->
              
              <!-- eslint-disable -->
              <p class="review" v-html="item.review"></p>
              <!-- eslint-disable -->

              <div class="info-img-bottom" v-if="item.image_length">
                <div role="button" v-for="(item2,index2) in item.image_url" tabindex="0" class="review-thumbnail-btn" @click="reviewDetailOpen">
                  <div v-if="item.video_url && index2 === 0" class="video-cnt">
                    <VideoPlayer :path="item.video_url" :poster="item2[0]" :mute="true"></VideoPlayer>
                  </div>
                  <v-img :src="item2" alt="리뷰 썸네일" />
                  <div v-if="item.video_url && index2 === 0" class="play-ico-cnt">
                    <i v-cmp-icon="{name:'play',invert:1}" ></i>
                  </div>
                </div>
              </div>
              <div class="satisfaction-wrap" v-if="item.satisfaction && item.satisfaction.length">
                <div v-for="(item,index) in item.satisfaction" :key="index" class="satisfaction-item">
                  <p class="txt"><strong>{{item.title}}</strong> {{item.name}}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="review-togglebtn" role="button" @click="reviewToggle">토글 버튼</div> -->
        </div>
        <!-- //[퍼블수정]24.10.28 상품평 3차 체험단 리뷰 케이스 추가 -->
      </div>

      <ProductListPaging />

      <!-- //리뷰 리스트 -->
    </template>
    <!-- //리뷰 있을 때 -->
    <!-- 리뷰 없을 때 -->
    <div v-else class="prd-noreview">
      <p class="prd-tit">구매 후 리뷰 작성하시면, 마일리지를 드려요!</p>
      <ul class="cmp-list list-dotType2 bottom0">
        <li>정상상품 : 0.5% / 아울렛상품 : 0.1% </li>
        <li>온/오프라인 베스트 리뷰 : 월 5명 10만원 바우처</li>
        <li>포토/동영상 리뷰 (최초/일반) : 1,500M / 500M</li>
        <li>도움이 되었어요 : 100M </li>
      </ul>
      <button class="cmp-font fnt-14 button"><span class="line">상품평 작성 혜택</span></button>
      <v-btn outlined color="primary">상품평 쓰기</v-btn>
    </div>
    <!-- 리뷰 없을 때 -->
    <!-- 스타일 라이브 -->
    <template v-if="!isItgb">
      <div class="prd-tit-box">
        <h3 class="tit">스타일라이브 128</h3>
      </div>
      <div class="cmp-swiper-box prd-stylelive">
        <!-- [퍼블수정]23.02.03 썸네일 변경 수정 -->
        <Swiper
          :options="{
            slidesPerView: 6,
            spaceBetween: 1,
            navigation: {
              nextEl: '.detail-swiper-next2',
              prevEl: '.detail-swiper-prev2',
            },
            observer: true,
            observeParents: true
          }"
        >
          <SwiperSlide v-for="(item, index) in styleLiveList" :key="index">
            <div class="swiper-prd-unit" role="button" tabindex="0" @click="styleLiveDetailOpen">
              <img :src="item.image" alt="스타일 라이브 썸네일" class="prd-img" />
              <!-- 동영상 썸네일 -->
              <i
                v-cmp-icon="{ name:'play', invert:1}"
              ></i>
              <!-- <i
                v-cmp-icon="{ name:'newwin', invert:1}"
              ></i> -->
              <div class="profile-box">
                <!-- [HSTEST-1675] 프로필 이미지 없을경우 추가 -->
                <v-img :src="item.profile_image ? item.profile_image : profileNoImg" alt="" class="profile-img"/>
                <div class="profile-cnt">
                  <div class="profile-id">{{item.profile_id}}</div>
                  <div class="profile-level">{{item.profile_level}}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <!-- [퍼블수정]23.02.03 -->
          <SwiperSlide v-if="styleLiveList.length > 0">
            <div class="more-btn-cover">
              <button class="more-btn">
                <span v-cmp-icon="{size : 24, name : 'add', invert : 1}"></span>
                전체보기
              </button>
            </div>
          </SwiperSlide>
          <button slot="button-prev" class="detail-swiper-next2"></button>
          <button slot="button-next" class="detail-swiper-prev2"></button>
        </Swiper>
      </div>
    </template>
    <!-- //스타일 라이브 -->

    <!-- 체험단 (230118 체험단 : 컴포넌트 분리) -->
    <ProductOeraReview v-if="!isItgb" />
    <!-- // 체험단 -->
    
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

import VideoPlayer from '~/components/common/VideoPlayer'

export default {
  props: {
    pageClass : {
      type : String,
      default: () => ""
    },
    testType2 : { // 퍼블 화면 확인 용
      type : Boolean,
      default:false
    },
    isItgb: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    VideoPlayer,
  },
  data: () => ({
    // [퍼블수정]24.08.14 문장 케이스 추가
    btnShow: false,
    aiListType: false,
    more_view : false,
    reviewTxtFix: false,
    originalReviewTxt : "통이 적당하고 허리도 착 맞고 이상한 포인트나 장식 없이 완전 딱 기본에 충실한 버뮤다 팬츠에요. 기장도 충분 하고 밑단도 넓은 편이라 좋은데 약간 A 라인이에요 통이 적당하고 허리도 착 맞고 이상한 포인트나 장식 없이 완전 딱 기본에 충실한 버뮤다 팬츠에요. 기장도 충분 하고 밑단도 넓은 편이라 좋은데 약간 A 라인이에요통이 적당하고 허리도 착 맞고 이상한 포인트나 장식 없이 완전 딱 기본에 충실한 버뮤다 팬츠에요. 기장도 충분 하고 밑단도 넓은 편이라 좋은데 약간 A 라인이에요. 기장도 충분 하고 밑단도 넓은" ,
    // [퍼블추가]24.07.30 상품평 고도화
    reviewOptionPopup: false,
    bestexperientab:0,
    selectedColors: [],
    selectedSizes: [],
    cateShow:false,
    optionList: [{
        "label":"컬러",
        "type":"color",
        "list":[
            {
              "value" : 'COCOA',
              "color_image" : 'https://img.thehandsome.com/md/publish/dummy/color-COCOA.png',
              "style": "#8b5d4d",
            },
            {
              "value" : 'CHARCOAL',
              "color_image" : 'https://img.thehandsome.com/md/publish/dummy/color-CHARCOAL.png',
              "style": "#222222",
            },
            {
              "value" : 'PURPLE',
              "color_image" : 'https://img.thehandsome.com/md/publish/dummy/color-PURPLE.png',
              "style": "#5d467d",
            },
            {
              "value" : 'YELLOW',
              "color_image" : 'https://img.thehandsome.com/md/publish/dummy/color-YELLOW.png',
              "style": "#caaf07",
            },
            {
              "value" : 'ORANGE',
              "color_image" : 'https://img.thehandsome.com/md/publish/dummy/color-ORANGE.png',
              "style": "#d1411e",
            },
            {
              "value" : "WHITE",
              "color_image" : "https://img.thehandsome.com/md/publish/dummy/color-WHITE.png",
              "style": "#ffffff",
            }
        ]
        },{
        "label":"사이즈",
        "type":"size",
        "list":[
            {
                "label": "76",
                "item_cd": "100001"
            },{
                "label": "82",
                "item_cd": "100002"
            },{
                "label": "86",
                "item_cd": "100003"
            },{
                "label": "88",
                "item_cd": "100004"
            },{
                "label": "90",
                "item_cd": "100005"
            }
        ]
      }],
    cateOption: [
      {
        "value" : 'COCOA',
        "color_image" : 'https://img.thehandsome.com/md/publish/dummy/color-COCOA.png',
        "style": "#8b5d4d",
      },
      {
        "value" : 'CHARCOAL',
        "color_image" : 'https://img.thehandsome.com/md/publish/dummy/color-CHARCOAL.png',
        "style": "#222222",
      },
      {
        "value" : 'BLUE',
        "color_image" : 'https://img.thehandsome.com/md/publish/dummy/color-BLUE.png',
        "style": "#111f80",
      },
      {
        "value" : "WHITE",
        "color_image" : "https://img.thehandsome.com/md/publish/dummy/color-WHITE.png",
        "style": "#ffffff",
      },
      {
          "label": "76",
          "item_cd": "100001"
      },{
          "label": "82",
          "item_cd": "100002"
      }
    ],
    reviewList2 : [
      {
        image_length : 1,
        image_url : [
          'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img1.png'
        ],
        video_url : null,
        profile_image : 'https://img.thehandsome.com/md/publish/dummy/mo/detail-profile-img2.png',
        id : 'handhandhandhand****',
        rating_score: 5,
        review : '정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추입니다. 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추 정말 예쁘네요. 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추입니다.',
        date : '2022.02.06',
      },
      {
        image_length : 3,
        image_url : [
          "https://img.thehandsome.com/md/publish/dummy/pc/video.webp",
          "https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img1.png",
          "https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img1.png"
        ],
        video_url : "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
        profile_image : 'https://img.thehandsome.com/md/publish/dummy/mo/detail-profile-img1.png',
        id : 'hand****',
        rating_score: 3,
        review : '정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추입니다. 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추 정말 예쁘네요. 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추입니다.',
        date : '2022.02.06',
      },
      {
        image_length : 1,
        image_url : null,
        video_url : null,
        profile_image : null,
        id : 'hand****',
        rating_score: 5,
        review : '정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추입니다. 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추 정말 예쁘네요. 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추입니다.',
        date : '2022.02.06',
      },
      {
        image_length : 1,
        image_url : [
          'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img1.png'
        ],
        video_url : null,
        profile_image : 'https://img.thehandsome.com/md/publish/dummy/mo/detail-profile-img1.png',
        id : 'hand****',
        rating_score: 5,
        review : '정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추입니다. 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추 정말 예쁘네요. 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추입니다.',
        date : '2022.02.06',
      },
    ],
    reviewList3 : [
      {
        image_length : 1,
        image_url : [
          'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img3.png'
        ],
        video_url : null,
        profile_image : 'https://img.thehandsome.com/md/publish/dummy/mo/detail-profile-img1.png',
        id : 'hand****',
        rating_score: 3,
        review : '얼굴 당김이 없어질 정도로 촉촉해요',
        date : '2022.02.06',
      },
      {
        image_length : 3,
        image_url : [
          "https://img.thehandsome.com/md/publish/dummy/pc/video.webp",
          "https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img1.png",
          "https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img1.png"
        ],
        video_url : "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
        profile_image : 'https://img.thehandsome.com/md/publish/dummy/mo/detail-profile-img2.png',
        id : 'hand****',
        rating_score: 3,
        review : '정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추입니다. 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추 정말 예쁘네요. 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추입니다.',
        date : '2022.02.06',
      },
      {
        image_length : 1,
        image_url : [
          'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img2.png'
        ],
        video_url : null,
        profile_image : 'https://img.thehandsome.com/md/publish/dummy/mo/detail-profile-img2.png',
        id : 'hand****',
        rating_score: 4,
        review : '얼굴 당김이 없어질 정도로 촉촉해요',
        date : '2022.02.06',
      },
      {
        image_length : 1,
        image_url : null,
        video_url : null,
        profile_image : 'https://img.thehandsome.com/md/publish/dummy/mo/detail-profile-img1.png',
        id : 'hand****',
        rating_score: 4,
        review : '정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전 강추합니다. 이번 가을 입을 거 고민 할 필요가 없어졌어요',
        date : '2022.02.06',
      },
      {
        image_length : 1,
        image_url : null,
        video_url : null,
        profile_image : null,
        id : 'hand****',
        rating_score: 4,
        review : '얼굴 당김이 없어질 정도로 촉촉해요',
        date : '2022.02.06',
      },
    ],
    // [HSTEST-1675] 프로필 이미지 없을경우 추가
    profileNoImg : '/images/common/profile-no-48.svg',

    ratingAverageInfo : {
      score : "4.0",
      item : [
        {name : '사이즈' , text : '적당한', percent : 60},
        {name : '디자인' , text : '화면과 같은',percent : 48},
        {name : '컬러' , text : '밝은',percent : 72}
      ]
    },
    ratingDetailInfo : {
      0 : [
        {text : '타이트한' , percent : 20, activeRating : false },
        {text : '적당한' , percent : 60 , activeRating : true },
        {text : '여유있는' , percent : 20 ,activeRating : false }
      ],
      1 : [
        {text : '무난한' , percent : 20 , activeRating : false},
        {text : '화면과 같은' , percent : 48 , activeRating : true},
        {text : '추천하고 싶은' , percent : 32 , activeRating : false},
      ],
      2 : [
        {text : '어두운' , percent : 10, activeRating : false},
        {text : '화면과 같은' , percent : 18, activeRating : false},
        {text : '밝은' , percent : 72, activeRating : true}
      ]
    },
    recentReviewList : [
      {
        image_length : 1,
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img1.png',
      },
      {
        image_length : 3,
        video_url : "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
        image_url : "https://img.thehandsome.com/md/publish/dummy/pc/video.webp",
      },
      {
        image_length : 1,
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img3.png',
      },
      {
        image_length : 1,
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img3.png',
      },
      {
        image_length : 1,
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img3.png',
      },
      {
        image_length : 1,
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img3.png',
      },
      {
        image_length : 1,
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img3.png',
      },
      {
        image_length : 3,
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img3.png',
      },
    ],
    recentReviewListMore: true,
    reviewList : [
      // 221024 상품상세 상품평 : prd_number 항목 추가
      {
        image_length : 1,
        image_url : [
          'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img1.png'
        ],
        video_url : null,
        id : 'hand****',
        level : 'STAR',
        rating_score: 5,
        // prd_name: '린넨 블렌드 브레이드 라인 셔츠',
        info : ["COCOA", "M", "롯데전주타임"], // 옵션
        info2 : ['168cm', '58kg', '통통한 체형'],
        prd_number : {
          num : 'CM2C9KTO002W',
          link : '#n',
        },
        like_checked : false,
        like_count : 99,
        review : '정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추입니다. 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추 정말 예쁘네요. 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추입니다.',
        date : '2022.02.06',
        satisfaction : [
          {title:'적당한', name:'사이즈'},
          {title:'화면과 같은', name:'디자인'}, 
          {title:'밝은', name:'컬러'}
        ]
      },
      {
        image_length : 3,
        image_url : [
          "https://img.thehandsome.com/md/publish/dummy/pc/video.webp",
          "https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img1.png",
          "https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img1.png"
        ],
        video_url : "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
        id : 'hand****',
        level : 'FRIEND',
        rating_score: 3,
        // prd_name: '린넨 블렌드 브레이드 라인 셔츠',
        info : ["COCOA", "M", "롯데전주타임"], // 옵션
        info2 : ['168cm', '58kg', '통통한 체형'],
        prd_number : {
          num : 'CM2C9KTO002W',
          link : '#n',
        },
        like_checked : false,
        like_count : 1,
        review : '정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추입니다. 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추 정말 예쁘네요. 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추입니다.',
        date : '2022.02.06',
        satisfaction : [
          {title:'적당한', name:'사이즈'},
          {title:'화면과 같은', name:'디자인'}, 
          {title:'밝은', name:'컬러'}
        ]
      },
      {
        image_length : 1,
        image_url : null,
        video_url : null,
        id : 'hand****',
        level : 'STAR',
        rating_score: 4,
        // prd_name: '린넨 블렌드 브레이드 라인 셔츠',
        info : ["COCOA", "M", "롯데전주타임"], // 옵션
        info2 : ['168cm', '58kg', '통통한 체형'],
        like_checked : true,
        like_count : 100,
        review : '정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전 강추합니다. 이번 가을 입을 거 고민 할 필요가 없어졌어요',
        date : '2022.02.06',
        satisfaction : [
          {title:'적당한', name:'사이즈'},
          {title:'화면과 같은', name:'디자인'}, 
          {title:'밝은', name:'컬러'}
        ]
      },
      {
        image_length : 1,
        image_url : null,
        video_url : null,
        id : 'hand****',
        level : 'STAR',
        rating_score: 4,
        // prd_name: '린넨 블렌드 브레이드 라인 셔츠',
        info : ["COCOA", "M", "롯데전주타임"], // 옵션
        info2 : ['168cm', '58kg', '통통한 체형'],
        like_checked : true,
        like_count : 1,
        review : '정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전 강추합니다. 이번 가을 입을 거 고민 할 필요가 없어졌어요',
        date : '2022.02.06',
        satisfaction : [
          {title:'적당한', name:'사이즈'},
          {title:'화면과 같은', name:'디자인'}, 
          {title:'밝은', name:'컬러'}
        ]
      },
      {
        image_length : 1,
        image_url : null,
        video_url : null,
        id : 'hand****',
        level : 'STAR',
        rating_score: 4,
        // prd_name: '린넨 블렌드 브레이드 라인 셔츠',
        info : ["COCOA", "M", "롯데전주타임"], // 옵션
        info2 : ['168cm', '58kg', '통통한 체형'],
        like_checked : false,
        like_count : 21,
        review : '정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전 강추합니다. 이번 가을 입을 거 고민 할 필요가 없어졌어요',
        date : '2022.02.06',
        satisfaction : [
          {title:'적당한', name:'사이즈'},
          {title:'화면과 같은', name:'디자인'}, 
          {title:'밝은', name:'컬러'}
        ]
      },
    ],
    styleLiveList : [
      {
        // [HSTEST-1675] 프로필 이미지 없을경우 추가
        // profile_image data 가 '' 빈값으로 들어올시 적용되도록 되어있습니다.
        image : 'https://img-stg.thehandsome.com/attachment/display/2022/10/08/cb9e588e-4695-4bf4-99a6-f7f2e6260be7.jpg',
        profile_image : '',
        // profile_image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-profile-img1.png',
        profile_id : 'woojoorxx',
        profile_level : '스라셀럽',
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-stylelive-img2.png',
        profile_image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-profile-img2.png',
        profile_id : 'woojoorxx',
        profile_level : '손님',
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-stylelive-img1.png',
        profile_image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-profile-img1.png',
        profile_id : 'woojoorxx',
        profile_level : '스라셀럽',
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-stylelive-img2.png',
        profile_image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-profile-img2.png',
        profile_id : 'woojoorxx',
        profile_level : '스라피블',
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-stylelive-img2.png',
        profile_image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-profile-img2.png',
        profile_id : 'woojoorxx',
        profile_level : '손님',
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-stylelive-img1.png',
        profile_image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-profile-img1.png',
        profile_id : 'woojoorxx',
        profile_level : '스라셀럽',
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-stylelive-img1.png',
        profile_image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-profile-img1.png',
        profile_id : 'woojoorxx',
        profile_level : '스라셀럽',
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-stylelive-img2.png',
        profile_image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-profile-img2.png',
        profile_id : 'woojoorxx',
        profile_level : '손님',
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-stylelive-img1.png',
        profile_image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-profile-img1.png',
        profile_id : 'woojoorxx',
        profile_level : '스라셀럽',
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-stylelive-img2.png',
        profile_image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-profile-img2.png',
        profile_id : 'woojoorxx',
        profile_level : '스라피블',
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-stylelive-img2.png',
        profile_image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-profile-img2.png',
        profile_id : 'woojoorxx',
        profile_level : '손님',
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-stylelive-img1.png',
        profile_image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-profile-img1.png',
        profile_id : 'woojoorxx',
        profile_level : '스라셀럽',
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-stylelive-img1.png',
        profile_image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-profile-img1.png',
        profile_id : 'woojoorxx',
        profile_level : '스라셀럽',
      },
    ],
    // testerReviewList : [], // 체험단 리스트 (230118 체험단 : 삭제)
    reviewSort : 0,
    reviewFilter : 0,
  }),
  // [퍼블추가]24.07.30 상품평 고도화
  watch:{
    bestexperientab() {
      // 탭 이동시 스와이프 초기화
      const me = this
      if(me.bestexperientab === 0){
        this.$nextTick(() => {
          const me = this
          const swiper = me.$el.querySelector('.reviewSwipe2').swiper
          swiper.slideTo(0,0)
        });
      } else {
        this.$nextTick(() => {
          const me = this
          const swiper2 = me.$el.querySelector('.reviewSwipe1').swiper
          swiper2.slideTo(0,0)
        });
      }
    },
  },
  // 퍼블 화면 확인 용 Start
  computed: {
    reviewTxt() {
      return this.reviewTxtFix ? "통이 적당하고 허리도 착 맞고 이상한 포인트나 장식 없이 완전 딱 기본에 충실한 버뮤다 팬츠에요. 기장도 충분 하고 밑단도 넓은 편이라 좋은데 약간 A 라인이에요" : this.originalReviewTxt;
    }
  },
  created() {
    const me = this
    if(me.testType2){ // 퍼블 화면 확인 용
      me.reviewList.forEach(function(item){
        item.prd_name = '린넨 블렌드 브레이드 라인 셔츠'
      })
    }
  },
  mounted() {
    // ---- 퍼블 화면 확인 용 Start
    if(location.search.includes("TEST_TYPE=2")){
      this.reviewTxtFix = true;
      this.$nextTick(() => {
        this.checkHeight();
      });
    }else if(location.search.includes("TEST_TYPE=3")){
      // ai 단어 CASE
      this.aiListType = true
    }else{
      // [퍼블수정]24.08.14 문장 케이스 추가
      this.checkHeight();
    }
  },
  methods: {
    reviewAllOpen(event){
      console.log('리뷰 모아보기 팝업 오픈')
      event.stopPropagation()
    },
    reviewDetailOpen(event){
      console.log('리뷰 상세 팝업 오픈')
      event.stopPropagation()
    },
    reviewToggle(event){
      console.log('리뷰 펼치기')
      const cl = event.currentTarget.closest(".prd-review-item").classList;
      if(cl.contains("on")){
        cl.remove("on")
      }else{
        cl.add("on")
      }
    },
    reviewLike(event, idx){
      event.stopPropagation()
      console.log(idx)
      const me = this
      if(me.reviewList[idx].like_checked){
        me.reviewList[idx].like_checked = false
        me.reviewList[idx].like_count--
      }else{
        me.reviewList[idx].like_checked = true
        me.reviewList[idx].like_count++
      }
      
    },
    styleLiveDetailOpen(){
      console.log('스타일라이브 팝업 오픈')
    },
    // [퍼블추가]24.07.30 상품평 고도화
    reviewListOption(){
      if(this.reviewOptionPopup === true){
        this.reviewOptionPopup = false
      }else {
        this.reviewOptionPopup = true
      }
    },
    deleteFilter(index){
      this.cateOption.splice(index, 1);
    },
    resetOptionFilter(){
      this.selectedColors = [];
      this.selectedSizes = [];
    },
    resetFilter(){
      // this.cateOption = [];
      this.cateShow = false
    },
    changeCateShow() {
      this.reviewOptionPopup = false
      this.cateShow = true
    },
    // [퍼블수정]24.08.14 문장 케이스 추가
    checkHeight() {
      const aiWrap = this.$el.querySelector('.ai-review p.review')
      if (aiWrap) {
        const divHeight = aiWrap.clientHeight

        if (divHeight >= 66) {
          this.btnShow = true
        }
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/detail.scss'; //페이지 전용 css
</style>
