<template>
  <DialogBasic
    class="popup-basic popup-product-search"
    header-title="Product Selection"
    :width="880"
    @hide="closeDialog"
  >
    <template #body>
      <div>
        <div class="cmp-tabs tabs-actionTop">
          <v-tabs v-model="tabs" fixed-tabs>
            <v-tab>My Ordered Product</v-tab>
            <v-tab>Wish List</v-tab>
            <v-tab>Product Search</v-tab>
          </v-tabs>
        </div>
        <div class="tab-content">
          <v-tabs-items v-model="tabs" touchless>

            <!-- My Ordered Product -->
            <v-tab-item :transition="false">

              <!-- 기간검색 -->
              <div class="sorting-wrap">
                <div class="cmp-tabs tab-wrapType column03">
                  <v-tabs fixed-tabs>
                    <v-tab>1 week</v-tab>
                    <v-tab>1 month</v-tab>
                    <v-tab>3 months</v-tab>
                  </v-tabs>
                </div>              
                <CommonCalendarBox  />
              </div>
              <!-- // 기간검색 -->



              <div class="order-item-wrap">
                <div v-for="(listItem, index) in orderPrdList" :key="index" class="order-item">
                  <div class="order-number-box no-line">
                      <p class="cmp-font fnt-14">Order No.<span class="ml-8">{{listItem.order_number}}</span><span class="ml-20">{{listItem.order_date}}</span></p>  
                  </div>
                  <div class="product-row-table">
                    <table>
                      <caption>상품리스트</caption>
                      <colgroup>
                        <col style="width:28px;"/>
                        <col style="width:auto;"/>
                        <col style="width:402px;"/>  
                      </colgroup>
                      <tbody>
                        <tr v-for="(prd, prdIdx) in listItem.list" :key="prdIdx">
                          <td class="td-checkbox pw-0">
                            <v-checkbox
                              v-model="prd.checked" :readonly="prd.readonly" label="상품 선택" 
                              class="cmp-form-checkbox label-hide"
                              @change="selectListCheck(prd)"
                            ></v-checkbox>
                          </td>
                          <td class="pw-0">
                            <nuxt-link :to="prd.link" class="product-row-unitInfo">
                              <div class="product-image" :class="{'sold-out':prd.sold_out}">
                                <v-img :src="prd.image" :alt="prd.product_name" />
                                <div v-if="prd.sold_out" class="sold-out-txt">SOLD OUT</div>
                              </div>
                              <div class="product-info-cnt">
                                <div class="product-brand">{{prd.brand_name}}</div>
                                <div class="product-name">{{prd.product_name}}</div>
                                <div v-if="prd.options" class="product-option">
                                  <span v-for="(option, optionIndex) in prd.options" :key="optionIndex" class="option">{{option}}</span>
                                </div>
                              </div>
                            </nuxt-link>
                          </td>
                          <td class="pw-16">
                            <nuxt-link :to="prd.link" class="product-row-unitPrice">
                              <span class="product-sellprice">
                                <span>￦</span><strong>{{prd.sell_price | number}}</strong>
                                (<span>$</span><strong>{{prd.sell_price_en | number}}</strong>)
                              </span>    
                              <div v-if="prd.price || prd.discount" class="product-price-cnt">
                                <del class="product-price-origin">{{prd.price | number}}원</del>
                                <span class="product-discount">{{prd.discount}}<em>%</em></span>
                              </div>
                            </nuxt-link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <ProductListPaging />


              <!-- 주문 내역 없을 경우 -->
              <!-- <CommonNoData v-else msg="There are no ordered products." class="mt-n20"></CommonNoData> -->
              <!-- // 주문 내역 없을 경우 -->
            </v-tab-item>
            <!-- //My Ordered Product -->

            <!-- Wish List -->
            <v-tab-item :transition="false">

              <!-- 기간검색 -->
              <div class="sorting-wrap">
                <div class="cmp-tabs tab-wrapType column03">
                  <v-tabs fixed-tabs>
                    <v-tab>1 week</v-tab>
                    <v-tab>1 month</v-tab>
                    <v-tab>3 months</v-tab>
                  </v-tabs>
                </div>              
                <CommonCalendarBox  />
              </div>
              <!-- // 기간검색 -->

              <!-- Wish List 있을 경우 -->
              <template v-if="wishList.length > 0">
                <div class="order-item-wrap">
                  <div v-for="(listItem, index) in wishList" :key="index" class="order-item">
                    <div class="product-row-table">
                      <table>
                        <caption>상품리스트</caption>
                        <colgroup>
                          <col style="width:28px;"/>
                          <col style="width:auto;"/>
                          <col style="width:402px;"/>
                        </colgroup>
                        <tbody>
                        <tr v-for="(prd, prdIdx) in listItem.list" :key="prdIdx">
                          <td class="td-checkbox pw-0">
                            <v-checkbox
                              v-model="prd.checked" :readonly="prd.readonly" label="상품 선택" 
                              class="cmp-form-checkbox label-hide"
                              @change="selectListCheck(prd)"
                            ></v-checkbox>
                          </td>
                          <td class="pw-0">
                            <nuxt-link :to="prd.link" class="product-row-unitInfo">
                              <div class="product-image" :class="{'sold-out':prd.sold_out}">
                                <v-img :src="prd.image" :alt="prd.product_name" />
                                <div v-if="prd.sold_out" class="sold-out-txt">SOLD OUT</div>
                              </div>
                              <div class="product-info-cnt">
                                <div class="product-brand">{{prd.brand_name}}</div>
                                <div class="product-name">{{prd.product_name}}</div>
                              </div>
                            </nuxt-link>
                          </td>
                          <td class="pw-16">
                            <nuxt-link :to="prd.link" class="product-row-unitPrice">
                              <span class="product-sellprice">
                                <span>￦</span><strong>{{prd.sell_price | number}}</strong>
                                (<span>$</span><strong>{{prd.sell_price_en | number}}</strong>)
                              </span>    
                              <div v-if="prd.price || prd.discount" class="product-price-cnt">
                                <del class="product-price-origin">{{prd.price | number}}원</del>
                                <span class="product-discount">{{prd.discount}}<em>%</em></span>
                              </div>
                            </nuxt-link>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <ProductListPaging />
              </template>
              <!-- //Wish List 있을 경우 -->
              <!-- Wish List 없을 경우 -->
              <CommonNoData v-else msg="There are no products in the wish list." class="mt-n20"></CommonNoData>
              <!-- //Wish List 없을 경우 -->
            </v-tab-item>
            <!-- //Wish List -->

            <!-- Product Search -->
            <v-tab-item :transition="false">
              <div class="cmp-form-searchBox mt-10">
                <v-text-field label="Please enter product, brand, product number." clearable class="cmp-form-input"></v-text-field>
                <v-btn icon>
                  <i class="cmp-icon i-search">검색</i>
                </v-btn>
              </div>
              <!-- 검색결과 있을 경우 -->
              <template v-if="prdList.length > 0">
                <p class="total-num">38 cases</p><!-- [퍼블수정]23.01.10 -->
                <div class="order-item-wrap">
                  <div v-for="(listItem, index) in prdList" :key="index" class="order-item">
                    <div class="product-row-table">
                      <table>
                        <caption>상품리스트</caption>
                        <colgroup>
                          <col style="width:28px;"/>
                          <col style="width:auto;"/>
                          <col style="width:402px;"/>
                        </colgroup>
                        <tbody>
                        <tr v-for="(prd, prdIdx) in listItem.list" :key="prdIdx">
                          <td class="td-checkbox pw-0">
                            <v-checkbox
                              v-model="prd.checked" :readonly="prd.readonly" label="상품 선택" 
                              class="cmp-form-checkbox label-hide"
                              @change="selectListCheck(prd)"
                            ></v-checkbox>
                          </td>
                          <td class="pw-0">
                            <nuxt-link :to="prd.link" class="product-row-unitInfo">
                              <div class="product-image" :class="{'sold-out':prd.sold_out}">
                                <v-img :src="prd.image" :alt="prd.product_name" />
                                <div v-if="prd.sold_out" class="sold-out-txt">SOLD OUT</div>
                              </div>
                              <div class="product-info-cnt">
                                <div class="product-brand">{{prd.brand_name}}</div>
                                <div class="product-name">{{prd.product_name}}</div>
                              </div>
                            </nuxt-link>
                          </td>
                          <td class="pw-16">
                            <nuxt-link :to="prd.link" class="product-row-unitPrice">
                              <span class="product-sellprice">
                                <span>￦</span><strong>{{prd.sell_price | number}}</strong>
                                (<span>$</span><strong>{{prd.sell_price_en | number}}</strong>)
                              </span>    
                              <div v-if="prd.price || prd.discount" class="product-price-cnt">
                                <del class="product-price-origin">{{prd.price | number}}원</del>
                                <span class="product-discount">{{prd.discount}}<em>%</em></span>
                              </div>
                            </nuxt-link>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <ProductListPaging />
              </template>
              <!-- // 검색결과 있을 경우 -->
              <!-- 검색결과 없을 경우 -->
              <CommonNoData v-else msg="No search results."></CommonNoData>
              <!-- // 검색결과 없을 경우 -->
            </v-tab-item>
            <!-- //Product Search -->

          </v-tabs-items>
        </div>
        <!-- 하단 선택상품, 버튼 영역 -->
        <div ref="bottomArea" class="bttom-btn-box">
          <div class="box-inner">
            <ul class="select-prd">
              <li v-for="(item, index) in limitCount" :key="index" :class="{'selected-img': selectPrdList[index]}">
                <template v-if="selectPrdList[index]" class="prd">
                  <v-img :src="selectPrdList[index].image" :alt="selectPrdList[index].brand_name" aspect-ratio="1"></v-img>
                  <v-btn icon @click="selectListRemove(index)">
                    <span v-cmp-icon="{ size: 12, name: 'close'}">상품 삭제</span>
                  </v-btn>
                </template>
                <template v-else>
                  <div class="on-img"></div>
                  <div class="off-img"></div>
                </template>
              </li>
            </ul>
            <p class="txt">A maximum of 5 products<br />can be selected.</p>
            <v-btn large color="primary" class="done">Selection Completed</v-btn>
          </div>
        </div>
        <!-- //하단 선택상품, 버튼 영역 -->
      </div>
    </template>
  </DialogBasic>
