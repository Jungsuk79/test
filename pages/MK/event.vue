<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap event-list">
      <div class="cmp-page-tit">
        <h2 class="tit">이벤트</h2>
      </div>    

      <v-layout align-end justify-space-between class="sorting-area">
            <v-btn outlined color="primary">당첨자 발표 공지</v-btn>
            <div class="select-wrap">
              <CommonSelectSortBox>
                <template #optionList>
                    <option value="option1">브랜드 전체</option>
                    <option value="option2">옵션2</option>
                </template>
              </CommonSelectSortBox>
              <CommonSelectSortBox>
                <template #optionList>
                    <option value="option1">최신 순</option>
                    <option value="option2">옵션2</option>
                </template>
              </CommonSelectSortBox>
            </div>
      </v-layout>
      <ul class="board-list">
        <li v-for="n in 12" :key="n">
          <nuxt-link to="#none" >
            <div class="thumb">
              <!-- 221215 이벤트 : 이미지 마크업 변경 -->
              <!-- <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/gifts-img1.png" alt="상품명"></v-img> -->
              <div v-background-image="{url:'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img1.png'}" class="thumb-img"></div>
              <!-- // 221215 이벤트 : 이미지 마크업 변경 -->
              <span v-if="n<2" class="bookmark">
                <v-img src="/images/common/bookmark_on.svg" alt="즐겨찾기"></v-img> <!-- 최상단 고정된 게시물 -->
              </span>
            </div>
            <dl class="list-info" :class="{'cmp-info info-type2':n<4}"> <!-- 최상단 고정된 게시물 : 클래스추가 cmp-info info-type2 -->
              <dt>앱 다운로드 이벤트</dt>
              <dd>2021.12.07 ~ 2021.12.26</dd>
            </dl>
          </nuxt-link>
        </li>
      </ul>      
      <ProductListPaging />  

    </div>
  </div>
</template>

<script>

export default {
  layout: 'LayoutBasics',
  components : {
  },  
  data: () => ({

  }),
  methods: {
  },
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/event.scss'; 
</style>
