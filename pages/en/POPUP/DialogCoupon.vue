<template>
  <DialogBasic class="popup-coupon" header-title="Coupon" :width="380" @hide="closeDialog">
    <template #body>  
      <!-- s 탭메뉴 -->
      <div class="cmp-tabs tabs-actionTop">
        <v-tabs v-model="tab" fixed-tabs>
          <v-tab>Issuable<br>Coupons</v-tab>
          <v-tab>Usable<br>Coupons</v-tab>
        </v-tabs>
      </div>
      <!-- e 탭메뉴 --> 

      <div class="tab-content">
         <v-tabs-items v-model="tab" touchless>
          <!--발급 가능 쿠폰 -->
          <v-tab-item :transition="false">

            <!--쿠폰 다운로드-->
            <div class="contents-coupon-list">
              <div class="list-title">
                <p class="cmp-font fnt-18">Coupons for download</p><!-- 221129 상품상세팝업 : fnt-20 > fnt-18 클래스 변경 -->
                <button class="coupon-download" @click="toastOpen">Get all coupons</button>
              </div>

              <!--쿠폰다운로드 있는 경우-->
              <ul>
                <li v-for="(item, index) in couponList" :key="index">
                  <div class="coupon-box">
                    <p class="coupon-name">{{item.con}}</p>
                    <p class="coupon-price">
                      <span class="number">{{ item.title }}</span>
                      <span class="won" v-if="item.titleTag!==''">{{ item.titleTag }}</span>
                    </p>
                    <p class="coupon-date">
                      <span>{{ item.date }}</span>
                      <span class="count">{{ item.count }}</span>
                    </p>
                    <div class="coupon-sub">
                      <button class="coupon-download" @click="toastOpen1">Download</button>
                    </div>
                  </div>
                  <ul v-if="index == 0" class="cmp-dotList">
                    <li>Can be used for all products.</li>
                  </ul>
                </li>
              </ul>

              <!--쿠폰다운로드 없는 경우 -->  
              <CommonNoData v-if="false">
                <template #message>
                  <p class="cmp-font fnt-16 c-gray">There are no Coupons for download.<br>Please check the downloaded coupons<br>in Usable Coupons.</p>
                </template>
              </CommonNoData>
            </div>

            <!--쿠폰 번호 입력-->
            <div class="contents-coupon-list">
              <div class="list-title">
                <p class="cmp-font fnt-18">Coupons of code input</p><!-- 221129 상품상세팝업 : fnt-20 > fnt-18 클래스 변경 -->
              </div>

              <!--쿠폰 번호 입력 있는 경우-->
              <ul>
                <li v-for="(item, index) in couponList2" :key="index">
                  <div class="coupon-box">
                    <p class="coupon-name">{{item.con}}</p>
                    <p class="coupon-price reverse">
                      <span class="number">{{ item.title }}</span>
                      <span class="won" v-if="item.titleTag!==''">{{ item.titleTag }}</span>
                    </p>
                    <p class="coupon-date">
                      <span>{{ item.date }}</span>
                      <span class="count">{{ item.count }}</span>
                    </p>
                    <div class="coupon-sub">
                     <div class="coupom-code">Enter coupon code when ordering
                        <CommonTooltipBox>
                        <template #content>
                          <ul class="cmp-dotList">
                            <li>You can register and use the coupon code in the order form when ordering.</li>
                          </ul>
                        </template>
                      </CommonTooltipBox></div>
                    </div>
                  </div>
                </li>
              </ul>

              <!--쿠폰 번호 입력 없는 경우 -->  
              <CommonNoData v-if="false">
                <template #message>
                  <p class="cmp-font fnt-16 c-gray">There are no coupons of code input.</p>
                </template>
              </CommonNoData>
            </div>  
            
          </v-tab-item>

          <!--보유한 쿠폰 -->
          <v-tab-item :transition="false">
            <div class="contents-coupon-list">
              <!--쿠폰다운로드 있는 경우-->
              <ul>
                <li v-for="(item, index) in couponList" :key="index">
                  <div class="coupon-box">
                    <p class="coupon-name">{{item.con}}</p>
                    <p class="coupon-price">
                      <span class="number">{{ item.title }}</span>
                      <span class="won" v-if="item.titleTag!==''">{{ item.titleTag }}</span>
                    </p>
                    <p class="coupon-date">
                      <span>{{ item.date }}</span>
                      <span class="count">{{ item.count }}</span>
                    </p>
                    <div class="coupon-sub">{{ item.number }}</div>
                  </div>
                  <ul v-if="index == 0" class="cmp-dotList">
                    <li>Can be used for all products.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </v-tab-item>

         </v-tabs-items>
      </div>


      
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
    tab : 0,
    couponList : [
      {
        title: '15% Discount',
        con: 'Up to 15% for New Member',
        date: '07 Nov. 2022~10.11.2022',
        count: 'D-120',
        number:'211-000-AAA-ABCD6',
      },
      {
        title: '10',
        titleTag:'%',
        con: '5% Discount for Shopping bag',
        date: '07 Nov. 2022~10.11.2022',
        count: 'D-80',
        number:'211-000-AAA-ABCD6',
      }
    ],
    couponList2 : [
      {
        title: 'OUTLET20',
        titleTag:'CODE :',
        con: 'Additional 20% off for Outlet S/S',
        date: '07 Nov. 2022~10.11.2022',
        count: 'D-80',
        number:'211-000-AAA-ABCD6',
      },
      {
        title: 'HANSOMLOVE',
        titleTag:'CODE :',
        con: 'Additional 20% off for Outlet S/S',
        date: '07 Nov. 2022~10.11.2022',
        count: 'D-80',
        number:'211-000-AAA-ABCD6',
      },
    ]
  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
    toastOpen(){
      const me = this
      me.showToast("All coupons have been downloaded.<br>You can check it in Usable Coupons.", "bottom", {offset:0})
    },
    toastOpen1(){
      const me = this
      me.showToast("Coupon has been downloaded.<br>You can check it in Usable Coupons.", "bottom", {offset:0})
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
