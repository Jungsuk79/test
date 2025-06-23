<template>
  <div class="contents contents-type2">
    <div class="content-wrap">
      <v-btn nuxt @click="openDialog1">서비스 운영정책 안내(세탁)</v-btn>
      <v-btn nuxt @click="openDialog2">서비스 운영정책 안내(세탁_v.221228)</v-btn>
      <!-- [팝업]샘플 -->
      <v-dialog v-model="DialogServicePolicy">
        <DialogServicePolicy 
          @close="closeDialog1"
        ></DialogServicePolicy>
      </v-dialog>
      <!--// [팝업]샘플 -->
      <!-- [팝업]샘플 -->
      <v-dialog v-model="DialogServicePolicyNew">
        <DialogServicePolicyNew 
          @close="closeDialog2"
        ></DialogServicePolicyNew>
      </v-dialog>
      <!--// [팝업]샘플 -->
    </div>
  </div>
</template>

<script>
import DialogServicePolicy from '~/pages/POPUP/DialogServicePolicy.vue'
import DialogServicePolicyNew from '~/pages/POPUP/DialogServicePolicyNew.vue'
export default {
  components: {
    DialogServicePolicy,
    DialogServicePolicyNew,
  },
  layout: 'LayoutBasics',
  data: () => ({
    DialogServicePolicy : false,
    DialogServicePolicyNew : false,
  }),
  methods: {
    // [팝업]상품상세정보
    openDialog1() {
      this.DialogServicePolicy = true
    },
    closeDialog1() {
      this.DialogServicePolicy = false
    },
    openDialog2() {
      this.DialogServicePolicyNew = true
    },
    closeDialog2() {
      this.DialogServicePolicyNew = false
    },
    submitDialog() {
      this.closeDialog()
    },
  },
}
</script>

<style lang="sass"></style>
