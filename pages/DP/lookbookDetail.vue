<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->  
    <div class="content-wrap">
      <div class="brand-detail-top">
        <!--20221017 룩북상세 : 등록일 추가-->
        <div>
          <h2 class="tit">2022 S/S No.8</h2>
          <p class="brand-data">2022.04.22</p>
        </div>
        <!--//20221017 룩북상세 : 등록일 추가-->
        <div class="btn-cnt">
          <button class="list-btn"><span class="ir">목록</span></button>
          <button class="zzim-btn" :class="{on:zzim}" @click="zzim = !zzim"><span class="ir">찜하기</span></button>
        </div>
      </div>
      <div class="brand-lookbook-detail">
        <div class="cmp-swiper-box detail-images">
          <Swiper 
            :options="{
              pagination: {
                el: '.cmp-swiper-paginationBullet',
                clickable: true
              },
              navigation: {
                prevEl: '.image-swiper-prev',
                nextEl: '.image-swiper-next',
              },
              on : {
                realIndexChange : idxChange,
                // sliderFirstMove: pauseVideo, // 221117 룩북동영상 : 삭제
                // transitionEnd: playVideo // 221117 룩북동영상 : 삭제
              }
            }"
            class="lookbook-image-swiper"
          > 
            <!-- 220913 룩북 : 동영상 노출 대표이미지 영역 > 상품리스트 영역으로 변경 -->
            <SwiperSlide>
              <img src="https://img.thehandsome.com/md/publish/dummy/pc/brand-lookbook-detail-img0.png" alt="룩북 대표 이미지" class="img" />
            </SwiperSlide>
            <SwiperSlide v-for="(item,index) in detailList" :key="index">
              <!-- 동영상 -->
              <div v-if="item.video_url" class="video-cnt" role="button" tabindex="-1" @click="openDialogLookbookVideo(index)">
                <!-- 221117 룩북동영상 : 마크업 변경 -->
                <img :src="item.image_url" alt="룩북 상세 이미지" class="img" />
                <div class="play-ani-icon"><div class="line"><div></div><div></div><div></div></div><div class="ir">동영상 재생</div></div>
                <!-- // 221117 룩북동영상 : 마크업 변경 -->
              </div>
              <!-- 이미지 -->
              <img v-else :src="item.image_url" alt="룩북 상세 이미지" class="img" />
            </SwiperSlide>
            <!-- // 220913 룩북 : 동영상 노출 대표이미지 영역 > 상품리스트 영역으로 변경 -->
            <div slot="pagination" class="cmp-swiper-paginationBullet swiper-pagination"></div>   
          </Swiper>
          <div class="image-swiper-prev swiper-button-prev">
            <i class="cmp-icon-etc cmp-icon-60 i-prev">이전</i>
          </div>
          <div class="image-swiper-next swiper-button-next">
            <i class="cmp-icon-etc cmp-icon-60 i-next">다음</i>
          </div>
        </div>
        <div v-if="!prdShow" class="detail-info">
          <p class="desc">바디 라인에 맞게 부드럽고 유려하게 흐르는 실루엣의 탑으로 어깨를 살짝 덮는 캡 슬리브 디자인이 돋보입니다.</p>
          <!--20221017 룩북상세 : 제거
          <p class="desc2">
            17 pages<br>
            57 products<br>
            MAY 2022<br>
            Designed by SJSJ
          </p>-->
        </div>
        <div v-else class="detail-prd">
          <h3 class="tit">관련 상품 소개</h3>
          <Swiper
            :options="{
              slidesPerView: 3,
              slidesPerGroup : 3,
              spaceBetween: 48,
              navigation: {
                prevEl: '.prd-swiper-prev',
                nextEl: '.prd-swiper-next',
              },
            }"
            :class="{'swiper-no-swiping':detailList[prdSwiperIdx].list.length <= 3}"
          >
            <SwiperSlide v-for="(item,index) in detailList[prdSwiperIdx].list" :key="index">
              <nuxt-link :to="item.link_url" class="brand-review-unit">
                <div v-background-image="{url:item.image_url}"></div>
                <div class="review-cnt">
                  <!-- eslint-disable -->
                  <div class="review" v-html="item.review"></div>
                  <!-- eslint-disable -->
                  <div class="cnt">
                    <div class="name">{{item.product_name}}</div>
                    <!--20221017 룩북상세 : 평점 -> 금액으로 변경 -->
                    <div class="price">{{ item.sell_price | number }}</div>
                  </div>
                </div>
              </nuxt-link>
            </SwiperSlide>
            <template v-show="detailList[prdSwiperIdx].list.length > 3">
              <div slot="button-prev" class="prd-swiper-prev swiper-button-prev swiper-no-swiping"><span class="ir">이전</span></div>
              <div slot="button-next" class="prd-swiper-next swiper-button-next swiper-no-swiping"><span class="ir">다음</span></div>
            </template>
          </Swiper>
        </div>
      </div>

      <!-- 동영상 보기 팝업(221117 룩북동영상 : 추가) -->
      <v-dialog v-model="DialogLookbookVideo">
        <DialogLookbookVideo :popup-open="DialogLookbookVideo" @close="closeDialogLookbookVideo"/>
      </v-dialog>
      <!-- //동영상 보기 팝업 -->
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import DialogLookbookVideo from '~/pages/POPUP/DialogLookbookVideo.vue' // 221117 룩북동영상 : 추가
import EventBus from '~/api/common/EventBus'
// import VideoPlayer from '~/components/common/VideoPlayer' // 221117 룩북동영상 : 삭제

