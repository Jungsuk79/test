<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap contents-type2">
        <div class="error-contents">
            <i class="cmp-icon-etc cmp-icon-100 i-error-400">error-400</i>
            <p class="cmp-font fnt-24 mt-32">죄송합니다.<br>요청하신 페이지를 찾을 수 없습니다.</p><!-- [퍼블수정]23.01.09 -->
            <p class="cmp-font mt-24">방문하시려는 페이지의 주소가 잘못 입력 되었거나,<br>변경 혹은 삭제되어 페이지를 찾을 수 없습니다.</p>
            <p class="cmp-font mt-12">입력하신 주소가 정확한지 다시 한번 확인해 주세요.</p>
            <v-btn large block color="primary" class="width-360">메인</v-btn>
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
