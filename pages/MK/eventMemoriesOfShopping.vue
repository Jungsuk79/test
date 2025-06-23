<template>
  <div class="contents"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap">
      <div class="event-detail">
        <div class="e-title type2"><!-- 230110 단순클릭응모형 : type2 클래스 추가 -->
          <h4>앱 다운로드 이벤트</h4>
          <v-layout align-center>
            <div class="cmp-labels">
              <span class="label black">종료</span>
            </div>
            <p>2021.12.07 ~ 2021.12.26</p>
          </v-layout>
        </div>
        <div class="html-area" style="text-align:center;">

          <!-- html 등록 영역 시작 -->
          <div class="pc-230825memoriesofshopping">
            <div class="mov-wrap main">
              <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/230825_memoriesofshopping/pc-main-kv.gif" alt="더 섬세한 혜택으로 다가온 가을이 특별한 이유 섬세한 쇼핑의 기억 2023.9.13(수)-9.19(화)" />
            </div>

            <div class="tab_menu">
              <ul class="list">
                <li v-for="(item, i) in tabsList" :class="{'is_on' : i === 0}" :key="`tab-${i+1}`">
                  <button class="btn" :name="`tab0${i+1}`" >
                    <img 
                      v-for="(image, index) in item.images" 
                      class="img"
                      :class="{'img-on': index === 1}" 
                      :src="`https://cdn-img.thehandsome.com/md/publish/event/230825_memoriesofshopping/${image}`" :alt="item.text" 
                      :key="index"/>
                  </button>
                </li>
              </ul>

              <div class="cont_area">
                <div class="cont" name="tab01-cont">
                  <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/230825_memoriesofshopping/pc-cont-tit-001.jpg" alt="BENEFIT 1 정상 상품 최대 7만원 혜택" />
                  
                  <div>
                    <!-- Benefit 1 쿠폰영역 -->
                  </div>
                </div>
                
                <!-- 230914 이미지수정 & 추가 -->
                <div class="cont" name="tab02-cont">
                  <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/230825_memoriesofshopping/pc-cont-tit-02-re.jpg" alt="BENEFIT 2 매일 10시, 오늘의 브랜드 선착순 2,000명 상품 쿠폰 정상 30만원 이상 구매 시 1만원 상품 할인" />
                  
                  <div>
                    <!-- Benefit 2 쿠폰영역 -->
                  </div>
                  <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/230825_memoriesofshopping/pc-cont-01.jpg" alt="참여 브랜드 9/13 TIME, 9/14 LANVIN, 9/15 SJSJ, 9/16 MINE, 9/17 SYSTEM HOMME, 9/18 TIME HOMME, 9/19 SYSTEM" />
                </div>
                <!-- //230914 이미지수정 & 추가 -->
                
                <div class="cont" name="tab03-cont">
                  <div class="cont-inner">
                    <img class="img" src="https://cdn-img.thehandsome.com/md/publish/event/230825_memoriesofshopping/pc-cont-tit-03.jpg" alt="BENEFIT 3 스타일 라이브 23 F/W상품 #이건꼭사야해 구매 인증 참여 FW 상품 구매 후 사야하는 이유 스타일/토크 업로드 시 전원 프로필 뱃지 + 마케팅 단추를 받아보세요! *마케팅 단추 혜택:정상 30만원 이상 1만원 상품 할인" />
                    <img class="img img-gif" src="https://cdn-img.thehandsome.com/md/publish/event/230825_memoriesofshopping/pc-cont-gif-03.gif" alt="" />
                  </div>
                </div>
              </div>

            </div>
          </div>
          <style type="text/css">
            .pc-230825memoriesofshopping {display:block;width:100%;margin:0 auto;}
            .pc-230825memoriesofshopping .img{display: block;width:100%; margin:0 auto;}
            .pc-230825memoriesofshopping .tab_menu{position:relative;}
            .pc-230825memoriesofshopping .tab_menu .list{display:flex;align-items:center;}
            .pc-230825memoriesofshopping .tab_menu .list li .img{display:block}
            .pc-230825memoriesofshopping .tab_menu .list li .img.img-on{display:none}
            .pc-230825memoriesofshopping .tab_menu .list li.is_on .img{display:none;}
            .pc-230825memoriesofshopping .tab_menu .list li.is_on .img.img-on{display:block;}
            .pc-230825memoriesofshopping .tab_menu .cont_area .cont{display:none;margin-bottom:130px;}
            .pc-230825memoriesofshopping .tab_menu .cont_area .cont:nth-last-child(1){margin-bottom:0;}
            .pc-230825memoriesofshopping .tab_menu .cont_area .cont-inner{position:relative;}
            .pc-230825memoriesofshopping .tab_menu .cont_area .cont-inner .img-gif{position:absolute;bottom:11.364%;left:23.95833%;width:52.13541667%;height:39.54545%;}
          </style>
          <!-- html 등록 영역 끝 -->

          
        </div>
        <div class="swiper-wrap">
          <div class="cmp-sub-tit">
            <h3 class="tit">최신 이벤트</h3>
          </div>
          <div class="cmp-swiper-box btn-large search-swiper">
            <Swiper
              :options="{
                slidesPerView: 5,
                slidesPerGroup : 5,
                spaceBetween: 25,
                navigation: {
                  prevEl: '.planshop-prev-btn',
                  nextEl: '.planshop-next-btn',
                },
              }"
              :class="{'swiper-no-swiping':eventList.list.length <= 5}"
            >
              <SwiperSlide v-for="(item, index) in eventList.list" :key="index">
                <div class="swiper-unit">
                  <nuxt-link to="#none">
                    <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png" aspect-ratio="1" alt="상품 이미지"></v-img>
                    <p class="swiper-title">{{item.title}}</p>
                    <p class="swiper-text">{{item.date}}</p>
                  </nuxt-link>
                </div>
              </SwiperSlide>
            </Swiper>
            <template v-if="eventList.list.length > 5">
              <div slot="button-prev" class="swiper-button-prev swiper-no-swiping planshop-prev-btn"><i v-cmp-icon="{size:32, name:'prev', invert:1}">이전</i></div>
              <div slot="button-next" class="swiper-button-next swiper-no-swiping planshop-next-btn"><i v-cmp-icon="{size:32, name:'next', invert:1}">다음</i></div>
            </template>
          </div>       
        </div>
        <div class="bottom-btn">
          <v-btn large outlined color="primary" class="html-btn gray-outlined">목록</v-btn><!-- [퍼블수정]23.01.26 class gray-outlined 추가 -->
        </div>
      </div>

    </div>
    <!-- <script src="/scripts/event-detail-swiper.js"></script>230224 이벤트 : html script 추가 -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  layout: 'LayoutBasics',
  components : {
    Swiper,
    SwiperSlide,
  },  
  data: () => ({
    tabsList: [
      {
        images : ['pc-tab-001-off.jpg', 'pc-tab-001-on.jpg'],
        text : '최대 7만원 쿠폰 혜택'
      },
      {
        images : ['pc-tab-02-off.jpg', 'pc-tab-02-on.jpg'],
        text : '선착순 쿠폰 혜택'
      },
      {
        images : ['pc-tab-03-off.jpg', 'pc-tab-03-on.jpg'],
        text : '스타일라이브 혜택'
      }
    ],

    eventList : { // swiper data
      list:[
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '앱 다운로드 이벤트',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '더한섬닷컴 X 스마일페이 12월 첫 결제',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '더한섬닷컴 X 스마일페이 12월 첫 결제 더한섬닷컴 X 스마일페이 12월 첫 결제',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '앱 다운로드 이벤트',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '더한섬닷컴 X 스마일페이 12월 첫 결제',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '더한섬닷컴 X 스마일페이 12월 첫 결제',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '앱 다운로드 이벤트',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '더한섬닷컴 X 스마일페이 12월 첫 결제',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '더한섬닷컴 X 스마일페이 12월 첫 결제',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '앱 다운로드 이벤트',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '더한섬닷컴 X 스마일페이 12월 첫 결제',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
        {
          image : 'https://img.thehandsome.com/md/publish/dummy/pc/event/event1.png',
          title : '더한섬닷컴 X 스마일페이 12월 첫 결제',
          date : '2022.12.08 ~ 2022.12.26',
          link : '#n',
        },
      ],
    },         
  }),
  mounted() {
    this.evTabs()
  },
  methods: {
    evTabs () {
      // S : tab script
      const tabList = document.querySelectorAll('.tab_menu .list li')
      const contents = document.querySelectorAll('.tab_menu .cont_area .cont')
      let activeCont = 'tab01'

      document.querySelector(`[name=${activeCont}-cont]`).style.display = 'block'
      for(let i = 0; i < tabList.length; i++){
        tabList[i].querySelector('.btn').addEventListener('click', function(e){
          e.preventDefault()
          for(let j = 0; j < tabList.length; j++){
            tabList[j].classList.remove('is_on')
            contents[j].style.display = 'none'
          }

          this.parentNode.classList.add('is_on')

          activeCont = this.getAttribute('name')
          document.querySelector(`[name=${activeCont}-cont]`).style.display = 'block'
        })
      }
      // E : tab script 
    }
  }
}
</script>
<style lang="scss">
 @import '@/assets/scss/pages/event.scss'; 
</style>
