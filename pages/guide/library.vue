<template>
  <div class="guide">
    <div class="desc-box">
      <dl class="desc">
        <dt>컴퍼넌트 사용 설명</dt>
        <dd>
          - 제작하는 컴퍼넌트는 class 'cmp-컴퍼넌트명'으로 한다.(cmp로 시작하는
          컴퍼넌트의 class는 해당 컴퍼넌트의 기본값으로 공통[기본] 사용한다.)
        </dd>
        <dd>
          - 컴퍼넌트 스타일은 class 'cmp-컴퍼넌트명 컴퍼넌트명-타입명'의
          형식으로 멀티 class를 사용한다.
        </dd>
        <dd>
          - 컴퍼넌트 확장 시 컴퍼넌트 안에 컴퍼넌트를 넣어 새로운 중첩 사용이
          가능하다.
        </dd>
      </dl>
    </div>

    <div
      v-sticky-tabs
      class="tabs-actionTop"
      style="height: 60px; margin: 0px -20px 0"
    >
      <div class="inner">
        <swiper
          :options="{
            slidesPerView: 'auto',
            spaceBetween: 5,
          }"
          class="sticky-tab-swipe swiper-visible"
        >
          <swiper-slide><button target="section-01">공통코드</button></swiper-slide>
          <swiper-slide><button target="section-02">버튼 컴퍼넌트</button></swiper-slide>
          <swiper-slide><button target="section-03">Icon</button></swiper-slide>
          <swiper-slide><button target="section-04">Form</button></swiper-slide>
          <swiper-slide><button target="section-05">탭 컴퍼넌트</button></swiper-slide>
          <swiper-slide><button target="section-06">아코디언 컴퍼넌트</button></swiper-slide>
          <swiper-slide><button target="section-07">리스트 컴퍼넌트</button></swiper-slide>
          <swiper-slide><button target="section-08">페이징 컴퍼넌트</button></swiper-slide>
          <swiper-slide><button target="section-09">상품리스트</button></swiper-slide>
          <swiper-slide><button target="section-10">툴팁</button></swiper-slide>
          <swiper-slide><button target="section-11">팝업</button></swiper-slide>
          <swiper-slide><button target="section-12">안내영역</button></swiper-slide>
          <swiper-slide><button target="section-13">페이지 타이틀</button></swiper-slide>
          <swiper-slide><button target="section-14">데이터 없음</button></swiper-slide>
          <swiper-slide><button target="section-15">주문번호</button></swiper-slide>
          <swiper-slide><button target="section-16">info box</button></swiper-slide>
          <swiper-slide><button target="section-17">스와이퍼</button></swiper-slide>
          <!-- <swiper-slide><button target="section-18">라벨</button></swiper-slide> -->
        </swiper>
      </div>
    </div>

    <div id="section-01" class="section-guide">
      <h1 class="text-h1">1.공통코드</h1>
      <h2 class="text-h2">1.1 기본 정렬</h2>
      <ul class="cmp-list">
        <li>
          <p class="text-left">text-left/좌측정렬</p>
          <p class="text-center">text-center/중앙정렬</p>
          <p class="text-right">text-right/우측정렬</p>
        </li>
      </ul>
      <h2 class="text-h2">1.2 font 공통 클래스</h2>
      <p class="cmp-font fnt-10">폰트 10 / 라인 16 class : cmp-font fnt-10</p> 
      <p class="cmp-font fnt-11">폰트 11 / 라인 17 class : cmp-font fnt-11</p>
      <p class="cmp-font fnt-12">폰트 12 / 라인 18 class : cmp-font fnt-12</p>
      <p class="cmp-font fnt-13">폰트 13 / 라인 21 class : cmp-font fnt-13</p>
      <p class="cmp-font fnt-14">폰트 14 / 라인 22 class : cmp-font fnt-14</p>
      <p class="cmp-font fnt-16">폰트 16 / 라인 24 class : cmp-font fnt-16</p>
      <p class="cmp-font fnt-18">폰트 18 / 라인 26 class : cmp-font fnt-18</p>
      <p class="cmp-font fnt-20">폰트 20 / 라인 28 class : cmp-font fnt-20</p>
      <p class="cmp-font fnt-22">폰트 22 / 라인 30 class : cmp-font fnt-22</p>
      <p class="cmp-font fnt-24">폰트 24 / 라인 32 class : cmp-font fnt-24</p>
      <p class="cmp-font fnt-28">폰트 28 / 라인 32 class : cmp-font fnt-28</p>
      <p class="cmp-font fnt-38">폰트 38 / 라인 45 class : cmp-font fnt-38</p>
      <p>※ 기본 : font-weight 400 / color #000 / font-size:1.4rem / line-height:2.2rem;</p>
      <p class="cmp-font c-blue">※ 폰트 컬라 -
        <span class="c-red">c-red</span>, 
        <span class="c-white" style="background:#000">c-white</span>, 
        <span class="c-gray">c-gray</span>, 
        <span class="c-black">c-black</span>, 
        <span class="c-blue">c-blue</span>
      </p>
      <p class="cmp-font">※ 폰트 굵기 - <span class="bold">bold : font-weight 700</span> / <span class="thin">thin : font-weight 300</span></p>
      <p class="cmp-font">들여쓰기1단계(기본)</p>
      <p class="cmp-font inden-type2">들여쓰기2단계(.inden-type2)</p>
      <p class="cmp-font inden-type3">들여쓰기3단계(.inden-type3)</p>
      <p class="cmp-font inden-type4">들여쓰기4단계(.inden-type4)</p>
    </div>

    <div id="section-02" class="section-guide">
      <h1 class="text-h1">2.버튼 컴퍼넌트</h1>
      <h2 class="text-h2">2.1. 버튼 기본</h2>
      <h3 class="text-h3">2.2.1 default-large 사이즈 버튼(large-높이:60px , min-width: 260px)</h3>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-btn large color="primary">Primary</v-btn>
            <v-btn outlined large color="primary">outlined</v-btn>
            <v-btn large color="primary" disabled>Disabled</v-btn>
            <v-btn outlined large color="primary" disabled>Disabled</v-btn>
          </v-col>
        </v-row>

        <h3 class="text-h3">2.2.2 width:360 large 사이즈 버튼(large-높이:60px , min-width: 360px, class : width-360)</h3>
        <v-row>
          <v-col cols="12">
            <v-btn large color="primary" class="width-360">Primary</v-btn>
            <v-btn large outlined color="primary" class="width-360">outlined</v-btn>
             <v-btn large color="primary" class="width-360" disabled>Disabled</v-btn>
          </v-col>
        </v-row>

        <h3 class="text-h3">2.2.3 default 사이즈 버튼(default-높이:42px)</h3>
        <v-row>
          <v-col cols="12">
            <v-btn color="primary">Primary</v-btn>
            <v-btn outlined color="primary">outlined</v-btn>
            <v-btn color="primary" disabled>Disabled</v-btn>
          </v-col>
        </v-row>

        <h3 class="text-h3">2.2.3 small 사이즈 버튼(small-높이:36px)</h3>
        <v-row>
          <v-col cols="12">
            <v-btn small color="primary">Primary</v-btn>
            <v-btn outlined small color="primary">outlined</v-btn>
            <v-btn small color="primary" disabled>Disabled</v-btn>
            <v-btn small outlined color="primary" class="gray-outlined">gray-outlined</v-btn>
          </v-col>
        </v-row>

      </v-container>


      <h2 class="text-h2">2.2. 버튼 그룹 영역</h2>
       <v-container fluid>
         <v-layout justify-space-between class="cmp-btnsArea">
            <v-btn outlined large color="primary">outlined</v-btn>
            <v-btn large color="primary">Primary</v-btn>
         </v-layout>
       </v-container>

       <v-container fluid class="pt-10">
         <v-layout justify-space-between class="cmp-btnsArea">
            <v-btn large color="primary">Primary</v-btn>
            <v-btn large color="primary">Primary</v-btn>
            <v-btn large color="primary">Primary</v-btn>
         </v-layout>
       </v-container>

       <v-container fluid class="pt-10">
         <v-layout justify-space-between class="cmp-btnsArea center-area">
            <v-btn outlined large color="primary">outlined</v-btn>
            <v-btn large color="primary">Primary</v-btn>
         </v-layout>
       </v-container>



      <h3 class="text-h3">2.2.1 텍스트 버튼 모음 (cmp-font 사용)</h3>
      <div class="cmp-font-btnBox">
        <button class="cmp-font fnt-14 button"><span class="line">라인 버튼</span></button>
        <button class="cmp-font fnt-14 button"><span class="line">라인 버튼</span></button>
      </div>
      <button class="cmp-font button">화살표 버튼 <i class="cmp-icon cmp-icon-12 i-next"></i></button>
      <br> 
      <nuxt-link class="cmp-font button" to="#n">화살표 링크  <i class="cmp-icon cmp-icon-12 i-next"></i></nuxt-link>
      <br>
      <button class="cmp-font fnt-13 button"><span class="line">라인 버튼</span></button>
      <br>
      <nuxt-link class="cmp-font fnt-13 button" to="#n"><span class="line">라인 링크</span></nuxt-link>
      <br>
     
    </div>

    <div id="section-03" class="section-guide">
      <h1 class="text-h1">3.Icon 컴퍼넌트</h1>
      <div class="desc-box">
        <dl class="desc">
          <dt>[설명] 아이콘 class명: cmp-icon i-아이콘명</dt>
          <dd>
            <p>
              <span>- default(24 * 24)</span> : &lt;i class="cmp-icon
              i-아이콘명"&gt;
            </p>
            <p>
              <span>- size(32 * 32)</span> : &lt;i class="cmp-icon cmp-icon-32
              i-아이콘명"&gt;
            </p>
            <p>
              <span>- size(18 * 18)</span> : &lt;i class="cmp-icon cmp-icon-18
              i-아이콘명"&gt;
            </p>
          </dd>
        </dl>
        <div style="margin-top: 5px">
          디렉티브 사용<br />
          &lt;span
          <b>v-cmp-icon="{size : 24, name : 'heartoff', type : 'before'}"</b
          >&gt;1,234&lt;/span&gt;<br />
          <!-- &lt;a <b>v-cmp-icon="{size : 18, name : 'down', type : 'after'}"</b
          >&gt;다시보기 더보기&lt;/a&gt;<br />
          &lt;a
          <b>v-cmp-icon="{size : 18, name : 'down', invert : 1}"</b>&gt;흰색
          아이콘&lt;/a&gt; -->
        </div>
      </div>
      <v-container fluid style="overflow: hidden;">
        <div class="text-h2" style="margin-bottom: 0">
          <span class="mr-10">3.1 아이콘 기본</span>
          <button
            :class="{ on: iconType === 32 }"
            @click.stop="setIconType(32)"
          >32</button>
          <button
            :class="{ on: iconType === 24 }"
            @click.stop="setIconType(24)"
          >24</button>
          
          <button
            :class="{ on: iconType === 18 }"
            @click.stop="setIconType(18)"
          >18</button>
          <button
            :class="{ on: iconType === 16 }"
            @click.stop="setIconType(16)"
          >16</button>
          <button
            :class="{ on: iconType === 12 }"
            @click.stop="setIconType(12)"
          >12</button>
        </div>

         <div v-for="size in [24, 32, 18, 16, 12]" :key="size">
           <ul v-if="iconType === size" class="guide-icon clear-float">
             <li
              v-for="(n, i) in iconList"
              :key="i"
              :class="{ clear: i % 10 === 0 }" >
              <i v-cmp-icon="{ size: size, name: n }">{{ n }}</i>
              <mark>i-{{ n }}</mark>
            </li>
           </ul>
         </div>
      </v-container>

       
      <v-container fluid style="overflow: hidden;">
        <h3 class="text-h3">3.2 별점 버튼</h3> 
        <v-rating class="cmp-rating rating-default"
          ><!--// readonly -->
          <v-icon>
            <i class="icon star">별점</i>
          </v-icon>
        </v-rating>
      </v-container>

      <v-container fluid style="overflow: hidden;">
        <h3 class="text-h3">3.3 아이콘 버튼</h3> 
        <v-btn-toggle
          dense
          borderless
          active-class="on">
          <v-btn
            icon
            outlined
            small
            color="primary"
            class="icon-location">
            <i v-cmp-icon="{ name: 'locoff' }">지도보기 열기</i>
            <i v-cmp-icon="{ name: 'locon' }">지도보기 닫기</i>
          </v-btn>
        </v-btn-toggle>
      </v-container>


      <h3 class="text-h3">3.4 아이콘ETC (SVG 24,32,18 사이즈 외에 별도 사용)</h3>
      <!------------------cmp-cion-12----------------------->
      <div class="guide-icon icon-etc">
        <div class="txt">12</div>
        <span>
          <i class="cmp-icon-etc cmp-icon-12 i-recommend"></i>
          <mark>i-recommend</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-12 i-add"></i>
          <mark>i-add</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-12 i-close"></i>
          <mark>i-close</mark>
        </span>
      </div>
      <!------------------cmp-cion-14----------------------->
      <div class="guide-icon icon-etc">
        <div class="txt">14</div>
        <span>
          <i class="cmp-icon-etc cmp-icon-14 i-staron"></i>
          <mark>i-staron</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-14 i-staroff"></i>
          <mark>i-staroff</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-14 i-starhalf"></i>
          <mark>i-starhalf</mark>
        </span>
      </div>
      <!------------------cmp-cion-18----------------------->
      <div class="guide-icon icon-etc">
        <div class="txt">18</div>
        <span>
          <i class="cmp-icon-etc cmp-icon-18 i-theplus-join"></i>
          <mark>i-theplus-join</mark>
        </span>
      </div>
      <!------------------cmp-cion-30----------------------->
      <div class="guide-icon icon-etc">
        <div class="txt">30</div>
        <span>
          <i class="cmp-icon-etc cmp-icon-30 i-reward"></i>
          <mark>i-reward</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-30 i-card"></i>
          <mark>i-card</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-30 i-message"></i>
          <mark>i-message</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-30 i-orderlist"></i>
          <mark>i-orderlist</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-30 i-account"></i>
          <mark>i-account</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-30 i-presentused"></i>
          <mark>i-presentused</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-30 i-logout"></i>
          <mark>i-logout</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-30 i-confirm"></i>
          <mark>i-confirm</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-30 i-minus"></i>
          <mark>i-minus</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-30 i-plus"></i>
          <mark>i-plus</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-30 i-equal"></i>
          <mark>i-equal</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-30 i-coupon"></i>
          <mark>i-coupon</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-30 i-hpoint"></i>
          <mark>i-hpoint</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-30 i-benefit"></i>
          <mark>i-benefit</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-30 i-voucher"></i>
          <mark>i-voucher</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-30 i-calendar"></i>
          <mark>i-calendar</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-30 i-shoppingbenefit"></i>
          <mark>i-shoppingbenefit</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-24 i-shoppingbag"></i>
          <mark>i-shoppingbag</mark>
        </span>
      </div>
      <!------------------cmp-cion-32----------------------->
      <div class="guide-icon icon-etc">
        <div class="txt">32</div>
        <span>
          <i class="cmp-icon-etc cmp-icon-32 i-theplus-color"></i>
          <mark>i-theplus-color</mark>
        </span>
      </div>
      <!------------------cmp-cion-36----------------------->
      <div class="guide-icon icon-etc">
        <div class="txt">36</div>
        <span>
          <i class="cmp-icon-etc cmp-icon-36 i-level-friend"></i>
          <mark>i-level-friend</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-36 i-level-crew"></i>
          <mark>i-level-crew</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-36 i-level-mania"></i>
          <mark>i-level-mania</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-36 i-level-star"></i>
          <mark>i-level-star</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-36 i-level-theStar"></i>
          <mark>i-level-theStar</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-36 i-level-silver"></i>
          <mark>i-level-silver</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-36 i-level-gold"></i>
          <mark>i-level-gold</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-36 i-level-platinum"></i>
          <mark>i-level-platinum</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-36 i-level-theFirst"></i>
          <mark>i-level-theFirst</mark>
        </span>
      </div>
      <!------------------cmp-cion-48----------------------->
      <div class="guide-icon icon-etc">
        <div class="txt">48</div>
        <span>
          <i class="cmp-icon-etc cmp-icon-48 i-level-friend"></i>
          <mark>i-level-friend</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-48 i-level-crew"></i>
          <mark>i-level-crew</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-48 i-level-mania"></i>
          <mark>i-level-mania</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-48 i-level-star"></i>
          <mark>i-level-star</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-48 i-level-theStar"></i>
          <mark>i-level-theStar</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-48 i-level-silver"></i>
          <mark>i-level-silver</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-48 i-level-gold"></i>
          <mark>i-level-gold</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-48 i-level-platinum"></i>
          <mark>i-level-platinum</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-48 i-level-theFirst"></i>
          <mark>i-level-theFirst</mark>
        </span>
      </div>
      <!------------------cmp-cion-50----------------------->
      <div class="guide-icon icon-etc">
        <div class="txt">50</div>
        <span>
          <i class="cmp-icon-etc cmp-icon-50 i-rewards"></i>
          <mark>i-rewards</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-50 i-mpoint"></i>
          <mark>i-mpoint</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-50 i-return-coupon"></i>
          <mark>i-return-coupon</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-50 i-payment1"></i>
          <mark>i-payment1</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-50 i-payment2"></i>
          <mark>i-payment2</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-50 i-delivery-car"></i>
          <mark>i-delivery-car</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-50 i-orderlist2"></i>
          <mark>i-orderlist2</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-50 i-inspection"></i>
          <mark>i-inspection</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-50 i-confirm"></i>
          <mark>i-confirm</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-50 i-return"></i>
          <mark>i-Return</mark>
        </span>
      </div>
      <!------------------cmp-cion-60----------------------->
      <div class="guide-icon icon-etc">
        <div class="txt">60</div>
        <span>
          <i class="cmp-icon-etc cmp-icon-60 i-prev"></i>
          <mark>i-prev</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-60 i-next"></i>
          <mark>i-next</mark>
        </span>
      </div>
      <!------------------cmp-cion-64----------------------->
      <div class="guide-icon icon-etc">
        <div class="txt">64</div>
        <span>
          <i class="cmp-icon-etc cmp-icon-64 i-pause"></i>
          <mark>i-pause</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-64 i-play"></i>
          <mark>i-play</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-64 i-dry"></i>
          <mark>i-dry</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-64 i-iron"></i>
          <mark>i-iron</mark>
        </span>
         <span>
          <i class="cmp-icon-etc cmp-icon-64 i-taxation"></i>
          <mark>i-taxation</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-64 i-cleaning"></i>
          <mark>i-cleaning</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-64 i-bleach"></i>
          <mark>i-bleach</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-64 i-vipvoucher"></i>
          <mark>i-vipvoucher</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-64 i-theplus"></i>
          <mark>i-theplus</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-64 i-closet"></i>
          <mark>i-closet</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-64 i-presents"></i>
          <mark>i-presents</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-64 i-laundy"></i>
          <mark>i-laundy</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-64 i-repair"></i>
          <mark>i-repair</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-64 i-deliveryRepair"></i>
          <mark>i-deliveryRepair</mark>
        </span>

      </div>
      <!------------------cmp-cion-80----------------------->
      <div class="guide-icon icon-etc">
        <div class="txt">80</div>
        <span>
          <i class="cmp-icon-etc cmp-icon-80 i-change"></i>
          <mark>i-change</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-80 i-payment"></i>
          <mark>i-payment</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-80 i-receipt"></i>
          <mark>i-receipt</mark>
        </span>
      </div>
      <!------------------cmp-cion-100----------------------->
      <div class="guide-icon icon-etc">
        <div class="txt">100</div>
        <span>
          <i class="cmp-icon-etc cmp-icon-100 i-error-400"></i>
          <mark>i-error-400</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-100 i-error-500"></i>
          <mark>i-error-500</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-100 i-error-inspect"></i>
          <mark>i-error-inspect</mark>
        </span>
      </div>
      <!------------------cmp-cion-120----------------------->
      <div class="guide-icon icon-etc">
        <div class="txt">120</div>
        <span>
          <i class="cmp-icon-etc cmp-icon-120 i-order"></i>
          <mark>i-order</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-120 i-confirm"></i>
          <mark>i-confirm</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-120 i-mileage"></i>
          <mark>i-mileage</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-120 i-store"></i>
          <mark>i-store</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-120 i-delivery"></i>
          <mark>i-delivery</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-120 i-quick"></i>
          <mark>i-quick</mark>
        </span>
        <span>
          <i class="cmp-icon-etc cmp-icon-120 i-cancel"></i>
          <mark>i-cancel</mark>
        </span>
      </div>

      <h3 class="text-h3">3.4 찜 버튼</h3>
      <div style="position: relative;height:50px;width:50px;">
        <button class="zzim-btn" @click="zzimBtn"><span class="ir">찜</span></button>
      </div>
    </div>

    <div id="section-04" class="section-guide">
      <h1 class="text-h1">4.Form</h1>
      <v-btn nuxt to="/ko/guide/form" target="_blank">Form Guide 링크</v-btn>
    </div>

    <div id="section-05" class="section-guide">
      <h1 class="text-h1">5.탭 컴퍼넌트</h1>
      <h2 class="text-h2">5.1.최상위 탭 (.tabs-actionTop / 높이 58px)</h2>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <div class="cmp-tabs tabs-actionTop">
              <v-tabs fixed-tabs>
                <v-tab>탭메뉴_01</v-tab>
                <v-tab>탭메뉴_02</v-tab>
                <v-tab>탭메뉴_03</v-tab>
              </v-tabs>
            </div>
          </v-col>

          <v-col cols="12">
            <div class="cmp-tabs tabs-actionTop">
              <v-tabs fixed-tabs>
                <v-tab>탭메뉴<br>두줄</v-tab>
                <v-tab>탭메뉴<br>두줄</v-tab>
                <v-tab>탭메뉴<br>두줄</v-tab>
                <v-tab>탭메뉴</v-tab>
              </v-tabs>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <h2 class="text-h2">5.2. 2차 탭 / 콘텐츠 내에 사용 (.tabs-contents / 높이 52px )</h2>
      <v-container fluid>
        <v-row>
          <v-col>
            <div class="cmp-tabs tabs-contents">
              <v-tabs v-model="tab" fixed-tabs>
                <v-tab>탭메뉴_01</v-tab>
                <v-tab>탭메뉴_02</v-tab>
              </v-tabs>
            </div>
            <div class="tab-content">
              <v-tabs-items v-model="tab" touchless>
                <v-tab-item :transition="false"> 탭메뉴 내용_01 </v-tab-item>
                <v-tab-item :transition="false"> 탭메뉴 내용_02 </v-tab-item>
              </v-tabs-items>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <h2 class="text-h2">5.3. 3차 탭 / 기간검색 사용 (.tab-wrapType column03 / 높이 42px)</h2>
      <v-container fluid>
        <v-row>
          <v-col>
            <div class="cmp-tabs tab-wrapType column03"><!--// 컬럼의 개수별 class변경:column02~column05 -->
              <v-tabs fixed-tabs>
                <v-tab>탭메뉴_01</v-tab>
                <v-tab>탭메뉴_02</v-tab>
                <v-tab>탭메뉴_03</v-tab>
              </v-tabs>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <h2 class="text-h2">5.4. 박스타입(검색결과) (.box-type / 높이 58px)</h2>
      <div class="cmp-tabs box-type">
        <v-tabs fixed-tabs>
          <v-tab>쇼핑 20,268</v-tab>
          <v-tab>콘텐츠 1,143</v-tab>
        </v-tabs>
      </div>

      <h2 class="text-h2">5.5. 기획전 상단 (.tabs-actionText)</h2>
      <div class="cmp-tabs tabs-actionText">
        <v-tabs>
           <v-tab>전체</v-tab>
            <v-tab>커버스토리</v-tab>
            <v-tab>Q.P.T.</v-tab>
            <v-tab>스타일 가이드</v-tab>
            <v-tab>셀렉션</v-tab>
            <v-tab>#SOME</v-tab>
            <v-tab>뉴스</v-tab>
        </v-tabs>
      </div>
    </div>

    <div id="section-06" class="section-guide">
      <h1 class="text-h1">6.아코디언 컴퍼넌트</h1>
      <h2 class="text-h2">6.1.라인타입</h2>
      <v-container fluid>
        <v-row>
          <v-col>
            <v-expansion-panels accordion class="cmp-acc">
              <v-expansion-panel v-for="(item, i) in 2" :key="i">
                <v-expansion-panel-header
                  >타이틀
                  <template #actions>
                    <i class="cmp-icon-etc cmp-icon-down">열기/닫기</i>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content> 내용 </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
      <h2 class="text-h2">6.2 타이틀 좌우여백x/마지막 요소 라인 노출</h2>
      <v-expansion-panels accordion class="cmp-acc acc-type2">
        <v-expansion-panel v-for="(item, i) in 2" :key="i">
          <v-expansion-panel-header
            >타이틀
            <template #actions>
              <i class="cmp-icon-etc cmp-icon-down">열기/닫기</i>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content> 내용 </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <h2 class="text-h2">6.3 타이틀 좌우여백x/마지막 요소 라인 노출 - 상단 라인 / 내용 상단 여백만, 배경 흰색</h2>
      <v-expansion-panels accordion class="cmp-acc acc-type3">
        <v-expansion-panel v-for="(item, i) in 2" :key="i">
          <v-expansion-panel-header
            >타이틀
            <template #actions>
              <i class="cmp-icon-etc cmp-icon-down">열기/닫기</i>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content> 내용 </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>

    <div id="section-07" class="section-guide">
     <h1 class="text-h1">7.리스트 컴퍼넌트</h1>
     <h2 class="text-h2">7.1 기본타입</h2>
     <v-container fluid>
       <v-col cols="12">
        <ul class="cmp-dotList">
          <li>설명 도트타입</li>
          <li>설명 도트타입</li>
          <li class="c-point">설명 강조 도트타입 </li>
        </ul>
      </v-col>
     </v-container>

     <!-- <h2 class="text-h2">7.2 상품목록 유형</h2>
     <v-btn
        depressed
        tile
        dark
        small
        :ripple="false"
        color="primary"
        href=""
        target="_blank">가로형 상품유닛 링크</v-btn>
      <v-btn
        depressed
        tile
        dark
        small
        :ripple="false"
        color="primary"
        href=""
        target="_blank">2단 기본형 상품 유닛 링크</v-btn> -->
    </div>

    <div id="section-08" class="section-guide">
      <h1 class="text-h1">8.페이징 컴퍼넌트</h1>
      <h2 class="text-h2">8.1 기본타입</h2>

      <v-container fluid>
        <ProductListPaging />
      </v-container>

    </div>

    <div id="section-09" class="section-guide">
      <h1 class="text-h1">9.상품리스트</h1>
      <h2 class="text-h2">9.1 기본</h2>
      <v-btn nuxt to="/ko/DP/productList" target="_blank">상품리스트 페이지 보기</v-btn>
      <h2 class="text-h2">9.2 가로상품</h2>
      <v-btn nuxt to="/ko/guide/productRowListType" target="_blank">가로상품 샘플 보기</v-btn>
    </div>

    <!-- -------------------------------툴팁 Start----------------------------------- -->
    <div id="section-10" class="section-guide">
      <h1 class="text-h1">10.툴팁</h1>
      <h2 class="text-h2">10.1 기본</h2>
      <v-layout row align-center justify-start>
        <v-checkbox label="쇼핑백 포장 무료 서비스 이용하기" class="cmp-form-checkbox"></v-checkbox>
        <CommonTooltipBox :tooltip-list="tooltipList.list0">
          <template #before>
            <v-img src="/images/order/shopping-bag-img.png" alt="쇼핑백 이미지" width="60" class="mr-20"/>
          </template>
        </CommonTooltipBox>
      </v-layout>
      <h2 class="text-h2">10.2 아이콘 !(info) type</h2>
      <v-layout row align-center justify-start>
        <p class="cmp-font fnt-16">배송비</p>
        <CommonTooltipBox :tooltip-list="tooltipList.list1" icon-type="info" />
      </v-layout>
      <h2 class="text-h2">10.3 position right 타입</h2>
      <div style="padding-left:400px;">
        <v-layout row align-center justify-start>
          <p class="cmp-font fnt-16">배송비</p>
          <CommonTooltipBox :tooltip-list="tooltipList.list1" right/>
        </v-layout>
      </div>
      <h2 class="text-h2">10.4 position bottom 타입</h2>
      <div style="padding-left:400px;">
        <v-layout row align-center justify-start>
          <p class="cmp-font fnt-16">배송비</p>
          <CommonTooltipBox :tooltip-list="tooltipList.list1" bottom/>
        </v-layout>
      </div>
    </div>
    <!-- -------------------------------툴팁 End----------------------------------- -->
    
    <!-- -------------------------------팝업 Start----------------------------------- -->
    <div id="section-11" class="section-guide">
      <h1 class="text-h1">11.팝업</h1>
      <div class="desc-box">
        <dl class="desc">
          <dt>[설명] 팝업 width</dt>
          <dd>
            <p><span>- default</span> : 380px</p>
            <p>
              <span>- 그 외 사이즈</span> : width값 입력(448, 496, 540, 642...)<br>
              <span></span>&lt;DialogBasic <strong>:width="540"</strong>&gt;
            </p>
          </dd>
        </dl>
      </div>
      <!-- 팝업 기본 -->
      <h2 class="text-h2">11.1 기본</h2>
      <v-btn @click="openDialogSample(0)">팝업 보기</v-btn> 
      <v-dialog v-model="DialogSampleModel[0].open">
        <!-- 해당팝업 전용:popup-해당클래스" -->
        <DialogBasic class="popup-test-testTest" header-title="팝업 타이틀" @hide="closeDialogSample(0)">
          <template #body>
            <div class="test-popup-contents">팝업 샘플<template v-for="i in 20"><br :key="i">{{i}}</template></div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //팝업 기본 -->
      <!-- 팝업 body내 하단 버튼 -->
      <h2 class="text-h2">11.2 팝업 body내 하단 버튼</h2>
      <v-btn @click="openDialogSample(1)">팝업 보기</v-btn> 
      <v-dialog v-model="DialogSampleModel[1].open">
        <DialogBasic header-title="팝업 타이틀" @hide="closeDialogSample(1)">
          <template #body>
            <div class="test-popup-contents">팝업 샘플<template v-for="i in 20"><br :key="i">{{i}}</template></div>
            <div class="popup-btn-box">
              <v-btn large color="primary">버튼명</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <v-btn @click="openDialogSample(2)">팝업 보기(버튼2개)</v-btn> 
      <v-dialog v-model="DialogSampleModel[2].open">
        <DialogBasic header-title="팝업 타이틀" :width="448" @hide="closeDialogSample(2)">
          <template #body>
            <div class="test-popup-contents">팝업 샘플<template v-for="i in 20"><br :key="i">{{i}}</template></div>
            <div class="popup-btn-box">
              <v-btn outlined large color="primary">버튼명</v-btn>
              <v-btn large color="primary">버튼명</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //팝업 body내 하단 버튼 -->
      <!-- 팝업 하단 고정 버튼 -->
      <h2 class="text-h2">11.3 팝업 하단 고정 버튼</h2>
      <v-btn @click="openDialogSample(3)">팝업 보기</v-btn> 
      <v-dialog v-model="DialogSampleModel[3].open">
        <DialogBasic header-title="팝업 타이틀" @hide="closeDialogSample(3)">
          <template #body>
            <div class="test-popup-contents">팝업 샘플<template v-for="i in 20"><br :key="i">{{i}}</template></div>
          </template>
          <template #footer>
            <v-btn large block color="primary">버튼명</v-btn>
          </template>
        </DialogBasic>
      </v-dialog>
      <v-btn @click="openDialogSample(4)">팝업 보기(버튼 2개)</v-btn> 
      <v-dialog v-model="DialogSampleModel[4].open">
        <DialogBasic header-title="팝업 타이틀" :width="540" @hide="closeDialogSample(4)">
          <template #body>
            <div class="test-popup-contents">팝업 샘플<template v-for="i in 20"><br :key="i">{{i}}</template></div>
          </template>
          <template #footer>
            <v-btn outlined large color="primary">버튼명</v-btn>
            <v-btn large block color="primary">버튼명</v-btn> 
          </template>
        </DialogBasic>
      </v-dialog>
      <v-btn @click="openDialogSample(7)">팝업 보기(하단 버튼 풀 사이즈)</v-btn> 
      <v-dialog v-model="DialogSampleModel[7].open">
        <DialogBasic class="btmfull-ver" header-title="팝업 타이틀" :width="540" @hide="closeDialogSample(7)">
          <template #body>
            <div class="test-popup-contents">팝업 샘플<template v-for="i in 20"><br :key="i">{{i}}</template></div>
          </template>
          <template #footer>
            <v-btn outlined large color="primary" class="gray-outlined">버튼명</v-btn>
            <v-btn large block color="primary">버튼명</v-btn> 
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //팝업 하단 고정 버튼 -->
      <!-- 팝업 타이틀 없는 케이스 -->
      <h2 class="text-h2">11.5 팝업 title none</h2>
      <v-btn @click="openDialogSample(5)">팝업 보기</v-btn> 
      <v-dialog v-model="DialogSampleModel[5].open">
        <DialogBasic @hide="closeDialogSample(5)">
          <template #body>
            <div class="test-popup-contents">팝업 샘플<template v-for="i in 20"><br :key="i">{{i}}</template></div>
          </template>
        </DialogBasic>
      </v-dialog>
      <!-- //팝업 타이틀 없는 케이스 -->
      <!-- 메시지 팝업 -->
      <h2 class="text-h2">11.6 메시지 팝업</h2>
      <v-btn nuxt to="/ko/guide/messagePopup" target="_blank">Message popup guide 링크</v-btn>
      <!-- //메시지 팝업 -->
      <!-- fixed 팝업 -->
      <h2 class="text-h2">11.7 fixed 팝업</h2>
        <v-btn @click="openDialogSample(6)">fixed 팝업</v-btn> 
        <!-- fixed팝업 default : 왼쪽/ right추가시 오른쪽 -->
        <v-navigation-drawer v-model="DialogSampleModel[6].open" fixed temporary right width="400px" overlay-color="#000" overlay-opacity="0.5" class="test">
          <DialogBasic @hide="closeDialogSample(6)">
            <template #body>
              <div class="test-popup-contents">팝업 샘플<template v-for="i in 20"><br :key="i">{{i}}</template></div>
            </template>
          </DialogBasic>
        </v-navigation-drawer>

      <!-- //fixed 팝업 -->
    </div>
    <!-- -------------------------------팝업 End----------------------------------- -->

    <!-- ------------------------------안내영역 Start----------------------------------- -->
    <div id="section-12" class="section-guide">
      <h1 class="text-h1">12.안내 영역</h1>
      <h2 class="text-h2">12.1 분홍박스</h2>
      <div class="cmp-info info-type1">
        <p class="cmp-font">안내 영역 텍스트가 들어갑니다.</p>
      </div>
      <h2 class="text-h2">12.2 왼쪽 검정 라인</h2>
      <div class="cmp-info info-type2">
        <p class="cmp-font fnt-16">폰트 16 / 라인 18 class : cmp-font fnt-12</p>
      </div>
      <h2 class="text-h2">12.3 회색박스</h2>
      <div class="cmp-info info-type3">
        <p class="cmp-font">안내 영역 텍스트가 들어갑니다.</p>
      </div>
      <h2 class="text-h2">12.4 상단공지</h2>
      <div v-if="topNotice" class="cmp-info top-notice">
        <p class="txt">배송지 긴급 공지 안내메시지 노출.배송지 긴급 공지 안내메시지 노출.배송지 긴급 공지 안내메시지 노출. 배송지 긴급 공지 안내메시지 노출.배송지 긴급 공지 안내메시지 노출.배송지</p>
        <v-btn icon small class="del" @click="topNotice = false">
          <i v-cmp-icon="{ size: 18, name: 'close', invert: 1 }">닫기</i>
        </v-btn>
      </div>


      
    </div>
    <!-- ------------------------------안내영역 End----------------------------------- -->

    <!-- -----------------------------페이지 상단 타이틀 Start----------------------------------- -->
    <div id="section-13" class="section-guide">
      <h1 class="text-h1">13.페이지 타이틀</h1>
      <h2 class="text-h2">13.1 페이지 상단 타이틀</h2>
      <div class="cmp-page-tit line">
        <h2 class="tit">페이지 타이틀</h2>
      </div>
      <div class="cmp-page-tit">
        <h2 class="tit">페이지 타이틀</h2>
        <!-- <div><img src="https://img.thehandsome.com/md/publish/dummy/pc/page-tit-box-dummy.png" style="height:18px" alt="테스트용 이미지 입니다."></div> 테스트용 -->
        <div class="state-number">
          <ul>
            <li v-for="(item,index) in stateText2" :key="index" :class="{ active: item.id == stepActive }">
              <span class="number">{{item.id}}</span><span>{{item.name}}</span>
              <i class="cmp-icon i-next cmp-icon-18"></i>
            </li>
          </ul>
        </div>
      </div>
      <div class="cmp-page-tit center">
        <h2 class="tit">페이지 타이틀</h2>
      </div>
      <h2 class="text-h2">13.2 페이지 서브 타이틀</h2>
      <div class="cmp-sub-tit">
        <h3 class="tit">타이틀 폰트24/하단간격20</h3>
      </div>
      <div class="cmp-sub-tit line">
        <h3 class="tit">타이틀 폰트24/라인/하단간격20</h3>
      </div>
      <div class="cmp-sub-tit small">
        <h3 class="tit">타이틀 폰트20/하단간격20</h3>
      </div>
    </div>
    <!-- -----------------------------페이지 상단 타이틀 End----------------------------------- -->

    <!-- ------------------------------데이터 없음 Start----------------------------------- -->
    <div id="section-14" class="section-guide">
      <h1 class="text-h1">14.데이터 없음</h1>
      <CommonNoData msg="쇼핑백에 담긴 상품이 없습니다."/>
    </div>
    <!-- ------------------------------데이터 없음 End----------------------------------- -->

    <!-- ------------------------------주문번호 Start----------------------------------- -->
    <div id="section-15" class="section-guide">
      <h1 class="text-h1">15.주문번호</h1>
      <br><br>
      <div class="order-number-box">
        <div class="line-box">
          <p class="cmp-font fnt-13">주문번호<span class="ml-8">211222P12345678</span></p>
          <p class="cmp-font fnt-13">2021.12.22</p>
        </div>
      </div>
      <br><br>
      <div class="order-number-box">
        <div class="line-box">
          <p class="cmp-font">주문번호<span class="ml-8">211222P12345678</span></p>
          <p class="cmp-font fnt-13">2021.12.22</p>
        </div>
      </div>
      <br><br>
      <div class="order-number-box">
        <div class="line-box">
          <p class="cmp-font">주문번호<nuxt-link to="#n" class="line ml-8">211222P12345678</nuxt-link></p>
          <p class="cmp-font fnt-13">2021.12.22</p>
        </div>
      </div>
      <br><br>
      <div class="order-number-box">
        <div class="line-box">
          <p class="cmp-font">주문번호<nuxt-link to="#n" class="line ml-8">211222P12345678</nuxt-link></p>
          <p class="cmp-font fnt-13">2021.12.22</p>
        </div>
        <div class="line-box">
          <p class="cmp-font fnt-13">배송방법<span class="ml-8">택배</span></p>
        </div>
      </div>
      <br><br>
      <div class="order-number-box light-line">
        <div class="line-box">
          <p class="cmp-font">주문번호<span class="ml-8">211222P12345678</span></p>
          <p class="cmp-font fnt-13">2021.12.22 13:00</p>
        </div>
      </div>
      <br><br>
      <div class="order-number-box no-line">
        <div class="line-box">
          <p class="cmp-font">주문번호<span class="ml-8">211222P12345678</span></p>
          <p class="cmp-font fnt-13">2021.12.22 13:00</p>
        </div>
      </div>
    </div>
    <!-- ------------------------------주문번호 End----------------------------------- -->

     <!-- ------------------------------border info box Start----------------------------------- -->
    <div id="section-16" class="section-guide">
     <h1 class="text-h1">16.border info box</h1>   
      <h2 class="text-h2">16.1 기본</h2>
      <div class="info-border-box">
        <div class="box">
          <dl class="line">
            <dt class="tit">고객명</dt>
            <dd class="txt">더한섬</dd>
          </dl>
          <dl class="line">
            <dt class="tit">연락처</dt>
            <dd class="txt">010-1234-5678</dd>
          </dl>
        </div>
      </div>  

      <h2 class="text-h2">16.2 세로 / title font 14</h2>
      <div class="info-border-box col size2">
        <div class="box">
          <dl class="line">
            <dt class="tit">한섬회원 아이디</dt>
            <dd class="txt">han*******</dd>
          </dl>
        </div>
      </div>

      <h2 class="text-h2">16.3 라인 박스 / title font 16</h2>
      <div class="info-border-box cnt-line">
        <div v-for="i in 2" :key="i" class="box">
          <dl class="line">
            <dt class="tit">구매자 성명</dt>
            <dd class="txt">더한섬</dd>
          </dl>
          <dl class="line">
            <dt class="tit">생년월일</dt>
            <dd class="txt">1900-01-01</dd>
          </dl>
          <dl class="line">
            <dt class="tit">아이디</dt>
            <dd class="txt">Han********@di9.co.kr</dd>
          </dl>
        </div>
      </div>

      <h2 class="text-h2">16.4 라인 박스 / title font 16 / 좌우 여백 X</h2>
      <div class="info-border-box cnt-line pw-0">
        <div class="box">
          <dl class="line">
            <dt class="tit">구매자 성명</dt>
            <dd class="txt">더한섬</dd>
          </dl>
          <dl class="line">
            <dt class="tit">생년월일</dt>
            <dd class="txt">1900-01-01</dd>
          </dl>
          <dl class="line">
            <dt class="tit">아이디</dt>
            <dd class="txt">Han********@di9.co.kr</dd>
          </dl>
        </div>
      </div>
    </div>
    <!-- ------------------------------border info box  End----------------------------------- -->

    <!-- ------------------------------swiper  Start----------------------------------- -->
    <div id="section-17" class="section-guide">
      <h1 class="text-h1">17.swiper</h1>
      <v-btn nuxt to="/ko/guide/swiper">스와이퍼 샘플 페이지</v-btn>
    </div>
    <!-- ------------------------------라벨  Start----------------------------------- -->
    <div id="section-17" class="section-guide">
      <h1 class="text-h1">18.라벨</h1>
      <h2 class="text-h2">18.1.기본형 라벨</h2>
      <h2 class="text-h2">18.2.조합형 라벨</h2>  
      <div class="cmp-labels">
          <span class="label black c-white">주문배송</span>
          <span class="label">퀵배송</span>
          <span class="label c-red">접수완료</span>
          <span class="label c-blue">답변완료</span>
        </div>
      <h2 class="text-h2">18.3 라인 컬러 라벨</h2>
      <span class="cmp-label-line c-blue">기본배송지</span>
    </div>
    <!-- ------------------------------라벨  End----------------------------------- -->
    
    <div id="section-19" class="section-guide">
      <h2 class="text-h1">19. 결제정보</h2>
      <div class="refund-box">
        <ul class="cust">
          <li>
            <p class="cmp-font fnt-14 mb-6">상품금액</p>
            <p class="cmp-font fnt-20">910,000<span class="cmp-font fnt-14">원</span></p>
          </li>
          <li class="sign minus"></li>
          <li>
            <p class="cmp-font fnt-14 mb-6">할인금액</p>
            <p class="cmp-font fnt-20">21,000<span class="cmp-font fnt-14">원</span></p>
          </li>
          <li class="sign plus"></li>
          <li>
            <p class="cmp-font fnt-14 mb-6">배송비</p>
            <p class="cmp-font fnt-20">3,000<span class="cmp-font fnt-14">원</span></p>
          </li>
          <li class="sign equal"></li>
          <li>
            <p class="cmp-font fnt-14 mb-6">최종 결제 금액</p>
            <p class="cmp-font fnt-20">892,000<span class="cmp-font fnt-14">원</span><span class="cmp-font fnt-14">(일시불)</span></p>
          </li>
        </ul>
        <div class="cmp-info info-type2">
          <span class="tit">할인금액</span>
          <dl>
            <dt>신용카드 / 우리카드</dt>
            <dd>15,000<span>원</span></dd>
            <dt>한섬마일리지</dt>
            <dd>5,000<span>원</span></dd>
            <dt>H.Point</dt>
            <dd>1,000<span>원</span></dd>
            <dt>e-money</dt>
            <dd>3,000<span>원</span></dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex"
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import DialogBasic from '~/pages/POPUP/DialogBasic.vue' // 팝업기본

