<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <h2 class="msg-tit">메시지 팝업</h2>
      <table class="msg-guide-table">
        <colgroup>
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>메시지 ID</th>
            <th>작업상태</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in popupList" :key="index">
            <td>
              {{item.id}}
            </td>
            <td>
              <template v-if="item.complete">완료</template>
            </td>
            <td>
              <v-btn small @click="item.model = true">팝업보기</v-btn>
            </td>
          </tr>
        </tbody>
      </table>


      <h2 class="msg-tit">기획서&amp;디자인에만 있는 메시지 팝업 (메시지 정의 페이지에 없음)</h2>
      <table class="msg-guide-table">
        <colgroup>
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>기획서 화면 ID</th>
            <th>작업상태</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in popupList2" :key="index">
            <td>
              {{item.id}}
            </td>
            <td>
              <template v-if="item.complete">완료</template>
            </td>
            <td>
              <v-btn small @click="item.model = true">팝업보기</v-btn>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-left">
      <h2 class="msg-tit">토스트팝업 샘플</h2>
      <v-btn small class="mt-10" @click="toastOpen">토스트 팝업보기</v-btn>
      </div>

      <p class="mt-40">
        메시지 상세내용 '더한섬닷컴_공통-메시지관리_20220615_V1.25.xlsx' 참고
      </p>

      <h2 class="msg-tit">글로벌 메시지 팝업(디자인 있는 팝업)</h2>
      <table class="msg-guide-table">
        <colgroup>
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>화면 ID</th>
            <th>작업상태</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in popupListEn" :key="index">
            <td>
              {{item.id}}
            </td>
            <td>
              <template v-if="item.complete">완료</template>
            </td>
            <td>
              <v-btn small @click="item.model = true">팝업보기</v-btn>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 class="msg-tit">결함 처리 시 추가 팝업</h2>
      <table class="msg-guide-table">
        <colgroup>
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>화면 ID</th>
            <th>작업상태</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in popupListEtc" :key="index">
            <td>
              {{item.id}}
            </td>
            <td>
              <template v-if="item.complete">완료</template>
            </td>
            <td>
              <v-btn small @click="item.model = true">팝업보기</v-btn>
            </td>
          </tr>
        </tbody>
      </table>
      <!--
        =================================================================================================================================
        =================================================================================================================================
      -->
      <!-- POP-CP-01  -->
      <v-dialog v-model="popupList[0].model">
        <DialogBasic class="popup-message" header-title="" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="msg-sub-txt">로그인 후 사용하실 수 있어요.<br>로그인 하시겠어요?</p>
            </div>
            <div class="popup-btn-box">
              <v-btn outlined large color="primary">취소</v-btn>
              <v-btn large color="primary">로그인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //POP-CP-01  -->
      <!-- POP-CP-02  -->
      <v-dialog v-model="popupList[1].model">
        <DialogBasic class="popup-message" header-title="" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="msg-sub-txt">다음 로그인부터 생체인증 로그인을 사용하시겠어요?</p>
            </div>
            <div class="popup-btn-box">
              <v-btn outlined large color="primary">나중에하기</v-btn>
              <v-btn large color="primary">사용</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //POP-CP-02  -->
      <!-- POP-CS-01 -->
      <v-dialog v-model="popupList[2].model">
        <DialogBasic class="popup-message" header-title="고객의 소리 작성시 기입한<br>비밀번호를 입력해 주세요" @hide="closeDialog">
          <template #body>
            <form action="">
              <div class="inner">
                <v-text-field :rules="popupList[2].data.pwRules" outlined type="password" label="숫자 4자리" clearable class="cmp-form-input"></v-text-field>
              </div>
              <div class="popup-btn-box">
                <v-btn block large color="primary" type="submit">확인</v-btn>
              </div>
            </form>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //POP-CS-01 -->
      <!-- ALT-PM-01 -->
      <v-dialog v-model="popupList[3].model">
        <DialogBasic class="popup-message" @hide="closeDialog">
          <template #body>
            <div class="inner">
               <p class="msg-sub-txt">쇼핑백에 담았습니다.<br>계속 쇼핑하시겠습니까?</p>
            </div>
            <div class="popup-btn-box">
              <v-btn outlined large color="primary">쇼핑백 바로가기</v-btn>
              <v-btn large color="primary">계속 쇼핑하기</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //ALT-PM-01 -->
      <!-- ALT-PM-02 (230109 ALT-PM-02) -->
      <v-dialog v-model="popupList[4].model">
        <DialogBasic class="popup-basic popup-message" :header-title="'상품 수령을 '+popupList[4].date+'<br>'+popupList[4].store+' 매장으로 하시겠습니까?'" @hide="closeDialog">
          <template #body>
            <div class="inner">
               <ul class="cmp-list list-dotType">
                 <li>주문 완료 후, 수령확정일과 수령교환권을 알림톡/SMS로 안내드립니다.</li>
               </ul>
            </div>
            <div class="popup-btn-box">
              <!-- <v-btn outlined large color="primary">취소</v-btn> --> <!-- 230109 ALT-PM-02 : 삭제 -->
              <v-btn large color="primary">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //ALT-PM-02 -->
      <!-- ALT-PM-03 -->
      <v-dialog v-model="popupList[5].model">
        <DialogBasic class="popup-message" @hide="closeDialog">
          <template #body>
            <div class="inner">
               <p class="msg-sub-txt">퀵배송 불가능 지역입니다.<br>배송지 변경 후 이용해 주세요.</p>
               <p class="msg-sub-txt">퀵배송은 서울 전지역 가능.<br>향후 타 지역 확대 예정입니다</p>
            </div>
            <div class="popup-btn-box">
              <v-btn large color="primary">배송지 변경</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //ALT-PM-03 -->
      <!-- ALT-PM-04 -->
      <v-dialog v-model="popupList[6].model">
        <DialogBasic class="popup-message" @hide="closeDialog">
          <template #body>
            <div class="inner">
               <p class="msg-sub-txt">퀵배송 주문이 마감되었습니다.<br>내일 다시 이용해 주세요.</p>
               <p class="msg-sub-txt">(하루 20건 제한, 가능시간 : 월-금 00시~10시)</p><!-- 2022-09-15-prd 문구수정 -->
            </div>
            <div class="popup-btn-box">
              <v-btn large color="primary">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //ALT-PM-04 -->
      <!-- ALT-PM-06 -->
      <v-dialog v-model="popupList[7].model">
        <DialogBasic class="popup-message" @hide="closeDialog">
          <template #body>
            <div class="inner"><!-- 2022-09-15-prd 문구수정 -->
               <p class="msg-sub-txt">회원님은 퀵배송 선착순<br>무료 대상입니다.</p>
               <p class="msg-sub-txt">(THE STAR, STAR, MANIA 등급<br>하루 10명 무료 퀵배송)</p>
            </div>
            <div class="popup-btn-box">
              <v-btn large color="primary">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //ALT-PM-06 -->
      <!-- ALT-PM-05 -->
      <v-dialog v-model="popupList[8].model">
        <DialogBasic class="popup-basic popup-message" :header-title="popupList[8].date+'부터<br>순차적으로 배송 예정입니다.'" @hide="closeDialog">
          <template #body>
            <div class="inner">
               <ul class="cmp-list list-dotType">
                 <li>예약주문 시, 한섬마일리지 3% 추가적립됩니다.</li>
                 <li>입고예정일은 제작상황에 따라 변경될 수 있습니다.</li>
               </ul>
            </div>
            <div class="popup-btn-box">
              <v-btn large color="primary">예약상품 바로주문하기</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //ALT-PM-05 -->

      <!-- ALT-PM-07  -->
      <v-dialog v-model="popupList[30].model">
        <DialogBasic class="popup-message" header-title="퀵배송 가능 수량 및 금액을<br>확인해 주세요" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="msg-sub-txt">여기는 서브텍스트입니다<br>서브텍스트를 입력해주세요</p>
              <ul class="cmp-list list-dotType mt-24">
                 <li>상품 수량 3개 이하 가능</li>
                 <li>실결재금액 10만원 이상 가능</li>
                 <li>서을지역만 가능</li>
               </ul>
            </div>
            <div class="popup-btn-box">
              <v-btn large color="primary">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //ALT-PM-07  -->

      <!-- [퍼블수정]23-01-02 -->
      <!-- POP-MK-01 -->
      <v-dialog v-model="popupList[9].model">
        <DialogBasic class="popup-message mk-eventpopup" header-title="축하합니다!<br><strong>$셀럽착장 TIME니트탑$</strong><br>사은품에 당첨되셨습니다.<p class='cmp-font fnt-14 c-gray mt-8'>사은품 발송일 : 2022.05.01</p>" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <ul class="cmp-dotList info-list">
                <li>
                  <span>수령지 :</span>서울특별시 강동구 강동대로 193 (성내동) 4F 401호
                </li>
                <li>
                  <span>연락처 :</span>010-1234-5678
                </li>
              </ul>
              <div class="cmp-font text-center">
                <p class="cmp-font fnt-13">등록된 [기본배송지]로 발송됩니다.<br/>'마이페이지 > 이벤트 참여내역'에서<br/>수령지를 변경하실 수 있습니다.</p>
              </div>
            </div>
            <div class="popup-btn-box mb-4">
              <v-btn large color="primary">확인</v-btn>
            </div>
            <p class="cmp-font fnt-13 c-gray mt-16 text-center"><nuxt-link to="#none" class="underline">수령지 변경하기</nuxt-link></p>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //POP-MK-01 -->
      <!-- POP-MK-02 -->
      <v-dialog v-model="popupList[10].model">
        <DialogBasic class="popup-message mk-eventpopup" header-title="축하합니다!<br><strong>$셀럽착장 TIME니트탑$</strong><br>사은품에 당첨되셨습니다.<p class='cmp-font fnt-14 c-gray mt-8'>사은품 발송일 : 2022.05.01</p>" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <div class="cmp-font text-center">
                <p class="cmp-font fnt-13">사은품 수령지를 선택해 주세요.<br/>'마이페이지 > 이벤트 참여내역'에서<br/>수령지를 변경하실 수 있습니다.</p>
              </div>
            </div>
            <div class="popup-btn-box mb-4">
              <v-btn large color="primary">사은품 수령지 등록하기</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //POP-MK-02 -->
      <!-- POP-MK-03 -->
      <v-dialog v-model="popupList[11].model">
        <DialogBasic class="popup-message mk-eventpopup" header-title="축하합니다!<br><strong>$500$M</strong><br>한섬마일리지에 당첨되셨습니다.<p class='cmp-font fnt-14 c-gray mt-8'>사은품 발송일 : 2022.05.01</p>" @hide="closeDialog">
          <template #body>
            <div class="popup-btn-box mb-4 mt-10">
              <v-btn large color="primary">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //POP-MK-03 -->
      <!-- POP-MK-04 -->
      <v-dialog v-model="popupList[12].model">
        <DialogBasic class="popup-message mk-eventpopup" header-title="축하합니다!<br><strong>$쿠폰명$</strong><br>쿠폰에 당첨되셨습니다." @hide="closeDialog">
          <template #body>
            <div class="inner">
              <div class="cmp-font text-center">
                <p class="cmp-font fnt-13">'마이페이지 > 쿠폰'에서<br/>발급된 쿠폰을 확인하실 수 있어요.</p>
              </div>
            </div>
            <div class="popup-btn-box mt-20 mb-4">
              <v-btn large color="primary">확인</v-btn>
            </div>
            <p class="cmp-font fnt-13 c-gray mt-16 text-center"><nuxt-link to="#none" class="underline">쿠폰 확인하러가기</nuxt-link></p>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //POP-MK-04 -->
      <!--// [퍼블수정]23-01-02 -->
      <!-- POP-ME-04 -->
      <v-dialog v-model="popupList[13].model">
        <DialogBasic class="popup-message" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="msg-sub-txt">한섬 오프라인 &amp; 온라인(더한섬닷컴, H패션몰, EQL) 멤버십을 통합하여 사용하실 수 있습니다.</p>
              <p class="msg-sub-txt">한섬 멤버십 통합을 진행 하시려면 ‘한섬 멤버십 통합 전환 바로가기’를 선택해 주세요.</p>
            </div>
            <div class="popup-btn-box">
              <v-btn outlined large color="primary">취소</v-btn>
              <v-btn large color="primary">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //POP-ME-04 -->
      <!-- POP-ME-02 -->
      <v-dialog v-model="popupList[14].model">
        <DialogBasic class="popup-message" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="msg-sub-txt">간편회원인 경우<br> 등급 혜택을이용하실 수 없습니다.</p>
              <p class="msg-sub-txt">통합회원 가입 후<br>서비스를 이용하시기 바랍니다.</p>
            </div>
            <div class="popup-btn-box">
              <v-btn large color="primary">통합 회원가입하기</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //POP-ME-02 -->
      <!-- POP-ME-03 -->
      <v-dialog v-model="popupList[15].model">
        <DialogBasic class="popup-message" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="msg-sub-txt">간편회원의 경우 나의 혜택 서비스를<br>이용하실 수 없습니다.</p>
              <p class="msg-sub-txt">통합회원 가입 후 서비스를 이용하시기 바랍니다.</p>
            </div>
            <div class="popup-btn-box">
              <v-btn large color="primary">통합회원 가입하기</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //POP-ME-03 -->
      <!-- POP-ME-06 -->
      <v-dialog v-model="popupList[16].model">
        <DialogBasic class="popup-message" @hide="closeDialog">
          <template #body>
            <div class="inner">
               <p class="msg-sub-txt">hanaaa@handsome.co.kr</p>
               <p class="msg-sub-txt">
                  선택한 아이디로 통합하시겠습니까?<br>
                  나머지 아이디는 사용하실 수 없습니다.<br>
                  다른 아이디로 통합을 원하시면 다시 선택해 주세요.
                </p>
            </div>
            <div class="popup-btn-box">
              <v-btn large color="primary">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //POP-ME-06 -->
      <!-- POP-ME-05 -->
      <v-dialog v-model="popupList[17].model">
        <DialogBasic class="popup-message" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="msg-sub-txt">
                고객님께서는 통합회원으로 전환하셔야<br>로그인이 가능합니다.
              </p>
            </div>
            <div class="popup-btn-box">
              <v-btn large color="primary">H.Point 통합회원 전환하기</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //POP-ME-05 -->
      <!-- POP-CL-01 -->
      <v-dialog v-model="popupList[18].model">
        <DialogBasic class="popup-message" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="msg-sub-txt">간편회원인 경우 한섬케어수선 서비스를<br>이용하실 수 없습니다.</p>
              <p class="msg-sub-txt">통합회원 가입 후 이용하시기 바랍니다.</p>
            </div>
            <div class="popup-btn-box">
              <v-btn outlined large color="primary">FAQ 바로가기</v-btn>
              <v-btn large color="primary">신청하기</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //POP-CL-01 -->
      <!-- POP-CL-02 -->
      <v-dialog v-model="popupList[19].model">
        <DialogBasic class="popup-message" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="msg-sub-txt">간편회원인 경우 한섬케어세탁 서비스를<br>이용하실 수 없습니다.</p>
              <p class="msg-sub-txt">통합회원 가입 후 이용하시기 바랍니다.</p>
            </div>
            <div class="popup-btn-box">
              <v-btn outlined large color="primary">FAQ 바로가기</v-btn>
              <v-btn large color="primary">신청하기</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //POP-CL-02 -->
      <!-- POP-HR-01 -->
      <v-dialog v-model="popupList[20].model">
        <DialogBasic class="popup-message" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="msg-sub-txt">간편회원인 경우 한섬케어수선 서비스를<br>이용하실 수 없습니다.</p>
              <p class="msg-sub-txt">통합회원 가입 후 이용하시기 바랍니다.</p>
            </div>
            <div class="popup-btn-box">
              <v-btn outlined large color="primary">FAQ 바로가기</v-btn>
              <v-btn large color="primary">신청하기</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //POP-HR-01 -->
      <!-- POP-OR-01 -->
      <v-dialog v-model="popupList[21].model">
        <DialogBasic class="popup-message" @hide="closeDialog">
          <template #body>
            <div class="inner">
               <p class="msg-sub-txt">H.Point Pay 회원으로 등록되어 있지 않습니다.</p>
               <p class="msg-sub-txt">H.Point Pay 가입 및 결제수단을 등록하시겠습니까?</p>
            </div>
            <div class="popup-btn-box">
              <v-btn outlined large color="primary">취소</v-btn>
              <v-btn large color="primary">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //POP-OR-01 -->
      <!-- POP_OR_02 -->
      <v-dialog v-model="popupList[22].model">
        <DialogBasic class="popup-message" header-title="택배로 받기" @hide="closeDialog">
          <template #body>
            <div class="inner">
               <p class="msg-sub-txt">상품의 배송옵션이 택배로 변경됩니다.</p>
            </div>
            <div class="popup-btn-box">
              <v-btn outlined large color="primary">취소</v-btn>
              <v-btn large color="primary">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //POP_OR_02 -->
      <!-- POP_OR_03 -->
      <v-dialog v-model="popupList[23].model">
        <DialogBasic class="popup-message" header-title="매장수령일 만료 안내" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="msg-sub-txt">매장수령일이 지났습니다.<br>다시 선택하신 후 구매해 주세요 수령예정일을 변경하시겠습니까?</p>
            </div>
            <div class="popup-btn-box">
              <v-btn large color="primary">변경하기</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //POP_OR_03 -->
      <!-- POP-HC-05 -->
      <v-dialog v-model="popupList[24].model">
        <DialogBasic class="popup-message" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="msg-sub-txt">간편회원인 경우 한섬케어세탁 서비스를<br>이용하실 수 없습니다. </p>
              <p class="msg-sub-txt">통합회원 가입 후 이용하시기 바랍니다.</p>
            </div>
            <div class="popup-btn-box">
              <v-btn outlined large color="primary">FAQ 바로가기</v-btn>
              <v-btn large color="primary">신청하기</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //POP-HC-05 -->
      <!-- POP-ME-08 -->
      <v-dialog v-model="popupList[25].model">
        <DialogBasic class="popup-message" @hide="closeDialog" header-title="간편회원 통합 불가 안내" >
          <template #body>
            <div class="inner">
              <p class="msg-sub-txt"><strong>$bbbsome@handsome.co.kr(탈퇴처리 아이디)$</strong></p>
              <p class="msg-sub-txt mt-24 text-left">아래의 통합 불가 사유에 해당하는 항목이 있는지 확인해 주세요.</p>
              <ul class="cmp-dotList mt-24 text-left">
                <li>주문(배송/교환/반품)이 진행 중인 경우</li>
                <li>e-money 잔액이 존재하는 경우</li>
              </ul>
              <div class="text-left mt-24">
                <p class="cmp-font fnt-14">통합 불가 사유를 처리하신 후, 다시 통합을 신청해 주세요.</p>
                <p class="cmp-font fnt-14 mt-8">추가 문의사항은 고객센터 1800-5700(유료) 또는 1:1 문의를 이용해 주세요.</p>
              </div>
            </div>

            <div class="popup-btn-box">
              <v-btn large color="primary">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //POP-ME-08 -->
      <!-- ALT-TP-10 -->
      <v-dialog v-model="popupList[26].model">
        <DialogBasic class="popup-message" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="msg-sub-txt">정기 결제 해지를 취소하겠습니까?<br>정기 결제 해지를 취소하시면, 정기결제가 재신청됩니다.</p>
            </div>
            <div class="popup-btn-box">
              <v-btn large color="primary">해지취소</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //ALT-TP-10 -->
      <!-- ALT-DP-01 -->
      <v-dialog v-model="popupList[27].model">
        <DialogBasic class="popup-message" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="msg-sub-txt">로그인 후 쿠폰을<br>확인하실 수 있습니다.</p><!-- 2022-09-15-prd 문구수정 -->
            </div>
            <div class="popup-btn-box">
              <!-- 230207 메시지팝업 : 수정 -->
              <v-btn outlined large color="primary">닫기</v-btn>
              <v-btn large color="primary">로그인</v-btn>
              <!-- // 230207 메시지팝업 : 수정 -->
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //ALT-DP-01 -->
      <!-- ALT-DP-02 -->
      <v-dialog v-model="popupList[28].model">
        <DialogBasic class="popup-message" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="msg-sub-txt"><strong>쿠폰을 받았습니다.</strong><br />(마이페이지 > 쿠폰함에서 확인 가능)</p>
            </div>
            <div class="popup-btn-box">
              <v-btn large color="primary">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //ALT-DP-02 -->
      <!-- ALT-DP-03 -->
      <v-dialog v-model="popupList[29].model">
        <DialogBasic class="popup-message" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="msg-sub-txt">이미 쿠폰을 받았습니다.</p>
            </div>
            <div class="popup-btn-box">
              <v-btn large color="primary">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //ALT-DP-03 -->
      <!-- ALT-MK-11 -->
      <v-dialog v-model="popupList[31].model">
        <DialogBasic class="popup-message" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="msg-sub-txt">쿠폰을 받았습니다.<br>(마이페이지 > 쿠폰함에서 확인 가능)</p>
            </div>
            <div class="popup-btn-box">
              <v-btn large color="primary">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //ALT-MK-11 -->
      <!-- ALT-MK-11-1 -->
      <v-dialog v-model="popupList[32].model">
        <DialogBasic class="popup-message" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="msg-sub-txt">발급 가능한 쿠폰이<br>모두 소진되었습니다.</p>
            </div>
            <div class="popup-btn-box">
              <v-btn large color="primary">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //ALT-MK-11-1 -->
      <!-- ALT-MK-22 -->
      <v-dialog v-model="popupList[33].model">
        <DialogBasic class="popup-message" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="msg-sub-txt">이미 종료된 이벤트입니다.</p>
            </div>
            <div class="popup-btn-box">
              <v-btn large color="primary">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //ALT-MK-22 -->
      <!--
        =================================================================================================================================
        =================================================================================================================================
      -->
      <!-- FO_PC_OR_0271 -->
      <v-dialog v-model="popupList2[0].model">
        <DialogBasic class="popup-message" header-title="H.Point 인증" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="msg-sub-txt">고객님의 소중한 포인트/기프트카드를<br>보호하기 위하여 H.Point 10만점 이상 사용 시<br>비밀번호를 확인하고 있습니다.<br>로그인 비밀번호를 입력해 주시기 바랍니다.</p>
              <v-text-field outlined type="password" label="인증번호를 입력해 주세요." clearable class="cmp-form-input"></v-text-field>
            </div>
            <div class="popup-btn-box">
              <v-btn large color="primary">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //FO_PC_OR_0271 -->
      <!-- FO_PC_ME_0435 -->
      <v-dialog v-model="popupList2[1].model">
        <DialogBasic class="popup-message" header-title="비밀번호 변경" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="msg-sub-txt pb-20">회원님은 H.Point 멤버십 통합회원입니다.</p>
              <ul class="cmp-dotList text-left">
                <li>H.Point 멤버십 통합회원은 H.Point 사이트를 통하여 비밀번호 변경 가능합니다.</li>
                <li>하단의 비밀번호 변경 버튼을 클릭하시면 H.Point 사이트로 이동합니다.</li>
              </ul>
            </div>
            <div class="popup-btn-box">
              <v-btn large color="primary">비밀번호 변경</v-btn><!--20220930 수정-->
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //FO_PC_ME_0435 -->
      <!-- FO_PC_ME_0441 -->
      <v-dialog v-model="popupList2[2].model">
        <DialogBasic class="popup-message" header-title="" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="msg-sub-txt">설문에 응답하시면<br>고객님에게 꼭 맞는 제품 사이즈를<br>추천해 드립니다.</p>
            </div>
            <div class="popup-btn-box">
              <v-btn large color="primary">나의 사이즈 등록하기</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //FO_PC_ME_0441 -->
      <!-- FO_PC_ME_0430 -->
      <v-dialog v-model="popupList2[3].model">
        <DialogBasic class="popup-message" header-title="한섬 멤버십 통합 전환" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="msg-sub-txt">한섬 오프라인 &amp; 온라인(더한섬닷컴, H패션몰, EQL)<br> 멤버십을 통합하여 사용하실 수 있습니다.</p>
              <p class="msg-sub-txt">한섬 멤버십 통합을 진행 하시려면<br><strong>‘한섬 멤버십 통합 전환 바로가기’</strong>를 선택해 주세요.</p>
            </div>
            <div class="popup-btn-box">
              <v-btn large color="primary">한섬 멤버십 통합 전환 바로가기</v-btn>
            </div>
            <v-checkbox label="오늘 하루 보지 않기" class="cmp-form-checkbox mt-14"></v-checkbox>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //FO_PC_ME_0430 -->
      <!-- FO_PC_ME_0203 -->
      <v-dialog v-model="popupList2[4].model">
        <DialogBasic class="popup-message" header-title="축하합니다.<br>5천원 쿠폰이 발급되었습니다." @hide="closeDialog">
          <template #body>
            <ul class="text-left">
              <li class="cmp-font fnt-16">사용기한 : 발급 후 30일</li>
              <li class="cmp-font fnt-16">사용조건 : 결제금액 5만원 이상 구매 시</li>
            </ul>
            <div class="popup-btn-box">
              <v-btn large color="primary">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //FO_PC_ME_0203 -->
      <!-- FO_PC_ME_0136 -->
      <v-dialog v-model="popupList2[5].model">
        <DialogBasic class="popup-message" header-title="더한섬닷컴 회원가입 안내" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="cmp-font fnt-18">
                더한섬닷컴에 가입되지 않은<br>H.Point 통합회원입니다.
              </p>
              <p class="cmp-font fnt-18 mt-8">
                H.Point 통합회원 정보로<br>더한섬닷컴에 회원가입 가능합니다.
              </p>
            </div>
            <div class="popup-btn-box">
              <v-btn large color="primary">더한섬닷컴 가입하기</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //FO_PC_ME_0136 -->
      <!--  FO_PC_TP_0400,FO_PC_TP_0500 -->
      <v-dialog v-model="popupList2[6].model">
        <DialogBasic class="popup-message" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="cmp-font fnt-16">
                더플러스⁺ 회원 전용 서비스 입니다.
              </p>
            </div>
            <div class="popup-btn-box">
              <v-btn large color="primary">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- // FO_PC_TP_0400,FO_PC_TP_0500 -->
      <!-- FO_PC_TP_0401 -->
      <v-dialog v-model="popupList2[7].model">
        <DialogBasic class="popup-message" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="cmp-font fnt-16">
                한섬님 더플러스⁺ 멤버십으로 획득하신 혜택은<br />각 혜택의 유효기간까지 사용하실 수 있습니다.<br />(단, 플러스맵 이용권은 멤버십 해지 시점부터<br />이용 불가 합니다.)
              </p>
              <p class="cmp-font fnt-16 mt-10">
                정기 결제 취소를 진행 하시겠습니까?
              </p>
            </div>
            <div class="popup-btn-box">
              <v-btn large color="primary">정기결제 취소하기</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //FO_PC_TP_0401 -->

      <!-- FO_PC_PM_138B --><!-- 2022-09-15-prd 팝업추가 -->
      <v-dialog v-model="popupList2[8].model">
        <DialogBasic class="popup-message" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="cmp-font fnt-16">
                퀵배송은 실결제금액 10만원<br>이상일 경우에만 신청이 가능합니다.
              </p>
              <p class="cmp-font fnt-16 mt-10">
                (최대 주문수량 3개 이하,실결제<br>금액 10만원 이상 주문만 신청가능)
              </p>
            </div>
            <div class="popup-btn-box">
              <v-btn large color="primary">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //FO_PC_PM_138B -->

      <!-- FO_PC_PM_0138 --><!-- 2022-09-15-prd 팝업추가 -->
      <v-dialog v-model="popupList2[9].model">
        <DialogBasic class="popup-message" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="cmp-font fnt-16">
                퀵배송은 최대 수량 3개 이하의<br>주문만 신청이 가능합니다.
              </p>
            </div>
            <div class="popup-btn-box">
              <v-btn large color="primary">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //FO_PC_PM_0138 -->

      <!-- FO_PC_PM_0139A --><!-- 2022-09-15-prd 팝업추가 -->
      <v-dialog v-model="popupList2[10].model">
        <DialogBasic class="popup-message" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="cmp-font fnt-16">
                예약상품을 쇼핑백에 담았습니다.<br>2021년 12월 25일부터<br>순차적으로 배송 예정입니다.
              </p>
            </div>
            <div class="popup-btn-box">
              <v-btn outlined large color="primary">쇼핑백 바로가기</v-btn>
              <v-btn large color="primary">계속 쇼핑하기</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //FO_PC_PM_0139A -->
      <!-- POP-OR-01-1 -->
      <v-dialog v-model="popupList2[11].model">
        <DialogBasic class="popup-message" header-title="H.Point Pay 가입" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="cmp-font fnt-16">
                H.Point Pay에 가입 하셔야 합니다.<br/>가입 하시겠습니까?
              </p>
            </div>
            <div class="popup-btn-box">
              <v-btn large color="primary">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //POP-OR-01-1 -->
      <!-- POP-ME_0201-1 -->
      <v-dialog v-model="popupList2[12].model">
        <DialogBasic class="popup-message" header-title="H.Point Pay 해지" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="cmp-font fnt-16">
                H.Point Pay는 현대백화점그룹에서 사용하실 수<br/>
                있는 간편결제 서비스 입니다.<br/>
                서비스를 해지하시는 경우 타 계열사에서의<br/>
                이용도 불가합니다.<br/>
                서비스를 해지하시겠습니까?
              </p>
            </div>
            <div class="popup-btn-box">
              <v-btn large color="primary">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //POP-ME_0201-1 -->
      <!-- POP-ME_0201-2 -->
      <v-dialog v-model="popupList2[13].model">
        <DialogBasic class="popup-message" header-title="H.Point Pay 해지" @hide="closeDialog">
          <template #body><!-- class="inner" 삭제함 -->
            <p class="msg-sub-txt">H.Point Pay 해지가 완료 되었습니다.</p>
            <div class="popup-btn-box">
              <v-btn large color="primary">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //POP-ME_0201-2 -->
      <!-- POP-MK_0121-1 -->
      <v-dialog v-model="popupList2[14].model">
        <DialogBasic class="popup-message" @hide="closeDialog">
          <template #body><!-- class="inner" 삭제함 -->
            <p class="msg-sub-txt">래플이벤트를<br />참여하기 위해서 로그인이 필요합니다.<br />로그인 하시겠습니까?</p>
            <div class="popup-btn-box fit">
              <v-btn outlined large color="primary">취소</v-btn>
              <v-btn large color="primary">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //POP-MK_0121-1 -->
      <!-- POP-MK_0121-2 -->
      <v-dialog v-model="popupList2[15].model">
        <DialogBasic class="popup-message" @hide="closeDialog">
          <template #body><!-- class="inner" 삭제함 -->
            <p class="msg-sub-txt">사이즈 선택 후<br />래플이벤트에 응모해주시기 바랍니다.</p>
            <div class="popup-btn-box">
              <v-btn large color="primary">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //POP-MK_0121-2 -->
      <!-- [퍼블수정]25.04.02 가정의달 이벤트 FO_PC_ME_0410 -->
      <v-dialog v-model="popupList2[16].model">
        <DialogBasic class="popup-message" @hide="closeDialog">
          <template #body><!-- class="inner" 삭제함 -->
            <p class="msg-sub-txt">작성한 메시지 카드의 링크가 생성되었어요<br />소중한 분께 마음을 전하세요</p>
            <div class="popup-btn-box">
              <v-btn outlined large color="primary">LINK FOR U</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //[퍼블수정]25.04.02 가정의달 이벤트 FO_PC_ME_0410 -->


      <!--
        =================================================================================================================================
        =================================================================================================================================
      -->

      <!-- FO_GM_PM_0132 -->
      <v-dialog v-model="popupListEn[0].model" max-width="380">
        <DialogBasic class="popup-basic popup-message" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="msg-sub-txt">You have put it in the shopping bag. Continue shopping?</p>
            </div>
            <div class="popup-btn-box">
              <v-btn outlined large color="primary" class="intervalBtn">Move to <br />Shopping Bag</v-btn>
              <v-btn large color="primary">Keep Shopping</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //FO_GM_PM_0132 -->

      <!-- GCON-ME-01 -->
      <v-dialog v-model="popupListEn[1].model" max-width="380">
        <DialogBasic class="popup-basic popup-message" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="msg-sub-txt">
                You have logged in<br>with a temporary password.<br>Moving to page for changing<br>the password.
              </p>
            </div>
            <div class="popup-btn-box">
              <v-btn outlined large block color="primary">Confirm</v-btn>
              <v-btn large block color="primary" class="mt-10">Cancel</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //GCON-ME-01 -->
      <!-- CON-GP-09 --> 
      <v-dialog v-model="popupListEn[2].model" max-width="380">
        <DialogBasic class="popup-basic popup-message" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <p class="msg-sub-txt">
                Did you receive the product you ordered?<br />
                The status will be changed to<br />'delivery complete'.
              </p>
            </div>
            <div class="popup-btn-box">
              <v-btn outlined large color="primary" class="intervalBtn">Cancel</v-btn>
              <v-btn large color="primary">Confirm</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //CON-GP-09 -->

      <!-- 230831 글로벌 룰렛 당첨팝업 -->
      <!-- POP-G-MK-01 -->
      <v-dialog v-model="popupListEn[3].model">
        <DialogBasic class="popup-message mk-eventpopup" header-title="Congratulations!<br>You won<br><strong>$셀럽착장 TIME니트탑$</strong><p class='cmp-font fnt-14 c-gray mt-8'>Gift Shipping Date : May 1st, 2022</p>" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <ul class="cmp-dotList info-list">
                <li>
                  <span>수령지 :</span>서울특별시 강동구 강동대로 193 (성내동) 4F 401호
                </li>
                <li>
                  <span>연락처 :</span>010-1234-5678
                </li>
              </ul>
              <div class="cmp-font text-center">
                <p class="cmp-font fnt-13">Gift will be sent to [Shipping Address] you<br/>registered. To change your address,<br/>go to My Page > Event Participation Details.</p>
              </div>
            </div>
            <div class="popup-btn-box mb-4">
              <v-btn large color="primary">Confirm</v-btn>
            </div>
            <p class="cmp-font fnt-13 c-gray mt-16 text-center"><nuxt-link to="#none" class="underline">Change My Address</nuxt-link></p>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //POP-MK-01 -->
      <!-- POP-MK-02 -->
      <v-dialog v-model="popupListEn[4].model">
        <DialogBasic class="popup-message mk-eventpopup" header-title="Congratulations!<br>You won<br><strong>$셀럽착장 TIME니트탑$</strong><p class='cmp-font fnt-14 c-gray mt-8'>Gift Shipping Date : May 1st, 2022</p>" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <div class="cmp-font text-center">
                <p class="cmp-font fnt-13">Gift will be sent to [Shipping Address] you<br/>registered. To change your address,<br/>go to My Page > Event Participation Details.</p>
              </div>
            </div>
            <div class="popup-btn-box mb-4">
              <v-btn large color="primary">Register My Receiving Address</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //POP-MK-02 -->
      <!-- POP-MK-03 -->
      <v-dialog v-model="popupListEn[5].model">
        <DialogBasic class="popup-message mk-eventpopup" header-title="Congratulations!<br>You won HANDSOME mileage of<br><strong>$500$M</strong><p class='cmp-font fnt-14 c-gray mt-8'>Mileage Issue Date : May 1st, 2022</p>" @hide="closeDialog">
          <template #body>
            <div class="popup-btn-box mb-4 mt-10">
              <v-btn large color="primary">Confirm</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //POP-MK-03 -->
      <!-- POP-MK-04 -->
      <v-dialog v-model="popupListEn[6].model">
        <DialogBasic class="popup-message mk-eventpopup" header-title="Congratulations!<br>You won<br><strong>$쿠폰명$</strong>" @hide="closeDialog">
          <template #body>
            <div class="inner">
              <div class="cmp-font text-center">
                <p class="cmp-font fnt-13">To check coupons you received,<br/>go to My Page > Coupons.</p>
              </div>
            </div>
            <div class="popup-btn-box mt-20 mb-4">
              <v-btn large color="primary">Confirm</v-btn>
            </div>
            <p class="cmp-font fnt-13 c-gray mt-16 text-center"><nuxt-link to="#none" class="underline">Check My Coupons</nuxt-link></p>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //POP-MK-04 -->
      <!-- //230831 글로벌 룰렛 당첨팝업 -->

      <!--
        =================================================================================================================================
        =================================================================================================================================
      -->

      <!-- OR_ORDER_POPUP -->
      <v-dialog v-model="popupListEtc[0].model">
        <DialogBasic class="popup-basic popup-message" header-title="3/1(수) 이전 주문 건 관련 안내" @hide="closeDialog">
          <template #body>
            <div class="inner">
               <ul class="cmp-list list-dotType">
                 <li>아래 [주문상세 조회] 클릭 시<br>배송조회/반품신청/상품평 작성 가능</li>
                 <li>판매종료 상품 상품평 작성 불가</li>
                 <li>상품평 작성 시 3/6(월) 이후 일 단위로 노출<br>(작성일로부터 1~2일 소요)</li>
                 <li>포토 상품평 리워드는 기존 정책에 따름</li>
               </ul>
            </div>
            <div class="popup-btn-box">
              <v-btn large color="primary">주문상세 조회</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- // OR_ORDER_POPUP -->


    </div>
  </div>
