<template>
  <div v-scroll="scrollContent" class="contents contents-type2"><!-- 2022-09-15-prd 스크롤 이벤트 추가 -->
    <div class="content-wrap">
      <div :class="{'prd-off' : DialogProductZoom}" class="prd-content-wrap">
        <!-- 상품 상단 영역 -->
        <div class="prd-detail-top">
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
                  <img v-else :src="item.image_url" alt="product image" class="img"/>
                </div>
              </SwiperSlide>
              <button slot="button-prev" class="detail-swiper-next"></button>
              <button slot="button-next" class="detail-swiper-prev"></button>
            </Swiper>
            <!-- //상품 swiper -->

            <!-- 버튼 모음 -->
            <button class="zoom-btn" @click="DialogProductZoom = true">
              <span class="icon">zoom</span>
            </button>
            <button class="cody-lookbook-btn">
              <span class="icon"></span>
              <span class="txt">Coordination&amp;Lookbook</span>
            </button>
            <button v-show="swiperPlayBtnShow && topSwiperBtnShow" class="video-play-btn" @click="topSwiperSlideTo(prdData[prdSelectIdx].images.length - 1,300)">
              <span class="icon">play video</span>
            </button>
            <!-- //버튼 모음 -->

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
          <!-- //상품swipe 영역 -->

          <!-- 상품상단 정보 -->
          <div class="detail-top-info">
            <div class="top-info-box">          
              <ul class="prd-category">
                <li><nuxt-link to="#n">SJSJ</nuxt-link></li>
                <li><nuxt-link to="#n">WOMEN</nuxt-link></li>
                <li><nuxt-link to="#n">OUTER</nuxt-link></li>
                <li><nuxt-link to="#n"><span class="line">JACKET</span></nuxt-link></li>
              </ul>
              <div class="prd-name">
                <span>[sub brand] mock neck drawstring jumper</span>
                <ShareBox ref="shareBox"></ShareBox><!-- 2022-09-15-prd 공유하기 -->
                <button class="zzim-btn" @click="zzimBtn"><span class="ir">heart</span></button>
              </div>
              <div class="prd-price">
                <p class="sell-price"><strong>$ 556,500</strong></p>
                <del class="price">$ 126,500</del>
                <p class="discount"><em>20</em>%</p>
                <v-btn icon class="discount-info">
                  <i v-cmp-icon="{ size: 18, name: 'question' }">최대혜택가 보기</i>
                </v-btn>
              </div>
              <button class="prd-number">TN2B9KTOG29NM1_DN</button>
              <v-layout row align-items justify-space-between class="mt-10">
                <div class="prd-review" role="button" tabindex="0" @click="scrollMove('#reviewContent',-48)">
                  <v-rating half-increments :value="5" readonly class="cmp-rating rating-default">
                    <v-icon><i class="icon star">star</i></v-icon>
                  </v-rating>
                  <p class="txt">Reviews 103</p>
                </div>
                <v-btn outlined small color="normal" class="prd-coupon-btn">Coupon</v-btn>
              </v-layout>
            </div><!-- .top-info-box End -->
            <div class="top-info-box">
              <!-- 혜택&배송비 -->
              <div class="prd-info-shipping">
                <div>Shipping fee</div>
                <div class="mt-8">Purchase Over ₩200,000(approx. $180) For Free Shipping
                  <CommonTooltipBox :width="540" class="ml-4 mt-4">
                    <template #content class="disabled">
                      <div class="prd-shipping-wrap">
                        <div class="prds-title mb-10">
                          Shipping Fee
                        </div>
                        <table class="table-type1">
                          <colgroup>
                            <col width="62px" />
                            <col width="129px" />
                            <col width="*" />
                          </colgroup>
                          <thead>
                            <tr>
                              <th>Area</th>
                              <th>Shipping Fee</th>
                              <th>Country</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>A</td>
                              <td>￦ 10,000</td>
                              <td class="text-left">China, Hong Kong, Japan, Taiwan, Singapore, Vietnam, Malaysia, Indonesia, Brunei, Thailand, Philippines, Bangladeshi, India</td>
                            </tr>
                            <tr>
                              <td>B</td>
                              <td>￦ 20,000</td>
                              <td class="text-left">USA, Canada, Australia, NewZealand, Europe, MiddleEast</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </template>
                  </CommonTooltipBox>
                </div>
              </div>
              <!-- //혜택&배송비 -->
            </div><!-- .top-info-box End -->
            <div class="top-info-box">
              <dl class="prd-info">
                <dt>Color</dt>
                <!-- 컬러칩 -->  
                <dd class="color-table">
                  <ul class="color-chip-box size-type3">
                    <template>
                      <li v-for="(item, index) in prdData" :key="index" class="chip">
                        <input 
                          :id="'colorChip'+index" type="radio" 
                          :checked="prdSelectIdx===item.prd_idx" :disabled="false" 
                          :value="item.color_value" name="colorChip" 
                          @input="colorChipChange(item.prd_idx)" 
                        />
                        <label :for="'colorChip'+index">
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
              <dl class="prd-info">
                <dt>&nbsp;</dt>
                <dd>
                  <v-layout row align-center justify-space-between>
                    <div>
                      <button class="cmp-font fnt-13 button"><span class="line">Size Guide</span></button>
                    </div>
                  </v-layout>
                </dd>
              </dl>
              <dl class="prd-info mt-8 align-center">
                <dt>Size</dt>    
                <dd>
                  <ProductOptionSelect default-text="Select Size" :size-data="optionSizeData" @submit="sizeSelect"/>
                </dd>
              </dl>
              <dl class="prd-info align-center">
                <dt>Quantity</dt>
                <dd>
                  <CommonCountingBox max="10"></CommonCountingBox>
                </dd>
              </dl>
            </div>
            <div class="top-info-box">
              <div class="prd-info-totalprice">
                <span class="prdt-label"><strong>Total</strong>(DUTY/TAX not included)</span>
                <span class="prdt-price">$<strong>556,500</strong></span>
              </div>
              <div class="prd-won-area">
                <span class="prdt-won">￦<strong>556,500</strong></span>
                <span class="prdt-won-right">(excl. Duty/Tax)</span>
                <p class="prdt-won-desc">
                  Price in USD is just for your reference and it may vary by currency exchange rate, your payment transaction will be in KRW.
                </p>
              </div>
              <div class="prd-detail-btn">
                <v-btn height="60" color="primary">Shopping Bag</v-btn>
                <v-btn height="60" color="primary">Buy Now</v-btn>
              </div>
            </div>
          </div>
          <!-- //상품상단 정보 -->
        </div>
        <!-- //상품 상단 영역 -->

        <!-- 상품상세 메뉴 -->
        <div v-sticky-tabs="{fixTop : true, noTranslate: true}" class="prd-detail-menu">
          <div class="menu-box">
            <button target="detailInfoContent">Detailed Info</button>
            <button target="reviewContent">Reviews 103</button>
            <button target="styleContent">Style<span class="plus"></span></button>
          </div>
        </div>
        <!-- //상품상세 메뉴 -->

        <!-- 상품상세정보 -->
        <div id="detailInfoContent">
          <!-- 실측사이즈/사이즈 조건표 -->
          <detailInfoContents></detailInfoContents>
          <!--// 실측사이즈/사이즈 조건표 -->

          <!-- 상세 이미지 영역 -->
          <div class="full-width prd-html-detail">
            <div 
              class="editor-box prd-html-editor" :class="{'h-auto':!htmlMore.use}" 
              :style="!htmlMore.open ? 'height:'+htmlMore.hiddenH+'px;' : 'height:auto'"
            >
              <img src="https://img.thehandsome.com/md/publish/dummy/pc/details-html-img0.png" alt="상품 상세 이미지1"/>
              <img src="https://img.thehandsome.com/md/publish/dummy/pc/details-html-img1.png" alt="상품 상세 이미지3"/>
              <!-- //HTML 관리자 등록 -->
            </div>
            <div v-if="htmlMore.use" class="more-btn-cnt" :class="{open:htmlMore.open}">
              <v-btn v-if="!htmlMore.open" outlined block large color="primary" class="more-btn" @click="htmlAllView(true)">see more<i class="cmp-icon cmp-icon-12 i-down ml-4"></i></v-btn>
              <v-btn v-else outlined block large color="primary" class="more-btn" @click="htmlAllView(false)">close<i class="cmp-icon cmp-icon-12 i-up ml-4"></i></v-btn>
            </div>
          </div>
          <!--// 상세 이미지 영역 -->

          <!-- 상품정보고시 -->
          <detailInfoNotice></detailInfoNotice>
          <!--// 상품정보고시 -->
        </div>
        <!-- //상품상세정보 -->

        <!-- 리뷰 -->
        <div id="reviewContent" class="product-detail-reviewContents">
          <detailReviewContents></detailReviewContents>
        </div>
        <!-- //리뷰 -->

        <!-- 스타일 -->
        <div id="styleContent"  class="product-detail-styleContents">
          <detailStyleContents></detailStyleContents>
        </div>
        <!-- //스타일 -->

        <!-- 팝업 버튼 -->
        <ul class="prd-detail-popBtns">
          <li>
            <button class="cmp-font block">Delivery/Return <i class="cmp-icon cmp-icon-12 i-next"></i></button>
          </li>
          <li>
            <button class="cmp-font block">Product Q&amp;A <i class="cmp-icon cmp-icon-12 i-next"></i></button>
          </li>
        </ul>
        <!-- //팝업 버튼 -->
      </div>  
      <!-- 이미지 확대보기 --> 
      <div class="productZoom" :class="{'prd-off' : !DialogProductZoom}">
        <v-btn small icon class="btn-close" @click="DialogProductZoom = false">
          <i class="cmp-icon i-close">Close</i>
        </v-btn>
        <div class="inner" v-for="(item, index) in prdData[prdSelectIdx].images" :key="index">
          <div v-if="item.video_url" class="video-cnt">
            <VideoPlayer :loop="true" :path="item.video_url" :poster="item.image_url" :mute="true" :controls="true" />
          </div>
          <div v-else class="swiper-zoom-container">
            <img :src="item.image_url" alt="product image" role="button" class="img"/>
          </div>
        </div>
      </div> 
    </div>
    <!-- 구매툴 하단 플로팅 2022-09-15-prd -->
    <div v-show="showOrdTool && !DialogOrdTool" class="ord-tool-bottom">
      <div class="ord-tool-inner">
        <dl class="ord-tool-info">
          <dt>Total</dt>
          <dd class="prd-price2">$<strong>556,500</strong></dd>
        </dl>
        <div class="ord-tool-btns">
          <v-btn height="46" color="primary" @click="openOrdToolPopup('Shopping Bag')">Shopping Bag</v-btn>
          <v-btn height="46" color="primary" @click="openOrdToolPopup('Buy Now')">Buy Now</v-btn>
        </div>
      </div>
    </div>
    <!--// 구매툴 하단 플로팅-->
    <!-- 구매툴 우측 레이어 2022-09-15-prd -->
    <v-navigation-drawer v-model="DialogOrdTool" fixed temporary right width="600px" overlay-color="#000" overlay-opacity="0.2">
      <productOrdTool ref="ordTool" @hide="closeOrdTool()" :button-text="orderBtnText"></productOrdTool>
    </v-navigation-drawer>
    <!--// 구매툴 우측 레이어 -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import VideoPlayer from '~/components/common/VideoPlayer'
