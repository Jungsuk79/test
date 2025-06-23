<template>
  <div class="prd-detail-info">
    <h2 class="ir">상세정보</h2>
    <!-- BO상품등록 추가설명 -->
    <div class="editor-box mb-30" style="display:none;">
      <!-- BO 등록 영역(운영 사이트 샘플) -->
      <p class="selling_point" style="font-weight:bold"><b>폼더스토어의 온라인 EXCLUSIVE 라인, palette 제품입니다.<br><br>
      <font color="#002266">
      기간한정 브랜드데이 10%OFF<br>
      -기간:4.15~17 금토일 3일간<br><br></font>
      <a href="http://www.thehandsome.com/ko/magazine/exhibitions/8812509845176"><font color="#99004C">
      ▶palette 상품 더 보러가기</font></a>
      <br><br></b></p>
      <!-- //BO 등록 영역(운영 사이트 샘플) -->
    </div>
    <!-- //BO상품등록 추가설명 -->
    <!-- 상품설명(MD평) -->
     <!-- [무형 상품] 일때 isItgb 값으로 클래스 추가 및 컨텐츠 비활성화 -->
    <div class="prd-desc-box" :class="{'mb-30' : isItgb}">
      <p>스티치가 에스닉 패턴을 이루는 재킷으로 타임에서 볼 수 있는 독특한 소재가<br>
      소재만으로도 특별함을 선사해보입니다. 오묘한 컬러감을 연출하는 멜란지 컬러 또한<br>
      눈길을 끌며, 매듭 지어 연출하는 레더 벨트를 함께 구성하였습니다.</p>
    </div>
    <!-- //상품설명(MD평) -->
    <!-- 피팅정보 -->
    <div v-if="!isItgb">
      <h3 class="prd-tit">피팅정보</h3>
      <p class="cmp-font">173cm, 55사이즈 모델 82(S)착용</p>
    </div>
    <!-- //피팅정보 -->
    <!-- 상품추가정보 -->
    <div v-if="!isItgb">
      <h3 class="prd-tit">상품추가정보</h3>
      <ul class="cmp-list list-dotType2 bottom6">
        <li>100% 울 소재</li>
        <li>이탈리아 ‘LYRIA’사의 수입원단</li>
        <li>오픈타입</li>
        <li>양옆에 포켓</li>
      </ul>
    </div>
    <!-- //상품추가정보 -->
    <!-- 소재정보 -->
    <template v-if="true && !isItgb">
      <h3 class="prd-tit">소재정보</h3>
      <div class="prd-table-box">
        <table>
          <caption>소재정보 표</caption>
          <colgroup>
            <col style="width:120px">
            <col style="width:160px">
            <col style="width:160px">
            <col style="width:160px">
          </colgroup>
          <tbody>
            <tr v-for="(item,index) in materialInfo" :key="index" scope="row">
              <th>{{item.title}}</th>
              <td v-for="(item2,index2) in item.items" :key="index2" :class="{'selected':item2.selected}">{{item2.name}}</td>
            </tr>
          </tbody>
        </table>
        <p class="sub-txt">상기 정보는 주관적 내용이므로 참고해주세요.</p>
      </div>
    </template>
    <!-- //소재정보 -->
    
    <!-- 실측사이즈/사이즈조견표 -->
     <div v-if="!isItgb">
       <div class="cmp-tabs tabs-contents">
         <v-tabs v-model="tab" fixed-tabs>
           <v-tab>실측 사이즈</v-tab>
           <v-tab>사이즈 조건표</v-tab>
         </v-tabs>
       </div>
       <div class="tab-content">
         <v-tabs-items v-model="tab" touchless>
           <v-tab-item :transition="false">
             <div class="prd-tab-cont">
               <!-- 사이즈정보 있을 때 --->
               <template v-if="true">
                 <div class="size-tit">
                   <h3>원피스</h3>
                 </div>
                 <!-- 2022-09-15-prd 실측사이즈 : 단위선택 추가 -->
                 <div class="size-unit-select" :class="sizeUnit">
                   <p class="tit">단위</p>
                   <button class="select-btn" @click="sizeUnitSelect">
                     <div class="cm-txt">CM</div>
                     <div class="inch-txt">INCH</div>
                   </button>
                 </div>
                 <!-- //2022-09-15-prd 실측사이즈 : 단위선택 추가 -->
                 <div class="size-cont">
                   <div class="size-imgArea">
                       <!-- 
                         실측사이즈 이미지 클래스
                         SZ01 : 티셔츠
                         SZ02 : 블라우스
                         SZ03 : 셔츠
                         SZ04 : 니트
                         SZ05 : 가디건
                         SZ06 : 재킷
                         SZ07 : 트렌치, 코트
                         SZ08 : 점퍼, 다운/패딩
                         SZ09 : 스커트
                         SZ10 : 드레스
                         SZ11 : 팬츠
                         SZ12 : 기타, 장갑, 벨트, 모자
                         SZ13 : 신발
                         SZ14 : 가방
                         SZ15 : 하이넥
                         SZ16 : 베스트
                       -->
                       <p class="size-img SZ10">
                         <span class="ir">원피스</span>
                       </p>
                   </div>
                   <div class="size-tbl"><!-- 230228 실측사이즈 : 실측 사이즈 이미지 없을 시 none-img 클래스 추가 -->
                     <!-- 221124 실측사이즈 : 1개일때 -->
                     <div class="cmp-tbl tbl-sizeType">
                       <v-simple-table class="tbl">
                         <caption>
                             원피스
                         </caption>
                         <colgroup>
                             <col style="width: 25%" />
                             <col />
                         </colgroup>
                         <thead>
                             <tr>
                               <th scope="col" class="text-left other-size">사이즈</th>
                               <th scope="col" class="text-center">실측사이즈 (105) 기준</th>
                             </tr>
                         </thead>
                         <tbody>
                             <tr>
                               <th class="text-left">가슴둘레</th>
                               <td class="text-center">72.3</td>
                             </tr>
                             <tr>
                               <th class="text-left">소메부리</th>
                               <td class="text-center">41.28</td>
                             </tr>
                             <tr>
                               <th class="text-left">어깨너비</th>
                               <td class="text-center">61.91</td>
                             </tr>
                             <tr>
                               <th class="text-left">소매길이</th>
                               <td class="text-center">14.29</td>
                             </tr>
                             <tr>
                               <th class="text-left">총길이</th>
                               <td class="text-center">14.29</td>
                             </tr>
                         </tbody>
                       </v-simple-table>
                     </div>
                     <!-- //221124 실측사이즈 : 1개일때 -->
                     <!-- 코트 -->
                     <!--<div class="cmp-tbl tbl-sizeType">
                       <v-simple-table class="tbl">
                         <caption>
                           코트
                         </caption>
                         <colgroup>
                           <col style="width: 37%" />
                           <col style="width: 38%" />
                           <col style="width: 38%" />
                         </colgroup>
                         <thead>
                           <tr>
                             <th scope="col" class="text-left other-size">사이즈</th>
                             <th scope="col" class="text-center">M</th>
                             <th scope="col" class="text-center">L</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <th scope="row">총길이</th>
                             <td class="text-center">116.84</td>
                             <td class="text-center">117.48</td>
                           </tr>
                           <tr>
                             <th scope="row">가슴둘레</th>
                             <td class="text-center">51.44</td>
                             <td class="text-center">53.34</td>
                           </tr>
                           <tr>
                             <th scope="row">어깨너비</th>
                             <td class="text-center">41.28</td>
                             <td class="text-center">42.54</td>
                           </tr>
                           <tr>
                             <th scope="row">소매길이</th>
                             <td class="text-center">61.91</td>
                             <td class="text-center">62.55</td>
                           </tr>
                           <tr>
                             <th scope="row">소매부리</th>
                             <td class="text-center">14.29</td>
                             <td class="text-center">14.29</td>
                           </tr>
                         </tbody>
                       </v-simple-table>
                     </div>-->
   
                     <!-- 원피스 CASE -->
                     <!--
                     <div class="cmp-tbl tbl-sizeType">
                       <v-simple-table class="tbl">
                         <caption>
                           원피스
                         </caption>
                         <colgroup>
                           <col style="width: 120px" />
                           <col style="width: 160px" />
                           <col style="width: 160px" />
                           <col style="width: 160px" />
                         </colgroup>
                         <thead>
                           <tr>
                             <th class="text-left other-size">사이즈</th>
                             <th class="text-center">76</th>
                             <th class="text-center">82</th>
                             <th class="text-center">88</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <th class="text-left">총길이</th>
                             <td class="text-center">116.84</td>
                             <td class="text-center">116.84</td>
                             <td class="text-center">117.48</td>
                           </tr>
                           <tr>
                             <th class="text-left">가슴둘레</th>
                             <td class="text-center">51.44</td>
                             <td class="text-center">51.44</td>
                             <td class="text-center">53.34</td>
                           </tr>
                           <tr>
                             <th class="text-left">어깨너비</th>
                             <td class="text-center">41.28</td>
                             <td class="text-center">41.28</td>
                             <td class="text-center">42.54</td>
                           </tr>
                           <tr>
                             <th class="text-left">소매길이</th>
                             <td class="text-center">61.91</td>
                             <td class="text-center">61.91</td>
                             <td class="text-center">62.55</td>
                           </tr>
                           <tr>
                             <th class="text-left">소매부리</th>
                             <td class="text-center">14.29</td>
                             <td class="text-center">14.29</td>
                             <td class="text-center">14.29</td>
                           </tr>
                           <tr>
                             <th class="text-left">허리둘레</th>
                             <td class="text-center">14.29</td>
                             <td class="text-center">14.29</td>
                             <td class="text-center">14.29</td>
                           </tr>
                           <tr>
                             <th class="text-left">엉덩이둘레</th>
                             <td class="text-center">14.29</td>
                             <td class="text-center">14.29</td>
                             <td class="text-center">14.29</td>
                           </tr>
                           <tr>
                             <th class="text-left">트임길이</th>
                             <td class="text-center">14.29</td>
                             <td class="text-center">14.29</td>
                             <td class="text-center">14.29</td>
                           </tr>
                         </tbody>
                       </v-simple-table>
                     </div>
                     -->
                     
                     <!-- 230106 실측사이즈 : 추가 -->
                     <div class="size-desc-cnt">
                       <div class="txt">BO 기타설명에 입력한 텍스트를 노출합니다.</div>
                       <div class="txt">BO 추가설명에 입력한 텍스트를 노출합니다.</div>
                     </div>
                     <!-- // 230106 실측사이즈 : 추가 -->
                     
                     <p class="tbl-txt">원단특성과 측정방법에 따라 약간의 오차 가능성이 있습니다.</p>
                   </div>
                 </div>
               </template>
               <!-- // 사이즈정보 있을 때 --->
   
               <!-- 사이즈정보 없을 때(230106 실측사이즈 : 추가) -->
               <template v-if="false">
                 <div class="size-desc-box">
                   <div class="size-desc-cnt">
                     <div class="txt">BO 기타설명에 입력한 텍스트를 노출합니다.</div>
                     <div class="txt">BO 추가설명에 입력한 텍스트를 노출합니다.</div>
                   </div>
                   <p class="tbl-txt">원단특성과 측정방법에 따라 약간의 오차 가능성이 있습니다.</p>
                 </div>
               </template>
               <!-- //사이즈정보 없을 때(230106 실측사이즈 : 추가) -->
             </div>
           </v-tab-item>
           <v-tab-item :transition="false">
             <div class="prd-tab-cont1 pd-type2"><!-- 221109 조견표탭 : pd-type2 클래스 추가 -->
               <!-- 221109 조견표탭 : 마크업 변경 -->
               <!-- <div class="size-tit-top">
                 <h2>WOMEN TOP</h2>
               </div> -->
               <div class="cmp-tabs tabs-noneLine">
                 <v-tabs v-model="sizeTab">
                   <v-tab>WOMEN TOP</v-tab>
                   <v-tab>MEN TOP</v-tab>
                 </v-tabs>
               </div>
               <!-- // 221109 조견표탭 -->
               <v-tabs-items v-model="sizeTab" touchless>
                 <v-tab-item :transition="false">
                   <div class="size-tbl">
                     <table>
                       <caption>
                       WOMEN TOP
                       </caption>
                       <colgroup>
                         <col style="width: 213px" />
                         <col style="width: auto" />
                         <col style="width: auto" />
                         <col style="width: auto" />
                         <col style="width: auto" />
                         <col style="width: auto" />
                     </colgroup>
                     <thead>
                       <tr>
                         <th scope="col" class="text-left">BRAND</th>
                         <th scope="col">XS</th>
                         <th scope="col">S</th>
                         <th scope="col">M</th>
                         <th scope="col">L</th>
                         <th scope="col">FREE</th>
                       </tr>
                     </thead>
                       <tbody>
                         <tr>
                           <td class="text-left">TIME</td>
                           <td class="text-center">76</td>
                           <td class="text-center">82</td>
                           <td class="text-center">82, 84</td><!-- [퍼블수정]23.01.25 예시 -->
                           <td class="text-center">86, 88</td>
                           <td class="text-center">90, 92</td>
                         </tr>
                         <tr>
                           <td class="text-left">MINE</td>
                           <td class="text-center">76</td>
                           <td class="text-center">82</td>
                           <td class="text-center">82, 84</td>
                           <td class="text-center">86</td>
                           <td class="text-center">88</td>
                         </tr>
                         <tr>
                           <td class="text-left">SYSTEM</td>
                           <td class="text-center">76</td>
                           <td class="text-center">82</td>
                           <td class="text-center">88</td>
                           <td class="text-center">-</td>
                           <td class="text-center">-</td>
                         </tr>
                         <tr>
                           <td class="text-left">SJSJ</td>
                           <td class="text-center">76</td>
                           <td class="text-center">82</td>
                           <td class="text-center">88</td>
                           <td class="text-center">-</td>
                           <td class="text-center">-</td>
                         </tr>
                       </tbody>
                     </table>
                   </div>
                   <div class="size-tbl">
                     <table>
                       <caption>
                         COUNTRY
                       </caption>
                       <colgroup>
                         <col style="width: 213px" />
                         <col style="width: auto" />
                         <col style="width: auto" />
                         <col style="width: auto" />
                         <col style="width: auto" />
                         <col style="width: auto" />
                     </colgroup>
                     <thead>
                       <tr>
                         <th scope="col" class="text-left">COUNTRY</th>
                         <th scope="col">XS</th>
                         <th scope="col">S</th>
                         <th scope="col">M</th>
                         <th scope="col">L</th>
                         <th scope="col">FREE</th>
                       </tr>
                     </thead>
                       <tbody>
                         <tr>
                           <td class="text-left valign-top" rowspan="2">KOREA</td><!-- [퍼블수정]23.01.25 rowspan="2" 인 경우 class valign-top 추가 -->
                           <td class="text-center">&nbsp;</td>
                           <td class="text-center">85</td>
                           <td class="text-center">90</td>
                           <td class="text-center">95</td>
                           <td class="text-center">-</td>
                         </tr>
                         <tr>
                           <td class="text-center">44</td>
                           <td class="text-center">55</td>
                           <td class="text-center">66</td>
                           <td class="text-center">77</td>
                           <td class="text-center">-</td>
                         </tr>
                         <tr>
                           <td class="text-left">US</td>
                           <td class="text-center">2</td>
                           <td class="text-center">4</td>
                           <td class="text-center">6</td>
                           <td class="text-center">8</td>
                           <td class="text-center">-</td>
                         </tr>
                         <tr>
                           <td class="text-left">EUROPE</td>
                           <td class="text-center">34</td>
                           <td class="text-center">36</td>
                           <td class="text-center">38</td>
                           <td class="text-center">40</td>
                           <td class="text-center">-</td>
                         </tr>
                         <tr>
                           <td class="text-left">CHINA</td>
                           <td class="text-center">160/80A</td>
                           <td class="text-center">165/84A</td>
                           <td class="text-center">170/88A</td>
                           <td class="text-center">175/92A</td>
                           <td class="text-center">-</td>
                         </tr>           
                       </tbody>
                     </table>
                   </div>
                 </v-tab-item>
                 <v-tab-item :transition="false">
                   <div class="size-tbl">
                     <table>
                       <caption>
                       MEN TOP
                       </caption>
                       <colgroup>
                         <col style="width: 213px" />
                         <col style="width: auto" />
                         <col style="width: auto" />
                         <col style="width: auto" />
                         <col style="width: auto" />
                         <col style="width: auto" />
                     </colgroup>
                     <thead>
                       <tr>
                         <th scope="col" class="text-left">BRAND</th>
                         <th scope="col">XS</th>
                         <th scope="col">S</th>
                         <th scope="col">M</th>
                         <th scope="col">L</th>
                         <th scope="col">FREE</th>
                       </tr>
                     </thead>
                       <tbody>
                         <tr>
                           <td class="text-left">TIME</td>
                           <td class="text-center">76</td>
                           <td class="text-center">82</td>
                           <td class="text-center">88</td>
                           <td class="text-center">94</td>
                           <td class="text-center">90</td>
                         </tr>
                         <tr>
                           <td class="text-left">MINE</td>
                           <td class="text-center">76</td>
                           <td class="text-center">82</td>
                           <td class="text-center">88</td>
                           <td class="text-center">94</td>
                           <td class="text-center">90</td>
                         </tr>
                         <tr>
                           <td class="text-left">SYSTEM</td>
                           <td class="text-center">76</td>
                           <td class="text-center">82</td>
                           <td class="text-center">88</td>
                           <td class="text-center">-</td>
                           <td class="text-center">-</td>
                         </tr>
                         <tr>
                           <td class="text-left">SJSJ</td>
                           <td class="text-center">76</td>
                           <td class="text-center">82</td>
                           <td class="text-center">88</td>
                           <td class="text-center">-</td>
                           <td class="text-center">-</td>
                         </tr>
                       </tbody>
                     </table>
                   </div>
                   <div class="size-tbl">
                     <table>
                       <caption>
                         COUNTRY
                       </caption>
                       <colgroup>
                         <col style="width: 213px" />
                         <col style="width: auto" />
                         <col style="width: auto" />
                         <col style="width: auto" />
                         <col style="width: auto" />
                         <col style="width: auto" />
                     </colgroup>
                     <thead>
                       <tr>
                         <th scope="col" class="text-left">COUNTRY</th>
                         <th scope="col">XS</th>
                         <th scope="col">S</th>
                         <th scope="col">M</th>
                         <th scope="col">L</th>
                         <th scope="col">FREE</th>
                       </tr>
                     </thead>
                       <tbody>
                         <tr>
                           <td class="text-left" rowspan="2">KOREA</td>
                           <td class="text-center">&nbsp;</td>
                           <td class="text-center">85</td>
                           <td class="text-center">90</td>
                           <td class="text-center">95</td>
                           <td class="text-center">-</td>
                         </tr>
                         <tr>
                           <td class="text-center">44</td>
                           <td class="text-center">55</td>
                           <td class="text-center">66</td>
                           <td class="text-center">77</td>
                           <td class="text-center">-</td>
                         </tr>
                         <tr>
                           <td class="text-left">US</td>
                           <td class="text-center">2</td>
                           <td class="text-center">4</td>
                           <td class="text-center">6</td>
                           <td class="text-center">8</td>
                           <td class="text-center">-</td>
                         </tr>
                         <tr>
                           <td class="text-left">EUROPE</td>
                           <td class="text-center">34</td>
                           <td class="text-center">36</td>
                           <td class="text-center">38</td>
                           <td class="text-center">40</td>
                           <td class="text-center">-</td>
                         </tr>
                         <tr>
                           <td class="text-left">CHINA</td>
                           <td class="text-center">160/80A</td>
                           <td class="text-center">165/84A</td>
                           <td class="text-center">170/88A</td>
                           <td class="text-center">175/92A</td>
                           <td class="text-center">-</td>
                         </tr>           
                       </tbody>
                     </table>
                   </div>
                 </v-tab-item>
               </v-tabs-items>
             </div>
           </v-tab-item>
         </v-tabs-items>
       </div>
     </div>
    <!-- // 실측사이즈/사이즈조견표 -->
  </div>
