<template>
  <div class="contents contents-type2"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <CommonContentsLeftMenu :title="'마이페이지'" :url="'/json/mypage_left_menu.json'"></CommonContentsLeftMenu>
      <div class="my-page-r-box theplus-gate"><!-- 마이페이지 -->
        <div class="cmp-page-tit line pb-40">
          <h2 class="tit">더플러스⁺</h2>
        </div>
        <div class="theplus-map">
          <!-- 상단 텍스트 -->
          <div class="theplus-myinfo">
            <dl>
              <dt>
                <i class="cmp-icon-etc cmp-icon-24 i-level-mania"></i><span class="ml-4">MANIA</span>
                <!--crew
                <i class="cmp-icon-etc cmp-icon-24 i-level-crew"></i><span class="ml-4">CREW</span>
                -->
                <!--friend
                <i class="cmp-icon-etc cmp-icon-24 i-level-friend"></i><span class="ml-4">FRIEND</span>
                -->
                <!--mania
                <i class="cmp-icon-etc cmp-icon-24 i-level-mania"></i><span class="ml-4">MANIA</span>
                -->
                <!--star
                <i class="cmp-icon-etc cmp-icon-24 i-level-star"></i><span class="ml-4">STAR</span>
                -->
                <!--thestar
                <i class="cmp-icon-etc cmp-icon-24 i-level-theStar"></i><span class="ml-4">THESTAR</span>
                -->
                <!--silver
                <i class="cmp-icon-etc cmp-icon-24 i-level-silver"></i><span class="ml-4">SILVER</span>
                -->
                <!--gold
                <i class="cmp-icon-etc cmp-icon-24 i-level-gold"></i><span class="ml-4">GOLD</span>
                --> 
                <!--platinum
                <i class="cmp-icon-etc cmp-icon-24 i-level-platinum"></i><span class="ml-4">PLATINUM</span>
                -->
                <!--theFirst
                <i class="cmp-icon-etc cmp-icon-24 i-level-theFirst"></i><span class="ml-4">THEFIRST</span>
                -->
              </dt>
              <dd><nuxt-link class="cmp-font fnt-13 button" to="#n"><span class="line">혜택안내</span></nuxt-link></dd>
            </dl>
            <dl>
              <dt class="cmp-sub-tit">
                <h3 class="tit">김한섬님의<br />더플러스⁺ 플러스맵</h3>
              </dt>
              <dd><v-btn outlined large color="primary" class="gray-outlined">리워드 내역</v-btn></dd>
            </dl>
          </div>
          <!-- //상단 텍스트 -->

          <!-- 플러스맵 (230104 플러스맵 : 추가) -->
          <ThePlusMap />
          
          <!-- 230104 플러스맵 : 삭제 -->
          <!-- <div style="position: relative;">
            <h2 class="cmp-font c-red fnt-20" style="text-align: center;position: absolute; top:27%;width:100%;">샘플 이미지 / 게임영역 추후 작업 예정</h2>
            <img src="/images/theplus/map_sample.png" alt=""/>
          </div> -->
          <!-- //플러스맵 -->

          <CommonSelectBox id="selectId0" title="회차 선택">
            <template #optionList>
              <option value="placeholder">선택해 주세요.</option>
              <option value="option1">1회차</option>
              <option value="option2">2회차</option>
              <option value="option3">3회차</option>
              <option value="option4">4회차</option>
            </template>
          </CommonSelectBox>
        </div>


        <div class="cmp-sub-tit">
          <h3 class="tit">더플러스⁺ 소식</h3>
          <nuxt-link class="cmp-font button" to="#n">전체보기<i class="cmp-icon cmp-icon-12 i-next"></i></nuxt-link>
        </div>

        <!-- 이벤트 -->
        <div class="cmp-sub-tit line mt-40 mb-24">
          <h3 class="tit cmp-font fnt-20">이벤트</h3>
        </div>
        <ul class="board-list">
          <li v-for="item, index in eventList" :key="index">
            <nuxt-link :to="item.link_url" >
              <div class="thumb">
                <v-img :src="item.image_url" alt="이벤트 썸네일 이미지"></v-img>
              </div>
              <dl class="list-info"> 
                <dt>{{item.title}}</dt>
                <dd>
                  <span v-if="item.event_end" class="black-label">종료</span>
                  {{item.date}}
                </dd>
              </dl>
            </nuxt-link>
          </li>
        </ul>
        <!-- //이벤트 -->

        <!-- 공지사항 -->
        <div class="cmp-sub-tit mt-60">
          <h3 class="tit cmp-font fnt-20">공지사항</h3>
        </div>
        <div class="product-row-table">
          <table>
            <caption>상품리스트</caption>
            <colgroup>
              <col style="width:auto;"/>
              <col style="width:138px;"/>
            </colgroup>
            <thead>
              <tr>
                <th>제목</th>
                <th>등록일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-left">
                  <nuxt-link to="#none" class="line-cut">
                    [당첨자발표] 핸썸TV 라이브 방송(11/25) 방송 중 이벤트 당첨 결과 안내
                  </nuxt-link>
                </td>
                <td class="text-center">
                  2022.11.16
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //공지사항 -->

        <nuxt-link class="cmp-font button mt-60 cmp-font fnt-18" to="#n">멤버십 설정<i class="cmp-icon cmp-icon-12 i-next"></i></nuxt-link>

        <!-- 유의사항 -->
        <div class="cmp-sub-tit small mt-line">
          <h3 class="tit">더플러스⁺ 유의사항</h3>
        </div>
        <ul class="cmp-dotList mb-40">
          <li>결제 후 14일 이내 서비스 이용 이력이 없는 경우 결제 취소(청약철회)가 가능하며, 고객센터에 문의해 주세요.</li>
          <li>결제 후 14일이 경과하거나 서비스 사용 이력이 있는 경우에는 멤버십 정기결제 취소만 가능합니다.</li>
          <li>결제수단의 정지/한도초과/정보변경 등의 사유로 결제상태가 변경될 경우, 결제 및 서비스가 일시 정지되며 재결제 하시면 다시 결제 및 서비스가 시작됩니다.</li>
        </ul>
        <!-- // 유의사항 -->
      </div>
    </div>
  </div>
</template>

<script>
import ThePlusMap from "~/components/mypage/ThePlusMap.vue" // 230104 플러스맵

export default {
  components: {
    ThePlusMap // 230104 플러스맵 : 추가
  },
  layout: 'LayoutBasics',
  data() {
    return {
      eventList : [
        {
          image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/theplus-event0.png',
          link_url : '#none',
          title : '더한섬닷컴 멤버십 THE 클럽',
          date : '2021.12.07 ~ 2021.12.26',
          event_end : false,
        },
        {
          image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/theplus-event1.png',
          link_url : '#none',
          title : '신용카드 무이자 혜택', 
          date : '2021.12.07 ~ 2021.12.26',
          event_end : false,
        },
        {
          image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/theplus-event2.png',
          link_url : '#none',
          title : '더한섬하우스 이벤트 모아보기',
          date : '2021.12.07 ~ 2021.12.26',
          event_end : true,
        },
      ]
    }
  },
  created() {
  },
  methods: {
  },
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/theplusmember.scss'; //페이지 전용 css
</style>