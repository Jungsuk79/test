<template>
  <div class="main-lookbook">
    <div class="main-unit-title">{{data.title}}</div>
    <div class="main-unit-cont">
      <!-- 221122 메인룩북 : <ul class="ml-cates"> 삭제 -->
      <!-- <ul class="ml-cates">
        <li v-for="item, idx in data.list" :key="idx" :class="{on:item===currentItem}">
          <button @click="selectCate(item)">{{item.title}}</button>
        </li>
      </ul> -->
      <!-- 221122 메인룩북 : 메뉴 마크업 변경 -->
      <div class="ml-cates-swiper">
        <Swiper
          :options="{
            threshold : 10,
            slidesPerView:'auto',
            spaceBetween: 20
          }"
        >
          <SwiperSlide v-for="(item,idx) in data.list" :key="idx">
            <button :class="{on:item===currentItem}" @click="selectCate(item)">
              <span>{{item.title}}</span>
              <span>{{item.title}}</span>
            </button>
          </SwiperSlide>
        </Swiper>
      </div>
      <!-- // 221122 메인룩북 : 메뉴 마크업 변경 -->
      <nuxt-link :to="{}" class="ml-link">룩북 전체보기<i class="cmp-icon cmp-icon-12 i-next"></i></nuxt-link>
      <div class="ml-list">
        <ProductList :list="currentItem.list" :layout="6" :group="6" :unit-type="'mini'" :swipe="true" />
      </div>

    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper' // 221122 메인룩북 : 추가

export default {
  components: {
    Swiper, SwiperSlide  // 221122 메인룩북 : 추가
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
    currentItem: null
  }),
  created(){
    const me = this
    try{
      me.currentItem = me.data.list[0]
    }catch(e){}
  },
  mounted(){
  },
  methods: {
    selectCate(item){
      const me = this
      if(me.currentItem !== item){
        me.currentItem = item
      }
    }
  },
}
</script>

<style lang="scss" scoped></style>
