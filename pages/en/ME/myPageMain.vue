<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <CommonContentsLeftMenu :title="'My Page'" :url="'/json/mypage_left_menu_en.json'"></CommonContentsLeftMenu>
      <div class="my-page-r-box content-mypageMain"><!-- 마이페이지 -->
        <div class="cmp-page-tit">
          <h2 class="tit">My Page</h2>
        </div>

        <!-- 이름 & 쿠폰 -->
        <v-layout row align-center justify-space-between class="myinfo-contents">
          <div class="my-info">
            <div class="name"><strong>Handsomeon</strong></div>
          </div>
          
          <v-layout row align-center justify-space-between>
            <p class="tit">Coupons</p>
            <nuxt-link class="txt" to="#n"><strong>12</strong></nuxt-link>
          </v-layout>
        </v-layout>
        <!-- // 이름 & 쿠폰 -->
        
        <!-- 구매내역이 없는 경우 -->
        <div class="cmp-info info-type3 nolist">
          <div class="cmp-sub-tit pt-20 mt-8 mb-8">
            <h3 class="tit">There are no order details yet.</h3>
          </div>
          <v-layout row align-end justify-space-between class="pb-20 mb-8">
            <p class="cmp-font fnt-18">You can browse new products and popular products<br />at the Handsome.com.</p>
            <nuxt-link class="cmp-font button fnt-16" to="#n">Shortcut to Shopping Main<i class="cmp-icon cmp-icon-12 i-next"></i></nuxt-link>
          </v-layout>
        </div>
        <!-- //구매내역이 없는 경우 -->

        <!-- 주문현황, 활동현황 -->
        <div class="status-box">
          <div class="contents-box">
            <div class="cmp-sub-tit"><h3 class="tit">Order Status</h3></div>
            <div class="cmp-info info-type3">
              <v-layout row align-start justify-space-between>
                <div>
                  <nuxt-link class="cmp-font button" to="#n">
                    <p class="tit">Order/Shipment</p>
                    <div class="txt cmp-font fnt-28 mt-4"><strong>56</strong></div>
                  </nuxt-link>
                </div>
                <div>
                  <nuxt-link class="cmp-font button" to="#n">
                    <p class="tit">Cancel/Return</p>
                    <div class="txt cmp-font fnt-28 mt-4"><strong>8</strong></div>
                  </nuxt-link>
                </div>
              </v-layout>
            </div>
          </div>
          <div class="contents-box">
            <div class="cmp-sub-tit"><h3 class="tit">Activity Status</h3></div>
            <div class="cmp-info info-type3">
              <v-layout row align-start justify-space-between>
                <div>
                  <nuxt-link class="cmp-font button" to="#n">
                    <p class="tit">Product Review</p>
                    <div class="txt cmp-font fnt-28 mt-4"><strong>320</strong></div>
                  </nuxt-link>
                </div>
                <div>
                  <nuxt-link class="cmp-font button" to="#n">
                    <p class="tit">Participation Details</p>
                    <div class="txt cmp-font fnt-28 mt-4"><strong>12</strong></div>
                  </nuxt-link>
                </div>
              </v-layout>
            </div>
          </div>
        </div>
        <!-- // 주문현황, 활동현황 -->
        <!-- 나의 코디북 -->
        <div class="tab-infoBox codi-type">
          <v-layout align-center justify-space-between class="info-top">
            <p class="cmp-font fnt-24">My Coordination Book</p>
            <nuxt-link class="cmp-font fnt-16 button" to="#n">View All<i class="cmp-icon cmp-icon-16 i-next"></i></nuxt-link>
          </v-layout>
          <v-layout wrap class="plus-conts">
            <div v-for="item, idx in codiList" :key="idx" class="codi-box">
              <div class="img-box">
                <v-img :src="item.image_url"></v-img>
              </div>
              <p class="tit">Codiset title Codiset title Codiset title Codiset title</p>
            </div>
          </v-layout>
          <CommonNoData>
            <template #message>
              <p class="cmp-font fnt-24">Would you like to create your very own Fashion<br/>Coordination Book now?</p>
              <p class="mt-8 mb-34 cmp-font fnt-16">You can create a Fashion Coordination Book with products you’ve purchased,<br/>recommended products, and products on your wish list.</p>
            </template>
            <template #button>
              <v-btn outlined color="primary" class="gray-outlined">Create Fashion Coordination</v-btn>
            </template>
          </CommonNoData>
        </div>
        <!-- // 나의 코디북 -->
        <!-- 상품 Q&A -->
        <v-layout row align-center justify-space-between class="title-box mb-20">
          <div class="cmp-sub-tit mb-0"><h3 class="tit">Product Q&A</h3></div>
          <nuxt-link class="cmp-font button" to="#n">View All<i class="cmp-icon cmp-icon-12 i-next"></i></nuxt-link>
        </v-layout>
        <!-- 상품 Q&A 테이블 -->
        <div class="product-row-table">
          <table>
            <caption>상품 Q&A 테이블</caption>
            <colgroup>
              <col width="auto"/>
              <col width="148px"/>
              <col width="148px"/>
            </colgroup>
            <thead>
              <tr>
                <th>Content</th> 
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, index) in inquiryList">
                <tr :key="index">
                  <td class="text-left pw-0">
                    <p class="title-lineClamp">{{item.title}}</p>
                  </td>
                  <td>{{item.date}}</td>
                  <td class="label-tag pw-16">
                    <span v-if="item.state=='Replied'" class="cmp-label-line finish">{{item.state}}</span>
                    <span v-if="item.state=='Standby for reply'" class="cmp-label-line finish">{{item.state}}</span>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <!-- //상품 Q&A 테이블 -->
        <!-- //상품 Q&A -->

        <!-- 1:1 문의 -->
        <v-layout row align-center justify-space-between class="title-box mb-20">
          <div class="cmp-sub-tit mb-0"><h3 class="tit">1:1 Query</h3></div>
          <nuxt-link class="cmp-font button" to="#n">View All<i class="cmp-icon cmp-icon-12 i-next"></i></nuxt-link>
        </v-layout>
        <!-- 1:1 문의 테이블 -->
        <div class="product-row-table">
          <table>
            <caption>1:1 문의 테이블</caption>
            <colgroup>
              <col width="138px"/>
              <col width="auto"/>
              <col width="148px"/>
              <col width="148px"/>
            </colgroup>
            <thead>
              <tr>
                <th>Type</th>
                <th>Title</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, index) in inquiryList">
                <tr :key="index">
                  <td class="text-left label-tag">
                    <span class="cmp-label-line category">{{item.category}}</span>
                  </td>
                  <td class="text-left">
                    <p class="title-lineClamp">{{item.title}}</p>
                  </td>
                  <td>{{item.date}}</td>
                  <td class="label-tag pw-16">
                    <span v-if="index == 0 || index == 1" class="cmp-label-line finish">Reception Completed</span>
                    <span v-if="index == 2" class="cmp-label-line finish">Answer complete</span>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <!-- //1:1 문의 테이블 -->
        <!-- //1:1 문의 -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import EventBus from '~/api/common/EventBus'
