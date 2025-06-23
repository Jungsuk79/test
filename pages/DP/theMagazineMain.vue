<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap content-magazine">
      <div class="magazine-headertab">
        <div class="cmp-page-tit">
          <h2 class="tit">THE 매거진</h2>
        </div>

        <div class="cmp-tabs tabs-actionText theMagazine mag-category"><!-- [퍼블수정]23.01.11 결함 - HUN3-2778 -->
          <v-tabs>
            <v-tab>
              <span>전체</span>
              <span class="hidden">전체</span>
            </v-tab>
            <v-tab>
              <span>커버스토리</span>
              <span class="hidden">커버스토리</span>
            </v-tab>
            <v-tab>
              <span>Q.P.T.</span>
              <span class="hidden">Q.P.T.</span>
            </v-tab>
            <v-tab>
              <span>스타일가이드</span>
              <span class="hidden">스타일가이드</span>
            </v-tab>
            <v-tab>
              <span>셀렉션</span>
              <span class="hidden">셀렉션</span>
            </v-tab>
            <v-tab>
              <span>#SOME</span>
              <span class="hidden">#SOME</span>
            </v-tab>
            <v-tab>
              <span>뉴스</span>
              <span class="hidden">뉴스</span>
            </v-tab>
          </v-tabs>
        </div>
      </div>

      <div class="cmp-swiper-box btn-type2 btn-large magazine-top-swiper">
        <!-- [퍼블수정]23.01.04 결함 - HUN3-2533 -->
        <Swiper 
          :options="{
            loop:swiperLoop, // 230221 상단배너 : 추가
            spaceBetween : 80, // 230221 상단배너 : 추가
            // 230109 상단배너 : autoplay, watchOverflow 추가
            autoplay: {
              delay: 5000,
            },
            watchOverflow: true,
            on: { // 230221 상단배너 : on event 추가
              init: swiperInit,
              sliderFirstMove: stopPlayingVideo,
              touchEnd : playActiveVideo,
              transitionEnd: transitionEndFn,
            },
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
          class="mgz-visual-swiper"
          :class="{'swiper-no-swiping':magazineList.length <= 1}"
        ><!-- 230221 상단배너 : 클래스 mgz-visual-swiper 추가 -->
          <SwiperSlide v-for="(item,index) in magazineList" :key="index">
            <v-layout justify-space-between align-center>
              <div class="mmi-text">
                <div class="mmi-type">{{item.type}}</div>
                <div class="mmi-title" v-html="newLine(item.title)"></div>
                <div v-html="newLine(item.desc)" class="mmi-desc"></div>
                <nuxt-link :to="item.link_url" class="cmp-font fnt-13 button"><span class="line">자세히 보기</span></nuxt-link>
              </div>
              <div :class="'mmi-' + (item.video_url ? 'video' : 'img')">
                <nuxt-link v-if="!item.video_url" :to="item.link_url" >
                  <img :src="item.image_url" :alt="item.title" aspect-ratio="1">
                </nuxt-link>
                <VideoPlayer 
                  v-if="item.video_url" 
                  :path="item.video_url" 
                  :mute="true"
                  :auto-play="index===0"
                  :poster="item.image_url" 
                  :video-ratio="100"
                  :loop="true"
                  :controls="false"
                  :hideGui="true"
                /><!-- 230302 더매거진 : loop,controls,hideGui 추가 --><!-- 230221 상단배너 : play-on-scroll 삭제 / auto-play, mute 추가 -->
              </div>
              <!--20221227 배너 전체 링크영역 추가-->
              <div class="mmi-link">
                <nuxt-link :to="item.link_url">링크영역</nuxt-link>
              </div>
            </v-layout>
          </SwiperSlide>
          <div slot="pagination" class="swiper-pagination thePlanMagazine"></div>
        </Swiper>
        <!-- //[퍼블수정]23.01.04 결함 - HUN3-2533 -->
        <div class="swiper-button-prev swiper-no-swiping"><i class="cmp-icon-etc cmp-icon-60 i-prev">이전</i></div>
        <div class="swiper-button-next swiper-no-swiping"><i class="cmp-icon-etc cmp-icon-60 i-next">다음</i></div>
      </div>

      <v-layout justify-end align-center class="sorting">
        <CommonSelectSortBox id="sort">
          <template #optionList>
              <option value="option1">브랜드 전체</option>
              <option value="option2">옵션2</option>
          </template>
        </CommonSelectSortBox>
      </v-layout>  

      <div class="magazine-main-list">
        <ul><!-- 230214 매거진 : ul 클래스 삭제 -->
          <li v-for="item,itemIdx in list" :key="itemIdx" :class="'item_' + itemIdx"><!-- 230214 매거진 : v-masonry-span 삭제 -->
            <div class="list-item"><!-- 230214 매거진 : cmp-masonry-item 클래스 삭제 -->
              <nuxt-link :to="item.link_url">
                <!--20221205 동영상 추가-->
                <div v-if="item.video_url" class="video-cnt">
                  <VideoPlayer
                    :path="item.video_url"
                    :poster="item.image_url"
                    :auto-play="itemIdx===0"
                    :mute="true"
                    :hide-gui="true"
                  ></VideoPlayer><!-- 230221 상단배너 : auto-play 추가 / play-on-scroll, non-stop 삭제 -->
                 </div>

                <!--20221205 이미지 영역-->
                <div v-else class="list-images">
                  <div class="images" v-background-image="{url:item.image_url}"></div>
                </div>
                <div class="list-text">
                    <div class="list-type">{{item.type}}</div>
                    <div class="list-title">{{item.title}}</div>
                    <div v-html="newLine(item.desc)" class="list-desc"></div>
                </div>
              </nuxt-link>
            </div>
          </li>
        </ul>
      </div>

      <ProductListPaging class="mt-0"/><!-- 230214 매거진 : mt-0 클래스 추가 -->
    </div>                                                  
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import VideoPlayer from '~/components/common/VideoPlayer'

