<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">

      <div class="cmp-page-tit line">
        <h2 class="tit">비회원 주문하기</h2>
      </div>
      
      <ul class="cmp-dotList">
        <li>비회원 주문 시 쿠폰 할인/한섬마일리지 적립 등의 혜택을 받을 수 없습니다.</li>
        <li>간편하게 회원가입을 하시고 다양한 혜택을 받으실 수 있습니다.</li>
        <li>비회원 구매 시 입력했던 구매비밀번호와 결제완료 후 노출되는 주문번호를 통해서 구매정보를 조회하실 수 있습니다.</li>
      </ul>

      <div class="or-txt-box mt-40">
        <p class="cmp-font fnt-20">비회원 약관동의 및 개인정보 수집/이용 동의</p>
        <!-- [241126] 개인정보수집/이용동의개선 --> 
        <p class="cmp-font fnt-14 mt-10">고객(정보주체)의 개인정보보호 및 권리는 「개인정보보호법」 및관계 법령에 따라 안전하게 관리하고 있습니다.<br />
          자세한 사항은 <button class="cmp-font fnt-14 button"><span class="line">더한섬닷컴 개인정보처리방침</span></button>에서 확인할 수 있습니다.
        </p>
        <!-- <p class="cmp-font fnt-14 mt-10">비회원 개인정보수집 이용 항목을 확인 후 동의하셔야 합니다.</p>
        <v-checkbox class="cmp-form-checkbox mt-24" label="전체 동의하기"></v-checkbox>
        <div class="agree-terms-acc">
          !-- (필수) 비회원 개인정보수집 이용 동의 --
          <div v-for="(item,index) in terms" :key="index" class="acc-box">
            <div class="acc-box-tit">
              <v-checkbox class="cmp-form-checkbox agree-chk" :label="item.label"></v-checkbox>
              <button class="acc-box-btn" @click="agreeAcc(index)">
                <i class="cmp-icon cmp-icon-16" :class="[{'i-down':!item.acc},{'i-up':item.acc}]">
                  <template v-if="item.acc">닫기</template>
                  <template v-else>열기</template>
                </i>
              </button>
            </div>
            <div v-if="item.acc" class="acc-box-cnt">
              !-- eslint-disable --
              <div v-html="item.html"></div>!-- 약관 html 등록(테스트용) --
              !-- eslint-disable --
            </div>  
          </div>
          !-- //(필수) 비회원 개인정보수집 이용 동의 --
        </div> -->
      </div>
      <div class="or-txt-box mt-24">
        <p class="cmp-font fnt-20">비회원 주문을 위한 본인인증</p>
        <!-- [241126] 개인정보수집/이용동의개선 --> 
        <p class="cmp-font fnt-14 mt-10">입력하신 정보는 NICE평가정보에서 본인확인을 위해 처리합니다.</p>
      </div>
      <div class="text-center mt-34">
        <v-btn large color="primary" :disabled="false">휴대폰 인증하기</v-btn>
      </div>
    </div>                                                  
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import EventBus from '~/api/common/EventBus'

export default {
  components: {
    // Swiper,
    // SwiperSlide,
  },
  layout: 'LayoutBasics',
  data() {
    return {
      terms : [
        {
          label : '(필수) 비회원 개인정보수집 이용 동의',
          acc : false,
          html : '<p class="cmp-font">비회원 개인정보수집 이용 약관</p>'+
                '<p class="cmp-font fnt-14 mt-6">1. 수집하는 개인정보 항목</p>'+
                '<ul class="pl-16">'+
                  '<li class="cmp-font fnt-14">- 구매 결제 정보(신용카드 번호, 은행 계좌번호, 휴대폰)</li>'+
                  '<li class="cmp-font fnt-14">- 주문자 정보(휴대폰 번호, 이메일, 주문자 성명, 구매비밀번호), 배송지 정보(수령인 성명, 휴대폰 번호, 배송지 주소)</li>'+
                '</ul>'+
                '<p class="cmp-font fnt-14 mt-6">2. 수집 목적</p>'+
                '<ul class="pl-16">'+
                  '<li class="cmp-font fnt-14">- 본인 확인 및 연령 확인 등 개인 식별 용도로 사용</li>'+
                  '<li class="cmp-font fnt-14">- 고지사항 전달, 본인 의사 확인, 불만 처리 등 원활한 의사소통</li>'+
                '</ul>',
        },
        {
          label : '(선택) 비회원 개인정보수집 이용 동의',
          acc : false,
          html : '<p class="cmp-font">비회원 개인정보수집 이용 약관</p>'+
                '<p class="cmp-font fnt-14 mt-6">1. 수집하는 개인정보 항목</p>'+
                '<ul class="pl-16 cmp-font fnt-14">'+
                  '<li>- 구매 결제 정보(신용카드 번호, 은행 계좌번호, 휴대폰)</li>'+
                  '<li>- 주문자 정보(휴대폰 번호, 이메일, 주문자 성명, 구매비밀번호), 배송지 정보(수령인 성명, 휴대폰 번호, 배송지 주소)</li>'+
                '</ul>'+
                '<p class="cmp-font fnt-14 mt-6">2. 수집 목적</p>'+
                '<ul class="pl-16 cmp-font fnt-14">'+
                  '<li>- 본인 확인 및 연령 확인 등 개인 식별 용도로 사용</li>'+
                  '<li>- 고지사항 전달, 본인 의사 확인, 불만 처리 등 원활한 의사소통</li>'+
                '</ul>',
        }
      ]
    }
  },
  created() {
    
  },
  methods: {
    agreeAcc(idx){
      const me = this
      for(let i=0;i<me.terms.length;i++){
        if(i===idx && !me.terms[i].acc) me.terms[i].acc = true
        else me.terms[i].acc = false
      }
    }
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/pages/order.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>
