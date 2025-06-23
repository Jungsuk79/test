<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="footer-terms-contents">
        <ContentsLeftMenu :title="'개인정보처리방침'" :left-data="menuList"></ContentsLeftMenu> 
        <div class="contents-r-layout">
          <div class="cmp-page-tit">
            <h2 class="tit">더한섬닷컴</h2>
          </div>
          
          <!-- [퍼블수정]23.03.07 버튼 추가 -->
          <v-layout justify-end align-center class="popup-btn-cover" id="btn-top">
            <v-btn @click="openDialogPrivacyPolicyDetaile" outlined color="primary">쉽게 보는 개인정보 처리방침</v-btn>
          </v-layout>
          <!-- //[퍼블수정]23.03.07 버튼 추가 -->
          <!-- S : 관리자 등록 - 더한섬닷컴-->

          <!-- <div class="accordion-container">
            <button id="toggle-all">전체 열림</button>
            <div class="accordion">
                <div class="accordion-item">
                    <div class="accordion-header">Section 1</div>
                    <div class="accordion-content">
                      <div class="inner">
                        <p>Content for section 1.</p>
                      </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header">Section 2</div>
                    <div class="accordion-content">
                      <div class="inner">
                        <p>Content for section 2.</p>
                      </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header">Section 3</div>
                    <div class="accordion-content">
                      <div class="inner">
                        <p>Content for section 3.</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>

        <style type="text/css">
        .accordion {width: 100%;max-width: 600px;margin: auto;}
        .accordion-item {border: 1px solid #ccc;margin-bottom: 10px; border-radius: 5px;overflow: hidden;}
        .accordion-header {background-color: #f7f7f7;padding: 15px;cursor: pointer;font-weight: bold;}
        .accordion-content {background-color: #fff;border-top: 1px solid #ccc;max-height: 0;overflow: hidden;transition: max-height ease-out}
        .accordion-content .inner{padding:15px;}
        .accordion-item.active .accordion-content {max-height: 500px;transition: max-height 0.8s ease-out}
        </style> -->


          <div class="terms-info">
            <!-- [퍼블수정]23.06.21 현행화 -->
            <div class="serviceContent privacyConts">
              <section>
                <div class="title_wrap">
                    <h5>더한섬닷컴 개인정보 처리방침</h5>
                </div>
                <p>THEHANDSOME.COM(이하 “더한섬닷컴”)은 고객의 개인정보를 취급하는데 있어서, 고객의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하여, 적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다.</p>
                <p class="mt-10">이에 「개인정보 보호법」 제30조에 따라 고객에게 개인정보의 처리와 보호에 관한 절차 및 기준을 안내하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립・공개합니다.</p>
                
                <h5 class="mt-40">주요 개인정보 처리 표시 (라벨링)</h5>
                <ul class="icons-info">
                  <li>
                    <div class="icon-wrap">
                      <i class="icon-privacy-64 icon-11"></i>
                      <span>개인정보 수집/<br>이용 항목</span>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="icon-privacy-64 icon-12"></i>
                      <span>개인정보<br>처리목적</span>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="icon-privacy-64 icon-20"></i>
                      <span>개인정보<br>보유기간</span>
                    </div>
                  </li>
                  <li class="w-100"></li>
                  <li>
                    <div class="icon-wrap">
                      <i class="icon-privacy-64 icon-19"></i>
                      <span>개인정보<br>업무 위탁</span>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="icon-privacy-64 icon-18"></i>
                      <span>개인정보<br>제3자 제공</span>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="icon-privacy-64 icon-32"></i>
                      <span>고충처리부서</span>
                    </div>
                  </li>
                </ul>
              </section>

              <section>
                <h4>목차</h4>
                <div class="title-list-wrap">
                  <ol>
                    <li>
                      <a href="#product1" class="link">1. 개인정보의 처리목적, 수집 항목, 보유 및 이용기간</a> 
                    </li>
                    <li>
                      <a href="#privacy02" class="link">2. 장기간 미사용 고객의 개인정보 파기</a> 
                    </li>
                    <li>
                      <a href="#privacy03" class="link">3. 14세 미만 아동의 개인정보 처리에 관한 사항</a> 
                    </li>
                    <li>
                      <a href="#privacy04" class="link">4. 개인정보의 파기 절차 및 방법</a> 
                    </li>
                    <li>
                      <a href="#privacy05" class="link">5. 개인정보의 제3자 제공</a> 
                    </li>
                    <li>
                      <a href="#product2" class="link">6. 개인정보 처리의 위탁</a> 
                    </li>
                    <li>
                      <a href="#privacy07" class="link">7. 고객의 동의없이 추가적인 이용∙제공을 위한 판단기준</a> 
                    </li>
                  </ol>
                  <ol>
                    <li>
                      <a href="#privacy08" class="link">8. 개인정보의 안전성 확보조치</a> 
                    </li>
                    <li>
                      <a href="#privacy09" class="link">9. 민감정보의 공개 가능성 및 비공개를 선택하는 방법</a> 
                    </li>
                    <li>
                      <a href="#privacy10" class="link">10. 개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항</a> 
                    </li>
                    <li>
                      <a href="#privacy11" class="link">11. 행태정보의 수집∙이용∙제공 및 거부 등에 관한 사항</a> 
                    </li>
                    <li>
                      <a href="#privacy12" class="link">12. 정보주체와 법정대리인의 권리∙의무 및 행사방법</a> 
                    </li>
                    <li>
                      <a href="#privacy13" class="link">13. 개인정보 보호책임자 및 개인정보 열람청구</a> 
                    </li>
                    <li>
                      <a href="#privacy14" class="link">14. 고객의 개인정보 권익침해에 대한 구제방법</a> 
                    </li>
                    <li>
                      <a href="#privacy15" class="link">15. 개인정보 처리방침의 변경에 관한 사항</a> 
                    </li>
                  </ol>
                </div>

              </section>
              
              <section id="product1">
                <ul class="icons-wrap">
                  <li>
                    <i class="icon-privacy-36 icon-11"></i>
                  </li>
                  <li>
                    <i class="icon-privacy-36 icon-12"></i>
                  </li>
                  <li>
                    <i class="icon-privacy-36 icon-20"></i>
                  </li>
                </ul>
                <h4>1. 개인정보의 처리목적, 수집 항목, 보유 및 이용기간</h4>
                <p>“더한섬닷컴”은 별도의 회원가입 절차 없이 대부분의 컨텐츠에 자유롭게 접근할 수 있습니다. “더한섬닷컴”의 서비스를 이용하시는 경우 다음의 정보를 고객의 동의를 받아 수집할 수 있으며 선택항목을 입력하지 않으셔도 해당 항목을 활용한 서비스를 제외한 다른 서비스 이용에는 제한이 없습니다.</p>
                <ol class="indent-0">
                    <li>
                      <span class="num-list">① 고객의 동의를 받지 않고 수집하는 개인정보<br />“더한섬닷컴”은 다음의 개인정보 항목을 고객의 동의 없이 처리하고 있습니다.</span>

                      <div class="tblwrap">
                        <table>
                          <caption>고객의 개인정보를 처리 내용</caption>
                          <colgroup>
                            <col style="width:15%;">
                            <col style="width:15%;">
                            <col style="width:30%;">
                            <col style="width:25%;">
                            <col style="width:15%;">
                          </colgroup>
                          <thead>
                            <tr>
                                <th scope="col">법적 근거</th>
                                <th scope="col">구분</th>
                                <th scope="col">수집 목적</th>
                                <th scope="col">수집 항목</th>
                                <th scope="col">보유 및 이용기간</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th class="v-align-m" rowspan="11">개인정보 보호법 제15조 제1항 제4호<br />(계약의 이행)</th>
                              <td>더한섬닷컴 회원</td>
                              <td>
                                <ul class="indent-10">
                                  <li>• 회원관리</li>
                                  <li>• 쇼핑몰 로그인</li>
                                  <li>• 아이디/비밀번호 찾기</li>
                                  <li>• 본인정보 수정</li>
                                </ul>
                              </td>
                              <td>
                                <span>이름, 생년월일, 휴대폰번호, 아이디(이메일), 비밀번호, 연락처, 주소</span>
                              </td>
                              <td class="v-align-m" rowspan="2">회원탈퇴 및 동의철회 시까지</td>
                            </tr>
                            <tr>
                              <td>회원가입(H.point / 현대백화점 통합회원)</td>
                              <td>
                                <ul class="indent-10">
                                  <li>• 회원가입(H.Point 통합회원) 및 탈퇴</li>
                                  <li>• 본인확인(미성년 여부 연령확인) </li>
                                  <li>• 회원관리</li>
                                  <li>• 쇼핑몰 로그인</li>
                                  <li>• 아이디/비밀번호 찾기</li>
                                  <li>• 본인정보 수정</li>
                                  <li>• 고객관리(더플러스 멤버, 부정이용 방지)</li>
                                </ul>
                              </td>
                              <td>
                                <span>성명, 생년월일, 나이, 성별, 내/외국인, 휴대폰번호, 이메일, H.Point 통합멤버십(회원번호, 아이디, 비밀번호), 연계정보(CI), 주소</span>
                              </td>
                            </tr>
                            <tr>
                              <td>카카오 간편 로그인</td>
                              <td>
                                <ul class="indent-10">
                                  <li>• 간편 로그인 인증</li>
                                </ul>
                              </td>
                              <td>
                                <span>H.Point 통합멤버십(회원번호, 아이디), 성명, 휴대폰번호, 이메일, 연계정보(CI)</span>
                              </td>
                              <td>
                                <span>간편 로그인 인증 완료 후 파기</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span>주문 정보</span>
                              </td>
                              <td>
                                <ul class="indent-10">
                                  <li>• 상품의 배송, 반품, 교환, 회수 및 배송지 관리</li>
                                  <li>• 사은행사품 배송</li>
                                  <li>• 선물하기</li>
                                </ul>
                              </td>
                              <td>
                                <span>주문자 정보(아이디, 성명, 휴대폰번호, 이메일), 배송지 정보(배송지명, 수취인명, 휴대폰번호, 주소), 연락처, 이메일, 공동현관 출입번호</span>
                              </td>
                              <td class="v-align-m" rowspan="2">
                                <span>5년(전자상거래법 제6조)</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span>결제 정보</span>
                              </td>
                              <td>
                                <ul class="indent-10">
                                  <li>• 상품의 결제</li>
                                </ul>
                              </td>
                              <td>
                                <span>카드결제(카드사명), 계좌이체(은행명)</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span>고객상담</span>
                              </td>
                              <td>
                                <ul class="indent-10">
                                  <li>• 쇼핑몰 이용 상담 및 서비스 불만 처리</li>
                                </ul>
                              </td>
                              <td>
                                <p>1) 유선상담<br />아이디, 성명, 휴대폰번호</p>
                                <p class="mt-10">2) 카카오톡 상담<br />성명, 휴대폰번호</p>
                                <p class="mt-10">3) 더한섬닷컴 1:1 문의<br />아이디, 성명, 이메일, 내/외국인, 휴대폰번호</p>
                              </td>
                              <td>
                                <span>3년(전자상거래법 제6조)</span>
                              </td>
                            </tr>
                            <tr>
                              <td rowspan="2">
                                <span>케어서비스</span>
                              </td>
                              <td rowspan="2">
                                <ul class="indent-10">
                                  <li>• 세탁/수선 케어서비스</li>
                                </ul>
                              </td>
                              <td>
                                <p>[앳홈, 택배]<br />수거/수령지(수령인, 휴대폰번호, 주소), 연락처, 이메일, 공동현관 출입번호</p>
                              </td>
                              <td rowspan="2">
                                <span>회원탈퇴 및 동의철회 시까지</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p>[매장방문]<br />방문매장, 휴대폰번호</p>
                              </td>
                            </tr>
                            <tr>
                              <td rowspan="3">
                                <span>비회원</span>
                              </td>
                              <td>
                                <ul class="indent-10">
                                  <li>• 상품의 배송, 반품, 교환, 회수 및 배송지 관리</li>
                                </ul>
                              </td>
                              <td>
                                <p>[주문자 정보]<br />휴대폰 번호, 이메일, 주문자 성명, 구매비밀번호</p>
                                <p class="mt-10">[배송지 정보]<br />수령인 성명, 휴대폰 번호, 주소, 수령인 연락처, 수령인 이메일, 공동현관 출입번호</p>
                              </td>
                              <td class="v-align-m" rowspan="2">
                                <span>5년(전자상거래법 제6조)</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <ul class="indent-10">
                                  <li>• 상품의 결제</li>
                                </ul>
                              </td>
                              <td>
                                <span>카드결제(카드사명), 계좌이체(은행명)</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <ul class="indent-10">
                                  <li>• 쇼핑몰 이용 상담 및 서비스 불만 처리</li>
                                </ul>
                              </td>
                              <td>
                                <p>1) 유선상담<br />성명, 휴대폰번호</p>
                                <p class="mt-10">2) 카카오톡 상담<br />성명, 휴대폰번호</p>
                              </td>
                              <td>
                                <span>3년(전자상거래법 제6조)</span>
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <p>개인정보보호법 제15조제1항제2호<br />(법률에 특별한 규정)</p>
                                <p class="mt-10">소득세법 제21조(기타소득), 제127조(원천징수의무),제164조(지급명세서의 제출)</p>
                              </th>
                              <td>
                                <span>제세공과금</span>
                              </td>
                              <td>
                                <ul class="indent-10">
                                  <li>• 제세공과금 납부</li>
                                </ul>
                              </td>
                              <td>
                                <span>이름, 주소, 주민등록번호, 소득의 종류, 소득금액</span>
                              </td>
                              <td>
                                <span>5년(국세기본법 제85조의3 및 법인세법 제116조)</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <p class="fnt-14 mt-10">※ 결제에 필요한 정보(신용카드, 휴대폰결제, 계좌이체 등)는 PG사에서 직접 수집합니다.</p>
                      </div>
                    </li>
                    
                    <li>
                      <span class="num-list">② 고객의 동의를 받고 수집하는 개인정보<br />“더한섬닷컴”은 다음의 개인정보 항목을 「개인정보보호법」 제15조 제1항 제1호 및 제22조 제1항 제7호에 따라 고객의 동의를 받아 처리하고 있습니다.</span>

                      <div class="tblwrap">
                        <table>
                            <caption>고객의 동의를 받고 수집하는 개인정보 내용</caption>
                            <colgroup>
                              <col style="width:20%;">
                              <col style="width:30%;">
                              <col style="width:30%;">
                              <col style="width:20%;">
                            </colgroup>
                            <thead>
                              <tr>
                                  <th scope="col">구분</th>
                                  <th scope="col">수집 목적</th>
                                  <th scope="col">수집 및 이용 항목</th>
                                  <th scope="col">보유기간</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th>고객상담</th>
                                <td>
                                  <ul class="indent-10">
                                    <li>• 매장 이용 상담 및 서비스 불만 처리</li>
                                  </ul>
                                </td>
                                <td>
                                  <span>[오프라인 매장 문의]<br />성명, 휴대폰번호</span>
                                </td>
                                <td>3년(전자상거래법 제6조)</td>
                              </tr>
                              <tr>
                                <th>마케팅</th>
                                <td>
                                  <ul class="indent-10">
                                    <li>• 마케팅/광고성 정보 발송</li>
                                  </ul>
                                </td>
                                <td>
                                  <span>휴대폰번호, 이메일</span>
                                </td>
                                <td class="v-align-m" rowspan="3">
                                  <span>회원탈퇴 및 동의철회 시까지</span>
                                </td>
                              </tr>
                              <tr>
                                <th>이벤트</th>
                                <td>
                                  <ul class="indent-10">
                                    <li>• 이벤트 참여</li>
                                    <li>• 프로모션 진행</li>
                                    <li>• 경품 배송</li>
                                  </ul>
                                </td>
                                <td>
                                  <span>아이디, 성명, 휴대폰번호, 성별, 연령, 이메일, 주소(경품 배송 시)</span>
                                </td>
                              </tr>
                              <tr>
                                <th>결제 취소 및 환불</th>
                                <td>
                                  <ul class="indent-10">
                                    <li>• 상품의 취소 및 환불</li>
                                  </ul>
                                </td>
                                <td>
                                  <p>환불계좌정보(성명(예금주), 은행, 계좌번호)</p>
                                </td>
                              </tr>
                            </tbody>
                        </table>
                      </div>
                    </li>

                    <li>
                      <span class="num-list">③ 서비스 이용 과정에서 자동으로 생성되는 수집하는 개인정보</span>

                      <div class="tblwrap">
                        <table>
                            <caption>서비스 이용 과정에서 자동으로 생성되는 수집하는 개인정보 내용</caption>
                            <colgroup>
                              <col style="width:10%;">
                              <col style="width:10%;">
                              <col style="width:30%;">
                              <col style="width:30%;">
                              <col style="width:20%;">
                            </colgroup>
                            <thead>
                              <tr>
                                  <th scope="col" colspan="2">구분</th>
                                  <th scope="col">수집 목적</th>
                                  <th scope="col">수집 항목</th>
                                  <th scope="col">보유기간</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th class="v-align-m" rowspan="3">서비스 이용기록</th>
                                <td>
                                  <span>PC (WEB)</span>
                                </td>
                                <td rowspan="3">
                                  <ul class="indent-10">
                                    <li>• 사용자 환경설정 및 세션정보 저장, 기능 최적화</li>
                                    <li>• 마케팅 및 홍보 등을 위한 고객분석</li>
                                    <li>• 통계 및 연구조사</li>
                                  </ul>
                                </td>
                                <td>
                                  <span>IP Address, 쿠키, 방문일시, 서비스 이용기록</span>
                                </td>
                                <td rowspan="3" class="v-align-m">"회원탈퇴 또는 동의철회 시 까지<br />※ 단, 쿠키의 경우 브라우저 종료 시 만료되며, 앱 수집정보는 앱 삭제 시 만료됨"</td>
                              </tr>
                              <tr>
                                <td>
                                  <span>Mobile (WEB)</span>
                                </td>
                                <td>
                                  <span>모바일 기기정보 : OS종류 및 버전, 디바이스 종류, 광고식별자</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span>Mobile (APP)</span>
                                </td>
                                <td>
                                  <p>모바일 기기정보 : OS종류 및 버전, 디바이스 종류, 광고식별자</p>
                                  <p class="mt-10">앱 수집정보 : UUID, PUSH TOKEN</p>
                                </td>
                              </tr>
                            </tbody>
                        </table>
                        <!-- <p class="fnt-14 mt-10">※ 더한섬닷컴 앱 이용 고객의 접근권한 허용 시 고객의 모든 모바일 기기정보가 수집되는 것은 아니며, 서비스 실행 시 필요한 범위 내에서 수집됩니다</p> -->
                      </div>
                    </li>
                    <!-- <li>
                      <span class="num-list">③ 앱 설치 시 접근권한 안내</span>

                      <div class="tblwrap">
                        <table>
                            <caption>앱 설치 시 접근권한 안내 내용</caption>
                            <colgroup>
                              <col style="width:20%;">
                              <col style="width:30%;">
                              <col style="width:30%;">
                              <col style="width:20%;">
                            </colgroup>
                            <thead>
                              <tr>
                                  <th scope="col">구분</th>
                                  <th scope="col">접근 항목</th>
                                  <th scope="col">접근 목적</th>
                                  <th scope="col">비고</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th>필수</th>
                                <td>
                                  <span>기기 및 앱 기록</span>
                                </td>
                                <td>
                                  <span>앱 서비스 최적화 및 오류 확인</span>
                                </td>
                                <td></td>
                              </tr>
                              <tr>
                                <th rowspan="8" class="v-align-m_mo">선택</th>
                                <td>
                                  <span>알림</span>
                                </td>
                                <td>
                                  <span>이벤트 마케팅 푸시알림</span>
                                </td>
                                <td class="v-align-m" rowspan="8">선택적 접근 권한은 동의하지 않아도 기본 서비스 이용 가능</td>
                              </tr>
                              <tr>
                                <td>
                                  <span>위치</span>
                                </td>
                                <td>
                                  <span>사용자 근처 매장 위치 안내</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span>카메라</span>
                                </td>
                                <td>
                                  <span>스타일 LIVE, 포토 상품평, 1:1 문의, 상품 Q&amp;A, 고객의 소리, 이미지 검색 시 사진 및 동영상 촬영</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span>사진/저장공간<br>(사진, 미디어, 파일)</span>
                                </td>
                                <td>
                                  <span>스타일 LIVE, 포토 상품평, 1:1 문의, 상품 Q&amp;A, 고객의 소리, 이미지 검색 시 사진 및 파일 업로드</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span>전화</span>
                                </td>
                                <td>
                                  <span>매장 및 고객센터 전화통화 (Android)</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span>연락처</span>
                                </td>
                                <td>
                                  <span>e-gift card 선물하기 시 연락처 목록 가져오기</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span>마이크</span>
                                </td>
                                <td>
                                  <span>스타일라이브 작성 및 동영상 상품평 촬영, 매장 및 고객센터 전화통화 (iOS)</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span>생체인증</span>
                                </td>
                                <td>
                                  <span>로그인 시 생체인증 정보 사용</span>
                                </td>
                              </tr>
                            </tbody>
                        </table>
                        <p class="fnt-14 mt-10">※ 더한섬닷컴 앱 접근권한 동의 또는 철회방법</p>
                        <ol>
                          <li>- 모바일 기기 및 앱의 설정 기능을 통해 아래와 같은 방법으로 설정하실 수 있으며, 일부 버전에 따라 권한 설정이 불가할 수도 있습니다.</li>
                          <li>- 안드로이드 계열 : 설정 &gt; 앱 &gt; 더한섬닷컴 앱 선택 &gt; 권한 &gt; 접근권한별 동의 또는 철회 선택</li>
                          <li>- IOS 계열 : 설정 &gt; 더한섬닷컴 앱 선택 &gt; 접근권한별 동의 또는 철회 선택</li>
                        </ol>
                      </div>
                    </li> -->
                </ol>
              </section>

              <section id="privacy02">
                <ul class="icons-wrap">
                  <li>
                    <i class="icon-privacy-36 icon-22"></i>
                  </li>
                </ul>
                <h4>2. 장기간 미사용 고객의 개인정보 파기</h4>
                <ol class="indent-0">
                  <li>
                    <span class="num-list">① “더한섬닷컴”은 고객이 5년간 온라인몰에서 로그인, 상담 등 이용 내역도 없는 경우 자동 탈퇴되거나, 개인정보 수집에 대한 동의 철회 요청이 있는 경우에 해당 회원의 개인정보를 지체없이 파기하고 있습니다. 다만, 관련 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는 해당 법령에서 요구되는 기간 동안 보관 후 경과 시 파기합니다.</span>
                  </li>
                  <li>
                    <span class="num-list">② “더한섬닷컴”은 장기간 미사용 고객에 대한 회원 탈퇴 30일 전까지 개인정보가 파기되는 사실, 기간 만료일 및 파기되는 개인정보 항목을 이메일, 문자 등 고객에게 통지 가능한 방법으로 알리고 있습니다.</span>
                  </li>
                  <li>
                    <span class="num-list">③ 장기간 미사용으로 인해 자동 회원탈퇴를 원하지 않으시는 경우, 기간 만료 전 온라인몰 로그인 또는 고객센터에 연락 하시면 됩니다.</span>
                  </li>
                </ol>
              </section>

              <section id="privacy03">
                <ul class="icons-wrap">
                  <li>
                    <i class="icon-privacy-36 icon-28"></i>
                  </li>
                </ul>
                <h4>3. 만14세 미만 아동의 개인정보 처리에 관한 사항</h4>
                <p>“더한섬닷컴”은 법정대리인의 동의가 필요한 만 14세 미만 아동의 회원가입과 개인정보를 수집하지 않습니다.</p>
              </section>

              <section id="privacy04">
                <ul class="icons-wrap">
                  <li>
                    <i class="icon-privacy-36 icon-22"></i>
                  </li>
                </ul>
                <h4>4. 개인정보의 파기 절차 및 방법</h4>
                <ol class="indent-0">
                  <li>
                    <span class="num-list">① “더한섬닷컴”은 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기(삭제)합니다. 다만, 아래 표와 같이 관련 법령에 따라 개인정보를 계속 보유∙이용하여야 하는 경우에는 파기하지 않고 일정 기간 보관합니다. </span>

                    <div class="tblwrap">
                      <table>
                        <caption>법정 의무 수집 정보 내용</caption>
                        <colgroup>
                          <col style="width:30%;">
                          <col style="width:50%;">
                          <col style="width:20%;">
                        </colgroup>
                        <thead>
                          <tr>
                              <th scope="col">관련 법률</th>
                              <th scope="col">보존 항목</th>
                              <th scope="col">보유 기간</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="b-l-none">통신비밀보호법 제15조의2(전기통신사업자의 협조의무)</td>
                            <td>
                              <span>컴퓨터 통신 및 인터넷 로그기록자료, 접속지 추적자료(IP, 접속시각)</span>
                            </td>
                            <td>3개월</td>
                          </tr>
                          <tr>
                            <td class="b-l-none v-align-m" rowspan="4">전자상거래등에서의 소비자보호에 관한 법률 제6조(거래기록의 보존 등)</td>
                            <td>
                              <span>소비자의 불만 또는 분쟁처리에 관한 기록</span>
                            </td>
                            <td>3년</td>
                          </tr>
                          <tr>
                            <td>
                              <span>계약 또는 청약철회 등에 관한 기록</span>
                            </td>
                            <td rowspan="2" class="v-align-m">5년</td>
                          </tr>
                          <tr>
                            <td>
                              <span>대금결제 및 재화 등의 공급에 관한 기록</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span>표시/광고에 관한 기록</span>
                            </td>
                            <td>6개월</td>
                          </tr>
                          <tr>
                            <td class="b-l-none">
                              <span>국세기본법 제85조3(장부 등의 비치와 보존) 및 법인세법 116조(지출증명서류의 수취 및 보관)</span>
                            </td>
                            <td>
                              <span>세법이 규정하는 모든 거래에 관한 장부 및 증빙서류</span>
                            </td>
                            <td>5년</td>
                          </tr>
                          
                        </tbody>
                      </table>
                      <!-- <p class="fnt-14 mt-10">※ 소득세법에 따라 경품 지급 등을 위한 제세공과금 처리 목적으로 주민등록번호 등을 수집할 수 있습니다.</p> -->
                    </div>
                  </li>
                  <li>
                    <span class="num-list">② 고객으로부터 수집∙이용의 동의를 받은 개인정보를 보유기간이 경과하거나 수집∙이용의 목적이 달성되었음에도 불구하고 「전자상거래 등에서의 소비자보호에 관한 법률」 등 관련법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 접근이 엄격히 통제된 별도의 데이터베이스(DB)로 옮겨서 보존합니다.</span>
                  </li>
                  <li>
                    <span class="num-list">③ (파기절차)”더한섬닷컴”은 보유 목적을 달성을 개인정보의 파기 절차는 사전에 정의된 절차에따른 자동화에 의한 파기와 수동 방식의 2가지 절차로 진행합니다.</span>
                    <ul class="mt-5 indent-14">
                      <li>• 자동화된 절차에 의한 파기: 회원탈퇴, 동의 철회, 구매 및 배송정보 등은 시스템에 사전에 설정된 프로그램(자동화)으로 해당 기간이 되면 자동으로 파기(삭제)를 함</li>
                      <li>• 수동방식(직접) 파기: 자동화 절차가 적용되지 않은 개인정보는 해당 업무담당자가 담당 책임자에게 파기 건 보고 및 승인 요청 → 서비스 유지보수 담당자에게 파기 요청 → 파기 요청을 받은 서비스 유지보수 담당자는 파기요청 내용대로 시스템에서 해당 개인정보 파기 → 서비스 유지보수 담당자는 파기 결과를 요청 파기 요청 담당자에게 파기 결과를 회신하는 절차로 진행 함</li>
                    </ul>
                  </li>
                  <li>
                    <span class="num-list">④ (파기방법)개인정보 파기(삭제)방법은 다음과 같습니다.</span>
                    <ul class="mt-5 indent-14">
                      <li>• 데이터베이스나 파일에 저장된 개인정보는 재생할 수 없는 방법으로 파기(삭제)</li>
                      <li>• 종이에 출력된 개인정보는 분쇄기로 분쇄하여 파기</li>
                    </ul>
                  </li>
                </ol>
              </section>

              <section id="privacy05">
                <ul class="icons-wrap">
                  <li>
                    <i class="icon-privacy-36 icon-18"></i>
                  </li>
                </ul>
                <h4>5. 개인정보의 제3자 제공</h4>
                <p>“더한섬닷컴”은 고객의 동의, 법률로 정해진 규정 등 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공하며, 그 이외에는 고객의 개인정보를 제3자에게 제공하지 않습니다.</p>
                <ol class="indent-0">
                  <li>
                    <span class="num-list">① 「개인정보보호법」 제17조 제1항 제1호(정보주체의 동의)에 따라 고객의 동의를 얻어 필요 최소한의 범위로만 제공합니다.</span>

                    <div class="tblwrap">
                      <table>
                        <caption>개인정보의 제3자 제공 내용</caption>
                        <colgroup>
                          <col style="width:20%;">
                          <col style="width:30%;">
                          <col style="width:30%;">
                          <col style="width:20%;">
                        </colgroup>
                        <thead>
                          <tr>
                              <th scope="col">제공받는 자</th>
                              <th scope="col">제공 목적</th>
                              <th scope="col">제공 항목</th>
                              <th scope="col">보유 기간</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="b-l-none">㈜현대백화점<br>(H.Point서비스 운영사)</td>
                            <td>
                              <ul class="indent-10">
                                <li>• H.Point 회원가입</li>
                                <li>• 로그인</li>
                                <li>• H.Point 적립 및 사용</li>
                                <li>• H.Point 멤버십 서비스 제공</li>
                              </ul>
                            </td>
                            <td>
                              <span>H.Point 통합멤버십(회원번호, 아이디, 비밀번호), 성명, 생년월일, 나이, 성별, 내/외국인, 휴대폰번호, 이메일, 연계정보(CI), 구매정보, 결제정보(H.Point 적립 물품에 한함)</span>
                            </td>
                            <td class="v-align-m" rowspan="3">회원탈퇴 및 동의철회 시까지</td>
                          </tr>
                          <tr>
                            <td class="b-l-none">한섬라이프앤</td>
                            <td>
                              <ul class="indent-10">
                                <li>• 한섬라이프앤 멤버십 적립 사용, 기타 멤버십 서비스 제공</li>
                                <li>• 한섬라이프앤 제품 및 서비스 안내 제반 마케팅 활동</li>
                              </ul>
                            </td>
                            <td>
                              <span>성명, 생년월일, 휴대폰번호, 성별, 구매정보, 연계정보(CI)</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="b-l-none">OUR LEGACY 국내 대리 사업자(한섬과 계약 종료 시 사업을 이어받을 국내 신규 사업자)</td>
                            <td>
                              <ul class="indent-10">
                                <li>• 마케팅 활용 및 브랜드 정보 공유</li>
                              </ul>
                            </td>
                            <td>
                              <span>성명, 이메일주소</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </li>
                  <li>
                    <span class="num-list">② “더한섬닷컴”은 다음과 같이 고객의 동의 없이 관계기관에 개인정보를 제공할 수 있습니다.</span>

                    <div class="tblwrap">
                      <table>
                        <caption>고객의 동의 없이 관계기관에 개인정보를 제공 내용</caption>
                        <colgroup>
                          <col style="width:15%;">
                          <col style="width:25%;">
                          <col style="width:20%;">
                          <col style="width:20%;">
                          <col style="width:20%;">
                        </colgroup>
                        <thead>
                          <tr>
                              <th scope="col">법적 근거</th>
                              <th scope="col">제공 받는 자</th>
                              <th scope="col">제공 목적</th>
                              <th scope="col">제공 항목</th>
                              <th scope="col">보유 기간</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="b-l-none">개인정보 보호법 제18조 제2항 제2호 형사소송법 제215조, 민사소송법 제344조</td>
                            <td>
                              <span>관할 경찰청, 검찰청, 법원</span>
                            </td>
                            <td>
                              <span>법령상 의무 수행</span>
                            </td>
                            <td>
                              <span>법원, 수사기관에서 요청한 자료</span>
                            </td>
                            <td class="v-align-m" rowspan="2">관련 법령에서 정하고 있는 바에 따름</td>
                          </tr>
                          <tr>
                            <td class="b-l-none">개인정보 보호법 제17조 제1항 제2호, 제15조 제1항 제2호 소득세법 제21조(기타소득), 제127조(원천징수의무),제164조(지급명세서의 제출)</td>
                            <td>
                              <span>국세청(강남세무서)</span>
                            </td>
                            <td>
                              <span>세법에 따른 원천징수 의무 수행</span>
                            </td>
                            <td>
                              <span>이름, 주소, 주민등록번호, 소득의 종류, 소득 금액</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </li>

                  <li>
                    <span class="num-list">③ 정부 관계부처가 합동으로 발표한 「긴급상황 시 개인정보 처리 및 보호수칙」에 따라 재난, 감염병, 급박한 생명∙신체 위험을 초래하는 사건∙사고, 급박한 재산 손실 등의 긴급상황이 발생하는 경우 정보주체의 동의 없이 관계기관에 개인정보를 제공할 수 있습니다. 자세한 사항은 <a href="https://www.pipc.go.kr/np/cop/bbs/selectBoardArticle.do?bbsId=BS217&mCode=D010030000&nttId=7641#LINK" class="bold" target="_blank">여기</a>를 눌러 확인하시기 바랍니다.</span>
                  </li>
                </ol>
              </section>

              <section id="product2">
                <ul class="icons-wrap">
                  <li>
                    <i class="icon-privacy-36 icon-19"></i>
                  </li>
                </ul>
                <h4>6. 개인정보 처리의 위탁 </h4>
                <ol class="indent-0">
                  <li>
                    <span class="num-list">① “더한섬닷컴”은 고객의 서비스 이용을 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다</span>
                  </li>
                  <li>
                    <span class="num-list">② “더한섬닷컴”은 위탁계약 체결 시 「개인정보 보호법」 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 안전성 확보조치, 재위탁 제한, 수탁자에 대한 관리・감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.</span>
                  </li>
                  <li>
                    <span class="num-list">③ 「개인정보 보호법」 제26조 제6항에 따라 수탁자가 고객의 개인정보 처리업무를 재 위탁하는 경우 “더한섬닷컴”의 동의를 받도록 하고 있습니다.</span>
                  </li>
                  <li>
                    <span class="num-list">④ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.</span>
                  </li>
                  <li>
                    <span class="num-list">⑤ 개인정보 위탁 및 재 위탁 처리 현황</span>
                  </li>
                  <li>
                    <p class="mt-10">• 개인정보 처리업무 위탁 현황</p>
                    <div class="tblwrap">
                      <table>
                        <caption>개인정보 처리의 위탁 내용</caption>
                        <colgroup>
                          <col style="width:50%;">
                          <col style="width:50%;">
                        </colgroup>
                        <thead>
                          <tr>
                              <th scope="col">위탁받는 자(수탁자)</th>
                              <th scope="col">위탁업무</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="b-l-none">㈜유베이스, ㈜SK엠앤서비스</td>
                            <td>고객 상담 업무</td>
                          </tr>
                          <tr>
                            <td class="b-l-none">우정사업본부, ㈜DHL코리아, CJ대한통운㈜, 로젠 주식회사</td>
                            <td>주문 상품의 배송</td>
                          </tr>
                          <tr>
                            <td class="b-l-none">㈜씰리프로모션</td>
                            <td>케어서비스(세탁/수선) 배송 업무</td>
                          </tr>
                          <tr>
                            <td class="b-l-none">㈜고고밴코리아</td>
                            <td>퀵 배송 업무</td>
                          </tr>
                          <tr>
                            <td class="b-l-none">NICE평가정보㈜</td>
                            <td>본인확인</td>
                          </tr>
                          <tr>
                            <td class="b-l-none">㈜KG이니시스, ㈜LG CNS, ㈜토스페이먼츠</td>
                            <td>결제 정보</td>
                          </tr>
                          <tr>
                            <td class="b-l-none">㈜플래티어, ㈜현대퓨처넷, ㈜카카오, ㈜KT</td>
                            <td>E-MAIL, SMS, MMS, APP PUSH, 카카오톡 발송</td>
                          </tr>
                          <tr>
                            <td class="b-l-none">㈜아이패스물류, ㈜에스엘프로바이더, ㈜태오</td>
                            <td>물류 서비스</td>
                          </tr>
                          <tr>
                            <td class="b-l-none">㈜현대퓨처넷</td>
                            <td>서비스 시스템 유지/관리</td>
                          </tr>
                          <tr>
                            <td class="b-l-none">HCN</td>
                            <td>콜센터 장비 및 시스템 제공</td>
                          </tr>
                          <tr>
                            <td class="b-l-none">트로반트㈜</td>
                            <td>의뢰 상품의 세탁/수선 업무</td>
                          </tr>
                          <tr>
                            <td class="b-l-none">㈜스펙트라, ㈜디케이테크인</td>
                            <td>고객 상담 챗봇/채팅상담</td>
                          </tr>
                          <tr>
                            <td class="b-l-none">㈜플래티어</td>
                            <td>개인화 마케팅</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </li>
                  <li>
                    <p class="mt-20">• 개인정보 처리업무 재 위탁 현황</p>
                    <div class="tblwrap">
                      <table>
                        <caption>개인정보 처리의 재 위탁 내용</caption>
                        <colgroup>
                          <col style="width:25%;">
                          <col style="width:35%;">
                          <col style="width:40%;">
                        </colgroup>
                        <thead>
                          <tr>
                              <th scope="col">원 수탁자(재 위탁자)</th>
                              <th scope="col">재 수탁자</th>
                              <th scope="col">재 위탁 업무</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="b-l-none" rowspan="2">㈜현대퓨처넷</td>
                            <td>CJ올리브네트웍스</td>
                            <td>카카오톡 발송</td>
                          </tr>
                          <tr>
                            <td>㈜나노아이티</td>
                            <td>기술/유지보수 업무 지원</td>
                          </tr>
                          <tr>
                            <td class="b-l-none">㈜KT</td>
                            <td>㈜모노커뮤니케이션즈</td>
                            <td>기술/유지보수 업무 지원</td>
                          </tr>
                          <tr>
                            <td class="b-l-none">트로반트㈜</td>
                            <td>로젠택배</td>
                            <td>상품 세탁/수선 완료 후 배송 업무</td>
                          </tr>
                          <tr>
                            <td class="b-l-none" rowspan="2">㈜태오</td>
                            <td>롯데택배</td>
                            <td>주문 상품의 배송(뷰티)</td>
                          </tr>
                          <tr>
                            <td>핌즈㈜(이지어드민)</td>
                            <td>주문 관련 정보(뷰티)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </li>
                </ol>
              </section>

              <section id="privacy07">
                <ul class="icons-wrap">
                  <li>
                    <i class="icon-privacy-36 icon-13"></i>
                  </li>
                </ul>
                <h4>7. 고객의 동의없이 추가적인 이용・제공을 위한 판단 기준</h4>
                <p>“더한섬닷컴”은 고객이 동의한 범위 내에서만 개인정보를 이용 및 제공합니다.  「개인정보 보호법」 제15조제3항 또는 제17조제4항에 따라 고객의 동의없이 개인정보를 추가적으로 이용 또는 제공하는 경우는 아래의 판단기준에 따라 결정하도록 하겠습니다.</p>
                <ol class="indent-0">
                  <li>
                    <span class="num-list">가. 개인정보를 계속 이용 및 제공하는 목적이 최초수집 목적과 관련이 있을 것</span>
                  </li>
                  <li>
                    <span class="num-list">나. 개인정보를 수집한 정황 또는 처리 관행에 비추어 볼 때 개 인정보의 추가적인 이용 또는 제공에 대한 예측 가능성이 있는지 여부</span>
                  </li>
                  <li>
                    <span class="num-list">다. 고객의 이익을 부당하게 침해하는지 여부</span>
                  </li>
                  <li>
                    <span class="num-list">라. 가명처리(예, 마스킹 등) 또는 암호화 등 안전성 확보에 필요한 조치를 하였는지 여부</span>
                  </li>
                </ol>
              </section>

              <section id="privacy08">
                <ul class="icons-wrap">
                  <li>
                    <i class="icon-privacy-36 icon-24"></i>
                  </li>
                </ul>
                <h4>8. 개인정보의 안전성 확보조치</h4>
                <p>“더한섬닷컴”은 고객 개인정보의 안전성 확보를 위해 다음과 같은 보호조치를 취하고 있습니다.</p>
                <ol class="indent-0">
                  <li>가. 관리적 조치: 내부관리계획 수립∙시행, 임직원 및 외부용역사 인원 개인정보보호 교육</li>
                  <li>나. 기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 중요 개인정보의 암호화 및 마스킹, 보안프로그램 설치, 인터넷 접속통제, 24X365보안관제 모니터링</li>
                  <li>다. 물리적 조치: 전산실, 사무실 등 주요 공간 출입통제</li>
                </ol>
              </section>

              <section id="privacy09">
                <ul class="icons-wrap">
                  <li>
                    <i class="icon-privacy-36 icon-01"></i>
                  </li>
                  <li>
                    <i class="icon-privacy-36 icon-18"></i>
                  </li>
                </ul>
                <h4>9. 민감정보의 공개 가능성 및 비공개를 선택하는 방법</h4>
                <ol class="indent-0">
                  <li>
                    <span class="num-list">① ‘민감정보’란 개인의 사상ㆍ신념, 노동조합ㆍ정당의 가입ㆍ탈퇴, 정치적 견해, 건강, 성생활 등에 관한 정보, 그 밖에 정보주체의 사생활을 현저히 침해할 우려가 있는 개인정보를 말합니다.</span>
                  </li>
                  <li>
                    <span class="num-list">② “더한섬닷컴”은 민감정보를 수집하지 않습니다.</span>
                  </li>
                  <li>
                    <span class="num-list">③ “더한섬닷컴”은 서비스를 제공하는 과정에서 고객의 사생활을 침해할 위험이 있는 민감정보가 포함될 경우에는 고객의 동의를 받고 수집하고, 민감정보의 공개 및 비공개를 선택할 수 있는 방법을 안내하겠습니다.</span>
                  </li>
                </ol>
              </section>

              <section id="privacy10">
                <ul class="icons-wrap">
                  <li>
                    <i class="icon-privacy-36 icon-14"></i>
                  </li>
                </ul>
                <h4>10. 개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항</h4>
                <ol class="indent-0">
                  <li>
                    <span class="num-list">① “더한섬닷컴”은 고객에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.</span>
                  </li>
                  <li>
                    <span class="num-list">② 쿠키는 온라인몰을 운영하는데 이용되는 서버가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 또는 모바일 기기에 저장됩니다.</span>
                    <ol>
                      <li>가. 쿠키의 사용목적
                        <ul class="mt-5">
                          <li>• 개인의 관심 분야에 따라 차별화된 정보를 제공</li>
                          <li>• 접속빈도 또는 방문시간 등을 분석하고 이용자의 취향과 관심분야를 파악하여 타겟 마케팅 및 서비스 개선의 척도로 활용</li>
                          <li>• 쇼핑한 품목들에 대한 정보와 관심있게 둘러본 품목을 추적하여 개인 맞춤 쇼핑서비스 제공</li>
                        </ul>
                      </li>
                      <li class="no-indent">나. 쿠키의 설치·운영 및 거부방법
                        <ul class="mt-5">
                          <li>고객은 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 고객은 웹 브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수도 있습니다. 다만, 쿠키 수집을 거부할 경우 "더한섬닷컴" 서비스 사용이 불편 해지며, 로그인이 필요한 일부 서비스 이용에 어려움이 있을 수 있습니다.</li>
                        </ul>
                      </li>
                    </ol>
                    <div class="tblwrap">
                      <table>
                        <caption>쿠키의 설치·운영 및 거부방법 내용</caption>
                        <colgroup>
                          <col style="width:20%;">
                          <col style="width:80%;">
                        </colgroup>
                        <thead>
                          <tr>
                            <th>구분</th>
                            <th>쿠키 수집허용 및 거부 방법</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>Chrome</th>
                            <td>웹/모바일 브라우저 오른쪽 상단의 더보기 &gt; 설정 &gt; 개인정보 보호 및 보안 &gt; 인터넷 사용 기록 삭제</td>
                          </tr>
                          <tr>
                            <th>Edge</th>
                            <td>웹/모바일 브라우저 오른쪽 상단의 설정 및 기타 &gt; 설정 &gt; 쿠키 및 사이트 권한 &gt; 쿠키 및 사이트 데이터 관리 삭제</td>
                          </tr>
                          <tr>
                            <th>삼성 인터넷</th>
                            <td>모바일 브라우저 설정 &gt; 인터넷 사용 기록 &gt; 기록 삭제</td>
                          </tr>
                          <tr>
                            <th>Safari</th>
                            <td>모바일 기기 설정 &gt; Safari &gt; 고급 &gt; 모든 쿠키 차단</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </li>
                </ol>
              </section>

              <section id="privacy11">
                <ul class="icons-wrap">
                  <li>
                    <i class="icon-privacy-36 icon-15"></i>
                  </li>
                </ul>
                <h4>11. 행태정보의 수집·이용·제공 및 거부 등에 관한 사항</h4>
                <ol class="indent-0">
                  <li>
                    <span class="num-list">① 행태정보란, 웹 사이트 방문 이력, 앱 사용 이력, 구매 및 검색 이력 등 이용자의 관심, 흥미, 기호 및 성향 등을 파악하고 분석할 수 있는 온라인상의 이용자 활동정보를 말합니다.</span>
                  </li>
                  <li>
                    <span class="num-list">② “더한섬닷컴”은 온라인몰 서비스 이용과정에서 고객에게 최적화된 맞춤형 서비스 및 혜택, 온라인 맞춤형 광고 등을 제공하기 아래와 같이 행태정보를 수집·이용하고 있습니다.</span>

                    <div class="tblwrap">
                      <table>
                        <caption>행태정보의 수집·이용 및 거부 등에 관한 내용</caption>
                        <colgroup>
                          <col style="width:35%;">
                          <col style="width:65%;">
                        </colgroup>
                        <tbody class="n-thead">
                          <tr>
                            <th>수집 항목</th>
                            <td>고객의 "더한섬닷컴" 웹/앱 서비스 방문이력, 검색이력, 구매이력, 광고식별자 (ADID/IDFA)</td>
                          </tr>
                          <tr>
                            <th>수집 방법</th>
                            <td>고객의 “더한섬닷컴” 웹/앱 방문/실행 시 자동수집</td>
                          </tr>
                          <tr>
                            <th>수집 목적</th>
                            <td>
                              <ul class="indent-10">
                                <li>• 고객 개인의 관심 분야에 따른 정보 제공</li>
                                <li>• 접속빈도 또는 방문시간 등을 분석하고 이용자의 취향과 관심분야를 파악하여 타겟(target)마케팅 및 서비스 개선 척도로 활용</li>
                                <li>• 쇼핑한 품목들에 대한 정보와 관심있게 둘러본 품목을 추척하여 개인 맞춤 쇼핑서비스 제공</li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <th>보유 및 이용 기간</th>
                            <td>회원탈퇴 또는 수집일로부터 1년 3개월간 이용 및 보유 후 파기</td>
                          </tr>
                          <tr>
                            <th>이용자 통제권 행사 방법</th>
                            <td>
                              <p>[웹브라우저를 통한 맞춤형 광고 차단/허용]</p>
                              <ul class="indent-0 mt-5">
                                <li>
                                  <span>• 크롬(Chrome)</span>
                                  <ul class="indent-14">
                                    <li>- Chrome에서 오른쪽 상단 ’︙’ 표시를 클릭한 후, 「설정」표시를 클릭합니다.</li>
                                    <li>- 설정 페이지 좌측에 「개인정보 보호 및 보안」을 클릭하고, 「인터넷 사용기록 삭제」를 클릭하여 인터넷 사용기록 삭제 여부를 선택합니다.</li>
                                    <li>- 동일하게 설정 페이지 좌측에 「개인정보 보호 및 보안」을 클릭 후 「서드파티쿠키」를 클릭하여 「서드파티쿠키 차단」 여부를 선택합니다.</li>
                                  </ul>
                                </li>
                                <li>
                                  <span>• 엣지(Edge)</span>
                                  <ul class="indent-14">
                                    <li>- Edge에서 오른쪽 상단 ‘∙∙∙’ 표시를 클릭한 후, , 「설정」을 클릭합니다.</li>
                                    <li>- 설정 페이지 좌측의 , 「개인정보, 검색 서비스」를 클릭 후 , 「추적방지」섹션에서 「추적방지」여부 및 수준을 선택합니다.</li>
                                    <li>- 「InPrivate를 검색할 때 항상 “엄격” 추적 방지 사용」 여부를 선택합니다.</li>
                                  </ul>
                                </li>
                              </ul>

                              <p class="mt-15">[모바일 단말기의 광고식별자 차단/허용]</p>
                              <ul class="indent-0 mt-5">
                                <li>
                                  <span>• Android : 설정 → 보안 및 개인정보보호 → 개인정보보호 → 기타 개인정보 설정 → 광고 → 광고ID 재설정 또는 삭제</span>
                                </li>
                                <li>
                                  <span>• IOS : 설정 → 개인정보보호 및 보안 → 추적 →앱 추적 허용 해제</span>
                                </li>
                              </ul>
                              <p class="mt-10">※ 모바일 OS 버전에 따라 메뉴 및 방법이 다소 상이할 수 있습니다.</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </li>
                  <li>
                    <span class="num-list">③ “더한섬닷컴”은 온라인 맞춤형 광고 등에 필요한 최소한의 행태정보만을 수집하며, 사상, 신념, 가족 및 친인척관계, 학력·병력, 기타 사회활동 경력 등 개인의 권리·이익이나 사생활을 뚜렷하게 침해할 우려가 있는 민감한 행태정보를 수집하지 않습니다.</span>
                  </li>
                  <li>
                    <span class="num-list">④ “더한섬닷컴”은 만 14세 미만임을 알고 있는 아동이나 만 14세 미만의 아동을 주 이용자로 하는 온라인 서비스로부터 맞춤형 광고 목적의 행태정보를 수집하지 않고, 만 14세 미만임을 알고 있는 아동에게는 맞춤형 광고를 제공하지 않습니다.</span>
                  </li>
                  <li>
                    <span class="num-list">⑤ “더한섬닷컴”은 모바일 앱에서 온라인 맞춤형 광고를 위하여 광고식별자를 수집· 이용합니다. 고객은 모바일 단말기의 설정 변경을 통해 앱의 맞춤형 광고를 차단·허용할 수 있습니다.</span>
                  </li>
                  <li>
                    <span class="num-list">⑥ 고객은 아래의 연락처로 행태정보와 관련하여 궁금한 사항과 거부권 행사, 피해 신고 접수 등을 문의할 수 있습니다.</span>
                    <div class="tblwrap">
                      <table>
                        <caption>행태정보와 관련 궁금한 사항과 거부권 행사, 피해 신고 접수 연락처 내용</caption>
                        <colgroup>
                          <col style="width:25%;">
                          <col style="width:35%;">
                          <col style="width:40%;">
                        </colgroup>
                        <thead>
                          <tr>
                              <th scope="col">구분</th>
                              <th scope="col">부서</th>
                              <th scope="col">연락처</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="b-l-none">개인정보 민원처리센터</td>
                            <td>
                              <ul class="indent-10">
                                <li>• 더한섬닷컴 민원처리센터</li>
                              </ul>
                            </td>
                            <td>
                              <ul class="indent-10">
                                <li>• 홈페이지: <a href="https://www.thehandsome.com">https://www.thehandsome.com</a></li>
                                <li>• 이메일: <a href="mailto:shophelp@thehandsome.com">shophelp@thehandsome.com</a></li>
                                <li>• 전화번호: 1800-5700</li>
                                <li>• 팩스번호: 02-3416-4905</li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </li>
                </ol>
              </section>

              <section id="privacy12">
                <ul class="icons-wrap">
                  <li>
                    <i class="icon-privacy-36 icon-23"></i>
                  </li>
                </ul>
                <h4>12. 정보주체와 법정대리인의 권리·의무 및 행사방법</h4>
                <ol class="indent-0">
                  <li>
                    <span class="num-list">① 고객은 "더한섬닷컴"에서 처리하는 자신의 개인정보에 대하여 「개인정보보호법」 제4조(정보주체의 권리)에서 정한 권리(아래 표 참조)를 갖고 있으며, 이에 대한 권리를 행사(이하 "권리행사"라 함)할 수 있습니다.</span>

                    <div class="border-box p-20 indent-14">
                      <p class="bold">「개인정보보호법」 제4조(정보주체의 권리)</p>
                      <ol>
                        <li>
                          <span class="num-list">1. 개인정보의 처리에 관한 정보를 제공받을 권리</span>
                        </li>
                        <li>
                          <span class="num-list">2. 개인정보의 처리에 관한 동의 여부, 동의 범위 등을 선택하고 결정할 권리</span>
                        </li>
                        <li>
                          <span class="num-list">3. 개인정보의 처리 여부를 확인하고 개인정보에 대한 열람(사본의 발급을 포함한다. 이하 같다) 및 전송을 요구할 권리</span>
                        </li>
                        <li>
                          <span class="num-list">4. 개인정보의 처리 정지, 정정ㆍ삭제 및 파기를 요구할 권리</span>
                        </li>
                        <li>
                          <span class="num-list">5. 개인정보의 처리로 인하여 발생한 피해를 신속하고 공정한 절차에 따라 구제받을 권리</span>
                        </li>
                        <li>
                          <span class="num-list">6. 완전히 자동화된 개인정보 처리에 따른 결정을 거부하거나 그에 대한 설명 등을 요구할 권리</span>
                        </li>
                      </ol>
                    </div>
                  </li>
                  <li>
                    <span class="num-list">② 권리행사는 「개인정보 보호법」 시행령 제41조 제1항에 따라 서면, 전자우편, 팩스(FAX) 등을 통하여 하실 수 있으며, “더한섬닷컴”은 이에 대해 지체없이 조치하겠습니다.</span>
                    <ul class="mt-5 indent-10">
                      <li>
                        <span>• 고객은 언제든지 “더한섬닷컴” 홈페이지의 「회원정보변경」 또는 「회원탈퇴」 항목을 클릭하여 개인정보 수집 및 이용 동의 철회의 방법으로 직접 하거나, 아래에 적힌 개인정보보호책임자 및 담당자에게 서면, 전화 또는 이메일로 연락하시면 지체 없이 조치하겠습니다.</span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span class="num-list">③ 권리행사는 고객의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수도 있습니다. 이 경우 “개인정보 처리 방법에 관한 고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.</span>
                  </li>
                  <li>
                    <span class="num-list">④ 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여 고객의 권리가 제한 될 수 있습니다.</span>
                  </li>
                  <li>
                    <span class="num-list">⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.</span>
                  </li>
                  <li>
                    <span class="num-list">⑥ “더한섬닷컴”은 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리 정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.</span>
                  </li>
                  <li>
                    <span class="num-list">⑦ 개인정보의 열람, 정정삭제, 처리정지 등의 권리 행사의 접수는 “더한섬닷컴 민원처리센터”(아래 13. 개인정보 보호책임자 및 개인정보 열람청구 표 참조)에 할 수 있습니다.  접수된 고객의 개인정보 권리행사 요구를 지체없이 처리하겠습니다.</span>
                  </li>
                </ol>
              </section>

              <section id="privacy13">
                <ul class="icons-wrap">
                  <li>
                    <i class="icon-privacy-36 icon-29"></i>
                  </li>
                  <li>
                    <i class="icon-privacy-36 icon-33"></i>
                  </li>
                </ul>
                <h4>13. 개인정보 보호책임자 및 개인정보 열람청구</h4>
                <ol class="indent-0">
                  <li>
                    <span class="num-list">① “더한섬닷컴”은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 고객의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</span>
                  </li>
                  <li>
                    <span class="num-list">② 고객은 「개인정보 보호법」 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. “더한섬닷컴”은 고객의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.</span>

                    <div class="tblwrap">
                      <table>
                        <caption>개인정보 보호책임자 및 개인정보 열람청구 내용</caption>
                        <colgroup>
                          <col style="width:25%;">
                          <col style="width:35%;">
                          <col style="width:40%;">
                        </colgroup>
                        <thead>
                          <tr>
                              <th scope="col">구분</th>
                              <th scope="col">성명/직급</th>
                              <th scope="col">연락처</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="b-l-none">개인정보보호 책임자</td>
                            <td>
                              <ul class="indent-10">
                                <li>• 성명: 윤인수</li>
                                <li>• 직급: 상무</li>
                                <li>• 소속부서: 경영지원본부</li>
                              </ul>
                            </td>
                            <td>
                              <ul class="indent-10">
                                <li>• 이메일: <a href="mailto:security_center@thehandsome.com">security_center@thehandsome.com</a></li>
                                <li>• 전화번호: 1800-5700</li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td class="b-l-none">개인정보보호 담당자</td>
                            <td>
                              <ul class="indent-10">
                                <li>• 성명: 여유정</li>
                                <li>• 직급: 수석</li>
                                <li>• 소속부서: E 기획팀</li>
                              </ul>
                            </td>
                            <td>
                              <ul class="indent-10">
                                <li>• 이메일: <a href="mailto:security_center@thehandsome.com">security_center@thehandsome.com</a></li>
                                <li>• 전화번호: 1800-5700</li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td class="b-l-none">개인정보 열람청구</td>
                            <td>
                              <ul class="indent-10">
                                <li>• 더한섬닷컴 민원처리센터</li>
                              </ul>
                            </td>
                            <td>
                              <ul class="indent-10">
                                <li>• 홈페이지: <a href="https://www.thehandsome.com ">https://www.thehandsome.com</a></li>
                                <li>• 이메일: <a href="mailto:shophelp@thehandsome.com">shophelp@thehandsome.com</a></li>
                                <li>• 전화번호: 1800-5700</li>
                                <li>• 팩스번호: 02-3416-4905</li>
                                <li>• 주 소: 05402, 서울특별시 강동구 강동대로 195(성내동)</li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </li>
                  <li>
                    <span class="num-list">③ 전화상담은 평일 오전 09:00 ~ 18:00 입니다. 주말/공휴일은 고객의 의견 게시판이나 전자우편을 이용해주시기 바랍니다.</span>
                  </li>
                  <li>
                    <span class="num-list">④ 전자우편이나 팩스 및 우편을 이용한 상담은 접수 후 빠른 시간 내에 성실하게 답변 드리겠습니다. 다만, 근무시간 이후 또는 주말 및 공휴일에는 익일 처리하는 것을 원칙으로 합니다.</span>
                  </li>
                </ol>
              </section>

              <section id="privacy14">
                <ul class="icons-wrap">
                  <li>
                    <i class="icon-privacy-36 icon-31"></i>
                  </li>
                </ul>
                <h4>14. 고객의 개인정보 권익침해에 대한 구제방법 </h4>
                <ol class="indent-0">
                  <li>
                    <span class="num-list">① “더한섬닷컴”은 고객의 개인정보자기결정권을 보장하고, 개인정보침해로 인한 상담 및 피해 구제를 위해 노력하고 있으며, 신고나 상담이 필요한 경우 아래의 담당부서로 연락해 주시기 바랍니다.</span>

                    <div class="tblwrap">
                      <table>
                        <caption>권익침해 구제방법 내용</caption>
                        <colgroup>
                          <col style="width:25%;">
                          <col style="width:35%;">
                          <col style="width:40%;">
                        </colgroup>
                        <thead>
                          <tr>
                              <th scope="col">구분</th>
                              <th scope="col">부서</th>
                              <th scope="col">연락처</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="b-l-none">“더한섬닷컴” 개인정보보호 관련 침해 신고 및 상담 청구</td>
                            <td>
                              <ul class="indent-10">
                                <li>• 더한섬닷컴 민원처리센터</li>
                              </ul>
                            </td>
                            <td>
                              <ul class="indent-10">
                                <li>• 홈페이지: <a href="https://www.thehandsome.com ">https://www.thehandsome.com</a></li>
                                <li>• 이메일: <a href="mailto:shophelp@thehandsome.com">shophelp@thehandsome.com</a></li>
                                <li>• 전화번호: 1800-5700</li>
                                <li>• 팩스번호: 02-3416-4905</li>
                                <li>• 주 소: 05402, 서울특별시 강동구 강동대로 195(성내동)</li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </li>
                  <li>
                    <span class="num-list">② 고객은 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.</span>

                    <div class="tblwrap">
                      <table>
                        <caption>개인정보침해로 인한 신고, 상담 기관 내용</caption>
                        <colgroup>
                          <col style="width:33.333%;">
                          <col style="width:33.333%;">
                          <col style="width:33.334%;">
                        </colgroup>
                        <thead>
                          <tr>
                              <th scope="col">신고 및 상담기관</th>
                              <th scope="col">전화번호</th>
                              <th scope="col">홈페이지</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="b-l-none">개인정보분쟁조정위원회</td>
                            <td>(국번없이) 1833-6972</td>
                            <td><a href="https://www.kopico.go.kr/" target="_blank">www.kopico.go.kr</a></td>
                          </tr>
                          <tr>
                            <td class="b-l-none">개인정보침해신고센터</td>
                            <td>(국번없이) 118</td>
                            <td><a href="https://privacy.kisa.or.kr/" target="_blank">privacy.kisa.or.kr</a></td>
                          </tr>
                          <tr>
                            <td class="b-l-none">대검찰청</td>
                            <td>(국번없이) 1301</td>
                            <td><a href="https://www.spo.go.kr/" target="_blank">www.spo.go.kr</a></td>
                          </tr>
                          <tr>
                            <td class="b-l-none">경찰청</td>
                            <td>(국번없이) 182</td>
                            <td><a href="https://ecrm.police.go.kr/" target="_blank">ecrm.police.go.kr</a></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </li>
                </ol>
              </section>

              <section id="privacy15">
                <ul class="icons-wrap">
                  <li>
                    <i class="icon-privacy-36 icon-25"></i>
                  </li>
                </ul>
                <h4>15. 개인정보 처리방침의 변경에 관한 사항</h4>
                <ol class="indent-0">
                  <li>
                    <span class="num-list">① 이 개인정보 처리방침은 2024년 10월 29일부터 적용됩니다.</span>
                  </li>
                  <li>
                    <span class="num-list">② 이 개인정보 처리방침은 정부의 정책, 법령, “더한섬닷컴”의 필요에 의하여 변경될 수 있으며, 내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전에 홈페이지 게시, 이메일 등을 통해 사전 공지하고, 사전 공지가 곤란한 경우 최대한 빠른 시간 내 공지합니다. 다만, 개인정보의 수집 이용 목적, 제3자 제공 대상 등 중요한 사항이 추가, 삭제 및 정정되는 경우에는 30일 전에 사전 공지합니다. 이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다.</span>
                  </li>
                  <li>
                    <span class="num-list">③ 개정된 개인정보 처리방침의 주요 내용</span>
                    <ol class="indent-0">
                      <li class="no-indent">
                        <span class="num-list">가. 주요 개정 내용</span>
                        <ul class="indent-14">
                          <li>• 고객의 동의없이 추가적인 이용제공을 위한 판단 기준 신규 추가</li>
                          <li>• 행태정보의 수집이용제공 및 거부 등에 관한 사항 현행화</li>
                          <li>• 개인정보 처리 위탁 현행화</li>
                        </ul>
                      </li>
                      <li>
                        <span class="num-list">나. 개인정보 처리방침 변경 전∙후 비교 <a href="https://www.thehandsome.com/ko/CS/csCenterNotice" class="bold">(내용 보기)</a></span>
                      </li>
                    </ol>
                  </li>
                </ol>
              </section>

              <!-- <section id="privacy12">
                <ul class="icons-wrap">
                  <li>
                    <i class="icon-privacy-36 icon-13"></i>
                  </li>
                </ul>
                <h4>12. 광고성 정보 전송</h4>
                <ol class="indent-0">
                  <li>
                    <span class="num-list">① “더한섬닷컴”은 고객의 명시적인 수신거부의사에 반하여 영리목적의 광고성 정보를 전송하지 않습니다.</span>
                  </li>
                  <li>
                    <span class="num-list">② “더한섬닷컴”은 고객께서 뉴스레터 등 전자우편 전송에 대한 동의를 한 경우 전자우편의 제목란 및 본문란에 다음 사항과 같이 고객께서 쉽게 알아 볼 수 있도록 조치합니다.</span>
                    <ol>
                      <li>1. 전자우편의 제목란: (광고)라는 문구를 제목란에 표시하지 않을 수 있으며 전자우편 본문란의 주요 내용을 표시합니다.</li>
                      <li>2. 전자우편의 본문란:
                        <ul class="mt-18 indent-14">
                          <li>• 고객께서 수신거부의 의사표시를 할 수 있는 전송자의 명칭, 전자우편주소, 전화번호 및 주소를 명시합니다.</li>
                          <li>• 고객께서 수신거부의 의사를 쉽게 표시할 수 있는 방법을 한글 및 영문으로 각각 명시합니다.</li>
                          <li>• 고객께서 동의를 한 시기 및 내용을 명시합니다.</li>
                        </ul>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <span class="num-list">③ “더한섬닷컴”은 상품정보 안내 등 온라인 마케팅을 위해 광고성 정보를 전자우편 등으로 전송하는 경우 전자우편의 제목란 및 본문란에 다음 사항과 같이 고객께서 쉽게 알아 볼 수 있도록 조치합니다.</span>
                    <ol>
                      <li>1. 전자우편의 제목란: (광고)라는 문구를 제목란의 처음에 빈칸 없이 한글로 표시하고 이어서 전자우편 본문란의 주요 내용을 표시합니다.</li>
                      <li>2. 전자우편의 본문란:
                        <ul class="mt-18 indent-14">
                          <li>• 고객께서 수신거부의 의사표시를 할 수 있는 전송자의 명칭, 전자우편주소, 전화번호 및 주소를 명시합니다.</li>
                          <li>• 고객께서 수신거부의 의사를 쉽게 표시할 수 있는 방법을 한글 및 영문으로 각각 명시합니다.</li>
                        </ul>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <span class="num-list">④ 팩스, 휴대폰 문자전송 등 전자우편 이외의 문자전송을 통해 영리목적의 광고성 정보를 전송하는 경우에는 전송내용 처음에 "(광고)"라는 문구를 표기하고 전송내용 중에 전송자의 연락처를 명시하도록 조치합니다.</span>
                  </li>
                </ol>
              </section> -->

              

              <ol class="indent-0 mt-30">
                <li>공고일자 : 2024-10-22</li>
                <li class="mt-10">시행일자 : 2024-10-29</li>
              </ol>
            </div>

            <style>
            .serviceContent.privacyConts .icon-privacy-64{display:inline-block;width:64px;height:64px;}
            .serviceContent.privacyConts .icon-privacy-36{display:inline-block;width:36px;height:36px;}
            .serviceContent.privacyConts .icon-privacy-64.icon-01{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-01.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-02{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-02.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-03{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-03.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-04{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-04.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-05{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-05.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-06{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-06.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-07{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-07.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-08{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-08.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-09{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-09.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-10{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-10.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-11{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-11.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-12{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-12.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-13{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-13.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-14{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-14.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-15{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-15.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-16{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-16.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-17{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-17.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-18{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-18.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-19{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-19.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-20{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-20.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-21{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-21.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-22{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-22.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-23{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-23.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-24{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-24.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-25{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-25.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-26{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-26.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-27{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-27.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-28{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-28.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-29{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-29.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-30{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-30.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-31{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-31.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-32{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-32.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-33{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-33.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-64.icon-34{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_64-34.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-01{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-01.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-02{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-02.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-03{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-03.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-04{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-04.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-05{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-05.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-06{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-06.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-07{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-07.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-08{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-08.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-09{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-09.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-10{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-10.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-11{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-11.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-12{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-12.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-13{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-13.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-14{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-14.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-15{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-15.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-16{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-16.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-17{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-17.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-18{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-18.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-19{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-19.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-20{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-20.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-21{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-21.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-22{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-22.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-23{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-23.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-24{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-24.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-25{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-25.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-26{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-26.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-27{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-27.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-28{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-28.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-29{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-29.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-30{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-30.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-31{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-31.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-32{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-32.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-33{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-33.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts .icon-privacy-36.icon-34{background:url('https://cdn-img.thehandsome.com/md/publish/icon/privacy/icon_privacy_36-34.svg') no-repeat center;background-size: cover;}
            .serviceContent.privacyConts section{margin-top:-6rem;padding-top:6rem;}
            .serviceContent.privacyConts .fnt-14{font-size:1.4rem;font-weight:400;line-height:2.2rem;}
            .serviceContent.privacyConts .indent-0{padding:0;}
            .serviceContent.privacyConts .indent-14{padding-left:1.4rem;}
            .serviceContent.privacyConts .indent-20{padding-left:2rem;text-indent:-2rem;}
            .serviceContent.privacyConts .bold{font-weight:bold;}
            .serviceContent.privacyConts .border-box{border:1px solid #F0F0F0;margin:20px 0;}
            .serviceContent.privacyConts .border-box.indent-14{text-indent:14px;}
            .serviceContent.privacyConts .p-20{padding:20px;}
            .serviceContent.privacyConts ul.indent-10 li{margin:0;padding-left:1rem;padding-bottom:0;text-indent:-1rem;font-size:1.6rem;line-height:2.2rem;font-weight:400;}
            .serviceContent.privacyConts ol > li{margin-top:1rem;padding:0 0 0 2rem;text-indent:-2rem;}
            .serviceContent.privacyConts ol > li.no-indent{padding-left:0;text-indent:0;}
            .serviceContent.privacyConts ol > li:first-child{margin-top:0;}
            .serviceContent.privacyConts ul:not(.icons-wrap) > li{margin-top:1rem;padding-bottom:0;}
            .serviceContent.privacyConts ul:not(.icons-wrap) > li:first-child{margin-top:0;}
            .serviceContent.privacyConts .tblwrap table{width:100%;margin-top:1.6rem;border-bottom:1px solid #F0F0F0;border-collapse:collapse;}
            .serviceContent.privacyConts .tblwrap table thead th{padding:1rem 0;font-size:1.6rem;line-height:2.6rem;font-weight:400;text-align:center;vertical-align:middle;border-top:1px solid #000;}
            .serviceContent.privacyConts .tblwrap table tbody.n-thead tr:first-child th{border-top:1px solid #000;}
            .serviceContent.privacyConts .tblwrap table tbody.n-thead tr:first-child td{border-top:1px solid #000;}
            .serviceContent.privacyConts .tblwrap table tbody th{padding:1.2rem 2rem;border-top:1px solid #f0f0f0;font-size:1.4rem;line-height:2.2rem;font-weight:400;text-align:left;vertical-align:top;}
            .serviceContent.privacyConts .tblwrap table tbody th.v-align-m{vertical-align:middle;}
            .serviceContent.privacyConts .tblwrap table tbody td{padding:1.2rem 2rem;border-top:1px solid #f0f0f0;border-left:1px solid #f0f0f0;font-size:1.4rem;line-height:2.2rem;font-weight:400;text-align:left;vertical-align:top;}
            .serviceContent.privacyConts .tblwrap table tbody td.b-l-none{border-left:none;}
            .serviceContent.privacyConts .tblwrap table tbody td.v-align-m{vertical-align:middle;}
            .serviceContent.privacyConts .tblwrap table tbody td span{display:inline-block;word-break: normal;}
            .serviceContent.privacyConts .tblwrap table tbody td span + span{margin-top:2rem;}
            .serviceContent.privacyConts .tblwrap table ul li{font-size:1.4rem;}
            .serviceContent.privacyConts .icons-info{display:flex;align-items:flex-start;justify-content:space-between;padding:32px 35px 30px;background-color:#F8F8F8;}
            .serviceContent.privacyConts .icons-info li{margin:0 !important;padding:0;}
            .serviceContent.privacyConts .icons-info li.w-100{display:none;}
            .serviceContent.privacyConts .icons-info li .icon-wrap{display:flex;flex-direction:column;align-items:center;width:13rem;}
            .serviceContent.privacyConts .icons-info li .icon-wrap span{display:block;font-size:1.4rem;line-height:2.2rem;font-weight:400;text-align:center;}
            .serviceContent.privacyConts .title-list-wrap{display:flex;align-items:flex-start;justify-content:flex-start;}
            .serviceContent.privacyConts .title-list-wrap ol{flex:1;margin:0;padding:0;}
            .serviceContent.privacyConts .title-list-wrap ol li{padding-bottom:5px;line-height:2.6rem}
            .serviceContent.privacyConts .title-list-wrap ol li link{display:inline-block;font-size:1.6rem;line-height:2.6rem;font-weight:400;}
            .serviceContent.privacyConts .icons-wrap{display:flex;align-items:center;justify-content:flex-start;padding-top:40px; padding-bottom:10px;}
            .serviceContent.privacyConts .icons-wrap li{margin-left:10px;}
            .serviceContent.privacyConts .icons-wrap li:first-child{margin-left:0;}
            .serviceContent.privacyConts .icons-wrap + h4{padding-top:0;}
            .serviceContent.privacyConts h4, .popup-terms .serviceContent.privacyConts h4{margin:0 0 16px;padding-top:40px;font-size:1.8rem;line-height:2.8rem;font-weight:700;}
            .serviceContent.privacyConts h5, .popup-terms .serviceContent.privacyConts h5{margin:0 0 16px;font-size:1.8rem;line-height:2.8rem;font-weight:400;}
            @media (max-width: 768px) {
              #btn-top{padding-top:14px;}
              .serviceContent.privacyConts{padding-top:15px;}
              .serviceContent.privacyConts .indent-14{padding-left:10px;}
              .serviceContent.privacyConts h4, .popup-terms .serviceContent.privacyConts h4{margin: 0 0 14px; padding-top: 30px; font-size: 1.6rem; line-height: 2.6rem;}
              .serviceContent.privacyConts h5, .popup-terms .serviceContent.privacyConts h5{margin: 0 0 14px; font-size: 1.6rem; line-height: 2.6rem; padding:0;}
              .serviceContent.privacyConts h5.mt-40, .popup-terms .serviceContent.privacyConts h5.mt-40{margin-top:21px !important;}
              .serviceContent.privacyConts p, .popup-terms .serviceContent.privacyConts p{font-size: 1.4rem; line-height: 2.2rem; word-break: break-all;}
              .serviceContent.privacyConts ul.indent-10 li{font-size: 1.2rem; line-height: 2.0rem; margin-top:0;word-break: break-all;}
              .serviceContent.privacyConts ul.indent-14 li:not(:first-child){margin-top:10px;}
              .serviceContent.privacyConts .fnt-14{font-size: 1.2rem; line-height: 2.0rem;}
              .serviceContent.privacyConts .mt-18{margin-top:16px !important;}
              .serviceContent.privacyConts .tblwrap table ul:not(.icons-wrap) > li{margin-top:5px;font-size: 1.2rem; line-height: 1.8rem;}
              .serviceContent.privacyConts .tblwrap table ul:not(.icons-wrap) > li:first-child{margin-top:0;}
              .serviceContent.privacyConts ul:not(.icons-wrap) > li{margin-top:16px;font-size: 1.2rem; line-height: 2.2rem;}
              .serviceContent.privacyConts ol > li{font-size: 1.2rem; line-height: 2.2rem;text-indent: -1.5rem;}
              .serviceContent.privacyConts ol > li .num-list{word-break: break-all;}

              .serviceContent.privacyConts .icons-info{flex-wrap: wrap; padding:30px 20px;}
              .serviceContent.privacyConts .icons-info li{width: 80px; margin-top:0 !important;}
              .serviceContent.privacyConts .icons-info li .icon-wrap{width: 80px;}
              .serviceContent.privacyConts .icons-info li.w-100{display:block; width:100%;}
              .serviceContent.privacyConts .icons-info li .icon-wrap span{font-size: 1.3rem; line-height: 2.0rem;}

              .serviceContent.privacyConts .title-list-wrap{display:block;}
              .serviceContent.privacyConts .title-list-wrap ol li{padding-bottom:0; margin-top:0; line-height: 3.2rem;}

              .serviceContent.privacyConts .icons-wrap{padding:30px 0 8px;}
              .serviceContent.privacyConts .icons-wrap li{margin-right: 2px; margin-left:0;}
              .serviceContent.privacyConts .indent-0{margin-top:16px;}

              .serviceContent.privacyConts .tblwrap table thead th{padding: 8px 0; font-size: 1.4rem; line-height: 2.2rem;}
              .serviceContent.privacyConts .tblwrap table tbody td,
              .serviceContent.privacyConts .tblwrap table tbody th{padding: 10px 6px; font-size: 1.2rem; line-height: 2.0rem;}
              .serviceContent.privacyConts .tblwrap table tbody td p,
              .serviceContent.privacyConts .tblwrap table tbody th p{font-size: 1.2rem; line-height: 2.0rem;}
              
              .serviceContent.privacyConts p + ol{padding-top:16px;}
              .serviceContent.privacyConts .tblwrap table tbody td.v-align-m_mo,
              .serviceContent.privacyConts .tblwrap table tbody th.v-align-m_mo{vertical-align:middle;}
            }
            </style>


            <!-- //[퍼블수정]23.06.21 현행화 -->

            <!-- S [230920] 이전 약관 선택 -->
            <div class="old-terms-wrap">
              <p class="old-terms-tit">이전 개인정보 처리방침 보기</p>
              <CommonSelectBox
                id="oldTerms"
                class="sort-type1 oldTermsBox"
                title="이전 개인정보처리방침 보기">
                <template #optionList>
                  <option value="date" selected>이전 개인정보처리방침 보기</option>
                  <option value="date1">2015-10-17</option>
                  <option value="date2">2017-01-16</option>
                  <option value="date3">2017-02-16</option>
                  <option value="date4">2017-03-16</option>
                </template>
              </CommonSelectBox>
            </div>
            <!-- E [230920] 이전 약관 선택 -->

            <!--20221205 수정-->
            <!-- <dl class="terms-button">
              <dt class="cmp-font fnt-18">이전 개인정보처리방침 변경 고지</dt>
              <dd>
                <button class="cmp-font fnt-14 button">개인정보처리방침 보기 <span class="c-gray">2015.10.
                17</span> <i class="cmp-icon cmp-icon-12 i-next"></i></button>
              </dd>
              <dd>
                <button class="cmp-font fnt-14 button">개인정보처리방침 보기 <span class="c-gray">2017.10.
                17</span> <i class="cmp-icon cmp-icon-12 i-next"></i></button>
              </dd>
              <dd>
                <button class="cmp-font fnt-14 button">개인정보처리방침 보기 <span class="c-gray">2017.10.
                17</span> <i class="cmp-icon cmp-icon-12 i-next"></i></button>
              </dd>
            </dl> -->
            <!--//20221205 수정-->
          </div>
          
          <!-- [퍼블수정] 23.03.07 팝업 -->
          <v-dialog v-model="DialogPrivacyPolicyDetaile">
            <DialogPrivacyPolicyDetaile @close="closeDialogPrivacyPolicyDetaile" />
          </v-dialog>
          <!-- //[퍼블수정] 23.03.07 팝업 -->

          <!-- <div class="privacyPolicy-list">
            <ul class="agree_list">
              <li>
                <h2 class="agree_tit">개인정보처리방침이란?</h2>
                <div class="agree_cont">
                  <p class="txt">
                    THE<strong>HANDSOME</strong>.COM(이하 “더한섬닷컴”) 개인정보처리방침은 정부의 법률 및 지침의 변경과 “더한섬닷컴”의 정책 변화에 따라 변경될 수 있으며 개인정보 보호관련 관리책임자는 페이지 하단에 명시한 바와 같습니다.
                    본 개인정보 처리방침은 “더한섬닷컴” 사이트의 서비스를 이용하는 인터넷 사용자들의 기본권인 사생활 비밀과 자유 및 통신 비밀을 보장하고 불법적인 도청, 정보 유출로 인한 인권침해가 나타나지 않도록 하고자 명시하는 것입니다. “더한섬닷컴” 사이트의 개인정보처리방침은 정부의 법률 및 지침 변경에 따라 변경될 수 있으므로 “더한섬닷컴” 회원은 “더한섬닷컴” 사이트 방문 시에 수시로 확인하시기 바랍니다.
                  </p>
                </div>
              </li>
              <li class="lists">
                <h2 class="agree_tit">개인정보 처리방침</h2>
                <ol class="agree_list">
                    <li class="lists">
                      <h3 class="agree_tit">제1조 총칙</h3>
                      <div class="agree_cont">
                        <p class="txt">“개인정보”란 생존하는 개인에 관한 정보로서 당해 정보에 포함되어 있는 성명, 휴대전화번호, 본인확인 값 (CI : Connecting Information - 서비스 연계를 위해 본인확인기관에서 부여하는 개인식별정보)등의 사항에 의하여 당해 개인을 식별할 수 있는 정보(당해 정보만으로는 특정 개인을 식별할 수 없더라도 다른 정보와 용이하게 결합하여 식별할 수 있는 것을 포함합니다)를 말합니다.</p>
                        <ol class="cont_list">
                          <li>①   “더한섬닷컴”은 귀하의 개인정보보호를 매우 중요시하며, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률 및 개인정보보호법」상의 개인정보보호규정 및 정보통신부가 제정한 「개인정보보호지침」을 준수하고 있습니다. “더한섬닷컴”은 개인정보처리방침을 통하여 귀하께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.</li>
                          <li>②   “더한섬닷컴”은 개인정보처리방침을 홈페이지 첫 화면에 공개함으로써 귀하께서 언제나 용이하게 보실 수 있도록 조치하고 있습니다.</li>
                          <li>③   “더한섬닷컴”은 개인정보처리방침의 지속적인 개선을 위하여 개인정보처리방침을 개정하는데 필요한 절차를 정하고 있습니다. 그리고 개인정보처리방침을 개정하는 경우 버전번호 등을 부여하여 개정된 사항을 귀하께서 쉽게 알아볼 수 있도록 하고 있습니다.</li>
                        </ol>
                      </div>
                    </li>
                    <li class="lists">
                      <h3 class="agree_tit">제2조 개인정보의 수집항목 및 이용목적</h3>
                      <div class="agree_cont">
                        <p class="txt">“더한섬닷컴”은 별도의 회원가입 절차 없이 대부분의 컨텐츠에 자유롭게 접근할 수 있습니다. “더한섬닷컴”의 서비스를 이용하시는 경우 다음의 정보를 고객의 동의를 받아 수집할 수 있으며 선택항목을 입력하지 않아도 서비스 이용에 제한은 없습니다.</p>
                        <ol class="cont_list">
                          <li>①   배송 및 제반 정보를 제공하기 위하여 필요한 최소한의 정보를 수집하고 있습니다.</li>
                          <li>②   “더한섬닷컴”에 회원으로 등록하신 모든 회원의 개인정보는 상기에서 밝힌 특수한 목적 이외에는 절대로 사용될 수 없습니다. 다만, 회원 개인정보의 사용 목적과 용도가 변경될 경우 반드시 “더한섬닷컴” 회원으로 등록하신 모든 회원님께 동의를 구할 것입니다.</li>
                          <li>③   “더한섬닷컴”은 회원가입, 재화 또는 용역의 주문 시 다음과 같은 개인정보를 수집하고 있으며, 수집 정보는 필수사항과 선택사항으로 구분합니다.</li>
                          <li>④   “더한섬닷컴” 회원이 탈퇴하거나 “더한섬닷컴” 이용약관 제8조에 의거 회원자격을 상실하신 경우에 “더한섬닷컴”이 보유한 해당 회원의 개인정보는 파기됩니다.</li>
                        </ol>
                        <ol class="table_list">
                          <li>1. 회원가입 및 주문 등 필요시점에 수집하는 개인정보의 범위
                            <div class="hs_table_wrap">
                              <div class="table01">
                                  <table>
                                    <caption>회원가입 및 주문 등 필요시점에 수집하는 개인정보의 범위</caption>
                                    <colgroup>
                                      <col style="width:20%;">
                                      <col style="width:30%;">
                                      <col style="width:13%;">
                                      <col>
                                    </colgroup>
                                    <thead>
                                      <tr>
                                        <th scope="col" class="no_bd">수집 방법</th>
                                        <th scope="col">이용 목적</th>
                                        <th scope="col">수집 정보</th>
                                        <th scope="col">수집 항목</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td class="no_bd" rowspan="2">통합회원가입<br>(H.point/현대백화점)</td>
                                        <td rowspan="2">더한섬닷컴 및 H.point<br>서비스 이용 및 상담, 본인확인</td>
                                        <td>필수</td>
                                        <td class="al_left">이름, 성별, 생년월일, 휴대폰 번호, 아이디, 비밀번호, 이메일, CI, DI 포함</td>
                                      </tr>
                                      <tr>
                                        <td>선택</td>
                                        <td class="al_left">주소</td>
                                      </tr>
                                      <tr>
                                        <td class="no_bd" rowspan="2">간편회원가입</td>
                                        <td rowspan="2">더한섬닷컴 서비스 이용 및 상담, 본인확인</td>
                                        <td>필수</td>
                                        <td class="al_left">이름, 생년월일, 이메일(아이디), 비밀번호</td>
                                      </tr>
                                      <tr>
                                        <td>선택</td>
                                        <td class="al_left">이메일(정보수신용)</td>
                                      </tr>
                                      <tr>
                                        <td class="no_bd" rowspan="3">구매 및 배송</td>
                                        <td>구매결제</td>
                                        <td>필수</td>
                                        <td class="al_left">신용카드 번호, 은행 계좌번호, 휴대폰 번호</td>
                                      </tr>
                                      <tr>
                                        <td rowspan="2">상품배송, 배송지 관리</td>
                                        <td>필수</td>
                                        <td class="al_left">
                                          주문자 정보 : 주문자 성명, 휴대폰 번호, 이메일<br>
                                          배송지 정보 : 수령인 성명, 휴대폰 번호, 배송지 주소
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>선택</td>
                                        <td class="al_left">수령인 연락처, 수령인 이메일</td>
                                      </tr>
                                      <tr>
                                        <td class="no_bd" rowspan="2">기타</td>
                                        <td>신규서비스/상품안내</td>
                                        <td>선택</td>
                                        <td class="al_left">휴대폰 번호(통합회원 가입시), 이메일</td>
                                      </tr>
                                      <tr>
                                        <td>현금영수증 발급, 앱설치 URL 전송</td>
                                        <td>선택</td>
                                        <td class="al_left">휴대폰 번호</td>
                                      </tr>
                                      <tr>
                                        <td class="no_bd" rowspan="4">비회원</td>
                                        <td>구매결제</td>
                                        <td>필수</td>
                                        <td class="al_left">신용카드 번호, 은행 계좌번호, 휴대폰 번호</td>
                                      </tr>
                                      <tr>
                                        <td rowspan="2">상품배송</td>
                                        <td>필수</td>
                                        <td class="al_left">
                                            주문자 정보 : 휴대폰 번호, 이메일, 구매비밀번호<br>
                                            배송지 정보 : 수령인 성명, 휴대폰 번호, 배송지 주소
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>선택</td>
                                        <td class="al_left">수령인 연락처, 수령인 이메일</td>
                                      </tr>
                                      <tr>
                                        <td>본인확인</td>
                                        <td>필수</td>
                                        <td class="al_left">이름, 휴대폰번호, 생년월일, 성별</td>
                                      </tr>
                                      <tr>
                                        <td class="no_bd">환불</td>
                                        <td>주문건 환불</td>
                                        <td>필수</td>
                                        <td class="al_left">이름, 신용카드 번호, 은행 계좌번호</td>
                                      </tr>
                                    </tbody>
                                </table>
                              </div>
                            </div>
                          </li>
                          <li>2. 서비스 이용과정에서 생성되는 정보
                            <div class="hs_table_wrap">
                              <div class="table01">
                                <table>
                                  <caption>서비스 이용과정에서 생성되는 정보</caption>
                                  <colgroup>
                                    <col style="width:10%;">
                                    <col style="width:13%;">
                                    <col style="width:13%;">
                                    <col>
                                    <col style="width:20%;">
                                  </colgroup>
                                  <thead>
                                    <tr>
                                      <th scope="col" class="no_bd">수집 방법</th>
                                      <th scope="col">이용 목적</th>
                                      <th scope="col">수집 정보</th>
                                      <th scope="col">수집 항목</th>
                                      <th scope="col">보유 기간</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td class="no_bd" rowspan="3">더한섬닷컴<br>Web site<br>Mobile App<br>Mobile Web</td>
                                      <td>본인확인</td>
                                      <td>필수</td>
                                      <td class="al_left">본인확인 값(CI, DI)</td>
                                      <td class="al_left">회원 탈퇴 시 또는 법정 의무 보유기간</td>
                                    </tr>
                                    <tr>
                                      <td>서비스 이용기록</td>
                                      <td>필수</td>
                                      <td class="al_left">
                                        - IP Address, 쿠키, 방문 일시, 서비스 이용기록 및 중지기록, <br>모바일 기기정보(모바일 서비스 이용 시)<br>
                                        - 모바일 서비스 이용 시 모바일 기기정보 : OS종류 및 버전, 디바이스 종류, 광고식별자<br>
                                        - 앱 이용 시 추가 모바일 기기정보 : UUID(임의 생성한 앱 고유값), 푸시 토큰(생성값), 회원의 경우 ID
                                      </td>
                                      <td class="al_left">
                                        - 쿠키의 경우, 브라우저 종료 시 또는 로그아웃 시 만료<br>
                                        - 앱 이용 시 수집 정보는 앱 삭제 시 만료
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>고객만족도<br>설문조사</td>
                                      <td>선택</td>
                                      <td class="al_left">고객만족도 설문조사에 의한 항목별 응답기록</td>
                                      <td class="al_left">회원 탈퇴 시 또는 법정 의무 보유기간</td>
                                    </tr>
                                  </tbody>
                                </table>
                                <p>※ 더한섬닷컴 앱 이용 고객의 접근권한 허용 시 고객의 모든 모바일 기기정보가 수집되는 것은 아니며, 서비스 실행시 필요한 범위 내에서 수집됩니다.</p>
                              </div>
                              <div class="table01">
                                <table>
                                  <caption>[앱 설치 시 접근권한 안내]</caption>
                                  <colgroup>
                                    <col style="width:10%;">
                                    <col style="width:20%;">
                                    <col style="width:40%;">
                                    <col style="width:30%;">
                                  </colgroup>
                                  <thead>
                                    <tr>
                                    <th scope="col" class="no_bd">구분</th>
                                    <th scope="col">접근 항목</th>
                                    <th scope="col">접근 목적</th>
                                    <th scope="col">비고</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td class="no_bd">필수</td>
                                      <td>기기 및 앱 기록</td>
                                      <td class="al_left">앱 서비스 최적화 및 오류 확인</td>
                                      <td class="al_left"></td>
                                    </tr>
                                    <tr>
                                      <td class="no_bd" rowspan="4">선택</td>
                                      <td>위치</td>
                                      <td class="al_left">사용자 근처 매장 위치 안내</td>
                                      <td class="al_left" rowspan="4">선택적 접근 권한은 동의하지 않아도 기본 서비스 이용 가능</td>
                                    </tr>
                                    <tr>
                                      <td>카메라</td>
                                      <td class="al_left">스타일 LIVE, 포토 상품평, 1:1 문의, 상품 Q&amp;A, 고객의 소리, 이미지 검색 시 사진 및 동영상 촬영</td>
                                    </tr>
                                    <tr>
                                      <td>사진/저장공간(사진,미디어,파일)</td>
                                      <td class="al_left">스타일 LIVE, 포토 상품평, 1:1 문의, 상품 Q&amp;A, 고객의 소리, 이미지 검색 시 사진 및 파일 업로드 (Android)</td>
                                    </tr>
                                    <tr>
                                      <td>전화</td>
                                      <td class="al_left">매장 및 고객센터 (Android)</td>
                                    </tr>
                                  </tbody>
                                </table>
                                <p>
                                  ※ 더한섬닷컴 앱 접근권한 동의 또는 철회방법<br>
                                  - 안드로이드 계열 : 설정 → 앱 → ‘더한섬닷컴‘ 앱 선택 → 권한 → 접근권한별 동의 또는 철회 선택<br>
                                  - iOS 계열 : 설정 → ‘더한섬닷컴‘ 앱 선택 → 접근권한별 동의 또는 철회 선택
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>3. 기타 법정 의무 수집 정보 등
                            <div class="hs_table_wrap">
                              <div class="table01">
                                <table>
                                  <caption>기타 법정 의무 수집 정보 등</caption>
                                  <colgroup>
                                    <col style="width:25%;">
                                    <col style="width:25%;">
                                    <col style="width:25%;">
                                    <col style="width:25%;">
                                  </colgroup>
                                  <thead>
                                    <tr>
                                      <th scope="col" class="no_bd">관련법률</th>
                                      <th scope="col">이용 목적</th>
                                      <th scope="col">수집 항목</th>
                                      <th scope="col">보유 기간</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td class="no_bd">통신비밀보호법</td>
                                      <td class="al_left">수사기관 제공 (법원 영장 등 정당한 절차의 경우에 제공)</td>
                                      <td>로그기록, IP 등</td>
                                      <td>3개월</td>
                                    </tr>
                                    <tr>
                                      <td class="no_bd">전자상거래보호법</td>
                                      <td class="al_left">소비자 불만 또는 분쟁처리, 계약내용 확인</td>
                                      <td>고객식별정보, 분쟁처리기록, <br>계약ㆍ철회 기록</td>
                                      <td>3년/5년</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </li>
                        </ol>
                      </div>
                    </li>
                      
                    <li class="lists">
                      <h3 class="agree_tit">제3조 쿠키에 의한 개인정보 수집</h3>
                      <div class="agree_cont">
                        <ol class="cont_list">
                          <li>①   “더한섬닷컴”은 개인화된 서비스를 제공하기 위하여 ‘쿠키(cookie)’를 사용하기도 합니다. ‘쿠키(cookie)’는 HTTP서버에서 사용자의 브라우저에 보내는 작은 데이터 꾸러미로서 회원의 컴퓨터 하드드라이브에 저장됩니다. 쿠키는 귀하의 컴퓨터는 식별하지만 귀하를 개인적으로 식별하지는 않습니다.</li>
                          <li>②   “더한섬닷컴” 다음과 같은 목적으로 쿠키를 사용합니다.
                            <ol class="sub_list">
                              <li>1. 회원과 비회원의 접속 빈도나 방문 시간 등을 분석하여, 타겟(Target) 마케팅 및 서비스 개선의 기준으로 사용합니다.</li>
                              <li>2. 관심 있게 둘러본 품목들에 대한 자취를 남겨, 다음 번 쇼핑 때 최근 본 상품을 보여주는데 이용합니다. 쿠키는 고객의 컴퓨터는 식별하지만 고객을 개인적으로 식별하지는 않습니다. 쿠키 브라우저의 종료시나 로그아웃시 만료됩니다.</li>
                            </ol>
                          </li>
                          <li>③   고객은 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서 고객은 웹브라우저에 설정을 통해 모든 쿠키를 허용/거부하거나, 쿠키를 저장될 때마다 확인을 거치도록 할 수 있습니다. 쿠키 설정거부 방법은 다음과 같습니다. (Internet Explorer 기준) 웹브라우저 [도구] 메뉴 [인터넷 옵션] 선택 &gt; [개인정보] 탭을 선택 &gt; [고급]에서 원하는 옵션 선택 다만, 이용자께서 쿠키의 설치를 거부하였을 경우에는 일정한 서비스 이용에 어려움이 있을 수 있습니다.</li>
                        </ol>
                      </div>
                    </li>   
                      
                    <li class="lists">
                      <h3 class="agree_tit">제4조 제3자에 대한 제공</h3>
                      <div class="agree_cont">
                        <ol class="cont_list">
                          <li>①   “더한섬닷컴”은 고객의 개인정보를 제2조 「개인정보의 수집항목 및 이용목적」에서 고지한 범위 내에서 사용하며, 동 범위를 초과하여 이용하거나 타인 또는 타기업ㆍ기관에 제공하지 않습니다. 특히 다음의 경우는 주의를 기울여 개인정보를 이용 및 제공할 것입니다.
                            <ol class="sub_list">
                              <li>1. 제휴관계 : “더한섬닷컴”은 본 처리방침 본 조 제4항에서 정한 제휴업체 이외의 자에게 개인정보가 제공되거나 공유될 시에는 전자우편 및 서면을 통하여 동의를 구할 것입니다.</li>
                              <li>2. 매각, 인수합병 등 : 서비스제공자의 권리와 의무가 완전 승계, 이전되는 경우 반드시 사전에 정당한 사유와 절차에 대해 상세하게 고지할 것이며 고객의 개인정보에 대한 동의 철회의 선택권을 부여합니다.</li>
                            </ol>
                          </li>
                          <li>②   고지 및 동의방법은 온라인 홈페이지 초기화면의 공지사항을 통해 지체 없이 고지하고 필요한 경우에 이메일 등을 이용하여 1회 이상 개별적으로 고지합니다.</li>
                          <li>③   다음은 예외로 합니다.
                            <ol class="sub_list">
                              <li>1. 관계법령에 의하여 수사상의 목적으로 관계기관으로부터의 요구가 있을 경우</li>
                              <li>2. 기타 관계법령에서 정한 절차에 따른 요청이 있는 경우</li>
                            </ol>             
                          </li>
                          <li>그러나 예외 사항에서도 관계법령에 의하거나 수사기관의 요청에 의해 정보를 제공한 경우에는 이를 당사자에게 고지하는 것을 원칙으로 운영하고 있습니다. 법률상의 근거에 의해 부득이하게 고지를 하지 못할 수도 있습니다. 본래의 수집목적 및 이용목적에 반하여 무분별하게 정보가 제공되지 않도록 최대한 노력하겠습니다.</li>
                          <li>④   “더한섬닷컴”은 고객에게 보다 나은 서비스 제공을 위하여 고객의 개인정보를 다음의 제휴사에게 제공하거나 제휴사와 공유할 수 있으며, 그 기간은 고객의 정보제공 동의기간 내로 제한됩니다.
                            <div class="hs_table_wrap">
                              <div class="table01">
                                <table>
                                  <colgroup>
                                    <col style="width:17%;">
                                    <col style="width:21%;">
                                    <col style="width:51%;">
                                    <col style="width:11%;">
                                  </colgroup>
                                  <thead>
                                    <tr>
                                    <th scope="col" class="no_bd">제공받는 자</th>
                                    <th scope="col">제공 항목</th>
                                    <th scope="col">제공 목적</th>
                                    <th scope="col">보유 기간</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td class="no_bd">㈜현대백화점<br>(H.Point 서비스 운영사)</td>
                                      <td class="al_left">아이디(ID), 본인 확인값(CI), 비밀번호, 이름, 성별, 생년월일, 휴대폰번호, 이메일주소, 구매정보, 결제정보(H.Point 적립 물품에 한함)</td>
                                      <td class="al_left">
                                        H.Point 회원가입, 웹사이트 로그인, H.Point 적립 및 사용, 기타 H.Point 멤버십, 관련 서비스 제공<br><br>
                                        ※ ‘H.Point 서비스’란 ‘더한섬닷컴’과 현대백화점 그룹 계열사가 운영하는 서비스를 통합 ID, 통합 비밀번호로 로그인할 수 있으며, 각 서비스별 적립금을 통합 운영하는 제도를 말합니다. 
                                        회원은 가입시 H.Point 통합여부에 관해 선택할 수 있으며, H.Point 통합 사용을 선택할 경우 별도로 개인정보의 제3자 제공에 관해 동의절차를 거치게 됩니다.
                                      </td>
                                      <td class="al_left">회원 탈퇴시 또는 동의 철회시</td>
                                    </tr>
                                    <tr>
                                      <td class="no_bd">한섬라이프앤 (오에라 멤버십 프로그램 운영사)</td>
                                      <td class="al_left">성명, 연계정보(CI), 생년월일, 휴대폰번호, 성별, 구매정보, 고객정보</td>
                                      <td class="al_left">
                                        • 한섬라이프앤 멤버십 적립 사용, 기타 멤버십 서비스 제공<br>
                                        • 한섬라이프앤 제품 및 서비스 안내 제반 마케팅 활동
                                      </td>
                                      <td class="al_left">회원 탈퇴시 또는 동의 철회 시</td>
                                    </tr>
                                    <tr>
                                      <td class="no_bd">OUR LEGACY 국내 대리 사업자(한섬과 계약 종료 시 사업을 이어받을 국내 신규 사업자)</td>
                                      <td class="al_left">성명, 이메일주소</td>
                                      <td class="al_left">
                                          • 마케팅 활용 및 브랜드 정보 공유
                                      </td>
                                      <td class="al_left">회원 탈퇴시 또는 동의 철회 시</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </li>
                        </ol>
                      </div>
                    </li>
                    
                    <li class="lists">
                      <h3 class="agree_tit">제5조 개인정보의 열람ㆍ정정</h3>
                      <div class="agree_cont">
                        <ol class="cont_list">
                          <li>①   고객께서는 언제든지 등록되어 있는 고객의 개인정보를 열람하거나 정정하실 수 있습니다. 개인정보 열람 및 정정을 하고자 할 경우에는 “더한섬닷컴” 홈페이지의 「회원정보변경」항목을 클릭하여 직접 열람 또는 정정하거나, 개인정보보호책임자 및 담당자에게 서면, 전화 또는 이메일로 연락하시면 지체 없이 조치하겠습니다.</li>
                          <li>②   고객께서 개인정보의 오류에 대한 정정을 요청한 경우, 정정을 완료하기 전까지 당해 개인 정보를 이용 또는 제공하지 않습니다.</li>
                          <li>③   잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정하도록 조치하겠습니다.</li>
                        </ol>
                      </div>
                    </li>
                    
                    <li class="lists">
                      <h3 class="agree_tit">제6조 개인정보 수집ㆍ이용제공에 대한 동의철회</h3>
                      <div class="agree_cont">
                        <ol class="cont_list">
                          <li>①   회원가입 등을 통해 개인정보의 수집, 이용, 제공에 대해 고객께서 동의하신 내용을 고객께서는 언제든지 철회하실 수 있습니다. 동의철회는 홈페이지 첫 화면의 「마이페이지」의 「회원정보변경」 또는 「회원탈퇴」를 클릭하시거나 개인정보보호책임자에게 서면, 전화, 이메일 등으로 연락하시면 즉시 개인정보의 삭제 등 필요한 조치를 하겠습니다. 동의 철회를 하고 개인정보를 파기하는 등의 조치를 취한 경우에는 그 사실을 고객께 지체 없이 통지하도록 하겠습니다.</li>
                          <li>②   “더한섬닷컴”은 개인정보의 수집에 대한 동의철회(회원탈퇴)를 개인정보를 수집하는 방법보다 쉽게 할 수 있도록 필요한 조치를 취하겠습니다.</li>
                          <li>③   수집하는 개인정보의 보유 및 이용 기간에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.</li>
                        </ol>
                      </div>
                    </li>
                    
                    <li class="lists">
                      <h3 class="agree_tit">제7조 개인정보의 보유ㆍ이용기간 및 파기</h3>
                      <div class="agree_cont">
                        <ol class="cont_list">
                          <li>①   고객의 개인정보는 회원탈퇴 등 수집 및 이용목적이 달성되거나 동의철회 요청이 있는 경우 지체 없이 파기됩니다.<br>
                              단, 「전자상거래 등에서의 소비자보호에 관한 법률」 등 관련법령의 규정에 의하여 다음과 같이 거래 관련 권리 의무 관계의 확인 등을 이유로 일정기간 보유하여야 할 필요가 있을 경우에는 일정기간 보유합니다.
                            <ol class="sub_list">
                              <li>1. 「전자상거래 등에서의 소비자보호에 관한 법률」 제6조
                                <ol class="sub_list">
                                  <li>• 계약 또는 청약철회 등에 관한 기록 : 5년</li>
                                  <li>• 대금결제 및 재화 등의 공급에 관한 기록 : 5년</li>
                                  <li>• 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년</li>
                                </ol>
                              </li>
                              <li>2. 「통신비밀보호법 제15조의2」
                                <ol class="sub_list">
                                  <li>• 인터넷 로그기록자료, 접속지 추적자료 : 3개월</li>
                                </ol>
                              </li>
                              <li>3. 기타 관련 법령 등
                                <ol class="sub_list">
                                  <li>1) 개인정보 유효기간 제도 도입
                                    <ol class="sub_list">
                                      <li>가. “더한섬닷컴”은 장기간(1년 이상) 서비스 미아용자의 개인정보보호를 위하여 2016년 9월 이후에는 다른 이용자의 개인정보와 분리하여 저장, 관리합니다.</li>
                                      <li>나. 미이용의 기간은 로그인, 상담원 접촉일자 등으로 산정하며 법령에서 정의한 기간 동안 서비스 미이용자에 대하여 분리, 저장관리합니다.</li>
                                      <li>다. “더한섬닷컴”은 미이용자 개인정보 분리/저장시점 도래 1개월 이전에 이메일 등을 통해 해당 이용자에게 관련내용을 공지합니다.</li>
                                      <li>라. 분리, 저장된 미 이용자 개인정보는 관련 법령에 따라 일정기간 동안 보유하며, 해당 기간 종료 후 파기됩니다. 파기되지 않은 개인정보는 해당 이용자의 요청에 따라 서비스 이용을 재개하는 시점에 다시 제공됩니다.</li>
                                    </ol>
                                  </li>
                                  <li>2) “더한섬닷컴”은 「개인정보보호법」 제 39조의 6에 따라 휴면회원(최근 12개월 동안 서비스를 이용하지 아니한 회원)에 대해 회원자격 상실에 대한 안내문을 통지하고, 안내문에서 정한 기한 내에 답변이 없을 경우 회원자격을 상실시킬 수 있습니다.<br>이 경우, 회원 아이디를 포함한 휴면회원의 개인정보 및 서비스 이용정보는 파기되거나 별도로 분리되어 보관 됩니다.</li>
                                  <li>3) “더한섬닷컴”의 개인정보 파기방법은 다음과 같습니다.
                                    <ol class="sub_list">
                                      <li>• 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기</li>
                                      <li>• 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제</li>
                                    </ol>
                                  </li>
                                </ol>
                              </li>
                            </ol>
                          </li>
                        </ol>
                      </div>
                    </li>
                    
                    <li class="lists">
                      <h3 class="agree_tit">제8조 개인정보보호를 위한 기술 및 관리적 대책</h3>
                      <div class="agree_cont">
                        <ol class="cont_list">
                          <li><strong>① 기술적 대책</strong>
                            <p>“더한섬닷컴”은 고객의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 유출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적 대책을 강구하고 있습니다.</p>
                            <ol class="sub_list">
                              <li>1. 고객의 개인정보는 비밀번호에 의해 보호되며 파일 및 전송데이터를 암호화하거나 파일 잠금기능(Lock)을 사용하여 중요한 데이터는 별도의 보안기능을 통해 보호되고 있습니다.</li>
                              <li>2. “더한섬닷컴”은 백신프로그램을 이용하여 컴퓨터 바이러스에 의한 피해를 방지하기 위한 조치를 취하고 있습니다. 백신프로그램은 주기적으로 업데이트되며 갑작스런 바이러스가 출현할 경우 백신이 나오는 즉시 이를 제공함으로써 개인정보가 침해되는 것을 방지하고 있습니다.</li>
                              <li>3. “더한섬닷컴”은 암호알고리즘을 이용하여 네트워크 상의 개인정보를 안전하게 전송할 수 있는 보안장치(SSL 또는 SET)를 채택하고 있습니다.</li>
                              <li>4. 해킹 등 외부침입에 대비하여 침입차단시스템 및 취약점 분석시스템 등을 이용하여 보안에 만전을 기하고 있습니다.</li>
                            </ol>
                          </li>
                          <li><strong>② 관리적 대책</strong>
                            <p>“더한섬닷컴”은 고객의 개인정보에 대한 접근권한을 최소한의 인원으로 제한하고 있습니다. 그 최소한의 인원에 해당하는 자는 다음과 같습니다.</p>
                            <ol class="sub_list">
                              <li>1. 이용자를 직접 상대로 하여 마케팅 업무를 수행하는 자</li>
                              <li>2. 개인정보보호책임자 및 담당자 등 개인정보보호업무를 수행하는 자</li>
                              <li>3. 기타 업무상 개인정보의 취급이 불가피한 자
                                <ol class="sub_list">
                                  <li>• 개인정보를 취급하는 직원을 대상으로 새로운 보안 기술 습득 및 개인정보 보호 의무 등에 관해 정기적인 사내 교육 및 외부 위탁교육을 실시하고 있습니다.</li>
                                  <li>• 입사 시 개인정보 관련 취급자의 보안서약서를 통하여 사람에 의한 정보유출을 사전에 방지하고 개인정보보호정책에 대한 이행사항 및 직원의 준수여부를 감사하기 위한 내부절차를 마련하고 있습니다.</li>
                                  <li>• 개인정보 관련 취급자의 업무 인수인계는 보안이 유지된 상태에서 철저하게 이뤄지고 있으며 입사 및 퇴사 후 개인정보 사고에 대한 책임을 명확화하고 있습니다.</li>
                                  <li>• 개인정보와 일반 데이터를 혼합하여 보관하지 않고 별도로 분리하여 보관하고 있습니다.</li>
                                  <li>• 전산실 및 자료 보관실 등을 특별 보호구역으로 설정하여 출입을 통제하고 있습니다.</li>
                                  <li>• 그 외 내부 관리자의 실수나 기술관리 상의 사고로 인해 개인정보의 상실, 유출, 변조, 훼손이 유발될 경우 “더한섬닷컴”은 즉각 고객께 사실을 알리고 적절한 대책과 보상을 강구할 것입니다.</li>
                                </ol>
                              </li>
                            </ol>
                          </li>
                          <li><strong>③ 기타 보호대책</strong>
                            <ol class="cont_list">
                              <li>1. 개인정보 유출 등 통지ㆍ신고제도
                                  <p>“더한섬닷컴”은 개인정보의 분실, 도난, 유출 사고 발생 사실을 안 때에는 지체 없이 이용자에게 해당 내용을 알리고, 방송통신위원회 또는 한국인터넷진흥원에 신고합니다. 또한 “더한섬닷컴”의 대응조치, 이용자가 취할 수 있는 조치, 이용자 상담창구 등도 함께 통지ㆍ신고합니다.</p>
                              </li>
                              <li>2. 개인정보 유효기간 제도
                                <ol class="sub_list">
                                  <li>• “더한섬닷컴”은 장기간 서비스 미이용자의 개인정보보호를 위하여 휴면회원(최근 12개월 동안 서비스를 이용하지 아니한 회원)의 개인정보를 다른 이용자의 정보와 분리하여 저장, 관리합니다.</li>
                                  <li>• “더한섬닷컴”은 휴면회원의 개인정보 분리 저장 및 관리 1개월 전에 해당 이용자에게 회원자격 상실에 대한 안내문을 통지하며, 안내문에서 정한 기한 내에 답변이 없을 경우 회원자격을 상실시킬 수 있습니다.</li>
                                </ol>
                              </li>
                              <li>3. 개인정보 이용내역 통지 제도
                                <p>“더한섬닷컴”은 이용자의 개인정보 자기결정권을 보장하기 위해 개인정보 이용내역을 해당 이용자에게 주기적으로(연 1회 이상) 통지합니다.</p>
                                <ol class="sub_list">
                                  <li>• 개인정보 수집ㆍ이용목적 및 수집한 개인정보의 항목</li>
                                  <li>• 개인정보를 제공받은 자, 그 제공 목적 및 제공한 개인정보의 항목</li>
                                  <li>• 개인정보 처리위탁을 받은 자 및 그 처리위탁을 하는 업무의 내용</li>
                                </ol>
                                <p>“더한섬닷컴”은 휴면회원의 개인정보 분리 저장 및 관리 1개월 전에 해당 이용자에게 회원자격 상실에 대한 안내문을 통지하며, 안내문에서 정한 기한 내에 답변이 없을 경우 회원자격을 상실시킬 수 있습니다.</p>
                              </li>
                            </ol>
                          </li>
                        </ol>    
                      </div>
                    </li>
                    
                    <li class="lists">
                      <h3 class="agree_tit">제9조 개인정보의 위탁처리</h3>
                      <div class="agree_cont">
                        <p class="txt">더한섬닷컴은 서비스 향상을 위해서 고객의 개인정보를 외부에 수집, 취급, 관리 등을 위탁하여 처리할 수 있습니다.<br>• 개인정보의 처리를 위탁하는 경우에는 위탁기관 및 그 사실을 홈페이지를 통해 지체 없이 고객께 고지하겠습니다.</p>
                        <div class="hs_table_wrap">
                          <div class="table01">
                            <table>
                              <caption>개인정보의 위탁처리</caption>
                              <colgroup>
                                <col style="width:40%;">
                                <col style="width:60%;">
                              </colgroup>
                              <thead>
                                <tr>
                                  <th scope="col" class="no_bd">위탁업무</th>
                                  <th scope="col">수탁자</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td class="al_left no_bd">고객 상담 업무</td>
                                  <td class="al_left">㈜유베이스, ㈜엠앤서비스</td>
                                </tr>
                                <tr>
                                  <td class="al_left no_bd">주문 상품의 배송</td>
                                  <td class="al_left">우정사업본부, 씰리프로모션, ㈜DHL코리아, ㈜고고밴코리아, CJ대한통운㈜, 로젠 주식회사</td>
                                </tr>
                                <tr>
                                  <td class="al_left no_bd">본인확인</td>
                                  <td class="al_left">NICE평가정보㈜, 한국정보인증㈜</td>
                                </tr>
                                <tr>
                                  <td class="al_left no_bd">결제 정보</td>
                                  <td class="al_left">㈜KG이니시스, ㈜LG CNS</td>
                                </tr>
                                <tr>
                                  <td class="al_left no_bd">E-MAIL, SMS, MMS 발송, APP PUSH 발송</td>
                                  <td class="al_left">㈜KG이니시스, ㈜LG CNS, ㈜KRP, ㈜휴머스온, 모노커뮤니케이션즈, CJ 올리브네트웍스</td>
                                </tr>
                                <tr>
                                  <td class="al_left no_bd">상품배송업무 등의 서비스 제공</td>
                                  <td class="al_left">㈜아이패스, ㈜에스엘프로바이더</td>
                                </tr>
                                <tr>
                                  <td class="al_left no_bd">정보전산 처리 및 유지/관리</td>
                                  <td class="al_left">㈜이노트리, ㈜뉴프롬, ㈜현대IT&amp;E, ㈜메가존클라우드</td>
                                </tr>
                                <tr>
                                  <td class="al_left no_bd">콜센터 장비 및 시스템 제공</td>
                                  <td class="al_left">HCN</td>
                                </tr>
                                <tr>
                                  <td class="al_left no_bd">의뢰 상품의 세탁 업무/수선 업무</td>
                                  <td class="al_left">그린어스코리아(유), 트로반트(주)</td> 
                                </tr>
                                <tr>
                                  <td class="al_left no_bd">오에라 제품 관련 고객 상담 업무</td>
                                  <td class="al_left">㈜한섬라이프앤</td> 
                                </tr>
                                <tr>
                                  <td class="al_left no_bd">고객 상담 챗봇/채팅상담</td>
                                  <td class="al_left">㈜스펙트라</td> 
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        * 공유하는 정보는 당해 목적을 달성하기 위하여 필요한 최소한의 정보에 국한됩니다.
                      </div>
                    </li>
                          
                    <li class="lists">
                      <h3 class="agree_tit">제10조 이용자 및 법정대리인의 권리와 의무</h3>
                      <div class="agree_cont">
                        <ol class="cont_list">
                          <li>① 고객의 개인정보를 최신의 상태로 정확하게 입력하여 불의의 사고를 예방해 주시기 바랍니다.이용자가 입력한 부정확한 정보로 인해 발생하는 사고의 책임은 이용자 자신에게 있으며 타인 정보의 도용 등 허위정보를 입력할 경우 회원자격이 상실될 수 있습니다.</li>
                          <li>② 고객께서는 개인정보를 보호받을 권리와 함께 스스로를 보호하고 타인의 정보를 침해하지 않을 의무도 가지고 있습니다.<br>비밀번호를 포함한 고객의 개인정보가 유출되지 않도록 조심하시고 게시물을 포함한 타인의 개인정보를 훼손하지 않도록 유의해 주십시오.<br>만약 이 같은 책임을 다하지 못하고 타인의 정보 및 존엄성을 훼손할 시에는 「개인정보보호법」에 의해 처벌받을 수 있습니다.</li>
                        </ol>
                      </div>
                    </li>
                          
                    <li class="lists">
                      <h3 class="agree_tit">제11조 의견수렴 및 불만처리</h3>
                      <div class="agree_cont">
                        <ol class="cont_list">
                          <li>①   “더한섬닷컴”은 고객의 의견을 소중하게 생각하며, 고객께서는 의문사항으로부터 언제나 성실한 답변을 받을 권리가 있습니다.</li>
                          <li>②   “더한섬닷컴”은 고객과의 원활환 의사소통을 위해 민원처리센터를 운영하고 있으며 연락처는 다음과 같습니다.
                            <div class="hs_table_wrap">
                              <div class="table01">
                                <table>
                                  <caption>더한섬닷컴 민원처리센터</caption>
                                  <colgroup>
                                    <col style="width:20%;">
                                    <col style="width:10%;">
                                    <col style="width:20%;">
                                    <col style="width:30%;">
                                  </colgroup>
                                  <thead>
                                    <tr>
                                      <th scope="col" class="no_bd" colspan="4">더한섬닷컴 민원처리센터</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td class="no_bd">전자우편</td>
                                      <td class="al_left"><a href="mailto:shophelp@thehandsome.com">shophelp@thehandsome.com</a></td>
                                      <td>전화번호</td>
                                      <td class="al_left">1800-5700</td>
                                    </tr>
                                    <tr>
                                      <td class="no_bd">주소</td>
                                      <td class="al_left">06013 서울특별시 강남구 도산대로 523 한섬빌딩</td>
                                      <td>팩스번호</td>
                                      <td class="al_left">02-3416-4905</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </li>
                          <li>③ 전화상담은 평일 오전 09:30 ~ 18:30 입니다. 주말/공휴일은 고객의 의견 게시판이나 전자우편을 이용해주시기 바랍니다.</li>
                          <li>④ 전자우편이나 팩스 및 우편을 이용한 상담은 접수 후 빠른 시간 내에 성실하게 답변 드리겠습니다. 다만, 근무시간 이후 또는 주말 및 공휴일에는 익일 처리하는 것을 원칙으로 합니다.</li>
                          <li>⑤ 기타 개인정보에 관한 상담이 필요한 경우에는 개인정보침해신고센터, 대검찰청 인터넷범죄수사센터, 경찰청 사이버범죄수사대 등으로 문의하실 수 있습니다.
                            <div class="hs_table_wrap">
                              <div class="table01">
                                <table>
                                  <colgroup>
                                    <col style="width:50%;">
                                    <col style="width:50%;">
                                  </colgroup>
                                  <thead>
                                    <tr>
                                      <th scope="col" class="no_bd">개인정보침해 신고센터</th>
                                      <th scope="col">개인정보 분쟁조정위원회</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td class="no_bd al_left">• 전화 : (국번없이) 118<br>• URL : <a href="http://privacy.kisa.or.kr">http://privacy.kisa.or.kr</a></td>
                                      <td class="al_left">• 전화 : 02-2100-2499<br>• URL : <a href="http://www.kopico.go.kr">http://www.kopico.go.kr</a></td>
                                    </tr>
                                    </tbody>
                                    <thead>
                                    <tr>
                                      <th scope="col">대검찰청 사이버수사과</th>
                                      <th scope="col">경찰청 사이버수사국</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                      <td class="no_bd al_left">• 전화 : (국번없이) 1301<br>• URL : <a href="http://www.spo.go.kr">http://www.spo.go.kr</a> </td>
                                      <td class="al_left">• 전화 : (국번없이) 182<br>• URL : <a href="https://police.go.kr">https://police.go.kr</a><br><a href="https://ecrm.police.go.kr" style="padding-left:6.4vw">https://ecrm.police.go.kr</a></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </li>
                        </ol>
                      </div>
                    </li>
                    
                    <li class="lists">
                      <h3 class="agree_tit">제12조 개인정보보호 담당부서</h3>
                      <div class="agree_cont">
                        <p class="txt">“더한섬닷컴”은 고객께서 좋은 정보를 안전하게 이용하실 수 있도록 최선을 다하고 있습니다. 개인정보를 보호하는데 있어 고객께 고지한 사항들에 반하는 사고가 발생할 시에 개인정보보호책임자가 모든 책임을 집니다. 그러나 기술적인 보완조치를 했음에도 불구하고, 해킹 등 기본적인 네트워크상의 위험성에 의해 발생하는 예기치 못한 사고로 인한 정보의 훼손 및 방문자가 작성한 게시물에 의한 각종 분쟁에 관해서는 책임이 없습니다. 고객의 개인정보를 취급하는 책임자 및 담당자는 다음과 같으며 개인정보 관련 문의사항에 신속하고 성실하게 답변해드리고 있습니다.</p>
                        <div class="hs_table_wrap">
                          <div class="table01">
                            <table>
                              <thead>
                                  <tr>
                                    <th scope="col" class="no_bd">개인정보보호 책임자</th>
                                  </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td class="no_bd al_left">
                                    • 성명 : 윤인수 <br>
                                    • 직급 : 상무<br>
                                    • 소속부서 : 경영지원본부 브랜드지원담당 <br>
                                    • 전자우편 : <a href="mailto:security_center@thehandsome.com">security_center@thehandsome.com</a><br>
                                    • 전화번호 : 1800-5700
                                  </td>
                                </tr>
                              </tbody>
                              <thead>
                                <tr>
                                  <th scope="col" class="no_bd">개인정보보호 담당자</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td class="no_bd al_left">
                                    • 성명 : 여유정<br>
                                    • 직급 : 수석<br>
                                    • 소속부서 : 더한섬닷컴팀<br>
                                    • 전자우편 : <a href="mailto:security_center@thehandsome.com">security_center@thehandsome.com</a><br>
                                    • 전화번호 : 1800-5700
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </li>
                    
                    <li class="lists">
                      <h3 class="agree_tit">제13조 만 14세 미만 아동의 개인정보보호</h3>
                      <div class="agree_cont">
                        <p class="txt">"더한섬닷컴"은 법정대리인의 동의가 필요한 만 14세 미만 아동의 회원가입을 받고 있지 않습니다.</p>
                      </div>
                    </li>
                    
                    <li class="lists">
                      <h3 class="agree_tit">제14조 광고성 정보 전송</h3>
                      <div class="agree_cont">
                        <ol class="cont_list">
                          <li>①   “더한섬닷컴”은 고객의 명시적인 수신거부의사에 반하여 영리목적의 광고성 정보를 전송하지 않습니다.</li>
                          <li>②   “더한섬닷컴”은 고객께서 뉴스레터 등 전자우편 전송에 대한 동의를 한 경우 전자우편의 제목란 및 본문란에 다음 사항과 같이 고객께서 쉽게 알아 볼 수 있도록 조치합니다.
                            <ol class="sub_list">
                              <li>1. 전자우편의 제목란 : (광고)라는 문구를 제목란에 표시하지 않을 수 있으며 전자우편 본문란의 주요 내용을 표시합니다.</li>
                              <li>2. 전자우편의 본문란 :
                                <ol class="sub_list">
                                  <li>• 고객께서 수신거부의 의사표시를 할 수 있는 전송자의 명칭, 전자우편주소, 전화번호 및 주소를 명시합니다.</li>
                                  <li>• 고객께서 수신거부의 의사를 쉽게 표시할 수 있는 방법을 한글 및 영문으로 각각 명시합니다.</li>
                                  <li>• 고객께서 동의를 한 시기 및 내용을 명시합니다.</li>
                                </ol>
                              </li>
                            </ol>
                          </li>
                          <li>③   “더한섬닷컴”은 상품정보 안내 등 온라인 마케팅을 위해 광고성 정보를 전자우편 등으로 전송하는 경우 전자우편의 제목란 및 본문란에 다음 사항과 같이 고객께서 쉽게 알아 볼 수 있도록 조치합니다.
                            <ol class="sub_list">
                              <li>1. 전자우편의 제목란 : (광고)라는 문구를 제목란의 처음에 빈칸 없이 한글로 표시하고 이어서 전자우편 본문란의 주요 내용을 표시합니다.</li>
                              <li>2. 전자우편의 본문란 :
                                <ol class="sub_list">
                                  <li>• 고객께서 수신거부의 의사표시를 할 수 있는 전송자의 명칭, 전자우편주소, 전화번호 및 주소를 명시합니다.</li>
                                  <li>• 고객께서 수신거부의 의사를 쉽게 표시할 수 있는 방법을 한글 및 영문으로 각각 명시합니다.</li>
                                </ol>
                              </li>
                            </ol>
                          </li>
                          <li>④   팩스, 휴대폰 문자전송 등 전자우편 이외의 문자전송을 통해 영리목적의 광고성 정보를 전송하는 경우에는 전송내용 처음에 "(광고)"라는 문구를 표기하고 전송내용 중에 전송자의 연락처를 명시하도록 조치합니다.</li>
                        </ol>
                      </div>
                    </li>
                    
                    <li class="lists">
                      <h3 class="agree_tit">제15조 개인정보처리방침 변경 고지</h3>
                      <div class="agree_cont">
                        <ol class="cont_list">
                          <li>이 개인정보처리방침은 정부의 정책, 법령, 회사의 필요에 의하여 변경될 수 있으며, 내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전에 홈페이지 게시, 이메일 등을 통해 사전 공지하고, 사전 공지가 곤란한 경우 최대한 빠른 시간 내 공지합니다.</li>
                          <li>다만 개인정보의 수집 이용 목적, 제3자 제공 대상 등 중요한 사항이 추가, 삭제 및 정정되는 경우에는 30일 전에 사전 공지합니다.</li>
                          <li>공고일자 : 2022-10-25<br>시행일자 : 2022-10-25</li>
                        </ol>
                      </div>
                    </li>
                  
                </ol>
              </li>
            </ul>
          </div> -->
          <!-- E : 관리자 등록 - 더한섬닷컴 -->
          <!-- <div class="get_tag_privacy">
            <h2 class="agree_tit">이전 개인정보처리방침 변경 고지</h2>
            <p><strong>개인정보처리방침 시행일자</strong>: 2015-10-17 <a href=".privacy_policy_popup" class="past btn_popup_trigger" path="/_ui/handsomemobile/common/footerPrivacy/fp_20151017.html">&gt;</a></p>
            <p><strong>개인정보처리방침 변경일자</strong>: 2017-01-16 <a href=".privacy_policy_popup" class="past btn_popup_trigger" path="/_ui/handsomemobile/common/footerPrivacy/fp_20170116.html">&gt;</a></p>
            <p><strong>개인정보처리방침 변경일자</strong>: 2017-08-03 <a href=".privacy_policy_popup" class="past btn_popup_trigger" path="/_ui/handsomemobile/common/footerPrivacy/fp_20170803.html">&gt;</a></p>
            <p><strong>개인정보처리방침 변경일자</strong>: 2017-08-30 <a href=".privacy_policy_popup" class="past btn_popup_trigger" path="/_ui/handsomemobile/common/footerPrivacy/fp_20170830.html">&gt;</a></p>
            <p><strong>개인정보처리방침 변경일자</strong>: 2017-09-06 <a href=".privacy_policy_popup" class="past btn_popup_trigger" path="/_ui/handsomemobile/common/footerPrivacy/fp_20170906.html">&gt;</a></p>
            <p><strong>개인정보처리방침 변경일자</strong>: 2017-11-09 <a href=".privacy_policy_popup" class="past btn_popup_trigger" path="/_ui/handsomemobile/common/footerPrivacy/fp_20171109.html">&gt;</a></p>
            <p><strong>개인정보처리방침 변경일자</strong>: 2018-04-22 <a href=".privacy_policy_popup" class="past btn_popup_trigger" path="/_ui/handsomemobile/common/footerPrivacy/fp_20180422.html">&gt;</a></p>
            <p><strong>개인정보처리방침 변경일자</strong>: 2018-07-11 <a href=".privacy_policy_popup" class="past btn_popup_trigger" path="/_ui/handsomemobile/common/footerPrivacy/fp_20180711.html">&gt;</a></p>
            <p><strong>개인정보처리방침 변경일자</strong>: 2018-08-30 <a href=".privacy_policy_popup" class="past btn_popup_trigger" path="/_ui/handsomemobile/common/footerPrivacy/fp_20180830.html">&gt;</a></p>
            <p><strong>개인정보처리방침 변경일자</strong>: 2018-09-20 <a href=".privacy_policy_popup" class="past btn_popup_trigger" path="/_ui/handsomemobile/common/footerPrivacy/fp_20180920.html">&gt;</a></p>
            <p><strong>개인정보처리방침 변경일자</strong>: 2018-12-17 <a href=".privacy_policy_popup" class="past btn_popup_trigger" path="/_ui/handsomemobile/common/footerPrivacy/fp_20181217.html">&gt;</a></p>
            <p><strong>개인정보처리방침 변경일자</strong>: 2019-08-12 <a href=".privacy_policy_popup" class="past btn_popup_trigger" path="/_ui/handsomemobile/common/footerPrivacy/fp_20190812.html">&gt;</a></p>
            <p><strong>개인정보처리방침 변경일자</strong>: 2020-01-16 <a href=".privacy_policy_popup" class="past btn_popup_trigger" path="/_ui/handsomemobile/common/footerPrivacy/fp_20200116.html">&gt;</a></p>
            <p><strong>개인정보처리방침 변경일자</strong>: 2020-05-28 <a href=".privacy_policy_popup" class="past btn_popup_trigger" path="/_ui/handsomemobile/common/footerPrivacy/fp_20200528.html">&gt;</a></p>
            <p><strong>개인정보처리방침 변경일자</strong>: 2020-06-25 <a href=".privacy_policy_popup" class="past btn_popup_trigger" path="/_ui/handsomemobile/common/footerPrivacy/fp_20200625.html">&gt;</a></p>
            <p><strong>개인정보처리방침 변경일자</strong>: 2020-07-09 <a href=".privacy_policy_popup" class="past btn_popup_trigger" path="/_ui/handsomemobile/common/footerPrivacy/fp_20200709.html">&gt;</a></p>
            <p><strong>개인정보처리방침 변경일자</strong>: 2020-07-23 <a href=".privacy_policy_popup" class="past btn_popup_trigger" path="/_ui/handsomemobile/common/footerPrivacy/fp_20200723.html">&gt;</a></p>
            <p><strong>개인정보처리방침 변경일자</strong>: 2020-09-24 <a href=".privacy_policy_popup" class="past btn_popup_trigger" path="/_ui/handsomemobile/common/footerPrivacy/fp_20200924.html">&gt;</a></p>
            <p><strong>개인정보처리방침 변경일자</strong>: 2021-03-11 <a href=".privacy_policy_popup" class="past btn_popup_trigger" path="/_ui/handsomemobile/common/footerPrivacy/fp_20210311.html">&gt;</a></p>
            <p><strong>개인정보처리방침 변경일자</strong>: 2021-08-20 <a href=".privacy_policy_popup" class="past btn_popup_trigger" path="/_ui/handsomemobile/common/footerPrivacy/fp_20210820.html">&gt;</a></p>
            <p><strong>개인정보처리방침 변경일자</strong>: 2021-09-10 <a href=".privacy_policy_popup" class="past btn_popup_trigger" path="/_ui/handsomemobile/common/footerPrivacy/fp_20210910.html">&gt;</a></p>
            <p><strong>개인정보처리방침 변경일자</strong>: 2022-01-27 <a href=".privacy_policy_popup" class="past btn_popup_trigger" path="/_ui/handsomemobile/common/footerPrivacy/fp_20220127.html">&gt;</a></p>
            <p><strong>개인정보처리방침 변경일자</strong>: 2022-04-01 <a href=".privacy_policy_popup" class="past btn_popup_trigger" path="/_ui/handsomemobile/common/footerPrivacy/fpf_20220401.html">&gt;</a></p>
            <p><strong>개인정보처리방침 변경일자</strong>: 2022-10-25</p>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentsLeftMenu from '~/components/common/ContentsLeftMenu'
//   [퍼블수정]23.03.07 팝업 추가
import DialogPrivacyPolicyDetaile from '~/pages/POPUP/DialogPrivacyPolicyDetaile.vue'

export default {
  components: {
    ContentsLeftMenu,
    //   [퍼블수정]23.03.07 팝업 추가
    DialogPrivacyPolicyDetaile
  },
  layout: 'LayoutBasics',
  data: () => ({
    //   [퍼블수정]23.03.07 팝업 추가
    DialogPrivacyPolicyDetaile : false,
    menuList: [
      {
        "name": "더한섬닷컴",
        "link": "/ko/CP/privacyPolicyTheHandsome",
        "active": true
      },
      {
        "name": "㈜한섬",
        "link": "/ko/CP/privacyPolicyHandsome",
        "active": false
      },
      {
        "name": "한섬 통합멤버십<br>개인정보처리방침",
        "link": "/ko/CP/privacyPolicyMember",
        "active": false
      },
    ],
  }),
  created() {

  },
  mounted(){
    //  [퍼블수정]23.03.07 html style 추가
    document.querySelector('html').style.scrollBehavior = "smooth";

    this.accordion()
  },
  methods: {
    openDialogPrivacyPolicyDetaile(){
      this.DialogPrivacyPolicyDetaile = true
    },
    closeDialogPrivacyPolicyDetaile(){
      this.DialogPrivacyPolicyDetaile = false
    },
    accordion () {
      // START : 아코디언
      const accordionContainer = document.querySelector('.accordion-container')
      
      if (accordionContainer) {

        const accordionHeaders = accordionContainer.querySelectorAll('.accordion-header')
        const toggleAllButton = document.getElementById('toggle-all')
        let allOpen = false

        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const accordionItem = header.parentElement
                const isActive = accordionItem.classList.contains('active')

                accordionContainer.querySelectorAll('.accordion-item').forEach(item => {
                    item.classList.remove('active')
                });

                if (!isActive) {
                    accordionItem.classList.add('active')
                }
            });
        });

        toggleAllButton.addEventListener('click', () => {
            allOpen = !allOpen
            toggleAllButton.textContent = allOpen ? '전체 닫힘' : '전체 열림'

            accordionContainer.querySelectorAll('.accordion-item').forEach(item => {
                if (allOpen) {
                    item.classList.add('active')
                } else {
                    item.classList.remove('active')
                }
            })
        });
      }
      // END : 아코디언
    }
  }
}
</script>
<style lang="scss" scoped>
// @import '@/assets/scss/pages/member.scss'; 
</style>
