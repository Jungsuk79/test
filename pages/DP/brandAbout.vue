<template>
  <div class="contents contents-type2 contents-brand"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->  
    <BrandTopVisual :data="topVisual" type2/>
    <div class="content-wrap">
      <div class="brand-about-cnt">
        <h2 class="tit">SJSJ</h2>
        <p class="desc">
          #PRECIOUS<br>
          #EVERYDAY ACCESSIBLE LUXURYSIMPLICITY<br>
          #TIMELESS
        </p>
        <p class="desc2">
          SJSJ는 보여주는 패션에서 자기 만족을 주는 패션으로 남에게 보여주는 것보다 스스로의 가치 추구를 원하는 소비자를 위해 최상의 소재, 본질에 충실한 캐시미어 브랜드 입니다.<br><br>
          소재는 하이엔드 브랜드에서 주로 사용하는 이탈리아 및 스코틀랜드 캐시미어 원사를 70% 이상 사용하여 고급스러움을 극대화시켰으며, 소재의 특성을 살려서 아이템, 컬러, 가격 등을 다양하고 폭넓게 구성하여 생활 전반에 Life mood를 통해 브랜드 아이덴티티를 전달합니다.<br><br>
          간결하고 활용도 높은 디자인으로 편안하면서도 품위 있는 퀄리티를 추구하는 SJSJ의 제품들은 오랫동안 입을 수 있는 옷으로 복잡함이 가득 넘치는 세상에서 접근 가능한 고급스러움을 추구합니다.
        </p>  
      </div>

      <!--20221222 동영상 스와이프로 수정(개발에서는 BrandAboutMovie로 변경하여 사용)-->  
      <div class="brand-about-video">
        <BrandMovie></BrandMovie>
      </div>
    </div>
  </div>
</template>

<script>
import BrandMovie from '~/components/brand/BrandMovie.vue'
import EventBus from '~/api/common/EventBus'


export default {
  components: {
    BrandMovie
  },
  layout: 'LayoutBasics',

  data: () => ({
    topVisual : {
      image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-about-top-visual.png',
      title : 'SJSJ YOUNG ARTISTIC CASUAL',
    },
  }),

  created(){
    
  },// created

  mounted(){
    EventBus.$emit("setHeader", {static: true, type: "brand", brand: "SJSJ", menu :"소개"})
  },// mounted

  methods: {
    
  }// methods
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/brand.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
