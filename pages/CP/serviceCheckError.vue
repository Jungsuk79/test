<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap contents-type2">
        <div class="error-contents">
            <i class="cmp-icon-etc cmp-icon-100 i-error-inspect">error-inspect</i>
            <p class="cmp-font fnt-24 mt-32">더한섬닷컴 점검중입니다.</p>
            <p class="cmp-font mt-24">더한섬닷컴 서비스에 오류가 발생하여 서비스를 일시<br>중지하고 조치중입니다.</p>
            <p class="cmp-font mt-12">빠른 시일내에 정상화하도록 노력하겠습니다.<br> 이용에 불편을 드려 진심으로 죄송합니다.</p>

            <div class="box-line-conts">
              <v-layout justify-space-between>
                <p class="cmp-font bold">점검 시간</p>
                <p>10/10(수), 2:00 ~ 7:00</p>
              </v-layout>
              <ul class="cmp-dotList">
                <li>상기 점검 시간은 사정에 의해 변경될 수 있습니다.</li>
              </ul>
            </div>

            <div class="cscenter-conts">
              <p class="tel">1800-5700<span>유료</span></p>
              <p>평일 월~금, 9:00 ~ 18:00</p>
              <a class="cmp-font fnt-14" href="mailto:shophelp@thehandsome.com">shophelp@thehandsome.com</a>
            </div>
            
            <!--2022.09.14 영문추가-->
            <div class="system-maintenance">
              <p>System Maintenance</p>
              <p class="cmp-font fnt-14">We apologize for any inconvenience this may cause<br>and will be back soon,<br>02:00AM-07:00AM, 10th Oct (KST)</p>
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
  layout: 'LayoutError',
  data: () => ({

  }),
  created(){
    EventBus.$emit("setLayout", {topbutton: false})
  },
  methods: {

  },
}
</script>
<style lang="scss" scoped>
// @import '@/assets/scss/pages/member.scss'; 
</style>
