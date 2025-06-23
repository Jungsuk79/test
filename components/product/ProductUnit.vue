<template>
  <li class="product-unit product-unit-normal">
    <!-- [퍼블수정]24.09.13 카운트 데이터 추가 -->
    <div class="count">{{ index }}</div>
    <div class="product-unit-wrap">
      <!-- 이미지 -->
      <div class="product-image">
        <!-- 
          230223 상품리스트 : 수정 Start
          1. 상품이미지 컬러칩 있을 경우 없을 경우 분리
          2. 컬러칩 있을 경우 상품이미지 마크업 추가
        -->
        <template v-if="data.colors">
          <!-- 230224 상품리스트 :prod-image, prod-image-2  v-image-error type 변경 svg > product -->
          <div class="prod-image"><img v-image-error="{type:'product'}" :src="data.images[selectedColor][0]" class="img" alt="" /></div>
          <div class="prod-image prod-image-2"><img v-if="data.images[selectedColor][1]" v-image-error="{type:'product'}" :src="data.images[selectedColor][1]" class="img" alt="" /></div>
        </template>
        <template v-else>
          <div v-background-image="{'url' : data.images[selectedColor][0]}" class="prod-image"></div>
          <div v-if="data.images[selectedColor][1]" v-background-image="{'url' : data.images[selectedColor][1]}" class="prod-image prod-image-2"></div>
        </template>        
        <!-- 230223 상품리스트 : 수정 End -->
        <a class="link-block" @click="gotoLink('')"></a>
        <!-- 20221213 동영상 아이콘 -->
        <span v-if="data.colors && data.colors[selectedColor].video" class="prod-play-icon"></span>

        <!--20221213 Soldout 적용 -->
        <nuxt-link v-if="data.colors && data.colors[selectedColor].soldout" :to="data.links[selectedColor]" class="prod-soldout">SOLD OUT</nuxt-link>

        <!-- 상품상세 레이어 -->
        <div class="product-detail">
          <nuxt-link :to="data.links[selectedColor]" class="detail-link"></nuxt-link><!-- 221214 상품유닛 : 링크 추가 -->
          <!-- 색상 목록 -->
          <div class="color-wrap">
            <ul class="color-list">
              <li v-for="item, idx in data.colors" :key="idx" class="color-item" :class="{on:selectedColor===idx, 'soldout' : soldout===item.soldout}"><!--20221201 soldout 추가-->
                <button :style="{'background' : item.image}" @click="selectColor(idx)"></button>
              </li>
            </ul>
            <div class="color-name">{{data.colors[selectedColor].name}}</div>
            
            <!--2 + α-->
            <Swiper
              v-if="layout >= 5 && data.colors.length > 2"
              :options="{
                slidesPerView:'auto',
                spaceBetween:16
              }"
              class="color-list color-list-swiper color-list-swiper2"
            >
              <SwiperSlide v-for="item, idx in data.colors2" :key="idx" class="color-item" :class="{on:selectedColor===idx + 2, 'soldout' : soldout === item.soldout}"><!--20221201 soldout 추가-->
                <button :style="{'background' : item.image}" @click="selectColor(idx + 2)"></button>
              </SwiperSlide>
            </Swiper>
            <!-- 2 + α -->
            <!-- 3 + α -->
            <Swiper
              v-if="data.colors.length > 3"
              :options="{
                slidesPerView:'auto',
                spaceBetween:16
              }"
              class="color-list color-list-swiper color-list-swiper3"
            >
              <SwiperSlide v-for="item, idx in data.colors3" :key="idx" class="color-item" :class="{on:selectedColor===idx + 3, 'soldout' : soldout === item.soldout}"><!--20221201 soldout 추가-->
                <button :style="{'background' : item.image}" @click="selectColor(idx + 3)"></button>
              </SwiperSlide>
            </Swiper>
            <!-- 3 + α -->
          </div>
          <!-- 색상 목록 -->
          <div class="product-name">{{data.product_name}}</div>
          <!-- 사이즈 -->
          <div v-if="layout <= 4 && data.size_list && data.size_list.length > 0" class="size-list">
            <a v-for="item, idx in data.size_list" :key="idx" :class="{disable:item.available[selectedColor]!==true}" @click="gotoLink(item.size_en)">{{item.size_en}}</a>
          </div>
          <Swiper
            v-if="layout > 4 && data.size_list && data.size_list.length > 0"
            :options="{
              slidesPerView:'auto',
              spaceBetween:16
            }"
            class="size-list size-list-swiper"
          >
            <SwiperSlide  v-for="item, idx in data.size_list" :key="idx" class="size-item">
              <a :class="{disable:item.available[selectedColor]!==true}" @click="gotoLink(item.size_en)">{{item.size_en}}</a>
            </SwiperSlide>
          </Swiper>
          <!-- <div v-if="layout > 4 && data.size_list && data.size_list.length > 0" class="size-list">
            <a v-for="item, idx in data.size_list" :key="idx" :class="{disable:item.available[selectedColor]!==true}" @click="gotoLink(item.size_en)">{{item.size_en}}</a>
          </div> -->
          <!-- 플래그 -->
          <div v-if="data.flags && data.flags.length > 0" class="flag-list">
            <!--20221208 플래그 유형 수정-->
            <span v-if="data.stkrBtmWrd" :style="{'background-color':data.stkrColorCd || ''}" class="sticker-tag">{{data.stkrBtmWrd}}</span>
            <template v-if="data.flags">
              <span v-for="item, idx in data.flags" :key="idx" >{{item}}</span>
            </template>
          </div>
          <!-- 딜리버리, 리뷰 -->
          <div v-if="data.delivery || data.comment > 0" class="product-dlv-cmt">
            <span v-if="data.delivery" class="product-delivery">한섬딜리버리</span>
            <span v-if="data.comment > 0" class="product-comment">
              상품평
              <em v-if="data.comment<100">{{data.comment}}</em>
              <em v-if="data.comment>=100">99+</em>
            </span>
          </div>
        </div>
        <!-- 상품상세 레이어 -->
      </div>
      <!-- 이미지 -->
      <!-- 텍스트 -->
      <div class="product-info">
        <div class="product-info-left">
          <div class="brand-name">{{data.brand_name}}</div>
          <div class="color">컬러 {{data.colors.length}}</div>
        </div>
        <div class="product-info-right">
          <div class="sell-price">{{data.sell_price | number}}</div>
          <div v-if="data.price" class="discount-price">
            <span class="discount">{{data.discount}}</span>
            <span class="price">{{data.price | number}}</span>
          </div>
        </div>
        <a class="link-block" @click="gotoLink('')"></a>
      </div>
      <!-- 텍스트 -->
      <button class="zzim-btn" :class="{on:data.zzim}" @click.stop="zzim"></button>
      <!--20221208 스티커추가-->
      <div v-if="data.exclusive || data.limited" class="product-edition">
        <span v-if="data.exclusive">EXCLUSIVE</span>
        <span v-if="data.limited">LIMITED</span>
      </div>

    </div>
  </li>
