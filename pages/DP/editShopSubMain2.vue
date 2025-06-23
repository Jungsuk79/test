<template>
  <div class="contents contents-brand"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->  
    <!--
      221116 컨텐츠 순서변경
      - <div class="content-wrap"> 삭제
      - 영역별로 <section></section> 추가 <-- v-for 용
      - 상단 배너, 편집샵 링크 제외 <div class="section-wrap"></div> 추가
    -->
    
    <!-- 편집샵 링크 -->
    <section>
      <BrandEditshopLink :height="56"/>
      <!-- <BrandEditshopLink :height="shop.conrNo===0 ? 56 : 60"/> --><!-- 221116 컨텐츠 순서변경 : 편집샵 링크 순서에 따른 높이 참고 -->
    </section>
    <!-- //편집샵 링크 -->

    <!-- 상단 비주얼 -->
    <section>
      <!-- 이미지 타입 -->
      <BrandTopVisual :data="topVisual"/>
      <!-- 텍스트 타입 -->
      <!--
      <div class="section-wrap">
        <div class="editshop-brand-info">
          <h3 class="tit">TOM GREYHOUND</h3>
          <p class="desc">‘이상한 나라의 앨리스’를 컨셉으로 재미있는 상상력이 더해진 인터리어와 함께 Fun &amp; Pop 스타일을 제안하는 신선한 브랜드를 접할 수 있는 프로젝트 편집숍</p>
        </div>
      </div>
      -->
    </section>
    <!-- //상단 비주얼 -->

    <!-- 브랜드 -->
    <section>
      <div class="section-wrap">
        <div class="brand-tit-box">
          <h2 class="tit">브랜드</h2>
          <nuxt-link to="#n" class="brand-link-btn">전체보기</nuxt-link>
        </div>
        <BrandList :data="brandList" list-type="square"/>
      </div>
    </section>
    <!-- //브랜드 -->

    <!-- 신규 브랜드 -->
    <section>
      <div class="section-wrap">
        <div class="brand-tit-box">
          <h2 class="tit">신규 브랜드</h2>
        </div>
        <BrandNewSwiper :data="newBrandList"/>
      </div>
    </section>
    <!-- //신규 브랜드 -->

    <!-- 신상품 -->
    <section>
      <div class="section-wrap">
        <div class="brand-tit-box">
          <h2 class="tit">신상품</h2>
          <nuxt-link to="#n" class="brand-link-btn">전체보기</nuxt-link>
        </div>
        <ProductList :list="newPrdList" :layout="4" :unit-type="'mini'" :swipe="true" />
      </div>
    </section>
    <!-- //신상품 -->

    <!-- 공통 배너 -->
    <section>
      <div class="section-wrap">
        <!-- 221116 컨텐츠 순서변경 : <div class="brand-banner"> 삭제 -->
        <CommonBanner :data="banner"></CommonBanner>
      </div>
    </section>
    <!-- //공통 배너 -->

    <!-- 인기상품 -->
    <section>
      <div class="section-wrap">
        <div class="brand-tit-box">
          <h2 class="tit">인기상품</h2>
          <nuxt-link to="#n" class="brand-link-btn">전체보기</nuxt-link>
        </div>
        <ProductList :list="popularPrdList" :layout="4" :unit-type="'mini'" :swipe="true" />
      </div>
    </section>
    <!-- //인기상품 -->
    
  </div>
</template>

<script>
import EventBus from '~/api/common/EventBus'

