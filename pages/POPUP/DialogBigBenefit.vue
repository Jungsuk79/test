<template>
  <DialogBasic class="popup-bigBenefit" header-title="할인내역" :width="540" @hide="closeDialog">
    <template #body>  
      <div class="sec-bigBenefit">
        <ul class="calculate-box">
          <li>
            <v-layout justify-space-between align-center>
              <p>정상가</p><!-- 230220 할인내역 : 문구수정 -->
              <p>1,550,000원</p>
            </v-layout>
            <v-layout justify-space-between align-center>
              <p>판매가</p>
              <p class="cmp-font bold">1,395,000원</p>
            </v-layout> 
            <v-layout v-if="true" justify-space-between align-center><!-- 230220 할인내역 : 할인가 추가 -->
              <p>할인가</p>
              <p class="cmp-font bold">1,395,000원</p>
            </v-layout> 
          </li>
          <li>
            <v-layout justify-space-between align-center>
            <p>신규회원 전용 정상 15%쿠폰 (웹전용)</p>
            <p>- 209,250원</p>
            </v-layout>
            <v-layout justify-space-between align-center>
              <p>여성의류 정상 5% 할인</p>
              <p>- 69,750원</p>
            </v-layout> 
            <v-layout justify-space-between align-center>
              <p>임직원 쿠폰</p>
              <p>- 69,750원</p>
            </v-layout>
            <v-layout justify-space-between align-center>
              <p>VVIP 쿠폰</p>
              <p>- 69,750원</p>
            </v-layout> 
          </li>  
          <li>
            <v-layout justify-space-between align-center>
              <p>4시까지 5천원 특별 쿠폰</p>
              <p>-5,000원</p>
             </v-layout>
          </li>
          <li>
            <v-layout justify-space-between align-center>
              <p class="cmp-fotn fnt-20">최대 혜택가</p><!-- 230220 할인내역 : 문구 수정 -->
              <p class="cmp-fotn fnt-20"><strong>530,000</strong>원</p>
            </v-layout>
          </li> 
        </ul>

        <div class="calculate-box">
             
        </div>
        <div class="calculate-box">
        
         </div>
        <div class="calculate-box">
          
        </div>

        <ul class="cmp-dotList">
          <li>현재 가격은 회원에 한해 최적가로 적용되었습니다.</li>
          <li>최대혜택가는 주문 시 상이 할 수 있습니다.</li>
          <li v-if="true">10% 초과 할인상품은 한섬마일리지 및 H.Point 적립이 불가합니다.</li><!-- 230220 할인내역 : 할인가 문구 추가 -->
        </ul>
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
  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
