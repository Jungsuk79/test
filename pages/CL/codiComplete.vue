<template>
  <div class="contents contents-type2">
    <div class="content-wrap">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'마이페이지'" :url="'/json/cl_left_menu.json'" :active="'/ko/CL/codiBook'" />
        <div class="contents-r-layout">
          <div class="codibook-comp-wrap">
            <div class="cmp-page-tit">
              <h2 class="tit">코디하기</h2>
            </div>
            
            <div class="codi-complete">
              <div class="codi-comp-msg">코디를 완성하였습니다.</div>

              <!-- 코디북 리스트 -->
              <ul class="codibook-list">
                <li v-for="item, idx in codiList" :key="idx" class="codibook-list-item">
                  <div class="codi-title-area">
                    <div class="codi-title">{{item.title}}</div>
                    <div class="codi-date">{{item.date}}</div>
                  </div>
                  <div v-background-image="{url:item.image_url}" class="codibook-image"></div>
                  <div class="codi-btn-area">
                    <nuxt-link :to="{}" class="codi-btn-share">스타일라이브 토크로 공유하기</nuxt-link>
                    <nuxt-link :to="'codiBook'" class="codi-btn-list">코디북 보기</nuxt-link>
                  </div>
                </li>
              </ul>
              <!-- 코디북 리스트 -->
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  layout: 'LayoutBasics',
  data: () => ({
    codiList: [],
  }),
  created() {
  },
  mounted(){
    const me = this
    axios.get("/json/codibook.json")
    .then(function(res){
      if(res.data.list.length > 1){
        res.data.list.length = 1
      }

      // //////////////////////////////////////////////////////////
      // ////////////////// 이미지 저장 테스트 /////////////////////
      // //////////////////////////////////////////////////////////
      const img = sessionStorage.getItem("codiResultImage")
      if(img){
        res.data.list[0].image_url = img
      }
      // //////////////////////////////////////////////////////////
      // ////////////////// 이미지 저장 테스트 /////////////////////
      // //////////////////////////////////////////////////////////

      me.codiList = res.data.list
    })
    .catch(function(e){
      console.log(e)
    })
  },
  methods:{
    backCB(){
      location.href = "codiBook"
    }
  }// methods
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/closet.scss';
</style>
