<template>
  <DialogBasic class="popup-deliveryTracking" header-title="Shipping Check" :width="380" @hide="closeDialog">
    <template #body>
      <div class="inner">
        <div class="tracking-box">
          <p class="tit">Delivery Complete</p>
          <p class="txt">
            <span class="del-name">DHL</span>
            <span class="del-num">664588523412345</span>
          </p>
        </div>
        <ul class="tracking-items">
          <li v-for="(item, index) in trackingList" :key="index">
            <span>{{ item.date }}</span>
            <span>{{ item.status }}</span>
          </li>
        </ul>
        <div class="btn-box">
          <v-btn large block color="primary">Close</v-btn>
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
        date: "08 Dec. 2021 16:50",
        status: "cargo reception",
      
      },
      { 
        date: "08 Dec. 2021 19:30",
        status: "L.A. warehouse arrival",
      
      },
      { 
        date: "08 Dec. 2021 19:50",
        status: "L.A. warehouse out for delivery",
      
      },
      { 
        date: "08 Dec. 2021 20:30",
        status: "SF warehouse arrival",
      
      },
      { 
        date: "08 Dec. 2021 20:50",
        status: "SF warehouse out for delivery",
      
      },
      { 
        date: "08 Dec. 2021 21:00",
        status: "Al Camino arrival",
      
      },
      { 
        date: "08 Dec. 2021 21:30",
        status: "Al Camino out for delivery",
      
      },
      {
        date: "08 Dec. 2021 22:00",
        status: "Delivery complete"
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