import detailInfoContents from '~/pages/en/PM/detailInfoContents'
import detailReviewContents from '~/pages/en/PM/detailReviewContents'
import detailStyleContents from '~/pages/en/PM/detailStyleContents'
import detailInfoNotice from '~/pages/en/PM/detailInfoNotice'
import productOrdTool from '~/pages/en/PM/productOrdTool'
import ShareBox from '~/components/common/ShareBox.vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
    VideoPlayer,
    detailInfoContents,
    detailReviewContents,
    detailStyleContents,
    detailInfoNotice,
    productOrdTool,
    ShareBox
  },
  layout: 'LayoutBasics',
  data: () => ({
    topSwiperBtnShow : true,
    prdSelectIdx : 0, // 상단 상품 선택 index
    curSlideIdx: 0, // 선택된 슬라이드
    prdData : [], // 상단 상품 data
    swiperPlayBtnShow : true,
    colorVar : null, // 컬러칩 value
    DialogProductZoom : false,
    DialogOrdTool : false, // 우측 구매툴 레이어
    showOrdTool: false, // 구매툴 하단
    prdSizeData : [],
    // promotionMsg : null,
    promotionMsg : { // 상단 프로모션 메시지
      once : false,
      show:false,
      message : '해당 상품 관련한 프로모션이 지금 진행중이예요.',
      link : '#n',
    },
    optionSizeData : {
      select_idx : null,
      list : [
        {
          size_en : 'S',
          size_num : '82',
          state_msg : 'Small Qty inventory',
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
          state_msg : 'Restock notice',
          sold_out : true,
        },
        {
          size_en : '2XL',
          size_num : '110',
          state_msg : 'Sold Out',
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
    },
    htmlMore : {
      use : true,
      open : false,
      hiddenH : 750,
      top : null
    },
    orderBtnText : 'Buy Now',
  }),
  created() {
    const me = this
    const json = require('~/static/json/detail_product_list2.json')
    me.prdData = json.list
    for(let i=0;i<me.prdData.length;i++){
      me.prdData[i].prd_idx = i;
    }
  },
  mounted() {
    const me = this

    // 230216 상품상세 : 삭제 Start
    /* const codyLookbookBtn = document.querySelector(".cody-lookbook-btn") // 코디&룩북 버튼
    if(!codyLookbookBtn.classList.contains('hide')){
      setTimeout(() => {
        codyLookbookBtn.classList.add('hide'); // 코디&룩북 버튼 텍스트 숨김
      }, 2000)
    } */
    // 230216 상품상세 : 삭제 End
    me.colorVar = me.prdData[0].color_value

    me.$nextTick(() => {
      const swiperMain = me.$refs.swiperMain.$swiper
      const swiperThumbs = me.$refs.swiperThumbs.$swiper
      swiperMain.params.control = swiperThumbs
      swiperThumbs.params.control = swiperMain
    })
  },
  methods: {
    sizeSelect(val){
      const me = this
      const values = me.optionSizeData.list[val];
      const sizeData = {
        name: '[sub brand] mock neck drawstring jumper',
        size: values.size_en + ' ' + values.size_num,
        color: me.colorVar,
        price: '556,500'
      }
      me.prdSizeData.push(sizeData)
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
    closeDialog(){
      const me = this
      me.DialogProductZoom = false
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
    htmlAllView(open){
      const me = this
      if(open){
        me.htmlMore.top = window.scrollY
        me.htmlMore.open = true
      }else{
        me.htmlMore.open = false
        window.scrollTo(0,me.htmlMore.top)
      }
    },
    scrollContent(){
      const me = this
      const scr = window.scrollY

      const headerHeight = document.querySelector('.header-body').getBoundingClientRect().height
      const tools = document.querySelector('.prd-detail-btn')
      const btnsCl = document.querySelector('#topButton').classList // 221206 상품상세 : 추가

      if(scr > tools.offsetTop + headerHeight + tools.getBoundingClientRect().height){
        me.showOrdTool = true
        btnsCl.add('up-type1') // 221206 상품상세 : 추가
      }else{
        me.showOrdTool = false
        btnsCl.remove('up-type1') // 221206 상품상세 : 추가
      }
    },
    openOrdToolPopup(text){
      this.DialogOrdTool = true
      this.orderBtnText = text
      this.$refs.ordTool.setup()
    },
    closeOrdTool(){
      const me = this
      me.DialogOrdTool = false
    }
  },
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/detail.scss'; //페이지 전용 css
</style>