</template>
<script>
/*
 체크 해제 시!  checked false, 리스트 삭제
 리스트 삭제 버튼! 리스트 삭제, checked false 
*/
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'
export default {
  components: {
    DialogBasic,
  },
  data: () => ({
    tabs: 0, // 상품 탭
    selectPrdList: [], // 선택 상품
    limitCount: 5, // 선택 상품 최대 개수
    orderPrdList: [ // My Ordered Product
      {
        order_date: '07 Apr. 2022 15:32',
        order_number: '300129491868',
        order_link : '#n',
        list: [
          {
            image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
            brand_name: 'LANVIN COLLECTION',
            product_name: 'Double Breasted Cropped Jacket',
            product_id: 100,
            sell_price: '355000',
            sell_price_en : '199.83',
            discount: '',
            price: '',
            options : ["BLACK","90","1"],
            link: '#n',
            checked: false,
            readonly: false,
          },
        ],
      },
      {
        order_date: '07 Apr. 2022 15:32',
        order_number: '300129491868',
        order_link : '#n',
        list: [
          {
            image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img2.png',
            brand_name: 'LANVIN COLLECTION',
            product_name: 'Double Breasted Cropped Jacket',
            product_id: 102,
            sell_price: '355000',
            sell_price_en : '199.83',
            discount: '',
            price: '',
            options : ["BLACK","90","1"],
            link: '#n',
            checked: false,
            readonly: false,
          },
          {
            image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img3.png',
            brand_name: 'LANVIN COLLECTION',
            product_name: 'Double Breasted Cropped Jacket',
            product_id: 103,
            sell_price: '355000',
            sell_price_en : '199.83',
            discount: '',
            price: '',
            options : ["BLACK","90","1"],
            link: '#n',
            checked: false,
            readonly: false,
          },
          {
            image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img0.png',
            brand_name: 'LANVIN COLLECTION',
            product_name: 'Double Breasted Cropped Jacket',
            product_id: 104,
            sell_price: '355000',
            sell_price_en : '199.83',
            discount: '',
            price: '',
            options : ["BLACK","90","1"],
            link: '#n',
            checked: false,
            readonly: false,
          },
        ],
      },
    ],
    wishList: [ // Wish List
      {
        list: [
          {
            image: 'https://img.thehandsome.com/md/publish/dummy/pc/021.jpg',
            brand_name: 'LANVIN COLLECTION',
            product_name: 'Double Breasted Cropped Jacket',
            product_id: 105,
            sell_price: '355000',
            sell_price_en : '199.83',
            discount: '',
            price: '',
            options : ["BLACK","90","1"],
            link: '#n',
            checked: false,
            readonly: false,
          },
          {
            image: 'https://img.thehandsome.com/md/publish/dummy/pc/022.jpg',
            brand_name: 'LANVIN COLLECTION',
            product_name: 'Double Breasted Cropped Jacket',
            product_id: 106,
            sell_price: '355000',
            sell_price_en : '199.83',
            discount: '',
            price: '',
            options : ["BLACK","90","1"],
            link: '#n',
            checked: false,
            readonly: false,
          },
          {
            image: 'https://img.thehandsome.com/md/publish/dummy/pc/023.jpg',
            brand_name: 'LANVIN COLLECTION',
            product_name: 'Double Breasted Cropped Jacket',
            product_id: 107,
            sell_price: '355000',
            sell_price_en : '199.83',
            discount: '',
            price: '',
            options : ["BLACK","90","1"],
            link: '#n',
            checked: false,
            readonly: false,
          },
        ],
      }
    ],
    prdList: [ // Product Search
      {
        list: [
          {
            image: 'https://img.thehandsome.com/md/publish/dummy/pc/031.jpg',
            brand_name: 'LANVIN COLLECTION',
            product_name: 'Double Breasted Cropped Jacket',
            product_id: 105,
            sell_price: '355000',
            sell_price_en : '199.83',
            discount: '',
            price: '',
            options : ["BLACK","90","1"],
            link: '#n',
            checked: false,
            readonly: false,
          },
          {
            image: 'https://img.thehandsome.com/md/publish/dummy/pc/032.jpg',
            brand_name: 'LANVIN COLLECTION',
            product_name: 'Double Breasted Cropped Jacket',
            product_id: 106,
            sell_price: '355000',
            sell_price_en : '199.83',
            discount: '',
            price: '',
            options : ["BLACK","90","1"],
            link: '#n',
            checked: false,
            readonly: false,
          },
          {
            image: 'https://img.thehandsome.com/md/publish/dummy/pc/033.jpg',
            brand_name: 'LANVIN COLLECTION',
            product_name: 'Double Breasted Cropped Jacket',
            product_id: 107,
            sell_price: '355000',
            sell_price_en : '199.83',
            discount: '',
            price: '',
            options : ["BLACK","90","1"],
            link: '#n',
            checked: false,
            readonly: false,
          },
        ],
      }
    ],
  }),
  created(){
  },
  mounted(){

  },
  methods: {
    closeDialog(){ //
      this.$emit('close')
    },
    selectListCheck(productItem){

      // 체크박스 선택 (추가)
      if(productItem.checked) {

        if(this.selectPrdList.length >= this.limitCount) { // 개수 제한
          this.removeCheckbox(productItem);
          alert('A maximum of ' + this.limitCount + ' products can be selected.');
          return;
        }

        this.selectPrdList.push(productItem);

      // 체크박스 선택 (삭제)
      }else {
        this.selectPrdList.forEach((el, index) => {
          if(el.product_id === productItem.product_id) {
            this.selectPrdList.splice(index, 1)
          }
        })
      }
    },
    selectListRemove(index){ // 하단 엑스버튼 (삭제)
      this.removeCheckbox(this.selectPrdList[index]);
      this.selectPrdList.splice(index, 1)
    },
    removeCheckbox(productItem) {
      const categoryPrdList = [this.orderPrdList, this.wishList, this.prdList];
      for(let i=0; i<categoryPrdList.length; i++) {
        categoryPrdList[i].forEach(el => {
          el.list.forEach(prd => {
            if(prd.product_id === productItem.product_id) {
              setTimeout(() => {
                prd.checked = false;
              }, 10);
            }
          })
        })
      }
    }
  },
}
</script>

<style lang="scss" scoped></style>
