<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="register-content">
        <div class="cmp-page-tit center">
          <h2 class="tit">Register</h2>
        </div>

        <div class="conts-center-box">
          <p class="cmp-font fnt-20 bold">Welcome to TheHandsome.com!</p>
          <p class="cmp-font fnt-16 pt-10">Become a member of TheHandsome.com<br>and enjoy various services and special benefits.</p>
          <p class="cmp-font fnt-18 pt-60">Please enter the e-mail account you wish to use as your ID.</p>

          <div class="cmp-form-Single">
            <div class="cmp-form-box">
              <v-text-field
                v-model="model"
                :rules="modelRules"
                label="Please enter your e-mail."
                clearable
                class="cmp-form-input"
              ></v-text-field>
            </div>
          </div>

          <div class="btn-box">
            <v-btn 
              large
              color="primary"
              class="width-360">
              Verify E-mail
            </v-btn>
          </div>

          <ul class="cmp-dotList mt-20">
            <li>Your ID (e-mail) is used to check information and receive newsletters.</li>
          </ul>
        </div>
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
    modelRules: [(v) => !!v || 'The entered e-mail address is already in use.'],
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
