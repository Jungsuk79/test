<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap contents-type2">
        <div class="error-contents">
            <img src="/images/order/loading-complete.gif" alt="loading" class="loading-img" />
            <p class="cmp-font fnt-24 mt-32">결제 처리 중입니다.</p>
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
    EventBus.$emit("setLayout", {topbutton: false})
  },
  methods: {

  },
}
</script>
<style lang="scss" scoped>
// @import '@/assets/scss/pages/member.scss'; 
</style>
