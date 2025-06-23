<template>
  <DialogBasic
    :width="540"
    class="popup-repair popup-quality"
    header-title="수선진행 및 비용안내" 
    @hide="closeDialog">
    <template #body>
      <div class="inner">
        <p class="cmp-font fnt-16">수선 기간</p>
        <ul class="cmp-dotList">
          <li>평균 본사 접수일로부터 10일 이내 소요. (수선 공정이 어려운 경우 완료일이 다소 지연될 수 있습니다.)</li>
        </ul>
        <p class="cmp-font fnt-16 mt-20">A/S 진행</p>
        <ul class="cmp-dotList">
          <li>동일한 원단, 부자재를 활용하여 최대한 원상 복구 수선을 원칙으로 합니다. 단 오래된 제품, 수입 자재 제품(수입완제품)은 유사 원단이나 부자재로 대체 수선 또는 수선 불가할 수 있습니다.<br/>또한 사이즈 변경 수선과 파손이 심한 제품은 본사 수선 불가합니다.</li>
        </ul>
        <p class="cmp-font fnt-16 mt-20">A/S 비용</p>
        <ul class="cmp-dotList">
          <!-- S : [231016] 케어플러스 내용 추가및 수정 -->
          <li>구입 일자로부터 1년 이내 A/S는 무상으로 진행해드립니다.<br />(이월 매장구매 제품 및 ACC 류 제외)</li>
          <!-- E : [231016] 케어플러스 내용 추가및 수정 -->
          <li>ACC(가죽, 신발류)는 구입 일자와 상관없이 수선비용이 발생할 수 있습니다.<br/>정상 상품 : 1년 이내 무상(단, 취급부주의는 유상 진행) / 1년 경과 유상<br/>아울렛 상품 : 유상</li>
        </ul>
        <p class="cmp-font fnt-16 mt-20">유상 수선비용</p>
        <div class="table-wrap full mt-16">
          <table class="tbl" dense>
            <caption>
              유상 수선비용 정보
            </caption>
            <colgroup>
                <col style="width: 50%" />
                <col style="width: 50%"/>
            </colgroup>
            <thead>
              <tr>
                <th scope="col">단순 기장수선</th>
                <th scope="col">예상금액</th>
              </tr>
            </thead>
            <tbody>
              <tr class="fnt-13">
                <td scope="row" class="">상의/자켓 소매</td>
                <td>20,000</td>
              </tr>
              <tr class="fnt-13">
                <td scope="row">바지 기장</td>
                <td>15,000</td>
              </tr>
              <tr class="fnt-13">
                <td scope="row">스커트/원피스 총장</td>
                <td>20,000</td>
              </tr>
              <tr class="fnt-13">
                <td scope="row">코트 총장</td>
                <td>30,000</td>
              </tr>
            </tbody>
          </table>
          <p class="info-txt mt-14">수선비는 예상금액이며, 소재 특성 및 수선 방식/범위에 따라 변동될 수 있습니다.</p>
        </div>

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
