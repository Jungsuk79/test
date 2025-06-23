<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap survey-list">
      <div class="event-detail">
        <div class="event-inner">
          <div class="page-title">고객리뷰</div>
          <v-layout align-center justify-space-between class="cmp-info info-type1">
            <p class="cmp-font fnt-16">더한섬닷컴 설문에 참여하시면 특별한 혜택을 드려요!</p>
            <v-btn text class="cmp-font fnt-13 underline">고객리뷰 안내</v-btn>
          </v-layout>
          <v-layout align-center justify-space-between class="check-wrap"><!-- [퍼블수정]22.12.27 건수 추가 -->
            <p class="cmp-font fnt-14 c-gray"><span>0</span>건</p>
            <v-checkbox label="나의 참여 설문 보기" class="cmp-form-checkbox"></v-checkbox>
          </v-layout>
          <table class="table-type1 last-border">
            <colgroup>
              <col width="88px" />
              <col width="*" />
              <col width="210px" />
              <col width="114px" />
            </colgroup>
            <thead>
              <tr>
                <th>상태</th>
                <th>제목</th>
                <th>설문기간</th>
                <th>참여여부</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="n in 20" :key="n">
                <td class="text-center">
                  <div class="cmp-labels ml-0 justify-center">
                    <!-- CASE 별 (디자인확인용) -->
                    <template v-if="n===1">
                      <div class="label black">진행중</div>
                    </template>
                    <template v-else-if="n===3"><!-- [퍼블수정]07.28 진행예정 태그 추가 -->
                      <div class="label grey c-white">진행예정</div>
                    </template>
                    <template v-else>
                      <div class="label grey c-white">종료</div>
                    </template>
                    <!-- //CASE 별 (디자인확인용) -->
                  </div>
                </td>
                <td>
                  <nuxt-link to="">더한섬닷컴 5월 설문 이벤트</nuxt-link>
                </td>
                <td class="text-center">
                  <p class="cmp-font fnt-14">2021.06.15 ~ 2022.08.31</p>
                </td>
                <td class="text-center">
                  <!-- CASE 별 (디자인확인용) -->
                  <span v-if="n===1" class="cmp-font fnt-14">참여완료</span>
                  <span v-else-if="n===2" class="cmp-font fnt-14 c-red">미참여</span>
                  <span v-else-if="n===3"></span><!-- [퍼블수정]07.28 진행예정 태그 추가 - [참여 여부값 미노출] -->
                  <span v-else class="cmp-font fnt-14 c-blue">참여가능</span>
                  <!-- //CASE 별 (디자인확인용) -->
                </td>
              </tr>
              <!-- [퍼블수정]22.12.02 설문 없는 경우 추가 -->
              <tr>
                <td colspan="4" class="pw-0 pt-0 pb-0">
                  <CommonNoData msg="설문이 없습니다."></CommonNoData>
                </td>
              </tr>
            </tbody>
          </table>
          <ProductListPaging />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'LayoutBasics',
  components : {
  },  
  data: () => ({
    tabModel: 0
  }),
  methods: {
  },
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/event.scss'; 
</style>
