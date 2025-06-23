<template>
  <DialogBasic class="btmfull-ver popup-order-join-theplus" @hide="closeDialog">
    <template #body>
			<Swiper 
				class="order-theplus-swiper"
				:options="{
					slidesPerView: 1,
					slidesPerGroup: 1,
					spaceBetween: 0,
					on: {
						init: swiperInit,
						realIndexChange : swiperChange
					},
					pagination: {el: '.cmp-swiper-paginationBullet',clickable: true}
				}"
				:class="{'swiper-no-swiping':slidenum < 2}"
			>
				<SwiperSlide v-for="num in slidenum" :key="num">
					<template v-if="num === 1 && slidenum === 2">
						<h1 class="tit"><b>THE PLUS⁺</b><br/>가입 혜택을 누려보세요!</h1>
						<div class="inner">
							<ul class="tppr-membership-list">
								<li>
									<div class="list-cnt">
										<div class="txt-cnt">
											<div class="txt">
												<div class="txt1 mb-2"><strong>가입 쿠폰 5종</strong></div>
												<div class="txt0 mb-0">10% + 5만원 추가 할인</div>
											</div>
											<i class="coupons-w"></i>
										</div>
									</div>
								</li>
								<li>
									<div class="list-cnt">
										<div class="txt-cnt">
											<div class="txt">
												<div class="txt1 mb-2"><strong>플러스맵</strong></div>
												<div class="txt0 mb-0">최대 46,530M와 3종 쿠폰</div>
											</div>
											<i class="stamp"></i>
										</div>
									</div>
								</li>
								<li>
									<div class="list-cnt">
										<div class="txt-cnt">
											<div class="txt">
												<div class="txt1 mb-2"><strong>첫 구매 기프트</strong></div>
												<div class="txt0 mb-0">프로 쇼퍼들을 위한 아이템</div>
											</div>
											<i class="rewards"></i>
										</div>
									</div>
								</li>
								<li>
									<div class="list-cnt">
										<div class="txt-cnt">
											<div class="txt">
												<div class="txt1 mb-2"><strong>케어플러스 체험권</strong></div>
												<div class="txt0 mb-0">프리미엄 세탁 서비스</div>
											</div>
											<i class="laundry"></i>
										</div>
									</div>
								</li>
								<li class="pt-20 pr-0">
									<p class="cmp-font fnt-14 text-center">더 많은 혜택들이 기다리고 있어요</p>
								</li>
							</ul>
						</div>
					</template>
					<!-- <template v-if="num === 2 || slidenum === 1">
						<h1 class="tit color"><b>8th anniv.</b><br/>섬세한 라이프로 <b>8llow me</b></h1>
						<div class="product-cover">
							<img src="https://img.thehandsome.com/md/publish/event/230918_8thmain_event/0918-img/tab01-img02-contimg01.png" />
							<p class="pt-16">상품 수령 후 배송완료되면,<br /><b>티켓을 드려요!</b></p>
							<p class="pt-14">티켓을 <b>GIFT</b>로 교환해보세요!</p>
						</div>
					</template> -->
						<!-- 240130_행운의 리워드 -->
					<template v-if="num === 2 || slidenum === 1">
						<div class="img-wrap">
							<img class="img" src="https://img.thehandsome.com/md/publish/event/240123_seolbenefit/pop-reward.jpg" alt="럭키 행운의 리워드"/>
						</div>
					</template>
						<!-- // 240130_행운의 리워드 -->
				</SwiperSlide>
				<div slot="pagination" class="cmp-swiper-paginationBullet swiper-pagination"></div>
			</Swiper>
      <v-dialog v-model="onlymobile">
        <DialogBasic class="popup-basic popup-onlymobile" header-title="더플러스⁺ 가입은 모바일에서만 가능합니다." :width="408" @hide="closeonlymobile">
          <template #body>
            <div class="inner">
               <p>더한섬닷컴 모바일 WEB/APP > 마이페이지 ><br/>THE서비스 중 더플러스⁺를 선택하여<br/>가입하실 수 있습니다.</p>
            </div>
            <div class="popup-btn-box">
              <v-btn @click="onlymobile = false" large color="primary">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
    </template> 
    <template #footer>
			<!-- 퍼블 편의상 1번째 페이지, 2번째 페이지에 각각의 버튼이 노출되게 작업했습니다.
			가입 혜택 페이지 버튼 -->
			<v-btn v-if="activeSlideIndex === 0 && slidenum === 2" @click="openonlymobile" large block color="primary">가입하고 다음 주문 혜택받기</v-btn>
			<!-- 이벤트 버튼 -->
			<v-btn v-if="activeSlideIndex === 1 || slidenum === 1" class="c-white" large color="primary">이벤트 참여하기</v-btn>
    </template>
  </DialogBasic>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  components: { 
    Swiper, 
    SwiperSlide,
    DialogBasic
  },
  props: {},
  data: () => ({
    // [퍼블수정]23.07.18 더플러스 가입 베너 추가
    onlymobile : false,
    DialogTheplusJoin: true,
    swiper1: null,
		activeSlideIndex: 0,
		slidenum: 1
  }),
  // [퍼블수정]23.07.18 더플러스 가입 베너 추가
  watch : {
    onlymobile(){
      const me = this
      me.preventPageScroll(me.onlymobile)
    }
  },
  // [퍼블수정]23.07.18 더플러스 가입 베너 추가
  mounted(){
    // this.$nextTick(() => {
    //   this.swiperInit()
    // })
    // this.$nextTick(() => {
    //   setTimeout(()=>{
    //     this.closeDialog()
    //   },5000)
    // });
  },
  methods: {
    openonlymobile(){
      this.onlymobile = true
    },
    closeonlymobile(){
      this.onlymobile = false
    },
    swiperInit(){
      const me = this
      const sw = me.$el.querySelector(".order-theplus-swiper").swiper
      if(sw){
        me.swiper1 = sw
        me.swiper1.update()
      }
    },
    swiperChange(){
      const me = this
      const sw = me.$el.querySelector(".order-theplus-swiper").swiper
      me.swiper1 = sw
      me.activeSlideIndex = me.swiper1.realIndex
    },
    closeDialog(){
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss">
  .v-dialog{overflow:visible !important;}
</style>
