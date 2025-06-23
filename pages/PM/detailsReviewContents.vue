<template>
  <div class="prd-detail-review">
    <h2 class="ir">상품 리뷰</h2>
    <!-- 리뷰 있을 때 -->
    <template v-if="reviewList.length > 0">
      <!-- 평균 평가 정보 -->
      <div class="rating-score-top">
        <div class="rating-score-left">
          <div class="rating-score-average">
            <v-rating half-increments :value="ratingAverageInfo.score | parseFloat" readonly class="cmp-rating rating-large">
              <v-icon><i class="icon star">별점</i></v-icon>
            </v-rating>
            <p class="score-txt"><strong>{{ratingAverageInfo.score | parseFloat}}</strong><span>/</span><em>5</em></p>
          </div>
          <div class="review-btn-cnt">
            <v-btn outlined color="normal" height="36">상품평 쓰기</v-btn>
          </div>
        </div>
        <div class="rating-score-right">
          <ul class="rating-item-average">
            <li v-for="(item,index) in ratingAverageInfo.item" :key="index" class="item-cnt">
              <span class="tit">{{item.text}}</span>
              <span class="txt">{{item.name}}</span>
              <!-- <span class="per">({{item.percent}}%)</span> --><!-- 221129 상품평 항목 : 삭제 -->
              <ul>
                <li v-for="(item2,index2) in ratingDetailInfo[index]" :key="index2" class="item-cnt">
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

      <!-- 최근 리뷰 썸네일 리스트 --><!-- [퍼블수정]23.02.03 -->
      <ul class="prd-recent-review">
        <template v-for="(item, index) in recentReviewList">
          <li :key="index"  @click="reviewDetailOpen" v-if="index < 7">
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

      <!-- 리뷰 정렬/필터 -->
      <div class="review-sort-box">
        <p class="cmp-font fnt-20">전체 103</p>
        <v-btn-toggle v-model="reviewSort" tile color="primary" group class="cmp-toggleBtn toggleBtn-toggleText space-type2">
          <v-btn text height="auto" class="cmp-font fnt-14">최신순 </v-btn>
          <v-btn text height="auto" class="cmp-font fnt-14">추천순</v-btn>
        </v-btn-toggle>
      </div>
      <v-btn-toggle v-model="reviewFilter" tile color="primary" group class="cmp-toggleBtn toggleBtn-toggleText space-type2">
        <v-btn text height="auto" class="cmp-font fnt-15">전체</v-btn>
        <v-btn text height="auto" class="cmp-font fnt-15">포토/동영상 리뷰 34</v-btn>
        <v-btn text height="auto" class="cmp-font fnt-15">일반리뷰 69</v-btn>
      </v-btn-toggle>
      <!-- //리뷰 정렬/필터 -->

      <!-- 리뷰 리스트 -->
      <div class="prd-review-list mt-20">
        <div v-for="(item,index) in reviewList" :key="index" class="prd-review-item" :class="{'on': item.image_length > 1}">
          <div class="info-box">
            <div v-if="(item.video_url || item.image_url) && (item.image_length === 1)" role="button" tabindex="0" class="review-thumbnail-btn" @click="reviewDetailOpen">
              <div v-if="item.video_url" class="video-cnt">
                <VideoPlayer :path="item.video_url" :poster="item.image_url" :mute="true"></VideoPlayer>
              </div>
              <v-img v-if="item.video_url===null && item.image_url" :src="item.image_url" alt="리뷰 썸네일" />
              
              <div v-if="item.video_url" class="play-ico-cnt">
                <i v-cmp-icon="{name:'play',invert:1}" ></i>
              </div>
              <div v-if="item.image_length > 1" class="size">{{item.image_length}}</div>
            </div>
            
            <div class="info-cnt" :class="{full : item.image_url===null && item.video_url===null}">
              <v-rating :value="item.rating_score" readonly class="cmp-rating rating-default">
                <v-icon><i class="icon star">별점</i></v-icon>
              </v-rating>
              <div class="info-txt0">
                <span v-for="(item2, index2) in item.info" :key="index2">{{item2}}</span>
              </div>
              <div class="info-txt0">
                <span>{{item.id}}</span>
                <span>{{item.level}}</span>
              </div>
              <div class="date">{{item.date}}</div>
              <!-- [퍼블수정]23.02.22 차단 삭제 -->
              <button class="info-txt1">신고</button>
              <button class="review-like-btn" :class="{on:item.like_checked}" @click="reviewLike(index)">
                <i class="cmp-icon icon-before" :class="[{'i-recommendon':item.like_checked},{'i-recommendoff':!item.like_checked}]">추천</i>
                <span class="count">{{item.like_count}}</span>
              </button>

              <!-- eslint-disable -->
              <p class="review" v-html="item.review"></p>
              <!-- eslint-disable -->
            </div>
            <div class="info-img-bottom" v-if="item.image_length > 1">
              <div role="button" v-for="(item2,index2) in item.image_url" tabindex="0" class="review-thumbnail-btn" @click="reviewDetailOpen">
                <div v-if="item.video_url && index2 === 0" class="video-cnt">
                  <VideoPlayer :path="item.video_url" :poster="item2[0]" :mute="true"></VideoPlayer>
                </div>
                <v-img :src="item2" alt="리뷰 썸네일" />
                <div v-if="item.video_url && index2 === 0" class="play-ico-cnt">
                  <i v-cmp-icon="{name:'play',invert:1}" ></i>
                </div>
                <div v-if="index2 === 0" class="size">{{item.image_length}}</div>
                <p class="txt"><strong>{{item.img_name[index2].title}}</strong> {{item.img_name[index2].name}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center pt-40">
        <button class="cmp-font fnt-13 button">103개의 리뷰보기 <i class="cmp-icon cmp-icon-12 i-next"></i></button>
      </div>
      <!-- //리뷰 리스트 -->
    </template>
    <!-- //리뷰 있을 때 -->
    <!-- 리뷰 없을 때 -->
    <template v-else>
      <div class="rating-score-average">
        <v-rating half-increments :value="0" readonly class="cmp-rating rating-large">
          <v-icon><i class="icon star">별점</i></v-icon>
        </v-rating>
        <p class="score-txt"><strong>0</strong><span>/</span><em>5</em></p>
      </div>
      <div class="review-btn-cnt">
        <v-btn outlined color="normal" height="32">리뷰작성 혜택</v-btn>
      </div>
      <p class="prd-tit">구매 후 리뷰 작성하시면, 마일리지를 드려요!</p>
      <ul class="cmp-list list-dotType2 bottom0">
        <li>정상상품 : 0.5% / 아울렛상품 : 0.1% </li>
        <li>포토/동영상 리뷰 (최초/일반) : 1,500M / 500M</li>
        <li>온/오프라인 베스트 리뷰 : 월 5명 10만원 바우처</li>
        <li>도움이 되었어요 : 100M </li>
      </ul>
      <v-btn outlined block large color="primary" class="mt-30">리뷰쓰기</v-btn>
    </template>
    <!-- 리뷰 없을 때 -->
    <!-- 스타일 라이브 -->
    <div class="prd-tit-box">
      <h3 class="tit">스타일라이브 128</h3>
    </div>
    <div class="cmp-swiper-box">
      <Swiper
        :options="{
          slidesPerView: 'auto',
          freeMode : true,
          spaceBetween: 1,
          slidesPerView: 5,
          navigation: {
            nextEl: '.detail-swiper-next2',
            prevEl: '.detail-swiper-prev2',
          }
        }"
      >
        <SwiperSlide v-for="(item, index) in styleLiveList" :key="index">
          <div class="swiper-prd-unit" role="button" tabindex="0" @click="styleLiveDetailOpen">
            <v-img :src="item.image" alt="스타일 라이브 썸네일" class="prd-img"></v-img>
            <div class="profile-box">
              <v-img :src="item.profile_image" alt="" class="profile-img"/>
              <div class="profile-cnt">
                <div class="profile-id">{{item.profile_id}}</div>
                <div class="profile-level">{{item.profile_level}}</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <button slot="button-prev" class="detail-swiper-next2"></button>
        <button slot="button-next" class="detail-swiper-prev2"></button>
      </Swiper>
    </div>
    <!-- //스타일 라이브 -->

    <!-- 체험단 (230118 체험단 : 컴포넌트 분리) -->
    <ProductOeraReview />
    <!-- // 체험단 -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

