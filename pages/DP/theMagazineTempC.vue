<template>
  <div class="contents">
    <div class="content-wrap content-magazineTemp">
        <MagHeader :data="{title:'Q.P.T.',subTitle : '타임옴므가 꿈꾸는 여름', date:'2021.12.29'}" />
        <!-- [s] 상단 -->
        <!-- [240813] THE 매거진 쿠폰 구분자 영역 추가 -->
        <div class="mb-140 mag-temp-full-width mag-temp-c-swipe">
          <div class="main-slideArea bulletSwiper-white slideOver mb-34 contain-var"><!-- [퍼블수정]23.02.27 수정 -->
            <!-- [퍼블수정]23.03.01 스와이프 수정 -->
            <Swiper 
              :options="{
                watchOverflow: true,
                pagination: {el: '.cmp-swiper-paginationBullet',clickable: true},
                navigation: {
                  nextEl: '.mainswiper-button-next',
                  prevEl: '.mainswiper-button-prev',
                },
              }"
              :class="{'swiper-no-swiping':eventBanner.length <= 1}"
            >
              <!-- [퍼블수정]23.02.23 -->
              <SwiperSlide v-for="(item,index) in eventBanner" :key="index">
                  <VideoPlayer v-if="item.video" :path="item.video_url" :poster="item.videoImg" :play-on-scroll="true" :videoRatio="46.875" class="videobox" /><!-- [퍼블수정]23.02.27 수정 -->
                  <v-img v-else :src="item.image" :alt="item.desc"  :aspect-ratio="1920 / 900"></v-img><!-- [퍼블수정]23.02.27 수정 -->
              </SwiperSlide>
              <div v-if="eventBanner.length > 1" slot="pagination" class="cmp-swiper-paginationBullet swiper-pagination"></div>
              <button  v-if="eventBanner.length > 1" slot="button-prev" class="mainswiper-button-prev swiper-button-prev"></button>
              <button  v-if="eventBanner.length > 1" slot="button-next" class="mainswiper-button-next swiper-button-next"></button>
            </Swiper>
            <!-- //[퍼블수정]23.03.01 스와이프 수정 -->
          </div>
          <!--htmle 등록 영역-->
          <div class="sub-text text-center mb-30">
            <p class="cmp-font fnt-16 mb-6"><span class="bold">CLUB MONACO</span></p>
            <p class="cmp-font fnt-24 mb-14">플랩 포켓 싱글 재킷</p>
            <p class="cmp-font fnt-14 mb-10">MW2C4WJC112W</p>
            <button class="cmp-font fnt-13 button"><span class="line">상세보기</span></button>
          </div>

          <div class="couponArea text-center mag-temp-full-width">
            <button class="button">
              <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/planshop/coupon-banner-sample.jpg" alt=""></v-img>
            </button>
          </div>
        </div>
        <!-- // [240813] THE 매거진 쿠폰 구분자 영역 추가 -->
        <!-- [e] 상단 -->
        
        <!-- [s] 앵커탭 [퍼블수정]23.01.10 -->
        <div v-sticky-tabs="{planDetail: true}" class="anchorTabs planshop-tabs">
          <div class="fixed-tabsBox">
            <div class="fixed-tabs">
              <button target="magatab-01">
                  <span>전체</span>
              </button>
              <button target="magatab-02">
                  <span>재킷</span>
              </button>
              <button target="magatab-03">
                  <span>가디건/베스트</span>
              </button>
            </div>
          </div>
        </div>
        <!-- [e] 앵커탭 -->

        <!-- [s] 탭내용 -->
        <div class="tab-contents magaTabCon pt-30 mb-120">
          <div id="magatab-01" class="mb-50">
            <div class="tabHeader pt-30 mb-40">
              <p class="tit mb-6">DETAILS</p>
              <p class="subtit">LÄTT의 재킷 베리에이션</p>
            </div>
            <div class="tabExplan">
              <MagDetails :data="{}" />
            </div>
          </div>

          <div id="magatab-02" class="mb-50">
            <div class="tabHeader pt-30 mb-40">
              <p class="tit mb-6">STYLE</p>
              <p class="subtit">자켓과 함께 입으면 좋은 아이템</p>
            </div>

            <!-- 슬라이드 왼쪽형 -->
            <div class="magaTabSlide magaTabSlide-left mb-80">
              <!-- [퍼블수정]23.02.25 contain-var 추가 -->
              <div class="magaTabSlide-part1 bulletSwiper-white slideOver contain-var">
                <!-- [퍼블수정]23.03.01 스와이프 수정 -->
                <Swiper 
                  :options="{
                    watchOverflow: true,
                    pagination: {el: '.cmp-swiper-paginationBullet',clickable: true},
                    navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    },
                  }"
                  :class="{'swiper-no-swiping':editList.length <= 1}"
                >
                  <SwiperSlide v-for="(item,index) in editList" :key="index">
                      <VideoPlayer v-if="item.video" :path="item.video_url" :poster="item.image_url" :play-on-scroll="true" :videoRatio="133" class="videobox" />
                      <!-- <v-img v-else :src="item.image" :alt="item.desc"></v-img> -->
                      <div v-else v-background-image="{url:item.image}"></div>
                  </SwiperSlide>
                  <div v-if="editList.length > 1" slot="pagination" class="cmp-swiper-paginationBullet swiper-pagination"></div>
                  <button v-if="editList.length > 1" slot="button-prev" class="swiper-button-prev"></button>
                  <button v-if="editList.length > 1" slot="button-next" class="swiper-button-next"></button>
                </Swiper>
                <!-- //[퍼블수정]23.03.01 스와이프 수정 -->
              </div>             
              <div class="magaTabSlide-part2"><!-- [퍼블수정]23.01.16 -->
                <div class="textBox">
                  <div class="num">01</div>
                  <div class="tit">기분전환을 시켜줄 컬러풀한 스타일링</div>
                </div>
                <div class="muh-list">
                  <Swiper class="product-unit-list product-unit-list-swipe product-unit-list-mini product-list-layout-3 no-grid-fit btn-large"
                    :options="{
                      slidesPerView: 3,
                      slidesPerGroup: 3,
                      spaceBetween: 24,
                      navigation: {
                        prevEl: '.magaTaSswiper-button-prev',
                        nextEl: '.magaTaSswiper-button-next',
                      },
                      scrollbar: {
                        el: '.swiper-scrollbar.num-01',
                        hide: false,
                      },
                    }"
                    :class="{'swiper-no-swiping': productList.length <= 3}"
                  >
                    <SwiperSlide v-for="item, idx in productList" :key="idx">
                      <ProductUnitMini :unit-data="item" :unit-type="'mini'"></ProductUnitMini>
                    </SwiperSlide>
                    <template v-if="productList.length > 3">
                      <button slot="button-prev" class="magaTaSswiper-button-prev swiper-button-prev"></button>
                      <button slot="button-next" class="magaTaSswiper-button-next swiper-button-next"></button>
                    </template>
                    <div slot="scrollbar" class="swiper-scrollbar num-01"></div>
                  </Swiper>
                </div>
              </div>
            </div>

            <!-- 슬라이드 오른쪽형 -->
            <div class="magaTabSlide magaTabSlide-right">
              <div class="magaTabSlide-part2"><!-- [퍼블수정]23.01.16 -->
                <div class="textBox">
                  <div class="num">02</div>
                  <div class="tit">기분전환을 시켜줄 컬러풀한 스타일링</div>
                </div>
                <div class="muh-list">
                  <Swiper class="product-unit-list product-unit-list-swipe product-unit-list-mini product-list-layout-3 no-grid-fit"
                    :options="{
                      slidesPerView: 3,
                      slidesPerGroup: 3,
                      spaceBetween: 24,
                      navigation: {
                        prevEl: '.magaTaSswiper-button-prev2',
                        nextEl: '.magaTaSswiper-button-next2',
                      },
                      scrollbar: {
                        el: '.swiper-scrollbar.num-02',
                        hide: false,
                      },
                    }"
                    :class="{'swiper-no-swiping': productList.length <= 3}"
                  >
                    <SwiperSlide v-for="item, idx in productList" :key="idx">
                      <ProductUnitMini :unit-data="item" :unit-type="'mini'"></ProductUnitMini>
                    </SwiperSlide>
                    <template v-if="productList.length > 3">
                      <button slot="button-prev" class="magaTaSswiper-button-prev2 swiper-button-prev"></button>
                      <button slot="button-next" class="magaTaSswiper-button-next2 swiper-button-next"></button>
                    </template>
                    <div slot="scrollbar" class="swiper-scrollbar num-02"></div>
                  </Swiper>
                </div>                
              </div>
              <!-- [퍼블수정]23.02.25 contain-var 추가 -->
              <div class="magaTabSlide-part1 bulletSwiper-white slideOver contain-var">
                <!-- [퍼블수정]23.03.01 스와이프 수정 -->
                <Swiper 
                  :options="{
                    watchOverflow: true,
                    pagination: {el: '.cmp-swiper-paginationBullet',clickable: true},
                    navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    },
                  }"
                  :class="{'swiper-no-swiping':editList.length <= 1}"
                >
                  <SwiperSlide v-for="(item,index) in editList" :key="index">
                      <VideoPlayer v-if="item.video" :path="item.video_url" :poster="item.image_url" :play-on-scroll="true" :videoRatio="133" class="videobox" />
                      <!-- <v-img v-else :src="item.image" :alt="item.desc"></v-img> -->
                      <div v-else v-background-image="{url:item.image}"></div>
                  </SwiperSlide>
                  <div v-if="editList.length > 1" slot="pagination" class="cmp-swiper-paginationBullet swiper-pagination"></div>
                  <button v-if="editList.length > 1" slot="button-prev" class="swiper-button-prev"></button>
                  <button v-if="editList.length > 1" slot="button-next" class="swiper-button-next"></button>
                </Swiper>
                <!-- //[퍼블수정]23.03.01 스와이프 수정 -->
              </div>                       
            </div>
          </div>

          <div id="magatab-03">
            <div class="tabHeader pt-30 mb-40">
              <p class="tit mb-6">SHOP</p>
              <p class="subtit">SHORT SLEEVE BLOUSE</p>
            </div>
            <div>
              <ProductList class="muh-list mb-120" :list="productList" :layout="4" :unit-type="productUnitType" :swipe="productUnitSwipe" />
              <div>
                <div class="main-imgArea centerBox pb-24 mb-60">
                    <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/designnoteimg.png" alt=""></v-img>
                    <div class="textBox">
                        <p class="tit mb-24">Designer’ s note</p>
                        <p class="txt">디자이너가 들려주는 스타일링 팁</p>
                    </div>
                    <div class="mt-24 text-center">급격히 차가워진 공기를 막아 줄 점퍼다. 가벼우면서도 따뜻해 활동하기도 좋은데, 깔끔한 디자인이 특히 골프 치러 갈 때 입기 좋을 듯.<br />
                    단정한 드레스와 위에 가볍게 걸쳐 입거나 편히 입는 데님 팬츠에 매치해도 사랑스럽다.</div>
                </div>
                <ul class="cmp-dotList">
                  <li class="tit">쿠폰안내</li>
                  <li>상단 바에서 다운로드를 해주세요. (로그인)</li>
                  <li>로그인 후 ‘마이페이지’에서 쿠폰을 확인하실 수 있습니다.</li>
                  <li>본 쿠폰은 발급 후, 일주일 이내에 사용이 가능합니다.</li>
                  <li>결제 시 쿠폰을 적용하시면 해당 상품에 10% 할인이 적용됩니다.</li>
                  <li>본 쿠폰은 더한섬닷컴에서만 사용 가능하며 매장에서 사용할 수 없습니다.</li>
                  <li>쿠폰을 사용한 주문을 취소하신 경우, 사용하신 쿠폰이 다시 발행됩니다.(사용기간이 남아있는 경우)</li>
                  <li>본 프로모션은 당사 사정에 의하여 사전에 공지없이 중단될 수 있습니다.</li>
                </ul>
              </div>
            </div>              
          </div>
        </div>
        <!-- [e] 탭내용 -->

        <!-- [s] 모아보기 // D유형에서 삭제 -->
        <div class="magaAllBox mb-120">
          <p class="tit">위 화보에 실린 상품 모아보기</p>
          <ProductList class="muh-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe2" />
          <div class="magaBtn mt-40 text-center">
            <v-btn outlined large color="primary" @click="moreView = !moreView">
              <template v-if="moreView">접기<i class="cmp-icon cmp-icon-12 i-up"></i></template>
              <template v-else>더보기<i class="cmp-icon cmp-icon-12 i-down"></i></template>
            </v-btn>
          </div>
        </div>
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
import VideoPlayer from '~/components/common/VideoPlayer'
import MagRecent from '~/components/planshop/MagRecent.vue'
import MagHeader from '~/components/planshop/MagHeader'
import MagDetails from '~/components/planshop/MagDetails'


