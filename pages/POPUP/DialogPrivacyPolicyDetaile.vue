<template>
    <DialogBasic
      @hide="closeDialog"
      :width="995"
      class="popup-policy-deatile"
    >
      <template #body>
        <div class="btn-cover">
            <a href="#product1" @click="closeDialog">제2조 개인정보의 수집항목 및 이용목적</a>
            <a href="#product2" @click="closeDialog">제9조 개인정보의 위탁처리</a>
            <a href="#btn-top" @click="closeDialog">개인정보의 처리방침</a>
            <v-img src="/images/cp/privacyPolicy_detail.jpg"></v-img>
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
    props : {
    },
    data: () => ({
    }),
    watch: {
    },
    mounted(){
    },
    methods: {
      closeDialog() {
        this.$emit('close')
      }
    },
  }
  </script>
  
  <style lang="scss"></style>
  