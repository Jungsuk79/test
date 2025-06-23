<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap search-content-wrap">
      <!-- 검색결과 상단 -->
      <!-- [퍼블수정]24.08.27 검색 솔루션 -->
      <div class="search-result-top">
        <template v-if="testSearchReplace">
          <h2 class="search-tit"><strong>‘xkdla’</strong>검색 결과가 없어, <span class="cmp-font fnt-24 c-blue">‘타임’</span>검색결과를 보여드립니다</h2>  
        </template>
        <template v-else>
          <h2 class="search-tit"><strong>‘타임’</strong> 에 대한 검색결과</h2>  
        </template>
        <div class="cmp-form-searchBox search-type star-type">
          <v-text-field v-model="inputText" label="키워드를 입력해주세요" clearable height="48" class="cmp-form-input label-hide"></v-text-field>
          
          <!-- 노출 여부는 showStar 데이터로 제어 하시면 됩니다. -->
          <button class="tostpopup-btn" @click="toggleShowStar" v-if="showStar">
            <i class="cmp-icon-etc cmp-icon-32"
            :class="[{'i-starOn' : changeStar, 'i-starOff' : !changeStar}]"></i>
          </button>
          <v-btn icon @click="testSearchType">
            <i class="cmp-icon cmp-icon-32 i-search2">검색</i>
          </v-btn>
        </div>
        <v-layout row align-center justify-space-between class="popup-toast" :class="{'show-up':showTostup}" v-if="showTost">
          <template v-if="changeStar">
            <p class="cmp-font fnt-14 c-white">상품이 등록되면 알려드려요</p>
            <nuxt-link class="cmp-font fnt-14 button c-white" to="#n"><span class="line">목록관리</span></nuxt-link>
          </template>
          <template v-else>
            <p class="cmp-font fnt-14 c-white">검색어 즐겨찾기가 해제되었어요</p>
          </template>
        </v-layout>
        <!-- 추천,연관 검색어 -->
        <ul v-if="!testSearchNone || testSearchReplace" class="search-word-list">
          <li v-for="(item, index) in searchWord" :key="index" role="button" tabindex="0" v-html="highlightText(item)"></li>
        </ul>
        <!-- //추천,연관 검색어 -->
        <!-- 스타일필터 -->
        <div class="style-filter-btn">
          <v-btn outlined large height="46" class="width-160"><i class="cmp-icon cmp-icon-18 i-filter"></i><span>스타일필터</span></v-btn>
          <p class="txt">다양한 스타일의 상품을 보고 싶으시다면 스타일필터 검색을 이용해보세요!</p>
        </div>
        <!-- //스타일필터 -->
      </div>
      <!-- //검색결과 상단 -->

      <!-- 20221124 수정 : 언어 변환 검색 시 문구 -->
      <!-- <CommonNoData v-if="testSearchReplace" class="mt-n20">
        <template #message>
          <p class="cmp-font fnt-18 c-gray">입력하신 <span class="c-black">‘xkdla’</span>의 결과가 없습니다.<br/>
          <span class="c-blue">‘타임’</span> 검색결과를 확인해 보시겠어요?<br/>
          <a href=""><span class="c-blue line">타임</span> 검색결과 보기</a>
          </p>
          
        </template>
      </CommonNoData> -->
      <!-- //20221124 수정 : 언어 변환 검색 시 문구 --> 
      <!-- 브랜드 -->
      <div v-show="!testSearchNone && !testSearchReplace" class="search-bran-swiper">
        <h3 class="tit">브랜드</h3>
        <div class="swiper-cover" :class="{'no-swiper':brandListImg.list.length <= 8}">
          <Swiper
            :options="{
              slidesPerView: 8,
              slidesPerGroup : 1,
              spaceBetween: 50,
              navigation: {
                prevEl: '.bran-swiper-prev-btn',
                nextEl: '.bran-swiper-next-btn',
              },
            }"
            :class="{'swiper-no-swiping':brandListImg.list.length <= 8}"
          >
            <SwiperSlide v-for="(item, index) in brandListImg.list" :key="index">
              <div class="swiper-unit">
                <nuxt-link to="#n">
                  <img v-if="item.img" :src="item.img"/>
                  <p class="brand-logo" v-if="item.text">{{ item.text }}</p>
                  <p class="cmp-labels" v-if="item.outlet === true">
                    <span v-if="item.outlet === true" class="label black c-white">OUTLET</span>
                  </p>
                </nuxt-link>
              </div>
            </SwiperSlide>
          </Swiper>
          <template v-if="brandListImg.list.length > 8">
            <div class="swiper-button-prev top-type2 bran-swiper-prev-btn"></div>
            <div class="swiper-button-next top-type2 bran-swiper-next-btn"></div>
          </template>
        </div>
      </div>
      <!-- 브랜드가 8개 이하인 케이스 - 퍼블확인용 -->
      <div v-show="testSearchReplace" class="search-bran-swiper">
        <h3 class="tit">브랜드</h3>
        <div class="swiper-cover no-swiper">
          <Swiper
            :options="{
              slidesPerView: 8,
              slidesPerGroup : 1,
              spaceBetween: 50,
            }"
            class="swiper-no-swiping"
          >
            <SwiperSlide v-for="(item, index) in brandListImg2.list" :key="index">
              <div class="swiper-unit">
                <nuxt-link to="#n">
                  <img v-if="item.img" :src="item.img"/>
                  <p class="brand-logo" v-if="item.text">{{ item.text }}</p>
                  <p class="cmp-labels" v-if="item.outlet === true">
                    <span v-if="item.outlet === true" class="label black c-white">OUTLET</span>
                  </p>
                </nuxt-link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <!-- //브랜드 -->
      <!-- //[퍼블수정]24.08.27 검색 솔루션 -->

      <!-- 브랜드&카테고리 -->
      <!-- <div v-if="!testSearchNone && !testSearchReplace" class="search-bran-category">
        <div class="box">
          <h3 class="tit">브랜드</h3>
          <ul class="brand-list">
            <li v-for="(item,index) in brandList" :key="index">
              <nuxt-link :to="item.link">
                <span class="txt">{{item.name}}</span>
                <i class="cmp-icon cmp-icon-12 i-next">바로가기</i>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="box">
          <h3 class="tit">카테고리</h3>
          <ul class="category-list">
            <li v-for="(item, index) in categoryList" :key="index">
              <nuxt-link :to="item.link">
                <span v-for="(item2, index2) in item.category" :key="index2">
                  <i v-if="index2!==0" class="cmp-icon cmp-icon-12 i-next"></i>
                  <span class="txt">{{item2}}</span>
                </span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div> -->
      <!-- //브랜드&카테고리 -->

      <!-- 쇼핑,컨텐츠 tab -->
      <div v-if="!testSearchNone" class="cmp-tabs box-type search-tab">
        <v-tabs v-model="tabs" fixed-tabs>
          <v-tab>쇼핑 <template v-if="testSearchNoneShopping">0</template><template v-else>2,268</template></v-tab>
          <v-tab>리뷰 <template v-if="testSearchNoneReviw">0</template><template v-else>1,321</template></v-tab>
          <v-tab>콘텐츠 <template v-if="testSearchNoneContents">0</template><template v-else>1,143</template></v-tab>
        </v-tabs>
      </div>
      <!-- //쇼핑,컨텐츠 tab -->
      <!-- [퍼블수정]24.08.27 검색 솔루션 -->
      <!-- 쇼핑,리뷰,컨텐츠 tab contents -->
      <div v-if="!testSearchNone" class="search-tab-content">
        <v-tabs-items v-model="tabs" touchless>
          <!-- 쇼핑 -->
          <v-tab-item :transition="false">
            <!-- 쇼핑 검색결과 없을 때 -->
            <CommonNoData v-if="testSearchNoneShopping" msg="입력하신 ‘타임’의 검색결과가 없습니다."></CommonNoData>
            <!-- //쇼핑 검색결과 없을 때 -->
            <!-- 쇼핑 검색결과 있을 때 -->
            <template v-if="!testSearchNoneShopping">
              <!-- 필터/정렬 바 -->
              <div class="filter-sort-wrap serch-var">
                <div class="filter-sort-btns split-layout">
                  <div class="filter-button">
                    <button class="filter-icn" @click="showFilter">필터</button>
                    <button @click="showqkFilterLayer('category')">카테고리 4</button>
                    <button @click="showqkFilterLayer('brand')">브랜드</button>
                    <button @click="showqkFilterLayer('color')">색상 1</button>
                    <button @click="showqkFilterLayer('size')">사이즈</button>
                  </div>
                  <!-- [퍼블수정]공통-우측 필터 수정 -->
                  <div class="sort-buttons">
                    <!-- [퍼블 수정] 정확도순 추가 -->
                    <button :class="{on:sortType===1}" @click="setSort(1)">
                      <span>정확도순</span>
                      <span>정확도순</span>
                    </button>
                    <!-- // [퍼블 수정] 정확도순 추가 -->
                    <button :class="{on:sortType===2}" @click="setSort(2)">
                      <span>신상품</span>
                      <span>신상품</span>
                    </button>
                    <button :class="{on:sortType===3}" @click="setSort(3)">
                      <span>판매순</span>
                      <span>판매순</span>
                    </button>
                    <button :class="{on:sortType===4}" @click="setSort(4)">
                      <span>고가순</span>
                      <span>고가순</span>
                    </button>
                    <button :class="{on:sortType===5}" @click="setSort(5)">
                      <span>저가순</span>
                      <span>저가순</span>
                    </button>
                    <button :class="{on:sortType===6}" @click="setSort(6)">
                      <span>리뷰순</span>
                      <span>리뷰순</span>
                    </button>
                    <button :class="{on:sortType===7}" @click="setSort(7)">
                      <span>추천순</span>
                      <span>추천순</span>
                    </button>
                  </div>
                </div>

                <div v-if="filterData.list && filterData.list.length > 0" class="selected-filter-list">
                  <ul>
                    <li>
                      초기화
                      <button @click="resetFilter"><span class="invisible">초기화</span></button>
                    </li>
                    <li v-for="item, idx in filterData.list" :key="idx">
                      <span v-if="item.style" :style="{'background':item.style}" :class="'color-'+item.label.toLowerCase()" class="colorchip"></span>
                      {{item.label}}
                      <button @click="deleteFilter(item)"><span class="invisible">삭제</span></button>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- 필터/정렬 바 -->
              <ProductList :list="productList" :layout="productListLayout" />
              <ProductListPaging />
            </template>
            <template v-else>
              <div class="search-no-cnt">
                <!-- 연관검색어 -->
                <div class="cmp-sub-tit">
                  <h3 class="tit">요즘 인기있는 검색어를 추천해드릴게요!</h3>
                </div>
                <ul class="search-word-list">
                  <li v-for="(item, index) in searchWord" :key="index" role="button" tabindex="0">{{item}}</li>
                </ul>
                <!-- //연관검색어 -->
              </div>
            </template>
            <!-- //쇼핑 검색결과 있을 때 -->
          </v-tab-item>
          <!-- //쇼핑 -->
          <!-- 리뷰 -->
          <v-tab-item :transition="false">
            <CommonNoData v-if="testSearchNoneReviw" msg="입력하신 ‘타임’의 검색결과가 없습니다."></CommonNoData>
            <template v-if="!testSearchNoneReviw">
              <div class="serch-review-list">
                <div v-for="(item,index) in unitReview" :key="index" class="prd-review-item">
                  <nuxt-link to="#n">
                    <div class="info-box">
                      <!-- 썸네일 영역 -->
                      <div v-if="item.attachFiles.length" tabindex="0" class="review-thumbnail-btn">
                        <div v-if="item.attachFiles[0].path" class="video-cnt">
                          <v-img :src="item.attachFiles[0].poster" alt="리뷰 썸네일" />
                        </div>
                        <v-img v-else :src="item.attachFiles[0].image" alt="리뷰 썸네일" />
                      </div>
                      <!-- // 썸네일 영역 -->
                      <!-- 우측 정보 영역 -->
                      <div class="info-cnt" :class="{full : item.image_url===null && item.video_url===null}">
                        <div class="text-box">
                          <p class="brand-name">LANVIN COLLECTION</p>
                          <p class="prd-name">{{item.prd_name}}</p>
                        </div>
                        <div class="cnt-box0">
                          <v-rating :value="item.reviewScoreStar" readonly class="cmp-rating rating-default">
                            <v-icon>
                              <i class="icon star">별점</i>
                            </v-icon>
                          </v-rating>
                        </div>
                        <div class="review-spec mt-6">
                          <p><span v-for="(item2, index2) in item.userInfo" :key="index2">{{item2}}</span></p>
                        </div>

                        <!-- eslint-disable -->
                        <p class="review" v-html="item.reviewTxt"></p>
                        <!-- eslint-disable -->
                      </div>
                      <!-- // 우측 정보 영역 -->
                    </div>
                  </nuxt-link>
                </div>
                <div class="prd-review-item full" v-if="unitReview.length<1">
                  <CommonNoData msg="작성한 상품평이 없습니다."></CommonNoData>
                </div>
              </div>
              <ProductListPaging />
            </template>
            <template v-else>
              <div class="search-no-cnt">
                <!-- 연관검색어 -->
                <div class="cmp-sub-tit">
                  <h3 class="tit">요즘 인기있는 검색어를 추천해드릴게요!</h3>
                </div>
                <ul class="search-word-list">
                  <li v-for="(item, index) in searchWord" :key="index" role="button" tabindex="0">{{item}}</li>
                </ul>
                <!-- //연관검색어 -->
              </div>
            </template>
          </v-tab-item>
          <!-- //리뷰 -->
          <!-- 컨텐츠 -->
          <v-tab-item :transition="false" class="pt-30">
            <CommonNoData v-if="testSearchNoneContents" msg="입력하신 ‘타임’의 검색결과가 없습니다."></CommonNoData>
            <template v-if="!testSearchNoneContents">
              <!-- 기획전 & THE 매거진 -->
              <div class="cmp-sub-tit">
                <h3 class="tit"><nuxt-link :to="planshopList.title_link">기획전 & THE 매거진 {{planshopList.total}}</nuxt-link></h3>
              </div>
              <div class="cmp-swiper-box btn-large search-swiper">
                <Swiper
                  :options="{
                    slidesPerView: 5,
                    slidesPerGroup : 5,
                    spaceBetween: 25,
                    navigation: {
                      prevEl: '.planshop-prev-btn',
                      nextEl: '.planshop-next-btn',
                    },
                  }"
                  :class="{'swiper-no-swiping':planshopList.list.length <= 5}"
                >
                  <SwiperSlide v-for="(item, index) in planshopList.list" :key="index">
                    <div class="swiper-unit">
                      <nuxt-link :to="item.link">
                        <div v-background-image="{url:item.image}"></div>
                        <span class="tit">{{item.title}}</span>
                        <div class="txt-wrap">
                          <span class="txt txt-01 bold">기획전</span> <!-- 기획전, THE매거진 -->
                          <span class="txt txt-02 bold">{{item.brand_name}}<!-- 외 9개--></span>
                        </div>
                      </nuxt-link>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <template v-if="planshopList.list.length > 5">
                  <div class="swiper-button-prev top-type2 swiper-no-swiping planshop-prev-btn">
                    <i v-cmp-icon="{size:32, name:'prev', invert:1}">이전</i>
                  </div>
                  <div class="swiper-button-next top-type2 swiper-no-swiping planshop-next-btn none-disabled">
                    <i v-cmp-icon="{size:32, name:'next', invert:1}">다음</i>
                  </div>
                </template>
              </div>
              <!-- //기획전 & THE 매거진 -->
              <!-- 이벤트 -->
              <div class="cmp-sub-tit">
                <h3 class="tit"><nuxt-link :to="eventList.title_link">이벤트 {{eventList.total}}</nuxt-link></h3>
              </div>
              <div class="cmp-swiper-box btn-large search-swiper">
                <Swiper
                  :options="{
                    slidesPerView: 5,
                    slidesPerGroup : 5,
                    spaceBetween: 25,
                    navigation: {
                      prevEl: '.event-prev-btn',
                      nextEl: '.event-next-btn',
                    },
                  }"
                  :class="{'swiper-no-swiping':eventList.list.length <= 5}"
                >
                  <SwiperSlide v-for="(item, index) in eventList.list" :key="index">
                    <div class="swiper-unit">
                      <nuxt-link :to="item.link">
                        <div v-background-image="{url:item.image}"></div>
                        <span class="tit">{{item.title}}</span>
                        <span class="txt">{{item.date}}</span>
                      </nuxt-link>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <template v-if="eventList.list.length > 5">
                  <div class="swiper-button-prev top-type2 swiper-no-swiping event-prev-btn">
                    <i v-cmp-icon="{size:32, name:'prev', invert:1}">이전</i>
                  </div>
                  <div class="swiper-button-next top-type2 swiper-no-swiping event-next-btn none-disabled">
                    <i v-cmp-icon="{size:32, name:'next', invert:1}">다음</i>
                  </div>
                </template>
              </div>
              <!-- //이벤트 -->
            </template>
            <template v-else>
              <div class="search-no-cnt">
                <!-- 연관검색어 -->
                <div class="cmp-sub-tit">
                  <h3 class="tit">요즘 인기있는 검색어를 추천해드릴게요!</h3>
                </div>
                <ul class="search-word-list">
                  <li v-for="(item, index) in searchWord" :key="index" role="button" tabindex="0">{{item}}</li>
                </ul>
                <!-- //연관검색어 -->
              </div>
            </template>
             
            <!-- 더매거진/기획전 -->
            <!-- <div class="cmp-sub-tit">
              <h3 class="tit"><nuxt-link :to="planshopList.title_link">기획전 & THE 매거진 {{planshopList.total}}</nuxt-link></h3>
            </div>
            <div v-if="!testSearchNoneContents" class="btn-large search-item-list">
              <div class="item-unit" v-for="(item, index) in planshopList.list" :key="index">
                <nuxt-link :to="item.link">
                  <div v-background-image="{url:item.image}"></div>
                  <span class="tit">{{item.title}}</span>
                  <div class="txt-wrap">
                    <span class="txt txt-01 bold">기획전</span> 기획전, THE매거진
                    <span class="txt txt-02 bold">{{item.brand_name}} 외 9개</span>
                  </div>
                </nuxt-link>
              </div>
            </div>
            <p v-if="testSearchNoneContents" class="cmp-font c-gray">일치하는 검색 결과가 없습니다.</p>
            <ProductListPaging /> -->
          </v-tab-item>
          <!-- //컨텐츠 -->
        </v-tabs-items>
      </div>
      <!-- //쇼핑,리뷰,컨텐츠 tab contents -->
      <!-- //[퍼블수정]24.08.27 검색 솔루션 -->

      <!-- 쇼핑,컨텐츠 전체 검색결과 없을경우 메시지 -->
      <CommonNoData v-if="testSearchNone" msg="일치하는 검색 결과가 없습니다."></CommonNoData>
      <!-- //쇼핑,컨텐츠 전체 검색결과 없을경우 메시지 -->
      <!-- [퍼블수정]24.08.27 검색 솔루션 -->
      <!-- 검색결과 없을 경우 -->
      <div v-if="testSearchNone" class="search-no-cnt">
        <!-- 연관검색어 -->
        <div class="cmp-sub-tit">
          <h3 class="tit">혹시 이것을 찾으셨나요?</h3>
        </div>
        <ul class="search-word-list">
          <li v-for="(item, index) in searchWord" :key="index" role="button" tabindex="0">{{item}}</li>
        </ul>
        <!-- //연관검색어 -->
        <!-- 신상품  -->
        <!-- <div class="cmp-sub-tit">
          <h3 class="tit">신상품</h3>
        </div>
        <ProductList :list="newPrdList" :layout="newPrdListLayout" :unit-type="newPrdUnitType" :swipe="true" class="search-new-swiper"/> -->
        <!-- //신상품  -->
      </div>
      <!-- 검색결과 없을 경우 -->
      <!-- //[퍼블수정]24.08.27 검색 솔루션 -->
    </div>

    <!-- [퍼블수정]24.08.27 검색 솔루션 -->
    <QuickFilterLayer :openList="openList" />
    <!-- //[퍼블수정]24.08.27 검색 솔루션 -->
  </div>
