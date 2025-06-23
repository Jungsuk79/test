<template>
  <div class="contents">
    <div class="content-wrap content-magazineTemp">
        <MagHeader :data="{title:'Q.P.T.',subTitle : '타임옴므가 꿈꾸는 여름', date:'2021.12.29'}" />
        <!-- [s] 이미지html -->
        <div class="mb-60 mag-temp-full-width mag-temp-news-swipe">
            <div class="main-slideArea bulletSwiper-white slideOver mb-34">
              <Swiper 
                :options="{
                  pagination: {el: '.cmp-swiper-paginationBullet',clickable: true},
                  navigation: {
                    nextEl: '.mainswiper-button-next',
                    prevEl: '.mainswiper-button-prev',
                  },
                }"
                :class="{'swiper-no-swiping':eventBanner.length <= 1}"
              >
                <SwiperSlide v-for="(item,index) in eventBanner" :key="index">
                  <nuxt-link :to="item.link">
                    <img :src="item.image" :alt="item.desc">
                  </nuxt-link>
                </SwiperSlide>
                <div v-if="eventBanner.length > 1" slot="pagination" class="cmp-swiper-paginationBullet swiper-pagination"></div>
                  <button slot="button-prev" class="mainswiper-button-prev swiper-button-prev"></button>
                  <button slot="button-next" class="mainswiper-button-next swiper-button-next"></button>
              </Swiper>
            </div>

            <!-- [s] 텍스트 -->
            <div class="news-text cmp-font mt-120 pt-20"><!-- [퍼블수정]23.01.31 -->
              <div class="tit mb-24">마인의 NEW 컬렉션, 코드마인T 공개</div>
              <div class="txt mb-30">동시대의 트렌드를 마인만의 아이덴티티로 녹여 선보이는 캡슐 라인 코드 마인(CODE MINE)<br />올해 데님 라인, 코드 마인 Blue 부터 스포티 캐주얼 라인, 코드 마인 Escape를 거쳐 새로운 코드 마인 Twilight이 핸썸TV에서 소개됩니다.
              </div>
              <div class="txt">영롱한 빛을 주제로 한 클래식하고 젊은 데일리 아이템들과 함께, 마인만의 섬세함을 느껴볼 수 있는 코드 마인 T를 &lt;마인의 NEW 컬렉션, 코드마인 T 공개&gt; 편에서 확인해 보세요.</div>
            </div>
            <!-- [e] 텍스트 -->
        </div>
        <!-- [e] 이미지html -->



        <!-- [s] 비디오 -->
        <div class="mb-120 pb-20"><!-- [퍼블수정]23.01.31 -->
            <VideoPlayer :path="'https://img.thehandsome.com/md/publish/dummy/pc/video.mp4'" :poster="'https://img.thehandsome.com/md/publish/dummy/pc/magazine-img.jpg'" :play-on-scroll="true" :loop="true"/><!-- 221213 video : :loop="true" 추가 -->
            <!-- [s] 텍스트 -->
            <div class="news-text cmp-font mt-60">
              <div class="txt mb-30">동시대의 트렌드를 마인만의 아이덴티티로 녹여 선보이는 캡슐 라인 코드 마인(CODE MINE)<br />올해 데님 라인, 코드 마인 Blue 부터 스포티 캐주얼 라인, 코드 마인 Escape를 거쳐 새로운 코드 마인 Twilight이 핸썸TV에서 소개됩니다.
              </div>
              <div class="txt">영롱한 빛을 주제로 한 클래식하고 젊은 데일리 아이템들과 함께, 마인만의 섬세함을 느껴볼 수 있는 코드 마인 T를 &lt;마인의 NEW 컬렉션, 코드마인 T 공개&gt; 편에서 확인해 보세요.</div>
            </div>
            <!-- [e] 텍스트 -->
        </div>
        <!-- [e] 비디오 -->

        <!-- [s] 최신 the 매거진 -->
        <div class="magaAllBox magaRecent dim">
          <MagRecent></MagRecent>
        </div>
        <!-- [e] 최신 the 매거진 -->

        <div class="magaBtn mt-60 text-center"><!-- [퍼블수정]23.01.26 mt-40 > mt-60 -->
          <v-btn outlined large color="primary">
            목록
          </v-btn>
        </div>

    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import VideoPlayer from '~/components/common/VideoPlayer'
import MagRecent from '~/components/planshop/MagRecent.vue'
import MagHeader from '~/components/planshop/MagHeader'


export default {
  components: {
    Swiper,
    SwiperSlide,
    VideoPlayer,
    MagRecent,
    MagHeader,
},
  layout: 'LayoutBasics',
  data: () => ({
    productListLayout : 4,
    productListLayout2 : 6,
    productUnitType : 'mini',
    productUnitSwipe: true,
    productUnitSwipe2 : false,
    productList : [
      {
        "brand_name": "FOURM LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/001.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "FOURM MEN’S LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/002.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "FOURM MEN’S",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/003.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/004.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "FOURM MEN’S LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/005.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/006.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "FOURM MNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/007.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": " MEN’S LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/008.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "FOURM MENUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/009.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/010.jpg",
        "link_url" : "#none",
      },{
        "brand_name": "LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/006.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "FOURM MNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/007.jpg",
        "link_url" : "#none",
      },
      
    ],
    eventBanner : [ // 이벤트 배너
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/magabanner.png',
        desc : 'SYSTEM HOMME 스포트라이트 온 타임옴므 CHECK OUT NOW',
        link : '#n',
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/magabanner.png',
        desc : 'SYSTEM HOMME 스포트라이트 온 타임옴므 CHECK OUT NOW',
        link : '#n',
      },
    ]
  }),
  created(){
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/magazine.scss';
</style>