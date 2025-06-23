<template>
  <div class="contents contents-type2">
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'Customer Center'" :left-data="menuList" :active="'/en/en/CS/oneToOneList'" :pageClass="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="cs-board-detail onetoone-detail">
            <div class="cmp-page-tit">
              <h2 class="tit">1:1 Query</h2>
            </div>
            <div class="detail-header">
              <div class="cmp-sub-tit small">
                <h3 class="tit">
                  <div class="cmp-labels">
                    <div class="label black">ETC</div>
                    <div class="label">Received</div>
                  </div>
                  I’m inquiring about replacing the size.
                </h3>
                <p class="date">20 Apr. 2022</p>
              </div>
            </div>
            <div class="detail-body">
              <div class="btn-items text-right">
                <button type="button" class="btn">Modify</button>
                <button type="button" class="btn">Delete</button>
              </div>
              
              <!-- 질문 -->
              <div class="qa-box question pt-0">
                <div class="box-title">
                  <div class="cmp-info info-type2">
                    <p class="cmp-font fnt-20 bold">Q</p>
                  </div>
                </div>
                <div class="box-content">
                  The coat size is bigger than I thought. Exchange request for size M.
                  The coat size is bigger than I thought. Exchange request for size M.
                  I’m inquiring about replacing the size.
                  replacing the size.
                </div>
                <div class="items">
                  <div class="product-table-wrap">
                    <div class="order-number-box no-line">
                      <div class="line-box">
                        <p class="cmp-font fnt-14">Order No.<span class="ml-10">211222P12345678</span></p>
                        <p class="cmp-font fnt-14">18 Apr. 2022 13:00</p>
                      </div>
                    </div>
                    <div class="product-row-table">
                      <table>
                        <caption>상품리스트</caption>
                        <colgroup>
                          <col style="width:50%;"/>
                          <col style="width:50%;"/>
                        </colgroup>
                        <thead>
                          <tr>
                            <th>Product Information</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <template>
                            <tr v-for="(item, index) in prdData" :key="index">
                              <td>
                                <div class="product-row-unitInfo or-prd-type"><!-- [퍼블수정]23.01.19 상품이미지 : or-prd-type 클래스 추가 -->
                                  <div class="product-image" :class="{'sold-out':item.sold_out}">
                                    <v-img :src="item.image" :alt="item.product_name" />
                                    <div v-if="item.sold_out" class="sold-out-txt">SOLD OUT</div>
                                  </div>
                                  <div class="product-info-cnt">
                                    <div class="product-brand">{{item.brand_name}}</div>
                                    <div class="product-name">{{item.product_name}}</div>
                                    <div v-if="item.options" class="product-option">
                                      <span v-for="(item2,index2) in item.options" :key="index2" class="option">{{item2}}</span>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div class="product-row-unitPrice">
                                  <div class="product-sellprice">
                                    ￦<strong>{{item.sell_price | number}}</strong> 
                                    <template v-if="item.sell_price_en">
                                      ($<strong>{{item.sell_price_en | number}}</strong>)
                                    </template>
                                  </div>
                                  <div v-if="item.price || item.discount" class="product-price-cnt">
                                    <span class="product-price-origin">￦<del>{{item.price | number}}</del></span> 
                                    <span v-if="item.price_en" class="product-price-origin">($<del>{{item.price_en | number}}</del>)</span>
                                    <span class="product-discount">{{item.discount}}<em>%</em></span>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </template>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="product-table-wrap">
                    <div class="order-number-box no-line">
                      <div class="line-box">
                        <p class="cmp-font fnt-14">Order No.<span class="ml-10">211222P12345678</span></p>
                        <p class="cmp-font fnt-14">18 Apr. 2022 13:00</p>
                      </div>
                    </div>
                    <div class="product-row-table">
                      <table>
                        <caption>상품리스트</caption>
                        <colgroup>
                          <col style="width:50%;"/>
                          <col style="width:50%;"/>
                        </colgroup>
                        <thead>
                          <tr>
                            <th>Product Information</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <template>
                            <tr v-for="(item, index) in prdData" :key="index">
                              <td>
                                <div class="product-row-unitInfo or-prd-type"><!-- [퍼블수정]23.01.19 상품이미지 : or-prd-type 클래스 추가 -->
                                  <div class="product-image" :class="{'sold-out':item.sold_out}">
                                    <v-img :src="item.image" :alt="item.product_name" />
                                    <div v-if="item.sold_out" class="sold-out-txt">SOLD OUT</div>
                                  </div>
                                  <div class="product-info-cnt">
                                    <div class="product-brand">{{item.brand_name}}</div>
                                    <div class="product-name">{{item.product_name}}</div>
                                    <div v-if="item.options" class="product-option">
                                      <span v-for="(item2,index2) in item.options" :key="index2" class="option">{{item2}}</span>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div class="product-row-unitPrice">
                                  <div class="product-sellprice">
                                    ￦<strong>{{item.sell_price | number}}</strong> 
                                    <template v-if="item.sell_price_en">
                                      ($<strong>{{item.sell_price_en | number}}</strong>)
                                    </template>
                                  </div>
                                  <div v-if="item.price || item.discount" class="product-price-cnt">
                                    <span class="product-price-origin">￦<del>{{item.price | number}}</del></span> 
                                    <span v-if="item.price_en" class="product-price-origin">($<del>{{item.price_en | number}}</del>)</span>
                                    <span class="product-discount">{{item.discount}}<em>%</em></span>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr v-for="(item, index) in prdData" :key="index">
                              <td>
                                <div class="product-row-unitInfo or-prd-type"><!-- [퍼블수정]23.01.19 상품이미지 : or-prd-type 클래스 추가 -->
                                  <div class="product-image" :class="{'sold-out':item.sold_out}">
                                    <v-img :src="item.image" :alt="item.product_name" />
                                    <div v-if="item.sold_out" class="sold-out-txt">SOLD OUT</div>
                                  </div>
                                  <div class="product-info-cnt">
                                    <div class="product-brand">{{item.brand_name}}</div>
                                    <div class="product-name">{{item.product_name}}</div>
                                    <div v-if="item.options" class="product-option">
                                      <span v-for="(item2,index2) in item.options" :key="index2" class="option">{{item2}}</span>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div class="product-row-unitPrice">
                                  <div class="product-sellprice">
                                    ￦<strong>{{item.sell_price | number}}</strong> 
                                    <template v-if="item.sell_price_en">
                                      ($<strong>{{item.sell_price_en | number}}</strong>)
                                    </template>
                                  </div>
                                  <div v-if="item.price || item.discount" class="product-price-cnt">
                                    <span class="product-price-origin">￦<del>{{item.price | number}}</del></span> 
                                    <span v-if="item.price_en" class="product-price-origin">($<del>{{item.price_en | number}}</del>)</span>
                                    <span class="product-discount">{{item.discount}}<em>%</em></span>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </template>
                        </tbody>
                      </table>
                    </div>
                  </div>   
                  <div class="product-table-wrap">
                    <div class="product-row-table">
                      <table>
                        <caption>상품리스트</caption>
                        <colgroup>
                          <col style="width:50%;"/>
                          <col style="width:50%;"/>
                        </colgroup>
                        <thead>
                          <tr>
                            <th>Product Information</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <template>
                            <tr v-for="(item, index) in prdData" :key="index">
                              <td>
                                <div class="product-row-unitInfo or-prd-type"><!-- [퍼블수정]23.01.19 상품이미지 : or-prd-type 클래스 추가 -->
                                  <div class="product-image" :class="{'sold-out':item.sold_out}">
                                    <v-img :src="item.image" :alt="item.product_name" />
                                    <div v-if="item.sold_out" class="sold-out-txt">SOLD OUT</div>
                                  </div>
                                  <div class="product-info-cnt">
                                    <div class="product-brand">{{item.brand_name}}</div>
                                    <div class="product-name">{{item.product_name}}</div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div class="product-row-unitPrice">
                                  <div class="product-sellprice">
                                    ￦<strong>{{item.sell_price | number}}</strong> 
                                    <template v-if="item.sell_price_en">
                                      ($<strong>{{item.sell_price_en | number}}</strong>)
                                    </template>
                                  </div>
                                  <div v-if="item.price || item.discount" class="product-price-cnt">
                                    <span class="product-price-origin">￦<del>{{item.price | number}}</del></span> 
                                    <span v-if="item.price_en" class="product-price-origin">($<del>{{item.price_en | number}}</del>)</span>
                                    <span class="product-discount">{{item.discount}}<em>%</em></span>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </template>
                        </tbody>
                      </table>
                    </div>
                  </div>   
                </div>
                <ul class="attach-file-list mt-44">
                  <li v-for="(item, index) in attachFileList" :key="index" class="file-cnt" @click="showPopup">
                    <div class="file">
                      <v-img  :src="item" aspect-ratio="1" :transition="false" alt="첨부 파일"></v-img>
                    </div>
                  </li>
                </ul>  
              </div> 
              <!-- //질문 -->

              <!-- 답변 -->
              <div class="qa-box answer mt-20 mb-n24">
                <div class="box-title">
                  <div class="cmp-info info-type2">
                    <p class="cmp-font fnt-20 bold">A</p>
                  </div>
                </div>
                <div class="box-content">
                  Hello. sir This product can be exchanged for another size. If you send the product after returning it, we will send it to you in size M after checking it. If you send the product after returning it, we will send it to you in size M after checking it. This product can be exchanged for another size.
                  <p class="cmp-font fnt-14 mt-10">22 Apr. 2022</p>
                </div>
              </div>  
              <!-- //답변 -->               

            </div>
            <div class="detail-footer">
              <v-btn outlined large color="primary">List</v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="popup-img-detail" :class="{'show': popupToggle}">
      <div class="img-wrapper">
        <div class="img-inner">
          <ul class="img-list">
            <li v-for="(img, index) in attachFileList" :key="index">
              <img :src="img" alt="">
            </li>
          </ul>
          <button type="button" class="btn-close" @click="popupToggle = false">
            <img src="/images/cs/ico-32-close.png" alt="닫기">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'LayoutBasics',
  data: () => ({
    popupToggle: false,
    prdData: [
      // 택배 리스트
      {
        brand_name: 'FOURM MEN’S LOUNGE',
        product_name: 'Double Breasted Cropped Jacket',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
        options: ['CHARCOAL GRAY', '90', '1'],
        sell_price: '355000',
        sell_price_en: '343.07',
        discount: null,
        price: null,
        price_en: null,
        link: '#n',
        gift: false,
        sold_out: false,
        zzim : false,
      }
    ],
    attachFileList : [
      'https://img.thehandsome.com/md/publish/dummy/pc/temp.png',
      'https://img.thehandsome.com/md/publish/dummy/pc/temp.png',
      'https://img.thehandsome.com/md/publish/dummy/pc/temp.png',
      'https://img.thehandsome.com/md/publish/dummy/pc/temp.png',
      'https://img.thehandsome.com/md/publish/dummy/pc/temp.png',
    ],    
  }),
  created() {
    const me = this
    const json = require('~/static/json/cs_left_menu_en.json')
    me.menuList = json.list
  },
  methods: {
    showPopup() {
      this.popupToggle = true;
      window.scrollTo(0, 0);
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/cs.scss';
</style>
