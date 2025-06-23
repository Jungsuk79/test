<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <CommonContentsLeftMenu :title="'마이페이지'" :url="'/json/mypage_left_menu.json'"></CommonContentsLeftMenu>
      <div class="my-page-r-box my-reviewList"><!-- 마이페이지 -->
        <div class="cmp-page-tit pb-8">
          <h2 class="tit">상품평</h2>
        </div>
        
        <div class="order-number-box">
          <div class="line-box">
            <p class="cmp-font fnt-13"></p>
            <!-- [퍼블수정]24.10.28 상품평 3차 -->
            <a href="javascript:;" class="cmp-font button">혜택 자세히 보기<i class="cmp-icon cmp-icon-12 i-next"></i></a>
          </div>
        </div>

        <!-- [퍼블수정]24.10.28 상품평 3차 -->
        <div class="contents-line-box mileage-box">
          <p class="cmp-font fnt-18"><i class="cmp-icon-etc cmp-icon-18 i-pencil">연필</i>상품평 작성하고, 마일리지를 받아보세요!</p>
          <ul>
            <li>
              <p>정상상품<br><span>0.5%</span></p>
            </li>
            <li>
              <p>아울렛 상품<br><span>0.1%</span></p>
            </li>
            <li>
              <p>추가혜택<br><span>최대 1만점</span></p>
            </li>
          </ul>
        </div>
        <!-- //[퍼블수정]24.10.28 상품평 3차 -->
        <!-- 탭메뉴 -->
        <div class="cmp-tabs tabs-actionTop">
          <v-tabs v-model="tabs" fixed-tabs>
            <v-tab to="myReviewListPossible">작성 가능 상품평 0</v-tab><!-- 221024 나의상품평 : 링크 추가 -->
            <v-tab>작성한 상품평 0</v-tab>
          </v-tabs>
        </div>
        <!-- //탭메뉴 -->

        <!-- 
          작성한 상품평 
          221024 나의상품평 : 작성 가능 상품평 탭내용 삭제(페이지 분리 되어있음)
        -->
        <div class="mb-30">
          <!-- 날짜 검색 -->
          <v-layout row align-center justify-space-between class="pb-6 mt-30">
            <div class="cmp-line-radio">
              <div class="radio-item">
                <input id="dateRadio2_0" type="radio" name="dateRadio2" checked />
                <label for="dateRadio2_0">1주일</label>
              </div>
              <div class="radio-item">
                <input id="dateRadio2_1" type="radio" name="dateRadio2" />
                <label for="dateRadio2_1">1개월</label>
              </div>
              <div class="radio-item">
                <input id="dateRadio2_2" type="radio" name="dateRadio2" />
                <label for="dateRadio2_2">3개월</label>
              </div>
            </div>
            <CommonCalendarBox />
          </v-layout>
          <!-- // 날짜 검색 -->

          <!-- 리뷰 리스트 -->
          <div class="my-prd-review-list">
            <div v-for="(item,index) in unitReview" :key="index" class="prd-review-item">
              <nuxt-link to="#n" :class="{'more':item.more_view}">
                <!-- [퍼블수정]23.02.13 -->
                <v-layout row justify-space-between v-if="item.textTop || item.textSmall" class="mb-10">
                  <p v-if="item.textTop" class="text-top cmp-font" :class="{'c-blue' : index===0}">
                    {{item.textTop}}
                    <span v-if="item.helped_point" class="cmp-font c-gray ml-14 fnt-14">도움이 되었어요 적립 {{item.helped_point}}M</span>
                  </p>
                  <span class="cmp-font c-gray fnt-14">{{item.data}}</span>
                  <!-- 적립예정 마일리지는 c-blue 클래스 추가 --><!-- [개발확인]23.01.10 -->
                  <!-- 마일리지 적립 기간 만료로 적립이 없는 경우 0M으로 표기(기획서 참고) -->
                </v-layout>
                <!-- //[퍼블수정]23.02.13 -->
                <v-layout row flex-start class="prod-info-box">
                  <div class="review-thumbnail">
                    <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/018.jpg" alt="리뷰 썸네일" />
                  </div>
                  <div class="text-box">
                    <p class="brand-name">LANVIN COLLECTION</p>
                    <p class="prd-name">{{item.prd_name}}</p>
                  </div>
                </v-layout>
                <!-- // [디자인 수정 반영 12.16] 22.12.21 --><!-- //[개발확인]23.01.10 -->
                <div class="info-box">
                  <!-- 썸네일 영역 -->
                  <div v-if="item.attachFiles.length" tabindex="0" class="review-thumbnail-btn">
                    <div v-if="item.attachFiles[0].path" class="video-cnt">
                      <VideoPlayer :loop="true" :path="item.attachFiles[0].path" :poster="item.attachFiles[0].poster" :mute="true" :video-ratio="150.93" />
                    </div>
                    <v-img v-else :src="item.attachFiles[0].image" alt="리뷰 썸네일" />

                    <div v-if="item.attachFiles[0].path" class="play-ico-cnt">
                      <i v-cmp-icon="{name:'play',invert:1}" ></i>
                    </div>
                    <div v-if="item.attachFiles.length>1" class="size">{{item.attachFiles.length}}</div>
                  </div>
                  <!-- // 썸네일 영역 -->
                  <!-- 우측 정보 영역 -->
                  <div class="info-cnt" :class="{full : item.image_url===null && item.video_url===null}">
                    <!-- [퍼블수정]22.12.07 상품평 수정 -->
                    <!-- [디자인 수정 반영 12.16] 22.12.21 -->
                    <!-- <p v-if="item.prd_name" class="prd-name">
                      <span >{{item.prd_name}}</span>
                    </p> -->
                    <!-- //[디자인 수정 반영 12.16] 22.12.21 -->
                    <div class="cnt-box0"><!-- 221024 상품평 품번 : <div class="cnt-box0"> 추가 --->
                      <v-rating :value="item.reviewScoreStar" readonly class="cmp-rating rating-default">
                        <v-icon>
                          <i class="icon star">별점</i>
                        </v-icon>
                      </v-rating>

                      <!-- [퍼블수정]24.12.06 문구수정, 태그추가 -->
                      <div class="txt-label best" v-if="index===0">
                        <span class="txt" >BEST</span>
                      </div>
                      <div class="txt-label" v-if="index===0">
                        <span class="txt">직원리뷰</span>
                      </div>
                      <div class="txt-label hot" v-if="index===0">
                        <span class="txt">HOT VIEW</span>
                      </div>
                      <div class="txt-label" v-if="index===1">
                        <span class="txt">체험단 리뷰</span>
                      </div>
                      <!-- //[퍼블수정]24.12.06 문구수정, 태그추가 -->
                    </div>
                    <!-- [퍼블수정] 상춤평 유저 정보 수정 -->
                    <div class="review-spec mt-8">
                      <p><span v-for="(item2, index2) in item.userInfo" :key="index2">{{item2}}</span></p>
                      <p><span v-for="(item3, index3) in item.userInfo2" :key="index3">{{item3}}</span></p>
                    </div>
                    <!-- // [퍼블수정] 상춤평 유저 정보 수정 -->

                    <!-- eslint-disable -->
                    <p class="review" v-html="item.reviewTxt"></p>
                    <!-- eslint-disable -->

                    <!-- 첨부한파일 -->
                    <template>
                      <!-- 상품평 이미지 자세히 보기 일 경우 영상 or 이미지가 나열 -->
                      <ul class="attach-list">
                        <li v-for="(file, index1) in item.attachFiles" :key="index1">
                          <div role="button" :class="{'selected' : item.select == index1}">
                            <!-- 영상 -->
                            <div v-if="file.path" class="video-player">
                              <div class="video-cnt">
                                <VideoPlayer :loop="file.loop" :path="file.path" :poster="file.poster" :mute="true" :video-ratio="150.93" />
                              </div>
                              <div class="play-ico-cnt">
                                <i v-cmp-icon="{name:'play',invert:1}" ></i>
                              </div>
                            </div>

                            <!-- 이미지 -->
                            <template v-if="file.image">
                              <v-img :src="file.image" alt=""></v-img>
                            </template>
                          </div>
                        </li>
                      </ul>
                      <!-- // 영상 or 이미지가 나열 -->
                    </template>
                    <!-- 첨부한파일 -->
                    <!-- 옵션 -->
                    <v-layout align-center class="review-option">
                      <div v-for="(option, indx) in item.reviewOption" :key="indx">
                        <span><strong>{{option.text}}</strong>{{option.name}}</span>
                      </div>
                    </v-layout>
                    <!-- // 옵션 -->
                  </div>
                  <!-- // 우측 정보 영역 -->
                </div>
              </nuxt-link>
              <!-- [퍼블수정]23.02.13 -->
              <v-layout row justify-space-between class="mt-10">
                <div class="btnsArea text-right mt-0">
                    <button class="cmp-font button">수정</button>
                    <button class="cmp-font button">삭제</button>
                </div>
                <button class="acco-btn" @click="item.more_view=!item.more_view">
                  <template v-if="item.more_view">접기</template>
                  <template v-else>더보기</template>
                </button>
              </v-layout>
              <!-- //[퍼블수정]23.02.13 -->
            </div>
            <div class="prd-review-item">
              <CommonNoData msg="작성한 상품평이 없습니다."></CommonNoData>
            </div>
          </div>
          <!-- //리뷰 리스트 -->
          <ProductListPaging />
        </div>
        <!-- //작성한 상품평 -->
      </div>
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import VideoPlayer from '~/components/common/VideoPlayer'
// import EventBus from '~/api/common/EventBus'
export default {
  components: {
    VideoPlayer
  },
  layout: 'LayoutBasics',
  data() {
    return {
      // Tabs
      tabs: 1,
      unitReview : [ // 리뷰 리스트
        {
          textTop: '적립예정 마일리지 775M',
          textSmall: '',
          data : "2022.02.06",
          prd_name: '린넨 블렌드 브레이드 라인 셔츠',
          userInfo : ["COCOA", "M", "롯데전주타임"], // 옵션
          userInfo2 : ['168cm', '58kg', '통통한 체형'],
          attachFiles: [ // 첨부파일 (이미지 or 영상)
            {
              image: "https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img1.png"
            },
            {
              image: "https://img.thehandsome.com/md/publish/dummy/pc/001.jpg"
            },
            {
              image: "https://img.thehandsome.com/md/publish/dummy/pc/002.jpg"
            },
          ],
          reviewOption : [
            {name : '사이즈', text : '적당한'},
            {name : '디자인', text : '화면과 같은'},
            {name : '컬러', text : '밝은'},
          ],
          reviewScoreStar: 5,
          reviewTxt : "정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전 강추합니다. 이번 가을 입을 거 고민이 사라졌어요. 따뜻하고 무엇보다 도톰한 재질이 맘에 쏙 듭니다.", // 리뷰내용
          onSkip: false,
          more_view : false
        },
        {
          textTop: '적립된 마일리지 0M',
          helped_point: '100',
          textSmall: '',
          data : "2022.02.06",
          prd_name: '린넨 블렌드 브레이드 라인 셔츠',
          userInfo : ["COCOA", "M", "롯데전주타임"], // 옵션
          userInfo2 : ['168cm', '58kg', '통통한 체형'],
          attachFiles: [ // 첨부파일 (이미지 or 영상)
            {
              path: "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
              poster: "https://img.thehandsome.com/md/publish/dummy/pc/video.jpg",
              youtube: false,
              loop: true,
              time: 214, // 총 영상시간
            },
            {
              image: "https://img.thehandsome.com/md/publish/dummy/pc/002.jpg"
            },
          ],
          reviewOption : [
            {name : '사이즈', text : '적당한'},
            {name : '디자인', text : '화면과 같은'},
            {name : '컬러', text : '밝은'},
          ],
          reviewScoreStar: 3,
          reviewTxt : "정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전 강추합니다. 이번 가을 입을 거 고민이 사라졌어요. 따뜻하고 무엇보다 도톰한 재질이 맘에 쏙 듭니다.정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전 강추합니다. 이번 가을 입을 거 고민이 사라졌어요. 따뜻하고 무엇보다 도톰한 재질이 맘에 쏙 듭니다.정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전 강추합니다. 이번 가을 입을 거 고민이 사라졌어요. 따뜻하고 무엇보다 도톰한 재질이 맘에 쏙 듭니다.정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전 강추합니다. 이번 가을 입을 거 고민이 사라졌어요. 따뜻하고 무엇보다 도톰한 재질이 맘에 쏙 듭니다.", // 리뷰내용
          onSkip: false,
          more_view : false
        },
        {
          textTop: '적립된 마일리지 775M',
          textSmall: '도움이 되었어요 적립 100M',
          data : "2022.02.06",
          prd_name: '린넨 블렌드 브레이드 라인 셔츠',
          userInfo : ["COCOA", "M", "롯데전주타임"], // 옵션
          userInfo2 : ['168cm', '58kg', '통통한 체형'],
          attachFiles: [ // 첨부파일 (이미지 or 영상)
            {
              image: "https://img.thehandsome.com/md/publish/dummy/pc/002.jpg"
            },
          ],
          reviewOption : [
            {name : '사이즈', text : '적당한'},
            {name : '디자인', text : '화면과 같은'},
            {name : '컬러', text : '밝은'},
          ],
          reviewScoreStar: 4,
          reviewTxt : "정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전 강추합니다. 이번 가을 입을 거 고민이 사라졌어요. 따뜻하고 무엇보다 도톰한 재질이 맘에 쏙 듭니다.", // 리뷰내용
          onSkip: false,
          more_view : false
        },
        {
          textTop: '적립된 마일리지 775M',
          textSmall: '도움이 되었어요 적립 100M',
          data : "2022.02.06",
          prd_name: '린넨 블렌드 브레이드 라인 셔츠',
          userInfo : ["COCOA", "M", "롯데전주타임"], // 옵션
          userInfo2 : ['168cm', '58kg', '통통한 체형'],
          attachFiles: [ // 첨부파일 (이미지 or 영상)
          ],
          reviewOption : [
            {name : '사이즈', text : '적당한'},
            {name : '디자인', text : '화면과 같은'},
            {name : '컬러', text : '밝은'},
          ],
          reviewScoreStar: 4,
          reviewTxt : "정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전 강추합니다. 이번 가을 입을 거 고민이 사라졌어요. 따뜻하고 무엇보다 도톰한 재질이 맘에 쏙 듭니다.", // 리뷰내용
          onSkip: false,
          more_view : false
        },
      ],
    }
  },
  created() {
  },
  methods: {
  },
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/detail.scss'; //페이지 전용 css
</style>