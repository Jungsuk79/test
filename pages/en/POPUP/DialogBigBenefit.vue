<template>
  <DialogBasic class="popup-bigBenefit" header-title="Discount Details" :width="540" @hide="closeDialog">
    <template #body>  
      <div class="sec-bigBenefit">
        <ul class="calculate-box">
          <li>
            <v-layout justify-space-between align-center>
              <p>Selling Price</p>
              <p><em>$</em>1,550</p>
            </v-layout>
            <v-layout justify-space-between align-center>
              <p>Sale Price</p>
              <p class="cmp-font bold"><em>$</em>1,395</p>
            </v-layout> 
          </li>
          <li>
            <v-layout justify-space-between align-center>
            <p>15% off for New Member</p>
            <p><em>-</em><em>$</em>209</p>
            </v-layout>
            <v-layout justify-space-between align-center>
              <p>5% off for Shopping bag</p>
              <p><em>-</em><em>$</em>69</p>
            </v-layout> 
          </li>  
          <li>
            <v-layout justify-space-between align-center>
              <p class="cmp-fotn fnt-20">Maximum Benefit Price</p>
              <p class="cmp-fotn fnt-20"><strong><em>$</em>1,118</strong></p>
            </v-layout>
          </li> 
        </ul>

        <div class="calculate-box">
             
        </div>
        <div class="calculate-box">
        
         </div>
        <div class="calculate-box">
          
        </div>

        <ul class="cmp-dotList">
          <li>For the current price, the optimum price was applied for members only.</li>
          <li>Maximum benefit price may vary when ordering.</li>
        </ul>
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
  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
