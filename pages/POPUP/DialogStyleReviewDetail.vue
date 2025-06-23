<template>
  <DialogBasic class="popup-styleReviewDetail" header-title="스타일리뷰 상세보기" :width="380" @hide="closeDialog">
    <template #body>
      <div class="inner sls-detail">
        <div class="stylelive-block stylelive-post">

          <div class="sl-post-profile influencer">
            <nuxt-link :to="{}" class="slpp-left">
              <!-- [HSTEST-1675] 프로필 이미지 없을경우 추가 -->
              <!-- url: '프로필 이미지영역' || '프로필 이미지 없을시 노출 이미지' -->
              <div class="slpp-img"><div v-background-image="{url:'https://img.thehandsome.com/md/publish/dummy/pc/detail-profile-img1.png' || '/images/common/profile-no-40.svg'}"></div></div>
              <div class="slpp-text">
                <div class="slpp-id">woojoorxx</div>
                <div class="slpp-type">스라셀럽</div>
              </div>
            </nuxt-link>
          </div>

          <div class="cmp-swiper-box">
            <Swiper 
              :options="{
                pagination: {
                  el: '.sls-detail .cmp-swiper-paginationBullet',
                  clickable: false,
                  type: 'bullets'
                },
                on: {
                  sliderFirstMove: stopPlayingVideo,
                  transitionEnd: playActiveVideo,
                },
                navigation: {
                  prevEl: '.swiper-button-prev',
                  nextEl: '.swiper-button-next',
                },
                observer: true,
                observeParents: true
              }"
              :class="{'swiper-no-swiping':slideList.length <= 1}"
              class="sl-post-image-swiper"
            >
              <SwiperSlide v-for="(item,index) in slideList" :key="index" :class="{'sl-blur':item.type === 'sl_blur'}">
                <!-- 이미지 -->
                <div v-if="item.type ==='image'">
                  <div v-background-image="{url:item.image_url, nobg: true}"></div>
                </div>
                <!-- 이미지 -->
                <!-- 블러 운영 정책 위반으로 삭제된 콘텐츠 -->
                <!-- *모바일 스타일라이브에서 삭제된 것이나 제제 받은 케이스는 PC 연동을 안함 -->
                <!-- <div v-if="item.type === 'sl_blur'">
                  <div v-background-image="{url:item.image_url}"></div>
                  <div class="sl-img-deleted">
                    <span class="sl-img-title">운영 정책 위반으로 삭제된 콘텐츠</span>
                    <span class="sl-img-info">이 사진은 다른 이용자에게 불편함을 줄 수 있어<br>운영 정책에 따라 삭제되었습니다.</span>
                  </div>
                </div> -->
                <!-- 블러 -->
                <!-- 비디오 -->
                <div v-if="item.type==='video'">
                  <VideoPlayer
                    :path="item.video_url"
                    :poster="item.image_url"
                    :auto-play="false"
                    :mute="true"
                    :video-ratio="100"
                  ></VideoPlayer>
                </div>
                <!-- 비디오 -->
              </SwiperSlide>
              <div v-if="slideList.length > 1" slot="pagination" class="cmp-swiper-paginationBullet swiper-pagination"></div>
            </Swiper>
            <template v-if="slideList.length > 1">
              <div class="swiper-button-prev swiper-no-swiping"><i v-cmp-icon="{size:24, name:'prev', invert:1}">이전</i></div>
              <div class="swiper-button-next swiper-no-swiping"><i v-cmp-icon="{size:24, name:'next', invert:1}">다음</i></div>
            </template>
          </div>
          <!-- 이미지가 한건이면서 운영 정책 위반으로 삭제된 콘텐츠인 경우 -->
          <!-- *모바일 스타일라이브에서 삭제된 것이나 제제 받은 케이스는 PC 연동을 안함 -->
          <!-- <div class="sl-deleted-area">
            <div v-background-image="{url:'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img1.png'}"></div>
            <div class="sl-img-deleted">
              <span class="sl-img-title">운영 정책 위반으로 삭제된 콘텐츠</span>
              <span class="sl-img-info">이 사진은 다른 이용자에게 불편함을 줄 수 있어<br>운영 정책에 따라 삭제되었습니다.</span>
            </div>
          </div> -->
          <!--// 이미지가 한건이면서 운영 정책 위반으로 삭제된 콘텐츠인 경우 -->
          <div class="sl-post-desc">
            <Swiper
              :options="{
                spaceBetween: 1,
                observer: true,
                observeParents: true
              }"
              class="sl-post-prod-swiper"
            >
              <SwiperSlide v-for="(item, idx) in prodSwiperList" :key="idx">
                <div v-background-image="{url: item.imageUrl}"></div>
                <div class="slprod-text">
                  <div class="slprod-brand">{{item.brand}}</div>
                  <div class="slprod-name">{{item.name}}</div>
                  <div class="slprod-price">{{item.price | number}}</div>
                </div>
                <nuxt-link :to="{}" class="link-block"></nuxt-link>
                <button class="zzim-btn" :class="{on: item.zzim}" @click="item.zzim = true"></button>
              </SwiperSlide>
            </Swiper>

            <div class="slpd-text">
              <div class="slpd-text-area">
                우연히 입어보고 편하고 핏이 이뻐서 내옷이다 싶어서ㅎㅎ밝은블루랑 고민하다가 원단이 얇고 더 시원할거 같아서 어두운색으로 샀어요~원단이 같은거였다면 밝은블루를 선택했을거예요.밝은색은 더 찰랑거리는느낌의 원단이예요~안감이 있지만 많이 더울거 같지는 않아요~ 
              </div>
              <div class="slpd-tag">
                <span>랑방</span><span>랑방자켓</span><span>아우터</span>
              </div>
            </div>

          </div>
          <div class="sp-bag">
            <i class="cmp-icon-etc cmp-icon-24 i-shoppingbag"></i>
            <span>5</span>
          </div>
        </div>

        <!-- 운영 정책 위반으로 삭제된 콘텐츠 -->
        <!-- *모바일 스타일라이브에서 삭제된 것이나 제제 받은 케이스는 PC 연동을 안함 -->
        <!-- <div class="sl-deleted-post">
          <span class="sl-deleted-title">
            운영 정책 위반으로 삭제된 콘텐츠
          </span>
          <span class="sl-deleted-info">
            건전한 서비스 환경 제공에 악영향을<br>
            끼치거나 다른 이용자에게 불편을끼칠 우려가 있는 경우<br> 
            관리자 판단하에 삭제할 수 있으며,<br>
            특정 고객의 서비스 이용을 제한할 수 있습니다.
          </span>
        </div> -->
        <!--// 운영 정책 위반으로 삭제된 콘텐츠 -->
      </div>
    </template>
  </DialogBasic>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'
