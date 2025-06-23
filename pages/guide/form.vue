<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <v-form ref="form" @submit.prevent>
        <!-- validation show/hide 버튼 -->
        <div class="form-test-btn">
          <v-btn color="success" class="mr-4" @click="validateTest">validation 문구 보기</v-btn>
          <v-btn color="warning" @click="resetValidateTest">validation 문구 숨김</v-btn>
        </div>
        <!-- //validation show/hide 버튼 -->
        <!--
          ***참고***
          - 에러메시지 노출을 위한 'model', 'rules' data는 에러문구 마크업 확인 용 입니다.
        -->
        <div class="form-guide-box">
          <!-- input(textfield)  -->
          <div class="form-guide-cnt">
            <h2 class="form-guide-tit">input(textfield)</h2>
            <v-layout row align-start justify-space-between class="form-guide-sub-cnt">
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">기본</h3>
                <v-text-field v-model="model1" :rules="model1Rules" outlined type="text" label="text 타입" clearable class="cmp-form-input"></v-text-field>
                <v-text-field outlined type="password" label="password 타입" class="cmp-form-input"></v-text-field>
              </div>
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">readonly</h3>
                <v-text-field outlined readonly type="text" label="label 문구" value="테스트" clearable class="cmp-form-input"></v-text-field>
              </div>
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">disabled</h3>
                <v-text-field outlined disabled type="text" label="label 문구" clearable class="cmp-form-input"></v-text-field>
              </div>
            </v-layout>
            <v-layout row align-start justify-space-between class="form-guide-sub-cnt">
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">success 케이스</h3>
                <v-text-field v-model="model4" :rules="model4Rules" outlined type="password" label="Please re-enter your password." class="cmp-form-input" :class="{'c-success' : model4.length >= 10}"></v-text-field>
              </div>
              <div class="guide-flex-cnt">
              </div>
              <div class="guide-flex-cnt">
              </div>
            </v-layout>
          </div>
          <!-- //input(textfield) -->

          <!-- input(textfield) line type -->
          <div class="form-guide-cnt">
            <h2 class="form-guide-tit">input(textfield) 라인 타입</h2>
            <v-layout row align-start justify-space-between class="form-guide-sub-cnt">
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">기본</h3>
                <v-text-field v-model="model2" :rules="model2Rules" type="text" label="text 타입" clearable class="cmp-form-input"></v-text-field>
                <v-text-field type="password" label="password 타입" class="cmp-form-input"></v-text-field>
              </div>
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">readonly</h3>
                <v-text-field type="text" readonly value="test" label="label 문구" clearable class="cmp-form-input"></v-text-field>
              </div>
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">disabled</h3>
                <v-text-field type="text" disabled label="label 문구" clearable class="cmp-form-input"></v-text-field>
              </div>
            </v-layout>
            <v-layout row align-start justify-space-between class="form-guide-sub-cnt">
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">success 케이스</h3>
                <v-text-field v-model="model4" :rules="model4Rules" hide-details="auto" type="password" label="Please re-enter your password." class="cmp-form-input" :class="{'c-success' : model4.length >= 10}"></v-text-field>
              </div>
              <div class="guide-flex-cnt"></div>
              <div class="guide-flex-cnt"></div>
            </v-layout>
          </div>
          <!-- //input(textfield) line type -->

          <!-- textarea -->
          <div class="form-guide-cnt">
            <h2 class="form-guide-tit">textarea</h2>
            <v-layout row align-start justify-space-between class="form-guide-sub-cnt">
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">기본</h3>
                <v-textarea outlined label="label 문구" :no-resize="true" class="cmp-form-textarea"></v-textarea>
              </div>
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">글자 카운팅</h3>
                <v-textarea v-model="model3" outlined label="label 문구" :no-resize="true" :rules="[model3Rules.length(100)]" counter="100" class="cmp-form-textarea counting"></v-textarea>

                <h3 class="form-guide-sub-tit mt-10">글자 카운팅 - 1,000 단위 콤마 삽입</h3>
                <div class="cmp-form-textareaBox">
                  <v-textarea 
                    v-model="model3" 
                    outlined 
                    :no-resize="true"
                    counter="1000" 
                    maxlength="1000" 
                    class="cmp-form-textarea counting"
                    :class="{'c-error':model3.length === 1000}"
                  >
                    <template #label>
                      문의하실 상품의 상품명/제품코드/사이즈/컬러를 정확히 입력해주세요.
                    </template>
                  </v-textarea>
                  <div class="count-txt" :class="{'c-error':model3.length === 1000}">{{model3.length | number}} / 1,000</div>
                </div>
              </div>
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">label slot</h3>
                <v-textarea outlined :no-resize="true" height="234" class="cmp-form-textarea">
                  <template #label>
                    <div>문의하실 상품의 상품명/제품코드/사이즈/컬러를 정확히 입력해주세요.<br><br>주문하신 상품이라면 주문번호와 문의 하실 상품명/제품코드/사이즈/컬러와 함께 궁금하신 사항을 적어 주시면, 정확한 답변을 드리는데 도움이 됩니다. 반품접수는 마이페이지 주문내역에서 “반품 신청” 버튼을 클릭하여 반품을 접수해주셔야 합니다.</div>
                  </template>
              </v-textarea>
              </div>
            </v-layout>
          </div>
          <!-- // -->

          <!-- select -->
          <div class="form-guide-cnt">
            <h2 class="form-guide-tit">select</h2>
            <v-layout row align-start justify-space-between class="form-guide-sub-cnt">
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">기본</h3>
                <CommonSelectBox id="selectId0" title="타이틀">
                  <template #optionList>
                    <option value="placeholder">선택해 주세요.</option>
                    <option value="option1">옵션1</option>
                    <option value="option2">옵션2</option>
                    <option value="option3">옵션3</option>
                    <option value="option4">옵션4</option>
                  </template>
                </CommonSelectBox>
              </div>
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">disabled</h3>
                <CommonSelectBox id="selectId1" title="타이틀" :disabled="true">
                  <template #optionList>
                    <option value="placeholder">선택해 주세요.</option>
                    <option value="option1">옵션1</option>
                    <option value="option2">옵션2</option>
                    <option value="option3">옵션3</option>
                    <option value="option4">옵션4</option>
                  </template>
                </CommonSelectBox>  
              </div>
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">error</h3>
                <CommonSelectBox id="selectId2" title="타이틀" :error="true" error-text="validation 문구가 들어갑니다.">
                  <template #optionList>
                    <option value="placeholder">선택해 주세요.</option>
                    <option value="option1">옵션1</option>
                    <option value="option2">옵션2</option>
                    <option value="option3">옵션3</option>
                    <option value="option4">옵션4</option>
                  </template>
                </CommonSelectBox>
              </div>
            </v-layout>
          </div>
          <!-- //select -->

          <!-- select line type -->
          <div class="form-guide-cnt">
            <h2 class="form-guide-tit">select 라인 타입</h2>
            <v-layout row align-start justify-space-between class="form-guide-sub-cnt">
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">기본</h3>
                <CommonSelectBox id="selectId3" title="타이틀" class="type1">
                  <template #optionList>
                    <option value="placeholder">선택해 주세요.</option>
                    <option value="option1">옵션1</option>
                    <option value="option2">옵션2</option>
                    <option value="option3">옵션3</option>
                    <option value="option4">옵션4</option>
                  </template>
                </CommonSelectBox>
              </div>
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">disabled</h3>
                <CommonSelectBox id="selectId4" title="타이틀" :disabled="true" class="type1">
                  <template #optionList>
                    <option value="placeholder">선택해 주세요.</option>
                    <option value="option1">옵션1</option>
                    <option value="option2">옵션2</option>
                    <option value="option3">옵션3</option>
                    <option value="option4">옵션4</option>
                  </template>
                </CommonSelectBox>
              </div>
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">error</h3>
                <CommonSelectBox id="selectId5" title="타이틀" class="type1" :error="true" error-text="validation 문구가 들어갑니다.">
                  <template #optionList>
                    <option value="placeholder">선택해 주세요.</option>
                    <option value="option1">옵션1</option>
                    <option value="option2">옵션2</option>
                    <option value="option3">옵션3</option>
                    <option value="option4">옵션4</option>
                  </template>
                </CommonSelectBox>
              </div>
            </v-layout>
          </div>
          <!-- //select line type -->

          <!-- 상품 사이즈 선택 셀렉트 -->
          <div class="form-guide-cnt">
            <h2 class="form-guide-tit">상품 size select</h2>
            <ProductOptionSelect :size-data="optionSizeData" />
          </div>
          <!-- //상품 사이즈 선택 셀렉트 -->

          <!-- 상품 사이즈 선택 셀렉트 -->
          <div class="form-guide-cnt">
            <h2 class="form-guide-tit">sorting select</h2>
            <CommonSelectSortBox id="sort0">
              <template #optionList>
                  <option value="option1">브랜드 전체</option>
                  <option value="option2">옵션2</option>
              </template>
            </CommonSelectSortBox>
            <CommonSelectSortBox id="sort1" label-class="cmp-font fnt-13" icon-class="cmp-icon-12">
              <template #optionList>
                  <option value="all">시즌 전체</option>
                  <option value="2022SS">2022년 S/S</option>
              </template>
            </CommonSelectSortBox>
          </div>
          <!-- //상품 사이즈 선택 셀렉트 -->

          <!-- sort 셀렉트 -->
          <div class="form-guide-cnt">
            <h2 class="form-guide-tit">주문 coupon select</h2>
            
          </div>
          <!-- //sort 셀렉트 -->

          <!-- sort select -->
          <!-- <div class="form-guide-cnt">
            <h2 class="form-guide-tit"></h2>
          </div> -->
          <!-- //sort select -->

          <!-- size select -->
          <!-- <div class="form-guide-cnt">
            <h2 class="form-guide-tit"></h2>
          </div> -->
          <!-- //size select -->

          <!-- coupon select -->
          <!-- <div class="form-guide-cnt">
            <h2 class="form-guide-tit"></h2>
          </div> -->
          <!-- //coupon select -->

          <!-- checkbox -->
          <div class="form-guide-cnt">
            <h2 class="form-guide-tit">checkbox</h2>
            <v-layout row align-start justify-space-between class="form-guide-sub-cnt">
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">기본</h3>
                <v-checkbox label="체크박스" class="cmp-form-checkbox"></v-checkbox>
                <v-checkbox label="체크박스 disabled" disabled class="cmp-form-checkbox"></v-checkbox>
                <v-checkbox
                  :true-value="1"
                  :false-value="0"
                  :rules="[(v) => v > 0 || 'validation 문구 들어갑니다.']"
                  label="체크박스 error"
                  class="cmp-form-checkbox"
                ></v-checkbox>
              </div>
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">label hidden</h3>
                <v-checkbox label="체크박스" class="cmp-form-checkbox label-hide"></v-checkbox> 
              </div>
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">label font bold</h3>
                <v-checkbox label="체크박스" class="cmp-form-checkbox fw-b"></v-checkbox>
              </div>
            </v-layout>
            <v-layout row align-start justify-space-between class="form-guide-sub-cnt">
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">체크박스 그룹 가로</h3>
                <v-layout row class="cmp-form-chkGroup"><!--<div class="cmp-form-chkGroup row">-->
                  <v-checkbox label="체크박스" class="cmp-form-checkbox"></v-checkbox>
                  <v-checkbox label="체크박스" class="cmp-form-checkbox"></v-checkbox>
                  <v-checkbox label="체크박스" class="cmp-form-checkbox"></v-checkbox>
                </v-layout>
              </div>
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">체크박스 그룹 가로 type2</h3>
                <v-layout row class="cmp-form-chkGroup wide"><!--<div class="cmp-form-chkGroup row">-->
                  <v-checkbox label="체크박스" class="cmp-form-checkbox"></v-checkbox>
                  <v-checkbox label="체크박스" class="cmp-form-checkbox"></v-checkbox>
                  <v-checkbox label="체크박스" class="cmp-form-checkbox"></v-checkbox>
                </v-layout>
              </div>
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">체크박스 그룹 세로</h3>
                <v-layout col class="cmp-form-chkGroup"><!--<div class="cmp-form-chkGroup col">-->
                  <v-checkbox label="체크박스" class="cmp-form-checkbox"></v-checkbox>
                  <v-checkbox label="체크박스" class="cmp-form-checkbox"></v-checkbox>
                  <v-checkbox label="체크박스" class="cmp-form-checkbox"></v-checkbox>
                </v-layout>
              </div>
            </v-layout>
          </div>
          <!-- //checkbox -->

          <!-- radio -->
          <div class="form-guide-cnt">
            <h2 class="form-guide-tit">radio</h2>
            <v-layout row align-start justify-space-between class="form-guide-sub-cnt">
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">기본</h3>
                <v-radio-group v-model="rodioModel0" row class="cmp-form-radioGroup">
                  <v-radio label="라디오1" class="cmp-form-radio"></v-radio>
                  <v-radio label="라디오2" class="cmp-form-radio"></v-radio>
                  <v-radio label="라디오3" class="cmp-form-radio"></v-radio>
                </v-radio-group>
              </div>
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">disabled</h3>
                <v-radio-group row class="cmp-form-radioGroup" disabled>
                  <v-radio label="라디오1" class="cmp-form-radio"></v-radio>
                  <v-radio label="라디오2" class="cmp-form-radio"></v-radio>
                  <v-radio label="라디오3" class="cmp-form-radio"></v-radio>
                </v-radio-group>
              </div>
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">disabled - checked</h3>
                <v-radio-group v-model="rodioModel1" row class="cmp-form-radioGroup select-disabled" readonly>
                  <v-radio label="라디오1" class="cmp-form-radio"></v-radio>
                  <v-radio label="라디오2" class="cmp-form-radio"></v-radio>
                  <v-radio label="라디오3" class="cmp-form-radio"></v-radio>
                </v-radio-group>
              </div>
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">error</h3>
                <v-radio-group row class="cmp-form-radioGroup wide" :error="true" error-messages="validaiton 문구 들어갑니다.">
                  <v-radio label="라디오1" class="cmp-form-radio"></v-radio>
                  <v-radio label="라디오2" class="cmp-form-radio"></v-radio>
                  <v-radio label="라디오3" class="cmp-form-radio"></v-radio>
                </v-radio-group>
              </div>
            </v-layout>
            <v-layout row align-start justify-space-between class="form-guide-sub-cnt">
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">세로</h3>
                <v-radio-group v-model="rodioModel1" column class="cmp-form-radioGroup">
                  <v-radio label="라디오1" class="cmp-form-radio"></v-radio>
                  <v-radio label="라디오2" class="cmp-form-radio"></v-radio>
                  <v-radio label="라디오3" class="cmp-form-radio"></v-radio>
                </v-radio-group>
              </div>
            </v-layout>
          </div>
          <!-- //radio -->

          <!-- radio line -->
          <div class="form-guide-cnt">
            <h2 class="form-guide-tit">radio 라인 타입</h2>
            <div class="cmp-line-radio">
              <div class="radio-item">
                <input id="sizeSelect0" type="radio" name="sizeSelect" />
                <label for="sizeSelect0">타이트한</label>
              </div>
              <div class="radio-item">
                <input id="sizeSelect1" type="radio" name="sizeSelect" />
                <label for="sizeSelect1">적당한</label>
              </div>
              <div class="radio-item">
                <input id="sizeSelect2" type="radio" name="sizeSelect" />
                <label for="sizeSelect2">여유있는</label>
              </div>
            </div>
          </div>
          <!-- //radio line -->

          <!-- file input -->
          <div class="form-guide-cnt">
            <h2 class="form-guide-tit">file input</h2>
            <v-layout row align-start justify-space-between class="form-guide-sub-cnt">
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">버튼</h3>
                <div class="cmp-form-file">
                  <input id="fileUpload" type="file" />
                  <label for="fileUpload">사진첨부</label>
                </div>
              </div>
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">리스트</h3>
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
              </div>
            </v-layout>
          </div>
          <!-- //file input -->

          <div class="form-guide-cnt">
            <h2 class="form-guide-tit">counting box</h2>
            <v-layout row align-start justify-space-between class="form-guide-sub-cnt">
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">기본(max 설정)</h3>
                <CommonCountingBox max="10"></CommonCountingBox>
              </div>
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">min(최소 선택 수량) 설정</h3>
                <CommonCountingBox min="2" max="10" count="5"></CommonCountingBox>
              </div>
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">disabled</h3>
                <CommonCountingBox max="10" disabled></CommonCountingBox>
              </div>
              <div class="guide-flex-cnt">
                <h3 class="form-guide-sub-tit">수량 1개</h3>
                <CommonCountingBox max="1"></CommonCountingBox>
              </div>
            </v-layout>
          </div>

          <!-- form box -->
          <div class="form-guide-cnt">
            <h2 class="form-guide-tit">form box</h2>
            <!-- cmp-form-boxGroup : cmp-form-box 간격 설정 용/cmp-form-box 사용 시 필수 아님 -->
            <div class="cmp-form-boxGroup">
              <div class="cmp-form-box">
                <p class="form-tit">타이틀</p>
                <CommonSelectBox title="타이틀">
                  <template #optionList>
                    <option value="option1">옵션1</option>
                  </template>
                </CommonSelectBox>
              </div>
              <div class="cmp-form-box required">
                <p class="form-tit">필수항목</p>
                <CommonSelectBox title="타이틀">
                  <template #optionList>
                    <option value="option1">옵션1</option>
                  </template>
                </CommonSelectBox>
              </div>
              <div class="cmp-form-box valid">
                <p class="form-tit">form box 에러</p>
                <CommonSelectBox title="타이틀" :error="true">
                  <template #optionList>
                    <option value="option1">옵션1</option>
                  </template>
                </CommonSelectBox>
                <p class="validation-text">validation 문구가 들어갑니다.</p>
              </div>
            </div>
          </div>
          <!-- // -->

          <!-- 케이스 모음 -->
          <div class="form-guide-cnt required">
            <h2 class="form-guide-tit">form 케이스 모음</h2>
            <!-- 버튼 포함 인풋 -->
            <h3 class="form-guide-sub-tit">버튼 포함 form</h3>
            <div class="cmp-form-btnBox">
              <v-text-field type="text" outlined label="label 문구" clearable class="cmp-form-input"></v-text-field>
              <v-btn outlined color="normal">변경</v-btn>
            </div>
            <!-- 날짜 검색 -->
            <h3 class="form-guide-sub-tit">날짜 검색</h3>
            <CommonCalendarBox />
            <div class="pt-20"></div>
            <v-layout row align-center justify-space-between>
              <div class="cmp-line-radio">
                <div class="radio-item">
                  <input id="dateRadio0" type="radio" name="dateRadio" checked />
                  <label for="dateRadio0">1주일</label>
                </div>
                <div class="radio-item">
                  <input id="dateRadio1" type="radio" name="dateRadio" />
                  <label for="dateRadio1">1개월</label>
                </div>
                <div class="radio-item">
                  <input id="dateRadio2" type="radio" name="dateRadio" />
                  <label for="dateRadio2">3개월</label>
                </div>
              </div>
              <CommonCalendarBox :d1="'2022-07-20'" :d2="'2022-07-28'"/>
            </v-layout>
            <!-- //날짜 검색 -->
            
            <!-- col Box -->
            <h3 class="form-guide-sub-tit">col Box</h3>
            <div class="cmp-form-colBox type2">
              <CommonSelectBox title="타이틀">
                <template #optionList>
                  <option value="option1">옵션1</option>
                </template>
              </CommonSelectBox>
              <CommonSelectBox title="타이틀">
                <template #optionList>
                  <option value="option1">옵션1</option>
                </template>
              </CommonSelectBox>
            </div>
            <div class="cmp-form-colBox type2">
              <CommonSelectBox id="birth000" title="년" class="type1" :error="formBoxErrorTest">
                <template #optionList>
                  <option value="placeholder">생년</option>
                  <option>2000</option>
                  <option>2001</option>
                  <option>2002</option>
                </template>
              </CommonSelectBox>
              <CommonSelectBox id="birth010" title="월" class="type1" :error="formBoxErrorTest">
                <template #optionList>
                  <option value="placeholder">월</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </template>
              </CommonSelectBox>
              <CommonSelectBox id="birth020" title="일" class="type1" :error="formBoxErrorTest">
                <template #optionList>
                  <option value="placeholder">일</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </template>
              </CommonSelectBox>
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
              <v-text-field type="text" outlined label="가운데 번호 입력" clearable class="cmp-form-input label-hide" :error="formBoxErrorTest"></v-text-field>
              <v-text-field type="text" outlined label="뒷자리 번호 입력" clearable class="cmp-form-input label-hide" :error="formBoxErrorTest"></v-text-field>
            </div>
            <!-- //col Box -->
            <!-- 이메일 -->
            <h3 class="form-guide-sub-tit">이메일</h3>
            <div class="cmp-form-emailBox">
              <div class="email-box">
                <v-text-field label="이메일 입력" outlined clearable class="cmp-form-input label-hide" :error="formBoxErrorTest"></v-text-field>
                <div class="btw-txt">@</div>
                <CommonSelectBox id="selectId5" title="도메인 선택" @submit="dominFieldSet">
                  <template #optionList>
                    <option value="placeholder">직접입력</option>
                    <option value="naver.com">naver.com</option>
                    <option value="gmail.com">gmail.com</option>
                    <option value="daum.net">daum.net</option>
                    <option value="kakao.com">kakao.com</option>
                    <option value="nate.com">nate.com</option>
                    <option value="outlook.com">outlook.com</option>
                    <option value="hotmail.com">hotmail.com</option>
                    <option value="direct">직접입력</option>
                  </template>
                </CommonSelectBox>
              </div>
              <v-text-field v-if="domainDirectFieldShow" outlined label="이메일을 입력해 주세요." clearable class="cmp-form-input" :error="formBoxErrorTest"></v-text-field>
            </div>
            <!-- //이메일 -->
            <!-- 주소 -->
            <h3 class="form-guide-sub-tit">주소</h3>
            <div class="cmp-form-addressBox">
              <div class="cmp-form-btnBox">
                <v-text-field type="text" value="05402" outlined label="우편번호를 입력해 주세요." clearable class="cmp-form-input"></v-text-field>
                <v-btn outlined color="normal">우편번호 찾기</v-btn>
              </div>
              <v-text-field type="text" value="서울특별시 강동구 강동대로 195" readonly outlined label="주소를 입력해 주세요." clearable class="cmp-form-input"></v-text-field>
              <v-text-field type="text" value="한섬빌딩" outlined label="상세 주소를 입력해 주세요." clearable class="cmp-form-input"></v-text-field>
              <v-checkbox label="기본배송지로 설정" class="cmp-form-checkbox"></v-checkbox>
            </div>
            <!-- //주소 -->
            <!-- 검색 -->
            <h3 class="form-guide-sub-tit">검색</h3>
            <div class="cmp-form-searchBox">
              <v-text-field label="상품, 브랜드명, 상품코드를 입력해주세요." clearable class="cmp-form-input"></v-text-field>
              <v-btn icon>
                <i class="cmp-icon i-search">검색</i>
              </v-btn>
            </div>
            <!--// 검색 -->
          </div>
           <!-- //케이스 모음 -->
            
          <!-- 예시 -->
          <div class="form-guide-cnt">
            <h2 class="form-guide-tit">예시</h2>
            <div class="cmp-form-boxGroup">
              <div class="cmp-form-box required">
                <p class="form-tit">배송지명</p>
                <v-text-field v-model="model1" :rules="model1Rules" outlined type="text" value="회사주소지" label="" clearable class="cmp-form-input"></v-text-field>
              </div>
              <div class="cmp-form-box required" :class="{valid:formBoxErrorTest}">
                <p class="form-tit">휴대폰번호</p>
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
                  <v-text-field type="text" outlined label="가운데 번호 입력" clearable class="cmp-form-input label-hide" :error="formBoxErrorTest"></v-text-field>
                  <v-text-field type="text" outlined label="뒷자리 번호 입력" clearable class="cmp-form-input label-hide" :error="formBoxErrorTest"></v-text-field>
                </div>
                <p class="validation-text">validation 문구가 들어갑니다.</p>
              </div>
              <div class="cmp-form-box" :class="{valid:formBoxErrorTest}">
                <p class="form-tit">이메일</p>
                <div class="cmp-form-emailBox">
                  <div class="email-box">
                    <v-text-field label="이메일 입력" outlined clearable class="cmp-form-input label-hide" :error="formBoxErrorTest"></v-text-field>
                    <div class="btw-txt">@</div>
                    <CommonSelectBox id="selectId5" title="도메인 선택" @submit="dominFieldSet">
                      <template #optionList>
                        <option value="placeholder">직접입력</option>
                        <option value="naver.com">naver.com</option>
                        <option value="gmail.com">gmail.com</option>
                        <option value="daum.net">daum.net</option>
                        <option value="kakao.com">kakao.com</option>
                        <option value="nate.com">nate.com</option>
                        <option value="outlook.com">outlook.com</option>
                        <option value="hotmail.com">hotmail.com</option>
                        <option value="direct">직접입력</option>
                      </template>
                    </CommonSelectBox>
                  </div>
                  <v-text-field v-if="domainDirectFieldShow" outlined label="이메일을 입력해 주세요." clearable class="cmp-form-input" :error="formBoxErrorTest"></v-text-field>
                </div>
                <p class="validation-text">validation 문구가 들어갑니다.</p>
              </div>
            </div>
          </div>
          <!-- // -->

          <!--  -->
          <!-- <div class="form-guide-cnt">
            <h2 class="form-guide-tit"></h2>
          </div> -->
          <!-- // -->
          
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  components : {
  },
  layout: 'publish',
  data: () => ({
    model1: '',
    model1Rules: [(v) => !!v || 'validation 문구 들어갑니다.'],
    model2: '',
    model2Rules: [(v) => !!v || 'validation 문구 들어갑니다.'],
    model3: '',
    model3Rules: {
      length: (len) => (v) =>
        (v || '').length <= len || `[test]최대 ${len}글자까지 입력 가능합니다.`,
    },
    model4: '',
    model4Rules:[
      v => (v && v.length >= 10) || 'Password must be between 8 and 30 characters, including letters, numbers and special characters.',
      v => (v && v.length < 10) || 'Password has been verified'
    ],
    rodioModel0 : 0,
    rodioModel1 : 0,
    optionSizeData : {
      select_idx : null,
      list : [
        {
          size_en : 'S',
          size_num : '82',
          state_msg : '소량재고',
          sold_out : false,
        },
        {
          size_en : 'M',
          size_num : '88',
          state_msg : '',
          sold_out : false,
        },
        {
          size_en : 'L',
          size_num : '94',
          state_msg : '',
          sold_out : false,
        },
        {
          size_en : 'XL',
          size_num : '100',
          state_msg : '재입고알림',
          sold_out : true,
        },
        {
          size_en : '2XL',
          size_num : '110',
          state_msg : '',
          sold_out : true,
        },
        {
          size_en : 'FREE',
          size_num : '',
          state_msg : '',
          sold_out : false,
        },
      ]
    },
    attachFileList : [
      'https://img.thehandsome.com/md/publish/dummy/attach-file-img0.png',
      'https://img.thehandsome.com/md/publish/dummy/attach-file-img1.png',
    ],
    formBoxErrorTest: false,
    domainDirectFieldShow: false, // 이메일 직접 입력
    couponData : {
      product_name : 'CLUB MONACO 로고 자수 스웹셔츠',
      select_idx : null,
      list : [
        '[THE클럽] STAR 스페셜 바우처',
        '핸썸티비 태그사푸 10%+5% (2021.12.15~2021.12.31)',
        '남성의류 정상 7% 쿠폰 (2021.12.15~2021.12.31)',
        '신규회원 전용 정상 15% 쿠폰(앱전용) 2021.12.15~ 2021.12.31)',
      ]
    }
  }),
  watch:{
    
  },
  mounted() {
    const me = this
    me.checkDevMode()
  },
  methods: {
    validateTest(){ // 퍼블 테스트
      const me = this
      me.inputModelReset()
      me.$refs.form.validate()
      me.model3 = '가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차카'
      me.formBoxErrorTest = true
    },
    resetValidateTest(){ // 퍼블 테스트
      const me = this
      me.inputModelReset()
      me.$refs.form.resetValidation()
      me.formBoxErrorTest = false
    },
    inputModelReset(){ // 퍼블 테스트
      const me = this
      me.model1 = ''
      me.model2 = ''
      me.model3 = ''
    },
    dominFieldSet(val) {
      if (val === 'direct') this.domainDirectFieldShow = true
      else this.domainDirectFieldShow = false
    },
  },
}
</script>

<style lang="scss" scoped>
.content-wrap{padding-bottom:100px;}
.form-test-btn{position:fixed;left:0;top:0;width:auto;background:#fff;padding:20px;z-index:3;}
.form-guide-box{position:relative;min-height:100%;width:1200px;margin:0 auto;text-align:left;box-sizing:border-box;padding:0 50px;}
.form-guide-cnt{
  &:not(:last-child){margin-bottom:40px;}
}
.form-guide-sub-cnt{
  .guide-flex-cnt{
    flex:1;margin-top:20px;
    &:not(:last-child){margin-right:20px;}
    .cmp-form-input + .cmp-form-input{margin-top:10px;}
    .form-guide-sub-tit{margin-top:0;}
  }
  & + .form-guide-sub-cnt{margin-top:30px;}
}
.form-guide-tit{font-size:2rem;line-height:1em;margin-bottom:20px;box-sizing:border-box;background:#f5f5f5;padding:15px 20px;}
.form-guide-sub-tit{font-size:1.8rem;line-height:1em;font-weight:normal;margin-bottom:20px;margin-top:30px;}
</style>
