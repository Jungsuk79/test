<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="nonuse-content">

        <div class="cmp-page-tit center">
          <h2 class="tit">장기 미이용 고객 인증</h2>
        </div>

        <!-- 인증 약관 화면 -->
        <div v-if="checkStepNum === 1" class="step-01-cont mt-36">
            <p class="cmp-font fnt-20 text-center">
            더한섬닷컴에 1년 이상 로그인하지 않아<br />
            본인인증 후 사이트 이용이 가능합니다.
          </p>
          <p class="cmp-font fnt-16 text-center mt-10">가입 유형을 클릭하여 본인인증을 진행하시기 바랍니다.</p>

          <ul class="cmp-dotList mt-24">
            <li>아래 더한섬닷컴 이용약관 내용을 확인 후 본인인증을 진행해 주시기 바랍니다.</li>
          </ul>

          <div class="box-wrap mt-34">
            <div class="chk-wrap">
              <v-checkbox v-model="privacyPolicyCheckA" class="cmp-form-checkbox lines">
                <template #label>
                  <span>더한섬닷컴 이용약관에 동의합니다.</span>
                </template>
              </v-checkbox>
              <v-btn text class="cmp-font fnt-13 button right-btn"><span class="line">약관보기</span></v-btn>
            </div>
            <div class="info-wrap">
              <span>더한섬닷컴 개인정보처리방침</span>
              <v-btn text class="cmp-font fnt-13 button right-btn"><span class="line">안내보기</span></v-btn>
            </div>
          </div>

          <div class="btn-box mt-34">
            <v-btn 
              large
              color="primary"
              class="width-360"
              @click="checkUser('A')"
              >
              H.Point 통합회원 본인인증
            </v-btn>
            <v-btn 
              large
              color="primary"
              class="width-360 mt-10"
              @click="checkUser('B')"
              >
              더한섬닷컴 회원 / 간편회원 본인인증
            </v-btn>
            <v-btn 
              large
              outlined
              color="primary"
              class="width-360 mt-10"
              href="/ko/ME/login"
              >
              취소
            </v-btn>
          </div>
        </div>

        <!-- 간편회원 이메일 인증 -->
        <div v-if="checkStepNum === 2" class="step-02-cont mt-36">
          <p class="cmp-font fnt-20 text-center">
            고객님의 가입 시<br />
            이메일 주소를 입력해 주세요
          </p>
          <p class="cmp-font fnt-16 text-center mt-10">인증번호 확인 후 정상회원 전환이 가능합니다.</p>

          <v-form ref="form" @submit.prevent>
            <div class="cmp-form-boxGroup mt-30">
              <div class="cmp-form-box in-button">
                <v-text-field
                  ref="emailForm"
                  v-model="model1"
                  :rules="model1Rules" 
                  type="text"
                  label="이메일을 입력해 주세요."
                  clearable
                  class="cmp-form-input"
                ></v-text-field>
                <v-btn outlined small color="normal" @click="startTimer">인증번호 발송</v-btn>
              </div>
      
              <div class="cmp-form-box in-button mt-30">
                <v-text-field
                  ref="numForm"
                  v-model="model2"
                  :rules="model2Rules"
                  :error-messages="timeOverText"
                  :disabled="!isCountingDown"
                  type="text"
                  label="인증번호를 입력해 주세요."
                  class="cmp-form-input"
                ></v-text-field>
                <span v-if="isCountingDown" class="cnt-num">{{ minutes }}:{{ seconds }}</span>
                <v-btn :outlined="!isCountingDown" small :color="!isCountingDown ? 'normal' : 'primary'" @click="checkNumber">확인</v-btn>
              </div>
            </div>
      
            <div class="btn-box mt-34">
              <v-btn
                depressed
                outlined
                tile
                large
                block
                :ripple="false"
                class="width-360"
                color="primary"
                href="/ko/ME/login">
                취소
              </v-btn>
            </div>
          </v-form>
        </div>

        <!-- user ID 화면 -->
        <div v-if="checkStepNum === 3" class="step-03-cont mt-36">
          <p class="cmp-font fnt-20 text-center">
            회원님의 아이디는 아래와 같습니다.<br />
            정상회원 전환 시 인증하신 정보로 회원정보가 업데이트 됩니다.
          </p>

          <ul class="chk-id-wrap width-360 mt-36">
            <li v-for="(item, index) in useerDatas" class="checkbox-wrap" :key="`chkId-${index}`">
              <v-checkbox v-model="item.isChkInfo" class="cmp-form-checkbox">
                <template #label>
                  <div>
                    <span>{{ item.userID }}</span>
                    <span>(가입일 {{ item.date }})</span>
                  </div>
                </template>
              </v-checkbox>
            </li>
          </ul>
  
          <div class="btn-box width-360 mt-34">
            <v-btn
              depressed
              tile
              large
              block
              :ripple="false"
              color="primary"
              @click="checkUser('C')"
              href="">
              정상회원 전환하기
            </v-btn>
            <v-btn
              depressed
              outlined
              tile
              large
              block
              :ripple="false"
              class="mt-10"
              color="primary"
              href="/ko/ME/login">
              취소
            </v-btn>
          </div>
        </div>

        <!-- 정상회원 전환 화면 -->
        <div v-if="checkStepNum === 4" class="step-04-cont mt-36">
          <p class="cmp-font fnt-20 text-center">정상회원 전환이 완료되었습니다.</p>
          <p class="cmp-font fnt-16 text-center mt-5">로그인 시 정상적인 사이트 이용이 가능합니다.</p>

          <div class="btn-box mt-84">
            <v-btn
              depressed
              tile
              large
              block
              :ripple="false"
              color="primary"
              href="/ko/ME/login">
              로그인 페이지 이동
            </v-btn>
            <v-btn
              depressed
              outlined
              tile
              large
              block
              :ripple="false"
              class="mt-10"
              color="primary"
              href="/ko/DP/main">
              더한섬닷컴 메인페이지 이동
            </v-btn>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  layout: 'LayoutBasics',
  data: () => ({
    privacyPolicyCheckA: false,
    checkStepNum: 1,

    timeLeft: 20, // 5분 = 300초
    interval: null,
    isCountingDown: false, // 타이머 show/hide
    timeOverText: [],
    model1: '',
    model2: '',

    useerDatas: [
      {
        isChkInfo: false,
        userID: 'abc1234', 
        date: '24.03.22'
      },
      {
        isChkInfo: false,
        userID: 'qwe4567', 
        date: '23.05.22'
      }
    ]
    // model: '',
    // modelRules: [(v) => !!v || '아이디 또는 비밀번호를 다시 확인해 주세요.'],
  }),
  computed: {
    minutes() {
      const minutes = Math.floor(this.timeLeft / 60)
      return String(minutes).padStart(2)
    },
    seconds() {
      const seconds = this.timeLeft % 60
      return String(seconds).padStart(2, '0')
    },

    model1Rules() {
      return [
        (v) => !!v || '일치하는 고객정보가 없습니다. 확인하고 다시 입력해주세요.'
      ]
    },
    model2Rules() {
      return [
        (v) => !!v || '인증번호가 틀립니다. 확인하고 다시 입력해주세요.'
      ]
    }
  },
  mounted(){
    this.checkStepNum = 1 // 화면 초기화
  },
  methods: {
    checkUser(flag){
      const me = this

      switch(flag){
      case "A":
        me.checkStepNum = 3
        
        break
        case "B":
        me.checkStepNum = 2

        break
        case "C":
        me.checkStepNum = 4

        break
      // no default
      }
    },

    checkNumber() {
      if(this.timeLeft === 0) {
        this.timeOverText = ['입력 가능 시간 초과로 ‘인증번호 발송’을 다시 해주세요.']
      } else {
        this.model2 === '' ? this.checkStepNum = 2 : this.checkStepNum = 4
      }
    },
    resetVald() {
      // Validation reset
      this.$refs.form.resetValidation()
      this.model1 = ''
      this.model2 = ''
    },
    startTimer() {
      if (this.isCountingDown) {
        this.resetCountdown()
        this.resetVald()
      }
      this.isCountingDown = true
      this.interval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--
        }
        else{
          clearInterval(this.interval)
        }
      }, 1000);
    },
    resetCountdown() {
      clearInterval(this.interval)
      this.timeLeft = 20
      this.isCountingDown = false
      this.timeOverText = []
    }
  },
  beforeDestroy() {
    clearInterval(this.interval)
  }
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/member.scss'; 
</style>
