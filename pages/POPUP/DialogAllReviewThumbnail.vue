<template>
  <DialogBasic
   class="popup-all-reivew-thumbnail" 
    :header-title="popHeaderTitle"
    :width="880"
    @hide="closeDialog">
    <template #body>
      <div class="inner">
        <div class="thumbnail-box">
          <div v-for="(item,index) in reviewList" :key="index" class="thumbnail-list">
            <div role="button" tabindex="0" class="thumbnail-btn" @click="reviewDetailOpen">
              <div class="btn-cnt" :class="{on:index===viewIdx}">
                <v-img v-if="item.type==='image'" :src="item.image" alt="리뷰 썸네일" />
                <div v-if="item.type==='video'" class="video-cnt">
                  <VideoPlayer :path="item.video" :poster="item.image" :mute="true"></VideoPlayer>
                </div>
                <div v-if="item.type==='video'" class="play-ico-cnt">
                  <i v-cmp-icon="{name:'play',invert:1}" ></i>
                </div>
                <div v-if="item.image_length > 1" class="size">{{item.image_length}}</div>
              </div>
            </div>

            <div class="cmp-labels">
              <span class="label black c-white">BEST</span>
            </div>

          </div>
        </div>
      </div>
    </template>
  </DialogBasic>
</template>
<script>
import VideoPlayer from '~/components/common/VideoPlayer'
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  components: { 
    DialogBasic, 
    VideoPlayer 
  },
  props: {
    viewIdx: {
      type: Number,
      default:null,
    },
  },
  data: () => ({
    // 팝업
    DialogBasic: false,
    popHeaderTitle : null,
    // viewIdx : null,
    reviewList : [
      {
        type : 'image',
        image_length : 1,
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img1.png',
      },
      {
        type : 'video',
        image_length : 3,
        video : "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
        image : "https://img.thehandsome.com/md/publish/dummy/pc/video.webp",
      },
      {
        type : 'image',
        image_length : 1,
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img3.png',
      },
      {
        type : 'image',
        image_length : 1,
        image : 'https://img.thehandsome.com/md/publish/dummy/attach-file-img1.png',
      },
      {
        type : 'image',
        image_length : 1,
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img3.png',
      },
      {
        type : 'image',
        image_length : 5,
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img2.png',
      },
      {
        type : 'image',
        image_length : 1,
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img1.png',
      },
      {
        type : 'image',
        image_length : 1,
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img2.png',
      },
      {
        type : 'image',
        image_length : 2,
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img3.png',
      },
      {
        type : 'video',
        image_length : 1,
        video : "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
        image : "https://img.thehandsome.com/md/publish/dummy/pc/video.webp",
      },
      {
        type : 'image',
        image_length : 1,
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img1.png',
      },
      {
        type : 'image',
        image_length : 1,
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img3.png',
      },
      {
        type : 'image',
        image_length : 1,
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img4.png',
      },
      {
        type : 'image',
        image_length : 1,
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img3.png',
      },
      {
        type : 'image',
        image_length : 5,
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img2.png',
      },
      {
        type : 'image',
        image_length : 1,
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img1.png',
      },
      {
        type : 'image',
        image_length : 1,
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img2.png',
      },
      {
        type : 'image',
        image_length : 2,
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img3.png',
      },
      {
        type : 'image',
        image_length : 1,
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img3.png',
      },
      {
        type : 'image',
        image_length : 5,
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img2.png',
      },
      {
        type : 'image',
        image_length : 1,
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img1.png',
      },
      {
        type : 'image',
        image_length : 1,
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img2.png',
      },
      {
        type : 'image',
        image_length : 2,
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/detail-review-img3.png',
      },
    ]
  }),
  created(){
    const me = this
    if(me.viewIdx!==null) me.popHeaderTitle = '포토&amp;동영상 모아보기 <strong>'+(me.viewIdx+1)+'</strong>/'+me.reviewList.length
    else me.popHeaderTitle = '포토&amp;동영상 모아보기 '+me.reviewList.length
  },
  methods: {
    closeDialog() {
      this.$emit('close')
    },
    reviewDetailOpen(){
      console.log('리뷰 상세 팝업 오픈')
    },
  },
}
</script>

<style lang="scss" scoped></style>
