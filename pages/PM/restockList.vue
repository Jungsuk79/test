<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <ContentsLeftMenu :title="'마이페이지'" :left-data="menuList"></ContentsLeftMenu>
      <div class="my-page-r-box restockList-conts">
        <div class="cmp-page-tit">
          <h2 class="tit">재입고 알림</h2>
        </div>

        <div class="cmp-info info-type1">
          <p class="cmp-font">알림 신청 후 3개월이 지나면 신청 내역이 자동 삭제됩니다.</p>
        </div>

        <v-layout justify-space-between align-center class="mt-30">
          <p class="cmp-font fnt-14 c-gray">4건</p>
          <CommonSelectSortBox id="sort" label-class="cmp-font fnt-14" icon-class="cmp-icon-12">
            <template #optionList>
              <option value="option1">전체</option>
              <option value="option2">알림신청</option>
              <option value="option2">알림완료</option>
              <option value="option2">기간만료</option>
            </template>
          </CommonSelectSortBox>
        </v-layout>

        <table class="table-type1 last-border">
          <colgroup>
            <col width="auto" />
            <col width="248px" />
            <col width="128px" />
            <col width="128px" />
            <col width="50px" />
          </colgroup>
          <thead>
            <tr>
              <th>상품정보</th>
              <th>상품금액</th>
              <th>신청일</th>
              <th>알림상태</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <!--신청알림 리스트-->
            <template v-for="(item, index) in prdData">
              <tr :key="index">
                <td class="pw-0">
                  <nuxt-link :to="item.link" class="product-row-unitInfo or-prd-type"><!-- [퍼블수정]23.01.19 상품이미지 : or-prd-type 클래스 추가 -->
                    <div class="product-image" :class="{'sold-out':item.sold_out}">
                      <v-img :src="item.image" :alt="item.product_name" />
                      <div v-if="item.sold_out" class="sold-out-txt">SOLD OUT</div>
                    </div>
                    <div class="product-info-cnt">
                      <div class="product-brand">{{item.brand_name}}</div>
                      <div class="product-name">{{item.product_name}}</div>
                      <div v-if="item.options" class="product-option">
                        <span v-for="(item2,index2) in item.options" :key="index2" class="option">{{item2}}</span>
                      </div>
                    </div>
                  </nuxt-link>
                </td>
                <td class="text-center">
                  <nuxt-link :to="item.link" class="product-row-unitPrice">
                    <div class="product-sellprice"><strong>{{item.sell_price | number}}</strong>원</div>
                  </nuxt-link>
                </td>
                <td class="text-center pw-0"><!-- 221226 간격수정 : pw-16 > pw-0 클래스 변경 -->
                  <p class="cmp-font fnt-14">2021.10.21 신청</p>
                </td>
                <td class="text-center">
                  <div v-if="index == 0"><!-- 알림신청 CASE -->
                    <p class="cmp-font c-blue">알림신청</p>
                  </div>
                  <div v-if="index == 1"><!-- 기간만료 CASE -->
                    <p class="cmp-font">기간만료</p>
                  </div>
                  <div v-if="index == 2 || index == 3"><!-- 알림완료 CASE -->
                    <p class="cmp-font">알림완료</p>
                    <p class="cmp-font">2021.10.30</p>
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

            <!--신청알림이 없는 경우
            <tr>
              <td colspan="5" class="pt-0 pb-0">
                <CommonNoData msg="신청한 알림내역이 없습니다."/>
              </td>
            </tr>-->
          </tbody>
        </table>

        <ul class="cmp-dotList">
          <li>신청 후 30일 내에 상품이 재입고 되면 카카오메시지가 1회 발송됩니다.</li>
          <li>소량 입고되거나 동시 구매가 이루어질 경우 등 알림 후에도 품절이 발생할 수 있습니다.</li>
          <li>알림 신청 시의 상품 옵션 및 가격 등의 상품정보가 재입고 시 변동될 수 있습니다.</li>
          <li>알림 신청 후 3개월이 지난 상품, 판매 종료된 상품은 자동 삭제됩니다.</li>
          <li>알림 내역에서 알림 신청해제 시, 알림 신청이 취소 및 삭제됩니다.</li>
          <li>아울렛으로 판매 전환 되었을 경우, 알림이 발송되지 않습니다.</li>
        </ul>
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

  },
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/detail.scss'; //페이지 전용 css
</style>