<template>
  <div class="prd-detail-review" :class="pageClass">
    <h2 class="ir">Reviews</h2>
    <!-- 리뷰 있을 때 -->
    <template v-if="reviewList.length > 0">
      <!-- 평균 평가 정보 -->
      <div class="rating-score-top">
        <div class="rating-score-left">
          <div class="score-left-txt">
            <h3 class="tit">Item Satisfaction</h3>
            <p class="txt">Customer satisfaction with the product.</p>
          </div>
          <div class="rating-score-average">
            <v-rating :value="ratingAverageInfo.score | parseFloat" readonly class="cmp-rating rating-large">
              <v-icon><i class="icon star">star</i></v-icon>
            </v-rating>
            <p class="score-txt"><strong>{{ratingAverageInfo.score | parseFloat}}</strong><span>/</span><em>5</em></p>
          </div>
          <div class="review-btn-cnt">
            <v-btn outlined color="primary" height="46" width="160" class="gray-outlined">Write a Review</v-btn>
          </div>
        </div>
        <div class="rating-score-right">
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
                see more
              </button>
            </div>
        </li>
      </ul>
      <!-- //최근 리뷰 썸네일 리스트 -->

      <!-- 리뷰 정렬/필터 -->
      <div class="review-sort-box">
        <p class="cmp-font fnt-20">All 103</p>
        <v-btn-toggle v-model="reviewSort" tile color="primary" group class="cmp-toggleBtn">
          <v-btn text height="auto" class="cmp-font fnt-14">Latest </v-btn>
          <v-btn text height="auto" class="cmp-font fnt-14">Latest Recommended</v-btn>
        </v-btn-toggle>
      </div>
      <v-btn-toggle v-model="reviewFilter" tile color="primary" group class="cmp-toggleBtn toggleBtn-text">
        <v-btn text height="auto" class="cmp-font fnt-14">All</v-btn>
        <v-btn text height="auto" class="cmp-font fnt-14">Photo/Video Reviews 34</v-btn>
        <v-btn text height="auto" class="cmp-font fnt-14">General Reviews 69</v-btn>
      </v-btn-toggle>
      <!-- //리뷰 정렬/필터 -->

      <!-- 리뷰 리스트 -->
      <div class="prd-review-list">
        <div v-for="(item,index) in reviewList" :key="index" role="button" class="prd-review-item" @click="reviewToggle">
          <div class="info-box">
            <div v-if="(item.video_url || item.image_url) && (item.image_length >= 1)" role="button" tabindex="0" class="review-thumbnail-btn" @click="reviewDetailOpen">
              <div v-if="item.video_url" class="video-cnt">
                <VideoPlayer :path="item.video_url" :poster="item.image_url[0]" :mute="true"></VideoPlayer>
              </div>
              <v-img v-if="item.video_url===null && item.image_url[0]" :src="item.image_url[0]" alt="review thumbnail" />
              
              <div v-if="item.video_url" class="play-ico-cnt">
                <i v-cmp-icon="{name:'play',invert:1}" ></i>
              </div>
              <div v-if="item.image_length > 1" class="size">{{item.image_length}}</div>
            </div>

            <div class="info-cnt" :class="{full : item.image_url===null && item.video_url===null}">
              <div class="cnt-box0"><!-- 221024 상품평 품번 : <div class="cnt-box0"> 추가 --->
                <v-rating :value="item.rating_score" readonly class="cmp-rating rating-default">
                  <v-icon><i class="icon star">star</i></v-icon>
                </v-rating>
                <!-- 2022-09-15-en 상품평 정보 추가 -->
                <div class="info-txt0 info-left">
                  <span>{{item.prd_name}}</span>
                </div>
                <!--// 2022-09-15-en 상품평 정보 추가 -->
              </div>
              <div class="cnt-box1"><!-- 221024 상품평 품번 : <div class="cnt-box1"> 추가 --->
                <div class="info-txt0">
                  <span>{{item.id}} (K-Review)</span><!-- 2022-10-11 텍스트 추가 -->
                </div>
                <div class="date">{{item.date}}</div>
                <button class="info-txt1">Report/Block</button>
                <button class="review-like-btn" :class="{on:item.like_checked}" @click="reviewLike($event, index)">
                  <i class="cmp-icon icon-before" :class="[{'i-recommendon':item.like_checked},{'i-recommendoff':!item.like_checked}]">추천</i>
                  <span class="count">{{item.like_count}}</span>
                </button>
              </div>

              <!-- 2022-09-15-en 상품평 정보 추가 -->
              <!-- [퍼블수정] 상춤평 유저 정보 수정 -->
              <div class="review-spec">
                <p><span v-for="(item2, index2) in item.info" :key="index2">{{item2}}</span></p>
                <p><span v-for="(item3, index3) in item.info2" :key="index3">{{item3}}</span></p>
              </div>
              <!--// 2022-09-15-en 상품평 정보 추가 -->

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
        </div>
      </div>

      <ProductListPaging />

      <!-- //리뷰 리스트 -->
    </template>
    <!-- //리뷰 있을 때 -->
    <!-- 리뷰 없을 때 -->
    <div v-else class="prd-noreview">
      <!-- <div>
        <p class="prd-tit">구매 후 리뷰 작성하시면, 마일리지를 드려요!</p>
        <ul class="cmp-list list-dotType2 bottom0">
          <li>정상상품 : 0.5% / 아울렛상품 : 0.1% </li>
          <li>온/오프라인 베스트 리뷰 : 월 5명 10만원 바우처</li>
          <li>포토/동영상 리뷰 (최초/일반) : 1,500M / 500M</li>
          <li>도움이 되었어요 : 100M </li>
        </ul>
        <button class="cmp-font fnt-14 button"><span class="line">상품평 작성 혜택</span></button>
      </div> -->
      <v-btn large outlined color="primary" class="center-btn">Write a Review</v-btn><!-- [퍼블수정]23.01.25 버튼 수정 -->
    </div>
    <!-- 리뷰 없을 때 -->

    <!-- 체험단 -->
    <!--- <div class="prd-tit-box2">
      <h3 class="tit">Experience Group 15</h3>
      <p class="txt">These are product reviews who won the TheHandsome.com Experience Group event.</p>
    </div>
    <div class="prd-review-list review-bottom">
      <div v-for="(item,index) in testerReviewList" :key="index" class="prd-review-item">
        <div class="info-box">
          <div role="button" v-if="item.image" tabindex="0" class="review-thumbnail-btn" @click="reviewDetailOpen">
            <v-img :src="item.image" alt="review thumbnail" />
            <div class="size">{{item.image_length}}</div>
          </div>
          <div class="info-cnt">
            <div class="info-txt2">
              <span class="c-black">{{item.profile_name}}</span>
              <span v-for="(item2,index2) in item.info" :key="index2">{{item2}}</span>
            </div>
            <p class="review" v-html="item.review"></p>
          </div>
        </div>
      </div>
    </div> -->
    <!-- //체험단 -->
    <!-- <v-container fluid>
        <ProductListPaging />
    </v-container> -->
  </div>
