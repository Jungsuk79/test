<template>
  <DialogBasic
    class="popup-shoppingbag-optionChange btmfull-ver"
    header-title="Change Option"
    :width="540"
    @hide="closeDialog"
  >
    <template #body>
      <div class="inner">
        <!-- 컬러 -->
        <div class="pop-cnt">
          <p class="pop-tit">Color</p>
          <div class="colorchip-container">
            <ul class="color-chip-box">
              <li v-for="(item, index) in colorChipData" :key="index" class="chip">
                <input :id="'colorChip'+index" v-model="colorChipModel" type="radio" :disabled="false" :value="item.value" :name="'colorChip'+index">
                <label :for="'colorChip'+index">
                  <span :style="{'background-image': 'url('+item.image+')'}">{{item.value}}</span>
                </label>
              </li>
            </ul>
            <p class="name">{{colorChipModel}}</p>
          </div>
        </div>
        <!-- //컬러 -->

        <!-- 사이즈 -->
        <div class="pop-cnt">
          <p class="pop-tit">Size</p>
          <ProductOptionSelect :size-data="optionSizeData" default-text="Select Size" :max-height="123"/><!-- 230112 옵션셀렉트 : max-height 161 > 123 변경 -->
        </div>
        <!-- //사이즈 -->

        <!-- 수량 -->
        <div class="pop-cnt">
          <p class="pop-tit">Quantity</p>
          <CommonCountingBox max="10" />
        </div>
        <!-- //수량 -->

        <!-- 총합계 -->
        <dl class="total-price">
          <dt>Total<em>(DUTY/TAX not included)</em></dt>
          <dd>
            ￦<strong>1,500,000</strong>
            <em>($<strong>1,325.12</strong>)</em>
          </dd>
        </dl>
        <!-- //총합계 -->
      </div>
    </template>
    <template #footer>
      <v-btn large block color="primary">Complete Selection</v-btn>
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
    colorChipModel : 'RED/BURGANDY PATTERN',
    colorChipData : [
      {
        value : 'RED/BURGANDY PATTERN',
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
        value : 'BLUE2',
        image : 'https://img.thehandsome.com/md/publish/dummy/color-BLUE.png',
      },
      {
        value : 'DARKGRAY2',
        image : 'https://img.thehandsome.com/md/publish/dummy/color-DARKGRAY.png',
      },
      {
        value : 'DARKGREEN2',
        image : 'https://img.thehandsome.com/md/publish/dummy/color-DARKGREEN.png',
      },
      {
        value : 'GREY2',
        image : 'https://img.thehandsome.com/md/publish/dummy/color-GREY.png',
      },
      {
        value : 'BLACK2',
        image : 'https://img.thehandsome.com/md/publish/dummy/color-BLACK.png',
      },
    ],
    optionSizeData : {
      select_idx : null,
      list : [
        {
          size_en : 'S',
          size_num : '82',
          state_msg : 'Small Qty inventory',
          sold_out : false,
        },
        {
          size_en : 'M',
          size_num : '88',
          state_msg : '',
          sold_out : false,
        },
        {
          size_en : 'L',
          size_num : '94',
          state_msg : '',
          sold_out : false,
        },
        {
          size_en : 'XL',
          size_num : '100',
          state_msg : 'Restock notice',
          sold_out : true,
        },
        {
          size_en : '2XL',
          size_num : '110',
          state_msg : 'Sold Out',
          sold_out : true,
        },
        {
          size_en : 'FREE',
          size_num : '',
          state_msg : '',
          sold_out : false,
        },
      ]
    },
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
