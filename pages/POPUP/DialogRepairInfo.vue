<template>
  <DialogBasic
    :width="540"
    class="popup-repair popup-quality"
    header-title="케어플러스 수선 안내" 
    @hide="closeDialog">
    <template #body>
      <div class="inner">
        
        <div class="contents-handsomecare mb-0">
          <div class="column-box pt-0">
            <ul class="list-box">
              <li>
                <div class="num-txt-wrap">
                  <span class="num">01.</span>
                  <p class="txt">케어플러스 수선은 <span class="cmp-font bold c-blue">2주 이상</span> 소요되며, 소재 특성 및 수선 방식/범위에 따라 기간이 연장될 수 있습니다.</p>
                </div>
              </li>
              <!-- S : [231016] 케어플러스 내용 추가및 수정 -->
              <li class="mt-20">
                <div class="num-txt-wrap">
                  <span class="num">02.</span>
                  <p class="txt">수선은 [트로반트] 업체에서 진행되며, 수선비용 및 시일 안내를 위해 트로반트 수선실 번호(031-388-9467)로 연락드립니다.</p>
                </div>
              </li>
              <li class="mt-20">
                <div class="num-txt-wrap">
                  <span class="num">03.</span>
                  <p class="txt">단순 기장수선의 경우, 더한섬닷컴 주문건만 가능하며 오프라인 구매건은 구매 매장에 문의 부탁드립니다.
                    <ul class="cmp-list list-dotType mt-16">
                      <li>상의(소매 기장), 하의(총 기장) 줄임 수선만 가능 (디테일 없는 디자인에 한함)</li>
                      <li class="cmp-font bold c-blue">기장 수선 부위 몇 CM 기재 또는 옷핀으로 고정 필수</li>
                      <li>수선 범위 내에서도 디자인에 따라 기장 수선이 불가할 수 있음</li>
                      <li class="cmp-font bold c-blue">단, 원피스, 가죽제품, 핸드메이드 제품(코트, 자켓, 스커트 등)은 기장 수선 불가</li>
                    </ul>
                  </p>
                </div>
              </li>
              <li class="mt-20">
                <div class="num-txt-wrap">
                  <span class="num">04.</span>
                  <p class="txt">품질보증기간 1년이 지난 유상수선 상품(아울렛 상품 포함)의 경우, 수선비와 <span class="cmp-font bold c-blue">배송비(3,000원)</span>가 청구됩니다.(기장 수선 15,000~30,000원 예상)
                    <ul class="cmp-list list-dotType mt-6">
                      <li>케어플러스 수선 > 수선진행 및 비용안내 참조</li>
                    </ul>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          <div class="contBg-box repair-contBg mt-40 mb-6">
            <div class="cmp-info info-type3">
              <p class="mb-4">수선접수 불가 항목(고객센터 문의)</p>
              <ul class="cmp-dotList mt-10 pt-0">
                <li>불량여부 확인(심의건)</li>
                <li>부자재 신청 및 교환/환불 요청건</li>
                <li class="cmp-font fnt-14 bold">품 수선 및 디자인 변형되는 수선</li>
                <li>기타 ACC류 (귀걸이, 목걸이, 팔찌, 브로치 등)</li>
              </ul>
            </div>
          </div>

          <div class="mt-20 mb-50">
            <v-checkbox v-model="isCheckValue" label="(필수) 수선 안내 내용을 확인하였으며, 수선 진행에 동의 합니다." class="cmp-form-checkbox"></v-checkbox>
          </div>

        </div>
      </div>
    </template>

    <template #footer>
      <div class="cmp-btnsArea full cmp-list">
        <v-btn depressed tile large block :ripple="false" color="primary" :disabled="!isCheckValue">
          안내사항 확인 완료
        </v-btn>
      </div>
    </template>
    <!-- E : [231016] 케어플러스 내용 추가및 수정 -->
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
    isCheckValue: false, // 체크박스

  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/handsomecare.scss';
</style>
