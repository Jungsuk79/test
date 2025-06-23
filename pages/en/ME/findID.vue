<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="find-content">
        <div class="cmp-page-tit center">
          <h2 class="tit">Find ID</h2>
        </div>

        <!--찾기 영역-->
        <div v-if="accredit2" class="conts-center-box">
          <p class="cmp-font fnt-18 mb-34">Please enter the name and date of birth<br>you have entered when you joined membership.</p>

            <div class="cmp-form-boxGroup">
            <div class="cmp-form-box">
              <v-text-field
                label="Please enter your name."
                clearable
                class="cmp-form-input"
              ></v-text-field>
            </div>

            <div class="cmp-form-box">
              <div class="cmp-form-colBox type2">
                <CommonSelectBox id="birth00" title="Day" class="type1" :error="formBoxErrorTest">
                    <template #optionList>
                      <option value="placeholder">Day</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </template>
                </CommonSelectBox>
                <CommonSelectBox id="birth01" title="월" class="type1" :error="formBoxErrorTest">
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
                <CommonSelectBox id="birth02" title="Year" class="type1" :error="formBoxErrorTest">
                  <template #optionList>
                    <option value="placeholder">Year</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                  </template>
                </CommonSelectBox>
              </div>
            </div>
            </div>  

            <div class="btn-box">
              <v-btn 
                large
                color="primary"
                class="width-360"
                @click="accreditShow1">
                Find ID
              </v-btn>
          </div>
        </div>

        <!--결과 영역-->
        <div v-else class="conts-center-box">
          <p class="cmp-font fnt-18">There are a total of <strong>3</strong> IDs subscribed<br>with the following information.</p>

          <div class="info-border-box cnt-line">
            <div v-for="i in 3" :key="i" class="box">
              <dl class="line">
                <dt class="tit">Purchaser name</dt>
                <dd class="txt">Han SomeOne</dd>
              </dl>
              <dl class="line">
                <dt class="tit">Date of birth</dt>
                <dd class="txt">31 Jan. 1972</dd>
              </dl>
              <dl class="line">
                <dt class="tit">ID</dt>
                <dd class="txt">han********@handsome.co.kr</dd>
              </dl>
            </div>
          </div>

          <div class="btn-box">
            <v-btn 
              large
              outlined
              color="primary">
              Contact us
            </v-btn>

             <v-btn 
              large
              color="primary">
              Login
            </v-btn>
          </div>

          <ul class="cmp-dotList wid-center">
            <li>If you do not remember the entire ID, please press <strong>Contact us</strong> and ask via e-mail.</li>
          </ul>
        </div>

        <!-- 결과 영역 없는 경우 [퍼블수정]23.01.12
        <div class="conts-center-box">
          <div class="info-border-box cnt-line">
            <CommonNoData msg="There is no subscribed ID."></CommonNoData>
          </div>

          <div class="btn-box">
            <v-btn 
              large
              outlined
              color="primary">
              Contact us
            </v-btn>

             <v-btn 
              large
              color="primary">
              Find ID again
            </v-btn>
          </div>
        </div> -->

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
    accredit1 : true, // 퍼블 화면 확인용
    accredit2 : true, // 퍼블 화면 확인용
    formBoxErrorTest: false,
  }),
  created() {
    EventBus.$emit("setLayout", {topbutton: false})
  },
  methods: {
    // 퍼블 화면 확인용 버튼 (찾기결과)
    accreditShow() {
      this.accredit1 = false
    },
    accreditShow1() {
      this.accredit2 = false
    },
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/member.scss'; 
@import '@/assets/scss/en/en.scss'; // 글로벌 scss 
</style>
