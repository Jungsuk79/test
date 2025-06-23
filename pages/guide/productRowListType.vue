<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <h3 class="guide-tit">쇼핑백 상품 리스트</h3>
      <div class="guide-cnt1">
        <div class="product-row-table">
          <table>
            <caption>상품리스트</caption>
            <colgroup>
              <col style="width:28px;"/>
              <col style="width:352px;"/>
              <col style="width:222px;"/>
              <col style="width:auto;"/>
              <col style="width:84px;"/> 
            </colgroup>
            <thead>
              <tr>
                <th><span class="ir">선택</span></th>
                <th>상품정보</th>
                <th>상품금액</th>
                <th>선택</th>
                <th><span class="ir">삭제/찜</span></th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, index) in prdData">
                <tr :key="index" :class="{'bottom-none':item.notice!==null}">
                  <td class="td-t"><v-checkbox label="선택" class="cmp-form-checkbox label-hide"></v-checkbox></td>
                  <td>
                    <nuxt-link :to="item.link" class="product-row-unitInfo">
                      <div class="product-image" :class="{'sold-out':item.sold_out}">
                        <v-img :src="item.image" :alt="item.product_name" />
                        <div v-if="item.sold_out" class="sold-out-txt">SOLD OUT</div>
                      </div>
                      <div class="product-info-cnt">
                        <div class="product-brand">{{item.brand_name}}</div>
                        <div class="product-name">{{item.product_name}}</div>
                        <div v-if="item.options" class="product-option">
                          <span v-for="(item2,index2) in item.options" :key="index2" class="option">{{item2}}</span>
                        </div>
                      </div>
                    </nuxt-link>
                  </td>
                  <td>
                    <nuxt-link :to="item.link" class="product-row-unitPrice">
                      <div class="product-sellprice"><strong>{{item.sell_price | number}}</strong>원</div>
                      <div v-if="item.price || item.discount" class="product-price-cnt">
                        <del class="product-price-origin">{{item.price | number}}원</del>
                        <!-- eslint-disable -->
                        <span class="product-discount">{{item.discount}}<em>%</em></span>
                        <!-- eslint-disable -->
                      </div>
                    </nuxt-link>
                  </td>
                  <td>
                    <v-btn v-if="item.sold_out" outlined small color="normal" width="160">이런 상품 어때요?</v-btn>
                    <div v-else class="product-row-unitBtn">
                      <v-btn outlined small color="normal">옵션변경</v-btn>
                      <v-btn v-if="item.gift" outlined small color="normal">선물하기</v-btn>
                      <v-btn small color="primary">바로구매</v-btn>
                    </div>
                  </td>
                  <td>
                    <div class="product-row-unitBtn">
                      <v-btn icon>
                        <span v-cmp-icon="{ size: 18, name: 'close'}">상품 삭제</span>
                      </v-btn>
                      <v-btn icon @click="item.zzim = !item.zzim">
                        <span v-show="item.zzim" v-cmp-icon="{ size: 18, name: 'heartOn'}">찜 삭제</span>
                        <span v-show="!item.zzim" v-cmp-icon="{ size: 18, name: 'heartOff'}">찜 추가</span>
                      </v-btn>
                    </div>
                  </td>
                </tr>
                <tr v-if="item.notice">
                  <td>&nbsp;</td>
                  <td colspan="4" class="td-l">
                    <div class="product-row-unitNotice">
                      <ul class="product-notice">
                        <!-- eslint-disable -->
                        <li v-for="(item2, index2) in item.notice" v-html="item2"></li>
                        <!-- eslint-disable -->
                      </ul>
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
      
      <h3 class="guide-tit">주문조회 상세 상품 리스트</h3>
      <div class="guide-cnt1">
        <div class="product-row-table">
          <table>
            <caption>상품리스트</caption>
            <colgroup>
              <col style="width:354px;"/>
              <col style="width:200px;"/>
              <col style="width:auto;"/>
              <col style="width:206px;"/> 
            </colgroup>
            <thead>
              <tr>
                <th>상품정보</th>
                <th>상품금액</th>
                <th>주문상태</th>
                <th>확인/신청</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, index) in prdDetailData">
                <tr :key="index" :class="{'bottom-none':item.notice!==null}">
                  <td>
                    <nuxt-link :to="item.link" class="product-row-unitInfo">
                      <div class="product-image" :class="{'sold-out':item.sold_out}">
                        <v-img :src="item.image" :alt="item.product_name" />
                        <div v-if="item.sold_out" class="sold-out-txt">SOLD OUT</div>
                      </div>
                      <div class="product-info-cnt">
                        <div class="product-brand">{{item.brand_name}}</div>
                        <div class="product-name">{{item.product_name}}</div>
                        <div v-if="item.options" class="product-option">
                          <span v-for="(item2,index2) in item.options" :key="index2" class="option">{{item2}}</span>
                        </div>
                      </div>
                    </nuxt-link>
                  </td>
                  <td>
                    <nuxt-link :to="item.link" class="product-row-unitPrice">
                      <div class="product-sellprice"><strong>{{item.sell_price | number}}</strong>원</div>
                      <div v-if="item.price || item.discount" class="product-price-cnt">
                        <del class="product-price-origin">{{item.price | number}}원</del>
                        <!-- eslint-disable -->
                        <span class="product-discount">{{item.discount}}<em>%</em></span>
                        <!-- eslint-disable -->
                      </div>
                    </nuxt-link>
                  </td>
                  <td>
                    <div v-if="index == 0" class="cmp-font fnt-16 c-blue">주문완료</div><!-- 주문완료 CASE -->
                    <div v-if="index == 1" class="cmp-font fnt-16 c-blue">상품 준비중</div><!-- 배송중 CASE -->
                    <div v-if="index == 2" class="cmp-font fnt-16 c-blue">배송중</div><!-- 배송중 CASE -->
                    <div v-if="index == 3"><!-- 주문취소 CASE -->
                      <p class="cmp-font fnt-16 c-blue">주문취소</p>
                      <p class="cmp-font fnt-16 c-gray">2021.10.30</p>
                    </div>
                    <div v-if="index == 4"><!-- 반품접수 CASE -->
                      <p class="cmp-font fnt-16 c-blue">반품접수</p>
                      <p class="cmp-font fnt-16 c-gray">2021.10.30</p>
                    </div>
                    <div v-if="index == 5"><!-- 반품신청 CASE -->
                      <p class="cmp-font fnt-16 c-blue">반품신청</p>
                      <p class="cmp-font fnt-16 c-gray">2021.10.30</p>
                    </div>
                    <div v-if="index == 6"><!-- 교환신청 CASE -->
                      <p class="cmp-font fnt-16 c-blue">교환신청</p>
                      <p class="cmp-font fnt-16 c-gray">2021.10.30</p>
                    </div>
                    <div v-if="index == 7" class="cmp-font fnt-16">배송완료</div><!-- 배송완료 CASE -->
                    <div v-if="index == 8" class="cmp-font fnt-16 c-blue">교환(대기)</div><!-- 교환(대기) CASE -->
                    <div v-if="index == 9" class="cmp-font fnt-16 c-blue"><!-- 교환완료 CASE -->
                      <p class="cmp-font fnt-16">교환완료</p>
                      <p class="cmp-font fnt-16 c-gray">{{item2.request_date}}</p>
                    </div>
                  </td>
                  <td>
                    <div v-if="index == 0" class="product-row-unitBtn"><!-- 주문완료 CASE -->
                      <v-btn outlined small color="normal">주문 취소</v-btn>
                      <v-btn outlined small color="normal">옵션 변경</v-btn>
                    </div>
                    <div v-if="index == 2" class="product-row-unitBtn"><!-- 배송중 CASE -->
                      <v-btn outlined small color="normal">배송 조회</v-btn>
                      <v-btn outlined small color="normal">수령 확인</v-btn>
                    </div>
                    <div v-if="index == 3" class="product-row-unitBtn"><!-- 주문취소 CASE -->
                      <v-btn outlined small color="normal">취소 상세보기</v-btn>
                    </div>
                    <div v-if="index == 4" class="product-row-unitBtn"><!-- 반품접수 CASE -->
                      <v-btn outlined small color="normal">반품 상세보기</v-btn>
                    </div>
                    <div v-if="index == 5" class="product-row-unitBtn"><!-- 반품신청 CASE -->
                      <v-btn outlined small color="normal">반품 상세보기</v-btn>
                    </div>
                    <div v-if="index == 6" class="product-row-unitBtn"><!-- 교환신청 CASE -->
                      <v-btn outlined small color="normal">교환 상세보기</v-btn>
                      <v-btn outlined small color="normal">상품평 작성</v-btn>
                    </div>
                    <div v-if="index == 7" class="product-row-unitBtn"><!-- 배송완료 CASE -->
                      <v-btn outlined small color="normal">배송 조회</v-btn>
                      <v-btn outlined small color="normal">상품평 작성</v-btn>
                      <v-btn outlined small color="normal">교환 신청</v-btn>
                      <v-btn outlined small color="normal">반품 신청</v-btn>
                    </div>
                    <div v-if="index == 8" class="product-row-unitBtn"><!-- 교환(대기) CASE -->
                      <v-btn outlined small color="normal">배송비 결제</v-btn>
                    </div>
                    <div v-if="index == 9" class="product-row-unitBtn"><!-- 교환완료 CASE -->
                      <v-btn outlined small color="normal">교환 상세보기</v-btn>
                      <v-btn outlined small color="normal">상품평 작성</v-btn>
                      <v-btn outlined small color="normal">교환 신청</v-btn>
                      <v-btn outlined small color="normal">반품 신청</v-btn>
                    </div>
                  </td>
                </tr>
                <tr v-if="item.notice">
                  <td colspan="4" class="td-l">
                    <div class="product-row-unitNotice">
                      <ul class="product-notice">
                        <!-- eslint-disable -->
                        <li v-for="(item2, index2) in item.notice" v-html="item2"></li>
                        <!-- eslint-disable -->
                      </ul>
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>

      <h3 class="guide-tit">주문조회 상세 메장수령 상품 리스트</h3>
      <div class="guide-cnt1">
        <div class="product-row-table">
          <table>
            <caption>상품리스트</caption>
            <colgroup>
              <col style="width:354px;"/>
              <col style="width:200px;"/>
              <col style="width:auto;"/>
              <col style="width:206px;"/> 
            </colgroup>
            <thead>
              <tr>
                <th>상품정보</th>
                <th>상품금액</th>
                <th>주문상태</th>
                <th>매장수령교환권</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, index) in prdDetailData">
                <tr :key="index">
                  <td>
                    <nuxt-link :to="item.link" class="product-row-unitInfo">
                      <div class="product-image" :class="{'sold-out':item.sold_out}">
                        <v-img :src="item.image" :alt="item.product_name" />
                        <div v-if="item.sold_out" class="sold-out-txt">SOLD OUT</div>
                      </div>
                      <div class="product-info-cnt">
                        <div class="product-brand">{{item.brand_name}}</div>
                        <div class="product-name">{{item.product_name}}</div>
                        <div v-if="item.options" class="product-option">
                          <span v-for="(item2,index2) in item.options" :key="index2" class="option">{{item2}}</span>
                        </div>
                      </div>
                    </nuxt-link>
                  </td>
                  <td>
                    <nuxt-link :to="item.link" class="product-row-unitPrice">
                      <div class="product-sellprice"><strong>{{item.sell_price | number}}</strong>원</div>
                      <div v-if="item.price || item.discount" class="product-price-cnt">
                        <del class="product-price-origin">{{item.price | number}}원</del>
                        <!-- eslint-disable -->
                        <span class="product-discount">{{item.discount}}<em>%</em></span>
                        <!-- eslint-disable -->
                      </div>
                    </nuxt-link>
                  </td>
                  <td>
                    <div v-if="index == 4" class="cmp-font fnt-16">수령완료</div>
                    <div v-else class="cmp-font fnt-16 c-blue">수령일확정</div>
                  </td>
                  <td>
                      <p class="cmp-font fnt-16 mb-20">202110250012356445</p>
                      <!-- 매장수령교환권 재발송 -->
                      <v-btn depressed outlined :ripple="false" color="normal">매장수령교환권 재발송</v-btn>
                      <p class="cmp-font fnt-14 mt-10">발송 횟수 : 0 / 3회</p>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
      <h3 class="guide-tit">주문조회 상세 증정&amp;사은품</h3>
      <div class="guide-cnt1">
        <div class="product-row-table">
          <table>
            <caption>상품리스트</caption>
            <colgroup>
              <col style="width:auto;"/>
              <col style="width:200px;"/>
              <col style="width:150px;"/> 
            </colgroup>
            <thead>
              <tr>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, index) in giftsData">
                <tr :key="index">
                  <td>
                    <div class="product-row-unitInfo gifts-type">
                      <div class="product-image">
                        <div v-if="item.type==='mileage'" class="mileage-txt">
                          <div class="txt"><strong>{{item.mileage | number}}</strong>M</div>
                        </div>
                        <v-img v-else :src="item.image" :alt="item.type==='event'?'사은품 이미지':'증정품 이미지'"></v-img>
                      </div>
                      <div class="product-info-cnt">
                        <div v-if="item.type==='mileage'" class="product-brand">마일리지 적립</div>
                        <div v-else class="product-brand">{{item.name}}</div>
                        <div v-if="item.type==='mileage'" class="product-name">{{item.accrual_date + '이후 적립'}}</div>
                        <div v-else class="product-name">{{item.desc}}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div v-if="index == 0">
                      <span class="cmp-font fnt-16 c-blue">상품 내 배송</span>
                    </div>
                    <div v-if="index == 1">
                      <span class="cmp-font fnt-16 c-blue">사은품 상품준비중</span>
                    </div>
                    <div v-if="index == 3">
                      <span class="cmp-font fnt-16 c-blue">사은품 배송중</span>
                    </div>
                    <div v-if="index == 4">
                      <span class="cmp-font fnt-16">사은품 배송완료</span>
                    </div>
                  </td>
                  <td>
                    <div v-if="index == 1 | index == 3 | index == 4" class="product-row-unitBtn">
                      <v-btn outlined small color="normal">배송 조회</v-btn>
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 팝업 -->
      <!-- 매장수령교환권 재발송 -->
      <v-dialog v-model="MarketTicketModel[0].open">
        <DialogBasic header-title=" " :width="448" @hide="closeMarketTicket(0)">
          <template #body>
            <div class="test-popup-contents">매장수령교환권을 재발송 하시겠습니까?​<br/>확인을 클릭하시면 고객님의 핸드폰으로 재발송 안내문자가 발송됩니다.​</div>
            <div class="popup-btn-box">
              <v-btn outlined large color="primary">취소</v-btn>
              <v-btn large color="primary">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //매장수령교환권 재발송 -->
      <!-- 매장수령교환권 종료 -->
      <v-dialog v-model="MarketTicketModel[1].open">
        <DialogBasic header-title="" @hide="closeMarketTicket(1)">
          <template #body>
            <div class="test-popup-contents">총 3회 재발송이 진행되어 더 이상 발송 하실 수 없습니다.</div>
            <div class="popup-btn-box">
              <v-btn large color="primary">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //매장수령교환권 종료 --> 
    </div>
  </div>
