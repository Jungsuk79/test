// 20211110 jsm 이니페이 설정 - inipay 필드 설정 및 데이터
// asset/script/inicis/index.js
export const defaultRequestDataFields = {
    /* 모바일 필드 설정 */
    // 1. 필수 파라미터 
    P_INI_PAYMENT: {
        name: "요청지불수단",
        required: true
    },
    P_OID: {
        name: "주문번호",
        required: true
    },
    P_AMT: {
        name: "결제금액",
        required: true
    },
    P_GOODS: {
        name: "상품명",
        required: true
    },
    P_UNAME: {
        name: "구매자명",
        required: true
    },
    P_NEXT_URL: {
        name: "결과수신URL",
        required: true
    },
    P_NOTI_URL: {
        name: "가상계좌입금통보 URL",
        required: true
    },
    P_HPP_METHOD: {
        name: "휴대폰결제 상품유형",  // 1:컨텐츠, 2: 실물 / 휴대폰 결제시 필수
        required: true
    },
    // 2. 선택파라미터
    P_MOBILE: {
        name: "구매자 휴대폰번호",
        required: false
    },
    P_EMAIL: {
        name: "구매자 이메일주소",
        required: false
    },
    P_MNAME: {
        name: "가맹점 이름",
        required: false
    },
    P_CHARSET: {
        name: "결과수신 인코딩", // utf8, euc-kr
        required: false
    },
    P_OFFER_PERIOD: {
        name: "제공기간",  // Y2:년단위결제, M2:월단위결제, YYYYMMDDYYYYMMDD:시작일종료일
        required: false
    },
    P_QUOTABASE: {
        name: "할부개월수 노출옵션", // [할부개월/할부개월] (금액이 할부조건일 경우 동작/ Default: 일시불 ~ 12개월)
        required: false
    },
    P_TAX: {
        name: "부가세",
        required: false
    },
    P_TAXFREE: {
        name: "비과세",
        required: false
    },
    P_CARD_OPTION: {
        name: "신용카드 우선선택 옵션",  //  [selcode=카드코드]
        required: false
    },
    P_ONLY_CARDCODE: {
        name: "결제 카드사 선택 노출옵션 ",  // [카드코드;카드코드]
        required: false
    },
    P_VBANK_DT: {
        name: "가상계좌 입금기한 날짜",  // [YYYYMMDD]
        required: false
    },
    P_VBANK_TM: {
        name: "가상계좌 입금기한 시간",  // [hhmm]
        required: false
    },
    P_NOTI: {
        name: "가맹점 임의 데이터",  // [YYYYMMDD]
        required: false
    },
    P_RESERVED: {
        name: "지불수단별 추가옵션 ",  
        required: false
    },
    /* 모바일 필드설정 END */
  };
  
  export const defaultRequestDataFieldsDummy = {
    // version: "1.0",
    // goodsname: "맥북프로",
    // price: 1000,
    // currency: "WON",
    // buyername: "RUDEN",
    // buyertel: "010-1234-4321"
    
  };
  export const payList = {
    VCard: "신용카드(ISP)",
    Card: "신용카드(안심클릭)",
    OCBPoint: "OK캐쉬백 포인트",
    GSPT: "GS&POINT",
    UPNT: "삼성 U-point",
    DirectBank: "실시간계좌이체(K계좌이체)",
    iDirectBank: "실시간계좌이체(I계좌이체)",
    HPP: "휴대폰",
    VBank: "무통장입금(가상계좌)",
    PhoneBill: "폰빌전화결제",
    Culture: "문화상품권",
    TeenCash: "틴캐쉬",
    DGCL: "스마트문화상품권",
    BCSH: "도서문화상품권",
    HPMN: "해피머니상품권",
    YPAY: "옐로페이",
    Auth: "빌링키발급"
  };
  