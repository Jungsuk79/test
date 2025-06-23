const exec = require("child_process").exec; // child_process 모듈 추가
const express = require("express"); // express 모듈 추가
const bodyParser = require("body-parser");  // body-parser 모듈 추가
const app = express();
const port = 8890;

// NICE평가정보에서 발급한 본인인증 서비스 개발 정보(사이트 코드 , 사이트 패스워드)
const sSiteCode = "G6092";
const sSitePW = "1T81V4BZZQH0";

// 모듈의 절대 경로(권한:755 , FTP업로드방식 : binary)
// ex) sModulePath = "C:\\module\\CPClient.exe";
//     sModulePath = "/root/modile/CPClient";
const sModulePath = "CPClient";

const sAuthType = "";      	  // 없으면 기본 선택화면, M(휴대폰), X(인증서공통), U(공동인증서), F(금융인증서), S(PASS인증서), C(신용카드)
const sCustomize 	= "Mobile";			  // 없으면 기본 웹페이지 / Mobile : 모바일페이지

// 본인인증 처리 후, 결과 데이타를 리턴 받기위해 다음예제와 같이 http부터 입력합니다.
// 리턴url은 인증 전 인증페이지를 호출하기 전 url과 동일해야 합니다. ex) 인증 전 url : https://www.~ 리턴 url : https://www.~
const sReturnUrl = "http://localhost:8000/ryu/checkplus_success";	// 성공시 이동될 URL (방식 : 프로토콜을 포함한 절대 주소)
const sErrorUrl = "http://localhost:8000/ryu/checkplus_fail";	  	// 실패시 이동될 URL (방식 : 프로토콜을 포함한 절대 주소)

// app.get("/", function(request, response) {
//   response.send("sample index page");
// });

app.get("/", function(request, response) {
  // console.log(request);
  // 업체 요청 번호 
  // 세션등에 저장하여 데이터 위변조 검사 (인증후에 다시 전달) 
  const d = new Date();
  const sCPRequest = sSiteCode + "_" + d.getTime();

  // 전달 원문 데이터 초기화
  let sPlaincData = "";
  // 전달 암호화 데이터 초기화
  let sEncData = "";
  // 처리 결과 메시지
  // let sRtnMSG = "";

  sPlaincData = "7:REQ_SEQ" + sCPRequest.length + ":" + sCPRequest +
                "8:SITECODE" + sSiteCode.length + ":" + sSiteCode +
                "9:AUTH_TYPE" + sAuthType.length + ":" + sAuthType +
                "7:RTN_URL" + sReturnUrl.length + ":" + sReturnUrl +
                "7:ERR_URL" + sErrorUrl.length + ":" + sErrorUrl +
                "9:CUSTOMIZE" + sCustomize.length + ":" + sCustomize;
  // console.log("["+sPlaincData+"]");
    
  const cmd = sModulePath + " " + "ENC" + " " + sSiteCode + " " + sSitePW + " " + sPlaincData;

  const child = exec(cmd , {encoding: "euc-kr"});
  child.stdout.on("data", function(data) {
    sEncData += data;
  });
  child.on("close", function() {
    // console.log(sEncData);
    // 이곳에서 result처리 해야함. 
  
    // 처리 결과 확인
    // if (sEncData === "-1"){
    //   sRtnMSG = "암/복호화 시스템 오류입니다.";
    // }
    // else if (sEncData === "-2"){
    //   sRtnMSG = "암호화 처리 오류입니다.";
    // }
    // else if (sEncData === "-3"){
    //   sRtnMSG = "암호화 데이터 오류 입니다.";
    // }
    // else if (sEncData === "-9"){
    //   sRtnMSG = "입력값 오류 : 암호화 처리시, 필요한 파라미터 값을 확인해 주시기 바랍니다.";
    // }
    // else{
    //   sRtnMSG = "";
    // }
    response.send(sEncData);
    // response.render("ryu/index.vue", {sEncData , sRtnMSG});
  });
});

