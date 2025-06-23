<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap content-magazine content-planshop">
      <div class="planshop-headertab">
        <div class="cmp-page-tit">
          <h2 class="tit">기획전</h2>
        </div>

        <!-- s 탭메뉴 -->
        <div class="cmp-tabs tabs-actionTop">
            <v-tabs v-model="tab" fixed-tabs>
            <v-tab>진행중인 기획전</v-tab>
            <v-tab>지난 기획전</v-tab>
            </v-tabs>
        </div>
        <!-- e 탭메뉴 -->
      </div>

        <!-- s 탭내용 -->
        <div class="tab-content">
            <v-tabs-items v-model="tab" touchless>
            <!-- s 진행중인 기획전 내용 -->
            <v-tab-item :transition="false">
              <v-layout justify-start align-center class="planshop-header mt-30 mb-40"><!-- [퍼블수정]23.01.04 결함 - HUN3-2778 -->
                <div class="cmp-tabs tabs-actionText">
                  <v-tabs v-model="selectedTab">
                      <v-tab v-for="(item,index) in planCateList" :key="index"><!-- [퍼블수정]22.12.26 수정 -->
                        <span>{{item}}</span>
                        <span class="hidden">{{item}}</span>
                      </v-tab>
                  </v-tabs>
                </div>
                <div class="cmp-form-searchBox">
                  <v-text-field label="기획전을 검색해 보세요" clearable class="cmp-form-input"></v-text-field>
                  <v-btn icon>
                    <i class="cmp-icon i-search">검색</i>
                  </v-btn>
                </div>
              </v-layout>

              <!-- s 상단슬라이드 -->
              <div class="cmp-swiper-box btn-type2 btn-large magazine-top-swiper planshop-top-swiper">
                <!-- [퍼블수정]23.01.04 결함 - HUN3-2533 -->
                <Swiper 
                  :options="{
                    loop : swiperLoop, // 230221 상단배너 : 추가
                    // 230109 상단배너 : autoplay, watchOverflow 추가
                    autoplay: {
                      delay: 5000,
                    },
                    watchOverflow: true,
                    navigation: {
                      prevEl: '.swiper-button-prev',
                      nextEl: '.swiper-button-next',
                    },
                    pagination: {
                      el: '.swiper-pagination',
                      clickable: false,
                      renderBullet: renderBullet,
                      type: 'bullets'
                    },
                  }"
                  :class="{'swiper-no-swiping':planshopList.length <= 1}"
                >
                  <SwiperSlide v-for="(item,index) in planshopList" :key="index">
                    <v-layout justify-space-between>
                      <div class="mmi-text">
                        <div class="mmi-title" v-html="newLine(item.title)"></div>
                        <div class="mmi-desc" v-html="newLine(item.desc)" ></div>
                        <div class="mmi-date" v-html="newLine(item.date)"></div>
                        <nuxt-link :to="item.link_url" class="cmp-font fnt-13 button">
                        <span class="line">자세히 보기</span>
                        </nuxt-link>
                      </div>
                      <div :class="'mmi-' + (item.video_url ? 'video' : 'img')">
                        <nuxt-link :to="item.link_url" >
                          <img :src="item.image_url" :alt="item.title">
                        </nuxt-link>
                      </div>
                      <!--20221227 배너 전체 링크영역 추가-->
                      <div class="mmi-link">
                        <nuxt-link :to="item.link_url">링크영역</nuxt-link>
                      </div>
                    </v-layout>
                  </SwiperSlide>
                </Swiper>
                <div slot="pagination" class="swiper-pagination thePlanMagazine"></div>
                <!-- //[퍼블수정]23.01.04 결함 - HUN3-2533 -->
                <div class="swiper-button-prev swiper-no-swiping"><i class="cmp-icon cmp-icon-32 i-prev">이전</i></div>
                <div class="swiper-button-next swiper-no-swiping"><i class="cmp-icon cmp-icon-32 i-next">다음</i></div>
              </div>
              <!-- e 상단슬라이드 -->

              <!-- s 필터링 -->
              <v-layout justify-end align-center class="planshop-filter mb-24">
                <CommonSelectSortBox id="sort">
                  <template #optionList>
                      <option value="option1">브랜드 전체</option>
                      <option value="option2">옵션2</option>
                  </template>
                </CommonSelectSortBox>
                <!-- [퍼블수정]23.02.14 -->
                <div class="filtering-btnBox">
                  <button type="button" class="on">
                    <span>최신 순</span>
                    <span>최신 순</span>
                  </button>
                  <button type="button">
                    <span>마감 순</span>
                    <span>마감 순</span>
                  </button>
                </div>
              </v-layout>
              <!-- e 필터링 -->

              <!-- 상품리스트 -->
              <div class="planshop-main-list">
                <ul>
                  <li v-for="item,itemIdx in list" :key="itemIdx" :class="'item_' + itemIdx">
                    <!-- 동영상 -->
                    <div v-if="item.video_url" class="list-item">
                      <div class="video-cnt">
                        <VideoPlayer
                          :path="item.video_url"
                          :poster="item.image_url"
                          :play-on-scroll="true"
                          :mute="true"
                          :non-stop="true"
                          :hide-gui="true"
                        ></VideoPlayer>
                      </div>
                      <div class="list-text">
                        <div class="list-title">{{item.title}}</div>
                        <div v-html="newLine(item.desc)" class="list-desc"></div>
                        <div class="list-date">{{item.date}}</div>
                      </div>
                      <nuxt-link :to="item.link_url" class="link-block"></nuxt-link>
                    </div>
                    <!-- //동영상 -->
                    <!-- 이미지 -->
                    <div v-else class="list-item">
                      <nuxt-link :to="item.link_url">
                        <div class="list-images">
                          <div class="images" v-background-image="{url:item.image_url}"></div>
                        </div>
                        <div class="list-text">
                          <div class="list-title">{{item.title}}</div>
                          <div v-html="newLine(item.desc)" class="list-desc"></div>
                          <div class="list-date">{{item.date}}</div>
                        </div>
                      </nuxt-link>
                    </div>
                    <!-- //이미지 -->
                  </li>
                </ul>
              </div>
              <ProductListPaging />

            </v-tab-item>
            <!-- e 진행중인 기획전 내용 -->

            <!-- s 지난 기획전 내용 -->
            <v-tab-item :transition="false"> 
              <v-layout justify-start align-center class="planshop-header mt-30 mb-40">
                <div class="cmp-tabs tabs-actionText">
                  <v-tabs v-model="selectedTab">
                      <v-tab v-for="(item,index) in planCateList2" :key="index"><!-- [퍼블수정]22.12.26 수정 -->
                        <span>{{item}}</span>
                        <span class="hidden">{{item}}</span>
                      </v-tab>
                  </v-tabs>
                </div>
                <div class="cmp-form-searchBox">
                  <v-text-field label="기획전을 검색해 보세요" clearable class="cmp-form-input"></v-text-field>
                  <v-btn icon>
                    <i class="cmp-icon i-search">검색</i>
                  </v-btn>
                </div>
              </v-layout>
              <!-- s 필터링 -->
              <v-layout justify-end align-center class="planshop-filter mb-24">
                <CommonSelectSortBox id="sort">
                  <template #optionList>
                      <option value="option1">브랜드 전체</option>
                      <option value="option2">옵션2</option>
                  </template>
                </CommonSelectSortBox>
                <!-- [퍼블수정]23.02.14 -->
                <div class="filtering-btnBox">
                  <button type="button" class="on">
                    <span>최신 순</span>
                    <span>최신 순</span>
                  </button>
                  <button type="button">
                    <span>마감 순</span>
                    <span>마감 순</span>
                  </button>
                </div>
              </v-layout>
              <!-- e 필터링 -->

              <!-- 상품리스트 -->
              <div class="planshop-main-list">
                <ul>
                  <li v-for="item,itemIdx in list" :key="itemIdx" :class="'item_' + itemIdx">
                    <!-- 221118 기획전 영상 추가 -->
                    <div v-if="item.video_url" class="list-item">
                      <div class="video-cnt">
                        <VideoPlayer
                          :path="item.video_url"
                          :poster="item.image_url"
                          :play-on-scroll="true"
                          :mute="true"
                          :non-stop="true"
                          :hide-gui="true"
                        ></VideoPlayer>
                      </div>
                      <div class="list-text">
                        <div class="list-title">{{item.title}}</div>
                        <div v-html="newLine(item.desc)" class="list-desc"></div>
                        <div class="list-date">{{item.date}}</div>
                      </div>
                      <nuxt-link :to="item.link_url" class="link-block"></nuxt-link>
                    </div>
                    <!-- // 221118 기획전 영상 추가 -->
                    <!-- 이미지 (221118 기획전 영상 : v-else 추가) -->
                    <div v-else class="list-item">
                      <nuxt-link :to="item.link_url">
                        <div class="list-images">
                          <div class="images" v-background-image="{url:item.image_url}"></div>
                        </div>
                        <div class="list-text">
                          <div class="list-title">{{item.title}}</div>
                          <div v-html="newLine(item.desc)" class="list-desc"></div>
                          <div class="list-date">{{item.date}}</div>
                        </div>
                      </nuxt-link>
                    </div>
                    <!-- //이미지 -->
                  </li>
                </ul>
              </div>
              <ProductListPaging />

              <!-- s 데이터없음 -->
              <!-- <CommonNoData msg="검색결과가 없습니다."/> -->
              <!-- e 데이터없음 -->

            </v-tab-item>
            <!-- e 지난 기획전 내용 -->
            </v-tabs-items>
        </div>
        <!-- e 탭내용 -->

    </div>                                                  
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import VideoPlayer from '~/components/common/VideoPlayer' // 221118 기획전 영상 : 추가

