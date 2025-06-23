<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="footer-terms-contents">
        <ContentsLeftMenu :title="'개인정보처리방침'" :left-data="menuList"></ContentsLeftMenu> 
        <div class="contents-r-layout">
          <div class="cmp-page-tit">
            <h2 class="tit">한섬 통합멤버십 개인정보처리방침</h2>
          </div>
          <div class="terms-info">
            <dl>
              <dt class="cmp-font fnt-18 bold">들여쓰기 4단계</dt>
              <dd class="cmp-font fnt-18">제1조 총칙</dd>
              <dd>“개인정보”란 생존하는 개인에 관한 정보로서 당해 정보에 포함되어 있는 성명, 휴대전화번호, 본인확인 값 (CI : Connecting information - 서비스 연계를 위해 본인확인기관에서 부여하는 개인식별정보)등의 사항에 의하여 당해 개인을 식별할 수도 있는 정보(당해 정보만으로는 특정 개인을 실별할 수 없더라도 다른 정보와 용이하게 결함하여 식별할 수 있는 것을 포함합니다)를 말합니다.</dd>
              <dd class="cmp-font inden-type2">
                ① "더한섬닷컴"이란 “회사”가 재화 또는 용역(이하 “재화 등”을 이용자에게 제공하기 위하여 컴퓨터, 모바일 등 정보통신설비를 이용하여 “재화 등”을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 “더한섬닷컴”을 운영하는 사업자의 으미로도 사용합니다.</dd>
              <dd class="cmp-font inden-type3">* 포인트 부정 적립</dd>
              <dd class="cmp-font inden-type4">(1) 포인트 부정적립이란, 회원이 실제로 상품이나 서비스를 구매하지 않았음에도 불구하고 해당회원에게 포인트가 적립된 경우를 말합니다.</dd>
              <dd class="cmp-font fnt-18">텍스트타입</dd>
              <dd>보유기간</dd>
              <dd>밑줄 법령의 규정에 따라 귀하의 개인정보를 보존할 의무가 있는 경우가 아닌 한, 신세계 그룹사 사이트 탈퇴 시까지 또는 회원가입 동의일로부터 신세계포인트 가입 해지(탈퇴확정)시까지 보유합니다.</dd>
              <dd class="cmp-font bold">볼드 동의를 거부할 권리 및 동의 거부에 따른 불이익 안내</dd>
              <dd class="cmp-font c-red">컬러 1 고객님께서는 개인정보 제3자 제공동의를 거부할 권리가 있습니다. 단, 필수항목 동의 거부 시에는 회원 가입이 불가하며, 상기 이용목적에 명시된 서비스는 받으실 수 없습니다.</dd>
              <dd class="cmp-font c-blue">컬러 2 ※ 서비스 이용과정 및 사업 처리과정에서 수집되는 개인 정보 : 홈페이지 내 개인정보처리방침 참조</dd>
              <dd class="cmp-font fnt-14">폰트크기 작게 ② "닷컴"은 "이용자"가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 청약 철회, 배송 책임, 환불 조건 등과 같은 중요한 내용을 "이용자"가 이해할 수 있도록 별도의 연결 화면 또는 팝업 화면 등을 제공 하여 "이용자"의 확인을 구하여야 합니다.</dd>
            </dl>
            
            <dl>
              <dd>
                <button class="cmp-font fnt-16 button">링크 청약 철회, 배송, 환불에 대한 안내 보기 <i class="cmp-icon cmp-icon-16 i-next"></i></button>
              </dd>
            </dl>

            <dl>
              <dt class="cmp-font fnt-18">표 타이틀</dt>
              <dd>
                <table class="terms-row-table">
                  <caption>상품리스트</caption>
                  <colgroup>
                    <col style="width:460px">
                    <col style="width:20px">
                    <col style="width:460px">
                  </colgroup>

                  <thead>
                    <tr>
                      <th>보유기간</th>
                      <th>&nbsp;</th>
                      <th>보유기간</th>
                    </tr>
                  </thead>
                  <tbody>
                   <tr>
                      <td>이용자 식별 및 본인확인, 멤버십 서비스 및 혜택 제공, 부정이용 확인 및 방지 등 회원관리</td>
                      <td>&nbsp;</td>
                      <td>통합ID, 비밀번호, 성명, 생년월일, 성별, 본인확인정보(CI), 신세계포인트 회원번호</td>
                    </tr>
                    <tr>
                      <td>문의 응대 및 민원처리, 서비스 이용에 관한 통지</td>
                      <td>&nbsp;</td>
                      <td>휴대폰번호, 이메일</td>
                    </tr>
                  </tbody>
                </table>
              </dd>
            </dl>
          </div>
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
    menuList: [
      {
        "name": "더한섬닷컴",
        "link": "/ko/CP/privacyPolicyTheHandsome",
        "active": false
      },
      {
        "name": "㈜한섬",
        "link": "/ko/CP/privacyPolicyHandsome",
        "active": false
      },
      {
        "name": "한섬 통합멤버십<br>개인정보처리방침",
        "link": "/ko/CP/privacyPolicyMember",
        "active": true
      },
    ],
  }),
  created() {

  },
}
</script>
<style lang="scss" scoped>
// @import '@/assets/scss/pages/member.scss'; 
</style>
