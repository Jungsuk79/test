const exec = require("child_process").exec; // child_process 모듈 추가
const express = require("express"); // express 모듈 추가
const bodyParser = require("body-parser");  // body-parser 모듈 추가
const app = express();
const port = 9998;

// /////////////////////////////////////////////////////////////////////////////
//  NICE평가정보 Copyright(c) KOREA INFOMATION SERVICE INC. ALL RIGHTS RESERVED
//  서비스명 : 가상주민번호서비스 (IPIN) 서비스
// /////////////////////////////////////////////////////////////////////////////

// NICE평가정보에서 발급한 IPIN 서비스 개발 정보(사이트 코드, 사이트 패스워드)
const sSiteCode = "L791";
const sSitePW = "hs0930hs";

// IPIN 모듈의 절대 경로(권한:755, FTP업로드방식: binary)
// ex) const sModulePath = "C:\\module\\IPIN2Client.exe";
//     const sModulePath = "/root/module/IPIN2Client";
const sModulePath = "IPIN2Client";

// 인증 중간 결과 받는 리턴 URL (방식: 프로토콜을 포함한 절대 주소)
const sProcessURL = "http://localhost:8000/ryu/ipin_process";

// 인증 최종 결과 받는 리턴 URL (방식: 프로토콜을 포함한 절대 주소)
const sResultURL = "http://localhost:8000/ryu/ipin_result";

// app.get("/", function(request, response) {
//   response.send("ipin sample index page");
// });

// ///////////////////////////////////////////////////////////////////////////
//  페이지명 : 가상주민번호서비스 (IPIN) 호출 페이지
// ///////////////////////////////////////////////////////////////////////////

app.get("/", function(request, response) {
  // CP요청번호 생성
  // :세션 등에 저장해 데이터 위변조 검사에 이용 가능 (인증결과와 함께 리턴됨) 
  const d = new Date();
  const sCPRequest = sSiteCode + "_" + d.getTime();

  // 인증요청 암호화 데이터 초기화
  let sEncData = "";
  
  // 처리결과 메시지 초기화
  //   let sRtnMSG = "";

  // 인증요청 암호화 데이터 생성 명령어
  const cmd = sModulePath + " " + "REQ" + " " + sSiteCode + " " + sSitePW + " " + sCPRequest + " " + sProcessURL;

  // 인증요청 암호화 데이터 생성
  const child = exec(cmd , {encoding: "euc-kr"});
  child.stdout.on("data", function(data) {
  sEncData += data;
  });
  child.on("close", function() {
  // console.log(sEncData);
  // 이곳에서 result처리 해야함. 
  
  // 암호화 처리 결과 확인
//   if (sEncData === "-9"){
//     sRtnMSG = "입력값 오류 : 암호화 처리시, 필요한 파라미터 값을 확인해 주시기 바랍니다.";
//   }
//   response.render("ipin_main.ejs", {sEncData , sRtnMSG});
  response.send(sEncData);
  });
});

// ///////////////////////////////////////////////////////////////////////////
//  페이지명 : 가상주민번호서비스 (IPIN) 사용자 인증 정보 처리 페이지
// ///////////////////////////////////////////////////////////////////////////
app.use(bodyParser.urlencoded({extended: true}));

app.get("/ipin_process", function(request, response) {
  // 인증결과 암호화 데이터 취득 (인증요청 암호화 데이터 값과 달라야 정상)
  // get 방식 (chrome 80이상)
  const sResponseData = request.param('enc_data');
  response.render("ipin_process.ejs", {sResponseData , sResultURL});
});

app.post("/ipin_process", function(request, response) {

  // 인증결과 암호화 데이터 취득 (인증요청 암호화 데이터 값과 달라야 정상)
  const sResponseData = request.body.enc_data;

  response.render("ipin_process.ejs", {sResponseData , sResultURL});
});

// ///////////////////////////////////////////////////////////////////////////
//  페이지명 : 가상주민번호서비스 (IPIN) 결과 페이지
// ///////////////////////////////////////////////////////////////////////////