export default {
  components: {
    Swiper,
    SwiperSlide,
    VideoPlayer,
  },
  layout: 'LayoutBasics',
  data: () => ({
    selectedTab: 0,
    magazineList : [
      {
        image_url: "https://img.thehandsome.com/md/publish/dummy/pc/magazine-img.jpg",
        video_url: "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
        link_url: "#none",
        title: "TIME이<br>사색하는 시간",
        desc: "aweSOME life 07. 핸써미 @handsom-e<br>온전한 하루를 완성할 핸써미의 지속 가능한 선택 그 첫 번째 발걸음",
        type: "커버스토리"
      },
      {
        image_url: "https://img.thehandsome.com/md/publish/dummy/pc/magazine-img.jpg",
        video_url: "",
        link_url: "#none",
        title: "TIME이<br />사색하는 시간",
        desc: "aweSOME life 07. 핸써미 @handsom-e<br>온전한 하루를 완성할 핸써미의 지속 가능한 선택 그 첫 번째 발걸음",
        type: "커버스토리",
      },
      {
        image_url: "https://img-stg.thehandsome.com/attachment/display/2023/01/25/2d6b3927-a18d-4a7f-a489-82e219c33788_10.png",
        video_url: "",
        link_url: "#none",
        title: "TIME이 사색하는 시간사색하는 시간사색하는 시간사색하는 시간사색하는 시간",
        desc: "aweSOME life 07. 핸써미 @handsom-e<br>온전한 하루를 완성할 핸써미의 지속 가능한 선택 그 첫 번째 발걸음",
        type: "커버스토리",
      },
      {
        image_url: "https://video-stg.thehandsome.com/media/unsigned/Horizontal/c46e8718-cd3a-413e-a736-36b4d51ed820/8f60e1f2-679e-4a94-befd-bd716c8aee46/Thumbnails/8f60e1f2-679e-4a94-befd-bd716c8aee46.0000001.jpg",
        video_url: "https://video-stg.thehandsome.com/media/unsigned/Horizontal/c46e8718-cd3a-413e-a736-36b4d51ed820/8f60e1f2-679e-4a94-befd-bd716c8aee46/HLS/8f60e1f2-679e-4a94-befd-bd716c8aee46.m3u8",
        link_url: "#none",
        title: "TIME이<br>사색하는 시간",
        desc: "aweSOME life 07. 핸써미 @handsom-e<br>온전한 하루를 완성할 핸써미의 지속 가능한 선택 그 첫 번째 발걸음",
        type: "커버스토리"
      },
    ],
    list: [
        {
            "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-01.png",
            "video_url" : "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
            "link_url": "#none",
            "title": "그해 여름, 타임옴므",
            "type": "커버스토리",
            "desc": "쏟아지는 햇빛 사이로 유영하는 댄서 아이반 길고 나른한 실루엣에 강렬한 컬러를 더한 타임옴므의 캡슐 컬렉션쏟아지는 햇빛 사이로 유영하는 댄서 아이반 길고 나른한 실루엣에 강렬한 컬러를 더한 타임옴므의 캡슐 컬렉션"
        },{
            "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-05.png",
            "video_url" : "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
            "link_url": "#none",
            "title": "그해 여름, 타임옴므",
            "type": "커버스토리",
            "desc": "쏟아지는 햇빛 사이로 유영하는 댄서 아이반 길고 나른한 실루엣에 강렬한 컬러를 더한 타임옴므의 캡슐 컬렉션쏟아지는 햇빛 사이로 유영하는 댄서 아이반 길고 나른한 실루엣에 강렬한 컬러를 더한 타임옴므의 캡슐 컬렉션"
        },{
            "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-02.png",
            "link_url": "#none",
            "title": "그해 여름, 타임옴므",
            "type": "커버스토리",
            "desc": "쏟아지는 햇빛 사이로 유영하는 댄서"
        },{
            "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-06.png",
            "link_url": "#none",
            "title": "그해 여름, 타임옴므",
            "type": "커버스토리",
            "desc": "쏟아지는 햇빛 사이로 유영하는 댄서"
        },{
            "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-09.png",
            "link_url": "#none",
            "title": "그해 여름, 타임옴므",
            "type": "커버스토리",
          "desc": "쏟아지는 햇빛 사이로 유영하는 댄서 아이반 길고 나른한 실루엣에 강렬한 컬러를 더한 타임옴므의 캡슐 컬렉션쏟아지는 햇빛 사이로 유영하는 댄서 아이반 길고 나른한 실루엣에 강렬한 컬러를 더한 타임옴므의 캡슐 컬렉션"
        },{
            "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-03.png",
            "link_url": "#none",
            "title": "그해 여름, 타임옴므",
            "type": "커버스토리",
            "desc": "쏟아지는 햇빛 사이로 유영하는 댄서 아이반 길고 나른한 실루엣에 강렬한 컬러를 더한 타임옴므의 캡슐 컬렉션쏟아지는 햇빛 사이로 유영하는 댄서 아이반 길고 나른한 실루엣에 강렬한 컬러를 더한 타임옴므의 캡슐 컬렉션"
        },{
            "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-07.png",
            "link_url": "#none",
            "title": "그해 여름, 타임옴므",
            "type": "커버스토리",
            "desc": "쏟아지는 햇빛 사이로 유영하는 댄서"
        },{
            "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-04.png",
            "link_url": "#none",
            "title": "그해 여름, 타임옴므",
            "type": "커버스토리",
            "desc": "쏟아지는 햇빛 사이로 유영하는 댄서"
        },{
            "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-08.png",
            "link_url": "#none",
            "title": "그해 여름, 타임옴므",
            "type": "커버스토리",
            "desc": "쏟아지는 햇빛 사이로 유영하는 댄서 아이반 길고 나른한 실루엣에 강렬한 컬러를 더한 타임옴므의 캡슐 컬렉션"
        },{
            "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-10.png",
            "link_url": "#none",
            "title": "그해 여름, 타임옴므",
            "type": "커버스토리",
          "desc": "쏟아지는 햇빛 사이로 유영하는 댄서 아이반 길고 나른한 실루엣에 강렬한 컬러를 더한 타임옴므의 캡슐 컬렉션"
        }
    ],
    swiper : null, // 230221 상단배너 : 추가
    swiperLoop : true, // 230221 상단배너 : 추가
  }),
  created() {
    // 230221 상단배너 : 추가
    const me = this
    if(me.magazineList.length < 2) me.swiperLoop = false
  },
  methods: {
    newLine(str) {
      return String(str).replace(/(?:\r\n|\r|\n)/g, '</br>')
    },
    //  [퍼블수정]23.01.04 결함 - HUN3-2533
    renderBullet(idx, cls){
      return '<span class="swiper-pagination-bullet" index="' + (idx + 1) + '"></span>';
    },
    // 230221 상단배너 : method 추가 Start
    swiperInit(){
      const me = this
      me.swiper = me.$el.querySelector(".mgz-visual-swiper").swiper
    },
    stopPlayingVideo(){
      const me = this
      me.$el.querySelectorAll(".mgz-visual-swiper .video-player:not(.paused)").forEach(function(el){
        try{
          el.__vue__.pauseVideo()
        }catch(e){}
      })
    },
    playActiveVideo(){
      const me = this
      try{
        const el = me.$el.querySelector(".mgz-visual-swiper .swiper-slide-active .video-player.paused")
        if(el){
          el.__vue__.playVideo()
        }
      }catch(e){}
    },
    transitionEndFn(){
      const me = this
      if(me.swiper === null) return
      const idx = me.swiper.realIndex
      if(idx===0 || idx===me.magazineList.length - 1) me.swiper.slideToLoop(idx,0)
      setTimeout(()=>{
        me.playActiveVideo()
      },10)
    }
    // 230221 상단배너 : method 추가 End
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/magazine.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
// 퍼블 화면 확인 용 (개발 반영 X)
.cmp-tabs.tabs-actionText.active-fix .v-tabs .v-tab{
  &.v-tab--active{font-weight:400;}
  &:nth-child(2){font-weight:700 !important;}
}
// 퍼블 화면 확인 용 (개발 반영 X)
</style>
