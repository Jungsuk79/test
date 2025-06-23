<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <ContentsLeftMenu :title="'마이페이지'" :left-data="menuList" :active="'/ko/HC/handsomeCare'"></ContentsLeftMenu>

      <div class="my-page-r-box hansomecare-application">
        <div class="cmp-page-tit">
          <h2 class="tit">케어플러스 세탁 신청하기</h2>
        </div>

        <div class="section-wrapper">
          <!-- 상품 수거 및 수령방식 선택 -->
          <div class="section-box">
            <div class="cmp-sub-tit line mb-24">
              <h3 class="tit">신청정보</h3>
            </div>

            <div class="cmp-sub-tit small">
              <h3 class="tit">상품 수거 및 수령방식 선택</h3>
            </div>

            <v-radio-group v-model="productSelect" row class="cmp-form-radioGroup">
              <v-radio label="앳홈" class="cmp-form-radio mr-40" :value="0"></v-radio>
              <v-radio label="택배"  class="cmp-form-radio mr-40" :value="1"></v-radio>
              <v-radio label="매장방문" class="cmp-form-radio" :value="2"></v-radio>
            </v-radio-group>
          </div>
          <!-- //상품 수거 및 수령방식 선택 -->

          <!-- 수거일시 -->
          <div class="section-box">
            <!-- [퍼블수정] 22.10.20 수정 -->
            <div v-if="productSelect != '1'" class="cmp-sub-tit small sub-block">
              <h3 class="tit">수거일시</h3>
              <!--앳홈에서만 노출 -->
              <p v-if="productSelect == '0'" class="cmp-font fnt-16 mt-6">앳홈 수거 일자 및 시간을 선택해 주세요.</p>
            </div>

            <!--앳홈에서만 노출 -->
            <table v-if="productSelect == '0'" class="table-type1 last-border">
              <colgroup>
                <col width="auto" />
                <col width="15%" />
                <col width="15%" />
                <col width="15%" />
                <col width="15%" />
                <col width="15%" />
              </colgroup>
              <thead>
                <tr>
                  <th>수거시간</th>
                  <th>월<br />01&#47;17</th>
                  <th>화<br />01&#47;18</th>
                  <th>수<br />01&#47;19</th>
                  <th>목<br />01&#47;20</th>
                  <th>금<br />01&#47;21</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">
                    10:00~12:00
                  </td>
                  <td class="text-center">
                    <v-radio-group v-model="rodioModetime1" row class="cmp-form-radioGroup">
                      <v-radio label="" class="cmp-form-radio" :value="1"></v-radio>
                    </v-radio-group>
                  </td>
                  <td class="text-center">
                    <v-radio-group v-model="rodioModetime1" row class="cmp-form-radioGroup">
                      <v-radio label="" class="cmp-form-radio" :value="2"></v-radio>
                    </v-radio-group>
                  </td>                  
                  <td class="text-center">
                    <p class="cmp-font fnt-14 c-gray">예약마감</p>
                  </td>
                  <td class="text-center">
                    <v-radio-group v-model="rodioModetime1" row class="cmp-form-radioGroup">
                      <v-radio label="" class="cmp-form-radio" :value="4"></v-radio>
                    </v-radio-group>
                  </td>
                  <td class="text-center">
                    <v-radio-group v-model="rodioModetime1" row class="cmp-form-radioGroup">
                      <v-radio label="" class="cmp-form-radio" :value="5"></v-radio>
                    </v-radio-group>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">
                    12:00~18:00
                  </td>
                  <td scope="col">
                    <v-radio-group v-model="rodioModetime1" row class="cmp-form-radioGroup">
                      <v-radio label="" class="cmp-form-radio" :value="6"></v-radio>
                    </v-radio-group>
                  </td>
                  <td class="text-center">
                    <v-radio-group v-model="rodioModetime1" row class="cmp-form-radioGroup">
                      <v-radio label="" class="cmp-form-radio" :value="7"></v-radio>
                    </v-radio-group>
                  </td>                  
                  <td class="text-center">
                    <v-radio-group v-model="rodioModetime1" row class="cmp-form-radioGroup">
                      <v-radio label="" class="cmp-form-radio" :value="8"></v-radio>
                    </v-radio-group>
                  </td>
                  <td class="text-center">
                    <v-radio-group v-model="rodioModetime1" row class="cmp-form-radioGroup">
                      <v-radio label="" class="cmp-form-radio" :value="9"></v-radio>
                    </v-radio-group>
                  </td>
                  <td class="text-center">
                    <v-radio-group v-model="rodioModetime1" row class="cmp-form-radioGroup">
                      <v-radio label="" class="cmp-form-radio" :value="10"></v-radio>
                    </v-radio-group>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">
                    18:00~21:00
                  </td>
                  <td class="text-center">
                    <v-radio-group v-model="rodioModetime1" row class="cmp-form-radioGroup">
                      <v-radio label="" class="cmp-form-radio" :value="11"></v-radio>
                    </v-radio-group>
                  </td>
                  <td class="text-center">
                    <v-radio-group v-model="rodioModetime1" row class="cmp-form-radioGroup">
                      <v-radio label="" class="cmp-form-radio" :value="12"></v-radio>
                    </v-radio-group>
                  </td>                  
                  <td class="text-center">
                    <v-radio-group v-model="rodioModetime1" row class="cmp-form-radioGroup">
                      <v-radio label="" class="cmp-form-radio" :value="13"></v-radio>
                    </v-radio-group>
                  </td>
                  <td class="text-center">
                    <v-radio-group v-model="rodioModetime1" row class="cmp-form-radioGroup">
                      <v-radio label="" class="cmp-form-radio" :value="14"></v-radio>
                    </v-radio-group>
                  </td>
                  <td class="text-center">
                    <v-radio-group v-model="rodioModetime1" row class="cmp-form-radioGroup">
                      <v-radio label="" class="cmp-form-radio" :value="15"></v-radio>
                    </v-radio-group>
                  </td>
                </tr>
              </tbody>
            </table>

            <!-- [퍼블수정] 22.10.20 수정 -->
            <ul class="text-list" :class="{ 'mt-0' : productSelect == '1'}">
              <li>
                <span class="chip">수거</span>
                <!-- eslint-disable -->
                <p v-html="newLine(guideText[productSelect].pickup)"></p>
                <!-- eslint-disable -->
              </li>
              <li>
                <span class="chip">수령</span>
                <!-- eslint-disable -->
                <p v-html="newLine( guideText[productSelect].receive)"></p>
                <!-- eslint-disable -->
              </li>
            </ul>
          </div>
          <!-- //수거일시 -->

          <!-- 수거/수령지(앳홈 , 택배에서만 노출) -->
          <div v-if="productSelect != '2'" class="section-box">
            <div class="contents-line-box">
              <div class="cmp-sub-tit small">
                <h4 class="tit">수거/수령지</h4>
                <button class="cmp-font fnt-14 button">
                  <!--입력 -->
                  수정<i v-cmp-icon="{size:12,name:'next'}"></i>
                </button>
              </div>
              <!-- 입력 전 -->
              <!--<p class="cmp-font c-gray">배송지 정보를 입력해 주세요.</p>-->
              <!-- //입력 전 -->
              <!-- 입력 후 -->
              <v-layout row align-center justify-start>
                <p class="cmp-label-line c-blue mr-10">기본배송지</p>
                <p class="cmp-font">홍길동 / 010-1234-5678</p>
              </v-layout>
              <p class="cmp-font mt-6">[06577] 서울 강남구 언주로 170길 28 (강남구, 스페이스데코빌딩) 3층 201호 </p>
              <!-- //입력 후 -->
            </div>
          </div>  
          <!-- //수거/수령지 -->

          <!--수거/수령 요청사항(앳홈 , 택배에서만 노출)-->
          <div v-if="productSelect != '2'" class="section-box">
            <div class="contents-line-box">
              <div class="cmp-sub-tit small">
                <h4 class="tit">수거/수령 요청사항</h4>
                <button class="cmp-font fnt-14 button">
                  <!--입력 -->
                  수정<i v-cmp-icon="{size:12,name:'next'}"></i>
                </button>
              </div>
              <!-- 입력 전 -->
              <!--<p class="cmp-font c-gray">수거/수령 요청사항을 선택해 주세요.</p>-->
              <!-- //입력 전 -->
              <p class="cmp-font">
                문 앞에 둘게요. / 문 앞에 놓아주세요.
                <br>공동현관 출입번호(****)
              </p>

              <div class="cmp-info info-type3 mt-20">
                <p class="cmp-font fnt-14">해당 수거/수령지는 ‘택배 또는 매장 수거 및 수령’만 가능합니다.</p>
                <p class="cmp-font fnt-14 mt-10">앳홈 가능지역 : 강남구, 강동구, 동작구, 마포구, 서초구, 송파구, 영등포구, 용산구</p>
              </div>
            </div>
          </div>
          <!--//수거/수령 요청사항-->

          <!--수거/수령매장(매장방문에서만 노출)-->
          <!-- [퍼블수정] 22.10.20 수정 -->
          <div v-if="productSelect == '2'" class="section-box pb-0">
            <div class="cmp-sub-tit small line">
              <h4 class="tit">수거/수령매장</h4>
            </div>

            <div class="store-select-box">
              <div v-for="(item, index) in storeList" :key="index" class="store-select-cnt">
                <!-- 기본 정보 -->
                <div class="store-info-cnt">
                  <v-radio-group v-model="radioModeStore" column class="cmp-form-radioGroup">
                    <v-radio 
                      :value="index" class="cmp-form-radio" 
                      @click="storeList[index].date_select_open = !storeList[index].date_select_open"
                      @change="accoReset"
                    >
                      <template #label>
                        <div class="txt0"><strong>{{item.name}}</strong></div>
                        <div class="txt1">{{item.address}}</div>
                        <div class="txt2">{{item.number}}</div>
                      </template>
                    </v-radio>
                  </v-radio-group>
                  <button class="map-btn" @click="storeList[index].map_open = !storeList[index].map_open">
                    <i v-show="storeList[index].map_open" v-cmp-icon="{ name: 'locon' }">지도보기 닫기</i>
                    <i v-show="!storeList[index].map_open" v-cmp-icon="{ name: 'locoff' }">지도보기 열기</i>
                  </button>
                </div>
                <!-- //기본 정보 -->
                <!-- 지도 -->
                <div v-if="item.date_select_open || item.map_open" class="date-map-cnt">
                  <!-- 지도 -->
                  <div v-if="item.date_select_open || item.map_open" class="area-map">
                    <div style="height:100%;background: url('https://img.thehandsome.com/md/publish/dummy/pc/map.png')  no-repeat center center / cover;"></div> <!-- 다음지도API -->
                  </div>
                  <!-- //지도 -->
                </div>
                <!-- //지도 -->
              </div>
            </div>
          </div>
          <!--//수거/수령매장(매장방문에서만 노출)-->

          <!--연락처-->
          <div class="section-box">
            <div class="cmp-sub-tit small">
              <h4 class="tit">연락처</h4>
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

          <!--세탁상품-->
          <div class="section-box pt-60">
            <div class="cmp-sub-tit line">
              <h4 class="tit">세탁상품</h4>
            </div>

            <!-- 선택 상품 리스트 -->
            <ul class="item-list">
              <li>
                <v-layout justify-space-between align-center class="item-header">
                  <h4>상품</h4>
                  <button v-cmp-icon="{size : 18, name : 'close', type : 'before'}" type="button" ></button>
                </v-layout>

                <div class="item-number"><strong>TM2C0QOT001WM1BK90</strong></div>
                <v-layout justify-space-between align-center class="cmp-info info-type3">
                  <p>반코트, 패딩반코트</p>
                  <p><strong>36,000</strong>원</p>
                </v-layout>

                <div class="item-cont">
                  <div class="cmp-sub-tit small">
                    <h4 class="tit">요청사항</h4>
                  </div>

                  <v-textarea v-model="model1" outlined label="상품 케어 시 요청사항을 입력해주세요 (선택)" :no-resize="true" :rules="[model1Rules.length(500)]" counter="500" maxlength="500" height="210" class="cmp-form-textarea counting"></v-textarea>

                  <v-layout justify-start align-center class="item-file mb-24">
                     <div class="cmp-form-file">
                      <input id="fileUpload" type="file" />
                      <label for="fileUpload">사진첨부</label>
                    </div>
                    <p class="cmp-font fnt-14">10MB 이하의 jpg, gif, png 파일 / 최대 3개 첨부가능</p>
                  </v-layout>
                </div>
              </li>
              <li>
                <v-layout justify-space-between align-center class="item-header">
                  <h4>상품</h4>
                  <button v-cmp-icon="{size : 18, name : 'close', type : 'before'}" type="button" ></button>
                </v-layout>

                <div class="item-number"><strong>SJSJ 레터링 데님 집업 드레스</strong></div>
                <v-layout justify-space-between align-center class="cmp-info info-type3">
                  <p>반코트, 패딩반코트</p>
                  <p><strong>36,000</strong>원</p>
                </v-layout>

                <div class="item-cont">
                  <div class="cmp-sub-tit small">
                    <h4 class="tit">요청사항</h4>
                  </div>

                  <v-textarea v-model="model2" outlined label="상품 케어 시 요청사항을 입력해주세요 (선택)" :no-resize="true" :rules="[model2Rules.length(500)]" counter="500" maxlength="500" height="210" class="cmp-form-textarea counting"></v-textarea>

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
                  </v-layout>
                </div>
              </li>
            </ul>
            <!-- //선택 상품 리스트 -->

            <div class="cmp-btnsArea center-area">
              <v-btn outlined large color="primary">상품추가</v-btn>
            </div>

            <ul class="cmp-dotList mt-24">
              <!-- [퍼블수정]23.02.22 세탁 내용 수정 -->
              <li>한섬 브랜드 대상으로 제공되는 서비스입니다.</li>
              <li>신청 품목과 실제 품목이 상이할 경우, 또는 세탁불가 품목 신청 시 해당 상품은 세탁이 진행되지 않고 수거 및 수령방식에 따라 세탁 완료 상품과 함께 배송됩니다.</li>
              <!-- [퍼블수정]24.01.09 세탁 서비스 안내문구 수정 -->
              <li class="c-point">구매 후 3년 초과된 상품은 세탁 서비스 이용이 불가합니다.</li>
            </ul>

            <button class="cmp-font button mt-24">세탁 불가 상품보기 <i class="cmp-icon cmp-icon-12 i-next"></i></button>
          </div>
          <!--//세탁상품-->

          <!--포장박스 수량-->
          <div class="section-box">
            <div class="cmp-sub-tit small">
              <h4 class="tit">포장박스 수량</h4>
            </div>

            <CommonCountingBox max="10"></CommonCountingBox>
            <ul class="cmp-dotList mt-20">
              <li>수거 및 수령 방식이 택배인 경우에 박스포장을 기본으로 하며, 택배사 운송장 발부를 위해 박스 개수를 정확하게 입력해주세요.</li>
              <li>케어플러스 세탁 서비스 신청시 결제금액은 담당자 검수완료 후 실 결제금액이 확정되며, 검수결과에 따라 최종 결제금액이 변경 될 수 있습니다.</li>
              <li>바우처는 케어플러스 세탁 서비스 결제시 사용하실 수 있으며, 바우처 사용시 세탁비 및 배송비 모두 무료로 서비스를 이용하실 수 있습니다.</li>
            </ul>
          </div>
          <!--//포장박스 수량-->
        </div>

        <!-- [241126] 개인정보수집/이용동의개선 --> 
        <p class="cmp-font fnt-14 mt-24">고객(정보주체)의 개인정보보호 및 권리는 「개인정보보호법」 및관계 법령에 따라 안전하게 관리하고 있습니다.<br />
          자세한 사항은 <button class="cmp-font fnt-14 button"><span class="line">더한섬닷컴 개인정보처리방침</span></button>에서 확인할 수 있습니다.
        </p>
        
        <!-- <div class="checkbox-cont">
          <v-checkbox class="cmp-form-checkbox align-center">
            <template #label>
            세탁서비스 이용자 동의<i class="cmp-icon cmp-icon-12 i-next"></i>
            </template>
          </v-checkbox>
        </div> -->
        <!-- [퍼블수정] 24.06.18 수정 케어플러스 세탁 보관 서비스 개선-->

        <!-- [241126] 개인정보수집/이용동의개선 --> 
        <div class="checkbox-cont mt-24">
          <v-checkbox class="cmp-form-checkbox align-center">
            <template #label>
            (선택) 서비스 만족도 조사 진행 동의
            </template>
          </v-checkbox>
        </div>
        <v-layout row align-center justify-start class="checkbox-cont mt-16">
          <v-checkbox class="cmp-form-checkbox align-center">
            <template #label>
              (선택) 보관 서비스 이용 동의
            </template>
          </v-checkbox>
          <CommonTooltipBox class="ml-4">
            <template #content>
              <ul class="cmp-list list-dotType">
                <li>세탁물이 “보관중”상태로 변경되었을 때, 보관기간을 변경하실 수 있습니다.</li>
                <li>보관기간 종료 시, 세탁 시 선택하셨던, 수거 및 수령 방법 (앳홈/택배/매장방문)으로만 수령 가능합니다.</li>
              </ul>
            </template>
          </CommonTooltipBox>
        </v-layout>
        <ul class="cmp-list list-dotType ml-20 pl-6 mt-16">
          <li>STAR, THE STAR 고객님만을 위한 보관 서비스입니다.</li>
          <li>세탁완료 후, 최소 3개월~최대6개월간 보관하실 수 있습니다.</li>
        </ul>
        <!-- //[퍼블수정] 24.06.18 수정 케어플러스 세탁 보관 서비스 개선-->
        <div class="cmp-btnsArea center-area">
          <v-btn large color="primary" @click="checkedSubscription">신청하기</v-btn>
        </div>
      </div>
    </div>

    <!-- 세탁 보관신청 안내 팝업-->
    <v-dialog v-model="isPopSubscription">
      <DialogBasic class="popup-message" header-title="보관 서비스를 신청하시겠습니까?" @hide="closeDialog">
        <template #body><!-- class="inner" 삭제함 -->
          <p class="msg-sub-txt">세탁완료 이후 바로 보관이 이뤄지며<br />최소 3개월 ~ 최대 6개월 간 보관됩니다.</p>
          <div class="popup-btn-box fit">
            <v-btn outlined large color="primary" @click="closeDialog">아니요</v-btn>
            <v-btn large color="primary" @click="closeDialog">보관 신청하기</v-btn>
          </div>
        </template>
      </DialogBasic>
    </v-dialog>

  </div>
