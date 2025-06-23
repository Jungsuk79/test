<template>
  <DialogBasic
   class="popup-optionChange" 
    header-title="옵션 변경" 
    :width="540"
    @hide="closeDialog">
    <template #body>
      <div class="cmp-info info-type1 mb-6">
        <p class="cmp-font">동일한 금액의 상품으로 옵션 변경이 가능합니다.</p><!-- 220919 문구변경 -->
      </div>
      <div v-for="(item, index) in unitData" :key="index" class="product-type">
        <div class="product-row-unitInfo or-prd-type"><!-- [퍼블수정]23.01.19 상품이미지 : or-prd-type 클래스 추가 -->
          <div class="product-image" :class="{'sold-out':item.sold_out}">
            <v-img :src="item.image" :alt="item.product_name" />
            <div v-if="item.sold_out" class="sold-out-txt">SOLD OUT</div>
          </div>
          <div class="product-info-cnt">
            <div class="product-brand">{{item.brand_name}}</div>
            <div class="product-name pb-20">{{item.product_name}}</div>
            <v-layout row align-start justify-space-between>
              <ul class="color-chip-box">
                <li v-for="(item1, index1) in item.colorChipData" :key="index1" class="chip">
                  <input :id="'colorChip'+index+index1" v-model="item.colorChipModel" type="radio" :disabled="false" :value="item1.value" :name="'colorChip'+index">
                  <label :for="'colorChip'+index+index1">
                    <span :style="{'background-image': 'url('+item1.image+')'}">{{item1.value}}</span>
                  </label>
                </li>
              </ul>
              <p class="cmp-font fnt-14 c-gray">{{item.colorChipModel}}</p>
            </v-layout>
          </div>
        </div>

        <!-- 230112 옵션셀렉트 : 추가 -->
        <ProductOptionSelect :size-data="item.optionSizeData" :openup="index !== 0 && index === unitData.length - 1" :max-height="123" />

        <!-- 230112 옵션셀렉트 : 삭제 Start -->
        <!-- 첫번째 상품 옵션 -->
        <!-- <ProductOptionSelect v-if="index == 0" :size-data="item.optionSizeData" /> -->
        <!-- 두번째 ~ n번째 상품 옵션 -->
        <!--  <ProductOptionSelect v-else :size-data="item.optionSizeData" @openSelect="scrollBottom(index)" /> -->
        <!-- // 230112 옵션셀렉트 : 삭제 Start -->
      </div>
    </template>
    <template #footer>
      <v-btn large block color="primary">변경 완료</v-btn>
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
    unitData : [
      {
        brand_name: 'MINE',
        product_name: '컬러 블록 니트 가디건 컬러 니트',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
        options: ['BLACK', '90', '2개'],
        sell_price: '355000',
        discount: '20',
        price: '366000',
        link: '#n',
        notice: '인기 상품으로 배송 지연 예상 (평일 기준 5일 이상 소요)',
        prd_numebr : '2',
        colorChipModel : 'COCOA',
        colorChipData : [
          {
            value : 'COCOA',
            image : 'https://img.thehandsome.com/md/publish/dummy/color-COCOA.png',
          },
          {
            value : 'CHARCOAL',
            image : 'https://img.thehandsome.com/md/publish/dummy/color-CHARCOAL.png',
          },
          {
            value : 'BLUE',
            image : 'https://img.thehandsome.com/md/publish/dummy/color-BLUE.png',
          },
          {
            value : 'DARKGRAY',
            image : 'https://img.thehandsome.com/md/publish/dummy/color-DARKGRAY.png',
          },
          {
            value : 'DARKGREEN',
            image : 'https://img.thehandsome.com/md/publish/dummy/color-DARKGREEN.png',
          },
          {
            value : 'GREY',
            image : 'https://img.thehandsome.com/md/publish/dummy/color-GREY.png',
          },
          {
            value : 'BLACK',
            image : 'https://img.thehandsome.com/md/publish/dummy/color-BLACK.png',
          },
        ],
        optionSizeData : {
          select_idx : null,
          list : [
            {
              size_en : 'S',
              sold_out : false,
            },
            {
              size_en : 'M',
              sold_out : false,
            },
            {
              size_en : 'L',
              sold_out : false,
            },
            {
              size_en : 'XL',
              sold_out : true,
            },
            {
              size_en : '2XL',
              sold_out : true,
            },
            {
              size_en : 'FREE',
              sold_out : false,
            },
          ]
        },
      },
      {
        brand_name: 'FOURM MEN’S LOUNGE',
        product_name: '[BEARBRICK] 사이키델릭 페이즐리',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
        options: ['CHARCOAL GRAY', '90', '1개'],
        sell_price: '355000',
        discount: null,
        price: null,
        link: '#n',
        notice: null,
        prd_numebr : '1',
        colorChipModel : 'COCOA',
        colorChipData : [
          {
            value : 'COCOA',
            image : 'https://img.thehandsome.com/md/publish/dummy/color-COCOA.png',
          },
          {
            value : 'CHARCOAL',
            image : 'https://img.thehandsome.com/md/publish/dummy/color-CHARCOAL.png',
          },
          {
            value : 'BLUE',
            image : 'https://img.thehandsome.com/md/publish/dummy/color-BLUE.png',
          },
          {
            value : 'DARKGRAY',
            image : 'https://img.thehandsome.com/md/publish/dummy/color-DARKGRAY.png',
          },
          {
            value : 'DARKGREEN',
            image : 'https://img.thehandsome.com/md/publish/dummy/color-DARKGREEN.png',
          },
          {
            value : 'GREY',
            image : 'https://img.thehandsome.com/md/publish/dummy/color-GREY.png',
          },
          {
            value : 'BLACK',
            image : 'https://img.thehandsome.com/md/publish/dummy/color-BLACK.png',
          },
          {
            value : 'PURPLE',
            image : 'https://img.thehandsome.com/md/publish/dummy/color-PURPLE.png',
          },
          {
            value : 'YELLOW',
            image : 'https://img.thehandsome.com/md/publish/dummy/color-YELLOW.png',
          },
          {
            value : 'ORANGE',
            image : 'https://img.thehandsome.com/md/publish/dummy/color-ORANGE.png',
          },
          {
            value : 'WHITE',
            image : 'https://img.thehandsome.com/md/publish/dummy/color-WHITE.png',
          },
        ],
        optionSizeData : {
          select_idx : null,
          list : [
            {
              size_en : 'S',
              sold_out : false,
            },
            {
              size_en : 'M',
              sold_out : false,
            },
            {
              size_en : 'L',
              sold_out : false,
            },
            {
              size_en : 'XL',
              sold_out : true,
            },
            {
              size_en : '2XL',
              sold_out : true,
            },
            {
              size_en : 'FREE',
              sold_out : false,
            },
          ]
        },
      },
    ],
  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
    /* scrollBottom(idx){ // 230112 옵션셀렉트 : 삭제
      const me = this
      const objDiv = document.querySelector(".popup-body");
      me.$nextTick(function(){
        if(idx > 0){
          objDiv.scrollTop = 250 * idx
        }else{
          objDiv.scrollTop = objDiv.scrollHeight
        }
      })
    } */
  },
}
</script>

<style lang="scss">
</style>
