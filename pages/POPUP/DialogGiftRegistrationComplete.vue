<template>
  <!-- [class설명]기본 공통:popup-basic,  해당팝업 전용:popup-해당클래스" -->
  <DialogBasic :width="540" class="popup-basic popup-cardRegistrationComplete" header-title="e-Gift Card 등록완료" @hide="closeDialogRegister">
    <template #body>
      <div class="inner">
        <div class="card-area" style="background-color:#f8f8f8">
          
          <div class="card-image">
            <!-- [퍼블수정]23.02.16 v-img > lottie 변경 -->
            <Lottie :options="t_anim.repeat_option" @animCreated="tRepeatAnim"/>
          </div>
          <div class="card-message">
            <div class="message-title">
              <h4>항상 고마운 당신에게 보내요</h4>
              <p><strong>100,000</strong>원</p>
            </div>
            <div class="message-input">
              <div class="tofrom mb-2">To. 더한섬</div>
              <!--20221208 더보기/접기 추가-->
              <div class="text-bg">
                <CardMessage :msg="textareaModel" :limit-line="4" popup></CardMessage>
              </div>
              <div class="tofrom mt-13 text-right">From. 더산타</div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <!-- 220916 CTA고정 : 버튼 <template #footer>로 이동 -->
      <v-btn block large color="primary" class="mt-34">확인</v-btn>
    </template>
  </DialogBasic>
</template>
<script>
import Lottie from 'vue-lottie/src/lottie.vue'
import * as cardLottieBaseWhite from '~/assets/lottie/e-gift/default_white.json'
/*
기본 하얀색 카드
import * as cardLottieBaseWhite from '~/assets/lottie/e-gift/default_white.json'
기본 검은색 카드
import * as cardLottieBaseBlack from '~/assets/lottie/e-gift/default_black.json'
러브 카드
import * as cardLottieLove from '~/assets/lottie/e-gift/All_for_love.json'
크리스마스 카드
import * as cardLottieXMas from '~/assets/lottie/e-gift/MerryChristmas.json'
뉴이어 카드
import * as cardLottieThxThisYear from '~/assets/lottie/e-gift/Thank_you_for_this_year.json'
생일축하 카드 추가
import * as cardLottieThxThisYear from '~/assets/lottie/e-gift/Happy_birthday.json'
*/
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'
import CardMessage from '~/components/giftCard/CardMessage' // 20221208 더보기/접기 :컴포넌트 추가

export default {
  components: {
    Lottie,
    DialogBasic,
    CardMessage // 20221208 더보기/접기 :컴포넌트 추가
  },
  data: () => ({
    valid: '',
    email: '',
    password: '',
    rules1: [
      v => !!v || '',
    ],
    rules2: [
      v => !!v || '',
    ],
    textareaModel : '지글거림을 처음 본 소감은 두려움 반 호기심 반이었습니다. 관광지에서 쉽게 볼 수 있는 조그마한 바게트 빵에 끼워진 소시지. 작은 빵의 크기에 비해 지나치게 긴 소시지의 모양이 익숙하지않습니다. 밖으로 한참이나 삐져나온 소시지 끝부분을 베어 무니, 달지 않고 톡 쏘는 겨자소스지글거림을 처음 본 소감은 두려움 반 호기심 반이었습니다. 관광지에서 쉽게 볼 수 있는 조그마한 바게트 빵에 끼워진 소시지. 작은 빵의 크기에 비해 지나치게 긴 소시지의 모양이 익숙하지않습니다. 밖으로 한참이나 삐져나온 소시지 끝부분을 베어 무니, 달지 않고 톡 쏘는 겨자소스',
    t_anim : {
        start : null,
        repeat : null,
        switch : false,
        repeat_option : {
          animationData: cardLottieBaseWhite.default,
          autoplay: true
        }
      },
  }),
  methods: {
    closeDialogCardAuthGuide() {
      this.DialogCardAuthGuide = false
      this.$emit('close')
    },
    // 풀팝업
    openDialogRegister() {
      this.DialogRegister = true
    },
    closeDialogRegister() {
      this.$emit('close')
      this.DialogRegister = false
    },
    onSubmit() {
      this.$refs.form.validate();
    },
    tRepeatAnim(anim){
      const me = this
      me.t_anim.repeat = anim
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/giftCard.scss';
</style>
