<template>
   <div class="guide">
    <!-- 퍼블리싱 기본 폴더 구조 -->
    <h2 class="mb-2">퍼블리싱 기본 폴더 구조</h2>
    <div class="boxColor">
     root<br>
     ├ assets<br>
     ├─ fonts<br>
     ├─ scss<br>
     ├── components<br>
     ├── en<br>
     ├── layouts<br>
     ├── pages<br>
     ├ components<br>
     ├─ brand<br>
     ├─ common<br>
     ├─ giftCard<br>
     ├─ handsomeCare<br>
     ├─ mian<br>
     ├─ member<br>
     ├─ mypage<br>
     ├─ order<br>
     ├─ planshop<br>
     ├─ product<br>
     ├ layouts<br>
     ├ pages<br>
     ├─ CL<br>
     ├─ CP<br>
     ├─ CS<br>
     ├─ DP<br>
     ├─ en<br>
     ├─ GC<br>
     ├─ HC<br>
     ├─ HR<br>
     ├─ ME<br>
     ├─ MK<br>
     ├─ OR<br>
     ├─ PM<br>
     ├─ POPUP<br>
     ├─ TP<br>
     ├ static<br>
     ├─ fonts<br>
     ├─ images <br>
     ├─ json(simple)<br>
   </div>

     <!-- vue 파일명 -->
    <h2 class="mb-2">Vue 파일명 규칙</h2>
    <p class="text-left mb-20">첫 문자를 대문자로 표기하고 ,그 다음 문자도 대문자로 표기하는 파스칼표기법으로 작성한다</p>
    <div class="boxColor"> 예: PascalCase</div>

    <h2 class="mb-20">Vue 폴더명</h2>
    <v-simple-table class="guide_table">
      <template>
        <tbody>
        <tr>
          <td width="20%" class="bg">폴더명</td>
          <td width="50%" class="bg">서비스명</td>
          <td class="bg">비고</td>
        </tr>
        <tr>
          <td>CL</td>
          <td>옷장</td>
          <td></td>
        </tr>
        <tr>
          <td>CP</td>
          <td>공통</td>
          <td></td>
        </tr>
        <tr>
          <td>CS</td>
          <td>고객만족</td>
          <td></td>
        </tr>
        <tr>
          <td>DP</td>
          <td>전시</td>
          <td></td>
        </tr>
        <tr>
          <td>en</td>
          <td>글로벌</td>
          <td></td>
        </tr>
        <tr>
          <td>GC</td>
          <td>e 기프트</td>
          <td></td>
        </tr>
        <tr>
          <td>HC</td>
          <td>케어플러스 세탁</td>
          <td></td>
        </tr>
        <tr>
          <td>HR</td>
          <td>케어플러스 수선</td>
          <td></td>
        </tr>
        <tr>
          <td>ME</td>
          <td>회원</td>
          <td></td>
        </tr>
        <tr>
          <td>MK</td>
          <td>마케팅</td>
          <td></td>
        </tr>
        <tr>
          <td>OR</td>
          <td>주문</td>
          <td></td>
        </tr>
        <tr>
          <td>PM</td>
          <td>상품관리</td>
          <td></td>
        </tr>
        <tr>
          <td>POPUP</td>
          <td>풀팝업 & 디자인 팝업</td>
          <td></td>
        </tr>
        <tr>
          <td>TP</td>
          <td>더플러스+</td>
          <td></td>
        </tr>
      </tbody>
      </template>
    </v-simple-table>

    <!-- 이미지 폴더명 -->
    <h2 class="mb-20">이미지 폴더명</h2>
    <v-simple-table class="guide_table">
      <template>
        <tbody>
        <tr>
          <td width="20%" class="bg">폴더명</td>
          <td class="bg">설명</td>
        </tr>
        <tr>
          <td>brand</td>
          <td>브랜드 이미지</td>
        </tr>
        <tr>
          <td>card</td>
          <td>카드 이미지</td>
        </tr>
        <tr>
          <td>care</td>
          <td>케어플러스 세탁 / 수선 이미지</td>
        </tr>
        <tr>
          <td>cl</td>
          <td>나의 옷장 이미지</td>
        </tr>
        <tr>
          <td>common</td>
          <td>공통 아이콘</td>
        </tr>
        <tr>
          <td>cs</td>
          <td>고객센터 이미지</td>
        </tr>
        <tr>
          <td>dummy</td>
          <td>더미 이미지</td>
        </tr>
        <tr>
          <td>egiftcard</td>
          <td>e-기프트카드 이미지</td>
        </tr>
        <tr>
          <td>event</td>
          <td>이벤트 이미지</td>
        </tr>
        <tr>
          <td>main</td>
          <td>메인 이미지</td>
        </tr>
        <tr>
          <td>member</td>
          <td>마이페이지 이미지</td>
        </tr>
        <tr>
          <td>order</td>
          <td>주문서 / 쇼핑백 이미지</td>
        </tr>
         <tr>
          <td>payment</td>
          <td>결제 카드 & 은행 이미지</td>
        </tr>
        <tr>
          <td>products</td>
          <td>상품 정보 이미지</td>
        </tr>
        <tr>
          <td>stylelive</td>
          <td>상품상세 > 스타일라이브 상세리뷰팝업 이미지</td>
        </tr>
        <tr>
          <td>theplus</td>
          <td>더플러스+ 이미지</td>
        </tr>
      
      </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
   layout : "guide",
};
</script>

<style scoped>
.guide {width:1500px}
.guide .bg {
    background:rgba(0, 0, 0, 0.05);
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
.guide td:first-child {border-left:none;}
.guide h2:first-child {
  margin-top: 0;
}
.boxColor {
  background-color: rgba(0, 0, 0, 0.05);
  padding:10px;
  margin-bottom:50px;
  min-width:1150px;
}
</style>