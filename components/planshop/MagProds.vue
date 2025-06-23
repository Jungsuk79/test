<template>
  <div class="magazine-unit magazine-unit-prods">
    <Swiper
      :options="{
        pagination: {
          el: '.swiper-pagination',
          clickable: false,
          type: 'bullets'
        },
        on: {
          realIndexChange: swiperChange,
          init: swiperInit
        }
      }"
      class="mup-swiper"
    >
      <SwiperSlide v-for="item, idx in list" :key="idx" class="mup-slide">
        <div v-background-image="{url:item.image_url, shading:true}" class="mup-img"></div>
      </SwiperSlide>
      <div slot="pagination" class="swiper-pagination"></div>
    </Swiper>
    <Swiper
      :options="{
        slidesPerView: 2,
        spaceBetween:1,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
        on: {
          init: swiperInit
        }
      }"
      class="mup-swiper2"
    >
      <SwiperSlide v-for="item, idx in selectedList" :key="idx" class="mup-slide2">
        <div v-background-image="{url:item.image_url, shading:true}" class="mup-img"></div>
        <div class="mup-text">
          <div class="mup-brand">{{item.brand_name}}</div>
          <div class="mup-price">{{item.sell_price | number}}</div>
        </div>
        <nuxt-link class="link-block" :to="{path:item.link_url}"></nuxt-link>
      </SwiperSlide>
      <div slot="pagination" class="swiper-pagination"></div>
    </Swiper>
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
        image_url: "https://img.thehandsome.com/md/publish/dummy/pc/001.jpg",
        list: [
          {
            image_url: "https://img.thehandsome.com/md/publish/dummy/pc/001.jpg",
            brand_name: "LÄTT",
            product_name: "[BEARBRICK] 사이키델릭 페이즐리 400%&100%",
            sell_price: 275000,
            link_url: "#none",
          },{
            image_url: "https://img.thehandsome.com/md/publish/dummy/pc/002.jpg",
            brand_name: "LÄTT",
            product_name: "[BEARBRICK] 사이키델릭 페이즐리 400%&100%",
            sell_price: 275000,
            link_url: "#none",
          },{
            image_url: "https://img.thehandsome.com/md/publish/dummy/pc/003.jpg",
            brand_name: "LÄTT",
            product_name: "[BEARBRICK] 사이키델릭 페이즐리 400%&100%",
            sell_price: 275000,
            link_url: "#none",
          },{
            image_url: "https://img.thehandsome.com/md/publish/dummy/pc/004.jpg",
            brand_name: "LÄTT",
            product_name: "[BEARBRICK] 사이키델릭 페이즐리 400%&100%",
            sell_price: 275000,
            link_url: "#none",
          },{
            image_url: "https://img.thehandsome.com/md/publish/dummy/pc/005.jpg",
            brand_name: "LÄTT",
            product_name: "[BEARBRICK] 사이키델릭 페이즐리 400%&100%",
            sell_price: 275000,
            link_url: "#none",
          }
        ]
      },{
        image_url: "https://img.thehandsome.com/md/publish/dummy/pc/002.jpg",
        list: [
          {
            image_url: "https://img.thehandsome.com/md/publish/dummy/pc/006.jpg",
            brand_name: "LÄTT",
            product_name: "[BEARBRICK] 사이키델릭 페이즐리 400%&100%",
            sell_price: 275000,
            link_url: "#none",
          },{
            image_url: "https://img.thehandsome.com/md/publish/dummy/pc/007.jpg",
            brand_name: "LÄTT",
            product_name: "[BEARBRICK] 사이키델릭 페이즐리 400%&100%",
            sell_price: 275000,
            link_url: "#none",
          },{
            image_url: "https://img.thehandsome.com/md/publish/dummy/pc/008.jpg",
            brand_name: "LÄTT",
            product_name: "[BEARBRICK] 사이키델릭 페이즐리 400%&100%",
            sell_price: 275000,
            link_url: "#none",
          },{
            image_url: "https://img.thehandsome.com/md/publish/dummy/pc/009.jpg",
            brand_name: "LÄTT",
            product_name: "[BEARBRICK] 사이키델릭 페이즐리 400%&100%",
            sell_price: 275000,
            link_url: "#none",
          },{
            image_url: "https://img.thehandsome.com/md/publish/dummy/pc/010.jpg",
            brand_name: "LÄTT",
            product_name: "[BEARBRICK] 사이키델릭 페이즐리 400%&100%",
            sell_price: 275000,
            link_url: "#none",
          }
        ]
      },{
        image_url: "https://img.thehandsome.com/md/publish/dummy/pc/003.jpg",
        list: [
          {
            image_url: "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
            brand_name: "LÄTT",
            product_name: "[BEARBRICK] 사이키델릭 페이즐리 400%&100%",
            sell_price: 275000,
            link_url: "#none",
          },{
            image_url: "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
            brand_name: "LÄTT",
            product_name: "[BEARBRICK] 사이키델릭 페이즐리 400%&100%",
            sell_price: 275000,
            link_url: "#none",
          },{
            image_url: "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
            brand_name: "LÄTT",
            product_name: "[BEARBRICK] 사이키델릭 페이즐리 400%&100%",
            sell_price: 275000,
            link_url: "#none",
          },{
            image_url: "https://img.thehandsome.com/md/publish/dummy/pc/014.jpg",
            brand_name: "LÄTT",
            product_name: "[BEARBRICK] 사이키델릭 페이즐리 400%&100%",
            sell_price: 275000,
            link_url: "#none",
          }
        ]
      },{
        image_url: "https://img.thehandsome.com/md/publish/dummy/pc/004.jpg",
        list: [
          {
            image_url: "https://img.thehandsome.com/md/publish/dummy/pc/015.jpg",
            brand_name: "LÄTT",
            product_name: "[BEARBRICK] 사이키델릭 페이즐리 400%&100%",
            sell_price: 275000,
            link_url: "#none",
          },{
            image_url: "https://img.thehandsome.com/md/publish/dummy/pc/016.jpg",
            brand_name: "LÄTT",
            product_name: "[BEARBRICK] 사이키델릭 페이즐리 400%&100%",
            sell_price: 275000,
            link_url: "#none",
          },{
            image_url: "https://img.thehandsome.com/md/publish/dummy/pc/017.jpg",
            brand_name: "LÄTT",
            product_name: "[BEARBRICK] 사이키델릭 페이즐리 400%&100%",
            sell_price: 275000,
            link_url: "#none",
          },{
            image_url: "https://img.thehandsome.com/md/publish/dummy/pc/018.jpg",
            brand_name: "LÄTT",
            product_name: "[BEARBRICK] 사이키델릭 페이즐리 400%&100%",
            sell_price: 275000,
            link_url: "#none",
          }
        ]
      }
    ],
    selectedList: []
  }),
  created(){
    const me = this
    me.selectedList = me.list[0].list
  },
  methods: {
    swiperInit(){
      const me = this
      let sw
      sw = me.$el.querySelector(".mup-swiper").swiper
      if(sw){
        me.swiper1 = sw
      }
      sw = me.$el.querySelector(".mup-swiper2").swiper
      if(sw){
        me.swiper2 = sw
      }
    },
    swiperChange(){
      const me = this
      me.index = me.swiper1.realIndex
      me.selectedList = me.list[me.index].list
      me.swiper2.slideTo(0, 0)
    },
    selectSlide(idx){
      /* const me = this
      if(me.index === idx){ return }
      me.index = idx
      if(me.swiper1){
        me.swiper1.slideTo(idx)
      } */
    }
  },
}
</script>

<style lang="scss" scoped></style>
