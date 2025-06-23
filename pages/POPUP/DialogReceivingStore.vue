<template>
  <DialogBasic header-title="매장 선택" class="popup-receiving-store" :width="540" @hide="closeDialog">
    <template #body>
      <!-- 매장 검색 -->
      <div class="cmp-form-searchBox">
        <v-text-field label="매장명 또는 지역명을 입력하세요." clearable class="cmp-form-input"></v-text-field>
        <v-btn icon>
          <div class="cmp-icon i-search">검색</div>
        </v-btn>
      </div>
      <ul class="cmp-dotList mt-20">
        <li>수령하시고자 하는 매장을 선택해 주세요.</li>
        <li>여러 개의 상품 주문 시 수령 매장을 동일하게 선택해주세요. </li>
      </ul>
      <!-- //매장 검색 -->

      <!-- 검색 결과 없을떄 -->
      <!--
      <CommonNoData msg="검색결과가 없습니다."/>
      -->
      <!-- //검색 결과 없을떄 -->

      <!-- 매장 리스트 -->
      <div class="store-select-box">
        <div v-for="(item, index) in storeList" :key="index" class="store-select-cnt">
          <!-- 기본 정보 -->
          <div class="store-info-cnt">
            <v-radio-group v-model="radioModeStore" column class="cmp-form-radioGroup">
              <v-radio 
                :value="index" class="cmp-form-radio" 
                @click="storeList[index].date_select_open = !storeList[index].date_select_open"
                @change="accoReset"
              >
                <template #label>
                  <div class="txt0"><strong>{{item.name}}</strong> {{item.distance}}</div>
                  <div class="txt1">{{item.address}}</div>
                </template>
              </v-radio>
            </v-radio-group>
            <button class="map-btn"  @click="openMap(index, $event)">
              <i v-show="storeList[index].map_open" v-cmp-icon="{ name: 'locon' }">지도보기 닫기</i>
              <i v-show="!storeList[index].map_open" v-cmp-icon="{ name: 'locoff' }">지도보기 열기</i>
            </button>
          </div>
          <!-- //기본 정보 -->
          <!-- 수령일&지도 -->
          <div v-if="item.date_select_open || item.map_open" class="date-map-cnt">
            <!-- 수령일 선택 -->
            <div v-if="item.date_select_open" class="date-select">
              <p class="tit">수령 예정일 선택</p>
              <ul class="cmp-line-radio">
                <li v-for="(item2, index2) in item.receipt_date" :key="index2" class="radio-item">
                  <input :id="'date'+index+index2" type="radio" :name="'dateSelect'+index"/>
                  <label :for="'date'+index+index2">{{item2}}</label>
                </li>
              </ul>
              <ul class="cmp-dotList">
                <li>매장 수령시 상품 사이즈 컬러 변경은 불가합니다.</li>
                <li class="c-point">수령확정일에 상품 수령이 불가하신 경우 반드시 고객센터로 문의 부탁드립니다.</li><!-- 221129 상품상세팝업 : 문구 수정 -->
              </ul>
            </div>
            <!-- // 수령일 선택 -->
            <!-- 지도 -->
            <div v-if="item.map_open" class="area-map">
              <div style="height:100%;background: url('https://img.thehandsome.com/md/publish/dummy/pc/map.png')  no-repeat center center / cover;"></div> <!-- 다음지도API -->
            </div>
            <!-- //지도 -->
          </div>
          <!-- //수령일&지도 -->
        </div>
      </div>
      <!-- //매장 리스트 -->
      <ProductListPaging />
    </template>
    <template #footer>
      <v-btn v-if="radioModeStore!==null" large color="primary">선택완료</v-btn>
    </template>
  </DialogBasic>
</template>
<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  components: { DialogBasic},
  props: {
    
  },
  data: () => ({
    radioModeStore : null,
    storeList : [
      {
        name : '현대백화점 본점',
        distance : '1.53km',
        address : '서울특별시 강남구 압구정로 165',
        receipt_date : ['12월4일','12월5일','12월6일','12월7일'],
        date_select_open : false,
        map_open : false,
      },
      {
        name : '더현대 서울',
        distance : '1.53km',
        address : '서울특별시 영등포구 여의대로 108',
        receipt_date : ['12월12일','12월13일','12월14일','12월15일'],
        date_select_open : false,
        map_open : false,
      },
      {
        name : '현대백화점 대구점',
        distance : '1.53km',
        address : '서울특별시 강남구 도산대로 523',
        receipt_date : ['12월1일','12월2일','12월3일','12월4일'],
        date_select_open : false,
        map_open : false,
      },
      {
        name : '현대백화점 무역센터점',
        distance : '1.53km',
        address : '서울특별시 강남구 테헤란로 517',
        receipt_date : ['12월19일','12월20일','12월21일','12월22일'],
        date_select_open : false,
        map_open : false,
      },
      {
        name : '더현대 서울',
        distance : '1.53km',
        address : '서울특별시 영등포구 여의대로 108',
        receipt_date : ['12월8일','12월9일','12월10일','12월11일'],
        date_select_open : false,
        map_open : false,
      },
    ]
  }),
  mounted() {
    
  },
  methods: {
    closeDialog() {
      this.$emit('close')
    },
    accoReset(){
      const me = this
      for(let i=0;i<me.storeList.length;i++){
        me.storeList[i].date_select_open = false
      }      
    },
    openMap(index, event){
      const me = this
      me.storeList[index].map_open = !me.storeList[index].map_open
      if(me.storeList[index].map_open){
        setTimeout(() => {
          const parent = event.target.closest('.store-select-cnt')
          const body = event.target.closest('.popup-body')
          body.scroll({
            top: parent.offsetTop - 76,
            behavior: 'smooth',
          })
        })
      }
    }
  },
}
</script>

<style lang="scss" scoped></style>
