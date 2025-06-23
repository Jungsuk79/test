<template>
  <div class="contents">
    <div class="content-wrap content-planshopTemp">
        <MagHeader :data="{title:'기획전',subTitle : '타임옴므가 꿈꾸는 여름', date:'2021.12.29'}" />
        <!-- [s] 상단 html에디터 -->
        <div class="mag-temp-full-width">
            <div class="main-imgArea mb-60">
                <!--html 등록 Start -->

                <!-- swiper setting options -->
                <!-- swiper-container 위치에 추가해서 사용 -->
                <!-- swiper-container 위치에 hs-swiper 클래스 추가 *필수* -->
                
                <!-- ex) 옵션명 (camel case)일경우 - (하이픈)으로 단어와 단어사이 구분한다. 시작글자는 소문자 -->
                <!-- ex) 옵션 구조가 object 인경우 _ (언더바)로 연결한다. 옵션명이 (camel case)일경우 위와 동일 -->
                <!-- autoplay_delay="5000" -->
                <!-- 위 규칙대로 표현 가능한 옵션 모두 사용 가능 -->

                <!-- 모든 옵션은 시작을 swiper_ 로 시작한다 -->

                <!-- loop="true" //연속 루프 모드를 활성화
                loopAdditionalSlides="number" //루프 생성 후 복제될 슬라이드 추가 수
                slides-per-view="number & String" // 1,2,3, auto
                space-between="number" // 슬라이드 사이 여백
                free-mode="true"  //슬라이드 넘길 때 위치 고정 여부
                auto-height="true" // 슬라이더 래퍼가 현재 활성 슬라이드의 높이에 맞게 높이를 조정
                allow-touch-move="true" //false시에 스와이핑이 되지 않으며 버튼으로만 슬라이드 조작 가능
                slides-offset-before="number" //슬라이드 시작 부분 여백
                slides-offset-after="number" //슬라이드 시작 부분 여백 -->
                <!-- swiper 영역 -->

                <div class="pc-outlet">
                  아울렛
                </div>
                <style type="text/css">
                  .pc-outlet {display:block;width:100%;margin:0 auto;}
                  .pc-outlet .img{display: block;width:100%; margin:0 auto;}
                </style>
                <!--html 등록 End -->
            </div>
        </div>
        <!-- [e] 상단 html에디터 -->

        <div class="planAllBox mb-100">
          <p class="tit">잡화</p>
          <ProductList class="plan-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe" />
        </div>

        <!-- [s] 이미지 구분자 -->
        <div class="mb-40">
          <img src="https://img.thehandsome.com/md/publish/dummy/pc/planImage1800.png" alt="" />
        </div>
        <!-- [e] 이미지 구분자 -->
        <div class="planAllBox mb-120">
          <ProductList class="plan-list" :list="productList2" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe" />
        </div>

        <!-- [s] 최신 기획전 -->
        <div class="planAllBox planRecent">
          <MagRecent :title="'최신 기획전'"></MagRecent>
        </div>
        <!-- [e] 최신 기획전 -->

        <div class="magaBtn mt-60 text-center"><!-- [퍼블수정]23.01.26 mt-40 > mt-60 -->
          <v-btn outlined large color="primary">
            목록
          </v-btn>
        </div>

    </div>
    <!-- 230222 기획전 : planshop-detail-swiper.js 연결 추가 -->
    <script src="/scripts/planshop-detail-swiper.js"></script>
    <!-- 230222 기획전 : 삭제 /230119 구분자 슬라이드 : script 추가 -->
    <!-- <script type="text/javascript"></script> -->
  </div>
</template>

<script>
import MagRecent from '~/components/planshop/MagRecent.vue'
import MagHeader from '~/components/planshop/MagHeader'


