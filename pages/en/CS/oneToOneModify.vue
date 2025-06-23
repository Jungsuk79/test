<template>
  <div class="contents contents-type2">
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'Customer Center'" :left-data="menuList" :active="'/en/en/CS/oneToOneList'" :pageClass="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="onetoone-modify">
            <div class="cmp-page-tit">
              <h2 class="tit">1:1 Query</h2>
            </div>
            <v-form>
              <div class="cmp-form-boxGroup">
                <!-- 문의유형 -->    
                <div class="cmp-form-box required type-area">
                  <p class="form-tit">Inquiry Classification</p>
                  <v-layout align-center>
                    <CommonSelectBox id="selectId0" title="타이틀">
                      <template #optionList>
                        <option value="placeholder">Classification</option>
                        <option value="option1">option</option>
                        <option value="option2">option</option>
                        <option value="option3">option</option>
                        <option value="option4">option</option>
                      </template>
                    </CommonSelectBox>
                  </v-layout>
                </div>
                <!-- //문의유형 -->
                <!-- 상담 상품/주문 선택 -->
                <div class="cmp-form-box">
                  <p class="form-tit">Product/order selection</p>
                  <v-layout align-center class="search-product">
                    <v-btn outlined>Product Search</v-btn>
                    <p class="cmp-font fnt-14 ml-16">Consulted product/order selection  You can select up to max. of 5.</p>
                  </v-layout>
                  <div class="items pb-10">
                    <div class="product-table-wrap">
                      <div class="order-number-box no-line">
                        <div class="line-box">
                          <p class="cmp-font fnt-14">Order No.<span class="ml-8">211222P12345678</span></p>
                          <p class="cmp-font fnt-14">18 Apr. 2022 13:00</p>
                        </div>
                      </div>
                      <div class="product-row-table">
                        <table>
                          <caption>상품리스트</caption>
                          <colgroup>
                            <col style="width:470px;"/>
                            <col style="width:auto;"/>
                            <col style="width:62px;"/> 
                          </colgroup>
                          <thead>
                            <tr>
                              <th>Product Information</th>
                              <th>Price</th>
                              <th><span class="ir">delete/like</span></th>
                            </tr>
                          </thead>
                          <tbody>
                            <template>
                              <tr v-for="(item, index) in prdData" :key="index">
                                <td class="pw-0">
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
                                <td class="pw-16">
                                  <div class="product-row-unitBtn">
                                    <v-btn icon>
                                      <span v-cmp-icon="{ size: 18, name: 'close'}">상품 삭제</span>
                                    </v-btn>
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
                          <p class="cmp-font fnt-14">Order No.<span class="ml-8">211222P12345678</span></p>
                          <p class="cmp-font fnt-14">18 Apr. 2022 13:00</p>
                        </div>
                      </div>
                      <div class="product-row-table">
                        <table>
                          <caption>상품리스트</caption>
                          <colgroup>
                            <col style="width:470px;"/>
                            <col style="width:auto;"/>
                            <col style="width:62px;"/>
                          </colgroup>
                          <thead>
                            <tr>
                              <th>Product Information</th>
                              <th>Price</th>
                              <th><span class="ir">삭제/찜</span></th>
                            </tr>
                          </thead>
                          <tbody>
                            <template>
                              <tr v-for="(item, index) in prdData" :key="index + '1'">
                                <td class="pw-0">
                                  <div class="product-row-unitInfo or-prd-type"><!-- [퍼블수정]23.01.19 상품이미지 : or-prd-type 클래스 추가 -->
                                    <div class="product-image" :class="{'sold-out':item.sold_out}">
                                      <v-img :src="item.image" :alt="item.product_name" />
                                      <div v-if="item.sold_out" class="sold-out-txt">SOLD OUT</div>
                                    </div>
                                    <div class="product-info-cnt">
                                      <div class="product-brand">{{item.brand_name}}</div>
                                      <div class="product-name">{{item.product_name}}</div>
                                      <div v-if="item.options" class="product-option">
                                        <span v-for="(item2,index2) in item.options" :key="index2 + '1'" class="option">{{item2}}</span>
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
                                <td class="pw-16">
                                  <div class="product-row-unitBtn">
                                    <v-btn icon>
                                      <span v-cmp-icon="{ size: 18, name: 'close'}">상품 삭제</span>
                                    </v-btn>
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
                          <p class="cmp-font fnt-14">Order No.<span class="ml-8">211222P12345678</span></p>
                          <p class="cmp-font fnt-14">18 Apr. 2022 13:00</p>
                        </div>
                      </div>
                      <div class="product-row-table">
                        <table>
                          <caption>상품리스트</caption>
                          <colgroup>
                            <col style="width:470px;"/>
                            <col style="width:auto;"/>
                            <col style="width:62px;"/> 
                          </colgroup>
                          <thead>
                            <tr>
                              <th>Product Information</th>
                              <th>Price</th>
                              <th><span class="ir">삭제/찜</span></th>
                            </tr>
                          </thead>
                          <tbody>
                            <template>
                              <tr v-for="(item, index) in prdData" :key="index + '2'">
                                <td class="pw-0">
                                  <div class="product-row-unitInfo or-prd-type"><!-- [퍼블수정]23.01.19 상품이미지 : or-prd-type 클래스 추가 -->
                                    <div class="product-image" :class="{'sold-out':item.sold_out}">
                                      <v-img :src="item.image" :alt="item.product_name" />
                                      <div v-if="item.sold_out" class="sold-out-txt">SOLD OUT</div>
                                    </div>
                                    <div class="product-info-cnt">
                                      <div class="product-brand">{{item.brand_name}}</div>
                                      <div class="product-name">{{item.product_name}}</div>
                                      <div v-if="item.options" class="product-option">
                                        <span v-for="(item2,index2) in item.options" :key="index2 + '2'" class="option">{{item2}}</span>
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
                                <td class="pw-16">
                                  <div class="product-row-unitBtn">
                                    <v-btn icon>
                                      <span v-cmp-icon="{ size: 18, name: 'close'}">상품 삭제</span>
                                    </v-btn>
                                  </div>
                                </td>                               
                              </tr>
                              <tr v-for="(item, index) in prdData" :key="index + '3'">
                                <td class="pw-0">
                                  <div class="product-row-unitInfo or-prd-type"><!-- [퍼블수정]23.01.19 상품이미지 : or-prd-type 클래스 추가 -->
                                    <div class="product-image" :class="{'sold-out':item.sold_out}">
                                      <v-img :src="item.image" :alt="item.product_name" />
                                      <div v-if="item.sold_out" class="sold-out-txt">SOLD OUT</div>
                                    </div>
                                    <div class="product-info-cnt">
                                      <div class="product-brand">{{item.brand_name}}</div>
                                      <div class="product-name">{{item.product_name}}</div>
                                      <div v-if="item.options" class="product-option">
                                        <span v-for="(item2,index2) in item.options" :key="index2 + '3'" class="option">{{item2}}</span>
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
                                <td class="pw-16">
                                  <div class="product-row-unitBtn">
                                    <v-btn icon>
                                      <span v-cmp-icon="{ size: 18, name: 'close'}">상품 삭제</span>
                                    </v-btn>
                                  </div>
                                </td>                               
                              </tr>
                            </template>
                          </tbody>
                        </table>
                      </div>
                    </div>   
                  </div>
                </div>
                <!-- //상담 상품/주문 선택 -->
                <!-- 문의내용 -->
                <div class="cmp-form-box required idea">
                  <p class="form-tit">Inquiry details</p>
                  <v-text-field outlined v-model="model3Title" type="text" label="Please enter the subject." clearable class="cmp-form-input"></v-text-field>
                  <div class="cmp-form-textareaBox mt-10">
                    <v-textarea 
                      v-model="model3" 
                      outlined 
                      :no-resize="true"
                      counter="1000" 
                      maxlength="1000" 
                      class="cmp-form-textarea counting"
                    >
                      <template #label>
                        <p class="mb-10">Please accurately enter the product name/product code/size/color of the product you wish to inquire about.</p>
                        <p class="mb-10">If it is an ordered product, it is helpful for us to give you an accurate reply if you can specify what you are curious about along with the order number and product name/product code/size, and color you wish to inquire about.</p>
                        <p>To apply for a return, you have to request a return by clicking “Request Return” in My Page Order Details.</p>
                      </template>
                    </v-textarea>
                    <div class="count-txt">{{model3.length | number}} / 1,000</div>
                  </div>
                </div>
                <!-- //문의내용 -->
                <!-- 사진첨부 -->
                <div class="attach-area mt-20">
                  <!-- 첨부버튼 -->
                  <v-layout v-if="attachFileList.length === 0" align-center>
                    <div class="cmp-form-file">
                      <input id="fileUpload" type="file" />
                      <label for="fileUpload">Attach Photo</label>
                    </div>
                    <p class="fmp-font fnt-14 ml-16">jpg, gif, png file under 10 MB / Max. 5 files can be attached</p>
                  </v-layout>
                  <!-- //첨부버튼 -->
                  <template v-else-if="attachFileList.length > 0">
                    <ul class="attach-file-list">
                      <li v-for="(item, index) in attachFileList" :key="index + '4'" class="file-cnt">
                        <div class="file">
                          <v-img  :src="item" aspect-ratio="1" :transition="false" alt="첨부 파일"></v-img>
                          <v-btn icon></v-btn>
                        </div>
                      </li>
                      <li v-if="attachFileList.length < 5" class="file-cnt">
                        <div class="cmp-form-fileIcon">
                          <input id="fileUpload3" type="file" />
                          <label for="fileUpload3">Attach Photo</label>
                        </div>
                      </li>
                    </ul>
                    <p class="cmp-font fnt-14 mt-10">jpg, gif, png file under 10 MB / Max. 5 files can be attached</p>
                  </template>
                </div>
                <!-- //사진첨부 -->                        
                <!-- 이메일 답변받기 -->
                <div class="cmp-form-box required email-area">
                  <p class="form-tit">Receive E-mail reply</p>
                  <div class="cmp-form-emailBox">
                    <div class="email-box">
                      <v-text-field label="이메일 입력" outlined clearable class="cmp-form-input label-hide"></v-text-field>
                      <div class="btw-txt">@</div>
                      <CommonSelectBox id="selectId5" title="Direct entry" @submit="dominFieldSet">
                        <template #optionList>
                          <option value="placeholder">Direct entry</option>
                          <option value="naver.com">naver.com</option>
                          <option value="gmail.com">gmail.com</option>
                          <option value="daum.net">daum.net</option>
                          <option value="kakao.com">kakao.com</option>
                          <option value="nate.com">nate.com</option>
                          <option value="outlook.com">outlook.com</option>
                          <option value="hotmail.com">hotmail.com</option>
                          <option value="direct">direct</option>
                        </template>
                      </CommonSelectBox>
                    </div>
                    <v-text-field v-if="domainDirectFieldShow" outlined label="이메일을 입력해 주세요." clearable class="cmp-form-input directly"></v-text-field>
                  </div>
                  <ul class="cmp-dotList mt-20">
                    <li>You can check the reply to your inquiry in your e-mail or at My Page > 1:1 Query details.</li>
                  </ul>                
                </div>
                <!-- //이메일 답변받기 -->       
                <div class="cmp-form-box">
                  <v-layout justify-center class="cmp-btnsArea submit-area">
                    <v-btn large outlined color="primary">Cancel</v-btn>
                    <v-btn large color="primary">Register</v-btn>
                  </v-layout>
                </div>

              </div>
            </v-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'LayoutBasics',
  data: () => ({
    prdData: [
      {
        brand_name: 'FOURM MEN’S LOUNGE',
        product_name: 'Double Breasted Cropped Jacket',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
        options: ['CHARCOAL GRAY', '90', '1'],
        sell_price: '355000',
        sell_price_en: '343.07',
        discount: null,
        price: null,
        link: '#n',
        gift: false,
        sold_out: false,
        zzim : false,
      }
    ],
    model3Title: '',
    model3: '',
    model3Rules: {
      length: (len) => (v) =>
        (v || '').length <= len || `최대 ${len}글자까지 입력 가능합니다.`,
    },
    attachFileList : [
      'https://img.thehandsome.com/md/publish/dummy/attach-file-img0.png',
      'https://img.thehandsome.com/md/publish/dummy/attach-file-img1.png',
      'https://img.thehandsome.com/md/publish/dummy/attach-file-img1.png',
    ],
    domainDirectFieldShow: false,
  }),
  created() {
    const me = this
    const json = require('~/static/json/cs_left_menu_en.json')
    me.menuList = json.list
  },  
  methods: {
    dominFieldSet(val) {
      if (val === 'direct') this.domainDirectFieldShow = true
      else this.domainDirectFieldShow = false
    },
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/cs.scss';
</style>
