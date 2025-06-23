<template>
  <div class="contents">
    <!-- [퍼블수정]22.12.08 결함 HFOT-3949 수정-->
    <div v-scroll="onScroll" class="content-wrap content-magazineTemp content-magazineTempB">
        <MagHeader :data="{title:'커버스토리',subTitle : '타임옴므가 꿈꾸는 여름', date:'2021.12.29'}" />
        <!-- [s] html영역 -->
        <div class="mb-40 mag-temp-full-width">
          <div class="main-imgArea mb-40">
              <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/maga-banner.png" alt=""></v-img>
              <div class="textBox">
                  <p class="tit mb-24">타임옴므가 꿈꾸는 여름</p>
                  <p class="txt"> 3줄 데님과 쇼츠, 파스텔 컬러 니트와 베이직 아이템이 함께 뒤섞여 조화를 이루는 이번 타임 옴므 온라인 전용 컬렉션은 지금부터 올 여름까지 입기에 완벽한 스타일을 제안한다. </p>
              </div>
          </div>
        </div>
        <!-- 퍼블 확인용 -->
        <div>
          <div>
            <div class="mb-120"></div>
          </div>
          <div>
            <div class="mb-120">
              <!-- <p><img src="http://cdn.thehandsome.com/pc/editorial_gu/221103_%ED%83%80%EC%9E%84%EC%98%B4%EB%AF%80%20%EC%98%A8%EC%A0%84%20%EA%B2%A8%EC%9A%B8%202%EC%B0%A8/pc_detail_01.jpg" alt="" width="1205" height="2640"></p> -->
            </div>
          </div>
        </div>
        
        <!-- [s] 이미지 슬라이드 -->
        <!-- [퍼블수정]23.03.08 동영상/이미지 비율 수정 -->
        <div class="mb-40 mag-temp-full-width mag-temp-b-swipe">
          <Swiper
            :options="{
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              watchOverflow : true,
            }"
            :class="{'swiper-no-swiping':productList3.length <= 1}"
          >
            <SwiperSlide v-for="(item, idx) in productList3" :key="idx" class="magaImgSlide">
                <nuxt-link class="button" to="#n">
                    <VideoPlayer v-if="item.video" :path="item.video_url" :poster="item.videoImg" :play-on-scroll="true" :videoRatio="56.25" class="videobox" />
                    <!-- 230222 매거진 : 이미지 태그 v-img > img 변경 -->
                    <v-img v-else :src="item.image_url" alt="" class="mgz-image" :aspect-ratio="1920 / 1080"></v-img>
                    <!-- <v-img v-else :src="item.image_url" alt="" class="rec-image"></v-img> -->
                </nuxt-link>
            </SwiperSlide>
            <button v-if="productList3.length > 1" slot="button-prev" class="swiper-button-prev"></button>
            <button v-if="productList3.length > 1" slot="button-next" class="swiper-button-next"></button>
          </Swiper>
        </div>
        <!-- //[퍼블수정]23.03.08 동영상/이미지 비율 수정 -->
        <!-- [e] 이미지 슬라이드 -->
        <!-- [e] html영역 -->
        
        <!-- [퍼블수정]23.10.11 더매거진 수정 - 타이틀에 class 추가 -->
        <!-- [240813] THE 매거진 쿠폰 구분자 영역 추가 -->
        <div class="mb-140">
          <h3 class="muh-list-title text-left">1</h3>
          <!-- [퍼블수정]23.10.11 더매거진 수정 - 레이아웃 수정 -->
          <ProductList class="plan-list" :list="productList" :layout="4" :unit-type="productUnitType" :swipe="productUnitSwipe" />

          <div class="couponArea text-center mag-temp-full-width mt-140">
            <button class="button">
              <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/planshop/coupon-banner-sample.jpg" alt=""></v-img>
            </button>
          </div>
        </div>
        <!-- // [240813] THE 매거진 쿠폰 구분자 영역 추가 -->

        <!-- [e] html영역 -->
        <!-- [s] 이미지 슬라이드 -->
        <!-- [퍼블수정]23.03.08 동영상/이미지 비율 수정 -->
        <div class="mb-40 mag-temp-full-width mag-temp-b-swipe">
          <Swiper
            :options="{
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              watchOverflow : true,
            }"
            :class="{'swiper-no-swiping': productList3.length <= 1}"
          >
            <SwiperSlide v-for="(item, idx) in productList3" :key="idx" class="magaImgSlide">
                <nuxt-link class="button" to="#n">
                    <VideoPlayer v-if="item.video" :path="item.video_url" :poster="item.videoImg" :play-on-scroll="true" :videoRatio="56.25" class="videobox" />
                    <!-- 230222 매거진 : 이미지 태그 v-img > img 변경 -->
                    <v-img v-else :src="item.image_url" alt="" class="mgz-image" :aspect-ratio="1920 / 1080"></v-img>
                    <!-- <v-img v-else :src="item.image_url" alt="" class="rec-image"></v-img> -->
                </nuxt-link>
            </SwiperSlide>
            <button v-if="productList3.length > 1" slot="button-prev" class="swiper-button-prev"></button>
            <button v-if="productList3.length > 1" slot="button-next" class="swiper-button-next"></button>
          </Swiper>
        </div>
        <!-- //[퍼블수정]23.03.08 동영상/이미지 비율 수정 -->
        <!-- [e] 이미지 슬라이드 -->
        <!-- [e] html영역 -->

        <!-- [퍼블수정]23.10.11 더매거진 수정 - 타이틀에 class 추가 -->
        <div class="mb-140">
          <h3 class="muh-list-title text-left">2</h3>
          <!-- [퍼블수정]23.10.11 더매거진 수정 - 레이아웃 수정 -->
          <ProductList class="plan-list" :list="productList" :layout="4" :unit-type="productUnitType" :swipe="productUnitSwipe" />
        </div>

        <!-- [s] 모아보기 -->
        <!-- [퍼블수정]22.12.08 결함 HFOT-3949 수정-->
        <div class="magaAllBox stickyTabs mb-120">
          <p class="tit">위 화보에 실린 상품 모아보기</p>
          <div class="anchorTabBox" ref="anchorTabBox">
            <div class="cmp-tabs tab-wrapType mb-30 mt-24" :class="{'column05' : tabList.length > 5}"><!-- [퍼블수정]22.12.08 모아보기 수정 -->
              <div class="fixed-tabsBox">
                <v-tabs v-model="tab" fixed-tabs>
                  <v-tab v-for="(item,index) in tabList" :key="index" @click="tabTitle(index)">{{item}}</v-tab>
                </v-tabs>
              </div>
            </div>
            <v-expansion-panels v-sticky-tabs accordion class="cmp-acc">
              <v-expansion-panel>
                <v-expansion-panel-header>
                  {{tabTitleName}}
                  <template #actions>
                    <i class="cmp-icon-etc cmp-icon-down">열기/닫기</i>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div class="cmp-tabs tab-wrapType" :class="{'column05' : tabList.length > 5}"><!-- [퍼블수정]22.12.08 모아보기 수정 -->
                    <div class="fixed-tabsBox">
                      <v-tabs v-model="tab" fixed-tabs>
                        <v-tab v-for="(item,index) in tabList" :key="index" @click="tabTitle(index)">{{item}}</v-tab>
                      </v-tabs>
                    </div>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
          <div class="tab-content">
            <v-tabs-items v-model="tab">
              <v-tab-item :transition="false">
                <ProductList class="muh-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe2" />
              </v-tab-item>        
              <v-tab-item :transition="false">
               <ProductList class="muh-list" :list="productList2" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe2" />
              </v-tab-item>
              <v-tab-item :transition="false">
                <ProductList class="muh-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe2" />
              </v-tab-item>        
              <v-tab-item :transition="false">
               <ProductList class="muh-list" :list="productList2" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe2" />
              </v-tab-item>
              <v-tab-item :transition="false">
                <ProductList class="muh-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe2" />
              </v-tab-item>        
              <v-tab-item :transition="false">
               <ProductList class="muh-list" :list="productList2" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe2" />
              </v-tab-item>
              <v-tab-item :transition="false">
                <ProductList class="muh-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe2" />
              </v-tab-item>
              
            </v-tabs-items>
          </div>
        </div>
        <!-- //[퍼블수정]22.12.08 결함 HFOT-3949 수정-->
        <!-- [e] 모아보기 -->

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
import MagRecent from '~/components/planshop/MagRecent.vue'
import MagHeader from '~/components/planshop/MagHeader'
import VideoPlayer from '~/components/common/VideoPlayer'


