<template #body>
  <div class="contents pt-40"><!-- 레이아웃 설명 /ko/guide/Structure 참고 -->
    <div class="content-wrap content-ord-tool" style="padding-top:30px;">
      <v-btn small icon class="btn-close" @click="$emit('hide')">
        <i class="cmp-icon i-close">닫기</i>
      </v-btn>
      <!-- 상품 상단 영역 -->
      <div class="prd-detail-top">
        <!-- 상품상단 정보 -->
        <div class="detail-top-info">
          <div class="top-info-box">
            <!-- 상품 -->
            <dl class="prd-info align-center">
              <dt>상품</dt>
              <dd>
                <!--상품 SelectBox-->
                <div class="prd-select">
                  <div class="prd-select-top" :class="{'on' : prdSel}" @click="prdSelected('N')">
                    <div class="prd-select-img" :style="{ backgroundImage: 'url(' + prdTopData.images + ')' }"></div>
                    <div class="prd-select-info">
                        <div class="prd-select-tit">{{prdTopData.product_name}}</div>
                        <div class="prd-select-price">
                          <span class="prd-select-sell"><strong>{{prdTopData.sell_price}}</strong>원</span>
                          <span class="prd-select-origin">{{prdTopData.price}}원</span>
                          <span class="prd-select-discount">{{prdTopData.discount}}</span>
                        </div>
                    </div>
                  </div>
                  <ul class="prd-select-option">
                    <li v-for="(item, index) in prdSelData" :key="index" @click="prdSelected(index)">
                      <div class="prd-select-img" :style="{ backgroundImage: 'url(' + item.images + ')' }"></div>
                      <div class="prd-select-info">
                          <div class="prd-select-tit">{{item.product_name}}</div>
                          <div class="prd-select-price">
                            <span class="prd-select-sell"><strong>{{item.sell_price}}</strong>원</span>
                            <span class="prd-select-origin">{{item.price}}원</span>
                            <span class="prd-select-discount">{{item.discount}}</span>
                          </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <!--//상품 SelectBox-->
              </dd>
            </dl>
            <!-- //상품 -->
            <dl class="prd-info">
              <dt>컬러</dt>
              <!-- 컬러칩 -->  
              <dd class="color-table">
                <ul class="color-chip-box size-type3">
                  <template>
                    <li v-for="(item, index) in prdData_3" :key="index" class="chip">
                      <input 
                        :id="'colorChip_p_'+index" type="radio" 
                        :checked="prdSelectIdx===item.prd_idx"
                        :value="item.color_value" name="colorChip" 
                        @input="colorChipChange(item.prd_idx)" 
                      />
                      <label :for="'colorChip_p_'+index">
                        <span :style="{'background-image': 'url('+item.color_image+')'}">{{item.color_value}}</span>
                      </label>
                    </li>
                  </template>
                </ul>
                <span class="color-name">{{colorVar}}</span>
              </dd>
              <!-- //컬러칩 -->  
            </dl>
              <!-- 사이즈 -->
              <dl class="prd-info">
                <dt>&nbsp;</dt>
                <dd>
                  <v-layout row align-center justify-space-between>
                    <button class="cmp-font fnt-13 button">
                      <i class="cmp-icon cmp-icon-18 i-cleaning"></i>
                      사이즈 추천받기<!--<strong class="bold c-blue">L</strong>사이즈를 추천합니다--><i class="cmp-icon cmp-icon-12 i-next"></i>
                    </button>
                    <div>
                      <button class="cmp-font fnt-13 button"><span class="line">핏가이드</span></button>
                      <button class="cmp-font fnt-13 button ml-10"><span class="line">사이즈 조견표</span></button>
                    </div>
                  </v-layout>
                </dd>
              </dl>
              <dl class="prd-info mt-8 align-center">
                <dt>사이즈</dt>
                <dd>
                  <ProductOptionSelect :size-data="optionSizeData" @submit="sizeSelect"/>
                </dd>
              </dl>
              <!-- [퍼블수정]23.03.08 인기상품 문구 추가 -->
              <dl class="prd-info align-center popular-tooltip mt-8">
                <dt></dt>
                <dd>
                    <p class="cmp-font fnt-16">인기상품으로 전국 매장 수급 후 배송 예정</p>
                    <CommonTooltipBox cover-none :tooltip-list="['불량 등의 이유로 취소될 수 있음<br>(평일 기준 5일 이상 소요)']"/>
                </dd>
              </dl>
              <!-- //[퍼블수정]23.03.08 인기상품 문구 추가 -->
              <!-- [퍼블수정] 배송방식 추가 -->
              <dl class="prd-info align-center">
                <dt>배송방식</dt>
                <dd>
                  <div class="cmp-tabs tab-wrapType column03">
                    <v-tabs fixed-tabs>
                      <v-tab @click="storeVisit = false">택배</v-tab>
                      <v-tab @click="storeVisit = true">매장수령</v-tab>
                      <v-tab @click="storeVisit = false">퀵배송</v-tab>
                    </v-tabs>
                  </div>
                </dd>
              </dl>
              <dl v-if="storeVisit" class="prd-info mt-8 align-center">
                <dt></dt>
                <dd>
                  <div class="prd-address">
                    <div>
                      청담에비뉴 / 2월 15일 예약
                    </div>
                    <button class="cmp-font fnt-13 button"><span class="line">수령매장 변경</span></button>
                  </div>
                </dd>
              </dl>
              <ul class="prd-size-box" :style="{maxHeight: listMaxHeight}">
                <li v-for="(item, index) in prdSizeData" :key="index" >
                  <button class="btn-close cmp-icon i-close cmp-icon-18" @click="sizeSelectClose(index)">닫기</button>
                  <strong class="size-tit">{{item.name}}</strong>
                  <p class="size-info">{{item.color}}<em>{{item.size}}</em></p>
                  <div class="size-cout">
                    <ProductCountingBox max="10"></ProductCountingBox>
                    <span class="size-price"><strong>{{item.price}}</strong>원</span>
                  </div>
                </li>
              </ul>
            </div>

        </div>
        <!-- //상품상단 정보 -->
     
      </div>
      <!-- //상품 상단 영역 -->
      
    </div>
    <div class="ord-tool-layer">
      <dl class="ord-tool-info">
        <dt>총합계</dt>
        <dd><strong>556,500</strong>원</dd>
      </dl>
      <div class="ord-tool-btns">
        <v-btn height="60" color="primary">{{buttonText}}</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCountingBox from '~/components/common/ProductCountingBox'

