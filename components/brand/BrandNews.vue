<template>
  <div class="brand-main-news">
    <div class="img-cnt">
      <div v-background-image="{url:data.image_url}"></div>
      <nuxt-link :to="{path:data.link_url}" class="link">뉴스 {{btnText}}</nuxt-link><!-- 220914 브랜드뉴스 : 링크 영역 추가 -->
    </div>
    <div class="info-cnt">
      <!-- eslint-disable -->
      <h3 class="tit" v-html="data.title"></h3>
      <p class="desc" v-html="data.desc"></p>
      <p class="date">{{data.date}}</p>
      <!-- eslint-disable -->
      <nuxt-link :to="data.link_url" class="view-btn"><span>{{btnText}}</span></nuxt-link><!-- 220914 브랜드뉴스 : btnText 추가 -->
    </div>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  props: {
    data: {
      type: Object,
      default: ()=>{ return {} }
    },
    btnText : { // 220914 브랜드뉴스 : 추가
      type: String,
      default : '전체보기',
    }
  },
  data: () => ({
    
  }),
  created(){
    
  },
  methods: {
    
  },
}
</script>