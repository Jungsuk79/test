<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <ContentsLeftMenu :title="'마이페이지'" :left-data="menuList"></ContentsLeftMenu>
      <div class="my-page-r-box contents-membership">
         <div class="cmp-page-tit line"><h2 class="tit">한섬 멤버십 통합</h2></div>

          <div class="membership-info">
            <ul class="cmp-dotList">
              <li>한섬 멤버십은 한섬 브랜드 온라인/오프라인 멤버십입니다.</li>
              <li>한섬 멤버십은 더한섬닷컴에서 통합 하실 수 있습니다.</li>
              <li>통합 시, 더한섬닷컴 혜택은 그대로 유지되며 더한섬닷컴 한섬 멤버십 마일리지를 사용하실 수 있습니다.</li>
            </ul>
          </div>

          <p class="cmp-font fnt-18">채널별 가입한 한섬 멤버십 코드가 나타납니다.</p>
          <div class="info-border-box cnt-line pw-0">
            <div v-for="n in 2" :key="n" class="box">
              <dl class="line">
                <dt class="tit">한섬 멤버십 코드</dt>
                <dd class="txt">23161765</dd>
              </dl>
              <dl class="line">
                <dt class="tit">채널</dt>
                <dd class="txt">더한섬닷컴</dd>
              </dl>
              <dl class="line">
                <dt class="tit">매장</dt>
                <dd class="txt">더한섬닷컴 시스템</dd>
              </dl>
              <dl class="line">
                <dt class="tit">마일리지</dt>
                <dd class="txt">0</dd>
              </dl>
            </div>
          </div>

          <div class="membership-bottom">
            <p class="txt">한섬 멤버십 관련 문의 : 1800-5700 <span>유료</span></p>
             <v-btn
              large
              block
              color="primary">
              통합하기
            </v-btn>
          </div>


      </div>
    </div>
  </div>
</template>

<script>
import ContentsLeftMenu from '~/components/common/ContentsLeftMenu'
export default {
  components: {
    ContentsLeftMenu
  },
  layout: 'LayoutBasics',
  data: () => ({
    
  }),
  methods: {

  },
  created() {
    const me = this
    const json = require('~/static/json/mypage_left_menu.json')
    me.menuList = json.list
  },
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/member.scss'; 
</style>
