<template>
  <DialogNoticeBasic
    :width="335"
    style="bottom:0%; right:0%;"
    @hide="closeDialog"
    class="show-popup"
  >
  <!-- 
    [퍼블수정]23.11.10
    가로 : 335px / 세로 : 최대 440px 초과 시 스크롤 기준으로 작업했습니다.
    탭 內 최대 글자 수 넘을 경우, 말줄임 처리 (최대 글자수 : 국문 10자, 영문 20자) 부탁드립니다.
    ※ PC 모바일과 공통 :  팝업 사이즈 모바일과 동일하게 변경 > width 변경되는 부분 삭제 했습니다.
    ※ 팝업 위치는 사이즈와 같은 위치에 style="bottom:(변경값); right:(변경값);" 으로 변경되게 부탁드립니다.
  -->
    <template #body>
      <!--[공지사항] 이미지 버전-->
      <!-- [퍼블수정]22.11.23 -->
      <div v-if="listType === 'default'" class="noticeImg"><!-- item.popup_width 없음 -->
        <!-- 링크 있는 경우 -->
        <nuxt-link v-if="link !== null" :to="link">
          <img :src="image" :alt="desc">
        </nuxt-link>

        <!-- 링크 없는 경우 -->
        <img v-if="link == null" :src="image" :alt="desc">
      </div>
      
      <!-- [공지사항] 텍스트 버전-->
      <div v-if="listType === 'noticeText'" class="noticeText"><!-- item.popup_width 없음 -->
        <!-- [퍼블수정]23.11.10  -->
        <div class="noticeText-cover">
          <br><br>
          <p class="cmp-font fnt-20 text-center">간격은 &lt;br&gt;를 사용했습니다</p>
          <br>
          <p class="cmp-font fnt-14 text-center">
            더욱 안정적인 서비스를 제공하기 위해<br/>
            시스템 점검 작업이 예정되어 있습니다.<br/>
            점검 시간 동안 서비스 이용이 <br/>
            불가한 점 양해 부탁 드립니다.<br/>
            감사합니다.<br/>
            <br/>
            점검 시간<br/>
            9월 10일(토), 2:00 ~ 7:00<br/>
            상기 점검 시간은 사정에 의해 변경될 수 있습니다.<br/>
            <br/>
            고객센터 1800-5700<br/>
            평일 : 9:00 ~ 18:00<br/>
            shophelp@thehandsome.com
          </p>
          <br><br>
          <p class="cmp-font fnt-20 text-center">더한섬닷컴 시스템 점검 안내</p>
          <br>
          <p class="cmp-font fnt-14 text-center">
            더욱 안정적인 서비스를 제공하기 위해<br/>
            시스템 점검 작업이 예정되어 있습니다.<br/>
            점검 시간 동안 서비스 이용이 <br/>
            불가한 점 양해 부탁 드립니다.<br/>
            감사합니다.<br/>
            <br/>
            점검 시간<br/>
            9월 10일(토), 2:00 ~ 7:00<br/>
            상기 점검 시간은 사정에 의해 변경될 수 있습니다.<br/>
            <br/>
            고객센터 1800-5700<br/>
            평일 : 9:00 ~ 18:00<br/>
            shophelp@thehandsome.com
          </p>
        </div>
      </div>

      <!--[공지사항] 스와이프-->
      <!-- [퍼블수정]23.11.10 -->
      <div v-if="listType === 'noticeSwipe'" class="noticeSwipe-cover cmp-swiper-box btn-type2 btn-large">
        <div class="tabs-actionTop">
          <div class="inner">
            <swiper
              :options="{
                slidesPerView: 'auto',
                observer: true, 
                observeParents: true,
              }"
              id="top-tab-swipe"
              :class="{'swiper-no-swiping':noticeList.length <= 1}"
            >
            <swiper-slide v-for="item, idx in noticeList" :key="idx">
              <button @click="changeTab(idx)" :class="{ 'on': tabSwipe === idx }">{{ item.title }}</button>
            </swiper-slide>
            </swiper>
          </div>
        </div>
        <Swiper ref="noticeSwipe"
        :options="{
          slidesPerView: 'auto',
          centeredSlides: true,
          on: {
            realIndexChange: swiperChange,
          },
          navigation: {
            prevEl: '.prev-btn-noticeSwipe',
            nextEl: '.next-btn-noticeSwipe',
          },
          pagination: {
            el: '.cmp-swiper-paginationBullet',
            clickable: true
          },
          observer: true, 
          observeParents: true,
        }"
        class="noticeSwipe" :class="{'swiper-no-swiping':noticeList.length <= 1}">
          <SwiperSlide v-for="item, idx in noticeList" :key="idx" class="mb-slide"><!-- "스와이프만" 있음 -->
            <!-- html 타입 -->
            <div v-if="item.html_cont" class="noticeText">
              <div class="noticeText-cover" v-html="newLine(item.html_cont)"></div>
            </div>
            <!-- 이미지 타입 -->
            <div v-if="item.image_url" class="noticeImg">
              <img :src="item.image_url">
            </div>
            <!-- link -->
            <nuxt-link v-if="item.link_url !== null" class="mb-link" :to="{path:item.link_url}"></nuxt-link>
          </SwiperSlide>
        </Swiper>
      </div>
      <!-- // [퍼블수정]23.11.10 -->
    </template>
  </DialogNoticeBasic>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import DialogNoticeBasic from '~/pages/POPUP/DialogNoticeBasic.vue'

