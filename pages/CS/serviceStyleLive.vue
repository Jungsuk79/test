<template>
  <v-layout class="contents contents-type2"><!--// 공통 class="contents", 해당 메뉴 전용 class="content-메뉴명", 해당 페이지 전용 class="content-페이지명" -->
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'고객센터'" :left-data="menuList" :page-class="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="shopping-service styleLive">
            <div class="cmp-page-tit">
              <h2 class="tit">스타일라이브</h2>
            </div>      
            <div class="grey-box bg5">
              <strong>더한섬닷컴의 스타일 커뮤니티</strong>
              <dl>
                <dt>스타일라이브</dt>
                <dd>한층 업그레이드 된 스타일라이브! 더욱 다양해진 소통 공간과<br/>새로워진 혜택을 이용해 보세요.</dd>
              </dl>
            </div>
            <section class="content-section">
              <ul class="infomation-list">
                <!-- 1 -->
                <li class="border-btm">
                  <dl class="dl-wrap">
                    <dt>스타일에 대한 다양한 이야기 나누기</dt>
                    <dd>내가 찾던 바로 그 브랜드, 그 스타일을 다양하게 코디한 사람들과 공유하고 소통할 수 있어요.</dd>
                  </dl>
                  <div class="mock-video">
                    <VideoPlayer
                      :path="'/images/cs/stylelive_1_video.mp4'"
                      :poster="'/images/cs/stylelive_1_video_poster.png'"
                      :mute="true"
                      :hide-gui="true"
                      :play-on-scroll="true"
                      :videoRatio="118.4"
                    ></VideoPlayer>
                  </div>
                  <div class="contBg-box">
                      <v-layout align-center justify-space-between>
                      <div class="item">
                          <p>구매한 상품으로 코디한 스타일을 선보이는 <strong>스타일</strong></p>
                          <span class="icon"><img src="/images/cs/stylelive-icon1.svg" alt=""></span>
                      </div>

                      <div class="item">
                          <p>다양한 주제로 누구나 소통 할 수 있는 자유로운 <strong>토크</strong></p>
                          <span class="icon"><img src="/images/cs/stylelive-icon2.svg" alt=""></span>
                      </div>
                      </v-layout>
                  </div>
                </li>
                <!-- 2 -->
                <li>
                  <dl class="dl-wrap">
                    <dt>단추를 획득하고 리워드를 받아보세요</dt>
                    <dd>단추 획득마다 제공되는 쿠폰으로 쇼핑 혜택을 누려보세요.</dd>
                  </dl>
                  <div class="mock-video">
                    <VideoPlayer
                      :path="'/images/cs/stylelive_2_video.mp4'"
                      :poster="'/images/cs/stylelive_2_video_poster.png'"
                      :mute="true"
                      :hide-gui="true"
                      :play-on-scroll="true"
                      :videoRatio="118.4"
                    ></VideoPlayer>
                  </div>
                </li>
                <!-- 3 -->
                <li>
                  <dl class="dl-wrap">
                    <dt>활동 지수를 올려 레벨을 달성해 보세요</dt>
                    <dd>할동할수록 쌓이는 활동 지수로 레벨을 달성하고 레벨별 리워드를 받아보세요.</dd>
                  </dl>
                  <div class="mock-area">
                    <img src="/images/cs/stylelive3.png" alt="" class="mock-img">
                  </div>
                  <p class="sub-tit">활동 지수</p>
                  <!-- [퍼블수정]23.04.18 스타일라이브 서비스 안내 수정 -->
                  <table class="table-type1 mb-0 bolder-bt">
                    <colgroup>
                      <col width="470px" />
                      <col width="*" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>항목</th>
                        <th>포인트</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-center">
                          <p>스타일 게시물 업로드<strong>1</strong>건</p>
                        </td>
                        <td class="text-center">
                          <ul class="point-max">
                            <li><strong>1</strong>P</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-center">
                          <p>토크 게시물 등록<strong>2</strong>건</p>
                        </td>
                        <td class="text-center">
                          <ul class="point-max">
                            <li><strong>1</strong>P</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-center">
                          <!-- [퍼블수정]23.04.18 스타일라이브 서비스 안내 재수정 -->
                          <p>스타일/토크 게시물 리액션 주기&받기<strong>20</strong>건</p>
                        </td>
                        <td class="text-center">
                          <ul class="point-max">
                            <li><strong>1</strong>P</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-center">
                          <!-- [퍼블수정]23.04.18 스타일라이브 서비스 안내 재수정 -->
                          <p>스타일/토크 게시물 댓글 작성&받기<strong>20</strong>건</p>
                        </td>
                        <td class="text-center">
                          <ul class="point-max">
                            <li><strong>1</strong>P</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-center">
                          <p>팔로워 획득<strong>1</strong>명</p>
                        </td>
                        <td class="text-center">
                          <ul class="point-max">
                            <li><strong>1</strong>P</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p class="guide-sub-desc mt-16">* 일 최대 5P 획득 가능</p>
                  <p class="sub-tit">활동 지수 리워드</p>
                  <table class="table-type1 mb-0 bolder-bt">
                    <colgroup>
                      <col width="50%">
                      <col width="50%">
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col" class="text-center"><strong class="cmp-font fnt-16 bold">지급 조건</strong></th>
                        <th scope="col" class="text-center"><strong class="cmp-font fnt-16 bold">지급 리워드</strong></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td rowspan="2" class="text-center">
                          <p>활동지수 <strong>30P</strong><br />달성시 지급</p>
                        </td>
                        <td class="text-left">
                          <strong>3만원 바우처 리워드</strong>
                          <ul class="cmp-list list-dotType mt-2">
                            <li class="mb-0">10만원 이상 구매 시 사용가능</li>
                            <li>아울렛 상품 제외</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left">
                          <strong>10% 할인 쿠폰 리워드</strong>
                          <ul class="cmp-list list-dotType mt-2">
                            <li>전 상품 적용 가능</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="group-img">
                    <div>손님</div>
                    <div>스라피플</div>
                    <p class="group-title">스친</p>
                  </div>
                  <table class="table-type1">
                    <colgroup>
                      <col width="138px" />
                      <col width="360px" />
                      <col width="*" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>레벨</th>
                        <th>활동</th>
                        <th>리워드</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-center">
                          <strong>손님</strong>
                        </td>
                        <td class="text-center">
                          <p>스타일라이브를 처음 찾아주신 스친님</p>
                        </td>
                        <td class="text-left pw-24">
                          <ul class="cmp-dotList">
                            <li>게시물을 작성하고 스라피플이 되어보세요</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-center">
                          <strong>스라피플</strong>
                        </td>
                        <td class="text-center">
                          <p>1회 이상 포스팅 작성 스친</p>
                        </td>
                        <td class="text-left pw-24">
                          <ul class="cmp-dotList">
                            <!-- [240412] 스타일라이브 아바타 관련 부분 삭제 -->   
                            <!-- <li>아바타 만들기 (코디 아이템 제공)</li> -->
                            <li>스타일 게시물을 통한 구매 또는 구매 도움 발생 시 한섬 마일리지 적립<br />(실결제금액의 1%)</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                    <!-- //[퍼블수정]23.04.18 스타일라이브 서비스 안내 수정 -->
                  </table>
                </li>
                <!-- 4 -->

                <!-- [240412] 스타일라이브 아바타 관련 부분 삭제 -->   
                <!-- <li>
                  <dl class="dl-wrap">
                    <dt>나의 아바타를 스타일링 해보세요</dt>
                    <dd>나의 아바타를 스타일링해서 아바타 룸에 저장하고 프로필로도 활용해 보세요.</dd>
                  </dl>
                  <div class="mock-video">
                    <VideoPlayer
                      :path="'/images/cs/stylelive_3_video.mp4'"
                      :poster="'/images/cs/stylelive_3_video_poster.png'"
                      :mute="true"
                      :hide-gui="true"
                      :play-on-scroll="true"
                      :videoRatio="118.4"
                    ></VideoPlayer>
                  </div>
                </li> -->
              </ul>
            </section>
            <div class="qr-wrap">
              <dl class="dl-wrap">
                <dt>스타일라이브는 모바일 전용 서비스입니다.</dt>
                <dd class="mt-8">더한섬닷컴 앱을 설치 후 이용해보세요!</dd>
              </dl>
              <ul class="qr-img">
                <li><img src="/images/cs/qr_android.png" alt="android"></li>
                <li><img src="/images/cs/qr_ios.png" alt="ios"></li>
              </ul>
            </div>         
          </div>
        </div>
      </div>

    </div>
  </v-layout>
</template>

<script>
import VideoPlayer from '~/components/common/VideoPlayer'
export default {
  components: {
    VideoPlayer,
  },
  layout: 'LayoutBasics',
  created() {
    const me = this
    const json = require('~/static/json/cs_left_menu.json')
    me.menuList = json.list
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/cs.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
