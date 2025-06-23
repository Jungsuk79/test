import dayjs from 'dayjs'

function masking(type, str) {
  let result;
  str = '' + str;
  // 주민번호 마스킹
  if (type === 'SSN') {
    result = str.substr(0, 6) + '-' + str.substr(6, 1) + '******';
  }

  // 여권번호
  // 외국인등록번호

  // 계좌번호
  else if (type === 'ACCT') {
    result = '****' + str.substr(4, str.length);
  }
  return result;
}

function calDate(start, end) {
  const startYyyy = String(start).substring(0, 4);
  const startMm = String(start).substring(4, 6);
  const startDd = String(start).substring(6, 8);
  const startDate = new Date(startYyyy, startMm, startDd);

  const endYyyy = String(end).substring(0, 4);
  const endMm = String(end).substring(4, 6);
  const endDd = String(end).substring(6, 8);
  const endDate = new Date(endYyyy, endMm, endDd);

  const nowYyyy = String(new Date()).substring(0, 4);
  const nowMm = String(new Date()).substring(4, 6);
  const nowDd = String(new Date()).substring(6, 8);
  const nowDate = new Date(nowYyyy, nowMm, nowDd);
  let msg = '';
  if (startDate.getTime() > endDate.getTime()) {
    msg = '시작일이 종료일보다 클 수 없습니다.';
    return msg;
  }
  if (endDate.getTime() > nowDate.getTime()) {
    msg = '종료일이 현재일보다 클 수 없습니다.';
    return msg;
  }
  const dateCalculate = endDate.getTime() - startDate.getTime();
  const totalDate = dateCalculate / 1000 / 60 / 60 / 24;

  if (totalDate > 365) {
    msg = '조회 기간은 최대 1년입니다.';
    return msg;
  }
  return true;
}

function dateCheck(startDate, endDate, format) {
  // isBefore(), isAfter(), isSame()
  const start = dayjs(startDate, format);
  const end = dayjs(endDate, format);

  return dayjs(start).isSame(end) ? true : dayjs(start).isBefore(end);
}

function dateValidation(date, format) {
  return dayjs(date, format, true).isValid();
}

export { masking, calDate, dateCheck, dateValidation }
