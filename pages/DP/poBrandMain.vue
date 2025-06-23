<template>
  <div class="contents contents-brand"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <!--
      221116 컨텐츠 순서변경
      - <div class="content-wrap"> 삭제
      - 영역별로 <section></section> 추가 <-- v-for 용
      - 상단 배너 제외 <div class="section-wrap"></div> 추가
    -->
    <!-- 브랜드 상단 배너 -->
    <section>
      <BrandPoSlider :data="mainBanner" />
    </section>
    <!-- //브랜드 상단 배너 -->

    <!-- 오늘하루 그만보기 팝업 -->
    <v-dialog v-model="isPopuptSatus">
      <DialogBasic class="popup-message message-infoPop" header-title="합병에 따른 개인정보 이전 안내" @hide="closeDialog">
        <template #body>
          <div class="inner">
            <p class="msg-sub-txt">오에라(oera)운영사 (주)한섬라이프앤은<br />(주)한섬과 합병계약을 체결하여, 2025년 1월 2일자로 합병의 효력이 발생할 예정입니다.</p>
            <p class="msg-sub-txt mt-20">본 합병으로 인하여 (주)한섬라이프앤이<br />보유하고 있던 고객 및 거래상대방의 개인정보 등 일체의 개인정보는 (주)한섬으로 이전됩니다.</p>
            <p class="msg-sub-txt mt-20">개인정보 이전을 원치 않을 경우 이전 거부에 관한 의사를 통보하여 주시기 바랍니다.</p>
          </div>
          <div class="popup-btn-box">
            <v-btn large color="primary" to="/#none" nuxt>자세한 내용 확인</v-btn>
          </div>
          <v-checkbox label="오늘 하루 그만 보기" class="cmp-form-checkbox"></v-checkbox>
        </template>
      </DialogBasic>
    </v-dialog>

  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import EventBus from '~/api/common/EventBus'
