<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <ContentsLeftMenu :title="'마이페이지'" :left-data="menuList"></ContentsLeftMenu>
      <div class="my-page-r-box searchFavorite-conts">
        <div class="cmp-page-tit">
          <h2 class="tit">즐겨찾는 검색어</h2>
        </div>

        <div class="cmp-info info-type1">
          <p class="cmp-font">앱푸시 온,오프 설정은 모바일에서만 가능합니다.</p>
        </div>

        <v-layout justify-space-between align-center class="mt-30">
          <div class="all-chk-wrap">
            <div class="chk-box">
              <v-checkbox
                v-model="allChkBox" label="선택" 
                class="cmp-form-checkbox"
                @change="selectAllList($event)"
              ></v-checkbox>
              <span class="num">{{ checkedNum }}</span>
            </div>
          </div>
          <v-btn text class="cmp-font fnt-13 button"><span class="line">선택삭제</span></v-btn>
        </v-layout>

        <table class="table-type1 last-border">
          <colgroup>
            <col width="20px" />
            <col width="auto" />
            <col width="170px" />
            <col width="130px" />
          </colgroup>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>키워드</th>
              <th>알림상태</th>
              <th>선택</th>
            </tr>
          </thead>
          <tbody>
            <!--신청알림 리스트-->
            <template v-for="(item, index) in itemListsData">
              <tr :key="index" class="item">
                <td class="pw-0 vertical-top">
                  <v-checkbox
                    v-model="item.isChecked" 
                    class="cmp-form-checkbox"
                    @change="selectList($event, index)"
                  ></v-checkbox>
                </td>
                <td>
                  <div class="item-img-wrap">
                    <!-- <v-img v-if="item.imageUrl !== ''" :src="item.imageUrl" alt=""></v-img>
                    <v-img v-else :src="`/images/common/no-image-bg.svg`" alt=""></v-img> -->
                    <div v-background-image="{'url' : item.imageUrl}" class="background-image thumb-img"></div>
                    <div class="txt-wrap">
                      <span class="tit">{{ item.searchItemTitle }}</span>
                      <div v-if="item.searchItemText.length >= 1" class="types">
                        <span v-for="(type, idx) in item.searchItemText" :key="`type-${idx}`" class="text">{{ type }}</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="text-center pw-0">
                  <div class="switch-wrap">
                    <v-switch v-model="item.isAlarm" inset :ripple="false" readonly class="cmp-form-switch" @click="checkAlertStatus"></v-switch>
                  </div>

                </td>
                <!-- [퍼블수정]220808 클래스추가 -->
                <td class="text-center pw-0">
                  <div class="product-row-unitBtn">
                    <v-btn icon>
                      <span v-cmp-icon="{ size: 18, name: 'close'}">상품 삭제</span>
                    </v-btn>
                  </div>
                </td>
              </tr>
            </template>
            <!--//신청알림 리스트-->

            <!-- 신청알림이 없는 경우 -->
            <tr>
              <td colspan="4" class="pt-0 pb-0">
                <CommonNoData msg="즐겨찾는 검색어가 없습니다.<br />검색어를 즐겨찾기하고<br />알림을 받아보세요!"/>
              </td>
            </tr>
          </tbody>
        </table>
      <ProductListPaging />
      </div>
    </div>
  </div>
</template>

<script>
import ContentsLeftMenu from '~/components/common/ContentsLeftMenu'
export default {
  components: {
    ContentsLeftMenu,
  },
  layout: 'LayoutBasics',
  data() {
    return {
      allChkBox: false,

      checkedNum: 0,
      itemListsData: [
        {
          isChecked: false,
          imageUrl: '',
          searchItemTitle : '와이드 데님',
          searchItemText : ['카테고리'],
          isAlarm: true
        },
        {
          isChecked: false,
          imageUrl: 'https://cdn-img.thehandsome.com/md/publish/dummy/mo/item-search-img.jpg',
          searchItemTitle : '와이드 데님',
          searchItemText : ['카테고리', '브랜드', '카테고리', '브랜드'],
          isAlarm: false
        },
        {
          isChecked: false,
          imageUrl: 'https://cdn-img.thehandsome.com/md/publish/dummy/mo/item-search-img.jpg',
          searchItemTitle : '여름용 와이드 데님 여름용 와이드 데님 여름용 와이드 데님',
          searchItemText : [],
          isAlarm: false
        }
      ],

     prdData: [
      // 택배 리스트
      {
        brand_name: 'MINE',
        product_name: '컬러 블록 니트 가디건 컬러 니트',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
        options: ['BLACK', '90', '2개'],
        sell_price: '355000',
        link: '#n',
        sold_out: true,
        zzim : false,
      },
      {
        brand_name: 'FOURM MEN’S LOUNGE',
        product_name: '[BEARBRICK] 사이키델릭 페이즐리',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
        options: ['CHARCOAL GRAY', '90', '1개'],
        sell_price: '355000',
        link: '#n',
        sold_out: true,
        zzim : false,
      },
      {
        brand_name: 'orea',
        product_name: '퓨리파잉 클렌징 폼',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img2.png',
        options: ['MULTI', 'FR', '1개'],
        sell_price: '355000',
        link: '#n',
        sold_out: false,
        zzim : false,
      },
      {
        brand_name: 'FOURM STUDIO',
        product_name: '[예약판매] 스티치 레더 스커트',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img3.png',
        options: ['BLACK', '90', '1개'],
        sell_price: '355000',
        link: '#n',
        sold_out: false,
        zzim : false,
      }
    ],
    }
  },
  created() {
    const me = this
    const json = require('~/static/json/mypage_left_menu.json')
    me.menuList = json.list
  },
  methods: {
    selectAllList(e) {
      const me = this
      me.checkedNum = 0
      me.itemListsData.forEach((item) => {
        item.isChecked = e

        if(item.isChecked) me.checkedNum++
      })
    },
    selectList(e) {
      const me = this
      let checkedCount = 0      

      e ? me.checkedNum++ : me.checkedNum--

      me.itemListsData.forEach((item) => {
        item.isChecked ? checkedCount++ : checkedCount--
        checkedCount === me.checkedNum ? me.allChkBox = true : me.allChkBox = false
      })

    },
    checkAlertStatus () {
      alert('앱푸시 온,오프 설정은 모바일에서만 가능합니다.')
    }
  },
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/detail.scss'; //페이지 전용 css
</style>