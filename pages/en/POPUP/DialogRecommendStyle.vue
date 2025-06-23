<template>
  <DialogBasic class="popup-recommend-style" header-title="Style" :width="540" @hide="closeDialog">
    <template #body>  
      <div class="cmp-tabs tabs-actionTop">
        <v-tabs v-model="tabs" fixed-tabs>
          <v-tab>Coordinated Product</v-tab>
          <v-tab>Lookbook Proposed Style</v-tab>
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
                  navigation: {
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                  },
                }"
                :class="{'swiper-no-swiping':lookbookList.length < 2}"
              >
                <SwiperSlide v-for="(item,index) in lookbookList" :key="index">
                  <div class="img-cnt">
                    <div v-background-image="{url:item.image_url}"></div>
                  </div>
                  <ProductList :list="item.list" :layout="productListLayout" :unit-type="productUnitType" />
                </SwiperSlide>
              </Swiper>
              <div class="swiper-button-prev swiper-no-swiping"><i v-cmp-icon="{size:32, name:'prev'}">previous</i></div>
              <div class="swiper-button-next swiper-no-swiping"><i v-cmp-icon="{size:32, name:'next'}">next</i></div>
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
    const json = require('~/static/json/recommend_style_list_en.json')
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