import VideoPlayer from '~/components/common/VideoPlayer'
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  components: {
    Swiper, 
    SwiperSlide,
    VideoPlayer,
    DialogBasic
  },
  layout: 'LayoutBasics',

  data: () => ({
    isPopuptSatus: true,

    mainBanner:[
      {
          title: "SJSJ가<br>사색하는 시간",
          desc: "SJSJ 2022 S/S 시그니처 라인",
          tags : ["#SOME"],
          image_url : "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-banner.png",
          link_url : "#none"
      },
      {
          title: "SJSJ가<br>사색하는 시간",
          desc: "SJSJ 2022 S/S 시그니처 라인",
          tags : ["#SOME"],
          image_url : "https://img.thehandsome.com/md/publish/dummy/pc/outlet-main-banner.png",
          link_url : "#none"
      },
      {
          title: "SJSJ가<br>사색하는 시간",
          desc: "SJSJ 2022 S/S 시그니처 라인",
          tags : ["#SOME"],
          image_url : "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-banner.png",
          link_url : "#none"
      },
      {
          title: "SJSJ",
          desc: "SJSJ 2022 S/S 시그니처 라인",
          tags : ["#SOME"],
          image_url : "https://img.thehandsome.com/md/publish/dummy/pc/outlet-main-banner.png",
          link_url : "#none"
      },
    ],
    brandKeyword : {
      title : '#봄날 아우터',
      list : [
        {
          keyword : '자켓',
          link_url : '#n'
        },
        {
          keyword : '니트가디건',
          link_url : '#n'
        },
        {
          keyword : '아우터',
          link_url : '#n'
        },
        {
          keyword : '버건디',
          link_url : '#n'
        },
        {
          keyword : '점프수트',
          link_url : '#n'
        },
        {
          keyword : '모노그램',
          link_url : '#n'
        },
        {
          keyword : '인디핑크',
          link_url : '#n'
        },
        {
          keyword : '리넨스커트',
          link_url : '#n'
        },
        {
          keyword : '플레어스커트',
          link_url : '#n'
        },
        {
          keyword : '데님팬츠',
          link_url : '#n'
        },
        {
          keyword : '티셔츠',
          link_url : '#n'
        },
        {
          keyword : '오픈칼라',
          link_url : '#n'
        },
        {
          keyword : '칼라리스',
          link_url : '#n'
        },
        {
          keyword : '시어서커',
          link_url : '#n'
        },
        {
          keyword : '글리터링',
          link_url : '#n'
        },
        {
          keyword : '와이드팬츠',
          link_url : '#n'
        },
      ]
    },
    newPrdList : [
      {
          "product_name": "포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷포켓 싱글 재킷",
          "sell_price": "350000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/001.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "product_name": "버튼 칼라 니트 가디건",
          "sell_price": "395000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/002.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
          "link_url" : "#none",
          "zzim": true,
      },
      {
          "product_name": "텍스쳐 블록 드레스",
          "sell_price": "346000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/003.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "product_name": "윙 슬리브 셔링 드레스",
          "sell_price": "495000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/004.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/014.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "product_name": "포켓 싱글 재킷",
          "sell_price": "350000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/021.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "product_name": "버튼 칼라 니트 가디건",
          "sell_price": "395000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/022.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "product_name": "텍스쳐 블록 드레스",
          "sell_price": "346000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/023.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "product_name": "윙 슬리브 셔링 드레스",
          "sell_price": "495000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/014.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/024.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
    ],
    popularPrdList : [
      {
          "product_name": "턱 밴딩 플레어 스커트턱 밴딩 플레어 스커트턱 밴딩 플레어 스커트턱 밴딩 플레어 스커트턱 밴딩 플레어 스커트턱 밴딩 플레어 스커트",
          "sell_price": "275000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/009.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/019.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "product_name": "백 밴딩 슬릿 팬츠",
          "sell_price": "275000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/008.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/018.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "product_name": "포켓 싱글 재킷",
          "sell_price": "350000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/007.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/017.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "product_name": "페이크 레더 플리츠 스커트",
          "sell_price": "295000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/006.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/016.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "product_name": "턱 밴딩 플레어 스커트",
          "sell_price": "275000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/019.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/029.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "product_name": "백 밴딩 슬릿 팬츠",
          "sell_price": "275000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/018.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/028.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "product_name": "포켓 싱글 재킷",
          "sell_price": "350000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/017.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/027.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
      {
          "product_name": "페이크 레더 플리츠 스커트",
          "sell_price": "295000",
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/016.jpg",
          "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/026.jpg",
          "link_url" : "#none",
          "zzim": false,
      },
    ],
    specialShopIdx : 0,
    specialShopList : [
      {
        title : 'COVER PRESENTAION',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img.png',
        link_url : '#n',
        list : [
          {
              "product_name": "린넨 블렌드 칼라리스 재킷린넨 블렌드 칼라리스 재킷린넨 블렌드 칼라리스 재킷린넨 블렌드 칼라리스 재킷린넨 블렌드 칼라리스 재킷",
              "sell_price": "350000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img0.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
              "link_url" : "#none",
              "zzim": false,
          },
          {
              "product_name": "버튼 칼라 니트 가디건",
              "sell_price": "395000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img1.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
              "link_url" : "#none",
              "zzim": true,
          },
          {
              "product_name": "텍스쳐 블록 드레스",
              "sell_price": "346000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img2.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
              "link_url" : "#none",
              "zzim": false,
          },
          {
              "product_name": "린넨 블렌드 칼라리스 재킷",
              "sell_price": "350000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img0.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
              "link_url" : "#none",
              "zzim": false,
          },
          {
              "product_name": "버튼 칼라 니트 가디건",
              "sell_price": "395000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img1.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
              "link_url" : "#none",
              "zzim": true,
          },
          {
              "product_name": "텍스쳐 블록 드레스",
              "sell_price": "346000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img2.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
              "link_url" : "#none",
              "zzim": false,
          },
        ]
      },
      {
        title : 'KNOTTED UNEXPECTED WAY EDITION 01',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/banner_11.jpg',
        link_url : '#n',
        list : [
          {
              "product_name": "버튼 칼라 니트 가디건",
              "sell_price": "395000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img1.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
              "link_url" : "#none",
              "zzim": true,
          },
          {
              "product_name": "텍스쳐 블록 드레스",
              "sell_price": "346000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img2.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
              "link_url" : "#none",
              "zzim": false,
          },
          {
              "product_name": "린넨 블렌드 칼라리스 재킷",
              "sell_price": "350000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img0.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
              "link_url" : "#none",
              "zzim": false,
          },
          {
              "product_name": "버튼 칼라 니트 가디건",
              "sell_price": "395000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img1.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
              "link_url" : "#none",
              "zzim": true,
          },
          {
              "product_name": "텍스쳐 블록 드레스",
              "sell_price": "346000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img2.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
              "link_url" : "#none",
              "zzim": false,
          },
          {
              "product_name": "린넨 블렌드 칼라리스 재킷",
              "sell_price": "350000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img0.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
              "link_url" : "#none",
              "zzim": false,
          },
        ]
      },
      {
        title : 'KNOTTED',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img.png',
        link_url : '#n',
        list : [
          {
              "product_name": "버튼 칼라 니트 가디건",
              "sell_price": "395000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img1.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
              "link_url" : "#none",
              "zzim": true,
          },
          {
              "product_name": "린넨 블렌드 칼라리스 재킷",
              "sell_price": "350000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img0.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
              "link_url" : "#none",
              "zzim": false,
          },
          {
              "product_name": "텍스쳐 블록 드레스",
              "sell_price": "346000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img2.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
              "link_url" : "#none",
              "zzim": false,
          },
          {
              "product_name": "버튼 칼라 니트 가디건",
              "sell_price": "395000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img1.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
              "link_url" : "#none",
              "zzim": true,
          },
          {
              "product_name": "린넨 블렌드 칼라리스 재킷",
              "sell_price": "350000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img0.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
              "link_url" : "#none",
              "zzim": false,
          },
          {
              "product_name": "텍스쳐 블록 드레스",
              "sell_price": "346000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img2.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
              "link_url" : "#none",
              "zzim": false,
          },
        ]
      },
      {
        title : 'EXPERT NEW WAY - TO GO',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/banner_11.jpg',
        link_url : '#n',
        list : [
          {
              "product_name": "텍스쳐 블록 드레스",
              "sell_price": "346000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img2.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
              "link_url" : "#none",
              "zzim": false,
          },
          {
              "product_name": "린넨 블렌드 칼라리스 재킷",
              "sell_price": "350000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img0.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
              "link_url" : "#none",
              "zzim": false,
          },
          {
              "product_name": "버튼 칼라 니트 가디건",
              "sell_price": "395000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img1.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
              "link_url" : "#none",
              "zzim": true,
          },
          {
              "product_name": "텍스쳐 블록 드레스",
              "sell_price": "346000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img2.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
              "link_url" : "#none",
              "zzim": false,
          },
          {
              "product_name": "린넨 블렌드 칼라리스 재킷",
              "sell_price": "350000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img0.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
              "link_url" : "#none",
              "zzim": false,
          },
          {
              "product_name": "버튼 칼라 니트 가디건",
              "sell_price": "395000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img1.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
              "link_url" : "#none",
              "zzim": true,
          },
        ]
      },
      {
        title : 'MINE : CODE MINE E',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img.png',
        link_url : '#n',
        list : [
          {
              "product_name": "린넨 블렌드 칼라리스 재킷",
              "sell_price": "350000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img0.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
              "link_url" : "#none",
              "zzim": false,
          },
          {
              "product_name": "텍스쳐 블록 드레스",
              "sell_price": "346000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img2.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
              "link_url" : "#none",
              "zzim": false,
          },
          {
              "product_name": "버튼 칼라 니트 가디건",
              "sell_price": "395000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img1.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
              "link_url" : "#none",
              "zzim": true,
          },
          {
              "product_name": "린넨 블렌드 칼라리스 재킷",
              "sell_price": "350000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img0.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/011.jpg",
              "link_url" : "#none",
              "zzim": false,
          },
          {
              "product_name": "텍스쳐 블록 드레스",
              "sell_price": "346000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img2.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/013.jpg",
              "link_url" : "#none",
              "zzim": false,
          },
          {
              "product_name": "버튼 칼라 니트 가디건",
              "sell_price": "395000",
              "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/brand-main-specail-img1.png",
              "image_url2": "https://img.thehandsome.com/md/publish/dummy/pc/012.jpg",
              "link_url" : "#none",
              "zzim": true,
          },
        ]
      }
    ],
    banner : {
      list : [
        {
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/slide01.png",
        },
        {
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/slide02.png",
        },
        /* {
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-banner-01.png",
          "bg_color": "#E0B47B",
          "text_color": "#000",
          "link_url": "#none",
          "type": 1,
          "desc": "PAIRS 세컨드 레이블",
          "title": "Deli & Grocery 신상품 보러가기!",
          "subtitle": ""
        },
        {
          "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/main-banner-03.png",
          "bg_color": "#3F3D40",
          "text_color": "#fff",
          "link_url": "#none",
          "type": 3,
          "desc": "SYSTEM HOMME",
          "title": "스포트라이트 온 타임옴므",
          "subtitle": "CHECK OUT NOW"
        } */
      ]
    },
    reviewList : [
      {
        link_url : '#n',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-main-review-img0.png',
        product_name : '크리스탈 베스트크리스탈 베스트크리스탈 베스트크리스탈 베스트크리스탈 베스트크리스탈 베스트',
        review : '박시한 실루엣의 점퍼로 덕 다운이라 가볍고 따듯해요!  하이넥 디자인으로 오픈 시 와이드한 연출도 가능하네요.',
        rate : '4.5'
      },
      {
        link_url : '#n',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-main-review-img1.png',
        product_name : '캐시미어 플레어 니트 드레스',
        review : '엉덩이 골반 부자라 니트 스커트는 트임이 없어 찬바람 안들어오게 막아주니 반코트에 입어도 따뜻해요!',
        rate : '4.0'
      },
      {
        link_url : '#n',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-main-review-img2.png',
        product_name : '',
        review : '귀여운 디자인에 도툼한 원단이라 기본 스타일로 편하게 자주 입어질 것 같아요! 코트안에 입기 좋아요.',
        rate : '4.0'
      },
      {
        link_url : '#n',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-main-review-img0.png',
        product_name : '크리스탈 베스트',
        review : '박시한 실루엣의 점퍼로 덕 다운이라 가볍고 따듯해요!  하이넥 디자인으로 오픈 시 와이드한 연출도 가능하네요.',
        rate : '4.5'
      },
      {
        link_url : '#n',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-main-review-img1.png',
        product_name : '캐시미어 플레어 니트 드레스',
        review : '엉덩이 골반 부자라 니트 스커트는 트임이 없어 찬바람 안들어오게 막아주니 반코트에 입어도 따뜻해요!',
        rate : '4.0'
      },
      {
        link_url : '#n',
        image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-main-review-img2.png',
        product_name : '',
        review : '귀여운 디자인에 도툼한 원단이라 기본 스타일로 편하게 자주 입어질 것 같아요! 코트안에 입기 좋아요.',
        rate : '4.0'
      }
    ],
    videoList : [
      {
        title : "20th Century Boys",
        desc : "2023년 타임옴므의 첫 번째 캡슐 컬렉션 'HOTEL PARADISO IN CALIFORNIA'는 꿈의 공간이라 여겨지는 캘리포니아에서 마주한 YOUTH들의 스타일리쉬한 무드를 가득 담았습니다. 자유로우면서도 멋스러운 스타일링과 90년대 레트로 풍의 빈티지룩을 타임옴므 만의 감각적인 디자인으로 재해석한 새로운 캡슐 컬렉션을 만나보세요.",
        video_url: "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
        image_url: "https://img.thehandsome.com/md/publish/dummy/pc/brand-video-poster.png",
      },
      {
        title : "캡슐 컬렉션 'SCENT IN TALES'",
        desc : "SJSJ 22S/S 캡슐 컬렉션 'SCENT IN TALES'가 출시됩니다.<br>우아한 무드를 현대적인 시각으로 재해석한 아이템을 선보입니다.",
        video_url: "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
        image_url: "https://img.thehandsome.com/md/publish/dummy/pc/brand-video-poster.png",
      },
      {
        title : "캡슐 컬렉션 'SCENT IN TALES'",
        desc : "SJSJ 22S/S 캡슐 컬렉션 'SCENT IN TALES'가 출시됩니다.<br>우아한 무드를 현대적인 시각으로 재해석한 아이템을 선보입니다.",
        video_url: "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
        image_url: "https://img.thehandsome.com/md/publish/dummy/pc/brand-video-poster.png",
      }
    ],
    brandNews : {
      image_url : 'https://img.thehandsome.com/md/publish/dummy/pc/brand-main-news.png',
      link_url : '#n',
      title : '더블 마일리지에 놓칠 수 없는 겨울<br>아우터를 소개 합니다.',
      desc : '발리가 패션 디렉터 로버트 라벤스타이너와 함께 산악인의 탐험 정신을<br>기념하는 캡슐 컬렉션을 공개했다.',
      date : '2022. 03. 10',
    }
  }),

  created(){
    
  },// created

  mounted(){
    EventBus.$emit("setHeader", {static: true, type: "brand", brand: "SJSJ"}) // 230213 브랜드 : brand_image 삭제
  },// mounted

  methods: {
    closeDialog () {
      this.isPopuptSatus = false
    }
  }// methods
}
</script>
<style lang="scss">
@import '@/assets/scss/pages/brand.scss'; //페이지 전용 css 해당 경로에 만들어서 사용
</style>