export default {
  components: { 
    DialogNoticeBasic,
    Swiper, SwiperSlide
  },
  props : {
    listStyle: {
      type: String,
      default: ()=>{ return "" }
    },
    noticeList: {
      type: Array,
      default: ()=>{ return [] }
    },
    swiperInitialMotion: {
      type: Boolean,
      default: ()=>{ return false }
    },
  },
  // [퍼블수정]23.11.10
  data() {
    return {
      image : 'https://img.thehandsome.com/md/publish/dummy/mo/mainnotice-popup-img.png',
      desc : '추석 연후 배송안내',
      link : '#n',
      listType: "",
      swipeEnabled: true,
      setWrapperSize:true,
      tabSwipe: 0,
    };
  },
  watch: {
    listStyle(type) {
      const me = this
      me.checkType()
    },
  },
  mounted(){
    const me = this
    me.checkType()
    // 삭제 부탁드립니다.
  },
  methods: {
    closeDialog() {
      this.$emit('close')
    },
    checkType(){
    const me = this
      switch(me.listStyle){
      case "noticeText":
      me.listType = "noticeText"
        break;
      case "noticeSwipe":
      me.listType = "noticeSwipe"
        break;
      default:
        me.listType = "default"
        break
      }
    },
    newLine(str) {
      return String(str).replace(/(?:\r\n|\r|\n)/g, '</br>')
    },
    // [퍼블수정]23.11.10
    swiperChange(){
      const me = this
      me.tabSwipe = me.$el.querySelector('.noticeSwipe').swiper.realIndex;
      const tabswiper = me.$el.querySelector('#top-tab-swipe').swiper
      me.$nextTick(() => {
        tabswiper.slideTo(me.tabSwipe,0);
      })
    },
    // [퍼블수정]23.11.10
    changeTab(index) {
      this.tabSwipe = index;
      const me = this
      me.$nextTick(() => {
        const slideToIndex = index;
        const swiper = me.$el.querySelector('.noticeSwipe').swiper
        const swiper2 = me.$el.querySelector('#top-tab-swipe').swiper

        swiper2.slideTo(slideToIndex, 0, function () {
          me.changeTab(index);
        });
        swiper.slideTo(slideToIndex, 300, function () {
          me.changeTab(index);
        });
      })
    },
  },
}
</script>

<style lang="scss"></style>
