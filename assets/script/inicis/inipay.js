/* eslint-disable */
// asset/script/inicis/inipay.js
// 20211110 jsm 이니페이 설정 - inipay 초기화, form, 데이터 생성
import merge from "lodash/merge";
import map from "lodash/map";
import isEmpty from "lodash/isEmpty";
import { sha256 } from "js-sha256";
import sortBy from "lodash/sortBy";
import qs from "qs";
import {
  payList,
  defaultRequestDataFields,
  defaultRequestDataFieldsDummy
} from "./index";

class Inipay {
  constructor(options = {}) {
    // console.log("===============================")
    // console.log(options)
    let { signKey, P_MID } = options;
    // console.log("111111111111111111111111111111")
    // console.log(signKey)
    // console.log(P_MID)
    try {
      if (!signKey || !P_MID) {
        throw new Error("signKey와 P_MID를 확인해주세요.");
      }

      this.defaultRequestDataFields = defaultRequestDataFields;
      //this.mKey = sha256(signKey);
      this.P_MID = P_MID;
      this.form = null;
      this.url = null;
      this.config = merge(
        {},
        {
          production: false,
          mode: "mb"
        },
        options
      );
    } catch (err) {
      console.error(err);
    }
  }

  initialize(formOptions) {
    this.setInipayURL();
    this.setInipayScript();
    this.generateForm(formOptions);
  }
  /**
   * 이니시스 스크립트 초기화 함수
   */
  setInipayScript() {
    const script = document.createElement("script");
    script.src = this.url;
    script.charset = "utf-8";
    script.async = true;

    document.querySelector("head").appendChild(script);
  }

  /**
   * 이니페이 URL 세팅 함수
   */
  setInipayURL() {
    const { production } = this.config; // false

    this.url = production
      ? "https://stdpay.inicis.com/stdjs/INIStdPay.js" // production
      : "https://stgstdpay.inicis.com/stdjs/INIStdPay.js"; // test
  }

  generateForm(options) {
    const { production } = this.config; // false

    const defaultOptions = {
      iframeSize: { width: "820px", height: "600px" },
      popup: true,
      id: this.getRandomStr(),
      name: this.getRandomStr(),
      method: "post"
    };
    const mergedOptions = merge({}, defaultOptions, options);
    const { id, name, method } = mergedOptions;
    this.form = document.createElement("form");

    this.form.setAttribute("id", id);
    this.form.setAttribute("name", name);
    this.form.setAttribute("method", method);

    if (!production) {
      console.warn("이니시스 FORM 생성완료", mergedOptions);
    }
  }

  getRandomStr() {
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  }

  pay(fields) {
    // oid, timestamp settings
    console.log("==================================")
    console.log(fields)
    console.log("==================================")
    const { P_AMT } = fields;
    const { P_OID } = fields;
    
    const {
      P_MID,
      // mKey,
      config: { target }
    } = this;
    const { timestamp } = this._getProtectedFields();
    const mergedFields = Object.assign({}, fields, {
      P_MID,
      P_OID,
      timestamp
      // mKey
    });
    const fieldKeys = Object.keys(mergedFields);

    console.log("1111111111111111111111111111")
    console.log(fieldKeys)
    if (!this.validationRequiredFields(fieldKeys)) {
      console.log("======= validation error : " + fieldKeys)
      return false;
    }

    this.attachFormBeforePay(mergedFields, target);
    this.requestInipay();
  }

  requestInipay() {
    const { mode } = this.config;

    if (mode === "pc") {
      const formID = this.form.getAttribute("id");

      if (INIStdPay) {
        INIStdPay.pay(formID);
      } else {
        console.error("이니페이 스크립트가 존재하지 않습니다.");
      }
    } else {
      this.form.action = "https://mobile.inicis.com/smart/payment/"
      this.form.target = "_self"
      this.form.acceptCharset = "euc-kr";
      this.form.submit();
    }
  }

  attachFormBeforePay(mergedFields, target) {
    if (!target) {
      target = document.body;
    }

    this.form.innerHTML = "";
    map(mergedFields, (v, k) => {
      this.appendFormInput(v, k);
    });

    target.appendChild(this.form);
  }

  
  _getProtectedFields() {
    const timestamp = this.getTimestamp();
    // const oid = `${mid}_${timestamp}`;
    // const signature = this.makeSignature({ oid, price, timestamp });

    return {
      timestamp,
      // oid,
      // signature
    };
  }

  validationRequiredFields(fields) {
    let boolean = true;
    let missingFields = [];
    Object.keys(this.defaultRequestDataFields)
      .filter(k => this.defaultRequestDataFields[k].required)
      .map(field => {
        const hasField = fields.find(v => v === field);
        if (!hasField) {
          missingFields.push(field);
          boolean = false;
        }
      });

    if (!boolean && !this.config.production) {
      console.warn(`${missingFields.join(", ")} 필드가 누락되었습니다.`);
    }

    return boolean;
  }

  appendFormInput(value, key) {
    const input = document.createElement("input");

    input.setAttribute("type", "hidden");
    input.setAttribute("name", key);
    input.setAttribute("value", value);

    this.form.appendChild(input);
  }
  /**
   * 이니페이 매뉴얼 기준 signature 생성시켜주는 함수
   * 모바일 불필요
   */
//   makeSignature(params) {
//     return sha256(
//       Object.keys(params)
//         .reduce((acc, curr) => {
//           return acc + `${curr}=${params[curr]}&`;
//         }, "")
//         .slice(0, -1)
//     );
//   }

  getTimestamp() {
    return Date.now();
  }
}

export { payList, defaultRequestDataFields, defaultRequestDataFieldsDummy };
export default Inipay;
