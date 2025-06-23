<template>
  <DialogBasic
   class="popup-deliveryTracking" 
    header-title="배송조회" 
    :width="380"
    @hide="closeDialog">
    <template #body>
      <div class="inner">
        <div class="tracking-box">
          <p class="tit">배송완료</p>
          <p class="txt">
            <span class="del-name">CJ대한통운</span>
            <span class="del-num">1234123412341234</span>
          </p>
        </div>

        <ul class="tracking-items">
          <li
            v-for="(item, index) in trackingList"
            :key="index"
          >
            <span>{{ item.date }}</span>
            <span>{{ item.status }}</span>
          </li>
        </ul>
        <div class="btn-box">
          <v-btn 
            large
            block
            color="primary">
            닫기
          </v-btn>
        </div>
      </div>
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
    trackingList:[
      { 
        date: "2022.03.01 16:00",
        status: "화물접수",
      
      },
      { 
        date: "2022.03.01 18:00",
        status: "동해송정동우리내우체국 접수",
      
      },
      { 
        date: "2022.03.01 20:00",
        status: "부천 TM입고가 되었으니 물건을 찾아가세요",
      
      },
      { 
        date: "2022.03.02 16:00",
        status: "동서울 TM출발",
      
      },
      { 
        date: "2022.03.02 16:00",
        status: "동서울 TM출발",
      
      },
      { 
        date: "2022.03.02 16:00",
        status: "강동 도착",
      
      },
      { 
        date: "2022.03.02 16:00",
        status: "강동 배송출발",
      
      },
      {
        date: "2022.03.02 20:40",
        status: "배송완료"
      }
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
