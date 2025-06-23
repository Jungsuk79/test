<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap content-magazine">
      <div class="magazine-headertab">
        <div class="cmp-page-tit">
          <h2 class="tit">THE 매거진</h2>
        </div>

        <v-layout justify-start align-center>
          <!-- [퍼블수정]23.10.11 더매거진 수정 -->
          <div class="cmp-tabs tabs-actionText theMagazine mag-category" :class="{'sometab': tabsindex === 6}">
            <v-tabs v-model="tabsindex">
              <v-tab>
                <span>전체</span>
                <span class="hidden">전체</span>
              </v-tab>
              <v-tab>
                <span>커버스토리</span>
                <span class="hidden">커버스토리</span>
              </v-tab>
              <v-tab>
                <span>Q.P.T.</span>
                <span class="hidden">Q.P.T.</span>
              </v-tab>
              <v-tab>
                <span>스타일가이드</span>
                <span class="hidden">스타일가이드</span>
              </v-tab>
              <v-tab>
                <span>셀렉션</span>
                <span class="hidden">셀렉션</span>
              </v-tab>
              <v-tab>
                <span>에디터픽</span>
                <span class="hidden">에디터픽</span>
              </v-tab>
              <v-tab>
                <span>#SOME</span>
                <span class="hidden">#SOME</span>
              </v-tab>
              <v-tab>
                <span>뉴스</span>
                <span class="hidden">뉴스</span>
              </v-tab>
            </v-tabs>
            <v-tabs v-model="tabsindexSome" v-if="tabsindex === 6">
              <v-tab>
                <span>전체</span>
                <span class="hidden">전체</span>
              </v-tab>
              <v-tab>
                <span>#SOME's CLOSET</span>
                <span class="hidden">#SOME's CLOSET</span>
              </v-tab>
              <v-tab>
                <span>aweSOME life</span>
                <span class="hidden">aweSOME life</span>
              </v-tab>
            </v-tabs>
          </div>
          <!-- [퍼블수정]23.10.11 더매거진 수정 -->

          <div v-if="selecValShow" class="cmp-tabs tabs-actionText">
            <v-tabs v-model="selectedTab">
              <v-tab>aweSOME life</v-tab>
              <v-tab>#SOME's CLOSET</v-tab>
            </v-tabs>
          </div>

          <div class="ml-auto">
            <CommonSelectSortBox id="sort">
              <template #optionList>
                  <option value="option1">브랜드 전체</option>
                  <option value="option2">옵션2</option>
              </template>
            </CommonSelectSortBox>
          </div>
        </v-layout>
      </div>
      
      <div class="magazine-main-list">
        <ul><!-- 230214 매거진 : ul 클래스 삭제 -->
          <li v-for="item,itemIdx in list" :key="itemIdx" :class="'item_' + itemIdx"><!-- 230214 매거진 : v-masonry-span 삭제 -->
            <div class="list-item"><!-- 230214 매거진 : cmp-masonry-item 클래스 삭제 -->
              <nuxt-link :to="item.link_url">
                <div class="list-images">
                  <div class="images" v-background-image="{url:item.image_url}"></div>
                </div>
                <div class="list-text">
                  <!-- [퍼블수정]23.10.11 더매거진 수정 -->
                  <div class="list-type" v-if="tabsindex === 6">#SOME's CLOSET</div>
                  <div class="list-type" v-else>{{item.type}}</div>
                  <div class="list-title">{{item.title}}</div>
                  <div v-html="newLine(item.desc)" class="list-desc"></div>
                </div>
              </nuxt-link>
            </div>
          </li>
        </ul>
      </div>

      <ProductListPaging class="mt-0"/><!-- 230214 매거진 : mt-0 클래스 추가 -->
    </div>                                                  
  </div>
</template>

