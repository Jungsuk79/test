<template>
  <div class="contents contents-brand"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->  
    <!--
      221116 컨텐츠 순서변경
      - <div class="content-wrap"> 삭제
      - 영역별로 <section></section> 추가 <-- v-for 용
      - 상단 배너 제외 <div class="section-wrap"></div> 추가
    -->

    <!-- 상단 배너 -->
    <section>  
      <BrandTopSwiper :data="mainBanner" size2/><!-- 221213 편집샵 상단 배너 : 컴포넌트 변경 -->
    </section>
    <!-- //상단 배너 -->
    
    <!-- 브랜드 -->
    <section>
      <div class="section-wrap">
        <div class="brand-tit-box">
          <h2 class="tit">브랜드</h2>
          <nuxt-link to="#n" class="brand-link-btn">전체보기</nuxt-link>
        </div>
        <BrandList :data="brandList"/>
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

    <!-- 인기 브랜드 -->
    <section>
      <div class="section-wrap">
        <div class="brand-tit-box">
          <h2 class="tit">인기 브랜드</h2>
        </div>
        <div class="editshop-popular-brand">
          <div v-for="(item, index) in popularBrandList" :key="index" class="brand-box">
            <div class="thumbnail-cnt">
              <div v-background-image="{url:item.image_url}"></div>
              <div class="cnt">
                <!-- eslint-disable -->
                <h3 class="tit" v-html="item.title"></h3>
                <p class="desc" v-html="item.desc"></p>
                <!-- eslint-disable -->
              </div>
            </div>
            <div class="prd-cnt">
              <nuxt-link :to="item.link_url" class="brand-link-btn">전체보기</nuxt-link>
              <ProductList :list="item.list" :layout="5" :unit-type="'mini'" :swipe="true" :space="16"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- //인기 브랜드 -->

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

    <!-- 배너 -->
    <section>
      <div class="section-wrap">
        <!-- 221116 컨텐츠 순서변경 : <div class="brand-banner"> 삭제 -->
        <CommonBanner :data="banner"></CommonBanner>
      </div>
    </section>
    <!-- //배너 -->

    <!-- 브랜드 뉴스 -->
    <section>
      <div class="section-wrap">
        <div class="brand-tit-box">
          <h2 class="tit">브랜드 뉴스</h2>
        </div>
        <BrandNews :data="brandNews" btn-text="자세히 보기"/><!-- 220914 브랜드뉴스 : btn-text 추가 -->
      </div>
    </section>
    <!-- //브랜드 뉴스 -->
    
  </div>
</template>

<script>
import EventBus from '~/api/common/EventBus'

