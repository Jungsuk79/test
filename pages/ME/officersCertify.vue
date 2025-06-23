<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="officers-contents">
          <div class="inner">
          <div class="logo-conts">
            <div class="logo">THE HANDSOME</div>
            <p class="cmp-font fnt-38">임직원 인증</p>
          </div>

          <div class="cetifyinfo-conts">
            <p class="cmp-font fnt-18 text-center">아래 정보 입력 후<br>임직원 인증을 진행해 주시기 바랍니다.</p>
            
            <div class="cmp-info info-type2">
              <p class="cmp-font fnt-16">이름<span class="pl-16">김*섬</span></p>
            </div>

            <div class="cmp-form-boxGroup">
              <div class="cmp-form-box">
                <CommonSelectBox id="selectId3" title="타이틀" class="type1 black-arw"><!-- [퍼블수정]22.12.26 수정 -->
                  <template #optionList>
                    <option value="placeholder">회사를 선택해 주세요.</option>
                    <option value="option1">옵션1</option>
                    <option value="option2">옵션2</option>
                    <option value="option3">옵션3</option>
                    <option value="option4">옵션4</option>
                  </template>
                </CommonSelectBox>
              </div>
              <div class="cmp-form-box">
                <v-text-field type="text" label="인증 정보(사번 7~9자리)" clearable class="cmp-form-input"></v-text-field>

                <!--한섬케어 외 선택 CASE
                 <v-text-field type="text" label="인증정보(현대백화점 카드번호 16자리)" clearable class="cmp-form-input"></v-text-field>
                -->
              </div>
            </div>

            <div class="btn-box">
               <v-btn large color="primary" class="width-360">임직원 인증하기</v-btn>
             </div>
          </div>

          <div class="line-conts mt-40"><!-- [퍼블수정]22.12.26 수정 -->
            <p class="cmp-font fnt-20">임직원 인증 안내</p>
            <ul class="cmp-dotList">
              <li>임직원 인증정보는 한섬 임직원이신 경우 사번(7~9자리), 한섬 외 계열사 임직원이신 경우 현대백화점 카드번호(16자리)가 필요합니다.</li>
              <li>현대백화점그룹 인사시스템에 인사정보 등록 후 인증하실 수 있습니다.</li>
              <li>그룹웨어(H-ART)에서 개인정보 제3자 제공 동의를 해주셔야 합니다. 동의 내역은 10시, 14시, 19시 업데이트됩니다.<br>ex. 9시에 동의하신 경우, 10시 이후 인증 가능</li>
              <li>인사시스템과 그룹웨어의 사번 정보가 일치해야 합니다.</li>
              <li>임직원 인증이 어려우신 경우, 회원가입하신 후 고객센터 1800-5700(유료)으로 임직원 전환 요청해주시기 바랍니다.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '~/api/common/EventBus'
export default {
  components: {
  },
  layout: 'LayoutBasics',
  data: () => ({


  }),
  created(){
    EventBus.$emit("setLayout", {header:false, footer:false, topbutton: false})
  },
  methods: {

  },
}
</script>
<style lang="scss" scoped>
 @import '@/assets/scss/pages/member.scss'; 
</style>
