<template>
  <div class="time-unit-wrap">
    <div v-if="group">
      <div v-background-image="{url:group.image_url}" class="tu-blur-bg"></div>
      <div class="tsp-slide-title">
        <div class="tsp-title">{{group.title}}</div>
        <!-- <div class="tsp-desc">{{group.desc}}</div> -->
        <nuxt-link :to="{}">VIEW ALL</nuxt-link>
      </div>
      <div class="tsp-swiper-wrap">
        <Swiper
          id="timeSpecialSwiper"
          :options="{
            nested: true,
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 24,
            on:{
              init: swiperInit
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          }"
          class="tsp-swiper"
          :cleanup-styles-on-destroy="false"   
        > 
          <SwiperSlide v-for="item, idx in group.list" :key="idx" class="tsp-slide">
            <div class="tsp-prod">
              <div v-background-image="{url:item.img_url}" class="time-bg-img"></div>
              <div v-if="item.img_url2" v-background-image="{url:item.img_url2}" class="time-bg-img img2"></div><!-- 221122 타임메인 : 오버 이미지 추가 -->
              <div class="tsp-text">
                <div class="tsp-name">{{item.prod_name}}</div>
                <div class="tsp-price">{{item.sell_price | number}}</div>
              </div>
              <nuxt-link class="link-block" :to="{path:item.link_url}"></nuxt-link>
              <button class="zzim-btn" :class="{on:item.zzim===true}" @click.stop="zzim(item)"></button>
            </div>
          </SwiperSlide>
          <button slot="button-prev" class="swiper-button-prev"></button>
          <button slot="button-next" class="swiper-button-next"></button>
        </Swiper>
        
        <div class="tsp-layer-wrap">
          <button class="tsp-layer-btn" @click.stop="showSpecialLayer(true)"></button>
          <div v-if="specialVisible" class="special-layer">
            <div class="special-layer-cont">
              <ul>
                <li v-for="grp, gdx in data.list" :key="gdx" @click.stop="selectSpecialCont(grp,gdx)"><!-- 20221212 선택 활성화 추가 -->
                  <div v-background-image="{url:grp.image_url}" class="slc-image"></div>
                  <div class="slc-list-title" :class="{on : specialSelect === gdx}">{{grp.title}}</div><!-- 20221212 선택 활성화 추가 -->
                  <!-- <div class="slc-list-desc">{{grp.desc}}</div> -->
                </li>
              </ul>
              <button class="close-layer" @click.stop="showSpecialLayer(false)"><span class="invisible">닫기</span></button>
            </div>
          </div>
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
    swiper: null,
    specialVisible: false,
    group: null,
    specialSelect : 0 // 20221212 선택 활성화 추가
  }),
  created(){
    const me = this
    if(me.data.list.length > 0){
      me.group = me.data.list[0]
    }
  },
  mounted(){
  },
  methods: {
    swiperInit(){
      const me = this
      me.swiper = me.$el.querySelector("#timeSpecialSwiper").swiper
    },
    showSpecialLayer(vis){
      const me = this
      me.specialVisible = vis
    },
    selectSpecialCont(grp,gdx){
      const me = this
      me.group = grp
      me.showSpecialLayer(false)
      me.swiper.slideTo(0, 0)
      if(me.specialSelect === gdx){ return }  // 20221212 선택 활성화 추가
      me.specialSelect = gdx  // 20221212 선택 활성화 추가
    },
    zzim(itm){
      if(itm.zzim === true){
        itm.zzim = false
      }else{
        itm.zzim = true
      }
    },
  },
}
</script>