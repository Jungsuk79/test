<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap myevent-historyList">
      <!-- [퍼블수정]23.02.17 menuList 추가 -->
      <CommonContentsLeftMenu :title="'마이페이지'" :left-data="menuList"></CommonContentsLeftMenu>
      <div class="my-page-r-box">
        <div class="cmp-page-tit">
          <h2 class="tit">참여내역</h2>
        </div> 

        <div class="cmp-tabs tabs-actionTop">
        <v-tabs v-model="tab" fixed-tabs>
          <v-tab>이벤트 참여</v-tab>
          <v-tab>사은품 자동 응모</v-tab>
        </v-tabs>
      </div>
      <v-tabs-items v-model="tab" touchless>
        <!-- 이벤트 참여 -->
        <v-tab-item :transition="false">
          <v-layout align-center justify-space-between class="sorting-area">
            <v-btn outlined color="primary">당첨자 발표 공지</v-btn>
          </v-layout>

          <!-- 날짜 필터 -->
          <v-layout row align-center justify-space-between class="pt-24">
            <div class="cmp-line-radio">
              <div class="radio-item">
                <input id="dateRadio0" type="radio" name="dateRadio" checked />
                <label for="dateRadio0">1주일</label>
              </div>
              <div class="radio-item">
                <input id="dateRadio1" type="radio" name="dateRadio" />
                <label for="dateRadio1">1개월</label>
              </div>
              <div class="radio-item">
                <input id="dateRadio2" type="radio" name="dateRadio" />
                <label for="dateRadio2">3개월</label>
              </div>
            </div>
            <CommonCalendarBox :d1="'2021-09-01'" :d2="'2021-09-01'" />
          </v-layout>
          <!-- // 날짜 필터 -->
          <!-- 검색 필터 -->
          <div class="cmp-sub-tit small mt-30">
            <p class="cmp-font fnt-14 c-gray"><span>0</span>건</p>
            
            <CommonSelectSortBox id="sort1" label-class="cmp-font fnt-13" icon-class="cmp-icon-12">
              <template #optionList>
                  <option value="placeholder">전체</option>
                  <option value="ing">진행중</option>
                  <option value="end">종료</option>
                  <option value="win">당첨</option>
              </template>
            </CommonSelectSortBox>
          </div>
          <!-- //검색 필터 -->

          <!-- 이벤트 내역 -->
          <!-- 종료 -->
          <ul class="myevent-list win-ver">
            <!-- [퍼블수정]25.04.02 가정의달 이벤트 -->
            <!-- 보낸 메세지 카드 보기 CASE -->
            <li>
              <nuxt-link to="#none">
                <div class="thumb">
                  <v-img src="https://img.thehandsome.com/md/publish/event/250401_familyDay/card_1.jpg" alt=""></v-img>
                </div>
              </nuxt-link>
              <div class="all-info">
                <nuxt-link to="#none">
                  <dl class="list-info">
                    <dt>TO LOVE, HANDSOMELY</dt>
                    <dd>2021.12.07 ~ 2021.12.26
                      <span class="c-blue">이벤트 진행중</span>
                    </dd>
                  </dl>
                </nuxt-link>
                <!-- 버튼수정 -->
                <v-btn outlined small color="normal" @click="DialogSendEvent=true" class="event-messege-case">
                  <!-- 0425 수정 -->
                  <span class="cmp-font fnt-14">보낸 메시지 카드 보기</span>
                </v-btn>
              </div>
            </li>
            <v-dialog
              v-model="DialogSendEvent"
            >
              <DialogSendEvent @close="DialogSendEvent=false" />
            </v-dialog>
            <!-- //[퍼블수정]25.04.02 가정의달 이벤트 -->
            <!-- //보낸 메세지 카드 보기 CASE -->
            <template v-for="(item, index) in myEvent_win_list">
              <li :key="index">
                <nuxt-link :to="item.event_kink">
                  <div class="thumb">
                    <v-img :src="item.image" :alt="item.product_name" />
                  </div>
                </nuxt-link>
                <div class="all-info">
                  <nuxt-link :to="item.event_kink">
                    <dl class="list-info">
                      <dt>{{item.event_name}}</dt>
                      <dd>{{item.date}}
                        <span v-if="item.event_status == 'ing'" class="c-blue">이벤트 진행중</span>
                        <span v-if="item.event_status == 'end'">이벤트 종료</span>
                        <!-- [퍼블수정]24.03.26 래플 이벤트 참여 케이스 -->
                        <span v-if="item.event_status == 'failed'">미당첨</span>
                        <span v-if="item.event_status == 'winning'">당첨</span>
                        <!-- // [퍼블수정]24.03.26 래플 이벤트 참여 케이스 -->
                      </dd>
                    </dl>
                  </nuxt-link>
                  <!-- 수령 CASE 1 -->
                  <div v-if="index == 2" class="cmp-info info-type3 mt-20">
                    <!-- 수령할 상품 -->
                    <v-layout row>
                      <p class="cmp-font fnt-14">록시땅 홀리데이 핸드크림</p>
                    </v-layout>
                    <p class="cmp-font c-gray mt-4 fnt-13">2022.01.03 일괄 순차적 발송 예정</p>
                    <!-- //수령할 상품 -->
                    <!-- 수령지 정보 -->
                    <v-layout row flex-start class="mt-16">
                      <p class="cmp-font fnt-14">
                        홍길동1 / 010-****-5678
                        <br>
                        <span class="cmp-label-line c-blue mr-6">기본배송지</span><!-- 230112 이벤트 : 라벨 추가 -->
                        [63354] 서울특별시 강동구 강동대로 193 (성내동) 3층 301호
                      </p>
                      <button class="cmp-font fnt-13 button"><span class="line">수령지 변경</span></button>
                    </v-layout>
                    <p class="cmp-font fnt-12 c-gray mt-6">다른 주소지로 받기를 원하시면 기본배송지를 수정해주세요.</p>
                    <!-- //수령지 정보 -->
                  </div>
                  <!-- // 수령 CASE 1 -->

                  <!-- 수령 CASE 2 -->
                  <div v-if="index == 3" class="cmp-info info-type3 mt-20">
                    <!-- 수령할 상품 -->
                    <v-layout row>
                      <p class="cmp-font fnt-14">록시땅 홀리데이 핸드크림</p>
                      <p class="cmp-font fnt-14">
                        <span>배송완료</span>
                      </p>
                    </v-layout>
                    <!-- //수령할 상품 -->
                    <!-- 수령지 정보 -->
                    <v-layout row flex-start class="mt-16">
                      <p class="cmp-font fnt-14">
                        홍길동1 / 010-****-5678
                        <br>
                        [63354] 서울특별시 강동구 강동대로 193 (성내동) 3층 301호
                      </p>
                    </v-layout>
                    <!-- //수령지 정보 -->
                  </div>
                  <!-- // 수령 CASE 2 -->

                  <!-- 수령 CASE 3 -->
                  <div v-if="index == 4" class="cmp-info info-type3 mt-20">
                    <!-- 수령할 상품 -->
                    <v-layout row>
                      <p class="cmp-font fnt-14">한섬마일리지 1,000M</p>
                    </v-layout>
                    <p class="cmp-font c-gray mt-4 fnt-13">2022.01.03 일괄 순차적 발송 예정</p>
                    <!-- //수령할 상품 -->
                  </div>
                  <!-- // 수령 CASE 3 -->

                  <!-- 수령 CASE 4 -->
                  <div v-if="index == 5" class="cmp-info info-type3 mt-20">
                    <!-- 수령할 상품 -->
                    <v-layout row>
                      <p class="cmp-font fnt-14">한섬마일리지 1,000M</p>
                      <p class="cmp-font fnt-14">
                        <span>지급완료</span>
                      </p>
                    </v-layout>
                    <!-- //수령할 상품 -->
                  </div>
                  <!-- // 수령 CASE 4 -->

                  <!-- [퍼블수정]24.03.26 래플 이벤트 참여 케이스 -->
                  <div v-if="item.event_status == 'winning'" class="cmp-info info-type3 mt-20">
                    <v-layout row>
                      <p class="cmp-font fnt-14">축하합니다. 당첨되셨습니다.<br />[더한섬닷컴 APP > 마이페이지 > 이벤트 참여 내역]을 오프라인 매장 매니저에게<br />제시하신 후 상품을 구매하실 수 있습니다.</p>
                    </v-layout>
                    <p class="cmp-font fnt-14 mt-16">오프라인 매장 주소 : 서울특별시 성동구 OOOOOO</p>
                  </div>
                  <!-- // [퍼블수정]24.03.26 래플 이벤트 참여 케이스 -->
                </div>
              </li>
            </template>
          </ul>
          <!-- //종료 -->
          <CommonNoData msg="참여하신 이벤트가 없습니다."/>
          <!-- // 이벤트 내역 -->
          <ProductListPaging />  
        </v-tab-item>
        <!-- // 이벤트 참여 -->
        <!-- 사은품 자동 응모 -->
        <v-tab-item :transition="false">
        
          <!-- 날짜 필터 -->
          <v-layout row align-center justify-space-between class="mt-30">
            <div class="cmp-line-radio">
              <div class="radio-item">
                <input id="dateRadio2-0" type="radio" name="dateRadio1-2" checked />
                <label for="dateRadio2-0">1주일</label>
              </div>
              <div class="radio-item">
                <input id="dateRadio2-1" type="radio" name="dateRadio1-2" />
                <label for="dateRadio2-1">1개월</label>
              </div>
              <div class="radio-item">
                <input id="dateRadio2-2" type="radio" name="dateRadio1-2" />
                <label for="dateRadio2-2">3개월</label>
              </div>
            </div>
            <CommonCalendarBox :d1="'2021-09-01'" :d2="'2021-09-01'" />
          </v-layout>
          <!-- // 날짜 필터 -->
          <!-- 검색 필터 -->
          <div class="cmp-sub-tit small mt-30">
            <p class="cmp-font fnt-14 c-gray"><span>0</span>건</p>
            <CommonSelectSortBox id="sort1" label-class="cmp-font fnt-13" icon-class="cmp-icon-12">
              <template #optionList>
                  <option value="placeholder">전체</option>
                  <option value="ing">진행중</option>
                  <option value="end">종료</option>
                  <option value="complete">응모완료</option>
              </template>
            </CommonSelectSortBox>
          </div>
          <!-- //검색 필터 -->
          <!-- 목표금액 미달성 -->
          <ul class="myevent-list gift-ver">
            <template v-for="(item, index) in applyGift_list">
              <li :key="index">
                <nuxt-link :to="item.event_kink">
                  <div class="thumb">
                    <v-img :src="item.image" :alt="item.product_name" />
                  </div>
                </nuxt-link>
                <div class="all-info">
                  <nuxt-link :to="item.event_kink">
                    <dl class="list-info">
                      <dt>{{item.event_name}}</dt>
                      <dd>{{item.date}}
                      <span v-if="item.event_status == 'ing'" class="c-blue">행사 진행중</span>
                      <span v-if="item.event_status == 'end'">행사종료</span>
                      </dd>
                    </dl>
                  </nuxt-link>

                  <!-- 목표 금액 -->
                  <div class="status-info">
                    <p class="tit">목표 금액 달성 현황</p>
                    <div class="target-progress">
                      <template>
                        <v-progress-linear
                          background-color="grey"
                          color="blue"
                          :value="(item.status_price) * 100 / (item.target_price)">
                          </v-progress-linear>
                      </template>
                      <div :class="['progress-goal', {on:item.status_price == item.target_price}]"></div>
                    </div>
                    <v-layout justify-space-between class="mt-6">
                      <span class="cmp-font fnt-11 c-blue bold">{{item.status_price | number}}</span>
                      <span class="cmp-font fnt-11 bold">{{item.target_price | number}}</span>
                    </v-layout>
                  </div>
                  <!-- 목표 금액 -->
                  <!-- 나의 구매 내역 -->
                  <v-expansion-panels accordion class="cmp-acc acc-type2">
                    <v-expansion-panel>
                      <v-expansion-panel-header
                        ><span>나의 구매금액 {{item.my_orderPrice | number}}원</span>
                        <span>주문 내역</span>
                        <template #actions>
                          <i class="cmp-icon i-down cmp-icon-12">열기/닫기</i>
                        </template>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <div class="order-number-box no-line">
                          <div v-for="(ist, idx) in item.order_history" :key="idx" class="line-box">
                            <p class="cmp-font fnt-14">주문번호<span class="ml-8 line">{{ist.id}}</span></p>
                            <p class="cmp-font fnt-14">{{ist.price | number}}원</p>
                          </div>
                        </div>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                <!-- // 나의 구매 내역 -->
                </div>
              </li>
            </template>
          </ul>
          <!-- //목표금액 미달성 -->
          <!-- 수령 가능 응모 -->
          <ul class="myevent-list gift-ver">
            <template v-for="(item, index) in applyGift_goal_list">
              <li :key="index">
                <nuxt-link :to="item.event_kink">
                  <div class="thumb">
                    <v-img :src="item.image" :alt="item.product_name" />
                  </div>
                </nuxt-link>
                <div class="all-info">
                  <nuxt-link :to="item.event_kink">
                    <dl class="list-info">
                      <dt>
                        <div class="cmp-labels"><span class="label black c-white">응모</span></div>{{item.event_name}}
                      </dt>
                      <dd>{{item.date}}
                      <span v-if="item.event_status == 'ing'" class="c-blue">행사 진행중</span>
                      <span v-if="item.event_status == 'end'">행사종료</span>
                      </dd>
                    </dl>
                  </nuxt-link>

                  <!-- 수령 CASE 1 (이벤트 진행, 수령 희망, 배송지입력, 발송전) -->
                  <v-layout v-if="index == 0" align-center justify-space-between class="mt-14 mb-14">
                    <span>사은품 수령 안내</span>
                    <v-checkbox label="사은품 수령 안함" class="cmp-form-checkbox"></v-checkbox>
                  </v-layout>
                  <div v-if="index == 0" class="cmp-info info-type3">
                    <!-- 수령할 상품 -->
                    <v-layout row>
                      <p class="cmp-font fnt-14">록시땅 홀리데이 핸드크림</p>
                    </v-layout>
                    <p class="cmp-font c-gray mt-4 fnt-13">2022.01.03 일괄 순차적 발송 예정</p>
                    <!-- //수령할 상품 -->
                    <!-- 수령지 정보 -->
                    <v-layout row flex-start class="mt-16">
                      <p class="cmp-font fnt-14">
                        홍길동1 / 010-****-5678
                        <br>
                        [63354] 주소 2줄 케이스 주소 2줄 케이스 주소 2줄 케이스 주소 2줄 케이스 주소 2줄 케이스 주소 2줄 케이스 주소 2줄 케이스 주소 2줄 케이스 주소 2줄 케이스
                      </p>
                      <button class="cmp-font fnt-13 button"><span class="line">수령지 변경</span></button>
                    </v-layout>
                    <p class="cmp-font fnt-12 c-gray mt-6">다른 주소지로 받기를 원하시면 기본배송지를 수정해주세요.</p>
                    <!-- //수령지 정보 -->
                  </div>
                  <!-- // 수령 CASE 1 (이벤트 진행, 수령 희망, 배송지입력, 발송전) -->

                  <!-- 수령 CASE 2 (이벤트 종료, 수령 희망, 배송지마입력, 발송전) -->
                  <v-layout v-if="index == 1" align-center justify-space-between class="mt-14 mb-14">
                    <span>사은품 수령 안내</span>
                    <v-checkbox label="사은품 수령 안함" class="cmp-form-checkbox"></v-checkbox>
                  </v-layout>
                  <div v-if="index == 1" class="cmp-info info-type3">
                    <!-- 수령할 상품 -->
                    <v-layout row>
                      <p class="cmp-font fnt-14">록시땅 홀리데이 핸드크림</p>
                    </v-layout>
                    <p class="cmp-font c-gray mt-4 fnt-13">2022.01.03 일괄 순차적 발송 예정</p>
                    <!-- //수령할 상품 -->
                    <!-- 수령지 정보 -->
                    <v-layout row flex-start class="mt-16">
                      <p class="cmp-font fnt-14">수령지 변경 버튼을 선택 후 기본배송지를 입력해주세요.</p>
                      <button class="cmp-font fnt-13 button"><span class="line">수령지 변경</span></button>
                    </v-layout>
                    <p class="cmp-font fnt-12 c-gray mt-6">다른 주소지로 받기를 원하시면 기본배송지를 수정해주세요.</p>
                    <!-- //수령지 정보 -->
                  </div>
                  <!-- // 수령 CASE 2 (이벤트 종료, 수령 희망, 배송지마입력, 발송전) -->

                  <!-- 수령 CASE 3 (이벤트 종료, 수령 희망, 배송지입력, 발송후) -->
                  <v-layout v-if="index == 2" align-center justify-space-between class="mt-14 mb-14">
                    <span>사은품 수령 안내</span>
                  </v-layout>
                  <div v-if="index == 2" class="cmp-info info-type3">
                    <!-- 수령할 상품 -->
                    <v-layout row>
                      <p class="cmp-font fnt-14">록시땅 홀리데이 핸드크림</p>
                    </v-layout>
                    <!-- //수령할 상품 -->
                    <!-- 수령지 정보 -->
                    <v-layout row flex-start class="mt-16">
                      <p class="cmp-font fnt-14">
                        홍길동1 / 010-****-5678
                        <br/>
                        [63354] 서울특별시 강동구 강동대로 193 (성내동) 3층 301호
                      </p>
                    </v-layout>
                    <!-- //수령지 정보 -->
                    <v-btn small outlined color="primary" class="gray-outlined mt-20">배송조회</v-btn>
                  </div>
                  <!-- // 수령 CASE 3 (이벤트 종료, 수령 희망, 배송지입력, 발송후) -->

                  <!-- 수령 CASE 4 (이벤트 종료, 수령 희망, 배송지입력, 발송후, 배송완료) -->
                  <v-layout v-if="index == 3" align-center justify-space-between class="mt-14 mb-14">
                    <span>사은품 수령 안내</span>
                  </v-layout>
                  <div v-if="index == 3" class="cmp-info info-type3">
                    <!-- 수령할 상품 -->
                    <v-layout row>
                      <p class="cmp-font fnt-14">록시땅 홀리데이 핸드크림</p>
                      <p class="cmp-font fnt-14">
                        <span>배송완료</span>
                      </p>
                    </v-layout>
                    <!-- //수령할 상품 -->
                    <!-- 수령지 정보 -->
                    <v-layout row flex-start class="mt-16">
                      <p class="cmp-font fnt-14">
                        홍길동1 / 010-****-5678
                        <br/>
                        [63354] 서울특별시 강동구 강동대로 193 (성내동) 3층 301호
                      </p>
                    </v-layout>
                    <!-- //수령지 정보 -->
                  </div>
                  <!-- // 수령 CASE 4 (이벤트 종료, 수령 희망, 배송지입력, 발송후, 배송완료) -->

                  <!-- 수령 CASE 5 (이벤트 종료, 수령 안함) -->
                  <v-layout v-if="index == 4" align-center justify-space-between class="mt-14 mb-14">
                    <span>사은품 수령 안내</span>
                    <v-checkbox v-model="selected" label="사은품 수령 안함" class="cmp-form-checkbox"></v-checkbox>
                  </v-layout>
                  <!-- // 수령 CASE 5 (이벤트 종료, 수령 안함) -->

                  <!-- 목표 금액 -->
                  <div class="status-info">
                    <p class="tit">목표 금액 달성 현황</p>
                    <div class="target-progress">
                      <template>
                        <v-progress-linear
                          background-color="grey"
                          color="blue"
                          :value="(item.status_price) * 100 / (item.target_price)">
                          </v-progress-linear>
                      </template>
                      <div :class="['progress-goal', {on:item.status_price == item.target_price}]"></div>
                    </div>
                    <v-layout justify-space-between class="mt-6">
                      <span class="cmp-font fnt-11 c-blue bold">{{item.status_price | number}}</span>
                      <span class="cmp-font fnt-11 bold">{{item.target_price | number}}</span>
                    </v-layout>
                  </div>
                  <!-- 목표 금액 -->
                  <!-- 나의 구매 내역 -->
                  <v-expansion-panels accordion class="cmp-acc acc-type2">
                    <v-expansion-panel>
                      <v-expansion-panel-header
                        ><span>나의 구매금액 {{item.my_orderPrice | number}}원</span>
                        <span>주문 내역</span>
                        <template #actions>
                          <i class="cmp-icon i-down cmp-icon-12">열기/닫기</i>
                        </template>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <div class="order-number-box no-line">
                          <div v-for="(ist, idx) in item.order_history" :key="idx" class="line-box">
                            <p class="cmp-font fnt-14">주문번호<span class="ml-8 line">{{ist.id}}</span></p>
                            <p class="cmp-font fnt-14">{{ist.price | number}}원</p>
                          </div>
                        </div>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                <!-- // 나의 구매 내역 -->
                </div>
              </li>
            </template>
          </ul>
          <!-- //수령 가능 응모 -->
          <CommonNoData msg="사은품 자동 응모 내역이 없습니다."/>
          <ProductListPaging />
        </v-tab-item>
        <!-- // 사은품 자동 응모 -->
      </v-tabs-items>
      </div>
    </div>
  </div>
