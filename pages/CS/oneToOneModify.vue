<template>
  <div class="contents contents-type2">
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'고객센터'" :left-data="menuList" :active="'/ko/CS/oneToOneList'" :page-class="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="onetoone-modify">
            <div class="cmp-page-tit">
              <h2 class="tit">1:1 문의</h2>
            </div>
            <div class="cmp-sub-tit small mb-34">
              <h3 class="tit">더한섬닷컴 문의</h3>
              <nuxt-link class="cmp-font button fnt-16" to="#n">오프라인 매장 문의<i class="cmp-icon cmp-icon-16 i-next"></i></nuxt-link>
            </div>
            <v-form>
              <div class="cmp-form-boxGroup">
                <!-- 문의유형 -->    
                <div class="cmp-form-box required type-area">
                  <p class="form-tit">문의유형</p>
                  <v-layout align-center>
                    <CommonSelectBox id="selectId0" title="타이틀">
                      <template #optionList>
                        <option value="placeholder">대분류</option><!-- 220914 고객센터 수정 -->
                        <option value="option1">불만</option>
                        <option value="option2">옵션2</option>
                        <option value="option3">옵션3</option>
                        <option value="option4">옵션4</option>
                      </template>
                    </CommonSelectBox>
                    <CommonSelectBox id="selectId0" title="타이틀">
                      <template #optionList>
                        <option value="placeholder">소분류</option>
                        <option value="option1">매장 직원 불친절</option>
                        <option value="option2">옵션2</option>
                        <option value="option3">옵션3</option>
                        <option value="option4">옵션4</option>
                      </template>
                    </CommonSelectBox>
                  </v-layout>
                </div>
                <!-- //문의유형 -->
                <!-- 상담 상품/주문 선택 -->
                <div class="cmp-form-box">
                  <p class="form-tit">상담 상품/주문 선택</p>
                  <v-layout align-center class="search-product">
                    <v-btn outlined>상품검색</v-btn>
                    <p class="cmp-font fnt-14 ml-16">상담 상품/ 주문 선택 최대 5개까지 선택 가능</p>
                  </v-layout>
                  <div class="items pb-10">
                    <div class="product-table-wrap">
                      <div class="order-number-box no-line">
                        <div class="line-box">
                          <p class="cmp-font fnt-14">주문번호<span class="ml-8">211222P12345678</span></p>
                          <p class="cmp-font fnt-14">2021.12.22</p>
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
                              <th>상품정보</th>
                              <th>상품금액</th>
                              <th><span class="ir">삭제/찜</span></th>
                            </tr>
                          </thead>
                          <tbody>
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
                                  <div class="product-sellprice"><strong>{{item.sell_price | number}}</strong>원</div>
                                  <div v-if="item.price || item.discount" class="product-price-cnt">
                                    <del class="product-price-origin">{{item.price | number}}원</del>
                                    <!-- eslint-disable -->
                                    <span class="product-discount">{{item.discount}}<em>%</em></span>
                                    <!-- eslint-disable -->
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
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="product-table-wrap">
                      <div class="order-number-box no-line">
                        <div class="line-box">
                          <p class="cmp-font fnt-14">주문번호<span class="ml-8">211222P12345678</span></p>
                          <p class="cmp-font fnt-14">2021.12.22</p>
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
                              <th>상품정보</th>
                              <th>상품금액</th>
                              <th><span class="ir">삭제/찜</span></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(item, index) in prdData" :key="index + '1'"><!-- 220914 고객센터 수정 -->
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
                                      <span v-for="(item2,index2) in item.options" :key="index2 + '1'" class="option">{{item2}}</span><!-- 220914 고객센터 수정 -->
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div class="product-row-unitPrice">
                                  <div class="product-sellprice"><strong>{{item.sell_price | number}}</strong>원</div>
                                  <div v-if="item.price || item.discount" class="product-price-cnt">
                                    <del class="product-price-origin">{{item.price | number}}원</del>
                                    <!-- eslint-disable -->
                                    <span class="product-discount">{{item.discount}}<em>%</em></span>
                                    <!-- eslint-disable -->
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
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="product-table-wrap">
                      <div class="order-number-box no-line">
                        <div class="line-box">
                          <p class="cmp-font fnt-14">주문번호<span class="ml-8">211222P12345678</span></p>
                          <p class="cmp-font fnt-14">2021.12.22</p>
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
                              <th>상품정보</th>
                              <th>상품금액</th>
                              <th><span class="ir">삭제/찜</span></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(item, index) in prdData" :key="index + '2'"><!-- 220914 고객센터 수정 -->
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
                                      <span v-for="(item2,index2) in item.options" :key="index2 + '2'" class="option">{{item2}}</span><!-- 220914 고객센터 수정 -->
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div class="product-row-unitPrice">
                                  <div class="product-sellprice"><strong>{{item.sell_price | number}}</strong>원</div>
                                  <div v-if="item.price || item.discount" class="product-price-cnt">
                                    <del class="product-price-origin">{{item.price | number}}원</del>
                                    <!-- eslint-disable -->
                                    <span class="product-discount">{{item.discount}}<em>%</em></span>
                                    <!-- eslint-disable -->
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
                            <tr v-for="(item, index) in prdData" :key="index + '3'"><!-- 220914 고객센터 수정 -->
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
                                      <span v-for="(item2,index2) in item.options" :key="index2 + '3'" class="option">{{item2}}</span><!-- 220914 고객센터 수정 -->
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div class="product-row-unitPrice">
                                  <div class="product-sellprice"><strong>{{item.sell_price | number}}</strong>원</div>
                                  <div v-if="item.price || item.discount" class="product-price-cnt">
                                    <del class="product-price-origin">{{item.price | number}}원</del>
                                    <!-- eslint-disable -->
                                    <span class="product-discount">{{item.discount}}<em>%</em></span>
                                    <!-- eslint-disable -->
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
                          </tbody>
                        </table>
                      </div>
                    </div>   
                  </div>
                </div>
                <!-- //상담 상품/주문 선택 -->
                <!-- 문의내용 -->
                <div class="cmp-form-box required idea">
                  <p class="form-tit">문의내용</p>
                  <v-text-field outlined v-model="model3Title" type="text" label="제목을 입력해주세요" clearable class="cmp-form-input"></v-text-field>
                  <div class="cmp-form-textareaBox mt-10"><!-- 220914 고객센터 수정 -->
                    <v-textarea 
                      v-model="model3"
                      outlined 
                      :no-resize="true"
                      counter="1000" 
                      maxlength="1000" 
                      class="cmp-form-textarea counting"
                      :class="{'c-error':model3.length === 1000}"
                    >
                      <template #label><!--20221202 br처리-->
                        문의하실 상품의 상품명/제품코드/사이즈/컬러를 정확히 입력해주세요.<br><br>
                        주문하신 상품이라면 주문번호와 문의 하실 상품명/제품코드/사이즈/컬러와 함께 궁금하신 사항을 적어 주시면,<br>정확한 답변을 드리는데 도움이 됩니다.<br><br>
                        반품접수는 마이페이지 주문내역에서 “반품 신청” 버튼을 클릭하여 반품을 접수해주셔야 합니다.
                      </template>
                    </v-textarea>
                    <div class="count-txt" :class="{'c-error':model3.length === 1000}">{{model3.length | number}} / 1,000</div>
                  </div>
                  

                </div>
                <!-- //문의내용 -->
                <!-- 사진첨부 --><!-- [개발확인]22.12.21 -->
                <div class="attach-area mt-20">
                  <!-- 파일 첨부  : 이미지 있을 때 -->
                  <template v-if="attachFileList && attachFileList.length > 0">
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
                          <label for="fileUpload3">사진첨부</label>
                        </div>
                      </li>
                    </ul>
                    <p class="cmp-font fnt-14 mt-10">10MB 이하의 jpg, gif, png 파일 / 최대 5개 첨부가능</p>
                  </template>
                  <!-- 파일 첨부  : 이미지 있을 때 -->
                  <!-- 파일 첨부 : 이미지 없을 때 -->
                  <v-layout v-else align-center>
                    <div class="cmp-form-file"><!-- 이 안에 -->
                      <input id="fileUpload" type="file" accept="image/jpeg,image/gif,image/png" /><!-- id fileUpload 가 있어야 합니다. -->
                      <label for="fileUpload">사진첨부</label>
                    </div>
                    <p class="fmp-font fnt-14 ml-16">10MB 이하의 jpg, gif, png 파일 / 최대 5개 첨부가능</p>
                  </v-layout>
                  <!-- 파일 첨부 : 이미지 없을 때 -->
                </div>
                <!-- //사진첨부 --><!-- //[개발확인]22.12.21 -->
                <!-- SMS 알림받기 -->
                <div class="cmp-form-box idea">
                  <p class="form-tit">SMS 알림받기</p>
                  <div class="cmp-form-colBox">
                    <CommonSelectBox id="phoneSelect" title="앞자리 번호 선택">
                      <template #optionList>
                        <option value="010">010</option>
                        <option value="011">011</option>
                        <option value="017">017</option>
                        <option value="018">018</option>
                        <option value="019">019</option>
                      </template>
                    </CommonSelectBox>
                    <v-text-field type="text" outlined label="가운데 번호 입력" clearable class="cmp-form-input label-hide"></v-text-field>
                    <v-text-field type="text" outlined label="뒷자리 번호 입력" clearable class="cmp-form-input label-hide"></v-text-field>
                  </div>                
                  <v-checkbox label="카카오 알림톡/SMS 알림 동의" class="cmp-form-checkbox"></v-checkbox>
                </div>
                <!-- //SMS 알림받기 -->                        
                <!-- 이메일 답변받기 -->
                <!-- [241126] 개인정보수집/이용동의개선 -->
                <div class="cmp-form-box email-area"><!-- 220914 고객센터 수정 -->
                  <p class="form-tit">이메일 답변받기</p>
                  <div class="cmp-form-emailBox">
                    <div class="email-box">
                      <v-text-field label="이메일 입력" outlined clearable class="cmp-form-input label-hide"></v-text-field>
                      <div class="btw-txt">@</div>
                      <CommonSelectBox id="selectId5" title="도메인 선택" @submit="dominFieldSet">
                        <template #optionList>
                          <option value="placeholder">직접입력</option>
                          <option value="naver.com">naver.com</option>
                          <option value="gmail.com">gmail.com</option>
                          <option value="daum.net">daum.net</option>
                          <option value="kakao.com">kakao.com</option>
                          <option value="nate.com">nate.com</option>
                          <option value="outlook.com">outlook.com</option>
                          <option value="hotmail.com">hotmail.com</option>
                          <option value="direct">직접입력</option>
                        </template>
                      </CommonSelectBox>
                    </div>
                    <v-text-field v-if="domainDirectFieldShow" outlined label="이메일을 입력해 주세요." clearable class="cmp-form-input directly"></v-text-field>
                  </div>
                  <ul class="cmp-dotList mt-20">
                    <li>문의하신 내용에 대한 답변은 이메일 또는 마이페이지 > 1:1 문의 내역에서 확인하실 수 있습니다.</li>
                    <li>카카오톡 또는 SMS로 답변 완료 알림을 받아 보실 수 있습니다.</li>
                  </ul>                
                </div>
                <!-- //이메일 답변받기 -->     
                 
                <!-- [241126] 개인정보수집/이용동의개선 --> 
                <p class="cmp-font fnt-14 mt-24 pt-24 top-border">고객(정보주체)의 개인정보보호 및 권리는 「개인정보보호법」 및관계 법령에 따라 안전하게 관리하고 있습니다.<br />
                  자세한 사항은 <button class="cmp-font fnt-14 button"><span class="line">더한섬닷컴 개인정보처리방침</span></button>에서 확인할 수 있습니다.
                </p>

                <div class="cmp-form-box">
                  <v-layout justify-center class="cmp-btnsArea submit-area">
                    <v-btn large outlined color="primary">취소</v-btn>
                    <v-btn large color="primary">등록</v-btn>
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
        product_name: '[BEARBRICK] 사이키델릭 페이즐리',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
        options: ['CHARCOAL GRAY', '90', '1개'],
        sell_price: '355000',
        discount: null,
        price: null,
        link: '#n',
        gift: false,
        sold_out: false,
        zzim : false,
      }
    ],
    model3Title: '받아볼 주소 변경하고 싶어요',
    model3: '기숙사로 받아보고 싶은데 어떻게 하면 되나요? 주소 변경하여 받아볼 수 있을까요??기숙사로 받아보고 싶은데 어떻게 하면 되나요? 주소 변경하여 받아볼 수 있을까요? 기숙사로 받아보고 싶은데 어떻게 하면 되나요? 주소 변경하여 받아볼 수 있을까요? 기숙사로 받아보고 싶은데 어떻게 하면 되나요? 주소 변경하여 받아볼 수 있을까요? 기숙사로 받아보고 싶은데 어떻게 하면 되나요? 주소 변경하여 받아볼 수 있을까요? 기숙사로 받아보고 싶은데 어떻게 하면 되나요? 주소 변경하여 받아볼 수 있을까요? 기숙사로 받아보고 싶은데 어떻게 하면 되나요? 주소 변경하여 받아볼 수 있을까요? 기숙사로 받아보고 싶은데 어떻게 하면 되나요? 주소 변경하여 받아볼 수 있을까요? 기숙사로 받아보고 싶은데 어떻게 하면 되나요? 주소 변경하여 받아볼 수 있을까요? 기숙사로 받아보고 싶은데 어떻게 하면 되나요? 주소 변경하여 받아볼 수 있을까요? 기숙사로 받아보고 싶은데 어떻게 하면 되나요? 주소 변경하여 받아볼 수.기숙사로 받아보고 싶은데 어떻게 하면 되나요? 주소 변경하여 받아볼 수 있을까요? 기숙사로 받아보고 싶은데 어떻게 하면 되나요? 주소 변경하여 받아볼 수 있을까요? 기숙사로 받아보고 싶은데 어떻게 하면 되나요? 주소 변경하여 받아볼 수 있을까요? 기숙사로 받아보고 싶은데 어떻게 하면 되나요? 주소 변경하여 받아볼 수 있을까요? 기숙사로 받아보고 싶은데 어떻게 하면 되나요? 주소 변경하여 받아볼 수 있을까요? 기숙사로 받아보고 싶은데 어떻게 하면 되나요? 주소 변경하여 받아볼 수 있을까요? 기숙사로 받아보고 싶은데 어떻게 하면 되나요? 주소 변경하여 받아볼 수 있을까요? 기숙사로 받아보고 싶은데 어떻게 하면 되나요? 주소 변경하여 받아볼 수 있을까요? 기숙사로 받아보고 싶은데 어떻게 하면 되나요? 주소 변경하여 받아볼 수 있을까요? 기숙사로 받아보고 싶은데 어떻게 하면 되나요? 주소 변경하여 받아볼 수 있을까요? 기숙사로 받아보고 싶은데 어떻게 하면 되나요? 주소 변경하여 받아볼 수.',
    model3Rules: {
      length: (len) => (v) =>
        (v || '').length <= len || `최대 ${len}글자까지 입력 가능합니다.`,
    },
    attachFileList : [
      'https://img.thehandsome.com/md/publish/dummy/attach-file-img0.png',
      'https://img.thehandsome.com/md/publish/dummy/attach-file-img1.png',
    ],
    domainDirectFieldShow: false,
  }),
  created() {
    const me = this
    const json = require('~/static/json/cs_left_menu.json')
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
