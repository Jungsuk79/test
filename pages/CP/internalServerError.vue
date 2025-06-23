<template>
 <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap contents-type2">
        <div class="error-contents">
            <i class="cmp-icon-etc cmp-icon-100 i-error-500">error-500</i>
            <p class="cmp-font fnt-24 mt-32">서비스 이용에 불편을 드려 죄송합니다.</p><!-- [퍼블수정]23.01.09 -->
            <p class="cmp-font mt-24">시스템 에러가 발생하여 페이지를 표시할 수 없습니다.<br>잠시 후 다시 시도해 주세요.</p>
            <v-btn large block color="primary" class="width-360">새로 고침</v-btn>
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
 //@import '@/assets/scss/pages/member.scss'; 
</style>
