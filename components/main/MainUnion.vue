<template>
  <div class="main-union">
    <div class="main-unit-title">{{data.title}}</div>
    <div class="main-unit-cont">
      <Swiper 
        :options="swiperOption"
        class="mu-swiper">
        <SwiperSlide v-for="group, gdx in data.list" :key="gdx">
          <div class="img-wrap">
            <div class="img-cnt"><!-- 221216 묶음상품코너 : <div class="img-cnt"> 추가 -->
              <img :src="group.image_url" alt="상품이미지" class="img" />
            </div>
          </div>
          <div class="list-wrap">
            <nuxt-link to="#none" class="mu-link-cont"></nuxt-link><!-- 221216 묶음상품코너 : 위치 이동 --><!--20221216 링크추가-->
            <div><!-- 221216 묶음상품코너 : <div> 추가 -->
              <p class="mu-title" v-html="group.title"></p>
              <p class="mu-subtitle">{{group.sub_title}}</p>
              <p class="mu-price">{{group.sell_price | number}}원~</p>
            </div>
            <div class="mu-wrap">
              <div class="mu-link">상품 보러가기<i class="cmp-icon cmp-icon-12 i-next"></i></div><!--20221216 태그변경-->
              <ProductList 
                :list="group.list" :layout="3" :unit-type="'micro'" 
                :swipe="true" :loop="true" :no-grid-fit="true" :space="16" 
                :t-ratio="'0'" @setupSwiper="initSwiper" 
              /><!-- 230112 상품리스트 : loop 추가 --><!-- 221216 묶음상품코너 : group="1" 삭제 -->
            </div>
          </div>
        </SwiperSlide> 
        <div slot="scrollbar" class="swiper-scrollbar"></div>
      </Swiper>
    </div>
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
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data: () => ({
    swiperOption: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
      },
      observer: true, 
      observeParents: true,
      threshold : 10, // 221216 묶음상품코너 : 추가
    }
  }),
  created(){
  },
  mounted(){
    const me = this
    me.$nextTick(function(){
      me.$el.querySelectorAll(".list-wrap").forEach(function(prod){
        prod.append(prod.querySelector(".swiper-button-prev"))
        prod.append(prod.querySelector(".swiper-button-next"))
      })
    })
  },
  methods: {
    initSwiper(){
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'))
      }, 300)
    }
  },
}
</script>

<style lang="scss" scoped></style>
