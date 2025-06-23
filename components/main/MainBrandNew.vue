<template>
  <div class="main-brand-new">
    <div class="main-unit-title">
      <div>{{data.title}}</div>
      <div class="mbn-count">{{data.list.length | number}} New Items</div>
    </div>
    <div class="main-unit-cont"></div>
    <Swiper
      :options="{
        slidesPerView: 6,
        spaceBetween: 24,
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: false,
        },
      }"
      class="mbn-swiper"
      :class="{'swiper-initial-motion':initiated}"
    >
      <SwiperSlide v-for="group, gdx in groupList" :key="gdx" class="mbn-slide">
        <div v-for="item, idx in group" :key="idx" class="mbn-item">
          <div v-background-image="{url:item.image_url}" class="mbn-image"></div>
          <div v-if="item.product_name" class="mbn-text">
            <div class="mbn-brand">{{item.brand_name}}</div>
            <div class="mbn-name">{{item.product_name}}</div>
            <div class="mbn-price">{{item.sell_price | number}}</div>
            <nuxt-link :to="{path:item.link_url}" class="mbn-link"></nuxt-link>
          </div>
          <nuxt-link :to="{path:item.link_url}" class="link-block"></nuxt-link><!-- [퍼블수정]23.02.13 조건 삭제 -->
        </div>
      </SwiperSlide>
      <div slot="scrollbar" class="swiper-scrollbar"></div>
    </Swiper>
    <div v-if="initiated!==true" v-scroll="scroll"></div>
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
    initiated: false,
    groupList:[]
  }),
  created(){
    const me = this
    let arr
    me.data.list.forEach((item, idx) => {
      if((idx % 2) === 0){
        arr = []
        me.groupList.push(arr)
      }
      arr.push(item)
    });
  },
  mounted(){
    const me = this
    me.$nextTick(me.scroll)
  },
  methods: {
    scroll(){
      const me = this
      if(window.scrollY + window.innerHeight * 0.4 > me.offsetTop(me.$el)){
        me.initiated = true
      }
    }
  },
}
</script>

<style lang="scss" scoped></style>