</template>

<script>
// import { mapMutations } from 'vuex'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'


export default {
  components: {
    Swiper, SwiperSlide,
  },
  props: {
    unitData: {
      type: Object,
      default: ()=>{ return null },
    },
    layout: {
      type: Number,
      default: ()=>{ return 4 }
    },
    // [퍼블수정]24.09.13 카운트 데이터 추가
    index: {
      type: Number,
      default: null,
    }
  },
  data: () => ({
    data: null,
    selectedColor: 0,
    soldout : true, // 20221201 추가
  }),
  watch: {
    unitData(){
      const me = this
      me.initData()
    },
    layout() {
      const me = this
      me.updateSwipe()  
    },
  },
  created() {
      const me = this
      me.initData()
  },
  mounted() {
  },
  methods: {
    initData(){
      const me = this

      // 예외처리
      const d = me.unitData
      if(d.images === undefined){
        if(d.image_url === undefined){
          d.images = [[]]
        }else{
          d.images = [[d.image_url]]
        }
      }
      if(d.links === undefined){
        if(d.link_url === undefined){
          d.links = []
        }else{
          d.links = [d.link_url]
        }
      }
      if(d.zzim !== true){
        d.zzim = false
      }
      // 예외처리

      if(d.colors.length > 2){
        d.colors2 = d.colors.slice(2)
      }else{
        d.colors2 = []
      }
      if(d.colors.length > 3){
        d.colors3 = d.colors.slice(3)
      }else{
        d.colors3 = []
      }

      me.data = me.unitData
    },
    selectColor(idx){
      const me = this
      if(me.selectedColor === idx){ return }

      me.selectedColor = idx
    },
    replacePercent(str){
      try{
        return str.replace("%", "<em>%</em>")
      }catch(e){
        return ""
      }
    },

    updateSwipe(){
      const me = this
      setTimeout(()=>{
        const cs = me.$el.querySelectorAll(".color-list-swiper")
        if(cs && cs.length > 0){
          cs.forEach((c)=>{
            try{
              c.swiper.update()
            }catch(e){}
          })
        }

        const sz = me.$el.querySelector(".size-list-swiper")
        if(sz && sz.swiper){
          try{
            sz.swiper.update()
          }catch(e){}
        }
      }, 200)
    },

    gotoLink(size){
      const me = this
      // 색상별로 링크가 다름
      // 사이즈 선택 시 상품상세에서 해당 사이트 활성화 해야 함
      console.log("상품 링크 이동하기", "url: " + me.data.links[me.selectedColor], "size: " + size)
    },

    zzim(){
      const me = this
      me.data.zzim = ! me.data.zzim
      me.$forceUpdate()
    }
  },
}
</script>

<style lang="scss" scoped></style>
