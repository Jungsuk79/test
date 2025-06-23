<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <!-- [퍼블수정]23.02.17 menuList 추가 -->
      <CommonContentsLeftMenu :title="'마이페이지'" :left-data="menuList"></CommonContentsLeftMenu>
      <div class="my-page-r-box content-heart"><!-- 마이페이지 -->
        <div class="cmp-page-tit">
          <h2 class="tit">마이하트</h2>
        </div>
        <!-- 탭메뉴 -->
        <div class="cmp-tabs tabs-actionTop">
          <v-tabs v-model="tabs" fixed-tabs>
            <v-tab>마이하트</v-tab>
            <v-tab>브랜드</v-tab>
            <v-tab>콘텐츠</v-tab>
            <v-tab>취향</v-tab>
          </v-tabs>
        </div>
        <!-- //탭메뉴 -->

        <!-- 탭 내용 -->
        <v-tabs-items v-model="tabs" touchless class="mb-30">
          <!-- 위시리스트 -->
          <v-tab-item :transition="false">
            <!-- 카테고리 필터 -->
            <div class="mt-30">
              <v-layout row class="cmp-form-chkGroup wide left">
                <v-checkbox label="세일" class="cmp-form-checkbox mr-20"></v-checkbox>
                <v-checkbox label="아울렛" class="cmp-form-checkbox"></v-checkbox>
              </v-layout>
            </div>
            <!-- //카테고리 필터 -->

            <!-- 상품 테이블 -->
            <!-- 
              [퍼블수정]23.03.17 마이하트 : 상품리스트 마크업 변경 Start 
              - 상품리스트 마크업 전체 변경 ProductUnitMiniMyHeart 신규 추가
            -->
            <ul class="product-unit-list myheart">
              <ProductUnitMiniMyHeart  v-for="(item, index) in prdListData1" :key="index" :colorchip="true" :unit-data="item"></ProductUnitMiniMyHeart>
            </ul>
            <!-- // [퍼블수정]23.03.17 마이하트 : 상품리스트 마크업 변경 End -->
            <!-- //상품 테이블 -->
            <ProductListPaging />

            <div class="btm-notice"><!-- [개발확인]22.12.20 -->
              <ul class="cmp-dotList">
                <li>위시리스트에는 상품이 최대 1년간 저장됩니다.</li>
                <li>마이하트에 담은 상품 중 판매종료가 된 상품은 자동 삭제됩니다.</li>
              </ul>
            </div>
          </v-tab-item>
          <!-- //위시리스트 -->

          <!-- 브랜드 -->
          <v-tab-item :transition="false">
            <div v-for="(item, index) in brandData" :key="index" class="brand-list">
              <v-layout class="brand-tit">
                <h2>{{item.brand_name}}<button class="zzim-btn on" @click="zzimBtn"><span class="ir">찜</span></button></h2>
                <nuxt-link to="" class="button">브랜드 바로가기<i class="cmp-icon cmp-icon-18 i-next"></i></nuxt-link>
              </v-layout>

              <div class="brand-unit">
                <div v-for="img, idx in item.images[selectedIndex]" :key="idx" class="unit-cont">
                  <div v-background-image="{'url' : img}" class="brand-img background-image"></div>
                </div>
              </div>
            </div>
            <ProductListPaging />
            <!-- 디자인 확인용 -->
            <CommonNoData class="border-b1" msg="저장된 브랜드가 없습니다."></CommonNoData>
            <!-- 디자인 확인용 -->
          </v-tab-item>
          <!-- // 브랜드 -->

          <!-- 콘텐츠 -->
          <v-tab-item :transition="false">
            <div class="contents-list">
              <ul class="contents-unit">
                <li v-for="n in 9" :key="n">
                  <nuxt-link to="">
                    <div v-background-image="{'url' : 'https://img.thehandsome.com/md/publish/dummy/pc/myheart-img.png'}" class="unit-img background-image"></div>
                  </nuxt-link>
                  <button class="zzim-btn on" @click="zzimBtn"><span class="ir">찜</span></button>
                  <p class="unit-tit">그 겨울의 퍼</p>
                  <p class="unit-txt">기획전</p>
                </li>
              </ul>
            </div>
            <ProductListPaging />
            <!-- 디자인 확인용 -->
            <CommonNoData class="border-b1" msg="저장된 콘텐츠가 없습니다."></CommonNoData>
            <!-- 디자인 확인용 -->
          </v-tab-item>
          <!-- //콘텐츠 -->

          <!-- 취향 -->
          <v-tab-item :transition="false">
            <v-layout row align-center class="mt-30">
              <v-btn outlined width="160px" height="46px" color="primary">취향의 발견</v-btn>
              <span class="cmp-font fnt-14 pl-16">취향에 맞는 상품에 &quot;좋아요&quot;하면 상품을 추천해 드려요.</span>
            </v-layout>

            <div v-for="n in 2" :key="n" class="liking-list">
              <v-layout align-center justify-space-between>
                <p class="cmp-font fnt-20">&#35;모던 &#35;뉴트럴</p>
                <p class="cmp-font fnt-14">2022.08.25</p>
              </v-layout>
              <ProductList :list="productList" :layout="productListLayout" unit-type="swipe" :no-grid-fit="true" />
            </div>

            <!--취향 발견 실패할 경우-->
            <div class="cmp-info info-type3">
              <v-layout  row align-start justify-space-between>
                <p class="cmp-font c-gray fnt-18 txt">취향을 발견하지 못했습니다.</p>
                <p class="cmp-font c-gray fnt-14 data">2022.07.28</p>
              </v-layout>
            </div>

            <div class="liking-list">
              <v-layout align-center justify-space-between>
                <p class="cmp-font fnt-20">&#35;레트로 &#35;감성</p>
                <p class="cmp-font fnt-14">2022.08.25</p>
              </v-layout>
              <ProductList :list="productList" :layout="productListLayout" unit-type="swipe" :no-grid-fit="true" />
            </div>

            <ProductListPaging />
            <!-- 디자인 확인용 -->
            <CommonNoData class="border-b1" msg="취향의 발견이 없습니다."></CommonNoData>
            <!-- 디자인 확인용 -->
          </v-tab-item>
          <!-- //취향 -->
        </v-tabs-items>
        <!-- //탭 내용 -->
      </div>
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import EventBus from '~/api/common/EventBus'
export default {
  components: {
  },
  layout: 'LayoutBasics',
  data() {
    return {
      productListLayout: 4,
      // Tabs
      tabs: 0,
      tab: null,
      selectedIndex:0,
      // [퍼블수정]23.03.17 마이하트 데이터 추가
      prdListData1 : [
        {
          "brand_name": "FOURM MEN’S LOUNGE",
          "product_name": "[BEARBRICK] 사이키델릭 페이즐리 사이키델릭 페이즐리 400%&100% 사이키델릭 페이즐리 400%&100%",
          "sell_price": "284000",
          "price": "355000",
          "discount": "20%",
          "colors": [
              {"name":"CHARCOAL GREY", "image":"#e6d4c4 url('http://newmedia.thehandsome.com/TM/2C/SS/TM2C0WPC804W_LE_C01.jpg/dims/resize/40x40')","soldout" : false},
              {"name":"KHAKI BEIGE", "image":"#000000 url('http://newmedia.thehandsome.com/TM/2C/SS/TM2C0QOT003W_BK_C01.jpg/dims/resize/40x40')","soldout" : true},
              {"name":"SMOKE VIOLET", "image":"#fbfaea url('http://newmedia.thehandsome.com/TM/2C/SS/TM2C0ACK402W_IV_C01.jpg/dims/resize/40x40')","soldout" : false},
              {"name":"COCOA", "image":"#a79574 url('http://newmedia.thehandsome.com/TM/2C/SS/TM2C0AMF201W_KE_C01.jpg/dims/resize/40x40')","soldout" : false},
              {"name":"DARKGREEN", "image":"#3b374e url('http://newmedia.thehandsome.com/TM/2C/SS/TM2C0AMF201W_DN_C01.jpg/dims/resize/40x40')","soldout" : false},
              {"name":"GREY", "image":"#d39d5e url('http://newmedia.thehandsome.com/TM/2C/SS/TM2C0AJW601WS_GD_C01.jpg/dims/resize/40x40')","soldout" : false},
              {"name":"BLACK", "image":"#ded2bd url('http://newmedia.thehandsome.com/TM/2C/SS/TM2C0ACK401W_EC_C01.jpg/dims/resize/40x40')","soldout" : false},
              {"name":"PURPLE", "image":"#a36944 url('http://newmedia.thehandsome.com/TM/2C/SS/TM2C0ACK401W_CM_C01.jpg/dims/resize/40x40')","soldout" : false},
              {"name":"YELLOW", "image":"#d4c3a7 url('http://newmedia.thehandsome.com/TM/2C/SS/TM2C0KTO208W_PE_C01.jpg/dims/resize/40x40')","soldout" : false},
              {"name":"WHITE", "image":"#623b28 url('http://newmedia.thehandsome.com/TM/2C/SS/TM2C0KTO208W_BS_C01.jpg/dims/resize/40x40')","soldout" : false}
          ],
          "links": [
              "#none",
              "#none",
              "#none",
              "#none",
              "#none",
              "#none",
              "#none",
              "#none",
              "#none",
              "#none"
          ],
          "images": [
              ["https://img.thehandsome.com/md/publish/dummy/pc/001.jpg","https://img.thehandsome.com/md/publish/dummy/pc/011.jpg"],
              ["https://img.thehandsome.com/md/publish/dummy/pc/002.jpg","https://img.thehandsome.com/md/publish/dummy/pc/012.jpg"],
              ["https://img.thehandsome.com/md/publish/dummy/pc/003.jpg","https://img.thehandsome.com/md/publish/dummy/pc/013.jpg"],
              ["https://img.thehandsome.com/md/publish/dummy/pc/004.jpg","https://img.thehandsome.com/md/publish/dummy/pc/014.jpg"],
              ["https://img.thehandsome.com/md/publish/dummy/pc/005.jpg","https://img.thehandsome.com/md/publish/dummy/pc/015.jpg"],
              ["https://img.thehandsome.com/md/publish/dummy/pc/006.jpg","https://img.thehandsome.com/md/publish/dummy/pc/016.jpg"],
              ["https://img.thehandsome.com/md/publish/dummy/pc/007.jpg","https://img.thehandsome.com/md/publish/dummy/pc/017.jpg"],
              ["https://img.thehandsome.com/md/publish/dummy/pc/008.jpg","https://img.thehandsome.com/md/publish/dummy/pc/018.jpg"],
              ["https://img.thehandsome.com/md/publish/dummy/pc/009.jpg","https://img.thehandsome.com/md/publish/dummy/pc/019.jpg"],
              ["https://img.thehandsome.com/md/publish/dummy/pc/010.jpg","https://img.thehandsome.com/md/publish/dummy/pc/020.jpg"]
          ],
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/001.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
          "link_url" : "#none",
          "zzim": true,
        },
        {
          "brand_name": "TIME",
          "product_name": "스티치 구스 다운 점퍼 & 파우치 스티치 구스 다운 점퍼 & 파우치 스티치 구스 다운 점퍼 & 파우치",
          "sell_price": "985000",
          "colors": [
              {"name":"GREEN", "image":"#000000 url('http://newmedia.thehandsome.com/TM/2C/SS/TM2C0QOT003W_BK_C01.jpg/dims/resize/40x40')"}
          ],
          "links": [
              "#none"
          ],
          "images": [
              ["","https://img.thehandsome.com/md/publish/dummy/pc/036.jpg"]
          ],
          "image_url": "",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/036.jpg",
          "link_url" : "#none",
        },
        {
          "brand_name": "TIME",
          "product_name": "[CALZE GENNY] 아일렛 스타킹",
          "sell_price": "65000",
          "colors": [
              {"name":"BLACK", "image":"#000000 url('http://newmedia.thehandsome.com/TM/2C/SS/TM2C1ACK414WS_BK_C01.jpg/dims/resize/40x40')"}
          ],
          "links": [
              "#none"
          ],
          "images": [
              ["https://img.thehandsome.com/md/publish/dummy/pc/012.jpg","https://img.thehandsome.com/md/publish/dummy/pc/022.jpg"]
          ],
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/022.jpg",
          "link_url" : "#none",
          //  상품 전체 soldout 확인
          "soldout" : true
        },
        {
          "brand_name": "TIME",
          "product_name": "크로셰 양말",
          "sell_price": "25000",
          "colors": [
              {"name":"COCOA", "image":"#000000 url('http://newmedia.thehandsome.com/TM/2C/SS/TM2C0ACK402W_BK_C01.jpg/dims/resize/40x40')"},
              {"name":"DARKGRAY", "image":"#fbfaea url('http://newmedia.thehandsome.com/TM/2C/SS/TM2C0ACK401W_EC_C01.jpg/dims/resize/40x40')"}
          ],
          "links": [
              "#none",
              "#none"
          ],
          "images": [
              ["https://img.thehandsome.com/md/publish/dummy/pc/013.jpg","https://img.thehandsome.com/md/publish/dummy/pc/023.jpg"],
              ["https://img.thehandsome.com/md/publish/dummy/pc/014.jpg","https://img.thehandsome.com/md/publish/dummy/pc/024.jpg"]
          ],
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
          "link_url" : "#none",
          "soldout" : true
        },
        {
          "brand_name": "TIME",
          "product_name": "[VELATTI] 엠보 텍스처 귀걸이",
          "sell_price": "125000",
          "colors": [
              {"name":"COCOA", "image":"#e6d4c4 url('http://newmedia.thehandsome.com/TM/2C/SS/TM2C0WPC804W_LE_C01.jpg/dims/resize/40x40')"},
              {"name":"DARKGRAY", "image":"#000000 url('http://newmedia.thehandsome.com/TM/2C/SS/TM2C0QOT003W_BK_C01.jpg/dims/resize/40x40')"},
              {"name":"BLUE", "image":"#fbfaea url('http://newmedia.thehandsome.com/TM/2C/SS/TM2C0ACK402W_IV_C01.jpg/dims/resize/40x40')"},
              {"name":"CHARCOAL", "image":"#a79574 url('http://newmedia.thehandsome.com/TM/2C/SS/TM2C0AMF201W_KE_C01.jpg/dims/resize/40x40')"}
          ],
          "links": [
              "#none",
              "#none",
              "#none",
              "#none"
          ],
          "images": [
              ["https://img.thehandsome.com/md/publish/dummy/pc/015.jpg","https://img.thehandsome.com/md/publish/dummy/pc/025.jpg"],
              ["https://img.thehandsome.com/md/publish/dummy/pc/016.jpg","https://img.thehandsome.com/md/publish/dummy/pc/026.jpg"],
              ["https://img.thehandsome.com/md/publish/dummy/pc/017.jpg","https://img.thehandsome.com/md/publish/dummy/pc/027.jpg"],
              ["https://img.thehandsome.com/md/publish/dummy/pc/018.jpg","https://img.thehandsome.com/md/publish/dummy/pc/028.jpg"]
          ],
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/015.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/025.jpg",
          "link_url" : "#none",
        },
        {
          "brand_name": "TIME",
          "product_name": "[CALZE GENNY] 아일렛 스타킹",
          "sell_price": "65000",
          "colors": [
              {"name":"BLACK", "image":"#000000 url('http://newmedia.thehandsome.com/TM/2C/SS/TM2C1ACK414WS_BK_C01.jpg/dims/resize/40x40')","soldout" : false}
          ],
          "links": [
              "#none"
          ],
          "images": [
              ["https://img.thehandsome.com/md/publish/dummy/pc/012.jpg","https://img.thehandsome.com/md/publish/dummy/pc/022.jpg"]
          ],
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/022.jpg",
          "link_url" : "#none",
        },
        {
          "brand_name": "TIME",
          "product_name": "크로셰 양말",
          "sell_price": "25000",
          "colors": [
              {"name":"COCOA", "image":"#000000 url('http://newmedia.thehandsome.com/TM/2C/SS/TM2C0ACK402W_BK_C01.jpg/dims/resize/40x40')"},
              {"name":"DARKGRAY", "image":"#fbfaea url('http://newmedia.thehandsome.com/TM/2C/SS/TM2C0ACK402W_IV_C01.jpg/dims/resize/40x40')"}
          ],
          "links": [
              "#none",
              "#none"
          ],
          "images": [
              ["https://img.thehandsome.com/md/publish/dummy/pc/013.jpg","https://img.thehandsome.com/md/publish/dummy/pc/023.jpg"],
              ["https://img.thehandsome.com/md/publish/dummy/pc/014.jpg","https://img.thehandsome.com/md/publish/dummy/pc/024.jpg"]
          ],
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
          "link_url" : "#none",
        },
        {
          "brand_name": "TIME",
          "product_name": "[VELATTI] 엠보 텍스처 귀걸이",
          "sell_price": "125000",
          "colors": [
              {"name":"COCOA", "image":"#e6d4c4 url('http://newmedia.thehandsome.com/TM/2C/SS/TM2C0WPC804W_LE_C01.jpg/dims/resize/40x40')"},
              {"name":"DARKGRAY", "image":"#000000 url('http://newmedia.thehandsome.com/TM/2C/SS/TM2C0QOT003W_BK_C01.jpg/dims/resize/40x40')"},
              {"name":"BLUE", "image":"#fbfaea url('http://newmedia.thehandsome.com/TM/2C/SS/TM2C0ACK402W_IV_C01.jpg/dims/resize/40x40')"},
              {"name":"CHARCOAL", "image":"#a79574 url('http://newmedia.thehandsome.com/TM/2C/SS/TM2C0AMF201W_KE_C01.jpg/dims/resize/40x40')"}
          ],
          "links": [
              "#none",
              "#none",
              "#none",
              "#none"
          ],
          "images": [
              ["https://img.thehandsome.com/md/publish/dummy/pc/015.jpg","https://img.thehandsome.com/md/publish/dummy/pc/025.jpg"],
              ["https://img.thehandsome.com/md/publish/dummy/pc/016.jpg","https://img.thehandsome.com/md/publish/dummy/pc/026.jpg"],
              ["https://img.thehandsome.com/md/publish/dummy/pc/017.jpg","https://img.thehandsome.com/md/publish/dummy/pc/027.jpg"],
              ["https://img.thehandsome.com/md/publish/dummy/pc/018.jpg","https://img.thehandsome.com/md/publish/dummy/pc/028.jpg"]
          ],
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/015.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/025.jpg",
          "link_url" : "#none",
        },
      ],
      prdData : [
        {
          brand_name: 'MINE',
          product_name: '컬러 블록 니트 가디건 컬러 니트',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
          options: ['BLACK', '90', '2개'],
          sell_price: '355000',
          discount: '20',
          price: '366000',
          link: '#n',
          notice: ['인기상품으로 전국 매장에서 수급 후 배송 예정','불량 등의 이유로 취소될 수 있음','(평일 기준 5일 이상 소요)'],
          gift: true,
          sold_out: false,
          zzim : true,
        },
        {
          brand_name: 'FOURM MEN’S LOUNGE',
          product_name: '[BEARBRICK] 사이키델릭 페이즐리',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
          options: ['CHARCOAL GRAY', '90', '1개'],
          sell_price: '355000',
          discount: null,
          price: null,
          link: '#n',
          notice: null,
          gift: false,
          sold_out: false,
          zzim : true,
        },
        {
          brand_name: 'orea',
          product_name: '퓨리파잉 클렌징 폼',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img2.png',
          options: ['MULTI', 'FR', '1개'],
          sell_price: '355000',
          discount: null,
          price: null,
          link: '#n',
          notice: ['오에라 전용박스 별도배송'],
          gift: true,
          sold_out: false,
          zzim : true,
        },
        {
          brand_name: 'FOURM STUDIO',
          product_name: '[예약판매] 스티치 레더 스커트',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img3.png',
          options: ['BLACK', '90', '1개'],
          sell_price: '355000',
          discount: null,
          price: null,
          link: '#n',
          notice:['2021년 12월 17일부터 순차 배송 (제작 상황에 따라 변경 가능)'],
          gift: true,
          sold_out: false,
          zzim : true,
        },
        {
          brand_name: 'FOURM STUDIO',
          product_name: '크리스탈 니트 가디건',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
          options: ['KAHKI', '90', '1개'],
          sell_price: '29000',
          link: '#n',
          notice:['리퀴드 퍼퓸바 전용 박스 별도 배송'],
          gift: true,
          sold_out: true,
          zzim : true,
        }
      ],
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
      ],
      brandData : [
        {
          'brand_name' : 'TIME',
          'images': [
            ['https://img.thehandsome.com/md/publish/dummy/pc/004.jpg', 'https://img.thehandsome.com/md/publish/dummy/pc/006.jpg','https://img.thehandsome.com/md/publish/dummy/pc/008.jpg','https://img.thehandsome.com/md/publish/dummy/pc/015.jpg'],
          ],
        },
        {
          'brand_name' : 'SJSJ',
          'images': [
            ['https://img.thehandsome.com/md/publish/dummy/pc/004.jpg', 'https://img.thehandsome.com/md/publish/dummy/pc/006.jpg','https://img.thehandsome.com/md/publish/dummy/pc/008.jpg','https://img.thehandsome.com/md/publish/dummy/pc/015.jpg'],
          ],
        },
        {
          'brand_name' : 'FORUM MEN’S LOUNGE',
          'images': [
            ['https://img.thehandsome.com/md/publish/dummy/pc/004.jpg', 'https://img.thehandsome.com/md/publish/dummy/pc/006.jpg','https://img.thehandsome.com/md/publish/dummy/pc/008.jpg','https://img.thehandsome.com/md/publish/dummy/pc/015.jpg'],
          ],
        }
      ]
    }
  },
  //   [퍼블수정]23.02.17 menuList 추가
  created() {
    const me = this
    const json = require('~/static/json/mypage_left_menu.json')
    me.menuList = json.list
  },
  methods: {
    zzimBtn(e){
      const cl = e.currentTarget.classList
      if(cl.contains("on")){
        cl.remove("on")
      }else{
        cl.add("on")
      }
    }
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/member.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>