<template>
  <div class="guide">
    <h2 class="mb-2">레이아웃 설명</h2>
    <div class="boxColor">
      <pre>
1) 기본
<code class="markup">div class="<span class="c-red">contents<sup>①</sup></span>"</code><code class="remark">레이아웃 설명 /ko/guide/Structure 참고</code>
  <code class="markup">div class="<span class="c-blue">content-wrap<sup>②</sup></span>"</code>
  <code class="markup">div</code>
<code class="markup">/div</code>

<span class="c-red">①</span> : width 100%
<span class="c-blue">②</span> : contents min-width 1320px, max-width 1800px


2) 컨텐츠 1200px 고정
<code class="markup">div class="contents <span class="c-red">contents-type2<sup>①</sup></span>"</code><code class="remark">레이아웃 설명 /ko/guide/Structure 참고</code>
  <code class="markup">div class="<span class="c-blue">content-wrap<sup>②</sup></span>"</code>
  <code class="markup">div</code>
<code class="markup">/div</code>

<span class="c-red">①</span> 클래스 추가 시
<span class="c-blue">②</span> : width 1200px


3) 컨텐츠 full
<code class="markup">div class="contents"</code><code class="remark">레이아웃 설명 /ko/guide/Structure 참고</code>
  <code class="markup">div</code>width 100% 컨텐츠<code class="markup">/div</code>
  <code class="markup">div class="<span class="c-blue">content-wrap<sup>②</sup></span> <span class="c-red">wrap-full<sup>①</sup></span>"</code>
  <code class="markup">div</code>
<code class="markup">/div</code>

