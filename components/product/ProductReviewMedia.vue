<template>
  <div class="product-review-media">
    <!-- 상단 텍스트 -->
    <v-layout v-if="data.txtSamll||data.txtTop" row align-center class="upper">
      <span v-if="data.txtTop" class="text-top">{{data.txtTop}}</span>
      <span v-if="data.txtSamll" class="text-small">{{data.txtSamll}}</span>
    </v-layout>

    <!-- [240111] 직원리뷰 라벨 추가 -->
    <!-- 별점 -->
    <v-layout align-center>
      <v-rating :value="data.reviewScoreStar" readonly class="cmp-rating rating-default">
        <v-icon>
          <i class="icon star">별점</i>
        </v-icon>
      </v-rating>
  
      <div class="txt-label">
        <span class="txt">직원리뷰</span>
      </div>
    </v-layout>
    <!-- // [240111] 직원리뷰 라벨 추가 -->

    <!-- 2022-09-15-prd 리뷰 옵션 추가 -->
    <div v-if="data.spec" class="user-info">
      <p>
        <span v-for="(spec, specIdx) in data.spec" :key="specIdx">{{spec}}</span>
      </p>
    </div>

    <div class="user-info">
      <!-- 옵션 -->
      <p>
        <span v-for="(info, infoIdx) in data.userInfo" :key="infoIdx">{{info}}</span>
      </p>
      <!-- 날짜 -->
      <span class="date">{{data.data}}</span>
    </div>

    <!-- 상세 리뷰 -->
    <div class="review-txt">{{data.reviewTxt}}</div>

    <!-- 옵션 리뷰 -->
    <div class="review-option">
      <div class="cmp-info info-type3">
        <span><strong>{{data.reviewOption.size}}</strong> 사이즈</span>
        <span><strong>{{data.reviewOption.design}}</strong> 디자인</span>
        <span><strong>{{data.reviewOption.color}}</strong> 컬러</span>
      </div>
    </div>

    <!-- 첨부한파일 -->
    <template v-if="data.attachFiles">
      <!-- 상품평 이미지 자세히 보기 일 경우 영상 or 이미지가 나열 -->
      <ul v-if="data.selectImg === true" class="attach-list">
        <li v-for="(file, index) in data.attachFiles" :key="index">
          <div role="button" :class="{'selected' : data.select == index}">

            <input :id="'imgSelect'+index" v-model="data.select" type="radio" :disabled="false" :value="index" :name="'imgSelect'+index">
            <!-- 영상 -->
            <label :for="'imgSelect'+index" v-if="file.path" class="video-player">
              <div class="video-cnt">
                <VideoPlayer :loop="file.loop" :path="file.path" :poster="file.poster" :mute="true" :video-ratio="150.93" />
              </div>
              <div class="play-ico-cnt">
                <i class="cmp-icon i-play cmp-icon-undefined invert"></i>
              </div>
            </label>
            <!-- 이미지 -->
            <label :for="'imgSelect'+index"  v-if="file.image">
              <v-img :src="file.image" alt=""></v-img>
            </label>
          </div>
        </li>
      </ul>
      <!-- // 영상 or 이미지가 나열 -->
      <!-- 영상 or 이미지가 나열 -->
      <ul v-else class="attach-list">
        <li v-for="(file, index) in data.attachFiles" :key="index">
          <div role="button" :class="{'selected' : data.select == index}">
            <!-- 영상 -->
            <div v-if="file.path" class="video-player">
              <div class="video-cnt">
                <VideoPlayer :loop="file.loop" :path="file.path" :poster="file.poster" :mute="true" :video-ratio="150.93" />
              </div>
              <div class="play-ico-cnt">
                <div class="vp-btn vp-init-btn"></div>
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

    <div v-if="data.selectImg === true" class="product-review-img">
      <!-- 영상 -->
      <div v-if="data.attachFiles[data.select].path" class="video-player">
        <div class="video-cnt">
          <VideoPlayer :loop="true" :auto-play="true" :path="data.attachFiles[data.select].path" :poster="data.attachFiles[data.select].poster" :mute="true" :video-ratio="150.93" />
        </div>
      </div>
      <!-- 이미지 -->
      <template v-else>
        <v-img :src="data.attachFiles[data.select].image" alt="리뷰 썸네일" />
      </template>

      <div v-if="data.attachFiles[data.select].path" class="play-ico-cnt">
        <i v-cmp-icon="{name:'play',invert:1}" ></i>
      </div>
    </div>
  </div>
</template>

<script>
import VideoPlayer from '~/components/common/VideoPlayer'
export default {
    components: {
    VideoPlayer,
  },
  props: {
    reviewData: {
      type: Object,
      default: ()=>{ 
        return null 
      },
    },
  },
  data: () => ({
    data: null,
    mileage : false,
  }),
  created() {
   const me = this
   me.data = me.reviewData
  },
}
</script>