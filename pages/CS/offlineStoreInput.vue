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
                <!-- 브랜드 -->
                <div class="cmp-form-box required">
                  <p class="form-tit">브랜드</p>
                  <CommonSelectBox id="selectId0" title="타이틀">
                    <template #optionList>
                      <option value="placeholder">브랜드 선택</option>
                      <option value="option1">옵션1</option>
                      <option value="option2">옵션2</option>
                      <option value="option3">옵션3</option>
                      <option value="option4">옵션4</option>
                    </template>
                  </CommonSelectBox>
                </div>
                <!-- //브랜드 -->

                <!-- 문의유형 -->
                <div class="cmp-form-box required">
                  <p class="form-tit">문의유형</p>
                  <v-layout align-center justify-space-between>
                    <CommonSelectBox id="selectId0" title="타이틀">
                      <template #optionList>
                        <option value="placeholder">접수분류 선택</option><!-- 220914 고객센터 수정 -->
                        <option value="option1">불만</option>
                        <option value="option2">옵션2</option>
                        <option value="option3">옵션3</option>
                        <option value="option4">옵션4</option>
                      </template>
                    </CommonSelectBox>
                    <CommonSelectBox id="selectId0" title="타이틀">
                      <template #optionList>
                        <option value="placeholder">접수유형 선택</option><!-- 220914 고객센터 수정 -->
                        <option value="option1">매장 직원 불친절</option>
                        <option value="option2">옵션2</option>
                        <option value="option3">옵션3</option>
                        <option value="option4">옵션4</option>
                      </template>
                    </CommonSelectBox>
                  </v-layout>
                </div>
                <div class="cmp-form-box mt-24">
                  <p class="form-tit mb-20">세부 사항 선택 (선택 사항)</p>
                  <v-radio-group v-model="rodioModel1" column class="cmp-form-radioGroup">
                    <v-radio label="인사미시행" class="cmp-form-radio"></v-radio>
                    <v-radio label="응대미시행" class="cmp-form-radio"></v-radio>
                    <v-radio label="응대불친절" class="cmp-form-radio"></v-radio>
                    <v-radio label="환불/교환 응대불만" class="cmp-form-radio"></v-radio>
                  </v-radio-group>
                </div>
                <!-- //문의유형 -->
                <!-- 고객의견 -->
                <div class="cmp-form-box required idea">
                  <p class="form-tit">고객의견</p>
                  <v-text-field outlined type="text" label="제목을 입력해주세요" clearable class="cmp-form-input" autocomplete="new-password"></v-text-field><!-- [퍼블수정]22.12.26 autocomplete 수정 -->
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
                <v-layout align-center class="attach-area mt-20"><!-- [퍼블수정]22.12.26 위치 변경 (간격 이슈) -->
                  <div class="cmp-form-file"><!-- 이 안에 -->
                    <input id="fileUpload" type="file" accept="image/jpeg,image/gif,image/png" /><!-- id fileUpload 가 있어야 합니다. -->
                    <label for="fileUpload">사진첨부</label>
                  </div>
                  <p class="cmp-font fnt-14 ml-16">10MB 이하의 jpg, gif, png 파일 / 최대 5개 첨부가능</p>
                </v-layout>
                <!-- //사진첨부 -->

                <!-- 파일 첨부  : 이미지 있을 때 -->
                <template v-if="attachFileList && attachFileList.length > 0"><!-- [퍼블수정]22.12.26 이미지가 없을 때 미노출로 수정 (간격 이슈) -->
                  <ul class="attach-file-list">
                    <li v-for="(item, index) in attachFileList" :key="index + '4'" class="file-cnt">
                      <div class="file">
                        <v-img  :src="item" aspect-ratio="1" :transition="false" alt="첨부 파일"></v-img>
                        <v-btn icon></v-btn>
                      </div>
                    </li>
                    <li v-if="attachFileList.length < 5" class="file-cnt">
                      <div class="cmp-form-fileIcon">
                        <input id="fileUpload3" type="file" hide-details hide-input accept="image/jpeg,image/gif,image/png" /><!-- [개발확인]22.12.30 v-file-input 가 아닌 input 입니다 -->
                        <label for="fileUpload3">사진첨부</label>
                      </div>
                    </li>
                  </ul>
                  <p class="cmp-font fnt-14 mt-10">10MB 이하의 jpg, gif, png 파일 / 최대 5개 첨부가능</p>
                </template>
                <!-- 파일 첨부  : 이미지 있을 때 -->

                <!-- 비밀번호 -->
                <div class="cmp-form-box required">
                  <p class="form-tit">비밀번호</p>
                  <v-text-field outlined type="password" label="비밀번호를 입력해 주세요" clearable class="cmp-form-input" autocomplete="new-password" aria-autocomplete="false"></v-text-field><!-- [퍼블수정]22.12.26 autocomplete 수정 -->
                  <p class="cmp-font fnt-14 py-10">문의 내역 및 답변확인을 위한 비밀번호 4자리를 입력해 주세요.</p>
                </div>
                <!-- //비밀번호 -->
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
    attachFileList : [
      'https://img.thehandsome.com/md/publish/dummy/attach-file-img0.png',
      'https://img.thehandsome.com/md/publish/dummy/attach-file-img1.png',
    ],
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
