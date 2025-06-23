<template>
  <DialogBasic class="popup-reviewMedia swiper-ver" header-title="Photos/Videos Reviews" :width="880" @hide="closeDialog">
    <template #body>
      <div class="header-cover">
        <v-btn icon small class="open-reviewList">
          <i class="cmp-icon-etc cmp-icon-24 i-reviewList">all</i>
        </v-btn>
        <h1 class="header-tit">Photos/Videos Reviews <strong>{{reviewIdx+1}}</strong>/{{reviewList.length}}</h1>
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
                <v-rating :value="item.rating_score" readonly class="cmp-rating rating-default">
                  <v-icon><i class="icon star">star score</i></v-icon>
                </v-rating>
                <p class="box-info">
                  <span v-for="(item3, index3) in item.info2" :key="index3">{{item3}}</span>
                </p>
                <p class="box-info">
                  <span v-for="(item2, index2) in item.info" :key="index2">{{item2}}</span>
                </p>
                <v-layout justify-space-between align-center>
                  <div class="box-info">
                    <span>{{item.id}}</span>
                    <span>{{item.level}}</span>
                  </div>
                  <div class="box-info"><span>{{item.date}}</span></div>
                </v-layout>

                <!-- eslint-disable -->
                <p class="review" v-html="item.review"></p>
                <!-- eslint-disable -->

                <!-- 옵션 리뷰 -->
                <div class="review-option">
                  <div class="cmp-info info-type3">
                    <span><strong>{{item.reviewOption.size}}</strong> Size</span>
                    <span><strong>{{item.reviewOption.design}}</strong> Design</span>
                    <span><strong>{{item.reviewOption.color}}</strong> Bright</span>
                  </div>
                </div>

                <button class="review-like-btn" :class="{on:item.like_checked}" @click="reviewLike(index)">
                  <i class="cmp-icon icon-before" :class="[{'i-recommendon':item.like_checked},{'i-recommendoff':!item.like_checked}]">recommend</i>
                  <span class="count">{{item.like_count}}</span>
                </button>
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
                  <v-img :src="item.attachFiles[item.select].image" alt="review thumbnail" />
                </template>

                <div v-if="item.attachFiles[item.select].path" class="play-ico-cnt">
                  <i v-cmp-icon="{item:'play',invert:1}" ></i>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div slot="button-prev" class="swiper-button-prev prev-poup-btn"><i class="cmp-icon-etc cmp-icon-60 i-prev">previous</i></div>
        <div slot="button-next" class="swiper-button-next next-poup-btn"><i class="cmp-icon-etc cmp-icon-60 i-next">next</i></div>
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
    reviewIdx : 2,
    reviewList : [
      {
        select : 0,
        id : 'hand****',
        // level : 'STAR',
        rating_score: 5,
        reviewOption: { // 옵션 리뷰
          size: "Suitable",
          design: "Same as Screen",
          color: "Same as Screen",
        },
        info : ['COCOA', 'L'],
        info2 : ['168cm', '58kg', 'Average'],
        like_checked : false,
        like_count : 15,
        review : 'Absolutely gorgeous dress! Fits true to size, generous chest area, amazing colour, lined, etc. Perfect dress summer holiday dress in every sense.',
        date : '07 Nov. 2022',
        attachFiles: [ // 첨부파일 (이미지 or 영상)
          {
            path: "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
            poster: "https://img.thehandsome.com/md/publish/dummy/pc/video.jpg",
            youtube: false,
            loop: true,
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
        select : 0,
        id : 'hand****',
        // level : 'STAR',
        rating_score: 3,
        reviewOption: { // 옵션 리뷰
          size: "Suitable",
          design: "Same as Screen",
          color: "Same as Screen",
        },
        info : ['COCOA', 'L'],
        info2 : ['168cm', '58kg', 'Average'],
        like_checked : true,
        like_count : 21,
        review : 'Absolutely gorgeous dress! Fits true to size, generous chest area, amazing colour, lined, etc. Perfect dress summer holiday dress in every sense. Love the pattern and cutouts on this dress but it’s not suitable for bigger type.',
        date : '07 Nov. 2022',
        attachFiles: [ // 첨부파일 (이미지 or 영상)
          {
            image: "https://img.thehandsome.com/md/publish/dummy/pc/001.jpg"
          },
          {
            path: "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
            poster: "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-02.png",
            youtube: false,
            loop: true,
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
          },
        ],
      },
      {
        select : 0,
        id : 'hand****',
        // level : 'STAR',
        rating_score: 4,
        reviewOption: { // 옵션 리뷰
          size: "Suitable",
          design: "Same as Screen",
          color: "Same as Screen",
        },
        info : ['COCOA', 'L'],
        info2 : ['168cm', '58kg', 'Average'],
        like_checked : false,
        like_count : 6,
        review : 'Absolutely gorgeous dress! Fits true to size, generous chest area, amazing colour, lined, etc.',
        date : '07 Nov. 2022',
        attachFiles: [ // 첨부파일 (이미지 or 영상)
          {
            image: "https://img.thehandsome.com/md/publish/dummy/pc/002.jpg"
          },
        ],
      },
      {
        select : 0,
        id : 'hand****',
        // level : 'STAR',
        rating_score: 4,
        reviewOption: { // 옵션 리뷰
          size: "Suitable",
          design: "Same as Screen",
          color: "Same as Screen",
        },
        info : ['COCOA', 'L'],
        info2 : ['168cm', '58kg', 'Average'],
        like_checked : false,
        like_count : 6,
        review : 'Absolutely gorgeous dress! Fits true to size, generous chest area, amazing colour, lined, etc. Perfect dress summer holiday dress in every sense. Love the pattern and cutouts on this dress but it’s not suitable for bigger type.',
        date : '07 Nov. 2022',
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
        select : 0,
        id : 'hand****',
        // level : 'STAR',
        rating_score: 4,
        reviewOption: { // 옵션 리뷰
          size: "Suitable",
          design: "Same as Screen",
          color: "Same as Screen",
        },
        info : ['COCOA', 'L'],
        info2 : ['168cm', '58kg', 'Average'],
        like_checked : false,
        like_count : 6,
        review : 'Absolutely gorgeous dress! Fits true to size, generous chest area, amazing colour, lined, etc. Perfect dress summer holiday dress in every sense. Love the pattern and cutouts on this dress but it’s not suitable for bigger type.',
        date : '07 Nov. 2022',
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
