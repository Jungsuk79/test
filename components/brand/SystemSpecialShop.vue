<template>
  <div class="system-unit-wrap">

    <!-- title -->
    <div class="system-unit-title">
      <div>{{data.title}}</div>

      <div class="suss-menu-box">
        <div class="suss-menu-selected">
          <div>{{currentGroup.title}}</div>
          <button :class="{'opened':menuVisible}" @click.stop="showMenu(!menuVisible)">
            <span class="suss-ico"></span>
            <span class="ir">리스트</span>
          </button>
        </div>
        <!-- layer -->
        <div class="suss-menu-layer" :class="{'opened':menuVisible}">
          <ul>
            <li v-for="item, idx in data.list" :key="idx">
              <button @click.stop="selectGroup(idx)">{{item.title}}</button>
            </li>
            <li>
              <nuxt-link :to="data.link_url"><span>VIEW ALL</span></nuxt-link>
            </li>
          </ul>
        </div>
        <!-- layer -->
      </div>
      </div>
    <!-- title -->

    <!-- list -->
    <div class="system-unit-cont">
      <div class="system-prd-swiper">
        <Swiper
          :options="{
            slidesPerView: 4,
            slidesPerGroup : 4,
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
            on: {
              init: initSwiper
            }
          }"
          class="suss-swiper"
          :class="{'swiper-no-swiping' : !(currentGroup.list && currentGroup.list.length > 4)}"
        >
          <SwiperSlide v-for="group, gdx in currentGroup.list" :key="gdx" class="system-prd-slide">
            <nuxt-link :to="group.link_url" class="prd-swiper-cnt">
              <div v-background-image="{url:group.image_url}" class="prd-swiper-img"></div>
              <div class="prd-swiper-txt">
                <div class="prd-name">{{group.product_name}}</div>
                <div class="sell-price">{{group.sell_price | number}}</div>
              </div>
            </nuxt-link>
            <button class="zzim-btn" :class="{on:group.zzim}" @click="group.zzim = !group.zzim"><span class="ir">찜</span></button>
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
    swiper: null,
    currentIndex: -1,
    currentGroup: null,
    menuVisible: false
  }),
  created(){
    const me = this
    if(me.data.list.length > 0){
      me.selectGroup(0)
    }
  },
  methods: {
    showMenu(vis){
      const me = this
      me.menuVisible = vis
    },
    selectGroup(idx){
      const me = this

      if(me.currentIndex === idx){ return }

      me.currentIndex = idx
      me.currentGroup = me.data.list[idx]
      me.showMenu(false)

      if(me.swiper){
        me.swiper.slideTo(0, 0)
      }
    },
    initSwiper(){
      const me = this
      me.$nextTick(function(){
        me.swiper = me.$el.querySelector(".suss-swiper").swiper
      })
    }
  },
}
</script>