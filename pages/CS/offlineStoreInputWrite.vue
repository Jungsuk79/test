<template>
  <div class="contents contents-type2">
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'고객센터'" :left-data="menuList" :active="'/ko/CS/offlineStore'"  :page-class="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="offline-input">
            <div class="cmp-page-tit">
              <h2 class="tit">오프라인 매장 문의</h2>
            </div>

            <v-form class="input-form">

              <!-- 고객정보 -->
              <div class="info-border-box px-0">
                <div class="box">
                  <dl class="line">
                    <dt class="tit">고객명</dt>
                    <dd class="txt">더한섬</dd>
                  </dl>
                  <dl class="line">
                    <dt class="tit">연락처</dt>
                    <dd class="txt">010-1234-5678</dd>
                  </dl>
                </div>
              </div>
              <v-layout align-center justify-space-between class="pt-14">
                <v-checkbox label="SMS 알림 동의" class="cmp-form-checkbox"></v-checkbox>
                <div class="right-area">
                  <nuxt-link class="cmp-font button fnt-16" to="#n">본인인증<i class="cmp-icon cmp-icon-16 i-next"></i></nuxt-link>
                  <!-- <p class="cmp-font fnt-16">본인인증완료</p> -->
                </div>
              </v-layout>
              <!-- //고객정보 -->

              <div class="cmp-form-boxGroup">
                <!-- 고객의견 -->
                <div class="cmp-form-box required idea">
                  <p class="form-tit">고객의견</p>
                  <v-text-field outlined type="text" label="제목을 입력해주세요" clearable class="cmp-form-input"></v-text-field>
                  <div class="cmp-form-textareaBox mt-10"><!-- 220914 고객센터 수정 -->
                    <v-textarea 
                      v-model="model3" 
                      outlined 
                      :no-resize="true"
                      counter="1000" 
                      maxlength="1000" 
                      class="cmp-form-textarea counting"
                      :class="{'c-error':model3.length === 1000}"
                    >
                      <template #label><!--20221202 br처리-->
                        질문하시는 ‘매장/제품번호(상품코드)’를 정확히 입력해 주시고,<br>질문하시는 내용을 구체적으로 작성해 주시면 정확하고 빠른 답변에 도움이 됩니다.
                      </template>
                    </v-textarea>
                    <div class="count-txt" :class="{'c-error':model3.length === 1000}">{{model3.length | number}} / 1,000</div>
                  </div>
                </div>
                <!-- //고객의견 -->
                <!-- 사진첨부 -->
                <v-layout align-center class="attach-area mt-20">
                  <div class="cmp-form-file">
                    <input id="fileUpload" type="file" />
                    <label for="fileUpload">사진첨부</label>
                  </div>
                  <p class="cmp-font fnt-14 ml-16">10MB 이하의 jpg, gif, png 파일 / 최대 5개 첨부가능</p>
                </v-layout>
                <!-- //사진첨부 -->

                <!-- 안내문구 -->
                <div class="cmp-form-box">
                  <ul class="cmp-dotList guide-text">
                    <li>문의하신 내용에 대한 답변은 고객센터 > 고객의 소리 > 오프라인 매장 문의에서 확인하실 수 있습니다.</li>
                    <li>SMS로 답변 완료 알림을 받아 보실 수 있습니다.</li>
                  </ul>
                </div>
                <!-- //안내문구 -->
                <div class="cmp-btnsArea center-area">
                  <v-btn large outlined color="primary">취소</v-btn>
                  <v-btn large disabled color="primary">접수</v-btn>
                </div>
              </div>
            </v-form>
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
    rodioModel1: 0,
    model3: '',
    model3Rules: {
      length: (len) => (v) =>
        (v || '').length <= len || `최대 ${len}글자까지 입력 가능합니다.`,
    },
  }),
  created() {
    const me = this
    const json = require('~/static/json/cs_left_menu.json')
    me.menuList = json.list
  },  
  methods: {
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/cs.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
