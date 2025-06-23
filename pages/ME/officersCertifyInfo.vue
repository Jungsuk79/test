<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="officers-contents">
          <div class="inner">
          <div class="logo-conts">
            <div class="logo">THE HANDSOME</div>
            <p class="cmp-font fnt-38">임직원 인증</p>
          </div>

          <div class="line-conts">
            <p class="cmp-font fnt-20">더한섬닷컴 임직원 전환 안내</p>
            <ul class="cmp-dotList">
              <li>임직원 전환은 H.Point 통합회원 계정으로 가능합니다.</li>
              <li>간편회원이나 한섬회원 계정을 갖고 계신 분들은 H.Point 통합회원으로 가입/전환 후 다시 시도 바랍니다.</li>
              <li>임직원 전환 회원에게는 할인 혜택이 제공됩니다.</li>
            </ul>
          </div>

          <v-layout justify-space-between class="cmp-btnsArea">
            <v-btn outlined large color="primary" class="width-360">더한섬닷컴 메인으로 이동하기</v-btn>
            <v-btn large color="primary" class="width-360">H.Point 통합회원 로그인 후 임직원 인증</v-btn>
         </v-layout>
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