</template>

<script>
// [퍼블수정]25.04.02 가정의달 이벤트
import DialogSendEvent  from '~/pages/POPUP/DialogSendEvent.vue' 
export default {
  // [퍼블수정]25.04.02 가정의달 이벤트
  components: {
    DialogSendEvent
  },
  layout: 'LayoutBasics',
  data() {
    return {
      // Tabs
      selected: true,
      tab: 0,
      myEvent_win_list: [
        {
          event_name: '더한섬닷컴 X 스마일페이 12월 첫 결제 혜택',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/search-event-thumb-com.png',
          event_kink:'#n',
          date:'2021.12.07 ~ 2021.12.26',
          event_status:'ing',
        },
        {
          event_name: '더한섬닷컴 멤버십 THE 클럽',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/search-event-thumb2.png',
          event_kink:'#n',
          date:'2021.12.07 ~ 2021.12.26',
          event_status:'end',
        },
        {
          event_name: '더한섬닷컴 X 스마일페이 12월 첫 결제 혜택',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/search-event-thumb1.png',
          event_kink:'#n',
          date:'2021.12.07 ~ 2021.12.26',
          event_status:'end',
          mileage: false,
          price_name:'록시땅 홀리데이 핸드크림',
          note:'2022.01.03 일괄 순차적 발송 예정',
          orderer_info: '홍길동1 / 010-****-5678',
          orderer_address: '[63354] 서울특별시 강동구 강동대로 193 (성내동) 3층 301호',
          order_status:'ing'
        },
        {
          event_name: '더한섬닷컴 X 스마일페이 12월 첫 결제 혜택',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/search-event-thumb1.png',
          event_kink:'#n',
          date:'2021.12.07 ~ 2021.12.26',
          event_status:'end',
          mileage: false,
          price_name:'록시땅 홀리데이 핸드크림',
          orderer_info: '홍길동1 / 010-****-5678',
          orderer_address: '[63354] 서울특별시 강동구 강동대로 193 (성내동) 3층 301호',
          order_status:'done'
        },
        {
          event_name: '신용카드 무이자 혜택',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/search-event-thumb3.png',
          event_kink:'#n',
          date:'2021.12.07 ~ 2021.12.26',
          event_status:'end',
          mileage: true,
          mileage_price:'1000',
          note:'2022.01.03 일괄 순차적 발송 예정',
          order_status:'ing'
        },
        {
          event_name: '신용카드 무이자 혜택',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/search-event-thumb3.png',
          event_kink:'#n',
          date:'2021.12.07 ~ 2021.12.26',
          event_status:'end',
          mileage: true,
          mileage_price:'1000',
          order_status:'done'
        },
        // [퍼블수정]24.03.26 래플 이벤트 참여 케이스
        {
          event_name: 'KITH 래플 이벤트',
          image: 'https://img.thehandsome.com/md/publish/event/event_raffle/event-list-img.png',
          event_kink:'#n',
          date:'2021.12.07 ~ 2021.12.26',
          event_status:'ing',
        },
        {
          event_name: 'KITH 래플 이벤트',
          image: 'https://img.thehandsome.com/md/publish/event/event_raffle/event-list-img2.png',
          event_kink:'#n',
          date:'2021.12.07 ~ 2021.12.26',
          event_status:'failed',
        },
        {
          event_name: 'KITH 래플 이벤트',
          image: 'https://img.thehandsome.com/md/publish/event/event_raffle/event-list-img.png',
          event_kink:'#n',
          date:'2021.12.07 ~ 2021.12.26',
          event_status:'winning',
        },
      ],
      applyGift_list: [
        {
          event_name: '시스템 브랜드 금액 별 구매 사은행사',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-2.png',
          event_kink:'#n',
          date:'2021.12.07 ~ 2021.12.26',
          event_status:'ing',
          my_orderPrice:'100000',
          target_price:'1500000',
          status_price:'430000',
          order_history:[
            {
              id:'300120205135',
              price:'13200',
            },
            {
              id:'300120205135',
              price:'35000',
            },
            {
              id:'300120205135',
              price:'80500',
            },
          ]
        },
        {
          event_name: '시스템 브랜드 금액 별 구매 사은행사',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-2.png',
          event_kink:'#n',
          date:'2021.12.07 ~ 2021.12.26',
          event_status:'end',
          my_orderPrice:'100000',
          target_price:'1500000',
          status_price:'1040000',
          order_history:[
            {
              id:'300120205135',
              price:'13200',
            },
            {
              id:'300120205135',
              price:'35000',
            },
            {
              id:'300120205135',
              price:'80500',
            },
          ]
        },
      ],
      applyGift_goal_list: [
        {
          event_name: '타임 브랜드 구매 사은행사',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-1.png',
          event_kink:'#n',
          date:'2021.12.17 ~ 2022.12.26',
          event_status:'ing',
          my_orderPrice:'140000',
          target_price:'1000000',
          status_price:'1000000',
          order_history:[
            {
              id:'300120201135',
              price:'5000',
            },
            {
              id:'300120206135',
              price:'15000',
            },
            {
              id:'300120245135',
              price:'20000',
            },
          ]
        },
        {
          event_name: '타임옴므 브랜드 100만원 이상 구매 사은 행사',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-2.png',
          event_kink:'#n',
          date:'2021.12.07 ~ 2021.12.26',
          event_status:'end',
          my_orderPrice:'100000',
          target_price:'1500000',
          status_price:'1500000',
          order_history:[
            {
              id:'300120205135',
              price:'13200',
            },
            {
              id:'300120205135',
              price:'35000',
            },
            {
              id:'300120205135',
              price:'80500',
            },
          ],
          price_name:'록시땅 홀리데이 핸드크림',
          note:'2022.01.03 일괄 순차적 발송 예정',
          order_status:'ing',
          receipt_cencle: true,
        },
        {
          event_name: '더한섬닷컴 누적 구매 금액 별 구매 사은행사',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-3.png',
          event_kink:'#n',
          date:'2022.06.07 ~ 2022.12.26',
          event_status:'end',
          my_orderPrice:'220000',
          target_price:'5000000',
          status_price:'5000000',
          order_history:[
            {
              id:'300120205135',
              price:'13000',
            },
            {
              id:'300120205135',
              price:'112000',
            },
            {
              id:'300120205135',
              price:'70000',
            },
          ]
        },
        {
          event_name: '더한섬닷컴 누적 구매 금액 별 구매 사은행사',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-4.png',
          event_kink:'#n',
          date:'2022.06.07 ~ 2022.12.26',
          event_status:'end',
          my_orderPrice:'220000',
          target_price:'5000000',
          status_price:'5000000',
          order_history:[
            {
              id:'300120205135',
              price:'13000',
            },
            {
              id:'300120205135',
              price:'112000',
            },
            {
              id:'300120205135',
              price:'70000',
            },
          ]
        },
        {
          event_name: '더한섬닷컴 누적 구매 금액 별 구매 사은행사',
          image: 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-5.png',
          event_kink:'#n',
          date:'2022.06.07 ~ 2022.12.26',
          event_status:'end',
          my_orderPrice:'220000',
          target_price:'5000000',
          status_price:'5000000',
          order_history:[
            {
              id:'300120205135',
              price:'13000',
            },
            {
              id:'300120205135',
              price:'112000',
            },
            {
              id:'300120205135',
              price:'70000',
            },
          ]
        }
      ],
      // [퍼블수정]25.04.02 가정의달 이벤트
      DialogSendEvent: false,
    }
  },
  //   [퍼블수정]23.02.17 menuList 추가
  created() {
    const me = this
    const json = require('~/static/json/mypage_left_menu.json')
    me.menuList = json.list
  },
  methods: {
    // [퍼블수정]25.04.02 가정의달 이벤트
    closeDialog(){
      this.DialogSendEvent = false
      this.$emit('close')
    },
  },
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/event.scss'; 
</style>