app.post("/ipin_result", function(request, response) {

  // 인증결과 암호화 데이터 초기화
  let sResponseData = "";

  // 인증결과 복호화 데이터 초기화
  let sDecData = "";

  // 처리 결과 메시지 초기화
  let sRtnMSG = "";
    
  // 인증결과 데이터 초기화
  let strVnumber      = "";  // 가상주민번호 (13Byte, 영숫자 조합)
  let strUserName     = "";  // 이름 (EUC-KR)
  let strAgeCode      = "";  // 연령대 코드 (0~7: 가이드 참조)
  let strGenderCode   = "";  // 성별 코드 (0:여성, 1: 남성)
  let strBirthdate    = "";  // 생년월일 (YYYYMMDD)
  let strNationalinfo = "";  // 내/외국인 정보 (0:내국인, 1:외국인)
  let strCPRequestNo  = "";  // CP요청번호 (main에서 생성되어 인증 시 전달된 값)
  let strDupInfo      = "";  // 중복가입확인값 (64Byte, 개인식별값, DI:Duplicate Info)
  let strConnInfo     = "";  // 연계정보 확인값(CI, 88byte)
  let strCIUpdate     = "";  // CI 갱신정보 (1~: 가이드 참조)

  // ipin_process에서 전달받은 인증결과 암호화 데이터 취득    
  sResponseData = request.body.enc_data;

  // 문자열 점검
  if( /^0-9a-zA-Z+\/=/.test(sResponseData) === true){
    sRtnMSG = "입력값 오류";
    strUserName = "";
    strDupInfo = "";
    strConnInfo = "";
    response.render("ipin_result.ejs", {sRtnMSG , strUserName , strDupInfo , strConnInfo});
  }

  // 인증결과 데이터 복호화 명령어
  const cmd = sModulePath + " " + "RES" + " " + sSiteCode + " " + sSitePW + " " + sResponseData;

  // 인증결과 데이터 복호화
  const child = exec(cmd , {encoding: "euc-kr"});
    child.stdout.on("data", function(data) {
    sDecData += data;
  });
  child.on("close", function() {
  // console.log(sDecData);
  
  // 복호화 처리결과 코드 확인
  if (sDecData === "-9"){
    sRtnMSG = "입력값 오류 : 암호화 처리시, 필요한 파라미터 값을 확인해 주시기 바랍니다.";
  }
  else if (sDecData === "-12"){
    sRtnMSG = "패스워드 오류 : NICE평가정보에서 발급한 개발 정보가 정확한지 확인해주세요";
  }

  // 인증결과코드 확인
  const strResultCode = decodeURIComponent(GetValue(sDecData , "RESULT_CODE"));
  if( strResultCode === "1")
  {
    sRtnMSG = "인증 성공";

    // 다음의 값을 추출할 수 있지만, 화면에는 적절한 값만 보여줍니다.
    // 각 항목의 설명은 개발 가이드를 참조
    strVnumber      = decodeURIComponent(GetValue(sDecData, "VNUMBER"));      // 가상주민번호 (13Byte, 영숫자 조합)
    strUserName     = decodeURIComponent(GetValue(sDecData, "UTF8_NAME"));    // 이름 (EUC-KR)
    strAgeCode      = decodeURIComponent(GetValue(sDecData, "AGECODE"));      // 연령대 코드 (0~7: 가이드 참조)
    strGenderCode   = decodeURIComponent(GetValue(sDecData, "GENDERCODE"));   // 성별 코드 (0:여성, 1: 남성)
    strBirthdate    = decodeURIComponent(GetValue(sDecData, "BIRTHDATE"));    // 생년월일 (YYYYMMDD)
    strNationalinfo = decodeURIComponent(GetValue(sDecData, "NATIONALIFO"));  // 내/외국인 정보 (0:내국인, 1:외국인)
    strCPRequestNo  = decodeURIComponent(GetValue(sDecData, "CPREQUESTNO"));  // CP요청번호 (main에서 생성되어 인증 시 전달된 값)
    strDupInfo      = GetValue(sDecData, "DUPINFO");                          // 중복가입 확인값(DI, 64byte)
    strConnInfo     = GetValue(sDecData , "COINFO1");                         // 연계정보 확인값(CI, 88byte)
    strCIUpdate     = GetValue(sDecData , "CIUPDATE");                        // CI 갱신정보 (1~: 가이드 참조)
  }
  else
  {
    console.log("strResultCode : " + strResultCode);
    console.log("기타오류: 리턴값 확인후, NICE평가정보 개발 담당자에게 문의 바랍니다.");
  }

  response.render("ipin_result.ejs", {sRtnMSG , strUserName , strDupInfo, strConnInfo, strVnumber, strAgeCode, strGenderCode, strBirthdate, strNationalinfo, strCPRequestNo, strCIUpdate });
  });

});

// 인증결과 데이터 추출 함수
function GetValue(plaindata , key){
  const arrData = plaindata.split(":");
  let value = "";

  for(let i in arrData){
    const item = arrData[i];
    if(item.indexOf(key) === 0)
    {
      const valLen = parseInt(item.replace(key, ""));
      // eslint-disable-next-line no-unused-expressions
      arrData[i++];
      value = arrData[i].substr(0 ,valLen);
      break;
    }
  }
  return value;
}

app.listen(port, function(err) {
  console.log("Connected port - " + port);
  if (err) {
  return console.log("Found error - ", err);
  }
});

module.exports = {
    path: '/ipin_main',
    handler: app
}
  
module.exports = {
    path: '/ipin_main',
    handler: app
};