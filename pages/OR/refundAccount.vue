<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <ContentsLeftMenu :title="'마이페이지'" :left-data="menuList" :active="'/ko/OR/refundAccountRegister'"></ContentsLeftMenu>
      <div class="my-page-r-box content-refund">
        <div class="cmp-page-tit line">
          <h2 class="tit">환불 계좌 관리</h2>
        </div>

        <div class="cmp-sub-tit small">
          <h3 class="tit">환불 계좌 정보</h3>
        </div>

        <div class="info-border-box pw-0">
          <div class="box">
            <dl class="line">
              <dt class="tit">예금주</dt>
              <dd class="txt">더한섬</dd>
            </dl>
            <dl class="line">
              <dt class="tit">은행</dt>
              <dd class="txt">신한은행</dd>
            </dl>
            <dl class="line">
              <dt class="tit">계좌 번호</dt>
              <dd class="txt">110*****0013</dd>
            </dl>
          </div>
        </div>

        <ul class="cmp-dotList">
          <li>고객님 본인 계좌만 등록 가능하며, 타인 계좌 등록으로 환불이 된 경우 이에 대한 책임을 지지 않습니다.</li>
          <li>계좌의 폐기 또는 중지로 인해 환불이 지연될 수 있으니 고객님의 주거래 은행계좌를 등록 부탁 드립니다.</li>
          <li>등록이 불가 하신 경우 고객센터로 문의해 주세요.</li>

          <!-- [241126] 개인정보수집/이용동의개선 -->
          <li>고객님은 개인정보 수집에 대해 동의를 거부할 권리가 있으며,동의 거부 시 계좌를 통한 환불 처리가 불가합니다.</li>
        </ul>

        <div class="cmp-btnsArea center-area">
          <v-btn large outlined color="primary">삭제하기</v-btn>
          <v-btn large color="primary">변경하기</v-btn>
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
      selectErrorTest: false,
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