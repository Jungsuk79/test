<template>
  <div class="prd-detail-style">
    <!-- 관련있는 콘텐츠 -->
    <div class="prd-tit-box">
      <h3 class="tit">These are contents related to the product.</h3>
    </div>
    <ul class="prd-contents-list">
      <li v-for="(item, index) in contentsList" :key="index">
        <nuxt-link :to="item.link">
          <v-img :src="item.image" :alt="item.title" />
          <div class="cnt-box">
            <div class="cnt">
              <!-- eslint-disable -->
              <span class="tit" v-html="item.title"></span>
              <span class="txt" v-html="item.desc"></span>
              <!-- eslint-disable -->
            </div>
            <span class="category">{{item.category}}</span>
          </div>
        </nuxt-link>
      </li>
    </ul>
    <!-- //관련있는 콘텐츠 -->

    <!-- MD 추천 상품 -->
    <div class="prd-tit-box">
      <h3 class="tit">This is a product recommended by MD.</h3>
    </div>
    <div class="cmp-swiper-box">
      <Swiper
        v-prd-detail-img 
        :options="{
          spaceBetween: 16,
          slidesPerView: 4,
          navigation: {
            nextEl: '.recomm-swiper-next',
            prevEl: '.recomm-swiper-prev',
          }
        }"
        :class="{'swiper-no-swiping' : recommendMDList.length <= 4}"
      ><!-- 221209 상품 스타일탭 : swiper-no-swiping 클래스 추가 -->
        <SwiperSlide v-for="(item, index) in recommendMDList" :key="index">
          <div class="swiper-prd-unit align-c">
            <nuxt-link :to="item.link">
              <v-img :src="item.image" alt="product image" class="prd-img"></v-img>
              <span class="brand-name">{{item.brand_name}}</span>
              <span class="prd-name2">{{item.product_name}}</span>
              <span class="sell-price">{{item.sell_price | number}}</span>
            </nuxt-link>
            <button class="zzim-btn" :class="{on:item.zzim}" @click="item.zzim=!item.zzim"><span class="ir">찜</span></button>
          </div>
        </SwiperSlide>  
        <button slot="button-prev" class="recomm-swiper-next"></button>
        <button slot="button-next" class="recomm-swiper-prev"></button>
      </Swiper>
    </div>
    <!-- //MD 추천 상품 -->

    <!-- 비슷한 상품 -->
    <div class="prd-tit-box">
      <h3 class="tit">This is a similar product.</h3>
      <CommonTooltipBox :tooltip-list="['It is a product similar to the product you are viewing.']" :width="377" class="ml-4" />
    </div>
    <div class="cmp-swiper-box">
      <Swiper
        v-prd-detail-img 
        :options="{
          spaceBetween: 16,
          slidesPerView: 4,
          navigation: {
            nextEl: '.recomm-swiper-next',
            prevEl: '.recomm-swiper-prev',
          }
        }"
        :class="{'swiper-no-swiping' : similarProductList.length <= 4}"
      ><!-- 221209 상품 스타일탭 : swiper-no-swiping 클래스 추가 -->
        <SwiperSlide v-for="(item, index) in similarProductList" :key="index">
          <div class="swiper-prd-unit align-c">
            <nuxt-link :to="item.link">
              <v-img :src="item.image" alt="product image" class="prd-img"></v-img>
              <span class="brand-name">{{item.brand_name}}</span>
              <span class="prd-name2">{{item.product_name}}</span>
              <span class="sell-price">{{item.sell_price | number}}</span>
            </nuxt-link>
            <button class="zzim-btn" :class="{on:item.zzim}" @click="item.zzim=!item.zzim"><span class="ir">찜</span></button>
          </div>
        </SwiperSlide>  
        <button slot="button-prev" class="recomm-swiper-next"></button>
        <button slot="button-next" class="recomm-swiper-prev"></button>
      </Swiper>
    </div>
    <!-- //비슷한 상품 -->

    <!-- 함께 구매한 상품 -->
    <div class="prd-tit-box">
      <h3 class="tit">This is a product purchased together.</h3>
      <CommonTooltipBox :tooltip-list="['It is a product the customers purchasing this product purchased together.']" :width="510" class="ml-4" />
    </div>
    <div class="cmp-swiper-box">
      <Swiper
        v-prd-detail-img 
        :options="{
          spaceBetween: 16,
          slidesPerView: 4,
          navigation: {
            nextEl: '.recomm-swiper-next',
            prevEl: '.recomm-swiper-prev',
          }
        }"
        :class="{'swiper-no-swiping' : togetherProductList.length <= 4}"
      ><!-- 221209 상품 스타일탭 : swiper-no-swiping 클래스 추가 -->
        <SwiperSlide v-for="(item, index) in togetherProductList" :key="index">
          <div class="swiper-prd-unit align-c">
            <nuxt-link :to="item.link">
              <v-img :src="item.image" alt="상품 이미지" class="prd-img"></v-img>
              <span class="brand-name">{{item.brand_name}}</span>
              <span class="prd-name2">{{item.product_name}}</span>
              <span class="sell-price">{{item.sell_price | number}}</span>
            </nuxt-link>
            <button class="zzim-btn" :class="{on:item.zzim}" @click="item.zzim=!item.zzim"><span class="ir">찜</span></button>
          </div>
        </SwiperSlide>  
        <button slot="button-prev" class="recomm-swiper-next"></button>
        <button slot="button-next" class="recomm-swiper-prev"></button>
      </Swiper>
    </div>
    <!-- //함께 구매한 상품 -->

    <!-- 추천상품 -->
    <div class="prd-tit-box">
      <h3 class="tit">How about this product?</h3>
      <CommonTooltipBox :tooltip-list="['It is a product viewed many times by customers viewing this product.']" :width="481" class="ml-4" />
    </div>
    <div class="cmp-swiper-box">
      <Swiper
        v-prd-detail-img 
        :options="{
          spaceBetween: 16,
          slidesPerView: 4,
          navigation: {
            nextEl: '.recomm-swiper-next',
            prevEl: '.recomm-swiper-prev',
          }
        }"
        :class="{'swiper-no-swiping' : recommendProductList.length <= 4}"
      ><!-- 221209 상품 스타일탭 : swiper-no-swiping 클래스 추가 -->
        <SwiperSlide v-for="(item, index) in recommendProductList" :key="index">
          <div class="swiper-prd-unit align-c">
            <nuxt-link :to="item.link">
              <v-img :src="item.image" alt="product image" class="prd-img"></v-img>
              <span class="brand-name">{{item.brand_name}}</span>
              <span class="prd-name2">{{item.product_name}}</span>
              <span class="sell-price">{{item.sell_price | number}}</span>
            </nuxt-link>
            <button class="zzim-btn" :class="{on:item.zzim}" @click="item.zzim=!item.zzim"><span class="ir">찜</span></button>
          </div>
        </SwiperSlide> 
        <button slot="button-prev" class="recomm-swiper-next"></button>
        <button slot="button-next" class="recomm-swiper-prev"></button> 
      </Swiper>
    </div>
    <!-- //추천상품 -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'


