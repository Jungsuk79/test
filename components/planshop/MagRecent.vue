<template>
  <div>
    <div class="tit mb-20">{{title}}</div>
      <Swiper
        :options="{
          slidesPerView: 'auto',
          slidesPerView: 4,
          _slidesPerGroup: 4,
          spaceBetween: 2,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        }"
        :class="[
          '',
          '',
          {'swiper-no-swiping': recentList.length <= 4}
        ]"
      class="cmp-bar-swiper exhibit-swiper product-unit-list-swipe product-unit-list-mini product-list-layout-4">
        <SwiperSlide v-for="(item, idx) in recentList" :key="idx" class="item-exhibit-unit">
        <div>
            <nuxt-link class="button" to="#n">
                <VideoPlayer v-if="item.video" :path="item.video_url" :loop="true" :poster="item.image_url" :play-on-scroll="true" :videoRatio="100" :hide-gui="true" class="videobox" /><!--20221208 :hide-gui="true" 추가-->

                <!--20221206 이미지태그변경 -->
                <div v-else v-background-image="{url:item.image_url}" class="rec-image"></div>
                <!-- <v-img v-else :src="item.image_url" alt="" class="rec-image"></v-img> -->

                <div class="rec-info">
                  <div class="rec-name">{{item.brand_name}}</div>
                  <div class="rec-con">{{item.sell_price | number}}</div>
                </div>
            </nuxt-link>
            <a @click.stop="item.gotoLink"></a>
        </div>
        </SwiperSlide>
        <button slot="button-prev" class="swiper-button-prev"></button>
        <button slot="button-next" class="swiper-button-next"></button>
      </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import VideoPlayer from '~/components/common/VideoPlayer'


export default {
  components: {
    Swiper, SwiperSlide,
    VideoPlayer,

  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      },
    },
    title : {
      type : String,
      default : '최신 THE 매거진',
    }
  },
  data: () => ({
    productUnitType : 'mini',
    recentList : [
      {
        "video" : true, // 비디오타입
        "brand_name": "매거진카테고리",
        "sell_price": "1매거진제목 최대2줄말줄임",
        "video_url": "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
        "link_url" : "#none",
      },{
        "brand_name": "매거진카테고리",
        "sell_price": "2뮤즈 신민아와 함께한 LÄTT UNIVERSE Part. 1",
        "image_url": "https://img-stg.thehandsome.com/attachment/display/2022/12/02/1550034c-7e7d-47f8-9852-690058bf059d_10.png",
        "link_url" : "#none",
      },{
        "brand_name": "매거진카테고리",
        "sell_price": "3뮤즈 신민아와 함께한 LÄTT UNIVERSE뮤즈 신민아와 함께한 LÄTT UNIVERSE뮤즈 신민아와 함께한 LÄTT UNIVERSE",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/detail-contnest-img3.png",
        "link_url" : "#none",
      },{
        "brand_name": "매거진카테고리",
        "sell_price": "4매거진제목",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/detail-stylelive-img2.png",
        "link_url" : "#none",
      },{
        "brand_name": "매거진카테고리",
        "sell_price": "5매거진제목",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/detail-contnest-img2.png",
        "link_url" : "#none",
      },{
        "brand_name": "매거진카테고리",
        "sell_price": "6매거진제목",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/detail-contnest-img3.png",
        "link_url" : "#none",
      },{
        "brand_name": "매거진카테고리",
        "sell_price": "7매거진제목",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/detail-similar-img2.png",
        "link_url" : "#none",
      },{
        "brand_name": "매거진카테고리",
        "sell_price": "8매거진제목",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/detail-stylelive-img2.png",
        "link_url" : "#none",
      },
    ]
  }),
  created(){
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped></style>
