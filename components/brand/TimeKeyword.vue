<template>
  <div class="time-unit-wrap">
    <div class="time-unit-cont">
      <div class="tkw-list-wrap">
        <div class="time-slide-title">
          <div>Trend Keyword</div>
        </div>
        <div class="tkw-list">
          <Swiper
            :options="{
              nested: true,
              direction: 'horizontal',
              slidesPerView: 6,
              spaceBetween: 13,
              _pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
              },
            }"
            class="tkw-swiper"
          >
            <SwiperSlide v-for="item, idx in data.list" :key="idx" class="tkw-slide">
              <div v-background-image="{url:item.image_url}" class="tkw-item">
                <nuxt-link :to="{path:item.link_url}">
                  <span>{{item.keyword}}</span>
                </nuxt-link>
              </div>
            </SwiperSlide>
            <!-- <div slot="pagination" class="swiper-pagination"></div> -->
          </Swiper>
        </div>
      </div>
    </div>
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
  }),
  created(){
  },
  methods: {
  },
}
</script>