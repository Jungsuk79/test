<template>
  <DialogBasic
   class="popup-myAdress" 
    header-title="나의 배송지 목록" 
    :width="540"
    @hide="closeDialog">
    <template #body>
      <div class="cmp-info info-type1">
        <p class="cmp-font">배송지 선택 또는 신규 배송지를 등록하세요.</p>
      </div>
      <v-btn outlined large block height="46px" color="primary" class="mt-30">배송지 등록</v-btn>
      <!-- 배송지 리스트 -->
      <v-radio-group v-if="shppingAddress.length > 0" v-model="radioSelected">
        <div v-for="(item, index) in shppingAddress" :key="index" class="contents-line-box">
          <v-layout row align-center justify-space-between>
            <v-layout row align-center>
              <p class="cmp-font fnt-20">{{item.shpping_name}}</p>
              <span v-if="item.base_address" class="cmp-label-line c-blue ml-10">기본배송지</span>
            </v-layout>
            <div class="cmp-font-btnBox">
              <button class="cmp-font button">수정</button>
              <button v-if="!item.base_address" class="cmp-font button">삭제</button>
            </div>
          </v-layout>
          <v-radio class="cmp-form-radio mt-20">
            <template #label>
              <div>
                <p class="cmp-font">{{item.name}} / {{item.phone}}</p>
                <p class="cmp-font mt-6">{{item.address}}<span class="ml-2">{{item.address_detail}}</span></p>
                <ul v-if="item.notice" class=" mt-6">
                  <li v-for="(item2, index2) in item.notice" :key="index2" class="cmp-font">{{item2}}</li>
                </ul>
              </div>
            </template>
          </v-radio>
          <div v-if="!item.base_address" class="text-right mt-4">
            <button class="cmp-font fnt-13 button"><span class="line">기본배송지로 변경</span></button>
          </div>
        </div>
      </v-radio-group>
      <!-- //배송지 리스트 -->
      <!-- 배송지 없을 경우 -->
      <CommonNoData v-else msg="등록된 배송지가 없습니다." />
      <!-- //배송지 없을 경우 -->
    </template>
    <template #footer>
      <v-btn large block color="primary">선택 완료</v-btn> 
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
        shpping_name : '우리집',
        name : '홍길동1',
        phone : '010-1234-5678',
        address : '[63354] 서울특별시 강동구 강동대로 193 (성내동)',
        address_detail : '3층 301호',
        notice : ['부재 시 문 앞에 놓아주세요.','공동현관 출입번호(#1***)'],
        base_address : true,
      },
      {
        shpping_name : '회사주소',
        name : '홍길동2',
        phone : '010-1234-5678',
        address : '[63354] 서울특별시 강동구 강동대로 193 (성내동)',
        address_detail : '3층 301호',
        notice : ['부재 시 문 앞에 놓아주세요.','자유 출입 가능'],
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
