<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="footer-terms-contents">
        <ContentsLeftMenu :title="'개인정보처리방침'" :left-data="menuList"></ContentsLeftMenu> 
        <div class="contents-r-layout">
          <div class="cmp-page-tit">
            <h2 class="tit">㈜한섬</h2>
          </div>
          <div class="terms-info">
            <!-- <dl>
              <dt class="cmp-font fnt-18 bold">들여쓰기 4단계</dt>
              <dd class="cmp-font fnt-18">제1조 총칙</dd>
              <dd>“개인정보”란 생존하는 개인에 관한 정보로서 당해 정보에 포함되어 있는 성명, 휴대전화번호, 본인확인 값 (CI : Connecting information - 서비스 연계를 위해 본인확인기관에서 부여하는 개인식별정보)등의 사항에 의하여 당해 개인을 식별할 수도 있는 정보(당해 정보만으로는 특정 개인을 실별할 수 없더라도 다른 정보와 용이하게 결함하여 식별할 수 있는 것을 포함합니다)를 말합니다.</dd>
              <dd class="cmp-font inden-type2">
                ① "더한섬닷컴"이란 “회사”가 재화 또는 용역(이하 “재화 등”을 이용자에게 제공하기 위하여 컴퓨터, 모바일 등 정보통신설비를 이용하여 “재화 등”을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 “더한섬닷컴”을 운영하는 사업자의 으미로도 사용합니다.</dd>
              <dd class="cmp-font inden-type3">* 포인트 부정 적립</dd>
              <dd class="cmp-font inden-type4">(1) 포인트 부정적립이란, 회원이 실제로 상품이나 서비스를 구매하지 않았음에도 불구하고 해당회원에게 포인트가 적립된 경우를 말합니다.</dd>
              <dd class="cmp-font fnt-18">텍스트타입</dd>
              <dd>보유기간</dd>
              <dd>밑줄 법령의 규정에 따라 귀하의 개인정보를 보존할 의무가 있는 경우가 아닌 한, 신세계 그룹사 사이트 탈퇴 시까지 또는 회원가입 동의일로부터 신세계포인트 가입 해지(탈퇴확정)시까지 보유합니다.</dd>
              <dd class="cmp-font bold">볼드 동의를 거부할 권리 및 동의 거부에 따른 불이익 안내</dd>
              <dd class="cmp-font c-red">컬러 1 고객님께서는 개인정보 제3자 제공동의를 거부할 권리가 있습니다. 단, 필수항목 동의 거부 시에는 회원 가입이 불가하며, 상기 이용목적에 명시된 서비스는 받으실 수 없습니다.</dd>
              <dd class="cmp-font c-blue">컬러 2 ※ 서비스 이용과정 및 사업 처리과정에서 수집되는 개인 정보 : 홈페이지 내 개인정보처리방침 참조</dd>
              <dd class="cmp-font fnt-14">폰트크기 작게 ② "닷컴"은 "이용자"가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 청약 철회, 배송 책임, 환불 조건 등과 같은 중요한 내용을 "이용자"가 이해할 수 있도록 별도의 연결 화면 또는 팝업 화면 등을 제공 하여 "이용자"의 확인을 구하여야 합니다.</dd>
            </dl>
            
            <dl>
              <dd>
                <button class="cmp-font fnt-16 button">링크 청약 철회, 배송, 환불에 대한 안내 보기 <i class="cmp-icon cmp-icon-16 i-next"></i></button>
              </dd>
            </dl>

            <dl>
              <dt class="cmp-font fnt-18">표 타이틀</dt>
              <dd>
                <table class="terms-row-table">
                  <caption>상품리스트</caption>
                  <colgroup>
                    <col style="width:460px">
                    <col style="width:20px">
                    <col style="width:460px">
                  </colgroup>

                  <thead>
                    <tr>
                      <th>보유기간</th>
                      <th>&nbsp;</th>
                      <th>보유기간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>이용자 식별 및 본인확인, 멤버십 서비스 및 혜택 제공, 부정이용 확인 및 방지 등 회원관리</td>
                      <td>&nbsp;</td>
                      <td>통합ID, 비밀번호, 성명, 생년월일, 성별, 본인확인정보(CI), 신세계포인트 회원번호</td>
                    </tr>
                    <tr>
                      <td>문의 응대 및 민원처리, 서비스 이용에 관한 통지</td>
                      <td>&nbsp;</td>
                      <td>휴대폰번호, 이메일</td>
                    </tr>
                  </tbody>
                </table>
              </dd>
            </dl> -->

            <!-- [퍼블수정]23.08.10 현행화 -->
            <div class="serviceContent privacyConts">
              <section>
                <div class="title_wrap">
                    <h5>한섬 개인정보 처리방침</h5>
                </div>
                <p>㈜한섬(이하 “한섬”)은 고객의 개인정보를 취급하는데 있어서, 고객의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하여, 적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다.</p>
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
                    <!-- <li>
                      <a href="#privacy06" class="link">6. 미이용자의 개인정보 파기 등에 관한 조치</a> 
                    </li> -->
                  </ol>
                  <ol>
                    <li>
                      <a href="#privacy08" class="link">8. 개인정보의 안전성 확보조치</a> 
                    </li>
                    <li>
                      <a href="#privacy09" class="link">9. 개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항</a> 
                    </li>
                    <li>
                      <a href="#privacy10" class="link">10. 정보주체와 법정대리인의 권리·의무 및 행사방법</a> 
                    </li>
                    <li>
                      <a href="#privacy11" class="link">11. 개인정보 보호책임자 및 개인정보 열람청구</a> 
                    </li>
                    <li>
                      <a href="#privacy12" class="link">12. 고객의 개인정보 권익침해에 대한 구제방법</a> 
                    </li>
                    <li>
                      <a href="#privacy13" class="link">13. 개인정보 처리방침의 변경에 관한 사항</a> 
                    </li>
                    <!-- <li>
                      <a href="#privacy10" class="link">10. 행태정보의 수집·이용 및 거부 등에 관한 사항</a> 
                    </li>
                    <li>
                      <a href="#privacy13" class="link">13. 광고성 정보 전송</a> 
                    </li>
                    <li>
                      <a href="#privacy14" class="link">14. 위치정보보호</a> 
                    </li> -->
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
                <p>“한섬”은 별도의 회원가입 절차 없이 대부분의 컨텐츠에 자유롭게 접근할 수 있습니다. “한섬”의 서비스를 이용하시는 경우(예, 회원가입, 상품 구매 등) 다음의 정보를 수집할 수 있으며 선택항목을 입력하지 않으셔도 해당 항목을 활용한 서비스를 제외한 다른 서비스 이용에는 제한이 없습니다.</p>
                <ol class="indent-0">
                    <li>
                      <span class="num-list">① 동의를 받지 않고 수집하는 개인정보<br />“한섬”은 다음의 개인정보 항목을 고객의 동의 없이 처리하고 있습니다.</span>

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
                              <th class="v-align-m" rowspan="4">개인정보 보호법 제15조 제1항 제4호<br />(계약의 이행)</th>
                              <td>한섬 회원 (한섬 멤버십)</td>
                              <td>
                                <ul class="indent-10">
                                  <li>• 회원가입 및 탈퇴</li>
                                  <li>• 회원관리</li>
                                  <li>• 고객관리(부정이용 방지)</li>
                                  <li>• 정보주체의 개인정보 열람∙정정∙삭제 요구 시 본인확인</li>
                                  <li>• 마일리지 사용</li>
                                </ul>
                              </td>
                              <td>
                                <span>성명, 생년월일, 휴대폰번호, 연계정보(CI)</span>
                              </td>
                              <td class="v-align-m" rowspan="2">회원탈퇴 및 동의철회 시까지</td>
                            </tr>
                            <tr>
                              <td>회원가입 (H.point / 현대백화점 통합회원)</td>
                              <td>
                                <ul class="indent-10">
                                  <li>• 회원가입(H.Point 통합회원) 및 탈퇴</li>
                                  <li>• 본인확인</li>
                                  <li>• 회원관리</li>
                                  <li>• 쇼핑몰 로그인</li>
                                  <li>• 아이디/비밀번호 찾기</li>
                                  <li>• 본인정보 수정</li>
                                  <li>• 고객관리(부정이용 방지)</li>
                                </ul>
                              </td>
                              <td>
                                <span>성명, 생년월일, 성별, 휴대폰번호, 이메일, H.Point통합멤버십(회원번호, 아이디), 연계정보(CI), 주소</span>
                              </td>
                            </tr>
                            <tr>
                              <td>고객상담</td>
                              <td>
                                <ul class="indent-10">
                                  <li>• 쇼핑몰 이용 상담 및 서비스 불만 처리</li>
                                </ul>
                              </td>
                              <td>
                                <span>[유선상담]<br />성명, 휴대폰번호</span>
                              </td>
                              <td>
                                <span>3년(전자상거래법 제6조)</span>
                              </td>
                            </tr>
                            <tr>
                              <td>오프라인 매장</td>
                              <td>
                                <ul class="indent-10">
                                  <li>• 재화 또는 서비스 제공</li>
                                  <li>• 구매 상품에 대한 환불 및 교환, 수선 서비스 제공</li>
                                  <li>• 구매 상품 배송 서비스</li>
                                </ul>
                              </td>
                              <td>
                                <span>성명, 휴대폰번호, 결제정보, 구매정보, 주소</span>
                              </td>
                              <td>
                                <span>5년(전자상거래법 제6조)</span>
                              </td>
                            </tr>
                            <tr>
                              <th class="v-align-m">개인정보보호법 제15조제1항제2호(법률에 특별한 규정)<br />소득세법 제21조(기타소득), 제127조(원천징수의무),제164조(지급명세서의 제출)</th>
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
                      </div>
                    </li>
                    <li>
                      <span class="num-list">② 고객의 동의를 받고 수집하는 개인정보<br />“한섬”은 다음의 개인정보 항목을 「개인정보보호법」 제15조 제1항 제1호 및 제22조 제1항 제7호에 따라 고객의 동의를 받아 처리하고 있습니다.</span>

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
                                  <span>아이디, 성명, 휴대폰번호, 성별, 연령, 연락처, 이메일, 주소(경품 배송 시)</span>
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
                                <th rowspan="2">서비스 이용기록</th>
                                <th class="bd-left">PC (WEB)</th>
                                <td rowspan="2">
                                  <ul class="indent-10">
                                    <li>• 사용자 환경설정 및 세션정보 저장, 기능 최적화</li>
                                    <li>• 마케팅 및 홍보 등을 위한 고객분석</li>
                                    <li>• 통계 및 연구조사</li>
                                  </ul>
                                </td>
                                <td>
                                  <ul class="indent-10">
                                    <li>• IP Address, 쿠키, 방문일시, 서비스 이용기록</li>
                                  </ul>
                                </td>
                                <td rowspan="2">
                                  <span>회원탈퇴 또는 동의철회 시 까지</span>
                                  <span>※ 단, 쿠키의 경우 브라우저 종료 시 만료되며, 앱 수집정보는 앱 삭제 시 만료됨</span>
                                </td>
                              </tr>
                              <tr>
                                <th class="bd-left">Mobile (WEB)</th>
                                <td>
                                  <ul class="indent-10">
                                    <li>• 모바일 기기정보 : OS종류 및 버전, 디바이스 종류, 광고식별자</li>
                                  </ul>
                                </td>
                              </tr>
                            </tbody>
                        </table>
                      </div>
                    </li>


                    <!-- <li>
                      <span class="num-list">② 법정 의무 수집 정보</span>

                      <div class="tblwrap">
                        <table>
                            <caption>법정 의무 수집 정보 내용</caption>
                            <colgroup>
                              <col style="width:20%;">
                              <col style="width:30%;">
                              <col style="width:30%;">
                              <col style="width:20%;">
                            </colgroup>
                            <thead>
                              <tr>
                                  <th scope="col">관련 법률</th>
                                  <th scope="col">수집 목적</th>
                                  <th scope="col">수집 항목</th>
                                  <th scope="col">보유기간</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td rowspan="4" class="v-align-m_mo b-l-none">전자상거래 등에서의 소비자보호에 관한 법률 제16조</td>
                                <td>
                                  <span>소비자 불만 또는 분쟁처리 기록의 보관 </span>
                                </td>
                                <td>
                                  <span>고객식별정보, 분쟁처리기록</span>
                                </td>
                                <td class="v-align-m">3년</td>
                              </tr>
                              <tr>
                                <td>
                                  <span>대금결제 및 재화 등의 공급에 관한 기록의 보관 </span>
                                </td>
                                <td>
                                  <span>고객식별정보, 대금결제 및 재화 등의 공급에 관한 기록</span>
                                </td>
                                <td class="v-align-m">5년</td>
                              </tr>
                              <tr>
                                <td>
                                  <span>청약철회 등에 관한 기록의 보관</span>
                                </td>
                                <td>
                                  <span>고객식별정보, 계약·철회 기록</span>
                                </td>
                                <td class="v-align-m">5년</td>
                              </tr>
                              <tr>
                                <td>
                                  <span>표시/광고에 관한 기록의 보관</span>
                                </td>
                                <td>
                                  <span>고객식별정보, 표시/광고에 관한 기록</span>
                                </td>
                                <td class="v-align-m">6개월</td>
                              </tr>

                              <tr>
                                <td rowspan="2" class="v-align-m_mo b-l-none">국세기본법 제26조의2, 제27조</td>
                                <td>
                                  <span>국세 징수권 및 국세환급금 소멸시효</span>
                                </td>
                                <td>
                                  <span>국세 증빙자료</span>
                                </td>
                                <td class="v-align-m">5년</td>
                              </tr>
                              <tr>
                                <td>
                                  <span>국세부과 제척기간(조세시효)</span>
                                </td>
                                <td>
                                  <span>국세 증빙자료</span>
                                </td>
                                <td class="v-align-m">10년</td>
                              </tr>
                            </tbody>
                        </table>
                        <p class="fnt-14 mt-10">※ 더한섬닷컴 앱 이용 고객의 접근권한 허용 시 고객의 모든 모바일 기기정보가 수집되는 것은 아니며, 서비스 실행 시 필요한 범위 내에서 수집됩니다</p>
                      </div>
                    </li> -->
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
                                <th rowspan="7" class="v-align-m_mo">선택</th>
                                <td>
                                  <span>위치</span>
                                </td>
                                <td>
                                  <span>사용자 근처 매장 위치 안내</span>
                                </td>
                                <td class="v-align-m" rowspan="7">선택적 접근 권한은 동의하지 않아도 기본 서비스 이용 가능</td>
                              </tr>
                              <tr>
                                <td>
                                  <span>카메라</span>
                                </td>
                                <td>
                                  <span>스타일 LIVE, 포토 상품평, 1:1 문의, 상품 Q&A, 고객의 소리, 이미지 검색 시 사진 및 동영상 촬영</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span>사진/저장공간<br />(사진, 미디어, 파일)</span>
                                </td>
                                <td>
                                  <span>스타일 LIVE, 포토 상품평, 1:1 문의, 상품 Q&A, 고객의 소리, 이미지 검색 시 사진 및 파일 업로드 (Android)</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span>전화</span>
                                </td>
                                <td>
                                  <span>매장 및 고객센터 (Android)</span>
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
                                  <span>스타일라이브 작성 및 동영상 상품평 촬영</span>
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
                          <li>- 안드로이드 계열 : 설정 → 앱 → 더한섬닷컴 앱 선택 → 권한 → 접근권한별 동의 또는 철회 선택</li>
                          <li>- IOS 계열 : 설정 → 더한섬닷컴 앱 선택 → 접근권한별 동의 또는 철회 선택</li>
                        </ol>
                      </div>
                    </li>
                    <li>
                      <span class="num-list">④ 법정 의무 수집 정보</span>

                      <div class="tblwrap">
                        <table>
                          <caption>법정 의무 수집 정보 내용</caption>
                          <colgroup>
                            <col style="width:20%;">
                            <col style="width:30%;">
                            <col style="width:30%;">
                            <col style="width:20%;">
                          </colgroup>
                          <thead>
                            <tr>
                                <th scope="col">관련 법률</th>
                                <th scope="col">수집 목적</th>
                                <th scope="col">수집 항목</th>
                                <th scope="col">보유 기간</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="b-l-none">통신비밀보호법</td>
                              <td>
                                <span>수사기관 제공 (법원 영장 등 정당한 절차의 경우에 제공)</span>
                              </td>
                              <td>
                                <span>로그기록, IP 등</span>
                              </td>
                              <td>3개월</td>
                            </tr>
                            <tr>
                              <td class="b-l-none">전자상거래보호법</td>
                              <td>
                                <span>소비자 불만 또는 분쟁처리, 계약내용 확인</span>
                              </td>
                              <td>
                                <span>고객식별정보, 분쟁처리기록, 계약ㆍ철회 기록</span>
                              </td>
                              <td>3년/5년</td>
                            </tr>
                          </tbody>
                        </table>
                        <p class="fnt-14 mt-10">※ 소득세법에 따라 경품 지급 등을 위한 제세공과금 처리 목적으로 주민등록번호 등을 수집할 수 있습니다.</p>
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
                    <span class="num-list">① “한섬”은 통합 멤버십 회원이 5년간 온라인몰 및 오프라인 매장에서 어떠한 이용 내역도 없는 경우 자동 탈퇴되며, 개인정보 수집에 대한 동의 철회 요청이 있는 경우에 해당 회원의 개인정보를 지체없이 파기하고 있습니다. 다만, 관련 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는 해당 법령에서 요구되는 기간 동안 보관 후 경과 시 파기합니다.</span>
                  </li>
                  <li>
                    <span class="num-list">② “한섬”은 장기간 미사용 고객에 대한 회원 탈퇴 30일 전까지 개인정보가 파기되는 사실, 기간 만료일 및 파기되는 개인정보 항목을 이메일, 문자 등 고객에게 통지 가능한 방법으로 알리고 있습니다.</span>
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
                <h4>3. 14세 미만 아동의 개인정보 처리에 관한 사항</h4>
                <p>“한섬”은 법정대리인의 동의가 필요한 만 14세 미만 아동의 회원가입과 개인정보를 수집하지 않습니다.</p>
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
                    <span class="num-list">① “한섬”은 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기(삭제)합니다. 다만, 아래 표와 같이 관련 법령에 따라 개인정보를 계속 보유∙이용하여야 하는 경우에는 파기하지 않고 일정 기간 보관합니다.</span>

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
                    <span class="num-list">③ (파기절차)”한섬”은 보유 목적을 달성을 개인정보의 파기 절차는 사전에 정의된 절차에 따른 자동화에 의한 파기와 수동 방식의 2가지 절차로 진행합니다.</span>
                    <ul class="mt-5 indent-14">
                      <li>• 자동화된 절차에 의한 파기: 회원탈퇴, 동의 철회, 래플 참여정보 등은 시스템에 사전에 설정된 프로그램(자동화)으로 해당 기간이 되면 자동으로 파기(삭제)를 함</li>
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
                <p>“한섬”은 고객의 동의, 법률로 정해진 규정 등 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공하며, 그 이외에는 고객의 개인정보를 제3자에게 제공하지 않습니다.</p>
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
                    <span class="num-list">② “한섬”은 다음과 같이 고객의 동의 없이 관계기관에 개인정보를 제공할 수 있습니다.</span>

                    <div class="tblwrap">
                      <table>
                        <caption>개인정보의 제3자 제공 내용</caption>
                        <colgroup>
                          <col style="width:20%;">
                          <col style="width:20%;">
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
                    <span class="num-list">① “한섬”은 고객의 서비스 이용을 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.</span>
                  </li>
                  <li>
                    <span class="num-list">② “한섬”은 위탁계약 체결 시 「개인정보 보호법」 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 안전성 확보조치, 재위탁 제한, 수탁자에 대한 관리・감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.</span>
                  </li>
                  <li>
                    <span class="num-list">③ 「개인정보 보호법」 제26조 제6항에 따라 수탁자가 고객의 개인정보 처리업무를 재 위탁하는 경우 “한섬”의 동의를 받도록 하고 있습니다.</span>
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
                            <td class="b-l-none">㈜월드피에이디, ㈜유포스트디엠</td>
                            <td>DM 발송</td>
                          </tr>
                          <tr>
                            <td class="b-l-none">슈어엠, ㈜현대퓨처넷, ㈜KT</td>
                            <td>SMS 및 카카오알림톡 발송</td>
                          </tr>
                          <tr>
                            <td class="b-l-none">㈜드림시큐리티</td>
                            <td>실명인증 및 본인인증</td>
                          </tr>
                          <tr>
                            <td class="b-l-none">CJ대한통운, 우정사업본부, 로젠 주식회사, 롯데글로벌로지스</td>
                            <td>상품 배송 업무</td>
                          </tr>
                          <tr>
                            <td class="b-l-none">㈜SK엠앤서비스, ㈜유베이스</td>
                            <td>고객 상담 업무</td>
                          </tr>
                          <tr>
                            <td class="b-l-none">㈜트로반트, ㈜다온, 한영사</td>
                            <td>세탁/수선 및 의류 AS응대</td>
                          </tr>
                          <tr>
                            <td class="b-l-none">㈜한섬 매장의 판매관리자 및 대리점주<br /><a href="https://www.thehandsome.com/ko/CS/storeInformation" class="bold mt-5">(리스트 보기)</a></td>
                            <td>매장위탁운영관리 및 회원관리</td>
                          </tr>
                          <tr>
                            <td class="b-l-none">㈜쿠프마케팅</td>
                            <td>기프티콘 발송</td>
                          </tr>
                          <tr>
                            <td class="b-l-none">㈜현대퓨처넷</td>
                            <td>정보전산 처리 및 유지/관리</td>
                          </tr>
                          <tr>
                            <td class="b-l-none">HCN</td>
                            <td>콜센터 장비 및 시스템 제공</td>
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
                          <col style="width:20%;">
                          <col style="width:40%;">
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
                            <td class="b-l-none" rowspan="3">㈜현대퓨처넷</td>
                            <td>CJ올리브네트웍스</td>
                            <td>카카오톡 발송</td>
                          </tr>
                          <tr>
                            <td>㈜나노아이티</td>
                            <td>기술/유지보수 업무 지원</td>
                          </tr>
                          <tr>
                            <td>SK 주식회사</td>
                            <td>서버, 네트워크 운영</td>
                          </tr>
                          <tr>
                            <td class="b-l-none">㈜KT</td>
                            <td>㈜모노커뮤니케이션즈</td>
                            <td>기술/유지보수 업무 지원</td>
                          </tr>
                          <tr>
                            <td class="b-l-none">트로반트㈜</td>
                            <td>로젠 주식회사</td>
                            <td>세탁/수선 완료 상품의 배송</td>
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
                <p>“한섬”은 고객이 동의한 범위 내에서만 개인정보를 이용 및 제공합니다. 「개인정보 보호법」 제15조제3항 또는 제17조제4항에 따라 고객의 동의없이 개인정보를 추가적으로 이용 또는 제공하는 경우는 아래의 판단기준에 따라 결정하도록 하겠습니다.</p>
                <ol class="indent-0">
                  <li>
                    <span class="num-list">가. 개인정보를 계속 이용 및 제공하는 목적이 최초수집 목적과 관련이 있을 것</span>
                  </li>
                  <li>
                    <span class="num-list">나. 개인정보를 수집한 정황 또는 처리 관행에 비추어 볼 때 개인정보의 추가적인 이용 또는 제공에 대한 예측 가능성이 있는지 여부</span>
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
                <p>“한섬”은 고객 개인정보의 안전성 확보를 위해 다음과 같은 보호조치를 취하고 있습니다.</p>
                <ol class="indent-0">
                  <li>가. 관리적 조치: 내부관리계획 수립∙시행, 임직원 및 외부용역사 인원 개인정보보호 교육</li>
                  <li>나. 기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 중요 개인정보의 암호화 및 마스킹, 보안프로그램 설치, 인터넷 접속통제, 24X365보안관제 모니터링</li>
                  <li>다. 물리적 조치: 전산실, 사무실 등 주요 공간 출입통제</li>
                </ol>
              </section>

              <section id="privacy09">
                <ul class="icons-wrap">
                  <li>
                    <i class="icon-privacy-36 icon-14"></i>
                  </li>
                </ul>
                <h4>9. 개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항</h4>
                <ol class="indent-0">
                  <li>
                    <span class="num-list">① “한섬”은 고객에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.</span>
                  </li>
                  <li>
                    <span class="num-list">② 쿠키는 웹사이트를 운영하는데 이용되는 서버가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 또는 모바일 기기에 저장됩니다.</span>
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
                          <li>고객은 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 고객은 웹 브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수도 있습니다. 다만, 쿠키 수집을 거부할 경우 "한섬" 서비스 사용이 불편 해지며, 로그인이 필요한 일부 서비스 이용에 어려움이 있을 수 있습니다.</li>
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

              <section id="privacy10">
                <ul class="icons-wrap">
                  <li>
                    <i class="icon-privacy-36 icon-23"></i>
                  </li>
                </ul>
                <h4>10. 정보주체와 법정대리인의 권리·의무 및 행사방법</h4>
                <ol class="indent-0">
                  <li>
                    <span class="num-list">① 고객은 “한섬”에서 처리하는 자신의 개인정보에 대하여 「개인정보보호법」 제4조(정보주체의 권리)에서 정한 권리(아래 표 참조)를 갖고 있으며, 이에 대한 권리를 행사(이하 "권리행사"라 함)할 수 있습니다.</span>

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
                    <span class="num-list">② 권리행사는 「개인정보 보호법」 시행령 제41조 제1항에 따라 서면, 전자우편, 팩스(FAX) 등을 통하여 하실 수 있으며, “한섬”은 이에 대해 지체없이 조치하겠습니다.</span>
                    <ul class="mt-5 indent-10">
                      <li>
                        <span>• 고객은 언제든지 “한섬” 홈페이지의 「회원정보 수정」 또는 「회원탈퇴」 항목을 클릭하여 개인정보 수집 및 이용 동의 철회의 방법으로 직접 하거나, 아래에 적힌 개인정보보호책임자 및 담당자에게 서면, 전화 또는 이메일로 연락하시면 지체 없이 조치하겠습니다.</span>
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
                    <span class="num-list">⑥ “한섬”은 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리 정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.</span>
                  </li>
                  <li>
                    <span class="num-list">⑦ 개인정보의 열람, 정정삭제, 처리정지 등의 권리 행사의 접수는 “한섬 고객센터”(아래 11. 개인정보 보호책임자 및 개인정보 열람청구 표 참조)에 할 수 있습니다.  접수된 고객의 개인정보 권리행사 요구를 지체없이 처리하겠습니다.</span>
                  </li>
                </ol>
              </section>

              <section id="privacy11">
                <ul class="icons-wrap">
                  <li>
                    <i class="icon-privacy-36 icon-29"></i>
                  </li>
                  <li>
                    <i class="icon-privacy-36 icon-33"></i>
                  </li>
                </ul>
                <h4>11. 개인정보 보호책임자 및 개인정보 열람청구</h4>
                <ol class="indent-0">
                  <li>
                    <span class="num-list">① “한섬”은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 고객의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</span>
                  </li>
                  <li>
                    <span class="num-list">② 고객은 「개인정보 보호법」 제35조에 따른 개인정보의 열람청구를 아래의 부서에 할 수 있습니다. “한섬”은 고객의 개인정보 열람청구를 신속하게 처리되도록 노력하겠습니다.</span>

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
                                <li>• 성명: 최원철</li>
                                <li>• 직급: 수석</li>
                                <li>• 소속부서: 고객케어팀</li>
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
                                <li>• 한섬 고객센터</li>
                              </ul>
                            </td>
                            <td>
                              <ul class="indent-10">
                                <li>• 이메일 <br>
                                  - 온라인: <a href="mailto:shophelp@thehandsome.com">shophelp@thehandsome.com</a> <br>
                                  - 오프라인: <a href="mailto:offlineshop@thehandsome.com">offlineshop@thehandsome.com</a>
                                </li>
                                <li>• 전화번호: 1800-5700</li>
                                <li>• 팩스번호: 02-6078-2856</li>
                                <li>• 주 소: 05402, 서울특별시 강동구 강동대로 195(성내동)</li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </li>
                  <li>
                    <span class="num-list">③ 전화상담은 평일 오전 09:00 ~ 18:00 입니다. 주말/공휴일에 문의가 필요할 시 이메일을 통해 연락해주시기 바랍니다.</span>
                  </li>
                  <li>
                    <span class="num-list">④ 전자우편이나 팩스 및 우편을 이용한 상담은 접수 후 빠른 시간 내에 성실하게 답변 드리겠습니다. 다만, 근무시간 이후 또는 주말 및 공휴일에는 익일 처리하는 것을 원칙으로 합니다.</span>
                  </li>
                </ol>
              </section>

              <section id="privacy12">
                <ul class="icons-wrap">
                  <li>
                    <i class="icon-privacy-36 icon-31"></i>
                  </li>
                </ul>
                <h4>12. 고객의 개인정보 권익침해에 대한 구제방법</h4>
                <ol class="indent-0">
                  <li>
                    <span class="num-list">① “한섬”은 고객의 개인정보 자기결정권을 보장하고, 개인정보침해로 인한 상담 및 피해 구제를 위해 노력하고 있으며, 신고나 상담이 필요한 경우 아래의 담당부서로 연락해 주시기 바랍니다.</span>

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
                            <td class="b-l-none">개인정보보호 관련 침해 신고 및 상담 청구</td>
                            <td>
                              <ul class="indent-10">
                                <li>• 한섬 고객센터</li>
                              </ul>
                            </td>
                            <td>
                              <ul class="indent-10">
                                <li>• 이메일 <br>
                                  - 온라인: <a href="mailto:shophelp@thehandsome.com">shophelp@thehandsome.com</a> <br>
                                  - 오프라인: <a href="mailto:offlineshop@thehandsome.com">offlineshop@thehandsome.com</a>
                                </li>
                                <li>• 전화번호: 1800-5700</li>
                                <li>• 팩스번호: 02-6078-2856</li>
                                <li>• 주 소: 05402, 서울특별시 강동구 강동대로 195(성내동)</li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </li>
                  <li>
                    <span class="num-list">② 고객은 개인정보침해로 인한 구제를 받기 위하여 아래의 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.</span>

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

              <section id="privacy13">
                <ul class="icons-wrap">
                  <li>
                    <i class="icon-privacy-36 icon-25"></i>
                  </li>
                </ul>
                <h4>13. 개인정보 처리방침의 변경에 관한 사항</h4>
                <ol class="indent-0">
                  <li>
                    <span class="num-list">① 이 개인정보 처리방침은 2024년 10월 29일부터 적용됩니다.</span>
                  </li>
                  <li>
                    <span class="num-list">② 이 개인정보 처리방침은 정부의 정책, 법령, “한섬”의 필요에 의하여 변경될 수 있으며, 내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전에 홈페이지 게시, 이메일 등을 통해 사전 공지하고, 사전 공지가 곤란한 경우 최대한 빠른 시간 내 공지합니다. 다만, 개인정보의 수집 이용 목적, 제3자 제공 대상 등 중요한 사항이 추가, 삭제 및 정정되는 경우에는 30일 전에 사전 공지합니다. 이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다.</span>
                  </li>
                  <li>
                    <span class="num-list">③ 개정된 개인정보 처리방침의 주요 내용</span>
                    <ol class="indent-0">
                      <li class="no-indent">
                        <span class="num-list">가. 주요 개정 내용</span>
                        <ul class="indent-14">
                          <li>• 고객의 동의없이 추가적인 이용∙제공을 위한 판단 기준 신규 추가</li>
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


              <!-- <section id="privacy06">
                <ul class="icons-wrap">
                  <li>
                    <i class="icon-privacy-36 icon-22"></i>
                  </li>
                </ul>
                <h4>6. 미이용자의 개인정보 파기 등에 관한 조치 (분리저장하는 경우)</h4>
                <ol class="indent-0">
                  <li>
                    <span class="num-list">① “한섬”은 통합 멤버십 회원이 5년간 온라인몰 및 오프라인 매장에서 어떠한 이용 내역도 없어 자동 탈퇴되거나, 개인정보 수집에 대한 동의 철회 요청이 있는 경우에 해당 회원의 개인정보를 지체없이 파기하고 있습니다. 다만, 관련법령에 따라 개인정보를 계속 보존하여야 하는 경우에는 해당 법령에서 요구되는 기간 동안 보관 후 경과 시 파기합니다. </span>
                  </li>
                  <li>
                    <span class="num-list">② “한섬”은 개인정보의 파기 30일 전까지 개인정보가 파기되는 사실, 기간 만료일 및 파기되는 개인정보 항목을 이메일, 문자 등 고객에게 통지 가능한 방법으로 알리고 있습니다. </span>
                  </li>
                  <li>
                    <span class="num-list">③ 개인정보의 파기를 원하지 않으시는 경우, 기간 만료 전 온라인몰 로그인 또는 오프라인 매장을 이용하시면 됩니다.</span>
                  </li>
                </ol>
              </section> -->
              
              <!-- <section id="privacy09">
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
                    <span class="num-list">② “한섬”은 민감정보를 수집하지 않습니다.</span>
                  </li>
                  <li>
                    <span class="num-list">③ “한섬”은 서비스를 제공하는 과정에서 고객의 사생활을 침해할 위험이 있는 민감정보가 포함될 경우에는 고객의 동의를 받고 수집하고, 민감정보의 공개 및 비공개를 선택할 수 있는 방법을 안내하겠습니다.</span>
                  </li>
                </ol>
              </section> -->

              <!-- <section id="privacy10">
                <ul class="icons-wrap">
                  <li>
                    <i class="icon-privacy-36 icon-15"></i>
                  </li>
                </ul>
                <h4>10. 행태정보의 수집·이용 및 거부 등에 관한 사항</h4>
                <ol class="indent-0">
                  <li>
                    <span class="num-list">① “한섬”은 온라인몰 서비스 이용과정에서 고객에게 최적화된 맞춤형 서비스 및 혜택, 온라인 맞춤형 광고 등을 제공하기 위하여 행태정보를 수집·이용하고 있습니다.</span>
                  </li>
                  <li>
                    <span class="num-list">② “한섬”은 다음과 같이 행태정보를 수집합니다.</span>

                    <div class="tblwrap">
                      <table>
                        <caption>행태정보의 수집·이용 및 거부 등에 관한 내용</caption>
                        <colgroup>
                          <col style="width:35%;">
                          <col style="width:65%;">
                        </colgroup>
                        <tbody class="n-thead">
                          <tr>
                            <th>수집하는 행태정보의 항목</th>
                            <td>고객의 더한섬닷컴, H패션몰, EQL 웹/앱 서비스 방문이력, 검색이력, 구매이력</td>
                          </tr>
                          <tr>
                            <th>행태정보 수집방법</th>
                            <td>고객의 더한섬닷컴, H패션몰, EQL 웹/앱 방문/실행 시 자동수집</td>
                          </tr>
                          <tr>
                            <th>행태정보 수집목적</th>
                            <td>
                              <ul class="indent-10">
                                <li>- 고객 개인의 관심 분야에 따른 정보 제공</li>
                                <li>- 접속빈도 또는 방문시간 등을 분석하고 이용자의 취향과 관심분야를 파악하여 타겟(target)마케팅 및 서비스 개선 척도로 활용</li>
                                <li>- 쇼핑한 품목들에 대한 정보와 관심있게 둘러본 품목을 추척하여 개인 맞춤 쇼핑서비스 제공</li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <th>행태정보 보유 이용 기간 및 이후 정보처리 방법</th>
                            <td>수집일로부터 30일 후 파기</td>
                          </tr>
                          <tr>
                            <th>이용자 통제권 행사방법</th>
                            <td>
                              <ul class="indent-10">
                                <li>- 안드로이드 계열 : 설정 → 애플리케이션 → ‘더한섬닷컴, H패션몰, EQL’ 선택 → 권한 → 접근항목별 ‘허용’ 또는 ‘허용안함’ 체크</li>
                                <li>- IOS 계열 : 설정 → ‘더한섬닷컴, H패션몰, EQL’ 앱 선택 → 접근권한 별 동의 또는 철회 체크</li>
                                <li>- 인터넷익스플로러의 경우, 웹브라우저 상단의 [도구] → [인터넷옵션] → [개인정보] → [고급] 메뉴를 통하여 쿠키 설정 거부</li>
                                <li>- Safari의 경우, Mac OS 상단 좌측 메뉴바에서 [Safari] → [환경설정] → [보안]을 통하여 쿠키 허용 여부 설정</li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </li>
                  <li>
                    <span class="num-list">③ “한섬”은 온라인 맞춤형 광고 등에 필요한 최소한의 행태정보만을 수집하며, 사상, 신념, 가족 및 친인척관계, 학력·병력, 기타 사회활동 경력 등 개인의 권리·이익이나 사생활을 뚜렷하게 침해할 우려가 있는 민감한 행태정보를 수집하지 않습니다.</span>
                  </li>
                  <li>
                    <span class="num-list">④ “한섬”은 만 14세 미만임을 알고 있는 아동이나 만 14세 미만의 아동을 주 이용자로 하는 온라인 서비스로부터 맞춤형 광고 목적의 행태정보를 수집하지 않고, 만 14세 미만임을 알고 있는 아동에게는 맞춤형 광고를 제공하지 않습니다.</span>
                  </li>
                  <li>
                    <span class="num-list">⑤ “한섬”은 모바일 앱에서 온라인 맞춤형 광고를 위하여 광고식별자를 수집· 이용합니다. 고객은 모바일 단말기의 설정 변경을 통해 앱의 맞춤형 광고를 차단·허용할 수 있습니다.</span>
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
                            <td class="b-l-none" rowspan="3">개인정보 민원처리센터</td>
                            <td>
                              <ul class="indent-10">
                                <li>• 더한섬닷컴 민원처리센터</li>
                              </ul>
                            </td>
                            <td>
                              <ul class="indent-10">
                                <li>• 홈페이지: <a href="http://www.thehandsome.com">http://www.thehandsome.com</a></li>
                                <li>• 이메일: <a href="mailto:shophelp@thehandsome.com">shophelp@thehandsome.com</a></li>
                                <li>• 전화번호: 1800-5700</li>
                                <li>• 팩스번호: 02-3416-4905</li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <ul class="indent-10">
                                <li>• H패션몰 민원처리센터</li>
                              </ul>
                            </td>
                            <td>
                              <ul class="indent-10">
                                <li>• 홈페이지: <a href="http://www.hfashionmall.com">http://www.hfashionmall.com</a></li>
                                <li>• 이메일: <a href="mailto:hfashionmall@hyundaimall.com">hfashionmall@hyundaimall.com</a></li>
                                <li>• 전화번호: 1600-3982</li>
                                <li>• 팩스번호: 02-476-8169</li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <ul class="indent-10">
                                <li>• 이큐엘닷컴 민원처리센터</li>
                              </ul>
                            </td>
                            <td>
                              <ul class="indent-10">
                                <li>• 홈페이지: <a href="https://www.eqlstore.com">https://www.eqlstore.com</a></li>
                                <li>• 이메일: <a href="mailto:eql_customer@thehandsome.com">eql_customer@thehandsome.com</a></li>
                                <li>• 전화번호: 1661-8588</li>
                                <li>• 팩스번호: 02-476-8169</li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </li>
                </ol>
              </section> -->

              <!-- <section id="privacy13">
                <ul class="icons-wrap">
                  <li>
                    <i class="icon-privacy-36 icon-13"></i>
                  </li>
                </ul>
                <h4>13. 광고성 정보 전송</h4>
                <ol class="indent-0">
                  <li>
                    <span class="num-list">① “한섬”은 고객의 명시적인 수신거부의사에 반하여 영리목적의 광고성 정보를 전송하지 않습니다.</span>
                  </li>
                  <li>
                    <span class="num-list">② “한섬”은 고객께서 뉴스레터 등 전자우편 전송에 대한 동의를 한 경우 전자우편의 제목란 및 본문란에 다음 사항과 같이 고객께서 쉽게 알아 볼 수 있도록 조치합니다.</span>
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
                    <span class="num-list">③ “한섬”은 상품정보 안내 등 온라인 마케팅을 위해 광고성 정보를 전자우편 등으로 전송하는 경우 전자우편의 제목란 및 본문란에 다음 사항과 같이 고객께서 쉽게 알아 볼 수 있도록 조치합니다.</span>
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

              <!-- <section id="privacy14">
                <ul class="icons-wrap">
                  <li>
                    <i class="icon-privacy-36 icon-05"></i>
                  </li>
                </ul>
                <h4>14. 위치정보보호</h4>
                <ol class="indent-0">
                  <li>
                    <span class="num-list">“한섬”은 위치정보의 보호 및 이용 등에 관한 법률(이하 “위치정보법”)에 따라 다음과 같이 고객의 개인위치정보를 안전하게 관리합니다.</span>
                  </li>
                  <li>
                    <ol>
                      <li>1. 개인위치정보의 처리목적 및 보유기간: “한섬”은 타 위치정보사업자로부터 개인위치정보를 전달받아, 위치기반 상품 추천 서비스를 제공하며, 개인위치정보의 보유기간은 회원 탈퇴시까지입니다. </li>
                      <li>2. 개인위치정보 수집∙이용∙제공사실 확인자료의 보유근거 및 보유기간: ”한섬”은 위치정보법 제16조 제2항에 근거하여 고객의 위치정보 수집∙이용∙제공사실 확인자료를 위치정보시스템에 자동으로 기록하며 12개월간 보관합니다. </li>
                      <li>3. 개인위치정보의 파기 절차 및 방법: ”한섬”은 개인위치정보의 보유기간이 만료된 경우, 개인위치정보를 재생이 불가능한 방법으로 안전하게 파기하고 있습니다. 전자적 파일 형태는 복구 및 재생이 불가능한 기술적인 방법으로 파기하며, 출력물 등은 분쇄하거나 소각하는 방식으로 파기합니다.</li>
                      <li>4. 개인위치정보의 제3자 제공에 관한 사항: ”한섬”은 고객의 동의 없이 개인위치정보를 제3자에게 제공하지 않으며, 제3자에게 제공하는 경우에는 제공받는 자 및 제공 목적을 사전에 이용자에게 고지하고 동의를 받습니다. 개인위치정보를 고객이 지정하는 제3자에게 제공하는 서비스를 하고자 하는 경우에는 매회 개인위치정보주체에게 제공받는 자, 제공일시 및 제공목적을 즉시 통보합니다. </li>
                      <li>5. 8세 이하의 아동 등의 보호의무자의 권리의무 및 그 행사방법: ”한섬”은 아래의 경우에 해당하는 고객(이하 “8세이하의 아동 등”)의 보호의무자가 8세 이하의 아동 동의 생명 또는 신체보호를 위하여 개인위치정보의 이용 또는 제공에 동의하는 경우에는 본인의 동의가 있는 것으로 봅니다. 8세 이하의 아동 등의 생명 또는 신체의 보호를 위하여 개인위치정보의 이용 또는 제공에 동의를 하고자 하는 보호의무자는 서면동의서에 보호의무자임을 증명하는 서면을 첨부하여 회사에 제출하여야 합니다.
                        <ul class="mt-18 indent-14">
                          <li>• 8세 이하의 아동</li>
                          <li>• 피성년후견인</li>
                          <li>• 장애인복지법 제2조 제2항 제2호에 다른 정신적 장애를 가진 사람으로서 장애인고용촉진 및 직업재활법 제2조 제2호에 다른 중증장애인에 해당하는 사람(장애인복지법 제32조에 따라 장애인 등록을 한 사람만 해당한다)</li>
                        </ul>
                      </li>
                      <li>6. 위치정보 관리책임자 및 개인위치정보의 보호업무 및 관련 고충사항을 처리하는 부서의 정보: 이 개인정보 처리방침 11. 개인정보 보호책임자 및 개인정보 열람청구 정보와 동일합니다.</li>
                    </ol>
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
            .serviceContent.privacyConts .bold{display:inline-block;font-weight:bold;}
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
            .serviceContent.privacyConts .tblwrap table tbody th.bd-left{border-left:1px solid #f0f0f0;}
            .serviceContent.privacyConts .tblwrap table tbody td{padding:1.2rem 2rem;border-top:1px solid #f0f0f0;border-left:1px solid #f0f0f0;font-size:1.4rem;line-height:2.2rem;font-weight:400;text-align:left;vertical-align:top;}
            .serviceContent.privacyConts .tblwrap table tbody td.b-l-none{border-left:none;}
            .serviceContent.privacyConts .tblwrap table tbody td.v-align-m{vertical-align:middle;}
            .serviceContent.privacyConts .tblwrap table tbody td span{display:inline-block;}
            .serviceContent.privacyConts .tblwrap table tbody td span + span{margin-top:2rem;}
            .serviceContent.privacyConts .tblwrap table ul li{font-size:1.4rem;}
            .serviceContent.privacyConts .icons-info{display:flex;align-items:center;justify-content:space-between;padding:32px 35px 30px;background-color:#F8F8F8;}
            .serviceContent.privacyConts .icons-info li{margin:0;padding:0;}
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
            <!-- //[퍼블수정]23.08.10 현행화 -->




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
          </div>
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
    menuList: [
      {
        "name": "더한섬닷컴",
        "link": "/ko/CP/privacyPolicyTheHandsome",
        "active": false
      },
      {
        "name": "㈜한섬",
        "link": "/ko/CP/privacyPolicyHandsome",
        "active": true
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
    //  [퍼블] html style 추가
    document.querySelector('html').style.scrollBehavior = "smooth";
  },
}
</script>
<style lang="scss" scoped>
// @import '@/assets/scss/pages/member.scss'; 
</style>
