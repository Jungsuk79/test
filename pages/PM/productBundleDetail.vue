
<template #body>
  <div class="contents pt-0"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap content-bundle">
      <v-btn small icon class="btn-close" @click="$emit('hide')">
        <i class="cmp-icon i-close">닫기</i>
      </v-btn>
      <!-- 상품 상단 영역 -->
      <div class="prd-detail-top">
        <div class="prd-detail-left">
          <!--상품 SelectBox-->
          <div class="prd-select">
            <div class="prd-select-top" :class="{'on' : prdSel}" @click="prdSelected('N')">
              <div class="prd-select-img" :style="{ backgroundImage: 'url(' + prdTopData.images + ')' }"></div>
                <div class="prd-select-info">
                    <div class="prd-select-tit">{{prdTopData.product_name}}</div>
                    <div class="prd-select-price">
                    <span class="prd-select-sell"><strong>{{prdTopData.sell_price}}</strong>원</span>
                    <span class="prd-select-origin">{{prdTopData.price}}원</span>
                    <span class="prd-select-discount">{{prdTopData.discount}}</span>
                    </div>
                </div>
            </div>
            <ul class="prd-select-option">
                <li v-for="(item, index) in prdSelData" :key="index" @click="prdSelected(index)">
                <div class="prd-select-img" :style="{ backgroundImage: 'url(' + item.images + ')' }"></div>
                <div class="prd-select-info">
                    <div class="prd-select-tit">{{item.product_name}}</div>
                    <div class="prd-select-price">
                        <span class="prd-select-sell"><strong>{{item.sell_price}}</strong>원</span>
                        <span class="prd-select-origin">{{item.price}}원</span>
                        <span class="prd-select-discount">{{item.discount}}</span>
                    </div>
                </div>
                </li>
            </ul>
            </div>
            <!--//상품 SelectBox-->
            <!-- 상품swipe 영역 -->
            <div class="swiper-box">
            <!-- 상품 swiper -->
            <div class="swiper-thumb-wrap" :class="{more: prdData[prdSelectIdx] && prdData[prdSelectIdx].images && prdData[prdSelectIdx].images.length >= 8}">
                <Swiper 
                ref="swiperThumbs"
                :options="galleryOptionThumbs"
                class="detail-top-swiper thumb">
                  <SwiperSlide v-for="(item, index) in prdData[prdSelectIdx].images" :key="index">
                    <div class="swiper-cnt" :class="{selected: curSlideIdx === index}">
                    <img :src="item.image_url" alt="상품이미지" role="button" class="img" @click="topSwiperSlideTo(index, 0)"/>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <button slot="button-prev" class="detail-swiper-top"></button>
                <button slot="button-next" class="detail-swiper-bottom"></button>
            </div>
            <Swiper 
                ref="swiperMain"
                v-prd-detail-img 
                :options="galleryOptionTop"
                class="detail-top-swiper normal"
                @slideChange="slideChangeTop">
                <SwiperSlide v-for="(item, index) in prdData[prdSelectIdx].images" :key="index">
                <div class="swiper-cnt">
                    <div v-if="item.video_url" class="video-cnt">
                    <VideoPlayer :loop="true" :path="item.video_url" :poster="item.image_url" :mute="true" :video-ratio="150.93" />
                    </div>
                    <img v-else :src="item.image_url" alt="상품이미지" class="img"/>
                </div>
                </SwiperSlide>
                <button slot="button-prev" class="detail-swiper-next"></button>
                <button slot="button-next" class="detail-swiper-prev"></button>
            </Swiper>
            <!-- //상품 swiper -->

            <!-- 버튼 모음 -->
            <button v-show="topSwiperBtnShow" class="cody-lookbook-btn">
                <span class="icon"></span>
                <span class="txt">코디&amp;룩북</span>
            </button>
            <button v-show="swiperPlayBtnShow && topSwiperBtnShow" class="video-play-btn" @click="topSwiperSlideTo(prdData[prdSelectIdx].images.length - 1,300)">
                <span class="icon">동영상 재생</span>
            </button>
            <!-- //버튼 모음 -->  
            </div>
            <!-- //상품swipe 영역 -->
            <!-- 프로모션 메시지 -->
            <template v-if="promotionMsg!==null">
            <transition name="fade-in-out">
                <div v-if="promotionMsg.show" class="promotion-txt">
                <!-- eslint-disable -->
                <nuxt-link v-if="promotionMsg.link" :to="promotionMsg.link" class="link" v-html="promotionMsg.message"></nuxt-link>
                <p v-else class="msg" v-html="promotionMsg.message"></p>
                <!-- eslint-disable -->
                </div>
            </transition>
            </template>
            <!-- //프로모션 메시지 -->

        </div>

        <!-- 상품상단 정보 -->
        <div class="detail-top-info">
          <div class="top-info-box">          
          <ul class="prd-category">
             <!-- 240411_상품상세 브레드크럼 內 PB스티커 추가 -->
              <li><nuxt-link to="#n">TOM GREYHOUND</nuxt-link></li>
              <li style="font-weight: 700;">
                <nuxt-link to="#n">
                  TOM GREYHOUND
                  <span class="label">PB</span>
                </nuxt-link>
              </li>
              <!-- // 240411_상품상세 브레드크럼 內 PB스티커 추가 -->
              <li><nuxt-link to="#n">여성</nuxt-link></li>
              <li><nuxt-link to="#n">아우터</nuxt-link></li>
              <li><nuxt-link to="#n"><span class="line">코트</span></nuxt-link></li>
          </ul>
          <div class="prd-name">
            <span>플로럴 자수 칼라 프릴 탑</span>
          </div>
          <div class="prd-price">
              <p class="sell-price"><strong>556,500</strong>원</p>
              <del class="price">126,500원</del>
              <p class="discount"><em>20</em>%</p>
              <v-btn icon class="discount-info">
              <i v-cmp-icon="{ size: 18, name: 'question' }">최대혜택가 보기</i>
              </v-btn>
          </div>
          <button class="prd-number">TN2B9KTOG29NM1_DN</button>
          <v-layout row align-items justify-space-between class="mt-10">
              <div class="prd-review" role="button" tabindex="0" @click="scrollMove('#reviewContent',-48)">
              <v-rating half-increments :value="5" readonly class="cmp-rating rating-default">
                  <v-icon><i class="icon star">별점</i></v-icon>
              </v-rating>
              <p class="txt">상품평 103</p>
              </div>
              <v-btn outlined small color="normal" class="prd-coupon-btn">쿠폰보기</v-btn>
          </v-layout>
          </div>
          <div class="top-info-box">
          <!-- 혜택&배송비 -->
          <dl class="prd-info">
              <dt>혜택</dt>
              <dd class="table">
              <div class="tr">
                  <div class="td td0">한섬마일리지</div>
                  <div class="td td1">
                  6,750M(5%)
                  <CommonTooltipBox :tooltip-list="['예약판매 상품 구매시 마일리지 3%추가 적립됩니다. (총 8%)']" />
                  </div>
              </div>
              <div class="tr">
                  <div class="td td0">H.Point</div>
                  <div class="td td1">135P(0.1%)</div>
              </div>
              <!-- [퍼블수정]23.02.13 오에라 마일리지 삭제 수정 -->
              <button class="cmp-font c-gray fnt-13"><span class="line">카드사 혜택</span></button>
              </dd>
          </dl>
          <dl class="prd-info">
              <dt>배송비</dt>
              <dd class="table">
              <div class="tr">
                  <div class="td">30,000원 이상 무료배송 (실결제 기준)</div>
              </div>
              <div class="tr">
                  <div class="td">퀵배송 시 5,000원 별도 (서울 지역만 가능)</div>
              </div>
              </dd>
          </dl>
          <!-- //혜택&배송비 -->
          </div>
          
          <div class="top-info-box">
            <dl class="prd-info">
                <dt>컬러</dt>
                <!-- 컬러칩 -->  
                <dd class="color-table">
                <ul class="color-chip-box size-type3">
                    <template>
                    <li v-for="(item, index) in prdData" :key="index" class="chip">
                        <input 
                        :id="'colorChip2'+index" type="radio" 
                        :checked="prdSelectIdx===item.prd_idx"
                        :value="item.color_value" name="colorChip" 
                        @input="colorChipChange(item.prd_idx)" 
                        />
                        <label :for="'colorChip2'+index">
                        <span :style="{'background-image': 'url('+item.color_image+')'}">{{item.color_value}}</span>
                        </label>
                    </li>
                    </template>
                </ul>
                <span class="color-name">{{colorVar}}</span>
                </dd>
                <!-- //컬러칩 -->  
            </dl>
            <!-- 사이즈 -->
            <dl class="prd-info size-table">
                <dt>사이즈</dt>
                <dd class="size-unit-list">
                  <span class="size-unit">
                    <span class="size-value">245</span>
                  </span>
                  <span class="size-unit">
                    <span class="size-value">250</span>
                    <span class="size-label">예약판매</span>
                  </span>
                  <span class="size-unit strike">
                    <span class="size-value">255</span>
                    <span class="size-label">재입고알림</span>
                  </span>
                  <span class="size-unit strike">
                    <span class="size-value">260</span>
                    <span class="size-label">품절</span>
                  </span>
                  <span class="size-unit">
                    <span class="size-value">265</span>
                    <span class="size-label">예약판매</span>
                  </span>
                  <span class="size-unit">
                    <span class="size-value">270</span>
                    <span class="size-label">예약판매</span>
                  </span>
                  <span class="size-unit">
                    <span class="size-value">275</span>
                  </span>
                  <span class="size-unit">
                    <span class="size-value">280</span>
                  </span>
                  <span class="size-unit">
                    <span class="size-value">295</span>
                  </span>
                </dd>
            </dl>
            <ul class="prd-size-box" v-if="prdSizeData.length > 0">
                <li v-for="(item, index) in prdSizeData" :key="index" >
                <button class="btn-close cmp-icon i-close cmp-icon-18" @click="sizeSelectClose(index)">닫기</button>
                <strong class="size-tit">{{item.name}}</strong>
                <p class="size-info">{{item.color}}<em>{{item.size}}</em></p>
                <div class="size-cout">
                    <ProductCountingBox max="10"></ProductCountingBox>
                    <span class="size-price"><strong>{{item.price}}</strong>원</span>
                </div>
                </li>
            </ul>
          </div>

          <div class="top-info-box mb-36">
          <!-- 증정&사은품 -->
          <p class="cmp-font prd-gift-tit">증정&amp;사은품</p>
          <div class="cmp-swiper-box mt-8 prd-gifts-swiper"><!-- 221202 상품상세 : prd-gifts-swiper 클래스 추가 -->
              <Swiper :options="{
                slidesPerView: 'auto', 
                spaceBetween: 8, 
                observer: true, 
                observeParents: true,
                }">
              <SwiperSlide v-for="(item, index) in giftsData" :key="index">
                  <div class="prd-gifts-box" role="button" tabindex="0" @click="giftsDetailView">
                  <i class="cmp-icon-etc cmp-icon-12 i-add"></i>
                  <div class="img-cnt">
                      <div v-if="item.type==='mileage'" class="mileage-img">
                      <div><strong>{{item.mileage | number}}</strong>M</div>
                      </div>
                      <v-img v-else :src="item.image" :alt="item.name" />
                      <p v-if="item.image_length" class="total">{{item.image_length}}</p>
                  </div>
                  <div class="txt-cnt">
                      <p class="name">
                      <template v-if="item.type==='mileage'">마일리지 적립</template>
                      <template v-else>{{item.name}}</template>
                      </p>
                      <template v-if="item.type==='present'">
                      <p class="desc">{{item.desc}}</p>
                      </template>
                      <template v-else>
                      <ul class="cmp-list list-dotType">
                          <li>{{item.date}}</li>
                          <li>{{item.desc}}</li>
                      </ul>
                      </template>
                  </div>
                  </div>
              </SwiperSlide>
              </Swiper>
          </div>
          <!-- //증정&사은품 -->
          </div>

        </div>
        <!-- //상품상단 정보 -->
     
      </div>
      <!-- //상품 상단 영역 -->

      <!-- 상품상세 메뉴 -->
      <div v-sticky-tabs="{fixTop : false, noTranslate: true, target: '.content-wrap.content-bundle'}" class="prd-detail-menu">
        <div class="menu-box">
          <button target="detailInfoContent2" class="on">상세정보</button>
          <button target="reviewContent2">상품평 103</button>
          <button target="styleContent2">스타일<span class="plus"></span></button>
        </div>
      </div>
      <!-- //상품상세 메뉴 -->

      <!-- 상품상세정보 -->
      <div id="detailInfoContent2">
        <!-- 실측사이즈/사이즈 조건표 -->
        <detailInfoContents></detailInfoContents>
        <!--// 실측사이즈/사이즈 조건표 -->

        <!-- 상품정보고시 -->
        <detailInfoNotice></detailInfoNotice>
        <!--// 상품정보고시 -->
      </div>
      <!-- //상품상세정보 -->

      <!-- 리뷰 -->
      <div id="reviewContent2" class="product-detail-reviewContents">
        <detailReviewContents></detailReviewContents>
      </div>
      <!-- //리뷰 -->

      <!-- 스타일 -->
      <div id="styleContent2"  class="product-detail-styleContents">
        <detailStyleContents></detailStyleContents>
      </div>
      <!-- //스타일 -->

      <!-- 팝업 버튼 -->
      <ul class="prd-detail-popBtns">
        <li>
          <button class="cmp-font block">배송/교환/반품 <i class="cmp-icon cmp-icon-12 i-next"></i></button>
        </li>
        <li>
          <button class="cmp-font block">매장 재고 확인 <i class="cmp-icon cmp-icon-12 i-next"></i></button>
        </li>
        <li>
          <button class="cmp-font block">상품 Q&amp;A 11 <i class="cmp-icon cmp-icon-12 i-next"></i></button>
        </li>
      </ul>
      <!-- //팝업 버튼 -->
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import VideoPlayer from '~/components/common/VideoPlayer'
import detailInfoContents from '~/pages/PM/detailInfoContents'
import detailReviewContents from '~/pages/PM/detailReviewContents'
import detailStyleContents from '~/pages/PM/detailStyleContents'
import detailInfoNotice from '~/pages/PM/detailInfoNotice'
import ProductCountingBox from '~/components/common/ProductCountingBox'

