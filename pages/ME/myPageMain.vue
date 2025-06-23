<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <CommonContentsLeftMenu :title="'마이페이지'" :url="'/json/mypage_left_menu.json'"></CommonContentsLeftMenu>
      <div class="my-page-r-box content-mypageMain"><!-- 마이페이지 -->
        <div class="cmp-page-tit">
          <h2 class="tit">마이페이지</h2>
        </div>

        <!-- 간편회원일 경우  탭 제외 -->
        <v-layout justify-space-between class="myinfo-contents noMember">
          <div class="my-info">
            <div class="name"><strong>Handsomeon</strong>님</div>
          </div>
          <div>
            <v-layout row align-start justify-space-between>
              <p class="cmp-font fnt-18">H.Point 통합회원으로 전환하시면 혜택을 드려요!</p>
              <nuxt-link class="cmp-font fnt-13 button" to="#n"><span class="line">H.Point 통합회원으로 전환하기</span></nuxt-link>
            </v-layout>
            <ul class="benefit-info">
              <li>
                <i class="cmp-icon-etc cmp-icon-30 i-coupon"></i>
                신규 회원 쿠폰 5종
              </li>
              <li>
                <i class="cmp-icon-etc cmp-icon-30 i-hpoint"></i>
                한섬 마일리지 & H.Point 혜택
              </li>
              <li>
                <i class="cmp-icon-etc cmp-icon-30 i-benefit"></i>
                다양한 서비스 참여
              </li>
            </ul>
          </div>
        </v-layout>
        <!-- //간편회원일 경우  탭 제외 -->

        <!-- 프로필영역 & 보유혜택 -->
        <v-layout class="myinfo-contents">
          <div class="my-info">
            <div class="cmp-labels">
              <span class="label the-plus">THE PLUS</span>
              <span class="label">임직원</span>
            </div>
            <div class="name"><strong>Handsomeon</strong>님</div>
          </div>
          <div>
            <p class="tit">한섬마일리지</p>
            <div class="txt"><strong>1,455,000</strong>M</div>
          </div>
          <div>
            <p class="tit">H.Point</p>
              <!-- <p class="txt"><strong>1,205,000</strong>P</p> -->
              <!-- [퍼블수정]23.01.31 한섬 회원인 경우 -->
              <p class="txt">
                <nuxt-link class="cmp-font fnt-18 button" to="#n">통합회원 전환<i class="cmp-icon cmp-icon-16 i-next ml-4 mt-4"></i></nuxt-link>
              </p>
          </div>
          <div>
            <p class="tit">e-money</p>
            <div class="txt"><strong>1,855,000</strong>P</div>
          </div>
          <div>
            <p class="tit">쿠폰</p>
            <div class="txt"><strong>12</strong>개</div>
          </div>
        </v-layout>
        <!-- // 프로필영역 & 보유혜택 -->
        
        <!-- 구매내역이 없는 경우 -->
        <div class="cmp-info info-type3 nolist">
          <div class="cmp-sub-tit pt-20 mt-8 mb-8">
            <h3 class="tit">아직 주문내역이 없으시네요.</h3>
          </div>
          <v-layout row align-start justify-space-between class="pb-20 mb-8">
            <p class="cmp-font fnt-18">더한섬닷컴의 신상품, 인기상품을 둘러보실 수 있습니다.</p>
            <nuxt-link class="cmp-font button fnt-16" to="#n">쇼핑 메인 바로가기<i class="cmp-icon cmp-icon-12 i-next"></i></nuxt-link>
          </v-layout>
        </div>
        <!-- //구매내역이 없는 경우 -->

        <!-- 탭메뉴 -->
        <div class="cmp-tabs tabs-contents">
          <v-tabs v-model="tab2" fixed-tabs>
            <v-tab>더클럽</v-tab> 
            <v-tab>한섬 VVIP</v-tab>
            <v-tab>임직원</v-tab><!-- [퍼블수정]23.02.13 더플러스 관련 내용 삭제 -->
            <v-tab>나의 옷장</v-tab>
          </v-tabs> 
        </div>
        <!-- //탭메뉴 -->

        <!-- 탭 내용 -->
        <v-tabs-items v-model="tab2" touchless>
          <!-- 더클럽 -->
          <v-tab-item :transition="false">
            <div class="grade-infoBox">
              <v-layout justify-end class="card-cont">
                <div class="card">
                  <div class="level-cont"> 
                    <span class="level">CREW</span>  
                    <!--crew-->
                    <i class="cmp-icon-etc cmp-icon-36 i-level-crew"></i>
                    <!--friend
                    <i class="cmp-icon-etc cmp-icon-36 i-level-friend"></i> 
                    -->
                    <!--mania
                    <i class="cmp-icon-etc cmp-icon-36 i-level-mania"></i> 
                    -->
                    <!--star
                    <i class="cmp-icon-etc cmp-icon-36 i-level-star"></i> 
                    -->
                    <!--thestar
                    <i class="cmp-icon-etc cmp-icon-36 i-level-theStar"></i> 
                    -->
                    <!--silver
                    <i class="cmp-icon-etc cmp-icon-36 i-level-silver"></i> 
                    -->
                    <!--gold
                    <i class="cmp-icon-etc cmp-icon-36 i-level-gold"></i> 
                    --> 
                    <!--platinum
                    <i class="cmp-icon-etc cmp-icon-36 i-level-platinum"></i> 
                    -->
                    <!--theFirst
                    <i class="cmp-icon-etc cmp-icon-36 i-level-theFirst"></i> 
                    -->                  
                  </div>
                </div>
                <v-layout wrap class="plus-conts">
                  <div class="info-top">
                    <v-layout align-center justify-space-between>
                      <div>
                        <p class="cmp-font fnt-20 mb-4">더한섬님의 온라인 전용 멤버십은 <strong>CREW</strong> 등급입니다.</p>
                      </div>
                      <nuxt-link class="cmp-font fnt-16 button" to="#n">등급혜택 보기<i class="cmp-icon cmp-icon-16 i-next"></i></nuxt-link>
                    </v-layout>
                    <p class="cmp-font fnt-14 c-gray">2023.07.31까지</p><!-- [날짜 자동 세팅] -->
                  </div>
                  
                  <div class="btm-txt">
                    <!-- 20230427 PC 마이페이지 예상 등급 노출 영역 변경 -->
                    <button class="cmp-font font" @click="openDialogLevel">다음 예상 등급 확인하기  <i class="cmp-icon cmp-icon-18 i-info"></i></button>
                  </div>
                </v-layout>
              </v-layout>
            </div>
          </v-tab-item>
          <!-- //더클럽 -->

          <!-- [퍼블수정]07.19 툴팁 추가 -->
          <v-dialog v-model="dialogLevelView">
            <DialogBasic class="popup-member-level" header-title="다음 예상 등급" @hide="closeDialogLevel">
              <template #body>
                <!-- S : [231101] THE 클럽 등급 표기 개선 -->
                <!-- FRIEND, CREW, MANIA 등급 -->
                <p class="level-tit"><strong>CREW</strong></p>
                <div class="level-txt">
                  <!-- <p><strong class="cmp-font c-blue">1,544,000</strong>원 더 구매하시면, <br />2023년 하반기 MANIA 등급<CommonTooltipBox :tooltip-list="tooltipList.gradeinfo" icon-type="info" /></p> -->
                  <p>2023년 12월 31일까지<strong class="cmp-font c-blue">1,544,000</strong>원 <br />더 구매하시면, 2023년 하반기 MANIA 등급</p>
                </div>
                <!-- E : [231101] THE 클럽 등급 표기 개선 -->
              </template>
            </DialogBasic>
          </v-dialog>
          <v-dialog v-model="dialogLevelView2">
            <DialogBasic class="popup-member-level" header-title="다음 예상 등급" @hide="closeDialogLevel2">
              <template #body>
                <!-- S : [231101] THE 클럽 등급 표기 개선 -->
                <!-- STAR 등급 -->
                <p class="level-tit"><strong>STAR</strong></p>
                <div class="level-txt">
                  <p>STAR 등급 중 <strong class="cmp-font c-blue">상위 100분</strong>에게는<br />THE STAR 등급이 부여됩니다.</p>
                  <!-- 위의 문구가 추가된 케이스에는 CommonTooltipBox에  calss="over-star" 추가 -->
                  <!-- <p><strong class="cmp-font c-blue">1,544,000</strong>원 더 구매하시면, <br />2023년 하반기 STAR 등급<CommonTooltipBox :tooltip-list="tooltipList.gradeinfo" icon-type="info" class="over-star" /></p> -->
                  <p>현재 <strong class="cmp-font c-blue">1,544,000</strong>원 더 구매하여<br />2023년 하반기 STAR 등급</p>
                </div>
                <!-- E : [231101] THE 클럽 등급 표기 개선 -->
              </template>
            </DialogBasic>
          </v-dialog>
          <v-dialog v-model="dialogLevelView3">
            <DialogBasic class="popup-member-level" header-title="다음 예상 등급" @hide="closeDialogLevel3">
              <template #body>
                <!-- THE STAR 등급 -->
                <div class="level-txt">
                  <p>THE STAR 등급에 걸맞는 <br /><strong class="cmp-font c-blue">혜택과 서비스</strong>로 보답하겠습니다.</p>
                  <!-- 위의 문구가 추가된 케이스에는 CommonTooltipBox에  calss="over-star" 추가 -->
                  <p><strong class="cmp-font c-blue">1,544,000</strong>원 더 구매하시면, <br />2023년 하반기 STAR 등급<CommonTooltipBox :tooltip-list="tooltipList.gradeinfo" icon-type="info" class="over-star" /></p>
                </div>
              </template>
            </DialogBasic>
          </v-dialog>
          <!-- //[퍼블수정]07.19 툴팁 추가 -->

          <!-- 한섬 VVIP -->
          <v-tab-item :transition="false">
            <div class="grade-infoBox vvip-info">
              <v-layout justify-end class="card-cont">
                <div class="card"><v-img src="/images/member/dummy-card-tobe.png" :height="145"></v-img></div><!-- [퍼블수정]23.02.08 -->
                 <v-layout wrap class="plus-conts">
                  <div class="info-top">
                    <v-layout align-center justify-space-between>
                      <div>
                        <p class="cmp-font fnt-20 mb-4">한섬(온/오프라인) 통합 멤버십은 <strong>PLATIUM</strong> 등급입니다.</p>
                      </div>
                      <nuxt-link class="cmp-font fnt-16 button" to="#n">등급혜택 보기<i class="cmp-icon cmp-icon-16 i-next"></i></nuxt-link>
                    </v-layout>
                    <p class="cmp-font fnt-14 c-gray">2023.07.31까지</p>
                  </div>
                  <div class="card-txt">
                    <div class="box">
                      <span>잔여</span>
                      <br />
                      <span>한도</span>
                    </div>
                    <div class="num1-box">
                      <span class="num1"><strong>1,000,000</strong>원</span>
                      <br />
                      <span class="num1"><strong>400,000</strong>원</span>
                    </div>
                    <div class="num2-box">
                      <span class="num2"><strong>3</strong>회 월</span>
                      <br />
                      <span class="num2"><strong>5</strong>회 월</span>
                    </div>
                  </div>
                </v-layout>
              </v-layout>
            </div>
          </v-tab-item>
          <!-- //한섬 VVIP -->
          <!-- 임직원 --><!-- [퍼블수정]23.02.13 더플러스 관련 내용 삭제 -->
          <v-tab-item :transition="false">
            <div class="tab-infoBox">
              <v-layout align-center justify-space-between class="info-top">
                <p class="cmp-font fnt-24">임직원할인</p>
              </v-layout>
              <v-layout wrap class="plus-conts">
                <div class="cont-box">
                  <p class="tit">잔여</p>
                  <nuxt-link class="txt small" to=""><strong>12,000,000</strong>원</nuxt-link>
                </div>
                <div class="cont-box">
                  <p class="tit">한도</p>
                  <nuxt-link class="txt small" to=""><strong>35,000,000</strong>원</nuxt-link>
                </div>
                <v-layout align-center class="cont-box">
                  <p class="cmp-font fnt-14">정상가 기준으로 임직원 할인이 적용되며,<br>시즌/브랜드별로 할인율이 상이합니다!</p>
                </v-layout>
              </v-layout>
            </div>
          </v-tab-item>
          <!-- //임직원 -->
          <!-- 나의 옷장 -->
          <v-tab-item :transition="false">
            <!-- 나의옷장 코디 게시 내용이 없는 경우
            <CommonNoData>
              <template #message>
                <p class="cmp-font fnt-24">지금 나의 코디 북을 만들어 볼까요?</p>
                <p class="mt-8 mb-16 cmp-font fnt-16">내가 구매한 상품과 추천 상품,<br>위시리스트의 상품과 함께 코디북을 만들 수 있어요</p>
              </template>
              <template #button>
                <v-btn outlined color="primary" class="gray-outlined">코디만들기</v-btn>
              </template>
            </CommonNoData>
            -->
            <div class="tab-infoBox codi-type">
              <v-layout align-center justify-space-between class="info-top">
                <p class="cmp-font fnt-24">나의 코디북</p>
                <nuxt-link class="cmp-font fnt-16 button" to="#n">전체보기<i class="cmp-icon cmp-icon-16 i-next"></i></nuxt-link>
              </v-layout>
              <v-layout wrap class="plus-conts">
                <div v-for="item, idx in codiList" :key="idx" class="codi-box">
                  <div class="img-box">
                    <v-img :src="item.image_url"></v-img>
                  </div>
                  <p class="tit">{{item.title}}</p>
                </div>
              </v-layout>
            </div>
          </v-tab-item>
          <!-- //나의 옷장 -->
        </v-tabs-items>
        <!-- //탭 내용 -->

        <!-- 탭메뉴 버전2 -->
        <div class="cmp-tabs tabs-contents">
          <v-tabs v-model="tabs" fixed-tabs>
            <v-tab>더클럽</v-tab> 
            <v-tab>한섬 VVIP</v-tab><!-- [퍼블수정]23.02.13 더플러스 관련 내용 삭제 -->
            <v-tab>임직원</v-tab>
            <v-tab>케어플러스 세탁</v-tab>
          </v-tabs> 
        </div>
        <!-- //탭메뉴 버전2 -->

        <!-- 탭 내용 버전2 -->
        <v-tabs-items v-model="tabs" touchless>
          <!-- 더클럽 -->
          <v-tab-item :transition="false">
            <div class="grade-infoBox">
              <v-layout justify-end class="card-cont">
                <div class="card">
                  <div class="level-cont"> 
                    <span class="level">CREW</span>  
                    <!--crew-->
                    <i class="cmp-icon-etc cmp-icon-36 i-level-crew"></i>
                    <!--friend
                    <i class="cmp-icon-etc cmp-icon-36 i-level-friend"></i> 
                    -->
                    <!--mania
                    <i class="cmp-icon-etc cmp-icon-36 i-level-mania"></i> 
                    -->
                    <!--star
                    <i class="cmp-icon-etc cmp-icon-36 i-level-star"></i> 
                    -->
                    <!--thestar
                    <i class="cmp-icon-etc cmp-icon-36 i-level-theStar"></i> 
                    -->
                    <!--silver
                    <i class="cmp-icon-etc cmp-icon-36 i-level-silver"></i> 
                    -->
                    <!--gold
                    <i class="cmp-icon-etc cmp-icon-36 i-level-gold"></i> 
                    --> 
                    <!--platinum
                    <i class="cmp-icon-etc cmp-icon-36 i-level-platinum"></i> 
                    -->
                    <!--theFirst
                    <i class="cmp-icon-etc cmp-icon-36 i-level-theFirst"></i> 
                    -->                  
                  </div>
                </div>
                <v-layout wrap class="plus-conts">
                  <div class="info-top">
                    <v-layout align-center justify-space-between>
                      <div>
                        <p class="cmp-font fnt-20 mb-4">더한섬님의 온라인 전용 멤버십은 <strong>CREW</strong> 등급입니다.</p>
                      </div>
                      <nuxt-link class="cmp-font fnt-16 button" to="#n">등급혜택 보기<i class="cmp-icon cmp-icon-16 i-next"></i></nuxt-link>
                    </v-layout>
                    <p class="cmp-font fnt-14 c-gray">2023.07.31까지</p><!-- [날짜 자동 세팅] -->
                  </div>
                  
                  <div class="btm-txt">
                    <!-- 20230427 PC 마이페이지 예상 등급 노출 영역 변경 -->
                    <!-- //[퍼블수정]07.19 툴팁 추가 (퍼블 화면 확인용) -->
                    <button class="cmp-font font" @click="openDialogLevel2">다음 예상 등급 확인하기  <i class="cmp-icon cmp-icon-18 i-info"></i></button>
                  </div>
                </v-layout>
              </v-layout>
            </div>
          </v-tab-item>
          <!-- //더클럽 -->
          <!-- 한섬 VVIP --><!-- [퍼블수정]23.02.13 더플러스 관련 내용 삭제 -->
          <v-tab-item :transition="false">
            <div class="grade-infoBox vvip-info">
              <v-layout justify-end class="card-cont">
                <div class="card"><v-img src="/images/member/dummy-card-tobe.png" :height="145"></v-img></div><!-- [퍼블수정]23.02.08 -->
                 <v-layout wrap class="plus-conts">
                  <div class="info-top">
                    <v-layout align-center justify-space-between>
                      <div>
                        <p class="cmp-font fnt-20 mb-4">한섬(온/오프라인) 통합 멤버십은 <strong>PLATIUM</strong> 등급입니다.</p>
                      </div>
                      <nuxt-link class="cmp-font fnt-16 button" to="#n">등급혜택 보기<i class="cmp-icon cmp-icon-16 i-next"></i></nuxt-link>
                    </v-layout>
                    <p class="cmp-font fnt-14 c-gray">2023.07.31까지</p>
                  </div>
                  <div class="card-txt">
                    <div class="box">
                      <span>잔여</span>
                      <br />
                      <span>한도</span>
                    </div>
                    <div class="num1-box">
                      <span class="num1"><strong>1,000,000</strong>원</span>
                      <br />
                      <span class="num1"><strong>400,000</strong>원</span>
                    </div>
                    <div class="num2-box">
                      <span class="num2"><strong>3</strong>회 월</span>
                      <br />
                      <span class="num2"><strong>5</strong>회 월</span>
                    </div>
                  </div>
                </v-layout>
              </v-layout>
            </div>
          </v-tab-item>
          <!-- //한섬 VVIP -->
          <!-- 임직원 -->
          <v-tab-item :transition="false">
            <div class="tab-infoBox">
              <v-layout align-center justify-space-between class="info-top">
                <p class="cmp-font fnt-24">임직원할인</p>
              </v-layout>
              <v-layout wrap class="plus-conts">
                <div class="cont-box">
                  <p class="tit">잔여</p>
                  <nuxt-link class="txt small" to=""><strong>12,000,000</strong>원</nuxt-link>
                </div>
                <div class="cont-box">
                  <p class="tit">한도</p>
                  <nuxt-link class="txt small" to=""><strong>35,000,000</strong>원</nuxt-link>
                </div>
                <v-layout align-center class="cont-box">
                  <p class="cmp-font fnt-14">정상가 기준으로 임직원 할인이 적용되며,<br>시즌/브랜드별로 할인율이 상이합니다!</p>
                </v-layout>
              </v-layout>
            </div>
          </v-tab-item>
          <!-- //임직원 -->
          <!-- 케어플러스 세탁 -->
          <v-tab-item :transition="false">
            <!-- 한섬케어플러스세탁 서비스 이용전
            <CommonNoData>
              <template #message>
                <p class="cmp-font fnt-24">더한섬닷컴의 특별한 클리닝 서비스 <strong>한섬 케어 플러스</strong>를 만나보세요</p>
                <p class="mt-8 mb-16 cmp-font fnt-16">한섬 옷들은 택배 배송으로 세탁 맡기고 받아보실 수 있어요.<br>고객님의 소중한 옷이 새롭게 태어납니다.</p>
              </template>
              <template #button>
                <v-btn outlined color="primary" class="gray-outlined">세탁 서비스 신청하기</v-btn>
              </template>
            </CommonNoData>
            -->
            <div class="tab-infoBox">
              <v-layout align-center justify-space-between class="info-top">
                <p class="cmp-font fnt-24">케어플러스세탁 바우처 <strong>3</strong></p>
                <nuxt-link class="cmp-font fnt-16 button" to="#n">신청하기<i class="cmp-icon cmp-icon-16 i-next"></i></nuxt-link><!-- [퍼블수정]22.11.29 수정 -->
              </v-layout>
              <div class="dress-infoBox">
                <v-layout align-center class="dress-conts">
                  <div>신청<nuxt-link to="" class="num">53</nuxt-link><i class="cmp-icon cmp-icon-12 i-next">다음</i></div>
                  <div>결제요청<nuxt-link to="" class="num">4</nuxt-link><i class="cmp-icon cmp-icon-12 i-next">다음</i></div>
                  <div>세탁진행/배송<nuxt-link to="" class="num">1</nuxt-link></div>
                </v-layout>
                <v-layout align-center class="dress-conts">
                  <p>세탁불가<span class="num">0</span></p>
                  <p>매장도착<span class="num">4</span></p>
                  <p>수령완료<span class="num">1</span></p>
                </v-layout>
              </div>
            </div>
          </v-tab-item>
          <!-- //케어플러스 세탁 -->
        </v-tabs-items>
        <!-- //탭 내용 버전2 -->

        <!-- 탭메뉴 (미사용 버전) -->
        <div class="cmp-tabs tabs-contents">
          <v-tabs v-model="tab3" fixed-tabs>
            <v-tab>더클럽</v-tab> 
            <v-tab>한섬 VVIP</v-tab><!-- [퍼블수정]23.02.13 더플러스 관련 내용 삭제 -->
            <v-tab>케어플러스 세탁</v-tab>
            <v-tab>나의 옷장</v-tab>
          </v-tabs> 
        </div>
        <!-- //탭메뉴 (미사용 버전) -->

        <!-- 탭 내용 (미사용 버전) -->
        <v-tabs-items v-model="tab3" touchless>
          <!-- 더클럽 -->
          <v-tab-item :transition="false">
            <div class="grade-infoBox">
              <v-layout justify-end class="card-cont">
                <div class="card">
                  <div class="level-cont"> 
                    <span class="level">CREW</span>  
                    <!--crew-->
                    <i class="cmp-icon-etc cmp-icon-36 i-level-crew"></i>
                    <!--friend
                    <i class="cmp-icon-etc cmp-icon-36 i-level-friend"></i> 
                    -->
                    <!--mania
                    <i class="cmp-icon-etc cmp-icon-36 i-level-mania"></i> 
                    -->
                    <!--star
                    <i class="cmp-icon-etc cmp-icon-36 i-level-star"></i> 
                    -->
                    <!--thestar
                    <i class="cmp-icon-etc cmp-icon-36 i-level-theStar"></i> 
                    -->
                    <!--silver
                    <i class="cmp-icon-etc cmp-icon-36 i-level-silver"></i> 
                    -->
                    <!--gold
                    <i class="cmp-icon-etc cmp-icon-36 i-level-gold"></i> 
                    --> 
                    <!--platinum
                    <i class="cmp-icon-etc cmp-icon-36 i-level-platinum"></i> 
                    -->
                    <!--theFirst
                    <i class="cmp-icon-etc cmp-icon-36 i-level-theFirst"></i> 
                    -->                  
                  </div>
                </div>
                <v-layout wrap class="plus-conts">
                  <div class="info-top">
                    <v-layout align-center justify-space-between>
                      <div>
                        <p class="cmp-font fnt-20 mb-4">더한섬님의 온라인 전용 멤버십은 <strong>CREW</strong> 등급입니다.</p>
                      </div>
                      <nuxt-link class="cmp-font fnt-16 button" to="#n">등급혜택 보기<i class="cmp-icon cmp-icon-16 i-next"></i></nuxt-link>
                    </v-layout>
                    <p class="cmp-font fnt-14 c-gray">2023.07.31까지</p><!-- [날짜 자동 세팅] -->
                  </div>
                  
                  <div class="btm-txt">
                    <!-- 20230427 PC 마이페이지 예상 등급 노출 영역 변경 -->
                    <!-- //[퍼블수정]07.19 툴팁 추가 (퍼블 화면 확인용) -->
                    <button class="cmp-font font" @click="openDialogLevel3">다음 예상 등급 확인하기  <i class="cmp-icon cmp-icon-18 i-info"></i></button>
                  </div>
                </v-layout>
              </v-layout>
            </div>
          </v-tab-item>
          <!-- //더클럽 -->
          <!-- 한섬 VVIP --><!-- [퍼블수정]23.02.13 더플러스 관련 내용 삭제 -->
          <v-tab-item :transition="false">
            <div class="grade-infoBox vvip-info">
              <v-layout justify-end class="card-cont">
                <div class="card"><v-img src="/images/member/dummy-card-tobe.png" :height="145"></v-img></div><!-- [퍼블수정]23.02.08 -->
                 <v-layout wrap class="plus-conts">
                  <div class="info-top">
                    <v-layout align-center justify-space-between>
                      <div>
                        <p class="cmp-font fnt-20 mb-4">한섬(온/오프라인) 통합 멤버십은 <strong>PLATIUM</strong> 등급입니다.</p>
                      </div>
                      <nuxt-link class="cmp-font fnt-16 button" to="#n">등급혜택 보기<i class="cmp-icon cmp-icon-16 i-next"></i></nuxt-link>
                    </v-layout>
                    <p class="cmp-font fnt-14 c-gray">2023.07.31까지</p>
                  </div>
                  <div class="card-txt">
                    <div class="box">
                      <span>잔여</span>
                      <br />
                      <span>한도</span>
                    </div>
                    <div class="num1-box">
                      <span class="num1"><strong>1,000,000</strong>원</span>
                      <br />
                      <span class="num1"><strong>400,000</strong>원</span>
                    </div>
                    <div class="num2-box">
                      <span class="num2"><strong>3</strong>회 월</span>
                      <br />
                      <span class="num2"><strong>5</strong>회 월</span>
                    </div>
                  </div>
                </v-layout>
              </v-layout>
            </div>
          </v-tab-item>
          <!-- //한섬 VVIP -->
          <!-- 한섬 VVIP -->
          <v-tab-item :transition="false">
            <CommonNoData>
              <template #message>
                <p class="cmp-font fnt-24">더한섬닷컴의 특별한 클리닝 서비스 <strong>한섬 케어 플러스</strong>를 만나보세요</p>
                <p class="mt-8 mb-16 cmp-font fnt-16">한섬 옷들은 택배 배송으로 세탁 맡기고 받아보실 수 있어요.<br>고객님의 소중한 옷이 새롭게 태어납니다.</p>
              </template>
              <template #button>
                <v-btn outlined color="primary" class="gray-outlined">세탁 서비스 신청하기</v-btn>
              </template>
            </CommonNoData>
          </v-tab-item>
          <!-- //한섬 VVIP -->
          <!-- 나의 옷장 -->
          <v-tab-item :transition="false">
            <CommonNoData>
              <template #message>
                <p class="cmp-font fnt-24">지금 나의 코디 북을 만들어 볼까요?</p>
                <p class="mt-8 mb-16 cmp-font fnt-16">내가 구매한 상품과 추천 상품,<br>위시리스트의 상품과 함께 코디북을 만들 수 있어요</p>
              </template>
              <template #button>
                <v-btn outlined color="primary" class="gray-outlined">코디만들기</v-btn>
              </template>
            </CommonNoData>
          </v-tab-item>
          <!-- //나의 옷장 -->
        </v-tabs-items>
        <!-- //탭 내용 (미사용 버전) -->

        <!-- 주문현황, 활동현황 -->
        <div class="status-box">
          <div class="contents-box">
            <div class="cmp-sub-tit"><h3 class="tit">주문현황</h3></div>
            <div class="cmp-info info-type3">
              <v-layout row align-start justify-space-between>
                <!-- [퍼블수정]22.11.29 수정 -->
                <div>
                  <nuxt-link class="cmp-font button" to="#n">
                    <p class="tit">주문/배송</p>
                    <div class="txt cmp-font fnt-28 mt-4"><strong>56</strong></div>
                  </nuxt-link>
                </div>
                <div>
                  <nuxt-link class="cmp-font button" to="#n">
                    <p class="tit">취소/교환/반품</p>
                    <div class="txt cmp-font fnt-28 mt-4"><strong>8</strong></div>
                  </nuxt-link>
                </div>
                <!-- //[퍼블수정]22.11.29 수정 -->
              </v-layout>
            </div>
          </div>
          <div class="contents-box">
            <div class="cmp-sub-tit"><h3 class="tit">활동현황</h3></div>
            <div class="cmp-info info-type3">
              <v-layout row align-start justify-space-between>
                <!-- [퍼블수정]22.11.29 수정 -->
                <div>
                  <nuxt-link class="cmp-font button" to="#n">
                    <p class="tit">상품평</p>
                    <div class="txt cmp-font fnt-28 mt-4"><strong>320</strong></div>
                  </nuxt-link>
                </div>
                <div>
                  <nuxt-link class="cmp-font button" to="#n">
                    <p class="tit">이벤트 참여 현황</p>
                    <div class="txt cmp-font fnt-28 mt-4"><strong>12</strong></div>
                  </nuxt-link>
                </div>
                <!-- //[퍼블수정]22.11.29 수정 -->
              </v-layout>
            </div>
          </div>
        </div>
        <!-- // 주문현황, 활동현황 -->

        <!-- 상품 Q&A -->
        <v-layout row align-center justify-space-between class="title-box mb-20">
          <div class="cmp-sub-tit mb-0"><h3 class="tit">상품 Q&A</h3></div>
          <nuxt-link class="cmp-font button" to="#n">전체보기<i class="cmp-icon cmp-icon-12 i-next"></i></nuxt-link>
        </v-layout>
        <!-- 상품 Q&A 테이블 -->
        <div class="product-row-table">
          <table>
            <caption>상품 Q&A 테이블</caption>
            <colgroup>
              <col width="auto"/>
              <col width="138px"/><!-- [퍼블수정]22.11.25 -->
              <col width="88px"/>
            </colgroup>
            <thead>
              <tr>
                <th>제목</th> 
                <th>등록일</th><!-- [퍼블수정]22.11.25 -->
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, index) in inquiryList">
                <tr :key="index">
                  <td class="text-left pw-0">
                    <p class="title-lineClamp">{{item.title}}</p>
                  </td>
                  <td>{{item.date}}</td><!-- [퍼블수정]22.11.25 -->
                  <td class="label-tag pw-16">
                    <span v-if="item.state=='답변완료'" class="cmp-label-line finish">{{item.state}}</span>
                    <span v-if="item.state=='처리중'" class="cmp-label-line">{{item.state}}</span>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <!-- //상품 Q&A 테이블 -->
        <!-- //상품 Q&A -->

        <!-- 1:1 문의 -->
        <v-layout row align-center justify-space-between class="title-box mb-20">
          <div class="cmp-sub-tit mb-0"><h3 class="tit">1:1 문의</h3></div>
          <nuxt-link class="cmp-font button" to="#n">전체보기<i class="cmp-icon cmp-icon-12 i-next"></i></nuxt-link>
        </v-layout>
        <!-- 1:1 문의 테이블 -->
        <div class="product-row-table">
          <table>
            <caption>1:1 문의 테이블</caption>
            <colgroup>
              <col width="114px"/>
              <col width="auto"/>
              <col width="138px"/>
              <col width="88px"/>
            </colgroup>
            <thead>
              <tr>
                <th>유형</th>
                <th>제목</th>
                <th>등록일</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, index) in inquiryList">
                <tr :key="index">
                  <td class="text-left label-tag">
                    <span class="cmp-label-line category">{{item.category}}</span>
                  </td>
                  <td class="text-left">
                    <p class="title-lineClamp">{{item.title}}</p>
                  </td>
                  <td>{{item.date}}</td>
                  <td class="label-tag pw-16"><!-- [개발확인]22.12.23 아래처럼 답변완료 시 finish class 추가 부탁드립니다. -->
                    <span v-if="item.state=='답변완료'" class="cmp-label-line finish">{{item.state}}</span>
                    <span v-if="item.state=='처리중'" class="cmp-label-line">{{item.state}}</span>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <!-- //1:1 문의 테이블 -->
        <!-- //1:1 문의 -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// 20230427 PC 마이페이지 예상 등급 노출 영역 변경
