<template>
  <DialogBasic class="popup-reStockingAlarm" header-title="재입고 알림 신청" :width="540" @hide="closeDialog">
    <template #body>  
      <div class="product-row-unitInfo">
        <div class="product-image">
          <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/004.jpg" alt="상품이미지" />
        </div>
        <div class="product-info-cnt">
          <div class="product-brand">MINE</div>
          <div class="product-name">컬러 블록 니트 가디건 컬러 니트</div>
          <div class="product-option">
            <span class="option">COCOA</span>
            <span class="option">M</span>
          </div>
        </div>
      </div>
      <div class="cmp-form-box required">
        <p class="form-tit">휴대폰</p>
        <div class="cmp-form-colBox">
          <CommonSelectBox id="phoneSelect" title="앞자리 번호 선택">
            <template #optionList>
              <option value="010">010</option>
              <option value="011">011</option>
              <option value="017">017</option>
              <option value="018">018</option>
              <option value="019">019</option>
            </template>
          </CommonSelectBox>
          <v-text-field type="text" outlined label="가운데 번호 입력" class="cmp-form-input label-hide"></v-text-field>
          <v-text-field type="text" outlined label="뒷자리 번호 입력" class="cmp-form-input label-hide"></v-text-field>
        </div>
      </div>
      <ul class="cmp-dotList">
        <li>30일 이내 해당 상품이 재입고되는 경우 알림 메시지가 발송됩니다.</li>
        <li>소량 입고되거나 동시 구매가 이루어질 경우, 알림 후에도 품절이  발생할 수 있습니다.</li>
        <li>신청 시점의 상품정보(옵션,가격)가 재 입고 시 변동될 수 있습니다.</li>
      </ul>
    </template>
    <template #footer>
      <v-btn large block  color="primary">
        신청하기
      </v-btn>
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
  mounted() {
   
  },
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss">
</style>
