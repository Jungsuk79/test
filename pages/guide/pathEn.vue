<template>
  <div class="guide">
    <!-- eslint-disable -->
    <div class="d-flex align-center">
      <div class="text-left">
        STATE [&nbsp;진행:<b class="ing">ing</b>,&nbsp;&nbsp;대기:<b
          class="hold"
          >hold</b
        >,&nbsp;&nbsp;중복(공통페이지) :
        <b class="pass">pass</b>,&nbsp;&nbsp;완료:
        <b class="complete">complete</b>&nbsp;]
      </div>
      <div style="margin-left: 20px">
        <v-select
          v-model="status"
          :items="statuses"
          flat
          height="25"
          style="width: 100px; display: inline-block"
        ></v-select>
        <v-select
          v-model="publisher"
          :items="publishers"
          flat
          height="25"
          style="width: 100px; display: inline-block"
        ></v-select>
        <input v-model="searchTxt" type="text" class="search-txt" placeholder="텍스트 검색" />
      </div>
      <!-- <div style="padding-left:20px;">
        <v-checkbox v-model="gridLayoutToDo" label="Grid ToDo" class="cmp-form-checkbox" style="display:inline-block;"></v-checkbox>
      </div>
      <div style="padding-left:20px;">
        <v-checkbox v-model="notFinished" label="미검수" class="cmp-form-checkbox" style="display:inline-block;"></v-checkbox>
      </div> -->
      <div class="ml-auto">
        <ul class="d-flex">
          <li>작업완료: <span id="endState"></span></li>
          <li>총 페이지수: <span id="totalState"></span></li>
          <li>진행율: <span id="perState"></span></li>
        </ul>
      </div>
    </div>
    <v-simple-table class="guide_table mt-4">
      <thead>
        <tr>
          <th>Category</th>
          <th width="10%">1Depth</th>
          <th>2Depth</th>
          <th width="10%">ID</th>
          <th>Name</th>
          <th>URL</th>
          <th>담당</th>
          <th>상태</th>
          <th>검수</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, idx) in list" :key="idx"
          :divide="item.divide"
          :class="{
            recent: item.recent,
            hide : !(
                      showAll ||
                      (status === '진행상태' && publisher === item.publisher) ||
                      (publisher === '퍼블리셔' && status === item.statusPub) ||
                      (publisher === item.publisher && status === item.statusPub) ||
                      (searchTxt !== '' && ( item.id.includes(searchTxt) || item.name.includes(searchTxt) || item.twodepth.includes(searchTxt) )) ||
                      (gridLayoutToDo && item.grid === undefined) ||
                      (notFinished && !(item.confirmPlan && item.confirmDesign))
                    )
          }"
        >
          <td><div class="divide">{{ item.divide }}</div></td>
          <td>{{ item.onedepth }}</td>
          <td><div v-html="newLine(item.twodepth)" :index="idx+1"></div></td>
          <td v-html="newLine(item.id)" class="text-xs-right"></td>
          <td v-html="newLine(item.name)" class="text-xs-right"></td>
          <td class="text-center links" :class="{'local':isLocal, 'ip':ip}">
            <a v-if="ip" :href="'http://' + ip + ':8001/en' + item.url" target="_blank">IP</a>
            <a v-if="isLocal" :href="'/en' + item.url" target="_blank">LC</a>
            <a
              :href="'https://pub-fo.thehandsome.com/en' + item.url"
              target="_blank"
              >PUB</a
            >
          </td>
          <td class="text-center assignee">
            {{ item.publisher }}
            <div v-if="item.planner || item.designer || item.developer">
              <div v-if="item.planner">기: {{item.planner}}</div>
              <div v-if="item.designer">디: {{item.designer}}</div>
              <div v-if="item.developer">개: {{item.developer}}</div>
            </div>
          </td>
          <td
            class="text-center"
            :class="[
              { complete: item.statusPub === 'complete' },
              { ing: item.statusPub === 'ing' },
              { hold: item.statusPub === 'hold' },
              { pass: item.statusPub === 'pass' },
            ]"
            v-html="item.statusPub + (item.complete ? '<br/>'+item.complete : '')"
          ></td>
          <td
            class="text-center complete"
            v-html="newLine(item.statusPlan)"
          >
          </td>
          <td :class="{ multiple: item.description.length > 1 }">
            <div>
              <div
                v-for="desc in item.description.slice().reverse()"
                :key="desc"
                class="description"
                v-html="replaceDesc(desc)"
              ></div>
            </div>
            <div class="showall" @click.stop="showAllDesc"></div>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
    <!-- eslint-disable -->
  </div>
