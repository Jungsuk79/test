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
                <h4>상품정보제공고시</h4>
                <ul class="info-list"><!-- [개발확인]23.02.06 ul태그가 아닌 li 태그가 반복 되어야 합니다. -->
                  <li>
                    <dl>
                      <dt>서비스 제공 사업자</dt>
                      <dd>주식회사 미디어앤아트(레드룸)</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>인증허가</dt>
                      <dd>상세 페이지 참고</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>이용조건</dt>
                      <dd>상세 페이지 참고</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>취소중도해약 해지 조건환불기준</dt>
                      <dd>모든 옵션의 취소 및 환불은 2024년 11월 17일 오후 5시까지 가능합니다. (이후 취소 및 환불 불가)</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>취소 환불방법</dt>
                      <dd>상세 페이지 참고</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>소비자상담 관련 전화번호</dt>
                      <dd>1800-5700</dd>
                    </dl>
                  </li>
                </ul>

                <p class="cmp-font fnt-16 mt-50">위 내용은 상품정보제공 고시에 따라 작성되었습니다.</p>
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
