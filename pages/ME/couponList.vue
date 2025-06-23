<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <ContentsLeftMenu :title="'마이페이지'" :left-data="menuList"></ContentsLeftMenu>
      <div class="my-page-r-box contents-couponList">
          <!-- [퍼블수정]23.08.07 탭 추가 -->
         <div class="cmp-page-tit"><h2 class="tit">쿠폰</h2></div>
         <div class="cmp-tabs tabs-actionTop top-tab">
            <v-tabs fixed-tabs v-model="couponTab">
              <v-tab>사용가능</v-tab>
              <v-tab>사용완료&기간만료</v-tab>
            </v-tabs>
          </div>
          <!-- //[퍼블수정]23.08.07 탭 추가 -->

          <!-- [퍼블수정]23.08.07 탭 추가 -->
          <div class="tab-content">
            <v-tabs-items v-model="couponTab" touchless>
              <v-tab-item :transition="false">
                <div class="couponList-wrap">
                    <v-layout align-center justify-space-between class="mt-40">
                      <div class="cmp-font fnt-14">사용 가능 쿠폰 : 2개</div>
                      <div>
                        <CommonSelectSortBox id="sort" label-class="cmp-font fnt-14" icon-class="cmp-icon-12">
                          <template #optionList>
                            <option value="option1" selected>마감임박 순</option>
                            <option value="option2">최근등록 순</option>
                          </template>
                        </CommonSelectSortBox>
                      </div>
                    </v-layout>

                    <!--쿠폰 있는 경우-->
                    <div v-if="true" class="contents-coupon-list">
                      <ul class="list-wrap">
                        <li v-for="(item, index) in couponList" :key="index">
                          <div class="coupon-box">
                            <!-- [퍼블수정]23.03.10 갯수 추가 -->
                            <div class="coupon-title-cover">
                              <div class="count-coupon">24</div>
                              <p class="coupon-name">{{item.con}}</p>
                            </div>
                            <!-- //[퍼블수정]23.03.10 갯수 추가 -->
                            <p class="coupon-price">
                              <span class="number">{{ item.title }}</span>
                              <span class="won" v-if="item.titleTag!==''">{{ item.titleTag }}</span>
                            </p>
                            <p class="coupon-date">
                              <span>{{ item.date }}</span>
                              <span class="count">&#40;{{ item.count }}&#41;</span>
                            </p>
                            <div class="coupon-sub">{{ item.number }}</div>
                          </div>
                          <ul class="cmp-dotList">
                            <li>전 상품 구매 시 사용 가능(온라인 전용)</li>
                          </ul>
                        </li>
                      </ul>
                      <ProductListPaging />
                    </div>

                    <!--쿠폰 없는 경우-->
                    <div v-else>
                      <CommonNoData msg="쿠폰함이 비어있습니다."/>
                    </div>
                </div>
              </v-tab-item>
              <v-tab-item :transition="false">
                <div class="couponList-wrap">
                  <div class="cmp-info info-type1">
                    <p class="cmp-font">쿠폰 사용 및 유효 기간 만료 후 3개월 간 내역입니다.</p>
                  </div>
                  <v-layout align-center justify-end class="mt-40">
                    <div>
                      <CommonSelectSortBox id="sort" label-class="cmp-font fnt-14" icon-class="cmp-icon-12">
                        <template #optionList>
                          <option value="option1" selected>전체</option>
                          <option value="option2">사용완료</option>
                          <option value="option3">기간만료</option>
                          <option value="option4">소멸</option>
                        </template>
                      </CommonSelectSortBox>
                    </div>
                  </v-layout>

                  <!--쿠폰 있는 경우-->
                  <div v-if="true" class="contents-coupon-list">
                    <ul class="list-wrap">
                      <!-- 사용완료 추가 -->
                      <li class="disable">
                        <div class="coupon-box">
                          <!-- [퍼블수정]23.03.10 갯수 추가 -->
                          <div class="coupon-title-cover">
                            <div class="count-coupon">24</div>
                            <p class="coupon-name">[THE 클럽] THE STAR 스페셜 바우처10</p>
                          </div>
                          <!-- //[퍼블수정]23.03.10 갯수 추가 -->
                          <p class="coupon-price">
                            <span class="number">10</span>
                            <span class="won">%</span>
                          </p>
                          <p class="coupon-date">
                            <span>2021.07.30~2021.12.29</span>
                            <span>(사용완료)</span>
                          </p>
                          <div class="coupon-sub">211-000-AAA-ABCD6</div>
                        </div>
                        <ul class="cmp-dotList">
                          <li>전 상품 구매 시 사용 가능(온라인 전용)</li>
                        </ul>
                      </li>

                      <!-- 기간만료 -->
                      <li class="disable">
                        <div class="coupon-box">
                          <!-- [퍼블수정]23.03.10 갯수 추가 -->
                          <div class="coupon-title-cover">
                            <!-- 1장 인 경우 미노출 -->
                            <p class="coupon-name">무료 반품 쿠폰</p>
                          </div>
                          <!-- //[퍼블수정]23.03.10 갯수 추가 -->
                          <p class="coupon-price">
                            <span class="number">반품 시 배송비 무료</span>
                          </p>
                          <p class="coupon-date">
                            <span>2021.07.30~2021.12.29</span>
                            <span>(기간만료)</span><!--2022.09.14 텍스트수정 -->
                          </p>
                          <div class="coupon-sub">211-000-AAA-ABCD6</div>
                        </div>
                        <ul class="cmp-dotList">
                          <li>전 상품 구매 시 사용 가능(온라인 전용)</li>
                        </ul>
                      </li>
                      <!-- 사용완료 추가 -->
                      <li class="disable">
                        <div class="coupon-box">
                          <!-- [퍼블수정]23.03.10 갯수 추가 -->
                          <div class="coupon-title-cover">
                            <div class="count-coupon">24</div>
                            <p class="coupon-name">[THE 클럽] THE STAR 스페셜 바우처10</p>
                          </div>
                          <!-- //[퍼블수정]23.03.10 갯수 추가 -->
                          <p class="coupon-price">
                            <span class="number">10</span>
                            <span class="won">%</span>
                          </p>
                          <p class="coupon-date">
                            <span>2021.07.30~2021.12.29</span>
                            <span>(사용완료)</span>
                          </p>
                          <div class="coupon-sub">211-000-AAA-ABCD6</div>
                        </div>
                        <ul class="cmp-dotList">
                          <li>전 상품 구매 시 사용 가능(온라인 전용)</li>
                        </ul>
                      </li>

                      <!-- 기간만료 -->
                      <li class="disable">
                        <div class="coupon-box">
                          <!-- [퍼블수정]23.03.10 갯수 추가 -->
                          <div class="coupon-title-cover">
                            <!-- 1장 인 경우 미노출 -->
                            <p class="coupon-name">무료 반품 쿠폰</p>
                          </div>
                          <!-- //[퍼블수정]23.03.10 갯수 추가 -->
                          <p class="coupon-price">
                            <span class="number">반품 시 배송비 무료</span>
                          </p>
                          <p class="coupon-date">
                            <span>2021.07.30~2021.12.29</span>
                            <span>(기간만료)</span><!--2022.09.14 텍스트수정 -->
                          </p>
                          <div class="coupon-sub">211-000-AAA-ABCD6</div>
                        </div>
                        <ul class="cmp-dotList">
                          <li>전 상품 구매 시 사용 가능(온라인 전용)</li>
                        </ul>
                      </li>
                    </ul>
                    <ProductListPaging />
                  </div>

                  <!--쿠폰 없는 경우-->
                  <div v-else>
                    <CommonNoData msg="쿠폰함이 비어있습니다."/>
                  </div>
                </div>
              </v-tab-item>
            </v-tabs-items>
          </div>
          <!-- //[퍼블수정]23.08.07 탭 추가 -->

         <div class="couponList-info">
          <p class="cmp-font fnt-18">쿠폰 안내</p>
          <ul class="cmp-dotList">
            <li>할인쿠폰은 주문서 '쿠폰 및 혜택'에서 쿠폰을 적용하시면 할인 받으실 수 있습니다.</li>
            <li>교환/반품 배송비 쿠폰은 교환/반품 시 무료로 반품하실 수 있습니다.</li>
            <li>일부 상품은 쿠폰할인 적용이 불가능합니다.</li>
            <li>주문취소 시 사용한 쿠폰은 유효기간이 만료된 경우 재발급되지 않습니다.</li>
            <!-- [퍼블수정]23.08.07 탭 추가 -->
            <li>금액권 쿠폰은 해당 금액 초과 구매 시 사용 가능합니다.</li>
          </ul>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentsLeftMenu from '~/components/common/ContentsLeftMenu'
