<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <!-- [퍼블수정]23.02.17 menuList 추가 -->
      <CommonContentsLeftMenu :title="'마이페이지'" :left-data="menuList"></CommonContentsLeftMenu>
      <div class="my-page-r-box contents-mysize"><!-- 마이페이지 -->
        <div class="cmp-page-tit">
          <h2 class="tit">나의 사이즈</h2>
        </div>
        <div class="info-box">
          <h2 class="tit">고객님의 신체 정보입니다.</h2>
          <p class="txt">설문을 바탕으로 상품상세 페이지에서 고객님께 꼭 맞는 사이즈를 추천해 드립니다.</p>
        </div>
        <div class="product-row-table">
          <table>
            <caption>상품리스트</caption>
            <colgroup>
              <col style="width:110px;"/>
              <col style="width:auto;"/>
            </colgroup>
            <thead>
              <tr>
                <th>카테고리</th>
                <th>값</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td class="td-l pw-0">성별</td>
                  <td class="td-l pw-20">{{ mysizedata.sex }} </td>
              </tr>
              <tr>
                  <td class="td-l pw-0">생년월일</td>
                  <td class="td-l pw-20">{{ mysizedata.birth }}</td>
              </tr>
              <tr>
                  <td class="td-l pw-0">키</td>
                  <td class="td-l pw-20">{{ mysizedata.tall }} cm</td>
              </tr>
              <tr>
                  <td class="td-l pw-0">몸무게</td>
                  <td class="td-l pw-20">{{ mysizedata.weight }} kg</td>
              </tr>
            </tbody>
          </table>
        </div>

        <v-col cols="12" class="text-center mt-35">
          <v-btn large color="primary">다시 설문하기</v-btn>
        </v-col>
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
      page: 1,
      mysizedata: {
          sex: '여성',
          birth: '1995.11.05',
          tall: '180',
          weight: '60'
      }
    }
  },
  //   [퍼블수정]23.02.17 menuList 추가
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
@import '@/assets/scss/pages/mypage.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>