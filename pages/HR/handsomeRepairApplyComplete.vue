<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <ContentsLeftMenu :title="'마이페이지'" :left-data="menuList" :active="'/ko/HR/handsomeRepair'"></ContentsLeftMenu>

      <div class="my-page-r-box hansomecare-application">
        <div class="cmp-page-tit line">
          <h2 class="tit">케어플러스 수선 신청완료</h2>
        </div>

        <div class="section-wrapper">
          <!--완료 문구-->
          <div class="apply-complete">
            <i class="cmp-icon-etc cmp-icon-120 i-confirm"></i>
            <p class="cmp-font fnt-20">케어플러스 수선 서비스 신청이 완료되었습니다.</p>
          </div>

          <!--신청번호-->  
          <div class="order-number-box">
            <div class="line-box">
              <p class="cmp-font fnt-16">신청번호<span class="ml-8">211222P12345678</span></p>
              <p class="cmp-font fnt-14">2021.12.22 13:00</p>
            </div>
          </div>
          <!--//신청번호-->  

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
                    <p v-html="newLine(reviewTxt)" class="review" :class="{'more':more_view}"></p> <!--20221216 수정-->
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
          <!--//수선상품-->

          <!-- 상품 수거 및 수령방식-->
          <div class="section-box">
            <div class="contents-line-box">
              <div class="cmp-sub-tit small">
                <h4 class="tit">상품 수거 및 수령방식</h4>
              </div>

              <!--택배-->
              <div>
                <p class="cmp-font bold">택배</p>
                <ul class="text-list">
                  <li>
                    <span class="chip">수거</span>
                    <p>수선 품목을 <span>박스에 담아 주시면, 택배사에서 1~2일 내 방문하여 수거 예정입니다.</span></p>
                  </li>
                  <li>
                    <span class="chip">수령</span>
                    <p>수선 완료 후, <span>수거지와 동일한 배송지</span>로 배송예정 입니다.</p>
                  </li>
                </ul>
                <!-- [퍼블수정]23.11.15 필수 입력 추가 -->
                <ul class="cmp-dotList mt-10">
                  <li>무료수선인 경우, 수거/수령시 택배비는 무상으로 진행됩니다.</li>
                  <li>유료수선인 경우 수거/수령시 택배비가 발생합니다.(배송비 : 3,000원)</li>
                </ul>
                <!-- [퍼블수정]23.11.15 필수 입력 추가 -->
              </div>
              <!--//택배-->
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

          <!--연락처-->
          <div class="section-box">
            <div class="cmp-sub-tit small">
              <h4 class="tit">연락처</h4>
            </div>

            <p class="cmp-font fnt-16">010-1234-5678</p>
            
            <p class="cmp-font fnt-14 mt-20">* 해당 번호로 검수 내용을 연락드릴 예정입니다.</p>
          </div>
          <!--//연락처-->
        </div>

        <ul class="cmp-dotList mt-24">
          <li>수선비는 수선 완료 후 산정되며,
            <button class="cmp-font fnt-14 button"><span class="line">마이페이지>THE 서비스>케어플러스 수선</span></button>에서 확인 후 결제하시기 바랍니다.
          </li>
          <li>수선비 결제가 완료되면 택배로 발송되며, 택배사 상황에 따라 2~3일 후 도착할 예정입니다. <br />궁금한 사항은 1:1 문의를 이용해 주시기 바랍니다.</li>
        </ul>

        <div class="cmp-btnsArea center-area">
          <v-btn large color="primary">신청정보 확인</v-btn>
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
    stepActive: 1,
    stateText1: [
      { id: 1, name: '접수'},
      { id: 2, name: '검수중'},
      { id: 3, name: '결제하기'},
      { id: 4, name: '세탁진행중'},
      { id: 5, name: '배송'},
    ],
    attachFileList : [
      'https://img.thehandsome.com/md/publish/dummy/attach-file-img0.png',
      'https://img.thehandsome.com/md/publish/dummy/attach-file-img1.png',
      'https://img.thehandsome.com/md/publish/dummy/attach-file-img2.png',
    ],
    more_view : false,
    reviewTxt : "왼쪽 팔꿈치에 얼룩이 생겼는데, 집에서 많은 방법을 찾아보고 사용해봐도 지워지지가 않네요. 세제를 펌핑 후 올려놓으면 안지워지는 것이 없는줄 알았는데,,, 무엇이 묻은건지 정말로 지독하게 빠지지도 않아서요,,, 제발 얼룩 좀... 아끼는 옷인데 이렇게 되서 정말 잠도 안와요 악몽까지 꾸었다니까요?<br>너무 끔찍해요 ㅠㅜ,,, 한섬케어세탁 서비스만 믿고 신청드립니다. 꼭 꼭!! 좀 부탁드릴게요~!! 모든 막이 내리고축제가 끝나도 그대의 마음 안엔 언제나 빛으로 남아있길 우리 처음 만났었던 순간 풋풋했던 서로의 모습들 웃음이 터져 나오고 참을 수조차 없는 즐거움이 전부였었죠...우리만의 축제가 시작되려는 날엔 아름다운 동화가 눈앞에서 써지고 있었죠 우리 막이 내리고 축제가 끝나도 그대의 마음속엔 우리의 위로들이끝나지 않을 음악 소리가 되어서 언제나 그대 옆에 빛으로 남아있기를 바래요별의별 시간들로 밤 위에 새겨 놀때면 별보다 빛나곤 했었죠 우리만의 축제가 시작되려는 날에는 서로를 위해 왼쪽 팔꿈치에 얼룩이 생겼는데, 집에서 많은 방법을 찾아보고 사용해봐도 지워지지가 않네요. 세제를 펌핑 후 올려놓으면 안지워지는 것이 없는줄 알았는데,,, 무엇이 묻은건지 정말로 지독하게 빠지지도 않아서요,,, " ,
    storeList : [
      {
        name : '한섬하우스 그린어스 부산점',
        address : '부산광역시 해운대구 중동 1336-2',
        date_select_open : false,
        map_open : false,
      }
    ]
  }),
  created() {
    const me = this
    const json = require('~/static/json/mypage_left_menu.json')
    me.menuList = json.list
  },
  methods: {
   newLine(str) { // 20221216 추가
      return String(str).replace(/(?:\r\n|\r|\n)/g, '</br>')
    }
  },
}
</script>
<style lang="scss">
  @import '@/assets/scss/pages/mypage.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
