<template>
  <div class="prd-detail-info">
    <h2 class="ir">상세정보</h2>
    <!-- 상품설명(MD평) -->
    <p class="prdd-text">LAIT 21FW The neat sleeveless jumpsuit is made with knitted fabric to complete a neat and unique look. The jumpsuit is wide like a skirt and its light and cool cotton blend fabric makes the jumpsuit more comfortable in S/S seasons.</p>
    <div class="prd-desc-box">
      <p>The cardigan is in harmony with beadings that glitter fancily even when not moving.<br>The cardigan adds LÄTT’s iconic button for unique points and wool blend fabric<br>makes the cardigan more luxurious. You can style the cardigan alone or match with<br>various inner tops.</p>
    </div>
    <!-- //상품설명(MD평) -->
    <!-- 피팅정보 -->
    <h3 class="prd-tit">Fitting Information</h3>
    <p class="cmp-font">176cm (69.29inch), size 55 model wears size 90</p>
    <!-- //피팅정보 -->
    <!-- 상품추가정보 -->
    <h3 class="prd-tit">More</h3>
    <ul class="cmp-dotList bottom6">
      <li>Cotton and wool blend</li>
      <li>Front button closure</li>
      <li>Front button closure</li>
      <li>Ribbed ends</li>
    </ul>
    <!-- //상품추가정보 -->
    <!-- 소재정보 -->
    <h3 class="prd-tit">Material Info</h3>
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
      <p class="sub-txt">Please refer to the information above since it is subjective.</p>
    </div>
    <!-- //소재정보 -->
    <!-- HTML 영역 -->
    <div class="cmp-tabs tabs-contents">
      <v-tabs v-model="tab" fixed-tabs>
        <v-tab>Actual Size</v-tab>
        <v-tab>Size Guide</v-tab>
      </v-tabs>
    </div>
    <div class="tab-content">
      <v-tabs-items v-model="tab" touchless>
        <v-tab-item :transition="false">
          <div class="prd-tab-cont">
            <div class="size-tit">
              <h3>One piece</h3>
            </div>
            <!-- 2022-09-15-prd 실측사이즈 : 단위선택 추가 -->
            <div class="size-unit-select" :class="sizeUnit">
              <p class="tit">measure units</p>
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
                  <p class="size-img SZ04">
                    <span class="ir">니트</span>
                  </p>
              </div>
              <div class="size-tbl">
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
                        <th class="text-left other-size">size</th>
                        <th class="text-center">76</th>
                        <th class="text-center">82</th>
                        <th class="text-center">88</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th class="text-left">Length</th>
                        <td class="text-center">116.84</td>
                        <td class="text-center">116.84</td>
                        <td class="text-center">117.48</td>
                      </tr>
                      <tr>
                        <th class="text-left">Chest</th>
                        <td class="text-center">51.44</td>
                        <td class="text-center">51.44</td>
                        <td class="text-center">53.34</td>
                      </tr>
                      <tr>
                        <th class="text-left">Shoulder</th>
                        <td class="text-center">41.28</td>
                        <td class="text-center">41.28</td>
                        <td class="text-center">42.54</td>
                      </tr>
                      <tr>
                        <th class="text-left">Sleeve Length</th>
                        <td class="text-center">61.91</td>
                        <td class="text-center">61.91</td>
                        <td class="text-center">62.55</td>
                      </tr>
                      <tr>
                        <th class="text-left">Sleeve</th>
                        <td class="text-center">14.29</td>
                        <td class="text-center">14.29</td>
                        <td class="text-center">14.29</td>
                      </tr>
                    </tbody>
                  </v-simple-table>
                </div>
                <p class="tbl-txt">Measurement error may occur according to a measurer and materials of clothing.</p>
              </div>
            </div>
            
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
            <div class="size-tbl-box">
              <div class="size-tbl first-tbl">
                <div class="cmp-tbl tbl-sizeType">
                  <v-simple-table class="tbl" dense>
                    <caption>
                      BRAND
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
                        <th class="text-left">BRAND</th>
                        <th class="text-center">XS</th>
                        <th class="text-center">S</th>
                        <th class="text-center">M</th>
                        <th class="text-center">L</th>
                        <th class="text-center">FREE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th class="text-left">TIME</th>
                        <td class="text-center">76</td>
                        <td class="text-center">82</td>
                        <td class="text-center">88</td>
                        <td class="text-center">94</td>
                        <td class="text-center">90</td>
                      </tr>
                      <tr>
                        <th class="text-left">MINE</th>
                        <td class="text-center">76</td>
                        <td class="text-center">82</td>
                        <td class="text-center">88</td>
                        <td class="text-center">94</td>
                        <td class="text-center">90</td>
                      </tr>
                      <tr>
                        <th class="text-left">SYSTEM</th>
                        <td class="text-center">76</td>
                        <td class="text-center">82</td>
                        <td class="text-center">88</td>
                        <td class="text-center">-</td>
                        <td class="text-center">-</td>
                      </tr>
                      <tr>
                        <th class="text-left">SJSJ</th>
                        <td class="text-center">76</td>
                        <td class="text-center">82</td>
                        <td class="text-center">88</td>
                        <td class="text-center">-</td>
                        <td class="text-center">-</td>
                      </tr>
                    </tbody>
                  </v-simple-table>
                </div>
              </div>

              <div class="size-tbl">
                <div class="cmp-tbl tbl-sizeType">
                  <v-simple-table class="tbl" dense>
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
                        <th class="text-left">COUNTRY</th>
                        <th class="text-center">XS</th>
                        <th class="text-center">S</th>
                        <th class="text-center">M</th>
                        <th class="text-center">L</th>
                        <th class="text-center">FREE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th class="text-left">KOREA</th>
                        <td class="text-center">80</td>
                        <td class="text-center">85</td>
                        <td class="text-center">90</td>
                        <td class="text-center">100</td>
                        <td class="text-center">-</td>
                      </tr>
                      <tr>
                        <th class="text-left">US</th>
                        <td class="text-center">1</td>
                        <td class="text-center">2</td>
                        <td class="text-center">4</td>
                        <td class="text-center">6</td>
                        <td class="text-center">-</td>
                      </tr>
                      <tr>
                        <th class="text-left">EUROPE</th>
                        <td class="text-center">32</td>
                        <td class="text-center">34</td>
                        <td class="text-center">36</td>
                        <td class="text-center">38</td>
                        <td class="text-center">-</td>
                      </tr>
                      <tr>
                        <th class="text-left">CHINA</th>
                        <td class="text-center">150/80A</td>
                        <td class="text-center">160/80A</td>
                        <td class="text-center">165/84A</td>
                        <td class="text-center">170/88A</td>
                        <td class="text-center">-</td>
                      </tr>
                    </tbody>
                  </v-simple-table>
                </div>
              </div>
            </div>
          </div>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  props: {
    
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
