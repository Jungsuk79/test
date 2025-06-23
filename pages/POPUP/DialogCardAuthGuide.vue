<template>
  <DialogBasic
    class="popup-basic popup-cardAuthGuide"
    header-title="e-Gift Card 구매 카드사별 인증 안내"
    @hide="closeDialogCardAuthGuide"
    :width="540"
  >
    <template #body>
      <ul class="card-table">
        <li>
          <dl class="card-row">
            <dt class="card-name">
              <!-- <v-img src="/images/card/card-logo-bc.png" max-width="60" max-height="40" alt="비씨카드"></v-img> -->
              <div v-background-image="{url:'/images/card/card-logo-bc.png'}"></div>
              <p>비씨카드</p>
            </dt>
            <dd class="card-description">
              <!-- 220913 e기프트 : 문구 수정 -->
              5건 이하 &amp; 30만원 이하 / 비밀번호 인증<br>
              5건 초과 ~ 10건 이하 or 30만원 초과 ~ 70만원 이하 / 비밀번호 + ARS인증<br>
              10건 초과 or 70만원 초과 / 비밀번호 + 인증서 + ARS인증<br>
              개인 100만원/월 (할부불가)
            </dd>
          </dl>
        </li>
        <li>
          <dl class="card-row">
            <dt class="card-name">
              <!-- <v-img src="/images/card/card-logo-kb.png" max-width="60" max-height="40" alt="국민카드"></v-img> -->
              <div v-background-image="{url:'/images/card/card-logo-kb.png'}"></div>
              <p>국민카드</p>
            </dt>
            <dd class="card-description">
              <!-- 220913 e기프트 : 문구 수정 -->
              3-Factor (ISP 또는 앱카드 + 공인인증서 + SMS)<br>개인 100만원/월 (할부불가)
            </dd>
          </dl>
        </li>
        <li>
          <dl class="card-row">
            <dt class="card-name">
              <!-- <v-img src="/images/card/card-logo-samsung.png" max-width="60" max-height="40" alt="삼성카드"></v-img> -->
              <div v-background-image="{url:'/images/card/card-logo-samsung.png'}"></div>
              <p>삼성카드</p>
            </dt>
            <dd class="card-description">
              간편결제 + 공인인증 + ARS인증 / 삼성앱카드 결제 / 삼성페이 결제<br>
              개인 100만원/월 (할부불가)
            </dd>
          </dl>
        </li>
        <li>
          <dl class="card-row">
            <dt class="card-name">
              <!-- <v-img src="/images/card/card-logo-shinhan.png" max-width="60" max-height="40" alt="신한카드"></v-img> -->
              <div v-background-image="{url:'/images/card/card-logo-shinhan.png'}"></div>
              <p>신한카드</p>
            </dt>
            <dd class="card-description">
              간편결제 + 공인인증서 / 신한앱카드<br>
              개인 100만원/월 (할부불가)
            </dd>
          </dl>
        </li>
        <li>
          <dl class="card-row">
            <dt class="card-name">
              <!-- <v-img src="/images/card/card-logo-hyundai.png" max-width="60" max-height="40" alt="현대카드"></v-img> -->
              <div v-background-image="{url:'/images/card/card-logo-hyundai.png'}"></div>
              <p>현대카드</p>
            </dt>
            <dd class="card-description">
              간편결제 + (SMS or ARS) + 공인인증서 / 현대앱카드 (PIN 또는 FIDO + ARS인증)<br>
              개인 100만원/월 (할부불가)
            </dd>
          </dl>
        </li>
        <li>
          <dl class="card-row">
            <dt class="card-name">
              <!-- <v-img src="/images/card/card-logo-lotte.png" max-width="60" max-height="40" alt="롯데카드"></v-img> -->
              <div v-background-image="{url:'/images/card/card-logo-lotte.png'}"></div>
              <p>롯데카드</p>
            </dt>
            <dd class="card-description">
              <!-- 220913 e기프트 : 문구 수정 -->
              10만원 미만 / 개인 100만원/월 (할부불가)<br>
              앱카드(간편비밀번호 or 생체인증)<br>
              간편결제(sms인증 4자리숫자)<br>
              10만원 이상 / 개인 100만원/월 (할부불가)<br>
              앱카드(간편비밀번호 or 생체인증) + ARS<br>
              간편결제 + ARS<br>
              개인 100만원/월 (할부불가)
            </dd>
          </dl>
        </li>
        <li>
          <dl class="card-row">
            <dt class="card-name">
              <!-- <v-img src="/images/card/card-logo-hana.png" max-width="60" max-height="40" alt="하나카드"></v-img> -->
              <div v-background-image="{url:'/images/card/card-logo-hana.png'}"></div>
              <p>하나카드</p>
            </dt>
            <dd class="card-description">
              30만원 미만 : 간편결제(1Q페이)<br><!--20221129 문구수정 -->
              30만원 이상 : 간편결제(1Q페이) + 공인인증서<br><!--20221129 문구수정 -->
              개인 100만원/월 (할부불가)
            </dd>
          </dl>
        </li>
        <li>
          <dl class="card-row">
            <dt class="card-name">
              <!-- <v-img src="/images/card/card-logo-nh.png" max-width="60" max-height="40" alt="NH카드"></v-img> -->
              <div v-background-image="{url:'/images/card/card-logo-nh.png'}"></div>
              <p>NH카드</p>
            </dt>
            <dd class="card-description">
              간편결제 + (ARS) / NH pay<br>
              기업 공용카드 : 안심클릭 + SMS + 공인인증<br><!--20221129 문구수정 -->
              개인 100만원/월 (할부불가)
            </dd>
          </dl>
        </li>
      </ul>
    </template>
  </DialogBasic>
</template>
<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'
export default {
  components: { DialogBasic },
  data: () => ({

  }),
  methods: {
    closeDialogCardAuthGuide() {
      this.DialogCardAuthGuide = false
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss">
</style>