import VideoPlayer from '~/components/common/VideoPlayer'

export default {
  components: {
    Swiper,
    SwiperSlide,
    VideoPlayer,
  },
  data: () => ({
    ratingAverageInfo : {
      score : 4.5,
      item : [
        {name : '사이즈' , text : '적당한', percent : 60},
        {name : '디자인' , text : '추천하고 싶은',percent : 24},
        {name : '컬러' , text : '밝은',percent : 48}
      ]
    },
    ratingDetailInfo : {
      0 : [
        {text : '타이트한' , percent : 20},
        {text : '적당한' , percent : 60},
        {text : '여유있는' , percent : 20}
      ],
      1 : [
        {text : '무난한' , percent : 20},
        {text : '화면과 같은' , percent : 48},
        {text : '추천하고 싶은' , percent : 32},
      ],
      2 : [
        {text : '어두운' , percent : 10},
        {text : '화면과 같은' , percent : 18},
        {text : '밝은' , percent : 72}
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
    ],
    reviewList : [
      {
        image_length : 1,
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img1.png',
        video_url : null,
        id : 'hand****',
        level : 'STAR',
        rating_score: 5,
        info : ['린넨 블렌드 브레이드 라인 셔츠','COCOA', 'L', '더한섬닷컴'],
        like_checked : true,
        like_count : 21,
        review : '정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추입니다. 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추 정말 예쁘네요. 올드함과 클래식함을 왔다',
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
        id : 'hand****',
        level : 'FRIEND',
        rating_score: 3,
        info : ['COCOA', 'S', '더한섬닷컴'],
        like_checked : false,
        like_count : 21,
        review : '정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추입니다. 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추 정말 예쁘네요. 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추입니다.',
        date : '2022.02.06',
        img_name : [
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
        info : ['COCOA', 'M', '롯데전주타임'],
        like_checked : false,
        like_count : 21,
        review : '정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전 강추합니다. 이번 가을 입을 거 고민 할 필요가 없어졌어요',
        date : '2022.02.06',
      },
    ],
    styleLiveList : [
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-stylelive-img1.png',
        profile_image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-profile-img1.png',
        profile_id : 'woojoorxx',
        profile_level : '인플루언서',
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-stylelive-img2.png',
        profile_image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-profile-img2.png',
        profile_id : 'woojoorxx',
        profile_level : '주민',
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-stylelive-img1.png',
        profile_image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-profile-img1.png',
        profile_id : 'woojoorxx',
        profile_level : '인플루언서',
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-stylelive-img2.png',
        profile_image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-profile-img2.png',
        profile_id : 'woojoorxx',
        profile_level : '주민',
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-stylelive-img2.png',
        profile_image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-profile-img2.png',
        profile_id : 'woojoorxx',
        profile_level : '주민',
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-stylelive-img1.png',
        profile_image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-profile-img1.png',
        profile_id : 'woojoorxx',
        profile_level : '인플루언서',
      },
    ],
    // testerReviewList : [], // 체험단 리스트 (230118 체험단 : 삭제)
    reviewSort : 0,
    reviewFilter : 0,
  }),
  created() {
    
  },
  mounted() {
  },
  methods: {
    reviewAllOpen(){
      console.log('리뷰 모아보기 팝업 오픈')
    },
    reviewDetailOpen(){
      console.log('리뷰 상세 팝업 오픈')
    },
    reviewLike(idx){
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
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/detail.scss'; //페이지 전용 css
</style>
