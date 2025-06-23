<template>
  <DialogBasic class="btmfull-ver popup-preferredBrand" header-title="선호 브랜드 선택하기" :width="540" @hide="closeDialog">
    <template #body>
      <h3 class="cmp-font fnt-18 mb-20">10% 쿠폰 브랜드를 선택해 주세요.</h3>
      <ul class="cmp-dotList">
        <li class="c-point">멤버십 가입 후 변경할 수 없으니 신중하게 선택해 주세요.</li>
        <li>멤버십 가입 후 변경한 선호 브랜드는 멤버십 갱신 시 적용됩니다.</li>
      </ul>

      <ul class="brand-list">
        <li
          v-for="(item, index) in list"
          :key="index"
            class="contents-line-box">
          <v-layout align-center justify-space-between>
            <div class="agree-chk-box">
              <v-checkbox class="cmp-form-checkbox agree-chk"
                v-model="item.preferYn"
                :label="item.brandNm"
                true-value="Y"
                false-value="N"
                @change="checkChange(item.preferYn, index)"
                ></v-checkbox>
            </div>
            <CommonCountingBox
              :count="item.brandCpnQty === null ? 0 : item.brandCpnQty"
              min="0"
              max="3"
              :index="index"
              @countValue="countValue"
              ></CommonCountingBox>
          </v-layout>
        </li>
      </ul>
    </template>
    <template #footer>
      <v-btn outlined large color="primary" class="gray-outlined">초기화</v-btn>
      <v-btn large block color="primary" :disabled="false" class="totalbtn"><span>총 <em>0</em> 개</span><span>선택완료</span></v-btn>
    </template>
  </DialogBasic>
</template>
<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  components: {
    DialogBasic,
  },
  props: {
    preferBrandInfo: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  data: () => ({
    totalCount: 0,
    list : [
      {
        brandNm:'TIME',
        preferYn: false,
        brandCpnQty: 0
      },
      {
        brandNm:'MINE',
        preferYn: false,
        brandCpnQty: 0
      },
      {
        brandNm:'LANVIN COLLECTION',
        preferYn: false,
        brandCpnQty: 0
      },
      {
        brandNm:'SYSTEM',
        preferYn: false,
        brandCpnQty: 0
      },
      {
        brandNm:'SJSJ',
        preferYn: false,
        brandCpnQty: 0
      },
      {
        brandNm:'TIME',
        preferYn: false,
        brandCpnQty: 0
      },
      {
        brandNm:'MINE',
        preferYn: false,
        brandCpnQty: 0
      },
      {
        brandNm:'LANVIN COLLECTION',
        preferYn: false,
        brandCpnQty: 0
      },
      {
        brandNm:'SYSTEM',
        preferYn: false,
        brandCpnQty: 0
      },
      {
        brandNm:'SJSJ',
        preferYn: false,
        brandCpnQty: 0
      },
    ]
  }),
  watch: {
    preferBrandInfo() {
      const me = this
      me.list = me.preferBrandInfo
      this.setTotalCount()
    },
  },
  methods: {
    closeDialog() {
      this.$emit('close')
    },
    // 숫자 변경
    countValue(val, index) {
      this.list[index].brandCpnQty = val
      if(val === 0){
        this.list[index].preferYn = 'N'
      } else {
        this.list[index].preferYn = 'Y'
      }
      this.setTotalCount()
    },
    checkChange(checked, idx) {
      console.log("========== checked : ", checked)
      console.log("========== this.list[idx].preferYn : ", this.list[idx].preferYn)
      
      if (checked === 'Y') {
        this.list[idx].preferYn = 'Y'
        this.list[idx].brandCpnQty = 1
      } else {
        this.list[idx].preferYn = 'N'
        this.list[idx].brandCpnQty = 0
      }
      this.setTotalCount()
    },
    getCheckedCount() {
      let total = 0

      this.list.forEach(function (item) {
        if (item.preferYn === 'Y') {
          total += item.brandCpnQty
        }
      })
      return total
    },
    
    setTotalCount() {
      this.totalCount = this.getCheckedCount()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/order.scss'; // 페이지 전용 css 해당 경로에 만들어서 사용
</style>
