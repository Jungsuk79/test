<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <ContentsLeftMenu :title="'마이페이지'" :left-data="menuList" :active="'/ko/HR/handsomeRepair'"></ContentsLeftMenu>

      <div class="my-page-r-box hansomecare-application">
        <!-- [퍼블수정]23.11.15 필수 입력 추가 -->
        <div class="cmp-page-tit line mb-12">
          <h2 class="tit">케어플러스 수선 신청하기</h2>
        </div>
        <p class="cmp-font fnt-14 mb-12 text-right"><span class="c-red mr-4">*</span>필수입력정보</p>
        <!-- //[퍼블수정]23.11.15 필수 입력 추가 -->

        <div class="section-wrapper">

          <!-- 수거 및 수령방식 -->
          <div class="section-box">
            <div class="cmp-sub-tit line mb-24">
              <h3 class="tit">신청정보</h3>
            </div>

            <div class="cmp-sub-tit small">
              <!-- [퍼블수정]23.02.22 수선 문구 수정 -->
              <h3 class="tit">수거 및 수령방식</h3>
            </div>
            <p class="cmp-font fnt-16 bold">택배</p>
            <ul class="text-list">
              <li>
                <span class="chip">수거</span>
                <!-- eslint-disable -->
                <p v-html="newLine(guideText.pickup)"></p>
                <!-- eslint-disable -->
              </li>
              <li>
                <span class="chip">수령</span>
                <!-- eslint-disable -->
                <p v-html="newLine( guideText.receive)"></p>
                <!-- eslint-disable -->
              </li>
            </ul>
            <!-- [퍼블수정]23.11.15 필수 입력 추가 -->
            <ul class="cmp-dotList mt-10">
              <li>무료수선인 경우, 수거/수령시 택배비는 무상으로 진행됩니다.</li>
              <li>유료수선인 경우 수거/수령시 택배비가 발생합니다.(배송비 : 3,000원)</li>
            </ul>
            <!-- // [퍼블수정]23.11.15 필수 입력 추가 -->
          </div>
          <!-- //수거 및 수령방식 -->

          <!-- 수거/수령지 -->
          <div class="section-box">
            <div class="contents-line-box">
              <div class="cmp-sub-tit small">
                <!-- [퍼블수정]23.11.15 필수 입력 추가 -->
                <h4 class="tit">수거/수령지<span class="cmp-font c-red">*</span></h4>
                <!-- // [퍼블수정]23.11.15 필수 입력 추가 -->
                <button class="cmp-font fnt-14 button">
                  <span v-if="mydate">입력<i v-cmp-icon="{size:12,name:'next'}"></i></span><!-- 입력 전 버튼명 -->
                  <span v-else>수정<i v-cmp-icon="{size:12,name:'next'}"></i></span> <!-- 입력 후 버튼명 -->
                  
                </button>
              </div>
              <div v-if="mydate">
                <v-layout>
                  <p class="cmp-font c-gray">수거/수령지 정보를 등록하세요.</p>
                </v-layout>
              </div>
              <div v-else>
                <v-layout row align-center justify-start>
                  <p class="cmp-label-line c-blue mr-10">기본배송지</p>
                  <p class="cmp-font">홍길동 / 010-1234-5678</p>
                </v-layout>
                <p class="cmp-font mt-6">[06577] 서울 강남구 언주로 170길 28 (강남구, 스페이스데코빌딩) 3층 201호 </p>
              </div>
            </div>
          </div>  
          <!-- //수거/수령지 -->

          <!--수거/수령 요청사항-->
          <div class="section-box">
            <div class="contents-line-box">
              <div class="cmp-sub-tit small">
                <h4 class="tit">수거/수령 요청사항</h4>
                <button class="cmp-font fnt-14 button">
                  <span v-if="mydate">입력<i v-cmp-icon="{size:12,name:'next'}"></i></span><!-- 입력 전 버튼명 -->
                  <span v-else>수정<i v-cmp-icon="{size:12,name:'next'}"></i></span> <!-- 입력 후 버튼명 -->
                </button>
              </div>
              <div v-if="mydate">
                  <p class="cmp-font c-gray">수거/수령 요청사항을 등록하세요.</p>
              </div>
              <div v-else>
                <p class="cmp-font">
                  부재시 문 앞에 놓아주세요.
                  <br>공동현관 출입번호(****)
                </p>
              </div>
            </div>
          </div>
          <!--//수거/수령 요청사항-->

          <!--연락처-->
          <div class="section-box">
            <div class="cmp-sub-tit small">
              <!-- [퍼블수정]23.11.15 필수 입력 추가 -->
              <h4 class="tit">연락처<span class="cmp-font c-red">*</span></h4>
              <!-- // [퍼블수정]23.11.15 필수 입력 추가 -->
            </div>

            <div class="cmp-form-colBox">
              <CommonSelectBox id="phoneSelect" title="앞자리 번호 선택">
                <template #optionList>
                  <option value="010">010</option>
                  <option value="011">011</option>
                  <option value="017">017</option>
                  <option value="018">018</option>
                  <option value="019">019</option>
                </template>
              </CommonSelectBox>
              <v-text-field type="text" outlined label="가운데 번호 입력" clearable class="cmp-form-input label-hide"></v-text-field>
              <v-text-field type="text" outlined label="뒷자리 번호 입력" clearable class="cmp-form-input label-hide"></v-text-field>
            </div>
            
            <p class="cmp-font fnt-14 mt-20">* 해당 번호로 검수 내용을 연락드릴 예정입니다.</p>
          </div>
          <!--//연락처-->

          <!--수선상품-->
          <div class="section-box box-no-line">
            <div class="cmp-sub-tit line">
              <h4 class="tit">수선상품</h4>
            </div>

            <!--수선 상품 선택 했을 경우-->
            <ul class="item-list">
              <li>
                <v-layout justify-space-between align-center class="item-header">
                  <!-- [퍼블수정]23.11.15 필수 입력 추가 -->
                  <h4>상품<span class="cmp-font c-red">*</span></h4>
                  <!-- // [퍼블수정]23.11.15 필수 입력 추가 -->
                  <button v-cmp-icon="{size : 18, name : 'close', type : 'before'}" type="button" ></button>
                </v-layout>

                <div class="item-number"><strong>SJSJ 레터링 데님 집업 드레스</strong></div>
             
                <div class="item-cont">
                  <div class="cmp-sub-tit small">
                    <!-- [퍼블수정]23.11.15 필수 입력 추가 -->
                    <h4 class="tit">요청사항<span class="cmp-font c-red">*</span></h4>
                    <!-- // [퍼블수정]23.11.15 필수 입력 추가 -->
                  </div>

                  <!-- [퍼블수정]23.11.15 필수 입력 추가 -->
                  <v-textarea v-model="model2" outlined :no-resize="true" :rules="[model2Rules.length(500)]" counter="500" maxlength="500" height="210" class="cmp-form-textarea counting">
                    <template #label>
                      <div>상품 수선 위치 및 방법 등 요청사항을 정확하게 입력해 주세요. (필수)<br>※ 상품 불량 문의 및 심의 건의 경우, 고객센터로 문의해 주세요. (반송될 수 있음)</div>
                    </template>
                  </v-textarea>
                  <!-- // [퍼블수정]23.11.15 필수 입력 추가 -->

                  <!-- 사진 첨부 전-->
                  <v-layout justify-start align-center class="item-file-after">
                    <div class="cmp-form-file">
                      <input id="fileUpload" type="file" />
                      <label for="fileUpload">사진첨부</label>
                    </div>
                    <p class="cmp-font fnt-14">10MB 이하의 jpg, gif, png 파일 / 최대 3개 첨부가능</p>
                  </v-layout>
                  
                  <!-- 사진 첨부 후
                  <v-layout column class="item-file">
                    <ul class="attach-file-list">
                      <li v-for="(item, index) in attachFileList" :key="index" class="file-cnt">
                        <div class="file">
                          <v-img  :src="item" aspect-ratio="1" alt="첨부 파일"></v-img>
                          <v-btn icon></v-btn>
                        </div>
                      </li>
                      <li v-if="attachFileList.length < 5" class="file-cnt">
                        <div class="cmp-form-fileIcon">
                          <input id="fileUpload3" type="file" />
                          <label for="fileUpload3">사진첨부</label>
                        </div>
                      </li>
                    </ul>
                    <p class="cmp-font fnt-14">10MB 이하의 jpg, gif, png 파일 / 최대 3개 첨부가능</p>
                  </v-layout>-->
                </div>
              </li>
            </ul>

            <!-- 수선 상품 선택되지 않은 경우-->
            <div v-if="mydate" class="pt-24">
              <div class="cmp-sub-tit small mb-20">
                  <h4 class="tit">상품</h4>
              </div>
              <p class="cmp-font c-gray">수선 상품을 선택해 주세요.</p>
              <div class="cmp-btnsArea center-area mt-24">
                <v-btn  outlined large color="primary">상품선택</v-btn>
              </div>  
            </div>
          </div>
          <!--//수선상품-->

          <!-- [241126] 개인정보수집/이용동의개선 --> 
          <!-- [퍼블수정]23.11.15 필수 입력 추가 -->
          <div class="section-box pt-0">
            <ul class="cmp-dotList">
              <li>더한섬닷컴 자사브랜드 3년 이내 온/오프라인 구매 또는 품번으로 상품을 선택 할 수 있습니다.</li>
              <li>케어플러스 수선 서비스는 한 상품 단위로 신청 가능합니다.</li>
              <li>더한섬닷컴 정책에 따라 수선이 완료된 후, 비용을 산정하여 최종 수선비 결제를 요청드릴 예정입니다.</li>
            </ul>
          </div>

          <!-- [241126] 개인정보수집/이용동의개선 --> 
          <p class="cmp-font fnt-14 mt-24">고객(정보주체)의 개인정보보호 및 권리는 「개인정보보호법」 및관계 법령에 따라 안전하게 관리하고 있습니다.<br />
            자세한 사항은 <button class="cmp-font fnt-14 button"><span class="line">더한섬닷컴 개인정보처리방침</span></button>에서 확인할 수 있습니다.
          </p>
          
          <!-- //[퍼블수정]23.11.15 필수 입력 추가 -->
          <!-- <div class="checkbox-cont mt-24">
              <v-checkbox class="cmp-form-checkbox align-center">
                <template #label>
                (필수)수선서비스 이용자 동의<i class="cmp-icon cmp-icon-12 i-next"></i>
                </template>
              </v-checkbox>
          </div> -->
          <!-- 230914 세탁/수선 만족도 조사 -->
          <div class="checkbox-cont mt-24">
              <v-checkbox class="cmp-form-checkbox align-center">
                <template #label>
                (선택)서비스 만족도 조사 진행 동의(수선완료 시 발송) 
                </template>
              </v-checkbox>
          </div>
          <!-- //230914 세탁/수선 만족도 조사 -->
        </div>       
        <div class="cmp-btnsArea center-area">
          <v-btn large color="primary" disabled>신청하기</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentsLeftMenu from '~/components/common/ContentsLeftMenu'