export default {
  components: {
    Swiper,
    SwiperSlide,
    VideoPlayer // 221118 기획전 영상 : 추가
  },
  layout: 'LayoutBasics',
  data: () => ({
    swiperLoop : true, // 230221 상단배너 : 추가
    tab: 0,
    selectedTab: 0,
    productUnitType : 'mini',
    productUnitSwipe : false,
    planCateList:[
      '전체', '라이프스타일', '여성', '남성', '잡화'
    ],
    planCateList2:[
      '전체', '여성', '남성', '잡화', '라이프스타일'
    ],
    planshopList : [
      {
        image_url: "https://img.thehandsome.com/md/publish/dummy/pc/magazine-img.jpg",
        link_url: "#none",
        title: "3.1 Phillip Lim<br />22SS Spring Collection",
        desc: "최대 2줄 쏟아지는 햇빛 사이로 유영하는 댄서 아이반<br />길고 나른한 실루엣에 강력한 컬러를 더한 타임옴므의 캡슐 컬렉션",
        date:"2022.07.08 ~ 2022.07.20"
      },
      {
        image_url: "https://img-stg.thehandsome.com/attachment/display/2023/01/05/fe87ab3a-96ec-45e1-a662-b84ea82a299d_10.png",
        link_url: "#none",
        title: "TIME이<br>사색하는 시간",
        desc: "aweSOME life 07. 핸써미 @handsom-e<br>온전한 하루를 완성할 핸써미의 지속 가능한 선택 그 첫 번째 발걸음",
        date:"2022.07.08 ~ 2022.07.20"
      },
      {
        image_url: "https://img.thehandsome.com/md/publish/dummy/pc/magazine-img.jpg",
        link_url: "#none",
        title: "TIME이<br>사색하는 시간",
        desc: "aweSOME life 07. 핸써미 @handsom-e<br>온전한 하루를 완성할 핸써미의 지속 가능한 선택 그 첫 번째 발걸음",
        date:"2022.07.08 ~ 2022.07.20"
      },
      {
        image_url: "https://img-stg.thehandsome.com/attachment/display/2023/01/05/fe87ab3a-96ec-45e1-a662-b84ea82a299d_10.png",
        link_url: "#none",
        title: "TIME이<br>사색하는 시간",
        desc: "aweSOME life 07. 핸써미 @handsom-e<br>온전한 하루를 완성할 핸써미의 지속 가능한 선택 그 첫 번째 발걸음",
        date:"2022.07.08 ~ 2022.07.20"
      },
    ],
    list: [
        // 221118 기획전 영상 : video_url 항목 추가
        {
            "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-01.png",
            "video_url" : "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
            "link_url": "#none",
            "title": "Liquides Perfume Bar",
            "desc": "1줄이상 말줄임 쏟아지는 햇빛 사이로 유영하는 댄서 아이반 길고 나른한 실루엣에 강렬한 컬러를 더한 타임옴므의 캡슐 컬렉션쏟아지는 햇빛 사이로 유영하는 댄서 아이반 길고 나른한 실루엣에 강렬한 컬러를 더한 타임옴므의 캡슐 컬렉션",
            "date" : '2021.12.16 ~ 2022.01.31'
        },{
            "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-05.png",
            "video_url" : "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
            "link_url": "#none",
            "title": "Liquides Perfume Bar",
            "desc": "새로운 마음으로 한 해를 마주하는 순간. 볼을 스치는 청량감",
            "date" : '2021.12.16 ~ 2022.01.31'
        },{
            "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-02.png",
            "link_url": "#none",
            "title": "Liquides Perfume Bar",
            "desc": "로운 마음으로 한 해를 마주하는 순간. 볼을 스치는 청량감",
            "date" : '2021.12.16 ~ 2022.01.31'
        },{
            "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-06.png",
            "video_url" : "https://img.thehandsome.com/md/publish/dummy/pc/lookbook-video.mp4",
            "link_url": "#none",
            "title": "Liquides Perfume Bar",
            "desc": "로운 마음으로 한 해를 마주하는 순간. 볼을 스치는 청량감",
            "date" : '2021.12.16 ~ 2022.01.31'
        },{
            "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-09.png",
            "link_url": "#none",
            "title": "Liquides Perfume Bar",
          "desc": "로운 마음으로 한 해를 마주하는 순간. 볼을 스치는 청량감",
          "date" : '2021.12.16 ~ 2022.01.31'
        },{
            "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-03.png",
            "link_url": "#none",
            "title": "Liquides Perfume Bar",
            "desc": "로운 마음으로 한 해를 마주하는 순간. 볼을 스치는 청량감",
            "date" : '2021.12.16 ~ 2022.01.31'
        },{
            "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-07.png",
            "link_url": "#none",
            "title": "Liquides Perfume Bar",
            "desc": "로운 마음으로 한 해를 마주하는 순간. 볼을 스치는 청량감",
            "date" : '2021.12.16 ~ 2022.01.31'
        },{
            "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-04.png",
            "link_url": "#none",
            "title": "Liquides Perfume Bar",
            "desc": "로운 마음으로 한 해를 마주하는 순간. 볼을 스치는 청량감",
            "date" : '2021.12.16 ~ 2022.01.31'
        },{
            "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-08.png",
            "video_url" : "https://img.thehandsome.com/md/publish/dummy/pc/product_video.mp4",
            "link_url": "#none",
            "title": "Liquides Perfume Bar",
            "desc": "로운 마음으로 한 해를 마주하는 순간. 볼을 스치는 청량감",
            "date" : '2021.12.16 ~ 2022.01.31'
        },{
            "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-02.png",
            "link_url": "#none",
            "title": "Liquides Perfume Bar",
            "desc": "로운 마음으로 한 해를 마주하는 순간. 볼을 스치는 청량감",
            "date" : '2021.12.16 ~ 2022.01.31'
        },{
            "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-06.png",
            "video_url" : "https://img.thehandsome.com/md/publish/dummy/pc/lookbook-video.mp4",
            "link_url": "#none",
            "title": "Liquides Perfume Bar",
            "desc": "로운 마음으로 한 해를 마주하는 순간. 볼을 스치는 청량감",
            "date" : '2021.12.16 ~ 2022.01.31'
        },{
            "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-09.png",
            "link_url": "#none",
            "title": "Liquides Perfume Bar",
          "desc": "로운 마음으로 한 해를 마주하는 순간. 볼을 스치는 청량감",
          "date" : '2021.12.16 ~ 2022.01.31'
        },{
            "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-03.png",
            "link_url": "#none",
            "title": "Liquides Perfume Bar",
            "desc": "로운 마음으로 한 해를 마주하는 순간. 볼을 스치는 청량감",
            "date" : '2021.12.16 ~ 2022.01.31'
        },{
            "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-07.png",
            "link_url": "#none",
            "title": "Liquides Perfume Bar",
            "desc": "로운 마음으로 한 해를 마주하는 순간. 볼을 스치는 청량감",
            "date" : '2021.12.16 ~ 2022.01.31'
        },{
            "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-04.png",
            "link_url": "#none",
            "title": "Liquides Perfume Bar",
            "desc": "로운 마음으로 한 해를 마주하는 순간. 볼을 스치는 청량감",
            "date" : '2021.12.16 ~ 2022.01.31'
        },{
            "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-08.png",
            "video_url" : "https://img.thehandsome.com/md/publish/dummy/pc/product_video.mp4",
            "link_url": "#none",
            "title": "Liquides Perfume Bar",
            "desc": "로운 마음으로 한 해를 마주하는 순간. 볼을 스치는 청량감",
            "date" : '2021.12.16 ~ 2022.01.31'
        }
    ],
  }),
  created() {
     // 230221 상단배너 : 추가
    const me = this
    if(me.planshopList.length < 2) me.swiperLoop = false
  },
  methods: {
    newLine(str) {
      return String(str).replace(/(?:\r\n|\r|\n)/g, '</br>')
    },
    //  [퍼블수정]23.01.04 결함 - HUN3-2533
    renderBullet(idx, cls){
      return '<span class="swiper-pagination-bullet" index="' + (idx + 1) + '"></span>';
    },

  },
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/magazine.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>
