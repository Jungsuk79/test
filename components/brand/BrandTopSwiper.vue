<template>
  <div class="brand-top-swiper" :class="{'size-type2':size2}">
    <Swiper
      id="brandTopSwiper"
      :options="{
        loop: swiperLoop, // 230105 편집샵슬라이더 : true > swiperLoop 변경
        autoplay: {
          delay: 5000,
        },
        navigation: {
          prevEl: '.bt-swiper-btn-prev',
          nextEl: '.bt-swiper-btn-next',
        },
        on : {
          realIndexChange : btSwiperChange
        },
        pagination: {   // 20221226 추가
          el: '.swiper-pagination',
          clickable: false,
          renderBullet: renderBullet,
          type: 'bullets'
        },
      }"
      :class="{'swiper-no-swiping':!(data && data.length > 1)}"
    >
      <SwiperSlide v-for="(item,index) in data" :key="index" class="bt-swiper-slide">
        <div v-background-image="{url:item.image_url, shading:true}" class="bt-swiper-img"></div>
        <!-- eslint-disable -->
        <div class="bt-swiper-info ani-box">
          <div v-if="item.tags" class="tags ani-cnt">
            <span v-for="(item2, index2) in item.tags" :key="index2" class="ani-txt">{{item2}}</span>
          </div>
          <div class="tit ani-cnt">
            <div class="ani-txt" v-html="item.title"></div>
          </div>
          <div class="desc ani-cnt">
            <div class="ani-txt" v-html="item.desc"></div>
          </div>
        </div>
        <!-- eslint-disable -->
        <nuxt-link :to="item.link_url" class="bt-swiper-link"></nuxt-link>
      </SwiperSlide>
      <div slot="pagination" class="swiper-pagination"></div> <!-- 20221226 추가 -->
      <button slot="button-prev" class="swiper-button-prev bt-swiper-btn-prev"></button>
      <button slot="button-next" class="swiper-button-next bt-swiper-btn-next"></button>
    </Swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    Swiper, SwiperSlide
  },
  props: {
    data: {
      type: Array,
      default: ()=>{ return [] }
    },
    size2 : {
      type: Boolean,
      default : false
    }
  },
  data: () => ({
    swiperLoop : true, // 230105 편집샵슬라이더 : 추가
  }),
  created(){
    if(this.data.length < 2) this.swiperLoop = false // 230105 편집샵슬라이더 : 추가
  },
  mounted(){
    
  },
  destroyed(){
    
  },
  methods: {
    btSwiperChange(){

    },
   renderBullet(idx, cls){ // 20221226 추가 
      return '<span class="swiper-pagination-bullet" index="' + (idx + 1) + '"></span>';
    },
  },
}
</script>