export default {
  components: {
    Swiper,
    SwiperSlide,
    VideoPlayer,
    MagRecent,
    MagHeader,
    MagDetails,
},
  layout: 'LayoutBasics',
  props: {
    unitData: {
      type: Object,
      default: ()=>{ return null },
    }
  },
  data: () => ({
    productUnitType : 'mini',
    productUnitSwipe: true,
    productUnitSwipe2 : false,
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
        "exclusive":true,
        "limited":false,
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
        "exclusive":false,
        "limited":true,
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
    eventBanner : [ // 이벤트 배너
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/magabanner.png',
        desc : 'SYSTEM HOMME 스포트라이트 온 타임옴므 CHECK OUT NOW',
      },
      {// [퍼블수정]23.03.01 세로 긴 이미지 확인용
        image: "https://img.thehandsome.com/md/publish/dummy/pc/magimg1.png",
        desc: "이미지설명"
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/magabanner.png',
        desc : 'SYSTEM HOMME 스포트라이트 온 타임옴므 CHECK OUT NOW',
      },
      {
        video : true,
        videoImg: "/images/cs/stylelive_1_video_poster.png",
        video_url: "/images/cs/stylelive_1_video.mp4",
        desc: "비디오타입",
      },
    ],
    editList : [
      {
        image: "https://img.thehandsome.com/md/publish/dummy/pc/magimg1.png",
        desc: "이미지설명"
      },
      {
        image: "https://img.thehandsome.com/md/publish/dummy/pc/magimg2.png",
        desc: "이미지설명"
      },
      {
        video : true,
        videoImg: "https://img.thehandsome.com/md/publish/dummy/pc/magazine-img.jpg",
        video_url: "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
        desc: "비디오타입",
      },
    ],
    moreView : false,
  }),
  mounted() {
  },
  methods: {
    gotoLink(size){
      const me = this
      console.log("상품 링크 이동하기", "url: " + me.data.link_url)
    },

    zzim(){
      const me = this
      me.data.zzim = ! me.data.zzim
      me.$forceUpdate()
    }
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/magazine.scss';
</style>