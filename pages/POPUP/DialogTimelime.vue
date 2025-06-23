<template>
    <DialogBasic
    class="popup-timelime" 
        :width="500"
        header-title="타임라인" 
        @hide="closeDialog">
        <template #body>
            <div class="content-wrap mw-0">
                <div class="cmp-info info-type1">
                    <p>타임라인은 최근 <span>50</span>건까지 저장합니다.</p>
                </div>
                <!-- s : 전체삭제 버튼 -->
                <div class="clear-box">
                  <button class="cmp-font fnt-14 button">
                    <span class="line">전체삭제</span>
                  </button>
                </div>
                <!-- e : 전체삭제 버튼 -->
                <!-- s : 타임라인 오늘 -->
                <div class="timeline-today mt-40">
                  <div class="timeline-tit mb-10">
                    <h2 class="tit"><span>2022.02.22</span><span class="subtag">오늘</span></h2>
                  </div>

                  <!-- [퍼블수정] 22.07.26 가격삭제, 이미지에 soldout 문구삭제 -->
                  <ul class="timelineList">
                    <!-- s: 유형1(기본상품) -->
                    <template v-for="(item, index) in prdDataType1">
                        <li :key="index" class="timeline-proType">
                            <nuxt-link :to="item.link" class="product-row-unitInfo product-row-unitPrice">
                            <div class="product-image">
                                <v-img :src="item.image" :alt="item.product_name" />
                            </div>
                            <div class="product-info-cnt">
                                <div class="product-brand mb-2">{{item.brand_name}}</div>
                                <div class="product-name mb-16">{{item.product_name}}</div>
                            </div>
                            </nuxt-link>
                            <div class="product-row-unitBtn">
                            <v-btn icon @click="item.zzim = !item.zzim">
                                <span v-show="item.zzim" v-cmp-icon="{ size: 18, name: 'heartOn'}">찜 삭제</span>
                                <span v-show="!item.zzim" v-cmp-icon="{ size: 18, name: 'heartOff'}">찜 추가</span>
                            </v-btn>
                            </div>
                        </li>
                    </template>
                    <!-- e: 유형1(기본상품) -->
                </ul>
                </div>
                <!-- e : 타임라인 오늘 -->


                <!-- s : 타임라인 이전 -->
                <div class="timeline-pre mt-34">
                <div class="timeline-tit mb-10">
                    <h2 class="tit"><span>2021.12.05</span></h2>
                </div>
                <ul class="timelineList">
                    <!-- s : 검색어 -->
                    <li>
                    <div class="timeline-search">
                        <nuxt-link to="#n">
                        <i class="cmp-icon cmp-icon-16 i-search"></i>
                        <span>검색어</span>
                        </nuxt-link>
                    </div>
                    </li>
                    <li>
                    <div class="timeline-search">
                        <nuxt-link to="#n">
                        <i class="cmp-icon cmp-icon-16 i-search"></i>
                        <span>FOURM MEN’S LOUNGE 노바하이탑 사이키델릭 페이즐리</span>
                        </nuxt-link>
                    </div>
                    </li>
                    <!-- e : 검색어 -->

                    <!-- s : 유형2 live,매거진 / 이벤트 / 메세지 -->
                    <template v-for="(item, index) in prdDataType2">
                        <li :key="index"  class="timeline-text" :class="item.typeclass">
                            <nuxt-link :to="item.link" class="product-row-unitInfo product-row-unitPrice">
                            <div v-if="item.image" class="product-image">
                                <v-img :src="item.image" :alt="item.product_name" />
                            </div>
                            <div class="product-info-cnt">
                                <div class="product-brand">{{item.brand_name}}</div>
                                <div v-if="item.options" class="product-option">
                                    <span v-for="(item2,index2) in item.options" :key="index2" class="option">{{item2}}</span>
                                </div>
                            </div>
                            </nuxt-link>
                            <div v-if="item.typeclass !== 'timeline-event'" class="product-row-unitBtn">
                            <v-btn icon @click="item.zzim = !item.zzim" v-if="item.image">
                                <span v-show="item.zzim" v-cmp-icon="{ size: 18, name: 'heartOn'}">찜 삭제</span>
                                <span v-show="!item.zzim" v-cmp-icon="{ size: 18, name: 'heartOff'}">찜 추가</span>
                            </v-btn>
                            </div>
                        </li>
                    </template>
                    <!-- e : 유형2 live,매거진 / 이벤트 / 메세지-->

                </ul>
                </div>
                <!-- e : 타임라인 이전 -->

                <!-- s: 타임라인 없을 때 -->
                <CommonNoData>
                  <template #message>
                    <p class="mb-20">아직 쇼핑 히스토리가 없으시네요.</p>
                    <p class="mb-20">더한섬닷컴의 신상품<br />인기상품을 둘러보실 수 있습니다.</p>
                    <nuxt-link class="cmp-font button" to="#n">쇼핑백 메인 바로가기  <i class="cmp-icon cmp-icon-12 i-next"></i></nuxt-link>
                    <p class="mb-20 mt-120">다양한 컨텐츠로 패션 트랜드를<br />파악하실 수 있습니다.</p><!-- [퍼블수정]23.02.17 문구수정 -->
                    <nuxt-link class="cmp-font button" to="#n">콘텐츠 메인 바로가기  <i class="cmp-icon cmp-icon-12 i-next"></i></nuxt-link>
                  </template>
                </CommonNoData>
                <!-- s: 타임라인 없을 때 -->
            
            </div>
        </template>
    </DialogBasic>
</template>
<script>

import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  components: {
    DialogBasic,

  },
  data: () => ({
    DialogBasic: false, // 팝업
    prdDataType1: [
      {
        brand_name: 'MINE',
        product_name: '백 패턴 덤블 점퍼',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
        link: '#n',
        zzim : false,
      },
      {
        brand_name: 'FOURM MEN’S LOUNGE',
        product_name: '[BEARBRICK] 사이키델릭 페이즐리',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
        options: ['CHARCOAL GRAY', '90', '1개'],
        link: '#n',
        zzim : false,
      },
      {
        brand_name: 'FOURM MEN’S LOUNGE',
        product_name: '[BEARBRICK] 사이키델릭 페이즐리',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
        options: ['CHARCOAL GRAY', '90', '1개'],
        link: '#n',
        zzim : false,
      },
    ],
    prdDataType2: [
      {
        typeclass:'timeline-issueType',
        brand_name: 'THE매거진',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
        options: ['내용'],
        link: '#n',
        zzim : false,
      },
      {
        typeclass:'timeline-issueType',
        brand_name: '스타일가이드',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
        options: ['최대 2줄 가을과 겨울 사이  가을과 겨울 사이 가을과 겨울 사이가을과 겨울 사이  가을과 겨울 사이 가을과 겨울 사이'],
        link: '#n',
        zzim : false,
      },
      {
        typeclass:'timeline-event',
        brand_name: '이벤트',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
        options: ['이벤트 유형'],
        link: '#n',
      },
      
    ],
  }),
  
  created(){
    const me = this
    const json = require("~/static/json/product_list.json")
    me.productList = json.list
  },
  methods:{


    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss">
</style>