<script>
export default {
  components: {

  },
  layout: 'LayoutBasics',
  data: () => ({
    // [퍼블수정]23.10.11 더매거진 수정
    tabsindex: 6,
    tabsindexSome:0,
    selecValShow: false, // some일때만 노출
    list: [
      {
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-01.png",
          "link_url": "#none",
          "title": "그해 여름, 타임옴므",
          "type": "커버스토리",
          "desc": "쏟아지는 햇빛 사이로 유영하는 댄서 아이반 길고 나른한 실루엣에 강렬한 컬러를 더한 타임옴므의 캡슐 컬렉션쏟아지는 햇빛 사이로 유영하는 댄서 아이반 길고 나른한 실루엣에 강렬한 컬러를 더한 타임옴므의 캡슐 컬렉션"
      },{
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-05.png",
          "link_url": "#none",
          "title": "그해 여름, 타임옴므",
          "type": "커버스토리",
          "desc": "쏟아지는 햇빛 사이로 유영하는 댄서 아이반 길고 나른한 실루엣에 강렬한 컬러를 더한 타임옴므의 캡슐 컬렉션쏟아지는 햇빛 사이로 유영하는 댄서 아이반 길고 나른한 실루엣에 강렬한 컬러를 더한 타임옴므의 캡슐 컬렉션"
      },{
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-02.png",
          "link_url": "#none",
          "title": "그해 여름, 타임옴므",
          "type": "커버스토리",
          "desc": "쏟아지는 햇빛 사이로 유영하는 댄서"
      },{
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-06.png",
          "link_url": "#none",
          "title": "그해 여름, 타임옴므",
          "type": "커버스토리",
          "desc": "쏟아지는 햇빛 사이로 유영하는 댄서"
      },{
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-09.png",
          "link_url": "#none",
          "title": "그해 여름, 타임옴므",
          "type": "커버스토리",
        "desc": "쏟아지는 햇빛 사이로 유영하는 댄서 아이반 길고 나른한 실루엣에 강렬한 컬러를 더한 타임옴므의 캡슐 컬렉션쏟아지는 햇빛 사이로 유영하는 댄서 아이반 길고 나른한 실루엣에 강렬한 컬러를 더한 타임옴므의 캡슐 컬렉션"
      },{
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-03.png",
          "link_url": "#none",
          "title": "그해 여름, 타임옴므",
          "type": "커버스토리",
          "desc": "쏟아지는 햇빛 사이로 유영하는 댄서 아이반 길고 나른한 실루엣에 강렬한 컬러를 더한 타임옴므의 캡슐 컬렉션쏟아지는 햇빛 사이로 유영하는 댄서 아이반 길고 나른한 실루엣에 강렬한 컬러를 더한 타임옴므의 캡슐 컬렉션"
      },{
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-07.png",
          "link_url": "#none",
          "title": "그해 여름, 타임옴므",
          "type": "커버스토리",
          "desc": "쏟아지는 햇빛 사이로 유영하는 댄서"
      },{
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-04.png",
          "link_url": "#none",
          "title": "그해 여름, 타임옴므",
          "type": "커버스토리",
          "desc": "쏟아지는 햇빛 사이로 유영하는 댄서"
      },{
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-08.png",
          "link_url": "#none",
          "title": "그해 여름, 타임옴므",
          "type": "커버스토리",
          "desc": "쏟아지는 햇빛 사이로 유영하는 댄서 아이반 길고 나른한 실루엣에 강렬한 컬러를 더한 타임옴므의 캡슐 컬렉션"
      },{
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-curation-10.png",
          "link_url": "#none",
          "title": "그해 여름, 타임옴므",
          "type": "커버스토리",
        "desc": "쏟아지는 햇빛 사이로 유영하는 댄서 아이반 길고 나른한 실루엣에 강렬한 컬러를 더한 타임옴므의 캡슐 컬렉션"
      }
    ],
 }),
  created() {
   
  },
  methods: {
    newLine(str) {
      return String(str).replace(/(?:\r\n|\r|\n)/g, '</br>')
    },
    selectVal(val) {
      if (val === 'option5') this.selecValShow = true
      else this.selecValShow = false
    },
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/magazine.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>