import DialogBasic from '~/pages/POPUP/DialogBasic.vue' // 팝업기본
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import EventBus from '~/api/common/EventBus'
export default {
  components: {
    // 20230427 PC 마이페이지 예상 등급 노출 영역 변경
    DialogBasic
  },
  layout: 'LayoutBasics',
  data() {
    return {
      // [퍼블수정]07.19 툴팁 추가
      tooltipList: {
        gradeinfo: [
          '2023년 6월 30일까지 구매하신 금액 기준이며, 주문취소/반품 시 금액 및 등급이 변동 될 수 있습니다.',
          '2023년 7월 1일부터 구매하신 금액은 2024년 상반기 등급 산정 시 반영됩니다.',
        ]
      },
      // 20230427 PC 마이페이지 예상 등급 노출 영역 변경
      dialogLevelView: false,
      dialogLevelView2: false,
      dialogLevelView3: false,
      productListLayout: 4,
      // Tabs
      tabs: 0,
      tab2: 0,
      tab3: 1,
      selectedIndex:0,
      codiList: [],
      inquiryList: [
        {
          category: '결제/환불 문의', // 1:1 문의 대분류
          state: '답변완료', // 문의 상태 (접수완료, 처리중, 답변완료)
          title: '환불 후 며칠 뒤에 입금되는지 궁금합니다.',
          date: '2021.06.15',
          linkUrl: '/ko/CS/oneToOneDetail'
        },
        {
          category: '기프트카드 문의',
          state: '처리중',
          title: '구매 일주일 지났는데 카드 환불이 진행되지 않았습니다. 확인 부탁드립니다. 빨리 처리해주세요 ',
          date: '2021.06.15',
          linkUrl: '/ko/CS/oneToOneDetail'
        },
        {
          category: '환불',
          state: '답변완료',
          title: '현대카드 레드바우처 사용 시 혜택이 궁금합니다. 한섬마일리지 중복 혜택이 가능한가요?',
          date: '2021.06.15',
          linkUrl: '/ko/CS/oneToOneDetail'
        },
        {
          category: '기프트카드 문의',
          state: '처리중',
          title: '구매 일주일 지났는데 카드 환불이 진행되지 않았습니다. 확인 부탁드립니다. 빨리 처리해주세요 ',
          date: '2021.06.15',
          linkUrl: '/ko/CS/oneToOneDetail'
        },
      ],
    }
  },
  created() {
    const me = this
    axios.get("/json/codibook.json")
    .then(function(res){
      res.data.list.forEach(function(item){
        item.product_data_list = []
      })
      me.codiList = res.data.list
      me.codiList.length = 3
    })
    .catch(function(e){
      console.log(e)
    })
  },
  methods: {
    // 20230427 PC 마이페이지 예상 등급 노출 영역 변경
    openDialogLevel() {
      const me = this
      me.dialogLevelView = true
    },
    // [퍼블수정]07.19 툴팁 추가 (퍼블 화면 확인용)
    openDialogLevel2() {
      const me = this
      me.dialogLevelView2 = true
    },
    openDialogLevel3() {
      const me = this
      me.dialogLevelView3 = true
    },
    closeDialogLevel() {
      const me = this
      me.dialogLevelView = false
    },
    // [퍼블수정]07.19 툴팁 추가 (퍼블 화면 확인용)
    closeDialogLevel2() {
      const me = this
      me.dialogLevelView2 = false
    },
    closeDialogLevel3() {
      const me = this
      me.dialogLevelView3 = false
    },
    zzimBtn(e){
      const cl = e.currentTarget.classList
      if(cl.contains("on")){
        cl.remove("on")
      }else{
        cl.add("on")
      }
    }
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/member.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>