<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->  
    <div class="content-wrap lookBookMain"><!-- [퍼블수정]23.01.04 결함 - HUN3-2778 -->
      <div class="cmp-page-tit align-end">
        <h2 class="tit">룩북</h2>
        <div class="brand-sort-box">
          <CommonSelectSortBox id="sort">
            <template #optionList>
                <option value="all">시즌 전체</option>
                <option value="2022SS">2022년 S/S</option>
                <option value="2021FW">2021년 F/W</option>
                <option value="2021SS">2021년 S/S</option>
                <option value="2020FW">2020년 F/W</option>
                <option value="2020SS">2020년 S/S</option>
                <option value="2019FW">2019년 F/W</option>
                <option value="2019SS">2019년 S/S</option>
                <option value="2018FW">2018년 F/W</option>
                <option value="2018SS">2018년 S/S</option>
                <option value="2017FW">2017년 F/W</option>
                <option value="2017SS">2017년 S/S</option>
                <option value="2016FW">2016년 F/W</option>
                <option value="2016SS">2016년 S/S</option>
            </template>
          </CommonSelectSortBox>
          <CommonSelectSortBox id="sort2">
            <template #optionList>
                <option value="all">브랜드 전체</option>
                <option value="TIME">TIME</option>
                <option value="MINE">MINE</option>
                <option value="SYSTEM">SYSTEM</option>
                <option value="SJSJ">SJSJ</option>
                <option value="TIME HOMME">TIME HOMME</option>
                <option value="SYSTEM HOMME">SYSTEM HOMME</option>
                <option value="the CASHMERE">the CASHMERE</option>
                <option value="LANVIN COLLECTION">LANVIN COLLECTION</option>
                <option value="LÄTT">LÄTT</option>
                <option value="OBZEE">OBZEE</option>
                <option value="CLUB MONACO">CLUB MONACO</option>
                <option value="O'2nd">O'2nd</option>
            </template>
          </CommonSelectSortBox>
        </div>
      </div>
      <ul class="brand-item-list">
        <li v-for="(item, index) in lookbookList" :key="index">
          <nuxt-link :to="item.link_url">
            <div v-background-image="{url:item.image_url}"></div>
            <div class="tit">{{item.title}}</div>
          </nuxt-link>
          <button class="zzim-btn" :class="{on:item.zzim}" @click="item.zzim = !item.zzim"><span class="ir">찜하기</span></button>
        </li>
      </ul>
      <ProductListPaging />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  layout: 'LayoutBasics',

  data: () => ({
    lookbookList : [
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-lookbook-img0.png',
        link_url : '#n',
        title : 'SJSJ 2022 S/S Men No.3',
        zzim : false,
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-lookbook-img1.png',
        link_url : '#n',
        title : 'SJSJ 2022 S/S No.8',
        zzim : false,
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-lookbook-img2.png',
        link_url : '#n',
        title : 'SJSJ 2022 S/S No.9',
        zzim : false,
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-lookbook-img3.png',
        link_url : '#n',
        title : 'SJSJ 2022 S/S Women No.2',
        zzim : false,
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-lookbook-img0.png',
        link_url : '#n',
        title : 'SJSJ 2022 S/S Men No.3',
        zzim : false,
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-lookbook-img1.png',
        link_url : '#n',
        title : 'SJSJ 2022 S/S No.8',
        zzim : false,
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-lookbook-img2.png',
        link_url : '#n',
        title : 'SJSJ 2022 S/S No.9',
        zzim : false,
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-lookbook-img3.png',
        link_url : '#n',
        title : 'SJSJ 2022 S/S Women No.2',
        zzim : false,
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-lookbook-img0.png',
        link_url : '#n',
        title : 'SJSJ 2022 S/S Men No.3',
        zzim : false,
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-lookbook-img1.png',
        link_url : '#n',
        title : 'SJSJ 2022 S/S No.8',
        zzim : false,
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-lookbook-img2.png',
        link_url : '#n',
        title : 'SJSJ 2022 S/S No.9',
        zzim : false,
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-lookbook-img3.png',
        link_url : '#n',
        title : 'SJSJ 2022 S/S Women No.2',
        zzim : false,
      },
    ]
  }),

  created(){
    
  },// created

  mounted(){
    
  },// mounted

  methods: {
    
  }// methods
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/brand.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
