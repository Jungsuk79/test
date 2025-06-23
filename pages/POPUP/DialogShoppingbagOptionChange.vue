<template>
  <DialogBasic
    class="popup-shoppingbag-optionChange btmfull-ver"
    header-title="옵션 변경"
    :width="540"
    @hide="closeDialog"
  >
    <template #body>
      <div class="inner">
        <!-- 컬러 -->
        <div class="pop-cnt">
          <p class="pop-tit">컬러</p>
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
          <p class="pop-tit">사이즈</p>
          <ProductOptionSelect :size-data="optionSizeData" :max-height="123"/><!-- 230112 옵션셀렉트 : max-height 161 > 123 변경 -->
        </div>
        <!-- //사이즈 -->

        <!-- 수량 -->
        <div class="pop-cnt">
          <p class="pop-tit">수량</p>
          <CommonCountingBox max="10" />
        </div>
        <!-- //수량 -->

        <!-- 총합계 -->
        <dl class="total-price">
          <dt>총 합계</dt>
          <dd><strong>556,500</strong>원</dd>
        </dl>
        <!-- //총합계 -->
      </div>
    </template>
    <template #footer>
      <v-btn large block color="primary">선택완료</v-btn>
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
          state_msg : '소량재고',
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
          state_msg : '재입고알림',
          sold_out : true,
        },
        {
          size_en : '2XL',
          size_num : '110',
          state_msg : '품절',
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
