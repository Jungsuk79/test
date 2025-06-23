<template>
  <DialogBasic
   class="popup-reviewMedia swiper-ver" 
    header-title="포토&amp;동영상 리뷰" 
    :width="880"
    @hide="closeDialog">
    <template #body>
      <div class="header-cover">
        <v-btn icon small class="open-reviewList">
          <i class="cmp-icon-etc cmp-icon-24 i-reviewList">모아보기</i>
        </v-btn>
        <h1 class="header-tit">포토&amp;동영상 상품평 <strong>{{reviewIdx+1}}</strong>/{{reviewList.length}}</h1>
      </div>
      <div class="cmp-swiper-box btn-type2 btn-large">
        <Swiper 
          class="review-detail-swiper"
          :options="{
            init : false,
            slidesPerView: 1,
            autoHeight : true,
            navigation: {
              prevEl: '.prev-poup-btn',
              nextEl: '.next-poup-btn',
            },
            on : {
              slideChange : swiperChange
            }
          }"
          :class="{'swiper-no-swiping':reviewList.length <= 1}"
        >
          <SwiperSlide v-for="(item,index) in reviewList" :key="index">
            <div class="product-review-media">  
              <div class="info-cnt full">
                <!-- 221024 상품평 품번 : 수정 -->
                <v-layout justify-space-between align-center class="mb-8">
                  <!-- [240111] 직원리뷰 라벨 추가 -->
                  <v-layout align-center>
                    <v-rating :value="item.rating_score" readonly class="cmp-rating rating-default">
                      <v-icon><i class="icon star">별점</i></v-icon>
                    </v-rating>

                    <div class="txt-label">
                      <span class="txt">직원리뷰</span>
                    </div>
                  </v-layout>
                  <!-- // [240111] 직원리뷰 라벨 추가 -->

                  <button class="review-like-btn" :class="{on:item.like_checked}" @click="reviewLike(index)">
                    <i class="cmp-icon icon-before" :class="[{'i-recommendon':item.like_checked},{'i-recommendoff':!item.like_checked}]">추천</i>
                    <span class="count">{{item.like_count}}</span>
                  </button>
                </v-layout>
                <!-- //221024 상품평 품번 : 수정 -->

                <!-- [신규변경] 상품상세 상품평 연동 케이스 추가 -->
                <!-- 221024 상품평 품번 : 추가 -->
                <!-- <nuxt-link class="cmp-font c-gray button" :to="item.prd_number.link"><span class="cmp-font c-gray fnt-14 line">{{item.prd_number.num}}</span></nuxt-link> -->
                <!-- //221024 상품평 품번 : 추가 -->
                <v-layout align-center>
                  <!-- [퍼블수정] 상춤평 유저 정보 수정 -->
                  <!-- [퍼블수정]24.10.28 상품평 3차 체험단 리뷰 케이스 추가 -->
                  <p v-if="index === 0" class="box-info">
                    <template v-for="(item2, index2) in item.info">
                      <span v-if="index2 === 0" :key="`wrap-${index2}`" class="link-wrap">
                        <i class="cmp-icon-etc cmp-icon-12 i-link">링크</i>
                        <a href="#n">
                          <span>{{ item.prd_number.num }}</span>
                          <span>{{ item2 }}</span>
                        </a>
                      </span>
                      <span v-else class="info-item" :key="`span-${index2}`">{{ item2 }}</span>
                    </template>
                    <template>
                      <div class="spec-wrap">
                        <span v-for="(item3, index3) in item.spec" :key="index3">{{item3}}</span>
                      </div>
                    </template>
                  </p>

                  <p v-else-if="index === 1" class="box-info"><!-- 221024 상품평 품번 : class ml-12 추가 -->
                    <template v-for="(item2, index2) in item.info">
                      <a href="#n" v-if="index2 === 0" :key="`a-${index2}`"><i class="cmp-icon-etc cmp-icon-12 i-link">링크</i>{{ item2 }} </a>
                      <span v-else :key="`span-${index2}`">{{ item2 }}</span>
                    </template>
                  </p>
                  <!-- //[퍼블수정]24.10.28 상품평 3차 체험단 리뷰 케이스 추가 -->
                  <p class="box-info" v-else><!-- 221024 상품평 품번 : class ml-12 추가 -->
                    <span v-for="(item2, index2) in item.info" :key="index2">{{item2}}</span>
                  </p>
                  <!-- 2022-09-15-prd 상품평 정보 추가 -->
                  <p v-if="index !== 0" class="box-info">
                    <span v-for="(item3, index3) in item.spec" :key="index3">{{item3}}</span>
                  </p>
                  <!--// 2022-09-15-prd 상품평 정보 추가 -->
                  <!-- // [신규변경] 상품상세 상품평 연동 케이스 추가 -->
                </v-layout>
                <!-- 221024 상품평 품번 : class 추가 및 btn 수정 -->
                <v-layout justify-space-between align-center class="mt-8">
                  <div class="box-info border-ver">
                    <span>{{item.id}}</span>
                    <span>{{item.level}}</span>
                    <span>{{item.date}}</span>
                  </div>
                  <!-- [퍼블수정]23.02.22 차단 삭제 -->
                  <button class="cmp-font c-gray button fnt-14">신고</button>
                </v-layout>
                <!-- //221024 상품평 품번 : class 추가 및 btn 수정 -->

                <!-- eslint-disable -->
                <p class="review" v-html="item.review"></p>
                <!-- eslint-disable -->

                <!-- 옵션 리뷰 -->
                <div class="review-option">
                  <div class="cmp-info info-type3">
                    <!-- [퍼블수정]23.02.22 위치 수정 -->
                    <span><strong>사이즈</strong> {{item.reviewOption.size}}</span>
                    <span><strong>디자인</strong> {{item.reviewOption.design}}</span>
                    <span><strong>컬러</strong> {{item.reviewOption.color}}</span>
                  </div>
                </div>

                <!-- 221024 상품평 품번 : 위치 변경으로 삭제 -->
              </div>

              <!-- 첨부한파일 -->
              <template v-if="item.attachFiles">
                <!-- 상품평 이미지 자세히 보기 일 경우 영상 or 이미지가 나열 -->
                <ul class="attach-list">
                  <li v-for="(file, idx) in item.attachFiles" :key="idx">
                    <div role="button" :class="{'selected' : item.select === idx}">
                      <input :id="'imgSelect'+index+idx" v-model="item.select" type="radio" :disabled="false" :value="idx" :name="'imgSelect'+index">
                      <!-- 영상 -->
                      <label :for="'imgSelect'+index+idx" v-if="file.path" class="video-player">
                        <div class="video-cnt">
                          <VideoPlayer :loop="file.loop" :path="file.path" :poster="file.poster" :mute="true" :video-ratio="150.93" />
                        </div>
                        <div class="play-ico-cnt">
                          <i class="cmp-icon i-play cmp-icon-undefined invert"></i>
                        </div>
                      </label>
                      <!-- 이미지 -->
                      <label :for="'imgSelect'+index+idx"  v-if="file.image">
                        <v-img :src="file.image" alt=""></v-img>
                      </label>
                    </div>
                  </li>
                </ul>
                <!-- // 영상 or 이미지가 나열 -->
              </template>
              <!-- 첨부한파일 -->
              <div v-if="item.attachFiles" class="product-review-img">
                <!-- 영상 -->
                <div v-if="item.attachFiles[item.select].path" class="video-player">
                  <div class="video-cnt">
                    <VideoPlayer :loop="true" :auto-play="true" :path="item.attachFiles[item.select].path" :poster="item.attachFiles[item.select].poster" :mute="true" :video-ratio="150.93" />
                  </div>
                </div>
                <!-- 이미지 -->
                <template v-else>
                  <v-img :src="item.attachFiles[item.select].image" alt="리뷰 썸네일" />
                </template>

                <div v-if="item.attachFiles[item.select].path" class="play-ico-cnt">
                  <i v-cmp-icon="{item:'play',invert:1}" ></i>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div slot="button-prev" class="swiper-button-prev prev-poup-btn"><i class="cmp-icon-etc cmp-icon-60 i-prev">이전</i></div>
        <div slot="button-next" class="swiper-button-next next-poup-btn"><i class="cmp-icon-etc cmp-icon-60 i-next">다음</i></div>
      </div>
      <!-- //인기상품 -->
    </template> 
  </DialogBasic>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import VideoPlayer from '~/components/common/VideoPlayer'
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  components: { 
    Swiper, 
    SwiperSlide,
    VideoPlayer,
    DialogBasic
  },
  props: {},
  data: () => ({
    reviewIdx : 1,
    reviewList : [
      {
        prd_number : {
          num : 'CM2C9KTO002W',
          link : '#n',
        },
        select : 0,
        id : 'hand****',
        level : 'STAR',
        rating_score: 5,
        reviewOption: { // 옵션 리뷰
          size: "잘맞아요",
          design: "적당해요",
          color: "밝아요",
        },
        prd_name : '린넨 블렌드 브레이드 라인 셔츠', // 묶음 상품 리뷰시 상품명 노출
        info : ['COCOA', 'L', '더한섬닷컴'],
        spec : ['168cm', '58kg', '통통한 체형'],
        like_checked : false,
        like_count : 15,
        review : '정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추입니다. 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추 정말 예쁘네요.',
        date : '2022.02.06',
        attachFiles: [ // 첨부파일 (이미지 or 영상)
          {
            path: "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
            poster: "https://img.thehandsome.com/md/publish/dummy/pc/video.jpg",
            youtube: false,
            loop: true,
            time: 214, // 총 영상시간
          },
          {
            image: "https://img.thehandsome.com/md/publish/dummy/pc/001.jpg"
          },
          {
            image: "https://img.thehandsome.com/md/publish/dummy/pc/002.jpg"
          },
          {
            image: "https://img.thehandsome.com/md/publish/dummy/pc/003.jpg"
          },
          {
            image: "https://img.thehandsome.com/md/publish/dummy/pc/004.jpg"
          },
          {
            image: "https://img.thehandsome.com/md/publish/dummy/pc/005.jpg"
          },
        ],
      },
      {
        prd_number : {
          num : 'CM2C9KTO002W',
          link : '#n',
        },
        select : 0,
        id : 'hand****',
        level : 'STAR',
        rating_score: 3,
        reviewOption: { // 옵션 리뷰
          size: "잘맞아요",
          design: "적당해요",
          color: "밝아요",
        },
        prd_name : '와이드 데님 팬츠', // 묶음 상품 리뷰시 상품명 노출
        info : ['COCOA', 'L', '더한섬닷컴'],
        spec : ['168cm', '58kg', '통통한 체형'],
        like_checked : true,
        like_count : 21,
        review : '정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전 강추합니다.',
        date : '2022.02.06',
        attachFiles: [ // 첨부파일 (이미지 or 영상)
          {
            image: "https://img.thehandsome.com/md/publish/dummy/pc/001.jpg"
          },
          {
            path: "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
            poster: "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-02.png",
            youtube: false,
            loop: true,
            time: 214, // 총 영상시간
          },
          {
            image: "https://img.thehandsome.com/md/publish/dummy/pc/002.jpg"
          },
          {
            image: "https://img.thehandsome.com/md/publish/dummy/pc/003.jpg"
          },
          {
            image: "https://img.thehandsome.com/md/publish/dummy/pc/004.jpg"
          },
          {
            path: "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
            poster: "https://img.thehandsome.com/md/publish/dummy/pc/video.jpg",
            youtube: false,
            loop: true,
            time: 214, // 총 영상시간
          },
        ],
      },
      {
        prd_number : {
          num : 'CM2C9KTO002W',
          link : '#n',
        },
        select : 0,
        id : 'hand****',
        level : 'STAR',
        rating_score: 4,
        reviewOption: { // 옵션 리뷰
          size: "잘맞아요",
          design: "적당해요",
          color: "밝아요",
        },
        prd_name : '브리티쉬 밀리터리 스니커즈', // 묶음 상품 리뷰시 상품명 노출
        info : ['COCOA', 'L', '더한섬닷컴'],
        spec : ['168cm', '58kg', '통통한 체형'],
        like_checked : false,
        like_count : 6,
        review : '정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전 강추합니다. 이번 가을 입을 거 고민 할 필요가 없어졌어요',
        date : '2022.02.06',
        attachFiles: [ // 첨부파일 (이미지 or 영상)
          {
            image: "https://img.thehandsome.com/md/publish/dummy/pc/002.jpg"
          },
        ],
      },
      {
        prd_number : {
          num : 'CM2C9KTO002W',
          link : '#n',
        },
        select : 0,
        id : 'hand****',
        level : 'STAR',
        rating_score: 4,
        reviewOption: { // 옵션 리뷰
          size: "잘맞아요",
          design: "적당해요",
          color: "밝아요",
        },
        prd_name : '브리티쉬 밀리터리 스니커즈', // 묶음 상품 리뷰시 상품명 노출
        info : ['COCOA', 'L', '더한섬닷컴'],
        spec : ['168cm', '58kg', '통통한 체형'],
        like_checked : false,
        like_count : 6,
        review : '정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전 강추합니다. 이번 가을 입을 거 고민 할 필요가 없어졌어요',
        date : '2022.02.06',
        attachFiles: [ // 첨부파일 (이미지 or 영상)
          {
            image: "https://img.thehandsome.com/md/publish/dummy/pc/003.jpg"
          },
          {
            image: "https://img.thehandsome.com/md/publish/dummy/pc/004.jpg"
          },
        ],
      },
      {
        prd_number : {
          num : 'CM2C9KTO002W',
          link : '#n',
        },
        select : 0,
        id : 'hand****',
        level : 'STAR',
        rating_score: 4,
        reviewOption: { // 옵션 리뷰
          size: "잘맞아요",
          design: "적당해요",
          color: "밝아요",
        },
        prd_name : '브리티쉬 밀리터리 스니커즈', // 묶음 상품 리뷰시 상품명 노출
        info : ['COCOA', 'L', '더한섬닷컴'],
        spec : ['168cm', '58kg', '통통한 체형'],
        like_checked : false,
        like_count : 6,
        review : '정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전 강추합니다. 이번 가을 입을 거 고민 할 필요가 없어졌어요',
        date : '2022.02.06',
        attachFiles: [ // 첨부파일 (이미지 or 영상)
          {
            image: "https://img.thehandsome.com/md/publish/dummy/pc/004.jpg"
          },
        ],
      },
    ],
  }),
  mounted() {
    const me = this
    me.$nextTick(() => {
      setTimeout(() => {
        const swipe = me.$el.querySelector('.review-detail-swiper')
        swipe.swiper.init()
        swipe.swiper.slideTo(me.reviewIdx,0)
        swipe.classList.add('on')
      }, 100)
    })
  },
  methods: {
    closeDialog() {
      this.$emit('close')
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
    swiperChange(){
      const me = this
      const swiper = me.$el.querySelector('.review-detail-swiper').swiper
      const idx = swiper.realIndex
      me.reviewIdx = idx
    }
  },
}
</script>

<style lang="scss">
  .v-dialog{overflow:visible !important;}
</style>