</template>

<script>
export default {
  components: {
    
  },
  props: {
    isItgb: {
      type: Boolean,
      default: () => {
        return false
      }

    }
  },
  data: () => ({
    tab : 0,
    sizeTab : 0, // 221109 조견표탭 : 추가
    materialInfo : [ // 소재 정보
      {
        title : '핏',
        items : [
          {
            name : '슬림핏',
            selected : false
          },
          {
            name : '레귤러핏',
            selected : true
          },
          {
            name : '루즈핏',
            selected : false
          }
        ]
      },
      {
        title : '신축성',
        items : [
          {
            name : '없음',
            selected : false
          },
          {
            name : '조금 있음',
            selected : false
          },
          {
            name : '있음',
            selected : false
          }
        ]
      },
      {
        title : '비침',
        items : [
          {
            name : '없음',
            selected : false
          },
          {
            name : '약간',
            selected : true
          },
          {
            name : '있음',
            selected : false
          }
        ]
      },
      {
        title : '두께',
        items : [
          {
            name : '얇음',
            selected : false
          },
          {
            name : '보통',
            selected : true
          },
          {
            name : '두꺼음',
            selected : false
          }
        ]
      },
      {
        title : '안감',
        items : [
          {
            name : '없음',
            selected : false
          },
          {
            name : '부분안갑',
            selected : false
          },
          {
            name : '전체 안감',
            selected : false
          }
        ]
      },
    ],
    htmlMore : {
      use : true,
      open : false,
      hiddenH : 750,
      top : null
    },
    sizeUnit : 'cm', // 2022-09-15-prd 실측사이즈 : 추가
  }),
  created() {
    
  },
  mounted() {
    const me = this
    setTimeout(()=>{
      me.htmlMoreSet()
    },200)
  },
  methods: {
    htmlMoreSet(){
      const me = this
      const htmlBox = me.$el.querySelector('.prd-html-editor')

      if(!htmlBox) return false;

      if(htmlBox.clientHeight > me.htmlMore.hiddenH){
        me.htmlMore.use = true
      }
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
    sizeUnitSelect(){ // 2022-09-15-prd 실측사이즈 : 추가
      const me = this
      if(me.sizeUnit==='cm') me.sizeUnit='inch'
      else if(me.sizeUnit==='inch') me.sizeUnit='cm'
      
    }
  },
}
</script>

<style lang="scss">
 @import '@/assets/scss/pages/detail.scss'; //페이지 전용 css
</style>
