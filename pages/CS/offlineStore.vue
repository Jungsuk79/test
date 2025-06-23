<template>
  <div class="contents contents-type2">
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'고객센터'" :left-data="menuList" :page-class="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="offline-agree">
            <div class="cmp-page-tit">
              <h2 class="tit">오프라인 매장 문의</h2>
            </div>

            <!-- [241126] 개인정보수집/이용동의개선 --> 
            <p class="cmp-font fnt-14">한섬은 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와<br />
              같이 관련 부서 및 고객의 소리 관리 담당자를 지정하고 있습니다.</p>

            <div class="info-border-box mt-28">
              <p class="cmp-font fnt-14 weight500 mb-12">고객의 소리 관리 담당자</p>
              <div class="box">
                 <dl class="line">
                  <dt class="tit">부서</dt>
                  <dd class="txt">고객케어팀</dd>
                </dl>
                <dl class="line">
                  <dt class="tit">담당자</dt>
                  <dd class="txt">오인숙</dd>
                </dl>
              </div>
            </div>

            <p class="cmp-font fnt-14 mt-24">귀하께서는 한섬의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을<br />
              고객의 소리 관리 담당자 혹은 담당부서로 신고하실 수 있습니다.</p>

            <!-- <div class="terms-wrap">
              <h5 class="cmp-font fnt-18 mb-10">개인정보 수집, 이용동의</h5>
              <div class="terms-box">
                1. 개인정보의 수집.이용목적<br />
                한섬은 고객의 소리를 통해 고객의 상담내용을 접수하고 답변을 보내기 위해 개인정보를 수집합니다.<br /><br />

                2. 수집하는 개인정보의 항목<br />
                한섬은 고객의 소리 작성시 필수 수집 정보인 이름, 휴대폰번호를 제외한 개인정보는 받지 않고 있습니다. 고객의 소리를 통한 상담내용 접수 및 답변전달, 답변메일 발송 이외의 다른 어떠한 목적으로도 사용되지 않습니다.<br /><br />

                3. 개인정보의 보유 및 폐기<br />
                고객의 소리를 통해 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존 합니다.<br /><br />

                &lt;내부방침에 의한 정보보유 사유&gt;<br />
                ▶ 개인정보에 관한 기록<br />
                - 보존 이유: 서비스 이용의 혼선방지<br />
                - 보존 기간: 관련 법령에 따른 보존 기간까지<br /><br />

                4. 개인정보 제 3자 제공<br />
                한섬은 고객의 소리를 통하여 수집한 개인정보를 제 3자에게 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.<br />
                - 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우<br /><br />

                5. 개인정보 정정 및 삭제<br />
                고객의 소리를 통해 개인정보를 작성하신 분들은 언제든지 자신의 개인정보를 정정할 수 있으며, 삭제를 요청할 수 있습니다. <br />
                개인정보와 관련하여 불만이나 의견이 있으신 분은 한섬으로 의견을 주시면 접수 즉시 조치하고 처리결과를 통보해 드리겠습니다.<br /><br />

                6. 고객의 소리 관리 담당자<br />
                한섬은 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 고객의 소리 관리 담당자를 지정하고 있습니다.<br /><br />

                ▶ 고객의 소리 관리 담당자<br />
                성명 : 이자영(고객관리팀)<br />
                이메일 : voc@hyundaihmall.com<br /><br />

                귀하께서는 한섬의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 고객의 소리 관리 담당자 혹은 담당부서로 신고하실 수 있습니다. <br />
                회사는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.
              </div>
              <p class="cmp-font fnt-14 mt-10">개인정보 수집을 원하지 않으실 경우 e-mail (voc@hyundaihmall.com)을 통해서 접수해주세요.</p>
              <v-checkbox label="동의함" class="cmp-form-checkbox mt-20"></v-checkbox>
            </div> -->
            <div class="cmp-form-boxGroup">
              <div class="cmp-form-box required">
                <p class="form-tit">고객명</p>
                <v-text-field outlined type="text" value="" label="이름" clearable class="cmp-form-input"></v-text-field>
              </div>
              <div class="cmp-form-box required">
                <p class="form-tit">휴대폰번호</p>
                <div class="cmp-form-colBox">
                  <CommonSelectBox id="phoneSelect" title="앞자리 번호 선택">
                    <template #optionList>
                      <option value="010">010</option>
                      <option value="011">011</option>
                      <option value="017">017</option>
                      <option value="018">018</option>
                      <option value="019">019</option>
                    </template>
                  </CommonSelectBox>
                  <v-text-field type="text" outlined label="가운데 번호 입력" clearable class="cmp-form-input label-hide"></v-text-field>
                  <v-text-field type="text" outlined label="뒷자리 번호 입력" clearable class="cmp-form-input label-hide"></v-text-field>
                </div>
                <p class="validation-text">validation 문구가 들어갑니다.</p>
              </div>
            </div>

            <!-- [241126] 개인정보수집/이용동의개선 --> 
            <p class="cmp-font fnt-14 mt-24 pt-24 top-border">고객(정보주체)의 개인정보보호 및 권리는 「개인정보보호법」 및관계 법령에 따라 안전하게 관리하고 있습니다.<br />
              자세한 사항은 <button class="cmp-font fnt-14 button"><span class="line">더한섬닷컴 개인정보처리방침</span></button>에서 확인할 수 있습니다.
            </p>

            <div class="mt-34 text-center">
              <v-btn large disabled color="primary">다음</v-btn>
            </div>          
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'LayoutBasics',
  data: () => ({

  }),
  created() {
    const me = this
    const json = require('~/static/json/cs_left_menu.json')
    me.menuList = json.list
  },  
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/cs.scss';
</style>