export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data: () => ({
    contentsList : [
      {
        link : '#n',
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-contnest-img1.png',
        title : 'TOM & PET',
        desc : 'Simple explanation Simple explanation Simple explanation Simple explanation',
        category : 'The Edited',
      },
      {
        link : '#n',
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-contnest-img2.png',
        title : 'ROCHAS ‘R’ LOGO COLLECTION',
        desc : 'Simple explanation Simple explanation Simple explanation Simple explanation',
        category : 'The Edited',
      },
      {
        link : '#n',
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-contnest-img2.png',
        title : 'RE:STUDIO',
        desc : 'Simple explanation Simple explanation Simple explanation Simple explanation',
        category : 'The Edited',
      },
      {
        link : '#n',
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-contnest-img3.png',
        title : 'RE:STUDIO',
        desc : 'Simple explanation Simple explanation Simple explanation Simple explanation',
        category : 'The Edited',
      },
    ],
    recommendMDList : [ // MD 추천 상품
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-relation-prd-img1.png',
        brand_name :'SJSJ',
        product_name : 'strap pin tuck blouse',
        sell_price:'365000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-relation-prd-img2.png',
        brand_name :'FOURM THE STORE',
        product_name : '[BLANKnit] strap pin tuck blousestrap pin tuck blouseblousestrap pin tuck blouse',
        sell_price:'178000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-relation-prd-img1.png',
        brand_name :'SJSJ',
        product_name : 'strap pin tuck blouse',
        sell_price:'365000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-relation-prd-img2.png',
        brand_name :'FOURM THE STORE',
        product_name : 'strap pin tuck blouse',
        sell_price:'178000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-relation-prd-img1.png',
        brand_name :'SJSJ',
        product_name : 'strap pin tuck blouse',
        sell_price:'365000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-relation-prd-img2.png',
        brand_name :'FOURM THE STORE',
        product_name : 'strap pin tuck blouse',
        sell_price:'178000',
        link : '#n',
        zzim : false,
      },
    ],
    similarProductList : [ // 유사한 상품 리스트
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-similar-img1.png',
        brand_name :'SJSJ',
        product_name : 'strap pin tuck blouse',
        sell_price:'365000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-similar-img2.png',
        brand_name :'FOURM THE STORE',
        product_name : 'strap pin tuck blouse',
        sell_price:'178000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-similar-img1.png',
        brand_name :'SJSJ',
        product_name : 'strap pin tuck blouse',
        sell_price:'365000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-similar-img2.png',
        brand_name :'FOURM THE STORE',
        product_name : 'strap pin tuck blouse',
        sell_price:'178000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-similar-img1.png',
        brand_name :'SJSJ',
        product_name : 'strap pin tuck blouse',
        sell_price:'365000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-similar-img2.png',
        brand_name :'FOURM THE STORE',
        product_name : 'strap pin tuck blouse',
        sell_price:'178000',
        link : '#n',
        zzim : false,
      },
    ],
    togetherProductList : [ // 함께 구매한 상품 리스트
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-together-img1.png',
        brand_name :'SJSJ',
        product_name : 'strap pin tuck blouse',
        sell_price:'365000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-together-img2.png',
        brand_name :'FOURM THE STORE',
        product_name : 'strap pin tuck blouse',
        sell_price:'178000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-together-img1.png',
        brand_name :'SJSJ',
        product_name : 'strap pin tuck blouse',
        sell_price:'365000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-together-img2.png',
        brand_name :'FOURM THE STORE',
        product_name : 'strap pin tuck blouse',
        sell_price:'178000',
        link : '#n',
        zzim : false,
      },
    ],
    recommendProductList : [ // 추천상품 리스트
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-suggestion-img1.png',
        brand_name :'SJSJ',
        product_name : 'strap pin tuck blouse',
        sell_price:'365000',
        link : '#n',
        zzim : true,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-suggestion-img2.png',
        brand_name :'FOURM THE STORE',
        product_name : 'strap pin tuck blouse',
        sell_price:'178000',
        link : '#n',
        zzim : true,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-suggestion-img1.png',
        brand_name :'SJSJ',
        product_name : 'strap pin tuck blouse',
        sell_price:'365000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-suggestion-img2.png',
        brand_name :'FOURM THE STORE',
        product_name : 'strap pin tuck blouse',
        sell_price:'178000',
        link : '#n',
        zzim : false,
      },
    ],
  }),
  created() {
    
  },
  mounted() {
    
  },
  methods: {
    zzim(){
      const me = this
      const btn = me.$el.querySelector(".zzim-btn")
      if(me.data.zzim === true){
        me.data.zzim = false
        btn.classList.remove("i-hearton")
        btn.classList.add("i-heartoff")
      }else{
        me.data.zzim = true
        btn.classList.add("i-hearton")
        btn.classList.remove("i-heartoff")
      }
      me.$forceUpdate()
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/detail.scss'; //페이지 전용 css
</style>
