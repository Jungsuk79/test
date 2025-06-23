<template>
  <div class="contents contents-type2">
    <!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <ContentsLeftMenu :title="'마이페이지'" :left-data="menuList" :active="'/ko/HR/handsomeRepair'"></ContentsLeftMenu>
      
      <div class="my-page-r-box hansomecare-repairlinquiry">
        <div class="cmp-page-tit pb-0">
          <h2 class="tit">케어플러스 수선 조회</h2>
        </div>
        <div class="popup-btn text-right mt-9 mb-10">
          <nuxt-link class="cmp-font button" to="#n">케어플러스 수선 서비스 안내<i class="cmp-icon cmp-icon-12 i-next"></i></nuxt-link>
        </div>
        <!-- form 영역 -->
        <section class="formBox pt-24 mb-24">
          <v-form ref="form">
            <!-- [퍼블수정]23.01.06 -->
            <v-layout  align-start justify-space-between class="search-layout">
              <div>
                <h2 class="content-title cmp-font fnt-18">고객명</h2>
                <div class="mt-10">
                  <v-text-field outlined type="text" label="고객명 입력" clearable class="cmp-form-input"></v-text-field>
                </div>
              </div>
              <div>
                <h2 class="content-title cmp-font fnt-18">수선번호</h2>
                <div class="mt-10">
                <v-text-field v-model="model1" :rules="model1Rules" outlined type="text" label="수선번호 8자리 입력" clearable class="cmp-form-input"></v-text-field>
                </div>
              </div>
            </v-layout>
            <ul class="cmp-dotList mt-40">
              <li>오프라인 매장에서 받은 수선 상태 조회가 가능합니다.</li>
              <li>수선 완료된 상품은 진행상태 “완료” 표시 후 2~3일 후 매장에 도착합니다. 매장 픽업 고객님은 매장에 상품 도착여부를 유선 확인 후 방문해주세요.</li>
            </ul>
            <!-- //[퍼블수정]23.01.06 -->
            <!-- 조회하기 버튼 -->
            <div class="cmp-btnsArea text-center mt-34">
                <v-btn depressed large color="primary">조회하기</v-btn>
            </div>
            <!-- // 조회하기 버튼 -->
          </v-form>
        </section>
        <!-- // form 영역 -->
        <section>
          <div class="mb-24 mt-60"><!-- [퍼블수정]23.01.06 -->
            <h2 class="content-title cmp-font fnt-24 mb-20">수선조회결과</h2>
            <div class="info-border-box cnt-line size2">
              <!-- 수선결과 있을 때 -->
              <div class="box">
                <dl v-for="(item, i) in resultlist" :key="i" class="line">
                  <dt class="tit cmp-font fnt-16">{{ item.tit }}</dt>
                  <dd class="txt">{{ item.txt }}</dd>
                </dl>
              </div>
               <!-- // 수선결과 있을 때 -->
              <!-- 수선결과 없을 때 -->
              <!-- <CommonNoData msg="수선번호에 해당하는 수선 내역이 없습니다."></CommonNoData> -->
              <!-- //수선결과 없을 때 -->
            </div>

          </div>
          <!-- [퍼블수정]23.01.06 (내용 삭제)-->
        </section>
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
    // 요청사항
    model1: '',
    model1Rules: [
      // (v) => !!v || '수선번호 8자리를 확인해주세요.',
      (v) => {
          const replaceV = v.replace(/(\s*)/g, '') // 빈칸제거
          return replaceV.length === 8 || '수선번호 8자리를 확인해주세요.'
        }      
      ],
    resultlist:[
      {tit : '수선번호',txt: '22011234'},
      {tit : '고객명',txt: '김한섬'},
      {tit : '접수일자',txt: '2022.01.10'},
      {tit : '접수매장',txt: '한섬하우스 FX 청주 타임'},
      {tit : '상품명',txt: 'TM2C0QOT001WM1BK90'},
      {tit : '진행상태',txt: '완료'},
      {tit : '예정일자',txt: '2022.01.20'},
    ]

  }),
  created() {
    const me = this
    const json = require('~/static/json/mypage_left_menu.json')
    me.menuList = json.list
  },

}
</script>
<style lang="scss">
@import '@/assets/scss/pages/mypage.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
