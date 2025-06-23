<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="login-content">
        <div class="cmp-page-tit center">
          <h2 class="tit">Sign In</h2>
        </div>

        <div class="cmp-form-boxGroup">
          <div class="cmp-form-box">
            <v-text-field type="text" label="Please enter your e-mail." clearable class="cmp-form-input"></v-text-field>
          </div>
          <div class="cmp-form-box">
            <v-text-field v-model="model" :rules="modelRules" type="text" label="Please enter your password." clearable class="cmp-form-input"></v-text-field>
          </div>
        </div>

        <v-checkbox label="Auto Login" class="cmp-form-checkbox"></v-checkbox>

        <v-btn 
          large
          color="primary"
          class="v-btn-login width-360">
          Login
        </v-btn>

        <v-btn
          depressed
          tile
          large
          block
          outlined
          :ripple="false"
          class="v-btn-google">
          Google Account Login
        </v-btn>

        <div class="cmp-info info-type3">
          <p class="cmp-font fnt-14 bold">Welcome to TheHandsome.com!</p>
          <p class="cmp-font fnt-13">Become a member of TheHandsome.com<br>and enjoy various services and special benefits.</p>
        </div>
        
        <v-btn 
          large
          outlined
          color="primary"
          class="v-btn-hpoint width-360">
          Register
        </v-btn>

        <v-layout align-center class="v-layout-link mt-24"><!-- [퍼블수정]23.01.19 -->
          <p><nuxt-link to="">Find ID</nuxt-link></p>
          <p><nuxt-link to="">Find Password</nuxt-link></p>
        </v-layout>
       </div>
    </div>
  </div>
</template>

<script>
import EventBus from '~/api/common/EventBus'
export default {
  components: {
  },
  layout: 'LayoutBasics',
  data: () => ({
    model: '',
    modelRules: [(v) => !!v || 'Please check your ID or password again.'],
  }),
  created() {
    EventBus.$emit("setLayout", {topbutton: false})
  },
  methods: {

  },
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/member.scss'; 
 @import '@/assets/scss/en/en.scss'; // 글로벌 scss 
</style>