</template>

<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue' // 팝업기본

export default {
  components : {
    DialogBasic,
  },
  layout: 'LayoutBasics',
  // 정렬버튼
  data: () => ({
    user_name: '김한섬',
    MarketTicketModel : [{open : false},{open : false}],
    prdDetailData: [
      // 상품 상세 데이터
      {
        brand_name: 'MINE',
        product_name: '컬러 블록 니트 가디건 컬러 니트',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
        options: ['BLACK', '90', '2개'],
        sell_price: '355000',
        discount: '20',
        price: '366000',
        link: '#n',
        notice: ['인기 상품으로 배송 지연 예상 (평일 기준 5일 이상 소요)'],
        sold_out: false,
        zzim : false,
        market_ticket_count: 0,
        market_ticket_max: 3,
      },
      {
        brand_name: 'FOURM MEN’S LOUNGE',
        product_name: '[BEARBRICK] 사이키델릭 페이즐리',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
        options: ['CHARCOAL GRAY', '90', '1개'],
        sell_price: '355000',
        discount: null,
        price: null,
        link: '#n',
        notice: null,
        sold_out: false,
        zzim : false,
      },
      {
        brand_name: 'orea',
        product_name: '퓨리파잉 클렌징 폼',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img2.png',
        options: ['MULTI', 'FR', '1개'],
        sell_price: '355000',
        discount: null,
        price: null,
        link: '#n',
        notice: ['오에라 전용박스 별도배송'],
        sold_out: false,
        zzim : false,
      },
      {
        brand_name: 'FOURM STUDIO',
        product_name: '[예약판매] 스티치 레더 스커트',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img3.png',
        options: ['BLACK', '90', '1개'],
        sell_price: '355000',
        discount: null,
        price: null,
        link: '#n',
        notice:['2021년 12월 17일부터 순차 배송 (제작 상황에 따라 변경 가능)'],
        sold_out: false,
        zzim : false,
      },
      {
        brand_name: 'FOURM STUDIO',
        product_name: '크리스탈 니트 가디건',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
        options: ['KAHKI', '90', '1개'],
        sell_price: '29000',
        link: '#n',
        notice: null,
        sold_out: true,
        zzim : false,
      }
    ],
    prdData: [
      // 택배 리스트
      {
        brand_name: 'MINE',
        product_name: '컬러 블록 니트 가디건 컬러 니트',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
        options: ['BLACK', '90', '2개'],
        sell_price: '355000',
        discount: '20',
        price: '366000',
        link: '#n',
        notice: ['인기상품으로 전국 매장에서 수급 후 배송 예정','불량 등의 이유로 취소될 수 있음','(평일 기준 5일 이상 소요)'],
        gift: true,
        sold_out: false,
        zzim : false,
      },
      {
        brand_name: 'FOURM MEN’S LOUNGE',
        product_name: '[BEARBRICK] 사이키델릭 페이즐리',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
        options: ['CHARCOAL GRAY', '90', '1개'],
        sell_price: '355000',
        discount: null,
        price: null,
        link: '#n',
        notice: null,
        gift: false,
        sold_out: false,
        zzim : false,
      },
      {
        brand_name: 'orea',
        product_name: '퓨리파잉 클렌징 폼',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img2.png',
        options: ['MULTI', 'FR', '1개'],
        sell_price: '355000',
        discount: null,
        price: null,
        link: '#n',
        notice: ['오에라 전용박스 별도배송'],
        gift: true,
        sold_out: false,
        zzim : false,
      },
      {
        brand_name: 'FOURM STUDIO',
        product_name: '[예약판매] 스티치 레더 스커트',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img3.png',
        options: ['BLACK', '90', '1개'],
        sell_price: '355000',
        discount: null,
        price: null,
        link: '#n',
        notice:['2021년 12월 17일부터 순차 배송 (제작 상황에 따라 변경 가능)'],
        gift: true,
        sold_out: false,
        zzim : false,
      },
      {
        brand_name: 'FOURM STUDIO',
        product_name: '크리스탈 니트 가디건',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
        options: ['KAHKI', '90', '1개'],
        sell_price: '29000',
        link: '#n',
        notice:['리퀴드 퍼퓸바 전용 박스 별도 배송'],
        gift: true,
        sold_out: true,
        zzim : false,
      }
    ],
    giftsData : [ // 증정품,사은품
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-6.png',
        name : '오에라 화장품 샘플',
        desc : '오에라 화장품 샘플 100만원 이상 구매시 프리미엄 샘플 세트(파우치+에센스30ml)을 증정합니다.',
      },
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-5.png',
        name : '톰그레이하운드 X 콤팩트레코드바 미니 에코백',
        date : '05월 13일 ~ 소진 시 까지',
        desc : '정상 30만원 이상 구매 고객님께 구매 사은품으로 톰그레이하운드 X 콤팩트레 미니 에코백을 드립니다.',
      },
      {
        type : 'mileage',
        mileage : 100000,
        accrual_date: '7월 30일',
        date : '6월 14일 ~ 6월 30일까지',
        desc : '폼더스토어, 폼맨즈라운지 IPANEMA 상품 구매 고객님께 100,000 마일리지 적립해 드립니다.',
      },
      {
        type : 'event',
        link: '#n',
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-1.png',
        name : 'IPANEMA 에코백 외 2건',
        date : '6월 14일 ~ 소진 시 까지',
        desc : '폼더스토어, 폼맨즈라운지 IPANEMA 상품 구매 고객님께 사은품으로 IPANEM 에코백을 드립니다.',
      },
      {
        type : 'event',
        link: '#n',
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-1.png',
        name : 'IPANEMA 에코백 외 2건',
        date : '6월 14일 ~ 소진 시 까지',
        desc : '폼더스토어, 폼맨즈라운지 IPANEMA 상품 구매 고객님께 사은품으로 IPANEM 에코백을 드립니다.',
      },
    ],
  }),
  methods: {
    openMarketTicket(idx) {
      const me = this
      me.MarketTicketModel[idx].open = true
    },
    closeMarketTicket(idx) {
      const me = this
      me.MarketTicketModel[idx].open = false
    },
  },
}
</script>
<style lang="scss" scoped>
  .guide-tit{font-size:1.8rem;margin-bottom:20px;}
  .guide-cnt1{width:880px;margin-bottom:40px;}
  .guide-cnt2{}
</style>
