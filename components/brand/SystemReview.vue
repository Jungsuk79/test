<template>
  <div class="system-unit-wrap">
    <!-- title -->
    <div class="system-unit-title">
      <div>{{data.title}}</div>
    </div>
    <!-- title -->

    <!-- list -->
    <div class="system-unit-cont">
      <div class="system-prd-swiper swiper-type-review">
        <Swiper
          :options="{
            slidesPerView: 3,
            slidesPerGroup : 3,
            spaceBetween : 1,
            pagination: {
              el: '.swiper-pagination',
              type: 'fraction',
              renderFraction: renderFraction
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          }"
          :class="{'swiper-no-swiping' : !(data.list && data.list.length > 3)}"
        >
          <SwiperSlide v-for="item, idx in data.list" :key="idx" class="system-prd-slide">
            <nuxt-link :to="item.link_url" class="prd-swiper-cnt">
              <div class="prd-review-img">
                <div class="img-cnt">
                  <div v-background-image="{url:item.image_url}" class="prd-swiper-img"></div>
                </div>
              </div>
              <div class="prd-review-cnt">
                <div class="review-cnt">
                  <div class="name">{{item.product_name}}</div>
                  <div class="price">{{item.sell_price | number}}</div>
                </div>
                <div class="review-cnt">
                  <div class="rate-like">
                    <div class="rate"><i></i><span>{{item.rate}}</span></div>
                    <div class="like"><i></i><span>{{item.like | number}}</span></div>  
                  </div>
                  <div class="text">{{item.text}}</div>
                </div>
              </div>
            </nuxt-link>
          </SwiperSlide>
          <div slot="pagination" class="swiper-pagination"></div>
          <button slot="button-prev" class="swiper-button-prev"></button>
          <button slot="button-next" class="swiper-button-next"></button>
        </Swiper>
      </div>
    </div>
    <!-- list -->
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
    reviewList: []
  }),
  created(){
    const me = this

    let arr
    me.data.list.forEach(function(item, idx){
      if(idx % 4 === 0){
        arr = []
        me.reviewList.push(arr)
      }
      arr.push(item)
    })

    console.log(me.reviewList)
  },
  methods: {
  },
}
</script>