export default {
  components: {
    Swiper,
    SwiperSlide,
    DialogBasic,
  },
  layout: 'guide',
  data: () => ({
    // input files
    files: [],
    iconList: [
  'search',   'search2',  'close',    'del',       'heartOff', 'heartOn',    'add',       'play' ,    'contact',  'share' ,
  'login',    'logout',   'my' ,      'insta' ,    'youtube',  'appstore1',  'appstore2', 'delivery', 'locoff',   'locon',
  'filter',   'minus',    'list' ,    'cleaning',  'question', 'info',       'locked',    'arrow',    'backward', 'forward',
  'style',    'zoom' ,    'hpoint' ,  'boxplay',   'benefit' , 'coupon',     'oera',      'milege',   'inquiry',  'check',
  'volumeon', 'play2',    'zoommini', 'calendar',  'prev',     'next',       'down',      'up',       'refresh',  'triangle',
  'grid1' ,   'grid2',    'grid1on' ,  'grid2on',  'first',    'last',       'upRight',   "star",     "thumb",    'listDot',
  'vplay',    'vpause',   'volumeOn', 'volumeOff', 'fullOn',   'fullOff'
    ],
    iconType: 24,
    // 정렬버튼
    toggleText: '',
    // 별점
    rating: 4.5,
    // 정렬버튼
    tooltip: false, // 툴팁
    tooltip2: false, // 툴팁
    // Tabs
    tab: null,
    // paging
    page: 1,
    // [스와이퍼]옵션설정
    swiperOption: {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      cardsEffect: {},
      // effect: 'cards',
      grabCursor: 'true',
    },
    tooltipList: {
      // 툴팁 상세 정보
      list0: [
        '브랜드 쇼핑백 또는 더한섬닷컴 전용 쇼핑백 중 1개로 랜덤 발송되며, 디자인을 선택하실 수 없습니다.',
        'H.Point 10만점 이상 사용 시 비밀번호 입력이 필요합니다',
      ],
      list1: [
        '브랜드 쇼핑백 또는 더한섬닷컴 전용 쇼핑백 중 1개로 랜덤 발송되며, 디자인을 선택하실 수 없습니다.',
        'H.Point 10만점 이상 사용 시 비밀번호 입력이 필요합니다',
      ]
    },
    DialogSampleModel : [{open : false},{open : false},{open : false},{open : false},{open : false},{open : false},{open : false},{open : false}], // 팝업 샘플
    stepActive: 1,
    stateText1: [
      { id: 1, name: '교환접수' },
      { id: 2, name: '회수중'},
      { id: 3, name: '회수완료'},
      { id: 4, name: '교환배송중'},
      { id: 5, name: '교환완료'},
    ],
    stateText2: [
      { id: 1 , name: '반품정보'},
      { id: 2 , name: '사유' },
      { id: 3 , name: '반품비확인'},
    ],
    topNotice : true,
  }),
  watch: {
    
  },
  mounted() {
    this.checkDevMode()
  },
  methods: {
    setIconType(type) {
      this.iconType = type
    },
    openDialogSample(idx) {
      const me = this
      me.DialogSampleModel[idx].open = true
    },
    closeDialogSample(idx) {
      const me = this
      me.DialogSampleModel[idx].open = false
    },
    zzimBtn(e){
      const cl = e.currentTarget.classList
      if(cl.contains("on")){
        cl.remove("on")
      }else{
        cl.add("on")
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixin.scss';
@import '@/assets/scss/pages/detail.scss'; //페이지 전용 css
.v-application {
  .text-h1,
  .text-h2,
  .text-h3 {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 1.4rem !important;
    line-height: 1.8rem;
    button {
      padding: 5px 10px;
      box-shadow: black 0 0 2px 0 inset;
      border-radius: 5px;
      &.on {
        background-color: #999;
        color: #fff;
      }
    }
  }
  .text-h1 {
    padding: 10px;
    background-color: #000;
    color: #fff;
  }
  .text-h2,
  .text-h3 {
    padding: 10px;
  }
  .text-h2 {
    padding-bottom: 10px;
    border-bottom: 2px solid #000;
  }
  .text-h3 {
    background-color: #f7f7f7;
  }
  .desc-box {
    padding: 15px;
    border: 2px solid rgb(235, 235, 235);
    font-size: 1.2rem;
    p {
      span {
        display: inline-block;
        width: 100px;
      }
    }
  }
  .section-guide {
    &:after{content:"";display:block;clear:both}
    .flex-row-list {
      flex-wrap: wrap;
    }
  }
  @media (max-width:480px){
    .guide {
      margin: 20px;
    }
  }
  .guide-icon {
    display: block;
    padding-top: 20px;

    li {
      text-align: center;
      padding: 0 2px 10px;
      display: block;
      float: left;
      width: 105px;
      &.clear {
        clear: both;
      }
      &.black {
        background-color: #000;
        clear: both;
      }
    }
    mark {
      margin-top: 5px;
      display: block;
      background-color: #f5f5f5;
      padding: 0 3px;
    }
    &.icon-etc {
      padding-top:0;
      display: flex;
      align-items: center;
      margin-bottom:25px;
      .txt {
        margin-right:20px;
      }
      span {
        display: inline-block;
        text-align: center;
        font-size:1.4rem;
        margin:0 10px;
      }
    }
  }
  .test-popup-contents{
    display:block;
    width:100%;
    background:#efefef;
  }

  .tabs-actionTop .inner {
    position: fixed;
    left: 256px;
    right: 0;
    top: 56px;
    height: 50px;
    background-color: #fff;
    z-index: 10;
    padding: 0 10px;
    overflow: hidden;
    border-bottom: 1px solid lightgrey;
    .swiper-slide {
      width: auto;
      padding-top: 10px;
    }
    button {
      height: 30px;
      line-height: 30px;
      padding: 0 10px;
      box-sizing: border-box;
      border: 1px solid #ddd;
      border-radius: 12px;
      &.on {
        background-color: #ddd;
      }
    }
  }
}
.v-navigation-drawer.v-navigation-drawer--open
  ~ .v-main
  .tabs-actionTop
  .inner {
  left: 256px;
}
.v-navigation-drawer.v-navigation-drawer--close
  ~ .v-main
  .tabs-actionTop
  .inner {
  left: 0;
}

.svg-icon{

  li{
    display:inline-block;margin:4px;
    div{display:block;margin:0 auto;text-align:center;}
    div ~ div{margin-top:3px;}
  }
  .ico{
    background-color:#f5f5f5;display:block !important;padding:10px;
    &:after{content:"";}
    &.ura12:after{@include svgIcon(upper-right-arrow, 12);}
    &.ura18:after{@include svgIcon(upper-right-arrow, 18);}
    &.check24:after{@include svgIcon(check, 24);}
    &.hstv{background-color:#000;}
    &.hstv:after{@include svgIcon(handsome-tv);width:91px;height:26px;}
  }
}
</style>
