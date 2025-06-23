<template>
  <div class="contents">
    <!-- [퍼블수정]22.12.08 결함 HFOT-3949 수정-->
    <div v-scroll="onScroll" class="content-wrap content-magazineTemp content-magazineTempE">
        <MagHeader :data="{title:'커버스토리',subTitle : '타임옴므가 꿈꾸는 여름', date:'2021.12.29'}" />
        <!-- [s] html영역 - 더매거진 TYPE B와 동일 -->
        <div class="mag-temp-full-width">
          <div class="main-imgArea mb-140">
            <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/maga-banner.png" alt=""></v-img>
            <div class="textBox">
                <p class="tit mb-24">타임옴므가 꿈꾸는 여름</p>
                <p class="txt"> 3줄 데님과 쇼츠, 파스텔 컬러 니트와 베이직 아이템이 함께 뒤섞여 조화를 이루는 이번 타임 옴므 온라인 전용 컬렉션은 지금부터 올 여름까지 입기에 완벽한 스타일을 제안한다. </p>
            </div>
          </div>
        </div>
        <!-- [e] html영역 - 더매거진 TYPE B와 동일 -->

        <div class="anchorArea mag-temp-full-width">
          <!-- [s] 앵커탭 [퍼블수정]23.02.07 -->
          <div v-sticky-tabs="{planDetail: true}" class="anchorTabs planshop-tabs fullver" :class="{'column08' : tabList2.length > 8}">
            <div class="fixed-tabsBox">
              <div class="fixed-tabs">
                <button v-for="(item,index) in tabList2" :key="index" :target="'TabCont' + (index + 1)">
                    <span>{{item}}</span>
                </button>
              </div>
            </div>
          </div>
          <!-- [e] 앵커탭 -->

          <!-- [s] 앵커탭 내용 -->
          <div class="anchorCon column2 mb-120">
            <!-- 2줄메뉴 column2클래스 추가 -->
            <div id="TabCont1" class="anchorBox planAllBox">
              <p class="tit">잡화</p>
              <!-- [퍼블수정]23.12.14 상품 유형 수정 -->
              <ProductList class="plan-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe2" />
            </div>
            <div id="TabCont2" class="anchorBox planAllBox">
              <!-- HTML -->
              <div class="mag-temp-full-width">
                <!-- 예시 html 내용 - 이미지가 꽉 차보이지 않아서 퍼블에서 임의로 넣은 -->
                <div style="width:100%; background: #1b2f23;">
                  <img src="https://img.thehandsome.com/md/publish/dummy/pc/planImage1800.png" alt="" />
                </div>
              </div>
              <!-- // HTML -->
              <!-- [퍼블수정]23.12.14 상품 유형 수정 -->
              <ProductList class="plan-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe2" />
            </div>
            <div id="TabCont3" class="anchorBox planAllBox">
              <p class="tit">가디건/베스트</p>
              <!-- [퍼블수정]23.12.14 상품 유형 수정 -->
              <ProductList class="plan-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe2" />
            </div>
            <div id="TabCont4" class="anchorBox planAllBox">
              <p class="tit">트렌치코트</p>
              <!-- [퍼블수정]23.12.14 상품 유형 수정 -->
              <ProductList class="plan-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe2" />
            </div>
            <div id="TabCont5" class="anchorBox planAllBox">
              <p class="tit">코트</p>
              <!-- [퍼블수정]23.12.14 상품 유형 수정 -->
              <ProductList class="plan-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe2" />
            </div>
            <!-- <div id="TabCont6" class="anchorBox planAllBox">
              <p class="tit">코트</p>
              <ProductList class="plan-list" :list="productList" :layout="4" :unit-type="productUnitType" :swipe="productUnitAnchor" />
            </div>
            <div id="TabCont7" class="anchorBox planAllBox">
              <p class="tit">코트</p>
              <ProductList class="plan-list" :list="productList" :layout="4" :unit-type="productUnitType" :swipe="productUnitAnchor" />
            </div>
            <div id="TabCont8" class="anchorBox planAllBox">
              <p class="tit">코트</p>
              <ProductList class="plan-list" :list="productList" :layout="4" :unit-type="productUnitType" :swipe="productUnitAnchor" />
            </div>
            <div id="TabCont9" class="anchorBox planAllBox">
              <p class="tit">코트</p>
              <ProductList class="plan-list" :list="productList" :layout="4" :unit-type="productUnitType" :swipe="productUnitAnchor" />
            </div>
            <div id="TabCont10" class="anchorBox planAllBox">
              <p class="tit">코트</p>
              <ProductList class="plan-list" :list="productList" :layout="4" :unit-type="productUnitType" :swipe="productUnitAnchor" />
            </div> -->
          </div>
          <!-- [e] 앵커탭 내용 -->
        </div>

        <!-- [s] 모아보기 -->
        <div class="magaAllBox stickyTabs mb-120" ref="nextAnchorBox">
          <p class="tit pb-2">위 화보에 실린 상품 모아보기</p><!-- 모바일 기준 1줄 최대 25자 PC 동일하게 적용  -->
          <div class="anchorTabBox" ref="anchorTabBox">
            <div class="cmp-tabs tab-wrapType mb-20 mt-20" :class="{'column05' : tabList.length > 5}">
              <div class="fixed-tabsBox">
                <v-tabs v-model="tab" fixed-tabs>
                  <v-tab v-for="(item,index) in tabList" :key="index" @click="tabTitle(index)">{{item}}</v-tab>
                </v-tabs>
              </div>
            </div>
            <v-expansion-panels v-sticky-tabs accordion class="cmp-acc">
              <v-expansion-panel>
                <v-expansion-panel-header>
                  {{tabTitleName}}
                  <template #actions>
                    <i class="cmp-icon-etc cmp-icon-down">열기/닫기</i>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div class="cmp-tabs tab-wrapType" :class="{'column05' : tabList.length > 5}">
                    <div class="fixed-tabsBox">
                      <v-tabs v-model="tab" fixed-tabs>
                        <v-tab v-for="(item,index) in tabList" :key="index" @click="tabTitle(index)">{{item}}</v-tab>
                      </v-tabs>
                    </div>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
          <div class="tab-content">
            <v-tabs-items v-model="tab">
              <v-tab-item :transition="false">
                <ProductList class="muh-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe2" />
              </v-tab-item>        
              <v-tab-item :transition="false">
               <ProductList class="muh-list" :list="productList2" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe2" />
              </v-tab-item>
              <v-tab-item :transition="false">
                <ProductList class="muh-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe2" />
              </v-tab-item>        
              <v-tab-item :transition="false">
               <ProductList class="muh-list" :list="productList2" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe2" />
              </v-tab-item>
              <v-tab-item :transition="false">
                <ProductList class="muh-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe2" />
              </v-tab-item>        
              <v-tab-item :transition="false">
               <ProductList class="muh-list" :list="productList2" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe2" />
              </v-tab-item>
              <v-tab-item :transition="false">
                <ProductList class="muh-list" :list="productList" :layout="6" :unit-type="productUnitType" :swipe="productUnitSwipe2" />
              </v-tab-item>
              
            </v-tabs-items>
          </div>
        </div>
        <!-- //[퍼블수정]22.12.08 결함 HFOT-3949 수정-->
        <!-- [e] 모아보기 -->

        <!-- [s] 최신 the 매거진 -->
        <div class="magaAllBox magaRecent dim">
          <MagRecent></MagRecent>
        </div>
        <!-- [e] 최신 the 매거진 -->

        <div class="magaBtn mt-60 text-center"><!-- [퍼블수정]23.01.26 mt-40 > mt-60 -->
          <v-btn outlined large color="primary">
            목록
          </v-btn>
        </div>

    </div>
  </div>