</template>

<script>
import VideoPlayer from '~/components/common/VideoPlayer'

export default {
  props: {
    pageClass : {
      type : String,
      default: () => ""
    },
  },
  components: {
    VideoPlayer,
  },
  data: () => ({
    ratingAverageInfo : {
      score : "4.0",
      item : [
        {name : 'Size' , text : 'Suitable', percent : 60},
        {name : 'Design' , text : 'Same as screen',percent : 48},
        {name : 'Color' , text : 'Bright',percent : 72}
      ]
    },
    ratingDetailInfo : {
      0 : [
        {text : 'Tight' , percent : 20, activeRating : false },
        {text : 'Suitable' , percent : 60 , activeRating : true },
        {text : 'Loose' , percent : 20 ,activeRating : false }
      ],
      1 : [
        {text : 'Nice' , percent : 20 , activeRating : false},
        {text : 'Same as screen' , percent : 48 , activeRating : true},
        {text : 'Recommandable' , percent : 32 , activeRating : false},
      ],
      2 : [
        {text : 'Dark' , percent : 10, activeRating : false},
        {text : 'Moisturizing power' , percent : 18, activeRating : false},
        {text : 'Bright' , percent : 72, activeRating : true}
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
      {
        image_length : 1,
        image_url : [
          'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img1.png'
        ],
        video_url : null,
        id : 'hand****',
        level : 'STAR',
        rating_score: 5,
        info : ["COCOA", "M",], // 옵션
        info2 : ['47inch','58kg', 'Average'],
        like_checked : true,
        like_count : 21,
        review : 'Absolutely gorgeous dress! Fits true to size, generous chest area, amazing colour, lined, etc. Perfect dress summer holiday dress in every sense. Love the pattern and cutouts on this dress but it’s not suitable for bigger type.',
        date : '07 Nov. 2022',
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
        info : ["COCOA", "M",], // 옵션
        info2 : ['47inch','58kg', 'Average'],
        like_checked : false,
        like_count : 21,
        review : 'Absolutely gorgeous dress! Fits true to size, generous chest area, amazing colour, lined, etc. Perfect dress summer holiday dress in every sense. Love the pattern and cutouts on this dress but it’s not suitable for bigger type. Absolutely gorgeous dress! Fits true to size, generous chest area, amazing colour, lined, etc. Perfect dress summer holiday dress in every sense. Love the pattern and cutouts on this dress but it’s not suitable for bigger type.',
        date : '07 Nov. 2022',
        satisfaction : [
          {title:'Suitable', name:'Size'},
          {title:'Same as Screen', name:'Design'}, 
          {title:'Bright', name:'Color'}
        ]
      },
      {
        image_length : 1,
        image_url : null,
        video_url : null,
        id : 'hand****',
        level : 'STAR',
        rating_score: 4,
        info : ["COCOA", "M",], // 옵션
        info2 : ['47inch','58kg', 'Average'],
        like_checked : false,
        like_count : 21,
        review : 'Absolutely gorgeous dress! Fits true to size, generous chest area, amazing colour, lined, etc. Perfect dress summer holiday dress in every sense. Love the pattern and cutouts on this dress but it’s not suitable for bigger type.',
        date : '07 Nov. 2022',
        satisfaction : [
          {title:'Suitable', name:'Size'},
          {title:'Same as Screen', name:'Design'}, 
          {title:'Bright', name:'Color'}
        ]
      },
      {
        image_length : 1,
        image_url : null,
        video_url : null,
        id : 'hand****',
        level : 'STAR',
        rating_score: 4,
        info : ["COCOA", "M",], // 옵션
        info2 : ['47inch','58kg', 'Average'],
        like_checked : false,
        like_count : 21,
        review : 'Absolutely gorgeous dress! Fits true to size, generous chest area, amazing colour, lined, etc. Perfect dress summer holiday dress in every sense. Love the pattern and cutouts on this dress but it’s not suitable for bigger type.',
        date : '07 Nov. 2022',
        satisfaction : [
          {title:'Suitable', name:'Size'},
          {title:'Same as Screen', name:'Design'}, 
          {title:'Bright', name:'Color'}
        ]
      },
      {
        image_length : 1,
        image_url : null,
        video_url : null,
        id : 'hand****',
        level : 'STAR',
        rating_score: 4,
        info : ["COCOA", "M",], // 옵션
        info2 : ['47inch','58kg', 'Average'],
        like_checked : false,
        like_count : 21,
        review : 'Absolutely gorgeous dress! Fits true to size, generous chest area, amazing colour, lined, etc. Perfect dress summer holiday dress in every sense. Love the pattern and cutouts on this dress but it’s not suitable for bigger type.',
        date : '07 Nov. 2022',
        satisfaction : [
          {title:'Suitable', name:'Size'},
          {title:'Same as Screen', name:'Design'}, 
          {title:'Bright', name:'Color'}
        ]
      },
    ],
    styleLiveList : [
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
    /*
    testerReviewList : [ // 체험단 리스트
      {
        link : '#n',
        image_length : 3,
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-experience-img1.png',
        profile_name : 'jang*yun',
        profile_image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-profile-img1.png',
        info : ['30’s','sensitive'],
        review : "Handsome's luxury beauty oera, I think my damaged skin will come back if I use it consistently. Handsome's luxury beauty oera, I think my damaged skin will come back if I use it consistently.",
      },
      {
        link : '#n',
        image_length : 3,
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-experience-img2.png',
        profile_name : 'jang*yun',
        profile_image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-profile-img2.png',
        info : ['30’s','sensitive'],
        review : "Handsome's luxury beauty oera, I think my damaged skin will come back if I use it consistently. Handsome's luxury beauty oera, I think my damaged skin will come back if I use it consistently.",
      },
      {
        link : '#n',
        image_length : 3,
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-experience-img1.png',
        profile_name : 'jang*yun',
        profile_image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-profile-img1.png',
        info : ['30’s','sensitive'],
        review : "Handsome's luxury beauty oera, I think my damaged skin will come back if I use it consistently. Handsome's luxury beauty oera, I think my damaged skin will come back if I use it consistently.",
      },
      {
        link : '#n',
        image : null,
        profile_name : 'jang*yun',
        profile_image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-profile-img2.png',
        info : ['30’s','sensitive'],
        review : "Handsome's luxury beauty oera, I think my damaged skin will come back if I use it consistently. Handsome's luxury beauty oera, I think my damaged skin will come back if I use it consistently.",
      }, 
    ],
    */
    reviewSort : 0,
    reviewFilter : 0,
  }),
  created() {
    
  },
  mounted() {
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
      const cl = event.currentTarget.classList
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
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/detail.scss'; //페이지 전용 css
</style>
