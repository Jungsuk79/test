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
          <td :class="['grid-'+item.grid, 'table-'+item.table]"><div class="divide">{{ item.divide }}</div></td>
          <td>{{ item.onedepth }}</td>
          <td><div v-html="newLine(item.twodepth)" :index="idx+1"></div></td>
          <td v-html="newLine(item.id)" class="text-xs-right"></td>
          <td v-html="newLine(item.name)" class="text-xs-right"></td>
          <td class="text-center links" :class="{'local':isLocal, 'ip':ip}">
            <a v-if="ip" :href="'http://' + ip + ':8001/ko' + item.url" target="_blank">IP</a>
            <a v-if="isLocal" :href="'/ko' + item.url" target="_blank">LC</a>
            <a
              :href="'https://pub-fo.thehandsome.com/ko' + item.url"
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

    
    <div class="table-type2">
      <h2>이메일템플릿</h2>
      <v-simple-table class="guide_table">
        <tbody>
          <tr>
            <td>국문 버전(EMA)</td>
            <td><a href="https://pub-fo.thehandsome.com/EMA/index.html" target="_blank">https://pub-fo.thehandsome.com/EMA/index.html</a></td>
          </tr>
          <tr>
            <td>영문 버전(GEMA)</td>
            <td><a href="https://pub-fo.thehandsome.com/GEMA/index.html" target="_blank">https://pub-fo.thehandsome.com/GEMA/index.html</a></td>
          </tr>
        </tbody>
      </v-simple-table>
    </div>

    
    <div class="table-type2">
      <h2>오픈 컨텐츠</h2>
      <v-simple-table class="guide_table">
        <tbody>
          <tr>
            <td>이벤트</td>
            <td>Swiper</td>
            <td><a href="/MK/eventDetailSampleSwiper" target="_blank">eventDetailSampleSwiper</a></td>
          </tr>
          <tr>
            <td></td>
            <td>Swiper & Tab</td>
            <td><a href="/MK/eventDetailSampleSwiperTab" target="_blank">eventDetailSampleSwiperTab</a></td>
          </tr>
          <tr>
            <td></td>
            <td>BO등록 쿠폰형</td>
            <td><a href="/MK/eventDetailSampleCoupon" target="_blank">eventDetailSampleCoupon</a></td>
          </tr>
          <tr>
            <td></td>
            <td>더한섬하우스</td>
            <td><a href="/MK/eventDetailSample01" target="_blank">eventDetailSample01</a></td>
          </tr>
          <tr>
            <td></td>
            <td>상품평</td>
            <td><a href="/MK/eventDetailSample02" target="_blank">eventDetailSample02</a></td>
          </tr>
          <tr>
            <td></td>
            <td>신규회원가입</td>
            <td><a href="/MK/eventDetailSample03" target="_blank">eventDetailSample03</a></td>
          </tr>
          <tr>
            <td></td>
            <td>앱 다운로드</td>
            <td><a href="/MK/eventDetailSample04" target="_blank">eventDetailSample04</a></td>
          </tr>
          <tr>
            <td></td>
            <td>카카오톡채널</td>
            <td><a href="/MK/eventDetailSample05" target="_blank">eventDetailSample05</a></td>
          </tr>
          <tr>
            <td></td>
            <td>호텔바우처</td>
            <td><a href="/MK/eventDetailSample06" target="_blank">eventDetailSample06</a></td>
          </tr>
          <tr>
            <td></td>
            <td>리뉴얼 오픈이벤트</td>
            <td><a href="/MK/eventDetailSample07" target="_blank">eventDetailSample07</a></td>
          </tr>
          <tr>
            <td>기획전, 매거진</td>
            <td>Swiper Guide</td>
            <td><a href="/DP/planshopDetailSampleSwiper" target="_blank">planshopDetailSampleSwiper</a></td>
          </tr>
          <tr>
            <td>기획전</td>
            <td>시스템옴므_RE_DENIM</td>
            <td><a href="/DP/planshopDetailSample01" target="_blank">planshopDetailSample01</a></td>
          </tr>
          <tr>
            <td></td>
            <td>시스템파리컬렉션</td>
            <td><a href="/DP/planshopDetailSample02" target="_blank">planshopDetailSample02</a></td>
          </tr>
          <tr>
            <td></td>
            <td>캐주얼 시즌오프</td>
            <td><a href="/DP/planshopDetailSample03" target="_blank">planshopDetailSample03</a></td>
          </tr>
          <tr>
            <td></td>
            <td>클럽모나코_윈터세일</td>
            <td><a href="/DP/planshopDetailSample04" target="_blank">planshopDetailSample04</a></td>
          </tr>
          <tr>
            <td></td>
            <td>해외 럭셔리 브랜드 22FW 시즌오프</td>
            <td><a href="/DP/planshopDetailSample05" target="_blank">planshopDetailSample05</a></td>
          </tr>
          <tr>
            <td>아울렛</td>
            <td>아울렛 기획전 템플릿</td>
            <td><a href="/DP/planshopDetailE" target="_blank">outletDetailSample</a></td>
          </tr>
        </tbody>
      </v-simple-table>
    </div>

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
        '한상훈',
        '유선화',
        '고영우',
        '정찬근',
        '박형석'
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
          divide: '전시(DP)',
          onedepth: '메인',
          twodepth: '메인',
          id: 'DP_0101',
          name: 'main',
          url: '/DP/main',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        // {
        //   divide: '',
        //   onedepth: 'LNB',
        //   twodepth: '카테고리',
        //   id: 'DP_0301',
        //   name: 'category',
        //   url: '/DP/category',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },
        {
          divide: '',
          onedepth: '',
          twodepth: '공지팝업(popup)',
          id: 'DP_0102',
          name: '',
          url: '/DP/0102', 
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '타임라인',
          twodepth: '타임라인(popup)',
          id: 'DP_1101',
          name: 'timeline',
          url: '/DP/timeline',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: 'GNB 검색',
          twodepth: '즐겨찾는 검색어(popup)',
          id: 'DP_0118',
          name: '0118',
          url: '/DP/0118',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '필터',
          twodepth: '필터 레이어',
          id: 'DP_0500',
          name: 'FilterLayer',
          url: '/DP/filterLayer',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        // {
        //   divide: '공통(CP)',
        //   onedepth: 'GNB',
        //   twodepth: '전체메뉴 레이어',
        //   id: 'CP_0102',
        //   name: 'Gnb',
        //   url: '/CP/allMenu',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },
        // {
        //   divide: '공통(CP)',
        //   onedepth: '푸터',
        //   twodepth: '푸터',
        //   id: 'CP_0101',
        //   name: '',
        //   url: '/CP/0101',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },
        // {
        //   divide: '',
        //   onedepth: '알림',
        //   twodepth: '리스트',
        //   id: 'CP_0101',
        //   name: 'alarmList',
        //   url: '/CP/alarmList',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },
        // {
        //   divide: '',
        //   onedepth: '우편번호 찾기',
        //   twodepth: '주소입력 결과',
        //   id: 'CP_0112',
        //   name: '',
        //   url: '/CP/0112',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },
        // ///////////////////////////////////////////////// 오류
        {
          divide: '',
          onedepth: '오류화면',
          twodepth: '400 오류',
          id: 'CP_0113',
          name: 'badRequest',
          url: '/CP/badRequest',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '500 오류',
          id: 'CP_0114',
          name: 'internalServerError',
          url: '/CP/internalServerError',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '서비스 점검',
          id: 'CP_0115',
          name: 'serviceCheck',
          url: '/CP/serviceCheck',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '서비스 점검중 오류',
          id: 'CP_0116',
          name: 'serviceCheckError',
          url: '/CP/serviceCheckError',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        // ///////////////////////////////////////////////// 회원(ME)
        {
          divide: '회원(ME)',
          onedepth: '회원(통합/한섬/간편)',
          twodepth: '로그인',
          id: 'ME_0101',
          name: 'login',
          url: '/ME/login',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '(고객 인증 & 약관 & 인증 번호)',
          twodepth: '장기 미이용 고객 인증',
          id: 'ME_0101_A',
          name: 'certificationGuide',
          url: '/ME/certificationGuide',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '간편회원 휴대폰 인증(POPUP)',
          id: 'ME_0131',
          name: '',
          url: '/ME/0131',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: 'OPT 로그인(POPUP)',
          id: 'ME_0102',
          name: '',
          url: '/ME/0102',
          statusPub: '',
          statusPlan:'',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '비회원',
          twodepth: '비회원 주문조회(POPUP)',
          id: 'ME_0902',
          name: '',
          url: '/ME/0902',
          statusPub: '',
          statusPlan:'',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '아이디 찾기',
          id: 'ME_0104,ME_0105',
          name: 'findID',
          url: '/ME/findID',
          statusPub: '',
          statusPlan:'',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '비밀번호 찾기',
          id: 'ME_0107,ME_0108',
          name: 'findPassword',
          url: '/ME/findPassword',
          statusPub: '',
          statusPlan:'',
          description: [],
          publisher: '',
        },
         {
          divide: '',
          onedepth: '',
          twodepth: '간편회원 통합 안내(POPUP)',
          id: 'ME_0132',
          name: '',
          url: '/ME/0132',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: 'H.Point 통합 전환 안내(POPUP)',
          id: 'ME_0133',
          name: '',
          url: '/ME/0133',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: 'H.Point 통합회원 가입 안내(POPUP)',
          id: 'ME_0134',
          name: '',
          url: '/ME/0134',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '비밀번호 변경 안내(POPUP)',
          id: 'ME_0137',
          name: '',
          url: '/ME/0137',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '휴면 제한 해제(POPUP)',
          id: 'ME_0139',
          name: '',
          url: '/ME/0139',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '임직원 전환 안내',
          id: 'ME_0215',
          name: ' officersCertifyInfo',
          url: '/ME/officersCertifyInfo',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '임직원 로그인(POPUP)',
          id: 'ME_0216',
          name: '',
          url: '/ME/0216',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '임직원 인증',
          id: 'ME_0217',
          name: 'officersCertify',
          url: '/ME/officersCertify',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        // ///////////////////////////////////////////////// 검색
        {
          divide: '',
          onedepth: '',
          twodepth: '검색전, 검색중, 검색결과',
          id: 'DP_0111, DP_0112, DP_0113',
          name: 'searchResult',
          url: '/DP/searchResult',
          statusPub: '',
          statusPlan:'',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '스타일필터 검색결과',
          id: 'DP_0117',
          name: 'searchStyleFilter',
          url: '/DP/searchStyleFilter',
          statusPub: '',
          statusPlan:'',
          description: [],
          publisher: '',
        },
        // ///////////////////////////////////////////////// 고객만족(CS)
        {
          divide: '고객만족(CS)',
          onedepth: '고객센터',
          twodepth: '메인',
          id: 'CS_0101',
          name: 'csCenterMain',
          url: '/CS/csCenterMain',
          statusPub: '',
          statusPlan:'',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '공지 사항',
          twodepth: '리스트',
          id: 'CS_0102, CS_0104',
          name: 'csCenterNotice',
          url: '/CS/csCenterNotice',
          statusPub: '',
          statusPlan:'',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '상세',
          id: 'CS_0103',
          name: 'csCenterNoticeDetail',
          url: '/CS/csCenterNoticeDetail',
          statusPub: '',
          statusPlan:'',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: 'FAQ (자주하는 질문)',
          twodepth: '리스트',
          id: 'CS_0105',
          name: 'csCenterFAQ',
          url: '/CS/csCenterFAQ',
          statusPub: '',
          statusPlan:'',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '고객의 소리',
          twodepth: '안내팝업(POPUP)',
          id: 'CS_0107',
          name: '',
          url: '/CS/0107',
          statusPub: '',
          statusPlan:'',
          description: [
            ''
          ],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '오프라인 매장 문의 - 동의',
          id: 'CS_0108',
          name: 'offlineStore',
          url: '/CS/offlineStore',
          statusPub: '',
          statusPlan:'',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '오프라인 매장 문의 - 등록',
          id: 'CS_0109',
          name: 'offlineStoreInput',
          url: '/CS/offlineStoreInput',
          statusPub: '',
          statusPlan:'',
          description: [],
          publisher: '',
        },
         {
          divide: '',
          onedepth: '',
          twodepth: '오프라인 매장 문의 - 재문의 등록',
          id: 'CS_0109',
          name: 'offlineStoreInputWrite',
          url: '/CS/offlineStoreInputWrite',
          statusPub: '',
          statusPlan:'',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '오프라인 매장 문의 - 목록',
          id: 'CS_0117',
          name: 'offlineStoreList',
          url: '/CS/offlineStoreList',
          statusPub: '',
          statusPlan:'',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '오프라인 매장 문의 - 상세',
          id: 'CS_0118',
          name: 'offlineStoreDetail',
          url: '/CS/offlineStoreDetail',
          statusPub: '',
          statusPlan:'',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '1:1 문의',
          twodepth: '1:1 문의 - 리스트',
          id: 'CS_0110',
          name: 'oneToOneList',
          url: '/CS/oneToOneList',
          statusPub: '',
          statusPlan:'',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '1:1 문의 - 상세',
          id: 'CS_0111',
          name: 'oneToOneDetail',
          url: '/CS/oneToOneDetail',
          statusPub: '',
          statusPlan:'',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '1:1 문의 - 등록/수정',
          id: 'CS_0112',
          name: 'oneToOneModify',
          url: '/CS/oneToOneModify',
          statusPub: '',
          statusPlan:'',
          description: [
            ''
          ],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '1:1문의/상품Q&A/상담만족도 조사(POPUP)',
          id: 'CS_0547_01',
          name: '',
          url: '/CS/0547_01',
          statusPub: '',
          statusPlan:'',
          description: [
            ''
          ],
          publisher: '',
        },
        // {
        //   divide: '',
        //   onedepth: '신규서비스 소개',
        //   twodepth: '스타일라이브',
        //   id: 'CS_0113',
        //   name: 'serviceStyleLive',
        //   url: '/CS/serviceStyleLive',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },
        // {
        //   divide: '',
        //   onedepth: '',
        //   twodepth: '한섬 케어 세탁',
        //   id: 'CS_0114',
        //   name: 'serviceCareWash',
        //   url: '/CS/serviceCareWash',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },
        // {
        //   divide: '',
        //   onedepth: '',
        //   twodepth: '케어플러스수선',
        //   id: 'CS_0115',
        //   name: 'serviceMending',
        //   url: '/CS/serviceMending',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },
        // {
        //   divide: '',
        //   onedepth: '',
        //   twodepth: '더플러스+',
        //   id: 'CS_0116',
        //   name: 'serviceTheplus',
        //   url: '/CS/theplus',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },
      
        {
          divide: '',
          onedepth: '한섬 회원 혜택',
          twodepth: '온라인 멤버십 혜택',
          id: 'CS_0123',
          name: 'onlineMemberBenefit',
          url: '/CS/onlineMemberBenefit',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '한섬 VVIP 혜택',
          id: 'CS_0127',
          name: 'onlineMemberBenefitVVIP',
          url: '/CS/onlineMemberBenefitVVIP',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '쇼핑 가이드',
          twodepth: '한섬 마일리지',
          id: 'CS_0128',
          name: 'shoppingGuideMileage',
          url: '/CS/shoppingGuideMileage',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '쿠폰',
          id: 'CS_0129',
          name: 'shoppingGuideCoupon',
          url: '/CS/shoppingGuideCoupon',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '주문/결제',
          id: 'CS_0130',
          name: 'shoppingGuideOrder',
          url: '/CS/shoppingGuideOrder',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '교환/반품/환불',
          id: 'CS_0134',
          name: 'shoppingGuideExchange',
          url: '/CS/shoppingGuideExchange',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '딜리버리 서비스',
          id: 'CS_0137, 0138',
          name: 'shoppingDelivery',
          url: '/CS/shoppingDelivery',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '매장안내 - 브랜드tab',
          id: 'CS_0139',
          name: 'storeInformation',
          url: '/CS/storeInformation',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '배송',
          id: 'CS_0140',
          name: 'shoppingGuideDelivery',
          url: '/CS/shoppingGuideDelivery',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '서비스 소개',
          twodepth: '취향의 발견',
          id: 'CS_0141',
          name: 'serviceDiscovery',
          url: '/CS/serviceDiscovery',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '나의 옷장',
          id: 'CS_0142',
          name: 'serviceCloset',
          url: '/CS/serviceCloset',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '선물하기',
          id: 'CS_0143',
          name: 'servicePresent',
          url: '/CS/servicePresent',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '나의 사이즈',
          id: 'CS_0144',
          name: 'serviceSize',
          url: '/CS/serviceSize',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '스타일라이브',
          id: 'CS_0113',
          name: 'serviceStyleLive',
          url: '/CS/serviceStyleLive',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '케어플러스 세탁',
          id: 'CS_0114',
          name: 'serviceCare',
          url: '/CS/serviceCare',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '케어플러스 수선',
          id: 'CS_0115',
          name: 'serviceRepairCare',
          url: '/CS/serviceRepairCare',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '상품선택 - 나의주문상품tab(POPUP)',
          id: 'CS_0547',
          name: '',
          url: '/CS/0547',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '상품선택 - 위시리스트tab(POPUP)',
          id: 'CS_0548',
          name: '',
          url: '/CS/0547',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '상품선택 - 상품검색tab(POPUP)',
          id: 'CS_0549',
          name: '',
          url: '/CS/0547',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        
        // {
        //   divide: '',
        //   onedepth: '설정',
        //   twodepth: '설정',
        //   id: 'CP_0801',
        //   name: 'setUp',
        //   url: '/CP/setUp',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },
        // {
        //   divide: '',
        //   onedepth: '푸터',
        //   twodepth: '푸터',
        //   id: 'CP_0920',
        //   name: '',
        //   url: '/CP/0920',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },
       
        
         {
          divide: 'e기프트(GC)',
          onedepth: 'e-Gift Card',
          twodepth: 'e-Gift Card  상품권목록',
          id: 'GC_0501',
          name: 'giftCardList',
          url: '/GC/giftCardList',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: 'e-Gift Card 구매 카드사별 인증 안내(POPUP)',
          id: 'GC_0502',
          name: '',
          url: '/GC/0502',
          statusPub: '',
          statusPlan:'',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: 'e-Gift Card 선물하기',
          id: 'GC_0503',
          name: 'giftCardPresent',
          url: '/GC/giftCardPresent',
          statusPub: '',
          statusPlan:'',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: 'e-Gift Card 결제하기',
          id: 'GC_0504',
          name: 'giftCardPayment',
          url: '/GC/giftCardPayment',
          statusPub: '',
          statusPlan: '',
          description: [
            ''
          ],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: 'e-Gift Card 상품권 결제주문 완료',
          id: 'GC_0506',
          name: 'giftCardOrderComplete',
          url: '/GC/giftCardOrderComplete',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: 'e-Gift Card구매정보(POPUP)',
          id: 'GC_0506',
          name: '',
          url: '/GC/0506',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: 'e-Gift Card 선물내역 - 목록',
          id: 'GC_0513',
          name: 'myeGiftCardList',
          url: '/GC/myeGiftCardList',
          statusPub: '',
          statusPlan: '',
          description: [
            ''
          ],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: 'e-Gift Card 선물내역 - 상세',
          id: 'GC_0514',
          name: 'myeGiftCardDetail',
          url: '/GC/myeGiftCardDetail',
          statusPub: '',
          statusPlan: '',
          description: [
            ''
          ],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '마이페이지_나의 e-Gift Card 등록(POPUP)',
          id: 'GC_0515',
          name: '',
          url: '/GC/0515',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '마이페이지_나의 e-Gift Card 등록완료(POPUP)',
          id: 'GC_0515',
          name: '',
          url: '/GC/0515_1',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '마이페이지_나의 e-Gift Card 사용내역',
          id: 'GC_0516',
          name: 'myeGiftCardPossible',
          url: '/GC/myeGiftCardPossible',
          statusPub: '',
          statusPlan: '',
          description: [
            ''
          ],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '마이페이지 e-Gift Card 잔액 환불 신청(POPUP)',
          id: 'GC_0510',
          name: '',
          url: '/GC/0510',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '마이페이지 e-Gift Card 잔액 환불 신청 내역(POPUP)',
          id: 'GC_0511',
          name: '',
          url: '/GC/0511',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '마이페이지_나의 e-Gift Card__사용내역_상세',
          id: 'GC_0512',
          name: 'eGiftCardUsageDetail',
          url: '/GC/eGiftCardUsageDetail',
          statusPub: '',
          statusPlan: '',
          description: [
            ''
          ],
          publisher: '',
        },
        // {
        //   divide: '',
        //   onedepth: '팝업',
        //   twodepth: '본인확인(POPUP)',
        //   id: '',
        //   name: '',
        //   url: '',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },
        // {
        //   divide: '공통(CP)',
        //   onedepth: '주소입력',
        //   twodepth: '입력(POPUP)',
        //   id: 'CP_0111, CP_0112',
        //   name: '',
        //   url: '/CP/0111',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: ["2022-04-22 삭제"],
        //   publisher: '',
        // },
       
        
        // ///////////////////////////////////////////////// 상품전시(DP)
        {
          divide: '상품전시(DP)',
          onedepth: '카테고리',
          twodepth: 'Category',
          id: 'DP_0211',
          name: 'category',
          url: '/DP/category',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '상품전시(DP)',
          onedepth: '브랜드',
          twodepth: 'TIME',
          id: 'DP_0202',
          name: 'timeMain',
          url: '/DP/timeMain',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: 'SYSTEM',
          id: 'DP_0203',
          name: 'systemMain',
          url: '/DP/systemMain',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '브랜드 메인',
          id: 'DP_0201',
          name: 'brandMain',
          url: '/DP/brandMain',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '브랜드 GNB > About',
          id: 'DP_0204',
          name: 'brandAbout',
          url: '/DP/brandAbout',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '브랜드 GNB > 샵',
          id: 'DP_0208',
          name: 'shopList',
          url: '/DP/shopList',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        /* {
          divide: '',
          onedepth: '',
          twodepth: '브랜드 GNB > 샵 카테고리 선택',
          id: 'DP_0203',
          name: 'shopList2',
          url: '/DP/shopList2',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        }, */
        {
          divide: '',
          onedepth: '',
          twodepth: '브랜드 GNB > SPECIAL SHOP',
          id: 'DP_0205',
          name: 'specialshop',
          url: '/DP/specialshop',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '브랜드 GNB > 룩북 리스트',
          id: 'DP_0231',
          name: 'lookbookList',
          url: '/DP/lookbookList',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '브랜드 GNB > 룩북 상세',
          id: 'DP_0232',
          name: 'lookbookDetail',
          url: '/DP/lookbookDetail',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '브랜드 GNB > 캠페인 리스트',
          id: 'DP_0206',
          name: 'campaignList',
          url: '/DP/campaignList',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '브랜드 GNB > 캠페인 상세',
          id: 'DP_0207',
          name: 'campaignDetail',
          url: '/DP/campaignDetail',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        
        {
          divide: '',
          onedepth: '',
          twodepth: '해외브랜드',
          id: 'DP_0264',
          name: 'overseasBrand',
          url: '/DP/overseasBrand',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },

        {
          divide: '',
          onedepth: '기획전',
          twodepth: '기획전 목록',
          id: 'DP_0221 ~ DP_0222',
          name: 'planshop',
          url: '/DP/planshop',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '기획전 상세 A',
          id: 'DP_0223',
          name: 'planshopDetailA',
          url: '/DP/planshopDetailA',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '기획전 상세 B',
          id: 'DP_0224',
          name: 'planshopDetailB',
          url: '/DP/planshopDetailB',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '기획전 상세 C',
          id: 'DP_0225',
          name: 'planshopDetailC',
          url: '/DP/planshopDetailC',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '기획전 상세 D',
          id: 'DP_0226',
          name: 'planshopDetailD',
          url: '/DP/planshopDetailD',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        
        // ///////////////////////////////////////////////// 상품전시(DP) - 매거진
        {
          divide: '',
          onedepth: 'THE 매거진',
          twodepth: '전체',
          id: 'DP_0241',
          name: 'theMagazineMain',
          url: '/DP/theMagazineMain',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '커버스토리',
          id: 'DP_1241~ DP_1246',
          name: 'theMagazineCover',
          url: '/DP/theMagazineCover',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '템플릿 A형',
          id: 'DP_0242',
          name: 'theMagazineTempA',
          url: '/DP/theMagazineTempA',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '템플릿 B형',
          id: 'DP_0243',
          name: 'theMagazineTempB',
          url: '/DP/theMagazineTempB',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '템플릿 C형',
          id: 'DP_0244',
          name: 'theMagazineTempC',
          url: '/DP/theMagazineTempC',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
         {
          divide: '',
          onedepth: '',
          twodepth: '템플릿 D형',
          id: 'DP_0245',
          name: 'theMagazineTempD',
          url: '/DP/theMagazineTempD',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
         {
          divide: '',
          onedepth: '',
          twodepth: '템플릿 E형',
          id: 'DP_0246',
          name: 'theMagazineTempE',
          url: '/DP/theMagazineTempE',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '실측사이즈(POPUP)',
          id: 'DP_0244 ~ DP_0245',
          name: '',
          url: '/DP/0244',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '뉴스',
          id: 'DP_0247',
          name: 'theMagazineNews',
          url: '/DP/theMagazineNews',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },

        // ///////////////////////////////////////////////// 상품전시(DP) - 매거진
        {
          divide: '',
          onedepth: '룩북',
          twodepth: '룩북 메인',
          id: 'DP_0231',
          name: 'lookbookMain',
          url: '/DP/lookbookMain',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '룩북 메인 상세',
          id: 'DP_0232',
          name: 'lookbookMainDetail',
          url: '/DP/lookbookMainDetail',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },

        // ///////////////////////////////////////////////// 상품전시(DP) - 편집샵
        {
          divide: '',
          onedepth: '편집샵',
          twodepth: '전체메인',
          id: 'DP_0251',
          name: 'editShopMain',
          url: '/DP/editShopMain',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '상위브랜드',
          id: 'DP_0252',
          name: 'editShopSubMain',
          url: '/DP/editShopSubMain',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '상위브랜드2',
          id: 'DP_0252',
          name: 'editShopSubMain2',
          url: '/DP/editShopSubMain2',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '하위브랜드',
          id: 'DP_0261',
          name: 'editShopSub',
          url: '/DP/editShopSub',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        
        {
          divide: '',
          onedepth: '아울렛',
          twodepth: '메인',
          id: 'DP_0262',
          name: 'outletMain',
          url: '/DP/outletMain',
          statusPub: '',
          statusPlan: '',
          description: [''],
          publisher: '',
        },

        {
          divide: '',
          onedepth: '',
          twodepth: '브랜드',
          id: 'DP_0263',
          name: 'outletSub',
          url: '/DP/outletSub',
          statusPub: '',
          statusPlan: '',
          description: [''],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: 'top100',
          id: 'DP_',
          name: 'top100',
          url: '/DP/top100',
          statusPub: '',
          statusPlan: '',
          description: [''],
          publisher: '',
        },

        // ///////////////////////////////////////////////// 상품 상세
        {
          divide: '상품관리(PM)',
          onedepth: '상품 상세',
          twodepth: '상품 상세',
          id: 'PM_0101',
          name: 'productDetail',
          url: '/PM/productDetail',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '상품 상세 [무형상품]',
          twodepth: '상품 상세 [무형상품]',
          id: 'PM_0101_A',
          name: 'productDetail_itgb',
          url: '/PM/productDetail_itgb',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '묶음상품 상세',
          id: 'PM_0105A',
          name: 'productDetails',
          url: '/PM/productDetails',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        // {
        //   divide: '',
        //   onedepth: '',
        //   twodepth: '묶음상품 상세(POPUP)',
        //   id: 'PM_0106B',
        //   name: '',
        //   url: '/PM/0106B',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },
        // {
        //   divide: '',
        //   onedepth: '',
        //   twodepth: '옵션선택(POPUP)',
        //   id: 'PM_0121',
        //   name: '',
        //   url: '/PM/0121',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },
        // {
        //   divide: '',
        //   onedepth: '',
        //   twodepth: '묶음상품 옵션선택(POPUP)',
        //   id: 'PM_106C',
        //   name: '',
        //   url: '/PM/106C',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },
        /* {
          divide: '',
          onedepth: '',
          twodepth: '공유하기(POPUP)',
          id: 'PM_0125',
          name: '',
          url: '/PM/0125',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        }, */
        {
          divide: '',
          onedepth: '',
          twodepth: '최대혜택가(POPUP)',
          id: 'PM_0140',
          name: '',
          url: '/PM/0140',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '이미지 확대보기(POPUP)',
          id: 'PM_0103',
          name: '',
          url: '/PM/0103',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '쿠폰(POPUP)',
          id: 'PM_0147',
          name: '',
          url: '/PM/0147',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '스타일 추천(POPUP)',
          id: 'PM_0151',
          name: '',
          url: '/PM/0151',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '코디한 상품(POPUP)',
          id: 'PM_0151',
          name: '',
          url: '/PM/0151_2',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        /* {
          divide: '',
          onedepth: '',
          twodepth: '이미지 편집(POPUP)',
          id: 'PM_0104',
          name: '',
          url: '/PM/0104',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        }, */
        {
          divide: '',
          onedepth: '',
          twodepth: '증정&사은품 안내(POPUP)',
          id: 'PM_0148',
          name: '',
          url: '/PM/0148',
          statusPub: '',
          statusPlan: '',
          description: [""],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '사이즈 조건표(POPUP)',
          id: 'PM_0136',
          name: '',
          url: '/PM/0136',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        // {
        //   divide: '',
        //   onedepth: '',
        //   twodepth: '이미지 확대보기(POPUP)',
        //   id: 'PM_0103',
        //   name: '',
        //   url: '/PM/0103',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },
        {
          divide: '',
          onedepth: '',
          twodepth: '리뷰작성 혜택(POPUP)',
          id: 'PM_0141',
          name: '',
          url: '/PM/0141',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '오에라 체험단(POPUP)',
          id: 'PM_0144',
          name: '',
          url: '/PM/0144',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
      {
          divide: '',
          onedepth: '',
          twodepth: '배송/교환/반품(POPUP)',
          id: 'PM_0114',
          name: '',
          url: '/PM/0114',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '매장재고확인(POPUP) - 상품',
          id: 'PM_0130',
          name: '',
          url: '/PM/0130',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '매장재고확인(POPUP) - 매장',
          id: 'PM_0131',
          name: '',
          url: '/PM/0131',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '상품 Q&A(POPUP)',
          id: 'PM_0118',
          name: '',
          url: '/PM/0118',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '상품 Q&A 작성(POPUP)',
          id: 'PM_0120',
          name: '',
          url: '/PM/0120',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '핏가이드(POPUP)',
          id: 'PM_0126',
          name: '',
          url: '/PM/0126',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '매장선택(POPUP)',
          id: 'PM_0133',
          name: '',
          url: '/PM/0133',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
           divide: '',
           onedepth: '',
           twodepth: '재입고 알림 신청(POPUP)',
           id: 'PM_0134',
           name: '',
           url: '/PM/0134',
           statusPub: '',
           statusPlan: '',
           description: [],
           publisher: '',
        },
        // {
        //   divide: '',
        //   onedepth: '리뷰',
        //   twodepth: '리뷰 목록, 묶음상품 리뷰 목록',
        //   id: 'PM_0115, PM_115A',
        //   name: 'reviewList',
        //   url: '/PM/reviewList',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [
        //   ],
        //   publisher: '',
        // },
        /*
        {
          divide: '',
          onedepth: '',
          twodepth: '상세',
          id: 'PM_0116',
          url: '/PM/0116',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        */
        {
          divide: '',
          onedepth: '',
          twodepth: '등록/수정(POPUP)',
          id: 'PM_0117',
          name: '',
          url: '/PM/0117',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '포토/동영상 리뷰(POPUP)',
          id: 'PM_0142, PM_142A',
          name: '',
          url: '/PM/0142',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '포토/동영상 모아보기(POPUP)',
          id: 'PM_0143',
          name: '',
          url: '/PM/0143',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '리뷰 신고/차단 팝업',
          id: 'PM_127A',
          name: '',
          url: '/PM/127A',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '쇼핑백 리스트',
          id: 'OR_0101, OR_0102, OR_0103, OR_0105',
          url: '/OR/shoppingBag',
          name: 'shoppingBag',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '쇼핑백 옵션 변경',
          id: 'OR_0305_2',
          url: '/OR/0305_2',
          name: '',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '주문/결제_쇼핑백_확인해보셨어요?(팝업)',
          id: 'OR_0106',
          name: '',
          url: '/OR/0106',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '주문/결제_쇼핑백_증정&사은품 안내(팝업)',
          id: 'OR_0113',
          name: '',
          url: '/OR/0113',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '주문/결제_쇼핑백_이런 상품 어때요?',
          id: 'OR_0110',
          name: '',
          url: '/OR/0110',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth:
            '주문/결제_쇼핑백_카드행사혜택안내 무이자할부',
          id: 'OR_0111',
          name: '',
          url: '/OR/0111',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '주문/결제_쇼핑백_최대할인혜택 로딩',
          id: 'OR_0116',
          name: '',
          url: '/OR/0116',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '매장위치보기 팝업',
          id: 'OR_0338',
          name: '',
          url: '/OR/0338',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '주문/결제_주문서_',
          id: 'OR_0241, OR_0242 OR_0243 OR_0244 OR_0245, OR_0262',
          name: 'order',
          url: '/OR/order',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '[무형상품]',
          twodepth: '주문/결제_주문서 [무형]',
          id: 'OR_0241_A, OR_0242 OR_0243 OR_0244 OR_0245, OR_0262',
          name: 'order_itgb',
          url: '/OR/order_itgb',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '주문/결제_주문서_H.Point Pay 주문서 (팝업)',
          id: 'OR_0246, OR_0247',
          name: '',
          url: '/OR/0246',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '주문/결제_주문서__배송요청사항 (팝업)',
          id: 'OR_0250, OR_0251, OR_0264',
          name: '',
          url: '/OR/0250',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '주문/결제_주문서_쿠폰_할인정보 (팝업)',
          id: 'OR_0252, OR_0253',
          name: '',
          url: '/OR/0252',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '주문/결제_주문서_사은품_사은품 신청하기_(팝업)',
          id: 'OR_0255',
          name: '',
          url: '/OR/0255',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '주문/결제_주문서_선물하기',
          id: 'OR_0259',
          name: 'orderGift',
          url: '/OR/orderGift',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: 'H.Point Pay 가입안내',
          id: 'OR_0258',
          name: '',
          url: '/OR/0258',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: 'H.Point Pay 가입 전자금융거래 기본약관',
          id: 'PY_0118',
          name: '',
          url: '/OR/0258',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth:
            '주문/결제_주문서_비회원 주문_회원가입 안내_안내 주문(팝업)',
          id: 'OR_0260',
          name: '',
          url: '/OR/0260',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth:
            '주문/결제_주문서__비회원 주문 약관동의_약관동의',
          id: 'OR_0261',
          name: 'orderAgreeTerms',
          url: '/OR/orderAgreeTerms',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '결제 처리 중 화면',
          id: 'OR_0000',
          name: 'orderProgress',
          url: '/OR/orderProgress',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '주문/결제_주문서_주문완료',
          id: 'OR_0265, OR_0266, OR_0268',
          name: 'orderComplete',
          url: '/OR/orderComplete',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '[무형상품]',
          twodepth: '주문/결제_주문서_주문완료',
          id: 'OR_0265_A, OR_0266, OR_0268',
          name: 'orderComplete_itgb',
          url: '/OR/orderComplete_itgb',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '주문/결제_주문서_선물하기_주문완료',
          id: 'OR_0267',
          name: 'orderGiftComplete',
          url: '/OR/orderGiftComplete',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },




        // ///////////////////////////////////////////////// 마케팅 이벤트
        {
          divide: '마케팅(MK)',
          onedepth: '이벤트',
          twodepth: '진행중 이벤트',
          id: 'MK_0101',
          name: 'event',
          url: '/MK/event',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '단순클릭응모형 상세',
          id: 'MK_0103',
          name: 'eventEntry',
          url: '/MK/eventEntry',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '댓글형 상세',
          id: 'MK_0106, MK_0107',
          name: 'eventComment',
          url: '/MK/eventComment',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '출석체크형 상세',
          id: 'MK_0109',
          name: 'eventAttend',
          url: '/MK/eventAttend',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '구매 스탬프형 상세',
          id: 'MK_0104',
          name: 'eventStamp',
          url: '/MK/eventStamp',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '구매 스탬프형 상세- 스탬프 이력(POPUP)',
          id: 'MK_0105',
          name: '',
          url: '/MK/0105',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '쿠폰형 상세',
          id: 'MK_0110',
          name: 'eventDetailCoupon',
          url: '/MK/eventDetailCoupon',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        // {
        //   divide: '',
        //   onedepth: '',
        //   twodepth: 'HTML형 상세',
        //   id: 'MK_0111',
        //   name: 'eventDetailHtml',
        //   url: '/MK/eventDetailHtml',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },
        {
          divide: '',
          onedepth: '',
          twodepth: '룰렛형 상세 4칸',
          id: 'MK_0108',
          name: 'eventRoulette',
          url: '/MK/eventRoulette',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '룰렛형 상세 6칸',
          id: 'MK_0108',
          name: 'eventRoulette2',
          url: '/MK/eventRoulette2',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '설문형 목록',
          id: 'MK_0112',
          name: 'eventSurveyList',
          url: '/MK/eventSurveyList',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '고객리뷰 안내(POPUP)',
          id: 'MK_0113',
          name: '',
          url: '/MK/0113',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '래플 이벤트 타입',
          id: 'MK_0121',
          name: 'eventRaffle',
          url: '/MK/eventRaffle',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '설문형 상세',
          id: 'MK_0114',
          name: 'eventSurveyDetail',
          url: '/MK/eventSurveyDetail',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '구분자 탬플릿 A',
          id: 'MK_0114_1',
          name: 'eventDetailTemplateA',
          url: '/MK/eventDetailTemplateA',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '구분자 탬플릿 A2',
          id: 'MK_0114_1',
          name: 'eventDetailTemplateA2',
          url: '/MK/eventDetailTemplateA2',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '구분자 탬플릿 B',
          id: 'MK_0114_2',
          name: 'eventDetailTemplateB',
          url: '/MK/eventDetailTemplateB',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '구분자 탬플릿 B2',
          id: 'MK_0114_2',
          name: 'eventDetailTemplateB2',
          url: '/MK/eventDetailTemplateB2',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },

        {
          divide: '마케팅(MK)',
          onedepth: '마이페이지',
          twodepth: '이벤트 참여내역',
          id: 'MK_0115',
          name: 'myEventList',
          url: '/MK/myEventList',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '사은품 자동 응모',
          id: 'MK_0116',
          name: 'myGiftApply',
          url: '/MK/myGiftApply',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '사은품 안내 팝업(POPUP)',
          id: 'MK_0117',
          name: '',
          url: '/MK/0117',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        // {
        //   divide: '스타일라이브(SL)',
        //   onedepth: '스타일라이브',
        //   twodepth: '타임라인 - 스타일리뷰',
        //   id: 'SL_0101 ~ SL_0110',
        //   name: 'styleReview',
        //   url: '/SL/styleReview',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },
        // {
        //   divide: '',
        //   onedepth: '',
        //   twodepth: '타임라인 - 스타일토크',
        //   id: 'SL_0201,SL_0202',
        //   name: 'styleTalk',
        //   url: '/SL/styleTalk',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },
        // {
        //   divide: '',
        //   onedepth: '',
        //   twodepth: '타임라인 - 공지사항',
        //   id: 'SL_0203,SL_0204',
        //   name: 'styleNotice',
        //   url: '/SL/styleNotice',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },
        // {
        //   divide: '',
        //   onedepth: '',
        //   twodepth: '게시물 보기',
        //   id: 'SL_0301,SL_0302',
        //   name: 'stylePost',
        //   url: '/SL/stylePost',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },
        // {
        //   divide: '',
        //   onedepth: '',
        //   twodepth: '게시물 작성',
        //   id: 'SL_0303 ~ SL_0313',
        //   name: 'stylePosting',
        //   url: '/SL/stylePosting',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },
        // {
        //   divide: '',
        //   onedepth: '',
        //   twodepth: '게시물 연관 기능',
        //   id: 'SL_0314 ~ SL_0318',
        //   name: 'stylePostFeatures',
        //   url: '/SL/stylePostFeatures',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },
        // {
        //   divide: '',
        //   onedepth: '',
        //   twodepth: '스타일라이브 쪽지',
        //   id: 'SL_0401 ~ SL_0405',
        //   name: 'styleLiveNote',
        //   url: '/SL/styleLiveNote',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },

        // {
        //   divide: '',
        //   onedepth: '',
        //   twodepth: '마이 스타일라이브',
        //   id: 'SL_0501 ~ SL_0514',
        //   name: 'myStyleLive',
        //   url: '/SL/myStyleLive',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },
        // {
        //   divide: '',
        //   onedepth: '',
        //   twodepth: '스타일라이브 검색',
        //   id: 'SL_0601 ~ SL_0606',
        //   name: 'styleLiveSearch',
        //   url: '/SL/styleLiveSearch',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },

        // ///////////////////////////////////////////////// 마케팅 이벤트
        {
          divide: '케어플러스 세탁(HC)',
          onedepth: '케어플러스 세탁',
          twodepth: '케어플러스 세탁 안내',
          id: 'HC_0501',
          name: 'handsomeCare',
          url: '/HC/handsomeCare',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '케어플러스 세탁 상세보기(진행내역/이용내역)',
          id: 'HC_0502 ~ HC_0505',
          name: 'myHandsomeCare',
          url: '/HC/myHandsomeCare',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
         {
          divide: '',
          onedepth: '',
          twodepth: '세탁 서비스 운영정책 안내(POPUP)',
          id: 'HC_0506',
          name: '',
          url: '/HC/0506',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '세탁 신청하기',
          id: 'HC_0507 ~ HC_0509',
          name: 'handsomeCareApplyInfo',
          url: '/HC/handsomeCareApplyInfo',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '세탁 신청완료',
          id: 'HC_0513 ~ HC_0515',
          name: 'handsomeCareApplyComplete',
          url: '/HC/handsomeCareApplyComplete',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '세탁 상세보기 - 접수',
          id: 'HC_0519',
          name: 'handsomeCareApplyDetail',
          url: '/HC/handsomeCareApplyDetail',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '세탁 상세보기 - 검수중',
          id: 'HC_0519',
          name: 'handsomeCareApplyDetailComplete',
          url: '/HC/handsomeCareApplyDetailComplete',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '세탁 상세보기 - 결제하기',
          id: 'HC_0520',
          name: 'handsomeCareApplyDetailPayment',
          url: '/HC/handsomeCareApplyDetailPayment',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '세탁 상세보기 - 세탁진행중',
          id: 'HC_0520',
          name: 'handsomeCareApplyDetailProceeding',
          url: '/HC/handsomeCareApplyDetailProceeding',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '세탁 상세보기 - 배송',
          id: 'HC_0520',
          name: 'handsomeCareApplyDetailDilev',
          url: '/HC/handsomeCareApplyDetailDilev',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '세탁 상세보기 - 세탁취소',
          id: 'HC_0520',
          name: 'handsomeCareApplyDetailCencel',
          url: '/HC/handsomeCareApplyDetailCencel',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '세탁 상세보기 - 환불완료',
          id: 'HC_0520',
          name: 'handsomeCareApplyDetailRefund',
          url: '/HC/handsomeCareApplyDetailRefund',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '세탁 상세보기 - 매장수령',
          id: 'HC_0520',
          name: 'handsomeCareApplyDetailStorePickup',
          url: '/HC/handsomeCareApplyDetailStorePickup',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '세탁 상세보기 - 세탁불가',
          id: 'HC_0520',
          name: 'handsomeCareApplyDetailimpossible',
          url: '/HC/handsomeCareApplyDetailimpossible',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '세탁 상세보기 - 보관서비스',
          id: 'HC_0520',
          name: 'handsomeCareApplyDetailKeep',
          url: '/HC/handsomeCareApplyDetailKeep',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '세탁 배송조회(POPUP)',
          id: 'HC_0529',
          name: '',
          url: '/HC/0529',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
         {
          divide: '',
          onedepth: '',
          twodepth: '세탁비 상세보기(POPUP)',
          id: 'HC_0522',
          name: '',
          url: '/HC/0522',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
         {
          divide: '',
          onedepth: '',
          twodepth: '세탁상품 추가(POPUP)',
          id: 'HC_0523 ~ HC_0524',
          name: '',
          url: '/HC/0523',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
         {
          divide: '',
          onedepth: '',
          twodepth: '세탁 이용자 동의(POPUP)',
          id: 'HC_0525',
          name: '',
          url: '/HC/0525',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
         {
          divide: '',
          onedepth: '',
          twodepth: '세탁 불가 상품안내(POPUP)',
          id: 'HC_0526',
          name: '',
          url: '/HC/0526',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },

        // ///////////////////////////////////////////////// 수선(HR)
        {
          divide: '수선(HR)',
          onedepth: '수선',
          twodepth: '수선 서비스안내',
          id: 'HR_0501',
          name: 'handsomeRepair',
          url: '/HR/handsomeRepair',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '케어플러스수선 상세보기(진행내역/이용내역)',
          id: 'HR_0502 ~ HR_0505',
          name: 'myhandsomeRepair',
          url: '/HR/myhandsomeRepair',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '수선 진행 및 비용 안내(popup)',
          id: 'HR_0506',
          name: '',
          url: '/HR/0506',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '케어플러스 수선 안내(popup)',
          id: 'HR_0506_1',
          name: '',
          url: '/HR/0506_1',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '수선 품질보증 및 보상안내(popup)',
          id: 'HR_0507',
          name: '',
          url: '/HR/0507',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '수선 신청하기 - 신청정보',
          id: 'HR_0508',
          name: 'handsomeRepairApplyInfo',
          url: '/HR/handsomeRepairApplyInfo',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
         {
          divide: '',
          onedepth: '',
          twodepth: '수선 신청완료',
          id: 'HR_0510',
          name: 'handsomeRepairApplyComplete',
          url: '/HR/handsomeRepairApplyComplete',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '수선 상세보기 - 접수',
          id: 'HR_0511',
          name: 'handsomeRepairDetail',
          url: '/HR/handsomeRepairDetail',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '수선 상세보기 - 수선진행중',
          id: 'HR_0511',
          name: 'handsomeRepairDetailProceeding',
          url: '/HR/handsomeRepairDetailProceeding',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '수선 상세보기 - 결제하기',
          id: 'HR_0512',
          name: 'handsomeRepairDetailPayment',
          url: '/HR/handsomeRepairDetailPayment',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '수선 상세보기 - 배송',
          id: 'HR_0512',
          name: 'handsomeRepairDetailComplete',
          url: '/HR/handsomeRepairDetailComplete',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '수선 상세보기 - 수선취소',
          id: 'HR_0512',
          name: 'handsomeRepairDetailCancel',
          url: '/HR/handsomeRepairDetailCancel',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '수선 상세보기 - 환불접수',
          id: 'HR_0512',
          name: 'handsomeRepairDetailRefund',
          url: '/HR/handsomeRepairDetailRefund',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '수선 상세보기 - 환불완료',
          id: 'HR_0512',
          name: 'handsomeRepairDetailRefundComplete',
          url: '/HR/handsomeRepairDetailRefundComplete',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '수선 조회',
          id: 'HR_0514 ~ HR_0516',
          name: 'handsomeRepairlinquiry',
          url: '/HR/handsomeRepairlinquiry',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '수선상품 추가(popup)',
          id: 'HR_0517',
          name: '',
          url: '/HR/0517',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
         {
          divide: '',
          onedepth: '',
          twodepth: '수선 이용자 동의(POPUP)',
          id: 'HR_0519',
          name: '',
          url: '/HR/0519',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },

        // {
        //   divide: '',
        //   onedepth: '',
        //   twodepth: '상세',
        //   id: 'TV_0504',
        //   name: '',
        //   url: '/TV/0504',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },
        // ///////////////////////////////////////////////// 주문(OR)
        {
          divide: '주문(OR)',
          onedepth: '마이페이지',
          twodepth: '주문 조회',
          id: 'OR_0303,OR_0341,OR_0334',
          name: 'orderShippingList',
          url: '/OR/orderShippingList',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '비회원주문조회',
          id: 'OR_0316',
          name: 'nonmemberOrderHistory',
          url: '/OR/nonmemberOrderHistory',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '주문조회 상세',
          id: 'OR_0304',
          name: 'orderInquiryDetail',
          url: '/OR/orderInquiryDetail',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '[무형상품]',
          twodepth: '주문조회 상세',
          id: 'OR_0304_A',
          name: 'orderInquiryDetail_itgb',
          url: '/OR/orderInquiryDetail_itgb',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '주문조회 상세 - 취소,교환,반품',
          id: 'OR_0304',
          name: 'orderInquiryDetailEct',
          url: '/OR/orderInquiryDetailEct',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '[무형상품]',
          twodepth: '주문조회 상세 - 취소,교환,반품',
          id: 'OR_0304_A',
          name: 'orderInquiryDetailEct_itgb',
          url: '/OR/orderInquiryDetailEct_itgb',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '주문조회 상세 - 재결제',
          id: 'OR_0304',
          name: 'orderInquiryDetailRepay',
          url: '/OR/orderInquiryDetailRepay',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '주문조회 상세 - 매장수령',
          id: 'OR_0304',
          name: 'orderInquiryDetailStorePickup',
          url: '/OR/orderInquiryDetailStorePickup',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '[무형상품]',
          twodepth: '주문진행 안내(POPUP)',
          id: 'OR_0271',
          name: '',
          url: '/OR/0271',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '옵션변경(POPUP)',
          id: 'OR_0305',
          name: '',
          url: '/OR/0305',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '배송지 관리',
          id: 'OR_0201',
          name: 'shippingAddressManage',
          url: '/OR/shippingAddressManage',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '나의 배송지 목록(팝업)',
          id: 'OR_0320',
          name: '',
          url: '/OR/0320',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '배송지 등록 (팝업)',
          id: 'OR_0321, OR_0249, OR_0263',
          name: '',
          url: '/OR/0321',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '배송조회(POPUP)',
          id: 'OR_0314',
          name: '',
          url: '/OR/0314',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '재결제',
          id: 'OR_0318',
          name: 'repayment',
          url: '/OR/repayment',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '주문 취소',
          id: 'OR_0315,OR_0322,OR_0323',
          name: 'orderCancel',
          url: '/OR/orderCancel',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '주문 취소 e-Gift Card',
          id: 'OR_0344',
          name: 'orderCancelGift',
          url: '/OR/orderCancelGift',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
         {
          divide: '',
          onedepth: '',
          twodepth: '취소 내역',
          id: 'OR_0324',
          name: 'orderCancelHistory',
          url: '/OR/orderCancelHistory',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
         {
          divide: '',
          onedepth: '[무형상품]',
          twodepth: '취소 내역',
          id: 'OR_0324_A',
          name: 'orderCancelHistory_itgb',
          url: '/OR/orderCancelHistory_itgb',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '반품신청',
          id: 'OR_0307,OR_0325 ~ OR_0328',
          name: 'orderReturn',
          url: '/OR/orderReturn',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '반품내역',
          id: 'OR_0329',
          name: 'orderReturnhistory',
          url: '/OR/orderReturnhistory',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '교환신청',
          id: 'OR_0330 ~ OR_0332',
          name: 'orderExchange',
          url: '/OR/orderExchange',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '교환내역',
          id: 'OR_0309',
          name: 'orderExchangeList',
          url: '/OR/orderExchangeList',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '교환내역 - 2개 이상',
          id: 'OR_0309',
          name: 'orderExchangeListMore',
          url: '/OR/orderExchangeListMore',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        //  {
        //   divide: '',
        //   onedepth: '',
        //   twodepth: '교환신청_BO교환접수(POPUP)',
        //   id: 'OR_0343',
        //   name: '',
        //   url: '/OR/0343',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },
        {
          divide: '',
          onedepth: '',
          twodepth: '받은 선물함/보낸 선물함 목록',
          id: 'OR_0311,OR_0337',
          name: 'giftBoxList',
          url: '/OR/giftBoxList',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '보낸 선물함',
          id: 'OR_0335',
          name: 'giftBoxDetail',
          url: '/OR/giftBoxDetail',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '받은 선물함',
          id: 'OR_0310',
          name: 'giftBoxHistory',
          url: '/OR/giftBoxHistory',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '받은 선물함 상세',
          id: 'OR_0313',
          name: 'giftBoxHistoryDetail',
          url: '/OR/giftBoxHistoryDetail',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '받은선물- 비로그인 시 안내 팝업(POPUP)',
          id: 'OR_0336',
          name: '',
          url: '/OR/0336',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '환불계좌 관리 확인',
          id: 'OR_0339',
          name: 'refundAccount',
          url: '/OR/refundAccount',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '환불계좌 관리 등록',
          id: 'OR_0340',
          name: 'refundAccountRegister',
          url: '/OR/refundAccountRegister',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        
        // ///////////////////////////////////////////////// 상품관리(PM)
        {
          divide: '상품관리(PM)',
          onedepth: '마이페이지',
          twodepth: '재입고알림 리스트',
          id: 'PM_0128',
          name: 'restockList',
          url: '/PM/restockList',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '즐겨찾는 검색어',
          id: 'PM_0129',
          name: 'searchFavorite',
          url: '/PM/searchFavorite',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '리뷰 사진 크게보기(POPUP)',
          id: 'PM_0154',
          name: '',
          url: '/PM/0154',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '리뷰 동영상 크게보기(POPUP)',
          id: 'PM_0155',
          name: '',
          url: '/PM/0155',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        // {
        //   divide: '',
        //   onedepth: '',
        //   twodepth: '재입고알림 안내(POPUP)',
        //   id: 'PM_0156',
        //   name: '',
        //   url: '/PM/0156',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },
        {
          divide: '',
          onedepth: '',
          twodepth: '리뷰 - 작성 가능 리뷰',
          id: 'PM_0145',
          name: 'myReviewListPossible',
          url: '/PM/myReviewListPossible',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '리뷰 - 작성한 리뷰',
          id: 'PM_0150',
          name: 'myReviewList',
          url: '/PM/myReviewList',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '리뷰 상세',
          id: 'PM_0151',
          name: 'myReviewDetail',
          url: '/PM/myReviewDetail',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '스타일리뷰 상세보기',
          id: 'PM_0152A',
          name: '',
          url: '/PM/0152A',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: 'Q&A 리스트',
          id: 'PM_0146',
          name: 'myQAList',
          url: '/PM/myQAList',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        
        // ///////////////////////////////////////////////// 회원(ME)
        {
          divide: '회원(ME)',
          onedepth: '마이페이지',
          twodepth: '메인',
          id: 'ME_0201',
          name: 'myPageMain',
          url: '/ME/myPageMain',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '추천인 ID 등록(POPUP)',
          id: 'ME_0202',
          name: '',
          url: '/ME/0202',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '회원(ME)',
          onedepth: '마이페이지',
          twodepth: '마이하트 위시리스트',
          id: 'ME_0301',
          name: 'myHeartWishList',
          url: '/ME/myHeartWishList',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '마이하트 컨텐츠',
          id: 'ME_0302',
          name: 'myHeartContents',
          url: '/ME/myHeartContents',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '마이하트 브랜드',
          id: 'ME_0306',
          name: 'myHeartBrand',
          url: '/ME/myHeartBrand',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '마이하트 취향',
          id: 'ME_0307',
          name: 'myHeartTaste',
          url: '/ME/myHeartTaste',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '개인정보 수정',
          twodepth: '비밀번호 재확인',
          id: 'ME_0401',
          name: 'personalInfoPassword',
          url: '/ME/personalInfoPassword',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '개인정보 수정',
          id: 'ME_0402',
          name: 'personalInfo',
          url: '/ME/personalInfo',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '개인정보 제3자 제공 동의(POPUP)',
          id: 'ME_0439',
          name: '',
          url: '/ME/0439',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '비밀번호 변경',
          id: 'ME_0403',
          name: 'personalInfoCheck',
          url: '/ME/personalInfoCheck',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        // {
        //   divide: '',
        //   onedepth: '',
        //   twodepth: '비밀번호 변경- h.point로 이동 (POPUP)',
        //   id: 'ME_0435',
        //   name: '',
        //   url: '/ME/0435',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },
        {
          divide: '',
          onedepth: '',
          twodepth: '회원탈퇴 안내',
          id: 'ME_0404',
          name: 'withdrawal',
          url: '/ME/withdrawal',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '회원탈퇴 유형 선택',
          id: 'ME_0405',
          name: 'withdrawalType',
          url: '/ME/withdrawalType',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '회원탈퇴 사유 선택',
          id: 'ME_0420',
          name: 'withdrawalReason',
          url: '/ME/withdrawalReason',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '나의 회원 등급',
          twodepth: '나의 회원등급 혜택(온라인 등급,한섬 VVIP)',
          id: 'ME_0411',
          name: 'myMemberLevel',
          url: '/ME/myMemberLevel',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '온라인 등급, 한섬VVIP 안내사항(POPUP)',
          id: 'ME_0422',
          name: '',
          url: '/ME/0422',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '쿠폰 리스트',
          id: 'ME_0419',
          name: 'couponList',
          url: '/ME/couponList',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        // {
        //   divide: '',
        //   onedepth: '나의 혜택',
        //   twodepth: '나의 혜택',
        //   id: 'ME_0436',
        //   name: 'myBenefit',
        //   url: '/ME/myBenefit',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [
        //     ''
        //   ],
        //   publisher: '',
        // },
        {
          divide: '',
          onedepth: '',
          twodepth: '한섬마일리지',
          id: 'ME_0413',
          name: 'handsomeMileage',
          url: '/ME/handsomeMileage',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: 'H-Point',
          id: 'ME_0418',
          name: 'hpointDetail',
          url: '/ME/hpointDetail',
          statusPub: '',
          statusPlan: '',
          description: [
            ''
          ],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: 'e-Money',
          id: 'ME_0417',
          name: 'emoney',
          url: '/ME/emoney',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '한섬 VVIP',
          id: 'ME_0424',
          name: 'handsomeVVIPList',
          url: '/ME/handsomeVVIPList',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        // {
        //   divide: '회원(ME)',
        //   onedepth: '마이페이지',
        //   twodepth: '한섬멤버십통합 전환(POPUP)',
        //   id: 'ME_0430',
        //   name: '',
        //   url: '/ME/0430',
        //   statusPub: '',
        //   statusPlan: '',
        //   description: [],
        //   publisher: '',
        // },
        {
          divide: '',
          onedepth: '',
          twodepth: '나의 사이즈- 결과완료화면',
          id: 'ME_0442',
          name: 'mySize',
          url: '/ME/mySize',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '한섬멤버십통합',
          id: 'ME_0431',
          name: 'handsomeMembership',
          url: '/ME/handsomeMembership',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        
        /* {
          divide: 'e기프트(GC)',
          onedepth: '마이페이지',
          twodepth: 'e-Gift Card 선물 내역',
          id: 'ME_1410',
          url: '/ME/1410',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: 'e-Gift Card 선물 내역 상세',
          id: 'ME_1410',
          url: '/ME/1410_2',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: 'e-Gift Card 등록',
          id: 'ME_1413',
          url: '/ME/1413',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: 'e-Gift Card 사용내역',
          id: 'ME_1414, ME_1411, ME_1412',
          url: '/ME/1414',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: 'e-Gift Card 사용내역 없음',
          id: 'ME_1414, ME_1411, ME_1412',
          url: '/ME/1414_2',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: 'e-Gift Card 잔액 환불 신청(POPUP)',
          id: 'ME_1415',
          url: '/ME/1415',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: 'e-Gift Card 환불 신청 내역(POPUP)',
          id: 'ME_1416',
          url: '/ME/1416',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: 'e-Gift Card 사용내역 상세',
          id: 'ME_1417',
          url: '/ME/1417',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        }, */
        // {
        //   divide: '마이페이지(GC)',
        //   onedepth:'나의 e-Gift Card',
        //   twodepth:'e-Gift Card 현황',
        //   id:'GC_0506',
        //   url:'/GC/0506',
        //   statusPub:'',
        //   status:'',
        //   description: [],
        // },
        /* {
          divide: '마이페이지(GC)',
          onedepth: '나의 e-Gift Card',
          twodepth: 'e-Gift Card 현황_사용가능',
          id: 'GC_0507',
          url: '/GC/0507',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        }, */

        // {
        //   divide: '',
        //   onedepth:'',
        //   twodepth:'e-Gift Card 상세',
        //   id:'GC_0508',
        //   url:'/GC/0508',
        //   statusPub:'',
        //   status:'',
        //   description: [],
        // },
        // {
        //   divide: '',
        //   onedepth:'',
        //   twodepth:'e-Gift Card 등록',
        //   id:'GC_0509',
        //   url:'/GC/0202',
        //   statusPub:'',
        //   status:'',
        //   description: [],
        // },
        /* {
          divide: '',
          onedepth: '',
          twodepth: 'e-Gift Card 현황_사용내역',
          id: 'GC_0512',
          url: '/GC/0512',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        }, */
        {
          divide: '옷장(CL)',
          onedepth: '마이페이지',
          twodepth: '나의 옷장(옷장)',
          id: 'CL_0110',
          name: 'myCloset',
          url: '/CL/myCloset',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '나의 옷장(코디북)',
          id: 'CL_0111',
          name: 'codiBook',
          url: '/CL/codiBook',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '코디 레이아웃 선택',
          id: 'CL_0120',
          name: 'codiLayout',
          url: '/CL/codiLayout',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '코디하기',
          id: 'CL_0121',
          name: 'codiEdit',
          url: '/CL/codiEdit',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '코디하기 (상품 선택하기)',
          id: 'CL_0122 ~ CL_0125',
          name: 'codiEdit',
          url: '/CL/codiEdit',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '코디하기 완료',
          id: 'CL_0113',
          name: 'codiComplete',
          url: '/CL/codiComplete',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        /* 삭제된 페이지 {
          divide: '',
          onedepth: '',
          twodepth: '코디 완료 > 쇼핑백 담기',
          id: 'CL_0114',
          name: 'codiAddBag',
          url: '/CL/codiAddBag',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        }, */
        // ///////////////////////////////////////////////// 유료멤버십(TP)
        {
          divide: '유료멤버십(TP)',
          onedepth: '마이페이지',
          twodepth: '더플러스+ 멤버십 안내',
          id: 'TP_0101',
          name: 'thePlusGuide',
          url: '/TP/thePlusGuide',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '더플러스+멤버십 가입 동의',
          id: 'TP_0102',
          name: 'thePlusJoin',
          url: '/TP/thePlusJoin',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '선호 브랜드 선택하기(POPUP)',
          id: 'TP_0103',
          name: '',
          url: '/TP/0103',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '더플러스+멤버십 가입 신청서',
          id: 'TP_0104,TP_0105',
          name: 'thePlusApplication',
          url: '/TP/thePlusApplication',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '서비스(결제/가입) 유의사항(POPUP)',
          id: 'TP_0106',
          name: '',
          url: '/TP/0106',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '더플러스+ 이용약관(POPUP)',
          id: 'TP_0107',
          name: '',
          url: '/TP/0107',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '더플러스⁺ 가입동의 내에 유의사항(POPUP)',
          id: 'TP_0106_1',
          name: '',
          url: '/TP/0106_1',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '더플러스⁺ 가입동의 내에 이용약관(POPUP)',
          id: 'TP_0107_1',
          name: '',
          url: '/TP/0107_1',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '더플러스+ 멤버십 가입 완료',
          id: 'TP_0111',
          name: 'thePlusJoinComplete',
          url: '/TP/thePlusJoinComplete',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '더플러스+ 멤버십 재가입 완료',
          id: 'TP_0112',
          name: 'thePlusJoinReComplete',
          url: '/TP/thePlusJoinReComplete',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '더플러스+ 멤버십 gate',
          id: 'TP_0201,TP_0203 ~ TP_0209',
          name: 'thePlusGate',
          url: '/TP/thePlusGate',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: ' 더플러스⁺ 플러스맵 이용권 (popup)',
          id: 'TP_0202',
          name: '',
          url: '/TP/0202',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '더플러스+ 리워드 획득 - 2개동시획득 typ1(POPUP)',
          id: 'TP_0220',
          name: '',
          url: '/TP/0220',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '더플러스+ 리워드 획득 - 2개동시획득 typ2(POPUP)',
          id: 'TP_0221',
          name: '',
          url: '/TP/0221',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },        
        {
          divide: '',
          onedepth: '',
          twodepth: '더플러스+ 리워드 획득 - 쿠폰(POPUP)',
          id: 'TP_0222',
          name: '',
          url: '/TP/0222',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },        
        {
          divide: '',
          onedepth: '',
          twodepth: '더플러스+ 리워드 획득 - 마일리지(POPUP)',
          id: 'TP_0223',
          name: '',
          url: '/TP/0223',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '더플러스+ 리워드 내역',
          id: 'TP_0240,TP_0243',
          name: 'thePlusReward',
          url: '/TP/thePlusReward',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '더플러스+ 리워드 상품 배송조회',
          id: 'TP_0241',
          name: 'thePlusDelivery',
          url: '/TP/thePlusDelivery',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '배송조회(POPUP)',
          id: 'TP_0244',
          name: '',
          url: '/TP/0244',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '더플러스+ 설정',
          id: 'TP_0400',
          name: 'thePlusMemberSet',
          url: '/TP/thePlusMemberSet',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '더플러스+ 멤버십 정기 결제 관리',
          id: 'TP_0401,TP_0402,TP_0403',
          name: 'thePlusPay',
          url: '/TP/thePlusPay',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '더플러스+ 멤버십 결제 카드 변경완료(POPUP)',
          id: 'TP_0405',
          name: '',
          url: '/TP/0405',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '더플러스+ 멤버십 결제 완료(POPUP)',
          id: 'TP_0406',
          name: '',
          url: '/TP/0406',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '더플러스+ 멤버십 결제 내역(POPUP)',
          id: 'TP_0407',
          name: '',
          url: '/TP/0407',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '더플러스+ 멤버십 해지(POPUP)',
          id: 'TP_0450',
          name: '',
          url: '/TP/0450',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '더플러스+ 멤버십 해지하기(POPUP)',
          id: 'TP_0451',
          name: '',
          url: '/TP/0451',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '더플러스+ 멤버십 해지사유(POPUP)',
          id: 'TP_0452,TP_0453',
          name: '',
          url: '/TP/0452',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '멤버십 해지하기 - 해지 가능 회원 case(POPUP)',
          id: 'TP_0454',
          name: '',
          url: '/TP/0454',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '멤버십 해지하기 - 해지 불가능 회원 case(POPUP)',
          id: 'TP_0455',
          name: '',
          url: '/TP/0455',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '더플러스+ 소식',
          id: 'TP_0500',
          name: 'thePlusNews',
          url: '/TP/thePlusNews',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '더플러스+ 이벤트(진행중/지난 이벤트)',
          id: 'TP_0501,TP_0502',
          name: 'thePlusEvent',
          url: '/TP/thePlusEvent',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '더플러스+ 이벤트 상세',
          id: 'TP_0503',
          name: 'thePlusEventDetail',
          url: '/TP/thePlusEventDetail',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '더플러스+ 공지사항',
          id: 'TP_0504',
          name: 'thePlusNotice',
          url: '/TP/thePlusNotice',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '더플러스+ 공지사항 상세',
          id: 'TP_0505',
          name: 'thePlusNoticeDetail',
          url: '/TP/thePlusNoticeDetail',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },

        
        // ///////////////////////////////////////////////// 공통(CP)
        {
          divide: '공통(CP)',
          onedepth: 'Footer',
          twodepth: '서비스이용약관-더한섬이용약관',
          id: 'CP_0201',
          name: 'serviceTheHandsome',
          url: '/CP/serviceTheHandsome',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: ' 서비스이용약관-한섬통합멤버십이용약관',
          id: 'CP_0202',
          name: 'serviceHandsomeMember',
          url: '/CP/serviceHandsomeMember',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '서비스이용약관-한섬e-Gift Card이용약관',
          id: 'CP_0203',
          name: 'serviceEGiftCard',
          url: '/CP/serviceEGiftCard',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '서비스이용약관-한섬 케어 플러스 이용약관',
          id: 'CP_0204',
          name: 'serviceCarePlus',
          url: '/CP/serviceCarePlus',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '개인정보처리방침-더한섬닷컴',
          id: 'CP_0205',
          name: 'privacyPolicyTheHandsome',
          url: '/CP/privacyPolicyTheHandsome',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '개인정보처리방침-㈜한섬',
          id: 'CP_0206',
          name: 'privacyPolicyHandsome',
          url: '/CP/privacyPolicyHandsome',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '개인정보처리방침-한섬통합멤버십개인정보처리방침',
          id: 'CP_0207',
          name: 'privacyPolicyMember',
          url: '/CP/privacyPolicyMember',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '이전 서비스 약관(POPUP)',
          id: 'CP_0201',
          name: '',
          url: '/CP/0201',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '이전 개인정보처리방침(POPUP)',
          id: 'CP_0205',
          name: '',
          url: '/CP/0205',
          statusPub: '',
          statusPlan: '',
          description: [],
          publisher: '',
        },
        {
          divide: '',
          onedepth: '[무형상품]',
          twodepth: '개인정보처리방침(POPUP)',
          id: 'CP_0204',
          name: '',
          url: '/CP/0204',
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
        { name: '한상훈', path: 'hsh' },
        { name: '송보연', path: 'sby' },
        { name: '유준형', path: 'yjh' },
        { name: '이소희', path: 'lsh' },
        { name: '유선화', path: 'ysh' },
        { name: '조아라', path: 'jar' },
        { name: '고영우', path: 'kyw' },
        { name: '정찬근', path: 'jcg' },
        { name: '박형석', path: 'phs' },
      ]
      const alen = arr.length
      let json, list, len, a, i, item, target, name, str, cls

      for (a = 0; a < alen; a++) {
        name = arr[a].name
        json = require('~/pages/guide/' + arr[a].path + '.json')
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
        if (item.statusPub === 'complete' || item.statusPub === 'pass') {
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

.table-type2 {
  margin-top:30px;
  h2 {font-size:18px;padding-bottom:5px;}
  .guide_table { border-top: 2px solid #414040;}
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
tr[divide='전시(DP)']:not(.hide) + tr[divide='전시(DP)'] .divide,
tr[divide='공통(CP)']:not(.hide) + tr[divide='공통(CP)'] .divide,
tr[divide='회원(ME)']:not(.hide) + tr[divide='회원(ME)'] .divide,
tr[divide='고객만족(CS)']:not(.hide) + tr[divide='고객만족(CS)'] .divide,
tr[divide='e기프트(GC)']:not(.hide) + tr[divide='e기프트(GC)'] .divide,
tr[divide='상품전시(DP)']:not(.hide) + tr[divide='상품전시(DP)'] .divide,
tr[divide='상품관리(PM)']:not(.hide) + tr[divide='상품관리(PM)'] .divide,
tr[divide='마케팅(MK)']:not(.hide) + tr[divide='마케팅(MK)'] .divide,
tr[divide='케어플러스 세탁(HC)']:not(.hide) + tr[divide='케어플러스 세탁(HC)'] .divide,
tr[divide='수선(HR)']:not(.hide) + tr[divide='수선(HR)'] .divide,
tr[divide='주문(OR)']:not(.hide) + tr[divide='주문(OR)'] .divide,
tr[divide='옷장(CL)']:not(.hide) + tr[divide='옷장(CL)'] .divide,
tr[divide='유료멤버십(TP)']:not(.hide) + tr[divide='유료멤버십(TP)'] .divide{display:none;}
tr[divide='회원(GP_ME)']:not(.hide) + tr[divide='회원(GP_ME)'] .divide{display:none;}
</style>
