<template>
  <DialogBasic class="popup-reStockingAlarm" header-title="Request Restock Notification" :width="540" @hide="closeDialog">
    <template #body>  
      <div class="product-row-unitInfo">
        <div class="product-image">
          <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/004.jpg" alt="product image" />
        </div>
        <div class="product-info-cnt">
          <div class="product-brand">MINE</div>
          <div class="product-name">drawstring denim top</div>
          <div class="product-option">
            <span class="option">COCOA</span>
            <span class="option">M</span>
          </div>
        </div>
      </div>
      <div class="cmp-form-box required">
        <p class="form-tit">E-mail</p>
        <!-- 221219 재입고알림 : 이메일 추가 -->
        <div class="cmp-form-emailBox">
          <div class="email-box">
            <v-text-field label="" outlined clearable class="cmp-form-input label-hide"></v-text-field>
            <div class="btw-txt">@</div>
            <CommonSelectBox id="selectId5" title="" @submit="dominFieldSet">
              <template #optionList>
                <option value="placeholder">Please select</option>
                <option value="gmail.com">gmail.com</option>
                <option value="outlook.com">outlook.com</option>
                <option value="direct">Direct Entry</option>
              </template>
            </CommonSelectBox>
          </div>
          <v-text-field v-if="domainDirectFieldShow" outlined label="Please enter your e-mail" clearable class="cmp-form-input label-hide"></v-text-field>
        </div>
        <!-- //221219 재입고알림 : 이메일 추가 -->
      </div>
      <ul class="cmp-dotList">
        <li>In case the relevant product is warehoused within 30 days, a notification message is sent.</li>
        <li>If a small quantity is warehoused or simultaneous purchase is made, it may be out of stock even after notification.</li>
        <li>The product info (option, price) at the timing of request may change when the product is re-warehoused.</li>
      </ul>
    </template>
    <template #footer>
      <v-btn large block  color="primary">
        Request
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
    domainDirectFieldShow : false, // 221219 재입고알림 : 추가
  }),
  mounted() {
   
  },
  methods: {
    closeDialog() {
      this.$emit('close')
    },
    dominFieldSet(val) { // 221219 재입고알림 : 추가
      if (val === 'direct') this.domainDirectFieldShow = true
      else this.domainDirectFieldShow = false
    },
  },
}
</script>

<style lang="scss">
</style>