export default {
  components: {
  },
  layout: 'LayoutBasics',

  data: () => ({
    shop : {
      conrNo : 0
    },
    topVisual:{
        title: "TOM GREYHOUND",
        desc: "‘이상한 나라의 앨리스’를 컨셉으로 재미있는 상상력이 더해진 인터리어와 함께<br>신선한 브랜드를 접할 수 있는 프로젝트 편집숍",
        image_url : "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-banner1.png",
    },
    brandList : [
      {
        brand_name : 'DUNST',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-brand0.png',
        link_url : '#n',
      },
      {
        brand_name : 'GANNI',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-brand1.png',
        link_url : '#n',
      },
      {
        brand_name : 'BIRKENSTOCK',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-brand2.png',
        link_url : '#n',
      },
      {
        brand_name : 'LES COYOTED DE PARIS',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-brand3.png',
        link_url : '#n',
      },
      {
        brand_name : 'MOTHER DENIM',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-brand4.png',
        link_url : '#n',
      },
      {
        brand_name : 'BAUM UND PFERFGARTEN',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-brand5.png',
        link_url : '#n',
      },
    ],
    newBrandList : [
      {
        title : 'SAINT JAMES',
        desc : 'SAINT JAMES는 이름에서도 알 수 있듯이 파리 외곽의 수도원, 프랑스의 유명한 관광지인 몽생 미셸 근처 ST.JAMES 지역에서 시작된 브랜드입니다. 클래식 마린 룩을 원하든, 심플한 데일리 룩을 원하든.',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-new-brand2.png',
        link_url : '#n',
      },
      {
        title : 'SAINT JAMES',
        desc : 'SAINT JAMES는 이름에서도 알 수 있듯이 파리 외곽의 수도원, 프랑스의 유명한 관광지인 몽생 미셸 근처 ST.JAMES 지역에서 시작된 브랜드입니다. 클래식 마린 룩을 원하든, 심플한 데일리 룩을 원하든.',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-main-news.png',
        link_url : '#n',
      },
      {
        title : 'SAINT JAMES',
        desc : 'SAINT JAMES는 이름에서도 알 수 있듯이 파리 외곽의 수도원, 프랑스의 유명한 관광지인 몽생 미셸 근처 ST.JAMES 지역에서 시작된 브랜드입니다. 클래식 마린 룩을 원하든, 심플한 데일리 룩을 원하든.',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-new-brand.png',
        link_url : '#n',
      },
    ],
    newPrdList : [
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "포켓 싱글 재킷 포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷",
          "sell_price": "350000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-new0.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "버튼 칼라 니트 가디건",
          "sell_price": "395000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-new1.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
          "link_url" : "#none",
          "zzim": true,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "텍스쳐 블록 드레스",
          "sell_price": "346000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-new2.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "윙 슬리브 셔링 드레스",
          "sell_price": "495000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-new3.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/014.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "포켓 싱글 재킷",
          "sell_price": "350000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/021.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "버튼 칼라 니트 가디건",
          "sell_price": "395000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/022.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "텍스쳐 블록 드레스",
          "sell_price": "346000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/023.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "윙 슬리브 셔링 드레스",
          "sell_price": "495000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/014.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/024.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
    ],
    banner : {
      list : [
        {
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-banner-02.png",
          "bg_color": "#E5E8EB",
          "text_color": "#000",
          "link_url": "#none",
          "type": 2,
          "desc": "MUE STYLING CURATION",
          "title": "유일무이 vol 1 : 세상에 유일한 MUE 스타일",
          "subtitle": "eyesmag과 함께하는 MUE만의 유일무이한 스타일 큐레이션"
        },
        /* {
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-banner-01.png",
          "bg_color": "#E0B47B",
          "text_color": "#000",
          "link_url": "#none",
          "type": 1,
          "desc": "PAIRS 세컨드 레이블",
          "title": "Deli & Grocery 신상품 보러가기!",
          "subtitle": ""
        },
        {
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-banner-03.png",
          "bg_color": "#3F3D40",
          "text_color": "#fff",
          "link_url": "#none",
          "type": 3,
          "desc": "SYSTEM HOMME",
          "title": "스포트라이트 온 타임옴므",
          "subtitle": "CHECK OUT NOW"
        } */
      ]
    },
    popularPrdList : [
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "포켓 싱글 재킷 포켓 싱글 재킷 포켓 싱글 재킷 포켓 싱글 재킷 포켓 싱글 재킷 포켓 싱글 재킷 포켓 싱글 재킷 포켓 싱글 재킷 ",
          "sell_price": "350000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-popular0.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "버튼 칼라 니트 가디건",
          "sell_price": "395000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-popular1.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
          "link_url" : "#none",
          "zzim": true,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "텍스쳐 블록 드레스",
          "sell_price": "346000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-popular2.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "윙 슬리브 셔링 드레스",
          "sell_price": "495000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-popular3.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/014.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "포켓 싱글 재킷",
          "sell_price": "350000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-popular2.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/021.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "버튼 칼라 니트 가디건",
          "sell_price": "395000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-popular0.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/022.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "텍스쳐 블록 드레스",
          "sell_price": "346000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-popular1.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/023.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name": "FOURM STUDIO",
          "product_name": "윙 슬리브 셔링 드레스",
          "sell_price": "495000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/editshop-top-popular3.png",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/024.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
    ]
  }),

  created(){
    
  },// created

  mounted(){
    EventBus.$emit("setHeader", {static: true, type: "editshopSubMain", brand: "TOM GREYHOUND"})
  },// mounted

  methods: {
    
  }// methods
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/brand.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
