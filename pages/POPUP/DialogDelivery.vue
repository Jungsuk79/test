<template>
  <DialogBasic class="popup-productDelivery" header-title="배송/교환/반품" :width="540" @hide="closeDialog">
    <template #body>  
     <div class="inner">
        <section class="sec-explain">
          <div class="tit-type">
            <h2>배송안내</h2>
          </div>
          <div class="list-prdExplain">
            <dl>
              <dt>배송방식</dt>
              <dd>우체국택배, CJ대한통운, 로젠택배</dd>
            </dl>
            <dl>
              <dt>배송지역</dt>
              <dd>전국 (일부 지역 제외)</dd>
            </dl>
            <dl>
              <dt>배송정보</dt>
              <dd>
                주문완료일 기준 평균 2-4일 소요되며 (토/일/공휴일 제외)<br />매장재고 주문의 경우 5일 이상 지연될 수 있습니다.<br />(재고수급 불가 시, 취소안내 예정)
              </dd>
            </dl>
            <dl>
              <dt>배송비</dt>
              <dd>
                <p class="pb-6">실결제금액 기준 30,000원 이상 결제 시 무료배송<br>30,000원 미만 결제 시 3,000원(기본 배송비)</p>
                <ul class="cmp-dotList">
                  <li>실결제금액이란, 쿠폰/바우처 할인액 및 한섬마일리지/<br>H.Point 사용 금액을 제외한 금액입니다.<br>(e-money 사용은 실결제금액에 포함)</li>
                  <li>도서산간 지역은 3,000원의 별도 배송비가 부과됩니다.</li>
                  <li>일부 도서지역은 도선료가 부가될 수 있습니다.</li>
                </ul>
              </dd>
            </dl>
          </div>
          <div class="tit-type">
            <h2>교환/반품안내</h2>
          </div> 
          <div class="list-prdExplain">
            <dl>
              <dt>교환/반품 기간</dt>
              <dd>상품 수령 후, 7일 이내</dd>
            </dl>
            <dl>
              <dt>교환절차</dt>
              <dd>[배송완료] 7일 이내에 마이페이지 주문조회 메뉴에서<br />[교환신청] 버튼을 선택 시 가능합니다.(교환 재고가 없을 경우, 환불로 안내예정)교환은 배송비 결제 이후에 진행됩니다. 화장품은 상품 불량만 교환 가능하며 상품 개봉 후에는 교환이 불가하며 입고 시 반려될 수 있습니다.</dd>
            </dl>
            <dl>
              <dt>반품절차</dt>
              <dd>
                [배송완료] 7일 이내에 마이페이지 주문조회 메뉴에서<br />[반품신청] 버튼을 선택 시 가능합니다. 반품은 아래 불가사유에 따라 반려될 수 있습니다.
              </dd>
            </dl>
            <dl>
              <dt>교환/반품<br>배송비</dt>
              <dd>
               배송비는 6,000원 이며(반품비는 주문시 배송비 결제 유무<br>에 따라 변동) 상품 불량 등의 이유로 교환/반품하실 경우, 배송비는 무료입니다.
              </dd>
            </dl>
            <dl>
              <dt>교환/반품<br>불가사유</dt>
              <dd>
               <p class="pb-6">다음의 경우에는 교환/반품이 불가합니다.</p>
               <ul class="cmp-dotList">
                <li>교환/반품 기간(상품 수령 후 7일 이내)을 초과하였을 경우</li>
                <li>고객님의 요청에 의해 상품 사양이 변경(이니셜 상품, 사이즈 맞춤 상품 등)된 경우</li>
                <li>상품의 가격 택 및 케어라벨이 제거된 경우</li>
                <li>상품을 이미 사용하였거나, 상품 일부를 소비하였을 경우</li>
                <li>화장품 : 상품 개봉 후 교환/반품 불가.<br> 
                  단 상품 불량(내용물 불량) 혹은 피부 트러블로 인한 반품은 가능<br>
                  (용량 1/3 미만 사용 및 의사소견서 1:1 문의 첨부 필수)</li>
                <li>식기류 : 상품 수령 후, 비닐포장을 개봉한 경우</li>
                <li>고객님의 귀책사유로 인해 회수가 지연될 경우</li>
                <li>국내외 환율 변동 등에 의해 가격이 변동되는 상품의 경우</li>
                <li>문제소지가 있는 상품을 본사가 아닌, 타 업체(일반 수선실 등)에서 선처리가 된 경우</li>
               </ul>
              </dd>
            </dl>
            <dl>
              <dt>교환/반품 건<br>배송</dt>
              <dd>교환/반품 시 배송 받으신 박스로 반송하셔야 합니다.<br>(한섬/오에라/리퀴드퍼퓸바 상품을 함께 주문 후 교환/반품 시 각각의 박스에 나눠서 반송해주세요. 한 박스에 함께 동봉하여 반송 시 교환/반품 처리가 불가할 수 있습니다)</dd><!-- 230224 상품상세 : 문구수정 -->
            </dl>
          </div> 

          <div class="tit-type">
            <h2>환불안내</h2>
          </div> 
          <p>환불은 반송된 상품이 확인된 이후 진행됩니다. 카드환불은 반품완료일 기준 평일 3~5일 후 처리되며 정확한 날짜는 카드사별 상이합니다. 실시간 계좌이체의 경우, 평일 1~2일 후(오후 6시 전후) 환불됩니다.</p>
        </section>
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