export default {
  components: {
    MagRecent,
    MagHeader,
},
  layout: 'LayoutBasics',
  data: () => ({
    productUnitType : 'mini',
    productUnitSwipe : false,
    productList : [
      {
        "brand_name": "FOURM LOUNGE",
        "product_name": "[BEARBRICK] 사이키델릭 페이즐 사이키델릭 페이즐사이키델릭 페이즐사이키델릭 페이즐사이키델릭 페이즐사이키델릭 페이즐사이키델릭 페이즐",
        "sell_price": "284000",
        "price": "355000",
        "discount": "20%",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/001.jpg",
        "stkrBtmWrd" : "셀럽착용",
        "stkrColorCd" : "#db390c",
        "link_url" : "#none",
        "flags": [
            "BEST",
            "NEW"
        ],
        "exclusive":false,
        "limited":true,
      },
      {
        "brand_name": "FOURM MEN’S LOUNGE",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/002.jpg",
        "link_url" : "#none",
        "flags": [
            "BEST",
        ],
        "exclusive":true,
        "limited":false,
      },
      {
        "brand_name": "FOURM MEN’S",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/003.jpg",
        "link_url" : "#none",
        "flags": [
            "NEW"
        ],
      },
      {
        "brand_name": "LOUNGE",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "price": "355000",
        "discount": "20%",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/004.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "FOURM MEN’S LOUNGE",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "price": "355000",
        "discount": "20%",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/005.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "LOUNGE",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "price": "355000",
        "discount": "20%",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/006.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "FOURM MNGE",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/007.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": " MEN’S LOUNGE",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "price": "355000",
        "discount": "20%",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/008.jpg",
        "link_url" : "#none",
        "flags": [
            "BEST",
            "NEW"
        ],
      },
      {
        "brand_name": "FOURM MENUNGE",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/009.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "LOUNGE",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "price": "355000",
        "discount": "20%",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/010.jpg",
        "link_url" : "#none",
      }      
    ],
    productList2 : [
      {
        "brand_name": "FOURM LOUNGE",
        "product_name": "[BEARBRICK] 사이키델릭 페이즐",
        "sell_price": "284000",
        "price": "355000",
        "discount": "20%",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/001.jpg",
        "link_url" : "#none",
        "exclusive":false,
        "limited":true,
      },
      {
        "brand_name": "FOURM MEN’S LOUNGE",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "price": "355000",
        "discount": "20%",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/002.jpg",
        "link_url" : "#none",
        "exclusive":true,
        "limited":false,
      },
      {
        "brand_name": "FOURM MEN’S",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "price": "355000",
        "discount": "20%",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/003.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "LOUNGE",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "price": "355000",
        "discount": "20%",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/004.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "FOURM MEN’S LOUNGE",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "price": "355000",
        "discount": "20%",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/005.jpg",
        "link_url" : "#none",
      },
      {
        "brand_name": "LOUNGE",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "sell_price": "284000",
        "price": "355000",
        "discount": "20%",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/006.jpg",
        "link_url" : "#none",
      }    
    ]
  }),
  created(){
  },
  mounted() {
    this.$nextTick(()=>{
      this.makeSwiper()
    });
  },
  methods: {
    onScroll(e) {
    	// 스크롤 움직일 때 마다 호출됨
    	this.scroll = window.scrollY;
    },

    makeSwiper() {
      // 타입 체커
      const typer = (val) => {
        // 0.값이 있는지 없는지는 미리 체크됨
        // 1.true false 체크
        val = val.trim();
        let result = val
        // 숫자여부 체크
        if (isNaN(result)) {
          if (val.toLowerCase() === 'false') {
            result = false;
          } else if (val.toLowerCase() === 'true') {
            result = true;
          }
        } else {
          result = parseInt(val)
        }
        return result;
      }

      // 그룹 추가
      const grouper = (tProp, groupClass, val) => {
        // split 가능한지 확인
        if (!groupClass) return;

        // _로 단계 구별
        const groupArr = groupClass.split("_");
        let targetProp = tProp;
        // swiper 용 attribute 가아니면 제외
        if (groupArr[0] !== "swiper") return;
        // attribute 파싱
        for (let idx = 1; idx < groupArr.length; idx++) {
          const tUnitArr = [...groupArr[idx]];

          // -로 대문자 체크
          for (let jdx = 0; jdx < tUnitArr.length - 1; jdx++) {
            if (tUnitArr[jdx] === '-') {
              tUnitArr[jdx+1] = tUnitArr[jdx+1].toUpperCase()
              tUnitArr[jdx] = ''
            }
          }
          // property name
          const tUnit = tUnitArr.join('')
          if (idx !== groupArr.length - 1) {
            // 상위값이 없을경우 Object생성
            if (typeof targetProp[tUnit] !== "object") {
              targetProp[tUnit] = {}
            }
            // 바로 상위의 타겟 지정
            targetProp = targetProp[tUnit]
          } else {
            // 값 부여
            targetProp[tUnit] = val
          }

        }
      }

      document.querySelectorAll('.hs-swiper.swiper-container')
        .forEach(value=>{
          try {
            const $tag = value;
            const targetId = `#${$tag.id}`;
            const prop = {
              autoplay: false,
              loop: true,
              slidesPerView: 1,
              spaceBetween: 0,
              centeredSlides: true,
              loopAdditionalSlides : 1,
              pagination: {
                el: `${targetId} .swiper-pagination`,
                clickable: true
              },
              navigation : {
                nextEl: `${targetId} .swiper-button-next`,
                prevEl: `${targetId} .swiper-button-prev`,
              }
            }

            // attribute 명별로 각각 적용.
            value.getAttributeNames().forEach((value)=>{
              const tVal = $tag.getAttribute(value)
              if (tVal) grouper(prop, value, typer($tag.getAttribute(value)))
            })
            // eslint-disable-next-line no-new,no-undef
            new Swiper(targetId, prop)
          } catch (e) {
            // 로그 안남김
          }
      })
    }
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/magazine.scss';
</style>