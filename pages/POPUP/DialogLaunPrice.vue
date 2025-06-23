<template>
  <DialogBasic
    :width="540"
    class="popup-launPrice"
    header-title="세탁비 상세보기" 
    @hide="closeDialog">
    <template #body>
      <div class="inner">
        <!-- [퍼블수정] 22.10.20 케이스 별 화면 추가 -->
        <div class="launprice-box">
          <!-- 결제요청 전 예시화면-결제 전 -->
          <div class="line-box">
            <v-layout justify-space-between class="mb-8">
              <p class="cmp-font"><strong>TM2C0QOT001WM1BK90</strong></p>
              <p class="cmp-font fnt-14">코트, 바바리, 패딩코트</p>
            </v-layout>

            <v-layout justify-space-between>
              <p class="cmp-font fnt-14">결제 예상 금액</p>
              <p class="cmp-font"><span class="num line-through cmp-font fnt-14"><em>54,000</em>원</span></p>
            </v-layout>
          </div>
          <div class="line-box">
            <v-layout justify-space-between class="mb-8">
              <p class="cmp-font"><strong>SJSJ 레터링 데님 집업 드레스</strong></p>
              <p class="cmp-font fnt-14">상의, 자켓</p>
            </v-layout>

            <v-layout justify-space-between>
              <p class="cmp-font fnt-14">결제 예상 금액</p>
              <p class="cmp-font"><span class="num cmp-font fnt-14"><em>13,500</em>원</span></p>
            </v-layout>
          </div>
          <div class="line-box">
            <v-layout justify-space-between class="mb-8">
              <p class="cmp-font"><strong>SYSTEM</strong></p>
              <p class="cmp-font fnt-14">하의, 스커트, 반바지</p>
            </v-layout>

            <v-layout justify-space-between>
              <p class="cmp-font fnt-14">결제 예상 금액</p>
              <p class="cmp-font"><span class="num cmp-font fnt-14"><em>9,000</em>원</span></p>
            </v-layout>
          </div>
          <!-- // 결제요청 전 예시화면-결제 전 -->
          <!-- 결제요청 후 예시화면-결제 전 -->
          <div class="line-box">
            <v-layout justify-space-between class="mb-8">
              <p class="cmp-font"><strong>TM2C0QOT001WM1BK90</strong></p>
              <p class="cmp-font fnt-14">코트, 바바리, 패딩코트</p>
            </v-layout>

            <v-layout justify-space-between class="mb-8">
              <p class="cmp-font fnt-14">결제 예상 금액</p>
              <p class="cmp-font"><span class="num cmp-font fnt-14"><em>54,000</em>원</span></p>
            </v-layout>
            <v-layout justify-space-between>
              <p class="cmp-font fnt-14">최종 결제 금액</p>
              <p class="cmp-font"><span class="num cmp-font fnt-14"><em>54,000</em>원</span></p>
            </v-layout>
          </div>
          <div class="line-box">
            <v-layout justify-space-between class="mb-8">
              <p class="cmp-font"><strong>SJSJ 레터링 데님 집업 드레스</strong></p>
              <p class="cmp-font fnt-14">상의, 자켓</p>
            </v-layout>

            <v-layout justify-space-between class="mb-8">
              <p class="cmp-font fnt-14">결제 예상 금액</p>
              <p class="cmp-font"><span class="num cmp-font fnt-14"><em>13,500</em>원</span></p>
            </v-layout>
            <v-layout justify-space-between>
              <p class="cmp-font fnt-14">최종 결제 금액</p>
              <p class="cmp-font"><span class="num cmp-font fnt-14"><em>10,500</em>원</span></p>
            </v-layout>

            <div class="cmp-info info-type3 mt-20">
              <p class="cmp-font fnt-14"><!-- [퍼블수정]22.12.29 -->
                BO에 입력된 세탁비 변경 사유 노출를 말줄임표 없이 전부 노출해주세요.
              </p>
            </div>
          </div>
          <div class="line-box">
            <v-layout justify-space-between class="mb-8">
              <p class="cmp-font"><strong>SYSTEM</strong><span class="cmp-font fnt-10 c-red pl-4">세탁불가</span></p>
              <p class="cmp-font fnt-14">하의, 스커트, 반바지</p>
            </v-layout>

            <v-layout justify-space-between class="mb-8">
              <p class="cmp-font fnt-14">결제 예상 금액</p>
              <p class="cmp-font"><span class="num cmp-font fnt-14"><em>9,000</em>원</span></p>
            </v-layout>
            <v-layout justify-space-between>
              <p class="cmp-font fnt-14">최종 결제 금액</p>
              <p class="cmp-font"><span class="num cmp-font fnt-14"><em>9,000</em>원</span></p>
            </v-layout>
          </div>
          <!-- // 결제요청 후 예시화면-결제 전 -->
          <!-- 결제완료 후 예시화면 -->
          <div class="line-box">
            <v-layout justify-space-between class="mb-8">
              <p class="cmp-font"><strong>TM2C0QOT001WM1BK90</strong></p>
              <p class="cmp-font fnt-14">코트, 바바리, 패딩코트</p>
            </v-layout>

            <v-layout justify-space-between class="mb-8">
              <p class="cmp-font fnt-14">결제 예상 금액</p>
              <p class="cmp-font"><span class="num cmp-font fnt-14"><em>54,000</em>원</span></p>
            </v-layout>
            <v-layout justify-space-between>
              <p class="cmp-font fnt-14">최종 결제 금액</p>
              <p class="cmp-font"><span class="cmp-font fnt-11 c-blue pr-6">바우처사용</span><span class="num line-through cmp-font fnt-14"><em>22,500</em>원</span></p>
            </v-layout>
          </div>
          <div class="line-box">
            <v-layout justify-space-between class="mb-8">
              <p class="cmp-font"><strong>SJSJ 레터링 데님 집업 드레스</strong></p>
              <p class="cmp-font fnt-14">상의, 자켓</p>
            </v-layout>

            <v-layout justify-space-between class="mb-8">
              <p class="cmp-font fnt-14">결제 예상 금액</p>
              <p class="cmp-font"><span class="num cmp-font fnt-14"><em>13,500</em>원</span></p>
            </v-layout>
            <v-layout justify-space-between>
              <p class="cmp-font fnt-14">최종 결제 금액</p>
              <p class="cmp-font"><span class="cmp-font fnt-11 c-blue pr-6">바우처사용</span><span class="num line-through cmp-font fnt-14"><em>22,500</em>원</span></p>
            </v-layout>

            <div class="cmp-info info-type3 mt-20">
              <p class="cmp-font fnt-14"><!-- [퍼블수정]22.12.29 -->
                BO에 입력된 세탁비 변경 사유 노출를 말줄임표 없이 전부 노출해주세요.
              </p>
            </div>
          </div>
          <div class="line-box">
            <v-layout justify-space-between class="mb-8">
              <p class="cmp-font"><strong>SYSTEM</strong><span class="cmp-font fnt-10 c-red pl-4">세탁불가</span></p>
              <p class="cmp-font fnt-14">하의, 스커트, 반바지</p>
            </v-layout>

            <v-layout justify-space-between class="mb-8">
              <p class="cmp-font fnt-14">결제 예상 금액</p>
              <p class="cmp-font"><span class="num cmp-font fnt-14"><em>9,000</em>원</span></p>
            </v-layout>
            <v-layout justify-space-between>
              <p class="cmp-font fnt-14">최종 결제 금액</p>
              <p class="cmp-font"><span class="num cmp-font fnt-14">-</span></p>
            </v-layout>
          </div>
          <!-- //결제완료 후 예시화면 -->
        </div>
        <div class="contents-box bg-gray full-width">
          <div class="payment-info-box">
            <div class="item cmp-font fnt-14"><p class="tit">결제 예상 금액{{deliveryText}}</p><p class="price">22,500 원</p></div>
            <div class="item total pt-10 cmp-font fnt-20"><p class="tit">최종 결제 금액{{deliveryText}}</p> <p class="price"><strong>9,000</strong> 원</p></div><!-- [퍼블수정]22.12.29 -->
          </div>
        </div>
        <!-- //[퍼블수정] 22.10.20 케이스 별 화면 추가 -->
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
  props: {
    deliveryText : { // 배송비포함텍스트 
      type : String,
      default : '',
    }
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

<style lang="scss">
</style>
