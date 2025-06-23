<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <!-- [퍼블수정]23.02.17 menuList 추가 -->
      <CommonContentsLeftMenu :title="'마이페이지'" :left-data="menuList"></CommonContentsLeftMenu>
      <div class="my-page-r-box content-QnA"><!-- 마이페이지 -->
        <div class="cmp-page-tit pb-40">
          <h2 class="tit">상품 Q&A</h2>
        </div>

        <div class="cmp-info info-type1">
          <p class="cmp-font">6개월 이후 문의내역은 자동삭제 됩니다.</p>
        </div>

        <!-- 날짜 검색 -->
        <v-layout row align-center justify-space-between class="mt-30">
          <div class="cmp-line-radio">
            <div class="radio-item">
              <input id="dateRadio0" type="radio" name="dateRadio1-1" checked />
              <label for="dateRadio0">1주일</label>
            </div>
            <div class="radio-item">
              <input id="dateRadio1" type="radio" name="dateRadio1-1" />
              <label for="dateRadio1">1개월</label>
            </div>
            <div class="radio-item">
              <input id="dateRadio2" type="radio" name="dateRadio1-1" />
              <label for="dateRadio2">3개월</label>
            </div>
          </div>
          <CommonCalendarBox />
        </v-layout>
        <!-- // 날짜 검색 -->

        <div class="cmp-sub-tit small mt-30">
          <h3 class="cmp-font c-light-gray fnt-14">{{QnAList.length}}건</h3>
        </div>
        <div class="product-row-table">
          <table v-if="QnAList.length > 0">
            <caption>상품리스트</caption>
            <colgroup>
              <col width="260px"/>
              <col width="auto"/>
              <col width="138px"/>
              <col width="128px"/>
              <col width="48px"/>
            </colgroup>
            <thead>
              <tr>
                <th>상품명</th>
                <th>문의내용</th>
                <th>작성일</th>
                <th>처리현황</th>
                <th class="pw-0"><span class="ir">접기</span></th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, index) in QnAList">
                <tr :key="index">
                  <td colspan="5" class="inside-table">
                    <v-expansion-panels accordion class="cmp-acc">
                      <v-expansion-panel>
                        <v-expansion-panel-header>
                          <table>
                            <colgroup>
                              <col width="260px"/>
                              <col width="auto"/>
                              <col width="138px"/>
                              <col width="128px"/>
                              <col width="48px"/>
                            </colgroup>
                            <tbody>
                              <tr>
                                <td class="pw-0">
                                  <nuxt-link :to="item.link" class="product-row-unitInfo">
                                    <div class="product-image" :class="{'sold-out':item.sold_out}">
                                      <v-img :src="item.image" :alt="item.product_name" />
                                      <div v-if="item.sold_out" class="sold-out-txt">SOLD OUT</div>
                                    </div>
                                    <div class="product-info-cnt">
                                      <div class="product-brand">{{item.brand_name}}</div>
                                      <div class="product-name">{{item.product_name}}</div>
                                    </div>
                                  </nuxt-link>
                                </td>
                                <td class="text-left inquiry-title pw-0" :class="{'lock':item.lock}">
                                  <p>
                                    <span>{{item.inquiry_title}}</span>
                                    <i class="cmp-icon i-locked cmp-icon-18">locked</i>
                                  </p>
                                </td>
                                <td>
                                  <p>{{item.date}}</p>
                                </td>
                                <td>
                                  <p v-if="item.inquiry_answer == null" class="cmp-font c-blue">답변대기</p>
                                  <p v-else class="cmp-font">답변완료</p>
                                </td>
                                <td class="pw-0"></td>
                              </tr>
                            </tbody>
                          </table>
                          <template #actions>
                            <i class="cmp-icon-etc cmp-icon-down">열기/닫기</i>
                          </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                          <!-- 질문 -->
                          <div class="question">
                            <div class="QnA-title">
                              <p class="cmp-font fnt-20 bold">Q</p>
                            </div>
                            <!-- 상담만족도 조사 (fnt-14  >> fnt-16) 클래스 변경-->
                            <p class="cmp-font fnt-16 mt-10 mb-20" v-html="newLine(item.inquiry)"></p>
                            <ul v-if="item.attachFileList !== null" class="attach-file-list">
                              <li v-for="(item2, index2) in item.attachFileList" :key="index2" class="file-cnt">
                                <div class="file">
                                  <v-img  :src="item2" aspect-ratio="1" alt="첨부 파일"></v-img>
                                </div>
                              </li>
                            </ul>
                            <div class="btn-items text-right mt-20">
                              <button v-if="item.inquiry_answer == null" type="button" class="btn">수정</button>
                              <button type="button" class="btn">삭제</button>
                            </div>
                          </div>
                          <!-- //질문 -->

                          <!-- 답변 -->
                          <div v-if="item.inquiry_answer !== null" class="answer">
                            <div class="QnA-title">
                              <p class="cmp-font fnt-20 bold">A</p>
                            </div>
                            <!-- 상담만족도 조사 (fnt-16) 클래스 추가-->
                            <p class="cmp-font fnt-16 mt-4" v-html="newLine(item.inquiry_answer)"></p>
                          </div>
                          <!-- //답변 -->

                          <!-- 상담만족도 조사 -->
                          <div v-if="item.inquiry_answer !== null" class="cs-research-wrap">
                            <dl class="inner">
                              <dt class="tit">고객님의 문의는 잘 해결 되셨나요? </dt>
                              <dd class="txt">더 좋은 서비스로 보답하고자 이용 중 느낀 고객님의 소중한의견을 듣고자 합니다. <br />만족도 조사 버튼을 통해 참여해 주세요.</dd>
                            </dl>
                            <v-btn color="primary">만족도 조사</v-btn>  
                          </div>
                          <!-- //상담만족도 조사 -->
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
          <CommonNoData v-else class="border-t1" msg="문의내역이 없습니다."></CommonNoData>
          <!-- 디자인 확인용 -->
          <CommonNoData class="border-t1" msg="문의내역이 없습니다."></CommonNoData>
          <!-- // 디자인 확인용 -->
        </div>

        <ProductListPaging />
        
      </div>
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import EventBus from '~/api/common/EventBus'
export default {
  components: {
  },
  layout: 'LayoutBasics',
  data() {
    return {
      selectedIndex:0,
      QnAList: [ // 문의내역
        { 
          brand_name: 'FOURM MEN’S LOUNGE',
          product_name: '[BEARBRICK] 사이키델릭 페이즐리',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png', 
          date: '2022.03.17',
          sold_out: false,
          link: '#n',
          inquiry_title: '사이키델릭 페이즐리 상품의 재입고 문의 드립니다.',
          inquiry: '실크소재인지 다른 소재인지 알수 있나요?',
          inquiry_answer: null,
          lock: true,
          attachFileList : [
            'https://img.thehandsome.com/md/publish/dummy/attach-file-img0.png',
            'https://img.thehandsome.com/md/publish/dummy/attach-file-img1.png',
          ],
        },
        {
          brand_name: 'orea',
          product_name: '퓨리파잉 클렌징 폼',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img2.png', 
          date: '2022.03.17',
          sold_out: false,
          link: '#n',
          inquiry_title: '배송 문의',
          inquiry: '실크소재인지 다른 소재인지 알수 있나요? <br> 실크소재인지 다른 소재인지 알수 있나요?',
          inquiry_answer: null,
          lock: false,
          attachFileList: [],
        },
        {
          brand_name: 'orea',
          product_name: '퓨리파잉 클렌징 폼',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img2.png', 
          date: '2022.03.17',
          sold_out: false,
          link: '#n',
          inquiry_title: '소재가 바뀐건가요?',
          inquiry: '실크소재인지 다른 소재인지 알수 있나요?',
          inquiry_answer:'해당 상품은 실크 소재입니다.<br> 단, 정확한 소재 특성은 상품이미지를 참고해 주세요.',
          lock: true,
          attachFileList : [
            'https://img.thehandsome.com/md/publish/dummy/attach-file-img0.png',
            'https://img.thehandsome.com/md/publish/dummy/attach-file-img1.png',
          ],
        },
        { 
          brand_name: 'FOURM MEN’S LOUNGE',
          product_name: '[BEARBRICK] 사이키델릭 페이즐리',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png', 
          date: '2022.03.17',
          sold_out: false,
          link: '#n',
          inquiry_title: '재입고 일정문의 드립니다.',
          inquiry: '실크소재인지 다른 소재인지 알수 있나요?',
          inquiry_answer:'해당 상품은 실크 소재입니다. 단, 정확한 소재 특성은 상품이미지를 참고해 주세요.',
          lock: false,
          attachFileList: [],
        },
        {
          brand_name: 'orea',
          product_name: '퓨리파잉 클렌징 폼',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img2.png', 
          date: '2022.03.17',
          sold_out: false,
          link: '#n',
          inquiry_title: '상품 문의',
          inquiry: '실크소재인지 다른 소재인지 알수 있나요?',
          inquiry_answer:'해당 상품은 실크 소재입니다. 단, 정확한 소재 특성은 상품이미지를 참고해 주세요.',
          lock: true,
          attachFileList : [
            'https://img.thehandsome.com/md/publish/dummy/attach-file-img0.png',
            'https://img.thehandsome.com/md/publish/dummy/attach-file-img1.png',
          ],
        },
      ],
    }
  },
  //   [퍼블수정]23.02.17 menuList 추가
  created() {
    const me = this
    const json = require('~/static/json/mypage_left_menu.json')
    me.menuList = json.list
  },
  methods: {
    newLine(str) {
      return String(str).replace(/(?:\r\n|\r|\n)/g, '</br>')
    },
  },
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/detail.scss'; //페이지 전용 css
</style>