<template>
  <v-navigation-drawer v-model="searchLayerVisible" fixed right temporary width="1004px" overlay-color="#000" overlay-opacity="0.5" class="search-layer">
    <div class="search-layer-header">
      <h1 class="ir">검색</h1>
      <button class="close-btn" @click="closeSearchLayer"><i class="cmp-icon i-close">닫기</i></button>  
    </div>
    <div class="search-layer-body">
      <div class="body-inner">
        <!-- 검색,스타일버튼 -->
        <div class="search-input-box">
          <!-- [퍼블수정]24.08.27 검색 솔루션  -->
          <div class="cmp-form-searchBox search-type">
            <v-autocomplete v-model="searchValue" :items="autoComplete" :menu-props="{ zIndex: 22 }" clearable hide-no-data height="48" class="cmp-form-input auto-complete-type" @input="testSearchType">
              <!-- 수동 키워드 있을 시 -->
              <template v-if="seachKeywrod && searchValue.length <= 0" #label><span class="keyword">한섬몰 오픈 할인 이벤트</span></template>
              <!-- 기본 label -->
              <template v-else #label>검색어를 입력해주세요.</template>
            </v-autocomplete>
            <!--
              검색페이지 검색버튼 유형
              1. 기본 : 검색버튼
              2. 수동키워드 있을 시
                2-1. 수동키워드 링크 있을 시
                  - 기본 : 링크버튼
                  - 포커스 시 : 검색버튼
                2-2. 수동키워드 링크 없을 시
                  - 해당 키워드로 검색
            -->
            <!-- 링크버튼 -->
            <v-btn v-if="seachKeywrod && searchValue.length <= 0" nuxt to="#n" icon>
              <i class="cmp-icon cmp-icon-32 i-search2">검색</i>
            </v-btn>
            <!-- 검색버튼 -->
            <v-btn v-else icon>
              <i class="cmp-icon cmp-icon-32 i-search2">검색</i>
            </v-btn>
          </div>
          <v-btn outlined large height="48" class="width-121 gray-outlined"><!-- 230110 검색 : gray-outlined 클래스 추가 -->
            <i class="cmp-icon cmp-icon-18 i-filter mr-8"></i><span>스타일필터</span>
          </v-btn>
        </div>
        <!-- //검색,스타일버튼 -->

        <!-- 검색 전 -->
        <template v-if="!testSearching">
          <!-- 즐겨찾는 검색어 -->
          <div class="favorite-Search-box">
            <div class="tit-cnt">
              <h2 class="tit">즐겨찾는 검색어</h2>
            </div>
            
            <ul class="search-item-wrap">
              <li class="text-list" v-for="(item, index) in favoritesData" :key="`list-${index}`">
                <nuxt-link :to="{path:item.itemUrl}" class="link">
                  <span class="text">{{ item.itemName }}</span>
                  <ul class="label-list">
                    <li class="list" v-for="(label, idx) in item.labelList" :key="`label-${idx}`">
                      <span class="txt">{{ label }}</span>
                    </li>
                  </ul>
                </nuxt-link>
              </li>
            </ul>
            
            <v-btn text class="cmp-font fnt-12 c-gray button"><span class="line">목록관리</span></v-btn>
          </div>
          <!-- // 즐겨찾는 검색어 -->

          <!-- 최근 검색어 -->
          <div class="recent-search-box">
            <div class="box">
              <div class="tit-cnt">
                <div class="cnt">
                  <h2 class="tit hide">최근 검색어</h2>
                  <button class="txt" @click="recentAllDel"><span class="line">전체삭제</span></button>
                </div>
              </div>
              <!-- 최근 검색어 있을 경우 -->
              <ul v-if="recentSearches.length > 0" class="word-list">
                <li v-for="(item,index) in recentSearches" :key="index">
                  <button class="word">{{item}}</button>
                  <button class="del" @click="recentDel(index)"><i class="cmp-icon cmp-icon-12 i-close">삭제</i></button>
                </li>
              </ul>
              <!-- //최근 검색어 있을 경우 -->
              <!-- 최근 검색어 없을 경우 -->
              <p v-else class="search-no-txt">최근 검색어가 없습니다.</p>
              <!-- //최근 검색어 없을 경우 -->
            </div>
          </div>
          <!-- //최근 검색어 -->

          <!-- [퍼블수정]24.08.27 검색 솔루션  -->
          <!-- 인기, 급상승 검색어 -->
          <div class="search-word-box">
            <!-- 인기 검색어 -->
            <div class="box popularity">
              <div class="tit-cnt">
                <div class="cnt">
                  <h2 class="tit">인기 검색어</h2>
                  <!-- [241119] 검색 수정 및 추가사항 -->
                  <p class="txt">업데이트 09/24</p>
                </div>
                <p class="txt">하루 동안 많이 찾으신 검색어에요!</p>
              </div>
              <div class="search-swiper-box">
                <Swiper
                :options="{
                  navigation: {
                    prevEl: '.popular-prev-btn',
                    nextEl: '.popular-next-btn',
                  },
                }"
                :class="{'swiper-no-swiping':popularitySearchs.length <= 1}"
                @slideChangeTransitionEnd="onSlideChange" 
                >
                  <SwiperSlide v-for="(item, index) in popularitySearchs" :key="index">
                    <ul class="word-list">
                      <li v-for="(item2,index2) in item" :key="index2">
                        <!-- [241119] 검색 수정 및 추가사항 -->
                        <div class="list-box">
                          <div class="list-wrap">
                            <nuxt-link :to="{path:item.itemUrl}" class="link">
                              <!-- 241011_인기검색어 옆 상품모듈 닫힘/펼침 아이콘 추가 -->
                              <div class="list-text-wrap">
                                <div class="txt-wrap">
                                  <span class="num">{{(index*5) + (index2+1)}}</span>
                                  <span class="word">{{item2.itemName}}</span>
                                </div>
                              </div>
                            </nuxt-link>
                            <button class="list-text" @click="openContent(index, index2)">
                              <!-- 241011_인기검색어 옆 상품모듈 닫힘/펼침 아이콘 추가 -->
                              <div class="list-text-wrap">
                                <i class="cmp-icon cmp-icon-12" :class="`${item2.isOpened ? 'i-minus' : 'i-down'}`"></i>
                              </div>
                            </button>
                          </div>

                          <div class="rank-wrap">
                            <span v-if="index2 === 0" class="rank"> - </span>
                            <span v-if="index2 === 1 || index2 === 4" class="rank red new">new</span>
                            <span v-if="index2 === 2" class="rank up">1</span>
                            <span v-if="index2 === 3" class="rank down">2</span>
                          </div>
                        </div>
                        <!-- 최신 상품 리스트 -->

                        <!-- 인기검색어 첫번째 상품 리스트 default open -->
                        <div v-if="item2.isOpened" class="item-list-wrap">
                          <ul class="list-box">
                            <li v-for="(item, index) in rankingLists" :key="`item-${index}`" class="list">
                              <nuxt-link :to="item.link" class="link">
                                <v-img :src="item.image" alt="상품 이미지" class="prd-img"></v-img>
                                <div class="text-wrap">
                                  <span class="brand-item">{{item.brand}}</span>
                                  <span class="brand-name">{{item.brand_name}}</span>
                                  <span class="sell-price">{{item.sell_price | number}}</span>
                                  <div class="flex-wrap">
                                    <span class="price">{{item.price | number}}</span>
                                    <span v-if="item.discount" class="discunt" v-html="replacePercent(item.discount)"></span>
                                  </div>
                                </div>
                              </nuxt-link>
                            </li>
                          </ul>
                        </div>

                      </li>
                    </ul>
                  </SwiperSlide>
                </Swiper>
                <div class="swiper-button-prev popular-prev-btn"><i v-cmp-icon="{size:24, name:'prev'}">이전</i></div>
                <div class="swiper-button-next popular-next-btn"><i v-cmp-icon="{size:24, name:'next'}">다음</i></div>
              </div>
            </div>
            <!-- //인기 검색어 -->
            <!-- 급상승 검색어 -->
            <div class="box">
              <div class="tit-cnt">
                <div class="cnt">
                  <h2 class="tit">급상승 검색어</h2>
                  <p class="txt">업데이트 09:07</p>
                </div>
                <p class="txt">최근 1시간 동안 급상승한 검색어에요!</p>
              </div>
              <div class="search-swiper-box">
                <Swiper
                :options="{
                  navigation: {
                    prevEl: '.rapidrise-prev-btn',
                    nextEl: '.rapidrise-next-btn',
                  },
                }"
                :class="{'swiper-no-swiping':popularitySearchsB.length <= 1}"
                >
                  <SwiperSlide v-for="(item, index) in popularitySearchsB" :key="index">
                    <ul class="word-list">
                      <li v-for="(item2,index2) in item" :key="index2">
                        <div class="num">{{(index*10) + (index2+1)}}</div>
                        <button class="word">{{item2}}</button>
                      </li>
                    </ul>
                  </SwiperSlide>
                </Swiper>
                <div class="swiper-button-prev rapidrise-prev-btn"><i v-cmp-icon="{size:24, name:'prev'}">이전</i></div>
                <div class="swiper-button-next rapidrise-next-btn"><i v-cmp-icon="{size:24, name:'next'}">다음</i></div>
              </div>
            </div>
            <!-- //급상승 검색어 -->
          </div>
          <!-- //인기, 급상승 검색어 -->

          <!-- S : [231004_FO 통합검색&스라검색 영역 수정] 글로벌 화면에서 제거-->
          <!-- 핫 이슈 -->
          <div class="search-hot-issue">
            <div class="search-swiper-box">
              <Swiper
                :options="{
                  navigation: {
                    prevEl: '.hotissue-prev-btn',
                    nextEl: '.hotissue-next-btn',
                  },
                }"
                :class="{'swiper-no-swiping':hotIssue.length <= 1}"
              >
              <SwiperSlide v-for="(item,index) in hotIssue" :key="index">
                  <h2 class="tit">
                    <nuxt-link :to="item.link">
                      <span>{{item.title}}</span>
                      <i class="cmp-icon cmp-icon-18 i-arrow"></i>
                    </nuxt-link>
                  </h2>
                  <p class="sub-txt">{{item.text}}</p>
                  <div class="cmp-swiper-box">
                    <div v-prevent-parent-swiper>
                      <Swiper
                        :options="{
                          slidesPerView: 6,
                          slidesPerGroup : 6,
                          spaceBetween: 16,
                          navigation: {
                            prevEl: '.hotissue-prev-btn'+index,
                            nextEl: '.hotissue-next-btn'+index,
                          },
                        }"
                        :class="{'swiper-no-swiping':item.list.length <= 6}"
                      >
                        <SwiperSlide v-for="(item2,index2) in item.list" :key="index2">
                          <nuxt-link :to="item2.link" class="prd-unit">
                            <v-img :src="item2.image" :alt="item2.brand_name" :aspect-ratio="134 / 198"></v-img>
                            <div class="brand-name">{{item2.brand_name}}</div>
                            <div class="sell-price">{{item2.sell_price | number}}</div>
                          </nuxt-link>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div class="swiper-button-prev swiper-no-swiping" :class="'hotissue-prev-btn'+index"><i v-cmp-icon="{size:24, name:'prev', invert:1}">이전</i></div>
                    <div class="swiper-button-next swiper-no-swiping" :class="'hotissue-next-btn'+index"><i v-cmp-icon="{size:24, name:'next', invert:1}">다음</i></div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div class="swiper-button-prev hotissue-prev-btn"><i v-cmp-icon="{size:24, name:'prev'}">이전</i></div>
              <div class="swiper-button-next hotissue-next-btn"><i v-cmp-icon="{size:24, name:'next'}">다음</i></div>
            </div>
          </div>
          <!-- //핫 이슈 -->
          <!-- E : [231004_FO 통합검색&스라검색 영역 수정] 글로벌 화면에서 제거-->
          
        </template>
        <!-- //검색 전 -->

        <!-- 검색 중 -->
        <template v-if="testSearching">
          <!-- 브랜드 -->
          <h2 class="search-tit">브랜드</h2>
          <ul v-if="brandList.length > 0" class="search-layer-brand">
            <li v-for="(item,index) in brandList" :key="index">
              <nuxt-link :to="item.link">
                <span class="txt">{{item.name}}</span>
                <!-- [퍼블수정]24.08.27 검색 솔루션  -->
                <span class="label">{{ item.topBrand }}</span>
                <!-- // [퍼블수정]24.08.27 검색 솔루션  -->
                <i class="cmp-icon cmp-icon-12 i-next">바로가기</i>
              </nuxt-link>
            </li>
          </ul>
          <p v-else class="search-no-txt">추천브랜드가 없습니다.</p>
          <!-- //브랜드 -->
          <!-- 연관검색어 -->
          <h2 class="search-tit">연관검색어</h2>
          <ul v-if="relationList.length > 0" class="search-layer-relation">
            <!-- eslint-disable -->
            <li v-for="(item,index) in relationList" :key="index" v-html="item" role="button" tabindex="0"></li>
            <!-- eslint-disable -->
          </ul>
          <p v-else class="search-no-txt">연관검색어가 없습니다.</p>
          <!-- //연관검색어 -->
          <!-- 카테고리 -->
          <h2 class="search-tit">카테고리</h2>
          <ul v-if="categoryList.length > 0" class="search-layer-category">
            <li v-for="(item, index) in categoryList" :key="index">
              <nuxt-link :to="item.link">
                <span v-for="(item2, index2) in item.category" :key="index2">
                  <i v-if="index2!==0" class="cmp-icon cmp-icon-12 i-next"></i>
                  <span class="txt">{{item2}}</span>
                </span>
              </nuxt-link>
            </li>
          </ul>
          <p v-else class="search-no-txt">추천 카테고리가 없습니다.</p>
          <!-- //카테고리 -->
        </template>
        <!-- //검색 중 -->
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import EventBus from '~/api/common/EventBus'
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    langType: {
      type: String,
      default: () => {
        return ""
      },
    },
  },
  data: () => ({
    searchLayerVisible: false,
    searchValue : null,
    autoComplete : ['검색어1','검색어2','검색어3','검색어4','검색어5','검색어6','검색어7','글자가 길게 들어갈경우 확인 글자가 길게 들어갈경우 확인'],
    seachKeywrod : false, // 수동키워드
    recentSearches:['티셔츠','맨투맨','코트','슬랙스','코트','슬랙스','타임옴므','양말','가방','saint james','블라우스','원피스 티셔츠 맨투맨 슬랙스 타임옴므'], // 최근검색어

    // 즐겨찾는 검색어
    favoritesData: [
      {
        itemName: '와이드 데님 와이드 데님 와이드 데님 와이드 데님',
        labelList: ['카테고리', '브랜드'],
        itemUrl: ''
      },
      {
        itemName: '캐시미어 가디언',
        labelList: null,
        itemUrl: ''
      },
      {
        itemName: '시스템 신상품',
        labelList: ['브랜드'],
        itemUrl: ''
      },
    ],
    // 인기검색어
    // [241119] 검색 수정 및 추가사항
    popularitySearchs:[
      [
        {itemUrl: '', itemName: '원피스',isOpened: true},
        {itemUrl: '', itemName: '타임',isOpened: false},
        {itemUrl: '', itemName: '가디건 가디건 가디건 가디건 가디건 가디건 가디건 ',isOpened: false},
        {itemUrl: '', itemName: '마인',isOpened: false},
        {itemUrl: '', itemName: '시스템',isOpened: false}
      ],
      [
        {itemUrl: '', itemName: '원피스',isOpened: true},
        {itemUrl: '', itemName: '타임',isOpened: false},
        {itemUrl: '', itemName: '가디건',isOpened: false},
        {itemUrl: '', itemName: '마인',isOpened: false},
        {itemUrl: '', itemName: '시스템',isOpened: false}
      ],
      [
        {itemUrl: '', itemName: '원피스',isOpened: true},
        {itemUrl: '', itemName: '타임',isOpened: false},
        {itemUrl: '', itemName: '가디건',isOpened: false},
        {itemUrl: '', itemName: '마인',isOpened: false},
        {itemUrl: '', itemName: '시스템',isOpened: false}
      ],
      [
        {itemUrl: '', itemName: '원피스',isOpened: true},
        {itemUrl: '', itemName: '타임',isOpened: false},
        {itemUrl: '', itemName: '가디건',isOpened: false},
        {itemUrl: '', itemName: '마인',isOpened: false},
        {itemUrl: '', itemName: '시스템',isOpened: false}
      ],
      [
        {itemUrl: '', itemName: '원피스',isOpened: true},
        {itemUrl: '', itemName: '타임',isOpened: false},
        {itemUrl: '', itemName: '가디건',isOpened: false},
        {itemUrl: '', itemName: '마인',isOpened: false},
        {itemUrl: '', itemName: '시스템',isOpened: false}
      ],
      [
        {itemUrl: '', itemName: '원피스',isOpened: true},
        {itemUrl: '', itemName: '타임',isOpened: false},
        {itemUrl: '', itemName: '가디건',isOpened: false},
        {itemUrl: '', itemName: '마인',isOpened: false},
        {itemUrl: '', itemName: '시스템',isOpened: false}
      ]
    ],
    rankingLists:[
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/mo/001.jpg',
        brand :'SYSTEM SYSTEM SYSTEM SYSTEM',
        brand_name :'코듀로이 벨벳 코트',
        sell_price:'650000',
        price : "355000",
        discount : "20%",
        link : '#n',
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/mo/002.jpg',
        brand :'SYSTEM',
        brand_name :'코듀로이 벨벳 코트',
        sell_price:'750000',
        price : "355000",
        discount : "20%",
        link : '#n',
      }
    ],
    popularitySearchsB:[ // 급상승 검색어
      ['원피스','타임','가디건','마인', '시스템 시스템 시스템 시스템 시스템 시스템 시스템 ','스커드', '블라우스', '가방', 'saint james', '양말',],
      ['타임','가디건','마인', '시스템', '스커드','블라우스', '가방', 'saint james', '양말', '원피스',],
      ['가디건','마인', '시스템', '스커드', '블라우스','가방', 'saint james', '양말', '원피스', '타임',],
    ],
    hotIssue:[ // 핫 이슈
      {
        title : 'SYSTEM ACTIVE LINE',
        text : '시스템의 데일리 액티브 캐주얼',
        link : '#n',
        list : [
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/001.jpg',
            brand_name :'SYSTEM',
            sell_price:'650000',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/002.jpg',
            brand_name :'SYSTEM',
            sell_price:'650000',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/003.jpg',
            brand_name :'SYSTEM',
            sell_price:'650000',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/004.jpg',
            brand_name :'SYSTEM',
            sell_price:'650000',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/005.jpg',
            brand_name :'SYSTEM',
            sell_price:'650000',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/006.jpg',
            brand_name :'SYSTEM',
            sell_price:'650000',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/001.jpg',
            brand_name :'SYSTEM',
            sell_price:'650000',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/002.jpg',
            brand_name :'SYSTEM',
            sell_price:'650000',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/003.jpg',
            brand_name :'SYSTEM',
            sell_price:'650000',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/004.jpg',
            brand_name :'SYSTEM',
            sell_price:'650000',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/005.jpg',
            brand_name :'SYSTEM',
            sell_price:'650000',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/006.jpg',
            brand_name :'SYSTEM',
            sell_price:'650000',
            link : '#n',
          },
        ]
      },
      {
        title : '래트 22 SPRING TRAVEL LINE 예술로의 여행',
        text : '래트가 제안하는 시즌 트래블 룩 ',
        link : '#n',
        list : [
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/021.jpg',
            brand_name :'LÄTT',
            sell_price:'790000',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/022.jpg',
            brand_name :'LÄTT',
            sell_price:'790000',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/023.jpg',
            brand_name :'LÄTT',
            sell_price:'790000',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/024.jpg',
            brand_name :'LÄTT',
            sell_price:'790000',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/025.jpg',
            brand_name :'LÄTT',
            sell_price:'790000',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/026.jpg',
            brand_name :'LÄTT',
            sell_price:'790000',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/021.jpg',
            brand_name :'LÄTT',
            sell_price:'790000',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/022.jpg',
            brand_name :'LÄTT',
            sell_price:'790000',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/023.jpg',
            brand_name :'LÄTT',
            sell_price:'790000',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/024.jpg',
            brand_name :'LÄTT',
            sell_price:'790000',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/025.jpg',
            brand_name :'LÄTT',
            sell_price:'790000',
            link : '#n',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/026.jpg',
            brand_name :'LÄTT',
            sell_price:'790000',
            link : '#n',
          },
        ]
      },
    ],
    brandList:[ // 브랜드
      {
        name : 'TIME HOMME',
        topBrand : 'OUTLET',
        link : '#n'
      },
      {
        name : 'FOURM THE STORE',
        topBrand : 'OUTLET',
        link : '#n'
      },
      {
        name : 'TIME HOMME',
        topBrand : 'OUTLET',
        link : '#n'
      },
      {
        name : 'TIME HOMME',
        topBrand : 'OUTLET',
        link : '#n'
      },
      {
        name : 'TIME HOMME',
        topBrand : 'OUTLET',
        link : '#n'
      },
      {
        name : 'TIME HOMME',
        topBrand : 'OUTLET',
        link : '#n'
      },
      {
        name : 'TIME HOMME',
        topBrand : 'OUTLET',
        link : '#n'
      },
      {
        name : 'TIME HOMME',
        topBrand : 'OUTLET',
        link : '#n'
      },
      {
        name : 'EMOTIONALLY UNAVAILABLE',
        topBrand : 'OUTLET',
        link : '#n'
      },
      {
        name : 'EMOTIONALLY UNAVAILABLE',
        topBrand : 'OUTLET',
        link : '#n'
      },
    ],
    categoryList : [ // 카테고리
      {
        category : ['여성','탑','티셔츠'],
        link : '#n',
      }
    ],
    relationList:[ // 연관검색어
      '<strong>타임</strong>',
      '<strong>타임</strong>옴므',
      '<strong>타임</strong>코트',
      '<strong>타임</strong>코트',
      '<strong>타임</strong> 자켓',
      '<strong>타임</strong> 스커트',
      '<strong>타임</strong> 가디건',
      '<strong>타임</strong>옴브 스커트 자켓 가디건 시그니처 코트',
      '구스 <strong>타임</strong>',
      '원피스 <strong>타임</strong>',
      '자켓 <strong>타임</strong>',
      '원피스 <strong>타임</strong>',
      '시그니처 <strong>타임</strong>',
      '<strong>타임</strong><strong>타임</strong>'
    ],
    searchCategory : [ // 카테고리
      {
        category : ['여성','탑','티셔츠'],
        link : '#n',
      },
    ],
    // 퍼블 화면 확인용
    testSearching : false,
    // 퍼블 화면 확인용
  }),
  watch: {
    
  },
  created() {
    const me = this
    EventBus.$on("showSearchLayer", me.showSearchLayer)
  },
  mounted() {
  },
  methods: {
    showSearchLayer(vis){
      const me = this
      me.searchLayerVisible = (vis === true)
    },
    closeSearchLayer(){
      const me = this
      me.searchLayerVisible = false
    },
    recentAllDel(){
      const me = this
      me.recentSearches = []
    },
    recentDel(idx){
      const me = this
      me.recentSearches.splice(idx,1)
    },
    testSearchType(){ // 퍼블 화면 확인 용
      const me = this
      if(me.searchValue) me.testSearching = true
      else me.testSearching = false
    },


    replacePercent(str){
      try{
        return str.replace("%", "<em>%</em>")
      }catch(e){
        return ""
      }
    },

    // [241119] 검색 수정 및 추가사항
    openContent(listIndex, index) {
      const me = this
      // const selectedItem = me.popularitySearchs[listIndex][index]

      // 새로운 콘텐츠를 열 때 현재 열려 있는 것을 닫고, 새로 연다.
      me.popularitySearchs[listIndex].forEach((e) => {
        e.isOpened = false
      })
      me.popularitySearchs[listIndex][index].isOpened = true
      
      // if (selectedItem.isOpened) {

      //   selectedItem.isOpened = false
      // }
      // else {
      //   // 새로운 콘텐츠를 열 때 현재 열려 있는 것을 닫고, 새로 연다.
      //   me.popularitySearchs[listIndex].forEach((e) => {
      //     e.isOpened = false
      //   })
      //   selectedItem.isOpened = true
      // }


      // me.$nextTick(() => {
      //   setTimeout(() => {
      //     // 콘텐츠가 열리고 난 후, Swiper의 autoHeight 업데이트
      //     me.forceSwiperUpdate()
      //   }, 50) 
      // })
    },
    onSlideChange(e) {
      const me = this

      // open 컨텐츠 초기화
      me.popularitySearchs.forEach((ar, idx) => {
        ar.forEach((e) => {
          e.isOpened = false
        })
        ar[0].isOpened = true
      })
      // const realIndex = me.$refs.searchRkSwiper.$swiper.realIndex
      // me.popularitySearchs[realIndex].forEach((e) => {
      //   e.isOpened = false
      // })
      // me.popularitySearchs[realIndex][0].isOpened = true

      // me.$nextTick(() => {
      //   setTimeout(() => {
      //     me.forceSwiperUpdate() // 슬라이드 변경 시 높이 업데이트
      //   }, 50)
      // });
    }
  },// methods
}
</script>
<style lang="scss"></style>
