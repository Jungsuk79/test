<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="find-content">
        <div class="cmp-page-tit center">
          <h2 class="tit">Find Password</h2>
        </div>

        <!--찾기 영역-->
        <div class="conts-center-box">
          <p class="cmp-font fnt-18 mb-34">Please enter the e-mail ID you have entered<br>when joining membership.</p>

            <div class="cmp-form-boxGroup">
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
                Find Password
              </v-btn>
            </div>
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
    modelRules: [(v) => !!v || 'This is not an e-mail address system.'],
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
