<template>
  <div class="prd-detail-style">
    <!-- [퍼블수정]07.12 상품상세 > 스타일 탭 내 코디& 룩북 추가 -->
    <!-- 신규 추가 코디한 상품 & 룩북 제안 스타일 -->
    <div class="cmp-tabs tabs-contents mb-60">
      <v-tabs v-model="codyandlookbooktab" fixed-tabs>
        <v-tab>코디한 상품</v-tab>
        <v-tab>룩북 제안 스타일</v-tab>
      </v-tabs>
    </div>
    <div class="tab-content cody-lookbook-tab">
      <v-tabs-items v-model="codyandlookbooktab" touchless>
        <v-tab-item :transition="false">
          <div class="cmp-swiper-box cody-list">
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
              :class="{'swiper-no-swiping' : codyList.length <= 4}"
            >
              <SwiperSlide v-for="(item, index) in codyList" :key="index">
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
        </v-tab-item>
        <v-tab-item :transition="false">
          <div class="cmp-swiper-box lookbook-list">
            <Swiper 
              :options="{
                on : {
                  init: initSwiper,
                },
                spaceBetween: 1,
                slidesPerView: 1,
                scrollbar: {
                  el: '.swiper-scrollbar',
                  hide: false,
                },
              }"
              >
              <!-- swiper-no-swiping 삭제 -->
              <SwiperSlide v-for="(item,index) in lookbookSwipeList" :key="index">
                <div class="top-images">
                  <v-img :src="item.image_url" :alt="item.title" class="prd-img"></v-img>
                </div>
                <div class="lookbook-prods" :class="{'no-swiping':item.list.length <= 3}">
                  <ProductList :list="item.list" :layout="3" :group="1" :unit-type="'mini'" :swipe="true" :no-grid-fit="true" :t-ratio="'0'" :space="24" @setupSwiper="initSwiper" />
                </div>
              </SwiperSlide> 
              <div slot="scrollbar" class="swiper-scrollbar"></div>
            </Swiper>
          </div>
        </v-tab-item>
      </v-tabs-items>
    </div>

    <!-- 탭 없는경우 - 코디한 상품 -->
    <div class="prd-tit-box">
      <h3 class="tit">함께 코디한 상품이에요</h3>
    </div>
    <div class="cmp-swiper-box cody-list">
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
        :class="{'swiper-no-swiping' : codyList.length <= 4}"
      >
        <SwiperSlide v-for="(item, index) in codyList" :key="index">
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

    <!-- 탭 없는경우 - 룩북 제안 스타일 -->
    <div class="prd-tit-box">
      <h3 class="tit">룩북 제안 스타일이에요</h3>
    </div>
    <div class="cmp-swiper-box lookbook-list">
      <Swiper 
        :options="{
          on : {
            init: initSwiper,
          },
          spaceBetween: 1,
          slidesPerView: 1,
          scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
          },
        }"
        >
        <!-- swiper-no-swiping 삭제 -->
        <SwiperSlide v-for="(item,index) in lookbookSwipeList" :key="index">
          <div class="top-images">
            <v-img :src="item.image_url" :alt="item.title" class="prd-img"></v-img>
          </div>
          <div class="lookbook-prods" :class="{'no-swiping':item.list.length <= 3}">
            <ProductList :list="item.list" :layout="3" :group="1" :unit-type="'mini'" :swipe="true" :no-grid-fit="true" :t-ratio="'0'" :space="16" @setupSwiper="initSwiper" />
          </div>
        </SwiperSlide> 
        <div slot="scrollbar" class="swiper-scrollbar"></div>
      </Swiper>
    </div>
    <!-- //[퍼블수정]07.12 상품상세 > 스타일 탭 내 코디& 룩북 추가 -->

    <!-- MD 추천 상품 -->
    <div class="prd-tit-box">
      <h3 class="tit">MD가 추천하는 상품이에요</h3>
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
    <!-- //MD 추천 상품 -->

    <!-- 비슷한 상품 -->
    <div class="prd-tit-box">
      <h3 class="tit">비슷한 상품이에요</h3>
      <CommonTooltipBox :tooltip-list="['보시는 상품과 비슷한 상품입니다.']" class="ml-4" />
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
    <!-- //비슷한 상품 -->

    <!-- 함께 구매한 상품 -->
    <div class="prd-tit-box">
      <h3 class="tit">함께 구매한 상품이에요</h3>
      <CommonTooltipBox :tooltip-list="['이 상품의 구매 고객들이 함께 구매한 상품입니다.']" class="ml-4" />
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
      <h3 class="tit">이런 상품 어떠세요?</h3>
      <CommonTooltipBox :tooltip-list="['이 상품을 본 고객들이 많이 본 상품입니다.']" class="ml-4" />
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
    <!-- //추천상품 -->
    <!-- [퍼블수정]07.12 상품상세 > 스타일 탭 내 코디& 룩북 추가 -->
    <!-- 관련있는 콘텐츠 -->
    <div class="prd-tit-box">
      <h3 class="tit">상품과 관련있는 콘텐츠에요</h3>
    </div>
    <ul class="prd-contents-list" :class="{'one-item': contentsList.length === 1}">
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
    // [퍼블수정]07.12 상품상세 > 스타일 탭 내 코디& 룩북 추가
    codyandlookbooktab:null,
    contentsList : [
      {
        link : '#n',
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-contnest-img1.png',
        title : 'TOM & PET',
        desc : '사랑스러운 에너지 듬뿍! 나의 작고 소중한 친구를 위한 특별한 PET ITEM.<br>지금 TOM GREYHOUND에서 만나보세요!',
        category : '기획전',
      },
      {
        link : '#n',
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-contnest-img2.png',
        title : 'ROCHAS ‘R’ LOGO COLLECTION',
        desc : '로샤스의 22SS 컬렉션 R로고 니트웨어와 국내 단독으로 출시하는 브로케이드 캡슐 컬렉션을 만나보세요.',
        category : '기획전',
      },
      {
        link : '#n',
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-contnest-img2.png',
        title : 'RE:STUDIO',
        desc : '페르소나를 둘러싼 크고 작은 타이밍이 만들어내는 무한한 세계가 펼쳐집니다.',
        category : '기획전',
      },
      {
        link : '#n',
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-contnest-img3.png',
        title : '와이드 스펙트럼, 스타일리스트 정진아',
        desc : '#한섬만의 옷장, 스물한 번째 주인공',
        category : 'THE 매거진',
      },
    ],
    recommendMDList : [ // MD 추천 상품
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-relation-prd-img1.png',
        brand_name :'SJSJ',
        product_name : '코듀로이 벨벳 팬츠',
        sell_price:'365000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-relation-prd-img2.png',
        brand_name :'FOURM THE STORE',
        product_name : '티어드 튤 스커트',
        sell_price:'178000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-relation-prd-img1.png',
        brand_name :'SJSJ',
        product_name : '코듀로이 벨벳 팬츠',
        sell_price:'365000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-relation-prd-img2.png',
        brand_name :'FOURM THE STORE',
        product_name : '티어드 튤 스커트',
        sell_price:'178000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-relation-prd-img1.png',
        brand_name :'SJSJ',
        product_name : '코듀로이 벨벳 팬츠',
        sell_price:'365000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-relation-prd-img2.png',
        brand_name :'FOURM THE STORE',
        product_name : '티어드 튤 스커트',
        sell_price:'178000',
        link : '#n',
        zzim : false,
      },
    ],
    // [퍼블수정]07.12 상품상세 > 스타일 탭 내 코디& 룩북 추가
    codyList : [ // 코디한 상품
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-relation-prd-img2.png',
        brand_name :'FOURM THE STORE',
        product_name : '티어드 튤 스커트',
        sell_price:'178000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-relation-prd-img1.png',
        brand_name :'SJSJ',
        product_name : '코듀로이 벨벳 팬츠',
        sell_price:'365000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-similar-img1.png',
        brand_name :'SJSJ',
        product_name : '코듀로이 벨벳 팬츠',
        sell_price:'365000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-similar-img2.png',
        brand_name :'FOURM THE STORE',
        product_name : '티어드 튤 스커트',
        sell_price:'178000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-relation-prd-img2.png',
        brand_name :'FOURM THE STORE',
        product_name : '티어드 튤 스커트',
        sell_price:'178000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-relation-prd-img1.png',
        brand_name :'SJSJ',
        product_name : '코듀로이 벨벳 팬츠',
        sell_price:'365000',
        link : '#n',
        zzim : false,
      },
    ],
    lookbookSwipeList : [
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-lookbook-detail-img1.png',
        link_url : '#n',
        list : [
          {
              "product_name": "린넨 블렌드 칼라리스 재킷린넨 블렌드 칼라리스 재킷린넨 블렌드 칼라리스 재킷린넨 블렌드 칼라리스 재킷린넨 블렌드 칼라리스 재킷",
              "brand_name" :'SJSJ',
              "sell_price": "350000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img0.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
              "link_url" : "#none",
              "zzim": false,
          },
          {
              "product_name": "버튼 칼라 니트 가디건",
              "brand_name" :'FOURM THE STORE',
              "sell_price": "395000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img1.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
              "link_url" : "#none",
              "zzim": true,
          },
          {
              "product_name": "린넨 블렌드 칼라리스 재킷",
              "brand_name" :'FOURM THE STORE',
              "sell_price": "350000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img0.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
              "link_url" : "#none",
              "zzim": false,
          },
        ]
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-lookbook-detail-img2.jpg',
        link_url : '#n',
        list : [
          {
              "product_name": "버튼 칼라 니트 가디건",
              "brand_name" :'SJSJ',
              "sell_price": "395000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img1.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
              "link_url" : "#none",
              "zzim": true,
          },
          {
              "product_name": "텍스쳐 블록 드레스",
              "brand_name" :'SJSJ',
              "sell_price": "346000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img2.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
              "link_url" : "#none",
              "zzim": false,
          },
          {
              "product_name": "린넨 블렌드 칼라리스 재킷",
              "brand_name" :'SJSJ',
              "sell_price": "350000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img0.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
              "link_url" : "#none",
              "zzim": false,
          },
          {
              "product_name": "버튼 칼라 니트 가디건",
              "brand_name" :'SJSJ',
              "sell_price": "395000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img1.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
              "link_url" : "#none",
              "zzim": true,
          },
          {
              "product_name": "텍스쳐 블록 드레스",
              "brand_name" :'SJSJ',
              "sell_price": "346000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img2.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
              "link_url" : "#none",
              "zzim": false,
          },
          {
              "product_name": "린넨 블렌드 칼라리스 재킷",
              "brand_name" :'SJSJ',
              "sell_price": "350000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img0.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
              "link_url" : "#none",
              "zzim": false,
          },
        ]
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-lookbook-detail-img3.jpg',
        link_url : '#n',
        list : [
          {
              "product_name": "버튼 칼라 니트 가디건",
              "brand_name" :'SJSJ',
              "sell_price": "395000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img1.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
              "link_url" : "#none",
              "zzim": true,
          },
          {
              "product_name": "린넨 블렌드 칼라리스 재킷",
              "brand_name" :'SJSJ',
              "sell_price": "350000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img0.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
              "link_url" : "#none",
              "zzim": false,
          }
        ]
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-lookbook-detail-img4.jpg',
        link_url : '#n',
        list : [
          {
              "product_name": "텍스쳐 블록 드레스",
              "brand_name" :'SJSJ',
              "sell_price": "346000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img2.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
              "link_url" : "#none",
              "zzim": false,
          },
          {
              "product_name": "린넨 블렌드 칼라리스 재킷",
              "brand_name" :'SJSJ',
              "sell_price": "350000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img0.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
              "link_url" : "#none",
              "zzim": false,
          },
          {
              "product_name": "버튼 칼라 니트 가디건",
              "brand_name" :'SJSJ',
              "sell_price": "395000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img1.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
              "link_url" : "#none",
              "zzim": true,
          },
          {
              "product_name": "텍스쳐 블록 드레스",
              "brand_name" :'SJSJ',
              "sell_price": "346000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img2.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
              "link_url" : "#none",
              "zzim": false,
          },
          {
              "product_name": "린넨 블렌드 칼라리스 재킷",
              "brand_name" :'SJSJ',
              "sell_price": "350000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img0.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
              "link_url" : "#none",
              "zzim": false,
          },
          {
              "product_name": "버튼 칼라 니트 가디건",
              "brand_name" :'SJSJ',
              "sell_price": "395000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img1.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
              "link_url" : "#none",
              "zzim": true,
          },
        ]
      }
    ],
    similarProductList : [ // 유사한 상품 리스트
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-similar-img1.png',
        brand_name :'SJSJ',
        product_name : '코듀로이 벨벳 팬츠',
        sell_price:'365000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-similar-img2.png',
        brand_name :'FOURM THE STORE',
        product_name : '티어드 튤 스커트',
        sell_price:'178000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-similar-img1.png',
        brand_name :'SJSJ',
        product_name : '코듀로이 벨벳 팬츠',
        sell_price:'365000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-similar-img2.png',
        brand_name :'FOURM THE STORE',
        product_name : '티어드 튤 스커트',
        sell_price:'178000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-similar-img1.png',
        brand_name :'SJSJ',
        product_name : '코듀로이 벨벳 팬츠',
        sell_price:'365000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-similar-img2.png',
        brand_name :'FOURM THE STORE',
        product_name : '티어드 튤 스커트',
        sell_price:'178000',
        link : '#n',
        zzim : false,
      },
    ],
    togetherProductList : [ // 함께 구매한 상품 리스트
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-together-img1.png',
        brand_name :'SJSJ',
        product_name : '코듀로이 벨벳 팬츠',
        sell_price:'365000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-together-img2.png',
        brand_name :'FOURM THE STORE',
        product_name : '티어드 튤 스커트',
        sell_price:'178000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-together-img1.png',
        brand_name :'SJSJ',
        product_name : '코듀로이 벨벳 팬츠',
        sell_price:'365000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-together-img2.png',
        brand_name :'FOURM THE STORE',
        product_name : '티어드 튤 스커트',
        sell_price:'178000',
        link : '#n',
        zzim : false,
      },
    ],
    recommendProductList : [ // 추천상품 리스트
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-suggestion-img1.png',
        brand_name :'SJSJ',
        product_name : '코듀로이 벨벳 팬츠',
        sell_price:'365000',
        link : '#n',
        zzim : true,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-suggestion-img2.png',
        brand_name :'FOURM THE STORE',
        product_name : '티어드 튤 스커트',
        sell_price:'178000',
        link : '#n',
        zzim : true,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-suggestion-img1.png',
        brand_name :'SJSJ',
        product_name : '코듀로이 벨벳 팬츠',
        sell_price:'365000',
        link : '#n',
        zzim : false,
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-suggestion-img2.png',
        brand_name :'FOURM THE STORE',
        product_name : '티어드 튤 스커트',
        sell_price:'178000',
        link : '#n',
        zzim : false,
      },
    ],
  }),
  watch: {
    // [퍼블수정]07.12 상품상세 > 스타일 탭 내 코디& 룩북 추가
    codyandlookbooktab(e) {
      if (e === 1) {
        this.initSwiperlookbook();
      }
    }
  },
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
    },
    // [퍼블수정]07.12 상품상세 > 스타일 탭 내 코디& 룩북 추가
    initSwiper(){
      const me = this
      me.$nextTick(() => {
        setTimeout(() => {
          window.dispatchEvent(new Event('resize'))
        }, 1500)
      })
    },
    initSwiperlookbook(){
      const me = this
      me.$nextTick(() => {
        setTimeout(() => {
          window.dispatchEvent(new Event('resize'))
        }, 50)
      })
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/detail.scss'; //페이지 전용 css
</style>
