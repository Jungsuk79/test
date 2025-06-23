<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <ContentsLeftMenu :title="'마이페이지'" :left-data="menuList"></ContentsLeftMenu>
      <div class="my-page-r-box">
        <div class="cmp-page-tit">
          <h2 class="tit">배송지 관리</h2>
        </div>

        <!-- 상단공지 -->
        <div class="cmp-info info-type1">
          <p class="cmp-font">최대 10개까지 등록할 수 있습니다.</p>
        </div>
        <!-- //상단공지 -->

        <div class="address-manage">
          <v-btn outlined color="primary" width="160">
            배송지 등록
          </v-btn>

          <!--배송지 리스트--> 
          <div class="contents-line-box">
            <div class="cmp-sub-tit small">
              <h4 class="tit">배송지1<p class="cmp-label-line c-blue">기본배송지</p></h4>
              <div class="button-box">
                <button class="cmp-font fnt-16 button">수정</button>
              </div>
            </div>

            <p class="cmp-font">홍길동 / 010-1234-5678</p>
            <p class="cmp-font mt-6">[06577] 서울 강남구 언주로 170길 28 (강남구, 스페이스데코빌딩) 3층 201호 </p>
            <p class="cmp-font mt-6">
              부재 시 문 앞에 놓아주세요
              <br>공동현관 출입번호(****)
            </p>
          </div>

          <div class="contents-line-box">
            <div class="cmp-sub-tit small">
              <h4 class="tit">배송지2</h4>
              <div class="button-box">
                <button class="cmp-font fnt-16 button">수정</button>
                <button class="cmp-font fnt-16 button">삭제</button>
              </div>
            </div>
            
            <p class="cmp-font">홍길동 / 010-1234-5678</p>
            <p class="cmp-font mt-6">[06577] 서울 강남구 언주로 170길 28 (강남구, 스페이스데코빌딩) 3층 201호 </p>
            <p class="cmp-font mt-6">
              부재 시 문 앞에 놓아주세요
              <br>자유 출입 가능
            </p>
            <v-layout justify-end align-center class="mt-6">
            <button class="cmp-font fnt-13 button"><span class="line">기본배송지로 변경</span></button>
            </v-layout>
          </div>

          <div class="contents-line-box">
            <div class="cmp-sub-tit small">
              <h4 class="tit">배송지3</h4>
              <div class="button-box">
                <button class="cmp-font fnt-16 button">수정</button>
                <button class="cmp-font fnt-16 button">삭제</button>
              </div>
            </div>
            
            <p class="cmp-font">홍길동 / 010-1234-5678</p>
            <p class="cmp-font mt-6">[06577] 서울 강남구 언주로 170길 28 (강남구, 스페이스데코빌딩) 3층 201호 </p>
            <p class="cmp-font mt-6">
              부재 시 문 앞에 놓아주세요
              <br>공동현관 출입번호(****)
            </p>
            <v-layout justify-end align-center class="mt-6">
            <button class="cmp-font fnt-13 button"><span class="line">기본배송지로 변경</span></button>
            </v-layout>
          </div>
          <!--//배송지 리스트--> 

          <!--등록된 페이지 없는 경우
          <CommonNoData msg="등록된 배송지가 없습니다."/>
          -->
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
  data() {
    return {
    
    }
  },
  created() {
    const me = this
    const json = require('~/static/json/mypage_left_menu.json')
    me.menuList = json.list
  },
  methods: {
    
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/order.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>