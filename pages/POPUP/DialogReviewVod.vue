<template>
  <DialogBasic
   class="popup-reviewMedia" 
    header-title="포토&동영상 상품평" 
    :width="880"
    @hide="closeDialog">
    <template #body>
      <ProductReviewMedia v-for="(item, index) in unitReview" :key="index" :review-data="item"></ProductReviewMedia>
    </template>
  </DialogBasic>
</template>
<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'
export default {
  components: {
    DialogBasic,
  },
  data: () => ({
    DialogBasic: false, // 팝업
    unitReview : [
      {
        data : "2022.02.06",
        userInfo : ["COCOA", "M", "롯데전주타임"], // 옵션
        spec : ['168cm', '58kg', '통통한 체형'],
        selectImg: true,
        select : 0,
        attachFiles: [ // 첨부파일 (이미지 or 영상)
          {
            path: "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
            poster: "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-02.png",
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
            image: "https://img.thehandsome.com/md/publish/dummy/pc/003.jpg"
          },
          {
            image: "https://img.thehandsome.com/md/publish/dummy/pc/004.jpg"
          },
          {
            path: "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
            poster: "https://img.thehandsome.com/md/publish/dummy/pc/video.jpg",
            youtube: false,
            loop: true,
            time: 0, // 총 영상시간
          },
        ],
        attachFilesSwiper: false, // 첨부파일 swiper여부
        reviewOption: { // 옵션 리뷰
          size: "적당한",
          design: "화면과 같은",
          color: "밝은",
        },
        reviewScoreStar: 3,
        reviewTxt : "정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추입니다. 정말 예쁘네요. 올드함과 클래식함을 왔다갔다? 할꺼라 생각했는데 클래식하고 완전강추 정말 예쁘네요.", // 리뷰내용
      },
    ]
  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss">
</style>