</template>

<script>
import ContentsLeftMenu from '~/components/common/ContentsLeftMenu'
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  components: {
    ContentsLeftMenu,
    DialogBasic
  },
  layout: 'LayoutBasics',
  data: () => ({
    isPopSubscription: false,  // 세탁 보관 신청 팝업 상태값

     productSelect : 0,
     rodioModetime1 : 0 ,
     paymentSelect :0,
     guideText: [
      {
        pickup : '더한섬닷컴에서 고객님이 원하는 날짜 <span>[01.17, 오전 10:00~12:00]</span>에 방문하여 수거예정입니다.',
        receive : '세탁 완료 후, 더한섬닷컴 전문 상담사가 고객님과의 유선 연결을 통해 고객님이 원하시는 날짜를 확인 후 배송 예정입니다.',
      },
      {
        pickup : '세탁 품목을 박스에 담아 주시면, 택배사에서 1~2일 내 방문하여 수거 예정입니다.',
        receive : '세탁 완료 후, 수거지와 동일한 주소로 배송예정 입니다.',
      },
      {
        pickup : '온라인 신청 후 한섬하우스 내 그린어스 매장으로 직접 방문하여 세탁 상품을 신청 후 3일~5일 이전에 방문하여 전달해 주시기 바랍니다.',
        receive : '세탁 완료 시 발송된 매장도착 알림 확인 후 동일 매장으로 방문하시면 됩니다.',
      },
    ],
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
    },

    closeDialog() {
      this.isPopSubscription = false
    },
    checkedSubscription() {
      this.isPopSubscription = true
    }
    
  },
}
</script>
<style lang="scss">
  @import '@/assets/scss/pages/mypage.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
