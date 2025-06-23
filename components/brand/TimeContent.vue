<template>
  <div class="time-unit-wrap">
    <!-- [퍼블수정]23.07.10 타임메인 수정 -->
    <!-- 수정 내용 : 옵션 수정, SwiperSlide 태그수정, pagination 추가 , methods 수정 -->
    <!-- <div v-background-image="{url:data.list[currentIdx].image_url}" class="tu-blur-bg"></div> --> <!-- 221122 타임메인 : url 변경 -->
    <div class="time-unit-cont">
      <swiper
        id="timeContentSwiper"
        :options="{
          nested: true,
          loop: true,
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            renderBullet: renderBullet,
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          _on: {
            // realIndexChange: swiperChange, // 221122 타임메인 : 삭제
            init: swiperInit
          }
        }"
        class="time-cont-swiper"
      >
        <SwiperSlide v-for="item, idx in data.list" :key="idx" class="ts-cont-slide">
          <div v-background-image="{url:item.image_url, shading:true}" class="time-bg-img"></div>
          <div class="ts-cont-text">
            <div class="tsct-type">{{item.type}}</div>
            <div class="tsct-title">{{item.title}}</div>
          </div>
          <nuxt-link class="link-block" :to="{path:item.link_url}" @mouseover.native="contentsBgChange(idx)"></nuxt-link><!-- 221122 타임메인 : mouseover 이벤트 추가 -->
        </SwiperSlide>
        <div slot="pagination" class="swiper-pagination"></div>
        <button slot="button-prev" class="swiper-button-prev"></button>
        <button slot="button-next" class="swiper-button-next"></button>
        <!-- <div slot="pagination" class="swiper-pagination"></div> -->
      </swiper>
    </div>
    <!-- // [퍼블수정]23.07.10 타임메인 수정 -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'


export default {
  components: {
    Swiper, SwiperSlide,
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data: () => ({
    swiper: null,// 콘텐츠 슬라이드 스와이퍼
    currentIdx : 0
  }),
  created(){
  },
  methods: {
    swiperInit(){
      const me = this
      me.swiper = me.$el.querySelector("#timeContentSwiper").swiper
      // me.$nextTick(me.swiperChange) // 221122 타임메인 : 삭제
    },
    /* swiperChange(){ // 221122 타임메인 : 삭제
      const me = this
      const sw = me.swiper
      if(sw === null){ return }

      const idx = sw.realIndex
      const sl = sw.slides[idx]
      const url = sl.querySelector(".time-bg-img").style["background-image"]
      sl.closest(".time-unit-wrap").querySelector(".tu-blur-bg").style["background-image"] = url
    }, */
    contentsBgChange(index){ // 221122 타임메인 : 추가
      const me = this
      me.currentIdx = index
    },
    renderBullet(idx, cls){
      return '<span class="swiper-pagination-bullet" index="' + (idx + 1) + '"></span>';
    },
  },
}
</script>