</template>

<script>
import MagRecent from '~/components/planshop/MagRecent.vue'
import MagHeader from '~/components/planshop/MagHeader'


export default {
  components: {
    MagRecent,
    MagHeader,

},
  layout: 'LayoutBasics',
  data: () => ({
    tab: null,
    tabTitleName : '전체',
    anchorTabBox : '',
    nextAnchorBox : '',
    productUnitType : 'mini',
    productUnitSwipe : false,
    productUnitSwipe2 : false,
    productUnitAnchor : true,
    productList : [
      {
        "brand_name": "FOURM LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/001.jpg",
        "link_url" : "#none",
        "product_name" : "[BEARBRICK] 사이키델릭 페이즐 사이키델릭 페이즐사이키델릭 페이즐사이키델릭 페이즐사이키델릭 페이즐사이키델릭 페이즐사이키델릭 페이즐",
        "flags": [
            "BEST",
            "NEW"
        ],
        "exclusive":false,
        "limited":true,
      },
      {
        "brand_name": "FOURM MEN’S LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/002.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트",
        "flags": [
            "BEST",
        ],
        "exclusive":true,
        "limited":false,
      },
      {
        "brand_name": "FOURM MEN’S",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/003.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트",
        "flags": [
            "NEW"
        ],
      },
      {
        "brand_name": "LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/004.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      },
      {
        "brand_name": "FOURM MEN’S LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/005.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      },
      {
        "brand_name": "LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/006.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      },
      {
        "brand_name": "FOURM MNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/007.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      },
      {
        "brand_name": " MEN’S LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/008.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트",
        "flags": [
            "BEST",
            "NEW"
        ],
      },
      {
        "brand_name": "FOURM MENUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/009.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      },
      {
        "brand_name": "LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/010.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      },{
        "brand_name": "LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/006.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      },
      {
        "brand_name": "FOURM MNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/007.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      },

    ],
    productList2 : [
      {
        "brand_name": "FOURM MENUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/009.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      },
      {
        "brand_name": "LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/010.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      },{
        "brand_name": "LOUNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/006.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      },
      {
        "brand_name": "FOURM MNGE",
        "sell_price": "284000",
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/007.jpg",
        "link_url" : "#none",
        "product_name" : "돌먼 슬리브 벨티드 트렌치 코트"
      }
    ],
    productList3 : [
      {
        "video" : true,
        "videoImg": "/images/cs/stylelive_1_video_poster.png",
        "video_url": "/images/cs/stylelive_1_video.mp4",
        "desc": "비디오타입",
      },
      {
        "video" : true, // 비디오타입
        "video_url": "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
      },
      {
        "image_url": "https://img.thehandsome.com/attachment/display/pc/editorial/detail/banner/20221018_52641820160389830_ko.jpg",
      },
      /* {
        "image_url": "https://img.thehandsome.com/attachment/display/pc/editorial/detail/banner/20221018_52641820160389830_ko.jpg",
      },
      {
        "image_url": "https://img.thehandsome.com/attachment/display/pc/editorial/detail/banner/20221018_52641820160389830_ko.jpg",
      }, */
      /* {
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/003.jpg",
      },
      {
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/004.jpg",
      } */
    ],
    tabList: [  //  [퍼블수정]22.12.08 결함 HFOT-3949 수정
      '전체',
      '재킷',
      '점퍼',
      '가디건/베스트가디건',
      '트렌치코트',
      '코트',
      '코트',
    ],
    tabList2: [
      '잡화',
      '재킷',
      '가디건/베스트',
      '트렌치코트',
      '코트',
      // '코트',
      // '코트',
      // '코트',
      // '코트',
      // '코트',
    ],
  }),
  created(){
  },
  methods: {  //  [퍼블수정]22.12.08 결함 HFOT-3949 수정
    tabTitle(idx){
      this.tabTitleName = this.tabList[idx]
    },
    onScroll(e) {
    	// 스크롤 움직일 때 마다 호출됨
    	this.scroll = window.scrollY;
      const anchorChange = this.$refs.nextAnchorBox.offsetTop;
      const anchorTabBoxFix = this.$refs.anchorTabBox.offsetTop;

      // 탭1 숨김 
      if(this.scroll + 100 > anchorChange){
        document.querySelector('.anchorTabs').style.display = 'none';
      }else{
        document.querySelector('.anchorTabs').style.display = 'block';
      }

      // 탭2 [퍼블수정]22.12.08 모아보기 수정
      if(this.scroll - 100 > anchorTabBoxFix){
        document.querySelector('.anchorTabBox .cmp-acc').style.display = 'block';
        document.querySelector('.anchorTabBox .cmp-tabs').style.display = 'none';
        document.querySelector('.anchorTabBox + div').style.paddingTop = '124px';
      }else{
        document.querySelector('.anchorTabBox .cmp-acc').style.display = 'none';
        document.querySelector('.anchorTabBox .cmp-tabs').style.display = 'block';
        document.querySelector('.anchorTabBox + div').style.paddingTop = '0';
      }

    },
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/magazine.scss'; 
</style>