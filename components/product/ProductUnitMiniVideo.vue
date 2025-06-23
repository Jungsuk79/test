<template>
  <li class="product-unit product-unit-mini">
    <div class="product-unit-wrap">
      <!-- 이미지 -->
      <div class="product-image">
        <div v-if="!data.video_url" v-background-image="{'url' : data.image_url}" class="prod-image"></div>
        <VideoPlayer 
          v-if="data.video_url" 
          :path="data.video_url"
          :poster="data.image_url"
          :auto-play="true"
          :loop="true"
          :play-on-scroll="false"
          :mute="true" 
          :controls="false"
          :hideGui="true"
          class="prod-image"
        />
        <a class="link-block" @click="gotoLink('')"></a>
      </div>
      <!-- 이미지 -->
      <!-- 텍스트 -->
      <div class="product-info">
        <div v-if="data.magazine_title" class="brand-name">{{data.magazine_title}}</div>
        <div class="product-name">{{data.title_name}}</div>
        <a class="link-block" @click="gotoLink('')"></a>
      </div>
      <!-- 텍스트 -->
    </div>
  </li>
</template>

<script>
import VideoPlayer from '~/components/common/VideoPlayer'
export default {
  components: {
    VideoPlayer,
  },
  props: {
    unitData: {
      type: Object,
      default: ()=>{ return null },
    },
    colorchip: {
      type: Boolean,
      default: ()=>{ return false },
    }
  },
  data: () => ({
    data: null,
  }),
  watch: {
    unitData(){
      const me = this
      me.initData()
    }
  },
  created() {
      const me = this
      me.initData()
  },
  mounted() {
  },
  methods: {
    initData(){
      const me = this

      // 예외처리
      const d = me.unitData
      if(d.images === undefined){
        if(d.image_url === undefined){
          d.images = [[]]
        }else{
          d.images = [[d.image_url]]
        }
      }
      if(d.links === undefined){
        if(d.link_url === undefined){
          d.links = []
        }else{
          d.links = [d.link_url]
        }
      }
      if(d.zzim !== true){
        d.zzim = false
      }
      // 예외처리

      me.data = me.unitData
    },
    gotoLink(size){
      const me = this
      console.log("상품 링크 이동하기", "url: " + me.data.link_url)
    },

    zzim(){
      const me = this
      me.data.zzim = ! me.data.zzim
      me.$forceUpdate()
    }
  },
}
</script>

<style lang="scss" scoped></style>
