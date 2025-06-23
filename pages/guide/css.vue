<template>
    <div class="guide">
    <!-- CSS 파일위치 -->
    <h2>SCSS 파일</h2>
    <p class="ma-4">scss 폴더경로 : assets / scss</p>

    <v-simple-table class="table mb-10">
      <tbody>
        <tr>
          <td class="bg" width="30%">폴더명</td>
          <td class="bg" width="30%">파일명</td>
          <td class="bg" width="auto">설명</td>
        </tr>
        <tr>
          <td></td>
          <td>_index.scss</td>
          <td>각 요소에 적용될 SCSS를 한곳에 정의</td>
        </tr>
        <tr>
          <td></td>
          <td>common.scss</td>
          <td>공통으로 적용되는 스타일 정의</td>
        </tr>
         <tr>
          <td></td>
          <td>mixin.scss</td>
          <td>로직에서 재사용하기 위한 스타일 정의</td>
        </tr>
        <tr>
          <td></td>
          <td>navigationDrawers.scss</td>
          <td>공통 전체메뉴, 필터 스타일 정의</td>
        </tr>
        <tr>
          <td></td>
          <td>overrices.scss</td>
          <td>Vuetify 스타일 재정의</td>
        </tr>
        <tr>
          <td></td>
          <td>popup.scss</td>
          <td>공통 팝업, 풀팝업 레이아웃 스타일</td>
        </tr>
        <tr>
        <tr>
          <td></td>
          <td>product.scss</td>
          <td>공통 상품 목록/유닛 스타일</td>
        </tr>
         <tr>
          <td></td>
          <td>ui.scss</td>
          <td>공통 UI(스크롤, 헤더,푸터,TOP 버튼등) 스타일 정의</td>
        </tr>
        <tr>
          <td>components</td>
          <td>components.scss</td>
          <td>컴포넌트-Vuetify에서 제공되는 컴포넌트에 대한 스타일 재정의</td>
        </tr>
        <tr>
          <td>en</td>
          <td>en.scss</td>
          <td>글로벌에 사용하는 스타일 정의</td>
        </tr>
        <tr>
          <td>layouts</td>
          <td>layouts.scss</td>
          <td>전체 레이아웃에 대한 스타일 정의</td>
        </tr>
        <tr>
          <td rowspan="19" class="top">pages</td>
          <td>brand_time.scss</td>
          <td rowspan="19" class="top">특별히 해당 페이지에만 적용되어야 할 경우 스타일 정의</td>
        </tr>
        <tr>
          <td class="line">brand.scss</td>
        </tr>
        <tr>
          <td class="line">closet.scss</td>
        </tr>
        <tr>
          <td class="line">cs.scss</td>
        </tr>
        <tr>
          <td class="line">detail.scss</td>
        </tr>
        <tr>
          <td class="line">event.scss</td>
        </tr>
        <tr>
          <td class="line">giftCard.scss</td>
        </tr>
        <tr>
          <td class="line">handsomecare.scss</td>
        </tr>
        <tr>
          <td class="line">magazine.scss</td>
        </tr>
        <tr>
          <td class="line">main.scss</td>
        </tr>
        <tr>
          <td class="line">member.scss</td>
        </tr>
        <tr>
          <td class="line">mypage.scss</td>
        </tr>
         <tr>
          <td class="line">order.scss</td>
        </tr>
        <tr>
          <td class="line">search.scss</td>
        </tr>
        <tr>
          <td class="line">theplusmap.scss</td>
        </tr>
        <tr>
          <td class="line">theplusmember.scss</td>
        </tr>
      </tbody>
    </v-simple-table>

    <!-- 네이밍 규칙 -->
    <h2>네이밍 규칙</h2>
    <p class="ma-4">스타일 적용을 위한 아이디, 클래스의 경우 단어와 단어 사이를 하이푼(-)으로 구분하며, 단어와 단어 연결은 최대 3개까지 적용하고 그 이상일 경우에는 케밥표기법으로 적용한다.</p>
    <div class="boxColor">ex) btn-type-small<br>ex) btn-typeSmallGray</div>

  </div>
</template>

<script>
export default {
   layout : "guide",
};
</script>

<style lang="scss" scoped>
.guide .table  {
  border-radius: 0;

  .bg {
    background:rgba(0, 0, 0, 0.05);
  }
}
.guide td {
  text-align: left;
  border-left:1px solid rgba(0, 0, 0, 0.12);
  padding:0 20px;
}
.guide td:first-child {border-left:none;}
.guide td.line {
  border-left:1px solid rgba(0, 0, 0, 0.12);
  border-bottom:1px solid rgba(0, 0, 0, 0.12);
}
.guide td.top {
  vertical-align: top;
  padding-top:30px;
}
.guide h2 {
  font-weight: normal;
  font-size: 20px;
  border-bottom: 1px solid #000;
  margin-top: 50px;
  position: relative;
  padding-left: 10px;
  text-align: left;
}
.guide h2::before {
  content: '';
  display: block;
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background: #000;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.guide h2:first-child {
  margin-top: 0;
}
.boxColor {
  border:1px solid rgba(0, 0, 0, 0.12);
  // border-bottom:2px solid rgba(0, 0, 0, 0.12);     
  // background:rgba(0, 0, 0, 0.05);
  padding:10px;
  margin-bottom:50px;
  min-width:1150px;

   p {
     margin:0;
   }
}
.boxLine {
  border:1px solid rgba(0, 0, 0, 0.12);
  margin-bottom:50px;

}
.boxLine p {
  margin-bottom:20px
}
.boxLine p:last-child {
  margin-bottom:0;
}

.font-type {
  &.ko {
     // font-family:'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', sans-serif;
  }
  &.en {
   //  font-family: 'San Francisco', sans-serif ;
  }
  li {
    border-bottom:1px solid rgba(0, 0, 0, 0.12);
    padding:20px;
    &.type-38 {
      font-size:3.8rem;
      line-height:46px ;
    }
    &.type-24 {
      font-size:2.4rem;
      line-height:32px ;
    }
    &.type-22 {
      font-size:2.2rem;
      line-height:30px ;
    }
    &.type-18 {
      font-size:1.8rem;
      line-height:26px ;
    }
    &.type-16 {
      font-size:1.6rem;
      line-height:24px ;
    }
    &.type-14 {
      font-size:1.4rem;
      line-height:22px ;
    }
    &.type-12 {
      font-size:1.2rem;
      line-height:20px ;
    }
    
    .font-info {
      display: flex;
      flex-wrap: wrap;
      &.light {
        font-weight:300;
      }
      &.regular {
        font-weight:400;
      }
      &.medium {
        font-weight:500;
      }
      &.bold {
        font-weight:bold;
      }
      .tit {
        display:inline-block;
        padding-right:20px;
        width:100px;
        font-size:2.0rem
      }
    }
  }
}
</style>