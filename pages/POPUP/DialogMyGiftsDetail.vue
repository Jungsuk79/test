<template>
  <DialogBasic class="popup-gifts-detail" header-title="증정&amp;사은품" @hide="closeDialog">
    <template #body>
      <div class="gifts-swiper-box" v-for="(item, index) in giftsList" :key="index">
        <div class="gifts-img-cnt">
          <!-- 증정/사은품 이미지 -->
          <img v-if="item.type==='mileage'" src="/images/order/mileage-img.png" alt="마일리지 적립" class="gifts-img"/>
          <img v-else :src="item.image" :alt="item.name" class="gifts-img"/>
          <!-- //증정/사은품 이미지 -->

          <!--20221226 자동응모 사은품 스티커 -->
          <div class="gifts-tag">자동응모 사은품 </div>
        </div>
        <p class="gifts-name">{{item.name}}</p>
        <ul class="cmp-dotList">
          <!-- eslint-disable -->
          <li v-for="(item2, index2) in item.desc" :key="index2" v-html="item2"></li>
          <!-- eslint-disable -->
          <li v-if="item.type==='auto'" class="star">자동응모 사은품 상세 내용은 &lsquo;<nuxt-link to="#n" class="line-txt">마이페이지 참여내역</nuxt-link>&rsquo;에서 확인 가능</li>
        </ul>
      </div>
    </template>
  </DialogBasic>
</template>
<script>

import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  components: { 
    DialogBasic,
  },
  data: () => ({
    swiperIdx : 0,
    giftsList : [
      {
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-6.png',
        name : '오에라 화장품 샘플',
        desc : [
          '3월 24일 ~ 4월 25일',
          '타임 브랜드 상품 100만원 이상 구매',
          'BO에서 입력한 기타설명이 들어갈 영역입니다.',
          'BO에서 입력한 기타설명이 들어갈 영역입니다.',
          '사은품은 이벤트 종료 후 취소 및 반품을 고려하여 5월 2일 이후 일괄 발송 예정',
        ],
      },
    ],
  }),
  created() {
    
  },
  mounted() {
  },
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>
<style lang="scss" scoped></style>