</template>

<script>
export default {
  layout: 'guide',
  data() {
    return {
      showAll: true,
      publishers: [
        '퍼블리셔',
        '송보연',
        '유준형',
        '이소희',
        '조아라',
        // '한상훈',
        '유선화',
        '고영우'
      ],
      publisher: '퍼블리셔',
      statuses: ['진행상태', 'ing', 'hold', 'complete'],
      status: '진행상태',
      gridLayoutToDo: false,
      notFinished: false,
      searchTxt: '',
      searchTimer: 0,
      isLocal: false,
      pubList: [],
      list: [
        {
          divide: '회원(GP_ME)',
          onedepth: '회원',
          twodepth: '로그인',
          id: 'GP_ME_0101',
          name: 'login',
          url: '/en/ME/login',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '아이디 찾기',
          id: 'GP_ME_0105,GP_ME_0109,GP_ME_01111',
          name: 'findID',
          url: '/en/ME/findID',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '비밀번호 찾기',
          id: 'GP_ME_0108',
          name: 'findPassword',
          url: '/en/ME/findPassword',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '회원가입',
          twodepth: '이메일 인증',
          id: 'GP_ME_0001',
          name: 'memberConfirmEmail',
          url: '/en/ME/memberConfirmEmail',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '회원정보 입력',
          id: 'GP_ME_0002',
          name: 'memberSignup',
          url: '/en/ME/memberSignup',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '회원가입 완료',
          id: 'GP_ME_0003',
          name: 'memberSignupCompletion',
          url: '/en/ME/memberSignupCompletion',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '전시(GP_DP)',
          onedepth: '캠페인',
          twodepth: '캠페인 메인',
          id: 'GP_DP_0206',
          name: 'campaignMain',
          url: '/en/DP/campaignMain',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: ' ',
          onedepth: '',
          twodepth: '캠페인 메인 상세',
          id: 'GP_DP_0207',
          name: 'campaignMainDetail',
          url: '/en/DP/campaignMainDetail',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '검색전, 검색중, 검색결과',
          id: 'GP_DP_0113',
          name: 'searchResult',
          url: '/en/DP/searchResult',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '주문서(GP_OR)',
          onedepth: '주문서',
          twodepth: '주문/결제_주문서_',
          id: 'GP_OR_0241',
          name: 'order',
          url: '/en/OR/order',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '할인정보(팝업)',
          id: 'GP_OR_0252',
          name: '',
          url: '/en/OR/GP_0252',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '주문/결제_주문서_주문완료',
          id: 'GP_OR_0265',
          name: 'orderComplete',
          url: '/en/OR/orderComplete', 
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '주문(GP_OR)',
          onedepth: '쇼핑백',
          twodepth: '쇼핑백 리스트',
          id: 'GP_OR_0101',
          name: 'shoppingBag',
          url: '/en/OR/shoppingBag',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '쇼핑백_최저혜택가 로딩 (팝업)',
          id: 'GP_OR_0116',
          name: '',
          url: '/en/OR/GP_0116',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '쇼핑백_이런 상품 어때요 팝업___(팝업)',
          id: 'GP_OR_0110',
          name: '',
          url: '/en/OR/GP_0110',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '고객만족(GP_CS)',
          onedepth: '고객센터',
          twodepth: '메인',
          id: 'GP_CS_0101',
          name: 'csCenterMain',
          url: '/en/CS/csCenterMain',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '공지 사항',
          twodepth: '리스트',
          id: 'GP_CS_0102,GP_CS_0104',
          name: 'csCenterNotice',
          url: '/en/CS/csCenterNotice',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '상세',
          id: 'GP_CS_0103',
          name: 'csCenterDetail',
          url: '/en/CS/csCenterDetail',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
         {
          divide: '',
          onedepth: 'FAQ (자주하는 질문)',
          twodepth: '리스트, 상세팝업',
          id: 'GP_CS_0105',
          name: 'csCenterFAQ',
          url: '/en/CS/csCenterFAQ',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
         {
          divide: '',
          onedepth: '1:1 문의',
          twodepth: '1:1 문의 리스트',
          id: 'GP_CS_0110',
          name: 'oneToOneList',
          url: '/en/CS/oneToOneList',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
         {
          divide: '',
          onedepth: '',
          twodepth: '1:1 문의 상세',
          id: 'GP_CS_0111',
          name: 'oneToOneDetail',
          url: '/en/CS/oneToOneDetail',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
         {
          divide: '',
          onedepth: '',
          twodepth: '1:1 문의 등록/수정(POPUP)',
          id: 'GP_CS_0112',
          name: 'oneToOneModify',
          url: '/en/CS/oneToOneModify',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '1:1 문의 상품검색(POPUP)',
          id: 'GP_CS_0547',
          name: '',
          url: '/en/CS/GP_0547',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        // {
        //   divide: '',
        //   onedepth: '매장안내',
        //   twodepth: '리스트',
        //   id: 'GP_CS_0139',
        //   name: 'storeInformation',
        //   url: '/en/CS/storeInformation',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },
        {
          divide: '',
          onedepth: '쇼핑 가이드',
          twodepth: '쿠폰',
          id: 'GP_CS_0129',
          name: 'shoppingGuideCoupon',
          url: '/en/CS/shoppingGuideCoupon',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: 'Order',
          id: 'GP_CS_0141',
          name: 'shoppingGuideOrder',
          url: '/en/CS/shoppingGuideOrder',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: 'Product',
          id: 'GP_CS_0142',
          name: 'shoppingGuideProduct',
          url: '/en/CS/shoppingGuideProduct',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: 'Shipping',
          id: 'GP_CS_0143',
          name: 'shoppingGuideDelivery',
          url: '/en/CS/shoppingGuideDelivery',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: 'Refund/Return',
          id: 'GP_CS_0144',
          name: 'shoppingGuideRefund',
          url: '/en/CS/shoppingGuideRefund',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: 'Duty/Tax',
          id: 'GP_CS_0145',
          name: 'shoppingGuideDuty',
          url: '/en/CS/shoppingGuideDuty',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '회원(ME)',
          onedepth: '마이페이지',
          twodepth: '메인',
          id: 'GP_ME_0201',
          name: 'myPageMain',
          url: '/en/ME/myPageMain',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '주문(GP_OR)',
          onedepth: '마이페이지',
          twodepth: '주문 조회',
          id: 'GP_OR_0303',
          name: 'orderShippingList',
          url: '/en/OR/orderShippingList',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '주문조회 상세',
          id: 'GP_OR_0304',
          name: 'orderInquiryDetail',
          url: '/en/OR/orderInquiryDetail',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '옵션변경(POPUP)',
          id: 'GP_OR_0305',
          name: '',
          url: '/en/OR/GP_0305',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '쇼핑백 옵션변경(POPUP)',
          id: 'GP_OR_0305_2',
          name: '',
          url: '/en/OR/GP_0305_2',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '나의 배송지 목록(팝업)',
          id: 'GP_OR_0320',
          name: '',
          url: '/en/OR/GP_0320',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '배송지 등록 (팝업)',
          id: 'GP_OR_0321',
          name: '',
          url: '/en/OR/GP_0321',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
         {
          divide: '',
          onedepth: '',
          twodepth: '배송조회(POPUP)',
          id: 'GP_OR_0314',
          name: '',
          url: '/en/OR/GP_0314',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
         {
          divide: '',
          onedepth: '',
          twodepth: '주문 취소',
          id: 'GP_OR_0315,GP_OR_0323',
          name: 'orderCancel',
          url: '/en/OR/orderCancel',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
         {
          divide: '',
          onedepth: '',
          twodepth: '취소 내역',
          id: 'GP_OR_0324',
          name: 'orderCancelHistory',
          url: '/en/OR/orderCancelHistory',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
         {
          divide: '',
          onedepth: '',
          twodepth: '반품신청',
          id: 'GP_OR_0307,GP_OR_0325 ~ GP_OR_0328',
          name: 'orderReturn',
          url: '/en/OR/orderReturn',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '반품내역',
          id: 'GP_OR_0329',
          name: 'orderReturnhistory',
          url: '/en/OR/orderReturnhistory',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '상품관리(GP_PM)',
          onedepth: '상품 상세',
          twodepth: '상품 상세',
          id: 'GP_PM_0101',
          name: '',
          url: '/en/PM/productDetail',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
         {
          divide: '',
          onedepth: '',
          twodepth: '포토/동영상 모아보기(POPUP)',
          id: 'GP_PM_0143',
          name: '',
          url: '/en/PM/GP_0143',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
         {
          divide: '',
          onedepth: '',
          twodepth: '스타일 추천(POPUP)',
          id: 'GP_PM_0151',
          name: '',
          url: '/en/PM/GP_0151',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '배송/교환/반품(POPUP)',
          id: 'GP_PM_0114',
          name: '',
          url: '/en/PM/GP_0114',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '상품 Q&A(POPUP)',
          id: 'GP_PM_0118',
          name: '',
          url: '/en/PM/GP_0118',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '상품 Q&A 작성(POPUP)',
          id: 'GP_PM_0120',
          name: '',
          url: '/en/PM/GP_0120',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '최대혜택가(POPUP)',
          id: 'GP_PM_0140',
          name: '',
          url: '/en/PM/GP_0140',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '쿠폰(POPUP)',
          id: 'GP_PM_0147',
          name: '',
          url: '/en/PM/GP_0147',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '포토/동영상 리뷰(POPUP)',
          id: 'GP_PM_0142',
          name: '',
          url: '/en/PM/GP_0142',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
           divide: '',
           onedepth: '',
           twodepth: '재입고 알림 신청(POPUP)',
           id: 'GP_PM_0134',
           name: '',
           url: '/en/PM/GP_0134',
           statusPub: '',
           statusPlan: '',
           description: [],
           publisher: '',
        },
      ],
      map: {},
      endState: 0,
      totalState: 0,
      regexp: /\d{8}/g,
      regexp2: /(\d{4})(\d{2})(\d{2})/g,
      regexp3: /(\d{4}).(\d{2}).(\d{2})/g,
      ip: ""
    }
  },
  watch: {
    status(val) {
      const me = this
      me.checkVisible()
    },
    publisher(val) {
      const me = this
      me.checkVisible()
    },
    searchTxt(val) {
      const me = this
      me.checkVisible()
    },
    gridLayoutToDo(val){
      const me = this
      me.checkVisible()
    },
    notFinished(val){
      const me = this
      me.checkVisible()
    }
  },
  created() {
    const me = this
    me.prepareList()
  },
  mounted() {
    const me = this
    me.isLocal = location.port === '8001'
    me.ip = localStorage.getItem("DEV_IP")

    const replaceMap = { '"': '\\"', '&': '","', '=': '":"' }
    const repRegExp = new RegExp(Object.keys(replaceMap).join('|'), 'gi')
    let param = {}
    let pub = ''
    let stat = ''
    function replaceFunc(str) {
      return replaceMap[str]
    }
    if (decodeURI(location.search.substring(1)).length > 0) {
      param = JSON.parse(
        '{"' +
          decodeURI(location.search.substring(1)).replace(
            repRegExp,
            replaceFunc
          ) +
          '"}'
      )
    }
    if (me.publishers.includes(param.publisher)) {
      pub = param.publisher
    }
    if (me.statuses.includes(param.status)) {
      stat = param.status
    }

    const lc = localStorage.getItem('pathSelect')
    if (lc) {
      const arr = lc.split('|')
      if (arr.length >= 2) {
        if (stat !== '') {
          me.status = stat
        } else {
          me.status = arr[0]
        }
        if (pub !== '') {
          me.publisher = pub
        } else {
          me.publisher = arr[1]
        }
        if(arr[2]){
          me.searchTxt = arr[2]
        }
        me.gridLayoutToDo = arr[3] === "true"
        me.notFinished = arr[4] === "true"
      }
    }

    me.renderState()
  },
  methods: {
    updateList() {
      const me = this
      const arr = [
        // { name: '한상훈', path: 'hsh' },
        { name: '송보연', path: 'sby' },
        { name: '유준형', path: 'yjh' },
        { name: '이소희', path: 'lsh' },
        { name: '유선화', path: 'ysh' },
        { name: '조아라', path: 'jar' },
        { name: '고영우', path: 'kyw' },
      ]
      const alen = arr.length
      let json, list, len, a, i, item, target, name, str, cls

      for (a = 0; a < alen; a++) {
        name = arr[a].name
        json = require('~/pages/guide/' + arr[a].path + '_en.json')
        list = json.list
        len = list.length
        for (i = 0; i < len; i++) {
          item = list[i]
          target = me.map[item.id + '_' + item.url]
          if (typeof target !== 'undefined') {
            target.publisher = name
            target.statusPub = item.status
            if(item.confirm){
              str = ""
              if(item.confirm.plan){
                if(item.confirm.plan.match(me.regexp3) !== null){
                  target.confirmPlan = true
                  cls = "done"
                }else{
                  cls = ""
                }
                str = "<div class='plan " + cls + "'>P: " + item.confirm.plan + "</div>"
              }
              if(item.confirm.design){
                if(item.confirm.design.match(me.regexp3) !== null){
                  target.confirmDesign = true
                  cls = "done"
                }else{
                  cls = ""
                }
                str += "<div class='design " + cls + "'>D: " + item.confirm.design + "</div>"
              }
              target.statusPlan = str
            }
            if(item.complete){
              target.complete = item.complete
            }
            if (item.comment) {
              target.description = item.comment
            }
            if(item.planner){
              target.planner = item.planner
            }
            if(item.designer){
              target.designer = item.designer
            }
            if(item.developer){
              target.developer = item.developer
            }
          }
        }
      }

      // //////////////////////////////////////////// GRID LAYOUT
      json = require('~/pages/guide/grid.json')
      json.done.forEach((item)=>{
        target = me.map[item.id + '_' + item.url]
        if (typeof target !== 'undefined') {
          target.grid = "done"
        }
      })
      json.na.forEach((item)=>{
        target = me.map[item.id + '_' + item.url]
        if (typeof target !== 'undefined') {
          target.grid = "na"
        }
      })
      // //////////////////////////////////////////// GRID LAYOUT
      // //////////////////////////////////////////// TABLE LAYOUT
      json = require('~/pages/guide/table.json')
      json.done.forEach((item)=>{
        target = me.map[item.id + '_' + item.url]
        if (typeof target !== 'undefined') {
          target.table = "done"
        }
      })
      json.na.forEach((item)=>{
        target = me.map[item.id + '_' + item.url]
        if (typeof target !== 'undefined') {
          target.table = "na"
        }
      })
      // //////////////////////////////////////////// TABLE LAYOUT



    },
    prepareList() {
      const me = this
      const len = me.list.length
      const now = new Date()
      const day = 1000 * 60 * 60 * 24
      now.setHours(0, 0, 0, 0)
      let i, item, desc, str, mt, date, dif
      let dv = ""

      for (i = 0; i < len; i++) {
        item = me.list[i]
        if(item.divide !== ""){
          dv = item.divide
        }else{
          item.divide = dv
        }
        me.map[item.id + '_' + item.url] = item
      }

      me.updateList()

      for (i = 0; i < len; i++) {
        item = me.list[i]
        desc = item.description
        if (Array.isArray(desc) && desc.length > 0) {
          try {
            str = desc[desc.length - 1]
            mt = str.match(me.regexp)
            date = new Date(
              mt[0].replace(me.regexp2, '$1-$2-$3' + ' 00:00:00')
            )
            dif = now - date
            item.recent = dif <= day
          } catch (e) {}
        }
      }
    },

    checkVisible() {
      const me = this
      me.showAll = me.status === '진행상태' && me.publisher === '퍼블리셔' && me.searchTxt === '' && !me.gridLayoutToDo && !me.notFinished

      localStorage.setItem('pathSelect', me.status + '|' + me.publisher + '|' + me.searchTxt + "|" + me.gridLayoutToDo + "|" + me.notFinished)
    },
    renderState() {
      this.list.forEach((item, index) => {
        if (item.statusPub === 'complete') {
          this.endState++
        }

        this.totalState++
      })

      const endState = this.endState
      const totalState = this.totalState
      const perState = parseInt((endState / totalState) * 100) + '%'

      document.getElementById('endState').append(endState)
      document.getElementById('totalState').append(totalState)
      document.getElementById('perState').append(perState)
    },
    newLine(str) {
      return String(str).replace(/(?:\r\n|\r|\n)/g, '</br>')
    },
    replaceDesc(str) {
      const me = this
      try {
        str = str.replace(me.regexp3, '<b>' + '$1.$2.$3' + '</b>')
        str = str.replace(me.regexp2, '<b>' + '$1.$2.$3' + '</b>')
        return str// str.replace(me.regexp, '<b>' + str.match(me.regexp)[0] + '</b>')
      } catch (e) {
        return str
      }
    },
    showAllDesc(e) {
      const cl = e.currentTarget.parentNode.classList
      if (cl.contains('open')) {
        cl.remove('open')
      } else {
        cl.add('open')
      }
    },
  },
}
</script>

<style lang="scss">
html,
body {
  overflow: auto !important;
}
.guide {
  width: 1500px;
}
.guide_table tr.recent {
  background-color: aliceblue;
}
.guide_table th,
.guide_table td {
  padding: 5px 10px !important;
  color: #222;
  text-align: left;
  font-size: 18px;
}
.guide_table th {
  line-height: 14px;
  background: #f5f5f5;
  border-top: 2px solid #414040;
  color: #000 !important;
}
.guide_table td {
  border-bottom: 1px solid #e5e5e5;
  border-left: 1px solid #e5e5e5;
}
.guide_table td.num {
  text-align: center;
}
.guide .complete {
  color: #007c11;
  .plan, .design{color:grey;}
  .plan.done{color:#11007c;}
  .design.done{color:#7c1100;}
}
.guide .ing {
  color: #9e9e9e;
}
.guide .hold {
  color: #d93f70;
}
.guide .pass {
  color: #5676c5;
}
.guide_table th:nth-child(1){width:8%;}
.guide_table th:nth-child(2){width:8%;}
.guide_table th:nth-child(3){width:20%;}
.guide_table th:nth-child(4){width:8%;}
.guide_table th:nth-child(5){width:10%;}
.guide_table th:nth-child(6){width:7%;}
.guide_table th:nth-child(7){width:5%;}
.guide_table th:nth-child(8){width:7%;}
.guide_table th:nth-child(9){width:9%;}
.guide_table td.links {
  padding: 0;
  width: 80px;
  a {
    box-shadow: lightgrey 0 0 0 1px inset;
    padding: 3px 5px;
    border-radius: 5px;
  }
  a ~ a {
    margin-left: 2px;
  }
  a:hover {
    background-color: lightgrey;
  }
  &.local.ip{
    a{padding:3px;}
    a ~ a{margin-left:0;}
  }
}

.d-flex li {
  padding-right: 20px;
}
.d-flex li:last-child span {
  color: #d93f70;
}

.search-txt{border-bottom:1px solid grey;width:100px;height:25px;outline:none;}

.description {
  display: none;
}
.description b {
  color: #000;
}
.description:first-child {
  display: block;
}
.description ~ .description {
  border-top: 1px dotted grey;
  margin-top: 2px;
  padding-top: 4px;
}
.showall {
  display: none;
  cursor: pointer;
}
.multiple .showall {
  display: block;
  text-align: center;
  height: 18px;
  line-height: 18px;
  color: lightgrey;
}
.multiple .showall:before {
  content: '▼';
}
.open {
  .description {
    display: block;
  }
  .showall:before {
    content: '▲';
  }
}

td.assignee{
  position:relative;
  > div{
    display:none;position:absolute;left:0;right:0;top:calc(50% + 10px);padding:5px 0;z-index:1;pointer-events:none;
    border:1px solid lightgrey;border-radius:4px;background-color:#fff;box-shadow:2px 2px 3px 0 lightgrey;
    div{height:18px;line-height:18px;}
  }
  &:hover > div{display:block;}
}
.v-data-table__wrapper{overflow-x:visible !important;overflow-y:visible !important;}

// td.grid-done{
//   position:relative;
//   &:before{content:"G";color:blue;display:block;position:absolute;height:20px;line-height:20px;left:-15px;top:calc(50% - 10px);pointer-events:none;}
// }
// td.grid-na{
//   position:relative;
//   &:before{content:"X";color:lightgrey;display:block;position:absolute;height:20px;line-height:20px;left:-15px;top:calc(50% - 10px);pointer-events:none;}
// }
// td.grid-undefined{
//   position:relative;
//   &:before{content:"?";color:#666;display:block;position:absolute;height:20px;line-height:20px;left:-15px;top:calc(50% - 10px);pointer-events:none;}
// }
// td.table-done{
//   position:relative;
//   &:after{content:"T";color:blue;display:block;position:absolute;height:20px;line-height:20px;left:-25px;top:calc(50% - 10px);pointer-events:none;}
// }
// td.table-na{
//   position:relative;
//   &:after{content:"X";color:lightgrey;display:block;position:absolute;height:20px;line-height:20px;left:-25px;top:calc(50% - 10px);pointer-events:none;}
// }
// td.table-undefined{
//   position:relative;
//   &:after{content:"?";color:#666;display:block;position:absolute;height:20px;line-height:20px;left:-25px;top:calc(50% - 10px);pointer-events:none;}
// }
div[index]{
  display:flex;flex-direction:row;
  &:before{content:attr(index);display:block;width:30px;padding-right:10px;text-align:right;flex-shrink:0;font-family: 'Courier New';letter-spacing: -0.1em;}
}

tr.hide{display:none;}
tr:not(.hide) .divide{display:block;}
tr[divide='회원(GP_ME)']:not(.hide) + tr[divide='회원(GP_ME)'] .divide{display:none;}
tr[divide='주문서(GP_OR)']:not(.hide) + tr[divide='주문서(GP_OR)'] .divide{display:none;}
tr[divide='고객만족(GP_CS)']:not(.hide) + tr[divide='고객만족(GP_CS)'] .divide{display:none;}
tr[divide='주문(GP_OR)']:not(.hide) + tr[divide='주문(GP_OR)'] .divide{display:none;}
tr[divide='상품관리(GP_PM)']:not(.hide) + tr[divide='상품관리(GP_PM)'] .divide{display:none;}



</style>
