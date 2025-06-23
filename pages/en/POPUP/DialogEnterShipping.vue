<template>
  <DialogBasic
   class="popup-enterShipping" 
    header-title="Shipping Address Registration" 
    :width="540"
    @hide="closeDialog">
    <!-- 배송지 수정 시 노출 header-title="Modify Shipping Address" -->
    <template #body>
      <div class="notice-div">
        <h3>NOTICE</h3>
        <ul class="cmp-dotList">
          <li><span class="cmp-font c-red fnt-14">*</span> field must be specified.</li>
          <li>In case the shipping address is China, the address must be entered in Chinese, and the recipient name in both English and Chinese.</li>
          <li>In case the shipping address is Japan, the address must be entered in English, and the recipient name in both Katakana and Japanese.</li>
          <li>In case of all other countries, the shipping address and recipient must be entered in English.</li>
        </ul>
      </div>
      <div class="cmp-form-boxGroup">
        <!-- 영문명 -->
        <div class="cmp-form-box required">
          <p class="form-tit">English name</p>
          <v-text-field outlined type="text" label="Please enter your English name." clearable class="cmp-form-input"></v-text-field>
        </div>
        <!-- //영문명 -->
        <!-- 본명 -->
        <div class="cmp-form-box required">
          <p class="form-tit">Name in local language</p>
          <v-text-field outlined type="text" label="Please enter your name in the local language." clearable class="cmp-form-input"></v-text-field>
        </div>
        <!-- //본명 -->
        <!-- 국가 / 지역 -->
        <div class="cmp-form-box required">
          <p class="form-tit">Country or Region</p>
          <CommonSelectBox id="selectId5" title="Country or Region">
            <template #optionList>
              <option value="placeholder">Please select your country or region.</option>
              <option value="01">Hong Kong</option>
              <option value="02">Canada</option>
              <option value="03">China</option>
              <option value="04">United States</option>
              <option value="05">Australia</option>
              <option value="06">Japan</option>
              <option value="07">Taiwan</option>
              <option value="08">New Zealand</option>
              <option value="09">Singapore</option>
              <option value="10">Viet Nam</option>
              <option value="11">Malaysia</option>
              <option value="12">Indonesia</option>
              <option value="13">Brunei Darussalam</option>
              <option value="14">Thailand</option>
              <option value="15">Philippines</option>
              <option value="16">India</option>
              <option value="17">Qatar</option>
              <option value="18">United Arab Emirates</option>
              <option value="19">Kuwait</option>
              <option value="20">Brazil</option>
              <option value="21">Mexico</option>
              <option value="22">Kazakhstan</option>
              <option value="23">Denmark</option>
              <option value="24">Sweden</option>
              <option value="25">Netherlands</option>
              <option value="26">Finland</option>
              <option value="27">Belgium</option>
              <option value="28">Germany</option>
              <option value="29">France</option>
              <option value="30">United Kingdom</option>
              <option value="31">Italy</option>
              <option value="32">Spain</option>
              <option value="33">Turkey</option>
              <option value="34">Saudi Arabia</option>
              <option value="35">Bangladesh</option>
              <option value="36">Switzerland</option>
            </template>
          </CommonSelectBox>
        </div>
        <!-- //국가 / 지역 -->
        <!-- 주소 -->
        <div class="cmp-form-box required">
          <p class="form-tit">Address</p>
          <div class="byte-txt">{{addressTxt.length}} / 40Byte</div>
          <v-text-field v-model="addressTxt" outlined type="text" label="Please enter your address. (Street, Apt., are., bldg.)" maxlength="40" clearable class="cmp-form-input"></v-text-field>
        </div>
        <!-- //주소 -->
        <!-- 상세 주소 -->
        <div class="cmp-form-box required"> 
          <p class="form-tit">Detailed Address</p>
          <div class="byte-txt">{{addressTxt2.length}} / 40Byte</div>
          <v-text-field v-model="addressTxt2" outlined type="text" label="Please enter your detailed address" maxlength="40" clearable class="cmp-form-input"></v-text-field>
        </div>
        <!-- //상세 주소 -->
        <!-- 시 -->
        <div class="cmp-form-box required">
          <p class="form-tit">City</p>
          <v-text-field outlined type="text" label="Please enter your city." clearable class="cmp-form-input"></v-text-field>
        </div>
        <!-- //시 -->
        <!-- 도 -->
        <div class="cmp-form-box">
          <p class="form-tit">State</p>
          <v-text-field outlined type="text" label="Please enter your state." clearable class="cmp-form-input"></v-text-field>
        </div>
        <!-- //도 -->
        <!-- 우편 번호 -->
        <div class="cmp-form-box required">
          <p class="form-tit">Zip Code</p>
          <v-text-field outlined type="text" label="Please enter your zip code." clearable class="cmp-form-input"></v-text-field>
          <ul class="cmp-dotList mt-10 mb-14">
            <li>In case there is no zip code in your country, enter “None.”</li>
          </ul>
          <v-checkbox label="Set to default shipping address" class="cmp-form-checkbox"></v-checkbox>
        </div>
        <!-- //우편 번호 -->
        <!-- 폰 번호 -->
        <div class="cmp-form-box required">
          <p class="form-tit">Cellphone No</p>
          <v-text-field outlined type="text" label="Please enter your cellphone number." clearable class="cmp-form-input"></v-text-field>
          <ul class="cmp-dotList mt-10">
            <li>Country Code – City Code – Tel Number</li>
          </ul>
        </div>
        <!-- //폰 번호 -->
        <!-- 이메일 -->
        <div class="cmp-form-box required">
          <p class="form-tit">E-mail</p>
          <v-text-field outlined type="text" label="Please enter the e-mail address." clearable class="cmp-form-input"></v-text-field>
          <ul class="cmp-dotList mt-10">
            <li>A notification will be sent to the email address when the product is shipped and delivery is complete.</li>
          </ul>
        </div>
        <!-- 이메일 -->
      </div>
      <div class="popup-btn-box">
        <v-btn large block color="primary">Register</v-btn> 
        <!-- 배송지 수정 시 노출
        <v-btn outlined large color="primary">Delete</v-btn>
        <v-btn large block color="primary">Modify</v-btn> 
        -->
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
    domainDirectFieldShow: false,
    addressTxt : '',
    addressTxt2 : '',
  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
    dominFieldSet(val) {
      if (val === 'direct') this.domainDirectFieldShow = true
      else this.domainDirectFieldShow = false
    }
  },
}
</script>

<style lang="scss">
</style>
