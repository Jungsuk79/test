<template>
  <div class="magazine-unit magazine-unit-details">
    <div class="imgBox">
      <!-- [퍼블수정]23.03.01 스와이프 수정 -->
      <Swiper
        :options="{
          watchOverflow: true,
          on: {
            realIndexChange: swiperChange,
            init: swiperInit
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        }"
        class="mud-swiper"
      >
        <SwiperSlide v-for="item, idx in list" :key="idx" class="mud-slide">
          <!-- 230213 매거진 : 이미지 마크업 변경 -->
          <!-- <div v-background-image="{url:item.image_url, shading:true}" class="mud-img"></div> -->
          <img v-image-error="{type:'svg'}" :src="item.image_url" alt="" class="mud-img" />
          <nuxt-link class="link-block" :to="{path:item.link_url}"></nuxt-link>
        </SwiperSlide>
        <button v-if="list.length > 1" slot="button-prev" class="swiper-button-prev"></button>
        <button v-if="list.length > 1" slot="button-next" class="swiper-button-next"></button>
      </Swiper>
      <!-- //[퍼블수정]23.03.01 스와이프 수정 -->
      <Swiper
        :options="{
          slidesPerView: 'auto',
          spaceBetween: 10,
          on: {
            init: swiperInit
          }
        }"
        :class="['mud-slide-length' + list.length]"
        class="mud-swiper2"
      >
        <SwiperSlide v-for="item, idx in list" :key="idx" class="mud-slide2" :class="{on:index===idx}">
          <!-- 230213 매거진 : 이미지 마크업 변경 -->
          <!-- <div v-background-image="{url:item.image_url, shading:true}" class="mud-img" @click="selectSlide(idx)"></div> -->
          <img v-image-error="{type:'svg'}" :src="item.image_url" alt="" class="mud-img" @click="selectSlide(idx)" />
          <!-- <nuxt-link class="link-block" :to="{path:item.link_url}"></nuxt-link> -->
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="textBox">
      <div v-for="item, idx in list" :key="idx" class="mud-content1" :class="{show:index===idx}">
          <div v-for="item2, idx in item.content" :key="idx">
            <dl class="item-explain">
              <dt>{{item2.tit}}</dt>
              <dd>{{item2.con}}</dd>
            </dl>
            <button v-if="item2.btntext" class="cmp-font fnt-16 button mt-34">{{item2.btntext}}  <i class="cmp-icon cmp-icon-12 i-next"></i></button>
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
    swiper1: null,
    swiper2: null,
    index: 0,
    list: [
      {
        image_url: "https://img.thehandsome.com/md/publish/dummy/pc/235235235.jpg",
        link_url: "#none",
        content:[
          {
            tit:"1. Emblem Embroidery Embo Crinkle Top",
            con: "면과 스판을 믹스한 소재 덕에 쾌적하고 편안합니다. 엠블럼 자수가 돋보이는 LÄTT의 티셔츠입니다."
          },
          {
            tit:"2. SIDE SLIT JACKET",
            con: "사이드 슬릿 디테일로 포인트를 준 LÄTT의 재킷."
          },
          {
            tit:"3. Lettering Printed T Shirts",
            con: "레터링 프린트가 캐주얼하고 세련된 분위기를 자랑하는 SYSTEM의 티셔츠입니다.",
          },
          {
            tit:"4. Lettering Printed T Shirts",
            con: "테스트테스트",
          },
          {
            tit:"5. Lettering Printed T Shirts",
            con: "테스트테스트",
            btntext:"실측 사이즈 보기"
          }
        ],
      },{
        image_url: "https://img.thehandsome.com/md/publish/dummy/pc/002.jpg",
        link_url: "#none",
        content:[
          {
            tit:"2/ 01 제목",
            con: "2/ 01 내용"
          },
          {
            tit:"2/ 02 제목",
            con: "2/ 02 내용",
            btntext:"실측 사이즈 버튼"
          },
        ],
      },{
        image_url: "https://img.thehandsome.com/md/publish/dummy/pc/003.jpg",
        link_url: "#none",
        content:[
          {
            tit:"3/ 01 제목",
            con: "3/ 01 내용"
          },
          {
            tit:"3/ 02 제목",
            con: "3/ 02 내용"
          },
        ],
      },{
        image_url: "https://img.thehandsome.com/md/publish/dummy/pc/004.jpg",
        link_url: "#none",
        content:[
          {
            tit:"4/ 01 제목",
            con: "4/ 01 내용"
          },
          {
            tit:"4/ 02 제목",
            con: "4/ 02 내용"
          },
        ],
      },{
        image_url: "https://img.thehandsome.com/md/publish/dummy/pc/005.jpg",
        link_url: "#none",
        content:[
          {
            tit:"5/ 01 제목",
            con: "5/ 01 내용"
          },
        ],
      },{
        image_url: "https://img.thehandsome.com/md/publish/dummy/pc/006.jpg",
        link_url: "#none",
        content:[
          {
            tit:"6/ 01 제목",
            con: "6/ 01 내용"
          },
        ],
      }
    ]
  }),
  created(){
  },
  methods: {
    swiperInit(){
      const me = this
      let sw
      sw = me.$el.querySelector(".mud-swiper").swiper
      if(sw){
        me.swiper1 = sw
      }
      sw = me.$el.querySelector(".mud-swiper2").swiper
      if(sw){
        me.swiper2 = sw
      }
    },
    swiperChange(){
      const me = this
      me.index = me.swiper1.realIndex
      if(me.swiper2){
        me.swiper2.slideTo(me.index);
      }
    },
    selectSlide(idx){
      const me = this
      if(me.index === idx){ return }
      me.index = idx
      if(me.swiper1){
        me.swiper1.slideTo(idx)
      }
    }
  },
}
</script>

<style lang="scss" scoped></style>
