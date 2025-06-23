<template>
  <DialogBasic class="popup-shopStock" header-title="매장 재고 확인" :width="540" @hide="closeDialog">
    <template #body>  
      <div class="shopStock-line">
        <v-layout align-center>
          <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/004.jpg" alt="상품 이미지" class="product-img"></v-img>
          <div class="product-info">
             <div class="product-brand">MINE</div>
             <div class="product-name">컬러 블록 니트 가디건 컬러 니트</div>
             <div class="product-option"><span class="option">COCOA</span><span class="option">M</span></div><!--20221214 추가-->
             <div class="product-price">321,000</div> 
             <v-btn small color="primary" outlined :width="96">다시선택</v-btn>
          </div>
        </v-layout>
      </div>

      <ul class="cmp-dotList">
        <li>수령하시고자 하는 매장을 선택해 주세요.</li>
        <li>정확한 수량 및 구매 가능 여부는 매장에 문의해 주세요.</li>
      </ul>
      
        <!-- [퍼블수정]23.02.02 -->
      <!-- <CommonNoData msg="매장 재고를 찾을 수 없습니다."></CommonNoData> -->

      <v-checkbox label="품절 매장 제외" class="cmp-form-checkbox"></v-checkbox>

      <!-- 매장 목록 -->
      <v-expansion-panels accordion v-model="activePanelIndex" class="cmp-acc acc-type2 cmp-acc-shoplist">
         <v-expansion-panel v-for="n in 5" :key="n" :readonly="true">
          <v-expansion-panel-header>
            <div class="title-wrap">
              <!-- 우측 버튼 -->
              <div class="map-btns">
                 <v-btn-toggle
                    dense
                    borderless
                    active-class="on">
                    <v-btn
                      icon
                      outlined
                      small
                      color="primary"
                      class="icon-location"
                      @click="activePanel(n-1)">
                      <i v-cmp-icon="{ name: 'locoff' }">지도보기 열기</i>
                      <i v-cmp-icon="{ name: 'locon' }">지도보기 닫기</i>
                    </v-btn>
                  </v-btn-toggle>
              </div>
              <!-- //우측 버튼 -->

              <div class="text-wrap">
                <p class="store"><strong class="mr-10">청담애비뉴</strong>1.53km</p>
                <p class="address">서울특별시 강남구 도산대로 523</p>
                <a href="tel:02-3467-8780" class="telephone">02-3467-8780</a>
                <p class="num">수량 13</p>
              </div>
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="area-map">
              <v-card height="250">
                <div style="height:250px;background: url('https://img.thehandsome.com/md/publish/dummy/pc/temp_map.png')  no-repeat center center / cover;"></div> <!-- 다음지도API -->
              </v-card>
            </div>
          </v-expansion-panel-content>
         </v-expansion-panel>
      </v-expansion-panels>  

      <ProductListPaging />
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
    activePanelIndex: -1,

  }),
  mounted() {
   
  },
  methods: {
    closeDialog() {
      this.$emit('close')
    },
     activePanel(n) { // 매장 아코디언
      this.activePanelIndex = this.activePanelIndex < 0 || this.activePanelIndex !== n ? n : -1;
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