export default {
  components: {
  },
  layout: 'LayoutBasics',

  data: () => ({
    mainBanner:[
      {
          title: "OBVIOUS<br>가을을 함께하다가을을 함께하다",
          desc: "디자인의 에코 럭셔리를 표방하는 퍼퓸드",
          image_url : "https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-banner.png",
          link_url : "#none"
      },
      {
          title: "OBVIOUS",
          desc: "TOM GREYHOUND 22 S/S 신규 브랜미니멀한<br>디자인의 에코 럭셔리를 표방하는 퍼퓸드",
          image_url : "https://img.thehandsome.com/md/publish/dummy/pc/system-main-banner.png",
          link_url : "#none"
      },
      {
          title: "OBVIOUS<br>가을을 함께하다",
          desc: "디자인의 에코 럭셔리를 표방하는 퍼퓸드",
          image_url : "https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-banner.png",
          link_url : "#none"
      },
      {
          title: "OBVIOUS",
          desc: "TOM GREYHOUND 22 S/S 신규 브랜미니멀한<br>디자인의 에코 럭셔리를 표방하는 퍼퓸드",
          image_url : "https://img.thehandsome.com/md/publish/dummy/pc/system-main-banner.png",
          link_url : "#none"
      },
      {
          title: "OBVIOUS<br>가을을 함께하다",
          desc: "디자인의 에코 럭셔리를 표방하는 퍼퓸드",
          image_url : "https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-banner.png",
          link_url : "#none"
      },
      {
          title: "OBVIOUS",
          desc: "TOM GREYHOUND 22 S/S 신규 브랜미니멀한<br>디자인의 에코 럭셔리를 표방하는 퍼퓸드",
          image_url : "https://img.thehandsome.com/md/publish/dummy/pc/system-main-banner.png",
          link_url : "#none"
      },
    ],
    brandList : [
      {
        brand_name : '톰그레이하운드',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-brand0.png',
        link_url : '#n',
      },
      {
        brand_name : '폼맨즈라운지',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-brand1.png',
        link_url : '#n',
      },
      {
        brand_name : '무이',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-brand2.png',
        link_url : '#n',
      },
      {
        brand_name : '폼스튜디오',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-brand3.png',
        link_url : '#n',
      },
      {
        brand_name : '에이치씬',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-brand4.png',
        link_url : '#n',
      },
      {
        brand_name : '폼더스토어',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-brand5.png',
        link_url : '#n',
      },
      {
        brand_name : '리퀴드퍼퓸바',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-brand6.png',
        link_url : '#n',
      },
      {
        brand_name : '리퀴드퍼퓸바',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-brand6.png',
        link_url : '#n',
      },
    ],
    newBrandList : [
      {
        title : 'SAINT JAMES 1',
        desc : 'SAINT JAMES는 이름에서도 알 수 있듯이 파리 외곽의 수도원, 프랑스의 유명한 관광지인 몽생 미셸 근처 ST.JAMES 지역에서 시작된 브랜드입니다. 클래식 마린 룩을 원하든, 심플한 데일리 룩을 원하든.SAINT JAMES는 이름에서도 알 수 있듯이 파리 외곽의 수도원, 프랑스의 유명한 관광지인 몽생 미셸 근처 ST.JAMES 지역에서 시작된 브랜드입니다. 클래식 마린 룩을 원하든, 심플한 데일리 룩을 원하든.SAINT JAMES는 이름에서도 알 수 있듯이 파리 외곽의 수도원, 프랑스의 유명한 관광지인 몽생 미셸 근처 ST.JAMES 지역에서 시작된 브랜드입니다.',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-new-brand2.png',
        link_url : '#n',
      },
      {
        title : 'SAINT JAMES 2',
        desc : 'SAINT JAMES는 이름에서도 알 수 있듯이 파리 외곽의 수도원, 프랑스의 유명한 관광지인 몽생 미셸 근처 ST.JAMES 지역에서 시작된 브랜드입니다. 클래식 마린 룩을 원하든, 심플한 데일리 룩을 원하든.',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-main-news.png',
        link_url : '#n',
      },
      {
        title : 'SAINT JAMES 3',
        desc : 'SAINT JAMES는 이름에서도 알 수 있듯이 파리 외곽의 수도원, 프랑스의 유명한 관광지인 몽생 미셸 근처 ST.JAMES 지역에서 시작된 브랜드입니다. 클래식 마린 룩을 원하든, 심플한 데일리 룩을 원하든.',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-new-brand.png',
        link_url : '#n',
      },
    ],
    popularBrandList : [
      {
        title : 'NEUL',
        desc : 'NEUL은 매일 입을 수 있는 옷에 다양한 디테일<br>디자인을 추구',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-thumbnail.png',
        link_url : '#n',
        list : [
          {
              product_name : '[DORSAY] 준 티어드 셔츠 드레스 준 티어드 셔츠 드레스준 티어드 셔츠 드레스준 티어드 셔츠 드레스준 티어드 셔츠 드레스준 티어드 셔츠 드레스',
              sell_price : '178000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img0.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img2.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 벨티드 투웨이 니트 드레스',
              sell_price : '1450000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img1.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img3.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 엠블럼 자수 위빙 백',
              sell_price : '395000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img2.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img4.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 스캘럽 칼라 체크 셔츠',
              sell_price : '178000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img3.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img0.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 플로럴 셔링 드레스',
              sell_price : '258000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img4.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img1.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 준 티어드 셔츠 드레스',
              sell_price : '178000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img0.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img2.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 벨티드 투웨이 니트 드레스',
              sell_price : '1450000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img1.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img3.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 엠블럼 자수 위빙 백',
              sell_price : '395000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img2.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img4.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 스캘럽 칼라 체크 셔츠',
              sell_price : '178000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img3.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img0.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 플로럴 셔링 드레스',
              sell_price : '258000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img4.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img1.png',
              link_url : '#n',
              zzim: false,
          },
        ],
      },
      {
        title : 'NORTH WORKS',
        desc : '완전한 기술을 갖춘 장인이 만든 정교한 수공품으로 잘 알려져<br>있는 브랜드입니다.',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular1-thumbnail.png',
        link_url : '#n',
       list : [
          {
              product_name : '[DORSAY] 준 티어드 셔츠 드레스준 티어드 셔츠 드레스준 티어드 셔츠 드레스준 티어드 셔츠 드레스준 티어드 셔츠 드레스준 티어드 셔츠 드레스',
              sell_price : '178000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img0.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img2.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 벨티드 투웨이 니트 드레스',
              sell_price : '1450000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img1.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img3.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 엠블럼 자수 위빙 백',
              sell_price : '395000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img2.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img4.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 스캘럽 칼라 체크 셔츠',
              sell_price : '178000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img3.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img0.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 플로럴 셔링 드레스',
              sell_price : '258000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img4.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img1.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 준 티어드 셔츠 드레스',
              sell_price : '178000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img0.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img2.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 벨티드 투웨이 니트 드레스',
              sell_price : '1450000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img1.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img3.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 엠블럼 자수 위빙 백',
              sell_price : '395000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img2.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img4.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 스캘럽 칼라 체크 셔츠',
              sell_price : '178000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img3.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img0.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 플로럴 셔링 드레스',
              sell_price : '258000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img4.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img1.png',
              link_url : '#n',
              zzim: false,
          },
        ],
      },
      {
        title : 'REJINA PYO',
        desc : '페미닌과 빈티지무드, 모던함이<br>어우러진 우아한 실루엣의 브랜드',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular2-thumbnail.png',
        link_url : '#n',
        list : [
          {
              product_name : '[DORSAY] 준 티어드 셔츠 드레스준 티어드 셔츠 드레스준 티어드 셔츠 드레스준 티어드 셔츠 드레스준 티어드 셔츠 드레스',
              sell_price : '178000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img0.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img2.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 벨티드 투웨이 니트 드레스',
              sell_price : '1450000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img1.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img3.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 엠블럼 자수 위빙 백',
              sell_price : '395000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img2.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img4.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 스캘럽 칼라 체크 셔츠',
              sell_price : '178000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img3.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img0.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 플로럴 셔링 드레스',
              sell_price : '258000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img4.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img1.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 준 티어드 셔츠 드레스',
              sell_price : '178000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img0.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img2.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 벨티드 투웨이 니트 드레스',
              sell_price : '1450000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img1.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img3.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 엠블럼 자수 위빙 백',
              sell_price : '395000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img2.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img4.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 스캘럽 칼라 체크 셔츠',
              sell_price : '178000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img3.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img0.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 플로럴 셔링 드레스',
              sell_price : '258000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img4.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img1.png',
              link_url : '#n',
              zzim: false,
          },
        ],
      },
      {
        title : 'MIJEONG PARK',
        desc : '오래 두고 입을 수 있는<br>베이직한 디자인을 추구하는 브랜드',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular3-thumbnail.png',
        link_url : '#n',
        list : [
          {
              product_name : '[DORSAY] 준 티어드 셔츠 드레스 준 티어드 셔츠 드레스준 티어드 셔츠 드레스준 티어드 셔츠 드레스준 티어드 셔츠 드레스',
              sell_price : '178000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img0.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img2.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 벨티드 투웨이 니트 드레스',
              sell_price : '1450000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img1.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img3.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 엠블럼 자수 위빙 백',
              sell_price : '395000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img2.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img4.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 스캘럽 칼라 체크 셔츠',
              sell_price : '178000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img3.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img0.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 플로럴 셔링 드레스',
              sell_price : '258000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img4.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img1.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 준 티어드 셔츠 드레스',
              sell_price : '178000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img0.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img2.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 벨티드 투웨이 니트 드레스',
              sell_price : '1450000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img1.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img3.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 엠블럼 자수 위빙 백',
              sell_price : '395000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img2.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img4.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 스캘럽 칼라 체크 셔츠',
              sell_price : '178000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img3.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img0.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 플로럴 셔링 드레스',
              sell_price : '258000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img4.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img1.png',
              link_url : '#n',
              zzim: false,
          },
        ],
      },
      {
        title : 'GREY MANSION',
        desc : '1940~70년대의 모던하고<br>미니멀리스틱한 아이템을 제한합니다',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular4-thumbnail.png',
        link_url : '#n',
        list : [
          {
              product_name : '[DORSAY] 준 티어드 셔츠 드레스 준 티어드 셔츠 드레스준 티어드 셔츠 드레스준 티어드 셔츠 드레스준 티어드 셔츠 드레스',
              sell_price : '178000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img0.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img2.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 벨티드 투웨이 니트 드레스',
              sell_price : '1450000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img1.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img3.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 엠블럼 자수 위빙 백',
              sell_price : '395000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img2.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img4.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 스캘럽 칼라 체크 셔츠',
              sell_price : '178000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img3.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img0.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 플로럴 셔링 드레스',
              sell_price : '258000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img4.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img1.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 준 티어드 셔츠 드레스',
              sell_price : '178000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img0.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img2.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 벨티드 투웨이 니트 드레스',
              sell_price : '1450000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img1.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img3.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 엠블럼 자수 위빙 백',
              sell_price : '395000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img2.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img4.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 스캘럽 칼라 체크 셔츠',
              sell_price : '178000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img3.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img0.png',
              link_url : '#n',
              zzim: false,
          },
          {
              product_name : '[DORSAY] 플로럴 셔링 드레스',
              sell_price : '258000',
              image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img4.png',
              image_url2 : 'https://img.thehandsome.com/md/publish/dummy/pc/editshop-main-popular0-img1.png',
              link_url : '#n',
              zzim: false,
          },
        ],
      }
    ],
    newPrdList : [
      {
          "brand_name" : "TOTEME",
          "product_name": "[REJINA PYO] 컨트라스트 커프 크롭 재킷 컨트라스트 커프 크롭 재킷 컨트라스트 커프 크롭 재킷 컨트라스트 커프 크롭 재킷 컨트라스트 커프 크롭 재킷",
          "sell_price": "350000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/001.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name" : "TOM GREYHOUND",
          "product_name": "[REJINA PYO] 버튼 칼라 니트 가디건",
          "sell_price": "395000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/002.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
          "link_url" : "#none",
          "zzim": true,
      },
      {
          "brand_name" : "TOTEME",
          "product_name": "[REJINA PYO] 텍스쳐 블록 드레스",
          "sell_price": "346000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/003.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name" : "TOM GREYHOUND",
          "product_name": "[REJINA PYO] 윙 슬리브 셔링 드레스",
          "sell_price": "495000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/004.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/014.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name" : "TOTEME",
          "product_name": "[REJINA PYO] 포켓 싱글 재킷",
          "sell_price": "350000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/021.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name" : "TOM GREYHOUND",
          "product_name": "[REJINA PYO] 버튼 칼라 니트 가디건",
          "sell_price": "395000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/022.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name" : "TOTEME",
          "product_name": "[REJINA PYO] 텍스쳐 블록 드레스",
          "sell_price": "346000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/023.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "brand_name" : "TOM GREYHOUND",
          "product_name": "[REJINA PYO] 윙 슬리브 셔링 드레스",
          "sell_price": "495000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/014.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/024.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
    ],
    brandNews : {
      image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-main-news.png',
      link_url : '#n',
      title : '더블 마일리지에 놓칠 수 없는 겨울<br>아우터를 소개 합니다.',
      desc : '발리가 패션 디렉터 로버트 라벤스타이너와 함께 산악인의 탐험 정신을<br>기념하는 캡슐 컬렉션을 공개했다.',
      date : '2022. 03. 10',
    },
    banner : {
      list : [
        {
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/slide01.png",
        },
        {
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/slide02.png",
        },
      ]
    }
  }),

  created(){
    
  },// created

  mounted(){
    EventBus.$emit("setHeader", {static: true, type: "editshopMain", transparent: true})
  },// mounted

  methods: {
    
  }// methods
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/brand.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
