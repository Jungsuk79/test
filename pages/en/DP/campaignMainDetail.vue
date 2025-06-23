<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->  
    <div class="content-wrap">
      <!-- 타이틀 -->
      <div class="brand-detail-top mb-20">
        <h2 class="tit">SJSJ 2022 S/S</h2>
        <div class="btn-cnt">
          <button class="list-btn"><span class="ir">List View</span></button>
          <button class="zzim-btn" :class="{on:zzim}" @click="zzim = !zzim"><span class="ir">wish</span></button>
        </div>
      </div>
      <!-- //타이틀 -->

      <!-- 상단비주얼 -->
      <div class="brand-campaign-visual">
        <img src="https://img.thehandsome.com/md/publish/dummy/pc/brand-campaign-detail0.png" alt="CAMPAIGN visual image" class="visual-img">
        <div class="txt-cnt">
          <h3 class="tit">ONE DAY JOURNEY</h3>
          <p class="txt">SJSJ, launched in 1997, has been establishing brand loyalty while creating</p>
        </div>
      </div>
      <!-- //상단비주얼 -->

      <!-- 이미지 리스트 -->
      <ul class="brand-campaign-images">
        <li v-for="(item, index) in imageList" :key="index">
          <img :src="item" alt="CAMPAIGN image" />
        </li>
      </ul>
      <!-- //이미지 리스트 -->

      <!-- 비디오 -->
      <div class="brand-campaign-video">
        <div class="campaign-video-cnt">
          <div class="cnt">
            <VideoPlayer
              path="https://img.thehandsome.com/md/publish/dummy/pc/video.mp4"
              poster="https://img.thehandsome.com/md/publish/dummy/pc/brand-video-poster.png"
              :auto-play="false"
              :mute="true"
              :controls="true"
              :play-on-scroll="true"
            ></VideoPlayer>
          </div>
        </div>
        <p class="txt">2022 S/S signature line proposed by SJSJ</p>
      </div>
      <!-- //비디오 -->

      <!-- 랜딩형 컨텐츠 -->
      <div class="brand-campaign-landing">
        <Swiper
          :options="{
            pagination: {
              el: '.cmp-swiper-paginationBullet',
              clickable: true
            },
            navigation: {
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            },
          }"
          :class="{'swiper-no-swiping':landingSwiper.length <= 1}"
        >
          <SwiperSlide v-for="(item,index) in landingSwiper" :key="index">
            <nuxt-link :to="item.link_url">
              <div v-background-image="{url:item.image_url}"></div>
              <!-- eslint-disable -->
              <p class="txt" v-html="item.desc"></p>
              <!-- eslint-disable -->
            </nuxt-link>
          </SwiperSlide>
          <template v-if="landingSwiper.length > 1">
            <div slot="button-prev" class="swiper-button-prev swiper-no-swiping"><span class="ir">prev</span></div>
            <div slot="button-next" class="swiper-button-next swiper-no-swiping"><span class="ir">next</span></div>
            <div slot="pagination" class="cmp-swiper-paginationBullet swiper-pagination"></div>
          </template>
        </Swiper>
      </div>
      <!-- //랜딩형 컨텐츠 -->

    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import VideoPlayer from '~/components/common/VideoPlayer'

export default {
  components: {
     Swiper, 
    SwiperSlide,
    VideoPlayer
  },
  layout: 'LayoutBasics',

  data: () => ({
    zzim : false,
    imageList : [
      'https://img.thehandsome.com/md/publish/dummy/pc/brand-campaign-detail1.png',
      'https://img.thehandsome.com/md/publish/dummy/pc/brand-campaign-detail2.png',
      'https://img.thehandsome.com/md/publish/dummy/pc/brand-campaign-detail3.png'
    ],
    landingSwiper : [
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-campaign-detail4.png',
        link_url : '#n',
        desc : '2022 S/S signature line proposed by SJSJ'
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-campaign-detail4.png',
        link_url : '#n',
        desc : '2022 S/S signature line proposed by SJSJ'
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-campaign-detail4.png',
        link_url : '#n',
        desc : '2022 S/S signature line proposed by SJSJ'
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-campaign-detail4.png',
        link_url : '#n',
        desc : '2022 S/S signature line proposed by SJSJ'
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-campaign-detail4.png',
        link_url : '#n',
        desc : '2022 S/S signature line proposed by SJSJ'
      },
    ]
  }),

  created(){
    
  },// created

  mounted(){
    
  },// mounted

  methods: {
    
  }// methods
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/brand.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
@import '@/assets/scss/en/en.scss'; // 글로벌 en scss
</style>