</template>

<script>
// [퍼블수정]24.08.27 검색 솔루션
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import EventBus from '~/api/common/EventBus'
import QuickFilterLayer from '~/components/common/QuickFilterLayer.vue'

export default {
  components: {
    // [퍼블수정]24.08.27 검색 솔루션
    Swiper,
    SwiperSlide,
    QuickFilterLayer
  },
  layout: 'LayoutBasics',
  data() {
    return {
      // [퍼블수정]24.08.27 검색 솔루션
      openList: 0,
      inputText:'',
      showStar: true,
      changeStar:false,
      showTost:false,
      showTostup:false,
      unitReview : [ // 리뷰 리스트
        {
          data : "2022.02.06",
          prd_name: '린넨 블렌드 브레이드 라인 셔츠',
          userInfo : ["COCOA", "M", "롯데전주타임"],
          attachFiles: [
            {
              image: "https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img1.png"
            },
            {
              image: "https://img.thehandsome.com/md/publish/dummy/pc/001.jpg"
            },
            {
              image: "https://img.thehandsome.com/md/publish/dummy/pc/002.jpg"
            },
          ],
          reviewOption : [
            {name : '사이즈', text : '적당한'},
            {name : '디자인', text : '화면과 같은'},
            {name : '컬러', text : '밝은'},
          ],
          reviewScoreStar: 5,
          reviewTxt : "정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전 강추합니다. 이번 가을 입을 거 고민이 사라졌어요. 따뜻하고 무엇보다 도톰한 재질이 맘에 쏙 듭니다.", // 리뷰내용
        },
        {
          helped_point: '100',
          data : "2022.02.06",
          prd_name: '린넨 블렌드 브레이드 라인 셔츠',
          userInfo : ["COCOA", "M", "롯데전주타임"],
          attachFiles: [
            {
              path: "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
              poster: "https://img.thehandsome.com/md/publish/dummy/pc/video.jpg",
              youtube: false,
              loop: true,
              time: 214, // 총 영상시간
            },
            {
              image: "https://img.thehandsome.com/md/publish/dummy/pc/002.jpg"
            },
          ],
          reviewOption : [
            {name : '사이즈', text : '적당한'},
            {name : '디자인', text : '화면과 같은'},
            {name : '컬러', text : '밝은'},
          ],
          reviewScoreStar: 3,
          reviewTxt : "정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전 강추합니다. 이번 가을 입을 거 고민이 사라졌어요. 따뜻하고 무엇보다 도톰한 재질이 맘에 쏙 듭니다.정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전 강추합니다. 이번 가을 입을 거 고민이 사라졌어요. 따뜻하고 무엇보다 도톰한 재질이 맘에 쏙 듭니다.정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전 강추합니다. 이번 가을 입을 거 고민이 사라졌어요. 따뜻하고 무엇보다 도톰한 재질이 맘에 쏙 듭니다.정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전 강추합니다. 이번 가을 입을 거 고민이 사라졌어요. 따뜻하고 무엇보다 도톰한 재질이 맘에 쏙 듭니다.", // 리뷰내용
        },
        {
          data : "2022.02.06",
          prd_name: '린넨 블렌드 브레이드 라인 셔츠',
          userInfo : ["COCOA", "M", "롯데전주타임"],
          attachFiles: [
            {
              image: "https://img.thehandsome.com/md/publish/dummy/pc/002.jpg"
            },
          ],
          reviewOption : [
            {name : '사이즈', text : '적당한'},
            {name : '디자인', text : '화면과 같은'},
            {name : '컬러', text : '밝은'},
          ],
          reviewScoreStar: 4,
          reviewTxt : "정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전 강추합니다. 이번 가을 입을 거 고민이 사라졌어요. 따뜻하고 무엇보다 도톰한 재질이 맘에 쏙 듭니다.", // 리뷰내용
        },
        {
          data : "2022.02.06",
          prd_name: '린넨 블렌드 브레이드 라인 셔츠',
          userInfo : ["COCOA", "M", "롯데전주타임"],
          attachFiles: [
          ],
          reviewOption : [
            {name : '사이즈', text : '적당한'},
            {name : '디자인', text : '화면과 같은'},
            {name : '컬러', text : '밝은'},
          ],
          reviewScoreStar: 4,
          reviewTxt : "정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전 강추합니다. 이번 가을 입을 거 고민이 사라졌어요. 따뜻하고 무엇보다 도톰한 재질이 맘에 쏙 듭니다.", // 리뷰내용
        },
        {
          data : "2022.02.06",
          prd_name: '린넨 블렌드 브레이드 라인 셔츠',
          userInfo : ["COCOA", "M", "롯데전주타임"],
          attachFiles: [
            {
              image: "https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img1.png"
            },
            {
              image: "https://img.thehandsome.com/md/publish/dummy/pc/001.jpg"
            },
            {
              image: "https://img.thehandsome.com/md/publish/dummy/pc/002.jpg"
            },
          ],
          reviewOption : [
            {name : '사이즈', text : '적당한'},
            {name : '디자인', text : '화면과 같은'},
            {name : '컬러', text : '밝은'},
          ],
          reviewScoreStar: 5,
          reviewTxt : "정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전 강추합니다. 이번 가을 입을 거 고민이 사라졌어요. 따뜻하고 무엇보다 도톰한 재질이 맘에 쏙 듭니다.", // 리뷰내용
        },
        {
          helped_point: '100',
          data : "2022.02.06",
          prd_name: '린넨 블렌드 브레이드 라인 셔츠',
          userInfo : ["COCOA", "M", "롯데전주타임"],
          attachFiles: [
            {
              path: "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
              poster: "https://img.thehandsome.com/md/publish/dummy/pc/video.jpg",
              youtube: false,
              loop: true,
              time: 214, // 총 영상시간
            },
            {
              image: "https://img.thehandsome.com/md/publish/dummy/pc/002.jpg"
            },
          ],
          reviewOption : [
            {name : '사이즈', text : '적당한'},
            {name : '디자인', text : '화면과 같은'},
            {name : '컬러', text : '밝은'},
          ],
          reviewScoreStar: 3,
          reviewTxt : "정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전 강추합니다. 이번 가을 입을 거 고민이 사라졌어요. 따뜻하고 무엇보다 도톰한 재질이 맘에 쏙 듭니다.정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전 강추합니다. 이번 가을 입을 거 고민이 사라졌어요. 따뜻하고 무엇보다 도톰한 재질이 맘에 쏙 듭니다.정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전 강추합니다. 이번 가을 입을 거 고민이 사라졌어요. 따뜻하고 무엇보다 도톰한 재질이 맘에 쏙 듭니다.정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전 강추합니다. 이번 가을 입을 거 고민이 사라졌어요. 따뜻하고 무엇보다 도톰한 재질이 맘에 쏙 듭니다.", // 리뷰내용
        },
        {
          data : "2022.02.06",
          prd_name: '린넨 블렌드 브레이드 라인 셔츠',
          userInfo : ["COCOA", "M", "롯데전주타임"],
          attachFiles: [],
          reviewOption : [
            {name : '사이즈', text : '적당한'},
            {name : '디자인', text : '화면과 같은'},
            {name : '컬러', text : '밝은'},
          ],
          reviewScoreStar: 4,
          reviewTxt : "정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전 강추합니다. 이번 가을 입을 거 고민이 사라졌어요. 따뜻하고 무엇보다 도톰한 재질이 맘에 쏙 듭니다.", // 리뷰내용
        },
        {
          data : "2022.02.06",
          prd_name: '린넨 블렌드 브레이드 라인 셔츠',
          userInfo : ["COCOA", "M", "롯데전주타임"],
          attachFiles: [],
          reviewOption : [
            {name : '사이즈', text : '적당한'},
            {name : '디자인', text : '화면과 같은'},
            {name : '컬러', text : '밝은'},
          ],
          reviewScoreStar: 4,
          reviewTxt : "정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전 강추합니다. 이번 가을 입을 거 고민이 사라졌어요. 따뜻하고 무엇보다 도톰한 재질이 맘에 쏙 듭니다.", // 리뷰내용
        },
      ],
      searchWord: [ // 연관,추천 검색어
        '타임옴므 코트', '겨울의 흔적', '타임옴므 가디건', '타임옴므 니트', '클럽모나코 재킷', '시스템옴므', '버클 스트랩 샌들'
      ],
      keyword: '타임',
      brandList:[ // 브랜드
        {
          name : 'TIME HOMME',
          link : '#n'
        },
        {
          name : 'EMOTIONALLY UNAVAILABLE',
          link : '#n'
        },
        {
          name : 'TIME',
          link : '#n'
        },
        {
          name : 'Liquides Perfume Bar',
          link : '#n'
        },
        {
          name : 'MM6 MAISON MARGIELA',
          link : '#n'
        },
        {
          name : 'SYSTEM',
          link : '#n'
        },
        {
          name : 'POP TRADING COMPANY',
          link : '#n'
        },
      ],
      categoryList : [
        {
          category : ['여성','탑','티셔츠'],
          link : '#n',
        },
        {
          category : ['남성','아우터','가디건/베스트'],
          link : '#n',
        },
        {
          category : ['잡화','주얼리','기타 주얼리'],
          link : '#n',
        },
      ],
      tabs : 0, // 탭
      // 쇼핑 Start
      filterData: { list:[] },
      sortType: 2,
      productListLayout: 5,
      productList: [],
      // 쇼핑 End
      // 컨텐츠 Start
      // [퍼블수정]24.08.27 검색 솔루션
      brandListImg: {
        list: [
          {img:'/images/common/logo-system.svg'},
          {img:'/images/common/logo-time.svg', outlet:true},
          {img:'/images/common/logo-system.svg', outlet:true},
          {img:'/images/common/logo-time.svg'},
          {img:'/images/common/logo-system.svg'},
          {text:'SJSJ', outlet:true},
          {text:'OBZEE'},
          {img:'/images/common/logo-time.svg'},
          {img:'/images/common/logo-system.svg'},
          {img:'/images/common/logo-time.svg'},
          {img:'/images/common/logo-system.svg'},
          {img:'/images/common/logo-time.svg'},
        ]
      },
      brandListImg2: {
        list: [
          {img:'/images/common/logo-system.svg'},
          {text:'HELENE BERMAN LONDON', outlet:true},
          {img:'/images/common/logo-system.svg', outlet:true},
        ]
      },
      planshopList : { // 기획전
        title_link : '#n',
        total:24,
        list:[
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-planshop-thumb0.png',
            title : '타임옴므 윈터 니트컬렉션 타임옴므 윈터 니트컬렉션',
            brand_name : 'TIME HOMME',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-planshop-thumb1.png',
            title : '21FW 시즌오프 ~50%',
            brand_name : 'TOM & FORUM',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-planshop-thumb2.png',
            title : '신상품 썬쿠션 출시',
            brand_name : 'OERA',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-planshop-thumb3.png',
            title : 'TIME HOMME ONLINE EXCLUSIVE.',
            brand_name : 'TIME HOMME',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-planshop-thumb4.png',
            title : 'TIME HOMME ONLINE EXCLUSIVE.',
            brand_name : 'TIME HOMME',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-planshop-thumb0.png',
            title : '타임옴므 윈터 니트컬렉션',
            brand_name : 'TIME HOMME',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-planshop-thumb1.png',
            title : '21FW 시즌오프 ~50%',
            brand_name : 'TOM & FORUM',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-planshop-thumb2.png',
            title : '신상품 썬쿠션 출시',
            brand_name : 'OERA',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-planshop-thumb3.png',
            title : 'TIME HOMME ONLINE EXCLUSIVE.',
            brand_name : 'TIME HOMME',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-planshop-thumb4.png',
            title : 'TIME HOMME ONLINE EXCLUSIVE.',
            brand_name : 'TIME HOMME',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-planshop-thumb0.png',
            title : '타임옴므 윈터 니트컬렉션',
            brand_name : 'TIME HOMME',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-planshop-thumb1.png',
            title : '21FW 시즌오프 ~50%',
            brand_name : 'TOM & FORUM',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-planshop-thumb2.png',
            title : '신상품 썬쿠션 출시',
            brand_name : 'OERA',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-planshop-thumb3.png',
            title : 'TIME HOMME ONLINE EXCLUSIVE.',
            brand_name : 'TIME HOMME',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-planshop-thumb4.png',
            title : 'TIME HOMME ONLINE EXCLUSIVE.',
            brand_name : 'TIME HOMME',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-planshop-thumb0.png',
            title : '타임옴므 윈터 니트컬렉션',
            brand_name : 'TIME HOMME',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-planshop-thumb1.png',
            title : '21FW 시즌오프 ~50%',
            brand_name : 'TOM & FORUM',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-planshop-thumb2.png',
            title : '신상품 썬쿠션 출시',
            brand_name : 'OERA',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-planshop-thumb3.png',
            title : 'TIME HOMME ONLINE EXCLUSIVE.',
            brand_name : 'TIME HOMME',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-planshop-thumb4.png',
            title : 'TIME HOMME ONLINE EXCLUSIVE.',
            brand_name : 'TIME HOMME',
            link : '#n',
          },
        ],
      },
      eventList : { // 이벤트
        title_link : '#n',
        total:12,
        list:[
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-event-thumb0.png',
            title : '더한섬닷컴 Beauty 릴레이 체험단',
            date : '2021.12.07 ~ 2021.12.26',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-event-thumb1.png',
            title : '앱 다운로드 이벤트',
            date : '2022.03.01 ~ 2022.03.31',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-event-thumb2.png',
            title : '더한섬닷컴 X 스마일페이 멤버십 THE 클럽',
            date : '2021.12.07 ~ 2021.12.26',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-event-thumb3.png',
            title : '신용카드 무이자 혜택',
            date : '2022.03.01 ~ 2022.03.31',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-event-thumb4.png',
            title : '더한섬닷컴 X 스마일페이 멤버십 THE 클럽',
            date : '2022.03.01 ~ 2022.03.31',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-event-thumb0.png',
            title : '더한섬닷컴 Beauty 릴레이 체험단',
            date : '2021.12.07 ~ 2021.12.26',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-event-thumb1.png',
            title : '앱 다운로드 이벤트',
            date : '2022.03.01 ~ 2022.03.31',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-event-thumb2.png',
            title : '더한섬닷컴 X 스마일페이 멤버십 THE 클럽',
            date : '2021.12.07 ~ 2021.12.26',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-event-thumb3.png',
            title : '신용카드 무이자 혜택',
            date : '2022.03.01 ~ 2022.03.31',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-event-thumb4.png',
            title : '더한섬닷컴 X 스마일페이 멤버십 THE 클럽',
            date : '2022.03.01 ~ 2022.03.31',
            link : '#n',
          },
        ],
      },
      magazineList : { // 매거진
        title_link : '#n',
        total:8,
        list:[
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-magazine-thumb0.png',
            title : 'WAITING FOR SPRING',
            section_name : '셀렉션',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-magazine-thumb1.png',
            title : '무이 현대백화점 판교점 리뉴얼 오픈',
            section_name : '뉴스',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-magazine-thumb2.png',
            title : '그 겨울의 퍼',
            section_name : '스타일 가이드',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-magazine-thumb3.png',
            title : '시스템옴므가 다시만난 세계',
            section_name : '커버스토리',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-magazine-thumb4.png',
            title : '서울에서 마주한 SJSJ의 오아시스',
            section_name : '뉴스',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-magazine-thumb1.png',
            title : '무이 현대백화점 판교점 리뉴얼 오픈',
            section_name : '뉴스',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-magazine-thumb2.png',
            title : '그 겨울의 퍼',
            section_name : '스타일 가이드',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/search-magazine-thumb3.png',
            title : '시스템옴므가 다시만난 세계',
            section_name : '커버스토리',
            link : '#n',
          },
        ],
      },
      // 컨텐츠 End
      relationSearchs : ['스웨트 니트','레터링','니트','구스다운','니트 팬츠','알파카','가디건','야상','니트 원피스','맨투맨 티셔츠','뮬 스니커즈','타임 스니커즈','발리 스니커즈'], // 연관검색어
      newPrdList : [],
      newPrdListLayout : 6,
      newPrdUnitType : 'mini',
      // 퍼블 테스트용 Start
      testSearchCount : 0,
      testSearchNone : false, // 결과없음
      testSearchReplace : false, // 언어변환
      testSearchNoneShopping : false, // 검색결과 쇼핑 없을경우
      testSearchNoneContents : false, // 검색결과 콘텐츠 없을경우
      testSearchNoneReviw : false,// 검색결과 리뷰 없을경우
      // 퍼블 테스트용 End
    }
  },
  created() {
    const me = this
    EventBus.$emit("setLayout", {filter:true})
    EventBus.$on("filterChange", me.filterChange)

    // 로컬 테스트 데이터
    const json = require("~/static/json/search_product_list.json")
    const json2 = require("~/static/json/search_product_list2.json")
    me.productList = json.list
    me.newPrdList = json2.list
    // 로컬 테스트 데이터
  },
  methods: {
    showFilter(){
        EventBus.$emit("showFilterLayer", true, 'search')
    },
    // 필터 변경 이벤트 핸들릭
    filterChange(obj){
      const me = this
      me.filterData = obj
      console.log(JSON.stringify(obj, null, 4))
    },
    // 필터 리셋
    resetFilter(){
      EventBus.$emit("filterLayerReset")
    },
    // 필터 개별 삭제
    deleteFilter(item){
      EventBus.$emit("filterLayerDelete", item)
    },
    setSort(n){
      const me = this
      me.sortType = n
    },
    // 퍼블 테스트용
    testSearchType(){
      const me = this
      me.testSearchCount ++
      if(me.testSearchCount%6===0){
        me.testSearchNone = false
        me.testSearchReplace = false
        me.testSearchNoneShopping = false
        me.testSearchNoneContents = false
        me.testSearchNoneReviw =false
      }else if(me.testSearchCount%6===1){
        me.testSearchNone = true
        me.testSearchReplace = false
        me.testSearchNoneShopping = false
        me.testSearchNoneContents = false
        me.testSearchNoneReviw =false
      }else if(me.testSearchCount%6===2){
        me.testSearchNone = false
        me.testSearchReplace = true
        me.testSearchNoneShopping = false
        me.testSearchNoneContents = false
        me.testSearchNoneReviw =false
      }else if(me.testSearchCount%6===3){
        me.testSearchNone = false
        me.testSearchReplace = false
        me.testSearchNoneShopping = true
        me.testSearchNoneContents = false
        me.testSearchNoneReviw =false
      }else if(me.testSearchCount%6===4){
        me.testSearchNone = false
        me.testSearchReplace = false
        me.testSearchNoneShopping = false
        me.testSearchNoneContents = true
        me.testSearchNoneReviw =false
      }else if(me.testSearchCount%6===5){
        me.testSearchNone = false
        me.testSearchReplace = false
        me.testSearchNoneShopping = false
        me.testSearchNoneContents = false
        me.testSearchNoneReviw =true
      }
    },
    // [퍼블수정]24.08.27 검색 솔루션
    highlightText(item){
      if (item.includes(this.keyword)) {
        return item.replace(
          new RegExp(`(${this.keyword})`, 'gi'),
          `<span class="cmp-font fnt-16 c-blue">$1</span>`
        );
      }
      return item;
    },
    // 노출 제어 조건 변경으로 주석처리
    // checkInput() {
    //   if(this.inputText === null){
    //     this.showStar = false
    //   } else {
    //     this.showStar = true
    //   }
    // },
    toggleShowStar() {
      // 이전에 설정된 타이머가 있다면 모두 취소
      if (this.timeout1) clearTimeout(this.timeout1);
      if (this.timeout2) clearTimeout(this.timeout2);
      if (this.timeout3) clearTimeout(this.timeout3);

      this.changeStar = !this.changeStar;
      this.showTostup = false;
      this.showTost = false;
      this.showTost = true;

      // 새 타이머 설정
      this.timeout1 = setTimeout(() => {
        this.showTostup = true;
        this.timeout2 = setTimeout(() => {
          this.showTostup = false;
          this.timeout3 = setTimeout(() => {
            this.showTost = false;
          }, 300);
        }, 2300);
      }, 200);
    },
    showqkFilterLayer(flag){
      EventBus.$emit('showqkFilterLayer', true, flag);
      if(flag === 'category'){
        this.openList = 0
      }
      if(flag === 'brand'){
        this.openList = 1
      }
      if(flag === 'color'){
        this.openList = 2
      }
      if(flag === 'size'){
        this.openList = 3
      }
    },
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/search.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>