export default {
  components: {
    ContentsLeftMenu
  },
  layout: 'LayoutBasics',
  data: () => ({
    // [퍼블수정]23.08.07 탭 추가
    couponTab: null,
    couponList : [
      {
        title: '50,000',
        titleTag:'원',
        con: '11월 신규회원 웰컴 바우처',
        date: '2021.07.30~2021.12.29',
        count: 'D-7',
        number:'211-000-AAA-ABCD6',
      },
      {
        title: '10',
        titleTag:'%',
        con: '[THE 클럽] THE STAR 스페셜 바우처',
        date: '2021.07.30~2022.03.10',
        count: 'D-80',
        number:'211-000-AAA-ABCD6',
      },
      {
        title: '50,000',
        titleTag:'원',
        con: '11월 신규회원 웰컴 바우처',
        date: '2021.07.30~2021.12.29',
        count: 'D-7',
        number:'211-000-AAA-ABCD6',
      },
      {
        title: '10',
        titleTag:'%',
        con: '[THE 클럽] THE STAR 스페셜 바우처',
        date: '2021.07.30~2022.03.10',
        count: 'D-80',
        number:'211-000-AAA-ABCD6',
      }
    ]
  }),
  methods: {

  },
  created() {
    const me = this
    const json = require('~/static/json/mypage_left_menu.json')
    me.menuList = json.list
  },
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/pages/member.scss'; 
</style>