export default {
  components: {
    Swiper, SwiperSlide,
    MagRecent,
    MagHeader,
    VideoPlayer,

},
  layout: 'LayoutBasics',
  data: () => ({
    tab: null,
    tabTitleName : '전체',  //  [퍼블수정]22.12.08 결함 HFOT-3949 수정
    productUnitType : 'mini',
    anchorTabBox : '',  //  [퍼블수정]22.12.08 결함 HFOT-3949 수정
    productUnitSwipe: true,
    productUnitSwipe2 : false,
    // [퍼블수정]23.10.11 더매거진 수정 - 레이아웃 수정
    productUnitSwipe3: false,
    productList : [
      {
        "brand_name": "FOURM LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/001.jpg",
        "link_url" : "#none",
        "product_name" : "[BEARBRICK] 사이키델릭 페이즐 사이키델릭 페이즐사이키델릭 페이즐사이키델릭 페이즐사이키델릭 페이즐사이키델릭 페이즐사이키델릭 페이즐",
        "flags": [
            "BEST",
            "NEW"
        ],
        "exclusive":false,
        "limited":true,
      },
      {
        "brand_name": "FOURM MEN’S LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/002.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트",
        "flags": [
            "BEST",
        ],
        "exclusive":true,
        "limited":false,
      },
      {
        "brand_name": "FOURM MEN’S",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/003.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트",
        "flags": [
            "NEW"
        ],
      },
      {
        "brand_name": "LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/004.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      },
      {
        "brand_name": "FOURM MEN’S LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/005.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      },
      {
        "brand_name": "LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/006.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      },
      {
        "brand_name": "FOURM MNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/007.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      },
      {
        "brand_name": " MEN’S LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/008.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트",
        "flags": [
            "BEST",
            "NEW"
        ],
      },
      {
        "brand_name": "FOURM MENUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/009.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      },
      {
        "brand_name": "LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/010.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      },{
        "brand_name": "LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/006.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      },
      {
        "brand_name": "FOURM MNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/007.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      },

    ],
    productList2 : [
      {
        "brand_name": "FOURM MENUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/009.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      },
      {
        "brand_name": "LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/010.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      },{
        "brand_name": "LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/006.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      },
      {
        "brand_name": "FOURM MNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/007.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      }
    ],
    productList3 : [
      {
        "video" : true,
        "videoImg": "/images/cs/stylelive_1_video_poster.png",
        "video_url": "/images/cs/stylelive_1_video.mp4",
        "desc": "비디오타입",
      },
      {
        "video" : true, // 비디오타입
        "video_url": "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
      },
      {
        "image_url": "https://img.thehandsome.com/attachment/display/pc/editorial/detail/banner/20221018_52641820160389830_ko.jpg",
      },
      /* {
        "image_url": "https://img.thehandsome.com/attachment/display/pc/editorial/detail/banner/20221018_52641820160389830_ko.jpg",
      },
      {
        "image_url": "https://img.thehandsome.com/attachment/display/pc/editorial/detail/banner/20221018_52641820160389830_ko.jpg",
      }, */
      /* {
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/003.jpg",
      },
      {
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/004.jpg",
      } */
    ],
    tabList: [  //  [퍼블수정]22.12.08 결함 HFOT-3949 수정
      '전체',
      '재킷',
      '점퍼',
      '가디건/베스트가디건',
      '트렌치코트',
      '코트',
      '코트',
    ],
  }),
  created(){
  },
  methods: {  //  [퍼블수정]22.12.08 결함 HFOT-3949 수정
    tabTitle(idx){
      this.tabTitleName = this.tabList[idx]
    },
    onScroll(e) {
    	// 스크롤 움직일 때 마다 호출됨
    	this.scroll = window.scrollY;
      const anchorTabBoxFix = this.$refs.anchorTabBox.offsetTop;

      // 탭2 [퍼블수정]22.12.08 모아보기 수정
      if(this.scroll - 100 > anchorTabBoxFix){
        document.querySelector('.anchorTabBox .cmp-acc').style.display = 'block';
        document.querySelector('.anchorTabBox .cmp-tabs').style.display = 'none';
        document.querySelector('.anchorTabBox + div').style.paddingTop = '124px';
      }else{
        document.querySelector('.anchorTabBox .cmp-acc').style.display = 'none';
        document.querySelector('.anchorTabBox .cmp-tabs').style.display = 'block';
        document.querySelector('.anchorTabBox + div').style.paddingTop = '0';
      }

    },
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/magazine.scss'; 
</style>