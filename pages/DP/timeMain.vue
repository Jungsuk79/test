<template>
  <div class="contents contents-brand-time"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap wrap-full">
      <Swiper
        :options="{
          slidesPerView : 'auto',
          direction : 'vertical',
          mousewheel : true,
          threshold : 30,
          on : {
            init: swiperInit,
            transitionEnd: slideChange
          }
        }"
        :cleanup-styles-on-destroy="false"
        class="time-main-swiper"
      >
        <SwiperSlide v-for="unit, idx in unitList" :key="idx" class="time-main-slide" :class="{'invert-header':unit.invertHeader}">
          <div class="time-main-unit">
            <component :is="unit.unitName" :data="unit.data" :unit-name="unit.unitName" :class="unit.unitName | kebabCase" />
          </div>
        </SwiperSlide>
        <SwiperSlide class="time-main-slide footer-slide">
          <Footer :lang-type="langType"/><!-- 글로벌 작업 : langType 추가 -->
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
import EventBus from '~/api/common/EventBus'
import Footer from '~/components/common/Footer.vue'

// [퍼블수정]23.07.10 타임메인 수정
// import TimeMood from '~/components/brand/TimeMood'
// import TimeMagazine from '~/components/brand/TimeMagazine'
import TimeMovie from '~/components/brand/TimeMovie'
import TimeContent from '~/components/brand/TimeContent'
import TimeNewProd from '~/components/brand/TimeNewProd'
import TimeSpecial from '~/components/brand/TimeSpecial'
import TimeBestSeller from '~/components/brand/TimeBestSeller'
import TimeProd from '~/components/brand/TimeProd'
import TimeBestReview from '~/components/brand/TimeBestReview' // 220906 베스트상품평 : 추가
import TimeKeyword from '~/components/brand/TimeKeyword'
import TimeLink from '~/components/brand/TimeLink'

export default {
  components: {
    Swiper, SwiperSlide,
    Footer,
    // [퍼블수정]23.07.10 타임메인 수정
    // TimeMood,
    // TimeMagazine,
    TimeMovie,
    TimeContent,
    TimeNewProd,
    TimeSpecial,
    TimeBestSeller,
    TimeProd,
    TimeBestReview, // 220906 베스트상품평 : 추가
    TimeKeyword,
    TimeLink,
  },
  layout: 'LayoutMain',

  data: () => ({
    unitList: [],
    swiper: null,
    langType : null, // 글로벌 작업 : 추가
  }),

  created(){
    const me = this
    me.langType = me.$i18n.locale // 글로벌 작업
    /*
      brandMain_time.json 수정 이력
      220906 베스트상품평 : TimeBestReview data 추가

      221121 타임 영상 : TimeMovie data 변경

      221122 이미지 오버
      TimeNewProd  list img_url2 추가
      TimeProd  list img_url2 추가
      TimeSpecial  list img_url2 추가
      TimeBestSeller  list img_url2 추가
    */
    axios.get("/json/brandMain_time.json")
    .then(function(res){
      // me.unitList = res.data.list
      me.processData(res.data.list)
    })
    .catch(function(e){
      console.log(e)
    })
  },// created

  mounted(){
    const me = this
    EventBus.$emit("setHeader", {static: true, type: "brand", brand: "TIME", brand_image: "/images/common/logo-time.svg", transparent: true, zeroHeight: true})
    EventBus.$emit("setLayout", {footer:false})

    try{
      const tb = document.querySelector("#topButton").__vue__
      tb.replaceFunc = me.scrollTop
    }catch(e){}

  },// mounted

  methods: {
   processData(list){
      const me = this
      // let cls
      list.forEach(function(unit){
        if(typeof(me.$options.components[unit.unitName]) !== "undefined"){
          // cls = me.$options.filters.kebabCase(unit.unitName)
          // unit.classStr = me.$options.filters.kebabCase(unit.unitName)// cls + " " + cls + "-" + me.brandType
          me.unitList.push(unit)
        }
      })

      me.$nextTick(me.updateTopBtn)
    },

    swiperInit(){
      const me = this
      me.$nextTick(function(){
        me.swiper = me.$el.querySelector(".time-main-swiper").swiper
      })
    },
    slideChange(){
      const me = this
      const slide = me.$el.querySelector(".time-main-slide.swiper-slide-active")
      EventBus.$emit("setHeader", {transparent : slide.classList.contains("invert-header")})
      me.updateTopBtn()
    },
    updateTopBtn(){
      const me = this
      if(me.swiper){
        try{
          const tb = document.querySelector("#topButton").__vue__
          tb.setTopButton(!me.swiper.isBeginning)
          tb.setFloating(me.swiper.isEnd ? -261 : 0)
        }catch(e){}
      }
    },
    scrollTop(){
      const me = this
      if(me.swiper){
        me.swiper.slideTo(0)
      }
    }
  }// methods
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/brand.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
// @import '@/assets/scss/en/en.scss'; // 글로벌 scss 
</style>
