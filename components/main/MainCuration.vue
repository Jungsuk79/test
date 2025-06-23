<template>
  <div class="main-curation">
    <div class="main-unit-title">{{data.title}}</div>
    <div class="main-unit-cont">
      <div class="mcr-wrap">
        <div v-for="col, cdx in list" :key="cdx" class="mcr-column">
          <div v-for="item, idx in col" :key="idx" class="mcr-item">
            <div class="mcr-image">
              <!-- 230216 큐레이션 : video 추가 -->
              <div v-if="item.video_url" :class="item.square?'mcr-video-square':'mcr-video-vertical'">
                <VideoPlayer
                  :path="item.video_url"
                  :poster="item.square?item.image_url2:item.image_url"
                  :play-on-scroll="true"
                  :mute="true"
                  :non-stop="true"
                  :hide-gui="true"
                ></VideoPlayer>
              </div>
              <!-- // 230216 큐레이션 : video 추가 -->
              <div v-else v-background-image="{url:item.square?item.image_url2:item.image_url}" :class="item.square?'mcr-img-square':'mcr-img-vertical'"></div><!-- 230216 큐레이션 : v-else 추가 -->
              <!-- [퍼블수정]링크 영역으로 수정 -->
              <nuxt-link class="mrc-desc" :to="{path:item.link_url}">
                <div>{{item.desc}}</div>
                <span :to="{path:item.link_url}"></span>
              </nuxt-link>
              <!-- //[퍼블수정]링크 영역으로 수정 -->
            </div>
            <!-- eslint-disable -->
            <!-- [퍼블수정]링크 영역으로 수정 -->
            <nuxt-link class="mcr-text" :to="{path:item.link_url}">
              <div v-html="item.title" class="mcr-title"></div>
              <div class="mcr-type">{{item.type}}</div>
            </nuxt-link>
            <!-- //[퍼블수정]링크 영역으로 수정 -->
            <!-- eslint-disable -->
          </div>
        </div>
      </div>
      <button class="mcr-link" @click="loadMore">추천콘텐츠 더 보기</button>
    </div>
  </div>
</template>

<script>
import VideoPlayer from '~/components/common/VideoPlayer' // 230216 큐레이션 : 추가
export default {
  components: {
    VideoPlayer, // 230216 큐레이션 : 추가
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data: () => ({
    list:[ [], [], [], [] ],
    count:0,
  }),
  created(){
    const me = this
    me.dataLoaded(me.data.list)
  },
  mounted(){
  },
  methods: {
    loadMore(){
      const me = this
      // //////////////////////////////////////////// 데이터 연동해서 리스트 추가로드
      me.dataLoaded(JSON.parse(JSON.stringify(me.data.list))) // 230216 큐레이션 : main.json > MainCuration > list에 video_url 항목 추가
      // //////////////////////////////////////////// 데이터 연동해서 리스트 추가로드
    },
    dataLoaded(list){
      const me = this
      let n, square
      list.forEach(function(item){
        n = me.count % 20
        if(n < 4){
          item.square = (n % 2 === 1)
          me.list[n].push(item)
        }else{
          square = (n % 20) < 10
          switch(n % 4){
          case 0:
            item.square = square
            me.list[1].push(item)
            break
          case 1:
            item.square = square
            me.list[3].push(item)
            break
          case 2:
            item.square = ! square
            me.list[0].push(item)
            break
          case 3:
            item.square = ! square
            me.list[2].push(item)
            break
          }
        }
        me.count++
      })
    }
  },
}
</script>

<style lang="scss" scoped></style>
