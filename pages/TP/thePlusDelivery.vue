<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/OR/guide/Structure 참고 -->
    <div class="content-wrap">
      <CommonContentsLeftMenu :title="'마이페이지'" :url="'/json/mypage_left_menu.json'" :active="'/ko/TP/thePlusGate'"></CommonContentsLeftMenu>
      <div class="my-page-r-box theplus-delivery"><!-- 마이페이지 --><!-- [퍼블수정] class 추가 -->
        <div class="cmp-page-tit">
          <h2 class="tit">배송 조회</h2>
        </div>

        <div v-if="topNotice" class="cmp-info top-notice mb-30">
          <p class="txt">배송지 긴급 공지 안내메시지 노출.배송지 긴급 공지 안내메시지 노출.배송지 긴급 공지 안내메시지 노출. 배송지 긴급 공지 안내메시지 노</p>
          <v-btn icon small class="del" @click="topNotice = false">
            <i v-cmp-icon="{ size: 18, name: 'close', invert: 1 }">닫기</i>
          </v-btn>
        </div>

        <!-- 사은품 상품내역 -->
        <div class="cmp-sub-tit col">
          <h3 class="tit">상품내역</h3>
        </div>
        <div class="product-row-table">
          <table>
            <caption>상품리스트</caption>
            <colgroup>
              <col style="width:406px;"/>
              <col style="width:406px;"/>
              <col style="width:128px;"/> 
            </colgroup>
            <tbody>
              <template v-for="(item, index) in giftsData">
                <tr :key="index">
                  <td class="pw-0">
                    <div class="product-row-unitInfo gifts-type">
                      <div class="product-image">
                        <div v-if="item.type==='mileage'" class="mileage-txt">
                          <div class="txt"><strong>{{item.mileage | number}}</strong>M</div>
                        </div>
                        <v-img v-else :src="item.image" :alt="item.type==='event'?'사은품 이미지':'증정품 이미지'"></v-img>
                      </div>
                      <div class="product-info-cnt">
                        <div class="product-name">{{item.reward_name}}</div>
                        <div class="product-brand cmp-font fnt-18">{{item.gift_name}}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span class="cmp-font fnt-16 c-blue">출고 요청</span>
                  </td>
                  <td>
                    <div class="product-row-unitBtn">
                      <v-btn outlined small color="normal">배송조회</v-btn>
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <!-- // 사은품 상품내역 -->
      </div>
      <!-- 팝업 -->
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

// import EventBus from '~/api/common/EventBus'
export default {
  components: {
    // Swiper,
    // SwiperSlide,
  },
  layout: 'LayoutBasics',
  data() {
    return {
      topNotice : true,
      giftsData : [ // 증정품,사은품
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-6.png',
          reward_name: '플러스맵 리워드',
          gift_name: '50,000원 바우처',
        }
      ],
    }
  },
  created() {
  },
  methods: {
  },
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/theplusmember.scss'; //페이지 전용 css
</style>