export default {
  components: {
  },
  layout: 'LayoutBasics',
  data() {
    return {
      productListLayout: 4,
      selectedIndex:0,
      codiList: [],
      inquiryList: [
        {
          category: "Refund", // 1:1 문의 대분류
          state: "Standby for reply", // 문의 상태 (접수완료, 처리중, 답변완료)
          title: "I would like to inquire about the re-warehousing I would like to inquire about the re-warehousing I would like to inquire about the re-warehousing",
          date: "15 Jun. 2021",
          linkUrl: "/ko/CS/oneToOneDetail"
        },
        {
          category: "Replacement",
          state: "Standby for reply",
          title: "I'm inquiring about the size. I'm inquiring about the size.",
          date: "15 Jun. 2021",
          linkUrl: "/ko/CS/oneToOneDetail"
        },
        {
          category: "Order Confirm / Cancel",
          state: "Replied",
          title: "I'm inquiring about the size. I'm inquiring about the size.",
          date: "15 Jun. 2021",
          linkUrl: "/ko/CS/oneToOneDetail"
        },
      ],
    }
  },
  created() {
    const me = this
    axios.get("/json/codibook.json")
    .then(function(res){
      res.data.list.forEach(function(item){
        item.product_data_list = []
      })
      me.codiList = res.data.list
      me.codiList.length = 3
    })
    .catch(function(e){
      console.log(e)
    })
  },
  methods: {
    zzimBtn(e){
      const cl = e.currentTarget.classList
      if(cl.contains("on")){
        cl.remove("on")
      }else{
        cl.add("on")
      }
    }
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/member.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
@import '@/assets/scss/en/en.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>