import VideoPlayer from '~/components/common/VideoPlayer'

export default {
  components: {
    Swiper, SwiperSlide,
    DialogBasic,
    VideoPlayer,
  },
  data: () => ({
    DialogBasic: false,
    moreText: false,
    showText: false,
    showTag: false,
    following: true,
    reaction: -1,
    more_view : false,
    reactionCnt: 0,
    slideList: [
      {
        image_url: "https://img.thehandsome.com/md/publish/dummy/pc/system-new-prd1.png",
        video_url: "",
        type: "image"
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img1.png',
        video_url: "",
        type: "image"
      },
      {
        image_url: "https://img.thehandsome.com/md/publish/dummy/pc/video_banner.png",
        video_url: "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
        type: "video"
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/system-new-prd0.png',
        video_url: "",
        type: "image"
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/system-new-prd2.png',
        video_url: "",
        type: "image"
      },
    ]
    ,
    prodSwiperList: [
      {
        brand: 'FOURM STUDIO',
        name: '스티치 레더 스커트',
        imageUrl: 'https://img.thehandsome.com/md/publish/dummy/pc/001.jpg',
        price: 284000,
        zzim: true,
      },
      {
        brand: 'FOURM STUDIO',
        name: '스티치 레더 스커트',
        imageUrl: 'https://img.thehandsome.com/md/publish/dummy/pc/002.jpg',
        price: 284000,
        zzim: false,
      },
      {
        brand: 'FOURM STUDIO',
        name: '스티치 레더 스커트',
        imageUrl: 'https://img.thehandsome.com/md/publish/dummy/pc/003.jpg',
        price: 284000,
        zzim: true,
      },
      {
        brand: 'FOURM STUDIO',
        name: '스티치 레더 스커트',
        imageUrl: 'https://img.thehandsome.com/md/publish/dummy/pc/004.jpg',
        price: 284000,
        zzim: false,
      }
    ]
  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
    showMoreText(){
      const me = this
      me.showTag = true
      me.moreText = false
    },
    stopPlayingVideo(){
      const me = this
      me.$el.querySelectorAll(".video-player:not(.paused)").forEach(function(el){
        try{
          el.__vue__.pauseVideo()
        }catch(e){}
      })
    },
    playActiveVideo(){
      const me = this
      try{
        const el = me.$el.querySelector(".sl-post-image-swiper .swiper-slide-active .video-player.paused")
        if(el){
          el.__vue__.playVideo()
        }
      }catch(e){}
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/theplusmember.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>
