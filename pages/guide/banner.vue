<template>
  <v-layout class="contents banner-contents">
    <div class="banner-guide">
      <h2>기본배너 375X120</h2>
      <div class="banner-guide-cont">
        <h3>기본_대소카피형</h3>
        <div v-for="unit, idx in bannerData" :key="idx" class="main-unit" :class="unit.unitName | kebabCase">
          <component :is="unit.unitName" :data="unit.data" :unit-name="unit.unitName" />
        </div>
      </div>

      <div class="banner-guide-cont">
        <h3 class="sub-tit">기본_대카피두줄형</h3>
        <div v-for="unit, idx in bannerData1" :key="idx" class="main-unit" :class="unit.unitName | kebabCase">
          <component :is="unit.unitName" :data="unit.data" :unit-name="unit.unitName" />
        </div>
      </div>

      <div class="banner-guide-cont">
        <h3 class="sub-tit">버튼형_브랜드_카피화이트</h3>
        <div v-for="unit, idx in bannerData2" :key="idx" class="main-unit" :class="unit.unitName | kebabCase">
          <component :is="unit.unitName" :data="unit.data" :unit-name="unit.unitName" />
        </div>
      </div>

      <div class="banner-guide-cont">
        <h3 class="sub-tit">버튼형_일반_카피블랙</h3>
        <div v-for="unit, idx in bannerData3" :key="idx" class="main-unit" :class="unit.unitName | kebabCase">
          <component :is="unit.unitName" :data="unit.data" :unit-name="unit.unitName" />
        </div>
      </div>

      <div class="banner-guide-cont">
        <h3 class="sub-tit">복수형</h3>
        <div v-for="unit, idx in bannerData4" :key="idx" class="main-unit" :class="unit.unitName | kebabCase">
          <component :is="unit.unitName" :data="unit.data" :unit-name="unit.unitName" />
        </div>
      </div>
    </div>

    <div class="banner-guide">
      <h2>화보배너 375X220</h2>
      <div class="banner-guide-cont">
        <h3 class="sub-tit">버튼형_카피화이트</h3>
        <div v-for="unit, idx in bannerData5" :key="idx" class="main-unit" :class="unit.unitName | kebabCase">
          <component :is="unit.unitName" :data="unit.data" :unit-name="unit.unitName" />
        </div>
      </div>
    </div>

    <div class="banner-guide">
      <h2>풀화보배너 375X447</h2>
      <div class="banner-guide-cont">
        <div v-for="unit, idx in bannerData6" :key="idx" class="main-unit" :class="unit.unitName | kebabCase">
          <component :is="unit.unitName" :data="unit.data" :unit-name="unit.unitName" />
        </div>
      </div>
    </div>

    <div class="banner-guide">
      <h2>풀이미지형</h2>
      <div class="banner-guide-cont">
        <div v-for="unit, idx in bannerData7" :key="idx" class="main-unit" :class="unit.unitName | kebabCase">
          <component :is="unit.unitName" :data="unit.data" :unit-name="unit.unitName" />
        </div>
      </div>
    </div>

    <div class="banner-guide">
      <h2>띠배너(이미지)</h2>
      <nuxt-link to="#n" class="banner-one">
        <img src="https://img.thehandsome.com/md/publish/dummy/pc/shoppingbag-banner.png" alt="SYSTEM HOMME 스포트라이트 온 타임옴므 CHECK OUT NOW"/>
      </nuxt-link>
      <br>
      <div class="full-width">
        <nuxt-link to="#n" class="banner-one">
          <img src="https://img.thehandsome.com/md/publish/dummy/pc/shoppingbag-banner.png" alt="SYSTEM HOMME 스포트라이트 온 타임옴므 CHECK OUT NOW"/>
        </nuxt-link>
      </div>
    </div>
  </v-layout>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'