app.use(bodyParser.urlencoded({extended: true}));
app.post("/checkplus_success", function(request, response) {
  const sEncData = request.body.EncodeData;
  let cmd = "";
  let sRtnMSG = "";
  let requestnumber = "";
  let authtype = "";
  let errcode = "";
  let responsenumber = "";
  let name = "";
  let birthdate = "";
  let gender = "";
  let nationalinfo = "";
  let dupinfo = "";
  let conninfo = "";
  let mobileno = "";
  let mobileco = "";

  if( /^0-9a-zA-Z+\/=/.test(sEncData) === true){
    sRtnMSG = "입력값 오류";
    requestnumber = "";
    authtype = "";
    errcode = "";
    response.render("checkplus_fail.ejs", {sRtnMSG , requestnumber , authtype , errcode});
  }

  if(sEncData !== "")
  {
     cmd = sModulePath + " " + "DEC" + " " + sSiteCode + " " + sSitePW + " " + sEncData;
  }

  let sDecData = "";

  const child = exec(cmd , {encoding: "euc-kr"});
  child.stdout.on("data", function(data) {
    sDecData += data;
  });
  child.on("close", function() {
    // console.log(sDecData);
  
    // 처리 결과 메시지
    let sRtnMSG = "";
    // 처리 결과 확인
    if (sDecData === "-1"){
      sRtnMSG = "암/복호화 시스템 오류";
    }
    else if (sDecData === "-4"){
      sRtnMSG = "복호화 처리 오류";
    }
    else if (sDecData === "-5"){
      sRtnMSG = "HASH값 불일치 - 복호화 데이터는 리턴됨";
    }
    else if (sDecData === "-6"){
      sRtnMSG = "복호화 데이터 오류";
    }
    else if (sDecData === "-9"){
      sRtnMSG = "입력값 오류";
    }
    else if (sDecData === "-12"){
      sRtnMSG = "사이트 비밀번호 오류";
    }
    else
    {
      // 항목의 설명은 개발 가이드를 참조
      requestnumber = decodeURIComponent(GetValue(sDecData , "REQ_SEQ"));     // CP요청 번호 , main에서 생성한 값을 되돌려준다. 세션등에서 비교 가능
      responsenumber = decodeURIComponent(GetValue(sDecData , "RES_SEQ"));    // 고유 번호 , 나이스에서 생성한 값을 되돌려준다.
      authtype = decodeURIComponent(GetValue(sDecData , "AUTH_TYPE"));        // 인증수단
      name = decodeURIComponent(GetValue(sDecData , "UTF8_NAME"));            // 이름
      birthdate = decodeURIComponent(GetValue(sDecData , "BIRTHDATE"));       // 생년월일(YYYYMMDD)
      gender = decodeURIComponent(GetValue(sDecData , "GENDER"));             // 성별
      nationalinfo = decodeURIComponent(GetValue(sDecData , "NATIONALINFO")); // 내.외국인정보
      dupinfo = decodeURIComponent(GetValue(sDecData , "DI"));                // 중복가입값(64byte)
      conninfo = decodeURIComponent(GetValue(sDecData , "CI"));               // 연계정보 확인값(88byte)
      mobileno = decodeURIComponent(GetValue(sDecData , "MOBILE_NO"));        // 휴대폰번호(계약된 경우)
      mobileco = decodeURIComponent(GetValue(sDecData , "MOBILE_CO"));        // 통신사(계약된 경우)
    }
    console.log(sDecData);

    response.render("checkplus_success.ejs", {sRtnMSG , requestnumber , responsenumber , authtype , name , birthdate , gender , nationalinfo , dupinfo , conninfo , mobileno , mobileco});
  });

});