export default {
  components: {
    Swiper, 
    SwiperSlide,
    DialogLookbookVideo // 221117 룩북동영상 : 추가
    // VideoPlayer,// 221117 룩북동영상 : 삭제
  },
  layout: 'LayoutBasics',

  data: () => ({
    prdSwiperIdx : 0,
    prdShow : false,
    zzim : false,
    detailList : [ // 220913 룩북 : data 수정 (비디오 케이스 추가)
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-lookbook-detail-img1.png',
        video_url : 'https://img.thehandsome.com/md/publish/dummy/pc/lookbook-video.mp4',
        list : [
          {
            link_url : '#n',
            image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/001.jpg',
            product_name : '크리스탈 베스트1',
            review : '박시한 실루엣의 점퍼로 덕 다운이라 가볍고 따듯해요!  하이넥 디자인으로 오픈 시 와이드한 연출도 가능하네요.',
            sell_price: 355000,
            //  : '4.5'
          },
          {
            link_url : '#n',
            image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/002.jpg',
            product_name : '캐시미어 플레어 니트 드레스',
            review : '엉덩이 골반 부자라 니트 스커트는 트임이 없어 찬바람 안들어오게 막아주니 반코트에 입어도 따뜻해요!',
            sell_price: 255000,
            // rate : '4.0'
          },
          {
            link_url : '#n',
            image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/003.jpg',
            product_name : '세일러 니트 가디건',
            review : '귀여운 디자인에 도툼한 원단이라 기본 스타일로 편하게 자주 입어질 것 같아요! 코트안에 입기 좋아요.',
            sell_price: 35000,
            // rate : '4.0'
          },
          {
            link_url : '#n',
            image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/001.jpg',
            product_name : '크리스탈 베스트1',
            review : '박시한 실루엣의 점퍼로 덕 다운이라 가볍고 따듯해요!  하이넥 디자인으로 오픈 시 와이드한 연출도 가능하네요.',
            sell_price: 355000,
            //  : '4.5'
          },
          {
            link_url : '#n',
            image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/002.jpg',
            product_name : '캐시미어 플레어 니트 드레스',
            review : '엉덩이 골반 부자라 니트 스커트는 트임이 없어 찬바람 안들어오게 막아주니 반코트에 입어도 따뜻해요!',
            sell_price: 255000,
            // rate : '4.0'
          },
          {
            link_url : '#n',
            image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/003.jpg',
            product_name : '세일러 니트 가디건',
            review : '귀여운 디자인에 도툼한 원단이라 기본 스타일로 편하게 자주 입어질 것 같아요! 코트안에 입기 좋아요.',
            sell_price: 35000,
            // rate : '4.0'
          },
        ]
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-lookbook-detail-img2.jpg',
        list : [
          {
            link_url : '#n',
            image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/001.jpg',
            product_name : '크리스탈 베스트1',
            review : '박시한 실루엣의 점퍼로 덕 다운이라 가볍고 따듯해요!  하이넥 디자인으로 오픈 시 와이드한 연출도 가능하네요.',
            sell_price: 355000,
            //  : '4.5'
          },
          {
            link_url : '#n',
            image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/002.jpg',
            product_name : '캐시미어 플레어 니트 드레스',
            review : '엉덩이 골반 부자라 니트 스커트는 트임이 없어 찬바람 안들어오게 막아주니 반코트에 입어도 따뜻해요!',
            sell_price: 255000,
            // rate : '4.0'
          },
          {
            link_url : '#n',
            image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/003.jpg',
            product_name : '세일러 니트 가디건',
            review : '귀여운 디자인에 도툼한 원단이라 기본 스타일로 편하게 자주 입어질 것 같아요! 코트안에 입기 좋아요.',
            sell_price: 35000,
            // rate : '4.0'
          },
          {
            link_url : '#n',
            image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/001.jpg',
            product_name : '크리스탈 베스트1',
            review : '박시한 실루엣의 점퍼로 덕 다운이라 가볍고 따듯해요!  하이넥 디자인으로 오픈 시 와이드한 연출도 가능하네요.',
            sell_price: 355000,
            //  : '4.5'
          },
          {
            link_url : '#n',
            image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/002.jpg',
            product_name : '캐시미어 플레어 니트 드레스',
            review : '엉덩이 골반 부자라 니트 스커트는 트임이 없어 찬바람 안들어오게 막아주니 반코트에 입어도 따뜻해요!',
            sell_price: 255000,
            // rate : '4.0'
          },
          {
            link_url : '#n',
            image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/003.jpg',
            product_name : '세일러 니트 가디건',
            review : '귀여운 디자인에 도툼한 원단이라 기본 스타일로 편하게 자주 입어질 것 같아요! 코트안에 입기 좋아요.',
            sell_price: 35000,
            // rate : '4.0'
          },
        ]
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-lookbook-detail-img3.jpg',
        list : [
          {
            link_url : '#n',
            image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/001.jpg',
            product_name : '크리스탈 베스트1',
            review : '박시한 실루엣의 점퍼로 덕 다운이라 가볍고 따듯해요!  하이넥 디자인으로 오픈 시 와이드한 연출도 가능하네요.',
            sell_price: 355000,
            //  : '4.5'
          },
          {
            link_url : '#n',
            image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/002.jpg',
            product_name : '캐시미어 플레어 니트 드레스',
            review : '엉덩이 골반 부자라 니트 스커트는 트임이 없어 찬바람 안들어오게 막아주니 반코트에 입어도 따뜻해요!',
            sell_price: 255000,
            // rate : '4.0'
          },
          {
            link_url : '#n',
            image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/003.jpg',
            product_name : '세일러 니트 가디건',
            review : '귀여운 디자인에 도툼한 원단이라 기본 스타일로 편하게 자주 입어질 것 같아요! 코트안에 입기 좋아요.',
            sell_price: 35000,
            // rate : '4.0'
          },
          {
            link_url : '#n',
            image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/001.jpg',
            product_name : '크리스탈 베스트1',
            review : '박시한 실루엣의 점퍼로 덕 다운이라 가볍고 따듯해요!  하이넥 디자인으로 오픈 시 와이드한 연출도 가능하네요.',
            sell_price: 355000,
            //  : '4.5'
          },
          {
            link_url : '#n',
            image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/002.jpg',
            product_name : '캐시미어 플레어 니트 드레스',
            review : '엉덩이 골반 부자라 니트 스커트는 트임이 없어 찬바람 안들어오게 막아주니 반코트에 입어도 따뜻해요!',
            sell_price: 255000,
            // rate : '4.0'
          },
          {
            link_url : '#n',
            image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/003.jpg',
            product_name : '세일러 니트 가디건',
            review : '귀여운 디자인에 도툼한 원단이라 기본 스타일로 편하게 자주 입어질 것 같아요! 코트안에 입기 좋아요.',
            sell_price: 35000,
            // rate : '4.0'
          },
        ]
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-lookbook-detail-img4.jpg',
        list : [
          {
            link_url : '#n',
            image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/001.jpg',
            product_name : '크리스탈 베스트1',
            review : '박시한 실루엣의 점퍼로 덕 다운이라 가볍고 따듯해요!  하이넥 디자인으로 오픈 시 와이드한 연출도 가능하네요.',
            sell_price: 355000,
            //  : '4.5'
          },
          {
            link_url : '#n',
            image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/002.jpg',
            product_name : '캐시미어 플레어 니트 드레스',
            review : '엉덩이 골반 부자라 니트 스커트는 트임이 없어 찬바람 안들어오게 막아주니 반코트에 입어도 따뜻해요!',
            sell_price: 255000,
            // rate : '4.0'
          },
          {
            link_url : '#n',
            image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/003.jpg',
            product_name : '세일러 니트 가디건',
            review : '귀여운 디자인에 도툼한 원단이라 기본 스타일로 편하게 자주 입어질 것 같아요! 코트안에 입기 좋아요.',
            sell_price: 35000,
            // rate : '4.0'
          },
          {
            link_url : '#n',
            image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/001.jpg',
            product_name : '크리스탈 베스트1',
            review : '박시한 실루엣의 점퍼로 덕 다운이라 가볍고 따듯해요!  하이넥 디자인으로 오픈 시 와이드한 연출도 가능하네요.',
            sell_price: 355000,
            //  : '4.5'
          },
          {
            link_url : '#n',
            image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/002.jpg',
            product_name : '캐시미어 플레어 니트 드레스',
            review : '엉덩이 골반 부자라 니트 스커트는 트임이 없어 찬바람 안들어오게 막아주니 반코트에 입어도 따뜻해요!',
            sell_price: 255000,
            // rate : '4.0'
          },
          {
            link_url : '#n',
            image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/003.jpg',
            product_name : '세일러 니트 가디건',
            review : '귀여운 디자인에 도툼한 원단이라 기본 스타일로 편하게 자주 입어질 것 같아요! 코트안에 입기 좋아요.',
            sell_price: 35000,
            // rate : '4.0'
          },
        ]
      }
    ],
    DialogLookbookVideo : false, // 221117 룩북동영상 : 추가
  }),

  created(){
    
  },// created

  mounted(){
    EventBus.$emit("setHeader", {static: true, type: "brand", brand: "SJSJ", menu :"룩북"})
  },// mounted

  methods: {
    idxChange(){
      const me = this
      const swiper = me.$el.querySelector(".lookbook-image-swiper").swiper

      if(swiper.realIndex === 0) me.prdShow = false
      else me.prdShow = true
      
      if(swiper.realIndex - 1 < 0) me.prdSwiperIdx = 0
      else me.prdSwiperIdx = swiper.realIndex - 1
    },
    openDialogLookbookVideo(){ // 221117 룩북동영상 : 추가
      this.DialogLookbookVideo = true
    },
    closeDialogLookbookVideo(){ // 221117 룩북동영상 : 추가
      this.DialogLookbookVideo = false
    }
    /* playVideo(){ // // 221117 룩북동영상 : 삭제
      const me = this
      me.$nextTick(function(){
        const vp = me.$el.querySelector(".brand-lookbook-detail .swiper-slide-active .video-player")
        if(vp){
          vp.__vue__.playVideo()
        }
      })
    },
    pauseVideo(){ // // 221117 룩북동영상 : 삭제
      const me = this
      const vps = me.$el.querySelectorAll(".video-player")
      const len = vps.length
      let i, vp
      for(i=0; i<len; i++){
        vp = vps[i]
        vp.__vue__.pauseVideo()
      }
    }, */
  }// methods
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/brand.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
