<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <ContentsLeftMenu :title="'마이페이지'" :left-data="menuList" :active="'/ko/ME/withdrawal'"></ContentsLeftMenu>
      <div class="my-page-r-box personalInfo-content">
        <div class="cmp-page-tit line">
          <h2 class="tit">회원 탈퇴</h2>

          <div class="cmp-page-txt">
            <p class="cmp-font fnt-20">회원탈퇴 안내</p>
            <p class="cmp-font fnt-16 c-red mt-14">회원 탈퇴 전 아래 사항을 반드시 숙지해 주시기 바랍니다.</p>
          </div>
        </div>

        <div class="personal-info line-bottom">
          <!--간편회원 CASE -->
          <ul v-if="simplicity" class="cmp-dotList">
            <li v-for="(item,index) in withdrawInfo1" :key="index" v-html="newLine(item.text)"></li>
          </ul>

          <!--한섬회원 CASE -->
          <ul v-else class="cmp-dotList">
            <li v-for="(item,index) in withdrawInfo" :key="index" v-html="newLine(item.text)"></li>
          </ul>
        </div>

        <div class="cmp-bottom-btns">
          <v-btn large color="primary" @click.prevent="testBtn">탈퇴 사유 선택</v-btn>
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
     simplicity : false,
    withdrawInfo : [
      {text : "더한섬닷컴 <strong>탈퇴 시 보유하신 쿠폰, 회원정보, 거래정보 등은 모두 삭제</strong>됩니다."},
      {text : '더한섬닷컴만 탈퇴 되며, 기존 가입한 한섬 통합멤버십(한섬 오프라인 매장/H패션몰/EQL)과 H.Point 통합멤버십은 유지됩니다. 한섬 통합멤버십 또는 H.Point 통합회원 탈퇴를 원하실 경우, 탈퇴 유형 선택 페이지에서 다시 선택해주세요.'},
      {text : '거래 정보가 있는 경우, 판매 거래 정보 관리를 위하여 구매와 관련된 상품정보, 거래 내역 등에 대한 기본정보는 탈퇴 후 5년간 보관합니다.'},
      {text : '회원 <strong>탈퇴 후 90일간 재가입이 불가</strong>하며, 탈퇴 후 재가입 시에는 신규 회원가입으로 처리됩니다. (탈퇴 전 쿠폰, 회원정보, 거래내역 등은 복구되지 않습니다.)'},
      {text : '더한섬닷컴의 주문(배송/교환/반품) 및 상담 등이 진행중이거나, e-money의 자산을 보유한 경우 탈퇴가 불가합니다. (진행 건 처리 완료 및 자산 소진 시 탈퇴 가능)'}
    ],
    withdrawInfo1 : [
      {text : "더한섬닷컴 <strong>탈퇴 시 보유하신 쿠폰, 회원정보, 거래정보 등은 모두 삭제</strong>됩니다."},
      {text : '거래 정보가 있는 경우, 판매 거래 정보 관리를 위하여 구매와 관련된 상품정보, 거래 내역 등에 대한 기본정보는 탈퇴 후 5년간 보관합니다.'},
      {text : '회원 <strong>탈퇴 후 90일간 재가입이 불가</strong>하며, 탈퇴 후 재가입 시에는 신규 회원가입으로 처리됩니다. (탈퇴 전 쿠폰, 회원정보, 거래내역 등은 복구되지 않습니다.)'},
      {text : '더한섬닷컴의 주문(배송/교환/반품) 및 상담 등이 진행중이거나, e-money의 자산을 보유한 경우 탈퇴가 불가합니다. (진행 건 처리 완료 및 자산 소진 시 탈퇴 가능)'}
    ],
  }),
  created() {
    const me = this
    const json = require('~/static/json/mypage_left_menu.json')
    me.menuList = json.list
  },
  methods: {
    newLine(str) {
      return String(str).replace(/(?:\r\n|\r|\n)/g,'</strong>')
    },
     testBtn(){ // 퍼블화면 확인용
      this.simplicity = true;
    }
  },
}
</script>
<style lang="scss" scoped>
 @import '@/assets/scss/pages/member.scss'; 
</style>