<span class="c-red">①</span> 클래스 추가 시 
<span class="c-blue">②</span> : width 100% / max-width unset
      </pre>
    </div>
    <h2 class="mb-2">공통 레이아웃 구조</h2>
    <div class="boxColor markup-block">
      <code class="markup">template</code>
      <div class="inline-block"><code class="markup ml-10">v-app class="ui-wrap" :class="langType"</code><code class="remark">글로벌 langType</code></div>
      <code class="markup ml-15">div class="ui-layout-wrap"</code>
      <div class="inline-block"><code class="markup ml-20">Header v-if="visibility.header" :lang-type="langType"/</code><code class="remark">글로벌 langType</code></div>
      <code class="markup ml-20">SearchLayer v-if="visibility.search"</code>
      <code class="markup ml-20">v-main class="ui-container"</code>
      <code class="markup ml-25">Nuxt /</code>
      <code class="markup ml-20">/v-main</code>
      <div class="inline-block"><code class="markup ml-20">Footer v-if="visibility.footer" :lang-type="langType" /</code><code class="remark">글로벌 langType</code></div>
      <code class="markup ml-20">TopButton v-if="visibility.topbutton" /</code>
      <code class="markup ml-15">/div</code>
      <div class="inline-block"><code class="markup ml-15">FilterLayer v-if="visibility.filter" :lang-type="langType" /</code><code class="remark">글로벌 langType</code></div>
      <code class="markup ml-10">/v-app</code>
      <code class="markup">/template</code>
      <code class="markup">script</code>
      <p class="ml-10">
        import EventBus from '~/api/common/EventBus'<br />
        import Header from '~/components/common/Header.vue'<br />
        import Footer from '~/components/common/Footer.vue'<br />
        import SearchLayer from '~/components/common/SearchLayer.vue'<br />
        import TopButton from '~/components/common/TopButton.vue'<br />
        import FilterLayer from '~/components/common/FilterLayer.vue'<br />
        export default {<br />
        &nbsp;&nbsp;components: {</p>
        <p class="ml-25">Header,</p>
        <p class="ml-25">Footer,</p>
        <p class="ml-25">TopButton,</p>
        <p class="ml-25">FilterLayer,</p>
        <p class="ml-25">SearchLayer,<br/> },</p>
        &nbsp;&nbsp;.....<br />
       <p class="ml-10">}</p>
      <p>&lt;/script&gt;</p>
    </div>

    <h2 class="mb-2">Main 레이아웃 구조</h2>
    <div class="boxColor markup-block">
      <code class="markup">template</code>
      <div class="inline-block"><code class="markup ml-10">v-app class="ui-wrap" :class="langType"</code><code class="remark">글로벌 langType</code></div>
      <div class="inline-block"><code class="markup ml-20">Header v-if="visibility.header" :lang-type="langType"/</code><code class="remark">글로벌 langType</code></div>
      <code class="markup ml-20">SearchLayer v-if="visibility.search"</code>
      <code class="markup ml-20">v-main class="ui-container main-container"</code>
      <code class="markup ml-25">Nuxt /</code>
      <code class="markup ml-20">/v-main</code>
      <div class="inline-block"><code class="markup ml-20">Footer v-if="visibility.footer" :lang-type="langType" /</code><code class="remark">글로벌 langType</code></div>
      <code class="markup ml-20">TopButton v-if="visibility.topbutton" /</code>
      <code class="markup ml-10">/v-app</code>
      <code class="markup">/template</code>
      <code class="markup">script</code>
      <p class="ml-10">
        import EventBus from '~/api/common/EventBus'<br />
        import Header from '~/components/common/Header.vue'<br />
        import SearchLayer from '~/components/common/SearchLayer.vue'<br />
        import Footer from '~/components/common/Footer.vue'<br />
        import TopButton from '~/components/common/TopButton.vue'<br />
        export default {<br />
        &nbsp;&nbsp;components: {</p>
        <p class="ml-25">Header,</p>
        <p class="ml-25">Footer,</p>
        <p class="ml-25">TopButton,</p>
        <p class="ml-25">SearchLayer,<br/> },</p>
        &nbsp;&nbsp;.....<br />
       <p class="ml-10">}</p>
      <p>&lt;/script&gt;</p>
    </div>

    <h2 class="mb-2">기본 컴포넌트 구조</h2>
    <div class="boxColor">
      <p>&lt;template&gt;</p>
      <p class="ml-10">&lt;div class="contents content-메뉴명"&gt;</p>
      <p class="ml-13">템플릿 내용</p>
      <p class="ml-10">&lt;/div&gt;</p>
      <p>&lt;/template&gt;</p>
      <p class="mt-10">&lt;script&gt;</p>
      <p class="ml-10">
        export default { <br />&nbsp;&nbsp;layout : "LayoutBasics",<br />};
      </p>
      <p>&lt;/script&gt;</p>
      <p class="mt-10">&lt;style lang="scss" scoped &gt;</p>
      <p class="ml-13">@import '@/assets/scss/pages/페이지전용.scss';</p>
      <p>&lt;/style&gt;</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'guide',
}
</script>

<style lang="scss" scoped>
.guide p {
  margin-bottom:0
}
.guide h2 {
  font-weight: normal;
  font-size: 20px;
  border-bottom: 1px solid #000;
  margin-top: 50px;
  position: relative;
  padding-left: 10px;
  text-align: left;
}
.guide h2::before {
  content: '';
  display: block;
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background: #000;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.guide h2:first-child {
  margin-top: 0;
}
.boxColor {
  background-color: rgba(0, 0, 0, 0.05);
  padding: 10px;
  margin-bottom: 50px;
  min-width: 1150px;
}
.markup-block {
  .markup {display: block;}
  .inline-block {
    .markup {display: inline-block;}
  }
}
.v-application sub,
.v-application sup{
  font-size:1.6rem;color:inherit;
}
.v-application pre{
  background:none;padding:0;font-size:inherit;font-family:inherit;
}
.v-application code{
  background:none;padding:0;font-size:inherit;font-family:inherit;
  &.markup{
    &::before{content:'<';}
    &::after{content:'>';}
  }
  &.remark{
    &::before{content:'<!-- ';}
    &::after{content:'-- >';}
    color:#2f8539;
  }
}
.c-blue{color:#00f !important}
.c-red{color:#f00 !important}
.ml-25 {margin-left:25px;}
</style>
