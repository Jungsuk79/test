<template>
  <div class="prd-tab-cont detail-info-notice">
      <v-expansion-panels accordion class="cmp-acc acc-type2">
        <v-expansion-panel>
          <v-expansion-panel-header>상품정보고시
            <template #actions>
              <i class="cmp-icon-etc cmp-icon-down">열기/닫기</i>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="info-cont">
              <div class="item-section">
                <h4>상품기본정보</h4>
                <ul class="info-list"><!-- [개발확인]23.02.06 ul태그가 아닌 li 태그가 반복 되어야 합니다. -->
                  <li>
                    <dl>
                      <dt>상품품번</dt>
                      <dd>TM2BAKTO475WM1</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>품목</dt>
                      <dd>의류</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>소재</dt>
                      <dd>겉감 CA : 캐시미어 27%, WO : 모 73%, 배색1 NL : 나일론 19%, PL : 폴리에스터 81%, 배색2 CA : 캐시미어 29%, WO : 모 71%, 배색3 NL : 나일론 51%, PL : 폴리에스터 49%(BK)</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>색상</dt>
                      <dd>BK(BLACK)</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>사이즈</dt>
                      <dd>90</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>제조국</dt>
                      <dd>한국</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>제조사</dt>
                      <dd>(주)한섬</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>제조연월</dt>
                      <!-- 240213_제조연월 항목 문구 추가 -->
                      <dd>2021/11<br />생산 일정에 따라 제품별로 제조연월에 차이가 존재할 수 있으며, 정확한 제조연월은 케어라벨을 확인하여 주시기 바랍니다.</dd>
                      <!-- // 240213_제조연월 항목 문구 추가 -->
                    </dl>
                  </li>
                </ul>
              </div>
              <div class="item-section">
                <h4>세탁방법 및 취급 시 주의사항</h4>
                <ul class="icon-info-list">
                  <li><v-img src="https://img.thehandsome.com/md/publish/dummy/pc/mo_ko_002.png" alt=""/></li>
                  <li><v-img src="https://img.thehandsome.com/md/publish/dummy/pc/mo_ko_013.png" alt=""/></li>
                  <li><v-img src="https://img.thehandsome.com/md/publish/dummy/pc/mo_ko_016.png" alt=""/></li>
                  <li><v-img src="https://img.thehandsome.com/md/publish/dummy/pc/mo_ko_029.png" alt=""/></li>
                  <li><v-img src="https://img.thehandsome.com/md/publish/dummy/pc/mo_ko_044.png" alt=""/></li>
                </ul>
                <!-- <ol class="info-dry">
                  <li>기본드라이</li>
                  <li>다림질<br>(80~120)</li>
                  <li>물세탁금지</li>
                  <li>그늘옷걸이</li>
                  <li>염소계<br>표백제 불가</li>
                </ol> -->
                <p class="info-text">본 제품은 반드시 드라이크리닝 하십시오. 세탁 시 이염, 변색, 탈색될 수 있으니 유의하시기 바랍니다. 단추나 악세서리는 세탁 시 손상될 수 있으므로 은박지로 싸거나 분리하여 주십시오. 특성상 마찰에 의해 올 뜯김 등 원단 손상이 발생할 수 있으니 취급 시 주의하시기 바랍니다.</p>
              </div>
              <div class="item-section">
                <h4>품질보증기준</h4>
                <ol class="list-num">
                  <li>
                    1. 본 제품은 정부 고시 소비자 분쟁해결 기준에 의거 고객의 정당한 피해를 보상해드립니다. 
                    <ul class="cmp-list list-dotType2">
                      <li>원단 불량, 부자재 불량, 봉제 불량, 사이즈 부정확, 부당 표시(미표시 및 부실표시) 및 소재 구성 부적합으로 인한 세탁 사고 : 구입일로부터 1년 이내분은 무상수리, 교환, 구입가 환불함. (단, 봉제 불량은 1년 경과 후에도 무상 수선 가능)</li>
                      <li>사이즈가 맞지 않거나 디자인, 색상 불만 제품 : 구입 후 7일 이내로서 제품에 손상이 없는 경우 동일 가격, 동일 제품으로 교환 가능.</li>
                      <li>상하의 한 벌(세트/일착)인 경우 한 쪽에만 이상이 있어도 한 벌(세트/일착)로 처리함. 단, 소재 및 디자인이 다른 경우에는 해당 의류만 교환 가능.</li>
                    </ul>
                  </li>
                  <li>2. 소비자 부주의에 의한 제품 훼손, 세탁 잘못으로 인한 변형 및 품질 보증기간(1년)이 경과한 제품에 대해서는 보상의 책임을 지지 않으며, 수선 가능시에는 실비로 수선해드립니다.</li>
                  <li>3. 제품에 이상이 있는 경우 바로 본사로 연락주시면 수선/교환/환불이 가능하나, 타업체(일반 수선실 등)에서 수선했을 경우는 불가능합니다.</li>
                </ol>
              </div>
              <div class="item-section">
                <!-- 230224 상품정보고시 : 마크업 수정 Start -->
                <v-layout align-end justify-space-between>
                  <div>
                    <h4>AS 책임자와 연락처</h4>
                    <p class="info-text">㈜한섬 / 1800-5700</p>
                    <p class="info-text mt-10">위 내용은 상품정보제공 고시에 따라 작성되었습니다.</p>
                  </div>
                  <div class="kc-mark-info">
                    <img src="/images/common/kc-mark.svg" alt="KC mark" class="img" />
                    <p class="txt">[어린이제품] 안전인증<br>국가통합인증마크(KC)를 획득한 상품입니다.</p>
                  </div>
                </v-layout>
                <!-- 230224 상품정보고시 : 마크업 수정 End -->
              </div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
</template>

<script>
export default {
  components: {
    
  },
  props: {
    
  },
  data: () => ({

  }),
  created() {
    
  },
  mounted() {

  },
  methods: {
    
  },
}
</script>

<style lang="scss">
 @import '@/assets/scss/pages/detail.scss'; //페이지 전용 css
</style>