app.get("/checkplus_success", function(request, response) {
  // chrome80 이상 대응
  const sEncData = request.param('EncodeData')
  let cmd = "";
  let sRtnMSG = ""; // 처리 결과 메시지
  let requestnumber = "";
  let authtype = "";
  let errcode = "";
  let responsenumber = "";
  let name = "";
  let birthdate = "";
  let gender = "";
  let nationalinfo = "";
  let dupinfo = "";
  let conninfo = "";
  let mobileno = "";
  let mobileco = "";

  if( /^0-9a-zA-Z+\/=/.test(sEncData) === true){
    sRtnMSG = "입력값 오류";
    requestnumber = "";
    authtype = "";
    errcode = "";
    response.render("checkplus_fail.ejs", {sRtnMSG , requestnumber , authtype , errcode});
  }

  if(sEncData !== "")
  {
     cmd = sModulePath + " " + "DEC" + " " + sSiteCode + " " + sSitePW + " " + sEncData;
  }

  let sDecData = "";

  const child = exec(cmd , {encoding: "euc-kr"});
  child.stdout.on("data", function(data) {
    sDecData += data;
  });
  child.on("close", function() {
    // console.log(sDecData);
  
    // 처리 결과 확인
    if (sDecData === "-1"){
      sRtnMSG = "암/복호화 시스템 오류";
    }
    else if (sDecData === "-4"){
      sRtnMSG = "복호화 처리 오류";
    }
    else if (sDecData === "-5"){
      sRtnMSG = "HASH값 불일치 - 복호화 데이터는 리턴됨";
    }
    else if (sDecData === "-6"){
      sRtnMSG = "복호화 데이터 오류";
    }
    else if (sDecData === "-9"){
      sRtnMSG = "입력값 오류";
    }
    else if (sDecData === "-12"){
      sRtnMSG = "사이트 비밀번호 오류";
    }
    else
    {
      // 항목의 설명은 개발 가이드를 참조
      requestnumber = decodeURIComponent(GetValue(sDecData , "REQ_SEQ"));     // CP요청 번호 , main에서 생성한 값을 되돌려준다. 세션등에서 비교 가능
      responsenumber = decodeURIComponent(GetValue(sDecData , "RES_SEQ"));    // 고유 번호 , 나이스에서 생성한 값을 되돌려준다.
      authtype = decodeURIComponent(GetValue(sDecData , "AUTH_TYPE"));        // 인증수단
      name = decodeURIComponent(GetValue(sDecData , "UTF8_NAME"));            // 이름
      birthdate = decodeURIComponent(GetValue(sDecData , "BIRTHDATE"));       // 생년월일(YYYYMMDD)
      gender = decodeURIComponent(GetValue(sDecData , "GENDER"));             // 성별
      nationalinfo = decodeURIComponent(GetValue(sDecData , "NATIONALINFO")); // 내.외국인정보
      dupinfo = decodeURIComponent(GetValue(sDecData , "DI"));                // 중복가입값(64byte)
      conninfo = decodeURIComponent(GetValue(sDecData , "CI"));               // 연계정보 확인값(88byte)
      mobileno = decodeURIComponent(GetValue(sDecData , "MOBILE_NO"));        // 휴대폰번호(계약된 경우)
      mobileco = decodeURIComponent(GetValue(sDecData , "MOBILE_CO"));        // 통신사(계약된 경우)
    }
    console.log(sDecData);

    response.render("checkplus_success.ejs", {sRtnMSG , requestnumber , responsenumber , authtype , name , birthdate , gender , nationalinfo , dupinfo , conninfo , mobileno , mobileco});
  });

});

