<template>
  <DialogBasic
   :width="880"
    class="popup-realSizeGuide"
    header-title="실측 사이즈"
    @hide="closeDialog"
  >
    <template #body>
      <div class="inner">
        <!-- 사이즈 정보 있을 때 -->
        <template v-if="true">
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

          <div class="size-tbl-box more"><!-- 220908 실측사이즈 : size-tlb div 추가 -->
            <div class="size-tit">
              <h3>원피스</h3>
              <!-- 220908 실측사이즈 : 단위선택 추가 -->
              <div class="size-unit-select" :class="sizeUnit">
                <p class="tit">단위</p>
                <button class="select-btn" @click="sizeUnitSelect">
                  <div class="cm-txt">CM</div>
                  <div class="inch-txt">INCH</div>
                </button>
              </div>
              <!-- //220908 실측사이즈 : 단위선택 추가 -->
            </div>
            
            <div class="size-tbl">
              <!-- 221124 실측사이즈 : 1개일때  -->
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
                        <th scope="col">사이즈</th>
                        <th scope="col">실측사이즈 (105) 기준</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                        <th class="text-center">가슴둘레</th>
                        <td class="text-center">72.3</td>
                      </tr>
                      <tr>
                        <th class="text-center">소메부리</th>
                        <td class="text-center">41.28</td>
                      </tr>
                      <tr>
                        <th class="text-center">어깨너비</th>
                        <td class="text-center">61.91</td>
                      </tr>
                      <tr>
                        <th class="text-center">소매길이</th>
                        <td class="text-center">14.29</td>
                      </tr>
                      <tr>
                        <th class="text-center">총길이</th>
                        <td class="text-center">14.29</td>
                      </tr>
                  </tbody>
                </v-simple-table>
              </div>
              <!-- //221124 실측사이즈 :  1개일때  -->
              <!-- 코트 -->
              <!--
              <div class="cmp-tbl tbl-sizeType">
                  <v-simple-table class="tbl">
                  <caption>
                      코트
                  </caption>
                  <colgroup>
                      <col style="width: 25%" />
                      <col style="width: 25%" />
                      <col style="width: 25%" />
                      <col style="width: 25%" />
                  </colgroup>
                  <thead>
                      <tr>
                      <th scope="col">사이즈</th>
                      <th scope="col">76</th>
                      <th scope="col">82</th>
                      <th scope="col">88</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                      <th class="text-center">총길이</th>
                      <td class="text-center">116.84</td>
                      <td class="text-center">117.48</td>
                      <td class="text-center">117.48</td>
                      </tr>
                      <tr>
                      <th class="text-center">가슴둘레</th>
                      <td class="text-center">51.44</td>
                      <td class="text-center">53.34</td>
                      <td class="text-center">53.34</td>
                      </tr>
                      <tr>
                      <th class="text-center">어깨너비</th>
                      <td class="text-center">41.28</td>
                      <td class="text-center">42.54</td>
                      <td class="text-center">42.54</td>
                      </tr>
                      <tr>
                      <th class="text-center">소매길이</th>
                      <td class="text-center">61.91</td>
                      <td class="text-center">62.55</td>
                      <td class="text-center">62.55</td>
                      </tr>
                      <tr>
                      <th class="text-center">소매부리</th>
                      <td class="text-center">14.29</td>
                      <td class="text-center">14.29</td>
                      <td class="text-center">14.29</td>
                      </tr>
                      <tr>
                      <th class="text-center">허리둘레</th>
                      <td class="text-center">14.29</td>
                      <td class="text-center">14.29</td>
                      <td class="text-center">14.29</td>
                      </tr>
                  </tbody>
                  </v-simple-table>
              </div>
              -->
              <!-- 원피스 CASE -->
              <!--
              <div class="cmp-tbl tbl-sizeType">
                <v-simple-table class="tbl">
                  <caption>
                      원피스
                  </caption>
                  <colgroup>
                      <col />
                      <col style="width: 25%" />
                      <col style="width: 25%" />
                      <col style="width: 25%" />
                  </colgroup>
                  <thead>
                      <tr>
                      <th scope="col" class="text-left other-size">사이즈</th>
                      <th scope="col">76</th>
                      <th scope="col">82</th>
                      <th scope="col">88</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                      <th scope="row">총길이</th>
                      <td class="text-center">116.84</td>
                      <td class="text-center">116.84</td>
                      <td class="text-center">117.48</td>
                      </tr>
                      <tr>
                      <th scope="row">가슴둘레</th>
                      <td class="text-center">51.44</td>
                      <td class="text-center">51.44</td>
                      <td class="text-center">53.34</td>
                      </tr>
                      <tr>
                      <th scope="row">어깨너비</th>
                      <td class="text-center">41.28</td>
                      <td class="text-center">41.28</td>
                      <td class="text-center">42.54</td>
                      </tr>
                      <tr>
                      <th scope="row">소매길이</th>
                      <td class="text-center">61.91</td>
                      <td class="text-center">61.91</td>
                      <td class="text-center">62.55</td>
                      </tr>
                      <tr>
                      <th scope="row">소매부리</th>
                      <td class="text-center">14.29</td>
                      <td class="text-center">14.29</td>
                      <td class="text-center">14.29</td>
                      </tr>
                      <tr>
                      <th scope="row">허리둘레</th>
                      <td class="text-center">14.29</td>
                      <td class="text-center">14.29</td>
                      <td class="text-center">14.29</td>
                      </tr>
                      <tr>
                      <th scope="row">엉덩이둘레</th>
                      <td class="text-center">14.29</td>
                      <td class="text-center">14.29</td>
                      <td class="text-center">14.29</td>
                      </tr>
                      <tr>
                      <th scope="row">트임길이</th>
                      <td class="text-center">14.29</td>
                      <td class="text-center">14.29</td>
                      <td class="text-center">14.29</td>
                      </tr>
                  </tbody>
                </v-simple-table>
              </div>
              -->
            </div>

            <!-- 230106 실측사이즈 : 추가 -->
            <div class="size-desc-cnt">
              <div class="txt">BO 기타설명에 입력한 텍스트를 노출합니다.</div>
              <div class="txt">BO 추가설명에 입력한 텍스트를 노출합니다.</div>
            </div>
            <!-- // 230106 실측사이즈 : 추가 -->
          </div>
        </template>
        <!-- // 사이즈 정보 있을 때 -->
        <!-- 사이즈 정보 없을 때 (230106 실측사이즈 : 추가) -->
        <template v-if="false">
          <div class="size-desc-cnt">
            <div class="txt">BO 기타설명에 입력한 텍스트를 노출합니다.</div>
            <div class="txt">BO 추가설명에 입력한 텍스트를 노출합니다.</div>
          </div>
        </template>
        <!-- // 사이즈 정보 없을 때 (230106 실측사이즈 : 추가) -->
        <p class="size-txt">원단특성과 측정방법에 따라 약간의 오차 가능성이 있습니다.</p>
      </div>
    </template>
  </DialogBasic>
</template>
<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  components: { DialogBasic },
  data: () => ({
    // 팝업
    DialogBasic: false,
    sizeUnit : 'cm', 
  }),
  mounted(){ 
    const me = this
    me.tblWidth()
    window.addEventListener('resize', me.tblWidth);
  },
  beforeDestroy(){ 
    const me = this
    window.removeEventListener('resize', me.tblWidth);
  },
  methods: {
    closeDialog() {
      this.$emit('close')
    },
    tblWidth(){
      const me = this
      setTimeout(() => {
        const scrollBox = me.$el.querySelectorAll('.size-tbl-box')
        const winW =  window.innerWidth - 40
        for(let i=0;i<scrollBox.length;i++){
          const table = scrollBox[i].querySelector('table')
          if(table.clientWidth > winW) scrollBox[i].classList.add('more')
          else scrollBox[i].classList.remove('more')
        }
      }, 200)
    },
    sizeUnitSelect(){ 
      const me = this
      if(me.sizeUnit==='cm') me.sizeUnit='inch'
      else if(me.sizeUnit==='inch') me.sizeUnit='cm'
      
    }
  },
}
</script>

<style lang="scss" scoped></style>