</template>

<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  components : {
    DialogBasic
  },
  layout: 'publish',
  data: () => ({
    popupList : [
      {
        id : 'POP-CP-01',
        model : false,
        complete : false,
      },
      {
        id : 'POP-CP-02',
        model : false,
        complete : false,
      },
      {
        id : 'POP-CS-01',
        model : false,
        complete : true,
        data : {
          pwRules: [v => !!v || '비밀번호가 일치하지 않습니다.'],
        }
      },
      {
        id : 'ALT-PM-01',
        model : false,
        complete : false,
      },
      {
        id : 'ALT-PM-02',
        model : false,
        complete : false,
        date : '2월 16일(화)',
        store : '청담애비뉴',
      },
      {
        id : 'ALT-PM-03',
        model : false,
        complete : false,
      },
      {
        id : 'ALT-PM-04',
        model : false,
        complete : false,
      },
      {
        id : 'ALT-PM-06',
        model : false,
        complete : false,
      },
      {
        id : 'ALT-PM-05',
        model : false,
        complete : false,
        date : '2022년 3월 25일'
      },
      {
        id : 'POP-MK-01',
        model : false,
        complete : true,
      },
      {
        id : 'POP-MK-02',
        model : false,
        complete : false,
      },
      {
        id : 'POP-MK-03',
        model : false,
        complete : false,
      },
      {
        id : 'POP-MK-04',
        model : false,
        complete : false,
      },
      {
        id : 'POP-ME-04',
        model : false,
        complete : false,
      },
      {
        id : 'POP-ME-02',
        model : false,
        complete : false,
      },
      {
        id : 'POP-ME-03',
        model : false,
        complete : false,
      },
      {
        id : 'POP-ME-06',
        model : false,
        complete : false,
      },
      {
        id : 'POP-ME-05',
        model : false,
        complete : false,
      },
      {
        id : 'POP-CL-01',
        model : false,
        complete : false,
      },
      {
        id : 'POP-CL-02',
        model : false,
        complete : false,
      },
      {
        id : 'POP-HR-01',
        model : false,
        complete : false,
      },
      {
        id : 'POP-OR-01',
        model : false,
        complete : false,
      },
      {
        id : 'POP_OR_02',
        model : false,
        complete : false,
      },
      {
        id : 'POP_OR_03',
        model : false,
        complete : false,
      },
      {
        id : 'POP-HC-05',
        model : false,
        complete : false,
      },
      {
        id : 'POP-ME-08',
        model : false,
        complete : false,
      },
      {
        id : 'ALT-TP-10',
        model : false,
        complete : false,
      },
      {
        id : 'ALT-DP-01',
        model : false,
        complete : false,
      },
      {
        id : 'ALT-DP-02',
        model : false,
        complete : false,
      },
      {
        id : 'ALT-DP-03',
        model : false,
        complete : false,
      },
      {
        id : 'ALT-PM-07',
        model : false,
        complete : false,
      },
      {
        id : 'ALT-MK-11',
        model : false,
        complete : false,
      },
      {
        id : 'ALT-MK-11-1',
        model : false,
        complete : false,
      },
      {
        id : 'ALT-MK-22',
        model : false,
        complete : false,
      },
    ],
    popupList2 : [
      {
        id : 'FO_PC_OR_0271',
        model : false,
        complete : true,
      },
      {
        id : 'FO_PC_ME_0435',
        model : false,
        complete : true,
      },
      {
        id : 'FO_PC_ME_0441',
        model : false,
        complete : true,
      },
      {
        id : 'FO_PC_ME_0430',
        model : false,
        complete : true,
      },
      {
        id : 'FO_PC_ME_0203',
        model : false,
        complete : true,
      },
      {
        id : 'FO_PC_ME_0136',
        model : false,
        complete : true,
      },
      {
        id : 'FO_PC_TP_0400, FO_PC_TP_0500',
        model : false,
        complete : true,
      },
      {
        id : 'FO_PC_TP_0401',
        model : false,
        complete : true,
      },
      {
        id : 'FO_PC_PM_138B',
        model : false,
        complete : true,
      },
      {
        id : 'FO_PC_PM_0138',
        model : false,
        complete : true,
      },
      {
        id : 'FO_PC_PM_139A',
        model : false,
        complete : true,
      },
      {
        id : 'POP-OR-01-1',
        model : false,
        complete : true,
      },
      {
        id : 'POP-ME_0201-1',
        model : false,
        complete : true,
      },
      {
        id : 'POP-ME_0201-2',
        model : false,
        complete : true,
      },
      {
        id : 'POP-MK_0121-1',
        model : false,
        complete : true,
      },
      {
        id : 'POP-MK_0121-2',
        model : false,
        complete : true,
      },
      {
        // [퍼블수정]25.04.02 가정의달 이벤트
        id : 'FO_PC_ME_0410',
        model : false,
        complete : true,
      }
    ],
    popupListEn : [
      {
        id : 'FO_GM_PM_0132',
        model : false,
        complete : true,
      },
      {
        id : 'GCON-ME-01',
        model : false,
        complete : true,
      },
      {
        id : 'CON-GP-09',
        model : false,
        complete : true,
      },
      {
        id : 'POP-G-MK-01',
        model : false,
        complete : true,
      },
      {
        id : 'POP-G-MK-02',
        model : false,
        complete : true,
      },
      {
        id : 'POP-G-MK-03',
        model : false,
        complete : true,
      },
      {
        id : 'POP-G-MK-04',
        model : false,
        complete : true,
      },
    ],
    popupListEtc : [
      {
        id : 'OR_ORDER_POPUP',
        model : false,
        complete : true,
      },
    ]
  }),
  mounted() {
    
  },
  methods: {
    closeDialog(){
      const me = this
      for(let i=0;i<me.popupList.length;i++){
        me.popupList[i].model = false
      }
      for(let i=0;i<me.popupList2.length;i++){
        me.popupList2[i].model = false
      }
      for(let i=0;i<me.popupListEn.length;i++){
        me.popupListEn[i].model = false
      }
    },
    toastOpen(){
      const me = this
      me.showToast("토스트 팝업 테스트", "bottom", {offset:60})
    }
  },
}
</script>

<style lang="scss" scoped>
.msg-tit{font-size:1.6rem;line-height:2rem;margin-top:20px;text-align:left;}
.msg-guide-table{
  width:100%;
  table-layout:fixed;
  tr{
    th{
      text-align:center;
      padding:5px;
      border-bottom:1px solid #000;
    }
    td{
      text-align:center;
      padding:5px;
      border-bottom:1px solid #ccc;
      &:not(:last-child){border-right:1px dotted #ccc}
    }
  }
}
</style>