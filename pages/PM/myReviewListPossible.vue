<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <!-- [퍼블수정]23.02.17 menuList 추가 -->
      <CommonContentsLeftMenu :title="'마이페이지'" :left-data="menuList"></CommonContentsLeftMenu>
      <div class="my-page-r-box my-reviewList"><!-- 마이페이지 -->
        <div class="cmp-page-tit pb-8">
          <h2 class="tit">상품평</h2>
        </div>
        
        <div class="order-number-box">
          <div class="line-box">
            <p class="cmp-font fnt-13"></p>
            <!-- [퍼블수정]24.10.28 상품평 3차 -->
            <a href="javascript:;" class="cmp-font button">혜택 자세히 보기<i class="cmp-icon cmp-icon-12 i-next"></i></a>
          </div>
        </div>

        <!--[퍼블수정]24.10.28 상품평 3차 -->
        <div class="contents-line-box mileage-box">
          <p class="cmp-font fnt-18"><i class="cmp-icon-etc cmp-icon-18 i-pencil">연필</i>상품평 작성하고, 마일리지를 받아보세요!</p>
          <ul>
            <li>
              <p>정상상품<br><span>0.5%</span></p>
            </li>
            <li>
              <p>아울렛 상품<br><span>0.1%</span></p>
            </li>
            <li>
              <p>추가혜택<br><span>최대 1만점</span></p>
            </li>
          </ul>
        </div>
        <!-- //[퍼블수정]24.10.28 상품평 3차 -->
        <!-- 탭메뉴 -->
        <div class="cmp-tabs tabs-actionTop">
          <v-tabs v-model="tabs" fixed-tabs>
            <v-tab>작성 가능 상품평 0</v-tab>
            <v-tab to="myReviewList">작성한 상품평 0</v-tab><!-- 221024 나의상품평 : 링크 추가 -->
          </v-tabs>
        </div>
        <!-- //탭메뉴 -->

        <!-- 
          작성한 상품평 
          221024 나의상품평 : 작성한 상품평 탭내용 삭제(페이지 분리 되어있음)
        -->
        <div class="mb-30">
          <div class="cmp-tabs tabs-contents mt-30">
            <v-tabs v-model="tabs2" fixed-tabs>
              <v-tab>온라인 주문</v-tab>
              <v-tab>오프라인 주문</v-tab>
            </v-tabs>
          </div>
          <v-tabs-items v-model="tabs2" touchless>
            <v-tab-item :transition="false">
            <!-- 날짜 검색 -->
            <v-layout row align-center justify-space-between class="mt-30">
              <div class="cmp-line-radio">
                <div class="radio-item">
                  <input id="dateRadio0" type="radio" name="dateRadio1-1" checked />
                  <label for="dateRadio0">1주일</label>
                </div>
                <div class="radio-item">
                  <input id="dateRadio1" type="radio" name="dateRadio1-1" />
                  <label for="dateRadio1">1개월</label>
                </div>
                <div class="radio-item">
                  <input id="dateRadio2" type="radio" name="dateRadio1-1" />
                  <label for="dateRadio2">3개월</label>
                </div>
              </div>
              <CommonCalendarBox />
            </v-layout>
            <!-- // 날짜 검색 -->

            <!-- 상품 테이블 -->
            <div class="product-row-table mt-30">
              <table v-if="prdData.length > 0">
                <caption>상품리스트</caption>
                <colgroup>
                  <col style="width:auto;"/>
                  <col style="width:406px;"/>
                  <col style="width:128px;"/>
                </colgroup>
                <thead>
                  <tr>
                    <th>상품 정보</th>
                    <th>적립기한</th>
                    <th>확인&#47;신청</th>
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
                            <div v-if="item.options" class="product-option">
                              <span v-for="(item2,index2) in item.options" :key="index2" class="option">{{item2}}</span>
                            </div>
                            <!-- [퍼블추가]24.12.20 작성기한, D-DAY 추가가 -->
                            <div v-if="index===1 || index===2" class="cmp-labels mt-6">
                              <span class="label light-gray">체험단 리뷰</span>
                            </div>
                            <!-- //[퍼블추가]24.12.20 작성기한, D-DAY 추가가 -->
                          </div>
                        </nuxt-link>
                      </td>
                      <td>
                        <p v-if="index == 4" class="cmp-font c-light-gray">마일리지 적립기간 만료</p>
                        <!-- [퍼블추가]24.07.30 상품평 고도화 -->
                        <!-- [퍼블추가]24.12.20 작성기한, D-DAY 추가가 -->
                        <p v-else-if="index == 1" class="cmp-font c-blue">작성기한 D-18</p>
                        <p v-else-if="index == 2" class="cmp-font c-blue">작성기한 D-DAY</p>
                        <p v-else-if="index == 3" class="cmp-font c-blue">적립기한 D-DAY</p>
                        <!-- //[퍼블추가]24.12.20 작성기한, D-DAY 추가가 -->
                        <p v-else class="cmp-font c-blue">적립기한 D-18</p>
                      </td>
                      <td class="pw-16">
                        <div class="product-row-unitBtn">
                          <v-btn outlined small color="normal" class="mileage-btn"><div v-if="index===0" class="max-mileage">최대 +3,825M</div>상품평 작성</v-btn>
                        </div>
                      </td>
                    </tr>
                  </template>
                  <tr>
                    <td colspan="3">
                      <CommonNoData msg="작성 가능한 상품이 없습니다."></CommonNoData>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- //상품 테이블 -->
            </v-tab-item>
            <v-tab-item :transition="false">
            <!-- 날짜 검색 -->
            <v-layout row align-center justify-space-between class="mt-30">
              <div class="cmp-line-radio">
                <div class="radio-item">
                  <input id="dateRadio2-0" type="radio" name="dateRadio1-2" checked />
                  <label for="dateRadio2-0">1주일</label>
                </div>
                <div class="radio-item">
                  <input id="dateRadio2-1" type="radio" name="dateRadio1-2" />
                  <label for="dateRadio2-1">1개월</label>
                </div>
                <div class="radio-item">
                  <input id="dateRadio2-2" type="radio" name="dateRadio1-2" />
                  <label for="dateRadio2-2">3개월</label>
                </div>
              </div>
              <CommonCalendarBox />
            </v-layout>
            <!-- // 날짜 검색 -->

            <!-- 상품 테이블 -->
            <div class="product-row-table mt-30">
              <table>
                <caption>상품리스트</caption>
                <colgroup>
                  <col style="width:auto;"/>
                  <!-- 상품 테이블 [퍼블수정]23.02.22 적립기한 없을 시 삭제 -->
                  <col style="width:128px;"/>
                </colgroup>
                <thead>
                  <tr>
                    <th>상품 정보</th>
                    <!-- 상품 테이블 [퍼블수정]23.02.22 적립기한 없을 시 삭제 -->
                    <th>확인&#47;신청</th>
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
                            <div v-if="item.options" class="product-option">
                              <span v-for="(item2,index2) in item.options" :key="index2" class="option">{{item2}}</span>
                            </div>
                          </div>
                        </nuxt-link>
                      </td>
                      <!-- 상품 테이블 [퍼블수정]23.02.22 적립기한 없을 시 삭제 -->
                      <td class="pw-16">
                        <div class="product-row-unitBtn">
                          <v-btn outlined small color="normal">상품평 작성</v-btn>
                        </div>
                      </td>
                    </tr>
                  </template>
                  <tr>
                    <td colspan="3">
                      <CommonNoData msg="작성 가능한 상품이 없습니다."></CommonNoData>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- //상품 테이블 -->
            </v-tab-item>
          </v-tabs-items>
        </div>
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
      // Tabs
      tabs: 0,
      tabs2: 0,
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
    }
  },
  //   [퍼블수정]23.02.17 menuList 추가
  created() {
    const me = this
    const json = require('~/static/json/mypage_left_menu.json')
    me.menuList = json.list
  },
  methods: {
  },
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/detail.scss'; //페이지 전용 css
</style>