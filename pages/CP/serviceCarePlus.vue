<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="footer-terms-contents">
        <ContentsLeftMenu :title="'서비스이용약관'" :left-data="menuList"></ContentsLeftMenu> 
        <div class="contents-r-layout">
          <div class="cmp-page-tit">
            <h2 class="tit">한섬 케어 플러스 이용약관</h2>
          </div>
          <div class="terms-info">
            <!-- <%@ tag language="java" pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
            <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> -->

            <!-- 한섬 케어 플러스 이용약관 -->
            <div class="serviceContent service_care" id="service_care">
                <h5>제1조 목적</h5>
                <p>이 약관은 주식회사 한섬(이하 “회사”라고 함)이 운영하는 프리미엄 세탁수선 서비스인 ‘한섬 케어플러스 서비스’(이하 “서비스”)를 이용함에 있어 “회사”와 이용자간 권리ㆍ의무 및 책임사항을 규정함을 목적으로 합니다.</p>

                <h5>제2조 정의</h5>
                <p>이 약관에서 사용하는 용어는 다음과 같이 정의합니다.</p>
                <ol>
                    <li>1.  "온라인몰"이란 “회사”가 재화 또는 용역(이하 “재화 등”)을 이용자에게 제공하기 위하여 컴퓨터, 모바일 등 정보통신설비를 이용하여 “재화 등”을 거래할 수 있도록 설정한 가상의 영업장을 말합니다.</li>
                    <li>2.  “매장”이란 “회사”가 “재화 등”을 이용자에게 제공하기 위하여 운영하는 오프라인 영업장을 말합니다.</li>
                    <li>3.  “서비스”란 “회사”가 이용자를 대상으로 “회사”가 제공하는 세탁, 수선 및 이에 부수하여 제공되는 수거배달, 택배 등을 포함합니다.</li>
                    <li>4.  “이용자”라 함은  “회사”가 제공하는 “서비스”를 이용 중이거나 이용 이력이 있는 자를 말합니다.</li>
                    <li>5.  “직원”이라 함은 “이용자”와 직접 또는 간접적으로 만나는 서비스 수행 주체이자 유ㆍ무선 상담 채널 등을 통해 만나게 되는 “회사”의 모든 직원들을 말합니다.</li>
                    <li>6.  “위탁사”라 함은 “회사”와 계약하고 “이용자”에게 직접 “서비스” 제공업무를 수행하는 사업자를 말합니다.</li>
                    <li>7.  “목적물”이라 함은 “이용자”가 의뢰한 “서비스” 제공 대상 세탁물 및/또는 수선물을 말합니다.</li>
                    <li>8.  “이용권”이라 함은 “회사”가 “이용자”에게 제공하는 “서비스” 전용 사용 수단인 이용권을 말합니다.</li>
                </ol>

                <h5>제3조 약관의 효력 및 개정</h5>
                <ol>
                    <li>1.  이 약관은 그 내용을 “회사”의 홈페이지에 게시하고, “이용자”가 “서비스”를 신청함으로써 그 효력이 발생합니다.</li>
                    <li>2.  “회사”는 「소비자기본법」, 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제 등에 관한 법률」, 「전자거래기본법」, 「전자서명법」, 「정보통신망 이용촉진 등에 관한 법률」 등 관련 법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</li>
                    <li>3.  “회사”가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행 약관과 함께 “회사”의 홈페이지에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만, “이용자”에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다. 이 경우 “회사”는 개정 전과 개정 후 내용을 명확하게 비교하여 “이용자”가 알기 쉽도록 표시합니다.</li>
                    <li>4.  “회사”가 약관을 개정할 경우에는 그 개정약관은 그 적용 일자 이후에 제공되는 “서비스”에만 적용되고 그 이전에 이미 제공된 ”서비스”에 대해서는 개정 전의 약관조항이 그대로 적용됩니다. 다만 이미 ”서비스”를 신청한 “이용자”가 개정약관 조항의 적용을 받기를 원하는 뜻을 제4항에 의한 개정약관의 공지기간 내에 “회사”에 송신하여 “회사”의 동의를 받은 경우에는 개정약관 조항이 적용됩니다.</li>
                    <li>5.  이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 「민법」, 「소비자기본법」, 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제 등에 관한 법률」, 공정거래위원회가 정하는 「전자상거래 등에서의 소비자보호지침」 등의 관계 법령 또는 상관례에 따릅니다.</li>
                </ol>

                <h5>제4조 “이용자”에 대한 통지</h5>
                <ol>
                    <li>1.  “회사”가 “이용자”에 대한 통지를 하는 경우 “이용자”가 “회사”와 미리 약정하여 지정한 매체(SMS, MMS, E-Mail 등)로 할 수 있습니다.</li>
                    <li>2.  “회사”는 불특정다수 “이용자”에 대한 통지의 경우 1주일 이상 “회사”의 홈페이지 온라인 게시판(게시판 주소)에 게시함으로써 개별 통지에 갈음할 수 있습니다. 다만, “이용자” 본인의 거래와 관련하여 중대한 영향을 미치는 사항에 대하여는 개별 통지합니다.</li>
                </ol>

                <h5>제5조 “회사”의 의무</h5>
                <ol>
                    <li>1.  ”회사”는 “이용자”로부터 ”목적물”을 인수하면 ”목적물”의 탈색․손상․변형․수축․오점 등의 하자 여부를 확인합니다 이를 게을리 하여 “서비스” 제공 완료 후 발견된 목적물의 하자 원인이 불분명한 경우 “이용자”의 피해는 “회사”가 책임을 집니다.</li>
                    <li>2.  ”회사”는 세탁/수선 완성 예정일을 준수하도록 노력하며, 예정일에 변동이 발생할 경우 그 사실을 안내합니다.</li>
                    <li>3.  “회사”는 “이용자”로부터 인수받은 목적물의 보관․유지에 대하여 선량한 관리자의 의무를 다하여야 합니다.</li>
                    <li>4.  “회사”는 “서비스”의 약관 및 운영정책에 따라 유효하게 접수된 “이용자”의 목적물을 제외하고 “이용자”와 “위탁사”간에 발생한 거래와 관계를 인정하지 않으며, 그에 대한 책임을 지지 않습니다.</li>
                </ol>

                <h5>제6조 “이용자”의 권리와 의무</h5>
                <ol>
                    <li>1.  “이용자”는 고객센터 문의를 통해 “서비스”에 대한 각종 문의 및 건의를 할 수 있습니다.</li>
                    <li>2.  “이용자”는 “회사”에게 “이용자”의 주소와 연락처를 포함한 신청 정보와 ”목적물”의 구입 금액 및 구입일, ”목적물”에 대한 “직원” 및 신청 페이지의 질문 등에 대하여 질문하는 경우에 진실되고 정확하며 완전한 정보를 알려야 합니다.</li>
                    <li>
                        3.  “이용자”는 본인의 진실되고 정확하며 완전한 정보로만 “서비스”를 이용해야 합니다. 다음 각 호의 경우에 대해서는 “회사”는 서비스 제공을 거부하거나 서비스 이용 중 발생한 문제에 대해 어떠한 책임도 지지 아니하며, 즉시 “이용자”의 서비스 이용을 중단하는 등 적절한 제한을 할 수 있습니다.
                        <ol>
                            <li>①   “이용자”의 명의/계정으로 본인 혹은 타인이 타인의 명의, 주소 등의 개인정보를 이용하여 “서비스”를 이용하려 하거나 이용한 경우</li>
                            <li>②   “이용자”가 “서비스” 이용에 필요한 정보를 입력하지 않은 경우</li>
                            <li>③   “이용자”가 “서비스” 신청 시 허위의 정보를 입력한 경우</li>
                        </ol>
                    </li>
                    <li>4.  “이용자”는 “회사”가 제공하지 않은 방법으로 “서비스” 및 “온라인몰”에 접근할 수 없습니다. 또한 “회사”의 동의 없이 “서비스” 또는 이에 포함된 소프트웨어의 일부를 복사, 수정, 배포, 판매, 양도, 대여, 담보제공하거나 타인에게 그 이용을 허락하게 하는 행위 및 소프트웨어를 역설계하거나 소스 코드의 추출을 시도하는 등 서비스를 복제, 분해, 모방 혹은 변형하는 행위가 금지됩니다.</li>
                </ol>

                <h5>제7조 “이용권”의 사용</h5>
                <ol>
                    <li>1.  이용권은 “회사”가 지정하는 “이용자”에게 제공되며 금전으로의 환불처리가 불가합니다.</li>
                    <li>2.  이용권 제공 개수, 유효기간, 사용방법 등은 수시로 달라질 수 있으며 “회사” 정책 및 “이용자”에게 고지된 내용에 따릅니다.</li>
                    <li>3.  이용권은 의류 1개 당 1회 사용으로 보며, 1회 사용 가능 개수는 제한되지 않습니다. 예를 들어 자켓 1개, 코트 1개를 1번에 신청할 수 있으며, 이 때 차감되는 이용권은 2개입니다.</li>
                    <li>4.  지정된 사용기간이 경과될 경우 이용권은 소멸되며 복구되지 않습니다. “회사”는 소멸된 이용권에 대해 별도의 보상을 제공하지 않습니다.</li>
                </ol>

                <h5>제8조 “서비스” 제공 대상</h5>
                <ol>
                    <li>1.  “서비스” 제공이 가능한 “목적물”은 “회사”가 운영하는 브랜드 전부 또는 일부 제품에 한정하며, “회사”의 운영정책에 따라 달라집니다.</li>
                    <li>
                        2.  “회사”의 브랜드 제품이라 할지라도 아래 품목의 경우 “서비스” 제공 대상에서 제외됩니다.
                        <ol>
                            <li>①   가죽류, 무스탕류, 밍크류(단, “매장”에서 “서비스” 신청시 제품 확인 후 유상 이용이 가능할 수 있습니다)</li>
                            <li>②   패션잡화 품목(신발, 가방, 모자, 액세서리 등)</li>
                            <li>③   오랜 시간으로 원단이 약해지거나 찢어진 제품</li>
                        </ol>
                    </li>
                    <li>3.  “회사”는 “이용자”의 “서비스” 신청에 의해 ”목적물”을 인도받은 후 검수 과정 또는 “서비스”를 접수하는 과정에서 전문가의 의견에 따라 케어가 불가능하다고 판단할 수 있습니다. 이 경우 즉시 그 사유에 대해 “이용자”에게 고지하고 “이용자”에게 현장 반환하거나 지정한 배송지로 반환하며, 해당 상품에 “이용자”가 사용한 이용권은 사용되지 않은 것으로 처리됩니다. “온라인몰”을 통한 신청시, 만약 해당 상품과 함께 접수된 다른 ”목적물”이 있고 그 ”목적물”은 세탁/수선이 가능하다면, ”이용자”에게 고지한 후 그 다른 ”목적물”에 대하여서는 세탁/수선을 수행하며, 이 경우, 세탁/수선이 불가능한 “목적물”은 세탁/수선이 완료된 “목적물”과 함께 “이용자”에게 발송되고, 개별 발송되지 않습니다.</li>
                    <li>4.  “목적물”의 특성 및 상태에 따라 “목적물”의 얼룩, 털, 보풀 등의 완전한 제거나 구입시와 동일한 상태로의 수선 등이 불가할 수 있으며, 이를 사유로 하는 이용권의 환불은 불가합니다.</li>
                </ol>

                <h5>제9조 “서비스” 제공 방법</h5>
                <ol>
                    <li>1.  “서비스”는 “온라인몰” 접수시 수거배달/택배로 신청 가능하며, “매장” 접수시 택배/현장 인도로 신청 가능합니다. “서비스” 완료 시 신청한 방법과 동일한 방법으로 반환되고, 수거배달/택배의 경우 배송지는 “서비스” 신청 시 기재한 주소와 동일하여야 하며, ”목적물” 수거 주소와 배송 주소를 다르게 설정할 수 없습니다.</li>
                    <li>2.  수거배달 방식으로 신청할 경우, 지역에 따라 신청이 제한될 수 있으며, “이용자”가 지정한 일시에 지정한 배송지로 방문하여 “목적물” 수거가 진행됩니다.</li>
                    <li>3.  택배 방식으로 신청할 경우, “이용자”는 “목적물”을 택배 운송이 가능한 방법으로 포장해 두어야 하며, 택배사가 지정된 배송지로 방문하여 “목적물” 수거를 진행합니다.</li>
                    <li>4.  “회사”는 “이용자”로부터 “목적물”을 인수하면 인수증을 교부하며, 서비스 관련 문제 발생 시 교부한 인수증을 바탕으로 책임 소재를 판단합니다.</li>
                    <li>5.  “목적물”에 대한 추가 확인 및 고지가 필요한 경우 “위탁사”의 담당자가 “서비스” 신청 시 기재한 연락처로 개별 연락합니다.</li>
                    <li>6.  수거배달 방식으로 신청한 경우, 세탁/수선이 완료되면 “위탁사”의 담당자가 ”목적물” 배송 일정을 정하기 위해 “서비스” 신청 시 기재한 “이용자”의 연락처로 개별 연락합니다.</li>
                    <li>7.  택배 방식으로 신청한 경우, 세탁/수선이 완료되면 “위탁사”의 전문 상담사가 택배 발송 후 서비스 신청 시 기재한 “이용자”의 연락처로 개별 연락합니다.</li>
                </ol>

                <h5>제10조 서비스 이용 제한</h5>
                <ol>
                    <li>
                        1.  “회사”는 다음에 해당할 경우 사전 경고 없이 “이용자”의 “서비스” 이용을 거부/제한할 수 있습니다. 거부/제한의 정도는 일시적 뿐만 아니라 정도에 따라 영구적으로도 가능합니다.
                        <ol>
                            <li>①   “이용자”사 본 약관 제6조 제3항을 위반하는 경우</li>
                            <li>②   정상적인 서비스 이용으로 볼 수 없는 다량의 “회사” 멤버십(한섬통합멤버십, 더한섬닷컴 멤버십 등 “회사”가 운영하는 일체의 회원 제도를 의미함) 및/또는 SNS 계정 생성 및 “회사” 멤버십회원 가입/탈퇴 반복</li>
                            <li>③   “직원” 및 위탁사 직원을 향한 욕설, 고성, 인신공격이나 협박 등의 폭언, 물리적 위협, 폭력 등 공서양속 및 법령에 위반되는 행위, 음란 행위, 기타 사회 통념에 반하는 비정상적인 행위</li>
                            <li>④   기타 건전한 “서비스” 환경 제공에 악영향을 끼치는 경우</li>
                            <li>⑤   기타 합리적인 판단에 기하여 “서비스”의 제공을 거부할 필요가 있다고 “회사”가 인정할 경우</li>
                        </ol>
                    </li>
                    <li>2.  “회사”가 “회사”의 멤버십회원에 대하여 “서비스”를 영구적으로 거부/제한하는 경우 “회사”는 “회사”의 멤버십회원에게 제한 사유를 밝혀 그 의사를 통지합니다. 이 경우 “회사”는 영구적 제한을 하기 전에 상당한 기간을 정하여 ”회사”의 멤버십회원에게 이의 신청의 기회를 부여합니다. 다만, 본 약관에서 정하는 사유가 있을 경우에는 별도의 이의신청 기간을 부여하지 않을 수 있습니다.</li>
                    <li>3.  “회사”에 의해 “서비스”가 영구적으로 거부/제한되는 경우, “회사”의 멤버십회원의 재이용 신청에 대해 “회사”는 승낙을 거절할 수 있습니다. “회사” 멤버십회원의 귀책사유로 인해 영구적으로 “서비스”가 거부/제한됨으로 인해 발생한 손해는 “회사” 멤버십회원이 부담하게 되며, “회사”는 관련 법령에 규정이 없는 한 책임을 부담하지 않습니다.</li>
                </ol>

                <h5>제11조 취소와 환불</h5>
                <p>“이용자”는 “회사”의 정책 및 “이용자”에게 고지된 내용에 따라 “이용권”의 사용 취소 혹은 이용대금 환불을 받을 수 있습니다. 다만, 세탁업의 특수성에 따라 검수를 포함한 세탁/수선과정이 시작된 이후에는 사전에 안내된 단순변심, 완성도에 대한 이의, 세탁완성일 등을 사유로 하는 “이용권” 사용 취소 및 이용대금 환불은 불가합니다.</p>

                <h5>제12조 손해배상</h5>
                <ol>
                    <li>1.  “회사”와 “위탁사”는 “이용자”의 “목적물”이 손상된 경우 원상회복을 해주거나 그에 대한 손해배상을 해야 합니다. 단, 하자 발생이 “회사”와 “위탁사”의 책임 없는 사유로 인한 것임을 증명한 경우에는 그 책임을 면합니다.</li>
                    <li>2.  “회사”와 “위탁사”는 세탁/수선 진행 시 손상될 위험이 있는 “목적물”에 대하여 “이용자”에게 고지하였으나 “이용자”의 요청으로 세탁/수선을 진행하였다가 발생한 “목적물”의 손상에 대한 손해배상책임을 지지 않습니다.</li>
                    <li>3.  “목적물”의 처리 또는 인수 및 인도의 과정에서 “회사” 또는 “위탁사”가 선량한 관리자의 주의의무를 다하지 못하여 “목적물”을 분실한 경우에는 그에 따른 손해배상을 해야 합니다. 단, “위탁사”가 “이용자”으로부터 ”목적물”을 인수하기 전이나 “이용자”에게 세탁이 완료된 ”목적물”을 인도한 이후에 발생한 분실에 대해서는 손해배상책임을 지지 않습니다.</li>
                    <li>4.  “회사”는 어떤 경우에도 영업적 손실이나 정신적 피해보상에 대한 손해배상은 하지 않습니다.</li>
                </ol>

                <h5>제13조 손해배상의 기준</h5>
                <ol>
                    <li>1.  손해배상액의 산정방식은 ‘목적물의 구입가격X배상비율’로 하며, 이 경우 배상비율은 소비자분쟁해결기준에 따릅니다.</li>
                    <li>2.  손해배상액의 산정기준은 “이용자”가 입증하는 내용(목적물의 품명, 구입가격, 구입일 등)을 기준으로 합니다. 손해를 입증할 수 있는 객관적 자료가 없는 경우 “회사”가 별도로 고지하는 바에 따라 보상기준이 결정되며, “이용자”가 내용을 입증하지 못하여 배상액 산정이 불가능한 경우에는 ”목적물”의 구입가격은 해당 제품의 정가로 하고 제품과 케어라벨의 상태를 감안하여 착용 기간을 산정합니다.</li>
                    <li>3.  배상금액은 어떤 경우에도 구입가격 또는 제조 · 판매 사업자 등의 판매가격을 초과하지 않습니다.</li>
                </ol>

                <h5>제14조 손해배상의 감액</h5>
                <ol>
                    <li>1.  “목적물”의 손상 등에 대하여 “이용자”도 일부 책임이 있는 경우에는 손해배상액에서 그에 해당하는 금액을 공제합니다.</li>
                    <li>2.  “이용자”가 손상된 “목적물”을 인도받기를 원하는 경우에는 배상액의 일부를 감액할 수 있습니다.</li>
                </ol>

                <h5>제15조 손해배상의 면책</h5>
                <ol>
                    <li>1.  “이용자”의 “목적물” 하자 접수 또는 문제 제기는 “목적물” 수령일로부터 7일 이내에 고객센터 연락을 통해 이루어져야 합니다. 이 기간 동안 “이용자”로부터 어떠한 요청이나 문의가 없는 경우 “회사”는 ”목적물”에 이상이 없다는 확인으로 보며, “회사” 및 “위탁사”는 이후 발생하는 하자보수 및 손해배상청구에 대한 책임을 면합니다. 단, “이용자”가 ”목적물” 수령일로부터 6개월 이내에 한국소비자원 또는 한국소비자연맹을 통해 ”위탁사”의 고의, 과실에 의한 손상임을 입증한 경우에는 면책되지 않습니다.</li>
                    <li>
                        2.  “서비스”와 관련하여 “회사” 및 “위탁사”는 다음 각 호의 경우 “목적물”의 손상 또는 하자로 인한 책임을 면합니다.
                        <ol>
                            <li>①   “회사”가 세탁/수선 완료 및 배송에 대한 통지를 했음에도 통지의 도달일부터 30일이 경과하도록 “이용자”가 부재중, 반송 등의 사유로 “목적물”을 수령하지 않는 경우</li>
                            <li>②   “이용자”가 “목적물” 수령일로부터 6개월 이내에 하자보수 또는 손해배상의 청구를 하지 않는 경우 (세탁/수선 완성 예정일의 다음날부터 “목적물”을 회수하지 않은 기간은 이에 산입됩니다.)</li>
                            <li>③   택배 이용 시 “목적물”에 구김이 생긴 경우(박스 포장으로 인해 구김이 발생할 수 있음)</li>
                            <li>④   “목적물”의 특성 및 상태에 따라 “목적물”의 얼룩, 털, 보풀 등의 완전한 제거나 구입시와 동일한 상태로의 수선 등이 불가능한 경우로, 검수 과정 혹은 세탁/수선 완료 이전에 해당 내용을 “이용자”에게 공지한 경우</li>
                            <li>⑤   “이용자”가 구토, 배설물, 곰팡이 등으로 심각하게 오염되었거나 동물 털이 전체적으로 다량 묻어 있거나 이미 손상이 심한 “목적물”에 대한 세탁/수선을 요청한 경우</li>
                            <li>⑥   “이용자”가 젖은 “목적물”의 세탁을 요청한 경우</li>
                            <li>⑦   “이용자”가 탈착 가능한 장식품 및 소지품에 의해 손해가 발생한 경우</li>
                            <li>⑧   “회사” 또는 “위탁사”가 세탁/수선 시 손상발생이 우려됨을 고지했으나 “이용자”가 세탁/수선을 요청한 경우</li>
                            <li>⑨   “이용자”가 세탁표기법상 물세탁과 드라이클리닝이 모두 금지된 제품의 세탁을 요청한 경우</li>
                            <li>⑩   “이용자”가 케어라벨과 다르게 세탁하기 원하는 경우</li>
                            <li>⑪   “회사” 또는 “위탁사”가 수선에 사용될 원부자재나 수선 방법 등에 관하여 “이용자”에게 설명하고 “이용자”가 그에 동의한 경우</li>
                        </ol>
                    </li>
                    <li>
                        3.  “회사” 및 “위탁사”는 본인의 귀책사유가 없는 다음 각 호의 경우 손해배상 책임을 면합니다.
                        <ol>
                            <li>①   제3자가 불법적으로 “회사”의 서버에 접속하거나 서버를 이용함으로써 발생하는 손해</li>
                            <li>②   제3자에 의한 “목적물”의 도난으로 인해 발생한 손해</li>
                            <li>③   제3자로 인해 전송된 데이터의 생략ㆍ누락ㆍ파괴 등으로 발생한 손해</li>
                            <li>④   명예훼손, 천재지변 또는 이에 준하는 불가항력에 의해 발생하는 손해</li>
                        </ol>
                    </li>
                    <li>4.  “회사”는 법률상 허용되는 한도 내에서 간접 손해, 특별 손해, 결과적 손해, 징계적 손해 및 징벌적 손해에 대한 책임을 부담하지 않습니다.</li>
                </ol>

                <h5>제16조 “목적물”의 손상 및 하자 접수</h5>
                <ol>
                    <li>1.  “이용자”는 “목적물”의 하자 접수 또는 문제 제기를 정해진 기일 내에 진행해야 하며, “회사”는 그 내용을 정확히 파악하여 처리해야 합니다.</li>
                    <li>2.  “목적물” 하자 접수 및 문제 제기는 “목적물” 수령일로부터 7일 이내에 고객센터를 통해 가능합니다.</li>
                    <li>3.  접수 당일부터 영업일 기준 48시간 이내에 처리 과정에 대한 안내를 받을 수 있습니다.</li>
                    <li>4.  불편사항을 해결하기 위해 세탁/수선 정보와 사진을 요청하거나 실물을 회수할 수 있습니다.</li>
                </ol>

                <h5>제17조 “이용자”가 회수하지 않는 ”목적물”의 처분</h5>
                <ol>
                    <li>1.  “회사”는 “이용자”가 세탁/수선 완료 및 배송 통지의 도달일 기준 30일 이상 “목적물”을 수령하지 않으면 “목적물”에 대한 반환 책임을 부담하지 않으며, 그러한 내용을 명시하여 통지합니다. 배송 통지란 택배 신청 시 택배 발송 통지 문자 혹은 유선 통화를 말하며, 수거배달 신청 시 “위탁사” 직원과 “목적물” 수령일자를 지정한 유선 통화를 의미합니다.</li>
                    <li>2.  “이용자”가 세탁/수선 완료 및 배송 통지의 도달일 기준 6개월 내에 “목적물”을 수령하지 않는 경우 “회사”는 해당 ”목적물”을 임의 처분할 수 있습니다.</li>
                    <li>3.  회수 통지의 유무 및 시기에 대하여 분쟁이 있을 경우 “회사”가 이를 입증해야 합니다.</li>
                </ol>

                <h5>제18조 개인정보보호</h5>
                <ol>
                    <li>1.  본 약관에 따른 “서비스”는 “회사” 제품을 구매한 고객들에 대한 사후 케어 성격으로 제공되며 본 약관에 따른 “서비스”는 “회사” 제품을 구매한 고객들에 대한 사후 케어 성격으로 제공되며, “회사”는 “이용자”의 개인정보를 “이용자”가 “서비스”에 대하여 동의한 목적 및 범위 내에서만 최소한으로 이용합니다.</li>
                    <li>2.  “회사”는 “서비스” 이행에 필요한 정보를 미리 수집하지 않습니다. 다만, 관련 법령상 의무이행을 위하여 “서비스” 제공 이전에 본인확인이 필요한 경우로서 최소한의 특정 개인정보를 수집하는 경우에는 그러하지 아니합니다.</li>
                    <li>3.  “회사”는 수집된 개인정보를 목적 외의 용도로 이용할 수 없으며, 새로운 이용목적이 발생한 경우 또는 제3자에게 제공하는 경우에는 이용ㆍ제공 단계에서 당해 이용자에게 그 목적을 고지하고 동의를 받습니다. 다만, 관련 법령에 달리 정함이 있는 경우에는 예외로 합니다.</li>
                    <li>4.  “회사”는 개인정보 보호를 위하여 관리자를 한정하여 그 수를 최소화하며 “이용자”의 개인 정보의 분실, 도난, 유출, 변조 등으로 인한 이용자의 손해에 대하여 모든 책임을 집니다.</li>
                    <li>5.  “회사” 또는 그로부터 개인정보를 제공받은 제3자는 개인정보의 수집목적 또는 제공받은 목적을 달성한 때에는 당해 개인정보를 지체 없이 파기합니다.</li>
                    <li>6.  본 조에 기재되지 않은 “이용자” 개인정보 관련 기타 상세한 사항은 개인정보 처리방침에 따릅니다.</li>
                </ol>

                <h5>제19조 분쟁해결</h5>
                <ol>
                    <li>1.  “회사”는 “이용자”가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 전담 인력을 운영합니다.</li>
                    <li>2.  “회사”는 “이용자”로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다.<br/>다만, 신속한 처리가 곤란한 경우에는 “이용자”에게 그 사유와 처리일정을 즉시 통보해 드립니다.</li>
                    <li>3.  “회사”와 “이용자”간에 발생한 분쟁과 관련하여 “이용자”의 피해구제신청이 있는 경우에는 공정거래위원회 또는 시ㆍ도지사가 의뢰하는 분쟁조정기관의 조정에 따를 수 있습니다.</li>
                </ol>

                <h5>제20조 재판권 및 준거법</h5>
                <ol>
                    <li>1.  “회사”와 “이용자”간에 발생한 분쟁에 관한 소송은 제소 당시의 “이용자”의 주소에 의하고, 주소가 없는 경우에는 거소를 관할하는 지방법원의 전속관할로 합니다. 다만, 제소 당시 “이용자”의 주소 또는 거소가 분명하지 않거나 외국 거주자의 경우에는 민사소송법상의 관할법원에 제기합니다.</li>
                    <li>2.  “회사”와 “이용자”간에 제기된 소송에는 한국법을 적용합니다.</li>
                </ol>
                
                <br/>

                <div class="get_tag_privacy">
                    <p>서비스이용약관 시행일자 : 2021-08-01</p>
                    <p>서비스이용약관 시행일자 : 2021-03-18 <a href="#;" class ="past" id="ftbc_20210318" rel="/_ui/desktop/common/footerTermBusiness/ftb_care_20210318.html">서비스이용약관 보기</a></p>
                </div>
            </div>
            <!-- //한섬 케어 플러스 이용약관 -->
            <!-- <dl>
              <dt class="cmp-font fnt-18">제1조 목적</dt>
              <dd class="pb-12">이 약관은 주식회사 한섬(이하 “회사”라고 함)이 운영하는 온라인 쇼핑몰 THEHANDSOME.COM(이하 “더한섬닷컴”)에서 제공하는 재화 또는 용역 서비스(이하 “서비스”)를 이용함에 있어 “회사”와 이용자의 권리ㆍ의무 및 책임사항을 규정함을 목적으로 합니다.</dd>
              <dd>※ PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.</dd>
            </dl>

            <dl>
              <dt class="cmp-font fnt-18">제2조 정의</dt>
              <dd>이 약관에서 사용하는 용어는 다음과 같이 정의합니다. ① "더한섬닷컴"이란 “회사”가 재화 또는 용역(이하 “재화 등”을 이용자에게 제공하기 위하여 컴퓨터, 모바일 등 정보통신설비를 이용하여 “재화 등”을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 “더한섬닷컴”을 운영하는 사업자의 으미로도 사용합니다.</dd>
            </dl>

            <dl class="terms-button">
              <dt class="cmp-font fnt-18">이전 서비스이용약관</dt>
              <dd>
                <button class="cmp-font fnt-14 button">이전 약관 보기 <span class="c-gray">2015.10.
                17</span> <i class="cmp-icon cmp-icon-12 i-next"></i></button>
              </dd>
              <dd>
                <button class="cmp-font fnt-14 button">이전 약관 보기 <span class="c-gray">2017.10.
                17</span> <i class="cmp-icon cmp-icon-12 i-next"></i></button>
              </dd>
              <dd>
                <button class="cmp-font fnt-14 button">이전 약관 보기 <span class="c-gray">2017.10.
                17</span> <i class="cmp-icon cmp-icon-12 i-next"></i></button>
              </dd>
            </dl> -->
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
        "name": "더한섬닷컴 이용약관",
        "link": "/ko/CP/serviceTheHandsome",
        "active": false
      },
      {
        "name": "한섬 통합 멤버십 이용약관",
        "link": "/ko/CP/serviceHandsomeMember",
        "active": false
      },
      {
        "name": "한섬 e-Gift Card 이용약관",
        "link": "/ko/CP/serviceEGiftCard",
        "active": false
      },
      {
        "name": "한섬 케어 플러스 이용약관",
        "link": "/ko/CP/serviceCarePlus",
        "active": true
      },
      {
        "name": "한섬 토탈케어서비스 이용약관",
        "link": "/ko/CP/serviceTotalCare",
        "active": false
      }
    ],
  }),
  created() {

  },
}
</script>
<style lang="scss" scoped>
// @import '@/assets/scss/pages/member.scss'; 
</style>
