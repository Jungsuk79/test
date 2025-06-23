<template>
  <div class="sub-menu-unit" :class="{'d2-opened':d2_opened, 'd3-visible':d3_visible}">
    <div>

      <!-- 1단/2단 -->
      <div class="sub-menu-d12">
        <!-- 1뎁스 메뉴 -->
        <div class="sub-menu-wrap sub-menu-d1">
          <Swiper
            :options="{
              slidesPerView:'auto',
              spaceBetween: 24
            }"
            class="sm-swiper"
          >
            <SwiperSlide class="sm-slide" :class="{on:d1===0}"><nuxt-link :to="'shopList'">메인</nuxt-link></SwiperSlide>
            <SwiperSlide class="sm-slide" :class="{on:d1===1}"><nuxt-link :to="'shopList'">소개</nuxt-link></SwiperSlide>
            <SwiperSlide class="sm-slide" :class="{on:d1===2}"><nuxt-link :to="'shopList2'">샵</nuxt-link></SwiperSlide>
            <SwiperSlide class="sm-slide" :class="{on:d1===3}"><nuxt-link :to="'shopList'">스페셜샵</nuxt-link></SwiperSlide>
            <SwiperSlide class="sm-slide" :class="{on:d1===4}"><nuxt-link :to="'shopList'">룩북</nuxt-link></SwiperSlide>
            <SwiperSlide class="sm-slide" :class="{on:d1===5}"><nuxt-link :to="'shopList'">캠페인</nuxt-link></SwiperSlide>
          </Swiper>
        </div>
        <!-- 1뎁스 메뉴 -->

        <!-- 샵 - 2뎁스 메뉴 -->
        <div class="sub-menu-wrap sub-menu-d2">
          <Swiper
            :options="{
              slidesPerView:'auto',
              spaceBetween: 14
            }"
            class="sm-swiper swiper-no-swiping"
          >
            <SwiperSlide class="sm-slide" :class="{on:d2===0}"><nuxt-link :to="'shopList2'">ALL</nuxt-link></SwiperSlide>
            <SwiperSlide class="sm-slide" :class="{on:d2===1}"><nuxt-link :to="'shopList3'">여성</nuxt-link></SwiperSlide>
            <SwiperSlide class="sm-slide" :class="{on:d2===2}"><nuxt-link :to="'shopList3'">잡화</nuxt-link></SwiperSlide>
            <SwiperSlide class="sm-slide" :class="{on:d2===3}"><nuxt-link :to="'shopList3'">뷰티</nuxt-link></SwiperSlide>
          </Swiper>
        </div>
        <!-- 샵 - 2뎁스 메뉴 -->
      </div>
      <!-- 1단/2단 -->

      <!-- 3단/4단 -->
      <div class="sub-menu-d34" :class="{'d4-opened':d4_opened}">
        <!-- 3뎁스 메뉴 -->
        <div class="sub-menu-wrap sub-menu-d3">
          <Swiper
            :options="{
              slidesPerView:'auto',
              spaceBetween: 14
            }"
            class="sm-swiper"
          >
            <SwiperSlide class="sm-slide" :class="{on:d3===0}"><nuxt-link :to="{}">ALL</nuxt-link></SwiperSlide>
            <SwiperSlide class="sm-slide" :class="{on:d3===1}"><nuxt-link :to="{}">아우터</nuxt-link></SwiperSlide>
            <SwiperSlide class="sm-slide" :class="{on:d3===2}"><nuxt-link :to="{}">탑</nuxt-link></SwiperSlide>
            <SwiperSlide class="sm-slide" :class="{on:d3===3}"><nuxt-link :to="{}">드레스</nuxt-link></SwiperSlide>
            <SwiperSlide class="sm-slide" :class="{on:d3===4}"><nuxt-link :to="{}">팬츠</nuxt-link></SwiperSlide>
            <SwiperSlide class="sm-slide" :class="{on:d3===5}"><nuxt-link :to="{}">스커트</nuxt-link></SwiperSlide>
            <SwiperSlide class="sm-slide" :class="{on:d3===6}"><nuxt-link :to="{}">SPECIAL SHOP</nuxt-link></SwiperSlide>
          </Swiper>
          <button class="smd3-btn" @click="toggleDepth4"></button>
        </div>
        <!-- 3뎁스 메뉴 -->

        <!-- 4뎁스 메뉴 -->
        <div class="sub-menu-d4">
          <div class="smd4-head">
            <div class="smd4h-title">아우터</div>
            <div class="smd4h-loc">
              <nuxt-link :to="{}">SJSJ</nuxt-link>
              <nuxt-link :to="{}">여성</nuxt-link>
              <nuxt-link :to="{}">아우터</nuxt-link>
            </div>
          </div>
          <div class="smd4-body">
            <ul>
              <li :class="{on:d4===0}"><nuxt-link :to="{}">전체</nuxt-link></li>
              <li :class="{on:d4===1}"><nuxt-link :to="{}">트렌치 코트</nuxt-link></li>
              <li :class="{on:d4===2}"><nuxt-link :to="{}">재킷</nuxt-link></li>
              <li :class="{on:d4===3}"><nuxt-link :to="{}">코트</nuxt-link></li>
              <li :class="{on:d4===4}"><nuxt-link :to="{}">점퍼</nuxt-link></li>
              <li :class="{on:d4===5}"><nuxt-link :to="{}">다운/패딩</nuxt-link></li>
              <li :class="{on:d4===6}"><nuxt-link :to="{}">가디건/베스트</nuxt-link></li>
            </ul>
          </div>
        </div>
        <!-- 4뎁스 메뉴 -->
      </div>
      <!-- 3단/4단 -->

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
    d1: 0,
    d2: 0,
    d3: 0,
    d4: 0,
    d2_opened: false,
    d4_opened: false,
    d3_visible: false
  }),

  created(){
    const me = this
    if(me.data){
      if(typeof(me.data.d1) === "number"){
        me.d1 = me.data.d1
        me.d2_opened = (me.d1 === 2)
      }
      if(typeof(me.data.d2) === "number"){
        me.d2 = me.data.d2
        me.d3_visible = (me.d2 > 0)
      }
      if(typeof(me.data.d3) === "number"){
        me.d3 = me.data.d3
      }
      if(typeof(me.data.d4) === "number"){
        me.d4 = me.data.d4
      }
    }
  },

  mounted(){
  },

  methods: {
    toggleDepth2(){
      const me = this
      me.d2_opened = ! me.d2_opened
    },
    toggleDepth4(){
      const me = this
      me.d4_opened = ! me.d4_opened

      const d3 = me.$el.querySelector(".sub-menu-d4")
      if(me.d4_opened){
        d3.style.height = 48 + 40 + Math.ceil(me.$el.querySelectorAll(".smd4-body li").length / 2) * 30 - 8 + "px"
      }else{
        d3.style.height = 0
      }
    }
  },
}
</script>

<style lang="scss" scoped></style>
