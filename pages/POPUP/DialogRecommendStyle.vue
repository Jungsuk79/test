<template>
  <DialogBasic class="popup-recommend-style" header-title="스타일" :width="540" @hide="closeDialog">
    <template #body>  
      <div class="cmp-tabs tabs-actionTop">
        <v-tabs v-model="tabs" fixed-tabs>
          <v-tab>코디한 상품</v-tab>
          <v-tab>룩북 제안 스타일</v-tab>
        </v-tabs>
      </div>
      <div class="tab-content">
        <v-tabs-items v-model="tabs" touchless>
          <v-tab-item :transition="false">
            <div class="prd-cnt0">
              <ProductList :list="codyList" :layout="productListLayout" :unit-type="productUnitType" />
            </div>
          </v-tab-item>
          <v-tab-item :transition="false">
            <div class="cmp-swiper-box btn-type2">
              <Swiper
                ref="lookbookSwiper" 
                :options="{
                  spaceBetween: 1,
                  loop: true,
                  navigation: {
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                  },
                }"
                :class="{'swiper-no-swiping':lookbookList.length < 2}"
              >
                <SwiperSlide v-for="(item,index) in lookbookList" :key="index">
                  <div class="img-cnt">
                    <v-img :src="item.image_url"/><!-- [퍼블수정]23.03.06 contain,cover 구분 삭제 -->
                  </div>
                  <ProductList :list="item.list" :layout="productListLayout" :unit-type="productUnitType" />
                </SwiperSlide>
              </Swiper>
              <div class="swiper-button-prev swiper-no-swiping"><i v-cmp-icon="{size:32, name:'prev'}">이전</i></div>
              <div class="swiper-button-next swiper-no-swiping"><i v-cmp-icon="{size:32, name:'next'}">다음</i></div>
            </div>
          </v-tab-item>
        </v-tabs-items>
      </div>
    </template>
  </DialogBasic>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'
export default {
  components: { 
    Swiper,
    SwiperSlide,
    DialogBasic 
  },
  data: () => ({
    tabs : 0,
    codyList : [],
    lookbookList : [],
    productListLayout : 2,
    productUnitType : 'mini'
  }),
  created() {
    const me = this
    const json = require('~/static/json/recommend_style_list.json')
    me.codyList = json.cody
    me.lookbookList = json.lookbook
  },
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped></style>
