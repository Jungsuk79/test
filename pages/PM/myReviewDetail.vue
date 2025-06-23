<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <CommonContentsLeftMenu :title="'마이페이지'" :url="'/json/mypage_left_menu.json'" :active="'/ko/PM/myReviewListPossible'"></CommonContentsLeftMenu>
      <div class="my-page-r-box content-review"><!-- 마이페이지 -->
        <div class="cmp-page-tit">
          <h2 class="tit">상품평 상세</h2>
        </div>
        <ProductReviewMedia v-for="(item, index) in unitReview" :key="index" :review-data="item"></ProductReviewMedia>

        <div class="btnsArea text-right">
            <button class="cmp-font fnt-16 button">수정</button>
            <button class="cmp-font fnt-16 button">삭제</button>
        </div>
        
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
      unitReview : [
        {
          txtSamll : "도움이 되었어요 적립 100M",
          txtTop : "적립된 마일리지 775M",
          data : "2022.02.06",
          userInfo : ["168cm", "58kg", "통통한 체형", "COCOA", "M", "롯데전주타임"], // 옵션
          attachFiles: [ // 첨부파일 (이미지 or 영상)
            {
              path: "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
              poster: "https://img.thehandsome.com/md/publish/dummy/pc/video.jpg",
              youtube: false,
              loop: true,
              time: 0, // 총 영상시간
            },
            {
              image: "https://img.thehandsome.com/md/publish/dummy/pc/001.jpg"
            },
            {
              image: "https://img.thehandsome.com/md/publish/dummy/pc/002.jpg"
            },
            {
              path: "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
              poster: "https://img.thehandsome.com/md/publish/dummy/pc/video.jpg",
              youtube: false,
              loop: true,
              time: 0, // 총 영상시간
            },
            {
              image: "https://img.thehandsome.com/md/publish/dummy/pc/003.jpg"
            },
            {
              image: "https://img.thehandsome.com/md/publish/dummy/pc/004.jpg"
            },
          ],
          attachFilesSwiper: false, // 첨부파일 swiper여부
          reviewOption: { // 옵션 리뷰
            size: "적당한",
            design: "화면과 같은",
            color: "밝은",
          },
          reviewScoreStar: 3,
          reviewTxt : "정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전 강추합니다. 이번 가을 입을 거 고민이 사라졌어요. 따뜻하고 무엇보다 도톰한 재질이 맘에 쏙 듭니다.", // 리뷰내용
        },
      ]
    }
  },
  created() {
  },
  methods: {
    reviewDetailOpen(){
      console.log('리뷰 상세 팝업 오픈')
    },
  },
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/detail.scss'; //페이지 전용 css
</style>