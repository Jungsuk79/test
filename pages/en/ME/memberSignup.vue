<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="register-content">
        <div class="cmp-page-tit center">
          <h2 class="tit">Register</h2>
        </div>

        <div class="conts-center-box">
          <p class="cmp-font fnt-20 bold">Thank you for joining TheHandsome.com!</p>
        
          <div class="form-group">
            <p class="top-txt-required">mark is required.</p>
            <div class="cmp-form-box">
              <v-layout align-center>
                <p class="form-tit">ID(E-mail)</p>
                <CommonTooltipBox cover-none>
                  <template #content>
                    <ul class="cmp-dotList">
                      <li>Your ID(e-mail) is used to check information and receive newsletters.</li>
                      <li>If you forget your password, a temporary password will be sent to the e-mail address you are using as your ID.</li>
                    </ul>
                  </template>
                </CommonTooltipBox>
              </v-layout>
              <v-text-field
                label="aaasome@handsome.co.kr"
                disabled
                clearable 
                class="cmp-form-input"
              ></v-text-field>
            </div>

            <div class="cmp-form-box required">
              <v-layout align-center>
                <p class="form-tit">Password/Password verification</p>
              </v-layout>

              <v-text-field
                label="Please enter the password."
                clearable 
                class="cmp-form-input"
              ></v-text-field>
              <!-- [퍼블수정]23.02.17 -->
              <v-text-field 
                v-model="model4"
                type="password"
                :rules="model4Rules"
                label="Please re-enter your password."
                clearable
                class="cmp-form-input"
                :class="{'c-success' : model4.length >= 4}"
              ></v-text-field>
            </div>

            <div class="cmp-form-box required">
              <v-layout align-center>
                <p class="form-tit">Name</p>
                <CommonTooltipBox cover-none>
                  <template #content>
                    <ul class="cmp-dotList">
                      <li>When you forget your ID, we provide guidance by verifying your name and date of birth. Be careful when entering upper and lower case letters and spacing.</li>
                    </ul>
                  </template>
                </CommonTooltipBox>
              </v-layout>
              <v-text-field
                v-model="model2"
                :rules="model2Rules" 
                label="Please enter your name."
                clearable 
                class="cmp-form-input"
              ></v-text-field>
            </div>

            <div class="cmp-form-box required">
              <v-layout align-center>
                <p class="form-tit">Date of Birth</p>
              </v-layout>

              <v-layout row class="cmp-form-colBox type2">
                <CommonSelectBox id="birth00" title="Day" class="type1">
                  <template #optionList>
                    <option value="placeholder">Day</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </template>
                </CommonSelectBox>
                <CommonSelectBox id="birth01" title="월" class="type1">
                  <template #optionList>
                    <option value="placeholder">Month</option>
                    <option>Jan.</option>
                    <option>Feb.</option>
                    <option>Mar.</option>
                    <option>Apr.</option>
                    <option>May</option>
                    <option>Jun.</option>
                    <option>Jul.</option>
                    <option>Aug.</option>
                    <option>Sep.</option>
                    <option>Oct.</option>
                    <option>Nov.</option>
                    <option>Dec.</option>
                  </template>
                </CommonSelectBox>
                <CommonSelectBox id="birth02" title="Year" class="type1">
                  <template #optionList>
                    <option value="placeholder">Year</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                  </template>
                </CommonSelectBox>
              </v-layout>
            </div>

            <div class="cmp-form-box">
              <v-layout align-center>
                <p class="form-tit">Gender</p>
              </v-layout>
              <v-radio-group v-model="rodioModel0" row class="cmp-form-radioGroup">
                <v-radio label="Male" class="cmp-form-radio" value="1"></v-radio>
                <v-radio label="Female" class="cmp-form-radio" value="2"></v-radio>
                <v-radio label="Undisclosed" class="cmp-form-radio" value="3"></v-radio>
              </v-radio-group>
            </div>
          </div>

          <div class="agree-chk-box mt-34">
            <v-checkbox class="cmp-form-checkbox">
              <template v-slot:label>
                I hereby agree to the terms and conditions for membership registration to the<br>Handsome.com and personal information processing policy.
                <div class="agree-btn-box">
                  <button class="cmp-font fnt-14 button" @click.stop>Terms & Conditions <i class="cmp-icon cmp-icon-12 i-next"></i></button>
                  <button class="cmp-font fnt-14 button" @click.stop>Personal Information processing policy <i class="cmp-icon cmp-icon-12 i-next"></i></button>
              </div>
              </template>
            </v-checkbox>
          </div>

          <div class="agree-chk-box">
            <v-checkbox class="cmp-form-checkbox">
              <template v-slot:label>
                I hereby agree to receiving information on products and events through the<br>e-mail. (Optional)
              </template>  
            </v-checkbox>
          </div>

          <div class="btn-box inline-btn">
            <v-btn 
              large
              outlined
              color="primary">
              Cancel
            </v-btn>
            <v-btn 
              large
              color="primary">
              Register
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
    model1: '',
    model1Rules: [(v) => !!v || 'Password must be between 8 and 30 characters, including letters, numbers and special characters.'],
    model2: '',
    model2Rules: [(v) => !!v || 'Please enter your name'],
    rodioModel0: '1',
    model4: '',
    model4Rules:[
      v => (v && v.length >= 4) || 'Password must be between 8 and 30 characters, including letters, numbers and special characters.',
      v => (v && v.length < 4) || 'Password has been verified'
    ],
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
