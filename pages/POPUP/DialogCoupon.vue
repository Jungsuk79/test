<template>
  <DialogBasic class="popup-coupon" header-title="쿠폰" :width="380" @hide="closeDialog">
    <template #body> 
      <!-- s 탭메뉴 -->
      <div class="cmp-tabs tabs-actionTop">
        <v-tabs v-model="tab" fixed-tabs>
          <v-tab>발급 가능 쿠폰</v-tab>
          <v-tab>보유한 쿠폰</v-tab>
        </v-tabs>
      </div>
      <!-- e 탭메뉴 --> 
      <!-- [퍼블수정]23.07.18 더플러스 가입 베너 추가 -->
      <button @click="openonlymobile" class="theplus-banner-img mt-20">
        <div class="banner-text">
          <h3>더플러스⁺ 가입 즉시 쿠폰 제공</h3>
          <div class="oneline">
            <p>전상품 5만원 할인상품 쿠폰 +2장</p>
            <p>선호브랜드 10%할인 쿠폰 +3장 </p>
          </div>
        </div>
      </button>
      <!-- //[퍼블수정]23.07.18 더플러스 가입 베너 추가 -->
      
      <div class="tab-content">
        <v-tabs-items v-model="tab" touchless>
          <!--발급 가능 쿠폰 -->
          <v-tab-item :transition="false">
            <!--쿠폰 다운로드-->
            <div class="contents-coupon-list">
              <div class="list-title">
                <p class="cmp-font fnt-18">쿠폰 다운로드</p><!-- 221129 상품상세팝업 : fnt-20 > fnt-18 클래스 변경 --><!-- [개발확인]22.12.15 -->
                <button class="coupon-download" @click="toastOpen">쿠폰 전체 받기</button><!-- [개발확인]22.12.15 -->
              </div>

              <!--쿠폰다운로드 있는 경우-->
              <ul>
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
                      <span class="count">{{ item.count }}</span>
                    </p>
                    <div class="coupon-sub">
                      <button class="coupon-download" @click="toastOpen1">다운로드</button>
                    </div>
                  </div>
                  <ul v-if="index == 0" class="cmp-dotList">
                    <li>전 상품 구매 시 사용 가능(온라인 전용)</li>
                  </ul>
                </li>
              </ul>

              <!--쿠폰다운로드 없는 경우 -->  
              <CommonNoData v-if="false">
                <template #message>
                  <p class="cmp-font fnt-16 c-gray">다운로드 가능한 쿠폰이 없습니다.<br>다운로드 받으신 쿠폰은<br> 보유한 쿠폰에서 확인해 주세요.</p>
                </template>
              </CommonNoData>
            </div>

            <!--쿠폰 번호 입력-->
            <div class="contents-coupon-list">
              <div class="list-title">
                <p class="cmp-font fnt-18">쿠폰 번호 입력</p><!-- 221129 상품상세팝업 : fnt-20 > fnt-18 클래스 변경 -->
              </div>

              <!--쿠폰 번호 입력 있는 경우-->
              <ul>
                <li v-for="(item, index) in couponList2" :key="index">
                  <div class="coupon-box">
                    <!-- [퍼블수정]23.03.10 갯수 추가 -->
                    <div class="coupon-title-cover">
                      <!-- 1장 인 경우 미노출 -->
                      <p class="coupon-name">{{item.con}}</p>
                    </div>
                    <!-- //[퍼블수정]23.03.10 갯수 추가 -->
                    <p class="coupon-price reverse">
                      <span class="number">{{ item.title }}</span>
                      <span class="won" v-if="item.titleTag!==''">{{ item.titleTag }}</span>
                    </p>
                    <p class="coupon-date">
                      <span>{{ item.date }}</span>
                      <span class="count">{{ item.count }}</span>
                    </p>
                    <div class="coupon-sub"><!-- [개발확인]22.12.15 -->
                     <div class="coupom-code">주문 시 쿠폰 코드 입력
                        <CommonTooltipBox>
                        <template #content>
                          <ul class="cmp-dotList">
                            <li>주문 시 주문서 내 해당 쿠폰 코드를 등록하여 사용하실 수 있습니다.</li>
                          </ul>
                        </template>
                      </CommonTooltipBox></div>
                    </div><!-- // [개발확인]22.12.15 -->
                  </div>
                </li>
              </ul>

              <!--쿠폰 번호 입력 없는 경우 -->  
              <CommonNoData v-if="false">
                <template #message>
                  <p class="cmp-font fnt-16 c-gray">번호 입력 쿠폰이 없습니다.</p>
                </template>
              </CommonNoData>
            </div>  
          </v-tab-item>

          <!--보유한 쿠폰 -->
          <v-tab-item :transition="false">
            <div class="contents-coupon-list">
              <!--보유한 쿠폰 있는 경우 -->  
             <ul>
                <li v-for="(item, index) in couponList" :key="index">
                  <div class="coupon-box">
                    <!-- [퍼블수정]23.03.10 갯수 추가 -->
                    <div class="coupon-title-cover">
                      <!-- 1장 인 경우 미노출 -->
                      <p class="coupon-name">{{item.con}}</p>
                    </div>
                    <!-- //[퍼블수정]23.03.10 갯수 추가 -->
                    <p class="coupon-price">
                      <span class="number">{{ item.title }}</span>
                      <span class="won" v-if="item.titleTag!==''">{{ item.titleTag }}</span>
                    </p>
                    <p class="coupon-date">
                      <span>{{ item.date }}</span>
                      <span class="count">{{ item.count }}</span>
                    </p>
                    <div class="coupon-sub">{{item.number}}</div>  

                  </div>
                  <ul v-if="index == 0" class="cmp-dotList">
                    <li>전 상품 구매 시 사용 가능(온라인 전용)</li>
                  </ul>
                  <ul v-if="index == 1" class="cmp-dotList">
                    <li>앱에서 아울렛 상품 구매 시</li>
                  </ul>
                </li>
             </ul>

              <!--보유한 쿠폰 없는 경우 -->  
              <CommonNoData v-if="false">
                <template #message>
                  <p class="cmp-font fnt-16 c-gray">보유한 쿠폰이 없습니다.</p>
                </template>
              </CommonNoData>
            </div>
          </v-tab-item>
        </v-tabs-items>
      </div>
      <!-- [퍼블수정]23.07.18 더플러스 가입 베너 추가 -->
      <v-dialog v-model="onlymobile">
        <DialogBasic class="popup-basic popup-onlymobile" header-title="더플러스⁺ 가입은 모바일에서만 가능합니다." :width="408" @hide="closeonlymobile">
          <template #body>
            <div class="inner">
               <p>더한섬닷컴 모바일 WEB/APP > 마이페이지 ><br/>THE서비스 중 더플러스⁺를 선택하여<br/>가입하실 수 있습니다.</p>
            </div>
            <div class="popup-btn-box">
              <v-btn @click="onlymobile = false" large color="primary">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //[퍼블수정]23.07.18 더플러스 가입 베너 추가 -->
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
    // [퍼블수정]23.07.18 더플러스 가입 베너 추가
    onlymobile : false,
    tab:0,
    couponList : [
      {
        title: '50,000',
        titleTag:'원',
        con: '11월 신규회원 웰컴 바우처',
        date: '발급일로 부터',
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
    ],
    couponList2 : [
      {
        title: 'OUTLET',
        titleTag:'코드 :',
        con: '[THE 클럽] THE STAR 스페셜 바우처',
        date: '2021.07.30~2022.03.10',
        count: 'D-80',
      },
      {
        title: 'HANSOMELOVE23456',
        titleTag:'코드 :',
        con: '[THE 클럽] THE STAR 스페셜 바우처',
        date: '2021.07.30~2022.03.10',
        count: 'D-80',
      }
    ],
    couponList3 : [
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
        count: 'D-7',
        number:'211-000-AAA-ABCD6',
      }
    ],
  }),
  // [퍼블수정]23.07.18 더플러스 가입 베너 추가
  watch : {
    onlymobile(){
      const me = this
      me.preventPageScroll(me.onlymobile)
    }
  },
  methods: {
    // [퍼블수정]23.07.18 더플러스 가입 베너 추가
    openonlymobile(){
      this.onlymobile = true
    },
    closeonlymobile(){
      this.onlymobile = false
    },
    closeDialog() {
      this.$emit('close')
    },
     toastOpen(){
      // const me = this
      // me.showToast("전체 쿠폰이 다운로드 되었습니다.<br>보유한 쿠폰에서 확인하실 수 있습니다.", "bottom", {offset:0})
      alert("전체 쿠폰이 다운로드 되었습니다.\n보유한 쿠폰에서 확인하실 수 있습니다.")  //  [퍼블수정]22-12-15
    },
    toastOpen1(){
      // const me = this
      // me.showToast("쿠폰이 다운로드 되었습니다.<br>보유한 쿠폰에서 확인하실 수 있습니다.", "bottom", {offset:0})
      alert("쿠폰이 다운로드 되었습니다.\n보유한 쿠폰에서 확인하실 수 있습니다.")  //  [퍼블수정]22-12-15
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
