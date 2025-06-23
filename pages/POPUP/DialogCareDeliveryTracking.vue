<template>
  <DialogBasic
   class="popup-deliveryCareTracking" 
    header-title="배송조회" 
    :width="380"
    @hide="closeDialog">
    <template #body>
      <div class="inner">
        <div class="tracking-box">
          <p class="txt">
            <span class="del-name">신청번호</span>
            <span class="del-num">22011234</span>
          </p>
        </div>
        
        <table class="table-type1">
          <colgroup>
            <col width="168px" />
            <col width="*" />
          </colgroup>
          <thead>
            <tr>
              <th>택배사</th>
              <th>송장번호</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in trackingList" :key="index">
              <td class="text-center pw-0">
                {{ item.name }}
              </td>
              <td class="text-center pw-0">
                <nuxt-link to="" class="cmp-font fnt-16 button">
                  <span class="line">{{ item.num }}</span>
                </nuxt-link>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="btn-box">
          <v-btn 
            large
            block
            color="primary">
            확인
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
        name: "CJ 대한통운",
        num: "609760994128",
      
      },
      { 
        name: "CJ 대한통운",
        num: "609760994128",
      
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
