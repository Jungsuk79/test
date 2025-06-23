<template>
  <DialogBasic
    :width="540"
    class="popup-quality"
    header-title="품질보증 및 보상안내" 
    @hide="closeDialog">
    <template #body>
      <div class="inner">
        <p>품질보증기간 : thehandsome.com의 품질보증기간은 구입일로부터 1년입니다.</p>
        <ul class="cmp-dotList">
          <li>품질보증기간 경과 후에는 재정경제원에서 고시한 피해보상기준에 준하여 감가하여 보상해 드립니다. 상세 기준은 한국소비자보호원 홈페이지(www.cpb.or.kr) 참조하세요.</li>
          <li>A/S 이용 문의 사항은 고객센터(1800-5700)으로 연락 주시면 접수 방법 안내 드립니다.</li>
          <li>소비자 권익을 옹호하는 민간소비자단체인 한국소비자연맹에서 매주 수요일에 분쟁 의류 제품에 대하여 확인(심의)하여 고객 또는 제조회사에게 알려 드리고 있습니다. 저희 한섬에서는 고객의 요구시 소비자 연맹에 심의 의뢰를 무료로 행하고 있습니다.</li>
        </ul>  
        <p class="mt-20">당사는 본 상품에 대해 공정거래위원회 고시 '소비자분쟁 해결기준'에 의거하여 다음과 같이 보상해드립니다.</p>

        <div class="table-wrap">
          <table class="tbl" dense>
            <caption>
            상품 추가 정보
            </caption>
            <colgroup>
                <col style="width: 246px" />
                <col style="width: auto"/>
            </colgroup>
            <thead>
            <tr>
                <th scope="col">피해유형</th>
                <th scope="col">해결기준</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td scope="row">봉제불량</td>
                <td rowspan="5">수선, 교환, 환불<br /> 순서로 보상</td>
            </tr>
            <tr>
                <td scope="row">
                원단불량<br />(제직불량, 세탁 후 변색, 탈색, 수축 등)
                </td>
            </tr>
            <tr>
                <td scope="row">
                부자재불량<br />(단추, 스냅, 지퍼 등)
                </td>
            </tr>
            <tr>
                <td scope="row">
                치수(사이즈)의 부정확<br />
                </td>
            </tr>
            <tr>
                <td scope="row">
                부당표시<br />(미 표시 및 부실표시) 및 소재 구성 부적합으로 인한 세탁사고
                </td>
            </tr>
            <tr>
                <td scope="row">치수(사이즈)가 맞지 않거나 디자인 색상 불만</td>
                <td>교환 또는 환불<br />(제품 구입 후 7일 이내로 제품에 손상이 없는 경우)</td>
            </tr>
            </tbody>
          </table>
        </div>

        <p class="mt-24">교환</p>
        <ul class="cmp-dotList">
          <li>동일가격, 동일제품 교환을 원칙으로 함</li>
          <li>상하 일착인 경우 한쪽에만 이상이 있어도 일착으로 처리함</li>
        </ul>

        <p class="mt-20">환불</p>
        <ul class="cmp-dotList">
          <li>교환 및 환불은 구입가격 기준을 원칙으로 함 (단, 품질보증기간 이내의 제품은 구입가 환불 품질보증기간 경과 제품은 세탁업 배상비율표 적용하여 감가함)</li>
        </ul>

        <p class="mt-20">보상순위</p>
        <ul class="cmp-dotList">
          <li>보상은 무상수리, 교환, 환불 순으로 함</li>
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

<style lang="scss">
</style>
