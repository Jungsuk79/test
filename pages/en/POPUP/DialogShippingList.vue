<template>
  <DialogBasic
   class="popup-myAdress" 
    header-title="My Shipping Address List" 
    :width="540"
    @hide="closeDialog">
    <template #body>
      <div class="cmp-info info-type1">
        <p class="cmp-font">Select a shipping address or register a new shipping address.</p>
      </div>
      <v-btn outlined large block height="46px" color="primary" class="mt-30">Register Shipping Address</v-btn>
      <!-- 배송지 리스트 -->
      <v-radio-group v-if="shppingAddress.length > 0" v-model="radioSelected">
        <div v-for="(item, index) in shppingAddress" :key="index" class="contents-line-box">
          <div class="cmp-font-btnBox">
            <button class="cmp-font button">Modify</button>
            <button v-if="!item.base_address" class="cmp-font button">Delete</button>
          </div>
          <v-radio class="cmp-form-radio">
            <template #label>
              <div class="radio-cover">
                <div class="name-cnt">
                  <span v-if="item.base_address" class="cmp-label-line c-blue mr-6">Default</span>
                  <p class="cmp-font">{{item.name}}</p>
                </div>
                <p class="cmp-font">{{item.phone}} / {{item.email}}</p>
                <p class="cmp-font mt-6">{{item.address}}</p>
              </div>
            </template>
          </v-radio>
          <v-layout v-if="!item.base_address" row justify-end class="pt-4">
            <button class="cmp-font fnt-13 button"><span class="line">Change to default Address</span></button>
          </v-layout>
        </div>
      </v-radio-group>
      <!-- //배송지 리스트 -->
      <!-- 배송지 없을 경우 -->
      <CommonNoData v-else msg="등록된 배송지가 없습니다." />
      <!-- //배송지 없을 경우 -->
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
    radioSelected:0,
    shppingAddress : [
      {
        name : 'Thehansum',
        phone : '907-123-1234',
        email : 'aaa@gmail.com',
        address : '[95014] HANDSOME B/D 523, Dosan-daero, Gangnam-gu, Seoul, Korea',
        base_address : true,
      },
      {
        name : 'Thehansum',
        phone : '907-123-1234',
        email : 'aaa@gmail.com',
        address : '[95014] HANDSOME B/D 523, Dosan-daero, Gangnam-gu, Seoul, Korea  HANDSOME B/D 523, Dosan-daero, Gangnam-gu, Seoul,',
        base_address : false,
      },
      {
        name : 'Thehansum',
        phone : '907-123-1234',
        email : 'aaa@gmail.com',
        address : '[95014] HANDSOME B/D 523, Dosan-daero, Gangnam-gu, Seoul, Korea',
        base_address : false,
      },
    ],
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
