<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->  
    <div class="content-wrap">
      <div class="brand-sort-box">
        <CommonSelectSortBox id="sort">
          <template #optionList>
              <!--<option value="placeholder">연도, 시즌</option>--><!--220913 룩북 : 삭제-->
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
      </div>
      <ul class="brand-item-list">
        <li v-for="(item, index) in campaignList" :key="index">
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
import EventBus from '~/api/common/EventBus'

export default {
  components: {},
  layout: 'LayoutBasics',

  data: () => ({
    campaignList : [
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-campaign-img0.png',
        link_url : '#n',
        title : '2022 S/S CAMPAIGN',
        zzim : false,
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-campaign-img1.png',
        link_url : '#n',
        title : '2020 S/S AMPAIGN_PART2',
        zzim : false,
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-campaign-img2.png',
        link_url : '#n',
        title : '2021 F/W CAMPAIGN',
        zzim : false,
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-campaign-img3.png',
        link_url : '#n',
        title : '2020 S/S CAMPAIGN_PART1',
        zzim : false,
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-campaign-img0.png',
        link_url : '#n',
        title : '2022 S/S CAMPAIGN',
        zzim : false,
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-campaign-img1.png',
        link_url : '#n',
        title : '2020 S/S AMPAIGN_PART2',
        zzim : false,
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-campaign-img2.png',
        link_url : '#n',
        title : '2021 F/W CAMPAIGN',
        zzim : false,
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-campaign-img3.png',
        link_url : '#n',
        title : '2020 S/S CAMPAIGN_PART1',
        zzim : false,
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-campaign-img0.png',
        link_url : '#n',
        title : '2022 S/S CAMPAIGN',
        zzim : false,
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-campaign-img1.png',
        link_url : '#n',
        title : '2020 S/S AMPAIGN_PART2',
        zzim : false,
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-campaign-img2.png',
        link_url : '#n',
        title : '2021 F/W CAMPAIGN',
        zzim : false,
      },
      {
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-campaign-img3.png',
        link_url : '#n',
        title : '2020 S/S CAMPAIGN_PART1',
        zzim : false,
      },
    ]
  }),

  created(){
    
  },// created

  mounted(){
    EventBus.$emit("setHeader", {static: true, type: "brand", brand: "SJSJ", menu :"캠페인"})
  },// mounted

  methods: {
    
  }// methods
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/brand.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
