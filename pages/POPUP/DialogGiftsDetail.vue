<template>
  <DialogBasic class="popup-gifts-detail btmfull-ver" header-title="증정&amp;사은품" @hide="closeDialog"><!-- 220913 쇼핑백 : btmfull-ver 클래스 추가 -->
    <template #body>
      <div class="gifts-swiper-box-newswipe"><!-- [퍼블수정]23.01.18 -->
        <div v-for="(item,index) in giftsList" :key="index" class="box cmp-swiper-box" :class="{on:index===swiperIdx}">
          <Swiper 
            :options="{
              autoHeight : true,
              pagination: {
                el: '.cmp-swiper-paginationBar'+index,
                type: 'progressbar',
              },
              navigation: {
                prevEl: '.swiper-button-prev'+index,
                nextEl: '.swiper-button-next'+index,
              },
              on: {
                realIndexChange: swiperChange1
              },
              observer: true, 
              observeParents: true,
            },"
            class="gifts-swiper-newswipe"
            :class="{'swiper-no-swiping':item.length <= 1}"
          >
            <SwiperSlide v-for="(item2, index) in item" :key="index">
              <div class="gifts-img-cnt">
                <!-- 증정/사은품 이미지 -->
                <img v-if="item2.type==='mileage'" src="/images/order/mileage-img.png" alt="마일리지 적립" class="gifts-img"/>
                <!-- 221202 증정사은품 : 이미지 마크업 변경 -->
                <!-- <img v-else :src="item2.image" :alt="item2.name" class="gifts-img"/> --><!-- 삭제 -->
                <div v-else v-background-image="{url:item2.image}"><em class="ir">{{item2.name}}</em></div><!-- ,contain:true -->
                <!-- // 221202 증정사은품 : 이미지 마크업 변경 -->
                <!-- //증정/사은품 이미지 -->
                <!-- 증정/사은품 태그 -->
                <span v-if="item2.type==='present'" class="gifts-tag">증정품</span>
                <span v-if="item2.type==='auto'" class="gifts-tag">자동응모 사은품</span>
                <span v-if="item2.type!=='present'&&item2.type!=='auto'" class="gifts-tag">사은품</span>
                <!-- //증정/사은품 태그 -->
              </div>
            </SwiperSlide>
            <div v-show="item.length > 1" slot="pagination" class="swiper-pagination cmp-swiper-paginationBar" :class="'cmp-swiper-paginationBar'+index"></div>
          </Swiper>
          <Swiper
            :options="{
              autoHeight : true,
              effect : 'fade',
              on: {
                slideChange: swiperChange2
              },
              observer: true, 
              observeParents: true,
            }"
            class="gifts-swiper-newswipe2"
            :class="{'swiper-no-swiping':item.length <= 1}"
          >
            <SwiperSlide v-for="itm, idx in item" :key="idx" >
              <div class="gifts-info-div">
                <p class="gifts-name">{{itm.name}}</p>
                <ul class="cmp-dotList">
                  <!-- eslint-disable -->
                  <li v-for="(item3, index3) in itm.desc" :key="index3" v-html="item3"></li>
                  <!-- eslint-disable -->
                  <li v-if="itm.type==='auto'" class="star">자동응모 사은품 상세 내용은 &lsquo;<nuxt-link to="#n" class="line-txt">마이페이지 참여내역</nuxt-link>&rsquo;에서 확인 가능</li>
                </ul>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </template>
    <template #footer>
      <!-- 220913 쇼핑백 : <template #footer>로 버튼 위치 변경 -->
      <div v-if="giftsList.length > 1" class="gifts-bottom-btn">
        <button class="btn" :disabled="swiperIdx===0" @click="giftsPrev">
          <i class="cmp-icon i-prev"></i>
          <span>이전</span>
        </button>
        <button class="btn" :disabled="swiperIdx===giftsList.length-1" @click="giftsNext">
          <span>다음</span>
          <i class="cmp-icon i-next"></i>
        </button>
      </div>
    </template>
  </DialogBasic>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  components: { 
    DialogBasic,
    Swiper, 
    SwiperSlide
  },
  data: () => ({
    swiperIdx : 0,
    //  [퍼블수정]23.01.18
    swiper1: null,
    swiper2: null,
    giftsList : [
      [
        {
          type : 'present',
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-6.png',
          name : '오에라 화장품 샘플',
          desc : [
            '3월 24일 ~ 4월 25일',
            '오에라 4월 스페셜 구성<br>- 멀티 베네핏 캘리브레이터 5ml<br>- 하이드라리프트 에센스-인-워터 10ml<br>- 하이드라리프트 에센스-인-로션 10ml',
          ],
        }
      ],
      [
        {
          image : '',// https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-0.png
          name : '잡화 스페셜 기프트_타임 스카프',
          desc : [
            '05월 27일  19:00~24:00 단, 5시간',
            '오브제 전상품 실 결제 80만원 이상 구매하신 고객님께 "패드 숄더 티셔츠"를 드립니다.<br>*아울렛 제외, 실 결제 80만원 이상(※1인 1개 제한, 컬러 및 사이즈 랜덤 증정) 사은품은 이벤트 종료 후, 취소 및 반품을 고려하여 6월 17일 이후 일괄 발송 예정입니다. (1~3일 지연 가능)',
          ],
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-1.png',
          name : 'IPANEMA 에코백',
          desc : [
            '2022년 3월 24~ 소진 시 까지',
            '더캐시미어띵즈의 WEEKNDRES 상품 3만원 이상 구매 더캐시 미어띵즈의 WEEKNDRES 상품 3만원 이상 구매',
            '선착순 10개, 소진 시 종료',
            '아울렛 제외/실결제금액 기준 (1인 1개 제한)',
            '사은품은 이벤트 종료 후 취소 및 반품을 고려하여 5월 2일 이후 일괄 발송 예정',
          ],
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-2.png',
          name : '톰그레이 X 콤팩트레코드바 미니 에코백',
          desc : [
            '2022년 3월 24~ 소진 시 까지',
            '더캐시미어띵즈의 WEEKNDRES 상품 3만원 이상 구매 더캐시 미어띵즈의 WEEKNDRES 상품 3만원 이상 구매',
            '선착순 10개, 소진 시 종료',
            '아울렛 제외/실결제금액 기준 (1인 1개 제한)',
            '사은품은 이벤트 종료 후 취소 및 반품을 고려하여 5월 2일 이후 일괄 발송 예정',
          ],
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-3.png',
          name : '폼더스토어 PAIRS양말',
          desc : [
            '2022년 3월 24~ 소진 시 까지',
            '더캐시미어띵즈의 WEEKNDRES 상품 3만원 이상 구매 더캐시 미어띵즈의 WEEKNDRES 상품 3만원 이상 구매',
            '선착순 10개, 소진 시 종료',
            '아울렛 제외/실결제금액 기준 (1인 1개 제한)',
            '사은품은 이벤트 종료 후 취소 및 반품을 고려하여 5월 2일 이후 일괄 발송 예정',
          ],
        },
        {
          type : 'auto',
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-7.png',
          name : '바디 브러쉬 & 코튼 매쉬 파우치',
          desc : [
            '05월 27일 19:00~24:00 단, 5시간',
            '2022년 3월 24~ 소진 시 까지',
            '더캐시미어띵즈의 WEEKNDRES 상품 3만원 이상 구매',
            '선착순 10개, 소진 시 종료',
            '사은품은 이벤트 종료 후 취소 및 반품을 고려하여 5월 2일 이후 일괄 발송 예정',
          ],
        },
      ],
      [
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-3.png',
          name : '폼더스토어 PAIRS양말',
          desc : [
            '2022년 3월 24~ 소진 시 까지',
            '더캐시미어띵즈의 WEEKNDRES 상품 3만원 이상 구매 더캐시 미어띵즈의 WEEKNDRES 상품 3만원 이상 구매',
            '선착순 10개, 소진 시 종료',
            '아울렛 제외/실결제금액 기준 (1인 1개 제한)',
            '사은품은 이벤트 종료 후 취소 및 반품을 고려하여 5월 2일 이후 일괄 발송 예정',
          ],
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-4.png',
          name : 'SJ X 썬키스트 그립톡',
          desc : [
            '2022년 3월 24~ 소진 시 까지',
            '더캐시미어띵즈의 WEEKNDRES 상품 3만원 이상 구매 더캐시 미어띵즈의 WEEKNDRES 상품 3만원 이상 구매',
            '선착순 10개, 소진 시 종료',
            '아울렛 제외/실결제금액 기준 (1인 1개 제한)',
            '사은품은 이벤트 종료 후 취소 및 반품을 고려하여 5월 2일 이후 일괄 발송 예정',
          ],
        },
        {
          type : 'mileage',
          name : '적립 마일리지 3,000M',
          desc : [
            '3월 24일 ~ 4월 25일',
            '더캐시미어띵즈의 WEEKNDRES 상품 3만원 이상 구매',
            '아울렛 제외/실결제금액 기준 (1인 1개 제한)',
          ],
        },
      ]
    ],
  }),
  created() {
    
  },
  mounted() {
    const me = this
    me.$nextTick(() => {
      setTimeout(() => {
        //  [퍼블수정]23.01.18
        const giftsSwiper = me.$el.querySelectorAll('.gifts-swiper-newswipe')
        for(let i=0;i<giftsSwiper.length;i++){
          giftsSwiper[i].swiper.init();
        }
      }, 100)
    })
  },
  methods: {
    closeDialog() {
      this.$emit('close')
    },
    giftsPrev(){
      const me = this
      //  [퍼블수정]23.01.18
      const giftsSwiper = me.$el.querySelectorAll('.gifts-swiper-newswipe')
      me.swiperIdx--
      giftsSwiper[me.swiperIdx].swiper.slideTo(0,0)
    },
    giftsNext(){
      const me = this
      //  [퍼블수정]23.01.18
      const giftsSwiper = me.$el.querySelectorAll('.gifts-swiper-newswipe')
      me.swiperIdx++
      giftsSwiper[me.swiperIdx].swiper.slideTo(0,0)
    },
    //  [퍼블수정]23.01.18
    swiperChange1(){
      const me = this
      const swiper1 = me.$el.querySelectorAll('.gifts-swiper-newswipe')
      const swiper2 = me.$el.querySelectorAll('.gifts-swiper-newswipe2')

      swiper2[me.swiperIdx].swiper.slideTo(swiper1[me.swiperIdx].swiper.realIndex)
    },
    swiperChange2(){
      const me = this
      const swiper1 = me.$el.querySelectorAll('.gifts-swiper-newswipe')
      const swiper2 = me.$el.querySelectorAll('.gifts-swiper-newswipe2')

      swiper1[me.swiperIdx].swiper.slideTo(swiper2[me.swiperIdx].swiper.realIndex,400)
    },
  },
}
</script>
<style lang="scss" scoped></style>