export default {
  components: {
    ProductCountingBox
  },
  layout: 'LayoutBasics',
  props: {
    buttonText : {
      type : String,
      default : '바로구매'
    }
  },
  data: () => ({
    storeVisit: false,
    prdSelectIdx : 0, // 상단 상품 선택 index
    prdData_3 : [], // 상품(컬러칩) 5개 이상일때 대표3개
    colorVar : null, // 컬러칩 value
    prdSel : false, // select open or close
    prdTopData : null, // selected value
    listMaxHeight: '400px',
    prdSizeData : [],
    prdSelData : [
      {
        "product_name": "01) 플로럴 자수 칼라 프릴 탑",
        "sell_price": "355,000",
        "price": "284,000",
        "discount": "20%",
        "images": "https://img.thehandsome.com/md/publish/dummy/pc/bundle-prd-img0.png",
      },
      {
        "product_name": "02) 비딩 헴 크롭 데님 팬츠",
        "sell_price": "355,000",
        "price": "284,000",
        "discount": "20%",
        "images": "https://img.thehandsome.com/md/publish/dummy/pc/bundle-prd-img1.png",
      },
      {
        "product_name": "03) 브이넥 플리츠 드레스",
        "sell_price": "355,000",
        "price": "284,000",
        "discount": "20%",
        "images": "https://img.thehandsome.com/md/publish/dummy/pc/bundle-prd-img2.png"
      },
      {
        "product_name": "04) 브이넥 플리츠 드레스",
        "sell_price": "355,000",
        "price": "284,000",
        "discount": "20%",
        "images": "https://img.thehandsome.com/md/publish/dummy/pc/bundle-prd-img3.png",
      }
    ],
    optionSizeData : {
      select_idx : null,
      list : [
        {
          size_en : 'S',
          size_num : '82',
          state_msg : '소량재고',
          sold_out : false,
        },
        {
          size_en : 'M',
          size_num : '88',
          state_msg : '',
          sold_out : false,
        },
        {
          size_en : 'L',
          size_num : '94',
          state_msg : '',
          sold_out : false,
        },
        {
          size_en : 'XL',
          size_num : '100',
          state_msg : '재입고알림',
          sold_out : true,
        },
        {
          size_en : '2XL',
          size_num : '110',
          state_msg : '품절',
          sold_out : true,
        },
        {
          size_en : 'FREE',
          size_num : '',
          state_msg : '',
          sold_out : false,
        },
      ]
    },
  }),
  created() {
    const me = this
    // const json = require('~/static/json/detail_product_list.json')
    const json = require('~/static/json/detail_product_list2.json')
    me.prdData = json.list
    for(let i=0;i<me.prdData.length;i++){
      me.prdData[i].prd_idx = i;
      me.prdData_3[i] = me.prdData[i];
    }
    me.prdTopData = me.prdSelData[0];
  },
  mounted() {
  },
  methods: {
    closeDialog(){
      this.$emit('close')
    },
    setup(){
      const me = this
      me.colorVar = me.prdData[0].color_value

      setTimeout(() => {
        const height = window.innerHeight - document.querySelector('.ord-tool-layer').offsetHeight - document.querySelector('.prd-size-box').offsetTop - 70;
        me.listMaxHeight = height + 'px'
      }, 1000)
    },
    sizeSelect(val){
      const me = this
      const values = me.optionSizeData.list[val];
      // 동일 사이즈 존재시 패스
      let hasSize = false
      for(let i = 0; i<me.prdSizeData.length; i++){
        console.log(me.prdSizeData[i].size_en, values.size_en)
        if(me.prdSizeData[i].size_en === values.size_en){
          hasSize = true
          break
        }
      }
      if(hasSize){
        return
      }

      const sizeData = {
        name: '플로럴 자수 칼라 프릴 탑',
        size: values.size_en + ' ' + values.size_num,
        color: me.colorVar,
        price: '556,500',
        size_en: values.size_en // 동일 사이즈 판단 위해 추가
      }
      me.prdSizeData.unshift(sizeData)
    },
    sizeSelectClose(idx){
      const me = this
      me.prdSizeData.splice(idx, 1)
    },
    
    colorChipChange(idx, pushChip){ // 컬러칩 선택
      const me = this
      console.log(me)
      me.prdSelectIdx = idx
      me.colorVar = me.prdData[me.prdSelectIdx].color_value;
      if(pushChip){
        for(let i=0;i<3;i++){
          if(me.prdData_3[i].prd_idx === idx) return false
        }
        me.prdData_3.shift()
        me.prdData_3.unshift(me.prdData[idx])
      }
    },
    prdSelected(idx){
      const me = this
      
      if(!me.prdSel){
        me.prdSel = true;
      }else{
        me.prdSel = false;
      }
      
      if(idx !== 'N'){
        me.prdTopData = me.prdSelData[idx];
      }
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/detail.scss';
.v-navigation-drawer__content{overflow-y:hidden;}
.contents.pt-40{padding-top:40px;}
</style>
