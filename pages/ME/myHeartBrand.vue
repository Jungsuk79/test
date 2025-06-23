<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <CommonContentsLeftMenu :title="'마이페이지'" :url="'/json/mypage_left_menu.json'"></CommonContentsLeftMenu>
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
            <div class="product-row-table mt-30">
              <table v-if="prdData.length > 0">
                <caption>상품리스트</caption>
                <colgroup>
                  <col width="auto" />
                  <col width="248px" />
                  <col width="128px" />
                  <col width="50px" />
                </colgroup>
                <thead>
                  <tr>
                    <th>상품 정보</th>
                    <th>상품금액</th>
                    <th>관리</th>
                    <th><span class="ir">찜</span></th>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="(item, index) in prdData">
                    <tr :key="index">
                      <td class="pw-0">
                        <nuxt-link :to="item.link" class="product-row-unitInfo or-prd-type"><!-- [퍼블수정]23.01.19 상품이미지 : or-prd-type 클래스 추가 -->
                          <div class="product-image" :class="{'sold-out':item.sold_out}">
                            <v-img :src="item.image" :alt="item.product_name" />
                            <div v-if="item.sold_out" class="sold-out-txt">SOLD OUT</div>
                          </div>
                          <div class="product-info-cnt">
                            <div class="product-brand">{{item.brand_name}}</div>
                            <div class="product-name">{{item.product_name}}</div>
                          </div>
                        </nuxt-link>
                      </td>
                      <td>
                        <nuxt-link :to="item.link" class="product-row-unitPrice">
                          <div class="product-sellprice"><strong>{{item.sell_price | number}}</strong>원</div>
                          <div v-if="item.price || item.discount" class="product-price-cnt">
                            <del class="product-price-origin">{{item.price | number}}원</del>
                            <!-- eslint-disable -->
                            <span class="product-discount">{{item.discount}}<em>%</em></span>
                            <!-- eslint-disable -->
                          </div>
                        </nuxt-link>
                      </td>
                      <td>
                        <div class="product-row-unitBtn">
                          <v-btn outlined small color="normal">쇼핑백 담기</v-btn>
                        </div>
                      </td>
                      <td>
                        <div class="product-row-unitBtn">
                          <button class="zzim-btn" :class="{on:item.zzim}" @click="zzimBtn"><span class="ir">찜</span></button>
                        </div>
                      </td>
                    </tr>
                  </template>
                </tbody>
              </table>
              <!-- [개발확인]22.12.20 테이블 바깥에 있습니다 -->
              <!--  위시리스트가 없는 경우
              <CommonNoData class="border-t1" msg="저장된 위시리스트가 없습니다."></CommonNoData>
              -->
              <!--  세일 상품이 없는 경우
              <CommonNoData class="border-t1" msg="세일 상품이 없습니다."></CommonNoData>
              -->
              <!--  아울렛 상품이 없는 경우 
              <CommonNoData class="border-t1" msg="아울렛 상품이 없습니다."></CommonNoData>
              -->
              <!-- 디자인 확인용 -->
              <CommonNoData class="border-t1" msg="저장된 위시리스트가 없습니다."></CommonNoData>
              <!-- 디자인 확인용 -->
            </div>
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
              <ProductList :list="productList" :layout="productListLayout" unit-type="swipe" />
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
              <ProductList :list="productList" :layout="productListLayout" unit-type="swipe" />
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
      tabs: 1,
      tab: null,
      selectedIndex:0,
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
  created() {
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