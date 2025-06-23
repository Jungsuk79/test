<template>
  <DialogBasic
   class="popup-login" 
    header-title="간편회원 통합 안내" 
    @hide="closeDialog">
    <template #body>
      <div class="simple-contents">
        <div class="contens-center">
          <p class="cmp-font fnt-18">간편회원 아이디는 1개만 사용 가능합니다.<br>유지하시려는 아이디 1개를 선택해주세요.</p>
        </div>

        <div class="info-border-box">
          <div class="box">
            <dl class="line">
              <dt class="tit">
                <v-radio-group v-model="rodioModel1" column class="cmp-form-radioGroup">
                  <v-radio label="aaasome@handsome.co.kr (로그인 중)" class="cmp-form-radio" disabled></v-radio>
                  <v-radio label="bbbsome@naver.com" class="cmp-form-radio" disabled></v-radio>
                </v-radio-group>
              </dt>
            </dl>
          </div>
        </div>  

        <!--20221012 수정-->
        <ul class="cmp-dotList mt-24">
          <li>선택하신 아이디로 주문내역이 통합됩니다.</li>
          <li>쿠폰/자산/게시물/1:1상담내역 등은 이관되지 않습니다.</li>
          <li>간편회원 아이디 통합을 거부하실 경우,<br>- H.Point 통합회원이라면, H.Point 통합회원으로 전환하신 후
          서비스 이용이 가능합니다.<br>- H.Point 통합회원이 아니라면, 기존에 사용하시던 간편회원 아이디 1개만 이용이 가능합니다.</li>
        </ul>

        <div class="btn-box">
          <v-btn 
            large
            block
            disabled
            color="primary">
           간편회원 통합하기
          </v-btn>
        </div>

        <div class="contens-center mt-34">
          <p class="cmp-font fnt-18">aaasome@handsome.co.kr</p>
          <p class="cmp-font mt-20">선택한 아이디로 통합하시겠습니까?<br>나머지 아이디는 사용하실 수 없습니다.<br>다른 아이디로 통합을 원하시면 다시 선택해 주세요.</p>
        </div>

        <div class="btn-box mt-34 mb-2">
          <v-btn 
            large
            block
            color="primary">
           선택한 아이디로 간편회원 통합하기
          </v-btn>
           <v-btn 
            large
            outlined
            block
            color="primary">
           아이디 다시 선택하기
          </v-btn>
        </div>
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
    rodioModel1 : 0,
  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss">
</style>