export default {
  layout: 'publish',
   components: {
    Swiper, 
    SwiperSlide,
  },
  data: () => ({
     bannerData: [   
      {
       "unitName": "MainBanner",
       "data": {
         "list": [
            {
            "image_url": "https://img.thehandsome.com/md/publish/dummy/banner_04.jpg",
            "link_url": "#none",
            "brand" : "",
            "title": "현대카드 쇼핑바우처 제휴",
            "desc": "30만원 이상 결제 시 이용가능",
            "button": "",
            "text_color": "#fff",
            "type": "small"
            }
         ]
       }
      }   
    ],
    bannerData1 : [   
      {
       "unitName": "MainBanner",
       "data": {
         "list": [
            {
                "image_url": "https://img.thehandsome.com/md/publish/dummy/banner_01.jpg",
                "link_url": "#none",
                "brand" : "",
                "title": "Delightful LÄTT<br/>With MINA",
                "desc": "",
                "button": "",
                "text_color": "",
                "type": "small"
            }
         ]
       }
      }   
    ],
    bannerData2 : [   
      {
       "unitName": "MainBanner",
       "data": {
         "list": [
            {
              "image_url": "https://img.thehandsome.com/md/publish/dummy/banner_02.jpg",
              "link_url": "#none",
              "brand" : "SYSTEM HOMME",
              "title": "스포트라이트 온 타임옴므",
              "desc": "",
              "button": "CHECK OUT NOW",
              "text_color": "#fff",
              "type": "small"
            }
         ]
       }
      }   
    ],
    bannerData3 : [   
      {
       "unitName": "MainBanner",
       "data": {
         "list": [
            {
              "image_url": "https://img.thehandsome.com/md/publish/dummy/banner_03.jpg",
              "link_url": "#none",
              "brand" : "",
              "title": "SHOES & ACC",
              "desc": "포근한 겨울을 위해 준비한 아이템",
              "button": "SHOP NOW",
              "text_color": "#000",
              "type": "small"
            }
         ]
       }
      }   
    ],
    bannerData4: [   
      {
       "unitName": "MainBanner",
       "data": {
         "list": [
            {
            "image_url": "https://img.thehandsome.com/md/publish/dummy/banner_04.jpg",
            "link_url": "#none",
            "brand" : "",
            "title": "현대카드 쇼핑바우처 제휴",
            "desc": "30만원 이상 결제 시 이용가능",
            "button": "",
            "text_color": "#fff",
            "type": "small"
            },
            {
            "image_url": "https://img.thehandsome.com/md/publish/dummy/banner_04.jpg",
            "link_url": "#none",
            "brand" : "",
            "title": "현대카드 쇼핑바우처 제휴",
            "desc": "30만원 이상 결제 시 이용가능",
            "button": "",
            "text_color": "#fff",
            "type": "small"
            },
            {
            "image_url": "https://img.thehandsome.com/md/publish/dummy/banner_04.jpg",
            "link_url": "#none",
            "brand" : "",
            "title": "현대카드 쇼핑바우처 제휴",
            "desc": "30만원 이상 결제 시 이용가능",
            "button": "",
            "text_color": "#fff",
            "type": "small"
            }
         ]
       }
      }   
    ],
    bannerData5 : [   
      {
       "unitName": "MainBanner",
       "data": {
         "list": [
            {
             "image_url": "https://img.thehandsome.com/md/publish/dummy/banner_05.jpg",
              "link_url": "#none",
              "brand" : "",
              "title": "멀티 베네핏 캘리브레이터",
              "desc": "크로노 엘릭서를 통해 리듬을<br/>케어하는 톤.결.촉 에센스",
              "button": "CHECK OUT NOW",
              "text_color": "#fff",
              "type": "medium"
            }
         ]
       }
      }   
    ],
    bannerData6 : [   
      {
       "unitName": "MainBanner",
       "data": {
         "list": [
            {
             "image_url": "https://img.thehandsome.com/md/publish/dummy/banner_06.jpg",
              "link_url": "#none",
              "brand" : "",
              "title": "연말을 빛낼 레이어드",
              "desc": "다가오는 연말! 기분 전환을 시켜줄<br/>컬러풀한 겨울스타일링",
              "button": "",
              "text_color": "",
              "type": "large"
            }
         ]
       }
      }   
    ],
    bannerData7 : [   
      {
       "unitName": "MainBanner",
       "data": {
         "list": [
            {
             "image_url": "https://img.thehandsome.com/md/publish/dummy/banner_07.jpg",
              "link_url": "#none",
              "brand" : "",
              "title": "",
              "desc": "",
              "button": "",
              "text_color": "",
              "type": "image"
            },
            {
             "image_url": "https://img.thehandsome.com/md/publish/dummy/banner_07.jpg",
              "link_url": "#none",
              "brand" : "",
              "title": "",
              "desc": "",
              "button": "",
              "text_color": "",
              "type": "image"
            },
            {
             "image_url": "https://img.thehandsome.com/md/publish/dummy/banner_07.jpg",
              "link_url": "#none",
              "brand" : "",
              "title": "",
              "desc": "",
              "button": "",
              "text_color": "",
              "type": "image"
            }
         ]
       }
      }   
    ],
   

   
  }),
  methods: {
    
  }

}
</script>
<style lang="scss">
.banner-guide {
  +.banner-guide{
    margin-top:70px;
  }

  h2,
  h3 {
    font-weight: normal;
    font-size:1.4rem;
  }
  h2 {
    font-size: 2.4rem;
  }
  .banner-guide-cont {
    +.banner-guide-cont {
      margin-top:40px;
    }
    
  }
  .main-unit ~ .main-unit {
    margin-top:0px !important
  }
}
</style>
