<template>
  <DialogBasic class="popup-shopStock" header-title="매장 재고 확인" :width="540" @hide="closeDialog">
    <template #body>  
      <div class="shopStock-line">
        <v-layout align-center>
          <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/004.jpg" alt="상품 이미지" class="product-img"></v-img>
          <div class="product-info">
             <div class="product-brand">MINE</div>
             <div class="product-name">컬러 블록 니트 가디건 컬러 니트</div>
             <div class="product-price">321,000</div> 
          </div>
        </v-layout>
      </div>

      <!-- 컬러칩 -->
      <section class="select-color">
        <h3 class="sec-title">컬러</h3>
        <div class="sec-content">
          <ul class="color-chip-box size-type1">
            <li class="chip">
              <input v-model="colorChip" id="colorChip0" type="radio" name="colorChip" checked="checked" value="COCOA"> 
              <label for="colorChip0">
                <span style="background-image:url(https://img.thehandsome.com/md/publish/dummy/color-COCOA.png);">COCOA</span>
              </label>
            </li>
            <li class="chip">
              <input v-model="colorChip" id="colorChip1" type="radio" name="colorChip" value="BLUE" disabled> 
              <label for="colorChip1">
                <span style="background-image:url(https://img.thehandsome.com/md/publish/dummy/color-BLUE.png);">BLUE</span>
              </label>
            </li>
            <li class="chip">
              <input v-model="colorChip" id="colorChip2" type="radio" name="colorChip"  value="PURPLE"> 
              <label for="colorChip2">
                <span style="background-image:url(https://img.thehandsome.com/md/publish/dummy/color-PURPLE.png);">PURPLE</span>
              </label>
            </li>
            <li class="chip">
              <input v-model="colorChip" id="colorChip3" type="radio" name="colorChip"  value="YELLOW"> 
              <label for="colorChip3">
                <span style="background-image:url(https://img.thehandsome.com/md/publish/dummy/color-YELLOW.png);">YELLOW</span>
              </label>
            </li>
            <li class="chip">
              <input v-model="colorChip" id="colorChip4" type="radio" name="colorChip"  value="ORANGE"> 
              <label for="colorChip4">
                <span style="background-image:url(https://img.thehandsome.com/md/publish/dummy/color-ORANGE.png);">ORANGE</span>
              </label>
            </li>
            <li class="chip">
              <input v-model="colorChip" id="colorChip5" type="radio" name="colorChip"  value="GREY"> 
              <label for="colorChip5">
                <span style="background-image:url(https://img.thehandsome.com/md/publish/dummy/color-GREY.png);">GREY</span>
              </label>
            </li>
            <li class="chip">
              <input v-model="colorChip" id="colorChip6" type="radio" name="colorChip"  value="WHITE"> 
              <label for="colorChip6">
                <span style="background-image:url(https://img.thehandsome.com/md/publish/dummy/color-WHITE.png);">WHITE</span>
              </label>
            </li>
            <li class="chip">
              <input v-model="colorChip" id="colorChip7" type="radio" name="colorChip"  value="DARKGRAY"> 
              <label for="colorChip7">
                <span style="background-image:url(https://img.thehandsome.com/md/publish/dummy/color-DARKGRAY.png);">DARKGRAY</span>
              </label>
            </li>
            <li class="chip">
              <input v-model="colorChip" id="colorChip8" type="radio" name="colorChip"  value="DARKGREEN"> 
              <label for="colorChip8">
                <span style="background-image:url(https://img.thehandsome.com/md/publish/dummy/color-DARKGREEN.png);">DARKGREEN</span>
              </label>
            </li>
          </ul>
          <div class="color-name">{{colorChip}}</div>
        </div>
      </section>

      <!-- 사이즈 -->
      <div class="select-size">
        <h3 class="sec-title">사이즈</h3>
        <div class="cmp-tabs tab-wrapType column03">
          <v-tabs fixed-tabs>
            <v-tab>XXXS</v-tab>
            <v-tab>XXS</v-tab>
            <v-tab>XXS</v-tab>
            <v-tab>XS</v-tab>
            <v-tab>S</v-tab>
            <v-tab>M</v-tab>
            <v-tab>L</v-tab>
            <v-tab>XL</v-tab>
            <v-tab>XXL</v-tab>
            <v-tab>XXXL</v-tab>
            <v-tab>FREE</v-tab>
            <v-tab>ETC</v-tab>
          </v-tabs>
        </div>
      </div>
      <!-- //사이즈 -->
    </template>
    <template #footer>
      <!-- 220916 CTA고정 : 버튼 <template #footer>로 위치 변경 -->
      <v-btn large block color="primary">매장 재고 확인</v-btn>
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
    colorChip: 'COCOA', // 퍼블확인용

  }),
  mounted() {
   
  },
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
