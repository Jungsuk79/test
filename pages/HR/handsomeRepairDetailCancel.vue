<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <ContentsLeftMenu :title="'마이페이지'" :left-data="menuList" :active="'/ko/HR/handsomeRepair'"></ContentsLeftMenu>

      <div class="my-page-r-box hansomecare-application">
        <div class="cmp-page-tit line">
          <h2 class="tit">케어플러스 수선 상세보기</h2>
        </div>

        <div class="section-wrapper">
          <!-- 20221216 상태바 -->
          <div class="cmp-order-state">
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
            <div v-if="stepActive == '1'" class="text-center">
              <p class="cmp-font fnt-20 mt-10">택배사에서 수거예정입니다.</p>
              <button class="cmp-font fnt-13 button mt-6"><span class="line">접수취소</span></button>
            </div>

            <div v-if="stepActive == '2'" class="text-center"> 
              <p class="cmp-font fnt-20 mt-10">결제가 완료되었습니다.</p>
              <button class="cmp-font fnt-13 button mt-6"><span class="line">접수취소</span></button>
              <!-- <p class="cmp-font fnt-20 mt-10">수선이 완료되어 수선비가 청구되었습니다.</p> -->
            </div>
            <div v-if="stepActive == '3'" class="text-center"> 
              <p class="cmp-font fnt-20 mt-10">상품이 반송처리 되었습니다.</p>
              <button class="cmp-font fnt-13 button mt-6"><span class="line">배송조회</span></button>
            </div>
          </div>
          <!-- //20221216 상태바 -->

          <!--주문번호-->  
          <div class="order-number-box">
            <div class="line-box">
              <p class="cmp-font fnt-16">신청번호<span class="ml-8">211222P12345678</span></p>
              <p class="cmp-font fnt-14">2021.12.22 13:00</p>
            </div>
          </div>
          <!--//주문번호-->  

          <!--수선상품-->
          <div class="section-box">
            <!-- 선택한 상품 리스트 -->
            <ul class="item-list">
              <li class="pt-0">
                <div class="item-number">
                  <strong>TM2C0QOT001WM1BK90</strong>
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

                  <v-layout justify-start align-center class="item-file-type">
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

          <template v-if="stepActive == '1' || stepActive == '3'">
          <!-- 수거 및 수령방식 -->
          <div class="section-box">
            <div class="cmp-sub-tit small">
              <!-- [퍼블수정]23.02.22 수선 문구 수정 -->
              <h3 class="tit">수거 및 수령방식</h3>
            </div>
            <h4 class="mb-20">택배</h4>
            <ul class="text-list">
              <li>
                <span class="chip">수거</span>
                <p v-html="newLine(guideText.pickup)"></p>
              </li>
              <li>
                <span class="chip">수령</span>
                <p v-html="newLine( guideText.receive)"></p>
              </li>
            </ul>
            <!-- [퍼블수정]23.11.15 필수 입력 추가 -->
            <ul class="cmp-dotList mt-10">
              <li>무료수선인 경우, 수거/수령시 택배비는 무상으로 진행됩니다.</li>
              <li>유료수선인 경우 수거/수령시 택배비가 발생합니다.(배송비 : 3,000원)</li>
            </ul>
            <!-- [퍼블수정]23.11.15 필수 입력 추가 -->
          </div>
          <!-- //수거 및 수령방식 -->

          <!-- 수거/수령지 -->
          <div class="section-box">
            <div class="contents-line-box">
              <div class="cmp-sub-tit small">
                <h4 class="tit">수거/수령지</h4>
              </div>
              <div>
                <p class="cmp-font">홍길동 / 010-1234-5678</p>
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
              </div>
              <div>
                <p class="cmp-font">
                  부재시 문 앞에 놓아주세요.
                  <br>공동현관 출입번호(****)
                </p>
              </div>
            </div>
          </div>
          <!--//수거/수령 요청사항-->

          <!-- 연락처 -->
          <div class="section-box">
            <div class="contents-line-box">
              <div class="cmp-sub-tit small">
                <h4 class="tit">연락처</h4>
              </div>
              <div>
                <p class="cmp-font">010-1234-5678</p>
                <p class="cmp-font fnt-14 mt-20">* 해당 번호로 검수 내용을 연락드릴 예정입니다.</p>
              </div>
            </div>
          </div>  
          <!-- //연락처 -->
          </template>

          <!--결제정보-->
          <div v-if="stepActive == '3'" class="section-box pt-60 pb-24">
            <div class="cmp-sub-tit line mb-24">
              <h4 class="tit">결제 정보</h4>
            </div>
            <div class="pb-24">
                <p class="cmp-font bold fnt-16 mb-10">신용카드</p>
                <div class="cmp-info info-type2">
                  <p class="cmp-font fnt-14">결제수단 공지 안내메시지 노출. BO에서 관리함.<br />말줄임 없이 여러 줄 노출되도록</p>
                </div>
            </div>
            <div class="refund-box">
              <ul class="cust">
                <li>
                  <p class="cmp-font fnt-14 mb-6">수선 금액</p>
                  <p class="cmp-font fnt-20">23,500<span class="cmp-font fnt-14">원</span></p>
                </li>
                <li class="sign plus"></li>
                <li>
                  <p class="cmp-font fnt-14 mb-6">배송비
                  </p>
                  <p class="cmp-font fnt-20">0<span class="cmp-font fnt-14">원</span></p>
                </li>
                <li class="sign equal"></li>
                <li>
                  <p class="cmp-font fnt-14 mb-6">최종 결제 금액</p>
                  <p class="cmp-font fnt-20">12,345,678<span class="cmp-font fnt-14">원</span></p>
                </li>
              </ul>
            </div>

            <ul class="cmp-dotList mt-20">
              <li>수선품은 결제가 완료되면 택배로 발송되며, 택배사 상황에 따라 2~3일 후 도착합니다.<br>궁금한 사항은 1:1 문의를 이용해 주시기 바랍니다.</li>
            </ul>
          </div>
          <!--결제정보-->
        </div>

        <ul v-if="stepActive == '1'" class="cmp-dotList mt-24">
          <li>수선비는 수선 완료 후 산정되며,
              <button class="cmp-font fnt-14 button"><span class="line">마이페이지>THE 서비스>케어플러스 수선</span></button>에서 확인 후 결제하시기 바랍니다.
          </li>
          <li>수선비 결제가 완료되면 택배로 발송되며, 택배사 상황에 따라 2~3일 후 도착할 예정입니다. <br />궁금한 사항은 1:1 문의를 이용해 주시기 바랍니다.</li>
        </ul>

        <div class="cmp-btnsArea center-area">
          <v-btn v-if="stepActive == '1' || stepActive == '4'" large color="primary">수선목록보기</v-btn>
          <v-btn v-if="stepActive == '3'" large color="primary"><strong>123,400</strong>원 결제하기</v-btn>
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
    stepActive: 3, // 20221216 상태바
    iconVer: false,
    stateText1: [  // 20221216 상태바
      { id: 1, name: '접수'},
      { id: 2, name: '결제하기'},
      { id: 3, name: '반송'},
    ],
    guideText: {
        pickup : '수선 품목을 <span class="cmp-font c-red fnt-14">박스에 담아 주시면, 택배사에서 1~2일 내 방문하여 수거 예정입니다.</span>',
        receive : '수선 완료 후, <span class="cmp-font c-red fnt-14">수거지와 동일한 배송지</span>로 배송예정 입니다.',
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
    newLine(str) {
      return String(str).replace(/(?:\r\n|\r|\n)/g, '</span>','</br>')
    },
  },
}
</script>
<style lang="scss">
  @import '@/assets/scss/pages/mypage.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
