<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <ContentsLeftMenu :title="'마이페이지'" :left-data="menuList" :active="'/ko/HC/handsomeCare'"></ContentsLeftMenu>

      <div class="my-page-r-box hansomecare-application">
        <div class="cmp-page-tit line">
          <h2 class="tit">케어플러스 세탁 상세보기</h2>
        </div>

        <div class="section-wrapper">
          <!-- 상태바 -->
          <div v-if="iconVer" class="apply-complete">
            <i class="cmp-icon-etc cmp-icon-120 i-cancel"></i>
            <p class="cmp-font fnt-20">상품이 반송처리 되었습니다.</p>
            <!-- <p class="cmp-font fnt-20">접수가 취소되었습니다.</p> -->
            <button class="cmp-font fnt-13 button pt-0 mt-6"><span class="line">배송조회</span></button>
          </div>
          <div v-else class="cmp-order-state">
            <div class="state-area">
              <ul>
                <li
                  v-for="(item, index) in stateText1"
                  :key="index"
                  :class="{ active: item.id == stepActive }"
                >
                  <div class="txt">
                    <span>{{ item.name }}</span>
                  </div>
                </li>
              </ul>
            </div>
            <!-- [퍼블수정] 22.10.20 상태 별 문구 삽입 -->
            <div v-if="stepActive == '1'" class="text-center">
              <p class="cmp-font fnt-20 mt-10">01.17, 오전 10:00~12:00 방문하여 수거예정입니다.</p>
              <!-- <p class="cmp-font fnt-20 mt-10">택배사에서 수거예정입니다.</p> -->
              <!-- <p class="cmp-font fnt-20 mt-10">3일~5일 이내 매장으로 방문하여<br/>세탁물을 전달해 주시기 바랍니다.</p> -->
              <button class="cmp-font fnt-13 button mt-6"><span class="line">접수취소</span></button>
            </div>
            <div v-if="stepActive == '2'" class="text-center"> 
              <p class="cmp-font fnt-20 mt-10">세탁 상품이 입고되어 전문가가 검수중입니다.</p>
            </div>
            <div v-if="stepActive == '3'" class="text-center"> 
              <p class="cmp-font fnt-20 mt-10">검수결과 및 결제정보를 확인하고 결제해 주세요.</p>
              <!-- <p class="cmp-font fnt-20 mt-10">결제가 완료되었습니다.</p> -->
            </div>
            <div v-if="stepActive == '4'" class="text-center"> 
              <p class="cmp-font fnt-20 mt-10">상품 세탁이 진행중입니다.</p>
            </div>
            <div v-if="stepActive == '5'" class="text-center"> 
              <p class="cmp-font fnt-20 mt-10">1월17일, 오전 10:00~12:00 방문예정입니다.</p>
            </div>
          </div>
          <!-- //상태바 -->
          <!-- // [퍼블수정] 22.10.20 상태 별 문구 삽입 -->

          <!--주문번호-->  
          <div class="order-number-box">
            <div class="line-box">
              <p class="cmp-font fnt-16">신청번호<span class="ml-8">211222P12345678</span></p>
              <p class="cmp-font fnt-14">2021.12.22 13:00</p>
            </div>
          </div>
          <!--//주문번호-->  

          <!--세탁상품-->
          <!-- [퍼블수정] 22.10.20 타이틀 수정 -->
          <div class="section-box pt-40">
            <div class="cmp-sub-tit small line">
              <h4 class="tit">세탁상품 1건</h4>
              <p v-if="stepActive >= 3" class="cmp-font fnt-16 c-red">세탁 신청 2건, 세탁불가 1건</p>
            </div>

            <!-- 선택한 상품 리스트 -->
            <ul class="item-list">
              <li>
                <div class="item-number">
                  <strong>TM2C0QOT001WM1BK90</strong>
                  <template v-if="stepActive >= 3">
                    <p class="cmp-font fnt-16 c-blue ml-12">세탁불가</p>
                    <!-- [퍼블수정]22.11.21 툴팁 수정 -->
                    <CommonTooltipBox :tooltip-list="tooltipList.list0" icon-type="info" class="tip-btn" />
                  </template>
                </div>

                <div class="item-cont">
                  <div class="cmp-sub-tit small">
                    <h4 class="tit">요청사항</h4>
                  </div>

                  <div class="item-review">
                    <p v-html="reviewTxt" class="review" :class="{'more':more_view}"></p>
                    <button class="cmp-font fnt-16 button c-gray" @click="more_view=!more_view">
                      <template v-if="more_view">접기</template>
                      <template v-else>더보기</template>
                    </button>
                  </div>

                  <v-layout justify-start align-center class="item-file">
                    <ul class="attach-file-list">
                      <li v-for="(item, index) in attachFileList" :key="index" class="file-cnt">
                        <div class="file">
                          <v-img  :src="item" aspect-ratio="1" alt="첨부 파일"></v-img>
                        </div>
                      </li>
                    </ul>
                  </v-layout>
                </div>
              </li>
            </ul>
            <!-- //선택한 상품 리스트 -->
          </div>
          <!--//세탁상품-->
          <!-- '접수'에만 노출 -->
          <template v-if="stepActive == '1'">
          <!-- 상품 수거 및 수령방식-->
          <div class="section-box">
            <div class="contents-line-box">
              <div class="cmp-sub-tit small">
                <h4 class="tit">상품 수거 및 수령방식</h4>
              </div>

              <!--앳홈-->
              <div>
                <p class="cmp-font bold">앳홈</p>
                <ul class="text-list">
                  <li>
                    <span class="chip">수거</span>
                    <p>더한섬닷컴에서 고객님이 원하는 날짜 <span>[01.17, 오전 10:00~12:00]</span>에 방문하여 수거예정입니다.</p>
                  </li>
                  <li>
                    <span class="chip">수령</span>
                    <p>세탁 완료 후, 더한섬닷컴 전문 상담사가 고객님과의 유선 연결을 통해 고객님이 원하시는 날짜를 확인 후 배송 예정입니다.</p>
                  </li>
                </ul>
              </div>
              <!--//앳홈-->

              <!--택배-->
              <div v-if="false">
                <p class="cmp-font bold">택배</p>
                <p class="cmp-font pt-6">포장박스 수량 (1개)</p>
                <ul class="text-list">
                  <li>
                    <span class="chip">수거</span>
                    <p>세탁 품목을 박스에 담아 주시면, 택배사에서 1~2일 내 방문하여 수거 예정입니다.</p>
                  </li>
                  <li>
                    <span class="chip">수령</span>
                    <p>세탁 완료 후, 수거지와 동일한 주소로 배송될 예정 입니다.</p>
                  </li>
                </ul>
              </div>
              <!--//택배-->

              <!--매장방문-->
              <div v-if="false">
                <p class="cmp-font bold">매장방문</p>
                <ul class="text-list">
                  <li>
                    <span class="chip">수거</span>
                    <p>온라인 신청 후 한섬하우스 내 그린어스 매장으로 직접 방문하여 세탁 상품을 신청 후 3일~5일 이전에 방문하여 전달해 주시기 바랍니다.</p>
                  </li>
                  <li>
                    <span class="chip">수령</span>
                    <p>세탁 완료 시 발송된 매장도착 알림 확인 후 동일 매장으로 방문하시면 됩니다.</p>
                  </li>
                </ul>
              </div>
              <!--//매장방문-->
             </div>
          </div>  
          <!-- //상품 수거 및 수령방식 -->

          <!-- 수거/수령지-->
          <div class="section-box">
            <div class="contents-line-box">
              <div class="cmp-sub-tit small">
                <h4 class="tit">수거/수령지</h4>
              </div>
              <v-layout row align-center justify-start>
                <p class="cmp-font">홍길동 / 010-1234-5678</p>
              </v-layout>
              <p class="cmp-font mt-6">[06577] 서울 강남구 언주로 170길 28 (강남구, 스페이스데코빌딩) 3층 201호 </p>
            </div>
          </div>  
          <!-- //수거/수령지 -->

          <!--수거/수령 요청사항-->
          <div class="section-box">
            <div class="contents-line-box">
              <div class="cmp-sub-tit small">
                <h4 class="tit">수거/수령 요청사항</h4>
              </div>
              <p class="cmp-font">
                부재 시 문 앞에 놓아주세요
                <br>공동현관 출입번호(****)
              </p>
            </div>
          </div>
          <!--//수거/수령 요청사항-->

          <!--수거/수령매장(매장방문에서만 노출)-->
          <div v-if ="false" class="section-box">
            <div v-for="(item, index) in storeList" :key="index" class="contents-line-box">
              <div class="cmp-sub-tit small">
                <h4 class="tit">수거/수령매장</h4>
              </div>
              <v-layout row align-center justify-space-between>
                <div>
                  <p class="cmp-font bold">{{item.name}}</p>
                  <p class="cmp-font fnt-14 mt-6">{{item.address}}</p>
                </div>
                <div class="store-box">
                  <span v-cmp-icon="{size : 24, name : 'contact', type : 'before'}">02-1234-5678</span>
                  <!-- <button class="cmp-font fnt-14 button">
                    <span v-cmp-icon="{size : 24, name : 'locoff', type : 'before'}"></span><span class="line">위치보기</span>
                  </button> -->

                  <button class="cmp-font fnt-14 button" @click="storeList[index].map_open = !storeList[index].map_open">
                    <span v-show="storeList[index].map_open" v-cmp-icon="{size : 24, name : 'locon', type : 'before'}"><span class="line">위치보기</span></span>
                    <span v-show="!storeList[index].map_open" v-cmp-icon="{size : 24, name : 'locoff', type : 'before'}"><span class="line">위치보기</span></span>
                   </button>
                </div>
              </v-layout>

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
          <!--//수거/수령매장-->

           <!--연락처-->
          <div class="section-box">
            <div class="cmp-sub-tit small">
              <h4 class="tit">연락처</h4>
            </div>

            <p class="cmp-font fnt-16">010-1234-5678</p>
            
            <p class="cmp-font fnt-14 mt-20">* 해당 번호로 검수 내용을 연락드릴 예정입니다.</p>
          </div>
          <!--//연락처-->
          <!--결제정보-->
          <!-- [퍼블수정]23.02.17 세탁 내용 수정 -->
          <div class="section-box">
            <ul class="cmp-dotList">
              <li>케어플러스 세탁 서비스 신청시 담당자 검수완료 후 신청한 의류 수량에 따라 바우처가 자동 사용됩니다.</li>
              <!-- [퍼블수정]23.02.22 문구수정 -->
              <li>바우처 사용시 세탁비 및 배송비 모두 무료로 서비스를 이용하실 수 있습니다.</li>
            </ul>
          </div>
          <!--결제정보-->
          </template>

          <!-- '결제하기'에만 노출 -->
          <template v-if="stepActive == '3'">
          <!--결제수단-->
          <div class="section-box pt-60">
            <div class="cmp-sub-tit line">
              <h4 class="tit">결제수단</h4>
            </div>

            <div class="section-box">
              <v-radio-group v-model="paymentSelect" row class="cmp-form-radioGroup">
                <v-radio label="케어플러스 세탁 바우처" class="cmp-form-radio"></v-radio>
                <v-radio label="케어플러스 세탁 바우처 + 신용카드" class="cmp-form-radio"></v-radio>
                <v-radio label="신용카드" class="cmp-form-radio"></v-radio>
              </v-radio-group>
            </div>
              
            <div class="cmp-sub-tit small mt-24">
              <h4 class="tit">바우처 <span class="cmp-font fnt-16">(잔여 1장)</span></h4>
            </div>
            <CommonCountingBox max="10"></CommonCountingBox>

            <ul class="cmp-dotList mt-24"><!-- [퍼블수정] 22.10.20 바우처 문구수정 -->
              <li>바우처 1장은 상품 1개에  무료로 사용되며, 결제시 세탁비가 비싼 상품부터 순차적으로 자동 적용됩니다.</li>
              <li>결제단계에서 바우처 기간이 만료된 경우 사용 할 수 없습니다.</li>
              <!-- [퍼블수정]23.02.22 문구수정 -->
              <li>바우처 사용시 세탁비 및 배송비 모두 무료로 서비스를 이용하실 수 있습니다.</li>
            </ul>
          </div>
          <!--//결제수단-->

          <!--결제정보-->
          <div class="section-box pt-60">
            <!-- [퍼블수정] 22.10.20 바우저 미사용 시 노출 -->
            <!-- <div class="cmp-sub-tit">
              <h4 class="tit">결제 정보</h4>
              <button class="cmp-font fnt-13 button"><span class="line">상세내역</span></button>
            </div> -->
            <!-- [퍼블수정] 22.10.20 바우저 사용 시 노출 -->
            <div class="cmp-sub-tit line mb-24">
              <h4 class="tit">결제 정보</h4>
              <button class="cmp-font fnt-13 button"><span class="line">상세내역</span></button>
            </div>
            <p class="cmp-font bold fnt-18 pb-20">케어플러스 세탁 바우처 사용 (3장) + 신용카드</p>
            <!-- <div class="cmp-sub-tit">
              <h4 class="tit">결제 정보</h4>
              <button class="cmp-font fnt-13 button"><span class="line">상세내역</span></button>
            </div> -->
            <div class="refund-box">
              <ul class="cust">
                <li>
                  <p class="cmp-font fnt-14 mb-6">세탁 금액 (총 2개)</p>
                  <p class="cmp-font fnt-20">23,500<span class="cmp-font fnt-14">원</span></p>
                </li>
                <li class="sign minus"></li>
                <li>
                  <p class="cmp-font fnt-14 mb-6">바우처 사용 (3장)</p>
                  <p class="cmp-font fnt-20">23,500<span class="cmp-font fnt-14">원</span></p>
                </li>
                <li class="sign plus"></li>
                <li>
                  <p class="cmp-font fnt-14 mb-6">배송비 (박스 1개)<CommonTooltipBox cover-none right>
                      <template #content>
                      <p class="cmp-font fnt-14">
                        한섬케어세탁 서비스 이용시 배송비는 무료 바우처 또는 바우처+신용카드인 경우 무료로 제공되며,<br><span class="bold">신용카드사에 배송비는 박스 1개당 수거(무료) + 배송 3,000이 부과</span>됩니다.<br>(예:박스1개 3,000원, 3개 9,000원)
                      </p>
                    </template>
                    </CommonTooltipBox>
                  </p>
                  <p class="cmp-font fnt-20">0<span class="cmp-font fnt-14">원</span></p>
                </li>
                <li class="sign equal"></li>
                <li>
                  <p class="cmp-font fnt-14 mb-6">결제 예상 금액</p>
                  <p class="cmp-font fnt-20">12,345,678<span class="cmp-font fnt-14">원</span></p>
                </li>
              </ul>
            </div>

            <ul class="cmp-dotList mt-20">
              <li>결제가 완료되면 전문가에 의해 상품별로 세탁이 진행됩니다. 세탁이 완료되면 신청 시 입력한 수거 및 수령방식에 따라서 배송이 됩니다.</li>
              <li>세탁물에 따라 박스 개수 변경으로 추가 배송비가 발생 할 수 있습니다.</li>
            </ul>
          </div>
          <!--결제정보-->
          </template>
        </div>

        <!-- '결제하기'에만 노출 -->
        <div v-if="stepActive == '3'" class="payment-info">
          총 <strong>3</strong>개 <strong>12,345,000</strong>원 결제하시겠습니까?
        </div>

        <!-- '결제하기'에만 노출 -->
        <div v-if="stepActive == '3'" class="cmp-btnsArea center-area">
           <v-btn outlined large color="primary">취소하기</v-btn>
          <v-btn large color="primary">결제하기</v-btn>
        </div>

        <!-- '접수','세탁진행중' ,'배송' 노출 -->
        <div v-if="stepActive == '1' || stepActive == '4' || stepActive == '5'" class="cmp-btnsArea center-area">
          <v-btn large color="primary">세탁목록보기</v-btn>
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
    paymentSelect :0,
    // 상태바
    iconVer:false,
    stepActive: 4,
    stateText1: [
      { id: 1, name: '접수'},
      { id: 2, name: '검수중'},
      { id: 3, name: '결제하기'},
      { id: 4, name: '세탁진행중'},
      { id: 5, name: '배송'},
    ],
    tooltipList: {
      // 툴팁 상세 정보
      list0: [
        '세탁불가사유 안내 PO에서 입력한 세탁불가 사유 노출 해주세요.',
        '여러줄입력',
        '여러줄입력',
      ]
    },
    attachFileList : [
      'https://img.thehandsome.com/md/publish/dummy/attach-file-img0.png',
      'https://img.thehandsome.com/md/publish/dummy/attach-file-img1.png',
      'https://img.thehandsome.com/md/publish/dummy/attach-file-img2.png',
    ],
    more_view : false,
    reviewTxt : "왼쪽 팔꿈치에 얼룩이 생겼는데, 집에서 많은 방법을 찾아보고 사용해봐도 지워지지가 않네요. 세제를 펌핑 후 올려놓으면 안지워지는 것이 없는줄 알았는데,,, 무엇이 묻은건지 정말로 지독하게 빠지지도 않아서요,,, 제발 얼룩 좀... 아끼는 옷인데 이렇게 되서 정말 잠도 안와요 악몽까지 꾸었다니까요? 너무 끔찍해요 ㅠㅜ,,, 한섬케어세탁 서비스만 믿고 신청드립니다. 꼭 꼭!! 좀 부탁드릴게요~!! 모든 막이 내리고축제가 끝나도 그대의 마음 안엔 언제나 빛으로 남아있길 우리 처음 만났었던 순간 풋풋했던 서로의 모습들 웃음이 터져 나오고 참을 수조차 없는 즐거움이 전부였었죠...우리만의 축제가 시작되려는 날엔 아름다운 동화가 눈앞에서 써지고 있었죠 우리 막이 내리고 축제가 끝나도 그대의 마음속엔 우리의 위로들이끝나지 않을 음악 소리가 되어서 언제나 그대 옆에 빛으로 남아있기를 바래요별의별 시간들로 밤 위에 새겨 놀때면 별보다 빛나곤 했었죠 우리만의 축제가 시작되려는 날에는 서로를 위해 왼쪽 팔꿈치에 얼룩이 생겼는데, 집에서 많은 방법을 찾아보고 사용해봐도 지워지지가 않네요. 세제를 펌핑 후 올려놓으면 안지워지는 것이 없는줄 알았는데,,, 무엇이 묻은건지 정말로 지독하게 빠지지도 않아서요,,, " ,
  }),
  created() {
    const me = this
    const json = require('~/static/json/mypage_left_menu.json')
    me.menuList = json.list
  },
  methods: {
  },
}
</script>
<style lang="scss">
  @import '@/assets/scss/pages/mypage.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