export default {
  components: {
    Swiper,
    SwiperSlide,
    VideoPlayer,
    detailInfoContents,
    detailReviewContents,
    detailStyleContents,
    detailInfoNotice,
    ProductCountingBox,
  },
  layout: 'LayoutBasics',
  data: () => ({
    topSwiperBtnShow : true,
    prdSelectIdx : 0, // 상단 상품 선택 index
    curSlideIdx: 0, // 선택된 슬라이드
    prdData : [], // 상단 상품 data
    swiperPlayBtnShow : true,
    colorVar : null, // 컬러칩 value
    prdSel : false, // select open or close
    prdTopData : null, // selected value
    prdSizeData : [],
    // promotionMsg : null,
    promotionMsg : { // 상단 프로모션 메시지
      once : false,
      show:false,
      message : '해당 상품 관련한 프로모션이 지금 진행중이예요.',
      link : '#n',
    },
    giftsData : [ // 증정품,사은품
      {
        type : 'present', // present 증정품 , event 사은품, mileage 사은품-마일리지
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-6.png',
        name : '오에라 화장품 샘플',
        desc : '오에라 화장품 샘플 100만원 이상 구매시 프리미엄 샘플 세트(파우치+에센스30ml)을 증정합니다.',
      },
      {
        type : 'event',
        image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-1.png',
        image_length : 3,
        name : 'IPANEMA 에코백',
        date : '6월 14일 ~ 소진 시 까지',
        desc : '폼더스토어, 폼맨즈라운지 IPANEMA 상품 구매 고객님께 사은품으로 IPANEM 에코백을 드립니다.',
      },
      {
        type : 'mileage',
        mileage : 100000,
        date : '6월 14일 ~ 6월 30일까지',
        desc : '정상 30만원 이상 구매 고객님께 100,000마일리지 드립니다.',},
    ],
    prdSelData : [
      {
        "product_name": "01) 플로럴 자수 칼라 프릴 탑",
        "sell_price": "355,000",
        "price": "284,000",
        "discount": "20%",
        "images": "https://img.thehandsome.com/md/publish/dummy/pc/bundle-prd-img0.png",
      },
      {
        "product_name": "02) 비딩 헴 크롭 데님 팬츠",
        "sell_price": "355,000",
        "price": "284,000",
        "discount": "20%",
        "images": "https://img.thehandsome.com/md/publish/dummy/pc/bundle-prd-img1.png",
      },
      {
        "product_name": "03) 브이넥 플리츠 드레스",
        "sell_price": "355,000",
        "price": "284,000",
        "discount": "20%",
        "images": "https://img.thehandsome.com/md/publish/dummy/pc/bundle-prd-img2.png"
      },
      {
        "product_name": "04) 브이넥 플리츠 드레스",
        "sell_price": "355,000",
        "price": "284,000",
        "discount": "20%",
        "images": "https://img.thehandsome.com/md/publish/dummy/pc/bundle-prd-img3.png",
      }
    ],
    optionSizeData : {
      select_idx : null,
      list : [
        {
          size_en : 'S',
          size_num : '82',
          state_msg : '소량재고',
          sold_out : false,
        },
        {
          size_en : 'M',
          size_num : '88',
          state_msg : '',
          sold_out : false,
        },
        {
          size_en : 'L',
          size_num : '94',
          state_msg : '',
          sold_out : false,
        },
        {
          size_en : 'XL',
          size_num : '100',
          state_msg : '재입고알림',
          sold_out : true,
        },
        {
          size_en : '2XL',
          size_num : '110',
          state_msg : '품절',
          sold_out : true,
        },
        {
          size_en : 'FREE',
          size_num : '',
          state_msg : '',
          sold_out : false,
        },
      ]
    },
    // 갤러리타입
    galleryOptionTop: {
      centeredSlides: true,
      navigation: {
        nextEl: ".detail-swiper-next",
        prevEl: ".detail-swiper-prev",
      },
      observer: true, 
      observeParents: true,
    },
    galleryOptionThumbs: {
      direction: 'vertical',
      slidesPerView: 'auto',
      spaceBetween: 10,
      slideToClickedSlide: true,
      mousewheel: true,
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
      },
      navigation: {
        nextEl: ".detail-swiper-bottom",
        prevEl: ".detail-swiper-top",
      },
      observer: true, 
      observeParents: true,
    }
  }),
  created() {
    const me = this
    const json = require('~/static/json/detail_product_list2.json')
    me.prdData = json.list
    for(let i=0;i<me.prdData.length;i++){
      me.prdData[i].prd_idx = i;
    }
    me.prdTopData = me.prdSelData[0];
  },
  mounted() {
    const me = this

    me.$nextTick(() => {
      const swiperMain = me.$refs.swiperMain.$swiper
      const swiperThumbs = me.$refs.swiperThumbs.$swiper
      swiperMain.params.control = swiperThumbs
      swiperThumbs.params.control = swiperMain
    })
  },
  methods: {
    closeDialog(){
      this.$emit('close')
    },
    setup(){
      const me = this
      // 230216 상품상세 : 삭제 Start
      /* const codyLookbookBtn = document.querySelector(".content-bundle .cody-lookbook-btn") // 코디&룩북 버튼
      codyLookbookBtn.classList.remove('hide');
      setTimeout(() => {
        codyLookbookBtn.classList.add('hide'); // 코디&룩북 버튼 텍스트 숨김
      }, 2000) */
      // 230216 상품상세 : 삭제 End

      me.colorVar = me.prdData[0].color_value
      console.log('popup setup', me.colorVar)
    },
    sizeSelect(val){
      const me = this
      const values = me.optionSizeData.list[val];
      // 동일 사이즈 존재시 패스
      let hasSize = false
      for(let i = 0; i<me.prdSizeData.length; i++){
        console.log(me.prdSizeData[i].size_en, values.size_en)
        if(me.prdSizeData[i].size_en === values.size_en){
          hasSize = true
          break
        }
      }
      if(hasSize){
        return
      }

      const sizeData = {
        name: '플로럴 자수 칼라 프릴 탑',
        size: values.size_en + ' ' + values.size_num,
        color: me.colorVar,
        price: '556,500',
        size_en: values.size_en // 동일 사이즈 판단 위해 추가
      }
      me.prdSizeData.unshift(sizeData)
    },
    sizeSelectClose(idx){
      const me = this
      me.prdSizeData.splice(idx, 1)
    },
    playVideo(){ // 상단 스와이퍼 video play
      const me = this
      me.$nextTick(function(){
        const vp = me.$el.querySelector(".detail-top-swiper .swiper-slide-active .video-player")
        if(vp){
          vp.__vue__.playVideo()
        }
      })
    },
    pauseVideo(){ // 상단 스와이퍼 video pause
      const me = this
      const vps = me.$el.querySelectorAll(".video-player")
      const len = vps.length
      let i, vp
      for(i=0; i<len; i++){
        vp = vps[i]
        vp.__vue__.pauseVideo()
      }
    },
    topSwiperSlideTo(idx, time){ // 상단 스와이퍼 slideTo
      const me = this
      const swiper = me.$el.querySelector('.detail-top-swiper.normal').swiper
      swiper.slideTo(idx,time)

      setTimeout(() => {
        me.curSlideIdx = idx
      }, time)
    },
    topSwiperPlayBtnSet(){ // 스와이프 마지막 영상 이동 버튼 노출 유무 세팅
      const me = this
      me.swiperPlayBtnShow = false
      for(let i=0;i<me.prdData[me.prdSelectIdx].images.length;i++){
        if(me.prdData[me.prdSelectIdx].images[i].video_url) me.swiperPlayBtnShow = true
      }
    },
    colorChipChange(idx){ // 컬러칩 선택
      const me = this
      me.topSwiperSlideTo(0,0)
      me.prdSelectIdx = idx
      me.topSwiperPlayBtnSet()
      me.colorVar = me.prdData[me.prdSelectIdx].color_value;
    },
    giftsDetailView(){
      console.log('증정&사은품 팝업 오픈')
    },
    prdSelected(idx){
      const me = this
      
      if(!me.prdSel){
        me.prdSel = true;
      }else{
        me.prdSel = false;
      }
      
      if(idx !== 'N'){
        me.prdTopData = me.prdSelData[idx];
      }
    },
    zzimBtn(e){
      const cl = e.currentTarget.classList
      if(cl.contains("on")){
        cl.remove("on")
      }else{
        cl.add("on")
      }
    },
    slideChangeTop(){
      const me = this
      const swiper = me.$el.querySelector('.detail-top-swiper.normal').swiper
      const idx = swiper.realIndex
      const time = 300
      const swiperThumb = me.$el.querySelector('.detail-top-swiper.thumb').swiper
      swiperThumb.slideTo(idx,time)
      
      setTimeout(() => {
        me.curSlideIdx = idx
      }, time)
    },
    scrollBottom(){
      const me = this
      const el = document.querySelector('.content-bundle .detail-top-info')
      me.$nextTick(function(){
        el.scroll({
          top: el.scrollHeight,
          behavior: 'smooth',
        })
      })
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/detail.scss';
// Start 230103 묶음상품 : style 삭제
/* .contents .content-wrap.content-bundle{padding-top:0;padding-right:40px;}
.v-navigation-drawer__content{overflow-y:hidden;} */
// End 230103 묶음상품 : style 삭제
</style>