export default {
  components: {
    ContentsLeftMenu
  },
  layout: 'LayoutBasics',
  data: () => ({
     productSelect : 0,
     rodioModetime1 : 0 ,
     paymentSelect :0,
     mydate: false,
     guideText: {
        pickup : '수선 품목을 <span class="cmp-font c-red fnt-14">박스에 담아 주시면, 택배사에서 1~2일 내 방문하여 수거 예정입니다.</span>',
        receive : '수선 완료 후, <span class="cmp-font c-red fnt-14">수거지와 동일한 배송지</span>로 배송예정 입니다.',
    },
    model1: '',
    model1Rules: {
      length: (len) => (v) =>
        (v || '').length <= len || `[test]최대 ${len}글자까지 입력 가능합니다.`,
    },
    model2: '',
    model2Rules: {
      length: (len) => (v) =>
        (v || '').length <= len || `[test]최대 ${len}글자까지 입력 가능합니다.`,
    },
    attachFileList : [
      'https://img.thehandsome.com/md/publish/dummy/attach-file-img0.png',
      'https://img.thehandsome.com/md/publish/dummy/attach-file-img1.png',
    ],
    storeList : [
      {
        name : '한섬하우스 그린어스 부산점',
        address : '부산광역시 해운대구 중동 1336-2',
        number : '02-1234-5678',
        receipt_date : ['12월4일','12월5일','12월6일','12월7일'],
        date_select_open : false,
        map_open : false,
      },
      {
        name : '한섬하우스 그린어스 청주점',
        address : '충청북도 청주시 서원구 미평동 35-8',
        number : '02-1234-5678',
        receipt_date : ['12월4일','12월5일','12월6일','12월7일'],
        date_select_open : false,
        map_open : false,
      },
    ],

  }),
  created() {
    const me = this
    const json = require('~/static/json/mypage_left_menu.json')
    me.menuList = json.list
  },
  methods: {
    newLine(str) {
      return String(str).replace(/(?:\r\n|\r|\n)/g, '</span>','</br>')
    },
    accoReset(){
      const me = this
      for(let i=0;i<me.storeList.length;i++){
        me.storeList[i].date_select_open = false
      }      
    }
    
  },
}
</script>
<style lang="scss">
  @import '@/assets/scss/pages/mypage.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
