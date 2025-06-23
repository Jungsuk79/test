<template>
  <div class="contents contents-type2">
    <div class="content-wrap content-giftcard">
      <div class="contents-layout order-complete">
        <CommonContentsLeftMenu :title="'마이페이지'" :left-data="menuList" :active="'/ko/GC/giftCardList'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="gc-main">
            <div class="cmp-page-tit">
              <h2 class="tit">e-Gift Card</h2>
            </div>   
            
            <!-- 메시지 박스 -->
            <div class="giftcard-letter-box">
              <div class="img-cnt">
                <img src="/images/egiftcard/card3.png" alt="gift card image" class="img" />
                <div class="l-bg"></div>
                <div class="r-bg"></div>
                <div class="b-bg"></div>
              </div>
              <h4 class="text">
                더한섬, 다니엘헤니, 이나영 님에게<br>
                선물을 보냈습니다.
              </h4>
            </div>
            <!-- //메시지 박스 -->

            <ul class="cmp-dotList mt-60">
              <li>휴대폰으로 전송된 e-Gift Card 번호 및 PIN 번호를 더한섬닷컴 마이페이지>e-Gift Card 메뉴에서 수신 받으신 카드번호와 PIN 번호를 입력하여 등록해주시면 e-money로 전환됩니다.</li>
              <li><span class="cmp-font c-red">2021.12.09</span>까지 e-Gift Card 미 등록 시, 자동 취소 됩니다.</li>
            </ul>
            <v-layout justify-space-between class="cmp-btnsArea center-area">
                <v-btn outlined large color="primary">선물 계속하기</v-btn>
                <v-btn large color="primary">선물내역 확인하기</v-btn>
            </v-layout>            

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
  data() {
    return {

    }
  },
  created() {
    const me = this
    const json = require('~/static/json/mypage_left_menu.json')
    me.menuList = json.list
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/giftCard.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>