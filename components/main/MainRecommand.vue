<template>
  <div class="main-recommand">
    <div class="main-unit-title">{{data.title}}</div>
    <div class="main-unit-cont">
      <Swiper 
        :options="swiperOption">
        <SwiperSlide v-for="group, gdx in data.list" :key="gdx">
          <div class="main-unit-title">{{group.title}}</div>
          <!-- [퍼블수정]23.03.02 간격 확인 :space="16" 수정 -->
          <div class="mrc-cont">
            <nuxt-link to="#n" :style="{'background-image':'url('+group.image_url+')'}" class="mrc-link"></nuxt-link>
            <div class="mrc-prods" :class="{'no-swiping':group.list.length <= 2}">
              <div>
                <ProductList :list="group.list" :layout="2" :unit-type="'mini'" :swipe="true" :no-grid-fit="true" :t-ratio="'0'" :space="16" @setupSwiper="initSwiper" />
              </div>
            </div>
          </div>
          <!-- [퍼블수정]23.03.02 간격 확인 -->
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
      // [퍼블수정]23.03.02 간격 확인 spaceBetween: 24,
      spaceBetween: 24,
      slidesPerView: 2,
      slidesPerGroup: 1,
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
      me.$el.querySelectorAll(".mrc-prods").forEach(function(prod){
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