app.post("/checkplus_fail", function(request, response) {
  const sEncData = request.body.EncodeData;
  let cmd = "";
  let sRtnMSG = ""; // 처리 결과 메시지
  let requestnumber = "";
  let authtype = "";
  let errcode = "";

  if( /^0-9a-zA-Z+\/=/.test(sEncData) === true){
    sRtnMSG = "입력값 오류";
    requestnumber = "";
    authtype = "";
    errcode = "";
    response.render("checkplus_fail.ejs", {sRtnMSG , requestnumber , authtype , errcode});
  }
  
  if(sEncData !== "")
  {
     cmd = sModulePath + " " + "DEC" + " " + sSiteCode + " " + sSitePW + " " + sEncData;
  }

  let sDecData = "";

  const child = exec(cmd , {encoding: "euc-kr"});
  child.stdout.on("data", function(data) {
    sDecData += data;
  });
  child.on("close", function() {
    // console.log(sDecData);
    // 처리 결과 확인
    if (sDecData === "-1"){
      sRtnMSG = "암/복호화 시스템 오류";
    }
    else if (sDecData === "-4"){
      sRtnMSG = "복호화 처리 오류";
    }
    else if (sDecData === "-5"){
      sRtnMSG = "HASH값 불일치 - 복호화 데이터는 리턴됨";
    }
    else if (sDecData === "-6"){
      sRtnMSG = "복호화 데이터 오류";
    }
    else if (sDecData === "-9"){
      sRtnMSG = "입력값 오류";
    }
    else if (sDecData === "-12"){
      sRtnMSG = "사이트 비밀번호 오류";
    }
    else
    {
      // 항목의 설명은 개발 가이드를 참조
      requestnumber = decodeURIComponent(GetValue(sDecData , "REQ_SEQ"));     // CP요청 번호 , main에서 생성한 값을 되돌려준다. 세션등에서 비교 가능
      authtype = decodeURIComponent(GetValue(sDecData , "AUTH_TYPE"));        // 인증수단
      errcode = decodeURIComponent(GetValue(sDecData , "ERR_CODE"));          // 본인인증 실패 코드
    }

    response.render("checkplus_fail.ejs", {sRtnMSG , requestnumber , authtype , errcode});
  });
});

app.get("/checkplus_fail", function(request, response) {
  // chrome80 대응
  const sEncData = request.param('EncodeData')
  let cmd = "";
  let sRtnMSG = ""; // 처리 결과 메시지
  let requestnumber = "";
  let authtype = "";
  let errcode = "";

  if( /^0-9a-zA-Z+\/=/.test(sEncData) === true){
    sRtnMSG = "입력값 오류";
    requestnumber = "";
    authtype = "";
    errcode = "";
    response.render("checkplus_fail.ejs", {sRtnMSG , requestnumber , authtype , errcode});
  }
  
  if(sEncData !== "")
  {
     cmd = sModulePath + " " + "DEC" + " " + sSiteCode + " " + sSitePW + " " + sEncData;
  }

  let sDecData = "";

  const child = exec(cmd , {encoding: "euc-kr"});
  child.stdout.on("data", function(data) {
    sDecData += data;
  });
  child.on("close", function() {
    // console.log(sDecData);
    // 처리 결과 확인
    if (sDecData === "-1"){
      sRtnMSG = "암/복호화 시스템 오류";
    }
    else if (sDecData === "-4"){
      sRtnMSG = "복호화 처리 오류";
    }
    else if (sDecData === "-5"){
      sRtnMSG = "HASH값 불일치 - 복호화 데이터는 리턴됨";
    }
    else if (sDecData === "-6"){
      sRtnMSG = "복호화 데이터 오류";
    }
    else if (sDecData === "-9"){
      sRtnMSG = "입력값 오류";
    }
    else if (sDecData === "-12"){
      sRtnMSG = "사이트 비밀번호 오류";
    }
    else
    {
      // 항목의 설명은 개발 가이드를 참조
      requestnumber = decodeURIComponent(GetValue(sDecData , "REQ_SEQ"));     // CP요청 번호 , main에서 생성한 값을 되돌려준다. 세션등에서 비교 가능
      authtype = decodeURIComponent(GetValue(sDecData , "AUTH_TYPE"));        // 인증수단
      errcode = decodeURIComponent(GetValue(sDecData , "ERR_CODE"));          // 본인인증 실패 코드
    }

    response.render("checkplus_fail.ejs", {sRtnMSG , requestnumber , authtype , errcode});
  });
});

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
  path: '/checkplus_main',
  handler: app
}

module.exports = {
  path: '/checkplus_main',
  handler: app
};